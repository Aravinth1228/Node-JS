
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
       req.on('data', (chunk) => {
        console.log("Chunk received");
        console.log(chunk);
       })
    }
    res.write('<h1>Hello World</h1>');
    res.end();
});

server.listen(3000);
