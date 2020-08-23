// loader -> 拿到一个模块的内容 -> 对内容进行处理 -> 传递给下一个loader
// loader 普通函数 但不可以是箭头函数
// loader 一定要有返回值
// 如何配置loader 如何接收参数
// loader 中有异步函数如何处理
// 多个loader 如何处理， 注意顺序
module.exports = function (source) {
  return source.replace('hello', '你好')
}