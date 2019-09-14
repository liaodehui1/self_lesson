const express = require('express')
const path = require('path')
const router = require('./routers/router')
const bodyParser = require('body-parser')
const session=require('express-session')
var app=express()

app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.engine('.html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))//默认views
// 配置解析表单 post请求 插件，一定要在挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 配置session插件
app.use(session({
  // 配置加密字符串 在原有加密基础上和这个字符串拼起来去加密
  secret: 'itcast',
  resave: false,
  // 不适用session时是否分配一把钥匙
  saveUninitialized: false,
  // session生命周期
  // 客户端sessionID 在浏览器关闭时会被清除
  // 设置时间延长sessionID时长
  cookie:{
    maxAge:60000
  }
}))
app.use(router)
// 404
app.use(function (req,res,next) {
  res.render('err.html')
  next()
})
// 500
app.use(function (err,req,res,next) {
  res.status(500).json({
    err_code:500,
    message:err.message
  })
})
app.listen(8080,function () {
  console.log('running...')
})