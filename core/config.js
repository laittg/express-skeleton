const path = require('path')

var appConfig = {

  env: process.env.NODE_ENV || 'development'

}

require('./helpers')
  .globList(__dirname, `../config/${appConfig.env}`, '*.js', configFile => {
    var configName = path.parse(configFile).name
    appConfig[configName] = require(configFile)
  })

module.exports = appConfig
