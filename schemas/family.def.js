// Mongoose schema sample
var child = {
  name: String
}

var parent = {
  name: String,
  children: [child]
}

module.exports = {
  child,
  parent
}
