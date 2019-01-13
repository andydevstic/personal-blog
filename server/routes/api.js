const express = require('express');
const router = express.Router();

const userController = require('../components/user/user-controller')
const registerController = require('../components/user/register-controller')
// const authGuard = require('../middlewares/authenticated-user')

router.use('/register', registerController)
router.use('/users', userController)

module.exports = router;
