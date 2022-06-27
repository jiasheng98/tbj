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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/styles.css\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/redux/store */ \"./src/state/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/jiasheng/Documents/GitHub/tbj/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst myApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: _state_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"store\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__[\"PersistGate\"], {\n      loading: null,\n      persistor: _state_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"persistor\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myApp); // Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIm15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJwZXJzaXN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFDQyxXQUFEO0FBQVlDO0FBQVosQ0FBRCxLQUE0QjtBQUN4QyxzQkFDRSxxRUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUMsd0RBQWpCO0FBQUEsMkJBQ0UscUVBQUMsMkVBQUQ7QUFBYSxhQUFPLEVBQUUsSUFBdEI7QUFBNEIsZUFBUyxFQUFFQyw0REFBdkM7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVZUYsb0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4uLy4uL3B1YmxpYy9zdHlsZXMuY3NzJztcbmltcG9ydCB7c3RvcmUsIHBlcnNpc3Rvcn0gZnJvbSAnLi4vc3RhdGUvcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtQZXJzaXN0R2F0ZX0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XG5cbmNvbnN0IG15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG15QXBwO1xuXG4vLyBPbmx5IHVuY29tbWVudCB0aGlzIG1ldGhvZCBpZiB5b3UgaGF2ZSBibG9ja2luZyBkYXRhIHJlcXVpcmVtZW50cyBmb3Jcbi8vIGV2ZXJ5IHNpbmdsZSBwYWdlIGluIHlvdXIgYXBwbGljYXRpb24uIFRoaXMgZGlzYWJsZXMgdGhlIGFiaWxpdHkgdG9cbi8vIHBlcmZvcm0gYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24sIGNhdXNpbmcgZXZlcnkgcGFnZSBpbiB5b3VyIGFwcCB0b1xuLy8gYmUgc2VydmVyLXNpZGUgcmVuZGVyZWQuXG4vL1xuLy8gTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbi8vICAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuLy8gICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG4vL1xuLy8gICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/state/redux/reducers/auth.js":
/*!******************************************!*\
  !*** ./src/state/redux/reducers/auth.js ***!
  \******************************************/
/*! exports provided: SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS, UNAUTHORIZED_REDIRECT, Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_SUCCESS\", function() { return SIGN_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_FAILURE\", function() { return SIGN_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_SUCCESS\", function() { return SIGN_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNAUTHORIZED_REDIRECT\", function() { return UNAUTHORIZED_REDIRECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Auth\", function() { return Auth; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst SIGN_IN_SUCCESS = \"SIGN_IN_SUCCESS\";\nconst SIGN_IN_FAILURE = \"SIGN_IN_FAILURE\";\nconst SIGN_OUT_SUCCESS = \"SIGN_OUT_SUCCESS\";\nconst UNAUTHORIZED_REDIRECT = \"UNAUTHORIZED_REDIRECT\";\nconst INITIAL_STATE = {\n  is_authenticated: false\n};\nconst Auth = (state = INITIAL_STATE, action) => {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case SIGN_IN_SUCCESS:\n      // alert('SIGN_IN_SUCCESS')\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        is_authenticated: true\n      });\n      return state;\n\n    case SIGN_IN_FAILURE:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        is_authenticated: false\n      });\n\n    case UNAUTHORIZED_REDIRECT:\n      return INITIAL_STATE;\n\n    case SIGN_OUT_SUCCESS:\n      return INITIAL_STATE;\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcz84ZGY4Il0sIm5hbWVzIjpbIlNJR05fSU5fU1VDQ0VTUyIsIlNJR05fSU5fRkFJTFVSRSIsIlNJR05fT1VUX1NVQ0NFU1MiLCJVTkFVVEhPUklaRURfUkVESVJFQ1QiLCJJTklUSUFMX1NUQVRFIiwiaXNfYXV0aGVudGljYXRlZCIsIkF1dGgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVQLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsa0JBQWdCLEVBQUU7QUFERSxDQUF0QjtBQUlPLE1BQU1DLElBQUksR0FBRyxDQUFDQyxLQUFLLEdBQUdILGFBQVQsRUFBd0JJLE1BQXhCLEtBQW1DO0FBQ3JELFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQW9CRixNQUExQjs7QUFDQSxVQUFRQyxJQUFSO0FBQ0UsU0FBS1QsZUFBTDtBQUNFO0FBQ0FPLFdBQUssbUNBQ0FBLEtBREE7QUFFSEYsd0JBQWdCLEVBQUU7QUFGZixRQUFMO0FBSUEsYUFBT0UsS0FBUDs7QUFFRixTQUFLTixlQUFMO0FBQ0VNLFdBQUssbUNBQ0FBLEtBREE7QUFFSEYsd0JBQWdCLEVBQUU7QUFGZixRQUFMOztBQUlGLFNBQUtGLHFCQUFMO0FBQ0UsYUFBT0MsYUFBUDs7QUFDRixTQUFLRixnQkFBTDtBQUNFLGFBQU9FLGFBQVA7O0FBQ0Y7QUFDRSxhQUFPRyxLQUFQO0FBbkJKO0FBcUJELENBdkJNIiwiZmlsZSI6Ii4vc3JjL3N0YXRlL3JlZHV4L3JlZHVjZXJzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0lHTl9JTl9TVUNDRVNTID0gXCJTSUdOX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSUdOX0lOX0ZBSUxVUkUgPSBcIlNJR05fSU5fRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1NVQ0NFU1MgPSBcIlNJR05fT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfUkVESVJFQ1QgPSBcIlVOQVVUSE9SSVpFRF9SRURJUkVDVFwiO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpc19hdXRoZW50aWNhdGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRoID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNJR05fSU5fU1VDQ0VTUzpcbiAgICAgIC8vIGFsZXJ0KCdTSUdOX0lOX1NVQ0NFU1MnKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc19hdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgIGNhc2UgU0lHTl9JTl9GQUlMVVJFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc19hdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBVTkFVVEhPUklaRURfUkVESVJFQ1Q6XG4gICAgICByZXR1cm4gSU5JVElBTF9TVEFURTtcbiAgICBjYXNlIFNJR05fT1VUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gSU5JVElBTF9TVEFURTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/state/redux/reducers/auth.js\n");

/***/ }),

/***/ "./src/state/redux/store.js":
/*!**********************************!*\
  !*** ./src/state/redux/store.js ***!
  \**********************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"persistor\", function() { return persistor; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/auth */ \"./src/state/redux/reducers/auth.js\");\n\n\n\n\n\nconst config = {\n  key: \"root\",\n  version: 1,\n  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default.a\n};\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__[\"persistCombineReducers\"])(config, {\n  auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__[\"Auth\"]\n}), Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\nconst persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__[\"persistStore\"])(store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcmVkdXgvc3RvcmUuanM/NTAxZiJdLCJuYW1lcyI6WyJjb25maWciLCJrZXkiLCJ2ZXJzaW9uIiwic3RvcmFnZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJwZXJzaXN0Q29tYmluZVJlZHVjZXJzIiwiYXV0aCIsIkF1dGgiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxLQUFHLEVBQUUsTUFEUTtBQUViQyxTQUFPLEVBQUUsQ0FGSTtBQUdiQyxTQUFPLEVBQUVBLGdFQUFPQTtBQUhILENBQWY7QUFLTyxNQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQzlCQyw0RUFBc0IsQ0FBQ04sTUFBRCxFQUFTO0FBQzdCTyxNQUFJLEVBQUVDLG1EQUFJQTtBQURtQixDQUFULENBRFEsRUFJOUJDLDZEQUFlLENBQUNDLGtEQUFELENBSmUsQ0FBekI7QUFNQSxNQUFNQyxTQUFTLEdBQUdDLGtFQUFZLENBQUNSLEtBQUQsQ0FBOUIiLCJmaWxlIjoiLi9zcmMvc3RhdGUvcmVkdXgvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdENvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi9yZWR1Y2Vycy9hdXRoXCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAga2V5OiBcInJvb3RcIixcbiAgdmVyc2lvbjogMSxcbiAgc3RvcmFnZTogc3RvcmFnZSxcbn07XG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcGVyc2lzdENvbWJpbmVSZWR1Y2Vycyhjb25maWcsIHtcbiAgICBhdXRoOiBBdXRoLFxuICB9KSxcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuKTtcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/state/redux/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCI/Njc4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1wZXJzaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-persist\n");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/integration/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCI/ZGFmOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-persist/integration/react\n");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI/ZWIyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-persist/lib/storage\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });