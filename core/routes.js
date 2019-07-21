const path = require('path')
const glob = require('glob')

const routesDir = path.resolve(__dirname, '../routes')
const apiPaths = glob.sync(path.resolve(routesDir, './**/!(blueprint).js'))

var apis = []

apiPaths.map(apiPath => {
  var api = require(apiPath)
  api.route = buildRoute(apiPath)
  apis.push(api)
})

function buildRoute (apiPath) {
  var route = apiPath
    .substr(routesDir.length) // remove routesDir prefix
    .slice(0, -3) // remove .js suffix
    .replace(/\/index$/i, '') // convert /path/action/index --> /path/action
  return route
}

module.exports = apis
