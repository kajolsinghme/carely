import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  getAllDoctorsService,
  getDoctorByIdService,
  updateDoctorProfileService,
} from '../services/doctor-profile.service.js';
import AppError from '../errors/app-error.js';
import type { IExtendedRequest } from '../types/express.js';

export const updateDoctorProfile = async (
  req: IExtendedRequest,
  res: Response
) => {
  const userId = req.user!.userId;

  const profile = await updateDoctorProfileService(userId, req.body);

  res
    .status(StatusCodes.OK)
    .json({ message: 'Doctor profile updated successfully', profile });
};

export const getAllDoctors = async (_req: Request, res: Response) => {
  const doctors = await getAllDoctorsService();
  res
    .status(StatusCodes.OK)
    .json({ message: 'Doctors retreived successfully', doctors });
};

export const getDoctorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const doctors = await getDoctorByIdService(id as string);
  if (!doctors) {
    throw new AppError('Doctor not found', StatusCodes.NOT_FOUND);
  }
  res
    .status(StatusCodes.OK)
    .json({ message: 'Doctor details fetched successfully', doctors });
};
