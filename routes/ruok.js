const config = {

  title: 'Health check',

  description: ''

}

var api = require('../core/controller')(config)

api.router.get('/', function (req, res, next) {
  res.status(200).send('imok')
})

module.exports = api
