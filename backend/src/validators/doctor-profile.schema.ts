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


export const listDoctorsSchema = z.object({
  body: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
  query: z.object({
    specialization: z.string().optional(),
    location: z.string().optional(),
    minExperience: z.coerce.number().min(0).optional(),
    maxFee: z.coerce.number().min(0).optional(),
  }).strict()
})