const testConfig = require('./webpack/webpack.test.conf');
const path = require('path');

module.exports = config => {
  config.set({
  //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
  basePath : __dirname + '/',

  // testing framework, be sure to install the karma plugin
  frameworks: ['jasmine'],

  // coverage reporter generates the coverage
  reporters: ['coverage','mocha'],

  // browsers to test against, be sure to install the correct karma browser launcher plugin
  browsers: ['jsdom'],

  // karma has its own autoWatch feature but Grunt watch can also do this
  autoWatch: false,
  singleRun : true,

  // files to include, ordered by dependencies
  files : [
    'test/test-entry-point.js',
  ],

  preprocessors: {
    'test/test-entry-point.js': ['webpack', 'sourcemap']
  },

  webpack: testConfig,
  webpackMiddleware: {
    noInfo: true,
    stats: 'errors-only',
  },

  coverageReporter: {
    dir: path.join(process.cwd(), 'coverage'),
    reporters: [
      { type: 'lcov', subdir: 'lcov' },
      { type: 'html', subdir: 'html' },
      { type: 'text-summary' },
    ],
  }
})}
