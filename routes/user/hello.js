var config = {
  title: 'Hello, user',

  description: 'Say hello to a user',

  route: '/user'
}

var api = require('../blueprint')(config)

api.router.get('/:name', function (req, res, next) {
  res.status(200).send(api.helper.hello(req.params.name))
})

module.exports = api
