import express, { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { asyncHandler } from '../middleware/async-handler.js';
import {
  getAllDoctors,
  getDoctorById,
  updateDoctorProfile,
} from '../controllers/doctor-profile.controller.js';
import validate from '../middleware/validate.middleware.js';
import {
  doctorProfileSchema,
  listDoctorsSchema,
} from '../validators/doctor-profile.schema.js';
import { allowRoles } from '../middleware/role.middleware.js';
import { UserRoles } from '../constants/user-roles.js';

const router: Router = express.Router();

router.get(
  '/',
  authMiddleware,
  allowRoles([UserRoles.DOCTOR, UserRoles.PATIENT]),
  validate(listDoctorsSchema),
  asyncHandler(getAllDoctors)
);
router.get(
  '/:id',
  authMiddleware,
  allowRoles([UserRoles.DOCTOR, UserRoles.PATIENT]),
  asyncHandler(getDoctorById)
);
router.patch(
  '/profile',
  authMiddleware,
  allowRoles([UserRoles.DOCTOR]),
  validate(doctorProfileSchema),
  asyncHandler(updateDoctorProfile)
);

export default router;
