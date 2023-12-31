import express from 'express';
import CategoryController from '../controller/category.js';

const { createCategory, getProductsPerCategory } = CategoryController;

const router = express.Router();

router.post('/', createCategory);
router.get('/:categoryId', getProductsPerCategory);

export default router;
