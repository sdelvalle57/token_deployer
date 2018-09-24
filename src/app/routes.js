const routes = require('next-routes')();

routes
    .add('./', '/index')
    .add('/starter_pack/:uid', '/starter_pack')
    .add('/eth_loan_pack/:uid', '/eth_loan_pack')

module.exports = routes;