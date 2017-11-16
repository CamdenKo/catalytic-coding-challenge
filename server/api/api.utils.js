const fs = require('fs')

const promisifiedRF = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(JSON.parse(data))
    })
  })

const promisifiedWF = (path, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })

module.exports = {
  promisifiedRF,
  promisifiedWF,
}
