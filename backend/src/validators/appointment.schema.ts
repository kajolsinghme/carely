import z from 'zod';

export const createAppointmentSchema = z.object({
  body: z
    .object({
      doctorId: z.string().min(1, 'Doctor ID is required'),
      scheduledAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      }),
    })
    .strict(),
  params: z.object({}),
  query: z.object({}),
});

export const checkoutAppointmentSchema = z.object({
  body: z
    .object({
      doctorId: z.string().min(1, 'Doctor ID is required'),
      scheduledAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      }),
      duration: z.number().min(15).max(120)
    })
    .strict(),
  params: z.object({}),
  query: z.object({}),
});
