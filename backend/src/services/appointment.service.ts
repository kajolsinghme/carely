import { StatusCodes } from 'http-status-codes';
import AppError from '../errors/app-error.js';
import { AppointmentModel } from '../models/appointment.model.js';
import { AppointmentStatus } from '../constants/appointment-status.js';
import type { AppointmentInput } from '../types/appointment.types.js';
import { UserRoles } from '../constants/user-roles.js';
import Razorpay from 'razorpay';
import { DoctorProfileModel } from '../models/doctor-profile.model.js';
import { PaymentStatus } from '../constants/payment-status.js';

export const bookAppointmentService = async (
  userId: string,
  data: AppointmentInput
) => {
  const existingAppointment = await AppointmentModel.findOne({
    doctorId: data.doctorId,
    scheduledAt: data.scheduledAt,
    status: { $in: [AppointmentStatus.PENDING, AppointmentStatus.BOOKED] },
  });

  if (existingAppointment) {
    throw new AppError('This slot is already booked', StatusCodes.CONFLICT);
  }

  const appointment = await AppointmentModel.create({
    patientId: userId,
    doctorId: data.doctorId,
    scheduledAt: data.scheduledAt,
  });

  return appointment;
};

export const checkoutAppointmentService = async (
  userId: string,
  data: AppointmentInput
) => {
  const keyId = process.env['RAZORPAY_KEY_ID'];
  const keySecret = process.env['RAZORPAY_KEY_SECRET'];

  if (!keyId || !keySecret) {
    throw new AppError(
      'Razorpay environment variables are missing',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
  // Validate doctor exists
  const doctor = await DoctorProfileModel.findOne({ userId: data.doctorId })
  if (!doctor) throw new AppError('Doctor not found', StatusCodes.NOT_FOUND)

  // Check slot availability
  const slotTaken = await AppointmentModel.findOne({
    doctorId: data.doctorId,
    scheduledAt: data.scheduledAt,
    status: {
      $in: [AppointmentStatus.PENDING_PAYMENT, AppointmentStatus.CONFIRMED],
    },
  });
  if (slotTaken)
    throw new AppError('Slot already booked', StatusCodes.CONFLICT)

  // Calculate amount
  const amount = doctor.consultationFee + 100;

  // Create Razorpay order
  const order = await razorpay.orders.create({
    amount,
    currency: 'INR',
    receipt: `appt_${Date.now()}`
  })

  // Create Appointment(Pending_Payment)
  const appointment = await AppointmentModel.create({
    patientId: userId,
    doctorId: data.doctorId,
    scheduledAt: data.scheduledAt,
    duration: Number(data.duration),
    status: AppointmentStatus.PENDING_PAYMENT,
    payment: {
      orderId: order.id,
      amount,
      status: PaymentStatus.CREATED
    }
  })

  return {
    appointmentId: appointment._id,
    order: {
      orderId: order.id,
      amount,
      currency: 'INR'
    }
  }
};

export const getMyAppointmentsService = async (
  userId: string,
  role: UserRoles
) => {
  const filter =
    role === UserRoles.DOCTOR ? { doctorId: userId } : { patientId: userId };

  return AppointmentModel.find(filter)
    .populate('doctorId', 'name email')
    .populate('patientId', 'name email');
};
