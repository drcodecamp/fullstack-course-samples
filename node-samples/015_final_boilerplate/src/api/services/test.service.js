import { error, success } from '../status/status.js'
import { INTERNAL_ERROR } from '../status/codes.js'
import { createCollection } from '../utils/db.js'
import logger from '../../config/winston.js'

export const testService = async () => {
    const testName = '123'
    const a = new Date().getDate()
    const b = new Date().getDay()
    const c = new Date().getFullYear()
    try {
        const test = `Test Deploy at ${a}/${b}/${c}`
        await createCollection()
        return success(testName, test)
    } catch (err) {
        logger.info(err)
        return error(err.toString(), INTERNAL_ERROR)
    }
}
