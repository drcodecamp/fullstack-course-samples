import {
    responseWithError,
    responseWithSuccess,
    success,
} from '../status/status.js'

import { healthCheck } from '../services/index.js'

export const doHealthTest = async (req, res) => {
    try {
        const health = await healthCheck()
        return responseWithSuccess(res, success('status', health))
    } catch (err) {
        return responseWithError(res, err)
    }
}
