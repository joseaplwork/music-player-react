const webpack = require('webpack');
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const devConfig = require('../webpack/webpack.dev.conf');
const app = express();
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

app.listen(3000);
