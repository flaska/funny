const express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    app = express(),
    join = require('path').join
;


const PORT = process.env.PORT || 4000;

app.use(compression());
app.use(bodyParser.json());

require('./modules/reddit/redditMain').init(app);

const staticPath = join(process.cwd(), 'build');
app.use(express.static(staticPath));

app.listen(PORT, () => console.log(`Funny app listening on port ${PORT}!`));