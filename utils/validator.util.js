module.exports = (schema) => (req, res, next) => {
    if (schema) {
        const options = {
            errors: {
                wrap: { label: '' }
            },
            abortEarly: false
        }
        const result = schema.validate((req.method == 'GET' ? req.query : req.body), options);
        if (result.error) {
            const { details } = result.error;
            const message = details.length ? details[0].message : 'Invalid payload.'
            return res.status(400).json({ message });
        }
    }
    next();
}