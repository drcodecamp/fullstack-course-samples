import express from 'express'
import jwt from 'jsonwebtoken'
import { jwtSecret } from '../index.js'

const router = express.Router()

/** Alias */
export const ON_LOGIN = '/login'

/** Routing */
router.post(ON_LOGIN, (req, res) => {
    console.log('jwtSecret', jwtSecret)
    const token = jwt.sign({ foo: 'bar' }, jwtSecret, { expiresIn: '30s' })
    res.status(200).json({
        token,
    })
})

export default router
