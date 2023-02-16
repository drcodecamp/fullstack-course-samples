import express from 'express'
import { authenticateUser } from '../middlewares/auth.middleware.js'

const router = express.Router()

/** Alias */
export const ON_GET_PRODUCTS = '/'
export const ON_GET_PRODUCT_BY_ID = '/:id'
const products = []

/** Routing */
router.get('/', authenticateUser, (req, res) => {
    res.status(200).json({
        data: products,
    })
})

export default router
