export const appointmentReminderTemplate = (
  patientName: string,
  doctorName: string,
  time: string
) => `
  <div style="font-family: Arial;">
    <h2>⏰ Appointment Reminder</h2>
    <p>Hi <b>${patientName}</b>,</p>
    <p>This is a reminder for your appointment with <b>Dr. ${doctorName}</b>.</p>
    <p><b>Time:</b> ${time}</p>
    <p>Please join 5 minutes early.</p>
    <br />
    <p>— Carely Team</p>
  </div>
`;
