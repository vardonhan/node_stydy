const http = require('http')
const server = http.createServer((request, response) => {
  const startTime = Date.now()
  response.end('hi~')
  const rt = Date.now() - startTime;
  console.log(`Method:${request.method}-Url:${request.url}-Response_time:${rt}ms`)
})

console.log('start listen localhost:3000...')
server.listen(3000)

//打印原型链
function getPrototypeChain (obj) {
  // a -> b -> Object
  const protoChain = []
  console.log(obj)
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  console.log(protoChain)
}