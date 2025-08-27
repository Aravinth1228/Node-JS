const http = require('http');

const Time = require('./route');
const server = http.createServer((req, res) => {
    Time(); // Executes the function from route.js
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World</h1>');

    res.end('Server is running');
});

server.listen(3000);