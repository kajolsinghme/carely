import mongoose, { Document } from 'mongoose';
import { AppointmentStatus } from '../constants/appointment-status.js';
import { UserRoles } from '../constants/user-roles.js';

export interface IAppointment extends Document {
  doctorId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  scheduledAt: Date;
  status: AppointmentStatus;
  meetingUrl?: string | null;
  cancelledBy?: UserRoles | null;
}

const appointmentSchema = new mongoose.Schema<IAppointment>(
  {
    doctorId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    scheduledAt: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(AppointmentStatus),
      default: AppointmentStatus.PENDING,
    },
    meetingUrl: {
      type: String,
      default: null,
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

export const AppointmentModel = mongoose.model<IAppointment>(
  'Appointment',
  appointmentSchema
);
