const eventemit = require("node:events");

const event = new eventemit;

event.on("welcome", ()=>{
    console.log("Hello Im Aravinth");
});

event.emit("welcome");