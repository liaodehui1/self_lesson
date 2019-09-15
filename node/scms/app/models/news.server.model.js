var mongoose = require('mongoose')

var NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  createTime: {
    type: Date,
    default: Date.now
  }
})

var News = new mongoose.model('News', NewsSchema)
module.exports = News