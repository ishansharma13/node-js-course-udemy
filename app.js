const http = require('http');

const requestHandler = require('./routes');
//creates a server


const server = http.createServer(requestHandler);

server.listen(3000);