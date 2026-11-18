const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log(`Request received for: ${req.url}`);

    res.setHeader("Content-Type", "text/html");

    let fileName = "index.html";

    if (req.url === "/" || req.url === "/index") {
        fileName = "index.html";
    } else if (req.url === "/home") {
        fileName = "home.html";
    } else {
        res.statusCode = 404;
        res.end("<h1>404 - Page Not Found</h1>");
        return;
    }

    const filePath = path.join(__dirname, fileName);

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