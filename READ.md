# webpack核心概念  
  entry： webpak 执行构建的入口，默认 ./src/index.js  
  output：配置资源输出的位置和名称
  mode： 打包的模式， 有开发模式，不压缩代码， 利于阅读查找抛错，生产模式，代码会被压缩    
  chunk：代码片段，由入口模块文件与依赖模块的内容生成   
  module：模块， webpack 基于nodeJS，有一切皆模块的概念   
  bundle：打包后输出到资源目录的文件， 构建成功的输出文件
  loader：模块转换，webpack默认只支持js模块，json模块，像css模块，图片模块都不支持
  plugin：webpack功能扩展


# MPA and SAP
  map 多页面应用，也就有多个入口
  spa 单页面应用，只有一个入口


  SPA bundle ===》chunk ===》 多个module

  从entry入口找到所有的module构建成一个chunk，包装成一个bundle，
  所以一个entry，一个chunk，一个bundle

  # 文件结构说明
  lesson1 ----- webpack基础
  lesson2 ----- 前端开发工程环境搭建-01 (loader)
  lesson3 ----- 前端开发工程环境搭建-02 (plugin, HMR)
  lesson4 ----- webpack性能优化