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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/TowerFire/TowerFire.ts":
/*!***************************************!*\
  !*** ./src/UI/TowerFire/TowerFire.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar components_1 = __webpack_require__(/*! components */ \"./src/components/index.ts\");\nvar TowerFire = /** @class */ (function (_super) {\n    __extends(TowerFire, _super);\n    function TowerFire() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    TowerFire.prototype.render = function () {\n        return new TowerFireVariant();\n    };\n    return TowerFire;\n}(components_1.TowerFactory));\nexports.TowerFire = TowerFire;\nvar TowerFireVariant = /** @class */ (function () {\n    function TowerFireVariant() {\n    }\n    TowerFireVariant.prototype.getTower = function () {\n        return {\n            damage: 55,\n            level: 1\n        };\n    };\n    return TowerFireVariant;\n}());\n\n\n//# sourceURL=webpack:///./src/UI/TowerFire/TowerFire.ts?");

/***/ }),

/***/ "./src/UI/TowerFire/index.ts":
/*!***********************************!*\
  !*** ./src/UI/TowerFire/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TowerFire_1 = __webpack_require__(/*! ./TowerFire */ \"./src/UI/TowerFire/TowerFire.ts\");\nexports.TowerFire = TowerFire_1.TowerFire;\n\n\n//# sourceURL=webpack:///./src/UI/TowerFire/index.ts?");

/***/ }),

/***/ "./src/UI/index.ts":
/*!*************************!*\
  !*** ./src/UI/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./TowerFire */ \"./src/UI/TowerFire/index.ts\"));\n\n\n//# sourceURL=webpack:///./src/UI/index.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar UI_1 = __webpack_require__(/*! UI */ \"./src/UI/index.ts\");\n(function () {\n    var app = document.getElementById('app');\n    var road = document.createElement('div');\n    road.setAttribute('id', 'road');\n    app.appendChild(road);\n    var unit = document.createElement('div');\n    unit.classList.add('unit');\n    road.appendChild(unit);\n    console.log('TOWER?', new UI_1.TowerFire());\n    // const runUnits = () => setInterval(() => {\n    // \tunit.style.left = `${unit.getBoundingClientRect().left + 50}px`\n    // }, 1000)\n    //\n    // window.requestAnimationFrame(runUnits);\n})();\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/components/Tower/TowerFactory.ts":
/*!**********************************************!*\
  !*** ./src/components/Tower/TowerFactory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TowerFactory = /** @class */ (function () {\n    function TowerFactory() {\n    }\n    TowerFactory.prototype.get = function () {\n        return this.render();\n    };\n    TowerFactory.prototype.click = function () {\n        return function () {\n            console.log('Show tower menu!');\n        };\n    };\n    return TowerFactory;\n}());\nexports.TowerFactory = TowerFactory;\n\n\n//# sourceURL=webpack:///./src/components/Tower/TowerFactory.ts?");

/***/ }),

/***/ "./src/components/Tower/index.ts":
/*!***************************************!*\
  !*** ./src/components/Tower/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TowerFactory_1 = __webpack_require__(/*! ./TowerFactory */ \"./src/components/Tower/TowerFactory.ts\");\nexports.TowerFactory = TowerFactory_1.TowerFactory;\n\n\n//# sourceURL=webpack:///./src/components/Tower/index.ts?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./Tower */ \"./src/components/Tower/index.ts\"));\n\n\n//# sourceURL=webpack:///./src/components/index.ts?");

/***/ })

/******/ });