import { z } from 'zod';
import { DoctorSpecialization } from '../constants/doctor-specialization.js';
import { Gender } from '../constants/gender.enum.js';

export const doctorProfileSchema = z.object({
  body: z
    .object({
      profilePicture: z.string().url().optional(),

      name: z.string().min(2).max(100).optional(),

      age: z.number().min(18).max(90).optional(),

      gender: z.enum(Gender).optional(),

      specialization: z.enum(DoctorSpecialization),

      yearsOfExperience: z.number().min(0).max(80),

      consultationFee: z.number().min(0).max(5000),

      location: z.string().min(2).max(100).optional(),

      availability: z
        .array(
          z.object({
            day: z.enum([
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ]),
            startTime: z
              .string()
              .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"),
            endTime: z
              .string()
              .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"),
          })
        )
        .min(1, "At least one day availability is required"),

      slotDuration: z.number().refine(
        (v) => [10, 15, 20, 30, 45, 60].includes(v),
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
