const express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    app = express(),
    join = require('path').join,
    redditRoutes = require('./modules/reddit/routes')

;

const PORT = process.env.PORT || 4000;

app.use(compression());
app.use(bodyParser.json());

const staticPath = join(process.cwd(), 'build');
app.use(express.static(staticPath));

app.use('/api/reddit', redditRoutes);

app.listen(PORT, () => console.log(`Funny app listening on port ${PORT}!`));