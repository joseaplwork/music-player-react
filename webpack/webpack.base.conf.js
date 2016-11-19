/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  resolve: {
    modules: [
      'app',
      'node_modules'
    ],
    alias: {
      MP: path.resolve(process.cwd(), 'app'),
    },
    extensions: [
      '.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  entry: options.entry,
  output: Object.assign({ // Compile into js/dist.js
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '',
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [{
      test: /\.js?/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        'css?modules&?sourceMap&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'postcss-loader',
        'resolve-url',
        'sass?sourceMap'
      ]
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        'file-loader',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    },].concat(options.loaders),
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ]),
  devtool: options.devtool,
});
