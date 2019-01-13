const db = require('../../models/database-model')
const bcrypt = require('../../models/bcrypt')

module.exports.register = function(userData) {
	const {email, password} = userData
	return new Promise((resolve, reject) => {
		bcrypt.hash(password)
			.then(encryptedPassword => {
				return db.insert('tbl_user', [email, encryptedPassword], ['username', 'password'])
			})
			.then(() => {
				resolve()
			})
			.catch(error => {
				reject(error)
			})
	})
}