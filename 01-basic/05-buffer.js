const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2)
console.log(buf2.toString())

const buf3 = Buffer.from('测试')
console.log(buf3)
console.log(buf3.toString())

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4)
console.log(buf4.toString())