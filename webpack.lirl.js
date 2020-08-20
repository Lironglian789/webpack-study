// webpack 自定义配置文件 
const path = require('path')
module.exports = {
  // entry: 入口
  entry: "./src/index.js",
  // output: 出口
  output: {
    // 指定输出资源的存放目录，位置
    // 必须是绝对路径
    path: path.resolve(__dirname, './lirl'),
    filename: 'main.js'
  },
  // 模式
  mode: "development"
}