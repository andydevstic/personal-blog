var express = require('express');
var router = express.Router();
const db = require('../../models/database-model')
const messagePool = require('../../components/shared/message')

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.params)
  const {username} = req.body
  console.log(username)
  // db.select('tbl_user', `username = ${username}`)
  db.query('SELECT * FROM tbl_user WHERE username = $1', [username])
    .then(result => {
      res.status(200).json({
        success: true,
        data: result.rows
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        success: false,
        message: messagePool.system['01']
      })
    })
});

module.exports = router;
