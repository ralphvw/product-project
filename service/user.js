import { db } from '../db/db.js';
import userQueries from '../db/queries/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { createUser, checkForUsername } = userQueries;

class UserService {
  static async createUser(email, username, hash) {
    return db.oneOrNone(createUser, [email, username, hash]);
  }

  static async login(username, password) {
    const user = await db.oneOrNone(checkForUsername, [username]);
    if (!user) {
      return { status: 401, message: 'Invalid username or password' };
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return { status: 401, message: 'Invalid username or password' };
    }

    const { password, ...rest } = user;
    const token = jwt.sign(rest, process.env.SECRET);
    return {
      status: 200,
      message: 'You have logged in successfully',
      data: {
        user: rest,
        token,
      },
    };
  }
}

export default UserService;
