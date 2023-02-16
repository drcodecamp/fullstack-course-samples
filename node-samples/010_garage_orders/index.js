import express from 'express'

const app = express()
const port = 9999

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    }),
)

const GARAGE_FIX_RATE = 11.5
let orderIdx = 0
let orders = []

/* Route for getting all orders */
app.get('/orders', (req, res) => {
    const colorQuery = req.query.color
    const results = orders.filter((order) => {
        return order.color.includes(colorQuery)
    })
    res.status(200).json(results)
})

/* Route for getting order status by orderId */
app.get('/order/:id', (req, res) => {
    const { id } = req.params
    const order = orders.find((o) => o.orderId === id)
    if (order) {
        return res.status(200).json(order)
    }
    return res.sendStatus(404)
})

/* Route for posting a new order */
app.post('/order', (req, res) => {
    const { car } = req.body
    if (!car) {
        res.status(400).send('invalid payload')
    }
    const isAlreadyOrdered = orders.find((order) => order.id === car.id)
    if (isAlreadyOrdered) {
        return res.status(202).send('Already Ordered!')
    }
    const { damage } = car
    const fixCost = damage * GARAGE_FIX_RATE
    const fixAt = Date.now() + 10000
    const orderId = `${orderIdx}${car.id}`
    orderIdx++
    orders.push({
        ...car,
        orderId,
        fixCost,
        fixAt,
    })
    res.status(200).json({
        fixAt,
        orderId,
        status: 'Please return later to get your fixed car!',
    })
})

app.listen(port, () => {
    console.log(`application start listening on port:${port}!`)
})
