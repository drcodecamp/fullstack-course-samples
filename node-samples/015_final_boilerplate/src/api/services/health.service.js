export const healthCheck = async () => {
    return {
        name: process.env.MICROSERVICE,
        port: process.env.PORT,
        status: 'OK',
        domain: process.domain,
        m: process.memoryUsage(),
    }
}
