var Schema = require('mongoose').Schema

var def = require('./family.def')

module.exports = {
  child: new Schema(def.child),
  parent: new Schema(def.parent)
}
