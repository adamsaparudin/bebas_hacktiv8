var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport')

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/api', api)

module.exports = app;
