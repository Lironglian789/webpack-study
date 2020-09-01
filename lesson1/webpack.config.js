// webpack 自定义配置文件 
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // entry: 入口
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    login: "./src/login.js"
  },
  // output: 出口
  output: {
    // 指定输出资源的存放目录，位置
    // 必须是绝对路径
    path: path.resolve(__dirname, './build'),
    // filename: 'main.js'
    filename: '[name].js' // name 表示占位符，对应entry 的key
  },
  // 模式
  mode: "development",
  module: {
    rules: [
      {
        // loader 有执行顺序，自后往前，自右往左
        test: /\.css$/,
        // use: ['style-loader','css-loader']
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'html/index.html'
    }),
    // 把样式生成独立文件
    new miniCssExtractPlugin({
      filename: 'css/index.css'
    })

  ]
}