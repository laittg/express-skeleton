const config = {

  title: 'Health check',

  description: ''

}

var api = require('../core/api-blueprint')(config)

api.router.get('/', function (req, res, next) {
  res.status(200).send('imok')
})

module.exports = api
