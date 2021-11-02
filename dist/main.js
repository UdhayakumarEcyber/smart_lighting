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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, sidebarLinks, uis, menuItems, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"92465859-fdca-4eeb-c5c4-922e0bf8dbdd\",\"author\":\"Eutech\",\"widgets\":[{\"id\":\"smart_lighting\",\"name\":\"smart_lighting\",\"description\":\"A sample widget\",\"icon\":\"\",\"tags\":[]}],\"sidebarLinks\":[],\"uis\":[],\"menuItems\":[]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".smart_light .smart-light-box {\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 0px;\n  min-height: 60px;\n  flex-grow: 0;\n  background-color: #000000;\n  color: #ffffff78;\n  width: 40%;\n  border-radius: 10px;\n  position: absolute;\n  bottom: 2em;\n  left: 2em;\n  z-index: 1;\n  outline: none; }\n  .smart_light .smart-light-box:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    margin: 0px;\n    border: 2px solid transparent;\n    background: linear-gradient(180deg, #8A1538, #20EBCC, #B71742, #C00A3A) border-box;\n    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);\n    -webkit-mask-composite: destination-out;\n    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);\n    mask-composite: destination-out;\n    mask-composite: exclude;\n    border-radius: 10px;\n    outline: none; }\n  .smart_light .smart-light-box .smart-light-box-top {\n    display: inline-flex;\n    width: 100%;\n    padding: 15px 15px; }\n    .smart_light .smart-light-box .smart-light-box-top .smart-light-box_lft {\n      display: inline-block;\n      width: 50%; }\n      .smart_light .smart-light-box .smart-light-box-top .smart-light-box_lft h4 {\n        display: inline-block;\n        font-size: 1.1em;\n        color: #fff; }\n    .smart_light .smart-light-box .smart-light-box-top .smart-light-box_rht {\n      display: inline-block;\n      width: 50%; }\n      .smart_light .smart-light-box .smart-light-box-top .smart-light-box_rht .showcase-input {\n        width: 100% !important;\n        padding: 0; }\n        .smart_light .smart-light-box .smart-light-box-top .smart-light-box_rht .showcase-input .uxp-form-select {\n          min-width: 100%; }\n  .smart_light .smart-light-box .smart-light-box_details {\n    display: inline-block;\n    width: 100%; }\n    .smart_light .smart-light-box .smart-light-box_details .data-grid {\n      background-color: transparent;\n      border: 1px solid #77777763; }\n      .smart_light .smart-light-box .smart-light-box_details .data-grid .data-grid-column {\n        border: 0px solid #77777763;\n        height: 50%; }\n        .smart_light .smart-light-box .smart-light-box_details .data-grid .data-grid-column:nth-child(odd) {\n          border-right: 1px solid #77777763; }\n        .smart_light .smart-light-box .smart-light-box_details .data-grid .data-grid-column:first-child {\n          border-bottom: 1px solid #77777763; }\n        .smart_light .smart-light-box .smart-light-box_details .data-grid .data-grid-column:nth-child(2) {\n          border-bottom: 1px solid #77777763; }\n      .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card {\n        background-color: transparent;\n        display: inline-block; }\n        .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .item-card-image-container {\n          position: inherit;\n          transform: none;\n          left: 0;\n          top: 0; }\n          .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .item-card-image-container .profile-image-container {\n            background-color: transparent !important;\n            width: 22px;\n            height: 22px;\n            opacity: 0.8; }\n        .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content {\n          margin-left: 0;\n          padding: 5px 0;\n          text-align: center; }\n          .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content .title h3 {\n            margin: 0;\n            padding: 0;\n            font-weight: 500;\n            font-size: 1.65em; }\n            .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content .title h3.green {\n              color: #4FC8AC; }\n            .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content .title h3.pink {\n              color: #FF5D88; }\n            .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content .title h3.orange {\n              color: #FF9A36; }\n            .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content .title h3 span.white {\n              color: #ffffffb8; }\n          .smart_light .smart-light-box .smart-light-box_details .data-grid .item-card .content .sub-title {\n            font-size: 9px;\n            padding: 3px 0;\n            text-transform: uppercase;\n            line-height: 1.4em;\n            width: 100%;\n            color: #fff; }\n\n.smart_light .transport_map {\n  width: 100%;\n  display: inline-block;\n  height: 100%; }\n  .smart_light .transport_map .transport_map-sec {\n    position: relative;\n    z-index: 0; }\n  .smart_light .transport_map .light-components {\n    position: absolute;\n    left: 50%;\n    top: 20%;\n    z-index: 15; }\n    .smart_light .transport_map .light-components .light {\n      display: inline-block;\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 35px;\n      height: 35px;\n      cursor: pointer; }\n      .smart_light .transport_map .light-components .light.green-light {\n        background-image: url(/images/green-light.png); }\n      .smart_light .transport_map .light-components .light.dark-red-light {\n        background-image: url(/images/dark-red-light.png); }\n      .smart_light .transport_map .light-components .light.orange-light {\n        background-image: url(/images/orange-light.png); }\n    .smart_light .transport_map .light-components .energy_content {\n      display: none;\n      background-color: #000000;\n      width: 150px;\n      position: absolute;\n      right: 5em;\n      bottom: -5em;\n      border-radius: 10px;\n      padding: 10px; }\n    .smart_light .transport_map .light-components .energy_content_toggle {\n      display: block; }\n      .smart_light .transport_map .light-components .energy_content_toggle .days {\n        display: inline-block;\n        position: absolute;\n        top: 1em;\n        right: 1em;\n        color: #ffffff;\n        font-size: 0.7em; }\n      .smart_light .transport_map .light-components .energy_content_toggle .section-content {\n        display: inline-block;\n        width: 100%; }\n        .smart_light .transport_map .light-components .energy_content_toggle .section-content .icon {\n          display: inline-block; }\n        .smart_light .transport_map .light-components .energy_content_toggle .section-content h5 {\n          display: inline-block;\n          width: 100%;\n          color: #ffffff;\n          font-size: 1.2em;\n          padding: 5px 0 5px 0px;\n          margin: 0; }\n        .smart_light .transport_map .light-components .energy_content_toggle .section-content p {\n          color: #ffffff;\n          font-size: 0.8em;\n          padding: 5px 0 5px 0px;\n          margin: 0; }\n\n.smart_light .light {\n  display: inline-block;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  border-radius: 50%; }\n  .smart_light .light.green-light {\n    background-color: #008974; }\n  .smart_light .light.dark-red-light {\n    background-color: #c00a3a; }\n  .smart_light .light.orange-light {\n    background-color: #ff9a36; }\n  .smart_light .light.grey-light {\n    background-color: #574d50; }\n  .smart_light .light .bulb-tungsten {\n    background-image: url(https://static.iviva.com/images/uxp-generic-widgets/bulb-tungsten.png);\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 20px;\n    height: 20px;\n    transform: translate(35%, 32%); }\n  .smart_light .light.light_action_more {\n    border-radius: 22px 10px 0px 22px; }\n\n.smart_light .leaflet-popup-content-wrapper {\n  box-shadow: none;\n  border: none;\n  outline: none; }\n\n.smart_light .leaflet-popup a.leaflet-popup-close-button {\n  top: 2px;\n  right: -2px;\n  width: 30px;\n  height: 30px;\n  font: 21px/14px Tahoma, Verdana, sans-serif; }\n\n.smart_light .leaflet-popup .leaflet-popup-content-wrapper {\n  padding: 0; }\n  .smart_light .leaflet-popup .leaflet-popup-content-wrapper .leaflet-popup-content {\n    margin: 0; }\n  .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content {\n    background-color: #000000;\n    border-radius: 12px;\n    padding: 13px 19px;\n    outline: none; }\n    .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content .days {\n      display: inline-block;\n      position: absolute;\n      top: 3em;\n      right: 1em;\n      color: #ffffff;\n      font-size: 0.7em; }\n    .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content .section-content {\n      display: inline-block;\n      width: 100%; }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content .section-content .icon {\n        display: inline-block;\n        position: relative;\n        left: -1em;\n        width: 35px;\n        height: 35px;\n        cursor: pointer;\n        border-radius: 50%; }\n        .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content .section-content .icon:before {\n          content: \"\";\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          margin: 0px;\n          background-image: url(https://static.iviva.com/images/uxp-generic-widgets/bulb-tungsten.png);\n          background-position: center center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 20px;\n          height: 20px;\n          transform: translate(35%, 32%); }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content .section-content h5 {\n        display: inline-block;\n        width: 100%;\n        color: #ffffff;\n        font-size: 1.2em;\n        padding: 5px 0 5px 0px;\n        margin: 0; }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content .section-content p {\n        color: #ffffff;\n        font-size: 0.8em;\n        padding: 5px 0 5px 0px;\n        margin: 0; }\n    .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.green-energy_content {\n      border: 0.001em solid #008974; }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.green-energy_content .icon {\n        background: #008974; }\n    .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.dark-red-energy_content {\n      border: 0.001em solid #c00a3a; }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.dark-red-energy_content .icon {\n        background: #c00a3a; }\n    .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.orange-energy_content {\n      border: 0.001em solid #ff9a36; }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.orange-energy_content .icon {\n        background: #ff9a36; }\n    .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.grey-energy_content {\n      border: 0.001em solid #574d50; }\n      .smart_light .leaflet-popup .leaflet-popup-content-wrapper .energy_content.grey-energy_content .icon {\n        background: #574d50; }\n\n.smart_light .leaflet-popup .lights_more {\n  display: inline-block;\n  margin-top: 1em;\n  width: 100%; }\n  .smart_light .leaflet-popup .lights_more ul {\n    display: inline-block;\n    padding: 0;\n    margin: 0;\n    width: 100%; }\n    .smart_light .leaflet-popup .lights_more ul li {\n      display: inline-block;\n      width: 25%;\n      text-align: center; }\n      .smart_light .leaflet-popup .lights_more ul li .light {\n        position: relative; }\n        .smart_light .leaflet-popup .lights_more ul li .light:before {\n          content: \"\";\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          margin: 0px;\n          background-image: url(https://static.iviva.com/images/uxp-generic-widgets/bulb-tungsten.png);\n          background-position: center center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 20px;\n          height: 20px;\n          transform: translate(35%, 32%); }\n\n.smart_light .more_section .light .bulb-tungsten {\n  background-size: contain; }\n\n.smart_light .more_section .more-content {\n  color: #fff;\n  background: #008974;\n  border-radius: 0px 22px 22px 0px;\n  padding: 10px 0 9px 0;\n  width: 5.8em;\n  text-align: center;\n  position: absolute;\n  left: 24px;\n  font-size: 0.9em;\n  top: 0px; }\n\n.smart_light .uxp-form-select .uxp-select-placeholder.dynamic-select {\n  background: #999999; }\n\n.smart_light .uxp-form-select .uxp-select-placeholder .selected {\n  color: #000; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const Smart_lightingWidget = (props) => {
    let [selected, setSelected] = React.useState("op-1");
    let [regions, setRegions] = React.useState([]);
    let [isAddingRegion, setIsAddingRegion] = React.useState(false);
    let regionCoords = React.useRef([]);
    const addRegion = () => {
        setIsAddingRegion(true);
    };
    const GridData = [
        {
            title: React.createElement("h3", { className: "green" }, "46"),
            subTitle: "Lights Online"
        },
        {
            title: React.createElement("h3", { className: "pink" }, "03"),
            subTitle: "Lights Offline"
        },
        {
            title: React.createElement("h3", { className: "green" }, "2 kW h"),
            subTitle: "Energy Cosumption"
        },
        {
            title: React.createElement("h3", { className: "orange" }, "35 days"),
            subTitle: "Maintenance Due In"
        }
    ];
    const renderGridItem = (item, key) => {
        return (React.createElement(components_1.ItemCard, { item: item, imageField: "icon", titleField: "title", subTitleField: "subTitle", nameField: "name" }));
    };
    const [isActive, setActive] = React.useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    let className = "energy_content";
    if (isActive) {
        className += ' energy_content_toggle';
    }
    return (React.createElement(components_1.WidgetWrapper, { className: "smart_light" },
        React.createElement("div", { className: "transport_map" },
            React.createElement("div", { className: "transport_map-sec", style: { width: "100%", height: "100%" } },
                React.createElement(components_1.MapComponent
                // https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
                // mapUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                , { 
                    // https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
                    // mapUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                    mapUrl: "", staticImage: { url: 'https://static.iviva.com/images/uxp-generic-widgets/map.png', width: 2880, height: 1724 }, onMarkerClick: (el, data) => {
                        console.log(el);
                        console.log(data);
                    }, onClick: (e) => {
                        console.log("Hi", e);
                    }, center: { position: { latitude: 862, longitude: 1020 }, renderMarker: false }, zoom: -1, maxZoom: 10, minZoom: -10, regions: regions, zoomOnScroll: true, markers: [
                        //     {
                        //           latitude: 0,
                        //           longitude: 0, 
                        //     },
                        //     {
                        //         latitude: 1724,
                        //         longitude: 2880, 
                        //   }
                        {
                            latitude: 1006.6999969482422,
                            longitude: 1232,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light green-light light_action_more",
                                html: "<div class='more_section'><div class='bulb-tungsten'></div><div class='more-content'>12 More</div></div>",
                                // html : "",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement(React.Fragment, null,
                                    React.createElement("div", { className: "energy_content-overall" },
                                        React.createElement("div", { className: "energy_content green-energy_content" },
                                            React.createElement("div", { className: "days" }, "7 days"),
                                            React.createElement("div", { className: "section-content" },
                                                React.createElement("div", { className: "icon" }),
                                                React.createElement("h5", null, "0.3 kW h"),
                                                React.createElement("p", null, "Energy Cosumption"))),
                                        React.createElement("div", { className: "lights_more" },
                                            React.createElement("ul", null,
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" }))),
                                            React.createElement("ul", null,
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" }))),
                                            React.createElement("ul", null,
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" })),
                                                React.createElement("li", null,
                                                    React.createElement("div", { className: "light green-light" }))))))
                            }
                        },
                        {
                            latitude: 1146.6999969482422,
                            longitude: 786,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light green-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content green-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 654.6999969482422,
                            longitude: 970,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light green-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content green-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 958.6999969482422,
                            longitude: 1658,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light green-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content green-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 980.6999969482422,
                            longitude: 574,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light dark-red-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content dark-red-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 860.6999969482422,
                            longitude: 1642,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light dark-red-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content dark-red-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 760.6999969482422,
                            longitude: 1210,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light dark-red-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content dark-red-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 1006.6999969482422,
                            longitude: 946,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light orange-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content orange-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 896.6999969482422,
                            longitude: 1424,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light orange-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content orange-energy_content" },
                                    React.createElement("div", { className: "days" }, "7 days"),
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("div", { className: "icon" }),
                                        React.createElement("h5", null, "0.3 kW h"),
                                        React.createElement("p", null, "Energy Cosumption")))
                            }
                        },
                        {
                            latitude: 862.6999969482422,
                            longitude: 1098,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon: {
                                className: "light grey-light",
                                html: "<div class='bulb-tungsten'></div>",
                                iconSize: [35, 35]
                            },
                            renderPopup: {
                                content: () => React.createElement("div", { className: "energy_content grey-energy_content" },
                                    React.createElement("div", { className: "section-content" },
                                        React.createElement("h5", null, "Empty")))
                            }
                        }
                    ] }))),
        React.createElement("div", { className: "smart-light-box" },
            React.createElement("div", { className: "smart-light-box-top" },
                React.createElement("div", { className: "smart-light-box_lft" },
                    React.createElement("h4", null, "Global Lighting")),
                React.createElement("div", { className: "smart-light-box_rht" },
                    React.createElement("div", { className: "uti-sel-boxes" },
                        React.createElement("div", { className: "uti-sel-box" },
                            React.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                                React.createElement(components_1.Select, { selected: selected, options: [
                                        { label: "Global Lighting", value: "op-1" },
                                        { label: "Global Lighting 2", value: "op-2" },
                                        { label: "Global Lighting 3", value: "op-3" }
                                    ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" })))))),
            React.createElement("div", { className: "smart-light-box_details" },
                React.createElement(components_1.DataGrid, { data: GridData, renderItem: renderGridItem, columns: 2 })))));
};
/**
 * Register as a Widget
 */
uxp_1.registerWidget({
    id: "smart_lighting",
    widget: Smart_lightingWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "smart_lighting",
    label: "Smart_lighting",
    // click: () => alert("Hello"),
    component: Smart_lightingWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"smart_lighting",
   component: Smart_lightingWidget
});
*/ 


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map