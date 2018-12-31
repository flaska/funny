const fork = require('child_process').fork;

const services = [
    './server/jsServe/jsServe.main.js',
    './server/redditLoad/redditLoad.main.js',
    './server/redditServe/redditServe.main.js'
];

function spawnService(path){
    const service = fork(path, [], {env: {heroku: !!process.env.PORT}});
    service.on('message', (m)=>{
        console.log('message: ' + m);
    });
    service.on('error', (e)=>{
        console.log('error: ' + e);
    });
}

services.forEach(spawnService);
