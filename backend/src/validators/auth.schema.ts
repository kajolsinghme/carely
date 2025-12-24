import { z } from "zod";

export const signupSchema = z.object({
  body: z
    .object({
      name: z.string().min(2).max(50),
      email: z.email().max(50),
      password: z.string().min(4, "Password must be at least 4 characters long").max(50, "Password cannot exceed 50 characters"),
      age: z.number().min(5).max(100).nullable().optional(),
      gender: z.enum(["Male", "Female"]).nullable().optional(),
      role: z.enum(["Doctor", "Patient"]).optional()
    })
    .strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict(),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email().max(50, "Email cannot exceed 50 characters"),
    password: z.string().min(4, "Password must be at least 4 characters long").max(50, "Password cannot exceed 50 characters")
  }).strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict()
})