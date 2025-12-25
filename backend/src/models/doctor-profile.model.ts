import mongoose, { Document } from 'mongoose';
import { DoctorSpecialization } from '../constants/doctor-specialization.js';

export interface IDoctorProfile extends Document {
  userId: mongoose.Types.ObjectId;
  profilePicture?: string;
  specialization: DoctorSpecialization;
  yearsOfExperience: number;
  consultationFee: number;
  location: string;
  availableSlots: string[];
}
const doctorProfileSchema = new mongoose.Schema<IDoctorProfile>(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      required: false,
      default: null,
    },
    specialization: {
      type: String,
      enum: Object.values(DoctorSpecialization),
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
      min: 0,
    },
    consultationFee: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      required: true,
    },
    availableSlots: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const DoctorProfileModel = mongoose.model<IDoctorProfile>(
  'DoctorProfile',
  doctorProfileSchema
);
