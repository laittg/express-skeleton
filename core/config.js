const path = require('path')
const globList = require('./helpers').globList
const debug = require('./debug')

var appConfig = {

  env: process.env.NODE_ENV || 'development'

}

/**
 * Register callback function when all configs loaded
 */

appConfig.onload = function (callback) {
  appConfig._onload = callback
}

/**
 * Preload environment variables, then load app config
 */

var preload = require(`../config/${appConfig.env}/preload`)

preload().then(() => {
  debug('Config preload completed')

  globList(__dirname, `../config/${appConfig.env}`, '!(preload).js', configFile => {
    var configName = path.parse(configFile).name
    appConfig[configName] = require(configFile)
    debug('Load config.', configName)
  })

  // check if onload callback is registered
  var onloadcb = setInterval(() => {
    if (!appConfig._onload) return
    clearInterval(onloadcb)
    appConfig._onload()
  }, 100)
})

module.exports = appConfig
