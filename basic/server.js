
const express = require("express");

const app = express();
const PORT = 3000;

// JSON request body-a parse panna
app.use(express.json());

// Temporary in-memory data
let token = {
    name: "Aravinth Token",
    symbol: "ARVI",
    network: "Ethereum",
    totalSupply: 10000000
};

// GET: Token details fetch
app.get("/token", (req, res) => {
    res.status(200).json(token);
});

// POST: New token record create
app.post("/token", (req, res) => {
    const { name, symbol, network, totalSupply } = req.body;

    if (!name || !symbol || !network ||
        typeof totalSupply !== "number" ||
        !Number.isFinite(totalSupply) ||
        totalSupply <= 0) {
        return res.status(400).json({
            error: "Valid token details are required"
        });
    }

    token = { name, symbol, network, totalSupply };

    res.status(201).json({
        message: "Token created successfully",
        token
    });
});

// PATCH: Token name update
app.patch("/token", (req, res) => {
    const { name } = req.body;

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            error: "A valid token name is required"
        });
    }

    token.name = name.trim();

    res.status(200).json({
        message: "Token name updated",
        token
    });
});

// DELETE: Token record reset
app.delete("/token", (req, res) => {
    token = null;

    res.status(200).json({
        message: "Token record deleted"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Server is healthy"
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
