var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router({
  prefix: '/mapi'
});
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");

  // 设置所允许的HTTP请求方法
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  ctx.set("Access-Control-Allow-Headers", "X-custom, content-type");

  // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

  // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  ctx.set("Access-Control-Allow-Credentials", true);

  // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
  // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
  // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
  // ctx.set("Access-Control-Max-Age", 1000 * 60 * 60);
  await next();
})
router.get('/islogin', (ctx, next) => {
  const login = ctx.cookies.get('login');
  if (login) {
    ctx.body = {
      islogin: true
    }
  } else {
    ctx.body = {
      islogin: false
    }
  }
});
router.get('/login', (ctx, next) => {
  ctx.cookies.set('login', true, {
    maxAge: 1000 * 60 * 60 * 24
  })
  ctx.body = {
    data: true
  }
});
router.get('/logout', (ctx, next) => {
  ctx.cookies.set('login', '')
  ctx.body = {
    data: true
  }
});
router.get('/comment', (ctx, next) => {
  ctx.body = {
    list: [
      {content: 0},
      {content: 1},
      {content: 2},
    ]
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3003, () => {
  console.log('run port 3003')
})