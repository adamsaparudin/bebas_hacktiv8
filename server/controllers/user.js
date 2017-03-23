const crypto = require('crypto');

let User = require('../models/user')

module.exports = {

  register: (req, res, next) => {
    let salt = crypto.randomBytes(128).toString('base64');
    let hashPass = crypto.createHmac('sha256', req.body.password).update(salt).digest('hex')
    User.create({
      username: req.body.username,
      password: hashPass,
      salt: salt,
      email: req.body.email,
      name: req.body.name
    }).then( (user) => {
      res.send(user)
    }).catch( (err) => {
      res.send(err)
    })
  }

}
