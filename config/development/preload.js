'use strict'

async function preload () {
  // e.g. load credentials before everything else
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
    process.env.MONGODB_CONNECTION_STRING = 'mongodb://localhost:27017/FirstClass'
  })
}

module.exports = preload
