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

/***/ "./src/comment/actions.js":
/*!********************************!*\
  !*** ./src/comment/actions.js ***!
  \********************************/
/*! exports provided: proxyActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proxyActions\", function() { return proxyActions; });\n/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n/* harmony import */ var _elements_buildCommentUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/buildCommentUI */ \"./src/comment/elements/buildCommentUI.js\");\n\n\n\n/**\n *\n * @param {Object} target\n * @param {string} prop\n * @param {any} value\n *\n * @description - comment is added through proxy, this function runs once user\n *              - tries adding a comment, it is responsible for calling the\n *              - comment html builder\n */\nconst addCommentProxy = (target, prop, value) => {\n  // check the property to set\n  if (prop == \"comments\") Object(_elements_buildCommentUI__WEBPACK_IMPORTED_MODULE_1__[\"buildCommentUI\"])(value);\n  return value;\n};\n\nconst displayCommentProxy = (target, prop) => {\n  if (prop == \"comments\")\n    target[prop].forEach((comment) => {\n      Object(_elements_buildCommentUI__WEBPACK_IMPORTED_MODULE_1__[\"buildCommentUI\"])(comment);\n    });\n\n  return target[prop];\n};\nconst proxyActions = {\n  set: addCommentProxy,\n\n  get: displayCommentProxy,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9hY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnQvYWN0aW9ucy5qcz82ZWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZyB9IGZyb20gXCIuLi9oZWxwZXJzL2xvZ2dlclwiO1xuaW1wb3J0IHsgYnVpbGRDb21tZW50VUkgfSBmcm9tIFwiLi9lbGVtZW50cy9idWlsZENvbW1lbnRVSVwiO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uIC0gY29tbWVudCBpcyBhZGRlZCB0aHJvdWdoIHByb3h5LCB0aGlzIGZ1bmN0aW9uIHJ1bnMgb25jZSB1c2VyXG4gKiAgICAgICAgICAgICAgLSB0cmllcyBhZGRpbmcgYSBjb21tZW50LCBpdCBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGVcbiAqICAgICAgICAgICAgICAtIGNvbW1lbnQgaHRtbCBidWlsZGVyXG4gKi9cbmNvbnN0IGFkZENvbW1lbnRQcm94eSA9ICh0YXJnZXQsIHByb3AsIHZhbHVlKSA9PiB7XG4gIC8vIGNoZWNrIHRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgaWYgKHByb3AgPT0gXCJjb21tZW50c1wiKSBidWlsZENvbW1lbnRVSSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50UHJveHkgPSAodGFyZ2V0LCBwcm9wKSA9PiB7XG4gIGlmIChwcm9wID09IFwiY29tbWVudHNcIilcbiAgICB0YXJnZXRbcHJvcF0uZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgYnVpbGRDb21tZW50VUkoY29tbWVudCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbn07XG5leHBvcnQgY29uc3QgcHJveHlBY3Rpb25zID0ge1xuICBzZXQ6IGFkZENvbW1lbnRQcm94eSxcblxuICBnZXQ6IGRpc3BsYXlDb21tZW50UHJveHksXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/comment/actions.js\n");

/***/ }),

/***/ "./src/comment/commentActions.js":
/*!***************************************!*\
  !*** ./src/comment/commentActions.js ***!
  \***************************************/
/*! exports provided: addComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments */ \"./src/comment/comments.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/comment/actions.js\");\n/* harmony import */ var _helpers_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/validator */ \"./src/helpers/validator.js\");\n/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n\n\n\n\n\n\nlet commentProxy = new Proxy(_comments__WEBPACK_IMPORTED_MODULE_0__[\"comments\"], _actions__WEBPACK_IMPORTED_MODULE_1__[\"proxyActions\"]);\ncommentProxy.comments\n\nconst addComment = ({username, body, time}) => {\n  commentProxy.comments ={\n    username,\n    body,\n    time\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9jb21tZW50QWN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tZW50L2NvbW1lbnRBY3Rpb25zLmpzPzI3YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tbWVudHMgfSBmcm9tIFwiLi9jb21tZW50c1wiXG5pbXBvcnQgeyBwcm94eUFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zXCJcbmltcG9ydCB7IHZhbGlkYXRlTGVuZ3RoIH0gZnJvbSBcIi4uL2hlbHBlcnMvdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi4vaGVscGVycy9sb2dnZXJcIjtcblxuXG5sZXQgY29tbWVudFByb3h5ID0gbmV3IFByb3h5KGNvbW1lbnRzLCBwcm94eUFjdGlvbnMpO1xuY29tbWVudFByb3h5LmNvbW1lbnRzXG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKHt1c2VybmFtZSwgYm9keSwgdGltZX0pID0+IHtcbiAgY29tbWVudFByb3h5LmNvbW1lbnRzID17XG4gICAgdXNlcm5hbWUsXG4gICAgYm9keSxcbiAgICB0aW1lXG4gIH1cbn1cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/comment/commentActions.js\n");

