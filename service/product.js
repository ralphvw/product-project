import { db } from '../db/db.js';
import productQueries from '../db/queries/product.js';

const { createProduct, buyProduct, fetchAllProducts } = productQueries;

class ProductService {
  static async createProduct({ name, price, quantity, categoryId }) {
    return db.oneOrNone(createProduct, [name, price, quantity, categoryId]);
  }

  static async buyProduct(id) {
    return db.oneOrNone(buyProduct, [id]);
  }

  static async fetchAllProducts() {
    return db.manyOrNone(fetchAllProducts);
  }
}

export default ProductService;
