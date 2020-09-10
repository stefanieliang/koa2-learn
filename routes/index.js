const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/asynctest', async (ctx) => {
  global.console.log(1, new Date().getTime())
  // await 后边跟的是个 Promise
  let a = await new Promise((resolve, reject) => {
    setTimeout(() => {
      global.console.log(2, new Date().getTime());
      resolve('a')
    }, 1000)
  })
  // 如果 await 后边跟的对象不是 Promise，则会自动给转换成 Promise
  const b = await 12;
  const c = await Promise.resolve(12)
  ctx.body = { a, b, c }
})

module.exports = router
