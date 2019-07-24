const config = {

  title: 'List all users',

  description: ''

}

var api = require('../../core/controller')(config)

api.router.get('/', function (req, res, next) {
  res.status(200).send('All the users')
})

module.exports = api
