import bcrypt from 'bcrypt';
import constants from '../constants/api.message.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { genericErrorMessage } = constants;

function hashPassword(req, res, next) {
  try {
    const hash = bcrypt.hashSync(req.password, 12);
    req.hash = hash;
    return next();
  } catch (error) {
    return res.status(500).json({ message: genericErrorMessage });
  }
}

function isLoggedIn(req, res, next) {
  try {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({
        message: 'You are not logged in!',
      });
    }
    const user = jwt.verify(token, process.env.SECRET);
    if (!user) {
      return res.status(401).json({
        message: 'You are not logged in!',
      });
    }

    return next();
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      message: genericErrorMessage,
    });
  }
}

export default {
  hashPassword,
  isLoggedIn,
};
