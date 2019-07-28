'use strict'

var packageName = require('./package.json').name

module.exports = {
  apps: [
    {
      name: packageName,
      script: 'npm',
      args: 'start'
    }
  ]
}
