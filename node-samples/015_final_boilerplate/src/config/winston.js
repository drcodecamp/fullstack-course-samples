import winston from 'winston'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    )
}

logger.stream = {
    write: (message) => {
        logger.info(message.trim())
    },
}

export const log = (logMessage) => {
    if (process.env.NODE_ENV !== 'development') {
        console.log(logMessage)
    }
    logger.info(logMessage)
}

export default logger
