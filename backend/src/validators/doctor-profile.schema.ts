import { z } from 'zod';
import { DoctorSpecialization } from '../constants/doctor-specialization.js';
import { Gender } from '../constants/gender.enum.js';
import { WeekDay } from '../constants/week-day.js';
export const doctorProfileSchema = z.object({
  body: z
    .object({
      profilePicture: z.url().optional(),
      name: z.string().min(4).max(100),
age: z.coerce.number().min(10).max(90),
      gender: z.enum(Gender),
      location: z.string().min(2).max(100),

      specialization: z.enum(DoctorSpecialization),
      yearsOfExperience: z.number().min(0).max(80),
      consultationFee: z.number().min(0).max(5000),

      availability: z
        .array(
          z.object({
            day: z.enum(WeekDay),
            startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
            endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
          })
        )
        .min(1, "At least one day availability is required")
        .refine(
          (days) =>
            new Set(days.map((d) => d.day)).size === days.length,
          "Duplicate days are not allowed"
        )
        .refine(
          (days) =>
            days.every((d) => d.startTime < d.endTime),
          "End time must be after start time"
        ),

      slotDuration: z.number().refine(
        (v) => [15, 30, 45, 60].includes(v),
        "Invalid slot duration"
      ),
    })
    .strict(),

  query: z.object({}).strict(),
  params: z.object({}).strict(),
});


export const listDoctorsSchema = z.object({
  body: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
  query: z
    .object({
      specialization: z.string().optional(),
      location: z.string().optional(),
      minExperience: z.coerce.number().min(0).optional(),
      maxFee: z.coerce.number().min(0).optional(),
    })
    .strict(),
});
