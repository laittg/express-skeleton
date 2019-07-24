var mongoose = require('mongoose')

var config = require('./config')
var schema = require('./schemas')

const path = require('path')
const glob = require('glob')
const pluginDir = path.resolve(__dirname, `../db-plugins`)
const pluginFiles = glob.sync(path.resolve(pluginDir, '*.js'))

// Only files at level 1 under db-plugins/ are loaded as global plugins
pluginFiles.map(pluginFile => {
  mongoose.plugin(require(pluginFile))
})

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
