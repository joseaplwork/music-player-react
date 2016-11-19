module.exports = {
  plugins: [
    // require('postcss-normalize'),
    require('autoprefixer'),
    require("postcss-use")({ modules: ['postcss-normalize']}),
  ]
}