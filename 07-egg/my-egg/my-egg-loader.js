const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

/**
 * 
 * @param {string} dir 文件夹名称
 * @param {function} cb 回调函数
 */
const loader = function (dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取路径下的文件
  const files = fs.readdirSync(url)
  // 遍历文件
  files.forEach(fileName => {
    // 去掉后缀
    fileName = fileName.replace('.js', '')
    //导入文件
    const file = require(`${url}/${fileName}`)
    // 执行回调
    cb(fileName, file)
  })
}

const initRouter = function (app) {
  const router = new Router()
  loader('routes', (fileName, routes) => {
    // 根目录 一级目录是空的
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    routes = typeof routes === 'function' ? routes(app) : routes
    Object.keys(routes).forEach(route => {
      const [method, path] = route.split(' ')
      console.log(method.toUpperCase(), prefix, path)
      // koa-router -> router.get/post(path, middleware)
      router[method](`${prefix}${path}`, routes[route])
    })
  })
  return router
}

const initController = function () {
  const controllers = {}
  loader('controller', (fileName, controller) => {
    controllers[fileName] = controller
  })
  return controllers
}

module.exports = { initRouter, initController };
