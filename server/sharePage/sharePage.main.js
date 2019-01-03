process.on('uncaughtException', function (err) {
    console.error(err);
})

const express = require('express'),
    app = express(),
    sharePageRoutes = require('./sharePage.routes'),
    path = require('path'),
    minifyHTML = require('express-minify-html'),
    PORT = 5004
;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

app.use('/sh', sharePageRoutes);

app.listen(PORT, () => console.log(`Share Page listening on port ${PORT}!`));