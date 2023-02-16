import { getProducts } from '../services/products.service.js'

export const onGetProducts = (req, res) => {
    const { color } = req.query
    try {
        const products = getProducts(color)
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}
