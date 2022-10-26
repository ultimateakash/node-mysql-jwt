const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authGuard = require('../middleware/auth.guard');
const schema = require('../validatons/auth.validation');
const validate = require('../utils/validator'); 

router.post('/register', validate(schema.register), authController.register);
router.post('/login',    validate(schema.login),    authController.login);
router.get('/user',      authGuard,                 authController.getUser);
router.get('/logout',    authGuard,                 authController.logout);

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

module.exports = router;
