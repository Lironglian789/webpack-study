const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob') // 实现路径的模糊匹配
const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.resolve(__dirname, './src/*/index.js'))
  // console.log(entryFiles);
  entryFiles.map(item => {
    const entryFile = item
    const match = entryFile.match(/src\/(.*)\/index\.js$/)
    // console.log(match)
    const pageName = match && match[1]
    console.log(pageName);
    entry[pageName] = entryFile
    htmlWebpackPlugins.push(new htmlWebpackPlugin({
      template: path.join(__dirname, `./src/${pageName}/index.html`),
      filename: `${pageName}.html`,
      chunks: [pageName]
    }))
  })
  return {
    entry,
    htmlWebpackPlugins
  }
}
const {entry, htmlWebpackPlugins} = setMPA()

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  mode: 'development',
  plugins: [...htmlWebpackPlugins]
}

