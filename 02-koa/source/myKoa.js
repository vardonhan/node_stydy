const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

module.exports = class MyKoa {
  constructor () {
    this.middlewares = []
  }

  // 构建上下文
  createContext (req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res

    return ctx
  }

  // 把中间件都收集起来 -> 返回一个函数
  // 返回的函数会按照app.use的顺序执行
  compose (middlewares) {
    return function (ctx) {
      // 执行第一个
      return dispatch(0)
  
      function dispatch (i) {
        let fn = middlewares[i]
        if (!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx, function next () {
            return dispatch(i + 1)
          })
        )
      }
    }
  }

  // use (cb) {
  //   // 保存业务逻辑
  //   this.cb = cb
  // }
  use (middleware) {
    this.middlewares.push(middleware)
  }

  listen (...args) {
    console.log(args)
    const server = http.createServer(async(req, res) => {
      // 将业务执行时 回调需要的两个参数传入
      // this.cb(req, res)
      let ctx = this.createContext(req, res)
      // this.cb(ctx)
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      res.end(ctx.body)

    })
    server.listen(...args)
  }
}