const Joi = require("joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        district: Joi.string().required()
    });

    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        district: Joi.string().required()
    });

    return schema.validate(data);
};

const cityValidation = (data) => {
    const schema = Joi.object({
        district_id: Joi.string().required(),
        name: Joi.string().min(3).required(),
        type: Joi.string().required(),
        population: Joi.number().required(),
        polling: Joi.array()
    })
    return schema.validate(data);
}

module.exports = { registerValidation, loginValidation, cityValidation }