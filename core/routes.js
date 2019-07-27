const path = require('path')
const debug = require('./debug')
const routesDir = path.resolve(__dirname, '../routes')

var apis = []

require('./helpers')
  .globList(__dirname, '../routes', '**/*.js', apiFile => {
    var api = require(apiFile)
    api.route = buildRoute(apiFile)
    apis.push(api)
    debug('Route registered', api.route)
  })

function buildRoute (apiPath) {
  var route = apiPath
    .substr(routesDir.length) // remove routesDir prefix
    .slice(0, -3) // remove .js suffix
    .replace(/\/index$/i, '') // convert /path/action/index --> /path/action
  return route
}

module.exports = apis
