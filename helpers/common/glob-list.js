const path = require('path')
const glob = require('glob')

module.exports = function (baseDir, destDir, fileSelector, jsAction) {
  const dir = path.resolve(baseDir, destDir)
  const files = glob.sync(path.resolve(dir, fileSelector))
  files.map(jsAction)
}
