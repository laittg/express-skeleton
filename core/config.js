const path = require('path')
const globList = require('./helpers').globList

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
  globList(__dirname, `../config/${appConfig.env}`, '*.js', configFile => {
    var configName = path.parse(configFile).name
    appConfig[configName] = require(configFile)
  })
  // check if onload callback is registered
  var onloadcb = setInterval(() => {
    if (!appConfig._onload) return
    appConfig._onload()
    clearInterval(onloadcb)
  }, 100)
})

module.exports = appConfig
