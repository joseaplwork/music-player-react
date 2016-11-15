'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_PATH = path.join(process.cwd(), 'app');
var BUILD_PATH = path.join(process.cwd(), 'dist');

module.exports = require('./webpack.base.conf')({
  context: APP_PATH,
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
    ],
  },
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: APP_PATH + '/index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  preLoaders:[{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  }]
});
