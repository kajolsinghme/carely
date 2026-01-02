import { StatusCodes } from 'http-status-codes';
import type { IExtendedRequest } from '../types/express.js';
import type { Response } from 'express';
import {
  bookAppointmentService,
  getMyAppointmentsService,
} from '../services/appointment.service.js';

export const bookAppointment = async (req: IExtendedRequest, res: Response) => {
  const userId = req.user!.userId;

  const appointment = await bookAppointmentService(userId, req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ message: 'Appointment booked successfully', appointment });
};

export const getMyAppointments = async (
  req: IExtendedRequest,
  res: Response
) => {
  const { userId, role } = req.user!;

  const appointments = await getMyAppointmentsService(userId, role);

  res
    .status(StatusCodes.OK)
    .json({ message: 'Appointment fetched successfully', appointments });
};