/***/ }),

/***/ "./src/comment/comments.js":
/*!*********************************!*\
  !*** ./src/comment/comments.js ***!
  \*********************************/
/*! exports provided: comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comments\", function() { return comments; });\n/**\n * \n * Every comment displayed in the UI is loaded from here,\n * this is the state of the comment, what is removed here is removed in the UI\n * what is added here is added in the, hence we can say that the UI and this array is in sync\n * with the help of Proxy we will monitor and maintain this sync, meaning that proxy can only update, remove or delete what we have in this array\n */\n\nconst comments = {\n  comments : [\n  {\n    username: 'Stanley',\n    body: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nisi perspiciatis eum tempore dolorem quasi quam earum velit dolore facilis? Deserunt porro, consequuntur nihil harum quaerat enim minus a voluptate possimus, cupiditate officiis placeat sapiente recusandae saepe eligendi. Sapiente, numquam!\",\n    time: Date.now()\n  }\n]\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9jb21tZW50cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tZW50L2NvbW1lbnRzLmpzP2U4ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEV2ZXJ5IGNvbW1lbnQgZGlzcGxheWVkIGluIHRoZSBVSSBpcyBsb2FkZWQgZnJvbSBoZXJlLFxuICogdGhpcyBpcyB0aGUgc3RhdGUgb2YgdGhlIGNvbW1lbnQsIHdoYXQgaXMgcmVtb3ZlZCBoZXJlIGlzIHJlbW92ZWQgaW4gdGhlIFVJXG4gKiB3aGF0IGlzIGFkZGVkIGhlcmUgaXMgYWRkZWQgaW4gdGhlLCBoZW5jZSB3ZSBjYW4gc2F5IHRoYXQgdGhlIFVJIGFuZCB0aGlzIGFycmF5IGlzIGluIHN5bmNcbiAqIHdpdGggdGhlIGhlbHAgb2YgUHJveHkgd2Ugd2lsbCBtb25pdG9yIGFuZCBtYWludGFpbiB0aGlzIHN5bmMsIG1lYW5pbmcgdGhhdCBwcm94eSBjYW4gb25seSB1cGRhdGUsIHJlbW92ZSBvciBkZWxldGUgd2hhdCB3ZSBoYXZlIGluIHRoaXMgYXJyYXlcbiAqL1xuXG5leHBvcnQgY29uc3QgY29tbWVudHMgPSB7XG4gIGNvbW1lbnRzIDogW1xuICB7XG4gICAgdXNlcm5hbWU6ICdTdGFubGV5JyxcbiAgICBib2R5OiBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdHF1ZSBuaXNpIHBlcnNwaWNpYXRpcyBldW0gdGVtcG9yZSBkb2xvcmVtIHF1YXNpIHF1YW0gZWFydW0gdmVsaXQgZG9sb3JlIGZhY2lsaXM/IERlc2VydW50IHBvcnJvLCBjb25zZXF1dW50dXIgbmloaWwgaGFydW0gcXVhZXJhdCBlbmltIG1pbnVzIGEgdm9sdXB0YXRlIHBvc3NpbXVzLCBjdXBpZGl0YXRlIG9mZmljaWlzIHBsYWNlYXQgc2FwaWVudGUgcmVjdXNhbmRhZSBzYWVwZSBlbGlnZW5kaS4gU2FwaWVudGUsIG51bXF1YW0hXCIsXG4gICAgdGltZTogRGF0ZS5ub3coKVxuICB9XG5dXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/comment/comments.js\n");

/***/ }),

/***/ "./src/comment/elements/buildCommentUI.js":
/*!************************************************!*\
  !*** ./src/comment/elements/buildCommentUI.js ***!
  \************************************************/
