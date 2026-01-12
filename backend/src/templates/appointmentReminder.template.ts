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
    line-height: 1.5; 
    max-width: 600px; 
    margin: auto; 
    padding: 20px; 
    border: 1px solid #e0e0e0; 
    border-radius: 8px;
    background-color: #f9f9f9;
  ">
    <p>Hi <strong>${patientName}</strong>,</p>
    
    <p>This is a friendly reminder for your upcoming appointment with <strong>Dr. ${doctorName}</strong>.</p>
    
    <p style="font-size: 16px;">
      <strong>Time:</strong> ${formattedTime}
    </p>
    
    <p>Please join <strong>5 minutes early</strong> to ensure everything goes smoothly.</p>
    
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
    
    <p style="text-align: center; color: #555;">— The Carely Team</p>
  </div>
  `;
};
