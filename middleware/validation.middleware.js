import constants from '../constants/api.message.js';
import { db } from '../db/db.js';
import userQueries from '../db/queries/user.js';

const { genericErrorMessage, invalidInput, userAlreadyExists } = constants;
const { checkForUsername } = userQueries;

function validateUserInput(req, res, next) {
  try {
    const { email, username, password } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        message: invalidInput,
      });
    }

    if (!username || typeof username !== 'string') {
      return res.status(400).json({
        message: invalidInput,
      });
    }

    if (password.length < 8 || typeof password !== 'string') {
      return res.status(400).json({
        message: invalidInput,
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: genericErrorMessage,
    });
  }
}

async function checkIfUserNameExists(req, res, next) {
  try {
    const user = await db.oneOrNone(checkForUsername, [req.body.username]);
    if (user) {
      return res.status(409).json({
        message: userAlreadyExists,
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
  validateUserInput,
  checkIfUserNameExists,
};
