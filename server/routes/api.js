var passport = require('passport')
var express = require('express');
var router = express.Router();

let User = require('../controllers/user')
let Article = require('../controllers/article')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello from api');
});

router.post('/user/register', User.register)
router.post('/user/login', User.login)

router.get('/articles', Article.read)
router.post('/article', Article.create)
router.get('/article/:id', Article.readOne)
router.put('/article/:id', Article.update)
router.delete('/article/:id', Article.deleteArticle)

module.exports = router;
