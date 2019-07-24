const config = {

  title: 'Home page',

  description: ''

}

var api = require('../core/controller')(config)

api.router.get('/', function (req, res, next) {
  res.status(200).send('Home')
})

module.exports = api
