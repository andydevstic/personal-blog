const db = require('../../models/database-model')
const messagePool = require('../shared/message')
const bcrypt = require('../../models/bcrypt')
const JWT = require('../../models/JWT')

module.exports.login = function (req, res, next) {
  const {username, password} = req.body.data
  let foundUser = null
  //Sanitize user input

  db.query('SELECT * FROM tbl_user WHERE username = $1', [username])
    .then(result => {
      if (result.rowCount === 0) {
        throw new Error(messagePool.auth['03'])
      } else {
        foundUser = result.rows[0]
        return bcrypt.compare(password, foundUser.password)
      }
    })
    .then(compareResult => {
      if (compareResult === true) {
        return JWT.sign(foundUser)
      } else {
        throw new Error(messagePool.auth['04'])
      }
    })
    .then(JWTResult => {
      if (!JWTResult) {
        throw new Error(messagePool.values['01']('JWT'))
      } else {
        res.status(200).json({
          success: true,
          data: foundUser,
          token: JWTResult
        })
      }
    })
    .catch(error => {
      res.status(401).json({success: false, message: messagePool.auth['01']})
    })
}

module.exports.verifyToken = function (req, res, next) {
  const authenHeader = req.headers.Authentication
  const [authenStrategy, authenKey] = authenHeader.split(' ')
  if (authenStrategy !== 'JWT') {
    res.status(401).json({success: false, message: messagePool.auth['02']})
  }
  JWT.isValidUserAndGetUser(authenKey)
    .then(result => {
      if (!result || !result.username) {
        throw new Error(messagePool.auth['02'])
      } else {
        res.status(200).json({
          success: true,
          data: result
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: messagePool.auth['02']
      })
    })
}

