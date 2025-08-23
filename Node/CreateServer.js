const http = require('http');

http.createServer( (req, res) => {
    console.log(req.url);
})

Server.listen(3000);   