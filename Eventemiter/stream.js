const fs = require("node:fs");

const stream = fs.createReadStream("token.txt", {
    encoding: "utf8",
    highWaterMark: 10
});

stream.on("data", (chunk) => {
    console.log("New Chunk:");
    console.log(chunk);
});

stream.on("end", () => {
    console.log("Reading completed!");
});