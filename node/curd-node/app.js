/**
 * app.js 入门模块
 * 职责:
 *  创建服务
 *  做一些服务相关的配置:
 *      模块引擎
 *      body-parser 解析表单post请求体
 *      提供静态资源服务
 * 挂载路由
 * 监听端口启动服务
 */
const express=require('express')
// const fs=require('fs')
const app=express()

const router=require('./router')
const bodyParser = require('body-parser')

//配置模板引擎和body-parser一定要在挂载路由之前
app.engine('html',require('express-art-template'))
app.use('/node_modules/',express.static('../node_modules/'))
app.use('/public/',express.static('./public/'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// router(app)
// 把路由容器挂载到app服务中
app.use(router)

app.listen(8080,function(){
    console.log('running...')
})