process.on('uncaughtException', function (err) {
    console.error(err);
})

require('./main/main.spawn');
require('./main/main.webserver');