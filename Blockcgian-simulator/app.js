const createTransaction = require("./transaction");

async function main() {

    try {

        const result = await createTransaction(
            "0xAlice",
            "0xBob",
            100
        );

        console.log("\nFinal Transaction:");
        console.log(result);

    } catch (error) {

        console.error("Transaction Failed:", error.message);

    }
}

main();