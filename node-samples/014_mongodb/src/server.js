import { configs } from './config/vars.js'
import { initDatabaseConnection } from './api/utils/db.js'
import validate from './api/utils/envValidation.js'
import app from './config/express.js'
import logger from './config/winston.js'

const { service, port, env } = configs

initDatabaseConnection()
    .then(() => {
        validate(configs).then((status) => {
            if (status.invalid) {
                logger.info('missing env:', status.errors)
                process.exit(1)
            }
            app.listen(port, () => {
                logger.info(`service ${service} started on port ${port} (${env})`)
            })
        })
    })
    .catch((err) => {
        logger.info(`service ${service} ends with an error ${err}`)
        process.exit(1)
    })

