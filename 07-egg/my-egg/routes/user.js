module.exports = {
  'get /': async ctx => {
    ctx.body = '用户-首页';
  },
  'get /info': async ctx => {
    ctx.body = '用户-信息页面';
  }
}