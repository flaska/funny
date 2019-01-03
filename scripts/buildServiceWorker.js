const testFolder = './build/';
const fs = require('fs');

fs.readdirSync(testFolder).filter(f=>f.indexOf('precache')===-0).forEach(file => {
    console.log(file);
});