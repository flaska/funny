import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import Main from '../../src/modules/main/main.component';

const PORT = process.env.PORT || 5005;
const app = express();

// app.use(express.static('./build'));

app.get('/*', (req, res) => {
    const app = ReactDOMServer.renderToString(<Main/>);
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        console.log('content');
        console.log(app);

        return res.send(
            data.replace('--content--', app)
        );
    });
});

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});