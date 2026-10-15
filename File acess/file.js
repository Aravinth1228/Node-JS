const fs = require("node:fs");

const data = fs.readFileSync("token.txt", "utf8");

console.log(data);