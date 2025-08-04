/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/Snow.jpeg */ \"./src/imgs/Snow.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  font-family: \"Poiret One\", sans-serif;\n  font-weight: 600;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.search-bar-input {\n  margin-top: 5%;\n  margin-left: 20%;\n  margin-right: 20%;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n  justify-self: center;\n  gap: 3px;\n}\n\n#submit {\n   background-color: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgb(236, 232, 233);\n  border-radius: 5px;\n  color: black;\n}\n\n#input {\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgb(236, 232, 233);\n  border-radius: 5px;\n  color: black;\n}\n\n#input:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n  border: 1px solid white;\n  outline: none;\n}\n\n#date {\n  align-self: center;\n  margin: 5px;\n  color: rgb(255, 255, 255);\n}\n\n#today-weather {\n  display: grid;\n  width: 40vw;\n  margin: 15px;\n  padding: 15px;\n}\n\n.day-night-weather,\n.weather-informations {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  font-size: 13px;\n  color: white;\n}\n\n.current-weather {\n  align-self: center;\n  justify-self: center;\n  color: white;\n  font-size: 45px;\n  padding: 5px;\n}\n\n.other-days {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  padding: 16px;\n  width: 90vw;\n  margin: 0 auto;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.info-per-hours {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow-y: auto;\n  padding: 16px;\n  box-sizing: border-box;\n  width: 90vw;\n  margin: 0 auto;\n}\n\n.hour-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 6px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(4px);\n  border-radius: 14px;\n  padding: 12px 16px;\n  color: white;\n  font-size: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: background 0.3s ease, transform 0.2s ease;\n}\n\n.hour-card:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: scale(1.01);\n}\n\n.hour-card .label {\n  opacity: 0.8;\n  font-weight: 600;\n}\n\n.hour-card .value {\n  text-align: right;\n}\n\n.day {\n  background: rgb(234, 229, 229, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 12px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 14px;\n  text-align: center;\n  backdrop-filter: blur(1px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: transform 0.2s ease;\n}\n\n.day:hover {\n  transform: scale(1.02);\n}\n\n.which-day {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.dayy,\n.night {\n  font-size: 13px;\n  opacity: 0.9;\n}\n\n.description {\n  font-size: 12px;\n  opacity: 0.7;\n  text-align: center;\n}\n\n.buttons {\n  display: flex;\n  justify-self: center;\n  gap: 7px;\n  padding-top: 10px;\n}\n\n#for-days,\n#for-hours {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-family: \"Poiret One\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: rgba(255, 255, 255, 0.25);\n  color: white;\n  backdrop-filter: blur(2px);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n#for-days:hover,\n#for-hours:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n  transform: scale(1.05);\n  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.2);\n}\n\n.hours {\n  border: 1px solid rgb(242, 239, 239, 0.9);\n  border-radius: 5px;\n  padding: 10px;\n  min-height: 60px;\n  max-height: 60px;\n  background-color: rgba(255, 255, 255, 0.05);\n  color: rgb(235, 231, 231);\n}\n\n.location-popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.popup-content {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(4px);\n  border: 1px solid white;\n  padding: 20px;\n  border-radius: 12px;\n  text-align: center;\n  color: white;\n  width: 80%;\n  max-width: 300px;\n}\n\n.popup-buttons {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.popup-buttons button {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: white;\n  font-weight: bold;\n  font-family: \"Poiret One\", sans-serif;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n\n.popup-buttons button:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.hidden {\n    display: none;\n}\n\n#right-scroll {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 5px;\n}\n\n#left-scroll {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 5px;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/dom-logic.js":
/*!**************************!*\
  !*** ./src/dom-logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _weather_background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-background.js */ \"./src/weather-background.js\");\n//dom-logic.js\n\n\n\n\n\nlet days = _logic_js__WEBPACK_IMPORTED_MODULE_1__.dayManager.days;\n\nconst popupButtons = (function () {\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.accept.addEventListener(\"click\", async () => {\n        const location = await (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.getLocation)();   \n        await (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.locationToJson)(location);\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.popup.classList.add(\"hidden\");\n        console.log(days);\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id = 0;\n        todayWeatherToDom(0);\n    })\n\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.refuse.addEventListener(\"click\", () => {\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.popup.classList.add(\"hidden\");\n    })\n})();\n\nfunction todayWeatherToDom(index) {\n    let forHours = [];\n    forHours = days[index].forHours;\n\n\n\n    const hour = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.time)();\n    let weather = 0;\n    if (parseInt(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id) === 0) {\n        weather = parseInt(days[index].forHours[hour].temp);\n    }\n    else {\n        weather = parseInt(days[index].dayTemp);\n    }\n\n    const dayWeather = parseInt(days[index].dayTemp);\n    const nightWeather = parseInt(days[index].nightTemp);\n    const precip = parseInt(days[index].forHours[hour].precip);\n    const humidity = parseInt(days[index].forHours[hour].humidity);\n    const location = days[index].location;\n    const date = days[index].datetime;\n    const icon = days[index].icon;\n    \n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.currentWeather.textContent = `${weather}°C`;\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.currentDayWeather.textContent = ` ☀️ ${dayWeather}°C`;\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.currentNightWeather.textContent = `🌙 ${nightWeather}°C`;\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.currentHumidity.textContent = `💧 ${humidity}%`;\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.currentPrecipitation.textContent = `⛈️ ${precip}%`;\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.date.textContent = `${location}, ${date}`;\n\n    (0,_weather_background_js__WEBPACK_IMPORTED_MODULE_2__.setWeatherBackground)(icon);\n\n\n    forHours.forEach(hour => {\n        const hourNumber = parseInt(hour.datetime.split(\":\")[0]);\n\n\n        const card = document.createElement(\"div\");\n        card.classList.add(\"hour-card\");\n        card.innerHTML = `\n          <div class=\"label\">🕒 Ora</div>\n        <div class=\"value\">${hour.datetime}</div>\n        <div class=\"label\">🌡️ Temp</div>\n        <div class=\"value\">${parseInt(hour.temp)}°C</div>\n        <div class=\"label\">🌧️ Ploaie</div>\n        <div class=\"value\">${hour.precip}%</div>\n        <div class=\"label\">💧 Umiditate</div>\n        <div class=\"value\">${hour.humidity}%</div>\n        `\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.infosPerHour.appendChild(card);\n\n\n\n\n\n    });\n\n     \n}\n\nconst leftRigtSubmit = (function () {\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.rightButton.addEventListener(\"click\", () => {\n        if (parseInt(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id) < 6) {\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.infosPerHour.innerHTML = \"\";\n            const currentIndex = parseInt(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id);\n            const nextIndex = currentIndex + 1;\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id = nextIndex;\n            todayWeatherToDom(nextIndex);\n        }\n        else {\n            alert('Nu poti vizualiza vremea pe mai mult de 7 zile.')\n        }\n    })\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.leftButton.addEventListener(\"click\", () => {\n        if (parseInt(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id) > 0) {\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.infosPerHour.innerHTML = \"\";\n            const currentIndex = parseInt(_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id);\n            const nextIndex = currentIndex - 1;\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id = nextIndex;\n            todayWeatherToDom(nextIndex);\n        }\n        else {\n            alert('Dc vrei sa vezi vremea de ieri?')\n        }\n    })\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.submit.addEventListener(\"click\", async () => {\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.infosPerHour.innerHTML = \"\";\n        const location = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.userInput.value;\n        _logic_js__WEBPACK_IMPORTED_MODULE_1__.dayManager.days.length = 0;\n        await (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.locationToJson)(location);\n\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.content.id = 0;\n        todayWeatherToDom(0);\n    })\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom-logic.js?\n}");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n//dom.js\n\n\n\n\nconst DOM = (function () {\n  //input and date\n  const userInput = document.querySelector(\"#input\");\n  const date = document.querySelector(\"#date\");\n  const content = document.querySelector(\".content\");\n\n  //current day informations\n  const currentDayWeather = document.querySelector(\".day-weather\");\n  const currentNightWeather = document.querySelector(\".night-weather\");\n  const currentWeather = document.querySelector(\".current-weather\");\n  const currentHumidity = document.querySelector(\".humidity\");\n  const currentPrecipitation = document.querySelector(\".precipitation\");\n\n  //buttons\n  const forDaysBtn = document.querySelector(\".for-days\");\n  const forHoursBtn = document.querySelector(\".for-hourse\");\n\n  //in case: for days\n  const anotherDays = document.querySelectorAll(\".days\");\n  const whichDay = document.querySelectorAll(\".which-day\");\n  const dayWeather = document.querySelectorAll(\".dayy\");\n  const nightWeather = document.querySelectorAll(\".night\");\n  const description = document.querySelectorAll(\".description\");\n\n  //pop-up for location\n  const accept = document.querySelector(\"#accept-location\");\n  const refuse = document.querySelector(\"#deny-location\");\n  const popup = document.querySelector(\"#location-popup\");\n\n  //\n  const infosPerHour = document.querySelector(\".info-per-hours\");\n\n  //right-left buttons\n  const leftButton = document.querySelector(\"#left-scroll\");\n  const rightButton =  document.querySelector(\"#right-scroll\");\n\n  //\n  const submit = document.querySelector(\"#submit\");\n\n  return {\n    userInput,\n    date,\n    currentDayWeather,\n    currentNightWeather,\n    currentWeather,\n    currentHumidity,\n    currentPrecipitation,\n    forDaysBtn,\n    forHoursBtn,\n    anotherDays,\n    whichDay,\n    dayWeather,\n    nightWeather,\n    description,\n    accept,\n    refuse,\n    popup,\n    infosPerHour,\n    leftButton,\n    rightButton,\n    content,\n    submit\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?\n}");

