import UserService from '../service/user.js';
import constants from '../constants/api.message.js';

const { createUser, login } = UserService;
const { genericSuccessMessage, genericErrorMessage } = constants;

class UserController {
  static async createUser(req, res) {
    try {
      const { email, username } = req.body;
      const data = await createUser(email, username, req.hash);
      return res.status(201).json({
        message: genericSuccessMessage,
        data,
      });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({
        message: genericErrorMessage,
      });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const data = await login(username, password);
      return res.status(data.status).json(data);
    } catch (error) {
      console.log({ error });
      return res.status(500).json({
        message: genericErrorMessage,
      });
    }
  }
}

export default UserController;
