const net = require('net')
const chatServer = net.createServer()
const clientList = []

chatServer.on('connection', client => {
  // 广播
  client.write('Hi!\n')
  clientList.push(client)
  // 收到消息时
  client.on('data', data=> {
    console.log('receive from client:', data.toString())
    clientList.forEach(v => {
      v.write(data)
    })
  })
})

chatServer.listen(9000)