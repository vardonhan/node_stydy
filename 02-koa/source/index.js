// const http = require('http')

// const server =  http.createServer((req, res) =>{
//   res.writeHead(200)
//   res.end('Hi~')
// })

// server.listen(3000, () => {
//   console.log('start listen 3000...')
// })

const MyKoa = require('./myKoa')
const app = new MyKoa()

// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('Hi~')
// })
// app.use(ctx => {
//   console.log(`url:${ctx.url},method:${ctx.method}`)
//   ctx.body = 'haha'
// })
const delay = () => Promise.resolve(resolve => setTimeout(() => resolve()
,2000));
app.use(async (ctx, next) => {
  ctx.body = "1";
  await next();
  ctx.body += "5";
});
app.use(async (ctx, next) => {
  ctx.body += "2";
  await delay();
  await next();
  ctx.body += "4";
});
app.use(async (ctx, next) => {
  ctx.body += "3";
});

app.listen(3000, () => {
  console.log('start listen 3000...')
})
