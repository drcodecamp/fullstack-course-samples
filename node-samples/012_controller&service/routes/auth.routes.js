import express from 'express'
import { onLoginHandler } from '../controllers/login.controller.js'

const router = express.Router()

/** Alias */
export const ON_LOGIN = '/login'

/** Routing */
router.post(ON_LOGIN, onLoginHandler)

export default router
