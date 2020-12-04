const Koa = require('koa')
const { initRouter, initController} = require('./my-egg-loader')

class MyEgg {
  constructor (conf) {
    this.$app = new Koa(conf)
    this.$controller = initController()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }
  start (port,cb) {
    this.$app.listen(port, () => {
      cb()
    })
  }
}

module.exports = MyEgg
