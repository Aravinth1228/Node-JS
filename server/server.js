const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log("Request received");

    res.setHeader("Content-Type", "text/html");

    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err.message);
            res.statusCode = 500;
            res.end("<h1>500 - Internal Server Error</h1>");
            return;
        }

        res.statusCode = 200;
        res.end(data);
    });
});

server.listen(3000, "localhost", () => {
    console.log("Server is listening on http://localhost:3000");
});