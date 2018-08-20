const routes = require('next-routes')();

routes
    .add('./', '/index')

    .add('/token/view/:tokenAddress', '/token/view')

    //add some commments


module.exports = routes;