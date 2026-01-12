import { StatusCodes } from 'http-status-codes';
import type { IExtendedRequest } from '../types/express.js';
import type { Response } from 'express';
import {
  checkoutAppointmentService,
  confirmAppointmentService,
  getMyAppointmentsService,
} from '../services/appointment.service.js';

export const checkoutAppointment = async(req: IExtendedRequest, res: Response) => {
  const userId = req.user!.userId

  const appointment = await checkoutAppointmentService(userId, req.body)

  res.status(StatusCodes.CREATED).json({message:'Appointment checkout initiated', appointment})
}

export const confirmAppointment = async(req: IExtendedRequest, res: Response) => {
  const appointmentId = req.params['id']!

  const {razorpayPaymentId} = req.body
  const appointment = await confirmAppointmentService(appointmentId, razorpayPaymentId)
  
  res.status(StatusCodes.OK).json({
    message: 'Appointment booked successfully',
    appointment,
  });

}
 
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
