const webpack = require('webpack');
const path = require('path');
const modules = [
  path.resolve(process.cwd(), 'app'),
  path.resolve(process.cwd(), 'node_modules'),
];

module.exports = {
  context: path.resolve(process.cwd(), 'app'),
  devtool: 'inline-source-map',
  entry: {
    app: [
      './app.js'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ],
  module: {
    noParse: [
      /node_modules(\\|\/)sinon/,
      /node_modules(\\|\/)acorn/,
    ],
    loaders: [{
      test: /\.js?/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
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
    },{
      test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
      loader: 'imports?define=>false,require=>false',
    }],
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  // required for enzyme to work properly
  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
  resolve: {
    modules,
    alias: {
      // required for enzyme to work properly
      MP: path.resolve(process.cwd(), 'app'),
      sinon: 'sinon/pkg/sinon',
    },
  },
};