/***/ }),

/***/ "./src/imgs/Snow.jpeg":
/*!****************************!*\
  !*** ./src/imgs/Snow.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f17cedf23a34a6c2867f.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/imgs/Snow.jpeg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _dom_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-logic.js */ \"./src/dom-logic.js\");\n/* harmony import */ var _weather_background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-background.js */ \"./src/weather-background.js\");\n//index.js\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?\n}");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dayManager: () => (/* binding */ dayManager),\n/* harmony export */   getLocation: () => (/* binding */ getLocation),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   locationToJson: () => (/* binding */ locationToJson),\n/* harmony export */   searchBar: () => (/* binding */ searchBar),\n/* harmony export */   time: () => (/* binding */ time)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nconst dayManager = {\n    days: []\n}\n\nclass currentDay {\n  constructor(dayTemp, nightTemp, temp, humidity, precipitation, forHours, location, hour, icon, id, datetime) {\n    this.dayTemp = dayTemp;\n    this.nightTemp = nightTemp;\n    this.temp = temp;\n    this.humidity = humidity;\n    this.precipitation = precipitation;\n    this.forHours = forHours;\n    this.location = location;\n    this.hour = hour;\n    this.icon = icon;\n    this.id = id;\n    this.datetime = datetime;\n  }\n\n  pushIn() {\n    dayManager.days.push(this);\n  }\n}\n\nclass forHoursTemp {\n  constructor(datetime, humidity, precip, temp) {\n    this.datetime = datetime;\n    this.humidity = humidity;\n    this.precip = precip;\n    this.temp = temp;\n  }\n}\n\nconst time = function() {\n    const currTime = Date.now();\n    const now = new Date(currTime);\n    const hour = now.getHours();\n    return hour;\n};\n\nasync function getLocation() {\n  function getCurrentPositionPromise() {\n    return new Promise((resolve, reject) => {\n      navigator.geolocation.getCurrentPosition(resolve, reject);\n    });\n  }\n\n  if (!navigator.geolocation) {\n    alert(\"location denied\");\n    return null;\n  }\n  try {\n    const position = await getCurrentPositionPromise();\n    const latitude = position.coords.latitude;\n    const longitude = position.coords.longitude;\n\n    const data = await fetch(\n      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=06d15b59415252f20073e20a617908d5`,\n    );\n    const json = await data.json();\n    const location = `${json[0].name}, ${json[0].country}`;\n    return location;\n  } catch {\n    alert(\"error\");\n    return null;\n  }\n}\n\nasync function getWeather(city) {\n  const location = await fetch(\n    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=G6M7JFRQTGQL4S2BAE4XY46J5`,\n  );\n  const json = await location.json();\n  return json;\n}\n\nasync function locationToJson(locationName) {\nconst result = await getWeather(locationName);\n  console.log(result);\n  for (let i = 0; i < 7; i++) {\n    const dayTemp = ((result.days[i].tempmax - 32) * 5) / 9;\n    const nightTemp = ((result.days[i].tempmin - 32) * 5) / 9;\n    const temp = ((result.days[i].temp - 32) * 5) / 9;\n    const humidity = result.days[i].humidity;\n    const precipitation = result.days[i].precipprob;\n    const forHours = [];\n    const loc = result.address;\n    const currentTime = result.currentConditions.datetime;\n    const icon = result.currentConditions.icon;\n    const id = i;\n    const datetime = result.days[i].datetime;\n    for (let j = 0; j < 24; j++) {\n      const hour = result.days[i].hours[j].datetime;\n      const humidity = result.days[i].hours[j].humidity;\n      const precip = result.days[i].hours[j].precipprob;\n      const hourTemp = ((result.days[i].hours[j].temp - 32) * 5) / 9;\n      forHours.push(new forHoursTemp(hour, humidity, precip, hourTemp));\n    }\n\n    const thisDay = new currentDay(\n      dayTemp,\n      nightTemp,\n      temp,\n      humidity,\n      precipitation,\n      forHours,\n      loc,\n      currentTime,\n      icon,\n      id,\n      datetime\n    );\n    thisDay.pushIn();\n  }\n};\n\nasync function searchBar() {\n  \n}\n\n//# sourceURL=webpack://weather-app/./src/logic.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?\n}");

/***/ }),

