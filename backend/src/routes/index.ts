import express, { Router } from 'express';
import authRouter from './auth.route.js';
import doctorProfileRouter from './doctor-profile.route.js';
const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/doctor', doctorProfileRouter);

export default router;
