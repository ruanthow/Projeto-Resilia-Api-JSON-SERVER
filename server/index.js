const jsonServer = require('json-server');
const server = jsonServer.create();
const middleware = jsonServer.defaults();


server.use(middleware)
//server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

server.listen(3000, () => {
    console.log('Server Runing Port: 3000');
})
