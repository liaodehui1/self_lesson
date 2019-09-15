// var mongoose = require('mongoose')
var News = require('../models/news.server.model')

module.exports = {
  create: function (req, res, next) {
    // console.log(req.body)
    var news = new News(req.body)
    news.save(function (err) {
      if (err) return next(err)

      return res.json(news)
    })
  },
  list: function (req, res, next) {
    var pagesize = parseInt(req.query.pagesize, 10) || 10
    var pagestart = parseInt(req.query.pagestart, 10) || 1
    // console.log(News)
    News.find()
      .skip((pagestart - 1) * pagesize)
      .limit(pagesize)
      .exec(function (err, docs) {
        if (err) return next(err)

        return res.json(docs)
      })
  },
  getById: function (req, res, next, id) {
    console.log('id:',id)
    if (!id) return next(new Error('News not Found'))

    News.findOne({ _id: id })
      .exec(function (err, docs) {
        if (err) return next(err)

        // console.log(docs)
        if (!docs) return next(new Error('News not Found'))

        req.news = docs
        return next()
      })
  },
  get: function (req, res, next) {
    console.log(req.news)
    return res.json(req.news)
  }
}