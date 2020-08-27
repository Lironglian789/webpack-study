const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js',
    detail: './src/detail.js',
    list: './src/list.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
    ]
  },
  devtool: 'scheap-module-eval-source-map', //  开发环境配置
  // devtool:"cheap-module-source-map", // 线上⽣成配置
  plugins: [
    new htmlwebpackplugin({
      title: "My App",
      template: "./src/assets/html/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new htmlwebpackplugin({
      title: "My App",
      template: "./src/assets/html/detail.html",
      filename: "detail.html",
      chunks: ["detail"]
    }),
    new htmlwebpackplugin({
      title: "My App",
      template: "./src/assets/html/list.html",
      filename: "list.html",
      list: ["detail"]
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    open: true,
    // 注意启动HMR后，css抽离会不⽣效，还有不⽀持contenthash，chunkhash
    hot: true, // js热模块替换
    hotOnly:true, // css热模块替换 HMR不⽣效，浏览器也不⾃动刷新，就开启hotOnly
    port: 8081,
    proxy: {
      "/api":{
        target: " http://localhost:9090"
      } 
    }
  }
}