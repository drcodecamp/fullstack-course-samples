import express from 'express'

import { doSimpleTest, doHealthTest } from '../controllers/index.js'

/**
 * Auth Middleware
 */
import { authenticateUser } from '../middlewares/middlewares.js'
import { ON_TEST, ON_HEALTH } from './route.types.js'

const router = express.Router()

/** Routing */
router.get(ON_TEST, doSimpleTest)
router.get(ON_HEALTH, doHealthTest)

export default router
