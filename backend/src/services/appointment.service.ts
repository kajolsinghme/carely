import { StatusCodes } from "http-status-codes";
import AppError from "../errors/app-error.js";
import { AppointmentModel } from "../models/appointment.model.js"
import { AppointmentStatus } from "../constants/appointment-status.js";
import type { AppointmentInput } from "../types/appointment.types.js";
import { UserRoles } from "../constants/user-roles.js";

export const bookAppointmentService = async(userId: string, data: AppointmentInput) => {

    const existingAppointment = await AppointmentModel.findOne({doctorId: data.doctorId, scheduledAt: data.scheduledAt, status: AppointmentStatus.BOOKED })
    if(existingAppointment){
        throw new AppError("This slot is already booked", StatusCodes.CONFLICT)
    }
    const appointment = await AppointmentModel.create({
        patientId: userId,
        doctorId: data.doctorId,
        scheduledAt: data.scheduledAt,
    });

    return appointment
}

export const getMyAppointmentsService = async( userId: string,
  role: UserRoles) => {
    const filter = role===UserRoles.DOCTOR ? {doctorId: userId}: {patientId: userId}

    return AppointmentModel.find(filter)
    .populate('doctorId', 'name email')
    .populate('patientId', 'name email')
}   