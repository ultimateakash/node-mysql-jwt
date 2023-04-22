const Joi = require('joi');
const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);

const validatePassword = (value) => {  
    if(!passwordRegex.test(String(value))) { 
        throw new Error('Password should contains a lowercase, a uppercase character and a digit.')
    }
}

module.exports = {
    register: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required().external(validatePassword)
    }),
    login: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}