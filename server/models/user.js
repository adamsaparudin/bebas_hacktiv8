const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String},
  salt: {type: String},
  name: {type: String},
  articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
