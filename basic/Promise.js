function getTokenPrice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(250);
        }, 2000);
    });
}
async function main() {
    const price = await getTokenPrice();
    console.log(price);
}
async function getLatestBlock(provider) {
    try {
        const blockNumber = await provider.getBlockNumber();

        return blockNumber;
    } catch (error) {
        console.error("Failed to fetch block:", error.message);
        throw error;
    }
}

main();