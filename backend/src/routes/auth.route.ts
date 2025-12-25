import express, { Router } from 'express';
import validate from '../middleware/validate.middleware.js';
import { asyncHandler } from '../middleware/async-handler.js';
import { loginSchema, signupSchema } from '../validators/auth.schema.js';
import { login, signup } from '../controllers/auth.controller.js';
const router: Router = express.Router();

router.post('/signup', validate(signupSchema), asyncHandler(signup));
router.post('/login', validate(loginSchema), asyncHandler(login));

export default router;
 