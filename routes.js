const routes = require('next-routes')();

routes
    .add('./', '/index')
    .add('/token/view/:tokenAddress', '/token/view')

module.exports = routes;