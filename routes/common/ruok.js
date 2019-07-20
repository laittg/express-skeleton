var config = {
  title: 'Health check',

  description: '',

  route: '/ruok'
}

var api = require('../blueprint')(config)

api.router.get('/', function (req, res, next) {
  res.status(200).send('imok')
})

module.exports = api
