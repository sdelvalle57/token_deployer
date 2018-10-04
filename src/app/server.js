const { createServer } = require('http')
const next = require('next')
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: './src/app', dev })
const handle = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
    const server = createServer((req, res) => {
        handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
     