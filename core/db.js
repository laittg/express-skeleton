var mongoose = require('mongoose')

var config = require('./config')
var schema = require('./schemas')

mongoose.connect(config.db.mongodb, config.db.options, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})

require('./helpers')
  .globList(__dirname, '../db-plugins', '*.js', pluginFile => {
    // Only files at level 1 under db-plugins/ are loaded as global plugins
    mongoose.plugin(require(pluginFile))
  })

module.exports = {
  mongoose,
  Child: mongoose.model('Child', schema.child),
  Parent: mongoose.model('Parent', schema.parent)
}
