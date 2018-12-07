const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 4000;


const redditRoutes = require('./modules/reddit/routes');

app.use(bodyParser.json());

app.use('/api/reddit', redditRoutes);

app.listen(port, () => console.log(`Funny app listening on port ${port}!`));