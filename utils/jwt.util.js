const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

exports.verifyToken = (token) => jwt.verify(token, jwtConfig.secret);

exports.createToken = (data) => jwt.sign(data, jwtConfig.secret, { expiresIn: jwtConfig.ttl });