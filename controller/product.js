import constants from '../constants/api.message.js';
import ProductService from '../service/product.js';

const { genericSuccessMessage, genericErrorMessage } = constants;
const { createProduct, buyProduct, fetchAllProducts } = ProductService;

class ProductController {
  static async createProduct(req, res) {
    try {
      const data = await createProduct(req.body);
      return res.status(201).json({
        message: genericSuccessMessage,
        data,
      });
    } catch (error) {
      console.log({ error });
      //logger
      return res.status(500).json({
        message: genericErrorMessage,
      });
    }
  }

  static async buyProduct(req, res) {
    try {
      const data = await buyProduct(req.params.id);
      return res.status(200).json({
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

  static async fetchAllProducts(req, res) {
    try {
      const data = await fetchAllProducts();
      return res.status(200).json({
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
}

export default ProductController;
