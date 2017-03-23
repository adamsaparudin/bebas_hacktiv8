const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let articleSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)
