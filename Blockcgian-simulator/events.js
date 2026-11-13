const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on ("transactionCreated", (data) =>{
    console.log("New Trancastion Created");
    console.log("Transaction Id", data.id);
    console.log("amount: ", data.amount);
});

emitter.on ("transactionConfirmed", (data)=>{
    console.log ("Transaction Conformed ");
    console.log ("transaction ID: ", data.id );
});


module.exports = emitter;
