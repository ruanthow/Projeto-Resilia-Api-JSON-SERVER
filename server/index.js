const jsonServer = require('json-server');
const server = jsonServer.create();
const middleware = jsonServer.defaults();


server.use(middleware)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

server.listen(3000, () => {
    console.log('Server Runing Port: 3000');
})
