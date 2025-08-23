// const http = require('http');

// const server = http.createServer( (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
    
// });

// server.listen(3000);

const http = require('http');

const server = http.createServer( (req, res) => {

    const url = req.url;
    if(url === '/'){
       res.setHeader('Content-Type', 'text/html');
         res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        return res.end();
    }
    res.write('<h1>Hello World</h1>');
    res.end();   
    
    
});

server.listen(3000);