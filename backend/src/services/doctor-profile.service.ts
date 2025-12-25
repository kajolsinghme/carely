import { StatusCodes } from 'http-status-codes';
import { DoctorProfileModel } from '../models/doctor-profile.model.js';
import AppError from '../errors/app-error.js';
import type { DoctorProfileInput } from '../types/doctor-profile.types.js';

export const updateDoctorProfileService = async (
  userId: string,
  data: DoctorProfileInput
) => {
  const doctorProfile = await DoctorProfileModel.findOneAndUpdate(
    { userId },
    {
      $set: {
        ...data,
      },
    },
    {
      new: true,
      upsert: true, // creates profile if not exists
    }
  );

  if (!doctorProfile) {
    throw new AppError('Doctor profile not found', StatusCodes.NOT_FOUND);
  }

  return doctorProfile;
};

export const getAllDoctorsService = async () => {
  return DoctorProfileModel.find().populate({
    path: 'userId',
    select: 'name email gender age',
  });
};

export const getDoctorByIdService = async (id: string) => {
  const doctor = await DoctorProfileModel.findOne({ userId: id }).populate({
    path: 'userId',
    select: 'name email gender age',
  });
  return doctor;
};
