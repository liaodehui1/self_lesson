const router = require('koa-router')()
const homeServer = require('../controllers/home')
router.prefix('/home')

// 有格调/狠优惠
router.get('/getScenesList', async(ctx, next) => {
  let {theme,tab,ci,limit} = ctx.query
  await homeServer.getScenesList({theme,tab,ci,limit})
  .then((res) => {
    ctx.body = res
  })
})

// 正在热映
router.get('/getHotFilms', async(ctx, next) => {
  let {ci,limit} = ctx.query
  await homeServer.getHotFilms({ci,limit})
  .then((res) => {
    ctx.body = res
  })
})
// 即将上映
router.get('/getComingFilms', async(ctx, next) => {
  let {ci,limit} = ctx.query
  await homeServer.getComingFilms({ci,limit})
  .then((res) => {
    ctx.body = res
  })
})

// 民宿城市
router.get('/minsuCitys', async(ctx, next) => {
  let {fetchSize} = ctx.query
  await homeServer.minsuCitys({fetchSize})
  .then((res) => {
    ctx.body = res
  })
})
// 民宿
router.get('/minsu', async(ctx, next) => {
  let {cityId} = ctx.query
  await homeServer.minsu({cityId})
  .then((res) => {
    ctx.body = res
  })
})

// 猜你喜欢
router.get('/recommends', async(ctx, next) => {
  await homeServer.recommends()
  .then((res) => {
    ctx.body = res
  })
})

module.exports = router