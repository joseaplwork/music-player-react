const express = require('express');
const path = require('path');
const compression = require('compression');

// Dev
const runDevServer = (app) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const devConfig = require('../webpack/webpack.dev.conf');
  const compiler = webpack(devConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/',
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};

// Production
const runProdServer = (app) => {
  const publicPath = '/';
  const outputPath = path.resolve(process.cwd(), 'dist');

  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
};

module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    runProdServer(app, options);
  } else {
    runDevServer(app);
  }

  return app;
};
