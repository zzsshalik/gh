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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const $ = el => document.querySelector(el);

const create = el => document.createElement(el);

const append = (parent, child) => (parent.appendChild(child), parent);

const addClass = (el, className) => (el.classList.add(className), el); // const inner = (el, text) => (el.innerHTML = text, el);


module.exports = {
  $,
  create,
  append,
  addClass // inner,

};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const MAX_RESULTS = '15';
const KEY = 'AIzaSyChyPEuETrmN2L3XTN1l55qU268tVSumcA'; // AIzaSyDnt_HF1j_hHp8wlZbwfzKv9JLsCqz9QQc   AIzaSyChyPEuETrmN2L3XTN1l55qU268tVSumcA

const STATISTIC_URL = `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&part=snippet,contentDetails,statistics&id=`;
module.exports = {
  MAX_RESULTS,
  KEY,
  STATISTIC_URL
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "@keyframes b {\r\n    0% {\r\n        -moz-transform: scale(1, 1);\r\n        -ms-transform: scale(1, 1);\r\n        -webkit-transform: scale(1, 1);\r\n        transform: scale(1, 1);\r\n    }\r\n    50% {\r\n        -moz-transform: scale(1.1, 1.1);\r\n        -ms-transform: scale(1.1, 1.1);\r\n        -webkit-transform: scale(1.1, 1.1);\r\n        transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n        -moz-transform: scale(1, 1);\r\n        -ms-transform: scale(1, 1);\r\n        -webkit-transform: scale(1, 1);\r\n        transform: scale(1, 1);\r\n    }\r\n}\r\n\r\nhtml {\r\n    overflow: hidden;\r\n}\r\n\r\nbody {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    background: mintcream;\r\n}\r\n\r\nmain {\r\n    height: 100vh;\r\n}\r\n\r\nform {\r\n    left: calc(100vw - 87.5vw);\r\n    top: 4vh;\r\n    background: white;\r\n    border-radius: 1vw;\r\n    width: 75vw;\r\n    top: 3vh;\r\n    position: relative;\r\n}\r\n\r\nform input {\r\n    width: 75vw;\r\n    height: 5vh;\r\n    border-radius: 1vw;\r\n    border: none;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 2vw;\r\n    font-weight: bold;\r\n    padding-left: 5vw;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPiAgICA8cGF0aCBkPSJNIDUyLjM0OTYwOSAxNC40MDAzOTEgQyA0Mi42MjQ2MDkgMTQuNDAwMzkxIDMyLjkgMTguMSAyNS41IDI1LjUgQyAxMC43IDQwLjMgMTAuNyA2NC4zOTkyMTkgMjUuNSA3OS4xOTkyMTkgQyAzMi45IDg2LjU5OTIxOSA0Mi42MDAzOTEgOTAuMzAwNzgxIDUyLjQwMDM5MSA5MC4zMDA3ODEgQyA2Mi4yMDAzOTEgOTAuMzAwNzgxIDcxLjkwMDc4MSA4Ni41OTkyMTkgNzkuMzAwNzgxIDc5LjE5OTIxOSBDIDk0LjAwMDc4MSA2NC4zOTkyMTkgOTMuOTk5MjE5IDQwLjMgNzkuMTk5MjE5IDI1LjUgQyA3MS43OTkyMTkgMTguMSA2Mi4wNzQ2MDkgMTQuNDAwMzkxIDUyLjM0OTYwOSAxNC40MDAzOTEgeiBNIDUyLjMwMDc4MSAyMC4zMDA3ODEgQyA2MC41MDA3ODEgMjAuMzAwNzgxIDY4LjcwMDM5MSAyMy4zOTkyMTkgNzQuOTAwMzkxIDI5LjY5OTIxOSBDIDg3LjQwMDM5MSA0Mi4xOTkyMTkgODcuNCA2Mi41IDc1IDc1IEMgNjIuNSA4Ny41IDQyLjE5OTIxOSA4Ny41IDI5LjY5OTIxOSA3NSBDIDE3LjE5OTIxOSA2Mi41IDE3LjE5OTIxOSA0Mi4xOTkyMTkgMjkuNjk5MjE5IDI5LjY5OTIxOSBDIDM1Ljg5OTIxOSAyMy40OTkyMTkgNDQuMTAwNzgxIDIwLjMwMDc4MSA1Mi4zMDA3ODEgMjAuMzAwNzgxIHogTSA1Mi4zMDA3ODEgMjYuMzAwNzgxIEMgNDUuNDAwNzgxIDI2LjMwMDc4MSAzOC45IDI5IDM0IDM0IEMgMjkuMyAzOC43IDI2LjcwMDM5MSA0NC44MDAzOTEgMjYuNDAwMzkxIDUxLjQwMDM5MSBDIDI2LjMwMDM5MSA1My4xMDAzOTEgMjcuNjAwNzgxIDU0LjQgMjkuMzAwNzgxIDU0LjUgTCAyOS40MDAzOTEgNTQuNSBDIDMxLjAwMDM5MSA1NC41IDMyLjMwMDM5MSA1My4xOTk2MDkgMzIuNDAwMzkxIDUxLjU5OTYwOSBDIDMyLjYwMDM5MSA0Ni40OTk2MDkgMzQuNjk5MjE5IDQxLjc5OTIxOSAzOC4xOTkyMTkgMzguMTk5MjE5IEMgNDEuOTk5MjE5IDM0LjM5OTIxOSA0Ny4wMDA3ODEgMzIuMzAwNzgxIDUyLjMwMDc4MSAzMi4zMDA3ODEgQyA1NC4wMDA3ODEgMzIuMzAwNzgxIDU1LjMwMDc4MSAzMS4wMDA3ODEgNTUuMzAwNzgxIDI5LjMwMDc4MSBDIDU1LjMwMDc4MSAyNy42MDA3ODEgNTQuMDAwNzgxIDI2LjMwMDc4MSA1Mi4zMDA3ODEgMjYuMzAwNzgxIHogTSAzNSA2NCBBIDMgMyAwIDAgMCAzMiA2NyBBIDMgMyAwIDAgMCAzNSA3MCBBIDMgMyAwIDAgMCAzOCA2NyBBIDMgMyAwIDAgMCAzNSA2NCB6IE0gODMuMzYzMjgxIDgwLjUgQyA4Mi42MDA3ODEgODAuNSA4MS44NTA3ODEgODAuODAwMzkxIDgxLjMwMDc4MSA4MS40MDAzOTEgQyA4MC4xMDA3ODEgODIuNjAwMzkxIDgwLjEwMDc4MSA4NC40OTk2MDkgODEuMzAwNzgxIDg1LjU5OTYwOSBMIDgzLjgwMDc4MSA4OC4wOTk2MDkgQyA4My4yMDA3ODEgODkuMjk5NjA5IDgyLjkwMDM5MSA5MC42IDgyLjkwMDM5MSA5MiBDIDgyLjkwMDM5MSA5NC40IDgzLjggOTYuNzAwMzkxIDg1LjUgOTguNDAwMzkxIEwgOTguMzAwNzgxIDExMSBDIDEwMC4xMDA3OCAxMTIuOCAxMDIuMzk5MjIgMTEzLjY5OTIyIDEwNC42OTkyMiAxMTMuNjk5MjIgQyAxMDYuOTk5MjIgMTEzLjY5OTIyIDEwOS4yOTk2MSAxMTIuNzk5NjEgMTExLjA5OTYxIDExMS4wOTk2MSBDIDExNC41OTk2MSAxMDcuNTk5NjEgMTE0LjU5OTYxIDEwMS45MDAzOSAxMTEuMDk5NjEgOTguNDAwMzkxIEwgOTguMzAwNzgxIDg1LjU5OTYwOSBDIDk2LjYwMDc4MSA4My44OTk2MDkgOTQuMzAwMzkxIDgzIDkxLjkwMDM5MSA4MyBDIDkwLjUwMDM5MSA4MyA4OS4yIDgzLjMwMDM5MSA4OCA4My45MDAzOTEgTCA4NS41IDgxLjQwMDM5MSBDIDg0LjkgODAuODAwMzkxIDg0LjEyNTc4MSA4MC41IDgzLjM2MzI4MSA4MC41IHogTSA5MS45MDAzOTEgODguOTAwMzkxIEMgOTIuNzAwMzkxIDg4LjkwMDM5MSA5My41IDg5LjIwMDc4MSA5NCA4OS44MDA3ODEgTCAxMDYuNjk5MjIgMTAyLjUgQyAxMDcuODk5MjIgMTAzLjcgMTA3Ljg5OTIyIDEwNS41OTkyMiAxMDYuNjk5MjIgMTA2LjY5OTIyIEMgMTA1LjQ5OTIyIDEwNy44OTkyMiAxMDMuNiAxMDcuODk5MjIgMTAyLjUgMTA2LjY5OTIyIEwgODkuODAwNzgxIDk0LjA5OTYwOSBDIDg5LjIwMDc4MSA5My40OTk2MDkgODguOTAwMzkxIDkyLjcwMDM5MSA4OC45MDAzOTEgOTEuOTAwMzkxIEMgODguOTAwMzkxIDkxLjEwMDM5MSA4OS4yMDA3ODEgOTAuMzAwNzgxIDg5LjgwMDc4MSA4OS44MDA3ODEgQyA5MC40MDA3ODEgODkuMjAwNzgxIDkxLjEwMDM5MSA4OC45MDAzOTEgOTEuOTAwMzkxIDg4LjkwMDM5MSB6Ij48L3BhdGg+PC9zdmc+') 50% 50% no-repeat;\r\n    background-position-x: 0;\r\n    background-size: contain;\r\n}\r\n\r\n.clip-list {\r\n    position: absolute;\r\n    top: 15vh;\r\n    width: 100vw;\r\n    height: 55vh;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    width: 25vw;\r\n    background: white;\r\n    border-radius: 2vw;\r\n    border: 1px solid gainsboro;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    transition: 1s linear;\r\n    opacity: 0;\r\n}\r\n\r\n.hidden-li {\r\n    display: none;\r\n    opacity: 0;\r\n}\r\n\r\n.navigation {\r\n    display: none;\r\n    position: relative;\r\n    top: 75vh;\r\n    left: calc(50vw - 70px);\r\n}\r\n\r\n.navigation button {\r\n    width: 60px;\r\n    height: 30px;\r\n    border-radius: 3vw;\r\n    border: 1px solid;\r\n    margin-right: 20px;\r\n    color: brown;\r\n    font-size: x-large;\r\n}\r\n\r\n.navigation-helper {\r\n    width: 50px;\r\n    height: 30px;\r\n    border-radius: 7vw;\r\n    background: darkgray;\r\n    position: absolute;\r\n    left: 44px;\r\n    bottom: 35px;\r\n    border: 1px solid aliceblue;\r\n    color: cornsilk;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    transition: 1s linear;\r\n    opacity: 0;\r\n}\r\n\r\n.show {\r\n    opacity: 1;\r\n    transition: 1s linear;\r\n}\r\n\r\n.hide {\r\n    opacity: 0;\r\n}\r\n\r\n.clip-inner {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-rows: 24vh 29vh;\r\n}\r\n\r\n.clip-picture {\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.clip-link {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: wheat;\r\n    background: brown;\r\n    font-size: 1.5vw;\r\n}\r\n\r\n.clip-title {\r\n    z-index: 1;\r\n    margin-top: 5vw;\r\n}\r\n\r\n.img-settings {\r\n    position: absolute;\r\n    width: 20vw;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    z-index: -1;\r\n    transition: 5s;\r\n    animation: b 1.5s cubic-bezier(0.17, 0.67, 0.94, 2.43) infinite;\r\n}\r\n\r\n.clip-info {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-rows: 15vh 15vh;\r\n}\r\n\r\n.clip-info-wrapper {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: 1.5vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.clip-info-description {\r\n    position: relative;\r\n    color: dimgrey;\r\n    font-size: 1.4vw;\r\n    margin: 0 auto;\r\n    word-break: break-word;\r\n}\r\n\r\n.clip-channel-title {\r\n    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4gIDxwYXRoIGQ9Ik0xNS41LDEyIEwxNywxMiBMMTcsMy41IEMxNywyLjY3MTU3Mjg4IDE2LjMyODQyNzEsMiAxNS41LDIgTDYuNSwyIEM1LjY3MTU3Mjg4LDIgNSwyLjY3MTU3Mjg4IDUsMy41IEw1LDEyIEw2LjUsMTIgTDYuNSwxMS42MzIzODA4IEM2LjUsMTAuNzU0MjIzNiA2Ljk2MDc0NzA4LDkuOTQwNDU2NTYgNy43MTM3NjA2MSw5LjQ4ODY0ODQ0IEw4LjY4MzcyNjYyLDguOTA2NjY4ODQgQzguMjU2NTU0OSw4LjM4ODMyNjIyIDgsNy43MjQxMjM5MSA4LDcgQzgsNS4zNDMxNDU3NSA5LjM0MzE0NTc1LDQgMTEsNCBDMTIuNjU2ODU0Miw0IDE0LDUuMzQzMTQ1NzUgMTQsNyBDMTQsNy43MjQxMjM5MSAxMy43NDM0NDUxLDguMzg4MzI2MjIgMTMuMzE2MjczNCw4LjkwNjY2ODg0IEwxNC4yODYyMzk0LDkuNDg4NjQ4NDQgQzE1LjAzOTI1MjksOS45NDA0NTY1NiAxNS41LDEwLjc1NDIyMzYgMTUuNSwxMS42MzIzODA4IEwxNS41LDEyIEwxNS41LDEyIFogTTE0LjUsMTIgTDE0LjUsMTEuNjMyMzgwOCBDMTQuNSwxMS4xMDU0ODY1IDE0LjIyMzU1MTcsMTAuNjE3MjI2MiAxMy43NzE3NDM2LDEwLjM0NjE0MTQgTDEyLjUxMzE2NDEsOS41OTA5OTM2NyBDMTIuMDY4OTQyMSw5Ljg1MDk4MzgzIDExLjU1MTg3MzQsMTAgMTEsMTAgQzEwLjQ0ODEyNjYsMTAgOS45MzEwNTc4OCw5Ljg1MDk4MzgzIDkuNDg2ODM1ODcsOS41OTA5OTM2NyBMOC4yMjgyNTYzNywxMC4zNDYxNDE0IEM3Ljc3NjQ0ODI1LDEwLjYxNzIyNjIgNy41LDExLjEwNTQ4NjUgNy41LDExLjYzMjM4MDggTDcuNSwxMiBMMTQuNSwxMiBMMTQuNSwxMiBaIE0xNywxMyBMNSwxMyBMNSwxOC41IEM1LDE5LjMyODQyNzEgNS42NzE1NzI4OCwyMCA2LjUsMjAgTDE1LjUsMjAgQzE2LjMyODQyNzEsMjAgMTcsMTkuMzI4NDI3MSAxNywxOC41IEwxNywxMyBMMTcsMTMgWiBNMTcuOTU4MTE5LDMuMDQxODgwOTggQzE5LjEyMDA0MDIsMy4yNTcwNjI3NSAyMCw0LjI3NTc2ODU2IDIwLDUuNSBMMjAsMjAuNSBDMjAsMjEuODgwNzExOSAxOC44ODA3MTE5LDIzIDE3LjUsMjMgTDguNSwyMyBDNy4yNzU3Njg1NiwyMyA2LjI1NzA2Mjc1LDIyLjEyMDA0MDIgNi4wNDE4ODA5OCwyMC45NTgxMTkgQzQuODc5OTU5OCwyMC43NDI5MzczIDQsMTkuNzI0MjMxNCA0LDE4LjUgTDQsMy41IEM0LDIuMTE5Mjg4MTMgNS4xMTkyODgxMywxIDYuNSwxIEwxNS41LDEgQzE2LjcyNDIzMTQsMSAxNy43NDI5MzczLDEuODc5OTU5OCAxNy45NTgxMTksMy4wNDE4ODA5OCBMMTcuOTU4MTE5LDMuMDQxODgwOTggWiBNNy4wODUzNTI4NSwyMSBDNy4yOTEyNzEwNiwyMS41ODI1OTYyIDcuODQ2ODkwNTksMjIgOC41LDIyIEwxNy41LDIyIEMxOC4zMjg0MjcxLDIyIDE5LDIxLjMyODQyNzEgMTksMjAuNSBMMTksNS41IEMxOSw0Ljg0Njg5MDU5IDE4LjU4MjU5NjIsNC4yOTEyNzEwNiAxOCw0LjA4NTM1Mjg1IEwxOCwxOC41IEMxOCwxOS44ODA3MTE5IDE2Ljg4MDcxMTksMjEgMTUuNSwyMSBMNy4wODUzNTI4NSwyMSBMNy4wODUzNTI4NSwyMSBaIE0xMSw5IEMxMi4xMDQ1Njk1LDkgMTMsOC4xMDQ1Njk1IDEzLDcgQzEzLDUuODk1NDMwNSAxMi4xMDQ1Njk1LDUgMTEsNSBDOS44OTU0MzA1LDUgOSw1Ljg5NTQzMDUgOSw3IEM5LDguMTA0NTY5NSA5Ljg5NTQzMDUsOSAxMSw5IFogTTcuNSwxNiBDNy4yMjM4NTc2MywxNiA3LDE1Ljc3NjE0MjQgNywxNS41IEM3LDE1LjIyMzg1NzYgNy4yMjM4NTc2MywxNSA3LjUsMTUgTDE0LjUsMTUgQzE0Ljc3NjE0MjQsMTUgMTUsMTUuMjIzODU3NiAxNSwxNS41IEMxNSwxNS43NzYxNDI0IDE0Ljc3NjE0MjQsMTYgMTQuNSwxNiBMNy41LDE2IFogTTcuNSwxOCBDNy4yMjM4NTc2MywxOCA3LDE3Ljc3NjE0MjQgNywxNy41IEM3LDE3LjIyMzg1NzYgNy4yMjM4NTc2MywxNyA3LjUsMTcgTDEyLjUsMTcgQzEyLjc3NjE0MjQsMTcgMTMsMTcuMjIzODU3NiAxMywxNy41IEMxMywxNy43NzYxNDI0IDEyLjc3NjE0MjQsMTggMTIuNSwxOCBMNy41LDE4IFoiLz48L3N2Zz4=) 3% 50% no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.clip-date {\r\n    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzYuNDQ5cHgiIGhlaWdodD0iMzYuNDQ4cHgiIHZpZXdCb3g9IjAgMCAzNi40NDkgMzYuNDQ4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNi40NDkgMzYuNDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHJlY3QgeD0iMTIuODU4IiB5PSIxNC42MjYiIHdpZHRoPSI0LjU5NiIgaGVpZ2h0PSI0LjA4OSIvPjxyZWN0IHg9IjE4Ljk5NiIgeT0iMTQuNjI2IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODkiLz48cmVjdCB4PSIyNS4xMjgiIHk9IjE0LjYyNiIgd2lkdGg9IjQuNTk2IiBoZWlnaHQ9IjQuMDg5Ii8+PHJlY3QgeD0iNi43MjQiIHk9IjIwLjA4NCIgd2lkdGg9IjQuNTk1IiBoZWlnaHQ9IjQuMDg2Ii8+PHJlY3QgeD0iMTIuODU4IiB5PSIyMC4wODQiIHdpZHRoPSI0LjU5NiIgaGVpZ2h0PSI0LjA4NiIvPjxyZWN0IHg9IjE4Ljk5NiIgeT0iMjAuMDg0IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODYiLz48cmVjdCB4PSIyNS4xMjgiIHk9IjIwLjA4NCIgd2lkdGg9IjQuNTk2IiBoZWlnaHQ9IjQuMDg2Ii8+PHJlY3QgeD0iNi43MjQiIHk9IjI1LjU0IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODYiLz48cmVjdCB4PSIxMi44NTgiIHk9IjI1LjU0IiB3aWR0aD0iNC41OTYiIGhlaWdodD0iNC4wODYiLz48cmVjdCB4PSIxOC45OTYiIHk9IjI1LjU0IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODYiLz48cmVjdCB4PSIyNS4xMjgiIHk9IjI1LjU0IiB3aWR0aD0iNC41OTYiIGhlaWdodD0iNC4wODYiLz48cGF0aCBkPSJNMzEuOTc0LDMyLjE5OGMwLDAuOTY1LTAuNzg1LDEuNzUtMS43NSwxLjc1aC0yNGMtMC45NjUsMC0xLjc1LTAuNzg1LTEuNzUtMS43NVYxMi4wOTloLTIuNXYyMC4wOTljMCwyLjM0MywxLjkwNyw0LjI1LDQuMjUsNC4yNWgyNGMyLjM0NCwwLDQuMjUtMS45MDcsNC4yNS00LjI1VjEyLjA5OWgtMi41VjMyLjE5OHoiLz48cGF0aCBkPSJNMzAuMjI0LDMuOTQ4aC0xLjA5OFYyLjc1YzAtMS41MTctMS4xOTctMi43NS0yLjY3LTIuNzVjLTEuNDc0LDAtMi42NywxLjIzMy0yLjY3LDIuNzV2MS4xOTdoLTIuNzRWMi43NWMwLTEuNTE3LTEuMTk3LTIuNzUtMi42Ny0yLjc1Yy0xLjQ3MywwLTIuNjcsMS4yMzMtMi42NywyLjc1djEuMTk3aC0yLjc0VjIuNzVjMC0xLjUxNy0xLjE5Ny0yLjc1LTIuNjctMi43NWMtMS40NzMsMC0yLjY3LDEuMjMzLTIuNjcsMi43NXYxLjE5N0g2LjIyNGMtMi4zNDMsMC00LjI1LDEuOTA3LTQuMjUsNC4yNXYyaDIuNWgyNy41aDIuNXYtMkMzNC40NzQsNS44NTUsMzIuNTY4LDMuOTQ4LDMwLjIyNCwzLjk0OHogTTExLjQ2Niw3LjY0NmMwLDAuNjg5LTAuNTI1LDEuMjUtMS4xNywxLjI1cy0xLjE3LTAuNTYxLTEuMTctMS4yNVYyLjc1YzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjVzMS4xNywwLjU2MSwxLjE3LDEuMjVWNy42NDZ6IE0xOS41NDYsNy42NDZjMCwwLjY4OS0wLjUyNSwxLjI1LTEuMTcsMS4yNXMtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NWMwLTAuNjg5LDAuNTI1LTEuMjUsMS4xNy0xLjI1czEuMTcsMC41NjEsMS4xNywxLjI1VjcuNjQ2eiBNMjcuNjI2LDcuNjQ2YzAsMC42ODktMC41MjUsMS4yNS0xLjE3LDEuMjVjLTAuNjQ2LDAtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NWMwLTAuNjg5LDAuNTI0LTEuMjUsMS4xNy0xLjI1YzAuNjQ1LDAsMS4xNywwLjU2MSwxLjE3LDEuMjVWNy42NDZ6Ii8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=) 3% 50% no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.clip-view-count {\r\n    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTggMy45Yy02LjcgMC04IDUuMS04IDUuMXMyLjIgNC4xIDcuOSA0LjEgOC4xLTQgOC4xLTQtMS4zLTUuMi04LTUuMnpNNS4zIDUuNGMwLjUtMC4zIDEuMy0wLjMgMS4zLTAuM3MtMC41IDAuOS0wLjUgMS42YzAgMC43IDAuMiAxLjEgMC4yIDEuMWwtMS4xIDAuMmMwIDAtMC4zLTAuNS0wLjMtMS4yIDAtMC44IDAuNC0xLjQgMC40LTEuNHpNNy45IDEyLjFjLTQuMSAwLTYuMi0yLjMtNi44LTMuMiAwLjMtMC43IDEuMS0yLjIgMy4xLTMuMi0wLjEgMC40LTAuMiAwLjgtMC4yIDEuMyAwIDIuMiAxLjggNCA0IDRzNC0xLjggNC00YzAtMC41LTAuMS0wLjktMC4yLTEuMyAyIDAuOSAyLjggMi41IDMuMSAzLjItMC43IDAuOS0yLjggMy4yLTcgMy4yeiI+PC9wYXRoPjwvc3ZnPg==) 3% 92% no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.img-transition {\r\n    opacity: 0.5;\r\n    filter: grayscale(100%);\r\n    width: 100vh;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .clip-list li {\r\n        width: 22vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .clip-list {\r\n        height: 60vh;\r\n    }\r\n    .clip-list li {\r\n        width: 35vw;\r\n    }\r\n    .img-transition {\r\n        width: 100vw;\r\n    }\r\n    .clip-link {\r\n        font-size: 1.3rem;\r\n    }\r\n    .clip-inner {\r\n        grid-template-rows: 20vh 40vh;\r\n    }\r\n    .clip-info-description {\r\n        font-size: 2.8vw;\r\n    }\r\n    .clip-info-wrapper {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    form input {\r\n        padding-left: 10vw;\r\n        font-size: 5vw;\r\n    }\r\n    .clip-list li {\r\n        width: 60vw;\r\n    }\r\n    .clip-link {\r\n        font-size: 4vw;\r\n    }\r\n    .clip-inner {\r\n        height: 100%;\r\n        width: 60vw;\r\n        grid-template-rows: 23vh 26vh;\r\n    }\r\n    .clip-info {\r\n        grid-template-rows: 11vh 15vh;\r\n    }\r\n    .clip-info-wrapper {\r\n        font-size: 3vw;\r\n    }\r\n    .clip-info-description {\r\n        font-size: 4vw;\r\n    }\r\n    .clip-picture,\r\n    .clip-info {\r\n        width: 60vw;\r\n    }\r\n    .clip-link {\r\n        width: initial;\r\n        margin-top: 12vw;\r\n    }\r\n    .img-transition {\r\n        width: 100vw;\r\n    }\r\n}", ""]);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/view/renderSearchBox.js
const f = __webpack_require__(0);

function renderSearchBox() {
  f.$('body').insertAdjacentHTML('beforeEnd', `
      <main>
        <img class="img-settings" src="youtube-icon.png" alt="main-logo">
        <form>
          <input action="" type="text">
        </form>
        <ul class="clip-list">
        </ul>
        <div class="navigation"> 
          <button class="prev" id="prev">Prev</button>
          <button class="next" id="next">Next</button>
        </div>
      </main>`);
}
// CONCATENATED MODULE: ./src/js/getAndSetFunc/setAndGetNextPageURL.js
const consts = __webpack_require__(1);

function setAndGetNextPageURL(nextPageToken) {
  let NEXT_PAGE = `https://www.googleapis.com/youtube/v3/search?key=${consts.KEY}&part=snippet&type=video&maxResults=${consts.MAX_RESULTS}&pageToken=`;

  if (arguments.length === 1) {
    NEXT_PAGE = `https://www.googleapis.com/youtube/v3/search?key=${consts.KEY}&part=snippet&type=video&maxResults=${consts.MAX_RESULTS}&pageToken=${nextPageToken}`;
    return NEXT_PAGE;
  }

  if (arguments.length === 0) {
    return NEXT_PAGE;
  }

  return false;
}
// CONCATENATED MODULE: ./src/js/getAndSetFunc/getNumCard.js
function getNumCard() {
  if (document.documentElement.clientWidth >= 1025) {
    return 4;
  }

  if (document.documentElement.clientWidth <= 480) {
    return 1;
  }

  if (document.documentElement.clientWidth <= 768) {
    return 2;
  }

  if (document.documentElement.clientWidth <= 1024) {
    return 3;
  }

  return false;
}
// CONCATENATED MODULE: ./src/js/view/renderVideos.js
function renderVideos(item, index, statisticsVideo) {
  return `<li class="item hidden-li" >
      <div class="clip-inner">
        <img class="clip-picture" src="${item.snippet.thumbnails.medium.url}" alt="clip-picture">
        <div class="clip-title">
          <a class="clip-link" href="https://www.youtube.com/watch?v=${item.id.videoId}">
          ${item.snippet.title.split(' ').slice(0, 10).join(' ')}
          </a>
        </div>
        <div class="clip-info">
          <div class="clip-info-wrapper">
            <div class="clip-icon clip-channel-title">  
              ${item.snippet.channelTitle.split(' ').slice(0, 3).join(' ')}
            </div>
  
            <div class="clip-icon clip-date">   
              ${item.snippet.publishedAt.substr(0, 10)}
            </div>
  
            <div class="clip-icon clip-view-count">
              ${statisticsVideo[index].statistics.viewCount}
            </div>
          </div>
          <div class="clip-info-description">
                ${item.snippet.description.split(' ').slice(0, 20).join(' ')}
          </div>
        </div>
      </div>
    </li>`;
}
// CONCATENATED MODULE: ./src/js/view/renderPage.js



