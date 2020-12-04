module.exports = {
  // 'get /': async ctx => {
  //   ctx.body = '用户-首页';
  // },
  // 'get /info': async ctx => {
  //   ctx.body = '用户-信息页面';
  // }
  'get /': async app => {
    const name = await app.$service.user.getName()
    app.ctx.body = '用户:' + name
  },
  'get /info': async app => {
    app.ctx.body = '用户年龄' + app.$service.user.getAge()
  }
}