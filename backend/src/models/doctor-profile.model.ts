import mongoose, { Document } from 'mongoose';
import { DoctorSpecialization } from '../constants/doctor-specialization.js';
import type { WeekDay } from '../constants/week-day.js';

export interface IAvailability {
  day: WeekDay;
  startTime: string;
  endTime: string;
}

export interface IDoctorProfile extends Document {
  userId: mongoose.Types.ObjectId;
  profilePicture?: string;
  specialization: DoctorSpecialization;
  yearsOfExperience: number;
  consultationFee: number;
  location: string;
  availability: IAvailability[];
  slotDuration: number;
}

const availabilitySchema = new mongoose.Schema<IAvailability>({
  day: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

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
    availability: {
      type: [availabilitySchema],
      required: true,
    },
    slotDuration: {
      type: Number,
      required: true,
      min: 5,
    },
  },
  { timestamps: true }
);

export const DoctorProfileModel = mongoose.model<IDoctorProfile>(
  'DoctorProfile',
  doctorProfileSchema
);
