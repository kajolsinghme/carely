import { DoctorSpecialization } from "../constants/doctor-specialization.js";
import { Gender } from "../constants/gender.enum.js";
import type { WeekDay } from "../constants/week-day.js";
export interface DoctorProfileInput {
  // USER fields
  name: string;
  age: number;
  gender: Gender;

  // DOCTOR profile fields
  profilePicture?: string;
  specialization: DoctorSpecialization;
  yearsOfExperience: number;
  consultationFee: number;
  location: string;

  availability: {
    day: WeekDay;
    startTime: string;
    endTime: string;
  }[];

  slotDuration: number;
}
