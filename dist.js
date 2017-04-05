/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Various utility functions


exports.str = (o) => { // ##
  try {
    return JSON.stringify(o, null, 2);
  } catch(e) {
    return String(o);
  }
}

exports.randomId = () => // ##
  Math.random().toString(36).slice(2,12);

exports.file2url = (f) => new Promise // ##
((resolve) => { 
  let reader = new FileReader();
  reader.addEventListener('load', () => resolve(reader.result));
  reader.readAsDataURL(f);
});

exports.loadImage = (src) => new Promise  // ##
((resolve, reject) => {
  let img = new Image();
  img.src = src;
  img.onload = () => resolve(img);
  img.onerror = reject;
});

exports.escapeXml = str => // ##
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;');


// # Inactive code
/*
function nosymb(str) {
  return str.replace(/[^a-zA-Z_0-9]/g, '').toLowerCase();
}

export function loadGoogleFont(font) {
  let id = 'GOOGLEFONT' + nosymb(font);
  if(document.getElementById(id)) {
    return;
  }
  let elem = document.createElement('link');
  Object.assign(elem, {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=' + font,
  });
  document.head.appendChild(elem);
}
*/


/***/ })
/******/ ]);
//# sourceMappingURL=dist.js.map