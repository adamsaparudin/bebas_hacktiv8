var express = require('express');
var router = express.Router();

let User = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello from api');
});

router.post('/user/register', User.register)

module.exports = router;