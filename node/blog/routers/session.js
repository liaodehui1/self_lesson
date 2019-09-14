/**
 * 注册、登录、退出登录
 */
const express = require('express')
var User=require('../models/user')
var md5=require('blueimp-md5')
var router = express.Router()
router.get('/login',function (req,res) {
  res.render('login.html')
})
router.post('/login',async function (req,res,next) {
  var body=req.body
  try{
    let user=await User.findOne({email:body.email,password:md5(md5(body.password))})
    if(!user){
      res.status(200).json({
        err_code:1,
        message:'Ok'
      })
    }
    // 登录成功
    req.session.user=user
    res.status(200).json({
      err_code:0,
      message:'Ok'
    })
  }catch(err){
    next(err)
  }
})
router.get('/register',function (req,res) {
  res.render('register.html')
})
// router.post('/register',function (req,res) {
//   // console.log(req.body)
//   var body=req.body
//   User.findOne({
//     $or:[
//       {
//         email:body.email
//       },
//       {
//         nickname:body.nickname
//       }
//     ]
//   },function (err,data) {
//     if(err){
//       res.status(500).json({
//         err_code:500,
//         message:'Internal error.'
//       })
//     }else{
//       if(data){
//         res.status(200).json({
//           err_code:1,
//           message:'Email or nickname aleady exists.'
//         })
//       }else{
//         body.password=md5(md5(body.password))
//         new User(body).save(function (err,ret) {
//           if(err){
//             res.status(500).json({
//               err_code:500,
//               message:'Internal error.'
//             })
//           }else{
//             res.status(200).json({
//               err_code:0,
//               message:'Ok'
//             })
//           }
//         })
//       }
//     }
//   })
// })

router.post('/register',async function (req,res,next) {
  var body=req.body
  try{
    if(await User.findOne({email:body.email})){
      res.status(200).json({
        err_code:1,
        message:'Email aleady exists.'
      })
    }

    if(await User.findOne({nickname:body.nickname})){
      res.status(200).json({
        err_code:2,
        message:'Nickname aleady exists.'
      })
    }
    // md5 双重加密
    body.password=md5(md5(body.password))

    let user=await new User(body).save()
    // console.log(user)
    // 注册成功 设置session记录登录状态
    req.session.user=user
    res.status(200).json({
      err_code:0,
      message:'Ok'
    })
  }catch(err){
    next(err)
  }
})
router.get('/logout',function (req,res) {
  delete req.session.user
  res.redirect('/login')
})
module.exports=router
