import express from 'express'
import authRoutes from './routes/auth.routes.js'
import productsRoutes from './routes/products.routes.js'

export const jwtSecret = 'HOOAH'

const app = express()
const port = 9999

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    }),
)

/* Implement Route Middlewares */
app.use('/api/auth', authRoutes)
app.use('/api/products', productsRoutes)

app.listen(port, () => {
    console.log(`application start listening on port:${port}!`)
})
