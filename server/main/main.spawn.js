const fork = require('child_process').fork;

const services = [
    './server/jsServe/jsServe.main.js',
    './server/redditLoad/redditLoad.main.js',
    './server/redditServe/redditServe.main.js',
    './server/sharePersist/sharePersist.main.js',
    // './server/sharePage/sharePersist.main.js'
];

function spawnService(path){
    const service = fork(path, [], {env: {heroku: !!process.env.PORT, NODE_ENV: process.env.NODE_ENV}});
    service.on('message', (m)=>{
        console.log('message: ' + m);
    });
    service.on('error', (e)=>{
        console.log('error: ' + e);
    });
}

services.forEach(spawnService);
