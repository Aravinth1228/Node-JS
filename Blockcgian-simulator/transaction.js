const { randomUUID } = require("node:crypto");

const emitter = require("./events");

const { saveTransaction } = require("./database");

async function createTransaction(from, to, amount) {

    if (!from || !to || !Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid transaction details");
    }

    const transaction = {
        id: randomUUID(),
        from,
        to,
        amount,
        status: "PENDING",
        createdAt: new Date().toISOString()
    };

    // Save transaction
    await saveTransaction(transaction);

    // Emit event
    emitter.emit("transactionCreated", transaction);

    // Simulate confirmation after 2 seconds
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    transaction.status = "CONFIRMED";

    console.log("Transaction status updated:", transaction.status);

    emitter.emit("transactionConfirmed", transaction);

    return transaction;
}

module.exports = createTransaction;