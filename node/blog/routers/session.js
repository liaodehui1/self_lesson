/**
 * 注册、登录、退出登录
 */
const express = require('express')
var router = express.Router()
router.get('/login',function (req,res) {
  res.render('login.html')
})
router.post('/login',function (req,res) {

})
router.get('/register',function (req,res) {
  res.render('register.html')
})
router.post('/register',function (req,res) {
  // console.log(req.body)
})
module.exports=router
