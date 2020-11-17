const repo = 'github:su37josephxia/vue-template'
const dest = 'test'

clone()

async function clone() {
  const { promisify } = require('util')
  const download = promisify(require('download-git-repo')) // promisify：回调->承诺执行
  const ora = require('ora')
  const process = ora('Start download...')
  process.start()
  try {
    await download(repo, dest)
  } catch (error) {
    process.fail()
  }
  process.succeed()
}
