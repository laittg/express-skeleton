const path = require('path')
const debug = require('./debug')

require('./helpers')
  .globList(__dirname, '../services', '**/*.js', serviceFile => {
    require(serviceFile)
    debug('Load service', path.parse(serviceFile).name)
  })
