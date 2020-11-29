const Koa = require('koa')
const app = new Koa()

const main = async (ctx,next) => {
  Math.random() > 0.8 ? notExist() : '2'
  await next()
  ctx.body = '<h1>Hi~</h1>'
}
app.use(main)

if (!module.parent) {
  app.listen(3000, () => {
    console.log('start at 3000')
  })
} else {
  module.exports = app
}