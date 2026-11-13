const fs = require("node:fs/promises");
const path = require("node:path");

const FILE = path.join(__dirname, "transactions.json");

async function getTransactions() {
    try {
        const data = await fs.readFile(FILE, "utf8");
        if (!data.trim()) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }
        throw error;
    }
}

async function saveTransaction(transaction) {
    const transactions = await getTransactions();

    transactions.push(transaction);

    await fs.writeFile(
        FILE,
        JSON.stringify(transactions, null, 2)
    );
}

module.exports = {
    getTransactions,
    saveTransaction
};