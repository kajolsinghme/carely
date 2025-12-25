import { z } from 'zod';
import { DoctorSpecialization } from '../constants/doctor-specialization.js';

export const doctorProfileSchema = z.object({
  body: z
    .object({
      profilePicture: z.url().optional(),
      specialization: z.enum(DoctorSpecialization),
      yearsOfExperience: z.number().min(0).max(80),
      consultationFee: z.number().min(0).max(5000),
      location: z.string().min(2).max(100),
      availableSlots: z.array(z.string()).min(1),
    })
    .strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict(),
});
