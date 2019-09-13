const express = require('express')
const path = require('path')
const router = require('./routers/router')
const bodyParser = require('body-parser')
var app=express()

app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.engine('.html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))//默认views
// 配置解析表单 post请求 插件，一定要在挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(8080,function () {
  console.log('running...')
})