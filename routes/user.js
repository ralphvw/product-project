import express from 'express';
import UserController from '../controller/user.js';
import AuthMiddleWare from '../middleware/auth.middleware.js';
import ValidationMiddleware from '../middleware/validation.middleware.js';

const { createUser } = UserController;
const { checkIfUserNameExists, validateUserInput } = ValidationMiddleware;
const { hashPassword } = AuthMiddleWare;
const router = express.Router();

router.post(
  '/',
  validateUserInput,
  checkIfUserNameExists,
  hashPassword,
  createUser
);

export default router;
