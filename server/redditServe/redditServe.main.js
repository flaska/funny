const express = require('express'),
    app = express(),
    redditServeRoutes = require('./redditServe.routes'),
    // bodyParser = require('body-parser'),
    PORT = 5002
;

// app.use(bodyParser.json());
app.use('/api/reddit', redditServeRoutes);

app.listen(PORT, () => console.log(`Reddit Serve listening on port ${PORT}!`));