import { StatusCodes } from 'http-status-codes';
import { DoctorProfileModel } from '../models/doctor-profile.model.js';
import AppError from '../errors/app-error.js';
import type { DoctorProfileInput } from '../types/doctor-profile.types.js';
import { UserModel } from '../models/user.model.js';

export const updateDoctorProfileService = async (
  userId: string,
  data: DoctorProfileInput
) => {

  const {
    name,
    age,
    gender,
    location,
    specialization,
    yearsOfExperience,
    consultationFee,
    availability,
    slotDuration,
    profilePicture,
  } = data;

  await UserModel.findByIdAndUpdate(userId,{$set: {name, age, gender, isProfileCompleted: true}},{new: true})

  const doctorProfile = await DoctorProfileModel.findOneAndUpdate(
    { userId },
    { $set: {specialization,location,yearsOfExperience,consultationFee,availability,slotDuration,profilePicture} },
    { new: true, upsert: true }
  );

   if (!doctorProfile) {
    throw new AppError("Doctor profile update failed", StatusCodes.INTERNAL_SERVER_ERROR);
  }

  return doctorProfile;
};

export const getAllDoctorsService = async (filters: {
  specialization?: string;
  location?: string;
  minExperience?: number;
  maxFee?: number;
}) => {
  const query: {
    specialization?: string;
    location?: string;
    yearsOfExperience?: { $gte?: number };
    consultationFee?: { $lte?: number };
  } = {};

  if (filters.specialization) query.specialization = filters.specialization;
  if (filters.location) query.location = filters.location;
  if (filters.minExperience)
    query.yearsOfExperience = { $gte: filters.minExperience };
  if (filters.maxFee) query.consultationFee = { $lte: filters.maxFee };

  return DoctorProfileModel.find(query).populate({
    path: 'userId',
    select: 'name email gender age',
  });
};

export const getDoctorByIdService = async (id: string) => {

  const user = await UserModel.findById(id).select(
    'name email gender age isProfileCompleted role'
  );

  if(!user) return null;

  let doctorProfile = null;

  if(user.isProfileCompleted){
      doctorProfile = await DoctorProfileModel.findOne({userId: user._id})
  }

  return { user, doctorProfile };
};
