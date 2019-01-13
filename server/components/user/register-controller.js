const express = require('express');
const router = express.Router();
const registerService = require('./register-service')
const messagePool = require('../shared/message')

router.post('/', function (req, res, next) {
	const userData = req.body.user
	if (userData.password !== userData.passwordConfirmation) {
		res.status(500).json({success: false, message: messagePool.register["01"]})
	} else {
		registerService.register(userData)
			.then(() => {
				res.status(200).json({success: true})
			})
			.catch(error => {
        console.log(error)
				res.status(500).json({success: false, message: messagePool.register["02"]})
			})
	}
});

module.exports = router;