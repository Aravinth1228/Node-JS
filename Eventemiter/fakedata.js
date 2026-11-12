const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("tokenTransfer", (transfer) => {
    console.log("From:", transfer.from);
    console.log("To:", transfer.to);
    console.log("Amount:", transfer.amount);
});

emitter.emit("tokenTransfer", {
    from: "0xAlice",
    to: "0xBob",
    amount: "100"
});                                                                                                                                                                                                                                      