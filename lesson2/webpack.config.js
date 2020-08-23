const path = require("path");
const htmlwebpackplugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  mode: "development",
  resolveLoader: {
    modules: ['./node_module', './myLoaders']
  },
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif)$/, // svg有专门的的loader处理
        use: {
          // loader: 'file-loader',
          loader: 'url-loader', // url-loader 依赖file-loader，有file-loader的所有功能
          options: {
            // name: "assets/images/[name].[ext]" // 加上路径容易出现路径对不上问题
            name: "[name].[ext]",
            outputPath: 'assets/images/',
            limit: 3 * 1024 // 处理图片转换，大于3kb直接输出独立图片文件，小于3kb将会被转成base64格式放到bundle里面
          }
        }
      },
      {
        test: /.(eot|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[ext]",
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // },
      {
        test: /.less$/,
        use: ['styleLoader', 'cssLoader', 'lessLoader']
      },
      {
        test: /\.js$/,
        use: [
          'replaceLoader',
          {
            loader: 'replaceLoaderAsync',
            options: {
              name: '老韩'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: "./src/assets/html/index.html",
      filename: "index.html"
    })
  ]
}