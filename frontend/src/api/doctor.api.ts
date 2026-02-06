import api from "../lib/axios";

export const fetchDoctorProfileApi = async () => {
  const userId = localStorage.getItem("userId");
  // console.log("userId",userId)
  const res = await api.get(`/doctor/${userId}`);
  return res.data;
};

export const updateDoctorProfileApi = async (data: {
  name: string;
  age: string | number;
  gender: string;
  specialization: string;
  yearsOfExperience: number;
  consultationFee: number;
  location: string;
  availability: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  slotDuration: number;
}) => {
  const res = await api.patch("/doctor/profile", data);
  return res.data;
};
