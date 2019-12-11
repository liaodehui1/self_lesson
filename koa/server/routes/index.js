const router = require('koa-router')()
const home = require('./home')
const public = require('./public')
const detail = require('./detail')

router.stack = router.stack.concat(home.stack,public.stack,detail.stack)

module.exports = router