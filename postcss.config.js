module.exports = {
  plugins: [
    require('autoprefixer'),
    require("postcss-use")({ modules: ['postcss-normalize']}),
  ]
}