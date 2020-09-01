const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverser = require('@babel/traverse').default
const {transformFromAst} = require('@babel/core')
const { constants } = require('buffer')

module.exports = class webpack {
  constructor (options) {
    // console.log(options)
    this.entry = options.entry
    this.output = options.output
    this.modules = []
  }
  run () {
    const info = this.parse(this.entry)
    // console.log(info)
    this.modules.push(info)
    for(let i = 0; i <this.modules.length; i++) {
      const item = this.modules[i]
      const {dependencies} = item
      if (dependencies) {
        for(let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]))  // 递归处理
        }
      }
    }
    // console.log(this.modules)
    // 转成对象
    const obj = {}
    this.modules.forEach(item => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code
      }
    })
    // console.log(obj)
    // 生成文件
    this.file(obj)
  }
  parse (entryFile) {
    // 读取入口模块的内容
    const content = fs.readFileSync(entryFile, "utf-8")
    // console.log(content)
    const ast = parser.parse(content, {
      sourceType: 'module'
    })
    // console.log(ast.program.body)
    const dependencies = {}
    const _this = this
    traverser(ast, { // 过滤处理，提取依赖
      ImportDeclaration({node}) {
        // console.log(node.source.value)
        const pathName = './' + path.join(path.dirname(entryFile), node.source.value) 
        // console.log(pathName)
        const exists = _this.modules.some(module => module.entryFile === pathName)
        if(exists) {
          throw new Error('循环依赖')
        }
        dependencies[node.source.value] = pathName
      }
    })
    // console.log(dependencies)
    const {code} = transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })
    // console.log(code)
    return {entryFile, dependencies, code}
  }
  file (code) {
    // 生成bundle启动器函数
    const filePath = path.join(this.output.path, this.output.filename)
    const newCode = JSON.stringify(code)
    const bundle = `(function(graph) {
      function require(module) {
        function otherRequire (relativePath) {
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function (require, exports, code) {
          eval(code)
        })(otherRequire, exports, graph[module].code)
        return exports
      }
      require('${this.entry}')
    })(${newCode})`
    // 根据位置生成资源文件
    fs.writeFileSync(filePath, bundle, 'utf-8')
  }
}