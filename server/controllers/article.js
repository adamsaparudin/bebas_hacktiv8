let User = require('../models/user')
let Article = require('../models/article')

module.exports = {
  test: (req, res, next) => {
    console.log("test");
  },
  create: (req, res, next) => {
    Article.create(req.body)
    .then( (article) => {
      User.findByIdAndUpdate(article.author, {$push: {articles: article._id}}, function(err, model){
        if(err)
          console.log(err);
        else
          console.log(model);
      })
      res.send(article)
    })
    .catch( (err) => {
      res.send(err)
    })
  },

  read: (req, res, next) => {
    Article.find().populate({
      path: 'author',
      model: 'User',
      select: 'username name'
    })
    .then( (articles) => {
      res.send(articles)
    })
    .catch( (err) => {
      res.send(err)
    })
  },

  readOne: (req, res, next) => {
    Article.findById(req.params.id)
    .populate({
      path: 'author',
      model: 'User',
      select: 'username name'
    })
    .then( (article) => {
      res.send(article)
    })
    .catch( (err) => {
      res.send(err)
    })
  },

  update: (req, res, next) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
    .then( (status) => {
      res.send(status)
    })
    .catch( (err) => {
      res.send(err)
    })
  },

  deleteArticle: (req, res, next) => {
    Article.findByIdAndRemove(req.params.id)
    .then( (status) => {
      res.send(status)
    })
    .catch( (err) => {
      res.send(err)
    })
  }
}
