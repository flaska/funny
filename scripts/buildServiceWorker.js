const testFolder = './build/';
const fs = require('fs');

fs.readdirSync(testFolder).filter().forEach(file => {
    console.log(file);
});