const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const server = require('./server').default;
const port = process.env.SSR_PORT || 3000;

const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'dist')));

const statsPath = '../dist/stats.json';
app.use(server(require(statsPath)));

/* eslint-disable no-console */
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`SSR Server started at http://localhost:${port}`);
});
/* eslint-enable no-console */
