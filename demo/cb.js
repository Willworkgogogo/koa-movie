const fs = require('fs')
const util = require('util')
const readFileAsync = util.promisify(fs.readFile)
// fs.readFile('./pk.json', (err, data) => {
//   if (err) return console.log(err)
//   data = JSON.parse(data)
//   console.log(data)
// })

// function readFileAsync(url) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(url, (err, data) => {  
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }

// readFileAsync('./pk.json')
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//   })
//   .catch(err => console.log(err))

// util.promisify
// util.promisify(fs.readFile)('./pk.json')
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//   })
//   .catch(err => console.log(err))

async function init() {
  try {
    let data = await readFileAsync('./pk.json')
    data = JSON.parse(data)
    console.log(data.name)
  } catch (e) {
    console.log(e)
  }
}

init()