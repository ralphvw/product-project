import { db } from '../db/db.js';
import categoryQueries from '../db/queries/category.js';

const { createCategory, fetchProductsPerCategory } = categoryQueries;

class CategoryService {
  static async createCategory(name) {
    return db.oneOrNone(createCategory, [name]);
  }

  static async getAllProductsPerCategory(categoryId) {
    return db.manyOrNone(fetchProductsPerCategory, [categoryId]);
  }
}

export default CategoryService;
