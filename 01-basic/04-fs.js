const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const dest = './03-download.js'

async function read (dest) {
  try {
    const res = await readFile(dest)
    console.log(res.toString())
  } catch (error) {
    throw error
  }
}

read(dest)