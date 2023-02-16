import express from 'express'

const router = express.Router()

/** Alias */
export const ON_LOGIN = '/login'
export const ON_REGISTER = '/register'
export const ON_TWO_FACTOR = '/twoFactor'

/** Routing */
router.post(ON_LOGIN, (req, res) => {
    res.sendStatus(200)
})
router.post(ON_REGISTER, (req, res) => {
    res.sendStatus(200)
})
router.get(ON_TWO_FACTOR, (req, res) => {
    res.sendStatus(200)
})

export default router
