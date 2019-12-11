const router = require('koa-router')()
const publicServer = require('../controllers/public')
router.prefix('/public')

// 头部搜索
router.get('/suggest', async(ctx, next) => {
  let {keyword} = ctx.query
  await publicServer.suggest({keyword})
  .then((res) => {
    ctx.body = res
  })
})

// 猜你喜欢
router.get('/recommendList', async(ctx, next) => {
  let {poiId,cityId,lat,lng} = ctx.query
  await publicServer.recommendList({poiId,cityId,lat,lng})
  .then((res) => {
    ctx.body = res
  })
})

// 获取客户评论
router.get('/getcomment', async(ctx, next) => {
  let {id,offset,pageSize,mode,sortType,starRange,userId,tag} = ctx.query
  await publicServer.getcomment({id,offset,pageSize,mode,sortType,starRange,userId,tag})
  .then((res) => {
    ctx.body = res
  })
})

module.exports = router