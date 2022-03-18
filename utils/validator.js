const Joi = require('joi');

module.exports = (type) => (req, res, next) => {
    const schema = getSchema(type);
    if (schema) {
        const result = schema.validate(req.body);
        if (result.error) {
            const { details } = result.error;
            const message = details[0].message.replace(/"|'/g, '');
            return res.status(400).json({
                error: message
            });
        }
    }
    next();
}

const getSchema = (type) => {
    switch (type) {
        case 'register': {
            return Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().required()
            })
        }
        case 'login': {
            return Joi.object().keys({
                email: Joi.string().email().required(),
                password: Joi.string().required()
            })
        }
        default: {
            return null;
        }
    }
} 