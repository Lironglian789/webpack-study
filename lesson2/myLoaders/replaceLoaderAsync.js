// loader -> 拿到一个模块的内容 -> 对内容进行处理 -> 传递给下一个loader
// loader 普通函数 但不可以是箭头函数
// loader 一定要有返回值
// 如何配置loader 如何接收参数
// loader 中有异步函数如何处理
// 多个loader 如何处理， 注意顺序

// 异步处理
module.exports = function (source) {
  console.log(this.query)
  // return source.replace('laohan', this.query.name) // webpack.config.js 配置的内容

  // let result = source.replace('laohan', '阿西吧')
  // this.callback(null, result)

  // 异步处理
  const callback = this.async()
  setTimeout(() => {
    let result = source.replace('laohan', '阿西吧')
    callback(null, result)
  }, 2000)
}