/*! exports provided: buildCommentUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildCommentUI\", function() { return buildCommentUI; });\n/* harmony import */ var _getElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElement */ \"./src/comment/elements/getElement.js\");\n/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/logger */ \"./src/helpers/logger.js\");\n\n\n\n\nconst uiBuilder = ({ username, body, date }) => `\n<div class=\"comment-item\">\n        <div class=\"comment-thumbnail\">\n          <img src=\"./assets/img/user.png\">\n          <br>\n          <strong>\n            ${username}\n          </strong>\n        </div>\n        <div class=\"comment-content\">\n          <p>\n            ${body}\n          </p>\n        </div>\n      </div>\n\n`;\n\nconst buildCommentUI = (commentObj) => {\n  let htmlString = uiBuilder(commentObj);\n  let doc = document.createElement('div');\n  doc.innerHTML = htmlString;\n\n  let commentBody = Object(_getElement__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.comment-body')\n  Object(_helpers_logger__WEBPACK_IMPORTED_MODULE_1__[\"log\"])(commentBody)\n  commentBody.appendChild(doc)\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9lbGVtZW50cy9idWlsZENvbW1lbnRVSS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tZW50L2VsZW1lbnRzL2J1aWxkQ29tbWVudFVJLmpzP2NjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gXCIuL2dldEVsZW1lbnRcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2xvZ2dlclwiO1xuXG5cbmNvbnN0IHVpQnVpbGRlciA9ICh7IHVzZXJuYW1lLCBib2R5LCBkYXRlIH0pID0+IGBcbjxkaXYgY2xhc3M9XCJjb21tZW50LWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvdXNlci5wbmdcIj5cbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICR7dXNlcm5hbWV9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1jb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAke2JvZHl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5gO1xuXG5leHBvcnQgY29uc3QgYnVpbGRDb21tZW50VUkgPSAoY29tbWVudE9iaikgPT4ge1xuICBsZXQgaHRtbFN0cmluZyA9IHVpQnVpbGRlcihjb21tZW50T2JqKTtcbiAgbGV0IGRvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb2MuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcblxuICBsZXQgY29tbWVudEJvZHkgPSBnZXRFbGVtZW50KCcuY29tbWVudC1ib2R5JylcbiAgbG9nKGNvbW1lbnRCb2R5KVxuICBjb21tZW50Qm9keS5hcHBlbmRDaGlsZChkb2MpXG59O1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/comment/elements/buildCommentUI.js\n");

/***/ }),

/***/ "./src/comment/elements/getElement.js":
/*!********************************************!*\
  !*** ./src/comment/elements/getElement.js ***!
  \********************************************/
/*! exports provided: getElement, getAllElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllElement\", function() { return getAllElement; });\nconst getElement = (select) => document.querySelector(select);\nconst getAllElement = (select) => document.querySelectorAll(select);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9lbGVtZW50cy9nZXRFbGVtZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnQvZWxlbWVudHMvZ2V0RWxlbWVudC5qcz8xYWRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3QpO1xuZXhwb3J0IGNvbnN0IGdldEFsbEVsZW1lbnQgPSAoc2VsZWN0KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/comment/elements/getElement.js\n");

/***/ }),

/***/ "./src/comment/events/attachEvents.js":
/*!********************************************!*\
  !*** ./src/comment/events/attachEvents.js ***!
  \********************************************/
/*! exports provided: attachEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachEvent\", function() { return attachEvent; });\nconst attachEvent = ({ element, event, action }) => {\n  element.addEventListener(event, action);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9ldmVudHMvYXR0YWNoRXZlbnRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnQvZXZlbnRzL2F0dGFjaEV2ZW50cy5qcz80MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdHRhY2hFdmVudCA9ICh7IGVsZW1lbnQsIGV2ZW50LCBhY3Rpb24gfSkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGFjdGlvbik7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/comment/events/attachEvents.js\n");

/***/ }),

/***/ "./src/comment/events/registerEvent.js":
/*!*********************************************!*\
  !*** ./src/comment/events/registerEvent.js ***!
  \*********************************************/
