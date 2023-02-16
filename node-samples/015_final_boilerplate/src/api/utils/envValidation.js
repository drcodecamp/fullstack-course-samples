let invalid = []

export const checkConfig = async (configs) => {
    Object.keys(configs).forEach((config) => {
        const validConfigItem = !!configs[config]
        if (configs[config] instanceof Object) {
            checkConfig(configs[config])
        }
        if (!validConfigItem) {
            invalid.push(config)
        }
    })
    return { invalid: invalid.length > 0, errors: invalid }
}

export default checkConfig
