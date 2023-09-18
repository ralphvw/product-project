import express from 'express';
import ProductController from '../controller/product';

const { createProduct, buyProduct, fetchAllProducts } = ProductController;

const router = express.Router();

router.post('/', createProduct);
router.post('/:id', buyProduct);
router.get('/', fetchAllProducts);

export default router;
