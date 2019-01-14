import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import ServerApp from "./serverApp.component";

const PORT = process.env.PORT || 5001;
const app = express();

app.get(['/sh/*', '/index.html', '/'], (req, res) => {
    const app = ReactDOMServer.renderToString(<ServerApp/>);
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        return res.send(
            data.replace('--content--', app)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});