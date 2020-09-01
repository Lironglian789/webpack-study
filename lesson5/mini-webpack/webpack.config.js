const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'develoment',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  }
}