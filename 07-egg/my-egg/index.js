// const Koa = require('koa')
// const {initRouter} = require('./my-egg-loader')
// const app = new Koa()
// const router = initRouter().routes()
// app.use(router)
// app.listen(3000)

const MyEgg = require('./myEgg')
const app = new MyEgg()
app.start(3000, () => {
  console.log('app start at 3000')
})