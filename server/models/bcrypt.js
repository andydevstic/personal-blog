const bcrypt = require('bcrypt')

const env = require('../environments/environments')
const hashRounds = env.hashRounds

module.exports.hash = function (data) {
  return bcrypt.hash(data, hashRounds)
}

module.exports.compare = function (original, hashedValue) {
  return bcrypt.compare(original, hashedValue)
}