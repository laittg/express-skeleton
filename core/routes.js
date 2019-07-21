const path = require('path')
const glob = require('glob')

var apis = []

var apiPaths = glob.sync(path.resolve(__dirname, '../routes/**/!(blueprint).js'))

apiPaths.map(apiPath => {
  apis.push(require(apiPath))
})

module.exports = apis
