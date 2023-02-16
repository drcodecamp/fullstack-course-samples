import Joi from 'joi'

export const testPayload = Joi.object({
    testName: Joi.string().required(),
})
