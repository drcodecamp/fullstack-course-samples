import http from 'http'

/** 1) We created a server **/
const server = http.createServer()

/** 2) we start listen to "request" event if someone reached our domain **/
server.on('request', handleRequest)

/** 3) We are getting the Request and the Response objects **/
function handleRequest (req, res) {
    if (req.method === 'POST' && req.url === '/echo') {
        return res.end('Your data has been saved')
    }
    res.statusCode = 200
    res.end('Hello World')
}

server.listen(80)
