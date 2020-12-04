const { load } = require('cheerio')
const Koa = require('koa')
const { initRouter, initController, intiService, loadConfig} = require('./my-egg-loader')

class MyEgg {
  constructor (conf) {
    this.$app = new Koa(conf)
    loadConfig(this)
    this.$controller = initController(this)
    this.$service = intiService()
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
