'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_PATH = path.join(process.cwd(), 'app');
var BUILD_PATH = path.join(process.cwd(), 'dist');

module.exports = require('./webpack.base.conf')({
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    APP_PATH + '/app.js',
  ],
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: APP_PATH + '/index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  }],
});
