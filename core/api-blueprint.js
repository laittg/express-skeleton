var express = require('express')

function BluePrint (config) {
  this.config = config
  this.router = express.Router()
}

BluePrint.prototype.appConfig = require('./config')

BluePrint.prototype.db = require('./db')

BluePrint.prototype.helper = require('./helpers')

module.exports = function newAPI (config) {
  return new BluePrint(config)
}
