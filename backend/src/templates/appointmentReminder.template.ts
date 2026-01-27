export const appointmentReminderTemplate = (
  patientName: string,
  doctorName: string,
  time: string
) => {
  // Convert ISO string to Date
  const dateObj = new Date(time);

  // Format date nicely: "13 January 2026, 2:15 AM"
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata', // IST
  };
  const formattedTime = dateObj.toLocaleString('en-GB', options);

  return `
  <div style="
    font-family: Arial, sans-serif; 
    color: #333; 
    line-height: 1.6; 
    max-width: 600px; 
    margin: auto; 
    padding: 25px; 
    border-radius: 12px;
    background-color: #f5f7fa;
    border: 1px solid #e0e0e0;
  ">
    <div style="text-align: center; margin-bottom: 20px;">
      <span style="font-size: 32px;">⏰</span>
      <h1 style="
        font-size: 22px; 
        color: #007BFF; 
        margin: 10px 0 0 0;
        font-weight: normal;
      ">Appointment Reminder</h1>
    </div>
    
    <p style="font-size: 17px;">Hi <strong>${patientName}</strong>,</p>
    
    <p style="font-size: 16px;">
      This is a friendly reminder for your upcoming appointment with 
      <strong>${doctorName}</strong>.
    </p>
    
    <p style="font-size: 17px; margin: 15px 0; padding: 10px; background-color: #e7f1ff; border-left: 4px solid #007BFF;">
      <strong>Time:</strong> ${formattedTime}
    </p>
    
    <p style="font-size: 16px;">
      Please join <strong>5 minutes early</strong> to ensure everything goes smoothly.
    </p>
    
    <hr style="border: none; border-top: 1px solid #ccc; margin: 25px 0;" />
    
    <p style="text-align: center; color: #777; font-size: 14px;">— The Carely Team</p>
  </div>
  `;
};
