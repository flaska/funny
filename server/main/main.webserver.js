const express = require('express'),
    compression = require('compression'),
    app = express(),
    join = require('path').join,

    httpProxy = require('http-proxy')
;

const PORT = process.env.PORT || 4000;

app.use(function(req, res, next) {
    if (process.env.PORT) {
        if (req.headers['x-forwarded-proto'] != 'https') {
            res.redirect(302, 'https://' + req.hostname + req.originalUrl);
        }
        else {
            next();
        }
    } else {
        next();
    }
});

app.use(compression());

const proxy = httpProxy.createProxyServer({});

app.use((req, res, next)=>{
    try {
        if (req.originalUrl.indexOf('/api/reddit') === 0) return proxy.web(req, res, {target: 'http://127.0.0.1:5002'});
        if (req.originalUrl.indexOf('/api/sharePage') === 0) return proxy.web(req, res, {target: 'http://127.0.0.1:5003'});
        proxy.web(req, res, {target: 'http://127.0.0.1:5001'});
    } catch (e) {
        res.status(404).send();
    }
});

app.listen(PORT, () => console.log(`Funny app listening on port ${PORT}!`));
