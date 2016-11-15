const webpack = require('webpack');
const path = require('path');

module.exports = require('./webpack.base.conf')({
  context: path.resolve(process.cwd(), 'app'),
  devtool: 'inline-source-map',
  entry: {
    app: [
      './app.js'
    ]
  },
  plugins: [],
});