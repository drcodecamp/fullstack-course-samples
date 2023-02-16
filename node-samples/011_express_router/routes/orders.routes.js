import express from 'express'

const router = express.Router()

/** Alias */
export const ON_GET_PRODUCTS = '/'
export const ON_CREATE_ORDER = '/'
export const ON_DELETE_ORDER = '/'
export const ON_GET_ORDER_BY_ID = '/order/:id'

const orders = []

/** Routing */
router.get(ON_GET_PRODUCTS, (req, res) => {
    res.status(200).json({
        data: orders,
    })
})

router.get(ON_GET_ORDER_BY_ID, (req, res) => {
    res.status(200).json({})
})

router.post(ON_CREATE_ORDER, (req, res) => {
    res.status(200).send('Order has been created!')
})

router.delete(ON_DELETE_ORDER, (req, res) => {
    res.status(200).send('Order has been Deleted!')
})

export default router
