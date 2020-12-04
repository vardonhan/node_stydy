module.exports = async (ctx, next) => {
  console.log(ctx.method + '' + ctx.path)
  const start = new Date()
  await next()
  const rt = new Date() - start
  console.log(ctx.method + '' + ctx.path + '' + rt + 'ms')
}