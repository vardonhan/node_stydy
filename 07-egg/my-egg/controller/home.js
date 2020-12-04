module.exports = {
  index: async ctx => {
    ctx.body = 'controller首页'
  },
  detail: async ctx => {
    ctx.body = 'controller详情页'
  }
}