const renderPage_f = __webpack_require__(0);

function renderPage(statisticsVideo, mainData) {
  mainData.forEach((item, index) => {
    renderPage_f.$('.clip-list').insertAdjacentHTML('beforeEnd', renderVideos(item, index, statisticsVideo));
  });

  for (let i = 0; i < getNumCard(); i += 1) {
    renderPage_f.$('.clip-list').childNodes[i].classList.remove('hidden-li');
    setTimeout(() => {
      renderPage_f.$('.clip-list').childNodes[i].classList.add('show');
    }, 0);
  }

  renderPage_f.$('.navigation').style.display = 'initial';
}
// CONCATENATED MODULE: ./src/js/startSearch.js



const startSearch_f = __webpack_require__(0);

const startSearch_consts = __webpack_require__(1);

function startSearch(QUERY) {
  let mainData = [];
  fetch(QUERY).then(res => res.json()).then(({
    items,
    nextPageToken
  }) => {
    setAndGetNextPageURL(nextPageToken);
    mainData = [...items];
    return items.map(item => item.id.videoId);
  }).then(ids => fetch(startSearch_consts.STATISTIC_URL + ids)).then(res => res.json()).then(data => {
    startSearch_f.$('.img-settings').classList.add('img-transition');
    startSearch_f.$('.img-settings').style.animation = 'none';
    renderPage(data.items, mainData);
  });
}
// CONCATENATED MODULE: ./src/js/appUserActions.js




