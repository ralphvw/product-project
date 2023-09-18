import express from 'express';
import UserController from '../controller/user';
import AuthMiddleWare from '../middleware/auth.middleware';
import ValidationMiddleware from '../middleware/validation.middleware';

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
