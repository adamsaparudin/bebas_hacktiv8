const mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1/livecode_adam'
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))