const appUserActions_consts = __webpack_require__(1);

const appUserActions_f = __webpack_require__(0);

let currentClip = 0;
let chunks = 0;
let maxCurrentClip = 0;

function leafPages(event) {
  if (event.target.id === 'next' && appUserActions_f.$('.clip-list').childNodes[currentClip + 4]) {
    for (let i = getNumCard() + currentClip - 1; i >= currentClip; i -= 1) {
      appUserActions_f.$('.clip-list').childNodes[i].classList.add('hidden-li');
      setTimeout(() => {
        appUserActions_f.$('.clip-list').childNodes[i].classList.remove('show');
      }, 0);
    }

    currentClip += getNumCard();

    for (let i = currentClip; i < getNumCard() + currentClip; i += 1) {
      appUserActions_f.$('.clip-list').childNodes[i].classList.remove('hidden-li');
      setTimeout(() => {
        appUserActions_f.$('.clip-list').childNodes[i].classList.add('show');
      }, 0);
    }

    maxCurrentClip = currentClip > maxCurrentClip ? currentClip : maxCurrentClip;

    if (Math.floor(maxCurrentClip / 15) >= chunks) {
      chunks += 1;
      let mainData = [];
      fetch(setAndGetNextPageURL()).then(res => res.json()).then(({
        items,
        nextPageToken
      }) => {
        setAndGetNextPageURL(nextPageToken);
        mainData = [...items];
        return items.map(item => item.id.videoId);
      }).then(ids => fetch(appUserActions_consts.STATISTIC_URL + ids)).then(res => res.json()).then(data => {
        appUserActions_f.$('.img-settings').classList.add('img-transition');
        appUserActions_f.$('.img-settings').style.animation = 'none';
        mainData.forEach((item, index) => {
          appUserActions_f.$('.clip-list').insertAdjacentHTML('beforeEnd', renderVideos(item, index, data.items));
        });
      });
    }
  }

  if (event.target.id === 'prev' && currentClip !== 0) {
    for (let i = currentClip; i < getNumCard() + currentClip; i += 1) {
      appUserActions_f.$('.clip-list').childNodes[i].classList.add('hidden-li');
      setTimeout(() => {
        appUserActions_f.$('.clip-list').childNodes[i].classList.remove('show');
      }, 0);
    }

    currentClip -= getNumCard();

    for (let i = getNumCard() + currentClip - 1; i >= currentClip; i -= 1) {
      appUserActions_f.$('.clip-list').childNodes[i].classList.remove('hidden-li');
      setTimeout(() => {
        appUserActions_f.$('.clip-list').childNodes[i].classList.add('show');
      }, 0);
    }
  }
}