/***/ "./src/weather-background.js":
/*!***********************************!*\
  !*** ./src/weather-background.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setWeatherBackground: () => (/* binding */ setWeatherBackground)\n/* harmony export */ });\nconst weatherImages = {\n    'clear-day': 'imgs/Sunny-day.jpeg',\n    'clear-night': 'imgs/Clear-night.jpeg',\n    'sunny': 'imgs/Sunny-day.jpeg',\n    'cloudy': 'imgs/Mostly-cloudy.jpeg',\n    'partly-cloudy-day': 'imgs/Partly-cloudy.jpeg',\n    'partly-cloudy-night': 'imgs/Partly-cloudy.jpeg',\n    'overcast': 'imgs/Mostly-cloudy.jpeg',\n    'rain': 'imgs/Heavy-rain.jpeg',\n    'showers-day': 'imgs/Rain and Snow.jpeg',\n    'showers-night': 'imgs/Rain and Snow.jpeg',\n    'thunderstorm': 'imgs/Thunderstorm.jpeg',\n    'heavy-rain': 'imgs/Heavy-rain.jpeg',\n    'snow': 'imgs/Snow.jpeg',\n    'snow-showers-day': 'imgs/Snow.jpeg',\n    'snow-showers-night': 'imgs/Snow.jpeg',\n    'sleet': 'imgs/Sleet.jpeg',\n    'drizzle': 'imgs/Drizzle.jpeg',\n    'light-rain': 'imgs/Drizzle.jpeg',\n    'wind': 'imgs/Squalls.jpeg',\n    'squalls': 'imgs/Squalls.jpeg',\n    'default': 'imgs/Snow.jpeg'\n};\n\nconst weatherMessages = {\n    'clear-day': 'E o zi senina, la fel ca tine bubi ❤️ Dar nici macar seninatatea cerului nu se compara cu tine 🥰(1)',\n    'clear-night': 'Nu stiu de ce te uiti la vreme noaptea, dar somnic usor bubilet ❤️❤️(2)',\n    'sunny': 'Cum soarele lumineaza totul azi, asa imi luminezi tu fiecare zi 🥰🥰(3)',\n    'cloudy': 'E innorat, bub 😕 Dar oricum tu esti cel mai frumos coltisor senin ❤️(4)',\n    'partly-cloudy-day': 'Sunt cativa norisori pe-afara... nu stiu ce sa zic pentru asta... dar ai castigat un pupic. 😅(5)',\n    'partly-cloudy-night': 'Buuuuub, de ce cauti iar vremea noaptea? Sunt cativa norisori si iar nu stiu ce sa zic... ai castigat un pupic! 😘(6)',\n    'overcast': 'Chiar daca e gri afara, tu esti pata mea de culoare azi. ❤️(7)',\n    'rain': 'E posibil sa ploua acum... Daca ploua, uita-te pe geam. Fiecare picatura de ploaie e un „te iubesc\" de la mine. 🥰(8)',\n    'showers-day': 'Ploaia vine si pleaca azi… dar gandul la tine ramane constant, ca o raza in toata umezeala asta. ❤️(9)',\n    'showers-night': 'Noapte cu ploaie... linistita. Si in toata linistea asta, singurul gand care se repeta e numele tau. Ai castigat 10 pupici! (10)',\n    'thunderstorm': 'Uita-te pe geam... toate fulgerele combinate nu-s la fel de luminoase ca intensitatea cu care te iubesc eu 🥰❤️(11)',\n    'heavy-rain': 'Ploua tare, dar dragostea mea e si mai puternica. 🥰 Te iubesc, bubi! Ai castigat 15 pupici! 🌧️💕(12)',\n    'snow': 'Mama, bub, daca inca verifici aici... verifici de ceva timp... ninge afara, ai castigat un pupicel. ❄️😅(13)',\n    'snow-showers-day': 'Pentru fiecare fulgulet de zapada pe care il vezi azi, e un „te iubesc\" de la mine ❤️ Daca nu vezi niciunul, ai castigat 5 pupicei extra! (14)',\n    'snow-showers-night': 'Mamaa bubi te uiti asa tarziu la vreme 😅 E frigut, vrei sa vin sa te incalzesc putin ? (15)',\n    'sleet': 'Vrei sa te incalzesc oleaca? Fac pariu ca ti-e frigut 😅 te iubiiii(16)',\n    'drizzle': 'Bub vreme din asta ii rara.. daca ai nimerit-o, ai 5 pupici de aia dulci dulci dulci(17)',\n    'light-rain': 'Ploita din asta usoara... ii vreme de tinut in brate sau de film ? 😅❤️(18)',\n    'wind': 'Vezi sa nu te ia vantu pe sus bub.. Siiiii ai castigat 10 pupicieeei! 🥰(19)',\n    'squalls': 'Orice ar fi afara, tu esti linistea mea! ❤️(20)',\n};\n\nconst BASE_PATH = '/weather-app/';\n\nfunction showLovePopup(message) {\n    // Creează overlay\n    const overlay = document.createElement('div');\n    overlay.style.position = 'fixed';\n    overlay.style.top = 0;\n    overlay.style.left = 0;\n    overlay.style.width = '100vw';\n    overlay.style.height = '100vh';\n    overlay.style.background = 'rgba(0,0,0,0.5)';\n    overlay.style.display = 'flex';\n    overlay.style.alignItems = 'center';\n    overlay.style.justifyContent = 'center';\n    overlay.style.zIndex = 9999;\n\n    // Creează popup\n    const popup = document.createElement('div');\n    popup.style.background = 'white';\n    popup.style.padding = '30px 20px';\n    popup.style.borderRadius = '16px';\n    popup.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)';\n    popup.style.textAlign = 'center';\n    popup.style.fontSize = '1.2rem';\n    popup.style.maxWidth = '90vw';\n\n    popup.textContent = message;\n\n    // Buton OK\n    const btn = document.createElement('button');\n    btn.textContent = 'OK';\n    btn.style.marginTop = '20px';\n    btn.style.padding = '8px 24px';\n    btn.style.border = 'none';\n    btn.style.borderRadius = '8px';\n    btn.style.background = '#ff69b4';\n    btn.style.color = 'white';\n    btn.style.fontWeight = 'bold';\n    btn.style.fontSize = '1rem';\n    btn.style.cursor = 'pointer';\n\n    btn.onclick = () => document.body.removeChild(overlay);\n\n    popup.appendChild(document.createElement('br'));\n    popup.appendChild(btn);\n    overlay.appendChild(popup);\n    document.body.appendChild(overlay);\n}\n\nfunction setWeatherBackground(icon) {\n    const img = weatherImages[icon] || weatherImages['default'];\n    document.body.style.backgroundImage = `url('${BASE_PATH}${img}')`;\n\n    // Afișează popup cu mesajul personalizat\n    const message = weatherMessages[icon] || weatherMessages['default'];\n    showLovePopup(message);\n}\n\n//# sourceURL=webpack://weather-app/./src/weather-background.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;