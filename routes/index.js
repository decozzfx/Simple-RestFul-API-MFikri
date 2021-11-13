import express from 'express'
import { deleteProduct, getProducts, getProductsById, saveProduct, updateProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductsById)

router.post('/', saveProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export default router