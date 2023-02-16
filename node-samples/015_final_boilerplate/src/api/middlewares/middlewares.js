import jwt from 'jsonwebtoken'
import { error, responseWithError } from '../status/status.js'
import jwtextract from 'jwtextract'

import {
    FORBIDDEN,
    FORBIDDEN_MSG,
    UNAUTHORIZED,
    UNAUTHORIZED_MSG,
} from '../status/codes.js'

import configs from '../../config/vars.js'

const { jwtSecret } = configs

export const authenticateUser = async (req, res, next) => {
    const accessToken = jwtextract(req)
    
    if (!accessToken) {
        return responseWithError(res, error(FORBIDDEN_MSG, FORBIDDEN))
    }
    try {
        const user = await validateUserAccessToken(accessToken)
        if (!user || user.isBanned) {
            return responseWithError(res, error(UNAUTHORIZED_MSG, UNAUTHORIZED))
        }
        delete user.iat
        delete user.exp
        req.user = user
        next()
    } catch (err) {
        return responseWithError(res, err)
    }
}

export const validateUserAccessToken = async (accessToken) => {
    try {
        const user = await jwt.verify(accessToken, jwtSecret)
        return user || null
    } catch (err) {
        throw error(err.message, FORBIDDEN)
    }
}
