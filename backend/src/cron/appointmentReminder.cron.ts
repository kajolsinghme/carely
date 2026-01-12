import cron from 'node-cron';
import { AppointmentModel } from '../models/appointment.model.js';
import { AppointmentStatus } from '../constants/appointment-status.js';
import { sendMail } from '../services/email.service.js';
import { UserModel } from '../models/user.model.js';
import { appointmentReminderTemplate } from '../templates/appointmentReminder.template.js';

export const startAppointmentReminderCron = () => {
  cron.schedule('* * * * * ', async () => {
    const tenMinutesLater = new Date(Date.now() + 10 * 60 * 1000);

    const appointments = await AppointmentModel.find({
      scheduledAt: {
        $gte: new Date(tenMinutesLater.getTime() - 60 * 1000),
        $lte: tenMinutesLater,
      },
      status: AppointmentStatus.BOOKED,
    });

    for (const appointment of appointments) {
      const patientId = appointment.patientId;
      const doctorId = appointment.doctorId;
      const patientData = await UserModel.findById(patientId);
      const doctorData = await UserModel.findById(doctorId);
      await sendMail({
        to: patientData!.email!,
        subject: '⏰ Appointment Reminder',
        html: appointmentReminderTemplate(
          patientData!.name,
          doctorData!.name,
          appointment.scheduledAt.toLocaleString()
        ),
      });
    }
  });
};
