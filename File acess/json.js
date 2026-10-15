const fs = require("node:fs/promises");

const Token = {
    name : "Aravinth",
    symbol: "ARVI",
    decimal: "17",
};

async function writetoken(){
   try{
    await fs.writeFile(
        "token.json", JSON.stringify(Token,null,2)
    );
    console.log("Token data saved");
   } catch(error){
    console.error("file error",error.message);
   }


}
writetoken();