/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/index.less":
/*!***********************************!*\
  !*** ./src/assets/css/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ele = document.createElement('style');\n    ele.innerHTML = \"body div {\\n  border: 1px solid red;\\n}\\n\";\n    document.head.appendChild(ele)\n  \n\n//# sourceURL=webpack:///./src/assets/css/index.less?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/index.less */ \"./src/assets/css/index.less\");\n/* harmony import */ var _assets_css_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log('你好, 阿西吧');\n\n\n// import './assets/css/index.css'\n\n// import pic from './assets/images/logo.png'\n// console.log(pic);\n// var img = new Image()\n// img.src = pic\n// var root = document.getElementById('app')\n// root.append(img)\n\n\n// 前端开发环境\n// 这个项目是什么类型的项目，目标环境是什么？\n// 是spa 移动端 mpa pc端？\n// 这个项目的团队 2+ 制定代码规范，提交规范\n// html css assests img font\n// js =>es6+ 模块化。vue/ react 等技术栈\n\n// 提升本地开发体验的服务\n// -> 快速定位错误信息\n// -> 本地mock数据，解决跨域问题\n// -> 自动打开浏览器窗口，代码修改后刷新页面\n\n// 线上发布\n// -> 代码压缩，资源压缩\n// -> css html js 图片\n\n// 数据收集\n// 前端错误收集 报警\n// 前端性能监控\n// 环境数据\n// -> 用户分布 通过用户的访问ip pv/uv\n// -> 浏览器头部信息：用户的使用群体，手机多一些，还是pc多一些，什么型号，最终得出需要兼容哪些浏览器，什么版本，手机浏览器的型号\n// -> 用户的行为收集：得到用户的停留时间，点击过程，得出用户信息的热力图（可以很简单的得出哪些广告位，热门业务）\n\n\n\n// 图片资源处理\n// js css html\n\n\n// 如何自己编写一个loader\n// 目标：彻底搞懂loader的原理，流程\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });