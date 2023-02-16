import Sentry from '@sentry/node'
import {
    INTERNAL_ERROR,
    BAD_GATEWAY,
    UNAVAILABLE,
    BAD_REQUEST_MSG,
    BAD_REQUEST,
} from './codes.js'
import logger from '../../config/winston.js'

/**
 * @typedef  { Object }   CustomError
 * @property { boolean }  success    - Code Status optional
 * @property { any    }   type       - The name of the property
 * @property { string }   message    - Optional message
 * @property { number }   code       - Code Status optional
 */

/**
 * Represent error Object
 * @param { string } message - Explain the error
 * @param { number } code    - Represent the error Code
 * @param { object=} data    - Additional Optional data
 * @returns { CustomError }
 */

export function error (message = BAD_REQUEST_MSG, code = BAD_REQUEST, data) {
    return {
        success: false,
        code,
        message,
        data,
    }
}

/** Response Success Type
 * @typedef  { Object }   Success
 * @property { boolean }  success    - Code Status optional
 * @property { any    }   type       - The name of the property
 * @property { string }   message    - Optional message
 * @property { number }   code       - Code Status optional
 */

/**
 * Represent error Object
 * @param   { string=} type    - Represent key name of the data Response aka [providers]: {}
 * @param   { object=} data    - Represent the data
 * @param   { string=} message - Optional Message
 * @param   { number=} code    - Optional Code
 * @returns { Success } .
 */
export function success (type, data, message, code = 200) {
    return {
        success: true,
        code,
        [type]: data,
        message,
    }
}

/**
 * Represent failure response
 * @param   { object } res            - Represent Express Response Object
 * @param   { CustomError } err       - Represent the data
 * @returns { any }
 */

export function responseWithError (res, err) {
    try {
        // Try reporting to 3d party Logger like Sentry.
        // reportToSentry(err)
    } catch (err) {
        logger.info('sentry connection error')
    } finally {
        //Send response to User.
        res.status(err.code).json(err)
    }
}

/**
 * Represent success response
 * @param   { object } res      - Represent Express Response Object
 * @param   { any } payload - Represent the data to Return
 * @returns { success | error }
 */

export function responseWithSuccess (res, payload) {
    return res.status(payload.code).json(payload)
}

export function reportToSentry (err) {
    // The ONLY Error Codes we do Report to SENTRY about.
    const reportMessages = [INTERNAL_ERROR, UNAVAILABLE, BAD_GATEWAY]
    
    // Check if the Err code is one of the Codes to report.
    const needToReport = reportMessages.indexOf(err.code)
    
    // Check the value Report
    if (needToReport >= 0) {
        // If so , Report to Sentry.
        Sentry.captureMessage(err.message)
    }
}
