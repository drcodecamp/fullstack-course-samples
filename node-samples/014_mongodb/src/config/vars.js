import 'dotenv/config'

export const configs = {
    service: process.env.MICROSERVICE,
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.ACCESS_TOKEN_SECRET,
    jwtRefreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    jwtExpirationInterval: process.env.TOKEN_LIFE,
    mongo: {
        dbUrl:
            process.env.NODE_ENV === 'test'
                ? process.env.DATABASE_URL
                : process.env.DATABASE_URL,
        dbCollection: process.env.COLLECTION_NAME,
        dbName: process.env.DATABASE_NAME,
        dbUser: process.env.DATABASE_USERNAME,
        dbPassword: process.env.DATABASE_PASSWORD,
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
}

export default configs
