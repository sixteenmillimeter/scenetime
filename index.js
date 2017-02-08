'use strict'
const restify = require('restify')
const port = process.env.PORT || 8080
const fs = require('fs')

const index = fs.readFileSync('./html/index.html', 'utf8')

const server = restify.createServer({
	name: 'scenetime',
	version: '1.0.0'
})

server.use(restify.acceptParser(server.acceptable))
//server.use(restify.queryParser())
//server.use(restify.bodyParser())
//server.use(restify.authorizationParser())

server.get(/\/html\/?.*/, restify.serveStatic({
	directory : __dirname
}))

server.get('/', (req, res, next) => {
	res.end(index)
	return next()
})

server.listen(port, () => {
	console.log(`${server.name} listening at ${server.url}`)
});