/*! exports provided: registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerEvent\", function() { return registerEvent; });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././../events */ \"./src/events.js\");\n/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/logger */ \"./src/helpers/logger.js\");\n/* harmony import */ var _attachEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachEvents */ \"./src/comment/events/attachEvents.js\");\n/* harmony import */ var _elements_getElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/getElement */ \"./src/comment/elements/getElement.js\");\n\n\n\n\nconst registerEvent = (events = []) => {\n  events.forEach(event => {\n    // get the first key only in the event Object\n    let eventProp = Object.keys(event)[0];\n\n    // get action to perfom this event\n    let action = event[eventProp]\n\n    // get the element from the eventProp\n    let eventPropSplit = eventProp.split('@')\n\n    // get element selector\n    let elementSelector = Object(_elements_getElement__WEBPACK_IMPORTED_MODULE_3__[\"getElement\"])(eventPropSplit[0])\n\n    // get event\n    let elementEvent = eventPropSplit[1]\n    \n    // attach event to element\n    Object(_attachEvents__WEBPACK_IMPORTED_MODULE_2__[\"attachEvent\"])({\n      event: elementEvent,\n      element : elementSelector,\n      action\n    })\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbWVudC9ldmVudHMvcmVnaXN0ZXJFdmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tZW50L2V2ZW50cy9yZWdpc3RlckV2ZW50LmpzPzE4OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHBFdmVudHN9IGZyb20gXCIuLi8uLy4uL2V2ZW50c1wiXG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9sb2dnZXJcIjtcbmltcG9ydCB7IGF0dGFjaEV2ZW50IH0gZnJvbSBcIi4vYXR0YWNoRXZlbnRzXCI7XG5pbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL2dldEVsZW1lbnRcIjtcbmV4cG9ydCBjb25zdCByZWdpc3RlckV2ZW50ID0gKGV2ZW50cyA9IFtdKSA9PiB7XG4gIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAvLyBnZXQgdGhlIGZpcnN0IGtleSBvbmx5IGluIHRoZSBldmVudCBPYmplY3RcbiAgICBsZXQgZXZlbnRQcm9wID0gT2JqZWN0LmtleXMoZXZlbnQpWzBdO1xuXG4gICAgLy8gZ2V0IGFjdGlvbiB0byBwZXJmb20gdGhpcyBldmVudFxuICAgIGxldCBhY3Rpb24gPSBldmVudFtldmVudFByb3BdXG5cbiAgICAvLyBnZXQgdGhlIGVsZW1lbnQgZnJvbSB0aGUgZXZlbnRQcm9wXG4gICAgbGV0IGV2ZW50UHJvcFNwbGl0ID0gZXZlbnRQcm9wLnNwbGl0KCdAJylcblxuICAgIC8vIGdldCBlbGVtZW50IHNlbGVjdG9yXG4gICAgbGV0IGVsZW1lbnRTZWxlY3RvciA9IGdldEVsZW1lbnQoZXZlbnRQcm9wU3BsaXRbMF0pXG5cbiAgICAvLyBnZXQgZXZlbnRcbiAgICBsZXQgZWxlbWVudEV2ZW50ID0gZXZlbnRQcm9wU3BsaXRbMV1cbiAgICBcbiAgICAvLyBhdHRhY2ggZXZlbnQgdG8gZWxlbWVudFxuICAgIGF0dGFjaEV2ZW50KHtcbiAgICAgIGV2ZW50OiBlbGVtZW50RXZlbnQsXG4gICAgICBlbGVtZW50IDogZWxlbWVudFNlbGVjdG9yLFxuICAgICAgYWN0aW9uXG4gICAgfSlcbiAgfSlcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/comment/events/registerEvent.js\n");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: appEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appEvents\", function() { return appEvents; });\n/* harmony import */ var _comment_commentActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/commentActions */ \"./src/comment/commentActions.js\");\n/* harmony import */ var _comment_elements_getElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment/elements/getElement */ \"./src/comment/elements/getElement.js\");\n/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/logger */ \"./src/helpers/logger.js\");\n/* harmony import */ var _helpers_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/validator */ \"./src/helpers/validator.js\");\n\n\n\n\n\nconst appEvents = [\n  {\n    '.btn@click' : function() {\n      // get name\n      let username = Object(_comment_elements_getElement__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.username').value;\n      let commentBody = Object(_comment_elements_getElement__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.comment-box').value;\n\n      // validate username\n      if(!Object(_helpers_validator__WEBPACK_IMPORTED_MODULE_3__[\"validateLength\"])(4, 10, username)){\n        alert('min for username is 4 and maximum is 10')\n      } else if(!Object(_helpers_validator__WEBPACK_IMPORTED_MODULE_3__[\"validateLength\"])(4, Infinity, commentBody)){\n        alert('min for comment body is 4 and maximum is 10')\n      } else{\n\n      Object(_comment_commentActions__WEBPACK_IMPORTED_MODULE_0__[\"addComment\"])({\n        username, body: commentBody, time: Date.now()\n      })\n      }\n    } \n  }\n]//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcz8xNTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50L2NvbW1lbnRBY3Rpb25zXCJcbmltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tIFwiLi9jb21tZW50L2VsZW1lbnRzL2dldEVsZW1lbnRcIlxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vaGVscGVycy9sb2dnZXJcIlxuaW1wb3J0IHsgdmFsaWRhdGVMZW5ndGggfSBmcm9tIFwiLi9oZWxwZXJzL3ZhbGlkYXRvclwiXG5cbmV4cG9ydCBjb25zdCBhcHBFdmVudHMgPSBbXG4gIHtcbiAgICAnLmJ0bkBjbGljaycgOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGdldCBuYW1lXG4gICAgICBsZXQgdXNlcm5hbWUgPSBnZXRFbGVtZW50KCcudXNlcm5hbWUnKS52YWx1ZTtcbiAgICAgIGxldCBjb21tZW50Qm9keSA9IGdldEVsZW1lbnQoJy5jb21tZW50LWJveCcpLnZhbHVlO1xuXG4gICAgICAvLyB2YWxpZGF0ZSB1c2VybmFtZVxuICAgICAgaWYoIXZhbGlkYXRlTGVuZ3RoKDQsIDEwLCB1c2VybmFtZSkpe1xuICAgICAgICBhbGVydCgnbWluIGZvciB1c2VybmFtZSBpcyA0IGFuZCBtYXhpbXVtIGlzIDEwJylcbiAgICAgIH0gZWxzZSBpZighdmFsaWRhdGVMZW5ndGgoNCwgSW5maW5pdHksIGNvbW1lbnRCb2R5KSl7XG4gICAgICAgIGFsZXJ0KCdtaW4gZm9yIGNvbW1lbnQgYm9keSBpcyA0IGFuZCBtYXhpbXVtIGlzIDEwJylcbiAgICAgIH0gZWxzZXtcblxuICAgICAgYWRkQ29tbWVudCh7XG4gICAgICAgIHVzZXJuYW1lLCBib2R5OiBjb21tZW50Qm9keSwgdGltZTogRGF0ZS5ub3coKVxuICAgICAgfSlcbiAgICAgIH1cbiAgICB9IFxuICB9XG5dIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/events.js\n");

