(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ABCWallet"] = factory();
	else
		root["ABCWallet"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vConsole v3.3.2 (https://github.com/Tencent/vConsole)
 * 
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"[object Number]"==Object.prototype.toString.call(e)}function n(e){return"[object String]"==Object.prototype.toString.call(e)}function r(e){return"[object Array]"==Object.prototype.toString.call(e)}function i(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function a(e){return void 0===e}function l(e){return null===e}function c(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function s(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(o(e)||n(e)||i(e)||r(e)||l(e)||d(e)||a(e)||c(e)))}function d(e){return"[object Function]"==Object.prototype.toString.call(e)}function u(e){var t=Object.prototype.toString.call(e);return"[object global]"==t||"[object Window]"==t||"[object DOMWindow]"==t}function f(e){if(!s(e)&&!r(e))return[];if(r(e)){var t=[];return e.forEach(function(e,o){t.push(o)}),t}return Object.getOwnPropertyNames(e).sort()}Object.defineProperty(e,"__esModule",{value:!0}),e.getDate=function(e){var t=e>0?new Date(e):new Date,o=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,r=t.getFullYear(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),a=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),l=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),c=t.getMilliseconds()<10?"0"+t.getMilliseconds():t.getMilliseconds();return c<100&&(c="0"+c),{time:+t,year:r,month:n,day:o,hour:i,minute:a,second:l,millisecond:c}},e.isNumber=o,e.isString=n,e.isArray=r,e.isBoolean=i,e.isUndefined=a,e.isNull=l,e.isSymbol=c,e.isObject=s,e.isFunction=d,e.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":t(HTMLElement))?e instanceof HTMLElement:e&&"object"===t(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},e.isWindow=u,e.isPlainObject=function(e){var o,n=Object.prototype.hasOwnProperty;if(!e||"object"!==t(e)||e.nodeType||u(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(o in e);return void 0===o||n.call(e,o)},e.htmlEncode=function(e){return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML},e.JSONStringify=function(e){if(!s(e)&&!r(e))return JSON.stringify(e);var t="{",o="}";r(e)&&(t="[",o="]");for(var n=t,i=f(e),a=0;a<i.length;a++){var l=i[a],u=e[l];try{r(e)||(s(l)||r(l)||c(l)?n+=Object.prototype.toString.call(l):n+=l,n+=": "),r(u)?n+="Array["+u.length+"]":s(u)||c(u)||d(u)?n+=Object.prototype.toString.call(u):n+=JSON.stringify(u),a<i.length-1&&(n+=", ")}catch(e){continue}}return n+=o},e.getObjAllKeys=f,e.getObjName=function(e){return Object.prototype.toString.call(e).replace("[object ","").replace("]","")},e.setStorage=function(e,t){window.localStorage&&(e="vConsole_"+e,localStorage.setItem(e,t))},e.getStorage=function(e){if(window.localStorage)return e="vConsole_"+e,localStorage.getItem(e)}})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n,r,i;r=[t,o(0),o(10)],void 0===(i="function"==typeof(n=function(o,n,r){"use strict";var i;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=(i=r)&&i.__esModule?i:{default:i};var a={one:function(e,t){try{return(t||document).querySelector(e)||void 0}catch(e){return}},all:function(e,t){try{var o=(t||document).querySelectorAll(e);return Array.from(o)}catch(e){return[]}},addClass:function(e,t){if(e){(0,n.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){var r=e[o].className||"",i=r.split(" ");i.indexOf(t)>-1||(i.push(t),e[o].className=i.join(" "))}}},removeClass:function(e,t){if(e){(0,n.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){for(var r=e[o].className.split(" "),i=0;i<r.length;i++)r[i]==t&&(r[i]="");e[o].className=r.join(" ").trim()}}},hasClass:function(e,t){return!(!e||!e.classList)&&e.classList.contains(t)},bind:function(e,t,o,r){e&&((0,n.isArray)(e)||(e=[e]),e.forEach(function(e){e.addEventListener(t,o,!!r)}))},delegate:function(e,t,o,n){e&&e.addEventListener(t,function(t){var r=a.all(o,e);if(r)e:for(var i=0;i<r.length;i++)for(var l=t.target;l;){if(l==r[i]){n.call(l,t);break e}if((l=l.parentNode)==e)break}},!1)}};a.render=r.default;var l=a;o.default=l,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"newPlugin";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.name=o,this.isReady=!1,this.eventList={}}return t=e,(o=[{key:"on",value:function(e,t){return this.eventList[e]=t,this}},{key:"trigger",value:function(e,t){if("function"==typeof this.eventList[e])this.eventList[e].call(this,t);else{var o="on"+e.charAt(0).toUpperCase()+e.slice(1);"function"==typeof this[o]&&this[o].call(this,t)}return this}},{key:"id",get:function(){return this._id},set:function(e){if(!e)throw"Plugin ID cannot be empty";this._id=e.toLowerCase()}},{key:"name",get:function(){return this._name},set:function(e){if(!e)throw"Plugin name cannot be empty";this._name=e}},{key:"vConsole",get:function(){return this._vConsole||void 0},set:function(e){if(!e)throw"vConsole cannot be empty";this._vConsole=e}}])&&n(t.prototype,o),r&&n(t,r),e;var t,o,r}();o.default=r,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}var a;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(n[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){var n,r,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),l=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,s=0,d=[],u=o(13);function f(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a],t))}else{var l=[];for(a=0;a<n.parts.length;a++)l.push(m(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:l}}}}function v(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(l):o.push(n[a]={id:a,parts:[l]})}return o}function p(e,t){var o=l(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),d.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(e.insertAt.before,o);o.insertBefore(t,r)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return g(t,e.attrs),p(e,t),t}function g(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function m(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=s++;o=c||(c=h(t)),n=w.bind(null,o,a,!1),r=w.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),p(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=u(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,o,t),r=function(){b(o),o.href&&URL.revokeObjectURL(o.href)}):(o=h(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){b(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=v(e,t);return f(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r];(l=i[a.id]).refs--,n.push(l)}e&&f(v(e,t),t);for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var y,_=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,o){var n,r,i;r=[t,o(0),o(1),o(2),o(20),o(21),o(22)],void 0===(i="function"==typeof(n=function(o,n,r,i,a,l,c){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(n),r=s(r),i=s(i),a=s(a),l=s(l),c=s(c);var b=1e3,h=[],g={},m=function(e){function t(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o=f(this,(e=v(t)).call.apply(e,[this].concat(r))),h.push(o.id),o.tplTabbox="",o.allowUnformattedLog=!0,o.isReady=!1,o.isShow=!1,o.$tabbox=null,o.console={},o.logList=[],o.isInBottom=!0,o.maxLogNumber=b,o.logNumber=0,o.mockConsole(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),o=t,(i=[{key:"onInit",value:function(){this.$tabbox=r.default.render(this.tplTabbox,{}),this.updateMaxLogNumber()}},{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["All","Log","Info","Warn","Error"],n=[],i=0;i<o.length;i++)n.push({name:o[i],data:{type:o[i].toLowerCase()},className:"",onClick:function(){if(r.default.hasClass(this,"vc-actived"))return!1;t.showLogType(this.dataset.type||"all")}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(){t.clearLog(),t.vConsole.triggerEvent("clearLog")}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0;var t=r.default.all(".vc-subtab",e.$tabbox);r.default.bind(t,"click",function(o){if(o.preventDefault(),r.default.hasClass(this,"vc-actived"))return!1;r.default.removeClass(t,"vc-actived"),r.default.addClass(this,"vc-actived");var n=this.dataset.type,i=r.default.one(".vc-log",e.$tabbox);r.default.removeClass(i,"vc-log-partly-log"),r.default.removeClass(i,"vc-log-partly-info"),r.default.removeClass(i,"vc-log-partly-warn"),r.default.removeClass(i,"vc-log-partly-error"),"all"==n?r.default.removeClass(i,"vc-log-partly"):(r.default.addClass(i,"vc-log-partly"),r.default.addClass(i,"vc-log-partly-"+n))});var o=r.default.one(".vc-content");r.default.bind(o,"scroll",function(t){e.isShow&&(o.scrollTop+o.offsetHeight>=o.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var n=0;n<e.logList.length;n++)e.printLog(e.logList[n]);e.logList=[]}},{key:"onRemove",value:function(){window.console.log=this.console.log,window.console.info=this.console.info,window.console.warn=this.console.warn,window.console.debug=this.console.debug,window.console.error=this.console.error,window.console.time=this.console.time,window.console.timeEnd=this.console.timeEnd,window.console.clear=this.console.clear,this.console={};var e=h.indexOf(this.id);e>-1&&h.splice(e,1)}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.autoScrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.autoScrollToBottom()}},{key:"onUpdateOption",value:function(){this.vConsole.option.maxLogNumber!=this.maxLogNumber&&(this.updateMaxLogNumber(),this.limitMaxLogs())}},{key:"updateMaxLogNumber",value:function(){this.maxLogNumber=this.vConsole.option.maxLogNumber||b,this.maxLogNumber=Math.max(1,this.maxLogNumber)}},{key:"limitMaxLogs",value:function(){if(this.isReady)for(;this.logNumber>this.maxLogNumber;){var e=r.default.one(".vc-item",this.$tabbox);if(!e)break;e.parentNode.removeChild(e),this.logNumber--}}},{key:"showLogType",value:function(e){var t=r.default.one(".vc-log",this.$tabbox);r.default.removeClass(t,"vc-log-partly-log"),r.default.removeClass(t,"vc-log-partly-info"),r.default.removeClass(t,"vc-log-partly-warn"),r.default.removeClass(t,"vc-log-partly-error"),"all"==e?r.default.removeClass(t,"vc-log-partly"):(r.default.addClass(t,"vc-log-partly"),r.default.addClass(t,"vc-log-partly-"+e))}},{key:"autoScrollToBottom",value:function(){this.vConsole.option.disableLogScrolling||this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=r.default.one(".vc-content");e&&(e.scrollTop=e.scrollHeight-e.offsetHeight)}},{key:"mockConsole",value:function(){var e=this,t=this,o=["log","info","warn","debug","error"];window.console?(o.map(function(e){t.console[e]=window.console[e]}),t.console.time=window.console.time,t.console.timeEnd=window.console.timeEnd,t.console.clear=window.console.clear):window.console={},o.map(function(t){window.console[t]=function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];e.printLog({logType:t,logs:n})}});var n={};window.console.time=function(e){n[e]=Date.now()},window.console.timeEnd=function(e){var t=n[e];t?(console.log(e+":",Date.now()-t+"ms"),delete n[e]):console.log(e+": 0ms")},window.console.clear=function(){t.clearLog();for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];t.console.clear.apply(window.console,o)}}},{key:"clearLog",value:function(){r.default.one(".vc-log",this.$tabbox).innerHTML="",this.logNumber=0,g={}}},{key:"printOriginLog",value:function(e){"function"==typeof this.console[e.logType]&&this.console[e.logType].apply(window.console,e.logs)}},{key:"printLog",value:function(e){var t=e.logs||[];if(t.length||e.content){t=[].slice.call(t||[]);var o=/^\[(\w+)\]$/i,r="",i=!1;if(n.isString(t[0])){var a=t[0].match(o);null!==a&&a.length>0&&(r=a[1].toLowerCase(),i=h.indexOf(r)>-1)}if(r===this.id||!0!==i&&"default"===this.id)if(e._id||(e._id="__vc_"+Math.random().toString(36).substring(2,8)),e.date||(e.date=+new Date),this.isReady){n.isString(t[0])&&i&&(t[0]=t[0].replace(o,""),""===t[0]&&t.shift());for(var l={_id:e._id,logType:e.logType,logText:[],hasContent:!!e.content,count:1},c=0;c<t.length;c++)n.isFunction(t[c])?l.logText.push(t[c].toString()):n.isObject(t[c])||n.isArray(t[c])?l.logText.push(n.JSONStringify(t[c])):l.logText.push(t[c]);l.logText=l.logText.join(" "),l.hasContent||g.logType!==l.logType||g.logText!==l.logText?(this.printNewLog(e,t),g=l):this.printRepeatLog(),this.isInBottom&&this.isShow&&this.autoScrollToBottom(),e.noOrigin||this.printOriginLog(e)}else this.logList.push(e);else e.noOrigin||this.printOriginLog(e)}}},{key:"printRepeatLog",value:function(){var e=r.default.one("#"+g._id),t=r.default.one(".vc-item-repeat",e);t||((t=document.createElement("i")).className="vc-item-repeat",e.insertBefore(t,e.lastChild)),g.count,g.count++,t.innerHTML=g.count}},{key:"printNewLog",value:function(e,t){for(var o=r.default.render(a.default,{_id:e._id,logType:e.logType,style:e.style||""}),i=r.default.one(".vc-item-content",o),l=0;l<t.length;l++){var c=void 0;try{if(""===t[l])continue;c=n.isFunction(t[l])?"<span> "+t[l].toString()+"</span>":n.isObject(t[l])||n.isArray(t[l])?this.getFoldedLine(t[l]):"<span> "+n.htmlEncode(t[l]).replace(/\n/g,"<br/>")+"</span>"}catch(e){c="<span> ["+d(t[l])+"]</span>"}c&&("string"==typeof c?i.insertAdjacentHTML("beforeend",c):i.insertAdjacentElement("beforeend",c))}n.isObject(e.content)&&i.insertAdjacentElement("beforeend",e.content),r.default.one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",o),this.logNumber++,this.limitMaxLogs()}},{key:"getFoldedLine",value:function(e,t){var o=this;if(!t){var i=n.JSONStringify(e),a=i.substr(0,36);t=n.getObjName(e),i.length>36&&(a+="..."),t+=" "+a}var s=r.default.render(l.default,{outer:t,lineType:"obj"});return r.default.bind(r.default.one(".vc-fold-outer",s),"click",function(t){t.preventDefault(),t.stopPropagation(),r.default.hasClass(s,"vc-toggle")?(r.default.removeClass(s,"vc-toggle"),r.default.removeClass(r.default.one(".vc-fold-inner",s),"vc-toggle"),r.default.removeClass(r.default.one(".vc-fold-outer",s),"vc-toggle")):(r.default.addClass(s,"vc-toggle"),r.default.addClass(r.default.one(".vc-fold-inner",s),"vc-toggle"),r.default.addClass(r.default.one(".vc-fold-outer",s),"vc-toggle"));var i=r.default.one(".vc-fold-inner",s);return setTimeout(function(){if(0==i.children.length&&e){for(var t=n.getObjAllKeys(e),a=0;a<t.length;a++){var s=void 0,d="undefined",u="";try{s=e[t[a]]}catch(e){continue}n.isString(s)?(d="string",s='"'+s+'"'):n.isNumber(s)?d="number":n.isBoolean(s)?d="boolean":n.isNull(s)?(d="null",s="null"):n.isUndefined(s)?(d="undefined",s="undefined"):n.isFunction(s)?(d="function",s="function()"):n.isSymbol(s)&&(d="symbol");var f=void 0;if(n.isArray(s)){var v=n.getObjName(s)+"["+s.length+"]";f=o.getFoldedLine(s,r.default.render(c.default,{key:t[a],keyType:u,value:v,valueType:"array"},!0))}else if(n.isObject(s)){var p=n.getObjName(s);f=o.getFoldedLine(s,r.default.render(c.default,{key:n.htmlEncode(t[a]),keyType:u,value:p,valueType:"object"},!0))}else{e.hasOwnProperty&&!e.hasOwnProperty(t[a])&&(u="private");var b={lineType:"kv",key:n.htmlEncode(t[a]),keyType:u,value:n.htmlEncode(s),valueType:d};f=r.default.render(l.default,b)}i.insertAdjacentElement("beforeend",f)}if(n.isObject(e)){var h,g=e.__proto__;h=n.isObject(g)?o.getFoldedLine(g,r.default.render(c.default,{key:"__proto__",keyType:"private",value:n.getObjName(g),valueType:"object"},!0)):r.default.render(c.default,{key:"__proto__",keyType:"private",value:"null",valueType:"null"}),i.insertAdjacentElement("beforeend",h)}}}),!1}),s}}])&&u(o.prototype,i),s&&u(o,s),t;var o,i,s}(i.default);m.AddedLogID=[];var y=m;o.default=y,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n,r,i;r=[t,o(7),o(8),o(2)],void 0===(i="function"==typeof(n=function(o,n,r,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=a(r),i=a(i),r.default.VConsolePlugin=i.default;var l=r.default;o.default=l,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n,r,i;r=[],void 0===(i="function"==typeof(n=function(){"use strict";if("undefined"==typeof Symbol){window.Symbol=function(){};var e="__symbol_iterator_key";window.Symbol.iterator=e,Array.prototype[e]=function(){var e=this,t=0;return{next:function(){return{done:e.length===t,value:e.length===t?void 0:e[t++]}}}}}})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n,r,i;r=[t,o(9),o(0),o(1),o(11),o(14),o(15),o(16),o(17),o(18),o(19),o(25),o(27),o(31),o(38)],void 0===(i="function"==typeof(n=function(o,n,r,i,a,l,c,s,d,u,f,v,p,b,h){"use strict";function g(e){return e&&e.__esModule?e:{default:e}}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n=g(n),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(r),i=g(i),l=g(l),c=g(c),s=g(s),d=g(d),u=g(u),f=g(f),v=g(v),p=g(p),b=g(b),h=g(h);var y="#__vconsole",_=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.default.one(y))console.debug("vConsole is already exists.");else{var o=this;if(this.version=n.default.version,this.$dom=null,this.isInited=!1,this.option={defaultPlugins:["system","network","element","storage"]},this.activedTab="",this.tabList=[],this.pluginList={},this.switchPos={x:10,y:10,startX:0,startY:0,endX:0,endY:0},this.tool=r,this.$=i.default,r.isObject(t))for(var a in t)this.option[a]=t[a];this._addBuiltInPlugins();var l,c=function(){o.isInited||(o._render(),o._mockTap(),o._bindEvent(),o._autoRun())};if(void 0!==document)"complete"==document.readyState?c():i.default.bind(window,"load",c);else l=setTimeout(function e(){document&&"complete"==document.readyState?(l&&clearTimeout(l),c()):l=setTimeout(e,1)},1)}}return t=e,(o=[{key:"_addBuiltInPlugins",value:function(){this.addPlugin(new f.default("default","Log"));var e=this.option.defaultPlugins,t={system:{proto:v.default,name:"System"},network:{proto:p.default,name:"Network"},element:{proto:b.default,name:"Element"},storage:{proto:h.default,name:"Storage"}};if(e&&r.isArray(e))for(var o=0;o<e.length;o++){var n=t[e[o]];n?this.addPlugin(new n.proto(e[o],n.name)):console.debug("Unrecognized default plugin ID:",e[o])}}},{key:"_render",value:function(){if(!i.default.one(y)){var e=document.createElement("div");e.innerHTML=l.default,document.documentElement.insertAdjacentElement("beforeend",e.children[0])}this.$dom=i.default.one(y);var t=i.default.one(".vc-switch",this.$dom),o=1*r.getStorage("switch_x"),n=1*r.getStorage("switch_y");(o||n)&&(o+t.offsetWidth>document.documentElement.offsetWidth&&(o=document.documentElement.offsetWidth-t.offsetWidth),n+t.offsetHeight>document.documentElement.offsetHeight&&(n=document.documentElement.offsetHeight-t.offsetHeight),o<0&&(o=0),n<0&&(n=0),this.switchPos.x=o,this.switchPos.y=n,i.default.one(".vc-switch").style.right=o+"px",i.default.one(".vc-switch").style.bottom=n+"px");var a=window.devicePixelRatio||1,c=document.querySelector('[name="viewport"]');if(c&&c.content){var s=c.content.match(/initial\-scale\=\d+(\.\d+)?/),d=s?parseFloat(s[0].split("=")[1]):1;d<1&&(this.$dom.style.fontSize=13*a+"px")}i.default.one(".vc-mask",this.$dom).style.display="none"}},{key:"_mockTap",value:function(){var e,t,o,n=!1,r=null;this.$dom.addEventListener("touchstart",function(n){if(void 0===e){var i=n.targetTouches[0];t=i.pageX,o=i.pageY,e=n.timeStamp,r=n.target.nodeType===Node.TEXT_NODE?n.target.parentNode:n.target}},!1),this.$dom.addEventListener("touchmove",function(e){var r=e.changedTouches[0];(Math.abs(r.pageX-t)>10||Math.abs(r.pageY-o)>10)&&(n=!0)}),this.$dom.addEventListener("touchend",function(t){if(!1===n&&t.timeStamp-e<700&&null!=r){var o=r.tagName.toLowerCase(),i=!1;switch(o){case"textarea":i=!0;break;case"input":switch(r.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":i=!1;break;default:i=!r.disabled&&!r.readOnly}}i?r.focus():t.preventDefault();var a=t.changedTouches[0],l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),l.forwardedTouchEvent=!0,l.initEvent("click",!0,!0),r.dispatchEvent(l)}e=void 0,n=!1,r=null},!1)}},{key:"_bindEvent",value:function(){var e=this,t=i.default.one(".vc-switch",e.$dom);i.default.bind(t,"touchstart",function(t){e.switchPos.startX=t.touches[0].pageX,e.switchPos.startY=t.touches[0].pageY}),i.default.bind(t,"touchend",function(t){e.switchPos.x=e.switchPos.endX,e.switchPos.y=e.switchPos.endY,e.switchPos.startX=0,e.switchPos.startY=0,r.setStorage("switch_x",e.switchPos.x),r.setStorage("switch_y",e.switchPos.y)}),i.default.bind(t,"touchmove",function(o){if(o.touches.length>0){var n=o.touches[0].pageX-e.switchPos.startX,r=o.touches[0].pageY-e.switchPos.startY,i=e.switchPos.x-n,a=e.switchPos.y-r;i+t.offsetWidth>document.documentElement.offsetWidth&&(i=document.documentElement.offsetWidth-t.offsetWidth),a+t.offsetHeight>document.documentElement.offsetHeight&&(a=document.documentElement.offsetHeight-t.offsetHeight),i<0&&(i=0),a<0&&(a=0),t.style.right=i+"px",t.style.bottom=a+"px",e.switchPos.endX=i,e.switchPos.endY=a,o.preventDefault()}}),i.default.bind(i.default.one(".vc-switch",e.$dom),"click",function(){e.show()}),i.default.bind(i.default.one(".vc-hide",e.$dom),"click",function(){e.hide()}),i.default.bind(i.default.one(".vc-mask",e.$dom),"click",function(t){if(t.target!=i.default.one(".vc-mask"))return!1;e.hide()}),i.default.delegate(i.default.one(".vc-tabbar",e.$dom),"click",".vc-tab",function(t){var o=this.dataset.tab;o!=e.activedTab&&e.showTab(o)}),i.default.bind(i.default.one(".vc-panel",e.$dom),"transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){if(t.target!=i.default.one(".vc-panel"))return!1;i.default.hasClass(e.$dom,"vc-toggle")||(t.target.style.display="none")});var o=i.default.one(".vc-content",e.$dom),n=!1;i.default.bind(o,"touchstart",function(e){var t=o.scrollTop,r=o.scrollHeight,a=t+o.offsetHeight;0===t?(o.scrollTop=1,0===o.scrollTop&&(i.default.hasClass(e.target,"vc-cmd-input")||(n=!0))):a===r&&(o.scrollTop=t-1,o.scrollTop===t&&(i.default.hasClass(e.target,"vc-cmd-input")||(n=!0)))}),i.default.bind(o,"touchmove",function(e){n&&e.preventDefault()}),i.default.bind(o,"touchend",function(e){n=!1})}},{key:"_autoRun",value:function(){for(var e in this.isInited=!0,this.pluginList)this._initPlugin(this.pluginList[e]);this.tabList.length>0&&this.showTab(this.tabList[0]),this.triggerEvent("ready")}},{key:"triggerEvent",value:function(e,t){e="on"+e.charAt(0).toUpperCase()+e.slice(1),r.isFunction(this.option[e])&&this.option[e].apply(this,t)}},{key:"_initPlugin",value:function(e){var t=this;e.vConsole=this,e.trigger("init"),e.trigger("renderTab",function(o){t.tabList.push(e.id);var n=i.default.render(c.default,{id:e.id,name:e.name});i.default.one(".vc-tabbar",t.$dom).insertAdjacentElement("beforeend",n);var a=i.default.render(s.default,{id:e.id});o&&(r.isString(o)?a.innerHTML+=o:r.isFunction(o.appendTo)?o.appendTo(a):r.isElement(o)&&a.insertAdjacentElement("beforeend",o)),i.default.one(".vc-content",t.$dom).insertAdjacentElement("beforeend",a)}),e.trigger("addTopBar",function(o){if(o)for(var n=i.default.one(".vc-topbar",t.$dom),a=function(t){var a=o[t],l=i.default.render(d.default,{name:a.name||"Undefined",className:a.className||"",pluginID:e.id});if(a.data)for(var c in a.data)l.dataset[c]=a.data[c];r.isFunction(a.onClick)&&i.default.bind(l,"click",function(t){var o=a.onClick.call(l);!1===o||(i.default.removeClass(i.default.all(".vc-topbar-"+e.id),"vc-actived"),i.default.addClass(l,"vc-actived"))}),n.insertAdjacentElement("beforeend",l)},l=0;l<o.length;l++)a(l)}),e.trigger("addTool",function(o){if(o)for(var n=i.default.one(".vc-tool-last",t.$dom),a=function(t){var a=o[t],l=i.default.render(u.default,{name:a.name||"Undefined",pluginID:e.id});1==a.global&&i.default.addClass(l,"vc-global-tool"),r.isFunction(a.onClick)&&i.default.bind(l,"click",function(e){a.onClick.call(l)}),n.parentNode.insertBefore(l,n)},l=0;l<o.length;l++)a(l)}),e.isReady=!0,e.trigger("ready")}},{key:"_triggerPluginsEvent",value:function(e){for(var t in this.pluginList)this.pluginList[t].isReady&&this.pluginList[t].trigger(e)}},{key:"_triggerPluginEvent",value:function(e,t){var o=this.pluginList[e];o&&o.isReady&&o.trigger(t)}},{key:"addPlugin",value:function(e){return void 0!==this.pluginList[e.id]?(console.debug("Plugin "+e.id+" has already been added."),!1):(this.pluginList[e.id]=e,this.isInited&&(this._initPlugin(e),1==this.tabList.length&&this.showTab(this.tabList[0])),!0)}},{key:"removePlugin",value:function(e){e=(e+"").toLowerCase();var t=this.pluginList[e];if(void 0===t)return console.debug("Plugin "+e+" does not exist."),!1;if(t.trigger("remove"),this.isInited){var o=i.default.one("#__vc_tab_"+e);o&&o.parentNode.removeChild(o);for(var n=i.default.all(".vc-topbar-"+e,this.$dom),r=0;r<n.length;r++)n[r].parentNode.removeChild(n[r]);var a=i.default.one("#__vc_log_"+e);a&&a.parentNode.removeChild(a);for(var l=i.default.all(".vc-tool-"+e,this.$dom),c=0;c<l.length;c++)l[c].parentNode.removeChild(l[c])}var s=this.tabList.indexOf(e);s>-1&&this.tabList.splice(s,1);try{delete this.pluginList[e]}catch(t){this.pluginList[e]=void 0}return this.activedTab==e&&this.tabList.length>0&&this.showTab(this.tabList[0]),!0}},{key:"show",value:function(){if(this.isInited){var e=this,t=i.default.one(".vc-panel",this.$dom);t.style.display="block",setTimeout(function(){i.default.addClass(e.$dom,"vc-toggle"),e._triggerPluginsEvent("showConsole");var t=i.default.one(".vc-mask",e.$dom);t.style.display="block"},10)}}},{key:"hide",value:function(){if(this.isInited){i.default.removeClass(this.$dom,"vc-toggle"),this._triggerPluginsEvent("hideConsole");var e=i.default.one(".vc-mask",this.$dom),t=i.default.one(".vc-panel",this.$dom);i.default.bind(e,"transitionend",function(o){e.style.display="none",t.style.display="none"})}}},{key:"showSwitch",value:function(){if(this.isInited){var e=i.default.one(".vc-switch",this.$dom);e.style.display="block"}}},{key:"hideSwitch",value:function(){if(this.isInited){var e=i.default.one(".vc-switch",this.$dom);e.style.display="none"}}},{key:"showTab",value:function(e){if(this.isInited){var t=i.default.one("#__vc_log_"+e);i.default.removeClass(i.default.all(".vc-tab",this.$dom),"vc-actived"),i.default.addClass(i.default.one("#__vc_tab_"+e),"vc-actived"),i.default.removeClass(i.default.all(".vc-logbox",this.$dom),"vc-actived"),i.default.addClass(t,"vc-actived");var o=i.default.all(".vc-topbar-"+e,this.$dom);i.default.removeClass(i.default.all(".vc-toptab",this.$dom),"vc-toggle"),i.default.addClass(o,"vc-toggle"),o.length>0?i.default.addClass(i.default.one(".vc-content",this.$dom),"vc-has-topbar"):i.default.removeClass(i.default.one(".vc-content",this.$dom),"vc-has-topbar"),i.default.removeClass(i.default.all(".vc-tool",this.$dom),"vc-toggle"),i.default.addClass(i.default.all(".vc-tool-"+e,this.$dom),"vc-toggle"),this.activedTab&&this._triggerPluginEvent(this.activedTab,"hide"),this.activedTab=e,this._triggerPluginEvent(this.activedTab,"show")}}},{key:"setOption",value:function(e,t){if(r.isString(e))this.option[e]=t,this._triggerPluginsEvent("updateOption");else if(r.isObject(e)){for(var o in e)this.option[o]=e[o];this._triggerPluginsEvent("updateOption")}else console.debug("The first parameter of vConsole.setOption() must be a string or an object.")}},{key:"destroy",value:function(){if(this.isInited){for(var e=Object.keys(this.pluginList),t=e.length-1;t>=0;t--)this.removePlugin(e[t]);this.$dom.parentNode.removeChild(this.$dom),this.isInited=!1}}}])&&m(t.prototype,o),a&&m(t,a),e;var t,o,a}();o.default=_,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e){e.exports={name:"vconsole",version:"3.3.2",description:"A lightweight, extendable front-end developer tool for mobile web page.",homepage:"https://github.com/Tencent/vConsole",main:"dist/vconsole.min.js",typings:"./index.d.ts",scripts:{test:"mocha",dist:"webpack"},keywords:["console","debug","mobile"],repository:{type:"git",url:"git+https://github.com/Tencent/vConsole.git"},dependencies:{},devDependencies:{"@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.3.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-proposal-object-rest-spread":"^7.3.1","@babel/preset-env":"^7.3.1","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"^1.0.0",chai:"^4.2.0","copy-webpack-plugin":"^5.0.3","css-loader":"^2.1.0","html-loader":"^0.5.5",jsdom:"^13.2.0","json-loader":"^0.5.7",less:"^3.9.0","less-loader":"^4.1.0",mocha:"^5.2.0","style-loader":"^0.23.1",webpack:"^4.29.0","webpack-cli":"^3.2.1"},author:"Tencent",license:"MIT"}},function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,o){var n=/\{\{([^\}]+)\}\}/g,r="",i="",a=0,l=[],c=function(e,t){""!==e&&(t?e.match(/^ ?else/g)?r+="} "+e+" {\n":e.match(/\/(if|for|switch)/g)?r+="}\n":e.match(/^ ?if|for|switch/g)?r+=e+" {\n":e.match(/^ ?(break|continue) ?$/g)?r+=e+";\n":e.match(/^ ?(case|default)/g)?r+=e+":\n":r+="arr.push("+e+");\n":r+='arr.push("'+e.replace(/"/g,'\\"')+'");\n')};for(window.__mito_data=t,window.__mito_code="",window.__mito_result="",e=(e=e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g,"$1{{")).replace(/^[\r\n]/,"").replace(/\n/g,"\\\n").replace(/\r/g,"\\\r"),i="(function(){\n",r="var arr = [];\n";l=n.exec(e);)c(e.slice(a,l.index),!1),c(l[1],!0),a=l.index+l[0].length;c(e.substr(a,e.length-a),!1),i+=r="with (__mito_data) {\n"+(r+='__mito_result = arr.join("");')+"\n}",i+="})();";var s=document.getElementsByTagName("script"),d="";s.length>0&&(d=s[0].nonce||"");var u=document.createElement("SCRIPT");u.innerHTML=i,u.setAttribute("nonce",d),document.documentElement.appendChild(u);var f=__mito_result;if(document.documentElement.removeChild(u),!o){var v=document.createElement("DIV");v.innerHTML=f,f=v.children[0]}return f},e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n=o(12);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(3)(!1)).push([e.i,'#__vconsole {\n  color: #000;\n  font-size: 13px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  /* global */\n  /* compoment */\n}\n#__vconsole .vc-max-height {\n  max-height: 19.23076923em;\n}\n#__vconsole .vc-max-height-line {\n  max-height: 3.38461538em;\n}\n#__vconsole .vc-min-height {\n  min-height: 3.07692308em;\n}\n#__vconsole dd,\n#__vconsole dl,\n#__vconsole pre {\n  margin: 0;\n}\n#__vconsole .vc-switch {\n  display: block;\n  position: fixed;\n  right: 0.76923077em;\n  bottom: 0.76923077em;\n  color: #FFF;\n  background-color: #04BE02;\n  line-height: 1;\n  font-size: 1.07692308em;\n  padding: 0.61538462em 1.23076923em;\n  z-index: 10000;\n  border-radius: 0.30769231em;\n  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);\n}\n#__vconsole .vc-mask {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0);\n  z-index: 10001;\n  transition: background 0.3s;\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n}\n#__vconsole .vc-panel {\n  display: none;\n  position: fixed;\n  min-height: 85%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10002;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n#__vconsole .vc-tabbar {\n  border-bottom: 1px solid #D9D9D9;\n  overflow-x: auto;\n  height: 3em;\n  width: auto;\n  white-space: nowrap;\n}\n#__vconsole .vc-tabbar .vc-tab {\n  display: inline-block;\n  line-height: 3em;\n  padding: 0 1.15384615em;\n  border-right: 1px solid #D9D9D9;\n  text-decoration: none;\n  color: #000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-tabbar .vc-tab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-tabbar .vc-tab.vc-actived {\n  background-color: #FFF;\n}\n#__vconsole .vc-content {\n  background-color: #FFF;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 3.07692308em;\n  -webkit-overflow-scrolling: touch;\n  margin-bottom: constant(safe-area-inset-bottom);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n#__vconsole .vc-content.vc-has-topbar {\n  top: 5.46153846em;\n}\n#__vconsole .vc-topbar {\n  background-color: #FBF9FE;\n  display: flex;\n  display: -webkit-box;\n  flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-direction: row;\n  -webkit-flex-wrap: wrap;\n  width: 100%;\n}\n#__vconsole .vc-topbar .vc-toptab {\n  display: none;\n  flex: 1;\n  -webkit-box-flex: 1;\n  line-height: 2.30769231em;\n  padding: 0 1.15384615em;\n  border-bottom: 1px solid #D9D9D9;\n  text-decoration: none;\n  text-align: center;\n  color: #000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-topbar .vc-toptab.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-topbar .vc-toptab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-topbar .vc-toptab.vc-actived {\n  border-bottom: 1px solid #3e82f7;\n}\n#__vconsole .vc-logbox {\n  display: none;\n  position: relative;\n  min-height: 100%;\n}\n#__vconsole .vc-logbox i {\n  font-style: normal;\n}\n#__vconsole .vc-logbox .vc-log {\n  padding-bottom: 3em;\n  -webkit-tap-highlight-color: transparent;\n}\n#__vconsole .vc-logbox .vc-log:empty:before {\n  content: "Empty";\n  color: #999;\n  position: absolute;\n  top: 45%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 1.15384615em;\n  text-align: center;\n}\n#__vconsole .vc-logbox .vc-item {\n  margin: 0;\n  padding: 0.46153846em 0.61538462em;\n  overflow: hidden;\n  line-height: 1.3;\n  border-bottom: 1px solid #EEE;\n  word-break: break-word;\n}\n#__vconsole .vc-logbox .vc-item-info {\n  color: #6A5ACD;\n}\n#__vconsole .vc-logbox .vc-item-debug {\n  color: #DAA520;\n}\n#__vconsole .vc-logbox .vc-item-warn {\n  color: #FFA500;\n  border-color: #FFB930;\n  background-color: #FFFACD;\n}\n#__vconsole .vc-logbox .vc-item-error {\n  color: #DC143C;\n  border-color: #F4A0AB;\n  background-color: #FFE4E1;\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item {\n  display: none;\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-content {\n  margin-right: 4.61538462em;\n  display: inline-block;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-repeat {\n  display: inline-block;\n  margin-right: 0.30769231em;\n  padding: 0 6.5px;\n  color: #D7E0EF;\n  background-color: #42597F;\n  border-radius: 8.66666667px;\n}\n#__vconsole .vc-logbox .vc-item.vc-item-error .vc-item-repeat {\n  color: #901818;\n  background-color: #DC2727;\n}\n#__vconsole .vc-logbox .vc-item.vc-item-warn .vc-item-repeat {\n  color: #987D20;\n  background-color: #F4BD02;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code {\n  display: block;\n  white-space: pre-wrap;\n  overflow: auto;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output {\n  padding-left: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: "›";\n  position: absolute;\n  top: -0.23076923em;\n  left: 0;\n  font-size: 1.23076923em;\n  color: #6A5ACD;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: "‹";\n}\n#__vconsole .vc-logbox .vc-item .vc-fold {\n  display: block;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer {\n  display: block;\n  font-style: italic;\n  padding-left: 0.76923077em;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active {\n  background-color: #E6E6E6;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before {\n  content: "";\n  position: absolute;\n  top: 0.30769231em;\n  left: 0.15384615em;\n  width: 0;\n  height: 0;\n  border: transparent solid 0.30769231em;\n  border-left-color: #000;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before {\n  top: 0.46153846em;\n  left: 0;\n  border-top-color: #000;\n  border-left-color: transparent;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner {\n  display: none;\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key {\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key {\n  margin-left: 0;\n}\n#__vconsole .vc-logbox .vc-code-key {\n  color: #905;\n}\n#__vconsole .vc-logbox .vc-code-private-key {\n  color: #D391B5;\n}\n#__vconsole .vc-logbox .vc-code-function {\n  color: #905;\n  font-style: italic;\n}\n#__vconsole .vc-logbox .vc-code-number,\n#__vconsole .vc-logbox .vc-code-boolean {\n  color: #0086B3;\n}\n#__vconsole .vc-logbox .vc-code-string {\n  color: #183691;\n}\n#__vconsole .vc-logbox .vc-code-null,\n#__vconsole .vc-logbox .vc-code-undefined {\n  color: #666;\n}\n#__vconsole .vc-logbox .vc-cmd {\n  position: absolute;\n  height: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-top: 1px solid #D9D9D9;\n  display: block!important;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap {\n  display: block;\n  height: 2.15384615em;\n  margin-right: 3.07692308em;\n  padding: 0.46153846em 0.61538462em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input {\n  width: 100%;\n  border: none;\n  resize: none;\n  outline: none;\n  padding: 0;\n  font-size: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder {\n  line-height: 2.15384615em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 3.07692308em;\n  border: none;\n  background-color: #EFEFF4;\n  outline: none;\n  -webkit-touch-callout: none;\n  font-size: 1em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted {\n  position: fixed;\n  width: 100%;\n  background-color: #FBF9FE;\n  border: 1px solid #D9D9D9;\n  overflow-x: scroll;\n  display: none;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted li {\n  list-style: none;\n  line-height: 30px;\n  padding: 0 0.46153846em;\n  border-bottom: 1px solid #D9D9D9;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview {\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview:active {\n  background-color: #E6E6E6;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-detail {\n  display: none;\n  padding: 0 0 0.76923077em 1.53846154em;\n  border-bottom: 1px solid #EEE;\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail {\n  display: block;\n  background-color: #FBF9FE;\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row {\n  background-color: #FFF;\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview {\n  background-color: #FBF9FE;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-direction: row;\n  -webkit-flex-wrap: wrap;\n  overflow: hidden;\n  border-bottom: 1px solid #EEE;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border {\n  border-left: 1px solid #EEE;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col {\n  flex: 1;\n  -webkit-box-flex: 1;\n  padding: 0.23076923em 0.30769231em;\n  border-left: 1px solid #EEE;\n  overflow: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  /*white-space: nowrap;\n        text-overflow: ellipsis;*/\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col:first-child {\n  border: none;\n}\n#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col {\n  padding: 0 0.30769231em;\n  font-size: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-2 {\n  flex: 2;\n  -webkit-box-flex: 2;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-3 {\n  flex: 3;\n  -webkit-box-flex: 3;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-4 {\n  flex: 4;\n  -webkit-box-flex: 4;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-5 {\n  flex: 5;\n  -webkit-box-flex: 5;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-6 {\n  flex: 6;\n  -webkit-box-flex: 6;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error {\n  border-color: #F4A0AB;\n  background-color: #FFE4E1;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col {\n  color: #DC143C;\n  border-color: #F4A0AB;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-title {\n  font-weight: bold;\n}\n#__vconsole .vc-logbox.vc-actived {\n  display: block;\n}\n#__vconsole .vc-toolbar {\n  border-top: 1px solid #D9D9D9;\n  line-height: 3em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  display: -webkit-box;\n  flex-direction: row;\n  -webkit-box-direction: row;\n}\n#__vconsole .vc-toolbar .vc-tool {\n  display: none;\n  text-decoration: none;\n  color: #000;\n  width: 50%;\n  flex: 1;\n  -webkit-box-flex: 1;\n  text-align: center;\n  position: relative;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-toolbar .vc-tool.vc-toggle,\n#__vconsole .vc-toolbar .vc-tool.vc-global-tool {\n  display: block;\n}\n#__vconsole .vc-toolbar .vc-tool:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-toolbar .vc-tool:after {\n  content: " ";\n  position: absolute;\n  top: 0.53846154em;\n  bottom: 0.53846154em;\n  right: 0;\n  border-left: 1px solid #D9D9D9;\n}\n#__vconsole .vc-toolbar .vc-tool-last:after {\n  border: none;\n}\n@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {\n  #__vconsole .vc-toolbar,\n  #__vconsole .vc-switch {\n    bottom: constant(safe-area-inset-bottom);\n    bottom: env(safe-area-inset-bottom);\n  }\n}\n#__vconsole.vc-toggle .vc-switch {\n  display: none;\n}\n#__vconsole.vc-toggle .vc-mask {\n  background: rgba(0, 0, 0, 0.6);\n  display: block;\n}\n#__vconsole.vc-toggle .vc-panel {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n',""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t){e.exports='<div id="__vconsole" class="">\n  <div class="vc-switch">vConsole</div>\n  <div class="vc-mask">\n  </div>\n  <div class="vc-panel">\n    <div class="vc-tabbar">\n    </div>\n    <div class="vc-topbar">\n    </div>\n    <div class="vc-content">\n    </div>\n    <div class="vc-toolbar">\n      <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a>\n    </div>\n  </div>\n</div>'},function(e,t){e.exports='<a class="vc-tab" data-tab="{{id}}" id="__vc_tab_{{id}}">{{name}}</a>'},function(e,t){e.exports='<div class="vc-logbox" id="__vc_log_{{id}}">\n  \n</div>'},function(e,t){e.exports='<a class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>'},function(e,t){e.exports='<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>'},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,factory;factory=function(_exports,_query,tool,_log,_tabbox_default,_item_code){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,o){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=_superPropBase(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0,_query=_interopRequireDefault(_query),tool=_interopRequireWildcard(tool),_log=_interopRequireDefault(_log),_tabbox_default=_interopRequireDefault(_tabbox_default),_item_code=_interopRequireDefault(_item_code);var VConsoleDefaultTab=function(_VConsoleLogTab){function VConsoleDefaultTab(){var e,t;_classCallCheck(this,VConsoleDefaultTab);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(VConsoleDefaultTab)).call.apply(e,[this].concat(n)))).tplTabbox=_tabbox_default.default,t}return _inherits(VConsoleDefaultTab,_VConsoleLogTab),_createClass(VConsoleDefaultTab,[{key:"onReady",value:function onReady(){var that=this;_get(_getPrototypeOf(VConsoleDefaultTab.prototype),"onReady",this).call(this),window.winKeys=Object.getOwnPropertyNames(window).sort(),window.keyTypes={};for(var i=0;i<winKeys.length;i++)keyTypes[winKeys[i]]=_typeof(window[winKeys[i]]);var cacheObj={},ID_REGEX=/[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/,retrievePrecedingIdentifier=function(e,t,o){o=o||ID_REGEX;for(var n=[],r=t-1;r>=0&&o.test(e[r]);r--)n.push(e[r]);if(0==n.length){o=/\./;for(var i=t-1;i>=0&&o.test(e[i]);i--)n.push(e[i])}if(0===n.length){var a=e.match(/[\(\)\[\]\{\}]/gi)||[];return a[a.length-1]}return n.reverse().join("")};_query.default.bind(_query.default.one(".vc-cmd-input"),"keyup",function(e){var isDeleteKeyCode=8===e.keyCode||46===e.keyCode,$prompted=_query.default.one(".vc-cmd-prompted");$prompted.style.display="none",$prompted.innerHTML="";var tempValue=this.value,value=retrievePrecedingIdentifier(this.value,this.value.length);if(value&&value.length>0){if(/\(/.test(value)&&!isDeleteKeyCode)return void(_query.default.one(".vc-cmd-input").value+=")");if(/\[/.test(value)&&!isDeleteKeyCode)return void(_query.default.one(".vc-cmd-input").value+="]");if(/\{/.test(value)&&!isDeleteKeyCode)return void(_query.default.one(".vc-cmd-input").value+="}");if("."===value){var key=retrievePrecedingIdentifier(tempValue,tempValue.length-1);if(!cacheObj[key])try{cacheObj[key]=Object.getOwnPropertyNames(eval("("+key+")")).sort()}catch(e){}try{for(var _i3=0;_i3<cacheObj[key].length;_i3++){var $li=document.createElement("li"),_key=cacheObj[key][_i3];$li.innerHTML=_key,$li.onclick=function(){_query.default.one(".vc-cmd-input").value="",_query.default.one(".vc-cmd-input").value=tempValue+this.innerHTML,$prompted.style.display="none"},$prompted.appendChild($li)}}catch(e){}}else if("."!==value.substring(value.length-1)&&value.indexOf(".")<0){for(var _i4=0;_i4<winKeys.length;_i4++)if(winKeys[_i4].toLowerCase().indexOf(value.toLowerCase())>=0){var _$li=document.createElement("li");_$li.innerHTML=winKeys[_i4],_$li.onclick=function(){_query.default.one(".vc-cmd-input").value="",_query.default.one(".vc-cmd-input").value=this.innerHTML,"function"==keyTypes[this.innerHTML]&&(_query.default.one(".vc-cmd-input").value+="()"),$prompted.style.display="none"},$prompted.appendChild(_$li)}}else{var arr=value.split(".");if(cacheObj[arr[0]]){cacheObj[arr[0]].sort();for(var _i5=0;_i5<cacheObj[arr[0]].length;_i5++){var _$li2=document.createElement("li"),_key3=cacheObj[arr[0]][_i5];_key3.indexOf(arr[1])>=0&&(_$li2.innerHTML=_key3,_$li2.onclick=function(){_query.default.one(".vc-cmd-input").value="",_query.default.one(".vc-cmd-input").value=tempValue+this.innerHTML,$prompted.style.display="none"},$prompted.appendChild(_$li2))}}}if($prompted.children.length>0){var m=Math.min(200,31*$prompted.children.length);$prompted.style.display="block",$prompted.style.height=m+"px",$prompted.style.marginTop=-m+"px"}}else $prompted.style.display="none"}),_query.default.bind(_query.default.one(".vc-cmd",this.$tabbox),"submit",function(e){e.preventDefault();var t=_query.default.one(".vc-cmd-input",e.target),o=t.value;t.value="",""!==o&&that.evalCommand(o);var n=_query.default.one(".vc-cmd-prompted");n&&(n.style.display="none")});var code="";code+="if (!!window) {",code+="window.__vConsole_cmd_result = undefined;",code+="window.__vConsole_cmd_error = false;",code+="}";var scriptList=document.getElementsByTagName("script"),nonce="";scriptList.length>0&&(nonce=scriptList[0].nonce||"");var script=document.createElement("SCRIPT");script.innerHTML=code,script.setAttribute("nonce",nonce),document.documentElement.appendChild(script),document.documentElement.removeChild(script)}},{key:"mockConsole",value:function(){_get(_getPrototypeOf(VConsoleDefaultTab.prototype),"mockConsole",this).call(this);var e=this;tool.isFunction(window.onerror)&&(this.windowOnError=window.onerror),window.onerror=function(t,o,n,r,i){var a=t;o&&(a+="\n"+o.replace(location.origin,"")),(n||r)&&(a+=":"+n+":"+r);var l=!!i&&!!i.stack&&i.stack.toString()||"";e.printLog({logType:"error",logs:[a,l],noOrigin:!0}),tool.isFunction(e.windowOnError)&&e.windowOnError.call(window,t,o,n,r,i)}}},{key:"evalCommand",value:function(e){this.printLog({logType:"log",content:_query.default.render(_item_code.default,{content:e,type:"input"}),style:""});var t,o=void 0;try{o=eval.call(window,"("+e+")")}catch(t){try{o=eval.call(window,e)}catch(e){}}tool.isArray(o)||tool.isObject(o)?t=this.getFoldedLine(o):(tool.isNull(o)?o="null":tool.isUndefined(o)?o="undefined":tool.isFunction(o)?o="function()":tool.isString(o)&&(o='"'+o+'"'),t=_query.default.render(_item_code.default,{content:o,type:"output"})),this.printLog({logType:"log",content:t,style:""}),window.winKeys=Object.getOwnPropertyNames(window).sort()}}]),VConsoleDefaultTab}(_log.default),_default=VConsoleDefaultTab;_exports.default=_default,module.exports=exports.default},__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(1),__webpack_require__(0),__webpack_require__(5),__webpack_require__(23),__webpack_require__(24)],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=factory)?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(e,t){e.exports='<div id="{{_id}}" class="vc-item vc-item-{{logType}} {{style}}">\n\t<div class="vc-item-content"></div>\n</div>'},function(e,t){e.exports='<div class="vc-fold">\n  {{if (lineType == \'obj\')}}\n    <i class="vc-fold-outer">{{outer}}</i>\n    <div class="vc-fold-inner"></div>\n  {{else if (lineType == \'value\')}}\n    <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{else if (lineType == \'kv\')}}\n    <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{/if}}\n</div>'},function(e,t){e.exports='<span>\n  <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n</span>'},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n  <form class="vc-cmd">\n    <button class="vc-cmd-btn" type="submit">OK</button>\n    <ul class=\'vc-cmd-prompted\'></ul>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="command..."></textarea>\n    </div>\n  </form>\n</div>'},function(e,t){e.exports='<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>'},function(e,t,o){var n,r,i;r=[t,o(5),o(26)],void 0===(i="function"==typeof(n=function(o,n,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,o){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n=i(n),r=i(r);var f=function(e){function t(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(o=c(this,(e=d(t)).call.apply(e,[this].concat(i)))).tplTabbox=r.default,o.allowUnformattedLog=!1,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),o=t,(n=[{key:"onInit",value:function(){s(d(t.prototype),"onInit",this).call(this),this.printSystemInfo()}},{key:"printSystemInfo",value:function(){var e=navigator.userAgent,t="",o=e.match(/(ipod).*\s([\d_]+)/i),n=e.match(/(ipad).*\s([\d_]+)/i),r=e.match(/(iphone)\sos\s([\d_]+)/i),i=e.match(/(android)\s([\d\.]+)/i);t="Unknown",i?t="Android "+i[2]:r?t="iPhone, iOS "+r[2].replace(/_/g,"."):n?t="iPad, iOS "+n[2].replace(/_/g,"."):o&&(t="iPod, iOS "+o[2].replace(/_/g,"."));var a=t,l=e.match(/MicroMessenger\/([\d\.]+)/i);t="Unknown",l&&l[1]?(t=l[1],a+=", WeChat "+t,console.info("[system]","System:",a)):console.info("[system]","System:",a),t="Unknown",t="https:"==location.protocol?"HTTPS":"http:"==location.protocol?"HTTP":location.protocol.replace(":",""),a=t;var c=e.toLowerCase().match(/ nettype\/([^ ]+)/g);t="Unknown",c&&c[0]?(c=c[0].split("/"),t=c[1],a+=", "+t,console.info("[system]","Network:",a)):console.info("[system]","Protocol:",a),console.info("[system]","UA:",e),setTimeout(function(){var e=window.performance||window.msPerformance||window.webkitPerformance;if(e&&e.timing){var t=e.timing;t.navigationStart&&console.info("[system]","navigationStart:",t.navigationStart),t.navigationStart&&t.domainLookupStart&&console.info("[system]","navigation:",t.domainLookupStart-t.navigationStart+"ms"),t.domainLookupEnd&&t.domainLookupStart&&console.info("[system]","dns:",t.domainLookupEnd-t.domainLookupStart+"ms"),t.connectEnd&&t.connectStart&&(t.connectEnd&&t.secureConnectionStart?console.info("[system]","tcp (ssl):",t.connectEnd-t.connectStart+"ms ("+(t.connectEnd-t.secureConnectionStart)+"ms)"):console.info("[system]","tcp:",t.connectEnd-t.connectStart+"ms")),t.responseStart&&t.requestStart&&console.info("[system]","request:",t.responseStart-t.requestStart+"ms"),t.responseEnd&&t.responseStart&&console.info("[system]","response:",t.responseEnd-t.responseStart+"ms"),t.domComplete&&t.domLoading&&(t.domContentLoadedEventStart&&t.domLoading?console.info("[system]","domComplete (domLoaded):",t.domComplete-t.domLoading+"ms ("+(t.domContentLoadedEventStart-t.domLoading)+"ms)"):console.info("[system]","domComplete:",t.domComplete-t.domLoading+"ms")),t.loadEventEnd&&t.loadEventStart&&console.info("[system]","loadEvent:",t.loadEventEnd-t.loadEventStart+"ms"),t.navigationStart&&t.loadEventEnd&&console.info("[system]","total (DOM):",t.loadEventEnd-t.navigationStart+"ms ("+(t.domComplete-t.navigationStart)+"ms)")}},0)}}])&&l(o.prototype,n),i&&l(o,i),t;var o,n,i}(n.default);o.default=f,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n</div>'},function(e,t,o){var n,r,i;r=[t,o(1),o(0),o(2),o(28),o(29),o(30)],void 0===(i="function"==typeof(n=function(o,n,r,i,a,l,c){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n=s(n),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(r),i=s(i),a=s(a),l=s(l),c=s(c);var b=function(e){function t(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(o=f(this,(e=v(t)).call.apply(e,[this].concat(i)))).$tabbox=n.default.render(a.default,{}),o.$header=null,o.reqList={},o.domList={},o.isReady=!1,o.isShow=!1,o.isInBottom=!0,o._open=void 0,o._send=void 0,o.mockAjax(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),o=t,(i=[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0,this.renderHeader(),n.default.delegate(n.default.one(".vc-log",this.$tabbox),"click",".vc-group-preview",function(t){var o=this.dataset.reqid,r=this.parentNode;n.default.hasClass(r,"vc-actived")?(n.default.removeClass(r,"vc-actived"),e.updateRequest(o,{actived:!1})):(n.default.addClass(r,"vc-actived"),e.updateRequest(o,{actived:!0})),t.preventDefault()});var t=n.default.one(".vc-content");for(var o in n.default.bind(t,"scroll",function(o){e.isShow&&(t.scrollTop+t.offsetHeight>=t.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)}),e.reqList)e.updateRequest(o,{})}},{key:"onRemove",value:function(){window.XMLHttpRequest&&(window.XMLHttpRequest.prototype.open=this._open,window.XMLHttpRequest.prototype.send=this._send,this._open=void 0,this._send=void 0)}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.scrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=n.default.one(".vc-content");e.scrollTop=e.scrollHeight-e.offsetHeight}},{key:"clearLog",value:function(){for(var e in this.reqList={},this.domList)this.domList[e].remove(),this.domList[e]=void 0;this.domList={},this.renderHeader()}},{key:"renderHeader",value:function(){var e=Object.keys(this.reqList).length,t=n.default.render(l.default,{count:e}),o=n.default.one(".vc-log",this.$tabbox);this.$header?this.$header.parentNode.replaceChild(t,this.$header):o.parentNode.insertBefore(t,o),this.$header=t}},{key:"updateRequest",value:function(e,t){var o=Object.keys(this.reqList).length,i=this.reqList[e]||{};for(var a in t)i[a]=t[a];if(this.reqList[e]=i,this.isReady){var l={id:e,url:i.url,status:i.status,method:i.method||"-",costTime:i.costTime>0?i.costTime+"ms":"-",header:i.header||null,getData:i.getData||null,postData:i.postData||null,response:null,actived:!!i.actived};switch(i.responseType){case"":case"text":if(r.isString(i.response))try{l.response=JSON.parse(i.response),l.response=JSON.stringify(l.response,null,1),l.response=r.htmlEncode(l.response)}catch(e){l.response=r.htmlEncode(i.response)}else void 0!==i.response&&(l.response=Object.prototype.toString.call(i.response));break;case"json":void 0!==i.response&&(l.response=JSON.stringify(i.response,null,1),l.response=r.htmlEncode(l.response));break;case"blob":case"document":case"arraybuffer":default:void 0!==i.response&&(l.response=Object.prototype.toString.call(i.response))}0==i.readyState||1==i.readyState?l.status="Pending":2==i.readyState||3==i.readyState?l.status="Loading":4==i.readyState||(l.status="Unknown");var s=n.default.render(c.default,l),d=this.domList[e];i.status>=400&&n.default.addClass(n.default.one(".vc-group-preview",s),"vc-table-row-error"),d?d.parentNode.replaceChild(s,d):n.default.one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",s),this.domList[e]=s;var u=Object.keys(this.reqList).length;u!=o&&this.renderHeader(),this.isInBottom&&this.scrollToBottom()}}},{key:"mockAjax",value:function(){var e=window.XMLHttpRequest;if(e){var t=this,o=window.XMLHttpRequest.prototype.open,n=window.XMLHttpRequest.prototype.send;t._open=o,t._send=n,window.XMLHttpRequest.prototype.open=function(){var e=this,n=[].slice.call(arguments),r=n[0],i=n[1],a=t.getUniqueID(),l=null;e._requestID=a,e._method=r,e._url=i;var c=e.onreadystatechange||function(){},s=function(){var o=t.reqList[a]||{};if(o.readyState=e.readyState,o.status=0,e.readyState>1&&(o.status=e.status),o.responseType=e.responseType,0==e.readyState)o.startTime||(o.startTime=+new Date);else if(1==e.readyState)o.startTime||(o.startTime=+new Date);else if(2==e.readyState){o.header={};for(var n=e.getAllResponseHeaders()||"",r=n.split("\n"),i=0;i<r.length;i++){var s=r[i];if(s){var d=s.split(": "),u=d[0],f=d.slice(1).join(": ");o.header[u]=f}}}else 3==e.readyState||(4==e.readyState?(clearInterval(l),o.endTime=+new Date,o.costTime=o.endTime-(o.startTime||o.endTime),o.response=e.response):clearInterval(l));return e._noVConsole||t.updateRequest(a,o),c.apply(e,arguments)};e.onreadystatechange=s;var d=-1;return l=setInterval(function(){d!=e.readyState&&(d=e.readyState,s.call(e))},10),o.apply(e,n)},window.XMLHttpRequest.prototype.send=function(){var e=[].slice.call(arguments),o=e[0],i=t.reqList[this._requestID]||{};i.method=this._method.toUpperCase();var a=this._url.split("?");if(i.url=a.shift(),a.length>0){i.getData={},a=(a=a.join("?")).split("&");var l=!0,c=!1,s=void 0;try{for(var d,u=a[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){var f=d.value;f=f.split("="),i.getData[f[0]]=decodeURIComponent(f[1])}}catch(e){c=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}}if("POST"==i.method)if(r.isString(o)){var v=o.split("&");i.postData={};var p=!0,b=!1,h=void 0;try{for(var g,m=v[Symbol.iterator]();!(p=(g=m.next()).done);p=!0){var y=g.value;y=y.split("="),i.postData[y[0]]=y[1]}}catch(e){b=!0,h=e}finally{try{p||null==m.return||m.return()}finally{if(b)throw h}}}else r.isPlainObject(o)&&(i.postData=o);return this._noVConsole||t.updateRequest(this._requestID,i),n.apply(this,e)}}}},{key:"getUniqueID",value:function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,o="x"==e?t:3&t|8;return o.toString(16)});return e}}])&&u(o.prototype,i),s&&u(o,s),t;var o,i,s}(i.default);o.default=b,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t){e.exports='<div class="vc-table">\n  <div class="vc-log"></div>\n</div>'},function(e,t){e.exports='<dl class="vc-table-row">\n  <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\n  <dd class="vc-table-col">Method</dd>\n  <dd class="vc-table-col">Status</dd>\n  <dd class="vc-table-col">Time</dd>\n</dl>'},function(e,t){e.exports='<div class="vc-group {{actived ? \'vc-actived\' : \'\'}}">\n  <dl class="vc-table-row vc-group-preview" data-reqid="{{id}}">\n    <dd class="vc-table-col vc-table-col-4">{{url}}</dd>\n    <dd class="vc-table-col">{{method}}</dd>\n    <dd class="vc-table-col">{{status}}</dd>\n    <dd class="vc-table-col">{{costTime}}</dd>\n  </dl>\n  <div class="vc-group-detail">\n    {{if (header !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Headers</dt>\n      </dl>\n      {{for (var key in header)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (getData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Query String Parameters</dt>\n      </dl>\n      {{for (var key in getData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{getData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (postData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Form Data</dt>\n      </dl>\n      {{for (var key in postData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{postData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Response</dt>\n      </dl>\n      <div class="vc-table-row vc-left-border vc-small">\n        <pre class="vc-table-col vc-max-height vc-min-height">{{response || \'\'}}</pre>\n      </div>\n    </div>\n  </div>\n</div>'},function(e,t,o){var n,r,i;r=[t,o(32),o(2),o(34),o(35),o(0),o(1)],void 0===(i="function"==typeof(n=function(o,n,r,i,a,l,c){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(l),c=s(c);var b=function(e){function t(){var e,o,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];n=this,r=(e=f(t)).call.apply(e,[this].concat(l)),o=!r||"object"!==d(r)&&"function"!=typeof r?p(n):r;var u=p(p(o));u.isInited=!1,u.node={},u.$tabbox=c.default.render(i.default,{}),u.nodes=[],u.activedElem={};var v=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;return u.observer=new v(function(e){for(var t=0;t<e.length;t++){var o=e[t];u._isInVConsole(o.target)||u.onMutation(o)}}),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),o=t,(n=[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Expand",global:!1,onClick:function(e){if(t.activedElem)if(c.default.hasClass(t.activedElem,"vc-toggle"))for(var o=0;o<t.activedElem.childNodes.length;o++){var n=t.activedElem.childNodes[o];if(c.default.hasClass(n,"vcelm-l")&&!c.default.hasClass(n,"vcelm-noc")&&!c.default.hasClass(n,"vc-toggle")){c.default.one(".vcelm-node",n).click();break}}else c.default.one(".vcelm-node",t.activedElem).click()}},{name:"Collapse",global:!1,onClick:function(e){t.activedElem&&(c.default.hasClass(t.activedElem,"vc-toggle")?c.default.one(".vcelm-node",t.activedElem).click():t.activedElem.parentNode&&c.default.hasClass(t.activedElem.parentNode,"vcelm-l")&&c.default.one(".vcelm-node",t.activedElem.parentNode).click())}}];e(o)}},{key:"onShow",value:function(){if(!this.isInited){this.isInited=!0,this.node=this.getNode(document.documentElement);var e=this.renderView(this.node,c.default.one(".vc-log",this.$tabbox)),t=c.default.one(".vcelm-node",e);t&&t.click(),this.observer.observe(document.documentElement,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}}},{key:"onRemove",value:function(){this.observer.disconnect()}},{key:"onMutation",value:function(e){switch(e.type){case"childList":e.removedNodes.length>0&&this.onChildRemove(e),e.addedNodes.length>0&&this.onChildAdd(e);break;case"attributes":this.onAttributesChange(e);break;case"characterData":this.onCharacterDataChange(e)}}},{key:"onChildRemove",value:function(e){var t=e.target,o=t.__vconsole_node;if(o){for(var n=0;n<e.removedNodes.length;n++){var r=e.removedNodes[n],i=r.__vconsole_node;i&&i.view&&i.view.parentNode.removeChild(i.view)}this.getNode(t)}}},{key:"onChildAdd",value:function(e){var t=e.target,o=t.__vconsole_node;if(o){this.getNode(t),o.view&&c.default.removeClass(o.view,"vcelm-noc");for(var n=0;n<e.addedNodes.length;n++){var r=e.addedNodes[n],i=r.__vconsole_node;if(i)if(null!==e.nextSibling){var a=e.nextSibling.__vconsole_node;a.view&&this.renderView(i,a.view,"insertBefore")}else o.view&&(o.view.lastChild?this.renderView(i,o.view.lastChild,"insertBefore"):this.renderView(i,o.view))}}}},{key:"onAttributesChange",value:function(e){var t=e.target.__vconsole_node;t&&(t=this.getNode(e.target)).view&&this.renderView(t,t.view,!0)}},{key:"onCharacterDataChange",value:function(e){var t=e.target.__vconsole_node;t&&(t=this.getNode(e.target)).view&&this.renderView(t,t.view,!0)}},{key:"renderView",value:function(e,t,o){var n=this,r=new a.default(e).get();switch(e.view=r,c.default.delegate(r,"click",".vcelm-node",function(t){t.stopPropagation();var o=this.parentNode;if(!c.default.hasClass(o,"vcelm-noc")){n.activedElem=o,c.default.hasClass(o,"vc-toggle")?c.default.removeClass(o,"vc-toggle"):c.default.addClass(o,"vc-toggle");for(var r=-1,i=0;i<o.children.length;i++){var a=o.children[i];c.default.hasClass(a,"vcelm-l")&&(r++,a.children.length>0||(e.childNodes[r]?n.renderView(e.childNodes[r],a,"replace"):a.style.display="none"))}}}),o){case"replace":t.parentNode.replaceChild(r,t);break;case"insertBefore":t.parentNode.insertBefore(r,t);break;default:t.appendChild(r)}return r}},{key:"getNode",value:function(e){if(!this._isIgnoredElement(e)){var t=e.__vconsole_node||{};if(t.nodeType=e.nodeType,t.nodeName=e.nodeName,t.tagName=e.tagName||"",t.textContent="",t.nodeType!=e.TEXT_NODE&&t.nodeType!=e.DOCUMENT_TYPE_NODE||(t.textContent=e.textContent),t.id=e.id||"",t.className=e.className||"",t.attributes=[],e.hasAttributes&&e.hasAttributes())for(var o=0;o<e.attributes.length;o++)t.attributes.push({name:e.attributes[o].name,value:e.attributes[o].value||""});if(t.childNodes=[],e.childNodes.length>0)for(var n=0;n<e.childNodes.length;n++){var r=this.getNode(e.childNodes[n]);r&&t.childNodes.push(r)}return e.__vconsole_node=t,t}}},{key:"_isIgnoredElement",value:function(e){return e.nodeType==e.TEXT_NODE&&""==e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g,"")}},{key:"_isInVConsole",value:function(e){for(var t=e;null!=t;){if("__vconsole"==t.id)return!0;t=t.parentNode||void 0}return!1}}])&&u(o.prototype,n),r&&u(o,r),t;var o,n,r}(r.default);o.default=b,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t,o){var n=o(33);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(3)(!1)).push([e.i,'/* color */\n.vcelm-node {\n  color: #183691;\n}\n.vcelm-k {\n  color: #0086B3;\n}\n.vcelm-v {\n  color: #905;\n}\n/* layout */\n.vcelm-l {\n  padding-left: 8px;\n  position: relative;\n  word-wrap: break-word;\n  line-height: 1;\n}\n/*.vcelm-l.vcelm-noc {\n  padding-left: 0;\n}*/\n.vcelm-l.vc-toggle > .vcelm-node {\n  display: block;\n}\n.vcelm-l .vcelm-node:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.vcelm-l.vcelm-noc .vcelm-node:active {\n  background-color: transparent;\n}\n.vcelm-t {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/* level */\n.vcelm-l .vcelm-l {\n  display: none;\n}\n.vcelm-l.vc-toggle > .vcelm-l {\n  margin-left: 4px;\n  display: block;\n}\n/* arrow */\n.vcelm-l:before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 6px;\n  left: 3px;\n  width: 0;\n  height: 0;\n  border: transparent solid 3px;\n  border-left-color: #000;\n}\n.vcelm-l.vc-toggle:before {\n  display: block;\n  top: 6px;\n  left: 0;\n  border-top-color: #000;\n  border-left-color: transparent;\n}\n.vcelm-l.vcelm-noc:before {\n  display: none;\n}\n',""])},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n</div>'},function(e,t,o){var n,r,i;r=[t,o(36),o(37),o(0),o(1)],void 0===(i="function"==typeof(n=function(o,n,r,i,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n=l(n),r=l(r),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(i),a=l(a);var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=t,this.view=this._create(this.node)}return t=e,(o=[{key:"get",value:function(){return this.view}},{key:"_create",value:function(e,t){var o=document.createElement("DIV");switch(a.default.addClass(o,"vcelm-l"),e.nodeType){case o.ELEMENT_NODE:this._createElementNode(e,o);break;case o.TEXT_NODE:this._createTextNode(e,o);break;case o.COMMENT_NODE:case o.DOCUMENT_NODE:case o.DOCUMENT_TYPE_NODE:case o.DOCUMENT_FRAGMENT_NODE:}return o}},{key:"_createTextNode",value:function(e,t){a.default.addClass(t,"vcelm-t vcelm-noc"),e.textContent&&t.appendChild(function(e){return document.createTextNode(e)}(e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")))}},{key:"_createElementNode",value:function(e,t){var o,i=(o=(o=e.tagName)?o.toLowerCase():"",["br","hr","img","input","link","meta"].indexOf(o)>-1),l=i;0==e.childNodes.length&&(l=!0);var c=a.default.render(n.default,{node:e}),s=a.default.render(r.default,{node:e});if(l)a.default.addClass(t,"vcelm-noc"),t.appendChild(c),i||t.appendChild(s);else{t.appendChild(c);for(var d=0;d<e.childNodes.length;d++){var u=document.createElement("DIV");a.default.addClass(u,"vcelm-l"),t.appendChild(u)}i||t.appendChild(s)}}}])&&c(t.prototype,o),i&&c(t,i),e;var t,o,i}();o.default=s,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t){e.exports='<span class="vcelm-node">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\n  <i class="vcelm-k">\n    {{for (var i = 0; i < node.attributes.length; i++)}}\n      {{if (node.attributes[i].value !== \'\')}}\n        {{node.attributes[i].name}}="<i class="vcelm-v">{{node.attributes[i].value}}</i>"{{else}}\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>'},function(e,t){e.exports='<span class="vcelm-node">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>'},function(e,t,o){var n,r,i;r=[t,o(2),o(39),o(40),o(0),o(1)],void 0===(i="function"==typeof(n=function(o,n,r,i,a,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,n=c(n),r=c(r),i=c(i),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(a),l=c(l);var p=function(e){function t(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(o=u(this,(e=f(t)).call.apply(e,[this].concat(i)))).$tabbox=l.default.render(r.default,{}),o.currentType="",o.typeNameMap={cookies:"Cookies",localstorage:"LocalStorage",sessionstorage:"SessionStorage"},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),o=t,(n=[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["Cookies","LocalStorage","SessionStorage"],n=[],r=0;r<o.length;r++)n.push({name:o[r],data:{type:o[r].toLowerCase()},className:"",onClick:function(){if(l.default.hasClass(this,"vc-actived"))return!1;t.currentType=this.dataset.type,t.renderStorage()}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Refresh",global:!1,onClick:function(e){t.renderStorage()}},{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){}},{key:"onShow",value:function(){""==this.currentType&&(this.currentType="cookies",this.renderStorage())}},{key:"clearLog",value:function(){if(this.currentType&&window.confirm){var e=window.confirm("Remove all "+this.typeNameMap[this.currentType]+"?");if(!e)return!1}switch(this.currentType){case"cookies":this.clearCookieList();break;case"localstorage":this.clearLocalStorageList();break;case"sessionstorage":this.clearSessionStorageList();break;default:return!1}this.renderStorage()}},{key:"renderStorage",value:function(){var e=[];switch(this.currentType){case"cookies":e=this.getCookieList();break;case"localstorage":e=this.getLocalStorageList();break;case"sessionstorage":e=this.getSessionStorageList();break;default:return!1}var t=l.default.one(".vc-log",this.$tabbox);if(0==e.length)t.innerHTML="";else{for(var o=0;o<e.length;o++)e[o].name=a.htmlEncode(e[o].name),e[o].value=a.htmlEncode(e[o].value);t.innerHTML=l.default.render(i.default,{list:e},!0)}}},{key:"getCookieList",value:function(){if(!document.cookie||!navigator.cookieEnabled)return[];for(var e=[],t=document.cookie.split(";"),o=0;o<t.length;o++){var n=t[o].split("="),r=n.shift().replace(/^ /,""),i=n.join("=");try{r=decodeURIComponent(r),i=decodeURIComponent(i)}catch(e){console.log(e,r,i)}e.push({name:r,value:i})}return e}},{key:"getLocalStorageList",value:function(){if(!window.localStorage)return[];try{for(var e=[],t=0;t<localStorage.length;t++){var o=localStorage.key(t),n=localStorage.getItem(o);e.push({name:o,value:n})}return e}catch(e){return[]}}},{key:"getSessionStorageList",value:function(){if(!window.sessionStorage)return[];try{for(var e=[],t=0;t<sessionStorage.length;t++){var o=sessionStorage.key(t),n=sessionStorage.getItem(o);e.push({name:o,value:n})}return e}catch(e){return[]}}},{key:"clearCookieList",value:function(){if(document.cookie&&navigator.cookieEnabled){for(var e=this.getCookieList(),t=0;t<e.length;t++)document.cookie=e[t].name+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";this.renderStorage()}}},{key:"clearLocalStorageList",value:function(){if(window.localStorage)try{localStorage.clear(),this.renderStorage()}catch(e){alert("localStorage.clear() fail.")}}},{key:"clearSessionStorageList",value:function(){if(window.sessionStorage)try{sessionStorage.clear(),this.renderStorage()}catch(e){alert("sessionStorage.clear() fail.")}}}])&&d(o.prototype,n),c&&d(o,c),t;var o,n,c}(n.default);o.default=p,e.exports=t.default})?n.apply(t,r):n)||(e.exports=i)},function(e,t){e.exports='<div class="vc-table">\n  <div class="vc-log"></div>\n</div>'},function(e,t){e.exports='<div>\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">Name</dd>\n    <dd class="vc-table-col vc-table-col-2">Value</dd>\n  </dl>\n  {{for (var i = 0; i < list.length; i++)}}\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">{{list[i].name}}</dd>\n    <dd class="vc-table-col vc-table-col-2">{{list[i].value}}</dd>\n  </dl>\n  {{/for}}\n</div>'}])});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(this, (function (exports) {
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function fixProto(target, prototype) {
        var setPrototypeOf = Object.setPrototypeOf;
        setPrototypeOf ? setPrototypeOf(target, prototype) : (target.__proto__ = prototype);
    }

    function fixStack(target, fn) {
        if (fn === void 0) {
            fn = target.constructor;
        }
        var captureStackTrace = Error.captureStackTrace;
        captureStackTrace && captureStackTrace(target, fn);
    }



    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLnRzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsU0FBUyxNQUFRLEVBQUEsV0FBVztJQUN4QyxHQUFBLENBQUksaUJBQWlCLE1BQUEsQ0FBTztJQUM1QixjQUFBLEdBQ00sY0FBQSxDQUFlLFFBQVEsY0FDdEIsTUFBQSxDQUFPLFNBQVAsQ0FBQSxDQUFBLENBQW1CO0FBQzlCOztBQUNBLE9BQU8sU0FBUyxTQUFTLE1BQVEsRUFBQSxJQUFJO0lBQ2pDLElBQUksRUFBQSxDQUFBLEdBQUEsQ0FBTyxJQUFBLENBQUssR0FBRztRQUFFLEVBQUEsQ0FBQSxDQUFBLENBQUssTUFBQSxDQUFPO0lBQXJDO0lBQ0ksR0FBQSxDQUFJLG9CQUFvQixLQUFBLENBQU07SUFDOUIsaUJBQUEsQ0FBQSxFQUFBLENBQXFCLGlCQUFBLENBQWtCLFFBQVE7QUFDbkQ7O0FBVkEiLCJmaWxlIjoidXRpbHMudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZpeFByb3RvKHRhcmdldCwgcHJvdG90eXBlKSB7XHJcbiAgICB2YXIgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2Y7XHJcbiAgICBzZXRQcm90b3R5cGVPZlxyXG4gICAgICAgID8gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpXHJcbiAgICAgICAgOiAodGFyZ2V0Ll9fcHJvdG9fXyA9IHByb3RvdHlwZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFN0YWNrKHRhcmdldCwgZm4pIHtcclxuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gdGFyZ2V0LmNvbnN0cnVjdG9yOyB9XHJcbiAgICB2YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcclxuICAgIGNhcHR1cmVTdGFja1RyYWNlICYmIGNhcHR1cmVTdGFja1RyYWNlKHRhcmdldCwgZm4pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdfQ==

    var CustomError = (function (_super) {
        __extends(CustomError, _super);
        function CustomError(message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message) || this;
            Object.defineProperty(_this, 'name', {
                value: _newTarget.name,
                enumerable: false
            });
            fixProto(_this, _newTarget.prototype);
            fixStack(_this);
            return _this;
        }
        
        return CustomError;
    })(Error);


    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lcnJvci50cyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxhQUFhO0FBQ3pCLFFBQVMsVUFBVSxlQUFnQjtBQUNuQyxHQUFBLENBQUksZUFBZSxVQUFVLFFBQVE7SUFDakMsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsYUFBYTtJQUMvQixTQUFTLFlBQVksU0FBUztRQUMxQixHQUFBLENBQUksYUFBYSxJQUFBLENBQUs7UUFDdEIsR0FBQSxDQUFJLFFBQVEsTUFBQSxDQUFPLElBQVAsQ0FBWSxNQUFNLFFBQWxCLENBQUEsRUFBQSxDQUE4QjtRQUMxQyxNQUFBLENBQU8sY0FBUCxDQUFzQixPQUFPLFFBQVE7WUFDakMsT0FBTyxVQUFBLENBQVcsSUFEZSxDQUFBO1lBRWpDLFlBQVk7O1FBRWhCLFFBQUEsQ0FBUyxPQUFPLFVBQUEsQ0FBVztRQUMzQixRQUFBLENBQVM7UUFDVCxPQUFPO0lBQ2Y7O0lBQ0ksT0FBTztBQUNYLEVBZG1CLENBY2pCO0FBQ0YsT0FBQSxDQUFTO0FBakJUIiwiZmlsZSI6ImN1c3RvbS1lcnJvci50cyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xyXG5pbXBvcnQgeyBmaXhQcm90bywgZml4U3RhY2sgfSBmcm9tICcuL3V0aWxzJztcclxudmFyIEN1c3RvbUVycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIHRzbGliXzEuX19leHRlbmRzKEN1c3RvbUVycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywgJ25hbWUnLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBfbmV3VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpeFByb3RvKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiAgICAgICAgZml4U3RhY2soX3RoaXMpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDdXN0b21FcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnQgeyBDdXN0b21FcnJvciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZXJyb3IuanMubWFwIl19

    function customErrorFactory(fn, parent) {
        if (parent === void 0) {
            parent = Error;
        }
        function CustomError() {
            var args = [];
            for (var _i = 0;_i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!(this instanceof CustomError)) 
                return new (CustomError.bind.apply(CustomError, [void 0].concat(args)))();
            parent.apply(this, args);
            fn.apply(this, args);
            this.name = fn.name || parent.name;
            fixStack(this, CustomError);
        }
        
        return Object.defineProperties(CustomError, {
            prototype: {
                value: Object.create(parent.prototype, {
                    constructor: {
                        value: CustomError,
                        writable: true,
                        configurable: true
                    }
                })
            }
        });
    }



    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RvcnkudHMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsZUFBZ0I7QUFDekIsT0FBTyxTQUFTLG1CQUFtQixFQUFJLEVBQUEsUUFBUTtJQUMzQyxJQUFJLE1BQUEsQ0FBQSxHQUFBLENBQVcsSUFBQSxDQUFLLEdBQUc7UUFBRSxNQUFBLENBQUEsQ0FBQSxDQUFTO0lBQXRDO0lBQ0ksU0FBUyxjQUFjO1FBQ25CLEdBQUEsQ0FBSSxPQUFPO1FBQ1gsS0FBSyxHQUFBLENBQUksS0FBSyxFQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUssU0FBQSxDQUFVLFFBQVEsRUFBQSxJQUFNO1lBQzFDLElBQUEsQ0FBSyxHQUFMLENBQUEsQ0FBQSxDQUFXLFNBQUEsQ0FBVTtRQUNqQztRQUNRLElBQUksRUFBRSxJQUFBLENBQUEsVUFBQSxDQUFnQjtZQUNsQixPQUFPLEtBQUssV0FBQSxDQUFZLElBQVosQ0FBaUIsS0FBakIsQ0FBdUIsYUFBYSxDQUFDLElBQUEsQ0FBSyxFQUFOLENBQVMsTUFBVCxDQUFnQixPQUF6RDtRQUNYLE1BQUEsQ0FBTyxLQUFQLENBQWEsTUFBTTtRQUNuQixFQUFBLENBQUcsS0FBSCxDQUFTLE1BQU07UUFDZixJQUFBLENBQUssSUFBTCxDQUFBLENBQUEsQ0FBWSxFQUFBLENBQUcsSUFBSCxDQUFBLEVBQUEsQ0FBVyxNQUFBLENBQU87UUFDOUIsUUFBQSxDQUFTLE1BQU07SUFDdkI7O0lBQ0ksT0FBTyxNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsYUFBYTtRQUN4QyxXQUFXO1lBQ1AsT0FBTyxNQUFBLENBQU8sTUFBUCxDQUFjLE1BQUEsQ0FBTyxXQUFXO2dCQUNuQyxhQUFhO29CQUNULE9BQU8sV0FERSxDQUFBO29CQUVULFVBQVUsSUFGRCxDQUFBO29CQUdULGNBQWM7Ozs7O0FBS2xDOztBQTFCQSIsImZpbGUiOiJmYWN0b3J5LnRzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpeFN0YWNrIH0gZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FcnJvckZhY3RvcnkoZm4sIHBhcmVudCkge1xyXG4gICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IEVycm9yOyB9XHJcbiAgICBmdW5jdGlvbiBDdXN0b21FcnJvcigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEN1c3RvbUVycm9yKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoQ3VzdG9tRXJyb3IuYmluZC5hcHBseShDdXN0b21FcnJvciwgW3ZvaWQgMF0uY29uY2F0KGFyZ3MpKSkoKTtcclxuICAgICAgICBwYXJlbnQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZm4ubmFtZSB8fCBwYXJlbnQubmFtZTtcclxuICAgICAgICBmaXhTdGFjayh0aGlzLCBDdXN0b21FcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ3VzdG9tRXJyb3IsIHtcclxuICAgICAgICBwcm90b3R5cGU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSwge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQ3VzdG9tRXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwIl19

    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGdCQUFBO0FBQ2QsY0FBYyxXQUFBO0FBRGQiLCJmaWxlIjoiaW5kZXgudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jdXN0b20tZXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZhY3RvcnknO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=

    exports.CustomError = CustomError;
    exports.customErrorFactory = customErrorFactory;

})));
//# sourceMappingURL=custom-error.umd.js.map


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vconsole/dist/vconsole.min.js
var vconsole_min = __webpack_require__(3);
var vconsole_min_default = /*#__PURE__*/__webpack_require__.n(vconsole_min);

// EXTERNAL MODULE: ./node_modules/loglevel/lib/loglevel.js
var loglevel = __webpack_require__(6);
var loglevel_default = /*#__PURE__*/__webpack_require__.n(loglevel);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayEvery.js
/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

/* harmony default export */ var _arrayEvery = (arrayEvery);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ var _createBaseFor = (createBaseFor);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ var _baseFor = (baseFor);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root["a" /* default */].Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ var lodash_es_isArguments = (isArguments);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ var lodash_es_isArray = (isArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ var _isIndex = (isIndex);

// CONCATENATED MODULE: ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ var lodash_es_isLength = (isLength);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ var _baseUnary = (baseUnary);

// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ var _isPrototype = (isPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

/* harmony default export */ var _nativeKeys = (nativeKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeys = (baseKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ var lodash_es_isObject = (isObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    isFunction_funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == isFunction_funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ var lodash_es_isFunction = (isFunction);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ var lodash_es_keys = (keys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseForOwn.js



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, lodash_es_keys);
}

/* harmony default export */ var _baseForOwn = (baseForOwn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseEach.js


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!lodash_es_isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/* harmony default export */ var _createBaseEach = (createBaseEach);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseEach.js



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

/* harmony default export */ var _baseEach = (baseEach);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseEvery.js


/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  _baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

/* harmony default export */ var _baseEvery = (baseEvery);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ var lodash_es_eq = (eq);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ var _ListCache = (ListCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["a" /* default */]['__core-js_shared__'];

/* harmony default export */ var _coreJsData = (coreJsData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ var _isMasked = (isMasked);

// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ var _toSource = (toSource);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = (getNative);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var _Map_Map = _getNative(_root["a" /* default */], 'Map');

/* harmony default export */ var _Map = (_Map_Map);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

/* harmony default export */ var _nativeCreate = (nativeCreate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ var _Hash = (Hash);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ var _isKeyable = (isKeyable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ var _MapCache = (MapCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ var _Stack = (Stack);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var _setCacheAdd_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, _setCacheAdd_HASH_UNDEFINED);
  return this;
}

/* harmony default export */ var _setCacheAdd = (setCacheAdd);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ var _setCacheHas = (setCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ var _SetCache = (SetCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arraySome = (arraySome);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ var _cacheHas = (cacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalArrays = (equalArrays);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var Uint8Array = _root["a" /* default */].Uint8Array;

/* harmony default export */ var _Uint8Array = (Uint8Array);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ var _mapToArray = (mapToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setToArray.js
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ var _setToArray = (setToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var _equalByTag_boolTag = '[object Boolean]',
    _equalByTag_dateTag = '[object Date]',
    _equalByTag_errorTag = '[object Error]',
    _equalByTag_mapTag = '[object Map]',
    _equalByTag_numberTag = '[object Number]',
    _equalByTag_regexpTag = '[object RegExp]',
    _equalByTag_setTag = '[object Set]',
    _equalByTag_stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var _equalByTag_arrayBufferTag = '[object ArrayBuffer]',
    _equalByTag_dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case _equalByTag_dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case _equalByTag_arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case _equalByTag_boolTag:
    case _equalByTag_dateTag:
    case _equalByTag_numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return lodash_es_eq(+object, +other);

    case _equalByTag_errorTag:
      return object.name == other.name && object.message == other.message;

    case _equalByTag_regexpTag:
    case _equalByTag_stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case _equalByTag_mapTag:
      var convert = _mapToArray;

    case _equalByTag_setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ var _equalByTag = (equalByTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ var _arrayPush = (arrayPush);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ var _baseGetAllKeys = (baseGetAllKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ var _arrayFilter = (arrayFilter);

// CONCATENATED MODULE: ./node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ var lodash_es_stubArray = (stubArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var _getSymbols_objectProto = Object.prototype;

/** Built-in value references. */
var _getSymbols_propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return _getSymbols_propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ var _getSymbols = (getSymbols);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ var _getAllKeys = (getAllKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalObjects = (equalObjects);

// CONCATENATED MODULE: ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root["a" /* default */], 'DataView');

/* harmony default export */ var _DataView = (DataView);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = _getNative(_root["a" /* default */], 'Promise');

/* harmony default export */ var _Promise = (_Promise_Promise);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var Set = _getNative(_root["a" /* default */], 'Set');

/* harmony default export */ var _Set = (Set);

// CONCATENATED MODULE: ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root["a" /* default */], 'WeakMap');

/* harmony default export */ var _WeakMap = (WeakMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map && getTag(new _Map) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != _getTag_weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return _getTag_weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ var _getTag = (getTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var _baseIsEqualDeep_argsTag = '[object Arguments]',
    _baseIsEqualDeep_arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = lodash_es_isArray(object),
      othIsArr = lodash_es_isArray(other),
      objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
      othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);

  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;

  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(isBuffer["a" /* default */])(object)) {
    if (!Object(isBuffer["a" /* default */])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || lodash_es_isTypedArray(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ var _baseIsEqualDeep = (baseIsEqualDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ var _baseIsEqual = (baseIsEqual);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsMatch.js



/** Used to compose bitmasks for value comparisons. */
var _baseIsMatch_COMPARE_PARTIAL_FLAG = 1,
    _baseIsMatch_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, _baseIsMatch_COMPARE_PARTIAL_FLAG | _baseIsMatch_COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ var _baseIsMatch = (baseIsMatch);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isStrictComparable.js


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !lodash_es_isObject(value);
}

/* harmony default export */ var _isStrictComparable = (isStrictComparable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getMatchData.js



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = lodash_es_keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

/* harmony default export */ var _getMatchData = (getMatchData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_matchesStrictComparable.js
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/* harmony default export */ var _matchesStrictComparable = (matchesStrictComparable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatches.js




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

/* harmony default export */ var _baseMatches = (baseMatches);

// CONCATENATED MODULE: ./node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var isSymbol_symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == isSymbol_symbolTag);
}

/* harmony default export */ var lodash_es_isSymbol = (isSymbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isKey.js



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (lodash_es_isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || lodash_es_isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ var _isKey = (isKey);

// CONCATENATED MODULE: ./node_modules/lodash-es/memoize.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

/* harmony default export */ var lodash_es_memoize = (memoize);

// CONCATENATED MODULE: ./node_modules/lodash-es/_memoizeCapped.js


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = lodash_es_memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ var _memoizeCapped = (memoizeCapped);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stringToPath.js


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ var _stringToPath = (stringToPath);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ var _arrayMap = (arrayMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var _baseToString_symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = _baseToString_symbolProto ? _baseToString_symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (lodash_es_isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (lodash_es_isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ var _baseToString = (baseToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/toString.js


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}

/* harmony default export */ var lodash_es_toString = (toString_toString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_castPath.js





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (lodash_es_isArray(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
}

/* harmony default export */ var _castPath = (castPath);

// CONCATENATED MODULE: ./node_modules/lodash-es/_toKey.js


/** Used as references for various `Number` constants. */
var _toKey_INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || lodash_es_isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -_toKey_INFINITY) ? '-0' : result;
}

/* harmony default export */ var _toKey = (toKey);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGet.js



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ var _baseGet = (baseGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/get.js


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ var lodash_es_get = (get);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseHasIn.js
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ var _baseHasIn = (baseHasIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hasPath.js







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && lodash_es_isLength(length) && _isIndex(key, length) &&
    (lodash_es_isArray(object) || lodash_es_isArguments(object));
}

/* harmony default export */ var _hasPath = (hasPath);

// CONCATENATED MODULE: ./node_modules/lodash-es/hasIn.js



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

/* harmony default export */ var lodash_es_hasIn = (hasIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatchesProperty.js








/** Used to compose bitmasks for value comparisons. */
var _baseMatchesProperty_COMPARE_PARTIAL_FLAG = 1,
    _baseMatchesProperty_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = lodash_es_get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? lodash_es_hasIn(object, path)
      : _baseIsEqual(srcValue, objValue, _baseMatchesProperty_COMPARE_PARTIAL_FLAG | _baseMatchesProperty_COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ var _baseMatchesProperty = (baseMatchesProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ var lodash_es_identity = (identity);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseProperty.js
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ var _baseProperty = (baseProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/_basePropertyDeep.js


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

/* harmony default export */ var _basePropertyDeep = (basePropertyDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/property.js





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

/* harmony default export */ var lodash_es_property = (property);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIteratee.js






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return lodash_es_identity;
  }
  if (typeof value == 'object') {
    return lodash_es_isArray(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return lodash_es_property(value);
}

/* harmony default export */ var _baseIteratee = (baseIteratee);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!lodash_es_isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (lodash_es_isArrayLike(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return lodash_es_eq(object[index], value);
  }
  return false;
}

/* harmony default export */ var _isIterateeCall = (isIterateeCall);

// CONCATENATED MODULE: ./node_modules/lodash-es/every.js






/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = lodash_es_isArray(collection) ? _arrayEvery : _baseEvery;
  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, _baseIteratee(predicate, 3));
}

/* harmony default export */ var lodash_es_every = (every);

// CONCATENATED MODULE: ./node_modules/lodash-es/isNil.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/* harmony default export */ var lodash_es_isNil = (isNil);

// EXTERNAL MODULE: ./node_modules/ts-custom-error/dist/custom-error.umd.js
var custom_error_umd = __webpack_require__(7);

// CONCATENATED MODULE: ./src/error.ts

class error_ABCWalletError extends custom_error_umd["CustomError"] {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
    static fromCode(code, extendMessage = '') {
        return new error_ABCWalletError(code, error_ABCWalletError.messages[code] + extendMessage);
    }
}
error_ABCWalletError.messages = {
    1: 'Unkown error',
    10: 'Params error, missing required params '
};

// CONCATENATED MODULE: ./src/helper.ts



function isIOSBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    if (!(ua.includes('iphone') || ua.includes('ipad'))) {
        return false;
    }
    try {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        const send = window.webkit.messageHandlers.ABCWalletBridge.postMessage;
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isAndroidBrowser() {
    if (!navigator.userAgent.toLowerCase().includes('android')) {
        return false;
    }
    try {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        const send = window.ABCWalletBridge.postMessage;
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isElectronBrowser() {
    return navigator.userAgent.toLowerCase().includes('abcwallet');
}
function isRequest(obj) {
    const requiredKeys = ['jsonrpc', 'id', 'namespace', 'method', 'params'];
    return lodash_es_every(requiredKeys, key => {
        return obj.hasOwnProperty(key);
    });
}
function verifyParams(params, required) {
    if (lodash_es_isNil(params)) {
        throw error_ABCWalletError.fromCode(10, `[${required.toString()}]`);
    }
    const missing = [];
    for (const key of required) {
        if (!params.hasOwnProperty(key) || lodash_es_isNil(params[key])) {
            missing.push(key);
        }
    }
    if (missing.length > 0) {
        throw error_ABCWalletError.fromCode(10, `[${missing.toString()}]`);
    }
    return true;
}

// CONCATENATED MODULE: ./node_modules/lodash-es/uniqueId.js


/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return lodash_es_toString(prefix) + id;
}

/* harmony default export */ var lodash_es_uniqueId = (uniqueId);

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(9);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);

// CONCATENATED MODULE: ./node_modules/lodash-es/negate.js
/** Error message constants. */
var negate_FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(negate_FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

/* harmony default export */ var lodash_es_negate = (negate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ var _defineProperty = (defineProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignValue = (assignValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSet.js






/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!lodash_es_isObject(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = lodash_es_isObject(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/* harmony default export */ var _baseSet = (baseSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_basePickBy.js




/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

/* harmony default export */ var _basePickBy = (basePickBy);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var _getSymbolsIn_nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !_getSymbolsIn_nativeGetSymbols ? lodash_es_stubArray : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

/* harmony default export */ var _getSymbolsIn = (getSymbolsIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!lodash_es_isObject(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, lodash_es_keysIn, _getSymbolsIn);
}

/* harmony default export */ var _getAllKeysIn = (getAllKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/pickBy.js





/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap(_getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

/* harmony default export */ var lodash_es_pickBy = (pickBy);

// CONCATENATED MODULE: ./node_modules/lodash-es/omitBy.js




/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return lodash_es_pickBy(object, lodash_es_negate(_baseIteratee(predicate)));
}

/* harmony default export */ var lodash_es_omitBy = (omitBy);

// CONCATENATED MODULE: ./src/api/BaseAPI.ts
class BaseAPI {
    constructor(abcwallet) {
        this._abcwallet = abcwallet;
    }
    _request(payload, isNotify = false) {
        payload['namespace'] = this._namespace;
        return this._abcwallet.request(payload, isNotify);
    }
}
/* harmony default export */ var api_BaseAPI = (BaseAPI);

// CONCATENATED MODULE: ./src/api/WebviewAPI.ts




class WebviewAPI_WebviewAPI extends api_BaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'webview';
    }
    setOrientation(params) {
        verifyParams(params, ['horizontal']);
        return this._request({
            method: 'setOrientation',
            params
        }, true);
    }
    setFullscreen(params) {
        verifyParams(params, ['fullscreen']);
        return this._request({
            method: 'setFullscreen',
            params
        }, true);
    }
    setTitlebar(params) {
        params = lodash_es_omitBy(params, lodash_es_isNil);
        return this._request({
            method: 'setTitlebar',
            params
        }, true);
    }
    home() {
        return this._request({
            method: 'home',
            params: {}
        }, true);
    }
    back() {
        return this._request({
            method: 'back',
            params: {}
        }, true);
    }
    close() {
        return this._request({
            method: 'close',
            params: {}
        }, true);
    }
    share(params = {}) {
        return this._request({
            method: 'share',
            params,
        }, true);
    }
    openUrl(params) {
        verifyParams(params, ['url']);
        return this._request({
            method: 'openUrl',
            params
        }, true);
    }
    invokeQRScanner() {
        return this._request({
            method: 'invokeQRScanner',
            params: {}
        });
    }
}
/* harmony default export */ var api_WebviewAPI = (WebviewAPI_WebviewAPI);

// CONCATENATED MODULE: ./src/api/PrivateAPI.ts


class PrivateAPI_PrivateAPI extends api_BaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'abcwallet';
    }
    ensureHasCard(params) {
        verifyParams(params, ['chainType']);
        return this._request({
            method: 'ensureHasCards',
            params
        }, true);
    }
    buildGiftTransaction(params) {
        verifyParams(params, ['chainType', 'toAddress', 'toPrivateKey', 'value', 'skin', 'message']);
        return this._request({
            method: 'buildGiftTransaction',
            params
        });
    }
    encryptDataWithPrivateKey(params) {
        verifyParams(params, ['chainType', 'data', 'publicKey']);
        return this._request({
            method: 'encryptDataWithPrivateKey',
            params
        });
    }
    decryptDataWithPrivateKey(params) {
        verifyParams(params, ['chainType', 'cipher', 'publicKey']);
        return this._request({
            method: 'decryptDataWithPrivateKey',
            params
        });
    }
}
/* harmony default export */ var api_PrivateAPI = (PrivateAPI_PrivateAPI);

// CONCATENATED MODULE: ./src/api/ChainBaseAPI.ts

class ChainBaseAPI_ChainBaseAPI extends api_BaseAPI {
    // showTransactionDetail (params: { chainType: string; trxId: string }) {
    //   verifyParams(params, ['chainType', 'trxId'])
    //   return this._request({
    //     method: 'showTransactionDetail',
    //     params
    //   }, true)
    // }
    getAddressFromAddressBook() {
        return this._request({
            method: 'getAddressFromAddressBook',
            params: {}
        });
    }
    getAddressFromCard() {
        return this._request({
            method: 'getAddressFromCard',
            params: {}
        });
    }
}
/* harmony default export */ var api_ChainBaseAPI = (ChainBaseAPI_ChainBaseAPI);

// CONCATENATED MODULE: ./src/api/BTCAPI.ts

class BTCAPI_BTCAPI extends api_ChainBaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'btc';
    }
}
/* harmony default export */ var api_BTCAPI = (BTCAPI_BTCAPI);

// CONCATENATED MODULE: ./src/api/ETHAPI.ts

class ETHAPI_ETHAPI extends api_ChainBaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'eth';
    }
}
/* harmony default export */ var api_ETHAPI = (ETHAPI_ETHAPI);

// CONCATENATED MODULE: ./src/api/EOSAPI.ts

class EOSAPI_EOSAPI extends api_ChainBaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'eos';
    }
}
/* harmony default export */ var api_EOSAPI = (EOSAPI_EOSAPI);

// CONCATENATED MODULE: ./src/api/index.ts






/* harmony default export */ var api = ({
    webview: WebviewAPI_WebviewAPI,
    private: PrivateAPI_PrivateAPI,
    btc: BTCAPI_BTCAPI,
    eth: ETHAPI_ETHAPI,
    eos: EOSAPI_EOSAPI,
});

// CONCATENATED MODULE: ./src/ABCWallet.ts




class ABCWallet_ABCWallet extends eventemitter3_default.a {
    constructor(vconsole, logger) {
        super();
        this._promises = new Map();
        this.vconsole = vconsole;
        this.log = logger;
        for (const key of Object.keys(api)) {
            this[key] = new api[key](this);
        }
        this._timer = setInterval(() => {
            const now = (new Date()).getTime();
            for (const [key, promise] of this._promises) {
                const duration = now - promise.createdAt.getTime();
                if (duration > 3600 * 1000) {
                    this.log.warn('ABCWallet.response take too long(more than 5000ms):', promise.path);
                }
            }
        }, 1000);
    }
    request(payload, isNotify = false) {
        return new Promise((resolve, reject) => {
            payload = Object.assign(payload, { id: isNotify ? '' : lodash_es_uniqueId('abcwallet-'), jsonrpc: '2.0' });
            // 如果不是通知，将 promise 的方法和回调都保存起来，等待响应
            if (!isNotify) {
                this.log.debug('Add promise: ', payload.id);
                this._promises.set(payload.id, {
                    resolve,
                    reject,
                    path: `${payload.namespace}:${payload.method}`,
                    createdAt: new Date()
                });
            }
            if (isIOSBrowser()) {
                window.webkit.messageHandlers.ABCWalletBridge.postMessage(payload);
            }
            else if (isAndroidBrowser()) {
                window.ABCWalletBridge.postMessage(JSON.stringify(payload));
            }
            else if (isElectronBrowser()) {
            }
            else {
                this.log.warn('Can not find any available environment, start development environment.');
                console.log(JSON.stringify(payload));
            }
        });
    }
    response(msg) {
        msg = JSON.parse(msg);
        if (isRequest(msg)) {
            this.log.debug('ABCWallet.response trigger notify:', msg.id);
            this.emit(`notify:${msg.method}`, msg.params);
        }
        else {
            // provider 中对应的 promise 取出并 resolve
            const promise = this._promises.get(msg.id);
            if (!promise) {
                this.log.error(`ABCWallet.response can not find promise[${msg.id}]:`, promise.path);
            }
            const duration = (new Date()).getTime() - promise.createdAt.getTime();
            if (duration > 5000) {
                this.log.warn('ABCWallet.response take too long(more than 5000ms):', promise.path);
            }
            // 删除已处理的 promise
            this._promises.delete(msg.id);
            this.log.debug('ABCWallet.response find and delete promise:', msg.id);
            if (msg.error) {
                this.log.error('ABCWallet.response error:', msg.error);
                promise.reject.call(this, msg.error);
            }
            else {
                this.log.error('ABCWallet.response result:', msg.result);
                promise.resolve.call(this, msg.result);
            }
        }
    }
}
/* harmony default export */ var src_ABCWallet = (ABCWallet_ABCWallet);

// CONCATENATED MODULE: ./src/index.ts




const log = loglevel_default.a.getLogger('ABCWallet');
let src_vconsole = null;
let send;
if (isIOSBrowser()) {
    src_vconsole = new vconsole_min_default.a({
        onReady() {
            this.hideSwitch();
        },
    });
}
else if (isAndroidBrowser()) {
    src_vconsole = new vconsole_min_default.a({
        onReady() {
            this.hideSwitch();
        },
    });
}
else if (isElectronBrowser()) {
}
else {
    log.warn('Can not find any available environment, start development environment.');
}
const abcwallet = new ABCWallet_ABCWallet(src_vconsole, log);
// Mount ABCWallet on window
window['ABCWallet'] = abcwallet;
/* harmony default export */ var src = __webpack_exports__["default"] = (abcwallet);


/***/ })
/******/ ])["default"];
});