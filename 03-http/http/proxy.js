const express = require('express')
const app = express()
app.use(express.static(__dirname + '/'))
// 反向代理
const { createProxyMiddleware } = require('http-proxy-middleware')
// localhost:3000/api/users 3000端口/api的请求 代理到4000
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:4000'
}))
module.exports = app