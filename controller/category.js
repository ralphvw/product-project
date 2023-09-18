import constants from '../constants/api.message.js';
import CategoryService from '../service/category.js';

const { genericSuccessMessage, genericErrorMessage } = constants;
const { createCategory, getAllProductsPerCategory } = CategoryService;

class CategoryController {
  static async createCategory(req, res) {
    try {
      const data = await createCategory(req.body.name);
      return res.status(201).json({
        message: genericSuccessMessage,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: genericErrorMessage,
      });
    }
  }

  static async getProductsPerCategory(req, res) {
    try {
      const data = await getAllProductsPerCategory(req.params.categoryId);
      return res.status(200).json({
        message: genericSuccessMessage,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: genericErrorMessage,
      });
    }
  }
}

export default CategoryController;
