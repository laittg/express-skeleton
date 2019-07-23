var mongoose = require('mongoose')

mongoose.plugin(require('../db-plugins/sample'))

var schema = require('./schemas')

module.exports = {
  mongoose,
  Child: mongoose.model('Child', schema.child),
  Parent: mongoose.model('Parent', schema.parent)
}
