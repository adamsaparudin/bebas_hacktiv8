var crypto = require('crypto')
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.use(new Strategy({
      passReqToCallback: true
    }, function(username, password, cb) {
    User.findOne({username: username.body.username}, function(err, user) {
      password = crypto.createHmac('sha256', password).update(user.salt).digest('hex')
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      console.log(user);
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
