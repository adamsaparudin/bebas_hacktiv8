const crypto = require('crypto');
const jwt = require('jsonwebtoken');

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
  },

  login: (req, res, next) => {
    User.findOne({username: req.body.username})
    .then( (user) => {
      if(!user) {
        res.send("User not found")
        return 0
      }
      let hashPass = crypto.createHmac('sha256', req.body.password).update(user.salt).digest('hex')
      if(user.password != hashPass) {
        res.send("Password wrong")
      }
      else if (user.password == hashPass) {
        user.password = null
        let token = jwt.sign(user, 'This is secret token auth')
        res.send(token)
      }
      else {
        res.send("Something wrong")
      }
    })
  }

}
