//babel: npm install webpack@4.42.0 webpack-cli@3.3.12 webpack-node-externals@1.7.2 @babel/core@7.10.4 babel-loader@8.1.0 @babel/preset-env@7.10.4 @babel/preset-react@7.10.4 --save-dev

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactApp from '../src/App';
import path from 'path';
import fs from 'fs';

const app = express();



app.get('/', (req, res) => {

    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, str) => {
        if (err) return res.status(500).send('Smth went wrong!');
        return res.send(
            str.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<ReactApp/>)}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(5000);