const routes = require('next-routes')();

routes
    .add('./', '/index')
    .add('/token/view/:erc20Address', '/token/view')

module.exports = routes;