// 创建共享服务器端口的子进程
const cluster = require('cluster')
const os = require('os')
const cpuCores = os.cpus().length
const workers = {}

console.log('cpu core:', cpuCores)

if (cluster.isMaster) {
  // 主进程
  // 1. 开启与cpu核心数相同数量的进程
  for (let i = 0; i < cpuCores; i++) {
    // 复制进程
    const worker = cluster.fork()
    const pid = worker.pid;
    // 存储进程
    workers[pid] = worker
  }

  // 2. 异常重启
  cluster.on('exit', worker => {
    // work是异常的进程
    worker = cluster.fork()
    workers[worker.pid] = worker
  })
} else {
  // cluster fork 出来的进程 -> 工作进程
  const app = require('./app')
  app.use(async(ctx, next) => {
    console.log(`worker:${cluster.worker.id},pid:${process.pid}`)
    next()
  })
  app.listen(3000)
}

process.on('SIGTERM', () => {
  for (let pid in workers) {
    process.kill(pid)
  }
  process.exit(0)
})

require('./test')