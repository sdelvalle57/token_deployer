const routes = require('next-routes')();

routes
    .add('./', '/index')
<<<<<<< HEAD
    .add('/token/view/:tokenAddress', '/token/view')
=======
    .add('/token/view/:tokenAddress/:network', '/token/view')
>>>>>>> master

module.exports = routes;