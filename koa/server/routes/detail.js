const router = require('koa-router')()
const detailServer = require('../controllers/detail')


router.get('/cate/:id', async(ctx, next) => {
  let {id} = ctx.params
  await detailServer.cateById(id)
  .then((res) => {
    ctx.body = res
  })
})

module.exports = router