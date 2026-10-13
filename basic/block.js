require("dotenv").config();

const { ethers } = require("ethers");

async function getLatestBlock() {
    try {
        const rpcUrl = process.env.RPC_URL;

        if (!rpcUrl) {
            throw new Error("RPC_URL is missing");
        }

        const provider = new ethers.JsonRpcProvider(rpcUrl);

        const network = await provider.getNetwork();
        const blockNumber = await provider.getBlockNumber();

        console.log("Chain ID:", network.chainId.toString());
        console.log("Latest block:", blockNumber);
    } catch (error) {
        console.error("Blockchain error:", error.message);
    }
}

getLatestBlock();