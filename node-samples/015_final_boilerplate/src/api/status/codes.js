//prettier-ignore
/**
 * Error Codes 2xx Success
 */

export const OK = 200
export const OK_MSG = 'Successful Request.'
export const CREATED = 201
export const CREATED_MSG = 'Asset Created Successfully.'
export const ACCEPTED = 202
export const ACCEPTED_MSG = 'Request Accepted.'
export const NO_CONTENT = 204
export const ALREADY_REPORTED = 208
export const ALREADY_REPORTED_MSG = 'Already reported.'
export const RECORD_IS_BANNED = 'RECORD_IS_BANNED'

/**
 * Error Codes 4xx Client errors
 */
export const BAD_REQUEST = 400
export const BAD_REQUEST_MSG = 'Bad Request payload is missing or Invalid.'
export const UNAUTHORIZED = 401
export const UNAUTHORIZED_MSG = 'Unauthorized Request.'
export const FORBIDDEN = 403
export const FORBIDDEN_MSG = 'Access Denied,Jwt Token is Forbidden or Expired.'
export const NOT_FOUND = 404
export const NOT_FOUND_MSG = 'Asset is not Exist.'
export const CONFLICT = 409
export const CONFLICT_MSG = 'There some conflict with the request.'
export const TOO_MANY = 429
export const TOO_MANY_MSG = 'Too many requests , Slow down.'
export const SQS_CANNOT_SENT = 'Too many requests , Slow down.'

/**
 * Error Codes 5xx Server errors
 */

export const INTERNAL_ERROR = 500
export const INTERNAL_ERROR_MSG = 'Internal error with service.'
export const BAD_GATEWAY = 502
export const BAD_GATEWAY_MSG = 'Bad gateway internal error.'
export const UNAVAILABLE = 503
export const UNAVAILABLE_MSG = 'Service is unavailable.'

export const INVALID_PIN_CODE_MSG = 'Wrong pin code.'
