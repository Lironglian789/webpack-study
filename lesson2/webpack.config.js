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
        //use使⽤⼀个loader可以⽤对象，字符串，两个loader需要⽤数组
        use: {
          // loader: 'file-loader',
          loader: 'url-loader', // url-loader 依赖file-loader，有file-loader的所有功能
          options: {  // options额外的配置，⽐如资源名称
            // name: "assets/images/[name].[ext]" // 加上路径容易出现路径对不上问题
            // placeholder 占位符 [name]⽼资源模块的名称
            // [ext]⽼资源模块的后缀
            // https://webpack.js.org/loaders/file-loader#placeholders
            // name: "[name]_[hash].[ext]",
            name: "[name].[ext]",  //打包后的存放位置
            outputPath: 'assets/images/',
            limit: 3 * 1024 // 处理图片转换，大于3kb直接输出独立图片文件，小于3kb将会被转成base64格式放到bundle里面
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[ext]",
          }
        }
      },
      { // Css-loader 分析css模块之间的关系，并合成⼀个css
        // Style-loader 会把css-loader⽣成的内容，以style挂载到⻚⾯的heade部分
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // },
      {
        // less-load 把less语法转换成css  loader有顺序，从右到左，从下到上
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