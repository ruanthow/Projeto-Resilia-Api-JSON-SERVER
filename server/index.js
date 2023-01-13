const jsonServer = require('json-server');
const server = jsonServer.create();
const apiResult = require('../api/api.json')
const middleware = jsonServer.defaults();

server.use(middleware)

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

server.get('/products/allProducts', (req, res) => {
    res.send(apiResult)
    res.statusCode = 200
})
server.get('/products/product/whiskys', (req, res) => {
    res.send(apiResult.whiskys)
    res.statusCode = 200
})
server.get('/products/product/beers', (req, res) => {
    res.send(apiResult.beers)
    res.statusCode = 200
})
server.get('/products/product/charutos', (req, res) => {
    res.send(apiResult.charutos)
    res.statusCode = 200
})
server.get('/products/product/drinks', (req, res) => {
    res.send(apiResult.drinks)
    res.statusCode = 200
})
server.get('/products/product/foods', (req, res) => {
    res.send(apiResult.foods)
    res.statusCode = 200
})



server.listen(3000, () => {
    console.log('Server Runing Port: 3000');
})
