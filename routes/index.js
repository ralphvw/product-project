import express from 'express';
import userRoutes from './user.js';
import productRoutes from './product.js';
import categoryRoutes from './category.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

export default router;
