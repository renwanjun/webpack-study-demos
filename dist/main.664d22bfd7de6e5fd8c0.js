/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_study"] = self["webpackChunkwebpack_study"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction component() {\n    const element = document.createElement('div')\n\n    const button = document.createElement('button')\n    const br = document.createElement('br')\n\n    button.innerHTML = 'Click2 me and look at the console!';\n\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');\n    element.appendChild(br);\n    element.appendChild(button);\n\n    // Note that because a network request is involved, some indication\n    // of loading would need to be shown in a production-level site/app.\n    button.onclick = e => __webpack_require__.e(/*! import() | print */ \"print\").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ \"./src/print.js\")).then(module => {\n        // 注意当调用ES6模块的import()方法引入模块时，必须指向模块的.default值，因为它才是promise被处理后返回的实际的module对象\n        const print = module.default;\n\n        print();\n    });\n\n    return element;\n}\n\ndocument.body.appendChild(component())\n\n//# sourceURL=webpack://webpack-study/./src/index.js?");

/***/ })

},
0,[["./src/index.js","runtime","vendors"]]]);