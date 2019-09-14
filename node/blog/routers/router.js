const express = require('express')
const session = require('./session')
const topic = require('./topic')

var router = express.Router()
router.get('/',function (req,res) {
  res.render('index.html',{
    user:req.session.user
  })
})
// let routers=Object.assign(router,session)// assign 相同属性 后面的会覆盖前面的
router.stack=router.stack.concat(session.stack,topic.stack)
module.exports=router