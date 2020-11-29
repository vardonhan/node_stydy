const { request } = require("express");

const http = require('http')

setInterval(async() => {
  http.get('http://localhost:3000')
}, 1000)