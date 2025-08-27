const fs = require('fs');

function writeDummyMessage() {
    setTimeout(() => {
        fs.writeFileSync('message.txt', 'DUMMY');
    }, 5000);
    console.log("Hello");
}

module.exports = writeDummyMessage;