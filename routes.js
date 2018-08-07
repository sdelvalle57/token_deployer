const routes = require('next-routes')();

routes
    .add('./', '/index')
    .add('/token/view/:tokenAddress/:network', '/token/view')

module.exports = routes;