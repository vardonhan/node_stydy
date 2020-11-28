const originReq = require('request')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')

const request = function (url, callback) {
  const options = {
    url,
    encoding: null
  }
  originReq(url, options, callback)
}

for (let i = 26389320; i < 26389321; i++) {
  const url = `https://movie.douban.com/subject/${i}/`
  request(url, (err, res, body) =>{
    const html = iconv.decode(body, 'utf8')
    console.log(html)
    const $ = cheerio.load(html)
    const text = $('#content > h1 > span:nth-child(1)').text()
    if (text) console.log(text)
  })
}