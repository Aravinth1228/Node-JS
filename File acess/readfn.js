const fs = require('node:fs/promises');

async function readtoken(){
    const data = await fs.readFile("token.txt", "Hi IM Aravinth");
    console.log(data);
}

readtoken().catch(console.error);