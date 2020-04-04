const http = require('http');
const app = require('./app')
// import http from http;

const port = process.env.port || 3001;

const server = http.createServer(app);

server.listen(port);

//var let - zmienne