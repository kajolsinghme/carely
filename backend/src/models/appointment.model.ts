import mongoose, { Document } from 'mongoose';
import { AppointmentStatus } from '../constants/appointment-status.js';
import { UserRoles } from '../constants/user-roles.js';
import { PaymentStatus } from '../constants/payment-status.js';

export interface IAppointment extends Document {
  doctorId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  scheduledAt: Date;
  duration: number;
  status: AppointmentStatus;
  payment: {
    orderId?: string;
    paymentId?: string;
    amount?: number;
    status?: PaymentStatus;
  };
  meeting: {
    meetingId?: string;
    meetingUrl?: string;
  };
  cancelledBy?: UserRoles | null;
}

const appointmentSchema = new mongoose.Schema<IAppointment>(
  {
    doctorId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    patientId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    scheduledAt: {
      type: Date,
      required: true,
      index: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 5,
    },
    status: {
      type: String,
      enum: Object.values(AppointmentStatus),
      default: AppointmentStatus.PENDING_PAYMENT,
      index: true,
    },
    payment: {
      orderId: {
        type: String,
      },
      paymentId: {
        type: String,
      },
      amount: {
        type: Number,
      },
      status: {
        type: String,
        enum: Object.values(PaymentStatus),
      },
    },
    meeting: {
      meetingId: {
        type: String,
      },
      meetingUrl: {
        type: String,
      },
    },
    cancelledBy: {
      type: String,
      enum: Object.values(UserRoles),
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.index({ doctorId: 1, scheduledAt: 1 }, { unique: true });
export const AppointmentModel = mongoose.model<IAppointment>(
  'Appointment',
  appointmentSchema
);
