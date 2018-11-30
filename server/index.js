const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 4000;


const redditFunnyRoutes = require('./modules/redditFunny/routes');

app.use(bodyParser.json());

app.use('/api/redditFunny', redditFunnyRoutes);

app.listen(port, () => console.log(`Funny app listening on port ${port}!`));