// module.exports = {
//   'get /': async ctx => {
//     ctx.body = '首页';
//   },
//   'get /detail': async ctx => {
//     ctx.body = '详情页面';
//   }
// }

module.exports = app => {
  return {
    'get /': app.$controller.home.index,
    'get /detail': app.$controller.home.detail
  }
}