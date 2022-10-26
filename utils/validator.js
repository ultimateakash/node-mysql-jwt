module.exports = (schema) => (req, res, next) => {  
    if (schema) { 
        const result = schema.validate(req.method == 'GET' ? req.query : req.body);
        if (result.error) {
            const { details } = result.error;
            const message = details[0].message.replace(/"|'/g, '');
            return res.status(400).json({ message });
        }
    }
    next();
}