import { testPayload } from '../validations/validations.js'
import {
    error,
    responseWithError,
    responseWithSuccess,
} from '../status/status.js'
import { BAD_REQUEST, BAD_REQUEST_MSG } from '../status/codes.js'
import { testService } from '../services/index.js'

/** Handle '/test' */
export const doSimpleTest = async (req, res) => {
    try {
        const testResult = await testService()
        return responseWithSuccess(res, testResult)
    } catch (err) {
        return responseWithError(res, err)
    }
}
