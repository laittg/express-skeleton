var express = require('express')

function BluePrint (config) {
  this.config = config
  this.router = express.Router()
}

BluePrint.prototype.helper = require('./helpers')

BluePrint.prototype.schema = require('./schemas')

module.exports = function newAPI (config) {
  return new BluePrint(config)
}
