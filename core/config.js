const fs = require('fs')
const path = require('path')
const glob = require('glob')

var appConfig = {

  env: process.env.NODE_ENV || 'development'

}

const configDir = path.resolve(__dirname, `../config/${appConfig.env}`)

if (!fs.existsSync(configDir)) {
  console.error(`Config dir not existed: ${configDir}`)
  process.exit(1)
}

const configFiles = glob.sync(path.resolve(configDir, '**/*.js'))

configFiles.map(configFile => {
  var configName = path.parse(configFile).name
  appConfig[configName] = require(configFile)
})

module.exports = appConfig
