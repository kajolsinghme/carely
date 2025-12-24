import express, { Router } from 'express';
import authRouter from './auth.route.js';
const router: Router = express.Router();

router.use('/auth', authRouter);

export default router;
