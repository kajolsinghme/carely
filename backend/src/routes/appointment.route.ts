import express, { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { asyncHandler } from '../middleware/async-handler.js';
import { allowRoles } from '../middleware/role.middleware.js';
import { UserRoles } from '../constants/user-roles.js';
import validate from '../middleware/validate.middleware.js';

import {
  bookAppointment,
  checkoutAppointment,
  getMyAppointments,
  //   getAppointmentById,
  //   updateAppointment,
} from '../controllers/appointment.controller.js';

import {
  checkoutAppointmentSchema,
  createAppointmentSchema,
  //   updateAppointmentSchema,
} from '../validators/appointment.schema.js';

const router: Router = express.Router();

router.post(
  '/',
  authMiddleware,
  allowRoles([UserRoles.PATIENT]),
  validate(createAppointmentSchema),
  asyncHandler(bookAppointment)
);

router.post(
  '/checkout',
  authMiddleware,
  allowRoles([UserRoles.PATIENT]),
  validate(checkoutAppointmentSchema),
  asyncHandler(checkoutAppointment)
);



router.get(
  '/',
  authMiddleware,
  allowRoles([UserRoles.DOCTOR, UserRoles.PATIENT]),
  asyncHandler(getMyAppointments)
);

// router.get(
//   '/:id',
//   authMiddleware,
//   allowRoles([UserRoles.DOCTOR, UserRoles.PATIENT]),
//   asyncHandler(getAppointmentById)
// );

// router.patch(
//   '/:id',
//   authMiddleware,
//   allowRoles([UserRoles.DOCTOR, UserRoles.PATIENT]),
//   validate(updateAppointmentSchema),
//   asyncHandler(updateAppointment)
// );

export default router;
