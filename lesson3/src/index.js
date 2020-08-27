import './assets/css/index.less'
import counter from './counter'
import number from './number'

// source-map 测试
console.log('你好')

// 跨出代理
import axios from 'axios'
axios.get('/api/info').then((res => {
  console.log(res)
}))

// css 热模块更新
var btn = document.createElement("button");
btn.innerHTML = "新增";
document.body.appendChild(btn);
btn.onclick = function () {
  var div = document.createElement("div");
  div.innerHTML = "item";
  document.body.appendChild(div);
};

// js HMR
counter()
number()
// 需要开启配置hot: true
if (module.hot) {
  module.hot.accept('./number.js', function () {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}


// 配置React打包环境
// 安装babel与react转换的插件：npm install --save-dev @babel/preset-react
// import react, {component} from 'react'
// import reactDom from 'react-dom'
// class APP extends component {
//   render () {
//     return <div>hello world</div>
//   }
// }
// reactDom.render(<APP/>, document.getElementById('app'))