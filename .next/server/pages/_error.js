module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/_error.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_error.js":
/*!*****************************!*\
  !*** ./src/pages/_error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jiasheng/Documents/GitHub/tbj/src/pages/_error.js\";\n// function Error({ statusCode }) {\n//   return (\n//     <p>\n//       {statusCode\n//         ? `An error ${statusCode} occurred on server`\n//         : 'An error occurred on client'}\n//     </p>\n//   )\n// }\n// Error.getInitialProps = ({ res, err }) => {\n//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404\n//   return { statusCode }\n// }\n// export default Error\n\n\n\nconst Page = ({\n  errorCode,\n  stars\n}) => {\n  if (errorCode) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      statusCode: errorCode\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [\"Next stars: \", stars]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 10\n  }, undefined);\n};\n\nPage.getInitialProps = async () => {\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://api.github.com/repos/zeit/next.js');\n  const errorCode = res.statusCode > 200 ? res.statusCode : false;\n  const json = await res.json();\n  return {\n    errorCode,\n    stars: json.stargazers_count\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2Vycm9yLmpzPzUxMTMiXSwibmFtZXMiOlsiUGFnZSIsImVycm9yQ29kZSIsInN0YXJzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJzdGF0dXNDb2RlIiwianNvbiIsInN0YXJnYXplcnNfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQTBCO0FBQ3JDLE1BQUlELFNBQUosRUFBZTtBQUNiLHdCQUFPLHFFQUFDLGlEQUFEO0FBQU8sZ0JBQVUsRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELHNCQUFPO0FBQUEsK0JBQWtCQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBTkQ7O0FBUUFGLElBQUksQ0FBQ0csZUFBTCxHQUF1QixZQUFZO0FBQ2pDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyx5REFBSyxDQUFDLDJDQUFELENBQXZCO0FBQ0EsUUFBTUosU0FBUyxHQUFHRyxHQUFHLENBQUNFLFVBQUosR0FBaUIsR0FBakIsR0FBdUJGLEdBQUcsQ0FBQ0UsVUFBM0IsR0FBd0MsS0FBMUQ7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUgsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUFFTixhQUFGO0FBQWFDLFNBQUssRUFBRUssSUFBSSxDQUFDQztBQUF6QixHQUFQO0FBQ0QsQ0FORDs7QUFRZVIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8cD5cbi8vICAgICAgIHtzdGF0dXNDb2RlXG4vLyAgICAgICAgID8gYEFuIGVycm9yICR7c3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gc2VydmVyYFxuLy8gICAgICAgICA6ICdBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQnfVxuLy8gICAgIDwvcD5cbi8vICAgKVxuLy8gfVxuXG4vLyBFcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XG4vLyAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0XG4vLyAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBFcnJvclxuXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcidcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IFBhZ2UgPSAoeyBlcnJvckNvZGUsIHN0YXJzIH0pID0+IHtcbiAgaWYgKGVycm9yQ29kZSkge1xuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17ZXJyb3JDb2RlfSAvPlxuICB9XG5cbiAgcmV0dXJuIDxkaXY+TmV4dCBzdGFyczoge3N0YXJzfTwvZGl2PlxufVxuXG5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgY29uc3QgZXJyb3JDb2RlID0gcmVzLnN0YXR1c0NvZGUgPiAyMDAgPyByZXMuc3RhdHVzQ29kZSA6IGZhbHNlXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHsgZXJyb3JDb2RlLCBzdGFyczoganNvbi5zdGFyZ2F6ZXJzX2NvdW50IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_error.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/error\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCI/YzFkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0L2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/error\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });