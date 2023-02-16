import express from 'express'

const router = express.Router()

/** Alias */
export const ON_GET_PRODUCTS = '/'
export const ON_GET_PRODUCT_BY_ID = '/:id'

const products = []

/** Routing */
router.get('/', (req, res) => {
    res.status(200).json({
        data: products,
    })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.sendStatus(200)
})

export default router
