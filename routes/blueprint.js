var express = require('express')

function BluePrint (config) {
  this.title = config.title
  this.description = config.description
  this.route = config.route
  this.router = express.Router()
}

BluePrint.prototype.helper = require('../helpers/index')

module.exports = function newAPI (config) {
  return new BluePrint(config)
}
