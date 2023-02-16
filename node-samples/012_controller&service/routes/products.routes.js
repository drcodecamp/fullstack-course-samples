import express from 'express'
import { onGetProducts } from '../controllers/products.controller.js'

const router = express.Router()

/** Alias */
export const ON_GET_PRODUCTS = '/'

/** Routing */
router.get(ON_GET_PRODUCTS, onGetProducts)

export default router
