import express from 'express';
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js';
import { adminAuthorize, userAuthorize, premiumAuthorize, canDeleteProductOrUpdate } from '../middlewares/auth.middleware.js';
import errorHandlerMiddleware from '../middlewares/errors/error.middleware.js';

const router = express.Router();

router.get('/',  errorHandlerMiddleware, getProducts);
router.get('/:pid', errorHandlerMiddleware, getProductById);
router.post('/',  errorHandlerMiddleware, premiumAuthorize, addProduct);
router.put('/:pid', errorHandlerMiddleware, canDeleteProductOrUpdate, adminAuthorize, premiumAuthorize, updateProduct);
router.delete('/:pid', errorHandlerMiddleware,canDeleteProductOrUpdate, adminAuthorize, premiumAuthorize, deleteProduct);



export default router;