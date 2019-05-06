const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

function server(config) {
  const compiler = webpack(config);
  const app = express();

  const options = {
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: config.output.publicPath,
  };

  app.use(hotMiddleware(compiler));
  app.use(devMiddleware(compiler, options));

  app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    /* eslint-disable consistent-return */
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }

      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
    /* eslint-enable consistent-return */
  });

  return app;
}

module.exports = server;