/***/ }),

/***/ "./src/helpers/logger.js":
/*!*******************************!*\
  !*** ./src/helpers/logger.js ***!
  \*******************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\nconst {log} = console//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9sb2dnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9sb2dnZXIuanM/NTI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qge2xvZ30gPSBjb25zb2xlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/logger.js\n");

/***/ }),

/***/ "./src/helpers/validator.js":
/*!**********************************!*\
  !*** ./src/helpers/validator.js ***!
  \**********************************/
/*! exports provided: validateLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateLength\", function() { return validateLength; });\nconst validateLength = (min,max, string = String) => {\n  if(string.length > max) return false;\n  if(string.length < min) return false;\n  return true;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy92YWxpZGF0b3IuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy92YWxpZGF0b3IuanM/NTBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdmFsaWRhdGVMZW5ndGggPSAobWluLG1heCwgc3RyaW5nID0gU3RyaW5nKSA9PiB7XG4gIGlmKHN0cmluZy5sZW5ndGggPiBtYXgpIHJldHVybiBmYWxzZTtcbiAgaWYoc3RyaW5nLmxlbmd0aCA8IG1pbikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/validator.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comment_events_registerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/events/registerEvent */ \"./src/comment/events/registerEvent.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\nObject(_comment_events_registerEvent__WEBPACK_IMPORTED_MODULE_0__[\"registerEvent\"])(_events__WEBPACK_IMPORTED_MODULE_1__[\"appEvents\"])//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckV2ZW50IH0gZnJvbSBcIi4vY29tbWVudC9ldmVudHMvcmVnaXN0ZXJFdmVudFwiO1xuaW1wb3J0IHsgYXBwRXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbnJlZ2lzdGVyRXZlbnQoYXBwRXZlbnRzKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });