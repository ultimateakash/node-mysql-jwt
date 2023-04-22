module.exports = (schema) => async (req, res, next) => {
    if (schema) {
        try {
            const options = {
                errors: {
                    wrap: { label: '' }
                },
                abortEarly: true
            }
            const body = (req.method == 'GET') ? req.query : req.body;
            await schema.validateAsync(body, options);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    next();
}