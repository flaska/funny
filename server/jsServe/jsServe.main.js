const express = require('express'),
    app = express(),
    join = require('path').join,
    PORT = 5001
;

const staticPath = join(process.cwd(), 'build');
app.use(express.static(staticPath));

app.get('/f/*', (req, res) => {
    res.sendfile(staticPath + '/index.html');
});

app.listen(PORT, () => console.log(`jsServe listening on port ${PORT}!`));