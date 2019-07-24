var express = require('express')

function Controller (config) {
  this.config = config
  this.router = express.Router()
}

Controller.prototype.appConfig = require('./config')

Controller.prototype.db = require('./db')

Controller.prototype.helper = require('./helpers')

module.exports = function newAPI (config) {
  return new Controller(config)
}
