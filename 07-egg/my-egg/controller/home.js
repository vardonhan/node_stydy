// module.exports = {
//   index: async ctx => {
//     ctx.body = 'controller首页'
//   },
//   detail: async ctx => {
//     ctx.body = 'controller详情页'
//   }
// }

module.exports = app => {
  return {
    index: async ctx => {
      const name = await app.$service.user.getName()
      app.ctx.body = 'controller user:' + name
    },
    detail: ctx => {
      app.ctx.body = 'controller detail'
    }
  }
}