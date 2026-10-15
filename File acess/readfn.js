const fs = require("node:fs/promises");

async function readfile(){
   try{
   const data = await fs.readFile("token.json", "utf8");
   const token = JSON.parse(data);
   console.log("Token:",token.name);
   console.log("Symbol:",token.symbol);
} catch (error) {
        console.error("Read failed:", error.message);
    }
}

readfile();
