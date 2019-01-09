process.on('uncaughtException', function (err) {
    console.error(err);
});

const express = require('express'),
    app = express(),
    routes = require('./serverRender.routes'),
    PORT = 5005
;

app.use('/api/serverRender', routes);

app.listen(PORT, () => console.log(`ServerRender listening on port ${PORT}!`));