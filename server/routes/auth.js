const express = require('express');
const router = express.Router();

const authenticationController = require('../components/authentication/authentication-controller')

router.post('/login', authenticationController.login)
router.post('/verify-token', authenticationController.verifyToken)

module.exports = router;
