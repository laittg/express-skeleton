'use strict'

var packageName = require('./package.json').name

module.exports = {
  apps: [
    {
      name: packageName,
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        DEBUG: packageName
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