function resizing() {
  function hide() {
    for (let i = 1; i <= 4 - getNumCard(); i += 1) {
      appUserActions_f.$('.clip-list').childNodes[currentClip + getNumCard() - 1 + i].classList.add('hidden-li');
    }
  }

  function show() {
    for (let i = 1; i <= getNumCard() - 1; i += 1) {
      appUserActions_f.$('.clip-list').childNodes[currentClip + i].classList.remove('hidden-li');
    }
  }

  if (window.matchMedia('(min-width: 480px)').matches) {
    show();
  }

  if (window.matchMedia('(max-width: 1024px)').matches) {
    hide();
  }
}

function addHelper(event) {
  if (!appUserActions_f.$('.navigation-helper')) {
    appUserActions_f.$('.navigation').insertAdjacentHTML('beforeEnd', '<div class="navigation-helper show"> </div>');
  }

  if (appUserActions_f.$('.navigation-helper')) {
    if (event.target.id === 'next') {
      appUserActions_f.$('.navigation-helper').innerHTML = Math.floor(currentClip / getNumCard()) + 2;
    }

    if (event.target.id === 'prev') {
      const page = Math.floor(currentClip / getNumCard());
      appUserActions_f.$('.navigation-helper').innerHTML = page > 0 ? page : 'none';
    }
  }

  if (appUserActions_f.$('.navigation-helper').classList.contains('hide')) {
    appUserActions_f.$('.navigation-helper').classList.remove('hide');
    appUserActions_f.$('.navigation-helper').classList.add('show');
  }
}

function removeHelper() {
  if (appUserActions_f.$('.navigation-helper')) {
    appUserActions_f.$('.navigation-helper').classList.remove('show');
    appUserActions_f.$('.navigation-helper').classList.add('hide');
  }
}

const slide = appUserActions_f.$('body');
let startX;
let endX;
slide.addEventListener('mousedown', e => {
  startX = e.pageX - slide.offsetLeft;
});
slide.addEventListener('mouseup', e => {
  endX = e.pageX - slide.offsetLeft;
  if (Math.abs(startX - endX) < 100) return;

  if (startX > endX) {
    leafPages({
      target: {
        id: 'prev'
      }
    });
  }

  if (endX > startX) {
    leafPages({
      target: {
        id: 'next'
      }
    });
  }
});

// CONCATENATED MODULE: ./src/js/common.js




const common_consts = __webpack_require__(1);

const common_f = __webpack_require__(0);

renderSearchBox();
common_f.$('.navigation').addEventListener('mousedown', addHelper);
common_f.$('.navigation').addEventListener('mouseup', removeHelper);
common_f.$('.navigation').addEventListener('click', leafPages);

document.onkeydown = event => {
  if (event.keyCode === 13) {
    if (common_f.$('.clip-list').childNodes.length !== 0) {
      common_f.$('main').removeChild(common_f.$('.clip-list'));
      common_f.append(common_f.$('main'), common_f.addClass(common_f.create('ul'), 'clip-list'));
      common_f.$('.img-settings').classList.remove('img-transition');
      common_f.$('.img-settings').style.animation = 'b 1.5s cubic-bezier(0.17, 0.67, 0.94, 2.43) infinite';
    }

    common_f.$('body').onresize = resizing;
    event.preventDefault();
    startSearch(`https://www.googleapis.com/youtube/v3/search?key=${common_consts.KEY}&q=${common_f.$('input').value}&part=snippet&maxResults=${common_consts.MAX_RESULTS}&type=video`);
  }
};
// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(2);

// CONCATENATED MODULE: ./src/index.js



/***/ })
/******/ ]);