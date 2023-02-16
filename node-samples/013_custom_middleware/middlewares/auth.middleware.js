import jwt from 'jsonwebtoken'
import { jwtSecret } from '../index.js'

export const authenticateUser = async (req, res, next) => {
    const accessToken = extractToken(req)
    if (!accessToken) {
        return res.status(403).send('Access Denied,Jwt Token is Forbidden or Expired.')
    }
    try {
        const user = await validateUserAccessToken(accessToken)
        if (!user) {
            return res.status(403).send('Access Denied,Jwt Token is Forbidden or Expired.')
        }
        req.user = user
        next()
    } catch (err) {
        return res.status(400).send('Bad Request payload is missing or Invalid.')
    }
}

function extractToken (req) {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
        return req.query.token
    }
    return null
}

export const validateUserAccessToken = async (accessToken) => {
    try {
        const user = await jwt.verify(accessToken, jwtSecret)
        return user || null
    } catch (err) {
        throw err
    }
}
