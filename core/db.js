var mongoose = require('mongoose')

var config = require('./config')
var schema = require('./schemas')

mongoose.plugin(require('../db-plugins/sample'))

mongoose.connect(config.db.mongodb, config.db.options, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})

module.exports = {
  mongoose,
  Child: mongoose.model('Child', schema.child),
  Parent: mongoose.model('Parent', schema.parent)
}
