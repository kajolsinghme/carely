import api from "../lib/axios";

export const checkoutAppointment = (payload: {
  doctorId: string;
  scheduledAt: string;
  duration: string;
}) => {
  return api.post("/appointment/checkout", payload);
};
