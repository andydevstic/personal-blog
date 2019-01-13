const jwt = require('jsonwebtoken')

const env = require('../environments/environments')
const JWTKey = env.JWTKey

module.exports.sign = function(userData, callback) {
  return new Promise((resolve, reject) => {
    jwt.sign({userData}, JWTKey, {expiresIn: 1000 * 60 * 10}, (error, data) => {
      if (error) {
        if (callback) callback(error)
        else reject(error)
      }
      else {
        if (callback) callback(null, data)
        else resolve(data)
      }
    })
  })
}

module.exports.isValidUserAndGetUser = function(token, callback) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWTKey, {}, (error, user) => {
      if (error) {
        if (callback) callback(error)
        else reject(error)
      }
      else {
        if (callback) callback(null, user)
        else resolve(user)
      }
    })
  })
}