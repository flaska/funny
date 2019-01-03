const testFolder = './build/';
const fs = require('fs');

let precacheFilename = fs.readdirSync(testFolder).filter(f=>f.indexOf('precache')===-0)[0];
let serviceWorkerCode = fs.readFileSync('./scripts/templates/serviceWorkerTemplate.js', 'utf8');
serviceWorkerCode = serviceWorkerCode.replace(new RegExp('--precache-filename--','g'), precacheFilename);
fs.writeFileSync("./build/slackServiceWorker.js", serviceWorkerCode);
fs.unlinkSync('./build/service-worker.js');

console.log('Service worker created');