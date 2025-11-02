/*
@license

dhtmlxDiagram v.6.0.10 Professional

This software is covered by DHTMLX Individual License.
Usage without proper license is prohibited.

(c) XB Software.

*/
if (window.dhx){ window.dhx_legacy = dhx; delete window.dhx; }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dhx"] = factory();
	else
		root["dhx"] = factory();
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
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 170);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTheme = exports.awaitRedraw = exports.resizeHandler = exports.jsonToVDOM = exports.xmlToJson = exports.resizer = exports.disableHelp = exports.KEYED_LIST = exports.inject = exports.create = exports.view = exports.sv = exports.el = void 0;
var dom = __webpack_require__(80);
var html_1 = __webpack_require__(2);
exports.el = dom.defineElement;
exports.sv = dom.defineSvgElement;
exports.view = dom.defineView;
exports.create = dom.createView;
exports.inject = dom.injectView;
exports.KEYED_LIST = dom.KEYED_LIST;
var svgTagName = [
    "animate",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "defs",
    "desc",
    "discard",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "hatch",
    "hatchpath",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "solidcolor",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tspan",
    "unknown",
    "use",
    "view",
];
function disableHelp() {
    dom.DEVMODE.mutations = false;
    dom.DEVMODE.warnings = false;
    dom.DEVMODE.verbose = false;
    dom.DEVMODE.UNKEYED_INPUT = false;
}
exports.disableHelp = disableHelp;
function resizer(handler) {
    var resize = window.ResizeObserver;
    var activeHandler = function (node) {
        var height = node.el.offsetHeight;
        var width = node.el.offsetWidth;
        handler(width, height);
    };
    if (resize) {
        return (0, exports.el)("div.dhx-resize-observer", {
            _hooks: {
                didInsert: function (node) {
                    new resize(function () { return activeHandler(node); }).observe(node.el);
                },
            },
        });
    }
    return (0, exports.el)("iframe.dhx-resize-observer", {
        _hooks: {
            didInsert: function (node) {
                node.el.contentWindow.onresize = function () { return activeHandler(node); };
                activeHandler(node);
            },
        },
    });
}
exports.resizer = resizer;
function xmlToJson(xml) {
    var obj = {};
    if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    }
    else if (xml.nodeType === 3) {
        obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] === "undefined") {
                obj[nodeName] = xmlToJson(item);
            }
            else {
                if (typeof obj[nodeName].push === "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}
exports.xmlToJson = xmlToJson;
function jsonToVDOM(json) {
    var _a, _b;
    var tag = Object.keys(json)[0];
    var element = json[tag];
    if (Array.isArray(element["#text"])) {
        element["#text"] = element["#text"].join("").trim();
    }
    var children = typeof element["#text"] === "string" ? [element["#text"]] : [];
    for (var child in element) {
        if (element.hasOwnProperty(child) && child !== "@attributes" && child !== "#text") {
            if (Array.isArray(element[child])) {
                for (var t in element[child]) {
                    if (element[child].hasOwnProperty(t)) {
                        children.push(jsonToVDOM((_a = {}, _a[child] = element[child][t], _a)));
                    }
                }
            }
            else {
                children.push(jsonToVDOM((_b = {}, _b[child] = element[child], _b)));
            }
        }
    }
    if (svgTagName.includes(tag)) {
        return (0, exports.sv)(tag, element["@attributes"] ? element["@attributes"] : {}, children);
    }
    else {
        return (0, exports.el)(tag, element["@attributes"] ? element["@attributes"] : {}, children);
    }
}
exports.jsonToVDOM = jsonToVDOM;
function resizeHandler(container, handler) {
    return (0, exports.create)({
        render: function () {
            return resizer(handler);
        },
    }).mount(container);
}
exports.resizeHandler = resizeHandler;
function awaitRedraw() {
    return new Promise(function (res) {
        requestAnimationFrame(function () {
            res();
        });
    });
}
exports.awaitRedraw = awaitRedraw;
function setTheme(theme, container) {
    if (theme === void 0) { theme = "light"; }
    var dhxAttr = "data-dhx-theme";
    if (!container) {
        var elements = document.querySelectorAll("[".concat(dhxAttr, "]"));
        elements.forEach(function (el) { return el.removeAttribute(dhxAttr); });
    }
    container = container || document.documentElement;
    (0, html_1.toNode)(container).setAttribute(dhxAttr, theme);
}
exports.setTheme = setTheme;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobToBase64 = exports.isMacintosh = exports.getTextLines = exports.getCloneObject = exports.rgbToHex = exports.isObject = exports.getStringWidth = exports.getMinArrayNumber = exports.getMaxArrayNumber = exports.isEmptyObj = exports.isType = exports.compare = exports.debounce = exports.downloadFile = exports.isNumeric = exports.range = exports.isId = exports.isDefined = exports.wrapBox = exports.unwrapBox = exports.detectWidgetClick = exports.singleOuterClick = exports.isExistValue = exports.findIndex = exports.naturalSort = exports.copy = exports.extend = exports.uid = void 0;
var html_1 = __webpack_require__(2);
var counter = new Date().valueOf();
function uid() {
    return "u" + counter++;
}
exports.uid = uid;
function extend(target, source, deep) {
    if (deep === void 0) { deep = true; }
    if (source) {
        for (var key in source) {
            var sobj = source[key];
            var tobj = target[key];
            if (sobj === undefined) {
                delete target[key];
            }
            else if (deep &&
                typeof tobj === "object" &&
                !(tobj instanceof Date) &&
                !(tobj instanceof Array)) {
                extend(tobj, sobj);
            }
            else {
                target[key] = sobj;
            }
        }
    }
    return target;
}
exports.extend = extend;
function copy(source, withoutInner) {
    var result = {};
    for (var key in source) {
        if (!withoutInner || !key.startsWith("$")) {
            result[key] = source[key];
        }
    }
    return result;
}
exports.copy = copy;
function naturalSort(arr) {
    return arr.sort(function (a, b) {
        var nn = typeof a === "string" ? a.localeCompare(b) : a - b;
        return nn;
    });
}
exports.naturalSort = naturalSort;
function findIndex(arr, predicate) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function isExistValue(target, value) {
    var str = value.toString();
    var text = target.toString();
    if (str.length > text.length)
        return false;
    return text.toLowerCase().includes(str.toLowerCase());
}
exports.isExistValue = isExistValue;
function singleOuterClick(fn) {
    var click = function (e) {
        if (fn(e)) {
            document.removeEventListener("click", click);
        }
    };
    document.addEventListener("click", click);
}
exports.singleOuterClick = singleOuterClick;
function detectWidgetClick(widgetId, cb) {
    var click = function (e) { return cb((0, html_1.locate)(e, "data-dhx-widget-id") === widgetId); };
    document.addEventListener("click", click);
    return function () { return document.removeEventListener("click", click); };
}
exports.detectWidgetClick = detectWidgetClick;
function unwrapBox(box) {
    if (Array.isArray(box)) {
        return box[0];
    }
    return box;
}
exports.unwrapBox = unwrapBox;
function wrapBox(unboxed) {
    if (Array.isArray(unboxed)) {
        return unboxed;
    }
    return [unboxed];
}
exports.wrapBox = wrapBox;
function isDefined(some) {
    return some !== null && some !== undefined;
}
exports.isDefined = isDefined;
function isId(some) {
    return typeof some === "number" || (typeof some === "string" && some !== "");
}
exports.isId = isId;
function range(from, to) {
    if (from > to) {
        return [];
    }
    var result = [];
    while (from <= to) {
        result.push(from++);
    }
    return result;
}
exports.range = range;
function isNumeric(val) {
    return !isNaN(val - parseFloat(val));
}
exports.isNumeric = isNumeric;
function downloadFile(data, filename, mimeType) {
    if (mimeType === void 0) { mimeType = "text/plain"; }
    var file = new Blob([data], { type: mimeType });
    if (window.navigator.msSaveOrOpenBlob) {
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    }
    else {
        var a_1 = document.createElement("a");
        var url_1 = URL.createObjectURL(file);
        a_1.href = url_1;
        a_1.download = filename;
        document.body.appendChild(a_1);
        a_1.click();
        setTimeout(function () {
            document.body.removeChild(a_1);
            window.URL.revokeObjectURL(url_1);
        }, 0);
    }
}
exports.downloadFile = downloadFile;
function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(_this, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
exports.debounce = debounce;
function compare(obj1, obj2) {
    for (var p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
            return false;
        }
        switch (typeof obj1[p]) {
            case "object":
                if (!compare(obj1[p], obj2[p])) {
                    return false;
                }
                break;
            case "function":
                if (typeof obj2[p] === "undefined" ||
                    (p !== "compare" && obj1[p].toString() !== obj2[p].toString())) {
                    return false;
                }
                break;
            default:
                if (obj1[p] !== obj2[p]) {
                    return false;
                }
        }
    }
    for (var p in obj2) {
        if (!obj1.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}
exports.compare = compare;
var isType = function (value) {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || "undefined").toLowerCase();
};
exports.isType = isType;
var isEmptyObj = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
exports.isEmptyObj = isEmptyObj;
var getMaxArrayNumber = function (array) {
    if (!array.length)
        return;
    var maxNumber = -Infinity;
    var index = 0;
    var length = array.length;
    for (index; index < length; index++) {
        if (array[index] > maxNumber)
            maxNumber = array[index];
    }
    return maxNumber;
};
exports.getMaxArrayNumber = getMaxArrayNumber;
var getMinArrayNumber = function (array) {
    if (!array.length)
        return;
    var minNumber = +Infinity;
    var index = 0;
    var length = array.length;
    for (index; index < length; index++) {
        if (array[index] < minNumber)
            minNumber = array[index];
    }
    return minNumber;
};
exports.getMinArrayNumber = getMinArrayNumber;
var getStringWidth = function (value, config) {
    config = __assign({ font: "normal 14px Roboto", lineHeight: 20 }, config);
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (config.font)
        ctx.font = config.font;
    var width = ctx.measureText(value).width;
    if (!(0, html_1.isIE)())
        canvas.remove();
    return width;
};
exports.getStringWidth = getStringWidth;
function isObject(obj) {
    return obj !== null && typeof obj === "object" && !(obj instanceof Date);
}
exports.isObject = isObject;
var rgbToHex = function (color) {
    if (color.substr(0, 1) === "#") {
        return color;
    }
    if (color.substr(0, 3) !== "rgb") {
        return;
    }
    var digits = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d+.]*)\)/.exec(color);
    var red = parseInt(digits[2], 10)
        .toString(16)
        .padStart(2, "0");
    var green = parseInt(digits[3], 10)
        .toString(16)
        .padStart(2, "0");
    var blue = parseInt(digits[4], 10)
        .toString(16)
        .padStart(2, "0");
    return "#".concat(red).concat(green).concat(blue);
};
exports.rgbToHex = rgbToHex;
function getCloneObject(obj) {
    if (!obj) {
        return obj;
    }
    var clone = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        var value = obj[key];
        if (value instanceof Date) {
            clone[key] = new Date(value);
            continue;
        }
        clone[key] = typeof value === "object" ? getCloneObject(value) : value;
    }
    return clone;
}
exports.getCloneObject = getCloneObject;
function getTextLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var line = "";
    var testLine = "";
    var lineArray = [];
    for (var n = 0; n < words.length; n++) {
        testLine += "".concat(words[n], " ");
        var metrics = ctx.measureText(testLine.trimEnd());
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lineArray.push(line);
            line = "".concat(words[n], " ");
            testLine = "".concat(words[n], " ");
        }
        else {
            line += "".concat(words[n], " ");
        }
        if (n === words.length - 1) {
            lineArray.push(line);
        }
    }
    return lineArray;
}
exports.getTextLines = getTextLines;
;
function isMacintosh() {
    return navigator.userAgent.indexOf("Mac") > -1;
}
exports.isMacintosh = isMacintosh;
function blobToBase64(blob) {
    return new Promise(function (resolve, _) {
        var reader = new FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });
}
exports.blobToBase64 = blobToBase64;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageLinksCss = exports.getPageInlineCss = exports.getLabelStyle = exports.getStrSize = exports.fitPosition = exports.calculatePosition = exports.getRealPosition = exports.isFirefox = exports.isSafari = exports.isIE = exports.getScrollbarHeight = exports.getScrollbarWidth = exports.getBox = exports.locateNodeByClassName = exports.locate = exports.locateNode = exports.eventHandler = exports.toNode = void 0;
function toNode(node) {
    var _a;
    return typeof node === "string"
        ? document.getElementById(node) || document.querySelector("[data-cell-id=".concat(node, "]")) || document.querySelector(node) || ((_a = document.querySelector("[data-dhx-root-id=".concat(node, "]"))) === null || _a === void 0 ? void 0 : _a.parentElement) || document.body
        : node || document.body;
}
exports.toNode = toNode;
function eventHandler(prepare, hash, afterCall) {
    var keys = Object.keys(hash);
    return function (ev) {
        var data = prepare(ev);
        if (data !== undefined) {
            var node = ev.target;
            outer_block: while (node) {
                var cssstring = node.getAttribute ? node.getAttribute("class") || "" : "";
                if (cssstring.length) {
                    var css = cssstring.split(" ");
                    for (var j = 0; j < keys.length; j++) {
                        if (css.includes(keys[j])) {
                            if (hash[keys[j]](ev, data) === false || ev.cancelBubble)
                                return false;
                            else
                                break outer_block;
                        }
                    }
                }
                node = node.parentNode;
            }
        }
        if (typeof afterCall === "function")
            afterCall(ev);
        return true;
    };
}
exports.eventHandler = eventHandler;
function locateNode(target, attr, dir) {
    if (attr === void 0) { attr = "data-dhx-id"; }
    if (dir === void 0) { dir = "target"; }
    if (target instanceof Event) {
        target = target[dir];
    }
    while (target) {
        if (target.getAttribute && target.getAttribute(attr)) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNode = locateNode;
function locate(target, attr) {
    if (attr === void 0) { attr = "data-dhx-id"; }
    var node = locateNode(target, attr);
    return node ? node.getAttribute(attr) : "";
}
exports.locate = locate;
function locateNodeByClassName(target, className) {
    if (target instanceof Event) {
        target = target.target;
    }
    while (target) {
        if (className) {
            if (target.classList && target.classList.contains(className)) {
                return target;
            }
        }
        else if (target.getAttribute && target.getAttribute("data-dhx-id")) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNodeByClassName = locateNodeByClassName;
function getBox(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var top = box.top + scrollTop;
    var left = box.left + scrollLeft;
    var right = body.offsetWidth - box.right;
    var bottom = body.offsetHeight - box.bottom;
    var width = box.right - box.left;
    var height = box.bottom - box.top;
    return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
}
exports.getBox = getBox;
var scrollWidth = -1;
function getScrollbarWidth() {
    if (scrollWidth > -1) {
        return scrollWidth;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
var scrollHeight = -1;
function getScrollbarHeight() {
    if (scrollHeight > -1) {
        return scrollHeight;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    return scrollHeight;
}
exports.getScrollbarHeight = getScrollbarHeight;
function isIE() {
    var ua = window.navigator.userAgent;
    return ua.includes("MSIE ") || ua.includes("Trident/");
}
exports.isIE = isIE;
function isSafari() {
    var check = function (str) { return str.test(window.navigator.userAgent); };
    var chrome = check(/Chrome/);
    var firefox = check(/Firefox/);
    return !chrome && !firefox && check(/Safari/);
}
exports.isSafari = isSafari;
function isFirefox() {
    var check = function (str) { return str.test(window.navigator.userAgent); };
    var chrome = check(/Chrome/);
    var safari = check(/Safari/);
    return !chrome && !safari && check(/Firefox/);
}
exports.isFirefox = isFirefox;
function getRealPosition(node) {
    var rects = node.getBoundingClientRect();
    return {
        left: rects.left + window.pageXOffset,
        right: rects.right + window.pageXOffset,
        top: rects.top + window.pageYOffset,
        bottom: rects.bottom + window.pageYOffset,
    };
}
exports.getRealPosition = getRealPosition;
function getWindowBorders() {
    return {
        rightBorder: window.pageXOffset + window.innerWidth,
        bottomBorder: window.pageYOffset + window.innerHeight,
    };
}
function horizontalCentering(pos, width, rightBorder) {
    var nodeWidth = pos.right - pos.left;
    var diff = (width - nodeWidth) / 2;
    var left = pos.left - diff;
    var right = pos.right + diff;
    if (left >= 0 && right <= rightBorder) {
        return left;
    }
    if (left < 0) {
        return 0;
    }
    return rightBorder - width;
}
function verticalCentering(pos, height, bottomBorder) {
    var nodeHeight = pos.bottom - pos.top;
    var diff = (height - nodeHeight) / 2;
    var top = pos.top - diff;
    var bottom = pos.bottom + diff;
    if (top >= 0 && bottom <= bottomBorder) {
        return top;
    }
    if (top < 0) {
        return 0;
    }
    return bottomBorder - height;
}
function placeBottomOrTop(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var bottomDiff = bottomBorder - pos.bottom - config.height;
    var topDiff = pos.top - config.height;
    if (config.mode === "bottom") {
        if (bottomDiff >= 0) {
            top = pos.bottom;
        }
        else if (topDiff >= 0) {
            top = topDiff;
        }
    }
    else {
        if (topDiff >= 0) {
            top = topDiff;
        }
        else if (bottomDiff >= 0) {
            top = pos.bottom;
        }
    }
    if (bottomDiff < 0 && topDiff < 0) {
        if (config.auto) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return placeRightOrLeft(pos, __assign(__assign({}, config), { mode: "right", auto: false }));
        }
        top = bottomDiff > topDiff ? pos.bottom : topDiff;
    }
    if (config.centering) {
        left = horizontalCentering(pos, config.width, rightBorder);
    }
    else {
        var leftDiff = rightBorder - pos.left - config.width;
        var rightDiff = pos.right - config.width;
        if (leftDiff >= 0) {
            left = pos.left;
        }
        else if (rightDiff >= 0) {
            left = rightDiff;
        }
        else {
            left = rightDiff > leftDiff ? pos.left : rightDiff;
        }
    }
    return { left: left, top: top };
}
function placeRightOrLeft(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var rightDiff = rightBorder - pos.right - config.width;
    var leftDiff = pos.left - config.width;
    if (config.mode === "right") {
        if (rightDiff >= 0) {
            left = pos.right;
        }
        else if (leftDiff >= 0) {
            left = leftDiff;
        }
    }
    else {
        if (leftDiff >= 0) {
            left = leftDiff;
        }
        else if (rightDiff >= 0) {
            left = pos.right;
        }
    }
    if (leftDiff < 0 && rightDiff < 0) {
        if (config.auto) {
            return placeBottomOrTop(pos, __assign(__assign({}, config), { mode: "bottom", auto: false }));
        }
        left = leftDiff > rightDiff ? leftDiff : pos.right;
    }
    if (config.centering) {
        top = verticalCentering(pos, config.height, bottomBorder);
    }
    else {
        var bottomDiff = pos.bottom - config.height;
        var topDiff = bottomBorder - pos.top - config.height;
        if (topDiff >= 0) {
            top = pos.top;
        }
        else if (bottomDiff > 0) {
            top = bottomDiff;
        }
        else {
            top = bottomDiff > topDiff ? bottomDiff : pos.top;
        }
    }
    return { left: left, top: top };
}
function calculatePosition(pos, config) {
    var _a = config.mode === "bottom" || config.mode === "top"
        ? placeBottomOrTop(pos, config)
        : placeRightOrLeft(pos, config), left = _a.left, top = _a.top;
    return {
        left: Math.round(left) + "px",
        top: Math.round(top) + "px",
        minWidth: Math.round(config.width) + "px",
        position: "absolute",
    };
}
exports.calculatePosition = calculatePosition;
function fitPosition(node, config) {
    return calculatePosition(getRealPosition(node), config);
}
exports.fitPosition = fitPosition;
function getStrSize(str, textStyle) {
    textStyle = __assign({ fontSize: "14px", fontFamily: "Arial", lineHeight: "14px", fontWeight: "normal", fontStyle: "normal" }, textStyle);
    var span = document.createElement("span");
    var fontSize = textStyle.fontSize, fontFamily = textStyle.fontFamily, lineHeight = textStyle.lineHeight, fontWeight = textStyle.fontWeight, fontStyle = textStyle.fontStyle, strokeWidth = textStyle.strokeWidth;
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.lineHeight = lineHeight;
    span.style.fontWeight = fontWeight;
    span.style.fontStyle = fontStyle;
    span.style.display = "inline-flex";
    span.innerText = str;
    document.body.appendChild(span);
    var offsetWidth = span.offsetWidth, clientHeight = span.clientHeight;
    document.body.removeChild(span);
    return { width: offsetWidth + parseFloat(strokeWidth || 0), height: clientHeight + parseFloat(strokeWidth || 0) };
}
exports.getStrSize = getStrSize;
var checkCrossLink = function (sheet) {
    return sheet.href &&
        sheet.ownerNode.outerHTML.indexOf(window.location.origin) === -1 &&
        (sheet.ownerNode.outerHTML.indexOf("http") !== -1 ||
            sheet.ownerNode.outerHTML.indexOf("https") !== -1 ||
            sheet.ownerNode.outerHTML.indexOf('href="//') !== -1);
};
function getLabelStyle(config) {
    var helpMessage = config.helpMessage, type = config.type, labelWidth = config.labelWidth, label = config.label;
    var isZero = labelWidth && labelWidth.toString().startsWith("0");
    var required = type !== "text" && config.required;
    if (!helpMessage && !required && (!label || (label && isZero)) && (!labelWidth || isZero)) {
        return false;
    }
    return {
        style: (label || labelWidth) && !isZero && { width: labelWidth, "max-width": "100%" },
        label: label && isZero ? null : label,
    };
}
exports.getLabelStyle = getLabelStyle;
function getPageInlineCss() {
    var css = [];
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!checkCrossLink(sheet)) {
            var rules = "cssRules" in sheet && sheet.cssRules.length
                ? sheet.cssRules
                : sheet.rules;
            for (var j = 0; j < rules.length; j++) {
                var rule = rules[j];
                if ("cssText" in rule) {
                    css.push(rule.cssText);
                }
                else {
                    css.push("".concat(rule.selectorText, " {\n").concat(rule.style.cssText, "\n}\n"));
                }
            }
        }
    }
    return css.join("\n");
}
exports.getPageInlineCss = getPageInlineCss;
function getPageLinksCss(exportStyles) {
    var css = [];
    if (exportStyles) {
        exportStyles.forEach(function (link) { return css.push("<link href=\"".concat(link, "\" rel=\"stylesheet\"/>")); });
    }
    else {
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (checkCrossLink(sheet)) {
                css.push("<link href=\"".concat(sheet.href, "\" rel=\"stylesheet\"/>"));
            }
        }
    }
    return css.join("\n");
}
exports.getPageLinksCss = getPageLinksCss;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsMixin = exports.EventSystem = void 0;
var EventSystem = /** @class */ (function () {
    function EventSystem(context) {
        this.events = {};
        this.context = context || this;
    }
    EventSystem.prototype.on = function (name, callback, context) {
        var event = name.toLowerCase();
        this.events[event] = this.events[event] || [];
        this.events[event].push({ callback: callback, context: context || this.context });
    };
    EventSystem.prototype.detach = function (name, context) {
        var event = name.toLowerCase();
        var eStack = this.events[event];
        if (context && eStack && eStack.length) {
            for (var i = eStack.length - 1; i >= 0; i--) {
                if (eStack[i].context === context) {
                    eStack.splice(i, 1);
                }
            }
        }
        else {
            this.events[event] = [];
        }
    };
    EventSystem.prototype.fire = function (name, args) {
        if (typeof args === "undefined") {
            args = [];
        }
        var event = name.toLowerCase();
        if (this.events[event]) {
            var res = this.events[event].map(function (e) { return e.callback.apply(e.context, args); });
            return !res.includes(false);
        }
        return true;
    };
    EventSystem.prototype.clear = function () {
        this.events = {};
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;
function EventsMixin(obj) {
    obj = obj || {};
    var eventSystem = new EventSystem(obj);
    obj.detachEvent = eventSystem.detach.bind(eventSystem);
    obj.attachEvent = eventSystem.on.bind(eventSystem);
    obj.callEvent = eventSystem.fire.bind(eventSystem);
}
exports.EventsMixin = EventsMixin;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toViewLike = exports.View = void 0;
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
var View = /** @class */ (function () {
    function View(_container, config) {
        var _a;
        this.config = config || {};
        this._uid = (_a = this.config.rootId) !== null && _a !== void 0 ? _a : (0, core_1.uid)();
    }
    View.prototype.mount = function (container, vnode) {
        if (vnode) {
            this._view = vnode;
        }
        if (container && this._view && this._view.mount) {
            // init view inside of HTML container
            this._container = (0, html_1.toNode)(container);
            if (this._container.tagName) {
                this._view.mount(this._container);
            }
            else if (this._container.attach) {
                this._container.attach(this);
            }
        }
    };
    View.prototype.unmount = function () {
        var rootView = this.getRootView();
        if (rootView && rootView.node) {
            if (this.getRootNode())
                rootView.unmount();
            this._view = null;
        }
    };
    View.prototype.getRootView = function () {
        return this._view;
    };
    View.prototype.getRootNode = function () {
        return this._view && this._view.node && this._view.node.el;
    };
    View.prototype.paint = function () {
        if (this._view && // was mounted
            (this._view.node || // already rendered node
                this._container)) {
            // not rendered, but has container
            this._doNotRepaint = false;
            this._view.redraw();
        }
    };
    return View;
}());
exports.View = View;
function toViewLike(view) {
    return {
        getRootView: function () { return view; },
        paint: function () { return view.node && view.redraw(); },
        mount: function (container) { return view.mount(container); },
    };
}
exports.toViewLike = toViewLike;


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(91), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(93), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextStyle = exports.getSwimlaneContainerStyle = exports.getSwimlaneBackGround = exports.getGroupContainerStyle = exports.getMenuIcon = exports.getExpandIcon = exports.getShapeCss = exports.getTextTemplate = exports.getHeaderTpl = exports.getCircleTpl = void 0;
var dom_1 = __webpack_require__(0);
function getCircleTpl(config, index) {
    if ((!config.$count && config.open !== false) || !config.$connection)
        return null;
    var slim = config.dir === "vertical";
    var hide = config.open === false;
    var hW = config.width / 2;
    var hH = config.height / 2;
    var coords = {
        x: slim ? 0 : hW,
        y: slim ? hH : config.height,
    };
    var css = "";
    if (Array.isArray(config.dir)) {
        if (config.dir[index] === "verticalLeft") {
            coords.x = 0;
            coords.y = hH;
            css += "icon-left ";
            hide = config.openDir.left === false;
        }
        if (config.dir[index] === "verticalRight") {
            coords.x = config.width;
            coords.y = hH;
            css += "icon-right ";
            hide = config.openDir.right === false;
        }
    }
    else {
        if (config.dir === "verticalLeft") {
            coords.x = 0;
            coords.y = hH;
        }
        if (config.dir === "verticalRight") {
            coords.x = config.width;
            coords.y = hH;
        }
    }
    return (0, dom_1.el)("div", {
        class: "dhx_diagram_toggle-icon " +
            (hide ? "dhx_diagram_toggle-icon--expand " : "dhx_diagram_toggle-icon--collapse "),
        style: {
            position: "absolute",
            top: coords.y,
            left: coords.x,
        },
    }, [
        (0, dom_1.el)("div.dhx_diagram_toggle-icon__wrapper", {
            style: {
                background: config.$expandColor,
            },
        }, [
            (0, dom_1.el)("i.dxi", {
                class: "".concat(hide ? "dxi-plus " : "dxi-minus ").concat(css),
            }),
        ]),
    ]);
}
exports.getCircleTpl = getCircleTpl;
function getHeaderTpl(config) {
    var width = config.width;
    var height = 4;
    var color = config.headerColor || "#20b6e2";
    return (0, dom_1.el)("div", {
        class: "dhx_item_header",
        style: {
            height: height,
            width: width,
            top: 0,
            left: 0,
            position: "absolute",
            background: color,
        },
    });
}
exports.getHeaderTpl = getHeaderTpl;
function getTextTemplate(config, content) {
    var width = config.width, height = config.height;
    if (typeof config.text === "string" || typeof config.title === "string") {
        return (0, dom_1.el)("div.dhx_diagram_shape__content", {
            style: {
                width: width,
                height: height,
                top: 0,
                left: 0,
                overflow: "hidden",
                transform: "translate(0 0)",
                position: "absolute",
            },
        }, [].concat(content));
    }
    return null;
}
exports.getTextTemplate = getTextTemplate;
function getShapeCss(config) {
    var verticalAlign = {
        bottom: "flex-end",
        top: "flex-start",
        center: "center",
    };
    return {
        width: config.width,
        height: config.height,
        display: "flex",
        color: config.fontColor,
        "flex-direction": "column",
        "justify-content": verticalAlign[config.textVerticalAlign],
        "text-align": config.textAlign,
        "line-height": config.lineHeight,
        "font-size": config.fontSize,
        "font-style": config.fontStyle || "normal",
        "font-weight": config.fontWeight || "normal",
        "word-break": "break-word",
        "white-space": "pre-wrap",
    };
}
exports.getShapeCss = getShapeCss;
function getExpandIcon(config) {
    var open = config.open, color = config.color, position = config.position;
    var up;
    var down;
    switch (position) {
        case "top":
            up = "dxi-chevron-up";
            down = "dxi-chevron-down";
            break;
        case "bottom":
            up = "dxi-chevron-down";
            down = "dxi-chevron-up";
            break;
        case "right":
            up = "dxi-chevron-right";
            down = "dxi-chevron-left";
            break;
        case "left":
            up = "dxi-chevron-left";
            down = "dxi-chevron-right";
            break;
    }
    var currentClass = open
        ? "dxi ".concat(down, " dhx_diagram_toggle-icon dhx_diagram_toggle-icon--collapse")
        : "dxi ".concat(up, " dhx_diagram_toggle-icon dhx_diagram_toggle-icon--expand");
    return (0, dom_1.el)("div.dhx_diagram_icon", [
        (0, dom_1.el)("i", {
            class: currentClass,
            style: {
                color: color,
            },
        }),
    ]);
}
exports.getExpandIcon = getExpandIcon;
function getMenuIcon(config) {
    var dir = config.dir, color = config.color;
    var currentClass = dir === "cols" ? "dxi dxi-dots-vertical" : "dxi dxi-dots-horizontal";
    return (0, dom_1.el)("div.dhx_diagram_icon.dhx_diagram_menu_icon", [
        (0, dom_1.el)("i", {
            class: currentClass,
            style: {
                color: color,
            },
        }),
    ]);
}
exports.getMenuIcon = getMenuIcon;
function getGroupContainerStyle(config, coords) {
    var $width = config.$width, $height = config.$height, $captureArea = config.$captureArea, $group = config.$group, $selected = config.$selected, type = config.type;
    var _a = config.style, borderStyle = _a.borderStyle, strokeWidth = _a.strokeWidth, stroke = _a.stroke, overFill = _a.overFill, partiallyFill = _a.partiallyFill, fill = _a.fill;
    var zIndex = $group || $selected ? ($selected && type !== ("$sgroup" || false) ? 2 : 1) : 0;
    var background;
    switch ($captureArea) {
        case "over":
            background = overFill;
            break;
        case "partially":
            background = partiallyFill;
            break;
        default:
            background = fill;
            break;
    }
    return {
        position: "absolute",
        background: background,
        outline: "".concat(strokeWidth, "px ").concat(borderStyle, " ").concat(stroke),
        outlineOffset: -strokeWidth,
        width: $width,
        height: $height,
        top: coords.y,
        left: coords.x,
        zIndex: zIndex,
    };
}
exports.getGroupContainerStyle = getGroupContainerStyle;
function getSwimlaneBackGround(config, coords) {
    var $width = config.$width, $height = config.$height, $captureArea = config.$captureArea;
    var _a = config.style, overFill = _a.overFill, partiallyFill = _a.partiallyFill, fill = _a.fill;
    var background;
    switch ($captureArea) {
        case "over":
            background = overFill;
            break;
        case "partially":
            background = partiallyFill;
            break;
        default:
            background = fill;
            break;
    }
    return {
        position: "absolute",
        background: background,
        width: $width,
        height: $height,
        top: coords.y,
        left: coords.x,
        zIndex: -1,
    };
}
exports.getSwimlaneBackGround = getSwimlaneBackGround;
function getSwimlaneContainerStyle(config, coords) {
    var $width = config.$width, $height = config.$height, $group = config.$group, $selected = config.$selected, type = config.type;
    var _a = config.style, borderStyle = _a.borderStyle, strokeWidth = _a.strokeWidth, stroke = _a.stroke;
    var zIndex = $group || $selected ? ($selected && type !== ("$sgroup" || false) ? 2 : 1) : 0;
    return {
        position: "absolute",
        outline: "".concat(strokeWidth, "px ").concat(borderStyle, " ").concat(stroke),
        outlineOffset: -strokeWidth,
        width: $width,
        height: $height,
        top: coords.y,
        left: coords.x,
        zIndex: zIndex,
    };
}
exports.getSwimlaneContainerStyle = getSwimlaneContainerStyle;
var getTextStyle = function (config) {
    var TEXT_PADDING = 4;
    var MENU_OFFSET = 20;
    var lineHeight = config.lineHeight, textAlign = config.textAlign, textVerticalAlign = config.textVerticalAlign, fontSize = config.fontSize, fontColor = config.fontColor, fontStyle = config.fontStyle, fontWeight = config.fontWeight, _a = config.container, width = _a.width, height = _a.height;
    var align = {
        center: "center",
        left: "flex-start",
        right: "flex-end",
        bottom: "flex-end",
        top: "flex-start",
    };
    return {
        "justify-content": align[textAlign],
        "align-items": align[textVerticalAlign],
        fontStyle: fontStyle || "normal",
        fontWeight: fontWeight || "500",
        lineHeight: "".concat(parseInt(lineHeight), "px"),
        fontSize: fontSize,
        color: fontColor,
        width: typeof width === "number" ? "".concat(width - TEXT_PADDING - MENU_OFFSET, "px") : width,
        height: typeof height === "number" ? "".concat(height - TEXT_PADDING - MENU_OFFSET, "px") : height,
    };
};
exports.getTextStyle = getTextStyle;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function () {
  global = typeof window !== 'undefined' ? window : this

  var queueId = 1
  var queue = {}
  var isRunningTask = false

  if (!global.setImmediate)
    global.addEventListener('message', function (e) {
      if (e.source == global){
        if (isRunningTask)
          nextTick(queue[e.data])
        else {
          isRunningTask = true
          try {
            queue[e.data]()
          } catch (e) {}

          delete queue[e.data]
          isRunningTask = false
        }
      }
    })

  function nextTick(fn) {
    if (global.setImmediate) setImmediate(fn)
    // if inside of web worker
    else if (global.importScripts) setTimeout(fn)
    else {
      queueId++
      queue[queueId] = fn
      global.postMessage(queueId, '*')
    }
  }

  Deferred.resolve = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    if (value instanceof Deferred)
      return value

    return new Deferred(function (resolve) {
        resolve(value)
    })
  }

  Deferred.reject = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    return new Deferred(function (resolve, reject) {
        reject(value)
    })
  }

  Deferred.all = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            arr[i] = r
            done()
            return r
          }, done)
      })
    }

    done()

    return d
  }

  Deferred.race = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    if (arr.length == 0)
      return new Deferred()

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            done(null, r)
          }, done)
      })
    }

    done()

    return d
  }

  Deferred._d = 1


  /**
   * @constructor
   */
  function Deferred(resolver) {
    'use strict'
    if (typeof resolver != 'function' && resolver != undefined)
      throw TypeError()

    if (typeof this != 'object' || (this && this.then))
      throw TypeError()

    // states
    // 0: pending
    // 1: resolving
    // 2: rejecting
    // 3: resolved
    // 4: rejected
    var self = this,
      state = 0,
      val = 0,
      next = [],
      fn, er;

    self['promise'] = self

    self['resolve'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 1

        nextTick(fire)
      }
      return self
    }

    self['reject'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 2

        nextTick(fire)

      }
      return self
    }

    self['_d'] = 1

    self['then'] = function (_fn, _er) {
      if (!(this._d == 1))
        throw TypeError()

      var d = new Deferred()

      d.fn = _fn
      d.er = _er
      if (state == 3) {
        d.resolve(val)
      }
      else if (state == 4) {
        d.reject(val)
      }
      else {
        next.push(d)
      }

      return d
    }

    self['catch'] = function (_er) {
      return self['then'](null, _er)
    }

    var finish = function (type) {
      state = type || 4
      next.map(function (p) {
        state == 3 && p.resolve(val) || p.reject(val)
      })
    }

    try {
      if (typeof resolver == 'function')
        resolver(self['resolve'], self['reject'])
    } catch (e) {
      self['reject'](e)
    }

    return self

    // ref : reference to 'then' function
    // cb, ec, cn : successCallback, failureCallback, notThennableCallback
    function thennable (ref, cb, ec, cn) {
      // Promises can be rejected with other promises, which should pass through
      if (state == 2) {
        return cn()
      }
      if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
        try {

          // cnt protects against abuse calls from spec checker
          var cnt = 0
          ref.call(val, function (v) {
            if (cnt++) return
            val = v
            cb()
          }, function (v) {
            if (cnt++) return
            val = v
            ec()
          })
        } catch (e) {
          val = e
          ec()
        }
      } else {
        cn()
      }
    };

    function fire() {

      // check if it's a thenable
      var ref;
      try {
        ref = val && val.then
      } catch (e) {
        val = e
        state = 2
        return fire()
      }

      thennable(ref, function () {
        state = 1
        fire()
      }, function () {
        state = 2
        fire()
      }, function () {
        try {
          if (state == 1 && typeof fn == 'function') {
            val = fn(val)
          }

          else if (state == 2 && typeof er == 'function') {
            val = er(val)
            state = 1
          }
        } catch (e) {
          val = e
          return finish()
        }

        if (val == self) {
          val = TypeError()
          finish()
        } else thennable(ref, function () {
            finish(3)
          }, finish, function () {
            finish(state == 1 && 3)
          })

      })
    }


  }

  // Export our library object, either for node.js or as a globally scoped variable
  if (true) {
    module['exports'] = Deferred
  } else {}
})()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31), __webpack_require__(77).setImmediate))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDriver = exports.DragEvents = exports.DataEvents = exports.TreeFilterType = void 0;
var TreeFilterType;
(function (TreeFilterType) {
    TreeFilterType["all"] = "all";
    TreeFilterType["level"] = "level";
    TreeFilterType["leafs"] = "leafs";
})(TreeFilterType || (exports.TreeFilterType = TreeFilterType = {}));
var DataEvents;
(function (DataEvents) {
    DataEvents["afterAdd"] = "afteradd";
    DataEvents["beforeAdd"] = "beforeadd";
    DataEvents["removeAll"] = "removeall";
    DataEvents["beforeRemove"] = "beforeremove";
    DataEvents["afterRemove"] = "afterremove";
    DataEvents["change"] = "change";
    DataEvents["filter"] = "filter";
    DataEvents["dataRequest"] = "dataRequest";
    DataEvents["load"] = "load";
    DataEvents["loadError"] = "loaderror";
    DataEvents["beforeLazyLoad"] = "beforelazyload";
    DataEvents["afterLazyLoad"] = "afterlazyload";
    DataEvents["beforeItemLoad"] = "beforeItemLoad";
    DataEvents["afterItemLoad"] = "afterItemLoad";
})(DataEvents || (exports.DataEvents = DataEvents = {}));
var DragEvents;
(function (DragEvents) {
    DragEvents["beforeDrag"] = "beforeDrag";
    DragEvents["dragStart"] = "dragStart";
    DragEvents["dragOut"] = "dragOut";
    DragEvents["dragIn"] = "dragIn";
    DragEvents["canDrop"] = "canDrop";
    DragEvents["cancelDrop"] = "cancelDrop";
    DragEvents["beforeDrop"] = "beforeDrop";
    DragEvents["afterDrop"] = "afterDrop";
    DragEvents["afterDrag"] = "afterDrag";
})(DragEvents || (exports.DragEvents = DragEvents = {}));
var DataDriver;
(function (DataDriver) {
    DataDriver["json"] = "json";
    DataDriver["csv"] = "csv";
    DataDriver["xml"] = "xml";
})(DataDriver || (exports.DataDriver = DataDriver = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnlyPermanentFilters = exports.hasJsonOrArrayStructure = exports.isTreeCollection = exports.copyWithoutInner = exports.toDataDriver = exports.toProxy = exports.dhxError = exports.dhxWarning = exports.isDebug = exports.findByConf = exports.naturalCompare = exports.isEqualObj = void 0;
var core_1 = __webpack_require__(1);
var dataproxy_1 = __webpack_require__(22);
var drivers_1 = __webpack_require__(48);
function isEqualObj(a, b) {
    for (var key in a) {
        if (a[key] !== b[key] || Array.isArray(a[key])) {
            return false;
        }
    }
    return true;
}
exports.isEqualObj = isEqualObj;
function naturalCompare(a, b) {
    if (isNaN(a) || isNaN(b)) {
        var ax_1 = [];
        var bx_1 = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            ax_1.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            bx_1.push([$1 || Infinity, $2 || ""]);
        });
        while (ax_1.length && bx_1.length) {
            var an = ax_1.shift();
            var bn = bx_1.shift();
            var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }
        return ax_1.length - bx_1.length;
    }
    return a - b;
}
exports.naturalCompare = naturalCompare;
function findByConf(item, conf) {
    if (typeof conf === "function") {
        if (conf.call(this, item)) {
            return item;
        }
    }
    else if (conf.by && conf.match) {
        if (item[conf.by] === conf.match) {
            return item;
        }
    }
}
exports.findByConf = findByConf;
function isDebug() {
    var dhx = window.dhx;
    if (typeof dhx !== "undefined") {
        return typeof dhx.debug !== "undefined" && dhx.debug;
    }
    // return typeof DHX_DEBUG_MODE !== "undefined" && DHX_DEBUG_MODE;
}
exports.isDebug = isDebug;
function dhxWarning(msg) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
}
exports.dhxWarning = dhxWarning;
function dhxError(msg) {
    throw new Error(msg);
}
exports.dhxError = dhxError;
function toProxy(proxy) {
    var type = typeof proxy;
    if (type === "string") {
        return new dataproxy_1.DataProxy(proxy);
    }
    else if (type === "object") {
        return proxy;
    }
}
exports.toProxy = toProxy;
function toDataDriver(driver) {
    if (typeof driver === "string") {
        var dhx = window.dhx;
        var drivers = (dhx && dhx.dataDrivers) || drivers_1.dataDrivers;
        if (drivers[driver]) {
            return new drivers[driver]();
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn("Incorrect data driver type:", driver);
            // tslint:disable-next-line:no-console
            console.warn("Available types:", JSON.stringify(Object.keys(drivers)));
        }
    }
    else if (typeof driver === "object") {
        return driver;
    }
}
exports.toDataDriver = toDataDriver;
function copyWithoutInner(obj, forbidden) {
    var result = {};
    for (var key in obj) {
        if (!key.startsWith("$") && (!forbidden || !forbidden[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.copyWithoutInner = copyWithoutInner;
function isTreeCollection(obj) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return Boolean(obj.getRoot);
}
exports.isTreeCollection = isTreeCollection;
function hasJsonOrArrayStructure(str) {
    if (typeof str === "object") {
        return true;
    }
    if (typeof str !== "string") {
        return false;
    }
    try {
        var result = JSON.parse(str);
        return Object.prototype.toString.call(result) === "[object Object]" || Array.isArray(result);
    }
    catch (err) {
        return false;
    }
}
exports.hasJsonOrArrayStructure = hasJsonOrArrayStructure;
function isOnlyPermanentFilters(filters) {
    if (!filters || (0, core_1.isEmptyObj)(filters))
        return false;
    return Object.keys(filters).every(function (key) {
        var _a;
        return (_a = filters[key].config) === null || _a === void 0 ? void 0 : _a.permanent;
    });
}
exports.isOnlyPermanentFilters = isOnlyPermanentFilters;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(112), exports);
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyManager = void 0;
var FocusManager_1 = __webpack_require__(64);
var html_1 = __webpack_require__(2);
function getHotKeyCode(code) {
    var matches = code.toLowerCase().match(/\w+/g);
    var comp = 0;
    var key = "";
    for (var i = 0; i < matches.length; i++) {
        var check = matches[i];
        if (check === "ctrl") {
            comp += 4;
        }
        else if (check === "shift") {
            comp += 2;
        }
        else if (check === "alt") {
            comp += 1;
        }
        else {
            key = check;
        }
    }
    return comp + key;
}
var ie_key_map = {
    Up: "arrowUp",
    Down: "arrowDown",
    Right: "arrowRight",
    Left: "arrowLeft",
    Esc: "escape",
    Spacebar: "space",
};
var KeyManager = /** @class */ (function () {
    function KeyManager(beforeCall) {
        var _this = this;
        this._keysStorage = {};
        this._initHandler = function (e) {
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) {
                key = String.fromCharCode(e.which);
            }
            else {
                var keyName = e.which === 32 ? e.code : e.key;
                key = (0, html_1.isIE)() ? ie_key_map[keyName] || keyName : keyName;
            }
            var actions = _this._keysStorage[(e.ctrlKey || e.metaKey ? 4 : 0) +
                (e.shiftKey ? 2 : 0) +
                (e.altKey ? 1 : 0) +
                (key && key.toLowerCase())];
            if (actions) {
                for (var i = 0; i < actions.length; i++) {
                    if (_this._beforeCall && _this._beforeCall(e, FocusManager_1.focusManager.getFocusId()) === false) {
                        return;
                    }
                    actions[i].handler(e);
                }
            }
        };
        if (beforeCall) {
            this._beforeCall = beforeCall;
        }
        document.addEventListener("keydown", this._initHandler);
    }
    KeyManager.prototype.destructor = function () {
        document.removeEventListener("keydown", this._initHandler);
        this.removeHotKey();
    };
    KeyManager.prototype.addHotKey = function (key, handler) {
        var code = getHotKeyCode(key);
        if (!this._keysStorage[code]) {
            this._keysStorage[code] = [];
        }
        this._keysStorage[code].push({ handler: handler });
    };
    KeyManager.prototype.removeHotKey = function (key, handler) {
        var _this = this;
        if (key) {
            if (key && handler) {
                var code_1 = getHotKeyCode(key);
                var functionToString_1 = function (fun) {
                    return fun
                        .toString()
                        .replace(/\n/g, "")
                        .replace(/\s/g, "");
                };
                this._keysStorage[code_1].forEach(function (existHotKey, i) {
                    if (functionToString_1(existHotKey.handler) === functionToString_1(handler)) {
                        delete _this._keysStorage[code_1][i];
                        _this._keysStorage[code_1] = _this._keysStorage[code_1].filter(function (el) { return el; });
                    }
                });
            }
            else {
                var code = getHotKeyCode(key);
                delete this._keysStorage[code];
            }
        }
        else {
            this._keysStorage = {};
        }
    };
    KeyManager.prototype.exist = function (key) {
        var code = getHotKeyCode(key);
        return !!this._keysStorage[code];
    };
    KeyManager.prototype.getKeyStorageLength = function () {
        return Object.keys(this._keysStorage).length;
    };
    return KeyManager;
}());
exports.KeyManager = KeyManager;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseShape = void 0;
var BaseItem_1 = __webpack_require__(37);
var BaseShape = /** @class */ (function (_super) {
    __extends(BaseShape, _super);
    function BaseShape(config, params) {
        var _this = _super.call(this, config, params) || this;
        if (config.width) {
            config.width = parseFloat(config.width);
        }
        if (config.height) {
            config.height = parseFloat(config.height);
        }
        if (config.x) {
            config.x = parseFloat(config.x);
        }
        if (config.y) {
            config.y = parseFloat(config.y);
        }
        if (config.strokeWidth) {
            config.strokeWidth = parseFloat(config.strokeWidth);
        }
        return _this;
    }
    BaseShape.prototype.getBaseType = function () {
        return "shape";
    };
    BaseShape.prototype.getCenter = function () {
        var config = this.config;
        return {
            x: Math.abs(config.width / 2),
            y: Math.abs(config.height / 2),
        };
    };
    BaseShape.prototype.getPoint = function (x, y) {
        var config = this.config;
        if (config.angle) {
            var cx = config.x + config.width / 2;
            var cy = config.y + config.height / 2;
            var angleRad = config.angle * (Math.PI / 180);
            return {
                x: (x - cx) * Math.cos(angleRad) - (y - cy) * Math.sin(angleRad) + cx,
                y: (x - cx) * Math.sin(angleRad) + (y - cy) * Math.cos(angleRad) + cy,
            };
        }
        return { x: x, y: y };
    };
    return BaseShape;
}(BaseItem_1.BaseItem));
exports.BaseShape = BaseShape;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(109), exports);
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagramEvents = exports.DataEvents = exports.SelectionEvents = void 0;
var types_1 = __webpack_require__(29);
Object.defineProperty(exports, "SelectionEvents", { enumerable: true, get: function () { return types_1.SelectionEvents; } });
var ts_data_1 = __webpack_require__(7);
Object.defineProperty(exports, "DataEvents", { enumerable: true, get: function () { return ts_data_1.DataEvents; } });
// Diagram events
var DiagramEvents;
(function (DiagramEvents) {
    DiagramEvents["scroll"] = "scroll";
    DiagramEvents["beforeRender"] = "beforerender";
    DiagramEvents["emptyAreaClick"] = "emptyAreaClick";
    DiagramEvents["emptyAreaDblClick"] = "emptyAreaDblClick";
    DiagramEvents["emptyAreaMouseDown"] = "emptyAreaMouseDown";
    DiagramEvents["beforeSubmenuOpen"] = "beforeSubmenuOpen";
    DiagramEvents["afterSubmenuOpen"] = "afterSubmenuOpen";
    DiagramEvents["beforeCollapse"] = "beforeCollapse";
    DiagramEvents["afterCollapse"] = "afterCollapse";
    DiagramEvents["beforeExpand"] = "beforeExpand";
    DiagramEvents["afterExpand"] = "afterExpand";
    DiagramEvents["shapeMouseDown"] = "shapeMouseDown";
    DiagramEvents["shapeClick"] = "shapeClick";
    DiagramEvents["shapeDblClick"] = "shapeDblClick";
    DiagramEvents["shapeIconClick"] = "shapeIconClick";
    DiagramEvents["lineMouseDown"] = "lineMouseDown";
    DiagramEvents["lineClick"] = "lineClick";
    DiagramEvents["lineDblClick"] = "lineDblClick";
    DiagramEvents["lineTitleMouseDown"] = "lineTitleMouseDown";
    DiagramEvents["lineTitleClick"] = "lineTitleClick";
    DiagramEvents["lineTitleDblClick"] = "lineTitleDblClick";
    DiagramEvents["groupMouseDown"] = "groupMouseDown";
    DiagramEvents["groupClick"] = "groupClick";
    DiagramEvents["groupDblClick"] = "groupDblClick";
    DiagramEvents["groupHeaderClick"] = "groupHeaderClick";
    DiagramEvents["groupHeaderDblClick"] = "groupHeaderDblClick";
    DiagramEvents["itemMouseDown"] = "itemMouseDown";
    DiagramEvents["itemClick"] = "itemClick";
    DiagramEvents["itemDblClick"] = "itemDblClick";
    DiagramEvents["itemMouseOver"] = "itemMouseOver";
    DiagramEvents["itemMouseOut"] = "itemMouseOut";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    DiagramEvents["shapeHover"] = "shapeHover";
})(DiagramEvents || (exports.DiagramEvents = DiagramEvents = {}));


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(84), exports);
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProxy = void 0;
var ajax_1 = __webpack_require__(33);
var DataProxy = /** @class */ (function () {
    function DataProxy(url, config) {
        if (config === void 0) { config = {}; }
        this.url = this._url = url;
        this.config = config;
    }
    DataProxy.prototype.updateUrl = function (url, params) {
        if (params === void 0) { params = {}; }
        this._url = this.url = url || this._url;
        this.url += this.url.includes("?") ? "&" : "?";
        for (var param in params) {
            this.config[param] = params[param];
            this.url += "".concat(param, "=").concat(encodeURIComponent(params[param]), "&");
        }
        this.url = this.url.slice(0, -1);
    };
    DataProxy.prototype.load = function () {
        return ajax_1.ajax.get(this.url, undefined, this.config);
    };
    DataProxy.prototype.save = function (data, mode) {
        switch (mode) {
            case "delete":
                return ajax_1.ajax.delete(this.url, data, this.config);
            case "update":
                return ajax_1.ajax.put(this.url, data, this.config);
            case "insert":
            default:
                return ajax_1.ajax.post(this.url, data, this.config);
        }
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNavbarButtonCSS = exports.navbarComponentMixin = exports.getIcon = exports.getCount = void 0;
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
function getCount(item, widgetClass, isLimited) {
    var countColor = {
        danger: " dhx_navbar-count--color_danger",
        secondary: " dhx_navbar-count--color_secondary",
        primary: " dhx_navbar-count--color_primary",
        success: " dhx_navbar-count--color_success",
    }[item.countColor] || " dhx_navbar-count--color_danger";
    return (0, dom_1.el)(".dhx_navbar-count", {
        class: widgetClass +
            countColor +
            (!isLimited && parseInt(item.count, 10) > 99 ? " dhx_navbar-count--overlimit" : ""),
    }, isLimited && parseInt(item.count, 10) > 99 ? "99+" : item.count);
}
exports.getCount = getCount;
function getIcon(iconName, type) {
    if (iconName === void 0) { iconName = ""; }
    if (iconName.startsWith("dxi")) {
        iconName = "dxi " + iconName;
    }
    return (0, dom_1.el)("span", {
        class: "dhx_".concat(type, "__icon ").concat(iconName),
        "aria-hidden": "true",
    });
}
exports.getIcon = getIcon;
var getNavbarItemClass = function (widgetName, item, asMenuItem) {
    var baseClassName = "";
    var resultClassName = "";
    if (asMenuItem) {
        baseClassName = "dhx_menu-item";
    }
    else {
        baseClassName = "dhx_" + widgetName + "__item";
    }
    resultClassName = baseClassName + (item.css ? " " + item.css : "");
    if (item.type === "spacer" || item.type === "separator") {
        resultClassName += " ".concat(baseClassName, "--").concat(item.type);
    }
    if (item.type === "button" && widgetName === "sidebar" && !item.icon) {
        resultClassName += " dhx_navbar-item--colapse_hidden";
    }
    return resultClassName;
};
function navbarComponentMixin(widgetName, item, asMenuItem, body) {
    var getAriaAttrs = function (type) {
        var attrs = {
            role: "none",
        };
        if (type === "separator") {
            attrs.role = "separator";
            attrs["aria-orientation"] = "vertical";
        }
        return attrs;
    };
    var itemClass = getNavbarItemClass(widgetName, item, asMenuItem);
    var hasRibbonSize = widgetName === "ribbon" && (item.type === "navItem" || item.type === "imageButton");
    return (0, dom_1.el)("li", __assign({ _key: item.id, class: itemClass +
            (item.icon && !item.value && hasRibbonSize ? " dhx_ribbon__item--icon" : "") +
            (item.src && !item.value && hasRibbonSize ? " dhx_ribbon__item--icon" : "") +
            (item.size && hasRibbonSize ? " dhx_ribbon__item--" + item.size : ""), ".innerHTML": item.type === "customHTML" ? item.html : undefined, "data-dhx-id": item.type === "customHTML" ? item.id : undefined }, getAriaAttrs(item.type)), item.type !== "customHTML" ? [body] : undefined);
}
exports.navbarComponentMixin = navbarComponentMixin;
function getNavbarButtonCSS(_a, widgetName) {
    var color = _a.color, size = _a.size, view = _a.view, full = _a.full, icon = _a.icon, circle = _a.circle, loading = _a.loading, value = _a.value, active = _a.active, count = _a.count;
    var colorsCss = {
        danger: " dhx_button--color_danger",
        secondary: " dhx_button--color_secondary",
        primary: " dhx_button--color_primary",
        success: " dhx_button--color_success",
    }[color] || " dhx_button--color_primary";
    var sizeCss = {
        small: " dhx_button--size_small",
        medium: " dhx_button--size_medium",
    }[size] || " dhx_button--size_medium";
    var viewCss = {
        flat: " dhx_button--view_flat",
        link: " dhx_button--view_link",
    }[view] || " dhx_button--view_flat";
    var fullCss = full ? " dhx_button--width_full" : "";
    var circleCss = circle ? " dhx_button--circle" : "";
    var loadingCss = loading ? " dhx_button--loading" : "";
    var iconViewCss = icon && !value ? " dhx_button--icon" : "";
    var activeCss = active ? " dhx_button--active" : "";
    var countCss = (0, core_1.isDefined)(count) ? " dhx_button--count" : "";
    return (colorsCss + sizeCss + viewCss + fullCss + circleCss + loadingCss + activeCss + iconViewCss + countCss);
}
exports.getNavbarButtonCSS = getNavbarButtonCSS;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationBarEvents = exports.DataEvents = void 0;
var ts_data_1 = __webpack_require__(7);
Object.defineProperty(exports, "DataEvents", { enumerable: true, get: function () { return ts_data_1.DataEvents; } });
var NavigationBarEvents;
(function (NavigationBarEvents) {
    NavigationBarEvents["inputCreated"] = "inputCreated";
    NavigationBarEvents["click"] = "click";
    NavigationBarEvents["openMenu"] = "openMenu";
    NavigationBarEvents["beforeHide"] = "beforeHide";
    NavigationBarEvents["afterHide"] = "afterHide";
    NavigationBarEvents["inputFocus"] = "inputFocus";
    NavigationBarEvents["inputBlur"] = "inputBlur";
    NavigationBarEvents["inputChange"] = "inputChange";
    NavigationBarEvents["input"] = "input";
    NavigationBarEvents["keydown"] = "keydown";
})(NavigationBarEvents || (exports.NavigationBarEvents = NavigationBarEvents = {}));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.directLinkPath = exports.nearestLinkPath = void 0;
function getConnectionPoint(shape, gap, side) {
    var x = shape.x;
    var y = shape.y;
    switch (side) {
        case "top":
            return shape.$item.getPoint(x + shape.width / 2, y - gap);
        case "bottom":
            return shape.$item.getPoint(x + shape.width / 2, y + shape.height + gap);
        case "left":
            return shape.$item.getPoint(x - gap, y + shape.height / 2);
        case "right":
            return shape.$item.getPoint(x + shape.width + gap, y + shape.height / 2);
        case "center":
            return shape.$item.getPoint(x + shape.width / 2, y + shape.height / 2);
    }
}
function getLength(from, to) {
    var x = to.x - from.x;
    var y = to.y - from.y;
    return Math.sqrt(x * x + y * y);
}
function getRoundedCorners(na, nb, aa, bb, turn, radius) {
    if (radius === void 0) { radius = 10; }
    if (!turn) {
        var byY = aa.y === bb.y ? +radius : 0;
        var byX = aa.x === bb.x ? +radius : 0;
        return [
            na,
            { x1: aa.x, y1: aa.y, x: aa.x + byY, y: aa.y + byX },
            { x: bb.x - byY, y: bb.y - byX },
            { x1: bb.x, y1: bb.y, x: nb.x, y: nb.y },
        ];
    }
    var bdX = bb.x < turn.x ? -1 : 1;
    var bdY = bb.y < turn.y ? -1 : 1;
    var adX = aa.x > turn.x ? 1 : -1;
    var adY = aa.y > turn.y ? 1 : -1;
    var before = __assign({}, turn);
    var after = __assign({}, bb);
    var curvedTurn = {
        x1: turn.x,
        y1: turn.y,
        x: turn.x,
        y: turn.y + radius * bdY,
    };
    if (aa.x === turn.x) {
        before.y += radius * adY;
        after.x -= radius * bdX;
        curvedTurn = {
            x1: turn.x,
            y1: turn.y,
            x: turn.x + radius * bdX,
            y: turn.y,
        };
    }
    if (aa.y === turn.y) {
        before.x += radius * adX;
        after.y -= radius * bdY;
        curvedTurn = {
            x1: turn.x,
            y1: turn.y,
            x: turn.x,
            y: turn.y + radius * bdY,
        };
    }
    return [na, aa, before, curvedTurn, after, { x1: bb.x, y1: bb.y, x: nb.x, y: nb.y }];
}
function getCurvedLine(na, nb, turn) {
    return [na, { x1: turn.x, y1: turn.y, x: nb.x, y: nb.y }];
}
var SIDES = ["top", "bottom", "right", "left", "center"];
function getRoutePoints(link, from, to, gap, customGap, fromSide, toSide) {
    if (fromSide === void 0) { fromSide = ""; }
    if (toSide === void 0) { toSide = ""; }
    // start points from shape border
    var borderFrom;
    var borderTo;
    // start points with gaps
    var gapFrom;
    var gapTo;
    var toGapValue = customGap && customGap > gap ? customGap : gap || 0;
    if (fromSide === "center" && toSide === "center") {
        return [
            { x: from.x + from.width / 2, y: from.y + from.height / 2 },
            { x: to.x + to.width / 2, y: to.y + to.height / 2 },
        ];
    }
    if (fromSide) {
        borderFrom = getConnectionPoint(from, 0, fromSide);
        gapFrom = getConnectionPoint(from, gap, fromSide);
    }
    if (toSide) {
        borderTo = getConnectionPoint(to, 0, toSide);
        gapTo = getConnectionPoint(to, toGapValue, toSide);
    }
    if (!fromSide || !toSide) {
        var closestPoints = SIDES.map(function (sideFrom) {
            var fromPoint = getConnectionPoint(from, gap, sideFrom);
            return SIDES.map(function (sideTo) {
                var toPoint = getConnectionPoint(to, toGapValue, sideTo);
                var distance = getLength(fromPoint, toPoint);
                return [fromPoint, toPoint, distance, sideFrom, sideTo];
            }).sort(function (l, r) { return l[2] - r[2]; })[0];
        }).sort(function (l, r) { return l[2] - r[2]; })[0];
        gapFrom = closestPoints[0];
        gapTo = closestPoints[1];
        fromSide = closestPoints[3];
        toSide = closestPoints[4];
        link.fromSide = fromSide;
        link.toSide = toSide;
        borderFrom = getConnectionPoint(from, 0, fromSide);
        borderTo = getConnectionPoint(to, 0, toSide);
    }
    var sidesDistance = (fromSide === "bottom" && toSide === "top") || (fromSide === "top" && toSide === "bottom")
        ? Math.abs(borderTo.y - borderFrom.y)
        : 0;
    sidesDistance =
        sidesDistance ||
            ((fromSide === "left" && toSide === "right") || (fromSide === "right" && toSide === "left")
                ? Math.abs(borderTo.x - borderFrom.x)
                : 0);
    // if we reached the gap limit
    if (sidesDistance > 0 && toGapValue + gap >= sidesDistance) {
        toGapValue = sidesDistance - gap;
        gapTo = getConnectionPoint(to, toGapValue, toSide);
    }
    var points = [];
    // preffer simple line form
    if (gapFrom.x === gapTo.x || gapFrom.y === gapTo.y) {
        if ((borderFrom.x === gapFrom.x && gapFrom.x === borderTo.x) ||
            (borderFrom.y === gapFrom.y && gapFrom.y === borderTo.y)) {
            // straight line
            points = [borderFrom, borderTo];
        }
        else {
            // line without central turn point
            points = [borderFrom, gapFrom, gapTo, borderTo];
            if (link.cornersRadius && link.connectType !== "straight") {
                points = getRoundedCorners(borderFrom, borderTo, gapFrom, gapTo, null, link.cornersRadius);
            }
        }
    }
    else {
        // most complex line form, with central turn
        var isLeftCollision = gapFrom.x < borderFrom.x && gapFrom.x < gapTo.x;
        var isBottomCollision = gapFrom.y > borderFrom.y && gapFrom.y > gapTo.y;
        var turn = borderFrom.x !== gapFrom.x && !isLeftCollision
            ? { x: gapTo.x, y: gapFrom.y }
            : { x: gapFrom.x, y: gapTo.y };
        turn = isBottomCollision ? { x: gapTo.x, y: gapFrom.y } : turn;
        if (link.connectType === "flex") {
            points = getCurvedLine(borderFrom, borderTo, turn);
        }
        else if (link.cornersRadius && link.connectType !== "straight") {
            points = getRoundedCorners(borderFrom, borderTo, gapFrom, gapTo, turn, link.cornersRadius);
        }
        else {
            points = [borderFrom, gapFrom, turn, gapTo, borderTo];
        }
    }
    return points;
}
// For Diagram.ts!!!
function nearestLinkPath(link, from, to, config) {
    var _a;
    if (!from || !to) {
        return;
    }
    var points = getRoutePoints(link, from, to, ((_a = config === null || config === void 0 ? void 0 : config.lineConfig) === null || _a === void 0 ? void 0 : _a.lineGap) || 0, link.customGap, link.fromSide, link.toSide);
    if (link.connectType === "straight") {
        return (link.points = [points[0], points[points.length - 1]]);
    }
    if (link.points) {
        // without additional points
        if (link.points.length === points.length) {
            link.points = link.points.map(function (p, i) {
                if (p && points[i] && !p.custom) {
                    return points[i];
                }
                return p;
            });
        }
        else {
            var custom = link.points.filter(function (p) { return p.custom; });
            link.points = custom.length ? link.points : points;
        }
        if (!link.$move) {
            link.points[0] = points[0];
            link.points[link.points.length - 1] = points[points.length - 1];
        }
    }
    else {
        link.points = points;
    }
}
exports.nearestLinkPath = nearestLinkPath;
// For placement helper
function directLinkPath(link, from, to, config) {
    var _a, _b;
    if (!link && from.assistant && from.partner) {
        return;
    }
    var x1 = from.x + (from.dx || 0);
    var y1 = from.y + (from.dy || 0);
    var x2 = to.x + (to.dx || 0);
    var y2 = to.y + (to.dy || 0);
    if ((from.dir && from.dir.includes("vertical")) || Array.isArray(from.dir)) {
        var sx = x1;
        var sy = Math.round(y1 + from.height / 2);
        var ex = x2;
        var ey = Math.round(y2 + to.height / 2);
        var gap = -Math.round(config.margin.itemX / 2) + 0.5;
        if (from.dir === "vertical") {
            // from right-middle to right middle
            link.points = [
                { x: sx, y: sy },
                { x: sx + gap, y: sy },
                { x: sx + gap, y: ey },
                { x: ex, y: ey },
            ];
        }
        if (from.dir === "verticalLeft" || (Array.isArray(from.dir) && from.dir.includes("verticalLeft"))) {
            // from left-middle to right-middle
            link.points = [
                { x: sx, y: sy },
                { x: sx + gap, y: sy },
                { x: sx + gap, y: ey },
                { x: ex + to.width, y: ey },
            ];
        }
        if (from.dir === "verticalRight" || (Array.isArray(from.dir) && from.dir.includes("verticalRight"))) {
            // from right-middle to left-middle
            link.points = [
                { x: sx + from.width, y: sy },
                { x: sx + from.width - gap, y: sy },
                { x: sx + from.width - gap, y: ey },
                { x: ex, y: ey },
            ];
        }
    }
    else {
        var sx = Math.round(x1 + from.width / 2);
        var sy = y1 + from.height;
        var ex = x2 + (to.$even ? 0 : to.width);
        var ey = Math.round(y2 + to.height / 2);
        if (to.partner) {
            var sx_1 = to.$even ? x1 + from.width : x1;
            var sy_1 = Math.round(y1 + from.height / 2);
            var gap_1 = Math.round(config.margin.itemX / 2);
            gap_1 = to.$even ? gap_1 : -gap_1;
            // from midle-right/left to midle-right/left
            link.points = [
                { x: sx_1, y: sy_1 },
                { x: sx_1 + gap_1, y: sy_1 },
                { x: sx_1 + gap_1, y: ey },
                { x: ex, y: ey },
            ];
            return;
        }
        if (to.assistant) {
            if (((_a = from === null || from === void 0 ? void 0 : from.$partners) === null || _a === void 0 ? void 0 : _a.common.length) === 1) {
                var sx_2 = x1;
                var sy_2 = Math.round(y1 + from.height / 2);
                var gap_2 = Math.round(config.margin.itemX / 2);
                link.points = [
                    { x: sx_2, y: sy_2 },
                    { x: sx_2 - gap_2, y: sy_2 },
                    { x: sx_2 - gap_2, y: ey },
                    { x: ex, y: ey },
                ];
                return;
            }
            // from bottom-center to right-center or left-center
            link.points = [
                { x: sx, y: sy },
                { x: sx, y: sy },
                { x: sx, y: ey },
                { x: ex, y: ey },
            ];
            return;
        }
        ex = Math.round(x2 + to.width / 2);
        ey = y2;
        var gap = from.$height - (from.$baseHeight + from.height) / 2;
        if (((_b = from === null || from === void 0 ? void 0 : from.$partners) === null || _b === void 0 ? void 0 : _b.common.length) === 1) {
            var sx_3 = Math.round(x1 - config.margin.itemX / 2);
            link.points = [
                { x: sx_3, y: sy - from.height / 2 },
                { x: sx_3, y: sy + gap },
                { x: ex, y: sy + gap },
                { x: ex, y: ey },
            ];
            return;
        }
        // from bottom-center to top-center
        link.points = [
            { x: sx, y: sy },
            { x: sx, y: sy + gap },
            { x: ex, y: sy + gap },
            { x: ex, y: ey },
        ];
    }
}
exports.directLinkPath = directLinkPath;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPathLength = exports.addLineTitle = exports.getDistanceEblowLine = exports.getDistancePercentage = exports.getDistanceFactor = exports.getLinePercentage = exports.getLineLength = exports.getLineAngle = exports.getNearPointStraightLine = void 0;
var ts_diagram_1 = __webpack_require__(30);
function getNearPointStraightLine(sp, ep, cp) {
    var X1 = sp.x, Y1 = sp.y;
    var X2 = ep.x, Y2 = ep.y;
    var X3 = cp.x, Y3 = cp.y;
    if (X1 === X2)
        return {
            x: X1,
            y: Y3,
        };
    if (Y1 === Y2)
        return {
            x: X3,
            y: Y1,
        };
    var M1 = (Y2 - Y1) / (X2 - X1);
    var M2 = -1 / M1;
    var X = (M1 * X1 - M2 * X3 + Y3 - Y1) / (M1 - M2);
    var Y = M2 * (X - X3) + Y3;
    return {
        x: X,
        y: Y,
    };
}
exports.getNearPointStraightLine = getNearPointStraightLine;
function getLineAngle(sp, ep) {
    var X1 = sp.x, Y1 = sp.y;
    var X2 = ep.x, Y2 = ep.y;
    return Math.atan((Y2 - Y1) / (X2 - X1)) * (180 / Math.PI);
}
exports.getLineAngle = getLineAngle;
function getLineLength(sp, ep) {
    var X1 = sp.x, Y1 = sp.y;
    var X2 = ep.x, Y2 = ep.y;
    return Math.sqrt((X2 - X1) * (X2 - X1) + (Y2 - Y1) * (Y2 - Y1));
}
exports.getLineLength = getLineLength;
function getLinePercentage(sp, ep, cp) {
    var fullLength = getLineLength(sp, ep);
    var partLength = getLineLength(sp, cp);
    return partLength <= fullLength ? partLength / fullLength : fullLength / partLength;
}
exports.getLinePercentage = getLinePercentage;
function getDistanceFactor(distance) {
    if (distance === void 0) { distance = 50; }
    if (typeof distance === "string") {
        distance = parseFloat(distance);
    }
    if (distance >= 100)
        return 1;
    if (distance <= 0)
        return 0;
    return distance / 100;
}
exports.getDistanceFactor = getDistanceFactor;
function getDistancePercentage(factor) {
    return factor * 100;
}
exports.getDistancePercentage = getDistancePercentage;
function getDistanceEblowLine(line, cp) {
    var _a, _b;
    var points = line.points;
    var nodeLength = [];
    var minDistance = +Infinity;
    var totalLength = 0;
    var tailLength = 0;
    var tailIndex = 0;
    for (var index = 0; index < points.length - 1; index++) {
        var sp = points[index];
        var ep = points[index + 1];
        var lp = getNearPointStraightLine(sp, ep, cp);
        var nearDistance = getLineLength(lp, cp);
        var lineLength = getLineLength(sp, ep);
        totalLength += lineLength;
        nodeLength.push(lineLength);
        var X1 = sp.x, Y1 = sp.y;
        var X2 = ep.x, Y2 = ep.y;
        var X3 = lp.x, Y3 = lp.y;
        if (X1 > X2) {
            _a = [X2, X1], X1 = _a[0], X2 = _a[1];
        }
        if (Y1 > Y2) {
            _b = [Y2, Y1], Y1 = _b[0], Y2 = _b[1];
        }
        var XColl = X2 >= X3 && X1 <= X3;
        var YColl = Y2 >= Y3 && Y1 <= Y3;
        if (nearDistance <= minDistance && XColl && YColl) {
            minDistance = nearDistance;
            tailLength = getLineLength(sp, lp);
            tailIndex = index;
        }
    }
    var currentLength = 0;
    if (tailIndex !== 0) {
        for (var index = 0; index < tailIndex; index++) {
            currentLength += nodeLength[index];
        }
    }
    currentLength += tailLength;
    return (currentLength / totalLength) * 100;
}
exports.getDistanceEblowLine = getDistanceEblowLine;
function addLineTitle(line, diagram) {
    var _a;
    var points = line.points;
    var cp = diagram._lastItemClickCoords;
    var distance = 50;
    if (line.connectType === "straight" || points.length === 2) {
        var sp = points[0];
        var ep = points[points.length - 1];
        var lp = getNearPointStraightLine(sp, ep, cp);
        var factor = getLinePercentage(sp, ep, lp);
        distance = getDistancePercentage(factor);
    }
    else {
        distance = getDistanceEblowLine(line, cp);
    }
    var titleId = diagram.data.add({
        type: "lineTitle",
        text: ts_diagram_1.locale.text,
        distance: distance,
        parent: line.id,
    });
    diagram.selection.add({ id: titleId });
    var item = (_a = diagram.data.getItem(titleId)) === null || _a === void 0 ? void 0 : _a.$item;
    if (item && item.isEditable() && diagram.editor.openEditor(titleId, "text")) {
        item.setEditorNode(diagram.editor.render(), "text");
    }
}
exports.addLineTitle = addLineTitle;
function calcPathLength(data) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", data);
    return path.getTotalLength();
}
exports.calcPathLength = calcPathLength;


/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(85), exports);
__exportStar(__webpack_require__(95), exports);
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionEvents = void 0;
var SelectionEvents;
(function (SelectionEvents) {
    SelectionEvents["beforeUnSelect"] = "beforeunselect";
    SelectionEvents["afterUnSelect"] = "afterunselect";
    SelectionEvents["beforeSelect"] = "beforeselect";
    SelectionEvents["afterSelect"] = "afterselect";
})(SelectionEvents || (exports.SelectionEvents = SelectionEvents = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shapes = exports.locale = exports.ShapesCollection = void 0;
__exportStar(__webpack_require__(44), exports);
var ShapesCollection_1 = __webpack_require__(58);
Object.defineProperty(exports, "ShapesCollection", { enumerable: true, get: function () { return ShapesCollection_1.ShapesCollection; } });
var en_1 = __webpack_require__(40);
Object.defineProperty(exports, "locale", { enumerable: true, get: function () { return en_1.default; } });
__exportStar(__webpack_require__(18), exports);
var shapeFactory_1 = __webpack_require__(43);
Object.defineProperty(exports, "shapes", { enumerable: true, get: function () { return shapeFactory_1.shapes; } });
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContainerPosition = exports.Position = exports.RealPosition = void 0;
var RealPosition;
(function (RealPosition) {
    RealPosition["left"] = "left";
    RealPosition["right"] = "right";
    RealPosition["top"] = "top";
    RealPosition["bottom"] = "bottom";
    RealPosition["center"] = "center";
})(RealPosition || (exports.RealPosition = RealPosition = {}));
var Position;
(function (Position) {
    Position["right"] = "right";
    Position["bottom"] = "bottom";
    Position["center"] = "center";
    Position["left"] = "left";
    Position["top"] = "top";
})(Position || (exports.Position = Position = {}));
var MessageContainerPosition;
(function (MessageContainerPosition) {
    MessageContainerPosition["topLeft"] = "top-left";
    MessageContainerPosition["topRight"] = "top-right";
    MessageContainerPosition["bottomLeft"] = "bottom-left";
    MessageContainerPosition["bottomRight"] = "bottom-right";
})(MessageContainerPosition || (exports.MessageContainerPosition = MessageContainerPosition = {}));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajax = void 0;
var types_1 = __webpack_require__(10);
var helpers_1 = __webpack_require__(11);
function toQueryString(data) {
    return Object.keys(data)
        .reduce(function (entries, key) {
        var value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        entries.push(key + "=" + encodeURIComponent(value));
        return entries;
    }, [])
        .join("&");
}
function inferResponseType(contentType) {
    if (!contentType) {
        return "text";
    }
    if (contentType.includes("json")) {
        return "json";
    }
    if (contentType.includes("xml")) {
        return "xml";
    }
    return "text";
}
function send(url, data, method, headers, responseType) {
    function parseResponse(responseText, genResponseType) {
        switch (genResponseType) {
            case "json": {
                return JSON.parse(responseText);
            }
            case "text": {
                return responseText;
            }
            case "xml": {
                var driver = (0, helpers_1.toDataDriver)(types_1.DataDriver.xml);
                if (driver) {
                    return driver.toJsonObject(responseText);
                }
                else {
                    return { parseError: "Incorrect data driver type: 'xml'" };
                }
            }
            default: {
                return responseText;
            }
        }
    }
    var allHeaders = headers || {};
    if (responseType) {
        allHeaders.Accept = "application/" + responseType;
    }
    if (method !== "GET") {
        allHeaders["Content-Type"] = allHeaders["Content-Type"] || "application/json";
    }
    if (method === "GET") {
        var urlData = data && typeof data === "object"
            ? toQueryString(data)
            : data && typeof data === "string"
                ? data
                : "";
        if (urlData) {
            url += !url.includes("?") ? "?" : "&";
            url += urlData;
        }
        data = null;
    }
    if (!window.fetch) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (responseType === "raw") {
                        resolve({
                            url: xhr.responseURL,
                            headers: xhr
                                .getAllResponseHeaders()
                                .trim()
                                .split(/[\r\n]+/)
                                .reduce(function (acc, cur) {
                                var kv = cur.split(": ");
                                acc[kv[0]] = kv[1];
                                return acc;
                            }, {}),
                            body: xhr.response,
                        });
                    }
                    if (xhr.status === 204) {
                        resolve();
                    }
                    else {
                        resolve(parseResponse(xhr.responseText, responseType || inferResponseType(xhr.getResponseHeader("Content-Type"))));
                    }
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText,
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                    message: xhr.responseText,
                });
            };
            xhr.open(method, url);
            for (var headerKey in allHeaders) {
                xhr.setRequestHeader(headerKey, allHeaders[headerKey]);
            }
            switch (method) {
                case "POST":
                case "DELETE":
                case "PUT":
                    xhr.send(data !== undefined ? JSON.stringify(data) : "");
                    break;
                case "GET":
                    xhr.send();
                    break;
                default:
                    xhr.send();
                    break;
            }
        });
    }
    else {
        var isJson = allHeaders["Content-Type"] === "application/json";
        if (isJson && data && typeof data === "object") {
            data = JSON.stringify(data);
        }
        return window
            .fetch(url, {
            method: method,
            body: data || null,
            headers: allHeaders,
        })
            .then(function (response) {
            if (response.ok) {
                var genResponseType = responseType || inferResponseType(response.headers.get("Content-Type"));
                if (genResponseType === "raw") {
                    return {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        headers: Object.fromEntries(response.headers.entries()),
                        url: response.url,
                        body: response.body,
                    };
                }
                if (response.status !== 204) {
                    switch (genResponseType) {
                        case "json": {
                            return response.json();
                        }
                        case "xml": {
                            var driver_1 = (0, helpers_1.toDataDriver)(types_1.DataDriver.xml);
                            if (driver_1) {
                                return response.text().then(function (xmlData) { return driver_1.toJsonObject(xmlData); });
                            }
                            else {
                                return response.text();
                            }
                        }
                        default:
                            return response.text();
                    }
                }
            }
            else {
                return response.text().then(function (message) {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                        message: message,
                    });
                });
            }
        });
    }
}
exports.ajax = {
    get: function (url, data, config) {
        return send(url, data, "GET", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    post: function (url, data, config) {
        return send(url, data, "POST", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    put: function (url, data, config) {
        return send(url, data, "PUT", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    delete: function (url, data, config) {
        return send(url, data, "DELETE", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var types_1 = __webpack_require__(35);
var Cell_1 = __webpack_require__(51);
var dom_1 = __webpack_require__(0);
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        // root layout
        _this._root = _this.config.parent || _this;
        _this._all = {};
        _this._parseConfig();
        _this._progress = false;
        if (_this.config.activeTab) {
            _this.config.activeView = _this.config.activeTab;
        }
        // Need replace to tabbar
        if (_this.config.views) {
            _this.config.activeView = _this.config.activeView || _this._cells[0].id;
            _this._isViewLayout = true;
        }
        if (!config.parent) {
            var view = (0, dom_1.create)({ render: function () { return _this._root && _this.toVDOM(); } }, _this);
            _this.mount(parent, view);
        }
        return _this;
    }
    Layout.prototype.destructor = function () {
        this.unmount();
        if (this.config) {
            for (var _i = 0, _a = this._cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                cell === null || cell === void 0 ? void 0 : cell.destructor();
            }
            this.config = this._cells = this._root = this._xLayout = this._isViewLayout = null;
            this._all = {};
        }
    };
    Layout.prototype.toVDOM = function () {
        var _a;
        if (this._isViewLayout) {
            var roots = [this.getCell(this.config.activeView).toVDOM()];
            return _super.prototype.toVDOM.call(this, roots);
        }
        var nodes = [];
        this._inheritTypes();
        (_a = this._cells) === null || _a === void 0 ? void 0 : _a.forEach(function (cell) {
            var node = cell.toVDOM();
            if (Array.isArray(node)) {
                nodes = nodes.concat(node);
            }
            else {
                nodes.push(node);
            }
        });
        return _super.prototype.toVDOM.call(this, nodes);
    };
    Layout.prototype.removeCell = function (id) {
        if (!this.events.fire(types_1.LayoutEvents.beforeRemove, [id])) {
            return;
        }
        var root = this.config.parent || this;
        if (root !== this) {
            root.removeCell(id);
            return;
        }
        // this === root layout
        var view = this.getCell(id);
        if (view) {
            var parent_1 = view.getParent();
            delete this._all[id];
            parent_1._cells = parent_1._cells.filter(function (cell) { return cell.id != id; });
            parent_1.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterRemove, [id]);
    };
    Layout.prototype.addCell = function (config, index) {
        if (index === void 0) { index = -1; }
        if (!this.events.fire(types_1.LayoutEvents.beforeAdd, [config.id])) {
            return;
        }
        var view = this._createCell(config);
        if (index < 0) {
            index = this._cells.length + index + 1;
        }
        this._cells.splice(index, 0, view);
        this.paint();
        if (!this.events.fire(types_1.LayoutEvents.afterAdd, [config.id])) {
            return;
        }
    };
    Layout.prototype.getId = function (index) {
        if (index < 0) {
            index = this._cells.length + index;
        }
        return this._cells[index] ? this._cells[index].id : undefined;
    };
    Layout.prototype.getRefs = function (name) {
        var _a;
        return (_a = this._root.getRootView().refs) === null || _a === void 0 ? void 0 : _a[name];
    };
    Layout.prototype.getCell = function (id) {
        var _a;
        return (_a = this._root) === null || _a === void 0 ? void 0 : _a._all[id];
    };
    Layout.prototype.forEach = function (callback, parent, level) {
        if (level === void 0) { level = Infinity; }
        if (!this._haveCells(parent) || level < 1) {
            return;
        }
        var array;
        if (parent) {
            array = this._root._all[parent]._cells;
        }
        else {
            array = this._root._cells;
        }
        for (var index = 0; index < array.length; index++) {
            var cell = array[index];
            callback.call(this, cell, index, array);
            if (this._haveCells(cell.id)) {
                cell.forEach(callback, cell.id, --level);
            }
        }
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Layout.prototype.cell = function (id) {
        return this.getCell(id);
    };
    Layout.prototype.progressShow = function () {
        this._progress = true;
        this.paint();
    };
    Layout.prototype.progressHide = function () {
        this._progress = false;
        this.paint();
    };
    Layout.prototype._getCss = function (content) {
        var layoutCss = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows";
        var directionCss = this.config.align ? " " + layoutCss + "--" + this.config.align : "";
        if (content) {
            return (layoutCss +
                " dhx_layout-cell" +
                (this.config.align ? " dhx_layout-cell--" + this.config.align : ""));
        }
        else {
            var cellCss = this.config.parent ? _super.prototype._getCss.call(this) : "dhx_widget dhx_layout";
            var fullModeCss = this.config.parent ? "" : " dhx_layout-cell";
            return cellCss + (this.config.full ? fullModeCss : " " + layoutCss) + directionCss;
        }
    };
    Layout.prototype._parseConfig = function () {
        var _this = this;
        var config = this.config;
        var cells = config.rows || config.cols || config.views || [];
        this._xLayout = !config.rows;
        this._cells = cells.map(function (a) { return _this._createCell(a); });
    };
    Layout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new Layout(this, cell);
        }
        else {
            view = new Cell_1.Cell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        if (cell.init) {
            cell.init(view, cell);
        }
        return view;
    };
    Layout.prototype._haveCells = function (id) {
        if (id) {
            var array = this._root._all[id];
            return array._cells && array._cells.length > 0;
        }
        return Object.keys(this._all).length > 0;
    };
    Layout.prototype._inheritTypes = function (obj) {
        var _this = this;
        if (obj === void 0) { obj = this._cells; }
        if (Array.isArray(obj)) {
            obj.forEach(function (cell) { return _this._inheritTypes(cell); });
        }
        else {
            var cellConfig = obj === null || obj === void 0 ? void 0 : obj.config;
            if ((cellConfig === null || cellConfig === void 0 ? void 0 : cellConfig.rows) || (cellConfig === null || cellConfig === void 0 ? void 0 : cellConfig.cols)) {
                var viewParent = obj.getParent();
                if (!cellConfig.type && viewParent) {
                    if (viewParent.config.type) {
                        cellConfig.type = viewParent.config.type;
                    }
                    else {
                        this._inheritTypes(viewParent);
                    }
                }
            }
        }
    };
    return Layout;
}(Cell_1.Cell));
exports.Layout = Layout;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutEvents = void 0;
var LayoutEvents;
(function (LayoutEvents) {
    LayoutEvents["beforeShow"] = "beforeShow";
    LayoutEvents["afterShow"] = "afterShow";
    LayoutEvents["beforeHide"] = "beforeHide";
    LayoutEvents["afterHide"] = "afterHide";
    LayoutEvents["beforeResizeStart"] = "beforeResizeStart";
    LayoutEvents["resize"] = "resize";
    LayoutEvents["afterResizeEnd"] = "afterResizeEnd";
    LayoutEvents["beforeAdd"] = "beforeAdd";
    LayoutEvents["afterAdd"] = "afterAdd";
    LayoutEvents["beforeRemove"] = "beforeRemove";
    LayoutEvents["afterRemove"] = "afterRemove";
    LayoutEvents["beforeCollapse"] = "beforeCollapse";
    LayoutEvents["afterCollapse"] = "afterCollapse";
    LayoutEvents["beforeExpand"] = "beforeExpand";
    LayoutEvents["afterExpand"] = "afterExpand";
})(LayoutEvents || (exports.LayoutEvents = LayoutEvents = {}));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = exports.stringToDate = exports.getFormattedDate = exports.locale = void 0;
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(1);
exports.locale = {
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"],
    cancel: "Cancel",
};
/*
    %d	day as a number with leading zero, 01..31
    %j	day as a number, 1..31
    %D	short name of the day, Su Mo Tu...
    %l	full name of the day, Sunday Monday Tuesday...
    %m	month as a number with leading zero, 01..12
    %n	month as a number, 1..12
    %M	short name of the month, Jan Feb Mar...
    %F	full name of the month, January February March...
    %y	year as a number, 2 digits
    %Y	year as a number, 4 digits
    %h	hours 12-format with leading zero, 01..12)
    %g	hours 12-format, 1..12)
    %H	hours 24-format with leading zero, 01..24
    %G	hours 24-format, 1..24
    %i	minutes with leading zero, 01..59
    %s	seconds with leading zero, 01..59
    %a	am or pm
    %A	AM or PM
    %u	milliseconds
*/
var formatters = {
    "%d": function (date) {
        var day = date.getDate();
        return day < 10 ? "0" + day : day;
    },
    "%j": function (date) { return date.getDate(); },
    "%l": function (date) {
        return exports.locale.days[date.getDay()];
    },
    "%D": function (date) {
        return exports.locale.daysShort[date.getDay()];
    },
    "%m": function (date) {
        var month = date.getMonth() + 1;
        return month < 10 ? "0" + month : month;
    },
    "%n": function (date) { return date.getMonth() + 1; },
    "%M": function (date) { return exports.locale.monthsShort[date.getMonth()]; },
    "%F": function (date) { return exports.locale.months[date.getMonth()]; },
    "%y": function (date) {
        return date
            .getFullYear()
            .toString()
            .slice(2);
    },
    "%Y": function (date) { return date.getFullYear(); },
    "%h": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours < 10 ? "0" + hours : hours;
    },
    "%g": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours;
    },
    "%H": function (date) {
        var hours = date.getHours();
        return hours < 10 ? "0" + hours : hours;
    },
    "%G": function (date) { return date.getHours(); },
    "%i": function (date) {
        var minutes = date.getMinutes();
        return minutes < 10 ? "0" + minutes : minutes;
    },
    "%s": function (date) {
        var seconds = date.getSeconds();
        return seconds < 10 ? "0" + seconds : seconds;
    },
    "%a": function (date) {
        return date.getHours() >= 12 ? "pm" : "am";
    },
    "%A": function (date) {
        return date.getHours() >= 12 ? "PM" : "AM";
    },
    "%u": function (date) { return date.getMilliseconds(); },
};
var setFormatters = {
    "%d": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%j": function (date, value, _format, validate) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%m": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
        if (check && date.getMonth() !== Number(value) - 1)
            date.setMonth(Number(value) - 1);
    },
    "%n": function (date, value, _format, validate) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
        if (check && date.getMonth() !== Number(value) - 1)
            date.setMonth(Number(value) - 1);
    },
    "%M": function (date, value, _format, validate) {
        var index = (0, core_2.findIndex)(exports.locale.monthsShort, function (v) { return v === value; });
        if (validate) {
            return index !== -1;
        }
        index === -1 ? date.setMonth(0) : date.setMonth(index);
        if (index !== -1 && date.getMonth() !== index)
            date.setMonth(index);
    },
    "%F": function (date, value, _format, validate) {
        var index = (0, core_2.findIndex)(exports.locale.months, function (v) { return v === value; });
        if (validate) {
            return index !== -1;
        }
        index === -1 ? date.setMonth(0) : date.setMonth(index);
        if (index !== -1 && date.getMonth() !== index)
            date.setMonth(index);
    },
    "%y": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setFullYear(Number("20" + value)) : date.setFullYear(Number("2000"));
    },
    "%Y": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9][0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setFullYear(Number(value)) : date.setFullYear(Number("2000"));
    },
    "%h": function (date, value, dateFormat, validate) {
        var check = /(^0[1-9]|1[0-2]$)/i.test(value);
        if (validate) {
            return check;
        }
        (check && (dateFormat === "am" || dateFormat === "pm")) || dateFormat === "AM" || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%g": function (date, value, dateFormat, validate) {
        var check = /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i.test(value);
        if (validate) {
            return check;
        }
        (check && (dateFormat === "am" || dateFormat === "pm")) || dateFormat === "AM" || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%H": function (date, value, _format, validate) {
        var check = /(^[0-2][0-9]$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%G": function (date, value, _format, validate) {
        var check = /(^[1-9][0-9]?$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%i": function (date, value, _format, validate) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMinutes(Number(value)) : date.setMinutes(Number(0));
    },
    "%s": function (date, value, _format, validate) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setSeconds(Number(value)) : date.setSeconds(Number(0));
    },
    "%u": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMilliseconds(Number(value)) : date.setMilliseconds(Number(0));
    },
    "%a": function (date, value, _format, validate) {
        if (validate) {
            return value === "pm" || value === "am";
        }
        value === "pm" && date.setHours(date.getHours() + 12);
    },
    "%A": function (date, value, _format, validate) {
        if (validate) {
            return value === "PM" || value === "AM";
        }
        value === "PM" && date.setHours(date.getHours() + 12);
    },
};
var TokenType;
(function (TokenType) {
    TokenType[TokenType["separator"] = 0] = "separator";
    TokenType[TokenType["datePart"] = 1] = "datePart";
})(TokenType || (TokenType = {}));
function tokenizeFormat(format) {
    var tokens = [];
    var currentSeparator = "";
    for (var i = 0; i < format.length; i++) {
        if (format[i] === "%") {
            if (currentSeparator.length > 0) {
                tokens.push({
                    type: TokenType.separator,
                    value: currentSeparator,
                });
                currentSeparator = "";
            }
            tokens.push({
                type: TokenType.datePart,
                value: format[i] + format[i + 1],
            });
            i++;
        }
        else {
            currentSeparator += format[i];
        }
    }
    if (currentSeparator.length > 0) {
        tokens.push({
            type: TokenType.separator,
            value: currentSeparator,
        });
    }
    return tokens;
}
function getFormattedDate(format, date) {
    return tokenizeFormat(format).reduce(function (res, token) {
        if (token.type === TokenType.separator) {
            return res + token.value;
        }
        else {
            if (!formatters[token.value]) {
                return res;
            }
            return res + formatters[token.value](date);
        }
    }, "");
}
exports.getFormattedDate = getFormattedDate;
var datePartQueue = { "%Y": 1, "%y": 1, "%M": 2, "%F": 2, "%m": 2, "%n": 2 };
function stringToDate(str, format, validate) {
    if (typeof str !== "string") {
        return;
    }
    format = format.replace(/([a-z])(%a)/i, function () {
        var match = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            match[_i] = arguments[_i];
        }
        str = str.replace(/(am|pm)/i, " $&");
        return match[1] + " " + match[2];
    });
    var tokens = tokenizeFormat(format);
    var dateParts = new Array(2);
    var index = 0;
    var formatter = null;
    var dateFormat;
    var message = "Incorrect date, see docs: https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html";
    var addDatePart = function (part) {
        var queue = datePartQueue[part.formatter];
        if (queue) {
            dateParts[queue - 1] = part;
            return;
        }
        if (part.formatter === "%A" || part.formatter === "%a") {
            dateFormat = part.value;
        }
        dateParts.push(part);
    };
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].type === TokenType.separator) {
            var separatorIndex = str.indexOf(tokens[i].value, index);
            if (separatorIndex === -1) {
                if (validate) {
                    return false;
                }
                throw new Error(message);
            }
            if (formatter) {
                addDatePart({
                    formatter: formatter,
                    value: str.slice(index, separatorIndex),
                });
                formatter = null;
            }
            index = separatorIndex + tokens[i].value.length;
        }
        else if (tokens[i].type === TokenType.datePart) {
            if (tokens[i + 1] && tokens[i + 1].type !== TokenType.separator) {
                if (validate) {
                    return false;
                }
                throw new Error(message);
            }
            else {
                formatter = tokens[i].value;
            }
        }
    }
    if (formatter) {
        addDatePart({
            formatter: formatter,
            value: str.slice(index),
        });
    }
    var date = new Date(0);
    for (var _i = 0, dateParts_1 = dateParts; _i < dateParts_1.length; _i++) {
        var datePart = dateParts_1[_i];
        if (!datePart)
            continue;
        if (setFormatters[datePart.formatter]) {
            if (validate && !setFormatters[datePart.formatter](date, datePart.value, dateFormat, validate)) {
                return false;
            }
            setFormatters[datePart.formatter](date, datePart.value, dateFormat);
        }
    }
    return validate ? true : date;
}
exports.stringToDate = stringToDate;
var DateHelper = exports.DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.copy = function (d) {
        return new Date(d);
    };
    DateHelper.fromYear = function (year) {
        return new Date(year, 0, 1);
    };
    DateHelper.fromYearAndMonth = function (year, month) {
        return new Date(year, month, 1);
    };
    DateHelper.weekStart = function (d, firstWeekday) {
        var diff = (d.getDay() + 7 - firstWeekday) % 7;
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
    };
    DateHelper.monthStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
    };
    DateHelper.yearStart = function (d) {
        return new Date(d.getFullYear(), 0, 1);
    };
    DateHelper.dayStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    DateHelper.addDay = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + count);
    };
    DateHelper.addMonth = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth() + count);
    };
    DateHelper.addYear = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear() + count, d.getMonth());
    };
    DateHelper.withHoursAndMinutes = function (d, hours, minutes, dateFormat) {
        if (dateFormat === undefined || (!dateFormat && hours === 12) || (dateFormat && hours !== 12)) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, minutes);
        }
        else if (dateFormat && hours === 12) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, minutes);
        }
        else {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours + 12, minutes);
        }
    };
    DateHelper.setMonth = function (d, month) {
        d.setMonth(month);
    };
    DateHelper.setYear = function (d, year) {
        d.setFullYear(year);
    };
    DateHelper.mergeHoursAndMinutes = function (source, target) {
        return new Date(source.getFullYear(), source.getMonth(), source.getDate(), target.getHours(), target.getMinutes());
    };
    DateHelper.isWeekEnd = function (d) {
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DateHelper.getTwelweYears = function (d) {
        var y = d.getFullYear();
        var firstYear = y - (y % 12);
        return (0, core_1.range)(firstYear, firstYear + 11);
    };
    DateHelper.getDayOrdinal = function (d) {
        var dayMS = 24 * 60 * 60 * 1000;
        return (d.valueOf() - DateHelper.yearStart(d).valueOf()) / dayMS;
    };
    DateHelper.getWeekNumber = function (d) {
        var currThursday = d.getDay() === 4 ? d : DateHelper.addDay(d, 4 - d.getDay());
        var ordinal = DateHelper.getDayOrdinal(currThursday);
        return Math.trunc(ordinal / 7) + 1;
    };
    DateHelper.isSameDay = function (d1, d2) {
        return (d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate());
    };
    DateHelper.toDateObject = function (date, dateFormat) {
        if (typeof date === "string") {
            return stringToDate(date, dateFormat);
        }
        else {
            return new Date(date);
        }
    };
    DateHelper.nullTimestampDate = new Date(0);
    return DateHelper;
}());


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseItem = void 0;
var BaseItem = /** @class */ (function () {
    function BaseItem(config, params) {
        this.editableProperty = { key: null, editableId: null };
        this.config = this.setDefaults(config, config.type === "line" || config.type === "dash" ? params : params.defaults);
        this.id = this.config.id = config.id;
    }
    BaseItem.prototype.isFixed = function () {
        return this.config.fixed;
    };
    BaseItem.prototype.isEditable = function () {
        return this.config.editable || false;
    };
    BaseItem.prototype.getBaseType = function () {
        return "base";
    };
    BaseItem.prototype.isLocate = function (box) {
        var _a = this.config, x = _a.x, y = _a.y, height = _a.height, width = _a.width, _b = _a.dx, dx = _b === void 0 ? 0 : _b, _c = _a.dy, dy = _c === void 0 ? 0 : _c;
        var XColl = x + width + dx >= box.x && x + dx <= box.x + box.width;
        var YColl = y + height + dy >= box.y && y + dy <= box.y + box.height;
        return XColl && YColl;
    };
    BaseItem.prototype.getBox = function () {
        var _a = this.config, _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.dx, dx = _d === void 0 ? 0 : _d, _e = _a.dy, dy = _e === void 0 ? 0 : _e, width = _a.width, height = _a.height;
        var left = x + dx;
        var right = left + width;
        var top = y + dy;
        var bottom = top + height;
        return { left: left, right: right, top: top, bottom: bottom };
    };
    BaseItem.prototype.canResize = function () {
        return true;
    };
    BaseItem.prototype.render = function () {
        return "";
    };
    BaseItem.prototype.getEditorNode = function () {
        return this.editorNode;
    };
    BaseItem.prototype.setEditorNode = function (editor, key, editableId) {
        this.editorNode = editor;
        if (key) {
            this.editableProperty.key = key;
        }
        if (editableId) {
            this.editableProperty.editableId = editableId;
        }
    };
    BaseItem.prototype.destructor = function () {
        this.config = this.id = null;
    };
    BaseItem.prototype.getCss = function () {
        var _a = this.config, $selected = _a.$selected, $target = _a.$target, _b = _a.assistant, assistant = _b === void 0 ? false : _b, _c = _a.partner, partner = _c === void 0 ? false : _c, _d = _a.catchItem, catchItem = _d === void 0 ? true : _d, $move = _a.$move, type = _a.type;
        var css = this.config.css || "";
        if ($selected && this.getBaseType() !== "line") {
            css += " dhx_diagram_item--selected";
        }
        if ($move && type !== "$sgroup") {
            css += " dhx_diagram_item--move";
        }
        if ($target) {
            if (assistant || partner || !catchItem) {
                css += " dhx_action__target dhx_action__target--doesnt_take";
            }
            else {
                css += " dhx_action__target dhx_action__target--take";
            }
        }
        return css;
    };
    BaseItem.prototype.setDefaults = function (config, defaults) {
        return config;
    };
    BaseItem.prototype.getCoords = function (config) {
        var dx = config.dx, dy = config.dy, $group = config.$group, $gx = config.$gx, $gy = config.$gy;
        var x = config.x, y = config.y;
        if (dx)
            x = x + dx;
        if (dy)
            y = y + dy;
        if ($group) {
            return {
                x: $gx,
                y: $gy,
            };
        }
        else {
            delete config.$gx;
            delete config.$gy;
        }
        return { x: x, y: y };
    };
    return BaseItem;
}());
exports.BaseItem = BaseItem;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowShapes = exports.FlowShape = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
var dom_1 = __webpack_require__(0);
var BaseShape_1 = __webpack_require__(16);
var templates_1 = __webpack_require__(8);
var FlowShape = /** @class */ (function (_super) {
    __extends(FlowShape, _super);
    function FlowShape(config, parameters) {
        return _super.call(this, config, parameters) || this;
    }
    FlowShape.prototype.setDefaults = function (config, defaults) {
        var width = config.width, height = config.height, stroke = config.stroke, fill = config.fill, strokeWidth = config.strokeWidth, fontColor = config.fontColor, strokeDash = config.strokeDash, textAlign = config.textAlign, lineHeight = config.lineHeight, fontStyle = config.fontStyle, textVerticalAlign = config.textVerticalAlign, type = config.type, fontSize = config.fontSize, text = config.text, preview = config.preview, x = config.x, y = config.y, fixed = config.fixed, editable = config.editable;
        var circularShapes = ["circle", "or", "junction"];
        var isCircular = circularShapes.includes(type);
        var widthDefaut = defaults.width ? parseFloat(defaults.width) : isCircular ? 90 : 140;
        var heightDefault = defaults.height ? parseFloat(defaults.height) : 90;
        var lineHeightDefault = defaults.lineHeight ? parseFloat(defaults.lineHeight) : 14;
        var fontSizeDefault = defaults.fontSize ? parseFloat(defaults.fontSize) : 14;
        var strokeWidthDefault = defaults.strokeWidth ? parseFloat(defaults.strokeWidth) : 1;
        config.strokeWidth = strokeWidth || strokeWidthDefault;
        config.width = width || widthDefaut;
        config.height = height || heightDefault;
        config.fontSize = fontSize || fontSizeDefault;
        config.lineHeight = lineHeight || lineHeightDefault;
        config.strokeDash = strokeDash || defaults.strokeDash || "";
        config.fill = fill || defaults.fill || "#EEF1F6";
        config.stroke = stroke || defaults.stroke || "#B8C6D6";
        config.text = typeof text === "string" ? text : defaults.text || "";
        config.textAlign = textAlign || defaults.textAlign || "center";
        config.textVerticalAlign = textVerticalAlign || defaults.textVerticalAlign || "center";
        config.fontStyle = fontStyle || defaults.fontStyle || "normal";
        config.fontColor = fontColor || defaults.fontColor || "#4C4C4C";
        config.preview = preview || defaults.preview;
        config.x = x || 0;
        config.y = y || 0;
        config.fixed = fixed || false;
        config.editable = typeof editable === "boolean" ? editable : true;
        return config;
    };
    FlowShape.prototype.getContent = function () {
        var _a = this.config, text = _a.text, $editable = _a.$editable;
        return [
            (0, dom_1.el)("div.dhx_diagram_item__text", {
                style: (0, templates_1.getShapeCss)(this.config),
            }, $editable ? [this.getEditorNode()] : text),
        ];
    };
    FlowShape.prototype.render = function () {
        var _this = this;
        if (!this.config.strokeType)
            this.config.strokeType = "line";
        if (this.config.strokeType === "line") {
            this.config.strokeDash = "0";
        }
        if (this.config.strokeType === "dash") {
            this.config.strokeDash = "5,5";
        }
        var _a = this.config, id = _a.id, angle = _a.angle, width = _a.width, height = _a.height, strokeWidth = _a.strokeWidth, $group = _a.$group, $selected = _a.$selected;
        var zIndex = $group || $selected ? ($selected ? 2 : 1) : 0;
        var coords = this.getCoords(this.config);
        var strokeRatio = strokeWidth / 2;
        var circle = [];
        if (Array.isArray(this.config.dir)) {
            this.config.dir.forEach(function (_dir, index) {
                circle.push((0, templates_1.getCircleTpl)(_this.config, index));
            });
        }
        else {
            circle.push((0, templates_1.getCircleTpl)(this.config));
        }
        return (0, dom_1.el)("div.dhx_diagram_item.dhx_diagram_shape.dhx_diagram_shape_flow", {
            _key: id,
            class: this.getCss(),
            "data-dhx-id": id,
            style: {
                transform: "rotate(".concat(angle || 0, "deg)"),
                position: "absolute",
                height: height,
                width: width,
                top: coords.y,
                left: coords.x,
                zIndex: zIndex,
            },
        }, __spreadArray([
            (0, dom_1.sv)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: height,
                width: width,
                viewBox: "".concat(-strokeRatio, " ").concat(-strokeRatio, " ").concat(width + strokeRatio, " ").concat(height +
                    strokeRatio),
                reserveAspectRatio: "none",
            }, this._getShapeContour()),
            (0, templates_1.getTextTemplate)(this.config, this.getContent())
        ], circle, true));
    };
    FlowShape.prototype._getShapeContour = function () {
        var _a = this.config, width = _a.width, height = _a.height, stroke = _a.stroke, fill = _a.fill, strokeWidth = _a.strokeWidth, strokeDash = _a.strokeDash, type = _a.type, strokeType = _a.strokeType;
        var shape = exports.flowShapes[type];
        var part = Math.round(width / 12);
        var pathWidth = width - strokeWidth / 2;
        var pathHeight = height - strokeWidth / 2;
        var path = shape.path(pathWidth, pathHeight, part);
        var additionalPath = shape.additionalPath(pathWidth, pathHeight, part);
        var getPathElement = function (d) {
            return (0, dom_1.sv)("path", {
                d: d,
                class: "dhx_diagram_shape_flow__svg ",
                stroke: strokeType !== "none" && stroke,
                fill: fill,
                "stroke-width": strokeWidth,
                "stroke-dasharray": strokeDash,
            });
        };
        var getAdditionalPathElement = function (d) {
            return (0, dom_1.sv)("path", {
                d: d,
                fill: "none",
                stroke: stroke,
                class: "dhx_diagram_shape_flow__extra-line",
            });
        };
        return [getPathElement(path), getAdditionalPathElement(additionalPath)];
    };
    return FlowShape;
}(BaseShape_1.BaseShape));
exports.FlowShape = FlowShape;
exports.flowShapes = {
    circle: {
        path: function (width, height) {
            return "\n\t\t\tM ".concat(width / 2, " 0 A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",").concat(height, "\n\t\t\tA ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    rectangle: {
        path: function (width, height) {
            return "M 0,0 L 0,".concat(height, " L ").concat(width, ",").concat(height, " L ").concat(width, ",0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    triangle: {
        path: function (width, height) {
            return "M ".concat(width / 2, " 0 L").concat(width, " ").concat(height, " L 0 ").concat(height, " z");
        },
        additionalPath: function () {
            return;
        },
    },
    start: {
        path: function (width, height) {
            return "\n\t\t\tM ".concat(height / 2, " 0 A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(height / 2, ",").concat(height, "\n\t\t\tH ").concat(width - height / 2, " A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width - height / 2, ",0 H ").concat(height / 2, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    end: {
        path: function (width, height) {
            return "\n\t\t\tM ".concat(height / 2, " 0 A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(height / 2, ",").concat(height, "\n\t\t\tH ").concat(width - height / 2, " A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width - height / 2, ",0 H ").concat(height / 2, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    process: {
        path: function (width, height) {
            return "M 0,0 L 0,".concat(height, " L ").concat(width, ",").concat(height, " L ").concat(width, ",0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    output: {
        path: function (width, height, part) {
            return "M ".concat(part * 2, ",0 ").concat(width, ",0 ").concat(width - part * 2, ",").concat(height, " 0,").concat(height, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    decision: {
        path: function (width, height) {
            return "M 0 ".concat(height / 2, " L ").concat(width / 2, " 0 L ").concat(width, " ").concat(height / 2, " L ").concat(width / 2, " ").concat(height, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    display: {
        path: function (width, height) {
            return "\n\t\t\tM 0 ".concat(height / 2, " L ").concat(width / 4, " 0 H ").concat((width * 3) / 4, "\n\t\t\tA ").concat(width / 4, ",").concat(height / 2, " 0 1 1 ").concat((width * 3) / 4, ",").concat(height, "\n\t\t\tH ").concat(width / 4, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    document: {
        path: function (width, height) {
            height -= 8;
            return "M0 ".concat(height, " C\n\t\t\t").concat(width / 6, " ").concat((height * 10) / 9, ",\n\t\t\t").concat(width / 3, " ").concat((height * 10) / 9, ",\n\t\t\t").concat(width / 2, " ").concat(height, " S\n\t\t\t").concat((width * 5) / 6, " ").concat((height * 8) / 9, ",\n\t\t\t").concat(width, " ").concat(height, "\n\t\t\tV 0 H 0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    data: {
        path: function (width, height, part) {
            return "M ".concat(part, " 0 Q\n\t\t\t").concat(-part, " ").concat(height / 2, ",\n\t\t\t").concat(part, " ").concat(height, " H ").concat(width, " Q\n\t\t\t").concat(width - part * 2, " ").concat(height / 2, ",\n\t\t\t").concat(width, " 0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    database: {
        path: function (width, height, part) {
            return "M 0 ".concat(part, " A ").concat(width / 2, ",").concat(part, " 0 1 0 ").concat(width, ",").concat(part, "\n\t\t\tA ").concat(width / 2, ",").concat(part, " 0 1 0 0,").concat(part, "\n\t\t\tV ").concat(height, " H ").concat(width, " V ").concat(part);
        },
        additionalPath: function (width, height, part) {
            return "M 0 ".concat(part, " A ").concat(width / 2, ",").concat(part, " 0 1 0 ").concat(width, ",").concat(part);
        },
    },
    internal: {
        path: function (width, height) {
            return "M 0,0 L 0,".concat(height, " L ").concat(width, ",").concat(height, " L ").concat(width, ",0 Z");
        },
        additionalPath: function (width, height, part) {
            return "M ".concat(part, " 0 V ").concat(height, " M 0 ").concat(part, " H ").concat(width);
        },
    },
    offline: {
        path: function (width, height) {
            return "M 0,0 ".concat(width, ",0 ").concat(width / 2, ",").concat(height, " Z");
        },
        additionalPath: function (width, height, part) {
            var hypotenuse = Math.sqrt(Math.pow((width / 2), 2) + Math.pow(height, 2));
            var coef = height / hypotenuse;
            var cathet = Math.sqrt(Math.pow((part / coef), 2) - Math.pow(part, 2));
            return "M ".concat(width / 2 - cathet, " ").concat(height - part, " h ").concat(2 * cathet);
        },
    },
    delay: {
        path: function (width, height) {
            return "\n\t\t\tM 0 0 H ".concat((width * 3) / 4, "\n\t\t\tA ").concat(width / 4, ",").concat(height / 2, " 0 1 1 ").concat((width * 3) / 4, ",").concat(height, "\n\t\t\tH 0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    page: {
        path: function (width, height) {
            return "\n\t\t\tM 0,0\n\t\t\t".concat(width, ",0\n\t\t\t").concat(width, ",").concat(height / 2, "\n\t\t\t").concat(width / 2, ",").concat(height, "\n\t\t\t0,").concat(height / 2, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    input: {
        path: function (width, height) {
            return "\n\t\t\tM 0,".concat(height / 3, "\n\t\t\t").concat(width, ",").concat(0, "\n\t\t\t").concat(width, ",").concat(height, "\n\t\t\t0,").concat(height, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    operation: {
        path: function (width, height) {
            return "\n\t\t\tM 0,0\n\t\t\t".concat(width, ",0\n\t\t\t").concat((width * 3) / 4, ",").concat(height, "\n\t\t\t").concat(width / 4, ",").concat(height, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    punchcard: {
        path: function (width, height) {
            return "\n\t\t\tM 0,".concat(height / 4, "\n\t\t\t").concat(width / 4, ",0\n\t\t\t").concat(width, ",0\n\t\t\t").concat(width, ",").concat(height, "\n\t\t\t0,").concat(height, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    subroutine: {
        path: function (width, height) {
            return "M 0,0 L 0,".concat(height, " L ").concat(width, ",").concat(height, " L ").concat(width, ",0 Z");
        },
        additionalPath: function (width, height, part) {
            return "M ".concat(part, " 0 V ").concat(height, " M ").concat(width - part, " 0 V ").concat(height);
        },
    },
    comment: {
        path: function (width, height) {
            var w = 4;
            return "M ".concat(width, " 0 H 0 V ").concat(height, " H").concat(width, " V").concat(height - w, " H").concat(w, " V").concat(w, " H").concat(width);
        },
        additionalPath: function () {
            return;
        },
    },
    storage: {
        path: function (width, height) {
            return "M 0,0 ".concat(width, ",0 ").concat(width / 2, ",").concat(height, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    extract: {
        path: function (width, height) {
            return "M 0,".concat(height, " ").concat(width, ",").concat(height, " ").concat(width / 2, ",0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    collate: {
        path: function (width, height) {
            return "M ".concat(width / 2, " ").concat(height / 2, " L 0 0 H ").concat(width, " L 0 ").concat(height, " H ").concat(width, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    or: {
        path: function (width, height) {
            return "\n\t\t\tM ".concat(width / 2, " 0 A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",").concat(height, "\n\t\t\tA ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",0 Z");
        },
        additionalPath: function (width, height) {
            return "\n\t\t\tM".concat((width - height) / 2, " ").concat(height / 2, " ").concat(width - (width - height) / 2, " ").concat(height / 2, "\n\t\t\tM").concat(width / 2, " ").concat(0, " ").concat(width / 2, " ").concat(height);
        },
    },
    junction: {
        path: function (width, height) {
            return "\n\t\t\tM ".concat(width / 2, " 0 A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",").concat(height, "\n\t\t\tA ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",0 Z");
        },
        additionalPath: function (width, height) {
            return "\n\t\t\tM ".concat(width / 2 - (height * Math.SQRT2) / 4, " ").concat(height / 2 - (height * Math.SQRT2) / 4, " L ").concat(width / 2 +
                (height * Math.SQRT2) / 4, " ").concat(height / 2 + (height * Math.SQRT2) / 4, "\n\t\t\tM ").concat(width / 2 - (height * Math.SQRT2) / 4, " ").concat(height / 2 + (height * Math.SQRT2) / 4, " L ").concat(width / 2 +
                (height * Math.SQRT2) / 4, " ").concat(height / 2 - (height * Math.SQRT2) / 4);
        },
    },
    keyring: {
        path: function (width, height, part) {
            return "\n\t\t\tM ".concat(part, " 0 A ").concat(part, ",").concat(height / 2, " 0 1 0 ").concat(part, ",").concat(height, "\n\t\t\tH ").concat(width - part, " A ").concat(part, ",").concat(height / 2, " 0 1 0 ").concat(width - part, ",0 H ").concat(part, " Z");
        },
        additionalPath: function () {
            return;
        },
    },
    tape: {
        path: function (width, height) {
            return "\n\t\t\tM0 ".concat(height - 12, " C\n\t\t\t").concat(width / 6, " ").concat(((height - 8) * 10) / 9, ",\n\t\t\t").concat(width / 3, " ").concat(((height - 8) * 10) / 9, ",\n\t\t\t").concat(width / 2, " ").concat(height - 8, " S\n\t\t\t").concat((width * 5) / 6, " ").concat(((height - 8) * 8) / 9, ",\n\t\t\t").concat(width, " ").concat(height, "\n\t\t\tV 12 C\n\t\t\t").concat((width * 5) / 6, " ").concat(-height / 9, ",\n\t\t\t").concat((width * 2) / 3, " ").concat(height / 9 / 2, ",\n\t\t\t").concat(width / 2, " 8 S\n\t\t\t").concat(width / 6, " ").concat(height / 9, ",\n\t\t\t0 0 Z");
        },
        additionalPath: function () {
            return;
        },
    },
    preparation: {
        path: function (width, height) {
            var w = 20;
            return "M0 ".concat(height / 2, "L").concat(w, " 0H").concat(width - w, "L ").concat(width, " ").concat(height / 2, "L").concat(width -
                w, " ").concat(height, "H").concat(w, "L0 ").concat(height / 2, "Z");
        },
        additionalPath: function () {
            return;
        },
    },
    endpoint: {
        path: function (width, height) {
            return "M0 ".concat(height / 2, "  L").concat(width / 2, " ").concat(0, " L ").concat(width / 2, " ").concat(height, " z");
        },
        additionalPath: function () {
            return;
        },
    },
    roll: {
        path: function (width, height) {
            return "\n\t\t\tM ".concat(width / 2, " 0 A ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",").concat(height, "\n\t\t\tA ").concat(height / 2, ",").concat(height / 2, " 0 1 0 ").concat(width / 2, ",0 Z");
        },
        additionalPath: function (width, height) {
            return "M ".concat(width / 2, " ").concat(height, " H ").concat(width);
        },
    },
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Graph = /** @class */ (function () {
    function Graph(parent, root, config) {
        this._tbounds = [0, 0];
        if (!parent) {
            this.nodes = [];
            this.hash = {};
        }
        else {
            this.nodes = [root];
            parent.collectSubNodes(root, this.nodes);
            this.hash = parent.hash;
            this.root(root, config);
        }
    }
    Graph.prototype.copy = function () {
        var _this = this;
        var t = new Graph();
        t.nodes = this.nodes.map(function (_a) {
            var id = _a.id, w = _a.w, h = _a.h, x = _a.x, y = _a.y, isn = _a.isn, iss = _a.iss;
            return ({
                id: id,
                w: w,
                h: h,
                x: x,
                y: y,
                kids: [],
                links: [],
                isn: isn,
                iss: iss,
            });
        });
        t.hash = {};
        t.nodes.forEach(function (a) {
            t.hash[a.id] = a;
        });
        t.nodes.forEach(function (a) {
            a.kids = _this.hash[a.id].kids.map(function (b) { return t.hash[b.id]; });
            a.links = _this.hash[a.id].links.map(function (b) { return t.hash[b.id]; });
        });
        t._tbounds = [].concat(this._tbounds);
        t._ybounds = [].concat(this._ybounds);
        t._bounds = this._bounds ? this._bounds.map(function (a) { return [].concat(a); }) : [];
        t.routes = this.routes;
        t._root = this._root ? t.hash[this._root.id] : null;
        return t;
    };
    Graph.prototype.collectSubNodes = function (root, backet) {
        for (var i = 0; i < root.kids.length; i++) {
            var e = root.kids[i];
            backet.push(e);
            if (e.kids)
                this.collectSubNodes(e, backet);
        }
    };
    Graph.prototype.getLevelBounds = function () {
        return this._bounds;
    };
    Graph.prototype.getBounds = function (i, padding, wide) {
        var b;
        if (wide) {
            b = this._tbounds;
        }
        else {
            b = this._bounds[i];
        }
        return [b[0] ? b[0] - padding / 4 : 0, b[1] ? b[1] + padding / 4 : 0];
    };
    Graph.prototype.addEdge = function (from, to) {
        var f = this.hash[from];
        var t = this.hash[to];
        f.links.push(t);
        t.links.push(f);
    };
    Graph.prototype.importNodes = function (node) {
        var _this = this;
        node.forEach(function (a) {
            _this.hash[a.id] = a;
            _this.nodes.push(a);
        });
    };
    Graph.prototype.split = function (filter) {
        var _this = this;
        var next = [];
        this.nodes = this.nodes.filter(function (a) {
            if (!filter(a))
                return true;
            delete _this.hash[a.id];
            next.push(a);
            return false;
        });
        if (!next.length)
            return null;
        var g2 = new Graph();
        g2.importNodes(next);
        return g2;
    };
    Graph.prototype.addNode = function (node) {
        node.kids = [];
        node.links = [];
        if (!this._root)
            this._root = node;
        this.hash[node.id] = node;
        this.nodes.push(node);
    };
    Graph.prototype.setRoot = function () {
        var root = this.nodes[0];
        this.nodes.forEach(function (node) {
            if (node.id === root.id || !node.links.length)
                return;
            root = node.links.length > root.links.length ? node : root;
        });
        this._root = root;
    };
    Graph.prototype.getNode = function (id) {
        return this.hash[id];
    };
    Graph.prototype.getRoot = function () {
        return this._root;
    };
    Graph.prototype.getLevels = function () {
        return this._deep;
    };
    Graph.prototype.clean = function () {
        this.nodes.forEach(function (a) {
            if (a.links.length > 1) {
                var were_1 = [];
                a.links = a.links.filter(function (b) {
                    if (were_1.includes(b) || a === b) {
                        return false;
                    }
                    were_1.push(b);
                    return true;
                });
            }
        });
    };
    Graph.prototype.getNodes = function () {
        return this.nodes;
    };
    Graph.prototype.getBox = function () {
        return [this._tbounds, this._ybounds];
    };
    Graph.prototype.setGlobalBox = function () {
        if (!this.nodes.length) {
            return;
        }
        var cmx, cx, cmy, cy;
        cmx = cmy = Infinity;
        cx = cy = -Infinity;
        this.nodes.forEach(function (a) {
            var mx = a.x - a.w / 2;
            var x = a.x + a.w / 2;
            var my = a.y - a.h / 2;
            var y = a.y + a.h / 2;
            if (mx < cmx)
                cmx = mx;
            if (my < cmy)
                cmy = my;
            if (x > cx)
                cx = x;
            if (y > cy)
                cy = y;
        });
        this._tbounds = [cmx, cx];
        this._ybounds = [cmy, cy];
    };
    Graph.prototype.translate = function (p) {
        this.nodes.forEach(function (n) {
            n.x += p.x;
            n.y += p.y;
        });
        this._tbounds[0] += p.x;
        this._tbounds[1] += p.x;
        if (this._bounds)
            for (var i = 0; i < this._bounds.length; i++) {
                this._bounds[i][0] += p.x;
                this._bounds[i][1] += p.x;
            }
        if (this._ybounds) {
            this._ybounds[0] += p.y;
            this._ybounds[1] += p.y;
        }
    };
    Graph.prototype.rotate = function (a) {
        // [x: sin, b: cos ]
        var sin = a.x;
        var cos = a.y;
        this.nodes.forEach(function (n) {
            var x = n.x * cos - n.y * sin;
            var y = n.x * sin + n.y * cos;
            n.x = x;
            n.y = y;
        });
        var _a = this._tbounds, xmin = _a[0], xmax = _a[1];
        var _b = this._ybounds, ymin = _b[0], ymax = _b[1];
        this._tbounds = [xmin * cos - ymin * sin, xmax * cos - ymax * sin].sort();
        this._ybounds = [xmin * sin + ymin * cos, xmax * sin + ymax * cos].sort();
    };
    Graph.prototype.setBox = function () {
        var last = this._deep[this._deep.length - 1];
        var max = -Infinity;
        last.forEach(function (a) {
            var test = a.y + a.h / 2;
            if (test > max)
                max = test;
        });
        this._ybounds = [this._root.y - this._root.h / 2, max];
    };
    Graph.prototype.mirror = function () {
        this.nodes.forEach(function (n) {
            n.x = -n.x;
        });
        for (var i = 0; i < this._bounds.length; i++) {
            var _a = this._bounds[i], l_1 = _a[0], u_1 = _a[1];
            this._bounds[i] = [-u_1, -l_1];
        }
        var _b = this._tbounds, l = _b[0], u = _b[1];
        this._tbounds = [-u, -l];
    };
    Graph.prototype.nonLeaves = function (n) {
        return n.kids.filter(function (a) { return a.kids.length > 0; });
    };
    Graph.prototype.toTree = function (root) {
        if (!root || !this.hash[root.id])
            root = this._detectRoot();
        this.nodes.forEach(function (a) { return (a.kids = []); });
        this.setKids(root);
        this.cleanKids(root, [root.id]);
        return root;
    };
    Graph.prototype.root = function (root, config) {
        this._deep = [[root]];
        var hw = Math.round((config && config.rotate ? root.h : root.w) / 2);
        this._tbounds = [-hw, hw];
        this._bounds = [[-hw, hw]];
        this._leaves = [];
        this._root = root;
        this._setLevels(root, 1);
        this._width = 1;
        for (var i = 0; i < this._deep.length; i++) {
            var n = this._deep[i].length;
            if (n > this._width)
                this._width = n;
        }
    };
    Graph.prototype.setKids = function (root) {
        var _this = this;
        root.links.forEach(function (a) {
            root.kids.push(a);
            if (!a.kids.length) {
                _this.setKids(a);
            }
        });
    };
    Graph.prototype.cleanKids = function (root, kidsArray, parentsArr) {
        var _this = this;
        if (parentsArr === void 0) { parentsArr = []; }
        var checkedKids = __spreadArray([], root.kids, true);
        root.kids.forEach(function (a) {
            if (!kidsArray.includes(a.id)) {
                kidsArray.push(a.id);
            }
            else {
                var kidIndex = checkedKids.findIndex(function (kid) { return kid.id === a.id; });
                kidIndex > -1 && checkedKids.splice(kidIndex, 1);
            }
        });
        root.kids = checkedKids;
        root.kids.forEach(function (a) {
            a.kids.length && !parentsArr.includes(a.id) && _this.cleanKids(a, kidsArray, parentsArr);
        });
        parentsArr.push(root.id);
    };
    Graph.prototype._detectRoot = function () {
        var ext = {};
        var nodes = this.nodes;
        var round = [];
        do {
            round.forEach(function (k) { return (ext[k] = 1); });
            round = [];
            nodes = nodes.filter(function (a) {
                var check = a.links.map(function (a) { return (ext[a.id] ? 0 : 1); }).reduce(function (a, b) { return a + b; }, 0) > 1;
                if (!check)
                    round.push(a.id);
                return check;
            });
        } while (nodes.length > 2 && round.length);
        return nodes[0] || this.nodes[0];
    };
    Graph.prototype._setLevels = function (node, l) {
        var kids = node.kids;
        for (var i = 0; i < kids.length; i++) {
            var n = kids[i];
            var level = this._deep[l];
            if (!level) {
                this._deep[l] = [n];
                this._bounds[l] = [0, 0];
            }
            else
                level.push(n);
            if (n.kids.length)
                this._setLevels(n, l + 1);
            else
                this._leaves.push(n);
        }
    };
    Graph.prototype.getIString = function () {
        var levels = [];
        // mark leaves
        for (var i = 0; i < this._leaves.length; i++) {
            this._leaves[i].isn = 0;
            this._leaves[i].iss = "";
        }
        // for each level
        for (var i = this._deep.length - 2; i >= 0; i--) {
            // for each non leave
            var level = this._deep[i].filter(function (a) { return a.kids.length > 0; });
            for (var j = 0; j < level.length; j++) {
                // create i-string for all non-leaves
                var node = level[j];
                for (var k = 0; k < node.kids.length; k++) {
                    node.iss = node.kids
                        .map(function (n) { return n.isn; })
                        .sort()
                        .join(",");
                }
            }
            // sort non-leaves to form level i-string
            level.sort(function (a, b) { return (a.iss > b.iss ? 1 : -1); });
            levels.push(level.map(function (a) { return a.iss; }).join("|"));
            // // sort all nodes by i-string
            // const all = this._deep[i];
            // all.sort((a,b) => (a.iss > b.iss ? 1 : -1));
            // assign i-numbers based on i-strings
            var code = level[0].iss;
            var num = 1;
            for (var j = 0; j < level.length; j++) {
                if (code !== level[j].iss) {
                    code = level[j].iss;
                    num++;
                }
                level[j].isn = num;
            }
        }
        // return tree i-string
        return levels.join(";");
    };
    return Graph;
}());
exports.default = Graph;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.en = void 0;
exports.en = {
    addColumnLast: "Add column",
    addLeftShape: "Add left shape",
    addLineTitle: "Add title",
    addRightShape: "Add right shape",
    addRowLast: "Add row",
    addShape: "Add shape",
    alignHorizontalCenter: "Align horizontal center",
    alignHorizontalDistribution: "Distribute horizontal spacing",
    alignHorizontalLeft: "Align left",
    alignHorizontalRight: "Align right",
    alignVerticalBottom: "Align bottom",
    alignVerticalDistribution: "Distribute vertical spacing",
    alignVerticalMiddle: "Align vertical center",
    alignVerticalTop: "Align top",
    connect: "Connect",
    copy: "Duplicate",
    lineTitleAutoPositionDisable: "Disable title auto position",
    lineTitleAutoPositionEnable: "Enable title auto position",
    menu: "Menu",
    menuAddAssistant: "Add assistant",
    menuAddColumnLeft: "Add column left",
    menuAddColumnRight: "Add column right",
    menuAddPartner: "Add partner",
    menuAddRowDown: "Add row down",
    menuAddRowUp: "Add row up",
    menuAlignChildrenHorizontally: "Align children horizontally",
    menuAlignChildrenVertically: "Align children vertically",
    menuDelete: "Delete",
    menuDeleteCol: "Delete column",
    menuDeleteRow: "Delete row",
    menuMoveColumnLeft: "Move column left",
    menuMoveColumnRight: "Move column right",
    menuMoveRowDown: "Move row down",
    menuMoveRowUp: "Move row up",
    remove: "Delete",
    removePoint: "Delete point",
    text: "Text",
    title: "Title",
    shapebar: {
        shapeSections: "Shapes",
        groupSections: "Groups",
        swimlaneSections: "Swimlanes",
        group: "Group",
        swimlaneCols: "Swimlane cols",
        swimlaneRows: "Swimlane rows",
        swimlaneMix: "Swimlane mix",
        untitled: "Untitled",
    },
    editbar: {
        arrange: "Arrange",
        border: "Border",
        fill: "Fill",
        gridStep: "Grid step",
        header: "Header",
        headerColor: "Header color",
        headerPosition: "Position",
        image: "Image",
        lineShape: "Line shape",
        lineStyle: "Line style",
        pointerView: "Pointer view",
        positionOffset: "Position offset",
        size: "Size",
        subheaderCols: "Subheader for columns",
        subheaderRows: "Subheader for rows",
        text: "Text",
        textAlignment: "Text alignment",
        textStyle: "Text style",
        title: "Title",
    },
    toolbar: {
        align: "Align",
        alignHorizontalCenter: "Horizontal center",
        alignHorizontalLeft: "Left",
        alignHorizontalRight: "Right",
        alignVerticalBottom: "Bottom",
        alignVerticalCenter: "Vertical center",
        alignVerticalTop: "Top",
        arrange: "Arrange",
        connectionPoints: "Connection points",
        copy: "Copy",
        copyStyle: "Copy style",
        distribute: "Distribute",
        distributeHorizontal: "Horizontal",
        distributeVertical: "Vertical",
        duplicate: "Duplicate",
        edit: "Edit",
        editbar: "Edit bar",
        export: "Export as",
        exportJson: "JSON",
        exportPdf: "PDF",
        exportPng: "PNG",
        file: "File",
        grid: "Grid",
        gridStep: "Grid step",
        importJson: "Import from JSON",
        itemsDraggable: "Draggable items",
        layout: "Auto layout",
        layoutMode: "Placement mode",
        layoutModeDirect: "Direct",
        layoutModeEdges: "Edges",
        layoutOrthogonal: "Orthogonal",
        layoutRadial: "Radial",
        magnetic: "Magnetic",
        paste: "Paste",
        pasteStyle: "Paste style",
        redo: "Redo",
        resizePoints: "Resize points",
        selectAll: "Select all",
        selectNone: "Select none",
        shapebar: "Shape bar",
        theme: "Theme",
        themeDark: "Dark",
        themeDarkContrast: "Dark contrast",
        themeLight: "Light",
        themeLightContrast: "Light contrast",
        undo: "Undo",
        view: "View",
        zoomIn: "Zoom in",
        zoomOut: "Zoom out",
    },
    hotkey: {
        "Alt+1": "Alt+1",
        "Alt+2": "Alt+2",
        "Alt+3": "Alt+3",
        "Ctrl+Z": "Ctrl+Z",
        "Ctrl+Shift+Z": "Ctrl+Shift+Z",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        "Ctrl+Alt+C": "Ctrl+Alt+C",
        "Ctrl+Alt+V": "Ctrl+Alt+V",
        "Ctrl+A": "Ctrl+A",
        "Ctrl+Shift+A": "Ctrl+Shift+A",
        "Ctrl+Mousewheel": "Ctrl+Mousewheel",
        "CMD+Z": "CMD+Z",
        "CMD+Shift+Z": "CMD+Shift+Z",
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",
        "CMD+Alt+C": "CMD+Alt+C",
        "CMD+Alt+V": "CMD+Alt+V",
        "CMD+A": "CMD+A",
        "CMD+Shift+A": "CMD+Shift+A",
        "CMD+Mousewheel": "CMD+Mousewheel",
    },
};
exports.default = exports.en;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGroup = void 0;
var dom_1 = __webpack_require__(0);
var linkPaths_1 = __webpack_require__(25);
var BaseItem_1 = __webpack_require__(37);
var templates_1 = __webpack_require__(8);
var BaseGroup = /** @class */ (function (_super) {
    __extends(BaseGroup, _super);
    function BaseGroup(config, params) {
        var _this = _super.call(this, config, params) || this;
        _this.data = params.data;
        _this.setMinBox();
        return _this;
    }
    BaseGroup.prototype.getBaseType = function () {
        return "group";
    };
    BaseGroup.prototype.isEditable = function (subheaderId) {
        var _a, _b;
        return (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.editable;
    };
    BaseGroup.prototype.getLocatePercent = function (box) {
        var getIntersectionLength = function (shape, group) {
            var left = Math.max(group.left, shape.left);
            var right = Math.min(group.right, shape.right);
            return Math.max(right - left, 0);
        };
        var groupBox = this.getBox();
        var xIntersection = getIntersectionLength({ left: box.left, right: box.right }, { left: groupBox.left, right: groupBox.right });
        var yIntersection = getIntersectionLength({ left: box.top, right: box.bottom }, { left: groupBox.top, right: groupBox.bottom });
        var contactSquare = xIntersection * yIntersection;
        var boxSquare = (box.right - box.left) * (box.bottom - box.top);
        return Math.round((contactSquare / boxSquare) * 100);
    };
    BaseGroup.prototype.setMinBox = function (box) {
        var _a = box || this.getBox(), left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
        this.config.$minBox = {
            left: left,
            right: right,
            top: top,
            bottom: bottom,
        };
    };
    BaseGroup.prototype.getBox = function () {
        var _a = this.config, _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.dx, dx = _d === void 0 ? 0 : _d, _e = _a.dy, dy = _e === void 0 ? 0 : _e, $width = _a.$width, $height = _a.$height;
        var left = x + dx;
        var right = left + $width;
        var top = y + dy;
        var bottom = top + $height;
        return { left: left, right: right, top: top, bottom: bottom };
    };
    BaseGroup.prototype.getChildBox = function () {
        var size = { left: 0, top: 0, right: 0, bottom: 0 };
        this.data.eachChild(this.id, function (_a) {
            var $item = _a.$item;
            var box = $item.getBox();
            if (box.right > size.right || size.right === 0) {
                size.right = box.right;
            }
            if (box.left < size.left || size.left === 0) {
                size.left = box.left;
            }
            if (box.bottom > size.bottom || size.bottom === 0) {
                size.bottom = box.bottom;
            }
            if (box.top < size.top || size.top === 0) {
                size.top = box.top;
            }
        }, false);
        return size;
    };
    BaseGroup.prototype.trackChildMove = function (box, mov) {
        var _a = this.config, x = _a.x, y = _a.y, width = _a.width, height = _a.height, _b = _a.exitArea, padding = _b.padding, groupBehavior = _b.groupBehavior;
        if (groupBehavior !== "unbound") {
            var XColl = x + width - padding >= box.right + mov.x && x + padding <= box.left + mov.x;
            var YColl = y + height - padding >= box.bottom + mov.y && y + padding <= box.top + mov.y;
            if (groupBehavior === "boundNoBorderExtension") {
                return XColl && YColl;
            }
            if (groupBehavior === "boundBorderExtension") {
                var _c = this.config.$minBox, right = _c.right, left = _c.left, top_1 = _c.top, bottom = _c.bottom;
                var isRightBorder = x + width - padding <= box.right + mov.x;
                var isLeftBorder = x + padding >= box.left + mov.x;
                var isTopBorder = y + padding >= box.top + mov.y;
                var isBottomBorder = y + height - padding <= box.bottom + mov.y;
                var data = { x: x, y: y, width: width, height: height };
                if (isRightBorder || (XColl && mov.x < 0 && x + width + mov.x - padding >= right)) {
                    data.width += mov.x;
                }
                if (isLeftBorder || (XColl && mov.x > 0 && x + mov.x - padding <= left)) {
                    data.width += -mov.x;
                    data.x += mov.x;
                }
                if (isBottomBorder || (YColl && mov.y < 0 && y + height + mov.y - padding >= bottom)) {
                    data.height += mov.y;
                }
                if (isTopBorder || (YColl && mov.y > 0 && y + mov.y - padding <= top_1)) {
                    data.height += -mov.y;
                    data.y += mov.y;
                }
                this.data.update(this.id, data);
            }
        }
        return true;
    };
    BaseGroup.prototype.getChildHtmlNodes = function (config, data) {
        var nodes = [];
        var x = config.x, y = config.y, open = config.open, header = config.header;
        var isOpen = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.closable) ? open : true;
        if (config.groupChildren.length) {
            if (Array.isArray(data)) {
                for (var index = 0; index < data.length; index++) {
                    if (!data[index].hidden && isOpen) {
                        data[index].$gx = data[index].x - x;
                        data[index].$gy = data[index].y - y;
                        nodes.push(data[index].$item.render());
                    }
                }
            }
            else {
                data.eachChild(this.id, function (item) {
                    if (!item.hidden && isOpen) {
                        item.$gx = item.x - x;
                        item.$gy = item.y - y;
                        nodes.push(item.$item.render());
                    }
                }, false);
            }
        }
        return nodes;
    };
    BaseGroup.prototype.getChildSvgNodes = function (_a, data) {
        var _this = this;
        var $typeConfig = _a.$typeConfig, x = _a.x, y = _a.y, groupChildren = _a.groupChildren, header = _a.header;
        var isOpen = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.closable) ? open : true;
        var nodes = [];
        if (groupChildren.length && $typeConfig && isOpen) {
            data.mapVisible(function (item) {
                var _a;
                if (item.$item.getBaseType() !== "line" ||
                    item.$move ||
                    ((_a = item === null || item === void 0 ? void 0 : item.points) === null || _a === void 0 ? void 0 : _a.some(function (_a) {
                        var custom = _a.custom;
                        return custom;
                    }))) {
                    return;
                }
                var from = data.getItem(item.from);
                var to = data.getItem(item.to);
                if ((from === null || from === void 0 ? void 0 : from.$group) == _this.id &&
                    (to === null || to === void 0 ? void 0 : to.$group) == _this.id &&
                    from.$gx &&
                    from.$gy &&
                    to.$gx &&
                    to.$gy) {
                    (0, linkPaths_1.nearestLinkPath)(item, __assign(__assign({}, from), { x: from.$gx, y: from.$gy }), __assign(__assign({}, to), { x: to.$gx, y: to.$gy }), $typeConfig);
                    nodes.push(item.$item.render());
                }
                else if ((from === null || from === void 0 ? void 0 : from.$group) === _this.id && from.$gx && from.$gy && to) {
                    (0, linkPaths_1.nearestLinkPath)(item, __assign(__assign({}, from), { x: from.$gx, y: from.$gy }), __assign(__assign({}, to), { x: to.x - x, y: to.y - y }), $typeConfig);
                    nodes.push(item.$item.render());
                }
                else if ((to === null || to === void 0 ? void 0 : to.$group) === _this.id && to.$gx && to.$gy && from) {
                    (0, linkPaths_1.nearestLinkPath)(item, __assign(__assign({}, from), { x: from.x - x, y: from.y - y }), __assign(__assign({}, to), { x: to.$gx, y: to.$gy }), $typeConfig);
                    nodes.push(item.$item.render());
                }
            });
        }
        return nodes;
    };
    BaseGroup.prototype.getGroupHeader = function (config, editorNode) {
        var getHeaderClass = function (config) {
            var position = config.header.position;
            return "dhx_diagram_group__header dhx_diagram_group__header--position_".concat(position);
        };
        var getHeaderStyle = function (config) {
            var _a = config.style, strokeWidth = _a.strokeWidth, stroke = _a.stroke, borderStyle = _a.borderStyle, _b = config.header, position = _b.position, fill = _b.fill;
            var height = position === "bottom" || position === "top" ? config.header.height : "100%";
            var width = position === "right" || position === "left" ? config.header.height : "100%";
            var border = "".concat(strokeWidth, "px ").concat(borderStyle, " ").concat(stroke);
            return {
                height: height,
                width: width,
                minWidth: width,
                minHeight: height,
                background: fill,
                zIndex: config.$selected ? 1 : 0,
                border: border,
            };
        };
        var id = config.id, _a = config.header, text = _a.text, closable = _a.closable, position = _a.position, iconColor = _a.iconColor, $editable = config.$editable, open = config.open, type = config.type;
        var isClosable = type !== "$sgroup" && closable;
        var height = position === "right" || position === "left" ? config.height : "100%";
        var width = position === "bottom" || position === "top" ? config.width : "100%";
        return (0, dom_1.el)("div", {
            dhx_group_header: id,
            class: getHeaderClass(config),
            style: getHeaderStyle(config),
        }, [
            (0, dom_1.el)("span.dhx_diagram_group__header_text", {
                style: (0, templates_1.getTextStyle)(__assign(__assign({}, config === null || config === void 0 ? void 0 : config.header), { container: { width: width, height: height } })),
            }, $editable && this.editableProperty.editableId === id ? [editorNode] : text),
            (isClosable && (0, templates_1.getExpandIcon)({ color: iconColor, open: open, position: position })) || null,
        ]);
    };
    BaseGroup.prototype.setDefaults = function (config) {
        config.x = config.x || 0;
        config.y = config.y || 0;
        config.open = typeof config.open === "boolean" ? config.open : true;
        if (config.header) {
            config.header = __assign({ enable: true, text: "", fontSize: 14, lineHeight: 14, textAlign: "center", textVerticalAlign: "center", fontStyle: "normal", fontWeight: "500", fontColor: "#4C4C4C", position: "top", editable: true, fill: "#EEF1F6", height: 40, iconColor: "#808080" }, config.header);
        }
        config.style = __assign({ strokeWidth: 1, stroke: "#B8C6D6", strokeType: "line", borderStyle: "solid", fill: "inherit", overFill: "rgba(46, 204, 113, 0.1)", partiallyFill: "rgba(231, 76, 60, 0.1)" }, config.style);
        config.entryArea = __assign({ catchArea: 100, borderFlexible: false }, config.entryArea);
        if (!config.entryArea.borderFlexible) {
            config.entryArea.catchArea = 100;
        }
        config.exitArea = __assign({ groupBehavior: "unbound", padding: 0 }, config.exitArea);
        config.fixed = config.fixed || false;
        config.groupChildren = config.groupChildren || [];
        return config;
    };
    BaseGroup.prototype.setServiceProp = function (config) {
        var open = config.open, height = config.height, width = config.width, header = config.header;
        config.$captureArea = config.$captureArea || "out";
        if (header) {
            var enable = header.enable, closable = header.closable, headerHeight = header.height, position = header.position;
            var isCollapsedHeader = !open && enable && closable;
            if (isCollapsedHeader) {
                var verticalPosition = position === "left" || position === "right";
                var horizontalPosition = position === "bottom" || position === "top";
                config.$width = verticalPosition ? parseInt(headerHeight) : width;
                config.$height = horizontalPosition ? parseInt(headerHeight) : height;
                return;
            }
        }
        config.$width = width;
        config.$height = height;
    };
    return BaseGroup;
}(BaseItem_1.BaseItem));
exports.BaseGroup = BaseGroup;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollView = exports.scrollViewConfig = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
exports.scrollViewConfig = {
    enable: false,
    autoHide: true,
    timeout: 1000,
    scrollHandler: function () { },
};
var ScrollView = /** @class */ (function () {
    function ScrollView(getRootView, config) {
        var _a;
        if (config === void 0) { config = {}; }
        var _this = this;
        this.config = (0, core_1.extend)({
            enable: exports.scrollViewConfig.enable,
            autoHide: exports.scrollViewConfig.autoHide,
            timeout: exports.scrollViewConfig.timeout,
            scrollHandler: exports.scrollViewConfig.scrollHandler,
        }, config);
        this._wheelName = (0, html_1.isIE)() ? "onmousewheel" : "onwheel";
        this._getRootView = getRootView;
        this._scrollYTop = this._scrollXLeft = this._runnerYTop = this._runnerXLeft = this._runnerHeight = this._runnerWidth = 0;
        this._visibleYArea = this._visibleXArea = 1;
        this._scrollWidth = (0, html_1.getScrollbarWidth)();
        this._scrollHeight = (0, html_1.getScrollbarHeight)();
        this._handlers = (_a = {
                onscroll: function (e) {
                    _this.config.scrollHandler(e);
                    _this.update();
                }
            },
            _a[this._wheelName] = function (e) {
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                e.preventDefault();
                var sign = (e.deltaY || -e.wheelDelta) > 0 ? 1 : -1;
                var delta = sign * 40;
                var area = _this._getRefs().area;
                if (isY) {
                    var maxBottom = area.scrollHeight - _this._runnerHeight;
                    var newScrollTop = _this._scrollYTop + delta;
                    if (newScrollTop < 0) {
                        area.scrollTop = 0;
                    }
                    else if (newScrollTop > maxBottom) {
                        area.scrollTop = maxBottom;
                    }
                    else {
                        area.scrollTop = newScrollTop;
                    }
                }
                else {
                    var maxRight = area.scrollWidth - _this._runnerWidth;
                    var newScrollLeft = _this._scrollXLeft + delta;
                    if (newScrollLeft < 0) {
                        area.scrollLeft = 0;
                    }
                    else if (newScrollLeft > maxRight) {
                        area.scrollLeft = maxRight;
                    }
                    else {
                        area.scrollLeft = newScrollLeft;
                    }
                }
                _this.update();
            },
            _a.onmousedownRunner = function (mouseDownEv) {
                mouseDownEv.preventDefault();
                var isY = !!(0, html_1.locateNodeByClassName)(mouseDownEv.target, "y-scroll");
                var _a = _this._getRefs(), area = _a.area, runnerY = _a.runnerY, runnerX = _a.runnerX;
                var rect = area.getBoundingClientRect();
                var top = rect.top + window.pageYOffset;
                var bottom = rect.bottom + window.pageYOffset;
                var maxBottom = area.scrollHeight - _this._runnerHeight;
                var deltaY = mouseDownEv.pageY - runnerY.getBoundingClientRect().top - window.pageYOffset;
                var left = rect.left + window.pageXOffset;
                var right = rect.right + window.pageXOffset;
                var maxRight = area.scrollWidth - _this._runnerWidth;
                var deltaX = mouseDownEv.pageX - runnerX.getBoundingClientRect().left - window.pageXOffset;
                var mouseMove = function (e) {
                    if (isY) {
                        var y = e.pageY - deltaY;
                        if (y <= top) {
                            area.scrollTop = 0;
                        }
                        else if (y > bottom) {
                            area.scrollTop = maxBottom;
                        }
                        else {
                            area.scrollTop = (y - top) / _this._visibleYArea;
                        }
                    }
                    else {
                        var x = e.pageX - deltaX;
                        if (x <= left) {
                            area.scrollLeft = 0;
                        }
                        else if (x > right) {
                            area.scrollLeft = maxRight;
                        }
                        else {
                            area.scrollLeft = (x - left) / _this._visibleXArea;
                        }
                    }
                    _this.update();
                };
                var mouseUp = function () {
                    document.removeEventListener("mousemove", mouseMove);
                    document.removeEventListener("mouseup", mouseUp);
                    document.body.classList.remove("dhx-no-select");
                };
                document.body.classList.add("dhx-no-select");
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp);
            },
            _a.onmousedownArea = function (e) {
                if ((0, html_1.locateNodeByClassName)(e, "scroll-runner"))
                    return;
                e.preventDefault();
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                var _a = _this._getRefs(), area = _a.area, runnerY = _a.runnerY, runnerX = _a.runnerX;
                if (isY) {
                    area.scrollTop += (e.pageY - runnerY.getBoundingClientRect().top) / _this._visibleYArea;
                }
                else {
                    area.scrollLeft += (e.pageX - runnerX.getBoundingClientRect().left) / _this._visibleXArea;
                }
                _this.update();
            },
            _a.onmouseenter = function (e) {
                if ((0, html_1.locateNodeByClassName)(e, "scroll-runner"))
                    return;
                var refs = _this._getRefs();
                if (!refs) {
                    return;
                }
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                var areaX = refs.areaX, areaY = refs.areaY;
                if (isY && _this._runnerHeight > 0) {
                    areaY.style.background = "#eee";
                }
                else if (!isY && _this._runnerWidth > 0) {
                    areaX.style.background = "#eee";
                }
            },
            _a.onmouseleave = function (e) {
                if ((0, html_1.locateNodeByClassName)(e, "scroll-runner"))
                    return;
                var refs = _this._getRefs();
                if (!refs) {
                    return;
                }
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                var areaX = refs.areaX, areaY = refs.areaY;
                if (isY && _this._runnerHeight > 0) {
                    areaY.style.background = "transparent";
                }
                else if (!isY && _this._runnerWidth > 0) {
                    areaX.style.background = "transparent";
                }
            },
            _a);
    }
    ScrollView.prototype.enable = function () {
        this.config.enable = true;
        this._getRootView().redraw();
    };
    ScrollView.prototype.disable = function () {
        this.config.enable = false;
        this._getRootView().redraw();
    };
    ScrollView.prototype.render = function (element, uid) {
        var _a, _b;
        var _this = this;
        if (uid === void 0) { uid = ""; }
        if (!this.config.enable || !element.length) {
            return element;
        }
        if (uid)
            this._uid = uid;
        var scrollView = this.config.enable
            ? [
                (0, dom_1.el)(".y-scroll", (_a = {},
                    _a[this._wheelName] = this._handlers[this._wheelName],
                    _a._ref = uid ? "scroll-y-area-".concat(uid) : "scroll-y-area",
                    _a.onmousedown = this._handlers.onmousedownArea,
                    _a.onmouseenter = this._handlers.onmouseenter,
                    _a.onmouseleave = this._handlers.onmouseleave,
                    _a.style = {
                        width: "6px",
                        height: "100%",
                        right: 0,
                        top: 0,
                        position: "absolute",
                    },
                    _a), [
                    (0, dom_1.el)(".scroll-runner", {
                        _ref: uid ? "scroll-y-runner-".concat(uid) : "scroll-y-runner",
                        onmousedown: this._handlers.onmousedownRunner,
                        style: {
                            height: this._runnerHeight + "px",
                            top: this._runnerYTop,
                        },
                    }),
                ]),
                (0, dom_1.el)(".x-scroll", (_b = {},
                    _b[this._wheelName] = this._handlers[this._wheelName],
                    _b._ref = uid ? "scroll-x-area-".concat(uid) : "scroll-x-area",
                    _b.onmousedown = this._handlers.onmousedownArea,
                    _b.onmouseenter = this._handlers.onmouseenter,
                    _b.onmouseleave = this._handlers.onmouseleave,
                    _b.style = {
                        width: "100%",
                        height: "6px",
                        left: 0,
                        bottom: 0,
                        position: "absolute",
                    },
                    _b), [
                    (0, dom_1.el)(".scroll-runner", {
                        _ref: uid ? "scroll-x-runner-".concat(uid) : "scroll-x-runner",
                        onmousedown: this._handlers.onmousedownRunner,
                        style: {
                            width: this._runnerWidth + "px",
                            left: this._runnerXLeft,
                        },
                    }),
                ]),
            ]
            : null;
        return (0, dom_1.el)(".scroll-view-wrapper", [
            (0, dom_1.el)(".scroll-view", {
                onscroll: this._handlers.onscroll,
                _ref: uid ? "scroll-view-".concat(uid) : "scroll-view",
                _hooks: {
                    didInsert: function () {
                        _this.update();
                    },
                    didRecycle: function () {
                        _this.update();
                    },
                },
                style: {
                    width: "calc(100% + ".concat(this._scrollWidth, "px)"),
                    height: "calc(100% + ".concat(this._scrollHeight, "px)"),
                    "margin-bottom": "-".concat(this._scrollHeight, "px"),
                },
            }, element),
        ].concat(scrollView));
    };
    ScrollView.prototype.update = function () {
        var refs = this._getRefs();
        if (!refs) {
            return;
        }
        var area = refs.area, areaX = refs.areaX, areaY = refs.areaY, runnerY = refs.runnerY, runnerX = refs.runnerX;
        this._visibleYArea = area.clientHeight / area.scrollHeight;
        this._visibleXArea = area.clientWidth / area.scrollWidth;
        this._scrollYTop = area.scrollTop;
        this._scrollXLeft = area.scrollLeft;
        this._runnerYTop = this._scrollYTop * this._visibleYArea;
        this._runnerXLeft = this._scrollXLeft * this._visibleXArea;
        this._runnerHeight = this._visibleYArea < 1 ? area.clientHeight * this._visibleYArea : 0;
        this._runnerWidth = this._visibleXArea < 1 ? area.clientWidth * this._visibleXArea : 0;
        var initialTop = runnerY.style.top;
        var initialLeft = runnerX.style.left;
        // update dom
        runnerY.style.opacity = 1;
        runnerY.style.top = this._runnerYTop + "px";
        runnerY.style.height = this._runnerHeight + "px";
        runnerX.style.opacity = 1;
        runnerX.style.left = this._runnerXLeft + "px";
        runnerX.style.width = this._runnerWidth + "px";
        if (initialTop !== runnerY.style.top) {
            areaY.style.opacity = 0.9;
            areaY.style.width = "10px";
        }
        if (initialLeft !== runnerX.style.left) {
            areaX.style.opacity = 0.9;
            areaX.style.height = "10px";
        }
        if (this.config.autoHide) {
            !this._autoHideFunc &&
                (this._autoHideFunc = (0, core_1.debounce)(function () {
                    runnerY.style.opacity = 0;
                    areaY.style.width = "6px";
                    runnerX.style.opacity = 0;
                    areaX.style.height = "6px";
                }, this.config.timeout));
        }
        else {
            this._autoHideFunc = (0, core_1.debounce)(function () {
                areaY.style.width = "6px";
                areaX.style.height = "6px";
            }, this.config.timeout);
        }
        this._autoHideFunc();
    };
    ScrollView.prototype._getRefs = function () {
        var rootView = this._getRootView();
        var refsCheck = !!(rootView.refs["scroll-view"] &&
            (rootView.refs["scroll-x-runner"] || rootView.refs["scroll-y-runner"]));
        var refsIdCheck = !!(this._uid &&
            rootView.refs["scroll-view-".concat(this._uid)] &&
            (rootView.refs["scroll-x-runner-".concat(this._uid)] || rootView.refs["scroll-y-runner-".concat(this._uid)]));
        if (rootView.refs) {
            if (refsCheck) {
                return {
                    area: rootView.refs["scroll-view"].el,
                    areaY: rootView.refs["scroll-y-area"].el,
                    areaX: rootView.refs["scroll-x-area"].el,
                    runnerY: rootView.refs["scroll-y-runner"].el,
                    runnerX: rootView.refs["scroll-x-runner"].el,
                };
            }
            else if (refsIdCheck) {
                return {
                    area: rootView.refs["scroll-view-".concat(this._uid)].el,
                    areaY: rootView.refs["scroll-y-area-".concat(this._uid)].el,
                    areaX: rootView.refs["scroll-x-area-".concat(this._uid)].el,
                    runnerY: rootView.refs["scroll-y-runner-".concat(this._uid)].el,
                    runnerX: rootView.refs["scroll-x-runner-".concat(this._uid)].el,
                };
            }
        }
    };
    return ScrollView;
}());
exports.ScrollView = ScrollView;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shapesFactory = exports.shapes = void 0;
var Card_1 = __webpack_require__(56);
var ImgCard_1 = __webpack_require__(118);
var FlowShape_1 = __webpack_require__(38);
var TextShape_1 = __webpack_require__(119);
var CustomShape_1 = __webpack_require__(57);
var TopicShape_1 = __webpack_require__(120);
exports.shapes = {
    card: Card_1.Card,
    "img-card": ImgCard_1.ImgCard,
    text: TextShape_1.TextShape,
    topic: TopicShape_1.TopicShape,
};
for (var key in FlowShape_1.flowShapes) {
    exports.shapes[key] = FlowShape_1.FlowShape;
}
function shapesFactory(config, parameters) {
    var component = exports.shapes[config.type];
    if (!component) {
        component = exports.shapes.card;
        if (parameters.shapes[config.type]) {
            return new CustomShape_1.CustomShape(config, parameters);
        }
    }
    return new component(config, parameters);
}
exports.shapesFactory = shapesFactory;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diagram = void 0;
/* eslint-disable @typescript-eslint/unbound-method */
var events_1 = __webpack_require__(3);
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var ts_menu_1 = __webpack_require__(62);
var Export_1 = __webpack_require__(116);
var linkPaths_1 = __webpack_require__(25);
var Selection_1 = __webpack_require__(117);
var shapeFactory_1 = __webpack_require__(43);
var FlowShape_1 = __webpack_require__(38);
var ShapesCollection_1 = __webpack_require__(58);
var Toolbar_1 = __webpack_require__(121);
var types_1 = __webpack_require__(18);
var Graph_1 = __webpack_require__(39);
var types_2 = __webpack_require__(59);
var Hola_1 = __webpack_require__(122);
var compose_1 = __webpack_require__(126);
var decompose_1 = __webpack_require__(127);
var mindmap_1 = __webpack_require__(128);
var orgonogram_1 = __webpack_require__(129);
var Swimlane_1 = __webpack_require__(69);
var Group_1 = __webpack_require__(70);
var Editor_1 = __webpack_require__(130);
var GroupSwimlane_1 = __webpack_require__(71);
var CellManager_1 = __webpack_require__(131);
var Line_1 = __webpack_require__(132);
var LineTitle_1 = __webpack_require__(133);
var lineHelpers_1 = __webpack_require__(26);
var Radial_1 = __webpack_require__(134);
var Diagram = /** @class */ (function (_super) {
    __extends(Diagram, _super);
    function Diagram(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this._orgTypes = ["org", "mindmap"];
        _this.version = "6.0.10";
        _this._set_defaults();
        _this._init_struct();
        _this._initEvents();
        if (_this.config.toolbar) {
            _this.toolbar = new Toolbar_1.Toolbar(_this.events, _this.config.toolbar);
        }
        var view = (0, dom_1.create)({ render: function (vm) { return _this._render(vm); } }, _this);
        _this.mount(container, view);
        return _this;
    }
    Diagram.prototype.addShape = function (type, parameters) {
        var _this = this;
        var exclude = __spreadArray([
            "line",
            "dash",
            "card",
            "img-card",
            "text",
            "topic"
        ], Object.keys(this.flowShapes), true);
        if (exclude.includes(type)) {
            throw new Error("Cannot reassign existing type");
        }
        if (typeof parameters.template !== "function") {
            throw new Error("The template property must be set as a function");
        }
        if (parameters.defaults) {
            this.config.defaults[type] = __assign({}, parameters.defaults);
        }
        if (parameters.eventHandlers) {
            for (var _i = 0, _a = Object.entries(parameters.eventHandlers); _i < _a.length; _i++) {
                var _b = _a[_i], event_name = _b[0], events = _b[1];
                this._htmlevents[event_name] = (0, html_1.eventHandler)(function (event) {
                    var item = __assign({}, _this.data.getItem((0, html_1.locate)(event)));
                    Object.keys(item).forEach(function (key) {
                        if (key.startsWith("$") || key === "preview") {
                            delete item[key];
                        }
                    });
                    return item;
                }, events, this._htmlevents[event_name]);
            }
        }
        this.flowShapes[type] = parameters.template;
    };
    Diagram.prototype.locate = function (event) {
        var id = (0, html_1.locate)(event, "data-dhx-id");
        var item = this.data.getItem(id);
        return item ? item.$item : null;
    };
    Diagram.prototype.collapseItem = function (id, dir) {
        var _this = this;
        if (this.events.fire(types_1.DiagramEvents.beforeCollapse, [id, dir])) {
            var shape = this.data.getItem(id);
            if (this.config.type === "mindmap" &&
                shape.$level === 0 &&
                shape.openDir &&
                (dir === "left" || dir === "right")) {
                this.data.update(id, {
                    openDir: {
                        right: dir === "right" ? false : !!shape.openDir.right,
                        left: dir === "left" ? false : !!shape.openDir.left,
                    },
                });
                if (shape.$connection.length) {
                    shape.$connection.forEach(function (item) {
                        var child = _this.data.getItem(item[1]);
                        if (child.dir && child.dir.toLowerCase().includes(dir)) {
                            _this.data.update(child.id, {
                                hidden: true,
                            }, true);
                        }
                    });
                }
            }
            else {
                this.data.update(id, { open: false });
            }
            this.events.fire(types_1.DiagramEvents.afterCollapse, [id, dir]);
        }
        this.paint();
    };
    Diagram.prototype.expandItem = function (id, dir) {
        var _this = this;
        var shape = this.data.getItem(id);
        if ((shape === null || shape === void 0 ? void 0 : shape.open) && !shape.openDir)
            return;
        if (this.events.fire(types_1.DiagramEvents.beforeExpand, [id, dir])) {
            if (this.config.type === "mindmap" &&
                shape.$level === 0 &&
                shape.openDir &&
                (dir === "left" || dir === "right")) {
                this.data.update(id, {
                    open: true,
                    openDir: {
                        right: dir === "right" ? true : !!shape.openDir.right,
                        left: dir === "left" ? true : !!shape.openDir.left,
                    },
                });
                if (shape.$connection.length) {
                    shape.$connection.forEach(function (item) {
                        var child = _this.data.getItem(item[1]);
                        if (child.dir && child.dir.toLowerCase().includes(dir)) {
                            _this.data.update(child.id, {
                                hidden: false,
                            }, true);
                        }
                    });
                }
            }
            else {
                this.data.update(id, { open: true });
            }
            this.events.fire(types_1.DiagramEvents.afterExpand, [id, dir]);
            var item = this.data.getItem(id);
            if (item && item.parent) {
                this.expandItem(item.parent);
            }
        }
        this.paint();
    };
    Diagram.prototype.getScrollState = function () {
        var wrapper = this.getRootView().node.el;
        return {
            x: Math.round(wrapper.scrollLeft * this.config.scale),
            y: Math.round(wrapper.scrollTop * this.config.scale),
        };
    };
    Diagram.prototype.scrollTo = function (x, y) {
        var wrapper = this.getRootView().node.el;
        wrapper.scrollLeft = Math.round(x * this.config.scale);
        wrapper.scrollTop = Math.round(y * this.config.scale);
    };
    Diagram.prototype.showItem = function (id, dir) {
        var _this = this;
        var item = this.data.getItem(id);
        if (!item) {
            return;
        }
        if (item.parent) {
            this.expandItem(item.parent, dir);
        }
        (0, dom_1.awaitRedraw)().then(function () {
            var wrapper = _this.getRootView().node.el;
            var box = item.$item.getBox();
            var width = wrapper.offsetWidth / 2;
            var height = wrapper.offsetHeight / 2;
            _this.scrollTo(box.right + 10 - width, box.bottom + 10 - height);
        });
    };
    Diagram.prototype.autoPlace = function (config) {
        var _this = this;
        var _a = this.config, autoplacement = _a.autoplacement, type = _a.type;
        var placeMode = (config === null || config === void 0 ? void 0 : config.placeMode) || (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.placeMode) || "orthogonal";
        var mode = (config === null || config === void 0 ? void 0 : config.mode) || (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.mode) || "direct";
        var root = (config === null || config === void 0 ? void 0 : config.root) || this.selection.getIds()[0];
        if (this._orgTypes.includes(type)) {
            throw new Error("This method does not work with this type of diagram");
        }
        var graph = new Graph_1.default();
        this.data.forEach(function (item) {
            var itemType = item.$item.getBaseType();
            if (itemType === "shape") {
                graph.addNode({
                    id: item.id.toString(),
                    w: item.width,
                    h: item.height,
                    x: item.x,
                    y: item.y,
                });
            }
        });
        this.data.forEach(function (item) {
            var _a;
            var itemType = item.$item.getBaseType();
            if (itemType === "line" && item.from && item.to) {
                var points = ((_a = item.points) === null || _a === void 0 ? void 0 : _a.filter(function (p, i) {
                    if (i === 0 || i === item.points.length - 1) {
                        return true;
                    }
                })) || [];
                _this.data.update(item.id, {
                    fromSide: mode === "direct" ? "center" : undefined,
                    toSide: mode === "direct" ? "center" : undefined,
                    points: points,
                    customGap: undefined,
                });
                graph.addEdge(item.from.toString(), item.to.toString());
            }
            else if (itemType === "line") {
                _this.data.remove(item.id);
            }
        });
        graph.clean();
        var autoLayout;
        if (placeMode === "orthogonal") {
            autoLayout = new Hola_1.default();
        }
        else if (placeMode === "radial") {
            autoLayout = new Radial_1.default();
        }
        var composeGraph = (0, compose_1.compose)((0, decompose_1.decompose)(graph).map(function (graphItem) {
            graphItem = autoLayout.layout(graphItem, {
                mode: mode,
                root: root,
                dir: (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.direction) || types_2.Direction.Bottom,
                wide: autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.wide,
                itemPadding: (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.itemPadding) || 0,
                levelPadding: (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.levelPadding) || 0,
                full: true,
                preserveLocation: false,
            });
            graphItem.setGlobalBox();
            return graphItem;
        }), {
            padding: typeof (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.graphPadding) === "number"
                ? (config === null || config === void 0 ? void 0 : config.graphPadding) || (autoplacement === null || autoplacement === void 0 ? void 0 : autoplacement.graphPadding)
                : 200,
        });
        if (!composeGraph)
            return;
        var bounds = composeGraph.getBox();
        composeGraph.translate({ x: -bounds[0][0], y: -bounds[1][0] });
        composeGraph.getNodes().forEach(function (node) {
            var item = _this.data.getItem(node.id);
            if (!item || (item === null || item === void 0 ? void 0 : item.$group))
                return;
            var x = Math.floor(node.x - node.w / 2);
            var y = Math.floor(node.y - node.h / 2);
            _this.data.update(node.id, { x: x, y: y });
        });
    };
    Diagram.prototype.getCurrentCoords = function (event) {
        var _a = this.config, scale = _a.scale, margin = _a.margin;
        var container = this.getRootView().node.el;
        var diagramRect = container.getBoundingClientRect();
        if (!container || !diagramRect) {
            return;
        }
        var size = this._diagramSize || { left: -margin.x, top: -margin.y };
        var scrolls = {
            x: container.scrollLeft,
            y: container.scrollTop,
        };
        return {
            x: Math.round((event.clientX - diagramRect.left + scrolls.x) / scale - margin.x + (size.left + margin.x)),
            y: Math.round((event.clientY - diagramRect.top + scrolls.y) / scale - margin.y + (size.top + margin.y)),
        };
    };
    Diagram.prototype.findNearestConnector = function (event) {
        var coords = this.getCurrentCoords(event);
        var fitLines = [];
        this.data.map(function (item) {
            var _a;
            if (item.$item.getBaseType() === "line" && ((_a = item === null || item === void 0 ? void 0 : item.points) === null || _a === void 0 ? void 0 : _a.length)) {
                for (var i = 0; i < item.points.length; i++) {
                    var point = item.points[i];
                    if (item.points[i + 1]) {
                        var a = coords;
                        var b = point;
                        var c = item.points[i + 1];
                        var gap = 8;
                        var byY = (b.y < a.y && c.y > a.y) || (c.y < a.y && b.y > a.y);
                        var byX = (b.x < a.x && c.x > a.x) || (c.x < a.x && b.x > a.x);
                        if (byY || byX) {
                            var ab = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
                            var ac = Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
                            var cb = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2));
                            var p = (ab + ac + cb) / 2;
                            var S = Math.sqrt(p * (p - ab) * (p - ac) * (p - cb));
                            var h = (2 * S) / cb;
                            if (h <= gap) {
                                fitLines.push(item);
                                break;
                            }
                        }
                    }
                }
            }
        });
        if (fitLines.length) {
            return fitLines[fitLines.length - 1];
        }
    };
    Diagram.prototype.destructor = function () {
        this.editor && this.editor.destructor();
        this._menu && this._menu.destructor();
        this.data.removeAll();
        this.data.events.clear();
        this.events.clear();
        this.selection.clear();
        this.unmount();
    };
    Diagram.prototype._render = function (vm) {
        var _this = this;
        var _a, _b;
        if (this._doNotRepaint && vm.node) {
            return vm.node;
        }
        var _c = this._getContent(), size = _c.size, svgContent = _c.svgContent, htmlContent = _c.htmlContent;
        this.events.fire(types_1.DiagramEvents.beforeRender, [size]);
        this._diagramSize = size;
        var _d = this.config, margin = _d.margin, type = _d.type, scale = _d.scale;
        var width = size.x - size.left + margin.x * 2;
        var height = size.y - size.top + margin.y * 2;
        size.left -= margin.x;
        size.top -= margin.y;
        var topHtmlPosition = size.top + margin.y < 0 ? Math.abs(size.top) : margin.y;
        var leftHtmlPosition = size.left + margin.x < 0 ? Math.abs(size.left) : margin.x;
        this._backgroundPos = {
            x: -(Math.ceil(leftHtmlPosition / this.config.gridStep) * this.config.gridStep -
                leftHtmlPosition) * scale,
            y: -(Math.ceil(topHtmlPosition / this.config.gridStep) * this.config.gridStep -
                topHtmlPosition) * scale,
        };
        var toolbar = null;
        if (this.toolbar &&
            ((((_a = this._lastItemClickCoords) === null || _a === void 0 ? void 0 : _a.x) && ((_b = this._lastItemClickCoords) === null || _b === void 0 ? void 0 : _b.y)) || this.selection.getIds().length)) {
            var items = this.selection
                .getIds()
                .map(function (id) { return _this.data.getItem(id); })
                .filter(function (i) { return i; });
            if (items.length) {
                if (items.length > 1) {
                    toolbar = this.toolbar.render(items.filter(function (item) { return item.$item.getBaseType() !== "line"; }), __assign(__assign({}, size), { scale: scale }));
                }
                else {
                    toolbar = this.toolbar.render(items[0], __assign(__assign({}, size), { scale: scale }), this._lastItemClickCoords);
                }
            }
        }
        var extra = [];
        if (this.config.$svg) {
            extra = this.config.$svg(size);
        }
        return (0, dom_1.el)(".dhx_widget.dhx_diagram", __assign(__assign({}, this._htmlevents), { "data-dhx-widget-id": this._uid, style: {
                backgroundImage: this._getBackground(this.config.gridStep),
                backgroundPosition: "".concat(this._backgroundPos.x, "px ").concat(this._backgroundPos.y, "px"),
            } }), [
            (0, dom_1.el)("div.dhx_diagram__container", {
                style: {
                    height: height * scale,
                    width: width * scale,
                },
            }, [
                (0, dom_1.el)(".dhx_diagram__wrapper.dhx_wrapper", {
                    style: {
                        transform: "scale(".concat(scale, ")"),
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transformOrigin: "top",
                        zIndex: this._orgTypes.includes(type) ? (this._active ? 1 : 0) : 0,
                    },
                }, [
                    (0, dom_1.el)("div.dhx_diagram__scale-container", [
                        (0, dom_1.sv)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: width,
                            height: height,
                            viewBox: "".concat(size.left, " ").concat(size.top, " ").concat(width, " ").concat(height),
                        }, [
                            (0, dom_1.sv)("defs", [
                                (0, dom_1.sv)("filter", {
                                    x: 0,
                                    y: 0,
                                    width: 1,
                                    height: 1,
                                    id: "dhx_text_background",
                                }, [
                                    (0, dom_1.sv)("feFlood", { "flood-color": "white" }),
                                    (0, dom_1.sv)("feComposite", { in: "SourceGraphic" }),
                                ]),
                            ]),
                            (0, dom_1.sv)("g", svgContent),
                        ]),
                        (0, dom_1.el)(".dhx_diagram__shape-container", {
                            style: {
                                position: "absolute",
                                top: topHtmlPosition,
                                left: leftHtmlPosition,
                            },
                        }, htmlContent),
                    ]),
                ]),
                extra,
                toolbar,
            ]),
        ]);
    };
    Diagram.prototype._set_defaults = function () {
        var _a, _b;
        var defaultShapeType;
        switch (this.config.type) {
            case "mindmap":
                defaultShapeType = "topic";
                break;
            case "org":
                defaultShapeType = "card";
                break;
            default:
                defaultShapeType = "rectangle";
                break;
        }
        this.config = (0, core_1.extend)({
            type: "default",
            defaultShapeType: ((_a = this.config) === null || _a === void 0 ? void 0 : _a.defaultShapeType) || defaultShapeType,
            lineConfig: {
                lineType: "line",
                lineDirection: "forwardArrow",
                arrowsHidden: false,
                lineGap: 10,
            },
            scale: 1,
            margin: {
                x: 40,
                y: 40,
                itemX: 40,
                itemY: ((_b = this.config) === null || _b === void 0 ? void 0 : _b.type) === "mindmap" ? 20 : 40,
            },
            gridStep: 10,
            defaults: {},
            autoplacement: {
                mode: "direct",
                graphPadding: 200,
            },
            exportStyles: true,
            $isEditor: false,
        }, this.config);
    };
    Diagram.prototype._initEventsHandlers = function () {
        var _this = this;
        this._htmlevents = {
            onscroll: function (event) {
                var target = event.target;
                var scale = _this.config.scale;
                var isContainer = target.getAttribute && (target.getAttribute("class") || "").match(/dhx_diagram\b/);
                if (isContainer) {
                    target.style.backgroundPosition = "".concat(_this._backgroundPos.x -
                        target.scrollLeft * scale, "px ").concat(_this._backgroundPos.y - target.scrollTop * scale, "px");
                }
                _this.events.fire(types_1.DiagramEvents.scroll, [_this.getScrollState()]);
            },
            onpointerdown: (0, html_1.eventHandler)(function (event) { return _this.locate(event); }, {
                dhx_diagram: function (event) {
                    var target = event.target;
                    var isContainer = target.getAttribute && (target.getAttribute("class") || "").match(/dhx_diagram\b/);
                    var isSvg = target.tagName === "svg";
                    if (!(0, html_1.locateNodeByClassName)(target, "dhx_diagram_toolbar") && (isContainer || isSvg)) {
                        var item = _this.findNearestConnector(event);
                        if (item) {
                            if (_this.config.type === "default") {
                                _this.setSelectionItem({ id: item.id }, event.shiftKey, event.altKey);
                            }
                            _this.events.fire(types_1.DiagramEvents.lineMouseDown, [item.id, event]);
                            _this.events.fire(types_1.DiagramEvents.itemMouseDown, [item.id, event]);
                        }
                        else {
                            document.body.classList.add("dhx_notouch");
                            if (!event.altKey) {
                                _this.selection.remove();
                            }
                            _this.events.fire(types_1.DiagramEvents.emptyAreaMouseDown, [event]);
                        }
                    }
                },
                dhx_diagram_line_title: function (event) {
                    var lineId = (0, html_1.locate)(event, "data-dhx-parent-id");
                    var titleId = (0, html_1.locate)(event, "data-dhx-id");
                    _this.setSelectionItem({ id: titleId }, event.shiftKey, event.altKey);
                    _this.events.fire(types_1.DiagramEvents.lineTitleMouseDown, [lineId, titleId, event]);
                },
                dhx_diagram_shape: function (event, item) {
                    _this.setSelectionItem({ id: item.id }, event.shiftKey, event.altKey);
                    _this.events.fire(types_1.DiagramEvents.shapeMouseDown, [
                        item.id,
                        event,
                        _this._getPoint(event.clientX, event.clientY),
                    ]);
                    _this.events.fire(types_1.DiagramEvents.itemMouseDown, [
                        item.id,
                        event,
                        _this._getPoint(event.clientX, event.clientY),
                    ]);
                },
                dhx_diagram_line: function (event, item) {
                    if (_this.config.type === "default") {
                        _this.setSelectionItem({ id: item.id }, event.shiftKey, event.altKey);
                    }
                    _this.events.fire(types_1.DiagramEvents.lineMouseDown, [
                        item.id,
                        event,
                        _this._getPoint(event.clientX, event.clientY),
                    ]);
                    _this.events.fire(types_1.DiagramEvents.itemMouseDown, [
                        item.id,
                        event,
                        _this._getPoint(event.clientX, event.clientY),
                    ]);
                },
                dhx_diagram_group: function (event, item) {
                    _this.setSelectionItem({ id: item.id }, event.shiftKey, event.altKey);
                    _this.events.fire(types_1.DiagramEvents.groupMouseDown, [
                        item.id,
                        event,
                        _this._getPoint(event.clientX, event.clientY),
                    ]);
                    _this.events.fire(types_1.DiagramEvents.itemMouseDown, [
                        item.id,
                        event,
                        _this._getPoint(event.clientX, event.clientY),
                    ]);
                },
            }),
            onpointerout: (0, html_1.eventHandler)(function (event) { return _this.locate(event); }, {
                "dhx_diagram_item--selected": function (event, item) {
                    _this._active = false;
                    _this.paint();
                    _this.events.fire(types_1.DiagramEvents.itemMouseOut, [item.id, event]);
                },
                dhx_diagram_item: function (event, item) {
                    if (!item)
                        return;
                    _this.events.fire(types_1.DiagramEvents.itemMouseOut, [item.id, event]);
                },
            }),
            onpointerover: (0, html_1.eventHandler)(function (event) { return _this.locate(event); }, {
                "dhx_diagram_item--selected": function (event, item) {
                    _this._active = true;
                    _this.paint();
                    _this.events.fire(types_1.DiagramEvents.itemMouseOver, [item.id, event]);
                },
                dhx_diagram_item: function (event, item) {
                    if (!item)
                        return;
                    _this.events.fire(types_1.DiagramEvents.itemMouseOver, [item.id, event]);
                },
            }),
            onclick: (0, html_1.eventHandler)(function (event) { return _this.locate(event); }, {
                dhx_diagram_menu_icon: function (event, item) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    var subHeaderId = (0, html_1.locate)(event, "subheader_id");
                    if (!_this.events.fire(types_1.DiagramEvents.beforeSubmenuOpen, [item.id, event, subHeaderId])) {
                        return;
                    }
                    var subHeaderRows = [];
                    if (((_b = (_a = item.config) === null || _a === void 0 ? void 0 : _a.subHeaderRows) === null || _b === void 0 ? void 0 : _b.enable) && ((_e = (_d = (_c = item.config) === null || _c === void 0 ? void 0 : _c.subHeaderRows) === null || _d === void 0 ? void 0 : _d.headers) === null || _e === void 0 ? void 0 : _e.length)) {
                        subHeaderRows = item.config.subHeaderRows.headers;
                    }
                    var subHeaderCols = [];
                    if (((_g = (_f = item.config) === null || _f === void 0 ? void 0 : _f.subHeaderCols) === null || _g === void 0 ? void 0 : _g.enable) && ((_k = (_j = (_h = item.config) === null || _h === void 0 ? void 0 : _h.subHeaderCols) === null || _j === void 0 ? void 0 : _j.headers) === null || _k === void 0 ? void 0 : _k.length)) {
                        subHeaderCols = item.config.subHeaderCols.headers;
                    }
                    var subHeaders = __spreadArray(__spreadArray([], subHeaderRows, true), subHeaderCols, true);
                    var _l = subHeaders.find(function (header) { return header.id === subHeaderId; }), $subMenu = _l.$subMenu, id = _l.id;
                    _this.cellManager.setSwimlane(item.id);
                    var cellIndex = _this.cellManager.getSubHeaderCellIndex(id);
                    $subMenu.data.forEach(function (data) {
                        if (data["remove"] &&
                            !_this.cellManager.validation(cellIndex, data.remove, "remove")) {
                            data.disabled = true;
                        }
                        if (data["add"] && !_this.cellManager.validation(cellIndex, data.add, "add")) {
                            data.disabled = true;
                        }
                        if (data["move"] && !_this.cellManager.validation(cellIndex, data.move, "move")) {
                            data.disabled = true;
                        }
                    });
                    _this._menu.data.parse($subMenu.data);
                    _this._menu.showAt(event);
                    _this.events.fire(types_1.DiagramEvents.afterSubmenuOpen, [item.id, event, subHeaderId]);
                },
                "dhx_diagram_toggle-icon--expand": function (event, item) {
                    if (event.target.classList.contains("icon-left")) {
                        _this.expandItem(item.id, "left");
                    }
                    else if (event.target.classList.contains("icon-right")) {
                        _this.expandItem(item.id, "right");
                    }
                    else {
                        _this.expandItem(item.id);
                    }
                },
                "dhx_diagram_toggle-icon--collapse": function (event, item) {
                    if (event.target.classList.contains("icon-left")) {
                        _this.collapseItem(item.id, "left");
                    }
                    else if (event.target.classList.contains("icon-right")) {
                        _this.collapseItem(item.id, "right");
                    }
                    else {
                        _this.collapseItem(item.id);
                    }
                },
                dhx_diagram: function (event) {
                    var target = event.target;
                    var isContainer = target.getAttribute && (target.getAttribute("class") || "").match(/dhx_diagram\b/);
                    var isSvg = target.tagName === "svg";
                    if (isContainer || isSvg) {
                        var item = _this.findNearestConnector(event);
                        if (item) {
                            _this.events.fire(types_1.DiagramEvents.lineClick, [item.id, event]);
                            _this.events.fire(types_1.DiagramEvents.itemClick, [item.id, event]);
                        }
                        else {
                            _this.events.fire(types_1.DiagramEvents.emptyAreaClick, [event]);
                        }
                    }
                },
                dhx_diagram_line_title: function (event) {
                    var lineId = (0, html_1.locate)(event, "data-dhx-parent-id");
                    var titleId = (0, html_1.locate)(event, "data-dhx-id");
                    _this.events.fire(types_1.DiagramEvents.lineTitleClick, [lineId, titleId, event]);
                },
                dhx_diagram_shape: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.shapeClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemClick, [item.id, event]);
                },
                dhx_diagram_line: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.lineClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemClick, [item.id, event]);
                },
                dhx_diagram_group: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.groupClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemClick, [item.id, event]);
                },
                dhx_diagram_group__header: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.groupHeaderClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.groupClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemClick, [item.id, event]);
                },
                dhx_diagram_swimlane__subheader: function (event, item) {
                    var subHeaderId = (0, html_1.locate)(event, "subheader_id");
                    _this.events.fire(types_1.DiagramEvents.groupHeaderClick, [item.id, event, subHeaderId]);
                    _this.events.fire(types_1.DiagramEvents.groupClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemClick, [item.id, event]);
                },
            }),
            ondblclick: (0, html_1.eventHandler)(function (event) { return _this.locate(event); }, {
                dhx_diagram: function (event) {
                    var target = event.target;
                    var isContainer = target.getAttribute && (target.getAttribute("class") || "").match(/dhx_diagram\b/);
                    var isSvg = target.tagName === "svg";
                    if (isContainer || isSvg) {
                        var item = _this.findNearestConnector(event);
                        if (item) {
                            _this.events.fire(types_1.DiagramEvents.lineDblClick, [item.id, event]);
                            _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                        }
                        else {
                            _this.events.fire(types_1.DiagramEvents.emptyAreaDblClick, [event]);
                        }
                    }
                },
                dhx_diagram_line_title: function (event) {
                    var lineId = (0, html_1.locate)(event, "data-dhx-parent-id");
                    var titleId = (0, html_1.locate)(event, "data-dhx-id");
                    _this.events.fire(types_1.DiagramEvents.lineTitleDblClick, [lineId, titleId, event]);
                },
                dhx_diagram_shape: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.shapeDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                },
                dhx_diagram_line: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.lineDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                },
                dhx_diagram_group: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.groupDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                },
                dhx_diagram_group__header: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.groupDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.groupHeaderDblClick, [item.id, event]);
                },
                dhx_diagram_swimlane__subheader: function (event, item) {
                    var subHeaderId = (0, html_1.locate)(event, "subheader_id");
                    _this.events.fire(types_1.DiagramEvents.groupDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.groupHeaderDblClick, [item.id, event, subHeaderId]);
                },
                dhx_diagram_item__text: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.shapeDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                },
                dhx_diagram_item__title: function (event, item) {
                    _this.events.fire(types_1.DiagramEvents.shapeDblClick, [item.id, event]);
                    _this.events.fire(types_1.DiagramEvents.itemDblClick, [item.id, event]);
                },
            }),
        };
    };
    Diagram.prototype._init_struct = function () {
        var _this = this;
        this.events = new events_1.EventSystem(this);
        this.flowShapes = __assign({}, FlowShape_1.flowShapes);
        this.data = new ShapesCollection_1.ShapesCollection({
            init: function (item) {
                var _a, _b, _c, _d, _e, _f;
                if (!item.id)
                    item.id = (0, core_1.uid)();
                var defType = "from" in item
                    ? ((_a = _this.config.lineConfig) === null || _a === void 0 ? void 0 : _a.lineType) || "line"
                    : _this.config.defaultShapeType;
                item.type = item.type || defType;
                switch (item.type) {
                    case "$group":
                        item.$item = new Group_1.Group(item, {
                            data: _this.data,
                        });
                        break;
                    case "$swimlane":
                        item.$item = new Swimlane_1.Swimlane(item, {
                            data: _this.data,
                        });
                        break;
                    case "$sgroup":
                        item.$item = new GroupSwimlane_1.GroupSwimlane(item, {
                            data: _this.data,
                        });
                        break;
                    case "line":
                    case "dash":
                        if (!_this._orgTypes.includes(_this.config.type) && item.from) {
                            item.stroke =
                                item.stroke || ((_c = (_b = _this.config.defaults) === null || _b === void 0 ? void 0 : _b[item.type]) === null || _c === void 0 ? void 0 : _c.stroke) || "#2196F3";
                        }
                        item.$item = new Line_1.Line(item, ((_d = _this.config.defaults) === null || _d === void 0 ? void 0 : _d[item.type]) || {});
                        break;
                    case "lineTitle":
                        item.$item = new LineTitle_1.LineTitle(item, {
                            defaults: ((_e = _this.config.defaults) === null || _e === void 0 ? void 0 : _e[item.type]) || {},
                        });
                        break;
                    default:
                        item.$item = (0, shapeFactory_1.shapesFactory)(item, {
                            defaults: ((_f = _this.config.defaults) === null || _f === void 0 ? void 0 : _f[item.type]) || {},
                            shapes: _this.flowShapes,
                            data: _this.data,
                        });
                        break;
                }
                return item;
            },
            update: function (item) {
                item.$item.config = item;
            },
            diagramConfig: this.config,
        }, this.events);
        this.selection = new Selection_1.Selection(this.data, this.events);
        this.cellManager = new CellManager_1.CellManager(this.data, this.events);
        this.export = new Export_1.Exporter("diagram", this.version, this);
        this.editor = new Editor_1.Editor({ data: this.data, events: this.events });
        this._menu = new ts_menu_1.ContextMenu(null);
    };
    Diagram.prototype._initEvents = function () {
        var _this = this;
        this._initEventsHandlers();
        this.events.on(types_1.DiagramEvents.lineDblClick, function (id) {
            if (!(0, core_1.isDefined)(id) || _this.config.type !== "default") {
                return;
            }
            (0, lineHelpers_1.addLineTitle)(_this.data.getItem(id), _this);
        });
        this.events.on(types_1.DiagramEvents.shapeDblClick, function (id, event) {
            var target = event.target;
            var item = _this.data.getItem(id).$item;
            if (!item)
                return;
            var isText = target.getAttribute && (target.getAttribute("class") || "").match(/dhx_diagram_item__text\b/);
            var isTitle = target.getAttribute &&
                (target.getAttribute("class") || "").match(/dhx_diagram_item__title\b/);
            if (!isText && !isTitle)
                return;
            if (item.isEditable() && _this.editor.openEditor(id, isTitle ? "title" : "text")) {
                item.setEditorNode(_this.editor.render(), isTitle ? "title" : "text");
            }
        });
        this.events.on(types_1.DiagramEvents.groupHeaderDblClick, function (id, event, subHeaderId) {
            var item = _this.data.getItem(id).$item;
            if (!item)
                return;
            if (((0, html_1.locateNodeByClassName)(event, "dhx_diagram_group__header_text") ||
                (0, html_1.locateNodeByClassName)(event, "dhx_diagram_swimlane__subheader_text")) &&
                item.isEditable(subHeaderId) &&
                _this.editor.openEditor(id, "text", subHeaderId)) {
                item.setEditorNode(_this.editor.render(), "text", subHeaderId || id);
            }
        });
        this.events.on(types_1.DiagramEvents.lineTitleDblClick, function (_lineId, titleId) {
            var item = _this.data.getItem(titleId).$item;
            if (item.isEditable() && _this.editor.openEditor(titleId, "text")) {
                item.setEditorNode(_this.editor.render(), "text");
            }
        });
        this.events.on(types_1.SelectionEvents.afterSelect, function (_a) {
            var id = _a.id;
            if (_this.data.getItem(id).$item.getBaseType() === "swimlane") {
                _this.cellManager.setSwimlane(id);
            }
            _this.paint();
        });
        this.events.on(types_1.SelectionEvents.afterUnSelect, function () { return _this.paint(); });
        this.events.on(types_1.DiagramEvents.itemMouseDown, function (_id, event) {
            _this._lastItemClickCoords = _this.getCurrentCoords(event);
            _this.paint();
        });
        this.events.on(types_1.DiagramEvents.lineTitleMouseDown, function (_lineId, _titleId, event) {
            _this._lastItemClickCoords = _this.getCurrentCoords(event);
            _this.paint();
        });
        [
            Editor_1.EditorEvents.beforeEditorOpen,
            Editor_1.EditorEvents.afterEditorClose,
            types_1.DataEvents.change,
            types_1.DataEvents.filter,
        ].forEach(function (event) { return _this.events.on(event, function () { return _this.paint(); }); });
        this._menu.events.on("click", function (id) {
            var _a = id.split("/"), swimlaneId = _a[0], subheaderId = _a[1], action = _a[2];
            _this.cellManager.setSwimlane(swimlaneId);
            var type = _this.cellManager.getSubHeaderType(subheaderId);
            var cellIndex = _this.cellManager.getSubHeaderCellIndex(subheaderId);
            switch (action) {
                case "move_column_left":
                    _this.cellManager.move(cellIndex, "left", true);
                    break;
                case "move_column_right":
                    _this.cellManager.move(cellIndex, "right", true);
                    break;
                case "move_row_up":
                    _this.cellManager.move(cellIndex, "up", true);
                    break;
                case "move_row_down":
                    _this.cellManager.move(cellIndex, "down", true);
                    break;
                case "add_column_left":
                    _this.cellManager.add(cellIndex, "left", true);
                    break;
                case "add_column_right":
                    _this.cellManager.add(cellIndex, "right", true);
                    break;
                case "add_row_up":
                    _this.cellManager.add(cellIndex, "up", true);
                    break;
                case "add_row_down":
                    _this.cellManager.add(cellIndex, "down", true);
                    break;
                case "remove":
                    _this.cellManager.remove(cellIndex, type, true);
                    break;
            }
            _this.paint();
        });
    };
    Diagram.prototype._getContent = function () {
        var _this = this;
        switch (this.config.type) {
            case "org":
                (0, orgonogram_1.placeOrgonogram)(this.data, this.config);
                break;
            case "mindmap":
                (0, mindmap_1.placeMindmap)(this.data, this.config);
                break;
            default:
                break;
        }
        var size = { x: 0, y: 0, left: 0, top: 0, scale: this.config.scale };
        var lines = [];
        var htmlContent = [];
        this.data.mapVisible(function (item) {
            var type = item === null || item === void 0 ? void 0 : item.$item.getBaseType();
            if (!item || item.$group || item.type === "$sgroup") {
                return;
            }
            if (type === "line") {
                if (_this.config.type === "default") {
                    (0, linkPaths_1.nearestLinkPath)(item, _this.data.getItem(item.from), _this.data.getItem(item.to), _this.config);
                }
                lines.push(item.$item.render());
            }
            if (type === "shape" || type === "group" || type === "swimlane" || type === "lineTitle") {
                htmlContent.push(item.$item.render());
            }
            var box = item.$item.getBox();
            if (box.right > size.x) {
                size.x = box.right;
            }
            if (box.left < size.left) {
                size.left = box.left;
            }
            if (box.bottom > size.y) {
                size.y = box.bottom;
            }
            if (box.top < size.top) {
                size.top = box.top;
            }
        });
        return { size: size, svgContent: lines, htmlContent: htmlContent };
    };
    Diagram.prototype._getPoint = function (x, y) {
        var diagramRect = this.getRootView().node.el.getBoundingClientRect();
        return {
            x: x - diagramRect.left - this.config.margin.x,
            y: y - diagramRect.top - this.config.margin.y,
        };
    };
    Diagram.prototype._getBackground = function (gridStep) {
        if (!this.config.$isEditor || !this.config.$grid()) {
            return "none";
        }
        var step = gridStep < 1 ? 1 : gridStep;
        var scale = this.config.scale;
        return step > 1
            ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' %3E%3Cdefs%3E%3Cpattern id='Pattern' width='".concat(step *
                scale, "' height='").concat(step *
                scale, "' patternUnits='userSpaceOnUse' shapeRendering='auto'%3E%3Ccircle cx='0' cy='0' r='0.5' fill='%23c4c4c4' stroke='none'%3E%3C/circle%3E%3Ccircle cx='0' cy='").concat(step *
                scale, "' r='0.5' fill='%23c4c4c4' stroke='none'%3E%3C/circle%3E%3Ccircle cx='").concat(step *
                scale, "' cy='0' r='0.5' fill='%23c4c4c4' stroke='none'%3E%3C/circle%3E%3Ccircle cx='").concat(step *
                scale, "' cy='").concat(step *
                scale, "' r='0.5' fill='%23c4c4c4' stroke='none'%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Cg shapeRendering='auto'%3E%3Crect x='0' y='0' width='100%' height='100%' fill='url%28%23Pattern%29'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\")")
            : "none";
    };
    Diagram.prototype.setSelectionItem = function (_a, shift, alt) {
        var id = _a.id;
        if (!this.config.select)
            return;
        if (alt) {
            this.selection.includes({ id: id }) && this.selection.remove({ id: id });
            return;
        }
        this.selection.add({ id: id, join: shift });
    };
    return Diagram;
}(view_1.View));
exports.Diagram = Diagram;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    apply: "apply",
    reject: "reject",
};
exports.default = locale;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.blockScreen = void 0;
function blockKeys(e) {
    var active = document.activeElement;
    if (active.classList.contains("dhx_alert__apply-button") && e.key === "Enter") {
        return;
    }
    if (!active.classList.contains("dhx_alert__confirm-reject") &&
        !active.classList.contains("dhx_alert__confirm-aply")) {
        e.preventDefault();
    }
}
function blockScreen(css) {
    var blocker = document.createElement("div");
    blocker.className = "dhx_alert__overlay " + (css || "");
    document.body.appendChild(blocker);
    document.addEventListener("keydown", blockKeys);
    return function () {
        document.body.removeChild(blocker);
        document.removeEventListener("keydown", blockKeys);
    };
}
exports.blockScreen = blockScreen;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCollection = void 0;
var events_1 = __webpack_require__(3);
var loader_1 = __webpack_require__(86);
var sort_1 = __webpack_require__(89);
var dataproxy_1 = __webpack_require__(22);
var helpers_1 = __webpack_require__(11);
var types_1 = __webpack_require__(10);
var core_1 = __webpack_require__(1);
var DataCollection = /** @class */ (function () {
    function DataCollection(config, events) {
        var _this = this;
        this._filters = {};
        this._changes = { order: [] };
        this.config = config || {};
        this._sort = new sort_1.Sort();
        this._loader = new loader_1.Loader(this, this._changes);
        this.events = events || new events_1.EventSystem(this);
        this.events.on(types_1.DataEvents.dataRequest, function (from, to) {
            var proxy = _this.dataProxy;
            if (proxy && proxy.updateUrl) {
                proxy.updateUrl(null, { from: from, limit: proxy.config.limit || to - from });
                _this.load(proxy);
            }
        });
        this.events.on(types_1.DataEvents.loadError, function (response) {
            setTimeout(function () {
                if (typeof response !== "string") {
                    (0, helpers_1.dhxError)(response);
                }
                else {
                    (0, helpers_1.dhxWarning)(response);
                }
            }, 0);
        });
        this._reset();
    }
    DataCollection.prototype._reset = function () {
        this._order = [];
        this._pull = {};
        this._changes = { order: [] };
        this._initOrder = null;
        this._meta = new WeakMap();
        this._loaded = false;
    };
    DataCollection.prototype.add = function (newItem, index) {
        var _this = this;
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [newItem])) {
            return;
        }
        var out;
        if (Array.isArray(newItem)) {
            out = newItem.map(function (element, key) {
                if (key !== 0) {
                    index = index + 1;
                }
                return _this._add(element, index);
            });
        }
        else {
            out = this._add(newItem, index);
        }
        this._reapplyFilters(true);
        return out;
    };
    DataCollection.prototype.remove = function (id) {
        var _this = this;
        if (id instanceof Array) {
            __spreadArray([], id, true).map(function (elementId) {
                _this._remove(elementId);
            });
        }
        else if ((0, core_1.isId)(id)) {
            this._remove(id);
        }
    };
    DataCollection.prototype.removeAll = function () {
        this._reset();
        this.events.fire(types_1.DataEvents.removeAll);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.exists = function (id) {
        return !!this._pull[id];
    };
    DataCollection.prototype.getNearId = function (id) {
        var _a;
        var item = this._pull[id];
        if (!item) {
            return ((_a = this._order[0]) === null || _a === void 0 ? void 0 : _a.id) || "";
        }
    };
    DataCollection.prototype.getItem = function (id) {
        return this._pull[id];
    };
    DataCollection.prototype.update = function (id, newItem, silent) {
        var item = this.getItem(id);
        if (item) {
            if ((0, helpers_1.isEqualObj)(newItem, item)) {
                return;
            }
            if ((0, core_1.isId)(newItem.id) && id !== newItem.id) {
                (0, helpers_1.dhxWarning)("this method doesn't allow changing the id");
                if ((0, helpers_1.isDebug)()) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                }
            }
            else {
                if (newItem.parent && item.parent && newItem.parent !== item.parent) {
                    this.move(id, -1, this, newItem.parent);
                }
                (0, core_1.extend)(this._pull[id], newItem, false);
                if (this.config.update) {
                    this.config.update(this._pull[id]);
                }
                if (!silent) {
                    this._onChange("update", id, this._pull[id]);
                }
            }
            this._reapplyFilters(true);
        }
        else {
            (0, helpers_1.dhxWarning)("item not found");
        }
    };
    DataCollection.prototype.getIndex = function (id) {
        if (!(0, core_1.isId)(id) || !(0, core_1.isDefined)(this._pull[id])) {
            return -1;
        }
        return this._order.findIndex(function (i) { return (i === null || i === void 0 ? void 0 : i.id) == id; });
    };
    DataCollection.prototype.getId = function (index) {
        if (!this._order[index]) {
            return;
        }
        return this._order[index].id;
    };
    DataCollection.prototype.getLength = function () {
        return this._order.length;
    };
    DataCollection.prototype.isDataLoaded = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = this._order.length; }
        if ((0, core_1.isNumeric)(from) && (0, core_1.isNumeric)(to)) {
            return this._order.slice(from, to).filter(function (item) { return item && item.$empty; }).length === 0;
        }
        // if check succeeds once, collection can't go back to not-loaded state
        if (!this._loaded) {
            this._loaded = !this.find(function (item) { return item.$empty; });
        }
        return !!this._loaded;
    };
    DataCollection.prototype.filter = function (rule, config, silent) {
        var _a;
        if (config === null || config === void 0 ? void 0 : config.$restore) {
            rule = this._normalizeFilters(rule || this._filters);
        }
        if (!(config === null || config === void 0 ? void 0 : config.add)) {
            this._order = this._initOrder || this._order;
            this._initOrder = null;
            if (!(config === null || config === void 0 ? void 0 : config.$restore)) {
                for (var key in this._filters) {
                    var filter = this._filters[key];
                    if ((_a = filter.config) === null || _a === void 0 ? void 0 : _a.permanent) {
                        this._applyFilters(filter.rule);
                    }
                    else {
                        delete this._filters[key];
                    }
                }
            }
        }
        var id;
        if (rule && !(config === null || config === void 0 ? void 0 : config.$restore)) {
            id = (config === null || config === void 0 ? void 0 : config.id) || (0, core_1.uid)();
            this._filters[id] = { rule: rule, config: config || {} };
        }
        if (rule && typeof rule !== "function") {
            if ((0, core_1.isDefined)(rule.by)) {
                this._applyFilters(rule);
            }
            else {
                for (var key in rule) {
                    this._applyFilters(rule[key]);
                }
            }
        }
        else {
            this._applyFilters(rule);
        }
        if (!silent) {
            var filters = this._getPureFilters(this._filters);
            this.events.fire(types_1.DataEvents.filter, [(0, core_1.isEmptyObj)(filters) ? null : filters]);
        }
        return id;
    };
    DataCollection.prototype.resetFilter = function (config, silent) {
        var _a;
        var _b = config || {}, id = _b.id, permanent = _b.permanent;
        if ((0, core_1.isEmptyObj)(config)) {
            for (var key in this._filters) {
                if (!((_a = this._filters[key].config) === null || _a === void 0 ? void 0 : _a.permanent)) {
                    delete this._filters[key];
                }
            }
        }
        else if (permanent) {
            this._filters = {};
        }
        else if (id) {
            delete this._filters[id];
        }
        this.filter(null, { $restore: true }, silent);
        return (0, core_1.isEmptyObj)(this._getPureFilters(this._filters));
    };
    DataCollection.prototype.getFilters = function (config) {
        var filters = this.getRawFilters(config);
        var pureFilters = filters ? this._getPureFilters(filters) : {};
        return (0, core_1.isEmptyObj)(pureFilters) ? null : pureFilters;
    };
    DataCollection.prototype.getRawFilters = function (config) {
        var filters = this._filters;
        if (config === null || config === void 0 ? void 0 : config.permanent) {
            filters = Object.keys(filters).reduce(function (obj, key) {
                var _a;
                if ((_a = filters[key].config) === null || _a === void 0 ? void 0 : _a.permanent) {
                    obj[key] = filters[key];
                }
                return obj;
            }, {});
        }
        return (0, core_1.isEmptyObj)(filters) ? null : filters;
    };
    DataCollection.prototype.find = function (conf) {
        for (var key in this._pull) {
            var res = (0, helpers_1.findByConf)(this._pull[key], conf);
            if (res) {
                return res;
            }
        }
        return null;
    };
    DataCollection.prototype.findAll = function (conf) {
        var res = [];
        for (var key in this._pull) {
            var item = (0, helpers_1.findByConf)(this._pull[key], conf);
            if (item) {
                res.push(item);
            }
        }
        return res;
    };
    DataCollection.prototype.sort = function (rule, config) {
        if (!this.isDataLoaded()) {
            (0, helpers_1.dhxWarning)("the method doesn't work with lazyLoad");
            return;
        }
        if (config && config.smartSorting) {
            this._sorter = rule;
        }
        if (rule) {
            this._applySorters(rule);
        }
        this.events.fire(types_1.DataEvents.change, [undefined, "sort", rule]);
    };
    DataCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    DataCollection.prototype.move = function (id, index, target, targetId, newId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId, 0, newId);
        }
    };
    DataCollection.prototype.forEach = function (callback) {
        for (var i = 0; i < this._order.length; i++) {
            callback.call(this, this._order[i], i, this._order);
        }
    };
    DataCollection.prototype.load = function (url, driver) {
        if (typeof url === "string") {
            this.dataProxy = url = new dataproxy_1.DataProxy(url);
        }
        if (typeof driver === "string") {
            var driverName = driver.toLocaleLowerCase();
            if (driverName === "xml" || driverName === "csv") {
                url.config.responseType = url.config.responseType || "text";
            }
        }
        this.dataProxy = url;
        return this._loader.load(url, driver);
    };
    DataCollection.prototype.parse = function (data, driver) {
        this._reset();
        return this._loader.parse(data, driver);
    };
    DataCollection.prototype.$parse = function (data) {
        var apx = this.config.approximate;
        if (apx) {
            data = this._approximate(data, apx.value, apx.maxNum);
        }
        this._parse_data(data);
        this._reapplyFilters(true);
        this.events.fire(types_1.DataEvents.change, [undefined, "load"]);
        this.events.fire(types_1.DataEvents.load);
    };
    DataCollection.prototype.save = function (url) {
        if (typeof url === "string") {
            url = new dataproxy_1.DataProxy(url);
        }
        this._loader.save(url);
    };
    DataCollection.prototype.changeId = function (id, newId, silent) {
        if (newId === void 0) { newId = (0, core_1.uid)(); }
        if (id == newId)
            return;
        if (this.exists(newId)) {
            (0, helpers_1.dhxWarning)("item with ID ".concat(newId, " already exists"));
            return;
        }
        var item = this.getItem(id);
        if (!item) {
            (0, helpers_1.dhxWarning)("item not found");
        }
        else {
            item.id = newId;
            (0, core_1.extend)(this._pull[id], item);
            this._pull[newId] = this._pull[id];
            if (!silent) {
                this._onChange("update", newId, this._pull[newId]);
            }
            delete this._pull[id];
        }
    };
    // todo: loop through the array and check saved statuses
    DataCollection.prototype.isSaved = function () {
        return !this._changes.order.length; // todo: bad solution, errors and holded elments are missed...
    };
    DataCollection.prototype.map = function (callback) {
        var result = [];
        for (var i = 0; i < this._order.length; i++) {
            result.push(callback.call(this, this._order[i], i, this._order));
        }
        return result;
    };
    DataCollection.prototype.mapRange = function (from, to, callback) {
        if (from < 0)
            from = 0;
        if (to > this._order.length - 1)
            to = this._order.length - 1;
        var arr = this._order.slice(from, to + 1);
        var result = [];
        for (var i = from; i <= to; i++) {
            result.push(callback.call(this, this._order[i], i, arr));
        }
        return result;
    };
    DataCollection.prototype.reduce = function (callback, acc) {
        for (var i = 0; i < this._order.length; i++) {
            acc = callback.call(this, acc, this._order[i], i);
        }
        return acc;
    };
    DataCollection.prototype.serialize = function (driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        // remove $ attrs
        var data = [];
        var _loop_1 = function (index) {
            var item = __assign({}, this_1._order[index]);
            Object.keys(item).forEach(function (key) {
                if (key.startsWith("$")) {
                    delete item[key];
                }
            });
            data.push(item);
        };
        var this_1 = this;
        for (var index = 0; index < this._order.length; index++) {
            _loop_1(index);
        }
        var dataDriver = (0, helpers_1.toDataDriver)(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    DataCollection.prototype.getInitialData = function () {
        return this._initOrder;
    };
    DataCollection.prototype.setMeta = function (obj, key, value) {
        if (!obj)
            return;
        var map = this._meta.get(obj);
        if (!map) {
            map = {};
            this._meta.set(obj, map);
        }
        map[key] = value;
    };
    DataCollection.prototype.getMeta = function (obj, key) {
        var map = this._meta.get(obj);
        return map ? map[key] : null;
    };
    DataCollection.prototype.getMetaMap = function (obj) {
        return this._meta.get(obj);
    };
    DataCollection.prototype.setRange = function (from, to) {
        this._range = !to ? null : [from, to];
    };
    DataCollection.prototype.getRawData = function (from, to, order, mode) {
        order = order || this._order;
        if (mode === 1)
            return order;
        if (this._range) {
            from = this._range[0] + from;
            if (to === -1) {
                to = this._range[1];
            }
            else {
                var diff = Math.abs(to - from);
                to = from + diff > this._range[1] ? this._range[1] : from + diff;
            }
        }
        if (!to || (from === 0 && (to === -1 || to === order.length))) {
            return order;
        }
        if (from >= order.length)
            return [];
        if (to === -1 || to > order.length)
            to = order.length;
        var slice = order.slice(from, to);
        if (slice.filter(function (item) { return item.$empty; }).length !== 0) {
            this.events.fire(types_1.DataEvents.dataRequest, [from, to]);
        }
        return slice;
    };
    DataCollection.prototype._add = function (newItem, index) {
        var id = this._addCore(newItem, index);
        this._onChange("add", newItem.id, newItem);
        this.events.fire(types_1.DataEvents.afterAdd, [newItem]);
        return id;
    };
    DataCollection.prototype._remove = function (id) {
        var removedItem = this._pull[id];
        if (removedItem) {
            if (!this.events.fire(types_1.DataEvents.beforeRemove, [removedItem])) {
                return;
            }
            this._removeCore(removedItem.id);
            this._onChange("remove", id, removedItem);
        }
        this.events.fire(types_1.DataEvents.afterRemove, [removedItem]);
    };
    DataCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (!this.exists(id)) {
            return null;
        }
        var newid = (0, core_1.uid)();
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target) {
            if (!(target instanceof DataCollection) && targetId) {
                target.add((0, helpers_1.copyWithoutInner)(this.getItem(id)), index);
                return;
            }
            if (target.exists(id)) {
                target.add(__assign(__assign({}, (0, helpers_1.copyWithoutInner)(this.getItem(id))), { id: newid }), index);
                return newid;
            }
            else {
                target.add((0, helpers_1.copyWithoutInner)(this.getItem(id)), index);
                return id;
            }
        }
        this.add(__assign(__assign({}, (0, helpers_1.copyWithoutInner)(this.getItem(id))), { id: newid }), index);
        return newid;
    };
    DataCollection.prototype._move = function (id, index, target, targetId, key, newId) {
        if (key && index < this.getIndex(id)) {
            index = index === -1 ? -1 : index + key;
        }
        if (target && target !== this && this.exists(id)) {
            var item = (0, core_1.copy)(this.getItem(id), true);
            if (newId)
                item.id = newId;
            if ((!newId && target.exists(id)) || target.exists(newId)) {
                item.id = (0, core_1.uid)();
            }
            if (targetId) {
                item.parent = targetId;
            }
            target.add(item, index);
            // remove data from original collection
            this.remove(id);
            return item.id;
        }
        if (this.getIndex(id) === index) {
            return null;
        }
        // move other elements
        var spliced = this._order.splice(this.getIndex(id), 1)[0];
        if (index === -1) {
            index = this._order.length;
        }
        this._order.splice(index, 0, spliced);
        this.events.fire(types_1.DataEvents.change, [id, "update", this.getItem(id)]);
        return id;
    };
    DataCollection.prototype._addCore = function (obj, index) {
        var _a;
        if (this.config.init) {
            obj = this.config.init(obj);
        }
        obj.id = (_a = obj.id) !== null && _a !== void 0 ? _a : (0, core_1.uid)();
        if (this._pull[obj.id]) {
            (0, helpers_1.dhxError)("Item ".concat(obj.id, " already exist"));
        }
        // todo: not ideal solution
        if (this._initOrder && !(0, helpers_1.isTreeCollection)(this)) {
            this._addToOrder(this._initOrder, obj, index);
        }
        this._addToOrder(this._order, obj, index);
        return obj.id;
    };
    DataCollection.prototype._removeCore = function (id) {
        if (this.getIndex(id) >= 0) {
            this._order = this._order.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
        if (this._initOrder && this._initOrder.length) {
            this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
    };
    DataCollection.prototype._parse_data = function (data) {
        var index = this._order.length;
        if (this.config.prep) {
            data = this.config.prep(data);
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            this._addCore(obj, index++);
        }
    };
    DataCollection.prototype._approximate = function (data, values, maxNum) {
        var len = data.length;
        var vlen = values.length;
        var rlen = Math.floor(len / maxNum);
        var newData = Array(Math.ceil(len / rlen));
        var index = 0;
        for (var i = 0; i < len; i += rlen) {
            var newItem = (0, core_1.copy)(data[i]);
            var end = Math.min(len, i + rlen);
            for (var j = 0; j < vlen; j++) {
                var sum = 0;
                for (var z = i; z < end; z++) {
                    sum += data[z][values[j]];
                }
                newItem[values[j]] = sum / (end - i);
            }
            newData[index++] = newItem;
        }
        return newData;
    };
    DataCollection.prototype._onChange = function (status, id, obj) {
        var itemCount = 0;
        var maxStack = 10;
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var item = _a[_i];
            // update pending item if previous state is "saving" or if item not saved yet
            var index = this._changes.order.indexOf(item);
            if (item.id === id && !item.saving) {
                itemCount += 1;
                if (index === this._changes.order.length - 1 || this._changes.order[index + 1].id !== id) {
                    // update item
                    if (item.error) {
                        item.error = false;
                    }
                    item = __assign(__assign({}, item), { obj: obj, status: status });
                    itemCount += 1;
                    if (itemCount > maxStack) {
                        this._changes.order.splice(index, itemCount - maxStack, item);
                    }
                    else {
                        this._changes.order.splice(index + 1, 0, item);
                    }
                    this._loader.updateChanges(this._changes);
                    if (status === "remove" && obj.$emptyRow)
                        return;
                    this.events.fire(types_1.DataEvents.change, [id, status, obj]);
                    return;
                }
            }
        }
        this._changes.order.push({ id: id, status: status, obj: __assign({}, obj), saving: false });
        this._loader.updateChanges(this._changes);
        this.events.fire(types_1.DataEvents.change, [id, status, obj]);
    };
    DataCollection.prototype._addToOrder = function (array, obj, index) {
        if (index >= 0 && array[index]) {
            this._pull[obj.id] = obj;
            array.splice(index, 0, obj);
        }
        else {
            this._pull[obj.id] = obj;
            array.push(obj);
        }
    };
    DataCollection.prototype._applySorters = function (by) {
        this._sort.sort(this._order, by, this._sorter);
        // sort the not-filtered dataset
        if (this._initOrder && this._initOrder.length) {
            this._sort.sort(this._initOrder, by, this._sorter);
        }
    };
    DataCollection.prototype._applyFilters = function (rule) {
        if (!rule)
            return;
        var filter = typeof rule !== "function" ? this._getRuleCallback(rule) : rule;
        var fOrder = this._order.filter(function (item) { return filter(item); });
        if (!this._initOrder) {
            this._initOrder = this._order;
        }
        this._order = fOrder;
    };
    DataCollection.prototype._reapplyFilters = function (sort) {
        if (sort === void 0) { sort = false; }
        var permFilters = this.getFilters({ permanent: true });
        if (permFilters) {
            this.filter(permFilters, { $restore: true, add: true }, true);
        }
        if (sort && this._sorter) {
            this._applySorters();
        }
    };
    DataCollection.prototype._getRuleCallback = function (rule) {
        if (!(0, core_1.isDefined)(rule.by) || !(0, core_1.isDefined)(rule.match))
            return;
        return rule.compare
            ? function (obj) { return rule.compare(obj[rule.by], rule.match, obj, rule.multi); }
            : function (obj) { return obj[rule.by] == rule.match; };
    };
    DataCollection.prototype._getPureFilters = function (filters) {
        return Object.keys(filters).reduce(function (obj, key) {
            var _a;
            if (!((_a = filters[key].config) === null || _a === void 0 ? void 0 : _a.$local)) {
                obj[key] = filters[key];
            }
            return obj;
        }, {});
    };
    DataCollection.prototype._normalizeFilters = function (filters) {
        var rules = [];
        for (var key in filters) {
            var rule = filters[key].rule;
            if (typeof rule !== "function") {
                if ((0, core_1.isDefined)(rule.by)) {
                    rules.push(this._getRuleCallback(rule));
                }
                else {
                    for (var key_1 in rule) {
                        rules.push(this._getRuleCallback(rule[key_1]));
                    }
                }
            }
            else {
                rules.push(rule);
            }
        }
        return __assign({}, rules);
    };
    return DataCollection;
}());
exports.DataCollection = DataCollection;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataDriversPro = exports.dataDrivers = void 0;
var JsonDriver_1 = __webpack_require__(49);
var CsvDriver_1 = __webpack_require__(50);
var XMLDriver_1 = __webpack_require__(87);
exports.dataDrivers = {
    json: JsonDriver_1.JsonDriver,
    csv: CsvDriver_1.CsvDriver,
};
exports.dataDriversPro = __assign(__assign({}, exports.dataDrivers), { xml: XMLDriver_1.XMLDriver });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDriver = void 0;
var JsonDriver = /** @class */ (function () {
    function JsonDriver() {
    }
    JsonDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    JsonDriver.prototype.serialize = function (data) {
        return data;
    };
    JsonDriver.prototype.getFields = function (row) {
        return row;
    };
    JsonDriver.prototype.getRows = function (data) {
        return typeof data === "string" ? JSON.parse(data) : data;
    };
    return JsonDriver;
}());
exports.JsonDriver = JsonDriver;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvDriver = void 0;
var CsvDriver = /** @class */ (function () {
    function CsvDriver(config) {
        var initConfig = {
            skipHeader: 0,
            nameByHeader: false,
            rowDelimiter: "\n",
            columnDelimiter: ",",
        };
        this.config = __assign(__assign({}, initConfig), config);
        if (this.config.nameByHeader) {
            this.config.skipHeader = 1;
        }
    }
    CsvDriver.prototype.getFields = function (row, headers) {
        var regex = new RegExp("(?<!\")".concat(this.config.columnDelimiter, "(?!\")"));
        var parts = row.trim().split(regex);
        var obj = {};
        for (var i = 0; i < parts.length; i++) {
            obj[headers ? headers[i] : i + 1] = isNaN(Number(parts[i]))
                ? parts[i].replace(/"[,;"]"/gi, function (match) {
                    return match
                        .split("")
                        .splice(1, 1)
                        .slice(-1, 1)
                        .join("");
                })
                : parseFloat(parts[i]);
        }
        return obj;
    };
    CsvDriver.prototype.getRows = function (data) {
        return data.trim().split(this.config.rowDelimiter);
    };
    CsvDriver.prototype.toJsonArray = function (data) {
        var _this = this;
        var rows = this.getRows(data);
        var names = this.config.names;
        if (this.config.skipHeader) {
            var top_1 = rows.splice(0, this.config.skipHeader);
            if (this.config.nameByHeader) {
                names = top_1[0].trim().split(this.config.columnDelimiter);
            }
        }
        return rows.map(function (row) { return _this.getFields(row, names); });
    };
    CsvDriver.prototype.serialize = function (data, withoutHeader) {
        var header = data[0]
            ? Object.keys(data[0])
                .filter(function (key) { return !key.startsWith("$"); })
                .join(this.config.columnDelimiter) + this.config.rowDelimiter
            : "";
        var readyData = this._serialize(data);
        if (withoutHeader) {
            return readyData;
        }
        return header + readyData;
    };
    CsvDriver.prototype._serialize = function (data) {
        var _this = this;
        return data.reduce(function (csv, row) {
            var keys = Object.keys(row);
            var cells = keys.reduce(function (total, key, i) {
                var _a, _b;
                if (key.startsWith("$") || key === "items") {
                    return total;
                }
                return "".concat(total).concat(((_b = (_a = row[key]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "").replaceAll(/[,;"]/gi, function (match) { return "\"".concat(match, "\""); })).concat(i === keys.length - 1 || (i !== keys.length - 1 && keys[i + 1].startsWith("$"))
                    ? ""
                    : _this.config.columnDelimiter);
            }, "");
            if (row.items) {
                return "".concat(csv).concat(csv ? "\n" : "").concat(cells).concat(_this._serialize(row.items));
            }
            return "".concat(csv).concat(csv ? _this.config.rowDelimiter : "").concat(cells);
        }, "");
    };
    return CsvDriver;
}());
exports.CsvDriver = CsvDriver;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(4);
var types_1 = __webpack_require__(35);
var helpers_1 = __webpack_require__(108);
var events_1 = __webpack_require__(3);
var Layout_1 = __webpack_require__(34);
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        _this._disabled = [];
        var p = parent;
        if (p && p.isVisible) {
            _this._parent = p;
        }
        if (_this._parent && _this._parent.events) {
            _this.events = _this._parent.events;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
        }
        _this.config.full =
            _this.config.full === undefined
                ? Boolean(_this.config.header ||
                    _this.config.collapsable ||
                    _this.config.headerHeight ||
                    _this.config.headerIcon ||
                    _this.config.headerImage)
                : _this.config.full;
        _this._afterWindowResized = _this._resizedWindow.bind(_this);
        _this.id = _this.config.id || (0, core_1.uid)();
        _this._initHandlers();
        _this._progress = !!_this.config.progressDefault;
        _this._stopProgressDefault = false;
        if (_this._isXDirection() && !config.width)
            config.$autoWidth = true;
        if (!_this._isXDirection() && !config.height)
            config.$autoHeight = true;
        return _this;
    }
    Cell.prototype.paint = function () {
        var _a;
        if (this.isVisible()) {
            var view = this.getRootView();
            if (view) {
                view.redraw();
            }
            else {
                (_a = this._parent) === null || _a === void 0 ? void 0 : _a.paint();
            }
        }
    };
    Cell.prototype.isVisible = function () {
        var _a;
        // top level node
        if (!this._parent) {
            if (this._container && this._container.tagName) {
                return true;
            }
            return Boolean(this.getRootNode());
        }
        // check active view in case of multiview
        var active = (_a = this._parent.config) === null || _a === void 0 ? void 0 : _a.activeView;
        if (active && active !== this.id) {
            return false;
        }
        // check that all parents of the cell are visible as well
        return !this.config.hidden && (!this._parent || this._parent.isVisible());
    };
    Cell.prototype.hide = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeHide, [this.id])) {
            return;
        }
        this.config.hidden = true;
        this._resetCellsSize();
        if (this._parent && this._parent.paint) {
            this._parent.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterHide, [this.id]);
    };
    Cell.prototype.show = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeShow, [this.id])) {
            return;
        }
        if (this._parent && this._parent.config && this._parent.config.activeView !== undefined) {
            this._parent.config.activeView = this.id;
        }
        else {
            this.config.hidden = false;
        }
        if (this._parent && !this._parent.isVisible()) {
            this._parent.show();
        }
        this.paint();
        this.events.fire(types_1.LayoutEvents.afterShow, [this.id]);
    };
    Cell.prototype.expand = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeExpand, [this.id])) {
            return;
        }
        this.config.collapsed = false;
        this._checkNextSize() || this._checkNextSize(this._getAnyFlexCell());
        this.events.fire(types_1.LayoutEvents.afterExpand, [this.id]);
        this.paint();
    };
    Cell.prototype.collapse = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeCollapse, [this.id])) {
            return;
        }
        this.config.collapsed = true;
        this._checkNextSize() || this._checkNextSize(this._getAnyFlexCell());
        this.events.fire(types_1.LayoutEvents.afterCollapse, [this.id]);
        this.paint();
    };
    Cell.prototype.toggle = function () {
        if (this.config.collapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    Cell.prototype._checkNextSize = function (cell) {
        var nextCell = cell !== null && cell !== void 0 ? cell : this._getNextCell();
        if (!nextCell)
            return false;
        if (this._isXDirection() && nextCell.config.$autoWidth && nextCell.config.width) {
            nextCell.config.width = undefined;
            return true;
        }
        if (!this._isXDirection() && nextCell.config.$autoHeight && nextCell.config.height) {
            nextCell.config.height = undefined;
            return true;
        }
        return !cell ? nextCell._checkNextSize() : false;
    };
    Cell.prototype.getParent = function () {
        return this._parent;
    };
    Cell.prototype.destructor = function () {
        var _a;
        this.events && this.events.clear();
        window.removeEventListener("resize", this._afterWindowResized);
        if (this._ui && this._ui.config && typeof ((_a = this._ui) === null || _a === void 0 ? void 0 : _a.destructor) === "function") {
            this._ui.destructor();
        }
        this.config = this.events = this.id = this._parent = this._handlers = this._uid = this._disabled = this._resizerHandlers = null;
        this.unmount();
    };
    Cell.prototype.getWidget = function () {
        return this._ui;
    };
    Cell.prototype.getCellView = function () {
        return this._parent && this._parent.getRefs(this._uid);
    };
    Cell.prototype.attach = function (component, config) {
        this.config.html = null;
        if (typeof component === "object") {
            this._ui = component;
        }
        else if (typeof component === "string") {
            this._ui = new window.dhx[component](null, config);
        }
        else if (typeof component === "function") {
            if (component.prototype instanceof view_1.View) {
                this._ui = new component(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return component(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Cell.prototype.attachHTML = function (html) {
        this.config.html = html;
        this.paint();
    };
    Cell.prototype.detach = function () {
        this._stopProgressDefault = false;
        this._ui = this.config.html = null;
        this.paint();
    };
    Cell.prototype.progressShow = function () {
        if (this.config.progressDefault) {
            this._stopProgressDefault = false;
        }
        this._progress = true;
        this.paint();
    };
    Cell.prototype.progressHide = function () {
        if (this.config.progressDefault) {
            this._stopProgressDefault = true;
        }
        this._progress = false;
        this.paint();
    };
    Cell.prototype.isVisibleProgress = function () {
        return this._progress;
    };
    Cell.prototype.toVDOM = function (nodes) {
        var _a;
        var _b, _c;
        this._saveTheme();
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var isFieldset = this.config.$fieldset;
        var style = this._calculateStyle();
        var stylePadding = (0, core_1.isDefined)(this.config.padding)
            ? !isNaN(Number(this.config.padding))
                ? { padding: "".concat(this.config.padding, "px") }
                : { padding: this.config.padding }
            : "";
        var fullStyle = this.config.full || this.config.html ? style : __assign(__assign({}, style), stylePadding);
        var progressBar = this._checkProgress() ? this._getProgressBar() : null;
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = (0, dom_1.inject)(view);
                }
                kids = [view];
            }
            else {
                kids = nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && this._getNextCell() && !this.config.collapsed
            ? (0, dom_1.el)(".dhx_layout-resizer." +
                (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign(__assign({}, this._resizerHandlers), { _ref: "resizer_" + this._uid, tabindex: 0 }), [
                (0, dom_1.el)("span.dhx_layout-resizer__icon", {
                    class: "dxi " +
                        (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal"),
                }),
            ])
            : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var typeClass = "";
        var isParent = this.config.cols || this.config.rows;
        if (this.config.type && isParent) {
            switch (this.config.type) {
                case "line":
                    typeClass = " dhx_layout-line";
                    break;
                case "wide":
                    typeClass = " dhx_layout-wide";
                    break;
                case "space":
                    typeClass = " dhx_layout-space";
                    break;
                default:
                    break;
            }
        }
        var cellContent = isFieldset
            ? (0, dom_1.el)("fieldset.dhx_form-fieldset", {
                class: (this.config.$disabled && " dhx_form-fieldset--disabled") || "",
                style: stylePadding,
                disabled: this.config.$disabled,
            }, [
                (0, dom_1.el)("legend.dhx_form-fieldset-legend", {
                    class: "dhx_form-fieldset-legend--".concat(this.config.labelAlignment || "left"),
                }, this.config.label),
                (0, dom_1.el)(".dhx_layout-cell-content", {
                    class: this._getCss(false),
                }, [].concat(kids)),
            ])
            : this.config.full
                ? [
                    (0, dom_1.el)("div", {
                        tabindex: this.config.collapsable ? "0" : "-1",
                        role: this.config.collapsable ? "button" : null,
                        "aria-label": this.config.collapsable
                            ? "click to ".concat(this.config.collapsed ? "expand" : "collapse")
                            : null,
                        class: "dhx_layout-cell-header" +
                            (this._isXDirection()
                                ? " dhx_layout-cell-header--col"
                                : " dhx_layout-cell-header--row") +
                            (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                            (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                            (((this.getParent() || {}).config || {}).isAccordion
                                ? " dhx_layout-cell-header--accordion"
                                : ""),
                        style: {
                            height: this.config.headerHeight,
                        },
                        onclick: this._handlers.toggle,
                        onkeydown: this._handlers.enterCollapse,
                    }, [
                        this.config.headerIcon &&
                            (0, dom_1.el)("span.dhx_layout-cell-header__icon", {
                                class: this.config.headerIcon,
                            }),
                        this.config.headerImage &&
                            (0, dom_1.el)(".dhx_layout-cell-header__image-wrapper", [
                                (0, dom_1.el)("img", {
                                    src: this.config.headerImage,
                                    class: "dhx_layout-cell-header__image",
                                }),
                            ]),
                        this.config.header && (0, dom_1.el)("h3.dhx_layout-cell-header__title", this.config.header),
                        this.config.collapsable
                            ? (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: this._getCollapseIcon(),
                            })
                            : (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: "dxi dxi-empty",
                            }),
                    ]),
                    !this.config.collapsed
                        ? (0, dom_1.el)("div", {
                            style: __assign(__assign({}, stylePadding), { height: "calc(100% - ".concat(this.config.headerHeight || 37, "px)") }),
                            class: this._getCss(true) +
                                " dhx_layout-cell-content" +
                                (this.config.type ? typeClass : ""),
                        }, this.config.html
                            ? [
                                (0, dom_1.el)("div", {
                                    ".innerHTML": this.config.html,
                                    class: "dhx_layout-cell dhx_layout-cell-inner_html",
                                }),
                            ]
                            : kids)
                        : null,
                ]
                : this.config.html &&
                    !(this.config.rows &&
                        this.config.cols &&
                        this.config.views)
                    ? [
                        !this.config.collapsed
                            ? (0, dom_1.el)(".dhx_layout-cell-content", { style: stylePadding }, [
                                (0, dom_1.el)(".dhx_layout-cell-inner_html", {
                                    ".innerHTML": this.config.html,
                                }),
                            ])
                            : null,
                    ]
                    : kids;
        var cell = (0, dom_1.el)("div", __assign(__assign((_a = { _key: this._uid, _ref: this._uid }, _a["aria-label"] = this.config.id ? "tab-content-" + this.config.id : null, _a["data-cell-id"] = (_b = this.config.id) !== null && _b !== void 0 ? _b : null, _a["data-dhx-theme"] = (_c = this._theme) !== null && _c !== void 0 ? _c : null, _a), handlers), { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizable" : "") +
                (this.config.type && !this.config.full ? typeClass : ""), style: isFieldset ? style : fullStyle }), cellContent || progressBar ? [].concat(cellContent, progressBar) : null);
        return resizer ? [].concat(cell, resizer) : cell;
    };
    Cell.prototype._saveTheme = function () {
        var _a;
        var cellEl = (_a = this.getCellView()) === null || _a === void 0 ? void 0 : _a.el;
        if (cellEl) {
            this._theme = cellEl.getAttribute("data-dhx-theme");
        }
    };
    Cell.prototype._getProgressBar = function () {
        return (0, dom_1.el)("span", {
            class: "dhx_progress-bar",
        }, [
            (0, dom_1.sv)("svg", {
                viewBox: "25 25 50 50",
                class: "dhx_spinner",
            }, [
                (0, dom_1.sv)("circle", {
                    cx: "50",
                    cy: "50",
                    r: "20",
                    class: "path",
                }),
            ]),
        ]);
    };
    Cell.prototype._getCss = function (_content) {
        return "dhx_layout-cell";
    };
    Cell.prototype._initHandlers = function () {
        var _this = this;
        if (this.getParent() &&
            !(this.config.cols || this.config.rows)) {
            window.addEventListener("resize", this._afterWindowResized);
        }
        this._handlers = {
            enterCollapse: function (e) {
                if (e.keyCode === 13) {
                    _this._handlers.toggle();
                }
            },
            collapse: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.collapse();
            },
            expand: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.expand();
            },
            toggle: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.toggle();
            },
        };
        var blockOpts = {
            left: null,
            top: null,
            isActive: false,
            range: null,
            xLayout: null,
            nextCell: null,
            size: null,
            resizerLength: null,
            margin: null,
            collapsedSize: null,
        };
        var resizeMove = function (event, startCoords) {
            if (startCoords === void 0) { startCoords = { x: 0, y: 0 }; }
            if (!blockOpts.isActive) {
                return;
            }
            var xLayout = blockOpts.xLayout;
            var clientX = event.targetTouches
                ? event.targetTouches[0].clientX
                : event.clientX + startCoords.x;
            var clientY = event.targetTouches
                ? event.targetTouches[0].clientY
                : event.clientY + startCoords.y;
            var newValue = xLayout
                ? clientX - blockOpts.range.min + window.pageXOffset
                : clientY - blockOpts.range.min + window.pageYOffset;
            var prop = xLayout ? "width" : "height";
            if (newValue < 0) {
                newValue = blockOpts.resizerLength / 2;
            }
            else if (newValue > blockOpts.size) {
                newValue = blockOpts.size - blockOpts.resizerLength;
            }
            var getValue = function (key) { var _a; return parseInt((_a = _this.config[key]) === null || _a === void 0 ? void 0 : _a.toString()); };
            var maxSize = getValue(xLayout ? "maxWidth" : "maxHeight");
            var minSize = getValue(xLayout ? "minWidth" : "minHeight");
            if ((!maxSize || newValue < maxSize) && (!minSize || newValue > minSize)) {
                _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                blockOpts.nextCell.config[prop] =
                    blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                if (blockOpts.nextCell._getAnyFlexCell())
                    blockOpts.nextCell._getAnyFlexCell().config[prop] = undefined;
                _this.paint();
                _this.events.fire(types_1.LayoutEvents.resize, [_this.id]);
            }
        };
        var iframesInfo = {};
        var resizeEnd = function (event) {
            blockOpts.isActive = false;
            document.body.classList.remove("dhx_no-select--resize");
            if (!event.targetTouches) {
                document.removeEventListener("mouseup", resizeEnd);
                document.removeEventListener("mousemove", resizeMove);
                for (var index in iframesInfo) {
                    iframesInfo[index].node.contentWindow.document.removeEventListener("mouseup", resizeEnd);
                    iframesInfo[index].node.contentWindow.document.removeEventListener("mousemove", iframesInfo[index].listener);
                }
            }
            else {
                document.removeEventListener("touchend", resizeEnd);
                document.removeEventListener("touchmove", resizeMove);
                for (var index in iframesInfo) {
                    iframesInfo[index].node.contentWindow.document.removeEventListener("touchend", resizeEnd);
                    iframesInfo[index].node.contentWindow.document.removeEventListener("touchmove", iframesInfo[index].listener);
                }
            }
            _this.events.fire(types_1.LayoutEvents.afterResizeEnd, [_this.id]);
        };
        var resizeStart = function (event) {
            event.targetTouches && event.preventDefault();
            if (event.which === 3) {
                return;
            }
            if (blockOpts.isActive) {
                resizeEnd(event);
            }
            if (!_this.events.fire(types_1.LayoutEvents.beforeResizeStart, [_this.id])) {
                return;
            }
            document.body.classList.add("dhx_no-select--resize");
            var block = _this.getCellView();
            var nextCell = _this._getNextCell();
            var nextBlock = nextCell.getCellView();
            var resizerBlock = _this._getResizerView();
            var blockOffsets = block.el.getBoundingClientRect();
            var resizerOffsets = resizerBlock.el.getBoundingClientRect();
            var nextBlockOffsets = nextBlock.el.getBoundingClientRect();
            blockOpts.xLayout = _this._isXDirection();
            blockOpts.left = blockOffsets.left + window.pageXOffset;
            blockOpts.top = blockOffsets.top + window.pageYOffset;
            blockOpts.collapsedSize = _this._getCollapsedSize(_this, nextCell);
            blockOpts.margin = (0, helpers_1.getMarginSize)(_this.getParent().config);
            blockOpts.range = (0, helpers_1.getBlockRange)(blockOffsets, nextBlockOffsets, blockOpts.xLayout);
            blockOpts.size =
                blockOpts.range.max - blockOpts.range.min - blockOpts.margin - blockOpts.collapsedSize;
            blockOpts.isActive = true;
            blockOpts.nextCell = nextCell;
            blockOpts.resizerLength = blockOpts.xLayout ? resizerOffsets.width : resizerOffsets.height;
        };
        this._resizerHandlers = {
            onmousedown: function (e) {
                resizeStart(e);
                document.addEventListener("mouseup", resizeEnd);
                document.addEventListener("mousemove", resizeMove);
                var iframes = document.querySelectorAll("iframe");
                if (iframes.length) {
                    iframes.forEach(function (iframe, index) {
                        var iframeCoords = {
                            x: iframe.getBoundingClientRect().x,
                            y: iframe.getBoundingClientRect().y,
                        };
                        iframesInfo[index] = {
                            node: iframe,
                            listener: function (event) { return resizeMove(event, iframeCoords); },
                        };
                    });
                    for (var index in iframesInfo) {
                        iframesInfo[index].node.contentWindow.document.addEventListener("mouseup", resizeEnd);
                        iframesInfo[index].node.contentWindow.document.addEventListener("mousemove", iframesInfo[index].listener);
                    }
                }
            },
            ontouchstart: function (e) {
                resizeStart(e);
                document.addEventListener("touchend", resizeEnd);
                document.addEventListener("touchmove", resizeMove);
                var iframes = document.querySelectorAll("iframe");
                if (iframes.length) {
                    iframes.forEach(function (iframe, index) {
                        var iframeCoords = {
                            x: iframe.getBoundingClientRect().x,
                            y: iframe.getBoundingClientRect().y,
                        };
                        iframesInfo[index] = {
                            node: iframe,
                            listener: function (event) { return resizeMove(event, iframeCoords); },
                        };
                    });
                    for (var index in iframesInfo) {
                        iframesInfo[index].node.contentWindow.document.addEventListener("touchend", resizeEnd);
                        iframesInfo[index].node.contentWindow.document.addEventListener("touchmove", iframesInfo[index].listener);
                    }
                }
            },
            ondragstart: function (e) { return e.preventDefault(); },
        };
    };
    Cell.prototype._getCollapsedSize = function (cell, nextCell) {
        var collapsedSize = 0;
        var parent = this._parent;
        var index = parent._cells.indexOf(cell);
        var nextIndex = parent._cells.indexOf(nextCell);
        if (nextIndex - index === 1)
            return collapsedSize;
        for (var i = index + 1; i < nextIndex; i++) {
            if (parent._cells[i].config.collapsed) {
                if (!this._isXDirection()) {
                    collapsedSize += Number(parent._cells[i].config.headerHeight) || 37;
                }
                else {
                    collapsedSize += 45;
                }
            }
        }
        return collapsedSize;
    };
    Cell.prototype._getCollapseIcon = function () {
        if (this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-right";
        }
        if (this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-left";
        }
        if (!this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-up";
        }
        if (!this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-down";
        }
    };
    Cell.prototype._isLastCell = function () {
        var parent = this._parent;
        return parent && parent._cells.indexOf(this) === parent._cells.length - 1;
    };
    Cell.prototype._getNextCell = function () {
        var parent = this._parent;
        var index = parent._cells.indexOf(this);
        var nextCell = !this._isLastCell() && parent._cells[index + 1];
        if (!nextCell)
            return false;
        if (nextCell.config.hidden || nextCell.config.collapsed) {
            return nextCell._getNextCell();
        }
        else
            return nextCell;
    };
    Cell.prototype._getAnyFlexCell = function (selfInclude) {
        var _this = this;
        var _a;
        if (selfInclude === void 0) { selfInclude = false; }
        var parent = this._parent;
        var prop = this._isXDirection() ? "$autoWidth" : "$autoHeight";
        var cells = (_a = parent === null || parent === void 0 ? void 0 : parent._cells) === null || _a === void 0 ? void 0 : _a.filter(function (cell) { return cell.config[prop] === true && (selfInclude ? true : cell.id !== _this.id); });
        return (cells === null || cells === void 0 ? void 0 : cells.length) ? cells[cells.length - 1] : false;
    };
    Cell.prototype._getResizerView = function () {
        return this._parent.getRefs("resizer_" + this._uid);
    };
    Cell.prototype._isXDirection = function () {
        return this._parent && this._parent._xLayout;
    };
    Cell.prototype._checkProgress = function () {
        if (this instanceof Layout_1.Layout) {
            return this.isVisibleProgress();
        }
        this._calculateProgressState();
        return ((this._progress || this._checkAutoProgress()) &&
            !this.config.collapsed &&
            !this.config.hidden &&
            !this._parent.isVisibleProgress());
    };
    Cell.prototype._checkAutoProgress = function () {
        if (this._stopProgressDefault)
            return false;
        var _a = this.config, html = _a.html, progressDefault = _a.progressDefault;
        return progressDefault && !this._ui && !html;
    };
    Cell.prototype._calculateProgressState = function () {
        if (this._stopProgressDefault)
            return;
        var _a = this.config, html = _a.html, progressDefault = _a.progressDefault;
        if (progressDefault && !this._ui && !html) {
            this._progress = true;
        }
        if (progressDefault && (this._ui || html)) {
            this._progress = false;
        }
    };
    Cell.prototype._calculateStyle = function () {
        var config = this.config;
        if (!config) {
            return;
        }
        var style = {};
        var autoWidth = false;
        var autoHeight = false;
        if (!isNaN(Number(config.width)))
            config.width = config.width + "px";
        if (!isNaN(Number(config.height)))
            config.height = config.height + "px";
        if (!isNaN(Number(config.minWidth)))
            config.minWidth = config.minWidth + "px";
        if (!isNaN(Number(config.minHeight)))
            config.minHeight = config.minHeight + "px";
        if (!isNaN(Number(config.maxWidth)))
            config.maxWidth = config.maxWidth + "px";
        if (!isNaN(Number(config.maxHeight)))
            config.maxHeight = config.maxHeight + "px";
        if (config.width === "content")
            autoWidth = true;
        if (config.height === "content")
            autoHeight = true;
        // if (this._isXDirection() && !config.width) config.$autoWidth = true;
        // if (!this._isXDirection() && !config.height) config.$autoHeight = true;
        var _a = config, width = _a.width, height = _a.height, cols = _a.cols, rows = _a.rows, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, gravity = _a.gravity, collapsed = _a.collapsed, $fixed = _a.$fixed;
        var gravityNumber = Math.sign(gravity) === -1 ? 0 : gravity;
        if (typeof gravity === "boolean") {
            gravityNumber = gravity ? 1 : 0;
        }
        var fixed = typeof gravity === "boolean" ? !gravity : Math.sign(gravity) === -1;
        if (this._isXDirection()) {
            if ($fixed || width || (gravity === undefined && (minWidth || maxWidth))) {
                fixed = true;
            }
        }
        else {
            if ($fixed || height || (gravity === undefined && (minHeight || maxHeight))) {
                fixed = true;
            }
        }
        var isFullSizeCell = this._checkFullSizeCell();
        var grow = fixed && !isFullSizeCell ? 0 : isFullSizeCell ? 1 : gravityNumber || 1;
        var fillSpace = this._isXDirection() ? "x" : "y";
        if (minWidth !== undefined && !collapsed)
            style.minWidth = minWidth;
        if (minHeight !== undefined && !collapsed)
            style.minHeight = minHeight;
        if (maxWidth !== undefined)
            style.maxWidth = maxWidth;
        if (maxHeight !== undefined)
            style.maxHeight = maxHeight;
        if (this._parent === undefined && !fillSpace !== undefined) {
            fillSpace = true;
        }
        if (!isFullSizeCell && width !== undefined && width !== "content") {
            style.width = width;
        }
        else {
            if (fillSpace === true) {
                style.width = "100%";
            }
            else if (fillSpace === "x") {
                if (autoWidth) {
                    style.flex = "0 0 auto";
                }
                else {
                    var isAuto = this._isXDirection() ? "1px" : "auto";
                    style.flex = "".concat(grow, " ").concat(cols || rows ? "0 ".concat(isAuto) : "1 auto");
                }
            }
        }
        if (!isFullSizeCell && height !== undefined && height !== "content") {
            style.height = height;
        }
        else {
            if (fillSpace === true) {
                style.height = "100%";
            }
            else if (fillSpace === "y") {
                if (autoHeight) {
                    style.flex = "0 0 auto";
                }
                else {
                    var isAuto = !this._isXDirection() ? "1px" : "auto";
                    style.flex = "".concat(grow, " ").concat(cols || rows ? "0 ".concat(isAuto) : "1 auto");
                }
            }
        }
        if (fillSpace === true && config.width === undefined && config.height === undefined) {
            style.flex = "".concat(grow, " 1 auto");
        }
        if (collapsed) {
            if (this._isXDirection()) {
                style.width = "auto";
            }
            else {
                style.height = "auto";
            }
            style.flex = "0 0 auto";
        }
        return style;
    };
    Cell.prototype._resizedWindow = function () {
        var _a;
        if (this._isLastFlexCell === undefined) {
            this._isLastFlexCell = ((_a = this._getAnyFlexCell(true)) === null || _a === void 0 ? void 0 : _a.id) === this.id;
        }
        else if (!this._isLastFlexCell) {
            window.removeEventListener("resize", this._afterWindowResized);
        }
        if (this._isLastFlexCell) {
            var prop = this._isXDirection() ? "width" : "height";
            this.config[prop] = undefined;
            this.paint();
        }
    };
    Cell.prototype._resetCellsSize = function () {
        var _this = this;
        var cells = this._parent._cells.filter(function (cell) {
            return cell !== _this && !cell.config.hidden && !cell.config.collapsed;
        });
        var direction = this._isXDirection();
        var autoSize = direction ? "$autoWidth" : "$autoHeight";
        var size = direction ? "width" : "height";
        cells.forEach(function (cell) {
            if (cell.config[autoSize]) {
                cell.config[size] = undefined;
            }
        });
    };
    Cell.prototype._checkFullSizeCell = function () {
        var _this = this;
        if (!this._parent)
            return false;
        var autoSize = this._isXDirection() ? "$autoWidth" : "$autoHeight";
        if (!this.config[autoSize])
            return false;
        var cells = this._parent._cells.filter(function (cell) {
            return cell !== _this && !cell.config.hidden;
        });
        return !!cells.length && cells.every(function (cell) { return cell.config.collapsed; });
    };
    return Cell;
}(view_1.View));
exports.Cell = Cell;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupEvents = void 0;
var PopupEvents;
(function (PopupEvents) {
    PopupEvents["beforeHide"] = "beforeHide";
    PopupEvents["beforeShow"] = "beforeShow";
    PopupEvents["afterHide"] = "afterHide";
    PopupEvents["afterShow"] = "afterShow";
    PopupEvents["click"] = "click";
})(PopupEvents || (exports.PopupEvents = PopupEvents = {}));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderEvents = void 0;
var SliderEvents;
(function (SliderEvents) {
    SliderEvents["beforeChange"] = "beforeChange";
    SliderEvents["change"] = "change";
    SliderEvents["focus"] = "focus";
    SliderEvents["blur"] = "blur";
    SliderEvents["keydown"] = "keydown";
    SliderEvents["mousedown"] = "mousedown";
    SliderEvents["mouseup"] = "mouseup";
})(SliderEvents || (exports.SliderEvents = SliderEvents = {}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimepickerEvents = void 0;
var TimepickerEvents;
(function (TimepickerEvents) {
    TimepickerEvents["beforeChange"] = "beforeChange";
    TimepickerEvents["change"] = "change";
    TimepickerEvents["beforeApply"] = "beforeApply";
    TimepickerEvents["afterApply"] = "afterApply";
    TimepickerEvents["beforeClose"] = "beforeClose";
    TimepickerEvents["afterClose"] = "afterClose";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["apply"] = "apply";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["close"] = "close";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["save"] = "save";
})(TimepickerEvents || (exports.TimepickerEvents = TimepickerEvents = {}));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEvents = void 0;
var CalendarEvents;
(function (CalendarEvents) {
    CalendarEvents["change"] = "change";
    CalendarEvents["beforeChange"] = "beforechange";
    CalendarEvents["modeChange"] = "modeChange";
    CalendarEvents["monthSelected"] = "monthSelected";
    CalendarEvents["yearSelected"] = "yearSelected";
    CalendarEvents["cancelClick"] = "cancelClick";
    CalendarEvents["dateMouseOver"] = "dateMouseOver";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    CalendarEvents["dateHover"] = "dateHover";
})(CalendarEvents || (exports.CalendarEvents = CalendarEvents = {}));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var dom_1 = __webpack_require__(0);
var BaseShape_1 = __webpack_require__(16);
var templates_1 = __webpack_require__(8);
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(config, parameters) {
        return _super.call(this, config, parameters) || this;
    }
    Card.prototype.render = function () {
        var _this = this;
        var _a = this.config, id = _a.id, angle = _a.angle, width = _a.width, height = _a.height, headerColor = _a.headerColor, $group = _a.$group, $selected = _a.$selected;
        var zIndex = $group || $selected ? ($selected ? 2 : 1) : 0;
        var borderColor = this.config.$selected ? headerColor : "#E4E4E4";
        var coords = this.getCoords(this.config);
        var circle = [];
        if (Array.isArray(this.config.dir)) {
            this.config.dir.forEach(function (_dir, index) {
                circle.push((0, templates_1.getCircleTpl)(_this.config, index));
            });
        }
        else {
            circle.push((0, templates_1.getCircleTpl)(this.config));
        }
        return (0, dom_1.el)("div.dhx_diagram_item.dhx_diagram_shape.dhx_diagram_shape_card", {
            _key: id,
            "data-dhx-id": id,
            class: this.getCss(),
            style: {
                transform: "rotate(".concat(angle || 0, "deg)"),
                position: "absolute",
                top: coords.y,
                left: coords.x,
                zIndex: zIndex,
            },
        }, __spreadArray([
            (0, dom_1.el)("div", {
                style: {
                    height: height,
                    width: width,
                    border: "1px solid ".concat(borderColor),
                    borderRadius: "1px",
                },
            }),
            (0, templates_1.getHeaderTpl)(this.config),
            (0, templates_1.getTextTemplate)(this.config, this.getContent())
        ], circle, true));
    };
    Card.prototype.setDefaults = function (config, defaults) {
        var width = config.width, height = config.height, text = config.text, headerColor = config.headerColor, fixed = config.fixed;
        var widthDefaut = defaults.width ? parseFloat(defaults.width) : 140;
        var heightDefault = defaults.height ? parseFloat(defaults.height) : 90;
        config.width = width || widthDefaut;
        config.height = height || heightDefault;
        config.text = typeof text === "string" ? text : defaults.text || "";
        config.headerColor = headerColor || defaults.headerColor || "";
        config.fixed = fixed || false;
        config.editable = typeof config.editable === "boolean" ? config.editable : true;
        return config;
    };
    Card.prototype.getContent = function () {
        var _a = this.config, $editable = _a.$editable, text = _a.text;
        return (0, dom_1.el)("span.dhx_diagram_item__text", {
            style: (0, templates_1.getShapeCss)(__assign(__assign({}, this.config), { textAlign: "center", textVerticalAlign: "center" })),
        }, $editable ? [this.getEditorNode()] : text);
    };
    return Card;
}(BaseShape_1.BaseShape));
exports.Card = Card;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomShape = void 0;
var dom_1 = __webpack_require__(0);
var BaseShape_1 = __webpack_require__(16);
var templates_1 = __webpack_require__(8);
var CustomShape = /** @class */ (function (_super) {
    __extends(CustomShape, _super);
    function CustomShape(config, parameters) {
        var _this = _super.call(this, config, parameters) || this;
        _this.shapes = parameters.shapes;
        return _this;
    }
    CustomShape.prototype.render = function () {
        var _this = this;
        var _a = this.config, id = _a.id, angle = _a.angle, width = _a.width, height = _a.height, $group = _a.$group, $selected = _a.$selected;
        var zIndex = $group || $selected ? ($selected ? 2 : 1) : 0;
        var coords = this.getCoords(this.config);
        var circle = [];
        if (Array.isArray(this.config.dir)) {
            this.config.dir.forEach(function (_dir, index) {
                circle.push((0, templates_1.getCircleTpl)(_this.config, index));
            });
        }
        else {
            circle.push((0, templates_1.getCircleTpl)(this.config));
        }
        return (0, dom_1.el)("div.dhx_diagram_item.dhx_diagram_shape.dhx_diagram_shape_template", {
            _key: id,
            class: this.getCss(),
            "data-dhx-id": id,
            style: {
                transform: "rotate(".concat(angle || 0, "deg)"),
                zIndex: zIndex,
                position: "absolute",
                height: height,
                width: width,
                top: coords.y,
                left: coords.x,
            },
        }, __spreadArray([this._getCustomContent()], circle, true));
    };
    CustomShape.prototype.setDefaults = function (config, defaults) {
        Object.keys(defaults).forEach(function (property) {
            config[property] = config[property] || defaults[property];
        });
        var widthDefaut = defaults.width ? parseFloat(defaults.width) : 140;
        var heightDefault = defaults.height ? parseFloat(defaults.height) : 90;
        config.width = config.width || widthDefaut;
        config.height = config.height || heightDefault;
        config.x = config.x || 0;
        config.y = config.y || 0;
        config.fixed = config.fixed || false;
        return config;
    };
    CustomShape.prototype._getCustomContent = function () {
        var _a = this.config, type = _a.type, width = _a.width, height = _a.height;
        var shape = this.shapes[type];
        if (typeof shape !== "function") {
            return;
        }
        return (0, dom_1.el)("div.dhx_diagram_shape__content", {
            style: {
                width: width,
                height: height,
            },
        }, this._getShapeFromFunction(shape));
    };
    CustomShape.prototype._normalizeConfigText = function (text) {
        var _this = this;
        if (Array.isArray(text)) {
            text.forEach(function (el) { return _this._normalizeConfigText(el); });
        }
        else if (typeof text === "string") {
            if (text.includes("&"))
                text = text.replace(/&/g, "&amp;");
            if (text.includes("<"))
                text = text.replace(/</g, "&lt;");
            if (text.includes(">"))
                text = text.replace(/>/g, "&gt;");
            if (text.includes("'"))
                text = text.replace(/'/g, "&apos;");
            if (text.includes("\""))
                text = text.replace(/"/g, "&quot;");
        }
        return text;
    };
    CustomShape.prototype._getShapeFromFunction = function (func) {
        var _this = this;
        var preparedValues = {};
        Object.entries(this.config).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if ((key !== "id" &&
                key !== "type" &&
                key !== "preview" &&
                !key.startsWith("$") &&
                typeof value === "string") ||
                Array.isArray(value)) {
                preparedValues[key] = _this._normalizeConfigText(value);
            }
        });
        var shape = new DOMParser().parseFromString(func(Object.assign({}, this.config, preparedValues)), "text/xml");
        return [(0, dom_1.jsonToVDOM)((0, dom_1.xmlToJson)(shape))];
    };
    return CustomShape;
}(BaseShape_1.BaseShape));
exports.CustomShape = CustomShape;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesCollection = void 0;
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(7);
var types_1 = __webpack_require__(18);
var ShapesCollection = /** @class */ (function (_super) {
    __extends(ShapesCollection, _super);
    function ShapesCollection(config, events) {
        var _this = _super.call(this, config, events) || this;
        _this._groupChildren = {};
        _this._children = {};
        _this._roots = [];
        _this.events.on(types_1.DataEvents.change, function (_, mode, item) {
            var _a;
            var type = (_a = item === null || item === void 0 ? void 0 : item.$item) === null || _a === void 0 ? void 0 : _a.getBaseType();
            if (_this.config.diagramConfig.type === "default") {
                switch (mode) {
                    case "add":
                        if (type === "group" || type === "swimlane") {
                            if (type === "swimlane") {
                                _this._checkSwimlaneCells(item);
                            }
                            _this._setGroupChildren(item);
                        }
                        break;
                    case "update":
                        if (type === "group" || type === "swimlane") {
                            _this._setGroupChildren(item);
                        }
                        break;
                    case "remove":
                        if (type === "group" || type === "swimlane") {
                            _this._removeGroupChildren(item);
                        }
                        break;
                }
            }
            else {
                if (mode === "add" && item.parent) {
                    _this._addCore({ from: item.parent, to: item.id }, -1);
                }
            }
            if (mode === "remove") {
                _this._removeNested(item);
                _this._removeCore(item.$parent);
            }
            _this._mark_chains();
        });
        _this.events.on(types_1.DataEvents.filter, function () { return _this._mark_chains(); });
        return _this;
    }
    ShapesCollection.prototype.getChildren = function (id, isTree) {
        if (isTree === void 0) { isTree = true; }
        var parent = this._groupChildren[id] || this._children[id];
        var children = [];
        if (parent) {
            children = __spreadArray(__spreadArray([], children, true), parent, true);
            if (isTree) {
                for (var index = 0; index < parent.length; index++) {
                    children = __spreadArray(__spreadArray([], children, true), this.getChildren(parent[index].id), true);
                }
            }
        }
        return children;
    };
    ShapesCollection.prototype.eachChild = function (id, callback, isTree) {
        if (isTree === void 0) { isTree = true; }
        var parent = this._groupChildren[id] || this._children[id];
        if (!parent) {
            return;
        }
        for (var index = 0; index < parent.length; index++) {
            var item = parent[index];
            callback.call(this, item);
            if ((this._groupChildren[item.id] || this._children[item.id]) && isTree) {
                this.eachChild(item.id, callback);
            }
        }
    };
    ShapesCollection.prototype.eachParent = function (id, callback, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item || this._roots.includes(id)) {
            return;
        }
        if (self) {
            callback.call(this, item);
        }
        var parent = this.getItem(item.parent || item.$group);
        callback.call(this, parent);
        this.eachParent(item.parent || item.$group, callback);
    };
    ShapesCollection.prototype.getNearId = function (id) {
        var item = this._pull[id];
        if (!item) {
            if (!this._order.length) {
                return "";
            }
            return this._order[0].id;
        }
        var test = item;
        var type = this.config.diagramConfig.type;
        while ((type === "org" || type === "mindmap") && test.$parent) {
            test = this._pull[this._pull[test.$parent].from];
            if (test.open === false) {
                return test.id;
            }
        }
        return item.id;
    };
    ShapesCollection.prototype.mapVisible = function (handler) {
        var _this = this;
        var result = [];
        var type = this.config.diagramConfig.type;
        if (type === "mindmap" || type === "org") {
            var roots = this.getRoots();
            for (var i = 0; i < roots.length; i++) {
                this._eachBranch(this.getItem(roots[i]), handler, result);
            }
        }
        else {
            this.forEach(function (item) {
                if (item.hidden) {
                    return;
                }
                if (item.$item.getBaseType() === "line") {
                    var from = _this.getItem(item.from) || {};
                    var to = _this.getItem(item.to) || {};
                    if (from.hidden || to.hidden) {
                        return;
                    }
                    _this._setLineLevel(item, from, to);
                }
                result.push(handler(item));
            });
        }
        return result;
    };
    ShapesCollection.prototype.getRoots = function () {
        return this._roots;
    };
    ShapesCollection.prototype.getRoot = function (id) {
        if (!id || !this.exists(id)) {
            return;
        }
        var item = this.getItem(id);
        if (!item.$group && !item.parent) {
            return id;
        }
        return this.getRoot(item.$group || item.parent);
    };
    ShapesCollection.prototype.serialize = function () {
        return this._serialize(__spreadArray([], _super.prototype.serialize.call(this), true)) || [];
    };
    ShapesCollection.prototype._serialize = function (data) {
        var _this = this;
        if (!data.length)
            return;
        return data.map(function (item) {
            if ((0, core_1.isType)(item) === "object") {
                var newItem_1 = __assign({}, item);
                Object.entries(newItem_1).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    if (key.startsWith("$")) {
                        delete newItem_1[key];
                    }
                    else if (Array.isArray(value)) {
                        newItem_1[key] = _this._serialize(value);
                    }
                    else if ((0, core_1.isType)(value) === "object") {
                        newItem_1[key] = _this._serialize([value])[0];
                    }
                });
                return newItem_1;
            }
            return item;
        });
    };
    ShapesCollection.prototype._removeNested = function (item) {
        var _this = this;
        var type = this.config.diagramConfig.type;
        var $connection = item.$connection, $group = item.$group;
        if (type === "default") {
            if ($group) {
                this._setGroupChildren(this.getItem($group));
            }
            if (item.$item.getBaseType() === "line") {
                this.eachChild(item.id, function (i) { return _this._removeCore(i.id); });
            }
        }
        if ($connection) {
            for (var i = 0; i < $connection.length; i++) {
                if (type === "mindmap" || type === "org") {
                    this._removeNested(this.getItem($connection[i][1]));
                    this._removeCore($connection[i][1]);
                }
                this._removeCore($connection[i][0]);
                this.eachChild($connection[i][0], function (i) { return _this._removeCore(i.id); });
            }
        }
    };
    ShapesCollection.prototype._eachBranch = function (item, handler, stack) {
        if (item.hidden) {
            return;
        }
        stack.push(handler(item)); // master item
        if (item.open !== false) {
            var kids = item.$connection;
            if (kids) {
                for (var i = 0; i < kids.length; i++) {
                    var child = this.getItem(kids[i][1]);
                    if (!child.hidden) {
                        stack.push(handler(this.getItem(kids[i][0]))); // link
                        this._eachBranch(child, handler, stack);
                    }
                }
            }
        }
    };
    ShapesCollection.prototype._parse_data = function (data) {
        var _this = this;
        var links = [];
        var linksInData = false;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            if (item.parent && !linksInData) {
                links.push({ from: item.parent, to: item.id });
            }
            if (item.from) {
                linksInData = true;
            }
        }
        if (links.length && !linksInData) {
            data = data.concat(links);
        }
        _super.prototype._parse_data.call(this, data);
        this._mark_chains();
        this.mapVisible(function (item) {
            var type = item === null || item === void 0 ? void 0 : item.$item.getBaseType();
            if (type === "group" || type === "swimlane") {
                if (type === "swimlane") {
                    _this._checkSwimlaneCells(item);
                }
                _this._setGroupChildren(item);
            }
        });
    };
    ShapesCollection.prototype._mark_chains = function () {
        var _this = this;
        this._roots = [];
        this._children = {};
        var hash = {};
        var parents = {};
        var $parents = {};
        var $assistants = {};
        var $partners = {};
        var type = this.config.diagramConfig.type;
        this.forEach(function (item) {
            var itemType = item.$item.getBaseType();
            if (itemType === "line") {
                var link = item;
                parents[link.to] = link.id;
                if (!hash[link.from]) {
                    hash[link.from] = [];
                }
                hash[link.from].push([item.id, link.to]);
                if (type === "default") {
                    if (!hash[link.to]) {
                        hash[link.to] = [];
                    }
                    hash[link.to].push([item.id, link.from]);
                }
                $parents[link.to] = link.from;
            }
            if (type === "org") {
                if (item.assistant) {
                    if (!$assistants[item.parent]) {
                        $assistants[item.parent] = [];
                    }
                    $assistants[item.parent].push(item.id);
                }
                if (item.partner) {
                    if (!$partners[item.parent]) {
                        $partners[item.parent] = [];
                    }
                    $partners[item.parent].push(item.id);
                }
            }
        });
        this.forEach(function (item) {
            var itemType = item.$item.getBaseType();
            var itemId = item.id;
            var _a = _this.config.diagramConfig, type = _a.type, lineConfig = _a.lineConfig;
            item.$typeConfig = { type: type, lineConfig: lineConfig };
            if (itemType === "shape") {
                item.$connection = hash[itemId];
            }
            if (type === "default") {
                if (!item.$group) {
                    _this._roots.push(itemId);
                }
                if (itemType === "lineTitle") {
                    if (!_this._children[item.parent]) {
                        _this._children[item.parent] = [];
                    }
                    _this._children[item.parent].push(item);
                    item.$item.parent = _this.getItem(item.parent);
                }
            }
            else {
                if (itemType === "shape") {
                    item.$parent = parents[itemId];
                    if (!item.parent) {
                        item.parent = $parents[itemId];
                    }
                    if (item.parent) {
                        if (!_this._children[item.parent]) {
                            _this._children[item.parent] = [];
                        }
                        _this._children[item.parent].push(item);
                    }
                    else {
                        _this._roots.push(itemId);
                    }
                    if ($assistants[itemId]) {
                        item.$assistants = $assistants[itemId];
                    }
                    else {
                        delete item.$assistants;
                    }
                    if ($partners[itemId]) {
                        item.$partners = { common: $partners[itemId] };
                    }
                    else {
                        delete item.$partners;
                    }
                }
            }
        });
        if (type !== "default") {
            if (type === "mindmap") {
                var root = this.getItem(this._roots[0]);
                if (!(0, core_1.isEmptyObj)(root === null || root === void 0 ? void 0 : root.openDir) && Object.values(root === null || root === void 0 ? void 0 : root.openDir).every(function (open) { return !open; })) {
                    root.open = false;
                }
            }
            this._setBranchLevel(this.getItem(this._roots[0]));
        }
    };
    ShapesCollection.prototype._setBranchLevel = function (item, level) {
        if (level === void 0) { level = 0; }
        if (!item)
            return;
        var kids = item === null || item === void 0 ? void 0 : item.$connection;
        if (kids) {
            var sub = void 0;
            for (var i = 0; i < kids.length; i++) {
                sub = this.getItem(kids[i][1]);
                if (!sub.hidden) {
                    item.$level = level;
                    this._setBranchLevel(sub, level + 1);
                }
            }
        }
        item.$level = level++;
    };
    ShapesCollection.prototype._setLineLevel = function (line, from, to) {
        if (!from && !to) {
            line.$level = 0;
            return;
        }
        var level = 0;
        if ((from === null || from === void 0 ? void 0 : from.$group) && (from === null || from === void 0 ? void 0 : from.id)) {
            var parents_1 = [];
            this.eachParent(from.id, function (i) { return (i === null || i === void 0 ? void 0 : i.id) && parents_1.push(i.id); });
            if (parents_1.length > level)
                level = parents_1.length;
        }
        if ((to === null || to === void 0 ? void 0 : to.$group) && (to === null || to === void 0 ? void 0 : to.id)) {
            var parents_2 = [];
            this.eachParent(to.id, function (i) { return (i === null || i === void 0 ? void 0 : i.id) && parents_2.push(i.id); });
            if (parents_2.length > level)
                level = parents_2.length;
        }
        line.$level = level;
    };
    ShapesCollection.prototype._setGroupChildren = function (item) {
        var _a;
        if (!item)
            return;
        this._groupChildren[item.id] = [];
        if (!item.groupChildren) {
            item.groupChildren = [];
        }
        if ((_a = item === null || item === void 0 ? void 0 : item.layout) === null || _a === void 0 ? void 0 : _a.length) {
            var collection = new Set(item.layout.flat(Infinity));
            item.groupChildren = Array.from(collection);
        }
        var children = item.groupChildren;
        if (Array.isArray(children) && children.length) {
            for (var index = 0; index < children.length; index++) {
                var child = this._pull[children[index]];
                if (child) {
                    child.$group = item.id;
                    this._groupChildren[item.id].push(child);
                    if (child.$item.getBaseType() === "group" && !this._groupChildren[child.id]) {
                        this._setGroupChildren(child);
                    }
                }
            }
        }
        this._setGroupVisible(item);
    };
    ShapesCollection.prototype._removeGroupChildren = function (_a) {
        var id = _a.id;
        if (this._groupChildren[id].length) {
            for (var index = 0; index < this._groupChildren[id].length; index++) {
                this.remove(this._groupChildren[id][index].id);
            }
        }
        delete this._groupChildren[id];
    };
    ShapesCollection.prototype._setGroupVisible = function (_a) {
        var _this = this;
        var id = _a.id, open = _a.open, header = _a.header;
        var isOpen = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.closable) ? open : true;
        if (!isOpen) {
            this.eachChild(id, function (item) { return _this.update(item.id, { hidden: !open }, true); });
        }
        else {
            this.eachChild(id, function (item) {
                var _a, _b;
                if (((_a = _this._pull[item.$group]) === null || _a === void 0 ? void 0 : _a.open) && !((_b = _this._pull[item.$group]) === null || _b === void 0 ? void 0 : _b.hidden)) {
                    _this.update(item.id, { hidden: !open }, true);
                }
            });
        }
    };
    ShapesCollection.prototype._checkSwimlaneCells = function (item) {
        var layout = item.layout;
        var pull = {};
        for (var i = 0; i < layout.length; i++) {
            var row = layout[i];
            for (var k = 0; k < row.length; k++) {
                var cell = row[k];
                if (!pull[cell] && !this.exists(cell)) {
                    pull[cell] = {
                        type: "$sgroup",
                        id: cell,
                    };
                }
            }
        }
        this.add(Object.values(pull));
    };
    return ShapesCollection;
}(ts_data_1.DataCollection));
exports.ShapesCollection = ShapesCollection;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirVectors = exports.Direction = exports.LineMode = void 0;
var LineMode;
(function (LineMode) {
    LineMode[LineMode["Direct"] = 1] = "Direct";
    LineMode[LineMode["Edges"] = 2] = "Edges";
})(LineMode || (exports.LineMode = LineMode = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Top"] = 1] = "Top";
    Direction[Direction["Bottom"] = 2] = "Bottom";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (exports.Direction = Direction = {}));
exports.DirVectors = (_a = {},
    _a[Direction.Bottom] = { x: 0, y: 1 },
    _a[Direction.Top] = { x: 0, y: -1 },
    _a[Direction.Right] = { x: 1, y: 0 },
    _a[Direction.Left] = { x: -1, y: 0 },
    _a);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeaderColor = void 0;
var colors = ["#FF9800", "#607D8B", "#00C7B5", "#03A9F4", "#9575CD", "#F06292"];
function setHeaderColor(data) {
    data.forEach(function (shape) {
        var kids = shape.$connection;
        if (kids) {
            var firstChildColor = data.getItem(kids[0][1]).headerColor;
            shape.$expandColor = firstChildColor || colors[(shape.$level + 1) % colors.length];
        }
        var headerColor = colors[shape.$level % colors.length];
        if (shape.partner)
            headerColor = colors[(shape.$level - 1) % colors.length];
        if (shape.assistant)
            headerColor = colors[(shape.$level + 2) % colors.length];
        shape.stroke = shape.stroke || headerColor;
        shape.headerColor = shape.headerColor || headerColor;
    });
}
exports.setHeaderColor = setHeaderColor;


/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableTooltip = exports.enableTooltip = exports.tooltip = exports.getZIndex = exports.findPosition = void 0;
var html_1 = __webpack_require__(2);
var types_1 = __webpack_require__(32);
var DEFAULT_SHOW_DELAY = 750;
var DEFAULT_HIDE_DELAY = 200;
function findPosition(targetRect, position, width, height, margin, recursion) {
    if (margin === void 0) { margin = 8; }
    if (recursion === void 0) { recursion = 0; }
    var pos;
    var left;
    var top;
    if (recursion > 1) {
        position = types_1.Position.center;
    }
    if (position !== "top" && position !== "bottom") {
        var topOffset = targetRect.top + (targetRect.height - height) / 2;
        var isShift = topOffset < 0 && window.pageYOffset + topOffset + height < scrollY + window.innerHeight;
        top = window.pageYOffset + (isShift ? 0 : topOffset);
    }
    switch (position) {
        case types_1.Position.center:
            left = targetRect.left + window.pageXOffset + (targetRect.width - width) / 2;
            if (left + margin < window.pageXOffset) {
                left = targetRect.left + window.pageXOffset;
            }
            pos = types_1.RealPosition.center;
            return { left: left, top: top, pos: pos };
        case types_1.Position.right:
            pos = types_1.RealPosition.right;
            left = targetRect.right + window.pageXOffset + margin;
            if (left + width > window.innerWidth + window.pageXOffset) {
                // // set left
                return findPosition(targetRect, types_1.Position.left, width, height, margin, ++recursion);
            }
            return { left: left, top: top, pos: pos };
        case types_1.Position.left:
            pos = types_1.RealPosition.left;
            left = window.pageXOffset + targetRect.left - width - margin;
            if (left < 0) {
                // // set right
                return findPosition(targetRect, types_1.Position.right, width, height, margin, ++recursion);
            }
            return { left: left, top: top, pos: pos };
        case types_1.Position.top:
            pos = types_1.RealPosition.top;
            left = window.pageXOffset + targetRect.left + (targetRect.width - width) / 2;
            if (left + width > window.innerWidth + window.pageXOffset) {
                left = window.innerWidth + window.pageXOffset - width;
            }
            else if (left < 0) {
                left = 0;
            }
            if (targetRect.top < height) {
                // // set bottom
                return findPosition(targetRect, types_1.Position.bottom, width, height, margin, ++recursion);
            }
            top = window.pageYOffset + targetRect.top - height - margin;
            return { left: left, top: top, pos: pos };
        case types_1.Position.bottom:
        default:
            left = window.pageXOffset + targetRect.left + (targetRect.width - width) / 2;
            if (left + width > window.innerWidth + window.pageXOffset) {
                left = window.innerWidth + window.pageXOffset - width;
            }
            else if (left < 0) {
                left = 0;
            }
            pos = types_1.RealPosition.bottom;
            top = window.pageYOffset + targetRect.bottom + margin;
            if (top + height > window.innerHeight + window.pageYOffset) {
                // // set top
                return findPosition(targetRect, types_1.Position.top, width, height, margin, ++recursion);
            }
            return { left: left, top: top, pos: pos };
    }
}
exports.findPosition = findPosition;
// tooltip init
var tooltipBox = document.createElement("div");
var tooltipText = document.createElement("span");
tooltipText.className = "dhx_tooltip__text";
tooltipBox.appendChild(tooltipText);
tooltipBox.setAttribute("role", "tooltip");
tooltipBox.style.position = "absolute";
var lastNode = null;
var isActive = false;
var hideTimeout = null;
var showTimeout = null;
var activeListenersDestructor;
function getZIndex(node) {
    if (node &&
        ((node.classList.contains("dhx_popup--window") &&
            node.classList.contains("dhx_popup--window_active")) ||
            node.classList.contains("dhx_popup--window_modal") ||
            node.classList.contains("dhx_popup"))) {
        return 10000000;
    }
    if (node === null || node === void 0 ? void 0 : node.classList.contains("dhx_popup--window")) {
        return 9999999;
    }
    if (node && node.offsetParent) {
        return getZIndex(node.offsetParent);
    }
    return null;
}
exports.getZIndex = getZIndex;
function showTooltip(node, text, position, css, force, margin, htmlEnable) {
    if (css === void 0) { css = ""; }
    if (force === void 0) { force = false; }
    if (margin === void 0) { margin = 8; }
    var rects = node.getBoundingClientRect();
    if (htmlEnable) {
        tooltipText.innerHTML = text;
    }
    else {
        tooltipText.textContent = text;
    }
    tooltipBox.style.left = null;
    tooltipBox.style.top = null;
    document.body.appendChild(tooltipBox);
    tooltipBox.className = "dhx_widget dhx_tooltip ".concat(force ? " dhx_tooltip--forced" : "", " ").concat(css);
    var _a = tooltipBox.getBoundingClientRect(), width = _a.width, height = _a.height;
    var _b = findPosition(rects, position, width, height, margin), left = _b.left, top = _b.top, pos = _b.pos;
    var zIndex = getZIndex(node);
    if (zIndex) {
        tooltipBox.style.zIndex = zIndex.toString();
    }
    switch (pos) {
        case types_1.RealPosition.bottom:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.top:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.left:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.right:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.center:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
    }
    tooltipBox.className += " dhx_tooltip--".concat(pos);
    isActive = true;
    if (!force) {
        setTimeout(function () {
            tooltipBox.className += " dhx_tooltip--animate";
        });
    }
}
function hideTooltip(delay) {
    if (lastNode) {
        hideTimeout = setTimeout(function () {
            document.body.removeChild(tooltipBox);
            isActive = false;
            hideTimeout = null;
        }, delay || DEFAULT_HIDE_DELAY);
    }
}
function addListeners(node, text, config) {
    var force = config.force, showDelay = config.showDelay, hideDelay = config.hideDelay, position = config.position, css = config.css, htmlEnable = config.htmlEnable, margin = config.margin;
    if (!force) {
        showTimeout = setTimeout(function () {
            showTooltip(node, text, position || types_1.Position.bottom, css, false, margin, htmlEnable);
        }, showDelay || DEFAULT_SHOW_DELAY);
    }
    var hide = function () {
        if (isActive) {
            hideTooltip(hideDelay);
        }
        clearTimeout(showTimeout);
        node.removeEventListener("mouseleave", hide);
        node.removeEventListener("blur", hide);
        document.removeEventListener("mousedown", hide);
        lastNode = null;
        activeListenersDestructor = null;
    };
    if (force) {
        showTooltip(node, text, position, css, force, margin, htmlEnable);
    }
    node.addEventListener("mouseleave", hide);
    node.addEventListener("blur", hide);
    document.addEventListener("mousedown", hide);
    activeListenersDestructor = hide;
}
// default
function tooltip(text, config) {
    var node = (0, html_1.toNode)(config.node);
    if (node === lastNode) {
        return;
    }
    if (activeListenersDestructor) {
        activeListenersDestructor();
        activeListenersDestructor = null;
    }
    lastNode = node;
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
        addListeners(node, text, __assign(__assign({}, config), { force: true }));
    }
    else {
        addListeners(node, text, config);
    }
}
exports.tooltip = tooltip;
function _mousemove(e) {
    var node = (0, html_1.locateNode)(e, "dhx_tooltip_text");
    if (!node) {
        return;
    }
    tooltip(node.getAttribute("dhx_tooltip_text"), {
        position: node.getAttribute("dhx_tooltip_position") || types_1.Position.bottom,
        node: node,
    });
}
function enableTooltip() {
    document.addEventListener("mousemove", _mousemove);
}
exports.enableTooltip = enableTooltip;
function disableTooltip() {
    document.removeEventListener("mousemove", _mousemove);
}
exports.disableTooltip = disableTooltip;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.focusManager = void 0;
var html_1 = __webpack_require__(2);
var FocusManager = /** @class */ (function () {
    function FocusManager() {
        var _this = this;
        this._initHandler = function (e) { return (_this._activeWidgetId = (0, html_1.locate)(e, "data-dhx-widget-id")); };
        this._removeFocusClass = function (e) {
            var classList = document.body.classList;
            if (classList.contains("utilityfocus"))
                classList.remove("utilityfocus");
        };
        this._addFocusClass = function (e) {
            var classList = document.body.classList;
            if (e.code === "Tab") {
                if (!classList.contains("utilityfocus"))
                    classList.add("utilityfocus");
            }
            else {
                if (classList.contains("utilityfocus"))
                    classList.remove("utilityfocus");
            }
        };
        document.addEventListener("focusin", this._initHandler);
        document.addEventListener("pointerdown", this._initHandler);
        document.addEventListener("mousedown", this._removeFocusClass);
        document.addEventListener("keydown", this._addFocusClass);
    }
    FocusManager.prototype.getFocusId = function () {
        return this._activeWidgetId;
    };
    FocusManager.prototype.setFocusId = function (id) {
        this._activeWidgetId = id;
    };
    return FocusManager;
}());
exports.focusManager = new FocusManager();


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(107), exports);
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(111), exports);
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    hours: "Hours",
    minutes: "Minutes",
    save: "Save",
};
exports.default = locale;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swimlane = void 0;
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var en_1 = __webpack_require__(40);
var BaseGroup_1 = __webpack_require__(41);
var templates_1 = __webpack_require__(8);
var Swimlane = /** @class */ (function (_super) {
    __extends(Swimlane, _super);
    function Swimlane(config, params) {
        var _this = _super.call(this, config, params) || this;
        _this.subHeaderNearCells = {
            rows: [],
            cols: [],
        };
        _this.children = {};
        return _this;
    }
    Swimlane.prototype.getBaseType = function () {
        return "swimlane";
    };
    Swimlane.prototype.isEditable = function (subheaderId) {
        var _a, _b;
        if (subheaderId) {
            var type = this.getSubHeaderType(subheaderId);
            var subHeaders = this.config[type === "col" ? "subHeaderCols" : "subHeaderRows"];
            var headers = subHeaders === null || subHeaders === void 0 ? void 0 : subHeaders.headers;
            var header = headers.find(function (_a) {
                var id = _a.id;
                return subheaderId === id;
            });
            if (typeof (header === null || header === void 0 ? void 0 : header.editable) === "boolean") {
                return header.editable;
            }
            return subHeaders === null || subHeaders === void 0 ? void 0 : subHeaders.editable;
        }
        return (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.editable;
    };
    Swimlane.prototype.getChildHtmlNodes = function (config, data) {
        this.removeExtraDefaults(data);
        this.setExtraDefaults(config, data);
        return _super.prototype.getChildHtmlNodes.call(this, config, data);
    };
    Swimlane.prototype.render = function (childData) {
        var _a = this.config, id = _a.id, header = _a.header, open = _a.open, $width = _a.$width, $height = _a.$height, subHeaderCols = _a.subHeaderCols, subHeaderRows = _a.subHeaderRows;
        var children = [];
        var data = childData ? childData : this.data.getChildren(this.id, false);
        children = this.getChildHtmlNodes(this.config, data);
        var isOpen = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.closable) ? open : true;
        if (!children.length && isOpen) {
            return;
        }
        this.setServiceProp(this.config);
        var isHeaderEnable = header === null || header === void 0 ? void 0 : header.enable;
        var isSubHeaderColsEnable = isOpen && (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.enable);
        var isSubHeaderRowsEnable = isOpen && (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.enable);
        var currentCss = "dhx_diagram_item dhx_diagram_group ";
        if (header === null || header === void 0 ? void 0 : header.enable) {
            currentCss += "dhx_diagram_group--position_".concat(header.position);
        }
        return (0, dom_1.el)("div.dhx_diagram_swimlane", {
            _key: id,
        }, [
            (0, dom_1.el)("div", {
                "data-dhx-id": id,
                class: "".concat(currentCss, " ").concat(this.getCss()),
                style: (0, templates_1.getSwimlaneContainerStyle)(this.config, this.getCoords(this.config)),
            }, [
                (0, dom_1.el)("div.dhx_diagram_group__children", __spreadArray([
                    (0, dom_1.sv)("svg.dhx_diagram_group__children", {
                        xmlns: "http://www.w3.org/2000/svg",
                        reserveAspectRatio: "none",
                        width: $width,
                        height: $height,
                    }, this.getChildSvgNodes(this.config, this.data))
                ], children, true)),
                isHeaderEnable && this.getGroupHeader(this.config, this.getEditorNode()),
                isSubHeaderColsEnable && this.getSubHeaderNode(this.config, "cols"),
                isSubHeaderRowsEnable && this.getSubHeaderNode(this.config, "rows"),
            ]),
            (0, dom_1.el)("div.dhx_diagram_group--background", {
                style: (0, templates_1.getSwimlaneBackGround)(this.config, this.getCoords(this.config)),
            }),
        ]);
    };
    Swimlane.prototype.setDefaults = function (config) {
        this.setServiceProp(config);
        _super.prototype.setDefaults.call(this, config);
        var subHeaderDefault = {
            fontSize: 14,
            lineHeight: 14,
            textAlign: "center",
            textVerticalAlign: "center",
            fontStyle: "normal",
            fontWeight: "500",
            fontColor: "#4C4C4C",
            iconColor: "#808080",
            editable: true,
            fill: "#EEF1F6",
        };
        if (config.subHeaderRows) {
            config.subHeaderRows = __assign(__assign({ height: 40, enable: true, position: "left" }, subHeaderDefault), config.subHeaderRows);
            if (!Array.isArray(config.subHeaderRows.headers)) {
                config.subHeaderRows.headers = [];
            }
        }
        if (config.subHeaderCols) {
            config.subHeaderCols = __assign(__assign({ height: 40, enable: true, position: "top" }, subHeaderDefault), config.subHeaderCols);
            if (!Array.isArray(config.subHeaderCols.headers)) {
                config.subHeaderCols.headers = [];
            }
        }
        return config;
    };
    Swimlane.prototype.setExtraDefaults = function (config, data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var layout = config.layout, height = config.height, width = config.width, header = config.header, x = config.x, y = config.y, subHeaderCols = config.subHeaderCols, subHeaderRows = config.subHeaderRows, _j = config.style, stroke = _j.stroke, strokeWidth = _j.strokeWidth;
        var children = {};
        var cellHeight = 0;
        var cellWidth = 0;
        var _k = this.getHeaderStates(config), isHeaderBottom = _k.isHeaderBottom, isHeaderLeft = _k.isHeaderLeft, isHeaderRight = _k.isHeaderRight, isHeaderTop = _k.isHeaderTop, isSubHeaderBottom = _k.isSubHeaderBottom, isSubHeaderLeft = _k.isSubHeaderLeft, isSubHeaderRight = _k.isSubHeaderRight, isSubHeaderTop = _k.isSubHeaderTop;
        var headerOffset = parseFloat(header === null || header === void 0 ? void 0 : header.height) || 0;
        var subHeaderRowsOffset = parseFloat(subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.height) || 0;
        var subHeaderColsOffset = parseFloat(subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.height) || 0;
        if (height) {
            var offset = 0;
            if (isHeaderTop || isHeaderBottom)
                offset += headerOffset;
            if (isSubHeaderTop || isSubHeaderBottom)
                offset += subHeaderColsOffset;
            cellHeight = (height - offset) / layout.length;
        }
        if (width) {
            var offset = 0;
            if (isHeaderRight || isHeaderLeft)
                offset += headerOffset;
            if (isSubHeaderRight || isSubHeaderLeft)
                offset += subHeaderRowsOffset;
            var maxLength = 0;
            for (var index = 0; index < layout.length; index++) {
                var length_1 = layout[index].length;
                if (length_1 > maxLength)
                    maxLength = length_1;
            }
            cellWidth = (width - offset) / maxLength;
        }
        this.subHeaderNearCells = { rows: [], cols: [] };
        this.children = {};
        for (var i = 0; i < data.length; i++) {
            this.children[data[i].id] = data[i];
        }
        for (var i = 0; i < layout.length; i++) {
            var row = layout[i];
            for (var k = 0; k < row.length; k++) {
                var cell = row[k];
                var item = children[cell];
                var prevItem = k !== 0 && children[row[k - 1]];
                var overItem = i !== 0 && children[layout[i - 1][k]];
                if (!item && this.children[cell]) {
                    children[cell] = this.children[cell];
                    children[cell].height = cellHeight;
                    children[cell].width = cellWidth;
                    children[cell].$rowCount = 1;
                    children[cell].$colCount = 1;
                    if (k === 0) {
                        var offset = 0;
                        if (isHeaderLeft)
                            offset += headerOffset;
                        if (isSubHeaderLeft)
                            offset += subHeaderRowsOffset;
                        children[cell].x = x + offset;
                        this.subHeaderNearCells.rows.push(children[cell]);
                    }
                    else {
                        children[cell].x = prevItem.x + prevItem.width;
                    }
                    if (i === 0) {
                        var offset = 0;
                        if (isHeaderTop)
                            offset += headerOffset;
                        if (isSubHeaderTop)
                            offset += subHeaderColsOffset;
                        children[cell].y = y + offset;
                        this.subHeaderNearCells.cols.push(children[cell]);
                    }
                    else {
                        children[cell].y = overItem.y + overItem.height;
                    }
                    var rowLength = this.subHeaderNearCells.rows.length - 1;
                    if ((_a = config === null || config === void 0 ? void 0 : config.subHeaderRows) === null || _a === void 0 ? void 0 : _a.enable) {
                        if (!((_b = config.subHeaderRows) === null || _b === void 0 ? void 0 : _b.headers[rowLength])) {
                            config.subHeaderRows.headers[rowLength] = {
                                text: en_1.default.shapebar.untitled,
                                id: (0, core_1.uid)(),
                            };
                        }
                        if (!((_d = (_c = config.subHeaderRows) === null || _c === void 0 ? void 0 : _c.headers[rowLength]) === null || _d === void 0 ? void 0 : _d.id)) {
                            config.subHeaderRows.headers[rowLength].id = (0, core_1.uid)();
                        }
                    }
                    var colLength = this.subHeaderNearCells.cols.length - 1;
                    if ((_e = config === null || config === void 0 ? void 0 : config.subHeaderCols) === null || _e === void 0 ? void 0 : _e.enable) {
                        if (!((_f = config.subHeaderCols) === null || _f === void 0 ? void 0 : _f.headers[colLength])) {
                            config.subHeaderCols.headers[colLength] = {
                                text: en_1.default.shapebar.untitled,
                                id: (0, core_1.uid)(),
                            };
                        }
                        if (!((_h = (_g = config.subHeaderCols) === null || _g === void 0 ? void 0 : _g.headers[colLength]) === null || _h === void 0 ? void 0 : _h.id)) {
                            config.subHeaderCols.headers[colLength].id = (0, core_1.uid)();
                        }
                    }
                    children[cell].style.stroke = stroke;
                    children[cell].style.strokeWidth = strokeWidth;
                }
                else if (item) {
                    if (prevItem === item && overItem !== item) {
                        children[cell].width += cellWidth;
                        children[cell].$colCount++;
                    }
                    if (overItem === item && prevItem !== item) {
                        children[cell].height += cellHeight;
                        children[cell].$rowCount++;
                    }
                }
                if (prevItem && prevItem !== item) {
                    children[cell].$borderPosition.left = true;
                }
                if (overItem && overItem !== item) {
                    children[cell].$borderPosition.top = true;
                }
            }
        }
        children = null;
    };
    Swimlane.prototype.removeExtraDefaults = function (data) {
        for (var index = 0; index < data.length; index++) {
            data[index].$borderPosition = {
                left: false,
                top: false,
            };
        }
    };
    Swimlane.prototype.getSubHeaderNode = function (config, type) {
        var _a, _b;
        var header = config.header, subHeaderCols = config.subHeaderCols, subHeaderRows = config.subHeaderRows, $height = config.height, $width = config.width, id = config.id;
        var _c = this.getHeaderStates(config), isHeaderBottom = _c.isHeaderBottom, isHeaderLeft = _c.isHeaderLeft, isHeaderRight = _c.isHeaderRight, isHeaderTop = _c.isHeaderTop, isSubHeaderBottom = _c.isSubHeaderBottom, isSubHeaderLeft = _c.isSubHeaderLeft, isSubHeaderRight = _c.isSubHeaderRight, isSubHeaderTop = _c.isSubHeaderTop;
        var headerOffset = parseFloat(header === null || header === void 0 ? void 0 : header.height) || 0;
        var subHeaderRowsOffset = parseFloat(subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.height) || 0;
        var subHeaderColsOffset = parseFloat(subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.height) || 0;
        var width = 0;
        var height = 0;
        var x = 0;
        var y = 0;
        if (type === "cols") {
            height = subHeaderColsOffset;
            width = $width;
            if (isSubHeaderTop && isHeaderTop) {
                y = headerOffset;
            }
            if (isSubHeaderBottom) {
                y = $height - subHeaderColsOffset;
                if (isHeaderBottom) {
                    y = $height - headerOffset - subHeaderColsOffset;
                }
            }
            if (isHeaderLeft) {
                x = headerOffset;
                width = $width - headerOffset;
            }
            if (isHeaderRight) {
                width = $width - headerOffset;
            }
        }
        if (type === "rows") {
            height = $height;
            width = subHeaderRowsOffset;
            if (isSubHeaderLeft && isHeaderLeft) {
                x = headerOffset;
            }
            if (isSubHeaderRight) {
                x = $width - subHeaderRowsOffset;
                if (isHeaderRight) {
                    x = $width - subHeaderRowsOffset - headerOffset;
                }
            }
            if (isHeaderTop) {
                y = headerOffset;
                height = $height - headerOffset;
            }
            if (isHeaderBottom) {
                height = $height - headerOffset;
            }
            if (isSubHeaderTop) {
                y += subHeaderColsOffset;
                height -= subHeaderColsOffset;
            }
            if (isSubHeaderBottom) {
                height -= subHeaderColsOffset;
            }
        }
        var style = {
            height: height,
            width: width,
            top: y,
            left: x,
        };
        var headersLength = this.subHeaderNearCells[type].length;
        var headers = type === "cols" ? subHeaderCols.headers : subHeaderRows.headers;
        var cellsNode = [];
        for (var index = 0; index < headersLength; index++) {
            var cell = headers[index];
            var headerHeight = type === "rows" ? (_a = this.subHeaderNearCells.rows[index]) === null || _a === void 0 ? void 0 : _a.height : "100%";
            var headerWidth = "100%";
            cell.$subMenu = {
                enable: true,
                data: [],
            };
            if (cell.$subMenu.enable) {
                var menuItemId = "".concat(id, "/").concat(cell.id, "/");
                if (type === "cols") {
                    cell.$subMenu.data = [
                        {
                            id: menuItemId + "add_column_left",
                            value: en_1.default.menuAddColumnLeft,
                            icon: "dxi dxi-table-column-plus-before",
                            add: "left",
                        },
                        {
                            id: menuItemId + "add_column_right",
                            value: en_1.default.menuAddColumnRight,
                            icon: "dxi dxi-table-column-plus-after",
                            add: "right",
                        },
                        {
                            id: menuItemId + "move_column_left",
                            value: en_1.default.menuMoveColumnLeft,
                            icon: "dxi dxi-arrow-left",
                            disabled: index === 0,
                            move: "left",
                        },
                        {
                            id: menuItemId + "move_column_right",
                            value: en_1.default.menuMoveColumnRight,
                            icon: "dxi dxi-arrow-right",
                            disabled: index === headersLength - 1,
                            move: "right",
                        },
                        {
                            type: "separator",
                        },
                        {
                            id: menuItemId + "remove",
                            value: en_1.default.menuDeleteCol,
                            icon: "dxi dxi-delete-outline",
                            disabled: headersLength === 1,
                            remove: "col",
                        },
                    ];
                }
                if (type === "rows") {
                    cell.$subMenu.data = [
                        {
                            id: menuItemId + "add_row_up",
                            value: en_1.default.menuAddRowUp,
                            icon: "dxi dxi-table-row-plus-before",
                            add: "up",
                        },
                        {
                            id: menuItemId + "add_row_down",
                            value: en_1.default.menuAddRowDown,
                            icon: "dxi dxi-table-row-plus-after",
                            add: "down",
                        },
                        {
                            id: menuItemId + "move_row_up",
                            value: en_1.default.menuMoveRowUp,
                            icon: "dxi dxi-arrow-up",
                            disabled: index === 0,
                            move: "up",
                        },
                        {
                            id: menuItemId + "move_row_down",
                            value: en_1.default.menuMoveRowDown,
                            icon: "dxi dxi-arrow-down",
                            disabled: index === headersLength - 1,
                            move: "down",
                        },
                        {
                            type: "separator",
                        },
                        {
                            id: menuItemId + "remove",
                            value: en_1.default.menuDeleteRow,
                            icon: "dxi dxi-delete-outline",
                            disabled: headersLength === 1,
                            remove: "row",
                        },
                    ];
                }
            }
            if (type === "cols") {
                headerWidth = (_b = this.subHeaderNearCells.cols[index]) === null || _b === void 0 ? void 0 : _b.width;
                if ((isSubHeaderLeft && index === 0) || (isSubHeaderRight && index === headersLength - 1)) {
                    headerWidth += subHeaderRowsOffset;
                }
            }
            cellsNode.push(this.getSubHeaderCellNode(__assign(__assign({}, cell), { type: type, index: index, width: headerWidth, height: headerHeight }), this.config, this.getEditorNode()));
        }
        return (0, dom_1.el)("div.dhx_diagram_swimlane__subheader.dhx_diagram_swimlane__subheader--position_".concat(type), {
            style: style,
        }, __spreadArray([], cellsNode, true));
    };
    Swimlane.prototype.getSubHeaderCellNode = function (cell, config, editorNode) {
        var _a = this.getHeaderStates(config), isSubHeaderLeft = _a.isSubHeaderLeft, isSubHeaderTop = _a.isSubHeaderTop;
        var _b = config.style, strokeWidth = _b.strokeWidth, stroke = _b.stroke;
        var width = cell.width, height = cell.height, id = cell.id, text = cell.text, type = cell.type, index = cell.index;
        var _c = type === "cols" ? config.subHeaderCols : config.subHeaderRows, lineHeight = _c.lineHeight, textAlign = _c.textAlign, textVerticalAlign = _c.textVerticalAlign, fontSize = _c.fontSize, fontColor = _c.fontColor, fontStyle = _c.fontStyle, fontWeight = _c.fontWeight, fill = _c.fill, iconColor = _c.iconColor;
        var textConfig = {
            lineHeight: cell.lineHeight || lineHeight,
            textAlign: cell.textAlign || textAlign,
            textVerticalAlign: cell.textVerticalAlign || textVerticalAlign,
            fontSize: cell.fontSize || fontSize,
            fontColor: cell.fontColor || fontColor,
            fontStyle: cell.fontStyle || fontStyle,
            fontWeight: cell.fontWeight || fontWeight,
        };
        var style = {
            width: width,
            height: height,
        };
        if (type === "cols") {
            var borderLeft = index !== 0 ? ", ".concat(strokeWidth, "px 0px 0px ").concat(stroke, " inset") : "";
            style.boxShadow = "0px ".concat(isSubHeaderTop ? "-" : "").concat(strokeWidth, "px 0px ").concat(stroke, " inset ").concat(borderLeft);
        }
        if (type === "rows") {
            var borderTop = index !== 0 ? ", 0px ".concat(strokeWidth, "px 0px ").concat(stroke, " inset") : "";
            style.boxShadow = "".concat(isSubHeaderLeft ? "-" : "").concat(strokeWidth, "px 0px 0px ").concat(stroke, " inset ").concat(borderTop);
        }
        return (0, dom_1.el)("div.dhx_diagram_swimlane__subheader_container", {
            _key: id,
            subheader_id: id,
            style: style,
        }, [
            (0, dom_1.el)("div.dhx_diagram_swimlane__subheader_text", {
                style: __assign({}, (0, templates_1.getTextStyle)(__assign(__assign({}, textConfig), { container: { width: width, height: height } }))),
            }, config.$editable && this.editableProperty.editableId === id ? [editorNode] : text),
            cell.$subMenu.enable && (0, templates_1.getMenuIcon)({ dir: type, color: cell.iconColor || iconColor }),
            (0, dom_1.el)("div", {
                style: {
                    position: "absolute",
                    width: width,
                    height: height,
                    background: cell.fill || fill,
                    zIndex: -1,
                },
            }),
        ]);
    };
    Swimlane.prototype.getHeaderStates = function (_a) {
        var header = _a.header, subHeaderRows = _a.subHeaderRows, subHeaderCols = _a.subHeaderCols;
        var isHeaderTop = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.position) === "top";
        var isHeaderBottom = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.position) === "bottom";
        var isHeaderRight = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.position) === "right";
        var isHeaderLeft = (header === null || header === void 0 ? void 0 : header.enable) && (header === null || header === void 0 ? void 0 : header.position) === "left";
        var isSubHeaderTop = (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.enable) && (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.position) === "top";
        var isSubHeaderBottom = (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.enable) && (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.position) === "bottom";
        var isSubHeaderRight = (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.enable) && (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.position) === "right";
        var isSubHeaderLeft = (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.enable) && (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.position) === "left";
        return {
            isHeaderTop: isHeaderTop,
            isHeaderBottom: isHeaderBottom,
            isHeaderRight: isHeaderRight,
            isHeaderLeft: isHeaderLeft,
            isSubHeaderTop: isSubHeaderTop,
            isSubHeaderBottom: isSubHeaderBottom,
            isSubHeaderRight: isSubHeaderRight,
            isSubHeaderLeft: isSubHeaderLeft,
        };
    };
    Swimlane.prototype.getSubHeaderType = function (subheaderId) {
        var _a;
        var _b = this.config, subHeaderCols = _b.subHeaderCols, subHeaderRows = _b.subHeaderRows;
        var isSubHeaderRowEnable = (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.enable) && ((_a = subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.headers) === null || _a === void 0 ? void 0 : _a.length);
        var isSubHeaderColEnable = (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.enable) && (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.headers.length);
        var rowIndex = -1;
        var colIndex = -1;
        var type;
        if (isSubHeaderRowEnable) {
            rowIndex = subHeaderRows.headers.findIndex(function (_a) {
                var id = _a.id;
                return subheaderId === id;
            });
            if (rowIndex !== -1)
                type = "row";
        }
        if (isSubHeaderColEnable) {
            colIndex = subHeaderCols.headers.findIndex(function (_a) {
                var id = _a.id;
                return subheaderId === id;
            });
            if (colIndex !== -1)
                type = "col";
        }
        return type;
    };
    return Swimlane;
}(BaseGroup_1.BaseGroup));
exports.Swimlane = Swimlane;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var dom_1 = __webpack_require__(0);
var templates_1 = __webpack_require__(8);
var BaseGroup_1 = __webpack_require__(41);
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(config, params) {
        return _super.call(this, config, params) || this;
    }
    Group.prototype.setDefaults = function (config) {
        config.width = config.width || 300;
        config.height = config.height || 200;
        this.setServiceProp(config);
        _super.prototype.setDefaults.call(this, config);
        return config;
    };
    Group.prototype.render = function () {
        this.setServiceProp(this.config);
        var _a = this.config, id = _a.id, header = _a.header, $width = _a.$width, $height = _a.$height;
        var currentCss = "dhx_diagram_item dhx_diagram_group ";
        if (header === null || header === void 0 ? void 0 : header.enable) {
            currentCss += "dhx_diagram_group--position_".concat(header.position);
        }
        var htmlChildren = this.getChildHtmlNodes(this.config, this.data);
        var svgChildren = this.getChildSvgNodes(this.config, this.data);
        return (0, dom_1.el)("div", {
            _key: id,
            "data-dhx-id": id,
            class: "".concat(currentCss, " ").concat(this.getCss()),
            style: (0, templates_1.getGroupContainerStyle)(this.config, this.getCoords(this.config)),
        }, [
            (0, dom_1.el)("div.dhx_diagram_group__children", __spreadArray([
                (0, dom_1.sv)("svg.dhx_diagram_group__children", {
                    xmlns: "http://www.w3.org/2000/svg",
                    reserveAspectRatio: "none",
                    width: $width,
                    height: $height,
                }, svgChildren)
            ], htmlChildren, true)),
            (header === null || header === void 0 ? void 0 : header.enable) && this.getGroupHeader(this.config, this.getEditorNode()),
        ]);
    };
    return Group;
}(BaseGroup_1.BaseGroup));
exports.Group = Group;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSwimlane = void 0;
var dom_1 = __webpack_require__(0);
var BaseGroup_1 = __webpack_require__(41);
var GroupSwimlane = /** @class */ (function (_super) {
    __extends(GroupSwimlane, _super);
    function GroupSwimlane(config, params) {
        var _this = _super.call(this, config, params) || this;
        _this.setServiceProp(config);
        return _this;
    }
    GroupSwimlane.prototype.setServiceProp = function (config) {
        var height = config.height, width = config.width, $borderPosition = config.$borderPosition;
        config.$captureArea = config.$captureArea || "out";
        config.$borderPosition = __assign({ left: false, top: false }, $borderPosition);
        config.entryArea.catchArea = 25;
        config.$width = width;
        config.$height = height;
    };
    GroupSwimlane.prototype.setDefaults = function (config) {
        _super.prototype.setDefaults.call(this, config);
        delete config.header;
        return config;
    };
    GroupSwimlane.prototype.render = function () {
        this.setServiceProp(this.config);
        var _a = this.config, id = _a.id, header = _a.header, $width = _a.$width, $height = _a.$height;
        var currentCss = "dhx_diagram_item dhx_diagram_group ";
        if (header === null || header === void 0 ? void 0 : header.enable) {
            currentCss += "dhx_diagram_group--position_".concat(header.position, " ");
        }
        function getGroupContainerStyle(config, coords) {
            var $width = config.$width, $height = config.$height, $captureArea = config.$captureArea, $borderPosition = config.$borderPosition;
            var _a = config.style, overFill = _a.overFill, partiallyFill = _a.partiallyFill, fill = _a.fill, strokeWidth = _a.strokeWidth, stroke = _a.stroke;
            var background;
            switch ($captureArea) {
                case "over":
                    background = overFill;
                    break;
                case "partially":
                    background = partiallyFill;
                    break;
                default:
                    background = fill;
                    break;
            }
            var borderLeft = ($borderPosition === null || $borderPosition === void 0 ? void 0 : $borderPosition.left) ? strokeWidth : 0;
            var borderTop = ($borderPosition === null || $borderPosition === void 0 ? void 0 : $borderPosition.top) ? strokeWidth : 0;
            var boxShadow = "".concat(borderLeft, "px ").concat(borderTop, "px 0px ").concat(stroke, " inset");
            return {
                position: "absolute",
                background: background,
                width: $width,
                height: $height,
                top: coords.y,
                left: coords.x,
                boxShadow: boxShadow,
            };
        }
        var htmlChildren = this.getChildHtmlNodes(this.config, this.data);
        var svgChildren = this.getChildSvgNodes(this.config, this.data);
        return (0, dom_1.el)("div.dhx_diagram_group_swimlane", {
            _key: id,
        }, [
            (0, dom_1.el)("div", {
                "data-dhx-id": id,
                class: "".concat(currentCss, " ").concat(this.getCss()),
                style: getGroupContainerStyle(this.config, this.getCoords(this.config)),
            }, [
                (0, dom_1.el)("div.dhx_diagram_group__children", __spreadArray([
                    (0, dom_1.sv)("svg.dhx_diagram_group__children", {
                        xmlns: "http://www.w3.org/2000/svg",
                        reserveAspectRatio: "none",
                        width: $width,
                        height: $height,
                    }, svgChildren)
                ], htmlChildren, true)),
            ]),
        ]);
    };
    return GroupSwimlane;
}(BaseGroup_1.BaseGroup));
exports.GroupSwimlane = GroupSwimlane;


/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(78);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31), __webpack_require__(79)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.js (DOM ViewModel)
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/

function sliceArgs(args, offs) {
	var arr = [];
	for (var i = offs; i < args.length; i++)
		{ arr.push(args[i]); }
	return arr;
}

function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

/*
// adapted from https://github.com/Olical/binary-search
export function binaryKeySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}
*/

// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// impl borrowed from https://github.com/ivijs/ivi
function longestIncreasingSubsequence(a) {
	var p = a.slice();
	var result = [];
	result.push(0);
	var u;
	var v;

	for (var i = 0, il = a.length; i < il; ++i) {
		var j = result[result.length - 1];
		if (a[j] < a[i]) {
			p[i] = j;
			result.push(i);
			continue;
		}

		u = 0;
		v = result.length - 1;

		while (u < v) {
			var c = ((u + v) / 2) | 0;
			if (a[result[c]] < a[i]) {
				u = c + 1;
			} else {
				v = c;
			}
		}

		if (a[i] < a[result[u]]) {
			if (u > 0) {
				p[i] = result[u - 1];
			}
			result[u] = i;
		}
	}

	u = result.length;
	v = result[u - 1];

	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}

	return result;
}

// based on https://github.com/Olical/binary-search
function binaryFindLarger(item, list) {
	var min = 0;
	var max = list.length - 1;
	var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

	return (min == list.length) ? null : min;

//	return -1;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

function isHydrated(vm) {
	return vm.node != null && vm.node.el != null;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,
	// part of longest increasing subsequence?
	_lis:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

var unitlessProps = {
	animationIterationCount: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridColumn: true,
	order: true,
	lineClamp: true,

	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	fontWeight: true,
	lineHeight: true,
	opacity: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,

	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};

function autoPx(name, val) {
	{
		// typeof val === 'number' is faster but fails for numeric strings
		return !isNaN(val) && !unitlessProps[name] ? (val + "px") : val;
	}
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(hooks, name, o, n, immediate) {
	if (hooks != null) {
		var fn = o.hooks[name];

		if (fn) {
			if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
				//	console.log(name + " should queue till repaint", o, n);
				immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
			}
			else {		// will*
				//	console.log(name + " may delay by promise", o, n);
				return fn(o, n);		// or pass  done() resolver
			}
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var vm = node.vm;

	var wuRes = vm != null && fireHook(vm.hooks, "willUnmount", vm, vm.data);

	var wrRes = fireHook(node.hooks, "willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, vm = node.vm;

	if (isArr(node.body)) {
		if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE) {
			for (var i = 0; i < node.body.length; i++)
				{ _removeChild(el, node.body[i].el); }
		}
		else
			{ deepUnref(node); }
	}

	delete el._node;

	parEl.removeChild(el);

	fireHook(node.hooks, "didRemove", node, null, immediate);

	if (vm != null) {
		fireHook(vm.hooks, "didUnmount", vm, vm.data, immediate);
		vm.node = null;
	}
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function deepUnref(node) {
	var obody = node.body;

	for (var i = 0; i < obody.length; i++) {
		var o2 = obody[i];
		delete o2.el._node;

		if (o2.vm != null)
			{ o2.vm.node = null; }

		if (isArr(o2.body))
			{ deepUnref(o2); }
	}
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0) {
		isArr(parent.body) && deepUnref(parent);
		parEl.textContent = null;
	}
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) ? node.vm : null;

	if (vm != null)
		{ fireHook(vm.hooks, "willMount", vm, vm.data); }

	fireHook(node.hooks, inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	fireHook(node.hooks, inDom ? "didReinsert" : "didInsert", node);

	if (vm != null)
		{ fireHook(vm.hooks, "didMount", vm, vm.data); }
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onemit = {};

function emitCfg(cfg) {
	assignObj(onemit, cfg);
}

function emit(evName) {
	var targ = this,
		src = targ;

	var args = sliceArgs(arguments, 1).concat(src, src.data);

	do {
		var evs = targ.onemit;
		var fn = evs ? evs[evName] : null;

		if (fn) {
			fn.apply(targ, args);
			break;
		}
	} while (targ = targ.parent());

	if (onemit[evName])
		{ onemit[evName].apply(targ, args); }
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	{
		if (newCfg.onemit)
			{ emitCfg(newCfg.onemit); }
	}

	
}

function bindEv(el, type, fn) {
	el[type] = fn;
}

function exec(fn, args, e, node, vm) {
	var out = fn.apply(vm, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function handle(e) {
	var node = closestVNode(e.target);
	var vm = getVm(node);

	var evDef = e.currentTarget._node.attrs["on" + e.type], fn, args;

	if (isArr(evDef)) {
		fn = evDef[0];
		args = evDef.slice(1);
		exec(fn, args, e, node, vm);
	}
	else {
		for (var sel in evDef) {
			if (e.target.matches(sel)) {
				var evDef2 = evDef[sel];

				if (isArr(evDef2)) {
					fn = evDef2[0];
					args = evDef2.slice(1);
				}
				else {
					fn = evDef2;
					args = [];
				}

				exec(fn, args, e, node, vm);
			}
		}
	}
}

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval == null || isFunc(nval))
		{ bindEv(el, name, nval); }
	else if (oval == null)
		{ bindEv(el, name, handle); }
}

function remAttr(node, name, asProp) {
	if (name[0] === ".") {
		name = name.substr(1);
		asProp = true;
	}

	if (asProp)
		{ node.el[name] = ""; }
	else
		{ node.el.removeAttribute(name); }
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		// will also removeAttr of style: null
	else if (node.ns != null)
		{ el.setAttribute(name, val); }
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "")
				{ vnode.el.textContent = vnode.body; }
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
//window.syncChildren = syncChildren;
window.lisMove = lisMove;

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

var BREAK = 1;
var BREAK_ALL = 2;

function syncDir(advSib, advNode, insert, sibName, nodeName, invSibName, invNodeName, invInsert) {
	return function(node, parEl, body, state, convTest, lis) {
		var sibNode, tmpSib;

		if (state[sibName] != null) {
			// skip dom elements not created by domvm
			if ((sibNode = state[sibName]._node) == null) {
				state[sibName] = advSib(state[sibName]);
				return;
			}

			if (parentNode(sibNode) !== node) {
				tmpSib = advSib(state[sibName]);
				sibNode.vm != null ? sibNode.vm.unmount(true) : removeChild(parEl, state[sibName]);
				state[sibName] = tmpSib;
				return;
			}
		}

		if (state[nodeName] == convTest)
			{ return BREAK_ALL; }
		else if (state[nodeName].el == null) {
			insert(parEl, hydrate(state[nodeName]), state[sibName]);	// should lis be updated here?
			state[nodeName] = advNode(state[nodeName], body);		// also need to advance sib?
		}
		else if (state[nodeName].el === state[sibName]) {
			state[nodeName] = advNode(state[nodeName], body);
			state[sibName] = advSib(state[sibName]);
		}
		// head->tail or tail->head
		else if (!lis && sibNode === state[invNodeName]) {
			tmpSib = state[sibName];
			state[sibName] = advSib(tmpSib);
			invInsert(parEl, tmpSib, state[invSibName]);
			state[invSibName] = tmpSib;
		}
		else {
			if (lis && state[sibName] != null)
				{ return lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state); }

			return BREAK;
		}
	};
}

function lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state) {
	if (sibNode._lis) {
		insert(parEl, state[nodeName].el, state[sibName]);
		state[nodeName] = advNode(state[nodeName], body);
	}
	else {
		// find closest tomb
		var t = binaryFindLarger(sibNode.idx, state.tombs);
		sibNode._lis = true;
		var tmpSib = advSib(state[sibName]);
		insert(parEl, state[sibName], t != null ? body[state.tombs[t]].el : t);

		if (t == null)
			{ state.tombs.push(sibNode.idx); }
		else
			{ state.tombs.splice(t, 0, sibNode.idx); }

		state[sibName] = tmpSib;
	}
}

var syncLft = syncDir(nextSib, nextNode, insertBefore, "lftSib", "lftNode", "rgtSib", "rgtNode", insertAfter);
var syncRgt = syncDir(prevSib, prevNode, insertAfter, "rgtSib", "rgtNode", "lftSib", "lftNode", insertBefore);

function syncChildren(node, donor) {
	var obody	= donor.body,
		parEl	= node.el,
		body	= node.body,
		state = {
			lftNode:	body[0],
			rgtNode:	body[body.length - 1],
			lftSib:		((obody)[0] || emptyObj).el,
			rgtSib:		(obody[obody.length - 1] || emptyObj).el,
		};

	converge:
	while (1) {
//		from_left:
		while (1) {
			var l = syncLft(node, parEl, body, state, null, false);
			if (l === BREAK) { break; }
			if (l === BREAK_ALL) { break converge; }
		}

//		from_right:
		while (1) {
			var r = syncRgt(node, parEl, body, state, state.lftNode, false);
			if (r === BREAK) { break; }
			if (r === BREAK_ALL) { break converge; }
		}

		sortDOM(node, parEl, body, state);
		break;
	}
}

// TODO: also use the state.rgtSib and state.rgtNode bounds, plus reduce LIS range
function sortDOM(node, parEl, body, state) {
	var kids = Array.prototype.slice.call(parEl.childNodes);
	var domIdxs = [];

	for (var k = 0; k < kids.length; k++) {
		var n = kids[k]._node;

		if (n.parent === node)
			{ domIdxs.push(n.idx); }
	}

	// list of non-movable vnode indices (already in correct order in old dom)
	var tombs = longestIncreasingSubsequence(domIdxs).map(function (i) { return domIdxs[i]; });

	for (var i = 0; i < tombs.length; i++)
		{ body[tombs[i]]._lis = true; }

	state.tombs = tombs;

	while (1) {
		var r = syncLft(node, parEl, body, state, null, true);
		if (r === BREAK_ALL) { break; }
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findHashKeyed(n, obody, fromIdx) {
	return obody[obody._keys[n.key]];
}

/*
// list must be a sorted list of vnodes by key
function findBinKeyed(n, list) {
	var idx = binaryKeySearch(list, n.key);
	return idx > -1 ? list[idx] : null;
}
*/

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	fireHook(donor.hooks, "willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null)
				{ el.textContent = nbody; }
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	fireHook(donor.hooks, "didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findHashKeyed :				// keyed lists/lazyLists
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (isKeyed) {
		var keys = {};
		for (var i = 0; i < obody.length; i++)
			{ keys[obody[i].key] = i; }
		obody._keys = keys;
	}

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
					node2._lis = false;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					foundIdx = donor2.idx;
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				// if the injected vm has never been rendered, this vm._update() serves as the
				// initial vtree creator, but must avoid hydrating (creating .el) because syncChildren()
				// which is responsible for mounting below (and optionally hydrating), tests .el presence
				// to determine if hydration & mounting are needed
				var withDOM = isHydrated(node2.vm);

				var vm = node2.vm._update(node2.data, vnode, i, withDOM);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (!isKeyed && donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm.redraw(true); });
	vm._updateAsync = raft(function (newData) { return vm.update(newData, true); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		{
			if (opts.onemit)
				{ t.onemit = assignObj(t.onemit || {}, opts.onemit); }
		}
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw(null, null, isHydrated(vm)) : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData, null, null, isHydrated(vm)) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
		vold._lis = false;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && fireHook(vm.hooks, "willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && fireHook(vm.hooks, "didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			fireHook(vm.hooks, "willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

var nano = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n, doRepaint) {
	patch$1(this, n, doRepaint);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n, doRepaint) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		doRepaint && repaint(n);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);

		doRepaint && repaint(o);
	}
}

VNodeProto.patch = protoPatch;

function nextSubVms(n, accum) {
	var body = n.body;

	if (isArr(body)) {
		for (var i = 0; i < body.length; i++) {
			var n2 = body[i];

			if (n2.vm != null)
				{ accum.push(n2.vm); }
			else
				{ nextSubVms(n2, accum); }
		}
	}

	return accum;
}

function defineElementSpread(tag) {
	var args = arguments;
	var len = args.length;
	var body, attrs;

	if (len > 1) {
		var bodyIdx = 1;

		if (isPlainObj(args[1])) {
			attrs = args[1];
			bodyIdx = 2;
		}

		if (len === bodyIdx + 1 && (isVal(args[bodyIdx]) || isArr(args[bodyIdx]) || attrs && (attrs._flags & LAZY_LIST) === LAZY_LIST))
			{ body = args[bodyIdx]; }
		else
			{ body = sliceArgs(args, bodyIdx); }
	}

	return initElementNode(tag, attrs, body);
}

function defineSvgElementSpread() {
	var n = defineElementSpread.apply(null, arguments);
	n.ns = SVG_NS;
	return n;
}

ViewModelProto.emit = emit;
ViewModelProto.onemit = null;

ViewModelProto.body = function() {
	return nextSubVms(this.node, []);
};

nano.defineElementSpread = defineElementSpread;
nano.defineSvgElementSpread = defineSvgElementSpread;

return nano;

})));
//# sourceMappingURL=domvm.micro.js.map


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
var ts_message_1 = __webpack_require__(21);
var ts_navbar_1 = __webpack_require__(28);
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(element, config) {
        var _this = _super.call(this, element, (0, core_1.extend)({
            $name: "context-menu",
        }, config)) || this;
        _this._isContextMenu = true;
        return _this;
    }
    ContextMenu.prototype.showAt = function (elem, showAt) {
        if (showAt === void 0) { showAt = "bottom"; }
        if (elem instanceof MouseEvent) {
            this._close(elem);
            this._changeActivePosition({
                left: window.pageXOffset + elem.x + 1,
                right: window.pageXOffset + elem.x + 1,
                top: window.pageYOffset + elem.y,
                bottom: window.pageYOffset + elem.y,
                zIndex: (0, ts_message_1.getZIndex)(elem.target),
            }, showAt);
        }
        else if (window.TouchEvent && elem instanceof TouchEvent) {
            this._close(elem);
            this._changeActivePosition({
                left: window.pageXOffset + elem.touches[0].clientX,
                right: window.pageXOffset + elem.touches[0].clientX,
                top: window.pageYOffset + elem.touches[0].clientY,
                bottom: window.pageYOffset + elem.touches[0].clientY,
                zIndex: (0, ts_message_1.getZIndex)(elem.target),
            }, showAt);
        }
        else if (elem instanceof HTMLElement || typeof elem === "string") {
            var node = (0, html_1.toNode)(elem);
            this._changeActivePosition((0, html_1.getRealPosition)(node), showAt);
        }
    };
    ContextMenu.prototype._getFactory = function () {
        return (0, ts_navbar_1.createFactory)({
            widget: this,
            defaultType: "menuItem",
            allowedTypes: [
                "menuItem",
                "spacer",
                "separator",
                "customHTML",
                // TODO: deprecated
                "customHTMLButton",
            ],
            widgetName: "context-menu",
        });
    };
    ContextMenu.prototype._close = function (e) {
        var _this = this;
        this.events.on(ts_navbar_1.NavigationBarEvents.afterHide, function () {
            _this._activeMenu = null;
            _this._changeActivePosition(null, null);
        });
        _super.prototype._close.call(this, e);
    };
    ContextMenu.prototype._getMode = function (_item, _root, active) {
        return active ? this._mode : "right";
    };
    ContextMenu.prototype._changeActivePosition = function (position, mode) {
        this._activePosition = position;
        this._mode = mode;
        this._listenOuterClick();
        this.paint();
    };
    return ContextMenu;
}(ts_navbar_1.Navbar));
exports.ContextMenu = ContextMenu;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
var types_1 = __webpack_require__(32);
var nodeTimeout = new WeakMap();
var containers = new Map();
function createMessageContainer(parent, position) {
    var messageContainer = document.createElement("div");
    messageContainer.setAttribute("data-position", position);
    messageContainer.className =
        "dhx_message-container " +
            "dhx_message-container--" +
            position +
            (parent === document.body ? " dhx_message-container--in-body" : "");
    return messageContainer;
}
function onExpire(node, fromClick) {
    if (fromClick) {
        clearTimeout(nodeTimeout.get(node));
    }
    var container = node.parentNode;
    var position = container.getAttribute("data-position");
    var parent = container.parentNode;
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        return;
    }
    var positionInfo = messageContainerInfo[position];
    if (!positionInfo) {
        return;
    }
    var stack = positionInfo.stack;
    var index = stack.indexOf(node);
    if (index !== -1) {
        container.removeChild(node);
        stack.splice(index, 1);
        if (stack.length === 0) {
            parent.removeChild(container);
        }
        return;
    }
}
function message(props) {
    var _a;
    if (typeof props === "string") {
        props = { text: props };
    }
    props.position = props.position || types_1.MessageContainerPosition.topRight;
    var messageBox = document.createElement("div");
    messageBox.className = "dhx_widget dhx_message " + (props.css || "");
    messageBox.setAttribute("role", "alert");
    var textId = props.text && (0, core_1.uid)();
    textId && messageBox.setAttribute("aria-describedby", textId);
    if (props.html) {
        messageBox.innerHTML = props.html;
    }
    else {
        messageBox.innerHTML = "<span class=\"dhx_message__text\" id=".concat(textId, "></span>\n\t\t").concat(props.icon ? "<span class=\"dhx_message__icon dxi ".concat(props.icon, "\"></span>") : "");
        messageBox.querySelector("#".concat(textId)).textContent = props.text;
    }
    var parent = props.node ? (0, html_1.toNode)(props.node) : document.body;
    var position = getComputedStyle(parent).position;
    if (position === "static") {
        parent.style.position = "relative";
    }
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        containers.set(parent, (_a = {},
            _a[props.position] = {
                stack: [],
                container: createMessageContainer(parent, props.position),
            },
            _a));
    }
    else if (!messageContainerInfo[props.position]) {
        messageContainerInfo[props.position] = {
            stack: [],
            container: createMessageContainer(parent, props.position),
        };
    }
    var _b = containers.get(parent)[props.position], stack = _b.stack, container = _b.container;
    if (stack.length === 0) {
        parent.appendChild(container);
    }
    stack.push(messageBox);
    container.appendChild(messageBox);
    function closeMessage(fromClick) {
        if (fromClick === void 0) { fromClick = true; }
        if (!messageBox)
            return;
        onExpire(messageBox, fromClick);
        messageBox = null;
    }
    if (props.expire) {
        var timeout = setTimeout(function () { return closeMessage(false); }, props.expire);
        nodeTimeout.set(messageBox, timeout);
    }
    messageBox.onclick = function () { return closeMessage(); };
    return {
        close: function () { return closeMessage(); },
    };
}
exports.message = message;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.alert = void 0;
var en_1 = __webpack_require__(45);
var common_1 = __webpack_require__(46);
var core_1 = __webpack_require__(1);
function alert(props) {
    var apply = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.apply;
    var unblock = (0, common_1.blockScreen)(props.blockerCss);
    return new Promise(function (res) {
        var contentId = "dhx_alert__".concat((0, core_1.uid)(), "_content");
        var headerId = "dhx_alert__".concat((0, core_1.uid)(), "_header");
        var alertBox = document.createElement("div");
        alertBox.setAttribute("role", "alert");
        alertBox.setAttribute("aria-modal", "true");
        props.text && alertBox.setAttribute("aria-describedby", contentId);
        props.header && alertBox.setAttribute("aria-labelledby", headerId);
        alertBox.className = "dhx_widget dhx_alert " + (props.css || "");
        var closeAlert = function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                close(e);
                res(false);
            }
        };
        function close(e) {
            e.preventDefault();
            unblock();
            document.body.removeChild(alertBox);
            document.removeEventListener("keydown", closeAlert);
        }
        alertBox.innerHTML = "\n\t\t\t".concat(props.header
            ? "<div id=".concat(headerId, " class=\"dhx_alert__header\"> ").concat(props.htmlEnable !== false ? props.header : "", " </div>")
            : "", "\n\t\t\t").concat(props.text
            ? "<div id=".concat(contentId, " class=\"dhx_alert__content\">").concat(props.htmlEnable !== false ? props.text : "", "</div>")
            : "", "\n\t\t\t<div class=\"dhx_alert__footer ").concat(props.buttonsAlignment ? "dhx_alert__footer--" + props.buttonsAlignment : "", "\">\n\t\t\t\t<button type=\"button\" aria-label=\"confirm\" class=\"dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">").concat(apply, "</button>\n\t\t\t</div>");
        if (props.htmlEnable === false) {
            props.header && (alertBox.querySelector("#".concat(headerId)).textContent = props.header);
            props.text && (alertBox.querySelector("#".concat(contentId)).textContent = props.text);
        }
        document.body.appendChild(alertBox);
        alertBox.querySelector(".dhx_alert__apply-button").focus();
        alertBox.querySelector("button").addEventListener("click", function (e) {
            close(e);
            res(true);
        });
        document.addEventListener("keydown", closeAlert);
    });
}
exports.alert = alert;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirm = void 0;
var en_1 = __webpack_require__(45);
var common_1 = __webpack_require__(46);
var core_1 = __webpack_require__(1);
function confirm(props) {
    props.buttonsAlignment = props.buttonsAlignment || "right";
    var apply = props.buttons && props.buttons[1] ? props.buttons[1] : en_1.default.apply;
    var reject = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.reject;
    var unblock = (0, common_1.blockScreen)("dhx_alert__overlay-confirm " + (props.blockerCss || ""));
    return new Promise(function (res) {
        var confirmBox = document.createElement("div");
        confirmBox.setAttribute("role", "alertdialog");
        confirmBox.setAttribute("aria-modal", "true");
        var headerId = props.header && (0, core_1.uid)();
        var textId = props.header && (0, core_1.uid)();
        textId && confirmBox.setAttribute("aria-describedby", textId);
        headerId && confirmBox.setAttribute("aria-labelledby", headerId);
        var focusItem;
        var answer = function (val) {
            unblock();
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            confirmBox.removeEventListener("click", clickHandler);
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            document.removeEventListener("keydown", closeConfirm);
            document.body.removeChild(confirmBox);
            res(val);
        };
        var clickHandler = function (e) {
            if (e.target.tagName === "BUTTON") {
                answer(e.target.classList.contains("dhx_alert__confirm-aply"));
            }
        };
        var closeConfirm = function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
                answer(e.target.classList.contains("dhx_alert__confirm-reject"));
            }
            else if (e.key === "Tab") {
                if (focusItem === "aply") {
                    focusItem = "reject";
                    confirmBox.querySelector(".dhx_alert__confirm-reject").focus();
                }
                else {
                    focusItem = "aply";
                    confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
                }
                e.preventDefault();
            }
        };
        confirmBox.className = "dhx_widget dhx_alert dhx_alert--confirm" + (props.css ? " " + props.css : "");
        confirmBox.innerHTML = "\n\t\t".concat(props.header
            ? "<div class=\"dhx_alert__header\" id=".concat(headerId, "> ").concat(props.htmlEnable !== false ? props.header : "", " </div>")
            : "", "\n\t\t").concat(props.text
            ? "<div class=\"dhx_alert__content\" id=".concat(textId, ">").concat(props.htmlEnable !== false ? props.text : "", "</div>")
            : "", "\n\t\t\t<div class=\"dhx_alert__footer ").concat(props.buttonsAlignment ? "dhx_alert__footer--" + props.buttonsAlignment : "", "\">\n\t\t\t\t<button type=\"button\" aria-label=\"reject\" class=\"dhx_alert__confirm-reject dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium\">").concat(reject, "</button>\n\t\t\t\t<button type=\"button\"  aria-label=\"aply\"class=\"dhx_alert__confirm-aply dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">").concat(apply, "</button>\n\t\t\t</div>");
        if (props.htmlEnable === false) {
            props.header && (confirmBox.querySelector("#".concat(headerId)).textContent = props.header);
            props.text && (confirmBox.querySelector("#".concat(textId)).textContent = props.text);
        }
        document.body.appendChild(confirmBox);
        focusItem = "aply";
        confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
        confirmBox.addEventListener("click", clickHandler);
        document.addEventListener("keydown", closeConfirm);
    });
}
exports.confirm = confirm;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(3);
var ts_message_1 = __webpack_require__(21);
var html_1 = __webpack_require__(2);
var KeyManager_1 = __webpack_require__(15);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var types_1 = __webpack_require__(24);
function addInGroups(groups, item) {
    if (groups[item.group]) {
        if (item.active) {
            groups[item.group].active = item.id;
        }
        groups[item.group].elements.push(item.id);
    }
    else {
        groups[item.group] = {
            active: item.active ? item.id : null,
            elements: [item.id],
        };
    }
}
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(element, config) {
        var _this = 
        // super(element, extend({}, config));
        _super.call(this, element, config) || this;
        _this._isContextMenu = false;
        _this._documentHaveListener = false;
        _this.config = (0, core_1.extend)({
            rootId: (typeof element === "string" && element) || _this._uid,
        }, config);
        _this._rootItem = {};
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.TreeCollection({ rootId: _this.config.rootId }, _this.events);
        }
        else if (_this.config.data && _this.config.data.events) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.TreeCollection({ rootId: _this.config.rootId }, _this.events);
        }
        _this._documentClick = function (e) {
            if (_this._documentHaveListener) {
                var element_1 = (0, html_1.locateNode)(e);
                var root = _this.data.getRoot();
                var id = element_1 && element_1.getAttribute("data-dhx-id");
                var parent_1 = _this.data.getParent(id);
                var supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
                document.removeEventListener("click", _this._documentClick);
                _this._documentHaveListener = false;
                if ((0, core_1.isId)(id) && _this._currentRoot === id)
                    return;
                if ((((supportsTouch && !element_1) || !_this._isContextMenu) &&
                    (root === parent_1 || !parent_1 || !_this.data.getItem(id))) ||
                    !parent_1 ||
                    !_this.data.getItem(id) ||
                    (_this._isContextMenu && root !== (0, html_1.locate)(e, "data-dhx-widget-id"))) {
                    _this._close(e);
                }
            }
        };
        _this._currentRoot = _this.data.getRoot();
        _this._factory = _this._getFactory();
        _this._initHandlers();
        _this._keyManager = new KeyManager_1.KeyManager(function (_, focusId) { return focusId === _this._uid; });
        _this._initEvents();
        if (Array.isArray(_this.config.data)) {
            _this.data.parse(_this.config.data);
        }
        return _this;
    }
    Navbar.prototype.paint = function () {
        _super.prototype.paint.call(this);
        if (this._isContextMenu && !this._vpopups) {
            this._init();
        }
        if (this._vpopups) {
            this._vpopups.redraw();
        }
    };
    Navbar.prototype.disable = function (ids) {
        var _this = this;
        if (typeof ids !== "undefined") {
            this._setProp(ids, "disabled", true);
        }
        else {
            this.data.forEach(function (_a) {
                var id = _a.id;
                return _this._setProp(id, "disabled", true);
            });
        }
    };
    Navbar.prototype.enable = function (ids) {
        var _this = this;
        if (typeof ids !== "undefined") {
            this._setProp(ids, "disabled", false);
        }
        else {
            this.data.forEach(function (_a) {
                var id = _a.id;
                return _this._setProp(id, "disabled", false);
            });
        }
    };
    Navbar.prototype.isDisabled = function (id) {
        var item = this.data.getItem(id);
        if (item) {
            return item.disabled || false;
        }
    };
    Navbar.prototype.show = function (ids) {
        var _this = this;
        if (typeof ids !== "undefined") {
            this._setProp(ids, "hidden", false);
        }
        else {
            this.data.forEach(function (_a) {
                var id = _a.id;
                return _this._setProp(id, "hidden", false);
            });
        }
    };
    Navbar.prototype.hide = function (ids) {
        var _this = this;
        if (typeof ids !== "undefined") {
            this._setProp(ids, "hidden", true);
        }
        else {
            this.data.forEach(function (_a) {
                var id = _a.id;
                return _this._setProp(id, "hidden", true);
            });
        }
    };
    Navbar.prototype.destructor = function () {
        this.events.clear();
        this._keyManager && this._keyManager.destructor();
        this._vpopups && !!this._vpopups.node && this._vpopups.unmount();
        this.unmount();
    };
    Navbar.prototype.select = function (id, unselect) {
        var _this = this;
        if (unselect === void 0) { unselect = true; }
        if (!(0, core_1.isId)(id)) {
            throw new Error("Function argument cannot be empty, for more info check documentation https://docs.dhtmlx.com");
        }
        unselect && this.unselect();
        this.data.update(id, { active: true });
        this.data.eachParent(id, function (parent) {
            _this.data.update(parent.id, { active: true });
        });
    };
    Navbar.prototype.unselect = function (id) {
        var _this = this;
        if (!(0, core_1.isId)(id)) {
            this.data.forEach(function (item) {
                _this.data.update(item.id, { active: false });
            });
        }
        else {
            this.data.update(id, { active: false });
            this.data.eachChild(id, function (parent) {
                _this.data.update(parent.id, { active: false });
            });
        }
    };
    Navbar.prototype.isSelected = function (id) {
        if (!(0, core_1.isId)(id) || !this.data.getItem(id)) {
            return;
        }
        return !!this.data.getItem(id).active;
    };
    Navbar.prototype.getSelected = function () {
        var selected = [];
        this.data.forEach(function (item) {
            item.active && selected.push(item.id);
        });
        return selected;
    };
    Navbar.prototype._customHandlers = function () {
        return {};
    };
    Navbar.prototype._close = function (e) {
        var _this = this;
        if (!this._popupActive || !this.events.fire(types_1.NavigationBarEvents.beforeHide, [this._activeMenu, e])) {
            return;
        }
        if (this._activeParents) {
            this._activeParents.forEach(function (parentId) { return _this.data.exists(parentId) && _this.data.update(parentId, { $activeParent: false }); });
        }
        if (this.config.navigationType === "click") {
            this._isActive = false;
        }
        clearTimeout(this._currentTimeout);
        this._popupActive = false;
        this._activeMenu = null;
        !!this._vpopups.node && this._vpopups.unmount();
        this._vpopups = null;
        this.events.fire(types_1.NavigationBarEvents.afterHide, [e]);
        this.paint();
    };
    Navbar.prototype._init = function () {
        var _this = this;
        var _a;
        if (this._isContextMenu && !this._activePosition) {
            return;
        }
        var parentEl = this.getRootNode() || document.documentElement;
        var theme = (_a = parentEl === null || parentEl === void 0 ? void 0 : parentEl.closest("[data-dhx-theme]")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-dhx-theme");
        var render = function () {
            var _a;
            return (0, dom_1.el)("div", {
                "data-dhx-widget-id": _this._uid,
                "data-dhx-theme": theme || "light",
                class: "dhx_".concat((_a = _this.config) === null || _a === void 0 ? void 0 : _a.$name, "--popup-menu ").concat(_this._isContextMenu ? " dhx_context-menu" : "", " ").concat(_this.config.css
                    ? _this.config.css
                        .split(" ")
                        .map(function (i) { return (_this._isContextMenu ? i : i + "--popup-menu"); })
                        .join(" ")
                    : ""),
                onmousemove: _this._handlers.onmousemove,
                onmouseleave: _this._handlers.onmouseleave,
                onclick: _this._handlers.onclick,
                onmousedown: _this._handlers.onmousedown,
                onkeydown: _this._handlers.onkeydown,
            }, _this._drawPopups());
        };
        this._vpopups = (0, dom_1.create)({
            render: render,
        });
        this._vpopups.mount(document.body);
    };
    Navbar.prototype._initHandlers = function () {
        var _this = this;
        /*
            for navigation type click:
            first click open menu, _isActive = true
            after navigation use mousemove
            can be closed after outer click or menu leaf item click
        */
        this._isActive = this.config.navigationType !== "click";
        this._handlers = __assign({ onkeydown: function (e) {
                var id = (0, html_1.locate)(e) || undefined;
                var root = (0, html_1.locateNode)(e, "data-dhx-widget-id");
                if (root.contains(document.activeElement)) {
                    _this.events.fire(types_1.NavigationBarEvents.keydown, [e, id]);
                }
            }, onmousemove: function (e) {
                if (!_this._isActive) {
                    return;
                }
                var elem = (0, html_1.locateNode)(e);
                if (!elem) {
                    return;
                }
                var id = elem.getAttribute("data-dhx-id");
                if (_this._activeMenu !== id) {
                    if (_this.data.haveItems(id)) {
                        if (!_this._vpopups) {
                            _this._init();
                        }
                        _this._setRoot(id);
                        var position = (0, html_1.getRealPosition)(elem);
                        _this.data.update(id, { $position: position }, false);
                    }
                    _this._activeItemChange(id, e);
                }
            }, onmouseleave: function (e) {
                if (_this.config.navigationType !== "click") {
                    // maybe all time when mouse leave close menu
                    if (_this._popupActive) {
                        var element = (0, html_1.locateNode)(e, "data-dhx-id", "relatedTarget");
                        if (element) {
                            var id = element.getAttribute("data-dhx-id");
                            if (!_this.data.getItem(id)) {
                                _this._close(e);
                                _this._activeItemChange(null, e);
                            }
                            if (_this.data.haveItems(id)) {
                                if (!_this._vpopups) {
                                    _this._init();
                                }
                                var position = (0, html_1.getRealPosition)(element);
                                _this.data.update(id, { $position: position }, false);
                                _this._activeItemChange(id, e);
                            }
                        }
                        else {
                            _this._close(e);
                            _this._activeItemChange(null, e);
                        }
                    }
                    else
                        _this._activeItemChange(null, e);
                }
            }, onclick: function (e) {
                var element = (0, html_1.locateNode)(e);
                if (!element) {
                    return;
                }
                var id = element.getAttribute("data-dhx-id");
                if (_this.isDisabled(id)) {
                    return;
                }
                var item = _this.data.getItem(id);
                if (item === null || item === void 0 ? void 0 : item.multiClick) {
                    return;
                }
                if (_this._currentRoot === id) {
                    _this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
                    if (_this.config.navigationType === "click") {
                        _this._close(e);
                    }
                    return;
                }
                if (_this.data.haveItems(id)) {
                    if (!_this._vpopups) {
                        _this._init();
                    }
                    if (!_this._isActive) {
                        _this._isActive = true;
                    }
                    _this._setRoot(id);
                    var position = (0, html_1.getRealPosition)(element);
                    _this.data.update(id, { $position: position }, false);
                    _this._activeItemChange(id, e);
                    _this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
                }
                else {
                    switch (item === null || item === void 0 ? void 0 : item.type) {
                        case "input":
                        case "title":
                            break;
                        case "menuItem":
                        case "selectButton":
                            _this._onMenuItemClick(id, e);
                            break;
                        case "imageButton":
                        case "button":
                        case "customButton":
                        case "customHTML":
                        case "navItem":
                            if (item.twoState) {
                                _this.data.update(item.id, { active: !item.active });
                            }
                            _this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
                            _this._close(e);
                            break;
                        default:
                            _this._close(e);
                    }
                }
            }, onmousedown: function (e) {
                var element = (0, html_1.locateNode)(e);
                if (!element) {
                    return;
                }
                var id = element.getAttribute("data-dhx-id");
                var item = _this.data.getItem(id);
                if (!(item === null || item === void 0 ? void 0 : item.multiClick)) {
                    return;
                }
                var fireTime = 365;
                var timeout;
                var fireAction = function () {
                    _this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
                    if (fireTime > 50) {
                        fireTime -= 55;
                    }
                    timeout = setTimeout(fireAction, fireTime);
                };
                var mouseup = function () {
                    clearTimeout(timeout);
                    document.removeEventListener("mouseup", mouseup);
                };
                fireAction();
                document.addEventListener("mouseup", mouseup);
            } }, this._customHandlers());
    };
    Navbar.prototype._initEvents = function () {
        var _this = this;
        var timeout = null;
        var handler = function () {
            _this.paint();
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
                var groups = {};
                _this.data.eachChild(_this.data.getRoot(), function (item) {
                    if (item.group) {
                        item.twoState = true;
                        addInGroups(groups, item);
                    }
                }, true);
                _this._groups = groups;
                _this._resetHotkeys();
                timeout = null;
                _this.paint();
            }, 100);
        };
        [types_1.DataEvents.change, types_1.DataEvents.filter].forEach(function (eventName) {
            _this.events.on(eventName, function () { return handler(); });
        });
        this.events.on(types_1.NavigationBarEvents.click, function (id) {
            var item = _this.data.getItem(id);
            var parent = _this.data.getItem(item === null || item === void 0 ? void 0 : item.parent);
            if (parent && parent.type === "selectButton") {
                _this.data.update(item.parent, { value: item.value, icon: item.icon });
            }
            if (item === null || item === void 0 ? void 0 : item.group) {
                var group = _this._groups[item.group];
                if (group.active) {
                    _this.data.update(group.active, { active: false });
                }
                group.active = item.id;
                _this.data.update(item.id, { active: true });
            }
        });
        this.events.on(types_1.NavigationBarEvents.inputChange, function (id, newValue) {
            _this.data.update(id, { value: newValue });
        });
        this._customInitEvents();
    };
    Navbar.prototype._getMode = function (item, root, _active) {
        if (_active === void 0) { _active = false; }
        return item.parent === root ? "bottom" : "right";
    };
    Navbar.prototype._drawMenuItems = function (id, asMenuItem) {
        var _this = this;
        if (asMenuItem === void 0) { asMenuItem = true; }
        return this.data.map(function (item) { return _this._factory(item, asMenuItem); }, id, false);
    };
    Navbar.prototype._setRoot = function (_id) {
        return; // need only for toolbar
    };
    Navbar.prototype._getParents = function (id, root) {
        var parentIds = [];
        var afterRoot = false;
        var currentItem = this.data.getItem(id);
        var disabled = currentItem && currentItem.disabled;
        this.data.eachParent(id, function (item) {
            if (item.id === root) {
                parentIds.push(item.id);
                afterRoot = true;
            }
            else if (!afterRoot) {
                parentIds.push(item.id);
            }
        }, !disabled);
        if (this._isContextMenu && this._activePosition) {
            parentIds.push(root);
        }
        return parentIds;
    };
    Navbar.prototype._listenOuterClick = function () {
        if (this._documentHaveListener) {
            return;
        }
        document.addEventListener("click", this._documentClick, true);
        this._documentHaveListener = true;
    };
    Navbar.prototype._customInitEvents = function () {
        return;
    };
    Navbar.prototype._drawPopups = function () {
        var _this = this;
        var id = this._activeMenu;
        if (!this._isContextMenu && !id) {
            return null;
        }
        var rootNode = this.getRootNode();
        var offsetParent = rootNode && rootNode.offsetParent && rootNode.offsetParent.offsetParent;
        var zIndex = (0, ts_message_1.getZIndex)(offsetParent);
        var root = this._currentRoot;
        var parentIds = this._getParents(id, root);
        this._activeParents = parentIds;
        parentIds.forEach(function (parentId) {
            return _this.data.exists(parentId) && _this.data.update(parentId, { $activeParent: true }, false);
        });
        return parentIds
            .map(function (itemId) {
            if (!_this.data.haveItems(itemId)) {
                return null;
            }
            var getAriaAttrs = function (item) { return ({
                role: "menu",
                "aria-labeledby": item.id,
                "aria-live": "polite",
            }); };
            var item = _this.data.getItem(itemId) || _this._rootItem; // for root item
            _this._popupActive = true;
            return (0, dom_1.el)("ul", __assign({ class: "dhx_widget dhx_menu" + (_this.config.menuCss ? " " + _this.config.menuCss : ""), _key: itemId, _hooks: {
                    didInsert: function (vnode) {
                        var _a = vnode.el.getBoundingClientRect(), width = _a.width, height = _a.height;
                        var position = _this._isContextMenu && _this._activePosition && itemId === root
                            ? _this._activePosition
                            : item.$position;
                        var mode = _this._getMode(item, root, position === _this._activePosition);
                        var style = (0, html_1.calculatePosition)(position, {
                            mode: mode,
                            auto: true,
                            width: width,
                            height: height,
                        });
                        item.$style = __assign(__assign({}, style), { zIndex: _this._activePosition
                                ? _this._activePosition.zIndex || zIndex
                                : zIndex });
                        vnode.patch({ style: item.$style });
                    },
                    didRecycle: function (_, vnode) {
                        if (_this._isContextMenu && _this._activePosition && itemId === root) {
                            var _a = vnode.el.getBoundingClientRect(), width = _a.width, height = _a.height;
                            var style = (0, html_1.calculatePosition)(_this._activePosition, {
                                mode: _this._getMode(item, root, true),
                                width: width,
                                height: height,
                            });
                            item.$style = __assign(__assign({}, style), { zIndex: _this._activePosition.zIndex || zIndex });
                            vnode.patch({ style: item.$style });
                        }
                    },
                }, tabindex: 0, style: item.$style || {
                    position: "absolute",
                } }, getAriaAttrs(item)), _this._drawMenuItems(itemId));
        })
            .reverse();
    };
    Navbar.prototype._onMenuItemClick = function (id, e) {
        var item = this.data.getItem(id);
        if (item.disabled) {
            return;
        }
        if (item.twoState) {
            this.data.update(item.id, { active: !item.active });
        }
        this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
        this._close(e);
    };
    Navbar.prototype._activeItemChange = function (id, e) {
        var _this = this;
        if (this._activeParents) {
            var parentIds_1 = this._getParents(id, this._currentRoot);
            this._activeParents.forEach(function (parentId) {
                if (_this.data.exists(parentId) && !parentIds_1.includes(parentId)) {
                    _this.data.update(parentId, { $activeParent: false }, false);
                }
            });
        }
        if ((0, core_1.isId)(id) && !this._documentHaveListener) {
            this._listenOuterClick();
        }
        if ((0, core_1.isId)(id) && this.data.haveItems(id)) {
            if (this._activeMenu !== id || !this._popupActive) {
                this.events.fire(types_1.NavigationBarEvents.openMenu, [id]);
            }
            clearTimeout(this._currentTimeout);
            this.paint();
        }
        else {
            clearTimeout(this._currentTimeout);
            this._currentTimeout = setTimeout(function () { return _this.paint(); }, 400);
        }
        this._activeMenu = id;
    };
    Navbar.prototype._resetHotkeys = function () {
        var _this = this;
        this._keyManager.removeHotKey(null, this);
        this.data.map(function (item) {
            if (item.hotkey) {
                _this._keyManager.addHotKey(item.hotkey, function () { return _this._onMenuItemClick(item.id, null); });
            }
        });
    };
    Navbar.prototype._setProp = function (id, key, value) {
        var _a;
        var _this = this;
        if (Array.isArray(id)) {
            id.forEach(function (itemId) {
                var _a;
                return _this.data.update(itemId, (_a = {}, _a[key] = value, _a));
            });
        }
        else {
            this.data.update(id, (_a = {}, _a[key] = value, _a));
        }
    };
    return Navbar;
}(view_1.View));
exports.Navbar = Navbar;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var core_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(11);
var types_1 = __webpack_require__(10);
var core_2 = __webpack_require__(1);
var Loader = /** @class */ (function () {
    function Loader(parent, changes) {
        this._parent = parent;
        this._changes = changes; // todo: [dirty] mutation
    }
    Loader.prototype.load = function (url, driver) {
        var _this = this;
        // TODO: change way for checking lazyLoad
        if (url.config && !this._parent.events.fire(types_1.DataEvents.beforeLazyLoad, [])) {
            return;
        }
        return (this._parent.loadData = url
            .load()
            .then(function (data) {
            if (data) {
                return _this.parse(data, driver);
            }
            else {
                return [];
            }
        })
            .catch(function (error) {
            _this._parent.events.fire(types_1.DataEvents.loadError, [error]);
        }));
    };
    Loader.prototype.parse = function (data, driver) {
        var _this = this;
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        if (driver === "json" && !(0, helpers_1.hasJsonOrArrayStructure)(data)) {
            this._parent.events.fire(types_1.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]);
        }
        driver = (0, helpers_1.toDataDriver)(driver);
        data = driver.toJsonArray(data);
        if (!(data instanceof Array)) {
            var totalCount = data.total_count - 1;
            var from_1 = data.from;
            data = data.data;
            if (this._parent.getLength() === 0) {
                var newData = [];
                for (var i = 0, j = 0; i <= totalCount; i++) {
                    if (i >= from_1 && i <= from_1 + data.length - 1) {
                        newData.push(data[j]);
                        j++;
                    }
                    else {
                        newData.push({ $empty: true });
                    }
                }
                data = newData;
            }
            else {
                data.forEach(function (newItem, i) {
                    var index = from_1 + i;
                    var oldId = _this._parent.getId(index);
                    if ((0, core_1.isId)(oldId)) {
                        var emptyItem = _this._parent.getItem(oldId);
                        if (emptyItem && emptyItem.$empty) {
                            var id = newItem.id || emptyItem.id;
                            if ((0, core_2.isDefined)(newItem.id)) {
                                _this._parent.changeId(oldId, id, true);
                            }
                            _this._parent.update(id, __assign(__assign({}, newItem), { $empty: undefined }), true);
                        }
                    }
                    else {
                        (0, helpers_1.dhxWarning)("item not found");
                    }
                });
                this._parent.events.fire(types_1.DataEvents.afterLazyLoad, [from_1, data.length]);
                this._parent.events.fire(types_1.DataEvents.change);
                return data;
            }
        }
        if (this._parent.getInitialData()) {
            this._parent.removeAll();
        }
        this._parent.$parse(data);
        return data;
    };
    Loader.prototype.save = function (url) {
        var _this = this;
        var uniqueChanges = this._getUniqueOrder();
        var _loop_1 = function (el) {
            if (el.saving || el.pending) {
                (0, helpers_1.dhxWarning)("item is saving");
            }
            else {
                var prevEl_1 = this_1._findPrevState(el.id);
                if (prevEl_1 && prevEl_1.saving) {
                    var pending = new Promise(function (res, rej) {
                        prevEl_1.promise
                            .then(function () {
                            el.pending = false;
                            res(_this._setPromise(el, url));
                        })
                            .catch(function (err) {
                            _this._removeFromOrder(prevEl_1);
                            _this._setPromise(el, url);
                            (0, helpers_1.dhxWarning)(err);
                            rej(err);
                        });
                    });
                    this_1._addToChain(pending);
                    el.pending = true;
                }
                else {
                    this_1._setPromise(el, url);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, uniqueChanges_1 = uniqueChanges; _i < uniqueChanges_1.length; _i++) {
            var el = uniqueChanges_1[_i];
            _loop_1(el);
        }
        if (uniqueChanges.length) {
            this._parent.saveData.then(function () {
                _this._saving = false;
            });
        }
    };
    Loader.prototype.updateChanges = function (changes) {
        this._changes = changes;
    };
    Loader.prototype._setPromise = function (el, url) {
        var _this = this;
        var status;
        switch (el.status) {
            case "remove":
                status = "delete";
                break;
            case "add":
                status = "insert";
                break;
            default:
                status = el.status;
                break;
        }
        el.promise = url.save(el.obj, status);
        el.promise
            .then(function () {
            _this._removeFromOrder(el);
        })
            .catch(function (err) {
            el.saving = false;
            el.error = true;
            (0, helpers_1.dhxError)(err);
        });
        el.saving = true;
        this._saving = true;
        this._addToChain(el.promise);
        return el.promise;
    };
    Loader.prototype._addToChain = function (promise) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if (this._parent.saveData && this._saving) {
            this._parent.saveData = this._parent.saveData.then(function () { return promise; });
        }
        else {
            this._parent.saveData = promise;
        }
    };
    Loader.prototype._findPrevState = function (id) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return null;
    };
    Loader.prototype._removeFromOrder = function (el) {
        this._changes.order = this._changes.order.filter(function (item) { return !(0, helpers_1.isEqualObj)(item, el); });
    };
    Loader.prototype._getUniqueOrder = function () {
        return this._changes.order.reduce(function (unique, el) {
            var ind = unique.findIndex(function (item) { return item.id === el.id; });
            var involvedElem = ind > -1 ? unique[ind] : null;
            if (involvedElem && involvedElem.saving === false && involvedElem.status === "add") {
                if (el.status === "remove") {
                    unique.splice(ind, 1);
                }
                else {
                    involvedElem.obj = el.obj;
                }
            }
            else if (involvedElem && involvedElem.saving === false && involvedElem.status === "update") {
                unique.splice(ind, 1, el);
            }
            else {
                unique.push(el);
            }
            return unique;
        }, []);
    };
    return Loader;
}());
exports.Loader = Loader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLDriver = void 0;
var xml_1 = __webpack_require__(88);
var ARRAY_NAME = "items";
var ITEM_NAME = "item";
// convert xml tag to js object, all subtags and attributes are mapped to the properties of result object
function tagToObject(tag, initialObj) {
    initialObj = initialObj || {};
    // map attributes
    var a = tag.attributes;
    if (a && a.length) {
        for (var i = 0; i < a.length; i++) {
            initialObj[a[i].name] = a[i].value;
        }
    }
    // map subtags
    var b = tag.childNodes;
    for (var i = 0; i < b.length; i++) {
        var node = b[i];
        if (node.nodeType === node.ELEMENT_NODE) {
            var name_1 = node.tagName;
            if (initialObj[name_1]) {
                if (typeof initialObj[name_1].push !== "function") {
                    initialObj[name_1] = [initialObj[name_1]];
                }
                initialObj[name_1].push(tagToObject(node, {}));
            }
            else {
                initialObj[name_1] = tagToObject(node, {}); // sub-object for complex subtags
            }
        }
    }
    return initialObj;
}
var XMLDriver = /** @class */ (function () {
    function XMLDriver() {
    }
    XMLDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    XMLDriver.prototype.toJsonObject = function (data) {
        var doc;
        if (typeof data === "string") {
            doc = this._fromString(data);
        }
        return tagToObject(doc);
    };
    XMLDriver.prototype.serialize = function (data) {
        return (0, xml_1.jsonToXML)(data);
    };
    XMLDriver.prototype.getFields = function (row) {
        return row;
    };
    XMLDriver.prototype.getRows = function (data) {
        if (typeof data === "string") {
            data = this._fromString(data);
        }
        if (data) {
            var childNodes = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes;
            if (!childNodes || !childNodes.length) {
                return null;
            }
            return this._getRows(childNodes);
        }
        return [];
    };
    XMLDriver.prototype._getRows = function (nodes) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName === ITEM_NAME) {
                result.push(this._nodeToJS(nodes[i]));
            }
        }
        return result;
    };
    XMLDriver.prototype._fromString = function (data) {
        try {
            return new DOMParser().parseFromString(data, "text/xml");
        }
        catch (_a) {
            return null;
        }
    };
    XMLDriver.prototype._nodeToJS = function (node) {
        var result = {};
        if (this._haveAttrs(node)) {
            var attrs = node.attributes;
            for (var i = 0; i < attrs.length; i++) {
                var _a = attrs[i], name_2 = _a.name, value = _a.value;
                result[name_2] = this._toType(value);
            }
        }
        if (node.nodeType === node.TEXT_NODE) {
            result.value = result.value || this._toType(node.textContent);
            return result;
        }
        var childNodes = node.childNodes;
        if (childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var subNode = childNodes[i];
                var tag = subNode.tagName;
                if (!tag) {
                    continue;
                }
                if (tag === ARRAY_NAME && subNode.childNodes) {
                    result[tag] = this._getRows(subNode.childNodes);
                }
                else {
                    if (this._haveAttrs(subNode)) {
                        result[tag] = this._nodeToJS(subNode);
                    }
                    else {
                        result[tag] = this._toType(subNode.textContent);
                    }
                }
            }
        }
        return result;
    };
    XMLDriver.prototype._toType = function (val) {
        if (val === "false" || val === "true") {
            return val === "true";
        }
        return val;
    };
    XMLDriver.prototype._haveAttrs = function (node) {
        return node.attributes && node.attributes.length;
    };
    return XMLDriver;
}());
exports.XMLDriver = XMLDriver;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToXML = void 0;
var INDENT_STEP = 4;
function ws(count) {
    return " ".repeat(count);
}
function itemToXML(item, indent) {
    if (indent === void 0) { indent = INDENT_STEP; }
    var result = ws(indent) + "<item>\n";
    for (var key in item) {
        if (Array.isArray(item[key])) {
            result += ws(indent + INDENT_STEP) + "<".concat(key, ">\n");
            result +=
                item[key].map(function (subItem) { return itemToXML(subItem, indent + INDENT_STEP * 2); }).join("\n") +
                    "\n";
            result += ws(indent + INDENT_STEP) + "</".concat(key, ">\n");
        }
        else {
            result += ws(indent + INDENT_STEP) + "<".concat(key, ">").concat(item[key], "</").concat(key, ">\n");
        }
    }
    result += ws(indent) + "</item>";
    return result;
}
function jsonToXML(data, root) {
    if (root === void 0) { root = "root"; }
    var result = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<".concat(root, ">");
    for (var i = 0; i < data.length; i++) {
        result += "\n" + itemToXML(data[i]);
    }
    return result + "\n</".concat(root, ">");
}
exports.jsonToXML = jsonToXML;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
var helpers_1 = __webpack_require__(11);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (array, by, perm) {
        this._createSorter(by);
        if (perm === by)
            by = null;
        if (perm || by)
            this._sort(array, perm, by);
    };
    Sort.prototype._createSorter = function (by) {
        var _this = this;
        if (by && !by.rule) {
            by.rule = function (a, b) {
                var _a, _b;
                var aa = (_a = _this._checkVal(by.as, a[by.by])) !== null && _a !== void 0 ? _a : "";
                var bb = (_b = _this._checkVal(by.as, b[by.by])) !== null && _b !== void 0 ? _b : "";
                // [TODO] why we need naturalCompare
                return (0, helpers_1.naturalCompare)(aa.toString(), bb.toString());
            };
        }
    };
    Sort.prototype._checkVal = function (method, val) {
        return method ? method.call(this, val) : val;
    };
    Sort.prototype._sort = function (arr, conf, conf2) {
        var _this = this;
        var dir = {
            asc: 1,
            desc: -1,
        };
        return arr.sort(function (a, b) {
            var t = 0;
            if (conf)
                t = conf.rule.call(_this, a, b) * (dir[conf.dir] || dir.asc);
            if (t === 0 && conf2)
                t = conf2.rule.call(_this, a, b) * (dir[conf2.dir] || dir.asc);
            return t;
        });
    };
    return Sort;
}());
exports.Sort = Sort;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCollection = void 0;
var core_1 = __webpack_require__(1);
var datacollection_1 = __webpack_require__(47);
var dataproxy_1 = __webpack_require__(22);
var helpers_1 = __webpack_require__(11);
var types_1 = __webpack_require__(10);
function addToOrder(store, obj, parent, index) {
    if (index !== undefined && index !== -1 && store[parent] && store[parent][index]) {
        store[parent].splice(index, 0, obj);
    }
    else {
        if (!store[parent]) {
            store[parent] = [];
        }
        store[parent].push(obj);
    }
}
var TreeCollection = /** @class */ (function (_super) {
    __extends(TreeCollection, _super);
    function TreeCollection(config, events) {
        var _a;
        var _this = _super.call(this, config, events) || this;
        _this._childs = {};
        var root = (_this._root = (config && config.rootId) || "_ROOT_" + (0, core_1.uid)());
        _this._childs = (_a = {}, _a[root] = [], _a);
        _this._initChilds = null;
        return _this;
    }
    TreeCollection.prototype.add = function (newItem, index, parent) {
        var _this = this;
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [newItem])) {
            return;
        }
        if (typeof newItem !== "object") {
            newItem = {
                value: newItem,
            };
        }
        var out;
        if (Array.isArray(newItem)) {
            out = newItem.map(function (element, key) {
                return _this._add(element, index, parent, key);
            });
        }
        else {
            out = this._add(newItem, index, parent);
        }
        this._reapplyFilters(false);
        return out;
    };
    TreeCollection.prototype.getRoot = function () {
        return this._root;
    };
    TreeCollection.prototype.getParent = function (id, asObj) {
        if (asObj === void 0) { asObj = false; }
        if (!this._pull[id]) {
            return null;
        }
        var parent = this._pull[id].parent;
        return asObj ? this._pull[parent] : parent;
    };
    TreeCollection.prototype.getItems = function (id) {
        if (this._childs && this._childs[id]) {
            return this._childs[id];
        }
        return [];
    };
    TreeCollection.prototype.getLength = function (id) {
        if (id === void 0) { id = this._root; }
        if (!this._childs[id]) {
            return null;
        }
        return this._childs[id].length;
    };
    TreeCollection.prototype.removeAll = function (id) {
        var _a;
        if (!(0, core_1.isId)(id)) {
            _super.prototype.removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
        else if (this._childs[id]) {
            var childs = __spreadArray([], this._childs[id], true);
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var child = childs_1[_i];
                this.remove(child.id);
            }
        }
    };
    TreeCollection.prototype.getIndex = function (id) {
        var parent = this.getParent(id);
        if (!parent || !this._childs[parent]) {
            return -1;
        }
        return this._childs[parent].findIndex(function (i) { return (i === null || i === void 0 ? void 0 : i.id) == id; });
    };
    TreeCollection.prototype.sort = function (rule) {
        var _this = this;
        if (!rule) {
            this._childs = {};
            // [dirty]
            this._parse_data(Object.keys(this._pull).map(function (key) { return _this._pull[key]; }));
            this._reapplyFilters(false);
        }
        else {
            for (var key in this._childs) {
                this._sort.sort(this._childs[key], rule);
            }
            if (this._initChilds && Object.keys(this._initChilds).length) {
                for (var key in this._initChilds) {
                    this._sort.sort(this._initChilds[key], rule);
                }
            }
        }
        this.events.fire(types_1.DataEvents.change, [undefined, "sort", rule]);
    };
    TreeCollection.prototype.filter = function (rule, config, silent) {
        if (config === null || config === void 0 ? void 0 : config.$restore) {
            rule = this._normalizeFilters(rule || this._filters);
        }
        if (!rule || !(config === null || config === void 0 ? void 0 : config.add)) {
            this.restoreOrder();
            if (!(config === null || config === void 0 ? void 0 : config.$restore)) {
                for (var key in this._filters) {
                    var _a = this._filters[key], rule_1 = _a.rule, conf = _a.config;
                    if (conf === null || conf === void 0 ? void 0 : conf.permanent) {
                        this._applyFilter(rule_1, conf);
                    }
                    else {
                        delete this._filters[key];
                    }
                }
            }
        }
        var id;
        if (rule && !(config === null || config === void 0 ? void 0 : config.$restore)) {
            id = (config === null || config === void 0 ? void 0 : config.id) || (0, core_1.uid)();
            if (!config)
                config = {};
            config.type = config.type || types_1.TreeFilterType.all;
            this._filters[id] = { rule: rule, config: config };
            this._applyFilter(rule, config);
        }
        else {
            for (var key in rule) {
                this._applyFilter(rule[key], this._filters[key].config);
            }
        }
        if (!silent) {
            var filters = this._getPureFilters(this._filters);
            this.events.fire(types_1.DataEvents.filter, [(0, core_1.isEmptyObj)(filters) ? null : filters]);
        }
        return id;
    };
    TreeCollection.prototype.restoreOrder = function () {
        if (this._initChilds) {
            this._childs = this._initChilds;
            this._initChilds = null;
        }
    };
    TreeCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.move = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.forEach = function (callback, parent, level) {
        if (parent === void 0) { parent = this._root; }
        if (level === void 0) { level = Infinity; }
        if (!this.haveItems(parent) || level < 1) {
            return;
        }
        var array = this._childs[parent];
        for (var i = 0; i < array.length; i++) {
            callback.call(this, array[i], i, array);
            if (this.haveItems(array[i].id)) {
                this.forEach(callback, array[i].id, --level);
            }
        }
    };
    TreeCollection.prototype.eachChild = function (id, callback, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        if (checkItem === void 0) { checkItem = function () { return true; }; }
        if (!this.haveItems(id)) {
            return;
        }
        for (var i = 0; i < this._childs[id].length; i++) {
            callback.call(this, this._childs[id][i], i);
            if (direct && checkItem(this._childs[id][i])) {
                this.eachChild(this._childs[id][i].id, callback, direct, checkItem);
            }
        }
    };
    TreeCollection.prototype.getNearId = function (id) {
        return id; // for selection
    };
    TreeCollection.prototype.loadItems = function (id, driver) {
        var _this = this;
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        if (!this.events.fire(types_1.DataEvents.beforeItemLoad, [id])) {
            return;
        }
        var urlPart = this.config.autoload.toString();
        var url = urlPart + (urlPart.includes("?") ? "&id=".concat(id) : "?id=".concat(id));
        var proxy = new dataproxy_1.DataProxy(url);
        proxy
            .load()
            .then(function (data) {
            driver = (0, helpers_1.toDataDriver)(driver);
            data = driver.toJsonArray(data);
            _this._parse_data(data, id);
            _this.events.fire(types_1.DataEvents.change);
            _this.events.fire(types_1.DataEvents.afterItemLoad, [id]);
        })
            .catch(function (error) {
            _this.events.fire(types_1.DataEvents.loadError, [error]);
        });
    };
    TreeCollection.prototype.refreshItems = function (id, driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        this.removeAll(id);
        this.loadItems(id, driver);
    };
    TreeCollection.prototype.eachParent = function (id, callback, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item) {
            return;
        }
        if (self) {
            callback.call(this, item);
        }
        if (item.parent === this._root) {
            return;
        }
        var parent = this.getItem(item.parent);
        callback.call(this, parent);
        this.eachParent(item.parent, callback);
    };
    TreeCollection.prototype.haveItems = function (id) {
        return id in this._childs;
    };
    TreeCollection.prototype.canCopy = function (id, target) {
        if (id === target) {
            return false;
        }
        var canCopy = true;
        this.eachParent(target, function (item) { return (item.id === id ? (canCopy = false) : null); }); // locate return string
        return canCopy;
    };
    TreeCollection.prototype.serialize = function (driver, checkItem) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this._serialize(this._root, checkItem);
        var dataDriver = (0, helpers_1.toDataDriver)(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeCollection.prototype.getId = function (index, parent) {
        if (parent === void 0) { parent = this._root; }
        if (!this._childs[parent] || !this._childs[parent][index]) {
            return;
        }
        return this._childs[parent][index].id;
    };
    // Non public API from suite_6.4
    TreeCollection.prototype.map = function (callback, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(callback.call(this, this._childs[parent][i], i, this._childs));
            if (direct) {
                var childResult = this.map(callback, this._childs[parent][i].id, direct);
                result = result.concat(childResult);
            }
        }
        return result;
    };
    TreeCollection.prototype.getRawData = function (from, to, order, mode, parent) {
        parent = parent !== null && parent !== void 0 ? parent : this._root;
        var out;
        if (!this._childs[parent])
            return [];
        if (parent === this._root)
            out = _super.prototype.getRawData.call(this, from, to, this._childs[parent]);
        else
            out = this._childs[parent];
        if (mode === 2) {
            return this.flatten(out);
        }
        return out;
    };
    TreeCollection.prototype.flatten = function (input) {
        var _this = this;
        var out = [];
        input.forEach(function (a) {
            out.push(a);
            var kids = _this._childs[a.id];
            if (kids && a.$opened) {
                out = out.concat(_this.flatten(kids));
            }
        });
        return out;
    };
    TreeCollection.prototype._add = function (newItem, index, parent, key) {
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        this._setParent(newItem, parent);
        if (key > 0 && index !== -1) {
            index = index + 1;
        }
        var id = _super.prototype._add.call(this, newItem, index);
        if (Array.isArray(newItem.items)) {
            for (var _i = 0, _a = newItem.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item, -1, newItem.id);
            }
        }
        return id;
    };
    TreeCollection.prototype._setParent = function (item, parent) {
        item.parent = item.parent ? item.parent.toString() : parent;
        var parentItem = this._pull[item.parent];
        if (parentItem && !parentItem.items) {
            parentItem.items = [];
        }
    };
    TreeCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        var currentChilds = this._childs[id];
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target === this && !this.canCopy(id, targetId)) {
            return null;
        }
        var itemCopy = (0, helpers_1.copyWithoutInner)(this.getItem(id), { items: true });
        if (target.exists(id)) {
            itemCopy.id = (0, core_1.uid)();
        }
        if (!(0, helpers_1.isTreeCollection)(target)) {
            target.add(itemCopy, index);
            return;
        }
        if (this.exists(id)) {
            itemCopy.parent = targetId;
            if (target !== this && targetId === this._root) {
                itemCopy.parent = target.getRoot();
            }
            target.add(itemCopy, index);
            id = itemCopy.id;
        }
        if (currentChilds) {
            for (var _i = 0, currentChilds_1 = currentChilds; _i < currentChilds_1.length; _i++) {
                var child = currentChilds_1[_i];
                var childId = child.id;
                var childIndex = this.getIndex(childId);
                if (typeof id === "string") {
                    this.copy(childId, childIndex, target, id);
                }
            }
        }
        return id;
    };
    TreeCollection.prototype._move = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        if (key && index < this.getIndex(id)) {
            index = index === -1 ? -1 : index + key;
        }
        if (target !== this) {
            if (!(0, helpers_1.isTreeCollection)(target)) {
                // move to datacollection
                target.add((0, helpers_1.copyWithoutInner)(this.getItem(id)), index);
                this.remove(id);
                return;
            }
            var returnId = this.copy(id, index, target, targetId);
            this.remove(id);
            return returnId;
        }
        // move inside
        if (!this.canCopy(id, targetId)) {
            return null;
        }
        var parent = this.getParent(id);
        var parentIndex = this.getIndex(id);
        // get item from parent array and move to target array
        var spliced = this._childs[parent].splice(parentIndex, 1)[0];
        spliced.parent = targetId; // need for next moving, ... not best solution, may be full method for get item
        if (!this._childs[parent].length) {
            delete this._childs[parent];
        }
        this._addToOrder(this._order, spliced, index);
        this.events.fire(types_1.DataEvents.change, [id, "update", this.getItem(id)]);
        return id;
    };
    TreeCollection.prototype._reset = function (id) {
        var _a;
        if ((0, core_1.isId)(id)) {
            var childs = __spreadArray([], this._childs[id], true);
            for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
                var child = childs_2[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype._reset.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype._removeCore = function (id) {
        if (this._pull[id]) {
            var parent_1 = this.getParent(id);
            this._childs[parent_1] = this._childs[parent_1].filter(function (item) { return item.id !== id; });
            if (parent_1 !== this._root && !this._childs[parent_1].length) {
                delete this._childs[parent_1];
            }
            if (this._initChilds && this._initChilds[parent_1]) {
                this._initChilds[parent_1] = this._initChilds[parent_1].filter(function (item) { return item.id !== id; });
                if (parent_1 !== this._root && !this._initChilds[parent_1].length) {
                    delete this._initChilds[parent_1];
                }
            }
            if (this._initOrder && this._initOrder.length) {
                this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
            }
            this._fastDeleteChilds(this._childs, id);
            if (this._initChilds) {
                this._fastDeleteChilds(this._initChilds, id);
            }
        }
    };
    TreeCollection.prototype._addToOrder = function (_order, obj, index) {
        var childs = this._childs;
        var initChilds = this._initChilds;
        var parent = obj.parent;
        this._pull[obj.id] = obj;
        if (obj.parent &&
            this._pull[obj.parent] &&
            this._pull[obj.parent].items &&
            !this._pull[obj.parent].items.find(function (item) { return item.id === obj.id; })) {
            this._pull[obj.parent].items.push(obj);
        }
        _super.prototype._addToOrder.call(this, _order, obj, index);
        addToOrder(childs, obj, parent, index);
        if (initChilds) {
            addToOrder(initChilds, obj, parent, index);
        }
    };
    TreeCollection.prototype._parse_data = function (data, parent) {
        var _a;
        if (parent === void 0) { parent = this._root; }
        var index = this._order.length;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            if (obj && typeof obj !== "object") {
                obj = {
                    value: obj,
                };
            }
            obj.id = (_a = obj.id) !== null && _a !== void 0 ? _a : (0, core_1.uid)();
            obj.parent =
                typeof obj.parent === "undefined" || obj.parent === null || (obj.parent && obj.$items)
                    ? parent
                    : obj.parent;
            if (this._pull[obj.id]) {
                (0, helpers_1.dhxError)("Item ".concat(obj.id, " already exist"));
            }
            this._pull[obj.id] = obj;
            this._order[index++] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            if (obj.items && obj.items instanceof Object) {
                this._parse_data(obj.items, obj.id);
            }
        }
    };
    TreeCollection.prototype._fastDeleteChilds = function (target, id) {
        if (this._pull[id]) {
            delete this._pull[id];
        }
        if (!target[id]) {
            return;
        }
        for (var i = 0; i < target[id].length; i++) {
            this._fastDeleteChilds(target, target[id][i].id);
        }
        delete target[id];
    };
    TreeCollection.prototype._recursiveFilter = function (rule, config, current, level, newChilds) {
        var _this = this;
        var childs = this._childs[current];
        if (!childs) {
            return;
        }
        var condition = function (item) {
            switch (config.type) {
                case types_1.TreeFilterType.all: {
                    return true;
                }
                case types_1.TreeFilterType.level: {
                    return level === config.level;
                }
                case types_1.TreeFilterType.leafs: {
                    return !_this.haveItems(item.id);
                }
            }
        };
        if (typeof rule === "function") {
            var customRule = function (item) { return condition(item) && rule(item); };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
            else if (current === this._root) {
                newChilds[current] = [];
            }
        }
        else {
            var customRule = function (item) {
                var _a;
                var responseOfRule = true;
                for (var compare in rule) {
                    if (rule[compare].by && rule[compare].match !== "") {
                        responseOfRule = rule[compare].compare
                            ? rule[compare].compare(item[rule[compare].by], rule[compare].match, item)
                            : ((_a = item[rule[compare].by]) === null || _a === void 0 ? void 0 : _a.toString().toLocaleLowerCase().indexOf(rule[compare].match.toString().toLowerCase())) !== -1;
                    }
                    if (!responseOfRule)
                        break;
                }
                return condition(item) && responseOfRule;
            };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
            else if (current === this._root) {
                newChilds[current] = [];
            }
        }
        for (var _i = 0, childs_3 = childs; _i < childs_3.length; _i++) {
            var child = childs_3[_i];
            this._recursiveFilter(rule, config, child.id, level + 1, newChilds);
        }
    };
    TreeCollection.prototype._serialize = function (parent, fn) {
        var _this = this;
        if (parent === void 0) { parent = this._root; }
        return this.map(function (item) {
            var itemCopy = {};
            for (var key in item) {
                if (key === "parent" || key === "items" || key.startsWith("$")) {
                    continue;
                }
                itemCopy[key] = item[key];
            }
            if (fn) {
                itemCopy = fn(itemCopy);
            }
            if (_this.haveItems(item.id)) {
                itemCopy.items = _this._serialize(item.id, fn);
            }
            return itemCopy;
        }, parent, false);
    };
    TreeCollection.prototype._applyFilter = function (rule, config) {
        var _this = this;
        if (!rule || (typeof rule !== "function" && (0, core_1.isEmptyObj)(rule)))
            return;
        if (!this._initOrder) {
            this._initOrder = this._order;
        }
        if (!this._initChilds) {
            this._initChilds = this._childs;
        }
        var filter;
        var newChilds = {};
        if (typeof rule !== "function") {
            filter = {};
            if ((0, core_1.isDefined)(rule.by)) {
                filter[rule.by] = rule;
            }
            else {
                for (var key in rule) {
                    filter[key] = rule[key];
                }
            }
        }
        else {
            filter = rule;
        }
        this._recursiveFilter(filter, config, this._root, 0, newChilds);
        Object.keys(newChilds).forEach(function (key) {
            var parentId = _this.getParent(key);
            var current = _this.getItem(key);
            while (parentId) {
                if (!newChilds[parentId]) {
                    newChilds[parentId] = [];
                }
                if (current && !newChilds[parentId].find(function (x) { return x.id === current.id; })) {
                    newChilds[parentId].push(current);
                }
                current = _this.getItem(parentId);
                parentId = _this.getParent(parentId);
            }
        });
        this._childs = newChilds;
    };
    TreeCollection.prototype._normalizeFilters = function (filters) {
        var rules = {};
        for (var key in filters) {
            rules[key] = filters[key].rule;
        }
        return rules;
    };
    return TreeCollection;
}(datacollection_1.DataCollection));
exports.TreeCollection = TreeCollection;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragManager = void 0;
var html_1 = __webpack_require__(2);
var CollectionStore_1 = __webpack_require__(92);
var types_1 = __webpack_require__(10);
var helpers_1 = __webpack_require__(11);
var core_1 = __webpack_require__(1);
function getElementFromPoint(e) {
    var clientX = e.targetTouches
        ? e.targetTouches[0].clientX
        : e.clientX;
    var clientY = e.targetTouches
        ? e.targetTouches[0].clientY
        : e.clientY;
    var el = document.elementFromPoint(clientX, clientY);
    return (el === null || el === void 0 ? void 0 : el.shadowRoot) ? el.shadowRoot.elementFromPoint(clientX, clientY) : el;
}
function getPosition(e) {
    var y = e.targetTouches
        ? e.targetTouches[0].clientY
        : e.clientY;
    var element = (0, html_1.locateNode)(getElementFromPoint(e));
    if (!element) {
        return null;
    }
    var treeLine = element.childNodes[0];
    if (treeLine) {
        var _a = treeLine.getBoundingClientRect(), top_1 = _a.top, height = _a.height;
        return (y - top_1) / height;
    }
}
function dragEventContent(element, elements, exhaustiveList) {
    if (exhaustiveList === void 0) { exhaustiveList = false; }
    var rect = element.getBoundingClientRect();
    var ghost = document.createElement("div");
    var clone = element.cloneNode(true);
    var fontSize = window.getComputedStyle(element.parentElement).fontSize;
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.maxHeight = rect.height + "px";
    clone.style.opacity = "0.8";
    clone.style.fontSize = fontSize;
    if (!exhaustiveList || !elements || !elements.length) {
        ghost.appendChild(clone);
    }
    if (elements && elements.length) {
        elements.forEach(function (node, key) {
            var nodeClone = node.cloneNode(true);
            nodeClone.style.width = rect.width + "px";
            nodeClone.style.height = rect.height + "px";
            nodeClone.style.maxHeight = rect.height + "px";
            nodeClone.style.top = (key + 1) * 12 - rect.height - rect.height * key + "px";
            nodeClone.style.left = (key + 1) * 12 + "px";
            nodeClone.style.opacity = "0.6";
            nodeClone.style.zIndex = "".concat(-key - 1);
            if (!exhaustiveList) {
                nodeClone.style.fontSize = fontSize;
                nodeClone.style.overflow = "hidden";
            }
            ghost.appendChild(nodeClone);
        });
    }
    ghost.className = "dhx_drag-ghost";
    return ghost;
}
var isGrid = function (component) { return component.name === "grid"; };
var isProGrid = function (component) {
    return isGrid(component) && component.hasOwnProperty("scrollView");
};
var DragManager = /** @class */ (function () {
    function DragManager() {
        var _this = this;
        this._transferData = {};
        this._canMove = true;
        this._isDrag = false;
        this._onMouseMove = function (e) {
            if (!_this._transferData.start) {
                return;
            }
            var pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
            var pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            var _a = _this._transferData, x = _a.x, y = _a.y, start = _a.start, componentId = _a.componentId;
            if (!_this._transferData.ghost) {
                if (Math.abs(x - pageX) < 3 && Math.abs(y - pageY) < 3) {
                    return;
                }
                else {
                    var ghost = _this._onDragStart(start, componentId, e);
                    if (!ghost) {
                        _this._endDrop(e);
                        return;
                    }
                    else {
                        _this._transferData.ghost = ghost;
                        document.body.appendChild(_this._transferData.ghost);
                    }
                }
            }
            _this._moveGhost(pageX, pageY);
            _this._onDrag(e);
        };
        this._onMouseUp = function (e) {
            if (!_this._transferData.x) {
                return;
            }
            if (_this._transferData.ghost) {
                _this._removeGhost();
                _this._onDrop(e);
            }
            else {
                _this._endDrop(e);
            }
            if (!e.targetTouches) {
                document.removeEventListener("mousemove", _this._onMouseMove);
                document.removeEventListener("mouseup", _this._onMouseUp);
            }
            else {
                document.removeEventListener("touchmove", _this._onMouseMove);
                document.removeEventListener("touchend", _this._onMouseUp);
            }
        };
    }
    DragManager.prototype.setItem = function (id, item) {
        CollectionStore_1.collectionStore.setItem(id, item);
    };
    DragManager.prototype.onMouseDown = function (event, source, itemsForGhost) {
        // onmousedown only for target objects
        if (event.which !== 1 && !event.targetTouches) {
            return;
        }
        if (!event.targetTouches) {
            document.addEventListener("mousemove", this._onMouseMove);
            document.addEventListener("mouseup", this._onMouseUp);
        }
        else {
            document.addEventListener("touchmove", this._onMouseMove, false);
            document.addEventListener("touchend", this._onMouseUp, false);
        }
        var element = getElementFromPoint(event);
        var item = (0, html_1.locateNode)(element, "data-dhx-id");
        var id = item && item.getAttribute("data-dhx-id");
        var componentId = (0, html_1.locate)(element, "data-dhx-widget-id");
        if (Array.isArray(source) && source.includes(id)) {
            this._transferData.source = __spreadArray([], source, true);
            this._itemsForGhost = itemsForGhost;
        }
        else {
            this._transferData.source = [id];
            this._itemsForGhost = null;
        }
        if (id && componentId) {
            var _a = (0, html_1.getBox)(item), left = _a.left, top_2 = _a.top;
            var pageX = event.targetTouches
                ? event.targetTouches[0].pageX
                : event.pageX;
            var pageY = event.targetTouches
                ? event.targetTouches[0].pageY
                : event.pageY;
            this._transferData.initXOffset = pageX - left;
            this._transferData.initYOffset = pageY - top_2;
            this._transferData.x = pageX;
            this._transferData.y = pageY;
            this._transferData.componentId = componentId;
            this._transferData.start = id;
            this._transferData.item = item;
        }
    };
    DragManager.prototype.isDrag = function () {
        return this._isDrag;
    };
    DragManager.prototype.cancelCanDrop = function (event) {
        this._canMove = false;
        this._isDrag = false;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropComponentId = _a.dropComponentId;
        var data = {
            start: start,
            source: source,
            target: target,
        };
        var collection = CollectionStore_1.collectionStore.getItem(dropComponentId);
        if (collection && target) {
            collection.events.fire(types_1.DragEvents.cancelDrop, [data, event]);
        }
        this._transferData.dropComponentId = null;
        this._transferData.target = null;
    };
    DragManager.prototype._moveGhost = function (x, y) {
        if (this._transferData.ghost) {
            this._transferData.ghost.style.left = x - this._transferData.initXOffset + "px";
            this._transferData.ghost.style.top = y - this._transferData.initYOffset + "px";
        }
    };
    DragManager.prototype._removeGhost = function () {
        document.body.removeChild(this._transferData.ghost);
    };
    DragManager.prototype._onDrop = function (e) {
        if (!this._canMove) {
            this._endDrop(e);
            return;
        }
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropComponentId = _a.dropComponentId, dropPosition = _a.dropPosition;
        var data = { start: start, source: source, target: target, dropPosition: dropPosition };
        var component = CollectionStore_1.collectionStore.getItem(dropComponentId);
        var config = component && component.config;
        if (!component || config.dragMode === "source") {
            this._endDrop(e);
            return;
        }
        if (component.events.fire(types_1.DragEvents.beforeDrop, [data, e])) {
            var to = {
                id: target,
                component: component,
            };
            var from = {
                id: start,
                component: this._transferData.component,
                newId: null,
            };
            this._move(from, to);
            if (from.newId && from.component !== to.component)
                data.start = from.newId;
            to.component.events.fire(types_1.DragEvents.afterDrop, [data, e]);
        }
        this._endDrop(e);
    };
    DragManager.prototype._onDragStart = function (id, componentId, e) {
        var component = CollectionStore_1.collectionStore.getItem(componentId);
        var config = component.config;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target;
        var data = {
            start: start,
            source: source,
            target: target,
        };
        if (config.dragMode === "target" || component._pregroupData) {
            return null;
        }
        var ghost = dragEventContent(this._transferData.item, this._itemsForGhost, config.dragItem === "row" || config.dragItem === "column" || config.dragItem === "both");
        var ans = component.events.fire(types_1.DragEvents.beforeDrag, [data, e, ghost]);
        if (!ans || !(0, core_1.isId)(id)) {
            return null;
        }
        component.events.fire(types_1.DragEvents.dragStart, [data, e]);
        this._isDrag = true;
        this._toggleTextSelection(true);
        this._transferData.component = component;
        this._transferData.dragConfig = config;
        return ghost;
    };
    DragManager.prototype._onDrag = function (e) {
        var element = getElementFromPoint(e);
        var collectionId = (0, html_1.locate)(element, "data-dhx-widget-id");
        var component = CollectionStore_1.collectionStore.getItem(collectionId);
        if (!component) {
            if (this._canMove) {
                this.cancelCanDrop(e);
            }
            return;
        }
        var isTreeHeaderOrFooter = !!(0, html_1.locateNodeByClassName)(element, "dhx_grid-header") ||
            !!(0, html_1.locateNodeByClassName)(element, "dhx_grid-footer");
        var gridConfig = component.config.columns
            ? component.config
            : undefined;
        var isColumnDrag = gridConfig && (gridConfig.dragItem === "both" || gridConfig.dragItem === "column");
        if (isTreeHeaderOrFooter && !isColumnDrag) {
            if (this._canMove) {
                this.cancelCanDrop(e);
            }
            return;
        }
        var id = (0, html_1.locate)(element, "data-dhx-id");
        var rootId = (0, html_1.locate)(element, "data-dhx-root-id");
        if (!id && !rootId) {
            this.cancelCanDrop(e);
            this._transferData.dropComponentId = collectionId;
            this._transferData.target = null;
            this._canDrop(e);
            return;
        }
        var _a = this._transferData, dropComponentId = _a.dropComponentId, start = _a.start, source = _a.source, target = _a.target, componentId = _a.componentId, dropPosition = _a.dropPosition;
        if (component.config.dropBehaviour === "complex") {
            var pos = getPosition(e);
            if (pos <= 0.25) {
                this._transferData.dropPosition = "top";
            }
            else if (pos >= 0.75) {
                this._transferData.dropPosition = "bottom";
            }
            else {
                this._transferData.dropPosition = "in";
            }
        }
        else if ((target === id || (!id && target === rootId)) && dropComponentId === collectionId) {
            return;
        }
        var from = {
            id: start,
            component: this._transferData.component,
        };
        if (component.config.dragMode === "source") {
            return;
        }
        from.component.events.fire(types_1.DragEvents.dragOut, [
            {
                start: start,
                source: source,
                target: target,
            },
            e,
        ]);
        if (collectionId !== componentId ||
            !(0, helpers_1.isTreeCollection)(from.component.data) ||
            ((0, helpers_1.isTreeCollection)(from.component.data) && from.component.data.canCopy(from.id, id))) {
            this.cancelCanDrop(e); // clear last
            var target_1 = (this._transferData.target = id || rootId);
            this._transferData.dropComponentId = collectionId;
            var canMove = from.component.events.fire(types_1.DragEvents.dragIn, [
                {
                    start: start,
                    source: source,
                    target: target_1,
                    dropPosition: dropPosition,
                },
                e,
            ]);
            if (canMove) {
                this._canDrop(e);
            }
        }
        else {
            this.cancelCanDrop(e);
        }
    };
    DragManager.prototype._move = function (from, to) {
        var grid = from.component;
        var nextGrid = to.component;
        var fromData = from.component.data;
        var toData = to.component.data;
        var index = 0;
        var componentId = to.id;
        var behaviour = (0, helpers_1.isTreeCollection)(toData) ? to.component.config.dropBehaviour : undefined;
        var gridConfig = from.component.config.columns
            ? from.component.config
            : undefined;
        var isColumnDrag = gridConfig &&
            (gridConfig.dragItem === "both" || gridConfig.dragItem === "column") &&
            gridConfig.columns.map(function (c) { return c.id; }).filter(function (id) { return id === from.id || id === to.id; }).length;
        if (isColumnDrag && from.component === to.component) {
            if (from.id === to.id)
                return;
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var componentIndex = currentCols.findIndex(function (c) { return c.id === to.id; });
            if (componentIndex === -1)
                return;
            currentCols.splice(componentIndex, 0, currentCols.splice(sourceIndex, 1)[0]);
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        else if (isColumnDrag &&
            from.component &&
            isProGrid(from.component) &&
            to.component &&
            isProGrid(to.component)) {
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var nextGridCols = nextGrid.config.columns.map(function (c) { return (__assign({}, c)); });
            var nextGridLength = nextGrid.data.getLength();
            var componentIndex = nextGridCols.findIndex(function (c) { return c.id === to.id; });
            var currentColumnData_1 = [];
            var currentColumnId_1 = from.id;
            grid.data.forEach(function (item) {
                var _a;
                currentColumnData_1.push((_a = { id: item.id }, _a[currentColumnId_1] = item[from.id], _a));
            });
            if (nextGridLength) {
                grid.data.forEach(function (item, index) {
                    var nextGridItem = nextGrid.data.getItem(item.id);
                    if (nextGridItem) {
                        nextGrid.data.update(nextGridItem.id, __assign(__assign({}, nextGridItem), currentColumnData_1[index]));
                    }
                    else {
                        nextGrid.data.add(currentColumnData_1[index]);
                    }
                });
            }
            else {
                nextGrid.data.parse(currentColumnData_1);
            }
            var col = currentCols.splice(sourceIndex, 1)[0];
            nextGridCols.find(function (c) { return c.id === currentColumnId_1; }) || nextGridCols.splice(componentIndex, 0, col);
            nextGrid.setColumns(nextGridCols);
            nextGrid.paint();
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        var isRootParent = to.id === nextGrid.config.rootParent;
        switch (behaviour) {
            case "child":
                break;
            case "sibling":
                componentId = toData.getParent(componentId);
                index = toData.getIndex(to.id) + 1;
                break;
            case "complex": {
                var dropPosition = this._transferData.dropPosition;
                if (isRootParent) {
                    componentId = to.id;
                    index = toData.getLength();
                }
                else {
                    var fromIndex = toData.getIndex(from.id);
                    if (dropPosition === "top") {
                        componentId = toData.getParent(componentId);
                        index =
                            toData.getIndex(to.id) -
                                (fromIndex === -1 || fromIndex > toData.getIndex(to.id) ? 0 : 1);
                    }
                    else if (dropPosition === "bottom") {
                        componentId = toData.getParent(componentId);
                        index =
                            toData.getIndex(to.id) +
                                (fromIndex === -1 || fromIndex > toData.getIndex(to.id) ? 1 : 0);
                    }
                }
                break;
            }
            default:
                // list move
                if (!(0, core_1.isId)(to.id)) {
                    index = -1;
                }
                else {
                    if (toData.getIndex(from.id) > -1)
                        from.newId = (0, core_1.uid)();
                    index = toData.getIndex(to.id);
                }
        }
        if (this._transferData.dragConfig.dragCopy) {
            if (this._transferData.source instanceof Array && this._transferData.source.length > 1) {
                this._transferData.source.map(function (selctedId) {
                    fromData.copy(selctedId, index, toData, componentId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.copy(from.id, index, toData, componentId);
            }
        }
        else {
            if (this._transferData.source instanceof Array && this._transferData.source.length > 1) {
                fromData.move(this._transferData.source, index, toData, componentId);
            }
            else {
                if (isGrid(nextGrid) && !nextGrid.config.columns.length) {
                    var gridItem = grid.data.getItem(from.id);
                    nextGrid.data.parse([__assign({}, gridItem)]);
                    nextGrid.setColumns(__spreadArray([], grid.config.columns, true));
                    nextGrid.paint();
                    grid.data.remove(from.id);
                    grid.paint();
                }
                else {
                    fromData.move(from.id, index, toData, componentId, from.newId);
                }
            }
        }
    };
    DragManager.prototype._endDrop = function (e) {
        this._toggleTextSelection(false);
        if (this._transferData.component) {
            var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target;
            var data = { start: start, source: source, target: target };
            this._transferData.component.events.fire(types_1.DragEvents.afterDrag, [data, e]);
        }
        this.cancelCanDrop(e);
        this._canMove = true;
        this._transferData = {};
        this._transferData.target = null;
        this._transferData.dropComponentId = null;
    };
    DragManager.prototype._canDrop = function (e) {
        this._canMove = true;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropPosition = _a.dropPosition;
        var data = {
            start: start,
            source: source,
            target: target,
            dropPosition: dropPosition,
        };
        var component = CollectionStore_1.collectionStore.getItem(this._transferData.dropComponentId);
        if (component && this._transferData.target) {
            if (isGrid(component)) {
                data.dragItem = this._transferData.item.classList.contains("dhx_grid-row")
                    ? "row"
                    : "column";
            }
            component.events.fire(types_1.DragEvents.canDrop, [data, e]);
        }
    };
    DragManager.prototype._toggleTextSelection = function (add) {
        if (add) {
            document.body.classList.add("dhx_no-select");
        }
        else {
            document.body.classList.remove("dhx_no-select");
        }
    };
    return DragManager;
}());
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.dragManager = dhx.dragManager || new DragManager();
exports.dragManager = dhx.dragManager;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionStore = exports.CollectionStore = void 0;
var core_1 = __webpack_require__(1);
var CollectionStore = /** @class */ (function () {
    function CollectionStore() {
        this._store = {};
    }
    CollectionStore.prototype.setItem = function (id, target) {
        this._store[id] = target;
    };
    CollectionStore.prototype.getItem = function (id) {
        if (!(0, core_1.isId)(id) || !this._store[id]) {
            return null;
        }
        return this._store[id];
    };
    return CollectionStore;
}());
exports.CollectionStore = CollectionStore;
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.collectionStore = dhx.collectionStore || new CollectionStore();
exports.collectionStore = dhx.collectionStore;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyDataProxy = void 0;
var dataproxy_1 = __webpack_require__(22);
var core_1 = __webpack_require__(1);
var ajax_1 = __webpack_require__(33);
var LazyDataProxy = /** @class */ (function (_super) {
    __extends(LazyDataProxy, _super);
    function LazyDataProxy(url, config) {
        var _this = _super.call(this, url) || this;
        _this.config = (0, core_1.extend)({
            from: 0,
            limit: 50,
            delay: 50,
            prepare: 0,
        }, config);
        _this.updateUrl(url, { from: _this.config.from, limit: _this.config.limit });
        return _this;
    }
    LazyDataProxy.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._timeout) {
                ajax_1.ajax.get(_this.url, { responseType: "text" })
                    .then(resolve)
                    .catch(reject);
                _this._cooling = true;
                _this._timeout = setTimeout(function () {
                    return;
                });
            }
            else {
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    ajax_1.ajax.get(_this.url, { responseType: "text" })
                        .then(resolve)
                        .catch(reject);
                    _this._cooling = true;
                }, _this.config.delay);
                if (_this._cooling) {
                    resolve(null);
                    _this._cooling = false;
                }
            }
        });
    };
    return LazyDataProxy;
}(dataproxy_1.DataProxy));
exports.LazyDataProxy = LazyDataProxy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var events_1 = __webpack_require__(3);
var types_1 = __webpack_require__(29);
var types_2 = __webpack_require__(10);
var core_1 = __webpack_require__(1);
var Selection = /** @class */ (function () {
    function Selection(config, data, events) {
        var _this = this;
        this.events = events || new events_1.EventSystem(this);
        this.config = config;
        this._data = data;
        this._selected = null;
        this._data.events.on(types_2.DataEvents.removeAll, function () {
            _this._selected = null;
        });
        this._data.events.on(types_2.DataEvents.change, function () {
            if ((0, core_1.isId)(_this._selected)) {
                var near = _this._data.getNearId(_this._selected);
                if (near !== _this._selected) {
                    _this._selected = null;
                    if (near) {
                        _this.add(near);
                    }
                }
            }
        });
    }
    Selection.prototype.getId = function () {
        return this._selected;
    };
    Selection.prototype.getItem = function () {
        if ((0, core_1.isId)(this._selected)) {
            return this._data.getItem(this._selected);
        }
        return null;
    };
    Selection.prototype.remove = function (id) {
        id = id !== null && id !== void 0 ? id : this._selected;
        if (!(0, core_1.isDefined)(id)) {
            return true;
        }
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false }, true);
            this._selected = null;
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    Selection.prototype.add = function (id) {
        if (this._selected === id || !!this.config.disabled || !this._data.exists(id)) {
            return;
        }
        this.remove();
        this._addSingle(id);
    };
    Selection.prototype.enable = function () {
        this.config.disabled = false;
    };
    Selection.prototype.disable = function () {
        this.remove();
        this.config.disabled = true;
    };
    Selection.prototype._addSingle = function (id) {
        if (this.events.fire(types_1.SelectionEvents.beforeSelect, [id])) {
            this._selected = id;
            this._data.update(id, { $selected: true }, true);
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
        }
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createFactory = void 0;
var button_1 = __webpack_require__(96);
var navItem_1 = __webpack_require__(97);
var customHTMLButton_1 = __webpack_require__(98);
var imageButton_1 = __webpack_require__(99);
var input_1 = __webpack_require__(100);
var menuItem_1 = __webpack_require__(101);
var separator_1 = __webpack_require__(102);
var spacer_1 = __webpack_require__(103);
var title_1 = __webpack_require__(104);
var datePicker_1 = __webpack_require__(105);
var helpers_1 = __webpack_require__(23);
function itemfactory(item, events, widgetName, props) {
    switch (item.type) {
        case "navItem":
        case "selectButton":
            return (0, navItem_1.navItem)(item, widgetName, props.collapsed);
        case "button":
            return (0, button_1.button)(item, widgetName);
        case "title":
            return (0, title_1.title)(item, widgetName);
        case "separator":
            return (0, separator_1.separator)(item, widgetName);
        case "spacer":
            return (0, spacer_1.spacer)(item, widgetName);
        case "input":
            return (0, input_1.input)(item, events, widgetName);
        case "imageButton":
            return (0, imageButton_1.imageButton)(item, widgetName);
        case "menuItem":
            return (0, menuItem_1.menuItem)(item, widgetName, props.asMenuItem);
        case "customHTMLButton":
            return (0, customHTMLButton_1.customHTMLButton)(item, widgetName, props.asMenuItem);
        case "datePicker":
            return (0, datePicker_1.datePicker)(item, events, widgetName);
        case "block":
        default:
            throw new Error("unknown item type " + item.type);
    }
}
function normalizeOpenIcon(widgetName, item, data) {
    switch (widgetName) {
        case "sidebar":
        case "context-menu":
            item.$openIcon = "right";
            break;
        case "toolbar":
            if (item.parent === data.getRoot()) {
                item.$openIcon = "right";
            }
            else {
                item.$openIcon = "bottom";
            }
            break;
        case "menu":
            if (item.parent !== this.data.getRoot()) {
                item.$openIcon = "right";
            }
            break;
        case "ribbon": {
            var parent_1 = data.getItem(item.parent);
            if (parent_1 && item.type !== "block") {
                if (parent_1.type === "block") {
                    item.$openIcon = "bottom";
                }
                else {
                    item.$openIcon = "right";
                }
            }
            break;
        }
    }
}
function createFactory(_a) {
    var defaultType = _a.defaultType, allowedTypes = _a.allowedTypes, widgetName = _a.widgetName, widget = _a.widget;
    var allowedSet = new Set();
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        allowedSet.add(type);
    }
    var config = widget.config, events = widget.events, data = widget.data;
    return function (item, asMenuItem) {
        if (item.hidden) {
            return null;
        }
        if (!item.type || item.type === "button" || item.type === "navItem" || item.type === "menuItem") {
            if (!item.value && !item.icon && !item.html) {
                return null;
            }
        }
        item.type = item.type || defaultType;
        if (allowedSet && !allowedSet.has(item.type)) {
            item.type = defaultType;
        }
        if (item.type === "imageButton" && widgetName !== "ribbon") {
            item.active = false;
        }
        if (asMenuItem && item.type !== "spacer" && item.type !== "separator" && item.type !== "customHTML") {
            item.type = "menuItem";
        }
        if (data.haveItems(item.id)) {
            normalizeOpenIcon(widgetName, item, data);
        }
        if (widgetName === "toolbar" && item.items) {
            item.items.forEach(function (element) {
                if (!element.type) {
                    element.type = "menuItem";
                }
            });
        }
        var itemVNode = item.type !== "customHTML" &&
            itemfactory(item, events, widgetName, {
                asMenuItem: asMenuItem,
                collapsed: widgetName !== "sidebar" || config.collapsed,
            });
        return (0, helpers_1.navbarComponentMixin)(widgetName, item, asMenuItem, itemVNode);
    };
}
exports.createFactory = createFactory;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = void 0;
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function button(item, widgetName) {
    var getAriaAttrs = function (item) {
        var isItemActivated = item.active || item.$activeParent;
        var attrs = {
            "aria-disabled": item.disabled ? "true" : "false",
            "aria-label": item.value || item.tooltip || item.id || "" + " ".concat(item.count || ""),
        };
        if (item.items) {
            // as menu
            attrs["id"] = item.id;
            attrs["aria-haspopup"] = "menu"; // menu has hot keys, listbox doesn't have
            if (isItemActivated) {
                attrs["aria-expanded"] = "true";
            }
        }
        return attrs;
    };
    var isIconButton = item.icon && !item.value;
    var counterClass = isIconButton ? " dhx_navbar-count--absolute" : " dhx_navbar-count--button-inline";
    return (0, dom_1.el)("button.dhx_button", __assign({ class: (0, helpers_1.getNavbarButtonCSS)(item, widgetName), "data-dhx-id": item.id, disabled: item.disabled, type: "button" }, getAriaAttrs(item)), [
        item.icon ? (0, helpers_1.getIcon)(item.icon, "button") : null,
        item.html
            ? (0, dom_1.el)("div.dhx_button__text", { ".innerHTML": item.html })
            : item.value && (0, dom_1.el)("span.dhx_button__text", item.value),
        item.count > 0 && (0, helpers_1.getCount)(item, counterClass, isIconButton),
        item.value && item.$openIcon
            ? (0, dom_1.el)("span.dhx_button__icon.dhx_button__icon--menu.dxi.dxi-menu-right", {
                "aria-hidden": "true",
            })
            : null,
        item.loading &&
            (0, dom_1.el)("span.dhx_button__loading", {
                "aria-hidden": "true",
            }, [(0, dom_1.el)("span.dhx_button__loading-icon.dxi.dxi-loading")]),
    ]);
}
exports.button = button;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.navItem = void 0;
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function navItem(item, widgetName, collapsed) {
    var getAriaAttrs = function (item) {
        var attrs = {
            "aria-disabled": item.disabled ? "true" : "false",
            "aria-label": item.value || " ",
        };
        var isItemActivated = item.active || item.$activeParent;
        if (item.type === "selectButton" || item.items) {
            attrs["id"] = item.id;
            attrs["aria-haspopup"] = "menu"; // menu has hot keys, listbox doesn't have
            if (isItemActivated) {
                attrs["aria-expanded"] = "true";
            }
        }
        else {
            if (item.twoState || isItemActivated) {
                attrs["aria-pressed"] = isItemActivated ? "true" : "false";
            }
            if (!item.value && item.icon && item.tooltip) {
                attrs["aria-label"] = "".concat(item.tooltip, " ").concat(item.count || "");
            }
        }
        return attrs;
    };
    var baseClass = " dhx_" + widgetName + "-button";
    return (0, dom_1.el)("button", __assign({ class: "dhx_button" +
            baseClass +
            (item.active || item.$activeParent ? baseClass + "--active" : "") +
            (item.disabled ? baseClass + "--disabled" : "") +
            (item.$openIcon ? baseClass + "--select" : "") +
            (item.circle ? baseClass + "--circle" : "") +
            (item.size ? " " + baseClass + "--" + item.size : "") +
            (!item.value && item.icon ? baseClass + "--icon" : "") +
            (item.css ? " " + item.css : ""), "data-dhx-id": item.id, disabled: item.disabled, type: "button" }, getAriaAttrs(item)), [
        item.icon &&
            (0, dom_1.el)("span", {
                class: item.icon + baseClass + "__icon",
                "aria-hidden": "true",
            }),
        item.html &&
            (0, dom_1.el)("div", {
                class: baseClass.trim() + "__html",
                ".innerHTML": item.html,
            }),
        !item.html &&
            item.value &&
            (0, dom_1.el)("span", {
                class: baseClass.trim() + "__text",
            }, item.value),
        item.count > 0 && (0, helpers_1.getCount)(item, baseClass + "__count", collapsed),
        item.$openIcon &&
            (0, dom_1.el)("span.dxi.dxi-menu-right", {
                class: baseClass + "__caret",
                "aria-hidden": "true",
            }),
    ]);
}
exports.navItem = navItem;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHTMLButton = void 0;
var dom_1 = __webpack_require__(0);
function customHTMLButton(item, widgetName, asMenuItem) {
    var getAriaAttrs = function (item) {
        var attrs = {
            "aria-disabled": item.disabled ? "true" : "false",
        };
        if (item.twoState || item.active || item.$activeParent) {
            attrs["aria-pressed"] = item.active || item.$activeParent ? "true" : "false";
        }
        return attrs;
    };
    var baseClass = asMenuItem ? " dhx_button dhx_menu-button" : " dhx_button dhx_nav-menu-button";
    return (0, dom_1.el)("button", __assign({ class: "dhx_custom-button" + baseClass + (item.$activeParent ? baseClass + "--active" : ""), "data-dhx-id": item.id, type: "button", ".innerHTML": item.html }, getAriaAttrs(item)), item.html ? "" : item.value);
}
exports.customHTMLButton = customHTMLButton;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageButton = void 0;
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function imageButton(item, widgetName) {
    var getAriaAttrs = function (item) {
        var attrs = {
            "aria-disabled": item.disabled ? "true" : "false",
        };
        if (item.twoState || item.active) {
            attrs["aria-pressed"] = item.active ? "true" : "false";
        }
        if (!item.value && item.src && item.tooltip) {
            attrs["aria-label"] = "".concat(item.tooltip, " ").concat(item.count || "");
        }
        return attrs;
    };
    var baseClass = "dhx_" + widgetName + "-button-image";
    var isRibbon = widgetName === "ribbon";
    return (0, dom_1.el)("button.dhx_button", __assign({ class: baseClass +
            (item.size ? " " + baseClass + "--" + item.size : "") +
            (!item.value && item.src ? " " + baseClass + "--icon" : "") +
            (isRibbon && item.$openIcon ? " " + baseClass + "--select" : "") +
            (item.active ? " " + baseClass + "--active" : ""), "data-dhx-id": item.id, type: "button" }, getAriaAttrs(item)), [
        isRibbon &&
            item.value &&
            item.$openIcon &&
            (0, dom_1.el)("span.dxi.dxi-menu-right", {
                class: baseClass + "__caret",
                "aria-hidden": "true",
            }),
        item.html
            ? (0, dom_1.el)("div", {
                class: baseClass + "__text",
                ".innerHTML": item.html,
            })
            : item.value &&
                (0, dom_1.el)("span", {
                    class: baseClass + "__text",
                }, item.value),
        item.src &&
            (0, dom_1.el)("span", {
                class: baseClass + "__image",
                style: { backgroundImage: "url(".concat(item.src, ")") },
                role: "presentation",
            }),
        item.count > 0 && (0, helpers_1.getCount)(item, baseClass + "__count", true),
    ]);
}
exports.imageButton = imageButton;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(24);
function onBlur(events, id) {
    events.fire(types_1.NavigationBarEvents.inputBlur, [id]);
}
function onFocus(events, id) {
    events.fire(types_1.NavigationBarEvents.inputFocus, [id]);
}
function onChange(events, id, e) {
    events.fire(types_1.NavigationBarEvents.inputChange, [id, e.target.value]);
}
function input(item, events, widgetName) {
    return (0, dom_1.el)(".dhx_form-group.dhx_form-group--no-message-holder" +
        (item.hiddenLabel ? ".dhx_form-group--label_sr" : ".dhx_form-group--inline") +
        ".dhx_".concat(widgetName, "__input"), {
        style: {
            width: item.width ? item.width : "200px",
        },
        role: "presentation",
    }, [
        item.label &&
            (0, dom_1.el)("label.dhx_label", {
                for: item.id,
                style: {
                    maxWidth: item.hiddenLabel ? null : "100%",
                },
            }, item.label),
        (0, dom_1.el)(".dhx_input__wrapper", {
            role: "presentation",
        }, [
            (0, dom_1.el)("input.dhx_input", {
                id: item.id,
                placeholder: item.placeholder,
                class: item.icon ? "dhx_input--icon-padding" : "",
                autocomplete: item.autocomplete ? "on" : "off",
                value: item.value,
                disabled: item.disabled,
                onblur: [onBlur, events, item.id],
                onfocus: [onFocus, events, item.id],
                onchange: [onChange, events, item.id],
                "data-dhx-id": item.id,
                _hooks: {
                    didInsert: function (node) {
                        if (events) {
                            events.fire(types_1.NavigationBarEvents.inputCreated, [item.id, node.el]);
                        }
                    },
                },
                _key: item.id,
                "aria-label": item.label ||
                    item.helpMessage ||
                    "type ".concat(item.placeholder ? "text like " + item.placeholder : "text"),
            }),
            item.icon
                ? (0, dom_1.el)(".dhx_input__icon", {
                    class: item.icon,
                    "aria-hidden": "true",
                })
                : null,
        ]),
    ]);
}
exports.input = input;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItem = void 0;
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
var core_1 = __webpack_require__(1);
function menuItem(item, widgetName, asMenuItem) {
    var getAriaAttrs = function (item) {
        var attrs = {
            role: "menuitem",
            "aria-disabled": item.disabled ? "true" : "false",
        };
        if (item.items) {
            attrs["aria-haspopup"] = "true";
        }
        return attrs;
    };
    var baseClass = asMenuItem ? " dhx_menu-button" : " dhx_nav-menu-button";
    var isCount = (0, core_1.isDefined)(item.count);
    return (0, dom_1.el)("button", __assign({ class: "dhx_button" +
            baseClass +
            (item.disabled ? baseClass + "--disabled" : "") +
            (item.active || item.$activeParent ? baseClass + "--active" : ""), disabled: item.disabled, "data-dhx-id": item.id, type: "button" }, getAriaAttrs(item)), asMenuItem
        ? [
            item.icon || item.value || item.html
                ? (0, dom_1.el)("span.dhx_menu-button__block.dhx_menu-button__block--left", [
                    item.icon &&
                        (0, dom_1.el)("span.dhx_menu-button__icon", {
                            class: item.icon,
                        }),
                    item.html
                        ? (0, dom_1.el)("div.dhx_menu-button__text", { ".innerHTML": item.html })
                        : item.value && (0, dom_1.el)("span.dhx_menu-button__text", item.value),
                ])
                : null,
            isCount || item.hotkey || item.items
                ? (0, dom_1.el)("span.dhx_menu-button__block.dhx_menu-button__block--right", [
                    isCount && (0, helpers_1.getCount)(item, " dhx_menu-button__count", false),
                    item.hotkey && (0, dom_1.el)("span.dhx_menu-button__hotkey", item.hotkey),
                    item.items && (0, dom_1.el)("span.dhx_menu-button__caret.dxi.dxi-menu-right"),
                ])
                : null,
        ]
        : [
            item.icon &&
                (0, dom_1.el)("span.dhx_menu-button__icon", {
                    class: item.icon,
                }),
            item.html
                ? (0, dom_1.el)("div.dhx_menu-button__text", { ".innerHTML": item.html })
                : item.value && (0, dom_1.el)("span.dhx_nav-menu-button__text", item.value),
            isCount && (0, helpers_1.getCount)(item, " dhx_menu-button__count", false),
        ]);
}
exports.menuItem = menuItem;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.separator = void 0;
function separator(item, widgetName) {
    return null;
}
exports.separator = separator;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.spacer = void 0;
function spacer(item, widgetName) {
    return null;
}
exports.spacer = spacer;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.title = void 0;
var dom_1 = __webpack_require__(0);
function title(item, widgetName) {
    return (0, dom_1.el)("span", {
        class: "dhx_navbar-title" + " dhx_navbar-title--" + widgetName,
        "data-dhx-id": item.id,
        ".innerHTML": item.html,
        "aria-label": item.value || "", // without label span is not accessible
    }, !item.html ? item.value : null);
}
exports.title = title;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datePicker = void 0;
var dom_1 = __webpack_require__(0);
var ts_calendar_1 = __webpack_require__(65);
var ts_popup_1 = __webpack_require__(12);
var types_1 = __webpack_require__(24);
var date_1 = __webpack_require__(36);
var html_1 = __webpack_require__(2);
function onBlur(events, item, e) {
    var element = e.target;
    if (element) {
        element.value = item.$calendar.getValue();
    }
    events.fire(types_1.NavigationBarEvents.inputBlur, [item === null || item === void 0 ? void 0 : item.id]);
}
function onFocus(events, item, e) {
    (0, dom_1.awaitRedraw)().then(function () { return item.$popup.show(e.target, { theme: e.target }); });
    events.fire(types_1.NavigationBarEvents.inputFocus, [item === null || item === void 0 ? void 0 : item.id]);
}
function onInput(item, events, e) {
    var stringDate = e.target.value;
    var dateFormat = item.$calendar.config.dateFormat;
    if (!stringDate.length) {
        item.$calendar.clear();
    }
    else if ((0, date_1.stringToDate)(stringDate, dateFormat, true)) {
        item.$calendar.setValue((0, date_1.stringToDate)(stringDate, dateFormat));
    }
    events.fire(types_1.NavigationBarEvents.input, [(0, html_1.locate)(e), stringDate]);
    return false;
}
function datePicker(item, events, widgetName) {
    if (!item.$popup) {
        item.$popup = new ts_popup_1.Popup();
    }
    if (!item.$calendar) {
        item.$calendar = new ts_calendar_1.Calendar(null, __assign(__assign({}, item), { css: "dhx_widget--bordered" }));
        item.$popup.attach(item.$calendar);
        item.$calendar.events.on("change", function (_date, _oldDate, byClick) {
            var _a;
            if (byClick && item.$popup.isVisible()) {
                item.$popup.hide();
            }
            var asDate = ((_a = item.valueFormat) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "date";
            events.fire(types_1.NavigationBarEvents.inputChange, [item.id, item.$calendar.getValue(asDate)]);
        });
    }
    var value = item.$calendar.getValue();
    if (item.mode && item.mode !== "calendar") {
        item.$calendar.showDate(undefined, item.mode);
    }
    return (0, dom_1.el)(".dhx_form-group.dhx_form-group--no-message-holder" +
        (item.hiddenLabel ? ".dhx_form-group--label_sr" : ".dhx_form-group--inline") +
        ".dhx_".concat(widgetName, "__input"), {
        style: {
            width: item.width ? item.width : "200px",
        },
        role: "presentation",
    }, [
        item.label &&
            (0, dom_1.el)("label.dhx_label", {
                for: item.id,
                style: {
                    maxWidth: item.hiddenLabel ? null : "100%",
                },
            }, item.label),
        (0, dom_1.el)(".dhx_input__wrapper", {
            role: "presentation",
        }, [
            (0, dom_1.el)("input.dhx_input", {
                id: item.id,
                placeholder: item.placeholder,
                class: item.icon ? "dhx_input--icon-padding" : "",
                value: value,
                disabled: item.disabled,
                onblur: [onBlur, events, item],
                onfocus: [onFocus, events, item],
                oninput: [onInput, item, events],
                "data-dhx-id": item.id,
                readOnly: item.editable !== true,
                _hooks: {
                    didInsert: function (node) {
                        if (events) {
                            events.fire(types_1.NavigationBarEvents.inputCreated, [item.id, node.el]);
                        }
                    },
                },
                _key: item.id,
                "aria-label": item.label ||
                    item.helpMessage ||
                    "type ".concat(item.placeholder ? "text like " + item.placeholder : "text"),
            }),
            item.icon
                ? (0, dom_1.el)(".dhx_input__icon", {
                    class: item.icon,
                    "aria-hidden": "true",
                })
                : null,
        ]),
    ]);
}
exports.datePicker = datePicker;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(3);
var view_1 = __webpack_require__(4);
var ts_timepicker_1 = __webpack_require__(66);
var helper_1 = __webpack_require__(114);
var date_1 = __webpack_require__(36);
var types_1 = __webpack_require__(55);
var html_1 = __webpack_require__(2);
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, (0, core_1.extend)({
            weekStart: "sunday",
            thisMonthOnly: false,
            dateFormat: window && window.dhx && window.dhx.dateFormat,
            width: "250px",
        }, config)) || this;
        _this._selected = [];
        _this.events = new events_1.EventSystem();
        _this.config.disabledDates = _this.config.disabledDates || _this.config.block; // TODO: remove suite_7.0
        _this.config.mode = _this.config.mode || _this.config.view; // TODO: remove suite_7.0
        if (!_this.config.dateFormat) {
            if (_this.config.timePicker) {
                if (_this.config.timeFormat === 12) {
                    _this.config.dateFormat = "%d/%m/%y %h:%i %A";
                }
                else {
                    _this.config.dateFormat = "%d/%m/%y %H:%i";
                }
            }
            else {
                _this.config.dateFormat = "%d/%m/%y";
            }
        }
        if (_this.config.value) {
            _this._setSelected(_this.config.value);
        }
        if (_this.config.date) {
            _this._currentDate = date_1.DateHelper.toDateObject(_this.config.date, _this.config.dateFormat);
        }
        else if (_this._getSelected()) {
            _this._currentDate = date_1.DateHelper.copy(_this._getSelected());
        }
        else {
            _this._currentDate = new Date();
        }
        switch (_this.config.mode) {
            case "month":
                _this._currentViewMode = "month";
                break;
            case "year":
                _this._currentViewMode = "year";
                break;
            case "timepicker":
                _this._currentViewMode = _this.config.timePicker ? "timepicker" : "calendar";
                break;
            default:
                _this._currentViewMode = "calendar";
        }
        _this._initHandlers();
        if (_this.config.timePicker) {
            _this._timepicker = new ts_timepicker_1.Timepicker(null, {
                timeFormat: _this.config.timeFormat,
                controls: true,
            });
            var initTime = _this._getSelected() || new Date();
            _this._timepicker.setValue(initTime);
            _this._time = _this._timepicker.getValue();
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterClose, function () {
                _this._timepicker.setValue(_this._time);
                _this.showDate(null, "calendar");
            });
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterApply, function () {
                var _a = _this._timepicker.getValue(true), hour = _a.hour, minute = _a.minute, AM = _a.AM;
                var oldDate = _this._getSelected();
                var newDate = date_1.DateHelper.withHoursAndMinutes(_this._getSelected() || new Date(), hour, minute, AM);
                if (_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                    _this._selected[_this._selected.length - 1] = newDate;
                    _this.events.fire(types_1.CalendarEvents.change, [newDate, oldDate, true]);
                }
                _this._time = _this._timepicker.getValue();
                _this.showDate(null, "calendar");
            });
        }
        var render = function () { return _this._draw(); };
        _this.mount(container, (0, dom_1.create)({ render: render }));
        return _this;
    }
    Calendar.prototype.setValue = function (value) {
        if (!value || (value instanceof Array && value.length === 0)) {
            return false;
        }
        var currentDate = value instanceof Array ? value[0] : value;
        var date = date_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        var oldDate = date_1.DateHelper.copy(this._getSelected());
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, [date, oldDate, false])) {
            return false;
        }
        this._selected = [];
        this._setSelected(value);
        if (this._timepicker) {
            this._timepicker.setValue(date);
            this._time = this._timepicker.getValue();
        }
        this.showDate(this._getSelected());
        this.events.fire(types_1.CalendarEvents.change, [date, oldDate, false]);
        this.paint();
        return true;
    };
    Calendar.prototype.getValue = function (asDateObject) {
        var _this = this;
        if (asDateObject === void 0) { asDateObject = false; }
        if (!this._selected[0]) {
            return "";
        }
        if (this.config.range) {
            return asDateObject
                ? this._selected.map(function (date) { return date_1.DateHelper.copy(date); })
                : this._selected.map(function (date) { return (0, date_1.getFormattedDate)(_this.config.dateFormat, date); });
        }
        return asDateObject
            ? date_1.DateHelper.copy(this._selected[0])
            : (0, date_1.getFormattedDate)(this.config.dateFormat, this._selected[0]);
    };
    Calendar.prototype.getCurrentMode = function () {
        return this._currentViewMode;
    };
    Calendar.prototype.showDate = function (date, mode) {
        if (date) {
            this._currentDate = date_1.DateHelper.copy(date);
        }
        if (mode) {
            this._currentViewMode = mode;
        }
        this.paint();
    };
    Calendar.prototype.destructor = function () {
        this._linkedCalendar && this._unlink();
        this._timepicker && this._timepicker.destructor();
        this.events && this.events.clear();
        this.config = this.events = null;
        this._uid = this._selected = this._currentDate = this._currentViewMode = this._handlers = this._timepicker = this._time = null;
        this.unmount();
    };
    Calendar.prototype.clear = function () {
        var oldDate = this.getValue(true);
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, ["", oldDate, false]))
            return;
        if (this.config.timePicker) {
            this._timepicker.clear();
            this._time = this._timepicker.getValue();
        }
        this._selected = [];
        this.showDate(null, this.config.mode);
        this.events.fire(types_1.CalendarEvents.change, [this.getValue(true), oldDate, false, "clear"]);
    };
    Calendar.prototype.link = function (targetCalendar) {
        var _this = this;
        if (this._linkedCalendar) {
            this._unlink();
        }
        this._linkedCalendar = targetCalendar;
        var rawLowerDate = this.getValue(true);
        var rawUpperDate = targetCalendar.getValue(true);
        var lowerDate = rawLowerDate && date_1.DateHelper.dayStart(rawLowerDate);
        var upperDate = rawUpperDate && date_1.DateHelper.dayStart(rawUpperDate);
        var getRangeClass = function (date) {
            if (date_1.DateHelper.isSameDay(upperDate, lowerDate)) {
                return null;
            }
            var positionInRange = "dhx_calendar-day--in-range";
            if (date_1.DateHelper.isSameDay(date, lowerDate)) {
                positionInRange += " dhx_calendar-day--first-date";
            }
            if (date_1.DateHelper.isSameDay(date, upperDate)) {
                positionInRange += " dhx_calendar-day--last-date";
            }
            return positionInRange;
        };
        var rangeMark = function (date) {
            if (lowerDate && upperDate) {
                return date >= lowerDate && date <= upperDate && getRangeClass(date);
            }
        };
        if (!this.config.$rangeMark || !this._linkedCalendar.config.$rangeMark) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = rangeMark;
        }
        if (!this.config.disabledDates || !this._linkedCalendar.config.disabledDates) {
            this.config.disabledDates = function (date) {
                if (upperDate) {
                    return date > upperDate;
                }
            };
            this._linkedCalendar.config.disabledDates = function (date) {
                if (lowerDate) {
                    return date < lowerDate;
                }
            };
        }
        this.config.thisMonthOnly = true;
        targetCalendar.config.thisMonthOnly = true;
        this.events.on(types_1.CalendarEvents.change, function (date) {
            lowerDate = date ? date_1.DateHelper.dayStart(date) : null;
            _this._linkedCalendar.paint();
        }, "link");
        this._linkedCalendar.events.on(types_1.CalendarEvents.change, function (date) {
            upperDate = date ? date_1.DateHelper.dayStart(date) : null;
            _this.paint();
        }, "link");
        this._linkedCalendar.paint();
        this.paint();
    };
    Calendar.prototype._unlink = function () {
        if (this._linkedCalendar) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = null;
            this.config.disabledDates = this._linkedCalendar.config.disabledDates = null;
            this.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.paint();
            this._linkedCalendar = null;
        }
    };
    Calendar.prototype._setSelected = function (value) {
        var _this = this;
        var currentDate = value instanceof Array ? value[0] : value;
        var date = date_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        if (value instanceof Array && this.config.range) {
            var filterDate_1 = [];
            value.forEach(function (element, index) {
                if (index < 2) {
                    filterDate_1.push(date_1.DateHelper.toDateObject(element, _this.config.dateFormat));
                }
            });
            if (filterDate_1.length === 2 && filterDate_1[0] < filterDate_1[1]) {
                filterDate_1.forEach(function (element) { return _this._selected.push(element); });
            }
            else {
                this._selected[0] = filterDate_1[0];
            }
        }
        else {
            this._selected[0] = date;
        }
    };
    Calendar.prototype._getSelected = function () {
        return this._selected[this._selected.length - 1];
    };
    Calendar.prototype._draw = function () {
        switch (this._currentViewMode) {
            case "calendar":
                this.events.fire(types_1.CalendarEvents.modeChange, ["calendar"]);
                return this._drawCalendar();
            case "month":
                this.events.fire(types_1.CalendarEvents.modeChange, ["month"]);
                return this._drawMonthSelector();
            case "year":
                this.events.fire(types_1.CalendarEvents.modeChange, ["year"]);
                return this._drawYearSelector();
            case "timepicker":
                this.events.fire(types_1.CalendarEvents.modeChange, ["timepicker"]);
                return this._drawTimepicker();
        }
    };
    Calendar.prototype._initHandlers = function () {
        var _this = this;
        var ie_key_map = {
            Up: "ArrowUp",
            Down: "ArrowDown",
            Right: "ArrowRight",
            Left: "ArrowLeft",
            Esc: "Escape",
            Spacebar: "Space",
        };
        var getKey = function (e) {
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) {
                key = String.fromCharCode(e.which);
            }
            else {
                var keyName = e.which === 32 ? e.code : e.key;
                key = (0, html_1.isIE)() ? ie_key_map[keyName] || keyName : keyName;
            }
            return key;
        };
        var getVerticalRange = function (decrease) {
            if (decrease === void 0) { decrease = false; }
            var range = 0;
            switch (_this._currentViewMode) {
                case "calendar":
                    range = decrease ? -7 : 7;
                    break;
                case "month":
                    range = decrease ? -4 : 4;
                    break;
                case "year":
                    range = decrease ? -4 : 4;
            }
            return range;
        };
        this._handlers = {
            onkeydown: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    switch (getKey(_e)) {
                        case "Enter":
                            _this._selectDate(_e, vn);
                            break;
                        case "ArrowLeft":
                            _this._moveBrowseFocus(_e, vn, -1);
                            break;
                        case "ArrowRight":
                            _this._moveBrowseFocus(_e, vn, 1);
                            break;
                        case "ArrowUp":
                            _this._moveBrowseFocus(_e, vn, getVerticalRange(true));
                            break;
                        case "ArrowDown":
                            _this._moveBrowseFocus(_e, vn, getVerticalRange());
                            break;
                    }
                },
            },
            onclick: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    _this._selectDate(_e, vn);
                },
                ".dhx_calendar-action__cancel": function () {
                    _this.showDate(_this._getSelected(), "calendar");
                    _this.events.fire(types_1.CalendarEvents.cancelClick, []);
                },
                ".dhx_calendar-action__show-month": function () { return _this.showDate(null, "month"); },
                ".dhx_calendar-action__show-year": function () { return _this.showDate(null, "year"); },
                ".dhx_calendar-action__next": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = date_1.DateHelper.addMonth(_this._currentDate, 1);
                            break;
                        case "month":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, 1);
                            break;
                        case "year":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, 12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__prev": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = date_1.DateHelper.addMonth(_this._currentDate, -1);
                            break;
                        case "month":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, -1);
                            break;
                        case "year":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, -12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__show-timepicker": function () {
                    _this._currentViewMode = "timepicker";
                    _this.paint();
                },
            },
            onmouseover: {
                ".dhx_calendar-day": function (event, node) {
                    _this.events.fire(types_1.CalendarEvents.dateMouseOver, [new Date(node.attrs._date), event]);
                    _this.events.fire(types_1.CalendarEvents.dateHover, [new Date(node.attrs._date), event]); // TODO: remove suite_7.0
                },
            },
        };
    };
    Calendar.prototype._getData = function (date) {
        var _this = this;
        this._isSelectedInCurrentRange = false;
        var firstDay;
        switch (this.config.weekStart) {
            case "saturday":
                firstDay = -1;
                break;
            case "monday":
                firstDay = 1;
                break;
            default:
                firstDay = 0;
        }
        var first = date_1.DateHelper.weekStart(date_1.DateHelper.monthStart(date), firstDay);
        var data = [];
        var weeksCount = 6;
        var currentDate = first;
        while (weeksCount--) {
            var currentWeek = date_1.DateHelper.getWeekNumber(currentDate);
            var disabledDays = 0;
            var daysCount = 7;
            var days = [];
            var _loop_1 = function () {
                var isDateWeekEnd = date_1.DateHelper.isWeekEnd(currentDate);
                var isCurrentMonth = date.getMonth() === currentDate.getMonth();
                var isBlocked = this_1.config.disabledDates && this_1.config.disabledDates(currentDate);
                var css = [];
                if (this_1.config.range && this_1._selected[0] && this_1._selected[1]) {
                    var getRangeClass_1 = function () {
                        if (date_1.DateHelper.isSameDay(_this._selected[0], _this._selected[1])) {
                            return null;
                        }
                        return "dhx_calendar-day--in-range";
                    };
                    var rangeMark = function () {
                        if (_this._selected[0] && _this._selected[1]) {
                            var firstDate = date_1.DateHelper.dayStart(_this._selected[0]);
                            var lastDate = date_1.DateHelper.dayStart(_this._selected[1]);
                            return currentDate >= firstDate && currentDate <= lastDate && getRangeClass_1();
                        }
                    };
                    this_1.config.$rangeMark = rangeMark;
                }
                if (isDateWeekEnd) {
                    css.push("dhx_calendar-day--weekend");
                }
                if (!isCurrentMonth) {
                    if (this_1.config.thisMonthOnly) {
                        disabledDays++;
                        css.push("dhx_calendar-day--hidden");
                    }
                    else {
                        css.push("dhx_calendar-day--muffled");
                    }
                }
                if (this_1.config.mark) {
                    var markedCss = this_1.config.mark(currentDate);
                    if (markedCss) {
                        css.push(markedCss);
                    }
                }
                if (this_1.config.$rangeMark) {
                    var rangeMark = this_1.config.$rangeMark(currentDate);
                    if (rangeMark) {
                        css.push(rangeMark);
                    }
                }
                if (isBlocked) {
                    if (isDateWeekEnd) {
                        css.push("dhx_calendar-day--weekend-disabled");
                    }
                    else {
                        css.push("dhx_calendar-day--disabled");
                    }
                }
                this_1._selected.forEach(function (selected, index) {
                    if (selected && date_1.DateHelper.isSameDay(selected, currentDate)) {
                        _this._isSelectedInCurrentRange = true;
                        var dayCss = "dhx_calendar-day--selected";
                        if (_this.config.range) {
                            dayCss += " dhx_calendar-day--selected-".concat(index === 0 ? "first " : "last");
                        }
                        css.push(dayCss);
                    }
                });
                days.push({
                    date: currentDate,
                    day: currentDate.getDate(),
                    css: css.join(" "),
                });
                currentDate = date_1.DateHelper.addDay(currentDate);
            };
            var this_1 = this;
            while (daysCount--) {
                _loop_1();
            }
            data.push({
                weekNumber: currentWeek,
                days: days,
                disabledWeekNumber: disabledDays === 7,
            });
        }
        return data;
    };
    Calendar.prototype._drawCalendar = function () {
        var _this = this;
        var date = this._currentDate;
        var _a = this.config, weekStart = _a.weekStart, thisMonthOnly = _a.thisMonthOnly, css = _a.css, timePicker = _a.timePicker, width = _a.width;
        var weekDays;
        switch (weekStart) {
            case "saturday":
                weekDays = __spreadArray([date_1.locale.daysShort[6]], date_1.locale.daysShort.slice(0, -1), true);
                break;
            case "monday":
                weekDays = __spreadArray(__spreadArray([], date_1.locale.daysShort.slice(1), true), [date_1.locale.daysShort[0]], false);
                break;
            default:
                weekDays = date_1.locale.daysShort;
        }
        var weekDaysHeader = weekDays.map(function (day) { return (0, dom_1.el)(".dhx_calendar-weekday", day); });
        var data = this._getData(date);
        var isFirstItem = true;
        var selectedDate = this._getSelected();
        var isDateSelected = function (date) {
            return date && selectedDate && date.getTime() === selectedDate.getTime();
        };
        var getCellAriaAttrs = function (item) {
            var attrs = {
                role: "button",
                tabindex: -1,
                "aria-pressed": "false",
            };
            if (item) {
                if (_this._isSelectedInCurrentRange) {
                    // it is correct that conditions are separated
                    if (isDateSelected(item.date)) {
                        attrs["tabindex"] = 0;
                        attrs["aria-pressed"] = "true";
                    }
                }
                else if (isFirstItem) {
                    attrs["tabindex"] = 0;
                }
                isFirstItem = false;
            }
            return attrs;
        };
        var content = [];
        var weekNumbers = [];
        var weekNumbersWrapper;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var week = data_1[_i];
            var weekRow = week.days.map(function (item) {
                return (0, dom_1.el)("div.dhx_calendar-day", __assign({ class: item.css, _date: item.date }, getCellAriaAttrs(item)), item.day);
            });
            if (this.config.weekNumbers && !(week.disabledWeekNumber && thisMonthOnly)) {
                weekNumbers.push((0, dom_1.el)("div", {
                    class: "dhx_calendar-week-number",
                }, week.weekNumber));
            }
            content = content.concat(weekRow);
        }
        if (this.config.weekNumbers) {
            weekNumbersWrapper = (0, dom_1.el)(".dhx_calendar__week-numbers", weekNumbers);
        }
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return (0, dom_1.el)("div", __assign({ class: widgetClass, style: {
                width: this.config.weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            } }, this._handlers), [
            (0, dom_1.el)(".dhx_calendar__wrapper", [
                this._drawHeader((0, dom_1.el)("button.dhx_calendar-action__show-month.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                    "aria-live": "polite",
                    type: "button",
                }, date_1.locale.months[date.getMonth()] + " " + date.getFullYear())),
                this.config.weekNumbers &&
                    (0, dom_1.el)(".dhx_calendar__dates-wrapper", [
                        (0, dom_1.el)(".dhx_calendar__weekdays", weekDaysHeader),
                        (0, dom_1.el)(".dhx_calendar__days", content),
                        weekNumbersWrapper,
                    ]),
                !this.config.weekNumbers && (0, dom_1.el)(".dhx_calendar__weekdays", weekDaysHeader),
                !this.config.weekNumbers && (0, dom_1.el)(".dhx_calendar__days", content),
                timePicker
                    ? (0, dom_1.el)(".dhx_timepicker__actions", [
                        (0, dom_1.el)("button.dhx_calendar__timepicker-button." +
                            "dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__show-timepicker", { type: "button" }, [
                            (0, dom_1.el)("span.dhx_button__icon.dxi.dxi-clock-outline"),
                            (0, dom_1.el)("span.dhx_button__text", this._time),
                        ]),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawMonthSelector = function () {
        var date = this._currentDate;
        var currentMonth = date.getMonth();
        var currentYear = this._getSelected() ? this._getSelected().getFullYear() : null;
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        var isFirstItem = true;
        var isCurrentYear = currentYear === date.getFullYear();
        var isMonthSelected = function (i) { return isCurrentYear && currentMonth === i; };
        var getCellAriaAttrs = function (item, i) {
            var attrs = {
                role: "button",
                tabindex: -1,
                "aria-pressed": "false",
            };
            if (item) {
                if (isCurrentYear) {
                    // it is correct that conditions are separated
                    if (isMonthSelected(i)) {
                        attrs["tabindex"] = 0;
                        attrs["aria-pressed"] = "true";
                    }
                }
                else if (isFirstItem) {
                    attrs["tabindex"] = 0;
                }
                isFirstItem = false;
            }
            return attrs;
        };
        return (0, dom_1.el)("div", __assign({ class: widgetClass, style: {
                width: weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            } }, this._handlers), [
            (0, dom_1.el)(".dhx_calendar__wrapper", [
                this._drawHeader((0, dom_1.el)("button.dhx_calendar-action__show-year.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                    "aria-live": "polite",
                    type: "button",
                }, date.getFullYear())),
                (0, dom_1.el)(".dhx_calendar__months", date_1.locale.monthsShort.map(function (item, i) {
                    return (0, dom_1.el)("div", __assign(__assign({ class: "dhx_calendar-month" +
                            (isMonthSelected(i) ? " dhx_calendar-month--selected" : "") }, getCellAriaAttrs(item, i)), { _date: i }), item);
                })),
                mode !== "month"
                    ? (0, dom_1.el)(".dhx_calendar__actions", [
                        (0, dom_1.el)("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", { type: "button" }, date_1.locale.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawYearSelector = function () {
        var _this = this;
        var date = this._currentDate;
        var yearsDiapason = date_1.DateHelper.getTwelweYears(date);
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        var isFirstItem = true;
        var isSelectedYearInRange = this._getSelected() && yearsDiapason.includes(this._getSelected().getFullYear());
        var isYearSelected = function (item) { return _this._getSelected() && item === _this._getSelected().getFullYear(); };
        var getCellAriaAttrs = function (item) {
            var attrs = {
                role: "button",
                tabindex: -1,
                "aria-pressed": "false",
            };
            if (item) {
                if (isSelectedYearInRange) {
                    // it is correct that conditions are separated
                    if (isYearSelected(item)) {
                        attrs["tabindex"] = 0;
                        attrs["aria-pressed"] = "true";
                    }
                }
                else if (isFirstItem) {
                    attrs["tabindex"] = 0;
                }
                isFirstItem = false;
            }
            return attrs;
        };
        return (0, dom_1.el)("div", __assign({ class: widgetClass, style: {
                width: weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            } }, this._handlers), [
            (0, dom_1.el)(".dhx_calendar__wrapper", [
                this._drawHeader((0, dom_1.el)("button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                    "aria-live": "polite",
                    type: "button",
                }, yearsDiapason[0] + "-" + yearsDiapason[yearsDiapason.length - 1])),
                (0, dom_1.el)(".dhx_calendar__years", yearsDiapason.map(function (item) {
                    return (0, dom_1.el)("div", __assign({ class: "dhx_calendar-year" +
                            (isYearSelected(item) ? " dhx_calendar-year--selected" : ""), _date: item }, getCellAriaAttrs(item)), item);
                })),
                mode !== "year" && mode !== "month"
                    ? (0, dom_1.el)(".dhx_calendar__actions", [
                        (0, dom_1.el)("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", { type: "button" }, date_1.locale.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawHeader = function (actionContent) {
        return (0, dom_1.el)(".dhx_calendar__navigation", [
            (0, dom_1.el)("button.dhx_calendar-navigation__button.dhx_calendar-action__prev" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", {
                "aria-label": "prev",
                type: "button",
            }, [(0, dom_1.el)(".dhx_button__icon.dxi.dxi-chevron-left")]),
            actionContent,
            (0, dom_1.el)("button.dhx_calendar-navigation__button.dhx_calendar-action__next" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", {
                "aria-label": "next",
                type: "button",
            }, [(0, dom_1.el)(".dhx_button__icon.dxi.dxi-chevron-right")]),
        ]);
    };
    Calendar.prototype._drawTimepicker = function () {
        var _a = this.config, css = _a.css, weekNumbers = _a.weekNumbers, width = _a.width;
        return (0, dom_1.el)(".dhx_widget.dhx-calendar", {
            class: css ? " " + css : "",
            style: {
                width: weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            },
        }, [(0, dom_1.inject)(this._timepicker.getRootView())]);
    };
    Calendar.prototype._selectDate = function (_e, vn) {
        var date = vn.attrs._date;
        var oldDate = date_1.DateHelper.copy(this._getSelected());
        switch (this._currentViewMode) {
            case "calendar": {
                var mergedDate = this.config.timePicker
                    ? date_1.DateHelper.mergeHoursAndMinutes(date, this._getSelected() || this._currentDate)
                    : date;
                if (!this.events.fire(types_1.CalendarEvents.beforeChange, [mergedDate, oldDate, true])) {
                    return;
                }
                if (this.config.range && this._selected.length === 1 && this._selected[0] < mergedDate) {
                    this._selected.push(mergedDate);
                }
                else {
                    this._selected = [];
                    this._selected[0] = mergedDate;
                }
                vn.el.blur();
                this.showDate(this._getSelected());
                this.events.fire(types_1.CalendarEvents.change, [date, oldDate, true]);
                break;
            }
            case "month":
                if (this.config.mode !== "month") {
                    date_1.DateHelper.setMonth(this._currentDate, date);
                    this.showDate(null, "calendar");
                    this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                }
                else {
                    var newDate = date_1.DateHelper.fromYearAndMonth(this._currentDate.getFullYear() || this._getSelected().getFullYear(), date);
                    if (!this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                        return;
                    }
                    this._currentDate = newDate;
                    this._selected[0] = newDate;
                    this.events.fire(types_1.CalendarEvents.change, [this._getSelected(), oldDate, true]);
                    this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                    this.paint();
                }
                break;
            case "year":
                if (this.config.mode !== "year") {
                    date_1.DateHelper.setYear(this._currentDate, date);
                    this.showDate(null, "month");
                    this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                }
                else {
                    var newDate = date_1.DateHelper.fromYear(date);
                    if (!this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                        return;
                    }
                    this._currentDate = newDate;
                    this._selected[0] = newDate;
                    this.events.fire(types_1.CalendarEvents.change, [this._getSelected(), oldDate, true]);
                    this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                    this.paint();
                }
        }
    };
    Calendar.prototype._moveBrowseFocus = function (e, node, range) {
        if (node) {
            var nextNode = node.parent.body[node.idx + range];
            if (nextNode) {
                var $nextNode = nextNode.el;
                if ($nextNode) {
                    e.target.tabIndex = -1;
                    $nextNode.tabIndex = 0;
                    $nextNode.focus({ preventScroll: true });
                }
            }
        }
    };
    return Calendar;
}(view_1.View));
exports.Calendar = Calendar;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timepicker = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(3);
var view_1 = __webpack_require__(4);
var ts_layout_1 = __webpack_require__(17);
var ts_slider_1 = __webpack_require__(67);
var en_1 = __webpack_require__(68);
var helper_1 = __webpack_require__(113);
var types_1 = __webpack_require__(54);
var html_1 = __webpack_require__(2);
function validate(value, max) {
    if (isNaN(value)) {
        return 0;
    }
    return Math.min(max, Math.max(0, value));
}
var Timepicker = /** @class */ (function (_super) {
    __extends(Timepicker, _super);
    function Timepicker(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, (0, core_1.extend)({
            timeFormat: 24,
            controls: false,
            valueFormat: "string",
            actions: false, // TODO: remove suite_7.0
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._time = {
            hour: 0,
            minute: 0,
            AM: true,
        };
        if (_this.config.timeFormat === 12) {
            _this._time.hour = 12;
        }
        _this.config.controls = _this.config.controls || _this.config.actions; // TODO: remove suite_7.0
        _this.config.value && _this._setValue(_this.config.value);
        _this._initUI(container);
        _this._initHandlers();
        _this._initEvents();
        return _this;
    }
    Timepicker.prototype.getValue = function (asObject) {
        if (this.config.timeFormat === 12)
            this._time.hour = this._time.hour % 12 || 12;
        return this._getValue(this._time, asObject);
    };
    Timepicker.prototype.setValue = function (value) {
        this._setValue(value);
        this._hoursSlider.setValue(this._time.hour);
        this._minutesSlider.setValue(this._time.minute);
        this._inputsView.paint();
    };
    Timepicker.prototype.clear = function () {
        if (this.config.timeFormat === 24) {
            this.setValue("00:00");
        }
        else {
            this.setValue("12:00AM");
        }
    };
    Timepicker.prototype.destructor = function () {
        this._minutesSlider && this._minutesSlider.destructor();
        this._hoursSlider && this._hoursSlider.destructor();
        this.events && this.events.clear();
        this.layout && this.layout.destructor();
        this.config = this.events = null;
        this._handlers = this._time = this._inputsView = this._minutesSlider = this._hoursSlider = null;
        this.unmount();
    };
    Timepicker.prototype.getRootView = function () {
        return this.layout.getRootView();
    };
    Timepicker.prototype._getValue = function (timeObj, asObj) {
        var hour = timeObj.hour, minute = timeObj.minute, AM = timeObj.AM;
        if (asObj) {
            var obj = { hour: hour, minute: minute };
            if (this.config.timeFormat === 12)
                obj.AM = AM;
            return obj;
        }
        return ((hour < 10 ? "0" + hour : hour) +
            ":" +
            (minute < 10 ? "0" + minute : minute) +
            (this.config.timeFormat === 12 ? (AM ? "AM" : "PM") : ""));
    };
    Timepicker.prototype._setValue = function (value) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var m = 0;
        var h = 0;
        var isPM;
        if (typeof value === "number") {
            value = new Date(value);
        }
        if (value instanceof Date) {
            m = value.getMinutes();
            h = value.getHours();
        }
        else if (Array.isArray(value)) {
            h = validate(value[0], 23);
            m = validate(value[1], 59);
            if (value[2] && value[2].toLowerCase() === "pm") {
                isPM = true;
            }
        }
        else if (typeof value === "string") {
            var matches = value.match(/\d+/g);
            h = validate(+matches[0], 23);
            m = validate(+matches[1], 59);
            if (value.toLowerCase().includes("pm")) {
                isPM = true;
            }
        }
        else if (typeof value === "object" &&
            value.hasOwnProperty("hour") &&
            value.hasOwnProperty("minute")) {
            h = value.hour;
            m = value.minute;
            isPM = !value.AM;
        }
        if (isPM && h < 12) {
            h += 12;
        }
        if (this.config.timeFormat === 12 && !(0, helper_1.isTimeCheck)(value) && h >= 12)
            isPM = true;
        return (this._time = {
            hour: h,
            minute: m,
            AM: !isPM,
        });
    };
    Timepicker.prototype._initUI = function (container) {
        var _this = this;
        var layoutConfig = {
            gravity: false,
            css: "dhx_widget dhx_timepicker " +
                (this.config.css ? this.config.css : "") +
                (this.config.controls ? " dhx_timepicker--with-controls" : ""),
            rows: [
                {
                    id: "timepicker",
                    css: "dhx_timepicker__inputs",
                },
                {
                    id: "hour-slider",
                    css: "dhx_timepicker__hour",
                },
                {
                    id: "minute-slider",
                    css: "dhx_timepicker__minute",
                },
            ],
        };
        if (this.config.controls) {
            layoutConfig.rows.unshift({
                id: "close-action",
                css: "dhx_timepicker__close",
            });
            layoutConfig.rows.push({
                id: "save-action",
                css: "dhx_timepicker__save",
            });
        }
        var layout = (this.layout = new ts_layout_1.Layout(container, layoutConfig));
        var timepicker = (0, dom_1.create)({
            render: function () { return _this._draw(); },
        });
        var inputsView = (this._inputsView = (0, view_1.toViewLike)(timepicker));
        var mSlider = (this._minutesSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 59,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.minutes,
            value: this.config.value ? this._time.minute : 0,
        }));
        var hSlider = (this._hoursSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 23,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.hours,
            value: this.config.value ? (this._time.hour === 12 && this._time.AM ? 0 : this._time.hour) : 0,
        }));
        layout.getCell("timepicker").attach(inputsView);
        layout.getCell("hour-slider").attach(hSlider);
        layout.getCell("minute-slider").attach(mSlider);
        if (this.config.controls) {
            var save = function () {
                return (0, dom_1.el)("button.dhx_timepicker__button-save.dhx_button.dhx_button--view_flat.dhx_button--color_primary.dhx_button--size_small.dhx_button--circle.dhx_button--width_full", {
                    onclick: _this._outerHandlers.save,
                    type: "button",
                }, en_1.default.save);
            };
            var close_1 = function () {
                return (0, dom_1.el)("button.dhx_timepicker__button-close.dhx_button.dhx_button--view_link.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary.dhx_button--icon.dhx_button--circle", {
                    _ref: "close",
                    onclick: _this._outerHandlers.close,
                    type: "button",
                    "aria-label": "close timepicker",
                }, [(0, dom_1.el)("span.dhx_button__icon.dxi.dxi-close")]);
            };
            layout.getCell("save-action").attach(save);
            layout.getCell("close-action").attach(close_1);
        }
    };
    Timepicker.prototype._initHandlers = function () {
        var _this = this;
        var setMinutes = function (element) {
            var min = validate(parseInt(element.value, 10), 59);
            element.value = min.toString();
            _this._minutesSlider.setValue(min);
        };
        var setHours = function (element) {
            var hour = validate(parseInt(element.value, 10), 23);
            element.value = hour.toString();
            _this._hoursSlider.setValue(hour);
        };
        this._handlers = {
            onchange: {
                ".dhx_timepicker-input--hour": function (e) { return setHours(e.target); },
                ".dhx_timepicker-input--minutes": function (e) { return setMinutes(e.target); },
            },
            oninput: {
                ".dhx_timepicker-input--hour": function (e) {
                    if (!(0, html_1.isSafari)() && !(0, html_1.isFirefox)())
                        return;
                    setHours(e.target);
                },
                ".dhx_timepicker-input--minutes": function (e) {
                    if (!(0, html_1.isSafari)() && !(0, html_1.isFirefox)())
                        return;
                    setMinutes(e.target);
                },
            },
        };
        this._outerHandlers = {
            close: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeClose, [_this.getValue(_this._isTimeObj())])) {
                    return;
                }
                _this.events.fire(types_1.TimepickerEvents.afterClose, [_this.getValue(_this._isTimeObj())]);
                _this.events.fire(types_1.TimepickerEvents.close, []); // TODO: remove suite_7.0
            },
            save: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeApply, [_this.getValue(_this._isTimeObj())]))
                    return;
                _this.events.fire(types_1.TimepickerEvents.afterApply, [_this.getValue(_this._isTimeObj())]);
                _this.events.fire(types_1.TimepickerEvents.apply, [_this.getValue()]); // TODO: remove suite_7.0
                _this.events.fire(types_1.TimepickerEvents.save, [_this._time]); // TODO: remove suite_7.0
            },
        };
    };
    Timepicker.prototype._initEvents = function () {
        var _this = this;
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.beforeChange, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            var timeObj = __assign({}, _this._time);
            if (_this.config.timeFormat === 12) {
                timeObj.AM = value < 12;
                timeObj.hour = value % 12 || 12;
            }
            else {
                timeObj.hour = value;
            }
            var asObject = _this._isTimeObj();
            return _this.events.fire(types_1.TimepickerEvents.beforeChange, [_this._getValue(timeObj, asObject)]);
        });
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            if (_this.config.timeFormat === 12) {
                _this._time.AM = value < 12;
                _this._time.hour = value % 12 || 12;
            }
            else {
                _this._time.hour = value;
            }
            var asObject = _this._isTimeObj();
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue(asObject)]);
            _this._inputsView.paint();
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.beforeChange, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            var timeObj = __assign(__assign({}, _this._time), { minute: value });
            var asObject = _this._isTimeObj();
            return _this.events.fire(types_1.TimepickerEvents.beforeChange, [_this._getValue(timeObj, asObject)]);
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            _this._time.minute = value;
            var asObject = _this._isTimeObj();
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue(asObject)]);
            _this._inputsView.paint();
        });
    };
    Timepicker.prototype._draw = function () {
        this._minutesSlider.config.label = en_1.default.minutes;
        this._hoursSlider.config.label = en_1.default.hours;
        return (0, dom_1.el)(".dhx_timepicker-inputs", __assign({}, this._handlers), [
            (0, dom_1.el)("input.dhx_timepicker-input.dhx_timepicker-input--hour", {
                _key: "hour",
                _ref: "hour",
                value: this.getValue(true).hour.toString().length > 1
                    ? this.getValue(true).hour
                    : "0" + this.getValue(true).hour,
                "aria-label": "hours",
            }),
            (0, dom_1.el)("span.dhx_timepicker-delimer", ":"),
            (0, dom_1.el)("input.dhx_timepicker-input.dhx_timepicker-input--minutes", {
                _key: "minute",
                value: this.getValue(true).minute.toString().length > 1
                    ? this.getValue(true).minute
                    : "0" + this.getValue(true).minute,
                "aria-label": "minutes",
            }),
            this.config.timeFormat === 12
                ? (0, dom_1.el)(".dhx_timepicker-ampm", this._time.AM ? "AM" : "PM")
                : null,
        ]);
    };
    Timepicker.prototype._isTimeObj = function () {
        var _a;
        return ((_a = this.config.valueFormat) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "timeobject";
    };
    return Timepicker;
}(view_1.View));
exports.Timepicker = Timepicker;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarginSize = exports.getBlockRange = void 0;
function getBlockRange(block1, block2, isXLayout) {
    if (isXLayout === void 0) { isXLayout = true; }
    if (isXLayout) {
        return {
            min: block1.left + window.pageXOffset,
            max: block2.right + window.pageXOffset,
        };
    }
    return {
        min: block1.top + window.pageYOffset,
        max: block2.bottom + window.pageYOffset,
    };
}
exports.getBlockRange = getBlockRange;
function getMarginSize(config) {
    if (!config) {
        return 0;
    }
    if (config.type === "space" || config.type === "wide") {
        return 12;
    }
    return 0;
}
exports.getMarginSize = getMarginSize;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProLayout = void 0;
var Layout_1 = __webpack_require__(34);
var ProCell_1 = __webpack_require__(110);
var ProLayout = /** @class */ (function (_super) {
    __extends(ProLayout, _super);
    function ProLayout(parent, config) {
        return _super.call(this, parent, config) || this;
    }
    ProLayout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new ProLayout(this, cell);
        }
        else {
            view = new ProCell_1.ProCell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        if (cell.init) {
            cell.init(view, cell);
        }
        return view;
    };
    return ProLayout;
}(Layout_1.Layout));
exports.ProLayout = ProLayout;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProCell = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var ScrollView_1 = __webpack_require__(42);
var Cell_1 = __webpack_require__(51);
var ProCell = /** @class */ (function (_super) {
    __extends(ProCell, _super);
    function ProCell(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        _this.scrollView = new ScrollView_1.ScrollView(function () {
            return _this._getFirstRootView();
        });
        return _this;
    }
    ProCell.prototype._getFirstRootView = function (self) {
        if (self === void 0) { self = this; }
        return self.getParent() && self.getParent().getRootView()
            ? self.getParent().getRootView()
            : this._getFirstRootView(self.getParent());
    };
    ProCell.prototype.toVDOM = function (nodes) {
        var _a;
        var _b, _c;
        this._saveTheme();
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var isFieldset = this.config.$fieldset;
        var style = this._calculateStyle();
        var stylePadding = (0, core_1.isDefined)(this.config.padding)
            ? !isNaN(Number(this.config.padding))
                ? { padding: "".concat(this.config.padding, "px") }
                : { padding: this.config.padding }
            : "";
        var fullStyle = this.config.full || this.config.html ? style : __assign(__assign({}, style), stylePadding);
        var progressBar = this._checkProgress() ? this._getProgressBar() : null;
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = (0, dom_1.inject)(view);
                }
                // kids = [view];
                kids = view ? [this.scrollView.render(view)] : view || null;
            }
            else {
                // kids = nodes || null;
                kids = nodes ? this.scrollView.render([nodes]) : nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && this._getNextCell() && !this.config.collapsed
            ? (0, dom_1.el)(".dhx_layout-resizer." +
                (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign(__assign({}, this._resizerHandlers), { _ref: "resizer_" + this._uid }), [
                (0, dom_1.el)("span.dhx_layout-resizer__icon", {
                    class: "dxi " +
                        (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal"),
                }),
            ])
            : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var typeClass = "";
        var isParent = this.config.cols || this.config.rows;
        if (this.config.type && isParent) {
            switch (this.config.type) {
                case "line":
                    typeClass = " dhx_layout-line";
                    break;
                case "wide":
                    typeClass = " dhx_layout-wide";
                    break;
                case "space":
                    typeClass = " dhx_layout-space";
                    break;
                default:
                    break;
            }
        }
        var htmlContent = (0, dom_1.el)(".dhx_layout-cell-content", {
            _key: "".concat(this._uid, "_html"),
            style: stylePadding,
        }, [
            (0, dom_1.el)(".dhx_layout-cell-inner_html", {
                ".innerHTML": this.config.html,
            }),
        ]);
        var cellContent = isFieldset
            ? (0, dom_1.el)("fieldset.dhx_form-fieldset", {
                class: (this.config.$disabled && " dhx_form-fieldset--disabled") || "",
                style: stylePadding,
                disabled: this.config.$disabled,
            }, [
                (0, dom_1.el)("legend.dhx_form-fieldset-legend", {
                    class: "dhx_form-fieldset-legend--".concat(this.config.labelAlignment || "left"),
                }, this.config.label),
                (0, dom_1.el)(".dhx_layout-cell-content", {
                    class: this._getCss(false),
                }, [].concat(kids)),
            ])
            : this.config.full
                ? [
                    (0, dom_1.el)("div", {
                        tabindex: this.config.collapsable ? "0" : "-1",
                        class: "dhx_layout-cell-header" +
                            (this._isXDirection()
                                ? " dhx_layout-cell-header--col"
                                : " dhx_layout-cell-header--row") +
                            (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                            (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                            (((this.getParent() || {}).config || {}).isAccordion
                                ? " dhx_layout-cell-header--accordion"
                                : ""),
                        style: {
                            height: this.config.headerHeight,
                        },
                        onclick: this._handlers.toggle,
                        onkeydown: this._handlers.enterCollapse,
                    }, [
                        this.config.headerIcon &&
                            (0, dom_1.el)("span.dhx_layout-cell-header__icon", {
                                class: this.config.headerIcon,
                            }),
                        this.config.headerImage &&
                            (0, dom_1.el)(".dhx_layout-cell-header__image-wrapper", [
                                (0, dom_1.el)("img", {
                                    src: this.config.headerImage,
                                    class: "dhx_layout-cell-header__image",
                                }),
                            ]),
                        this.config.header && (0, dom_1.el)("h3.dhx_layout-cell-header__title", this.config.header),
                        this.config.collapsable
                            ? (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: this._getCollapseIcon(),
                            })
                            : (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: "dxi dxi-empty",
                            }),
                    ]),
                    !this.config.collapsed
                        ? (0, dom_1.el)("div", {
                            style: __assign(__assign({}, stylePadding), { height: "calc(100% - ".concat(this.config.headerHeight || 37, "px)") }),
                            class: this._getCss(true) +
                                " dhx_layout-cell-content" +
                                (this.config.type ? typeClass : ""),
                        }, this.config.html
                            ? [
                                (0, dom_1.el)("div", {
                                    ".innerHTML": this.config.html,
                                    class: "dhx_layout-cell dhx_layout-cell-inner_html",
                                }),
                            ]
                            : kids)
                        : null,
                ]
                : this.config.html &&
                    !(this.config.rows &&
                        this.config.cols &&
                        this.config.views)
                    ? [
                        !this.config.collapsed
                            ? this.scrollView && this.scrollView.config.enable
                                ? this.scrollView.render([htmlContent], this._uid)
                                : htmlContent
                            : null,
                    ]
                    : kids;
        var cell = (0, dom_1.el)("div", __assign(__assign((_a = { _key: this._uid, _ref: this._uid }, _a["aria-label"] = this.config.id ? "tab-content-" + this.config.id : null, _a["data-cell-id"] = (_b = this.config.id) !== null && _b !== void 0 ? _b : null, _a["data-dhx-theme"] = (_c = this._theme) !== null && _c !== void 0 ? _c : null, _a), handlers), { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizable" : "") +
                (this.config.type && !this.config.full ? typeClass : ""), style: isFieldset ? style : fullStyle }), cellContent || progressBar ? [].concat(cellContent, progressBar) : null);
        return resizer ? [].concat(cell, resizer) : cell;
    };
    return ProCell;
}(Cell_1.Cell));
exports.ProCell = ProCell;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(3);
var KeyManager_1 = __webpack_require__(15);
var view_1 = __webpack_require__(4);
var ts_popup_1 = __webpack_require__(12);
var types_1 = __webpack_require__(53);
var html_1 = __webpack_require__(2);
function normalizeValue(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function parseValue(value, min, max) {
    var values;
    if (value === undefined) {
        values = [];
    }
    else if (Array.isArray(value)) {
        values = value;
    }
    else if (typeof value === "string") {
        values = value.split(",").map(function (v) { return parseInt(v, 10); });
    }
    else {
        values = [value];
    }
    values[0] = values[0] === undefined ? min : normalizeValue(values[0], min, max);
    values[1] = values[1] === undefined ? max : normalizeValue(values[1], min, max);
    return values;
}
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(container, config) {
        var _this = _super.call(this, container, (0, core_1.extend)({
            mode: "horizontal",
            min: 0,
            max: 100,
            step: 1,
            tooltip: true,
        }, config)) || this;
        _this._disabled = false;
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove suite_7.0
        if (_this.config.thumbLabel !== undefined) {
            _this.config.tooltip = _this.config.thumbLabel; // TODO: remove suite_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove suite_7.0
        }
        _this.events = new events_1.EventSystem(_this);
        _this._axis = _this.config.mode === "horizontal" ? "clientX" : "clientY";
        _this._initStartPosition();
        _this._keyManager = new KeyManager_1.KeyManager(function () {
            var _a, _b;
            var activeEl = document.activeElement;
            var element = (_b = (_a = _this.getRootView().refs) === null || _a === void 0 ? void 0 : _a[_this._isExtraActive ? "extraRunner" : "runner"]) === null || _b === void 0 ? void 0 : _b.el;
            return activeEl === element;
        });
        _this._initHotkeys();
        var vNode = (0, dom_1.create)({
            render: function () { return _this._draw(); },
            hooks: {
                didMount: function () { return _this._calcSliderPosition(); },
                didRedraw: function () { return _this._calcSliderPosition(); },
            },
        });
        _this._initHandlers();
        _this.mount(container, vNode);
        return _this;
    }
    Slider.prototype.disable = function () {
        this._disabled = true;
        this.paint();
    };
    Slider.prototype.enable = function () {
        this._disabled = false;
        this.paint();
    };
    Slider.prototype.isDisabled = function () {
        return this._disabled;
    };
    Slider.prototype.focus = function (extra) {
        this.getRootView().refs[extra ? "extraRunner" : "runner"].el.focus();
    };
    Slider.prototype.blur = function () {
        this.getRootView().refs[this._isExtraActive ? "extraRunner" : "runner"].el.blur();
    };
    Slider.prototype.getValue = function () {
        var res;
        if (this.config.range) {
            var a = this._getValue(this._currentPosition);
            var b = this._getValue(this._extraCurrentPosition);
            res = a < b ? [a, b] : [b, a];
        }
        else {
            res = [this._getValue(this._currentPosition)];
        }
        return res;
    };
    Slider.prototype.setValue = function (value) {
        var old = this._getValue(this._currentPosition);
        if (Array.isArray(value) && value.length > 1) {
            var oldExtra = this._getValue(this._extraCurrentPosition);
            if (this.events.fire(types_1.SliderEvents.beforeChange, [value[0], old, false])) {
                this._setValue(value[0], false);
                this.events.fire(types_1.SliderEvents.change, [value[0], old, false]);
            }
            if (this.events.fire(types_1.SliderEvents.beforeChange, [value[1], oldExtra, true])) {
                this._setValue(value[1], true);
                this.events.fire(types_1.SliderEvents.change, [value[1], oldExtra, true]);
            }
        }
        else {
            value = parseFloat(value);
            if (!isNaN(value)) {
                if (this.events.fire(types_1.SliderEvents.beforeChange, [value, old, false])) {
                    this._setValue(value);
                    this.events.fire(types_1.SliderEvents.change, [value, old, false]);
                }
            }
            else {
                throw new Error("Wrong value type, for more info check documentation https://docs.dhtmlx.com/suite/slider__api__slider_setvalue_method.html");
            }
        }
        this.paint();
    };
    Slider.prototype.destructor = function () {
        this._keyManager && this._keyManager.destructor();
        document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip);
        this._tooltip = null;
        this.unmount();
    };
    Slider.prototype._calcSliderPosition = function () {
        var root = this.getRootView();
        if (!root) {
            return;
        }
        var tracker = root.refs.track.el;
        var rect = tracker.getBoundingClientRect();
        this._offsets = {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
        };
        this._length = this.config.mode === "horizontal" ? rect.width : rect.height;
    };
    Slider.prototype._initHotkeys = function () {
        var _this = this;
        var handlers = {
            arrowLeft: function (e) {
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowRight: function (e) {
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowUp: function (e) {
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowDown: function (e) {
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
        };
        for (var key in handlers) {
            this._keyManager.addHotKey(key, handlers[key]);
        }
    };
    Slider.prototype._move = function (value, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        if (this.config.inverse) {
            value = -value;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var oldValue = forExtra
            ? this._getValue(this._extraCurrentPosition)
            : this._getValue(this._currentPosition);
        var newValue = oldValue + value;
        if (newValue > max || newValue < min) {
            newValue = oldValue;
        }
        if (!this.events.fire(types_1.SliderEvents.beforeChange, [newValue, oldValue, forExtra]))
            return;
        this._setValue(oldValue + value, forExtra);
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, forExtra]);
        this.paint();
    };
    Slider.prototype._initStartPosition = function () {
        var _a = this.config, max = _a.max, min = _a.min, range = _a.range;
        var _b = parseValue(this.config.value, this.config.min, this.config.max), value = _b[0], extraValue = _b[1];
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((max - extraValue) / (max - min)) * 100;
        }
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((extraValue - min) / (max - min)) * 100;
        }
        if (this._isInverse()) {
            this._currentPosition = 100 - this._currentPosition;
            if (range) {
                this._extraCurrentPosition = 100 - this._extraCurrentPosition;
            }
        }
    };
    Slider.prototype._getValue = function (value) {
        if (this._isInverse()) {
            value = 100 - value;
        }
        var _a = this.config, min = _a.min, max = _a.max, step = _a.step;
        if (value === 100) {
            return max;
        }
        if (value === 0) {
            return min;
        }
        var val = (value * (max - min)) / 100;
        var remain = val % step;
        var rounder = remain >= step / 2 ? step : 0;
        var result = Number(min) + Number(val) - remain + rounder;
        return +result.toFixed(5);
    };
    Slider.prototype._setValue = function (val, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a = this.config, max = _a.max, min = _a.min;
        if (val > max || val < min) {
            return false;
        }
        var rawValue = ((val - min) / (max - min)) * 100;
        var newValue = this._isInverse() ? 100 - rawValue : rawValue;
        if (forExtra) {
            this._extraCurrentPosition = newValue;
        }
        else {
            this._currentPosition = newValue;
        }
    };
    Slider.prototype._initHandlers = function () {
        var _this = this;
        var sliderMove = function (e) {
            e.cancelable && e.preventDefault();
            var currentPosition = e.targetTouches ? e.targetTouches[0][_this._axis] : e[_this._axis];
            var x = ((currentPosition - _this._getBegining()) / _this._length) * 100;
            if (_this._findNewDirection) {
                if (Math.abs(_this._currentPosition - x) < 1) {
                    return;
                }
                if (x > _this._currentPosition) {
                    _this._possibleRange = [_this._currentPosition, 100];
                }
                else {
                    _this._possibleRange = [0, _this._currentPosition];
                }
                _this._findNewDirection = null;
            }
            if (_this._inSide(x)) {
                _this._updatePosition(x, _this._isExtraActive);
            }
            _this.paint();
        };
        var sliderEnd = function (e) {
            _this.events.fire(types_1.SliderEvents.mouseup, [e]);
            setTimeout(function () {
                _this._isMouseMoving = false;
                _this.paint();
            }, 4);
            if (!e.targetTouches) {
                document.removeEventListener("mouseup", sliderEnd);
                document.removeEventListener("mousemove", sliderMove);
            }
            else {
                document.removeEventListener("touchend", sliderEnd);
                document.removeEventListener("touchmove", sliderMove);
            }
        };
        var sliderStart = function (e) {
            if (_this._disabled || e.which === 3) {
                return;
            }
            _this.events.fire(types_1.SliderEvents.mousedown, [e]);
            _this._isMouseMoving = true;
            var active;
            if (e.target.classList.contains("dhx_slider__thumb--extra")) {
                _this._isExtraActive = true;
                active = _this._extraCurrentPosition;
            }
            else {
                _this._isExtraActive = false;
                active = _this._currentPosition;
            }
            _this._findNewDirection = null;
            // define possible range
            if (_this.config.range) {
                var _a = _this._currentPosition > _this._extraCurrentPosition
                    ? [_this._currentPosition, _this._extraCurrentPosition]
                    : [_this._extraCurrentPosition, _this._currentPosition], more = _a[0], less = _a[1];
                if (_this._currentPosition === _this._extraCurrentPosition) {
                    _this._findNewDirection = active;
                    _this._possibleRange = [0, 100];
                }
                else if (active < more) {
                    _this._possibleRange = [0, more];
                }
                else {
                    _this._possibleRange = [less, 100];
                }
            }
            else {
                _this._possibleRange = [0, 100];
            }
        };
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target, {
                    theme: e.target,
                });
            },
            onmousedown: function (e) {
                sliderStart(e);
                document.addEventListener("mousemove", sliderMove);
                document.addEventListener("mouseup", sliderEnd);
            },
            ontouchstart: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                sliderStart(e);
                document.addEventListener("touchmove", sliderMove, { passive: false });
                document.addEventListener("touchend", sliderEnd);
                _this.paint();
            },
            ontouchend: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                _this.paint();
            },
            onlabelClick: function () {
                var refs = _this.getRootView().refs;
                refs.runner.el.focus();
            },
            onclick: function (e) {
                if (_this._disabled || _this._isMouseMoving || e.which === 3) {
                    return;
                }
                var x = ((e[_this._axis] - _this._getBegining()) / _this._length) * 100;
                var refs = _this.getRootView().refs;
                if (_this.config.range) {
                    var dist = Math.abs(_this._currentPosition - x);
                    var extraDist = Math.abs(_this._extraCurrentPosition - x);
                    if (dist < extraDist) {
                        _this._updatePosition(x, false);
                        refs.runner.el.focus();
                    }
                    else {
                        _this._updatePosition(x, true);
                        refs.extraRunner.el.focus();
                    }
                }
                else {
                    _this._updatePosition(x, false);
                    refs.runner.el.focus();
                }
                _this.paint();
            },
            onmouseover: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = true;
                _this.paint();
            },
            onmouseout: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                _this.paint();
            },
            onfocus: function (e) {
                _this._setTooltip(e);
                _this._focusIn = true;
                _this.events.fire(types_1.SliderEvents.focus, []);
                _this.paint();
            },
            onblur: function (e) {
                _this._setTooltip(e);
                _this._focusIn = false;
                _this.events.fire(types_1.SliderEvents.blur, []);
                _this.paint();
            },
            onkeydown: function (e) {
                _this.events.fire(types_1.SliderEvents.keydown, [e]);
            },
        };
    };
    Slider.prototype._getBegining = function () {
        return this.config.mode === "horizontal"
            ? this._offsets.left - window.pageXOffset
            : this._offsets.top - window.pageYOffset;
    };
    Slider.prototype._inSide = function (x) {
        var range = this._possibleRange;
        if (x < range[0]) {
            this._updatePosition(range[0], this._isExtraActive);
            return false;
        }
        if (x > range[1]) {
            this._updatePosition(range[1], this._isExtraActive);
            return false;
        }
        return true;
    };
    Slider.prototype._updatePosition = function (x, extra) {
        if (extra === void 0) { extra = false; }
        if (x > 100) {
            x = 100;
        }
        if (x < 0) {
            x = 0;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var position = extra ? this._extraCurrentPosition : this._currentPosition;
        var oldValue = this._getValue(position);
        var newValue = this._getValue(x);
        if (oldValue === newValue ||
            !this.events.fire(types_1.SliderEvents.beforeChange, [newValue, oldValue, extra])) {
            return;
        }
        var rawValue = ((newValue - min) / (max - min)) * 100;
        var value = this._isInverse() ? 100 - rawValue : rawValue;
        if (extra) {
            this._extraCurrentPosition = value;
        }
        else {
            this._currentPosition = value;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, extra]);
    };
    Slider.prototype._getRunnerStyle = function (forExtra) {
        var _a;
        if (forExtra === void 0) { forExtra = false; }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        return _a = {},
            _a[direction] = pos + "%",
            _a;
    };
    Slider.prototype._isInverse = function () {
        return ((this.config.inverse && this.config.mode === "horizontal") ||
            (!this.config.inverse && this.config.mode === "vertical"));
    };
    Slider.prototype._getRunnerCss = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        return ("dhx_slider__thumb" +
            (forExtra ? " dhx_slider__thumb--extra" : "") +
            (this._isMouseMoving && ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive))
                ? " dhx_slider__thumb--active"
                : "") +
            (this._disabled ? " dhx_slider__thumb--disabled" : "") +
            (this._isNullable(forExtra ? this._extraCurrentPosition : this._currentPosition) &&
                !this.config.range
                ? " dhx_slider__thumb--nullable"
                : ""));
    };
    Slider.prototype._draw = function () {
        var _a = this.config, labelPosition = _a.labelPosition, mode = _a.mode, hiddenLabel = _a.hiddenLabel, tick = _a.tick, majorTick = _a.majorTick, css = _a.css, helpMessage = _a.helpMessage;
        var labelStyle = (0, html_1.getLabelStyle)(__assign(__assign({}, this.config), { required: false }));
        if (this._tooltip && (!this._mouseIn || !this._focusIn || !this._isMouseMoving)) {
            document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip);
        }
        return (0, dom_1.el)("div", {
            class: "dhx_slider" +
                " dhx_slider--mode_" +
                mode +
                (labelPosition === "left" ? " dhx_slider--label-inline" : "") +
                (hiddenLabel ? " dhx_slider--label_sr" : "") +
                (tick ? " dhx_slider--ticks" : "") +
                (majorTick ? " dhx_slider--major-ticks" : "") +
                (css ? " " + css : "") +
                (this._disabled ? " dhx_slider--disabled" : ""),
            style: {
                paddingBottom: this.config.tick ? "16px" : null,
            },
        }, [
            labelStyle
                ? (0, dom_1.el)("label.dhx_label.dhx_slider__label", {
                    style: labelStyle.style,
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.onlabelClick,
                }, helpMessage
                    ? [
                        labelStyle.label && (0, dom_1.el)("span.dhx_label__holder", labelStyle.label),
                        (0, dom_1.el)("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                        }),
                    ]
                    : labelStyle.label)
                : null,
            this._drawSlider(),
        ]);
    };
    Slider.prototype._drawSlider = function () {
        return (0, dom_1.el)(".dhx_widget.dhx_slider__track-holder", {
            "data-dhx-widget-id": this._uid,
        }, [
            (0, dom_1.el)(".dhx_slider__track", {
                _ref: "track",
                onmouseover: this._handlers.onmouseover,
                onmouseout: this._handlers.onmouseout,
                onclick: this._handlers.onclick,
            }, [
                this._getDetector(),
                (0, dom_1.el)("div", {
                    _ref: "runner",
                    class: this._getRunnerCss(),
                    ontouchstart: this._handlers.ontouchstart,
                    ontouchend: this._handlers.ontouchend,
                    onmousedown: this._handlers.onmousedown,
                    onfocus: this._handlers.onfocus,
                    onblur: this._handlers.onblur,
                    onkeydown: this._handlers.onkeydown,
                    style: this._getRunnerStyle(),
                    tabindex: 0,
                }),
                this.config.tooltip && (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip()
                    : null,
                this.config.tooltip &&
                    this.config.range &&
                    (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip(true)
                    : null,
                this.config.range
                    ? (0, dom_1.el)("div", {
                        _ref: "extraRunner",
                        class: this._getRunnerCss(true),
                        ontouchstart: this._handlers.ontouchstart,
                        ontouchend: this._handlers.ontouchend,
                        onmousedown: this._handlers.onmousedown,
                        onfocus: this._handlers.onfocus,
                        onblur: this._handlers.onblur,
                        onkeydown: this._handlers.onkeydown,
                        style: this._getRunnerStyle(true),
                        tabindex: 0,
                    })
                    : null,
            ]),
            this.config.tick ? this._drawTicks() : null,
        ]);
    };
    Slider.prototype._getDetector = function () {
        var _a, _b, _c;
        if (this._disabled) {
            return (0, dom_1.el)(".dhx_slider__range");
        }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var size = this.config.mode === "horizontal" ? "width" : "height";
        if (this.config.range) {
            var _d = this._currentPosition > this._extraCurrentPosition
                ? [this._currentPosition, this._extraCurrentPosition]
                : [this._extraCurrentPosition, this._currentPosition], more = _d[0], less = _d[1];
            return (0, dom_1.el)(".dhx_slider__range", {
                style: (_a = {},
                    _a[direction] = less + "%",
                    _a[size] = more - less + "%",
                    _a),
            });
        }
        if (this._isInverse()) {
            return (0, dom_1.el)(".dhx_slider__range", {
                style: (_b = {},
                    _b[direction] = this._currentPosition + "%",
                    _b[size] = 100 - this._currentPosition + "%",
                    _b),
            });
        }
        return (0, dom_1.el)(".dhx_slider__range", {
            style: (_c = {},
                _c[direction] = 0,
                _c[size] = this._currentPosition + "%",
                _c),
        });
    };
    Slider.prototype._drawTooltip = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        if (this._activeTooltip === "none" || !this.getRootView())
            return;
        var pos = this._activeTooltip === "extraTooltip" ? this._extraCurrentPosition : this._currentPosition;
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var classNameModifiers = "";
        if ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive)) {
            classNameModifiers += " dhx_slider__thumb-label--active";
        }
        if (!this._tooltip) {
            this._tooltip = document.createElement("div");
        }
        var coords = this._activeTooltip === "tooltip"
            ? this.getRootView().refs.runner.el.getBoundingClientRect()
            : this.getRootView().refs.extraRunner.el.getBoundingClientRect();
        this._tooltip.className = "dhx_slider__thumb-label" + classNameModifiers;
        this._tooltip.style.left = coords.x + (direction === "left" ? 6 : -30) + window.pageXOffset + "px";
        this._tooltip.style.top = coords.y + (direction === "left" ? -30 : 6) + window.pageYOffset + "px";
        this._tooltip.innerText = this._getValue(pos).toString();
        document.body.appendChild(this._tooltip);
    };
    Slider.prototype._getTicks = function () {
        var _a = this.config, max = _a.max, min = _a.min, step = _a.step, tick = _a.tick, majorTick = _a.majorTick;
        var len = max - min;
        var tickLength = (step * tick) / len;
        var positions = [];
        var length = 0;
        var index = 0;
        while (length < 1) {
            var tickValue = +(Number(min) + length * len).toFixed(5);
            var isMultiple = index % majorTick === 0;
            positions.push({
                position: (this._isInverse() ? (1 - length) * 100 : length * 100) + "%",
                isMultiple: isMultiple,
                label: isMultiple && typeof this.config.tickTemplate === "function"
                    ? this.config.tickTemplate(tickValue)
                    : null,
            });
            length += tickLength;
            index++;
        }
        positions.push({
            position: (this._isInverse() ? 0 : 100) + "%",
            isMultiple: true,
            label: typeof this.config.tickTemplate === "function" ? this.config.tickTemplate(max) : null,
        });
        return positions;
    };
    Slider.prototype._drawTicks = function () {
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        return (0, dom_1.el)(".dhx_slider__ticks-holder", this._getTicks().map(function (tick) {
            var _a;
            return (0, dom_1.el)("div", {
                class: "dhx_slider__tick" + (tick.isMultiple ? " dhx_slider__tick--major" : ""),
                style: (_a = {},
                    _a[direction] = tick.position,
                    _a),
            }, tick.label !== undefined ? [(0, dom_1.el)(".dhx_slider__tick-label", tick.label)] : null);
        }));
    };
    Slider.prototype._isNullable = function (value) {
        if (this._isInverse()) {
            return value === 100;
        }
        else {
            return value === 0;
        }
    };
    Slider.prototype._setTooltip = function (e) {
        if (e.target.classList.contains("dhx_slider__thumb--extra")) {
            this._activeTooltip = "extraTooltip";
        }
        else if (e.target.classList.contains("dhx_slider__thumb")) {
            this._activeTooltip = "tooltip";
        }
        else {
            this._activeTooltip = "none";
        }
    };
    return Slider;
}(view_1.View));
exports.Slider = Slider;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(3);
var html_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var types_1 = __webpack_require__(52);
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, (0, core_1.extend)({}, config)) || this;
        var popup = (_this._popup = document.createElement("div"));
        popup.className = "dhx_widget dhx_popup" + (_this.config.css ? " " + _this.config.css : "");
        popup.style.position = "absolute";
        popup.setAttribute("role", "dialog");
        popup.setAttribute("aria-modal", "true");
        popup.setAttribute("aria-live", "polite");
        _this.config.theme && _this._setTheme(_this.config.theme);
        _this.mount(popup, (0, dom_1.create)({
            render: function () { return _this.toVDOM(); },
        }));
        _this._clickEvent = function (e) { return _this.events.fire(types_1.PopupEvents.click, [e]); };
        _this.events = config.events || new events_1.EventSystem(_this);
        _this._isActive = false;
        return _this;
    }
    Popup.prototype.show = function (node, config, attached) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!this.events.fire(types_1.PopupEvents.beforeShow, [node])) {
            return;
        }
        node = (0, html_1.toNode)(node);
        if (this._isActive) {
            this._setPopupSize(node, config);
            return;
        }
        if (attached) {
            this.attach(attached);
        }
        config.theme && this._setTheme(config.theme);
        this._popup.style.left = "0";
        this._popup.style.top = "0";
        (0, dom_1.awaitRedraw)()
            .then(function () {
            _this._setPopupSize(node, config);
            _this._popup.style.position = "fixed";
            document.body.appendChild(_this._popup);
            _this._isActive = true;
        })
            .then(function () {
            _this._popup.style.position = "absolute";
            _this.events.fire(types_1.PopupEvents.afterShow, [node]);
            _this._outerClickDestructor = _this._detectOuterClick(node);
        });
    };
    Popup.prototype.hide = function () {
        this._hide(false, null);
    };
    Popup.prototype.isVisible = function () {
        return this._isActive;
    };
    Popup.prototype.attach = function (name, config) {
        this._html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Popup.prototype.attachHTML = function (html) {
        this._html = html;
        this.paint();
    };
    Popup.prototype.getWidget = function () {
        return this._ui;
    };
    Popup.prototype.getContainer = function () {
        return this.getRootView().refs.content.el;
    };
    Popup.prototype.toVDOM = function () {
        var view;
        if (this._html) {
            view = (0, dom_1.el)(".dhx_popup__inner-html-content", {
                ".innerHTML": this._html,
            });
        }
        else {
            view = this._ui ? this._ui.getRootView() : null;
            if (view && view.render) {
                view = (0, dom_1.inject)(view);
            }
        }
        return (0, dom_1.el)("div", {
            class: "dhx_popup-content",
            tabindex: 0,
            onclick: this._clickEvent,
            _key: this._uid,
            _ref: "content",
        }, [view]);
    };
    Popup.prototype.destructor = function () {
        this.events && this.events.clear();
        this.hide();
        if (this._outerClickDestructor) {
            this._outerClickDestructor();
        }
        this._popup = null;
    };
    Popup.prototype._setTheme = function (node) {
        var _a;
        if (typeof node === "string") {
            this._popup.setAttribute("data-dhx-theme", node);
        }
        else {
            var theme = (_a = node === null || node === void 0 ? void 0 : node.closest("[data-dhx-theme]")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-dhx-theme");
            theme && this._popup.setAttribute("data-dhx-theme", theme);
        }
    };
    Popup.prototype._setPopupSize = function (node, config, calls) {
        var _this = this;
        if (calls === void 0) { calls = 3; }
        var _a = this._popup.getBoundingClientRect(), width = _a.width, height = _a.height;
        // TODO: IE popup height = 0
        if (this._timeout) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        if (calls && (width === 0 || height === 0)) {
            this._timeout = setTimeout(function () {
                if (!_this._isActive) {
                    return;
                }
                _this._setPopupSize(node, config, calls - 1);
                _this._timeout = null;
            });
            return;
        }
        var _b = (0, html_1.fitPosition)(node, __assign(__assign({ centering: true, mode: "bottom" }, config), { width: width, height: height })), left = _b.left, top = _b.top;
        this._popup.style.left = left;
        this._popup.style.top = top;
        if (config.indent && config.indent !== 0) {
            switch (config.mode) {
                case "top":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "bottom":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "left":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "right":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                default:
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
            }
        }
    };
    Popup.prototype._detectOuterClick = function (node) {
        var _this = this;
        var isDetect = false;
        var storage = new WeakMap();
        var outerClick = function (event) {
            var target = event.target;
            var popups = document.querySelectorAll(".dhx_popup");
            if (isDetect) {
                popups.forEach(function (popup) { return storage.has(popup) || storage.set(popup, _this._popup); });
            }
            else {
                isDetect = Boolean(popups.length);
                isDetect && popups.forEach(function (popup) { return storage.set(popup, true); });
            }
            while (target) {
                if (target === node || target === _this._popup || storage.get(target) === _this._popup) {
                    return;
                }
                target = target.parentNode;
            }
            if (_this._hide(true, event)) {
                document.removeEventListener("mousedown", outerClick);
            }
        };
        document.addEventListener("mousedown", outerClick);
        return function () { return document.removeEventListener("mousedown", outerClick); };
    };
    Popup.prototype._hide = function (fromOuterClick, e) {
        if (this._isActive) {
            if (!this.events.fire(types_1.PopupEvents.beforeHide, [fromOuterClick, e])) {
                return false;
            }
            document.body.removeChild(this._popup);
            this._isActive = false;
            if (this._outerClickDestructor) {
                this._outerClickDestructor();
                this._outerClickDestructor = null;
            }
            this.events.fire(types_1.PopupEvents.afterHide, [e]);
            return true;
        }
    };
    return Popup;
}(view_1.View));
exports.Popup = Popup;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTimeCheck = void 0;
/**
 * This function is designed to resolve conflicts with the time setting for the 12 hour format.
 */
function isTimeCheck(value) {
    return /(^12:[0-5][0-9]?AM$)/i.test(value);
}
exports.isTimeCheck = isTimeCheck;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.linkButtonClasses = void 0;
exports.linkButtonClasses = ".dhx_button.dhx_button--view_link.dhx_button--icon.dhx_button--size_medium.dhx_button--color_secondary";


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var ts_navbar_1 = __webpack_require__(28);
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(element, config) {
        var _this = _super.call(this, element, (0, core_1.extend)({
            $name: "menu",
        }, config)) || this;
        var render = function () { return _this._draw(); };
        _this.mount(element, (0, dom_1.create)({ render: render }));
        return _this;
    }
    Menu.prototype._getFactory = function () {
        return (0, ts_navbar_1.createFactory)({
            widget: this,
            defaultType: "menuItem",
            allowedTypes: ["menuItem", "spacer", "separator", "customHTML", "customHTMLButton"],
            widgetName: "menu-nav",
        });
    };
    Menu.prototype._getMode = function (item, root) {
        return item.id === root ? "bottom" : "right";
    };
    Menu.prototype._close = function (e) {
        this._activePosition = null;
        this._currentRoot = null;
        _super.prototype._close.call(this, e);
    };
    Menu.prototype._setRoot = function (id) {
        if (this.data.getParent(id) === this.data.getRoot()) {
            this._currentRoot = id;
        }
    };
    Menu.prototype._draw = function () {
        return (0, dom_1.el)("ul.dhx_widget", {
            "data-dhx-widget-id": this._uid,
            onmousemove: this._handlers.onmousemove,
            onmouseleave: this._handlers.onmouseleave,
            onclick: this._handlers.onclick,
            onmousedown: this._handlers.onmousedown,
            onkeydown: this._handlers.onkeydown,
            class: "dhx_menu-nav " + (this.config.css ? this.config.css : ""),
        }, this._drawMenuItems(this.data.getRoot(), false));
    };
    return Menu;
}(ts_navbar_1.Navbar));
exports.Menu = Menu;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exporter = void 0;
var html_1 = __webpack_require__(2);
var Exporter = /** @class */ (function () {
    function Exporter(_name, _version, _view) {
        this._name = _name;
        this._version = _version;
        this._view = _view;
    }
    Exporter.prototype.pdf = function (config) {
        this._rawExport(config, "pdf", this._view);
    };
    Exporter.prototype.png = function (config) {
        this._rawExport(config, "png", this._view);
    };
    Exporter.prototype._rawExport = function (config, mode, view) {
        var _this = this;
        if (config === void 0) { config = {}; }
        config.url =
            config.url || "https://export.dhtmlx.com/" + this._name + "/" + mode + "/" + this._version;
        if (mode === "pdf") {
            var pdf = config.pdf || {};
            config.pdf = __assign(__assign({}, pdf), { printBackground: false });
        }
        var styles = "";
        var exportStyles = view.config.exportStyles;
        if (typeof config.exportStyles === "boolean" || Array.isArray(config.exportStyles)) {
            exportStyles = config.exportStyles;
        }
        if (exportStyles === true) {
            styles = "".concat((0, html_1.getPageLinksCss)(), "<style>").concat((0, html_1.getPageInlineCss)(), "</style>");
        }
        else if (exportStyles.length) {
            styles = "".concat((0, html_1.getPageLinksCss)(exportStyles));
        }
        var html = "\n\t\t\t\t".concat(styles, "\n\t\t\t\t").concat(view.getRootView().node.el.parentNode.innerHTML, "\n\t\t\t").replace(/(src|href)=("(.+?\.(jpeg|jpg|png|apng|gif|svg|bmp|ico))")/gm, function (match) {
            if (match.includes("://")) {
                return match;
            }
            var initialLink = match.replace(/(src|href)="/, "").replace('"', "");
            return /(src|href)="/.exec(match)[0] + _this._normalizeLink(initialLink) + '"';
        });
        var t = document.createElement("form");
        t.setAttribute("method", "POST");
        t.setAttribute("action", config.url);
        t.innerHTML = "<input type=\"hidden\" name=\"raw\"><input type=\"hidden\" name=\"config\">";
        t.childNodes[0].value = html;
        t.childNodes[1].value = JSON.stringify(config);
        document.body.appendChild(t);
        t.submit();
        setTimeout(function () {
            t.parentNode.removeChild(t);
        }, 100);
    };
    Exporter.prototype._normalizeLink = function (link) {
        var locationParts = window.location.pathname.split("/");
        if (locationParts[0] === "") {
            locationParts.shift();
            locationParts.pop();
        }
        return window.location.origin + "/" + locationParts.join("/") + (link[0] !== "/" ? "/" + link : link);
    };
    return Exporter;
}());
exports.Exporter = Exporter;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var types_1 = __webpack_require__(18);
var Selection = /** @class */ (function () {
    function Selection(data, events) {
        var _this = this;
        this._selected = [];
        this._selectedLines = [];
        this.events = events;
        this._data = data;
        this._data.events.on(types_1.DataEvents.removeAll, function () { return _this.clear(); });
        this._data.events.on(types_1.DataEvents.afterRemove, function (_a) {
            var id = _a.id;
            return _this.remove({ id: id });
        });
    }
    Selection.prototype.add = function (_a) {
        var _b;
        var id = _a.id, _c = _a.join, join = _c === void 0 ? false : _c, _d = _a.batch, batch = _d === void 0 ? [] : _d;
        var item = this._data.getItem(id);
        if ((item === null || item === void 0 ? void 0 : item.type) === "$sgroup")
            id = item.$group;
        if (!item ||
            this.includes({ id: id }) ||
            (!join && !this.remove()) ||
            !this.events.fire(types_1.SelectionEvents.beforeSelect, [{ id: id, join: join, batch: batch }])) {
            return false;
        }
        var type = item.$item.getBaseType();
        if (!this.includes({ id: id })) {
            var $selected = type !== "line" || (type === "line" && join && this._selected.length);
            this._data.update(id, { $selected: $selected }, true);
            if (type === "line")
                this._selectedLines.push(id);
            if (this._selected.length &&
                this._selectedLines.length &&
                !((_b = this._data.getItem(this._selectedLines[0])) === null || _b === void 0 ? void 0 : _b.$selected)) {
                this._data.update(this._selectedLines[0], { $selected: true }, true);
            }
            this._selected.push(id);
        }
        this.events.fire(types_1.SelectionEvents.afterSelect, [{ id: id, join: join, batch: batch }]);
        return true;
    };
    Selection.prototype.remove = function (obj) {
        var _this = this;
        if (!obj) {
            var selected_1 = __spreadArray([], this._selected, true);
            return selected_1.map(function (id) { return _this.unselect({ id: id, batch: selected_1 }); }).every(function (v) { return v; });
        }
        if (this.includes(__assign({}, obj))) {
            return this.unselect(obj);
        }
        return false;
    };
    Selection.prototype.includes = function (_a) {
        var id = _a.id;
        return this._selected.includes(id);
    };
    Selection.prototype.getItem = function (obj) {
        var id = this._selected[this._selected.length - 1];
        if (obj && this.includes({ id: obj.id })) {
            id = obj.id;
        }
        return this._data.getItem(id);
    };
    Selection.prototype.getIds = function () {
        return this._selected;
    };
    Selection.prototype.clear = function () {
        this._data &&
            this._data.forEach(function (item) {
                if (item.$selected)
                    delete item.$selected;
            });
        this._selected = [];
        this._selectedLines = [];
    };
    Selection.prototype.unselect = function (_a) {
        var id = _a.id, _b = _a.batch, batch = _b === void 0 ? [] : _b;
        if (!this.events.fire(types_1.SelectionEvents.beforeUnSelect, [{ id: id, batch: batch }])) {
            return false;
        }
        this._selected = this._selected.filter(function (selected) { return selected !== id; });
        this._data.update(id, { $selected: undefined }, true);
        if (this._selectedLines.some(function (lineId) { return lineId == id; })) {
            this._selectedLines = this._selectedLines.filter(function (selected) { return selected !== id; });
        }
        if (this._selected.length === 1 && this._selectedLines.length === 1) {
            this._data.update(this._selectedLines[0], { $selected: undefined }, true);
        }
        this.events.fire(types_1.SelectionEvents.afterUnSelect, [{ id: id, batch: batch }]);
        return true;
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgCard = void 0;
var dom_1 = __webpack_require__(0);
var Card_1 = __webpack_require__(56);
var ImgCard = /** @class */ (function (_super) {
    __extends(ImgCard, _super);
    function ImgCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImgCard.prototype.setDefaults = function (config, defaults) {
        var width = config.width, height = config.height, text = config.text, title = config.title, headerColor = config.headerColor, fixed = config.fixed;
        var widthDefaut = defaults.width ? parseFloat(defaults.width) : 210;
        var heightDefault = defaults.height ? parseFloat(defaults.height) : 90;
        config.width = width || widthDefaut;
        config.height = height || heightDefault;
        config.title = typeof title === "string" ? title : defaults.title || "";
        config.text = typeof text === "string" ? text : defaults.text || "";
        config.headerColor = headerColor || defaults.headerColor || "";
        config.fixed = fixed || false;
        config.editable = typeof config.editable === "boolean" ? config.editable : true;
        return config;
    };
    ImgCard.prototype.getCss = function () {
        return "dhx_diagram_shape_card-img " + _super.prototype.getCss.call(this);
    };
    ImgCard.prototype.getContent = function () {
        var _a = this.config, img = _a.img, headerColor = _a.headerColor, title = _a.title, text = _a.text, $editable = _a.$editable, width = _a.width;
        var src = img ? "".concat(img) : null;
        return [
            (0, dom_1.el)("img.dhx_diagram_item__image", {
                style: {
                    backgroundColor: img ? null : headerColor,
                },
                src: src,
            }),
            (0, dom_1.el)("div.dhx_diagram_item__title", $editable && this.editableProperty.key === "title" ? [this.getEditorNode()] : title),
            (0, dom_1.el)("div.dhx_diagram_item__text", {
                style: {
                    maxWidth: width - 80,
                    marginLeft: 80,
                    marginTop: title ? null : "12px",
                },
            }, $editable && this.editableProperty.key === "text" ? [this.getEditorNode()] : text),
        ];
    };
    return ImgCard;
}(Card_1.Card));
exports.ImgCard = ImgCard;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextShape = void 0;
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var BaseShape_1 = __webpack_require__(16);
var templates_1 = __webpack_require__(8);
var TextShape = /** @class */ (function (_super) {
    __extends(TextShape, _super);
    function TextShape(config, parameters) {
        var _this = _super.call(this, config, parameters) || this;
        _this.data = parameters.data;
        return _this;
    }
    TextShape.prototype.render = function () {
        var coords = this.getCoords(this.config);
        var _a = this.config, id = _a.id, angle = _a.angle, text = _a.text, fontSize = _a.fontSize, lineHeight = _a.lineHeight, fontWeight = _a.fontWeight, fontStyle = _a.fontStyle, width = _a.width, height = _a.height;
        var textStyle = {
            fontSize: "".concat(fontSize, "px"),
            fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
            lineHeight: "".concat(lineHeight, "px"),
            fontWeight: fontWeight,
            fontStyle: fontStyle,
        };
        if (this._prevValue && this.config.text !== this._prevValue) {
            var stringSize = (0, html_1.getStrSize)(text, textStyle);
            this.data.update(this.id, {
                height: stringSize.height + 2,
                width: stringSize.width + 4,
            });
        }
        this._prevValue = this.config.text;
        var zIndex = this.config.$group || this.config.$selected ? (this.config.$selected ? 2 : 1) : 0;
        return (0, dom_1.el)("div.dhx_diagram_item.dhx_diagram_shape.dhx_diagram_shape_text", {
            _key: id,
            class: this.getCss(),
            "data-dhx-id": id,
            style: {
                zIndex: zIndex,
                width: width,
                height: height,
                position: "absolute",
                top: coords.y,
                left: coords.x,
                transform: "rotate(".concat(angle || 0, "deg)"),
            },
        }, [].concat((0, templates_1.getTextTemplate)(this.config, this.getContent())));
    };
    TextShape.prototype.setDefaults = function (config, defaults) {
        var width = config.width, height = config.height, fontColor = config.fontColor, fontSize = config.fontSize, fontStyle = config.fontStyle, textAlign = config.textAlign, lineHeight = config.lineHeight, textVerticalAlign = config.textVerticalAlign, text = config.text, fontWeight = config.fontWeight, x = config.x, y = config.y, fixed = config.fixed, editable = config.editable;
        var lineHeightDefault = defaults.lineHeight ? parseFloat(defaults.lineHeight) : 14;
        var fontSizeDefault = defaults.fontSize ? parseFloat(defaults.fontSize) : 14;
        var textStyle = {
            fontSize: "".concat(fontSize || fontSizeDefault, "px"),
            fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
            lineHeight: "".concat(lineHeight || lineHeightDefault, "px"),
            fontWeight: fontWeight,
            fontStyle: fontStyle,
        };
        var stringSize = (0, html_1.getStrSize)(text, textStyle);
        var widthDefault = defaults.width ? parseFloat(defaults.width) : stringSize.width + 4;
        var heightDefault = defaults.height ? parseFloat(defaults.height) : stringSize.height + 2;
        config.width = width || widthDefault;
        config.height = height || heightDefault;
        config.lineHeight = lineHeight || lineHeightDefault;
        config.fontSize = fontSize || fontSizeDefault;
        config.text = text || defaults.text || "";
        config.fontColor = fontColor || defaults.fontColor || "#4C4C4C";
        config.textAlign = textAlign || defaults.textAlign || "center";
        config.fontStyle = fontStyle || defaults.fontStyle || "normal";
        config.textVerticalAlign = textVerticalAlign || defaults.textVerticalAlign || "center";
        config.x = x || 0;
        config.y = y || 0;
        config.fixed = fixed || false;
        config.editable = typeof editable === "boolean" ? editable : true;
        return config;
    };
    TextShape.prototype.getContent = function () {
        var _a = this.config, $editable = _a.$editable, text = _a.text;
        return (0, dom_1.el)("span.dhx_diagram_item__text", {
            style: __assign({}, (0, templates_1.getShapeCss)(this.config)),
        }, $editable ? [this.getEditorNode()] : text);
    };
    return TextShape;
}(BaseShape_1.BaseShape));
exports.TextShape = TextShape;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicShape = void 0;
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var BaseShape_1 = __webpack_require__(16);
var templates_1 = __webpack_require__(8);
var TopicShape = /** @class */ (function (_super) {
    __extends(TopicShape, _super);
    function TopicShape(config, parameters) {
        var _this = _super.call(this, config, parameters) || this;
        _this.data = parameters.data;
        return _this;
    }
    TopicShape.prototype.render = function () {
        var _this = this;
        var coords = this.getCoords(this.config);
        var _a = this.config, id = _a.id, angle = _a.angle, width = _a.width, height = _a.height, fontSize = _a.fontSize, lineHeight = _a.lineHeight, fontWeight = _a.fontWeight, fontStyle = _a.fontStyle, text = _a.text, strokeWidth = _a.strokeWidth, $group = _a.$group, $selected = _a.$selected;
        var zIndex = $group || $selected ? ($selected ? 2 : 1) : 0;
        var textStyle = {
            fontSize: "".concat(fontSize, "px"),
            fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
            lineHeight: "".concat(lineHeight, "px"),
            fontWeight: fontWeight,
            fontStyle: fontStyle,
            strokeWidth: strokeWidth,
        };
        if (this._oldText && this.config.text !== this._oldText) {
            var stringSize = (0, html_1.getStrSize)(text, textStyle);
            var strWidth = stringSize.width + 16;
            var strHeight = stringSize.height + 8;
            this.data.update(this.id, {
                height: strHeight > 30 ? strHeight : 30,
                width: strWidth > 60 ? strWidth : 60,
            });
        }
        this._oldText = this.config.text;
        var circle = [];
        if (Array.isArray(this.config.dir)) {
            this.config.dir.forEach(function (_dir, index) {
                circle.push((0, templates_1.getCircleTpl)(_this.config, index));
            });
        }
        else {
            circle.push((0, templates_1.getCircleTpl)(this.config));
        }
        return (0, dom_1.el)("div.dhx_diagram_item.dhx_diagram_shape.dhx_diagram_shape_topic", {
            _key: id,
            "data-dhx-id": id,
            class: this.getCss(),
            style: {
                position: "absolute",
                width: width,
                height: height,
                left: coords.x,
                top: coords.y,
                transform: "rotate(".concat(angle || 0, "deg)"),
                zIndex: zIndex,
            },
        }, [].concat.apply([], __spreadArray([(0, templates_1.getTextTemplate)(this.config, this.getContent())], circle, false)));
    };
    TopicShape.prototype.getContent = function () {
        var _a = this.config, height = _a.height, width = _a.width, strokeWidth = _a.strokeWidth, strokeType = _a.strokeType, fill = _a.fill, stroke = _a.stroke, text = _a.text, $editable = _a.$editable;
        var borderStyle = "none";
        if (strokeType === "line" || !strokeType)
            borderStyle = "solid";
        if (strokeType === "dash")
            borderStyle = "dashed";
        return [
            (0, dom_1.el)("div.dhx_diagram_item__text", {
                style: __assign({ height: height, width: width, border: "".concat(strokeWidth, "px ").concat(borderStyle, " ").concat(stroke || "#03A9F4"), background: fill, borderRadius: "".concat(height / 2) }, (0, templates_1.getShapeCss)(this.config)),
            }, $editable ? [this.getEditorNode()] : text),
        ];
    };
    TopicShape.prototype.setDefaults = function (config, defaults) {
        var width = config.width, height = config.height, fontColor = config.fontColor, fontSize = config.fontSize, fontStyle = config.fontStyle, textAlign = config.textAlign, lineHeight = config.lineHeight, textVerticalAlign = config.textVerticalAlign, text = config.text, fontWeight = config.fontWeight, x = config.x, y = config.y, fill = config.fill, strokeWidth = config.strokeWidth, stroke = config.stroke, strokeType = config.strokeType, fixed = config.fixed, editable = config.editable;
        var lineHeightDefault = defaults.lineHeight ? parseFloat(defaults.lineHeight) : 14;
        var fontSizeDefault = defaults.fontSize ? parseFloat(defaults.fontSize) : 14;
        var strokeWidthDefault = defaults.strokeWidth ? parseFloat(defaults.strokeWidth) : 1;
        config.lineHeight = lineHeight || lineHeightDefault;
        config.fontSize = fontSize || fontSizeDefault;
        config.text = text || defaults.text || "";
        config.fill = fill || defaults.fill || "#fff";
        config.fontColor = fontColor || defaults.fontColor || "#4C4C4C";
        config.textAlign = textAlign || defaults.textAlign || "center";
        config.fontStyle = fontStyle || defaults.fontStyle || "normal";
        config.textVerticalAlign = textVerticalAlign || defaults.textVerticalAlign || "center";
        config.strokeWidth = strokeWidth || strokeWidthDefault;
        config.stroke = stroke || defaults.stroke;
        config.strokeType = strokeType || defaults.strokeType || "line";
        var textStyle = {
            fontSize: "".concat(fontSize || fontSizeDefault, "px"),
            fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
            lineHeight: "".concat(lineHeight || lineHeightDefault, "px"),
            fontWeight: fontWeight,
            fontStyle: fontStyle,
            strokeWidth: config.strokeWidth,
        };
        var stringSize = (0, html_1.getStrSize)(text, textStyle);
        var widthDefault = defaults.width ? parseFloat(defaults.width) : stringSize.width + 24;
        var heightDefault = defaults.height ? parseFloat(defaults.height) : stringSize.height + 12;
        config.height = heightDefault > 30 || height > 30 ? height || heightDefault : 30;
        config.width = widthDefault > 60 || width > 60 ? width || widthDefault : 60;
        config.x = x || 0;
        config.y = y || 0;
        config.fixed = fixed || false;
        config.editable = typeof editable === "boolean" ? editable : true;
        return config;
    };
    return TopicShape;
}(BaseShape_1.BaseShape));
exports.TopicShape = TopicShape;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar = void 0;
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var types_1 = __webpack_require__(18);
var view_1 = __webpack_require__(4);
var ts_message_1 = __webpack_require__(21);
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(events, icons) {
        var _this = _super.call(this, null, {
            height: 50,
            iconWidth: 30,
            gap: 16,
            icons: icons,
        }) || this;
        _this.events = events;
        _this._handlers = {
            onclick: (0, html_1.eventHandler)(function (ev) { return (0, html_1.locate)(ev); }, {
                dhx_diagram_toolbar__icon: function (ev, id) {
                    _this.events.fire(types_1.DiagramEvents.shapeIconClick, [id, ev]);
                },
            }),
            tooltip: (0, html_1.eventHandler)(function (ev) { return (0, html_1.locate)(ev); }, {
                dhx_diagram_toolbar__icon: function (ev, id) {
                    var elem = (0, html_1.locateNode)(ev);
                    if (!elem) {
                        return;
                    }
                    var icon = icons.find(function (i) { return i.id === id; });
                    if (icon === null || icon === void 0 ? void 0 : icon.tooltip) {
                        (0, ts_message_1.tooltip)(icon.tooltip, {
                            node: elem,
                            position: ts_message_1.Position.top,
                        });
                    }
                },
            }),
        };
        return _this;
    }
    Toolbar.prototype.render = function (item, size, coords) {
        if (!item)
            return;
        var config = this.config;
        var icons = this._getIcons(item, config.icons);
        var width = config.iconWidth * icons.length + config.gap;
        var pos = this._getCoords(item, {
            width: width / size.scale,
            height: config.height / size.scale,
            x: coords === null || coords === void 0 ? void 0 : coords.x,
            y: coords === null || coords === void 0 ? void 0 : coords.y,
        });
        return (0, dom_1.el)("div", {
            class: "dhx_diagram_toolbar",
            style: {
                display: this._hidden || !icons.length ? "none" : "block",
                maxHeight: this.config.height,
                width: width,
                top: (pos.y - size.top) * size.scale,
                left: (pos.x - size.left) * size.scale,
            },
            onclick: this._handlers.onclick,
            onmouseover: this._handlers.tooltip,
        }, [(0, dom_1.el)("div.dhx_diagram_toolbar__wrapper", icons)]);
    };
    Toolbar.prototype.hide = function () {
        this._hidden = true;
        this.paint();
    };
    Toolbar.prototype.show = function () {
        this._hidden = false;
        this.paint();
    };
    Toolbar.prototype._getIcons = function (item, icons) {
        var tags = [];
        for (var i = 0; i < icons.length; i++) {
            var obj = icons[i];
            if (!obj.check || obj.check(item)) {
                var css = obj.css ? obj.css(item) : "";
                var tag = {
                    _key: obj.id,
                    class: "dhx_diagram_toolbar__icon " + css,
                    "data-dhx-id": obj.id,
                };
                var content = typeof obj.content === "function" ? obj.content(item) : obj.content;
                if (typeof content === "string") {
                    tag[".innerHTML"] = content;
                    tags.push((0, dom_1.el)("div", tag));
                }
                else {
                    tags.push((0, dom_1.el)("div", tag, [content]));
                }
            }
        }
        return tags;
    };
    Toolbar.prototype._getCoords = function (target, _a) {
        var _b;
        var width = _a.width, height = _a.height, x = _a.x, y = _a.y;
        var box;
        if (Array.isArray(target)) {
            var items = target.map(function (item) { return item.$item.getBox(); });
            box = {};
            items.forEach(function (iBox) {
                for (var side in iBox) {
                    if (isNaN(box[side]) ||
                        ((side === "top" || side === "left") && iBox[side] < box[side]) ||
                        ((side === "bottom" || side === "right") && iBox[side] > box[side])) {
                        box[side] = iBox[side];
                    }
                }
            });
        }
        else {
            var type = (_b = target.$item) === null || _b === void 0 ? void 0 : _b.getBaseType();
            if (type === "line" && !target.$subSelected) {
                var GAP_1 = 25;
                return {
                    x: x + GAP_1,
                    y: y - height / 2,
                };
            }
            box = target.$item.getBox();
        }
        var center = box.right / 2 + box.left / 2;
        var GAP = 8;
        return {
            x: center - width / 2,
            y: box.top - height - GAP,
        };
    };
    return Toolbar;
}(view_1.View));
exports.Toolbar = Toolbar;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var SymmetricTree_1 = __webpack_require__(123);
var Routes_1 = __webpack_require__(124);
var split_1 = __webpack_require__(125);
var Hola = /** @class */ (function () {
    function Hola() {
    }
    Hola.prototype.layout = function (g, config) {
        g.routes = new Routes_1.default();
        if (!config.full) {
            var c_1 = getParams(g, config);
            if (!config.preserveLocation)
                placeAround(c_1.n, c_1.size);
            minStress(c_1.mx, c_1.n, c_1.n, c_1.size);
            fixOverlap(c_1.n);
            g.setGlobalBox();
            return g;
        }
        var subs = (0, split_1.split)(g);
        if (subs.length == 1 && subs[0].root !== null) {
            return new SymmetricTree_1.default().layout(subs[0].g, config);
        }
        g = subs[0].g;
        g.routes = new Routes_1.default();
        var c = getParams(g, config);
        if (!config.preserveLocation)
            placeAround(c.n, c.size, getPriority(subs, config.root));
        minStress(c.mx, c.n, c.n, c.size);
        fixOverlap(c.n);
        if (config.full) {
            planarPlacement(g.routes, c.mx, c.n, c.size);
            g = addSubTrees(g, c.mx, subs.slice(1).sort(byTreeLength), c.size);
            correctOverlap(g.getNodes(), c.size);
        }
        g.setGlobalBox();
        return g;
    };
    return Hola;
}());
exports.default = Hola;
function correctOverlap(nodes, step) {
    var l = nodes.length;
    for (var i = 0; i < l; i++) {
        var _loop_1 = function (j) {
            var a = nodes[i];
            var b = nodes[j];
            if (overlapX(a, b) > 0 && overlapY(a, b) > 0) {
                var ma = b.x + b.w - a.x;
                var mb = a.x + a.w - b.x;
                var moveA = ma < mb;
                var from_1 = moveA ? a.x : b.x;
                var fromID_1 = moveA ? a.id : b.id;
                var shift_1 = Math.ceil((moveA ? ma : mb) / step) * step;
                nodes.forEach(function (el) {
                    if (el.x > from_1 || el.id === fromID_1) {
                        el.x += shift_1;
                    }
                });
            }
        };
        for (var j = i + 1; j < l; j++) {
            _loop_1(j);
        }
    }
}
function getParams(g, config) {
    var n = g.getNodes();
    var size = 0;
    n.forEach(function (a, i) {
        a.isn = i;
        size += a.w + a.h;
    });
    size = Math.round(size / (2 * n.length));
    if (config.itemPadding)
        size += config.itemPadding;
    else
        size *= 2;
    var mx = getDistMatrix(g);
    return { n: n, mx: mx, size: size };
}
// calculate distance matrix between all nodes
function getDistMatrix(g) {
    var m = [];
    var n = g.getNodes();
    for (var i = 0; i < n.length; i++) {
        var line = (m[i] = []);
        line[n[i].isn] = 0;
        getDistLine(n[i], line, i, 1);
    }
    return m;
}
// calculate distance from node n to all other nodes
function getDistLine(n, line, ii, dist) {
    var now = [n];
    var next = [];
    while (now.length) {
        for (var i = 0; i < now.length; i++) {
            var from = now[i];
            for (var j = 0; j < from.links.length; j++) {
                var to = from.links[j];
                var ti = to.isn;
                if (ti != ii && !line[ti]) {
                    line[ti] = dist;
                    next.push(to);
                }
            }
        }
        dist++;
        now = next;
        next = [];
    }
}
function getPriority(subs, root) {
    if (!root)
        return subs[0].g.getNodes()[0].id;
    var priority = root;
    if (subs[0].g.getNodes().find(function (node) { return node.id === root; })) {
        return priority;
    }
    else {
        for (var i = 1; i < subs.length; i++) {
            if (subs[i].g.getNodes().find(function (node) { return node.id === root; })) {
                priority = subs[i].root;
                break;
            }
        }
    }
    return priority;
}
/* create initial node placement as a spaced circle */
function placeAround(n, size, priority) {
    var priotityIndex = n.findIndex(function (item) { return item.id === priority; });
    priotityIndex > 0 && n.unshift.apply(n, n.splice(priotityIndex, 1));
    var step = (Math.PI * 2) / n.length;
    var angle = 0;
    var rad = size * 5;
    n.forEach(function (a, i) {
        a.x = Math.round(Math.cos(angle) * rad);
        a.y = Math.round(Math.sin(angle) * rad);
        angle += step;
    });
    priotityIndex > 0 && n.splice.apply(n, __spreadArray([priotityIndex, 0], n.splice(0, 1), false));
}
function getStress(mx, n) {
    var nCount = n.length;
    var x = 0, cx, cy;
    // for each node, calculate stress
    for (var i = 0; i < nCount; i++) {
        cx = 0;
        cy = 0;
        var from = n[i];
        var line = mx[from.isn];
        for (var j = 0; j < nCount; j++) {
            // skip self
            if (from.isn == j)
                continue;
            var to = n[j];
            // distance to node
            var dij = line[to.isn];
            var kij = 0.5 / (dij * dij);
            // deltas between nodes
            var dx = from.x - to.x;
            var dy = from.y - to.y;
            var bottom = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (bottom) {
                cx += kij * (dx - (dij * dx) / bottom);
                cx += kij * (dy - (dij * dy) / bottom);
            }
        }
        // full stress value for the node
        x += Math.sqrt(Math.pow(cx, 2) + Math.pow(cy, 2));
    }
    return x;
}
/* detects node with maximum stress and calculate the possible improvment */
function getDelta(mx, n, s, size) {
    // max stress node index, max stress
    var di = 0, dm = 0;
    // x-axis max stress
    var cx, cxm = 0;
    // y-axis max stress
    var cy, cym = 0;
    var max = n.length;
    var maxS = s.length;
    // for each node, calculate stress
    for (var i = 0; i < maxS; i++) {
        cx = 0;
        cy = 0;
        var from_2 = s[i];
        var line_1 = mx[from_2.isn];
        for (var j = 0; j < max; j++) {
            // skip self
            if (from_2.isn == j)
                continue;
            var to = n[j];
            // distance to node
            var dij = line_1[to.isn];
            var kij = 0.5 / (dij * dij);
            // deltas between nodes
            var dx = from_2.x - to.x;
            var dy = from_2.y - to.y;
            var bottom = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (bottom) {
                cx += kij * (dx - (size * dij * dx) / bottom);
                cy += kij * (dy - (size * dij * dy) / bottom);
            }
        }
        // full stress value for the node
        var cd = Math.sqrt(Math.pow(cx, 2) + Math.pow(cy, 2));
        if (cd > dm) {
            // store max stress node and its stress value
            di = from_2.isn;
            dm = cd;
            cxm = cx;
            cym = cy;
        }
    }
    // now, we know the max stress node
    // lets check how its position can be optimized
    var k1 = 0, k2 = 0, k3 = 0;
    var from = n[di];
    var line = mx[di];
    for (var j = 0; j < max; j++) {
        if (di == j)
            continue;
        var to = n[j];
        var dij = line[to.isn];
        var kij = 0.5 / (dij * dij);
        var dx = from.x - to.x;
        var dy = from.y - to.y;
        var dx2 = dx * dx;
        var dy2 = dy * dy;
        var bottom = Math.sqrt(Math.pow((dx2 + dy2), 3));
        if (bottom) {
            k1 += kij * (1 - (size * dij * dy2) / bottom);
            k2 += (kij * size * dij * dy * dx) / bottom;
            k3 += kij * (1 - (size * dij * dx2) / bottom);
        }
    }
    // k1*gx + k2*gy = -cxm
    // k3*gy + k2*gx = -cym
    // =>
    // gx = (-cxm - k2*gy) / k1
    // gy = (-cym - k2*gx) /  k3
    // =>
    // gx = (-cxm - k2*((-cym - k2*gx) /  k3)) / k1
    // gx = -cxm/k1 - (k2*-cym - k2*k2*gx) /  (k3*k1)
    // gx = -cxm/k1 - (k2*-cym)/(k3*k1) - k2*k2*gx/(k3*k1)
    // gx  + k2*k2*gx/(k3*k1) = -cxm/k1 + (k2*cym)/(k3*k1)
    // gx * (1 + k2*k2/(k3*k1)) = -cxm/k1 + (k2*cym)/(k3*k1)
    // gx = (-cxm/k1 + (k2*cym)/(k3*k1)) / (1 + k2*k2/(k3*k1))
    // recommended node shift for x and y axis
    var gx, gy;
    gx = (-cxm / k1 + (k2 * cym) / (k3 * k1)) / (1 + (k2 * k2) / (k3 * k1));
    gy = (-cym - k2 * gx) / k3;
    // node inde, node stress, x shift, y shift
    return [di, dm, gx, gy];
}
function minStress(mx, n, s, size) {
    var i = 0;
    while (i++ < 100) {
        var _a = getDelta(mx, n, s, size), i_1 = _a[0], m = _a[1], x = _a[2], y = _a[3];
        if (m < 10)
            break;
        n[i_1].x += x;
        n[i_1].y += y;
    }
}
function fixOverlap(n) {
    //const cs = createOverlapConstraints(n);
}
function genEventsList(n) {
    var evs = [];
    for (var i = 0; i < n.length; i++) {
        var el = n[i];
        evs.push([0, i, el.y - el.h / 2]);
        evs.push([1, i, el.y + el.h / 2]);
    }
    evs.sort(function (a, b) { return (a[2] > b[2] ? 1 : a[2] == b[2] ? 0 : -1); });
    return evs;
}
function createOverlapConstraints(n) {
    var scan = {};
    var evs = genEventsList(n);
    var left = [];
    var right = [];
    var res = [];
    var _loop_2 = function (i) {
        var el = evs[i];
        var j = el[1];
        var node = n[j];
        if (el[0] == 0) {
            // open
            scan[j] = node;
            var lb_1 = (left[j] = getLeftBounds(scan, node));
            var rb_1 = (right[j] = getRightBounds(scan, node));
            // remove left duplicates
            for (var z = 0; z < lb_1.length; z++) {
                var el_1 = lb_1[z];
                var cs = right[el_1.isn];
                if (cs) {
                    right[el_1.isn] = cs.filter(function (a) { return !rb_1.includes(a); });
                }
            }
            // remove right duplicates
            for (var z = 0; z < rb_1.length; z++) {
                var el_2 = rb_1[z];
                var cs = left[el_2.isn];
                if (cs) {
                    left[el_2.isn] = cs.filter(function (a) { return !lb_1.includes(a); });
                }
            }
        }
        else {
            //close
            var lb = left[j];
            var rb = right[j];
            for (var z = 0; z < lb.length; z++) {
                var to = lb[z];
                res.push([to, node]);
                right[to.isn] = right[to.isn].filter(function (a) { return a != node; });
            }
            for (var z = 0; z < rb.length; z++) {
                var to = rb[z];
                res.push([node, to]);
                right[to.isn] = right[to.isn].filter(function (a) { return a != node; });
            }
            delete scan[j];
        }
    };
    for (var i = 0; i < evs.length; i++) {
        _loop_2(i);
    }
    return res;
}
function getLeftBounds(scan, v) {
    var left = [];
    var out = [];
    for (var key in scan) {
        var el = scan[key];
        if (el.x < v.x) {
            left.push(el);
        }
    }
    left.sort(function (a, b) { return (a.x > b.x ? -1 : 1); });
    for (var i = 0; i < left.length; i++) {
        var el = left[i];
        if (overlapX(el, v) <= 0) {
            out.push(el);
            break;
        }
        if (overlapX(el, v) <= overlapY(el, v))
            out.push(el);
    }
    return out;
}
function getRightBounds(scan, v) {
    var left = [];
    var out = [];
    for (var key in scan) {
        var el = scan[key];
        if (el.x > v.x) {
            left.push(el);
        }
    }
    left.sort(function (a, b) { return (a.x < b.x ? -1 : 1); });
    for (var i = 0; i < left.length; i++) {
        var el = left[i];
        if (overlapX(el, v) <= 0) {
            out.push(el);
            break;
        }
        if (overlapX(el, v) <= overlapY(el, v))
            out.push(el);
    }
    return out;
}
function overlapX(a, b) {
    return (a.w + b.w) / 2 - Math.abs(a.x - b.x);
}
function overlapY(a, b) {
    return (a.h + b.h) / 2 - Math.abs(a.y - b.y);
}
var piQuarter = Math.PI / 4;
var aligned = {}, alignedBase = 0;
function planarPlacement(r, mx, nodes, step) {
    aligned = {};
    alignedBase = nodes.length;
    nodes.forEach(function (a) { return (a.iss = ""); });
    var byCount = [].concat(nodes);
    var major = byCount
        .filter(function (a) { return a.links.length >= 3; })
        .sort(function (a, b) { return (a.links.length > b.links.length ? -1 : a.links.length == b.links.length ? 0 : 1); });
    var angles = major.map(function (a) {
        var angles = [];
        // select best position for each link
        // include two positions for each node
        a.links.forEach(function (b) {
            var angle = Math.atan2(b.x - a.x, b.y - a.y) + Math.PI;
            var axisA = Math.ceil(angle / (2 * piQuarter)) * 2 * piQuarter;
            var axisB = Math.floor(angle / (2 * piQuarter)) * 2 * piQuarter;
            // related node, axis, angle to axis
            angles.push([b, axisA, Math.abs(angle - axisA)]);
            angles.push([b, axisB, Math.abs(angle - axisB)]);
        });
        // sort by minimal angle
        angles.sort(function (a, b) { return (a[2] > b[2] ? 1 : -1); });
        return [a, angles];
    });
    // cores
    angles.forEach(function (_a) {
        var a = _a[0], angles = _a[1];
        var x = a.x, y = a.y;
        a.x = Math.round(a.x / step) * step;
        a.y = Math.round(a.y / step) * step;
        for (var i = 0; i < angles.length; i++) {
            //best match
            var t = angles[i];
            var b = t[0];
            // console.log(a.id, "->", b.id, a.x, a.y)
            //link already aligned
            if (r.getRoute(a.id, b.id))
                continue;
            var _b = detectDir(a, b, t[1], step, x, y), dx = _b[0], dy = _b[1], vx = _b[2], vy = _b[3];
            if (!r.hasRoute(a.id, vx, vy)) {
                if (r.isAligned(b.id)) {
                    //addBend(a, b, r, dx, dy, vx, vy, step);
                    // TODO - bend point
                }
                else {
                    b.x += dx;
                    b.y += dy;
                    r.addRoute(a.id, b.id, vx, vy);
                }
            }
        }
    });
    minStress(mx, nodes, nodes.filter(function (a) { return !r.isAligned(a.id); }), step);
    // chains
    major.forEach(function (a) {
        if (!r.isAligned(a.id)) {
            // if core node was not aligned, fix it position
            a.x = Math.round(a.x / step) * step;
            a.y = Math.round(a.y / step) * step;
        }
        a.links.forEach(function (b) {
            if (!r.isAligned(b.id)) {
                // if start of chain was not aligned, fix it position
                b.x = Math.round(b.x / step) * step;
                b.y = Math.round(b.y / step) * step;
            }
            if (b.links.length == 2) {
                routeLink(a, b, r, step);
            }
        });
    });
    if (major.length === 0) {
        // a single loop
        var a = nodes[0];
        var b = nodes[0].links[0];
        b.x = Math.round(b.x / step) * step;
        b.y = Math.round(b.y / step) * step;
        routeLink(a, b, r, step);
    }
}
function addBend(a, b, r, dx, dy, vx, vy, step) {
    //assume that other node can produce the ortogonal link
    // preffered patterns
    // - ortoganal nearest
    // - reverse + ortogonal
    // - back-reverse + ortogonal
    // - back-ortogonal + reverse +ortogonal
    r.addPath(a.id, b.id, vx, vy, []);
    r.addPath(b.id, a.id, -vx, -vy, []);
}
function routeLink(a, b, r, step) {
    while (true) {
        var next = b.links[0];
        if (next == a)
            next = b.links[1];
        a = b;
        b = next;
        if (b.links.length > 2)
            break;
        var angle = Math.atan2(b.x - a.x, b.y - a.y) + Math.PI;
        var axisA = Math.ceil(angle / (2 * piQuarter)) * 2 * piQuarter;
        var axisB = Math.floor(angle / (2 * piQuarter)) * 2 * piQuarter;
        var deltaA = Math.abs(angle - axisA);
        var deltaB = Math.abs(angle - axisB);
        var angles = deltaA < deltaB ? [axisA, axisB] : [axisB, axisA];
        for (var i = 0; i < angles.length; i++) {
            var _a = detectDir(a, b, angles[i], step, a.x, a.y), dx = _a[0], dy = _a[1], vx = _a[2], vy = _a[3];
            if (!r.hasRoute(a.id, vx, vy)) {
                if (r.isAligned(b.id)) {
                    //addBend(a, b, r, dx, dy, vx, vy, step);
                    return;
                }
                else {
                    b.x += dx;
                    b.y += dy;
                    r.addRoute(a.id, b.id, vx, vy);
                    break;
                }
            }
        }
    }
}
function detectDir(a, b, angle, step, ox, oy) {
    // 0 -> north, conter-clockwise
    if (angle <= piQuarter || angle > piQuarter * 7) {
        // north
        return [a.x - b.x, dd(a.y, b.y, oy, step), 0, -1]; // "n"
    }
    else if (angle <= piQuarter * 3 && angle > piQuarter) {
        // west
        return [dd(a.x, b.x, ox, step), a.y - b.y, -1, 0]; // "w"
    }
    else if (angle <= piQuarter * 5 && angle > piQuarter * 3) {
        // south
        return [a.x - b.x, dd(a.y, b.y, oy, step), 0, 1]; // "s"
    }
    else {
        // if (angle <= piQuarter*7 && angle > piQuarter*5){
        // east
        return [dd(a.x, b.x, ox, step), a.y - b.y, 1, 0]; // "e"
    }
}
function dd(a, b, ao, step) {
    // calculate shift to the best grid position
    var dir = Math.sign(ao - b);
    return a - b - (Math.round((ao - b) / step) || dir) * step;
}
var shortPlacementOrder = [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [-1, 0, 0, 0],
    [0, -1, 0, 0], //top
];
var longPlacementOrder = [
    //bottom-left
    [0, 1, -1, 1],
    [-1, 0, -1, 1],
    //bottom-right
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    //up-right
    [1, 0, 1, -1],
    [0, -1, 1, -1],
    //bottom-left
    [-1, 0, -1, -1],
    [0, -1, -1, -1], //up
];
var fullPlacementOrder = shortPlacementOrder.concat(longPlacementOrder);
function addSubTrees(m, mx, trees, step) {
    var coreSize = m.getNodes().length;
    trees.forEach(function (_a) {
        var g = _a.g, root = _a.root;
        new SymmetricTree_1.default().layout(g, { root: g.getNodes()[0].id });
        // find the minimal stress position in main 4 directions
        var match = findSubTreePlace(mx, fullPlacementOrder, m, g, root, step, coreSize);
        if (match) {
            m = match.g;
            // add edge to the linked tree
            var to = g.getRoot().id;
            if (!match.dir[2] && !match.dir[3]) {
                m.routes.addRoute(root, g.getRoot().id, match.dir[0], match.dir[1]);
            }
            m.hash[root].links.push(m.hash[to]);
            m.hash[to].links.push(m.hash[root]);
            return;
        }
        console.log("Can't position sub tree");
    });
    return m;
}
function findSubTreePlace(mx, order, m, g, root, step, coreSize) {
    return order
        .map(function (dir) {
        // when placing in ortogonal directions, ignore already routed ones
        if (!dir[2] && !dir[3] && m.routes.hasRoute(root, dir[0], dir[1]))
            return null;
        //set drop orientation
        var gCopy = g.copy();
        var mCopy = m.copy();
        var rNode = gCopy.getRoot();
        var aNode = mCopy.hash[root];
        gCopy.rotate({ x: -dir[0], y: dir[1] });
        var bounds = gCopy.getBox();
        var w = bounds[0][1] - bounds[0][0];
        var h = bounds[1][1] - bounds[1][0];
        var dx = rNode.x - bounds[0][0] - w / 2;
        var dy = rNode.y - bounds[1][0] - h / 2;
        //console.log(aNode.id, dir, rNode.id);
        reserveSpace(mCopy, aNode, w, h, dx, dy, step, dir);
        addSubTree(mCopy, gCopy, aNode, rNode, step, dir);
        var s = getStress(mx, mCopy.getNodes().slice(0, coreSize));
        //console.log(s)
        return { g: mCopy, s: s, dir: dir };
    })
        .reduce(function (acc, val) {
        return !acc || (val && val.s < acc.s) ? val : acc;
    });
}
function reserveSpace(g, n, w, h, dx, dy, step, dir) {
    var _a, _b;
    // shift when placing non-ortogonal
    var nX = n.x + (dir[2] || dir[0]) * step;
    var nY = n.y + (dir[3] || dir[1]) * step;
    // check the node target first
    if (isOccupied(g, nX - step / 2, nX + step / 2, nY - step / 2, nY + step / 2)) {
        // no free space at all, reserve for full graph
        clearSpace(g, nX - (step / 2) * dir[0], nY - (step / 2) * dir[1], w, h, dir, step);
        return;
    }
    var deep = (dir[0] ? w : h) / step - 1;
    if (deep <= 0)
        return;
    // for direction axis add root_size/2 + block size
    // for inderect axis align root of sub-block and root of block
    // add step/2 to disallow nodes without padding
    var xMin, xMax, yMin, yMax;
    var gap = step * 0.45;
    if (dir[0]) {
        // left, right
        xMin = nX + (step / 2) * dir[0];
        xMax = xMin + w * dir[0]; // do not add step, as first node is already placed
        yMin = nY - h / 2 - gap - dy;
        yMax = yMin + h + gap * 2;
    }
    else {
        // top, bottom
        xMin = nX - w / 2 - gap - dx;
        xMax = xMin + w + gap * 2;
        yMin = nY + (step / 2) * dir[1];
        yMax = yMin + h * dir[1];
    }
    if (yMin > yMax)
        _a = [yMax, yMin], yMin = _a[0], yMax = _a[1];
    if (xMin > xMax)
        _b = [xMax, xMin], xMin = _b[0], xMax = _b[1];
    if (isOccupied(g, xMin, xMax, yMin, yMax)) {
        clearSpace(g, nX, nY, w, h, dir, step);
    }
}
function clearSpace(g, nX, nY, w, h, dir, step) {
    // let affected = [];
    // if (dir[1]) {
    // 	console.log(Math.sign(dir[1]) ? ">" : "<", nY, (h + step) * dir[1]);
    // } else {
    // 	console.log(Math.sign(dir[0]) ? ">" : "<", nX, (w + step) * dir[0]);
    // }
    g.getNodes().forEach(function (a) {
        if (dir[1]) {
            if (Math.sign(a.y - nY) == dir[1]) {
                a.y += (h + step / 2) * dir[1];
                // affected.push(a.id);
            }
        }
        else if (dir[0]) {
            if (Math.sign(a.x - nX) == dir[0]) {
                a.x += (w + step / 2) * dir[0];
                // affected.push(a.id);
            }
        }
    });
    // console.log(affected);
}
function isOccupied(g, x1, x2, y1, y2) {
    var nodes = g.getNodes();
    for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        if (a.x >= x1 && a.x <= x2 && a.y >= y1 && a.y <= y2) {
            return true;
        }
    }
    return false;
}
function addSubTree(g, s, n, r, step, dir) {
    var x = n.x + step * (dir[0] || dir[2]) - r.x;
    var y = n.y + step * (dir[1] || dir[3]) - r.y;
    s.translate({ x: x, y: y });
    g.importNodes(s.getNodes());
}
function byTreeLength(a, b) {
    var ax = a.g.getNodes().length;
    var bx = b.g.getNodes().length;
    return ax > bx ? -1 : ax === bx ? 0 : 1;
}


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(59);
var Graph_1 = __webpack_require__(39);
var SymmetricTree = /** @class */ (function () {
    function SymmetricTree() {
        this._step = 0;
    }
    SymmetricTree.prototype.layout = function (g, config) {
        g.root(g.toTree(g.hash[config.root]));
        var nodes = g.getNodes();
        config.levelPadding = config.levelPadding || this._getStep(nodes);
        config.itemPadding = config.itemPadding || this._getStep(nodes);
        config.dir = config.dir || types_1.Direction.Bottom;
        config.rotate = config.dir === types_1.Direction.Right || config.dir === types_1.Direction.Left;
        var vector = types_1.DirVectors[config.dir];
        this._layout(g, config);
        g.setBox();
        if (config.dir !== types_1.Direction.Bottom) {
            g.rotate(vector);
        }
        var box = g.getBox();
        g.translate({ x: box[0][0] * -1, y: box[1][0] * -1 });
        g.setBox();
        return g;
    };
    SymmetricTree.prototype._layout = function (g, config) {
        var _this = this;
        var root = g.getRoot();
        root.x = root.y = 0;
        if (g.getLevels().length == 1) {
            g._symmetry = true;
            return "0";
        }
        var ctrees = root.kids.map(function (a) { return new Graph_1.default(g, a, config); });
        var itree = {};
        ctrees.forEach(function (c) {
            var code = _this._layout(c, config);
            if (!itree[code]) {
                itree[code] = [c];
            }
            else {
                itree[code].push(c);
            }
        });
        var classes = Object.keys(itree).sort(function (a, b) {
            var ta = itree[a][0];
            var tb = itree[b][0];
            var wa = ta._width;
            var wb = tb._width;
            if (wa > wb)
                return -1;
            if (wa < wb)
                return 1;
            var da = ta.getLevels().length;
            var db = tb.getLevels().length;
            if (da > db)
                return -1;
            if (da < db)
                return 1;
            return a < b ? 1 : -1;
        });
        // get number of non-paired sub-graphs
        var oddNumber = 0;
        var oddClass = 0;
        for (var i = 0; i < classes.length; i++) {
            if (itree[classes[i]].length % 2 === 1) {
                oddNumber++;
                oddClass = i;
            }
        }
        // detect symmetry
        var center = false;
        var symmetry = false;
        if (oddNumber == 1) {
            var oddTree = itree[classes[oddClass]][0];
            // [FIXME] probably any tree with balanced bounds need to be counted as symmetric
            if (oddTree._symmetry) {
                // center symmetric tree
                symmetry = true;
            }
            center = true;
            if (oddClass !== 0) {
                classes.unshift(classes[oddClass]);
                classes.splice(oddClass + 1, 1);
            }
        }
        else if (oddNumber === 0) {
            symmetry = true;
        }
        g._symmetry = symmetry;
        this._layout_place(g, itree, classes, center, config);
        return g.getIString();
    };
    SymmetricTree.prototype._layout_place = function (g, itree, classes, center, config) {
        var dir = { x: 0, y: config.levelPadding };
        var next = true;
        for (var i = 0; i < classes.length; i++) {
            var trees = itree[classes[i]];
            trees.forEach(function (t) {
                if (center) {
                    // only first tree can be placed in the center
                    center = false;
                    //move in position
                    t.translate(dir);
                    // update bounds
                    var sl = 0, su = 0;
                    var tb = t.getLevelBounds();
                    for (var j = 0; j < tb.length; j++) {
                        var _a = tb[j], l = _a[0], u = _a[1];
                        g._bounds[j + 1] = [l, u];
                        if (l < sl)
                            sl = l;
                        if (u > su)
                            su = u;
                    }
                    g._tbounds = [sl, su];
                }
                else {
                    var xu = next ? 1 : 0;
                    var xl = next ? 0 : 1;
                    if (next)
                        t.mirror();
                    var treeMaxBound = void 0, pos = void 0;
                    pos = treeMaxBound = 999999 * (next ? -1 : 1);
                    var padding = config.itemPadding;
                    for (var i_1 = 0; i_1 < t._bounds.length; i_1++) {
                        var test_1 = g.getBounds(i_1 + 1, padding, config.wide)[xu] -
                            t.getBounds(i_1, padding, config.wide)[xl];
                        if ((next && test_1 > pos) || (!next && test_1 < pos)) {
                            pos = test_1;
                        }
                    }
                    // move tree to the calculated position
                    t.translate({ x: pos, y: dir.y });
                    // update bounds
                    for (var i_2 = 0; i_2 < g._bounds.length; i_2++) {
                        var maxBound = void 0;
                        if (i_2 == 0 || i_2 > t._bounds.length) {
                            // level absent in sub-tree
                            maxBound = g._bounds[i_2][xu];
                        }
                        else {
                            // level present in sub-tree
                            maxBound = g._bounds[i_2][xu] = t._bounds[i_2 - 1][xu];
                        }
                        if ((next && maxBound > treeMaxBound) || (!next && maxBound < treeMaxBound)) {
                            treeMaxBound = maxBound;
                        }
                    }
                    g._tbounds[xu] = treeMaxBound;
                    next = !next;
                }
            });
        }
    };
    SymmetricTree.prototype._getStep = function (nodes) {
        if (this._step === 0) {
            var count = nodes.length;
            // 2 x Average Dimension
            var sum_1 = 0;
            nodes.forEach(function (n) { return (sum_1 += n.w + n.h); });
            this._step = sum_1 / count;
        }
        return this._step;
    };
    return SymmetricTree;
}());
exports.default = SymmetricTree;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var codes = [0x01, 0x02, 0x04, 0x08, 0x00, 0x10, 0x20, 0x40, 0x80];
var Routes = /** @class */ (function () {
    function Routes() {
        this._map = {};
    }
    Routes.prototype.getRoute = function (a, b) {
        var t = this._map[a];
        if (!t)
            return null;
        return t.map[b] || null;
    };
    Routes.prototype.addRoute = function (a, b, dx, dy) {
        this.addPath(a, b, dx, dy);
        this.addPath(b, a, -dx, -dy);
    };
    Routes.prototype.hasRoute = function (a, dx, dy) {
        var t = this._map[a];
        if (!t)
            return false;
        return (t.dir & this._code(dx, dy)) > 0;
    };
    Routes.prototype.isAligned = function (a) {
        return !!this._map[a];
    };
    Routes.prototype.isAxisAligned = function (a, dx, dy) {
        var t = this._map[a];
        if (!t)
            return null;
        for (var key in t.map) {
            var link = t.map[key];
            if ((dx && link.dy) || (dy && link.dx))
                return false;
        }
        return true;
    };
    Routes.prototype.addPath = function (a, b, dx, dy, points) {
        var t = this._map[a];
        if (!t) {
            t = this._map[a] = { map: {}, dir: 0 };
        }
        t.map[b] = { dx: dx, dy: dy, points: points };
        t.dir = t.dir | this._code(dx, dy);
    };
    Routes.prototype._code = function (dx, dy) {
        return codes[Math.sign(dx) + 1 + (Math.sign(dy) + 1) * 3];
    };
    return Routes;
}());
exports.default = Routes;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
var Graph_1 = __webpack_require__(39);
function split(g) {
    var core = g.getNodes();
    if (core.length < 3)
        return [{ g: g }];
    var first = core[0];
    var free = [];
    var count = core.length + 1;
    while (count != core.length) {
        count = core.length;
        core = core.filter(function (a) {
            if (a.links.length == 1) {
                var to = g.hash[a.links[0].id];
                if (to)
                    to.links = to.links.filter(function (b) { return b.id != a.id; });
                free.push(a);
                return false;
            }
            return true;
        });
    }
    //tree graph, no loops
    if (core.length < 2) {
        // restore links
        free.filter(function (a) { return a.links.length > 0; }).forEach(function (a) {
            a.links[0].links.push(a);
        });
        g.root(g.toTree(first));
        return [{ g: g }];
    }
    var freeHash = {};
    free.forEach(function (a) { return (freeHash[a.id] = a); });
    //detect roots
    var roots = free.filter(function (a) { return !freeHash[a.links[0].id]; }).map(function (a) { return [a]; });
    //restore bidirectional links
    free.forEach(function (a) {
        var to = freeHash[a.links[0].id];
        if (to)
            to.links.push(a);
    });
    var trees = roots.map(function (r) {
        var i = 0;
        var next;
        while ((next = r[i++])) {
            var lcount = next.links.length;
            if (lcount > 1)
                for (var i_1 = 1; i_1 < lcount; i_1++) {
                    var to = next.links[i_1];
                    r.push(to);
                }
        }
        var root = r[0].links.splice(0, 1)[0].id;
        return graphFromArray(r, root);
    });
    // core and trees
    return [graphFromArray(core, null)].concat(trees);
}
exports.split = split;
function graphFromArray(data, root) {
    var g = new Graph_1.default();
    g.importNodes(data);
    return { g: g, root: root };
}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(many, cfg) {
    if (many.length < 2)
        return many[0] || null;
    var ab = many[0].getBox();
    var dx = cfg.padding;
    var out = many.reduce(function (acc, v) {
        var bb = v.getBox();
        v.translate({ x: ab[0][1] - bb[0][0] + dx, y: ab[1][0] - bb[1][0] });
        acc.importNodes(v.getNodes());
        dx += cfg.padding + bb[0][1] - bb[0][0];
        return acc;
    });
    if (many.length)
        out.setGlobalBox();
    return out;
}
exports.compose = compose;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decompose = void 0;
function decompose(g) {
    var out = [];
    var _loop_1 = function () {
        var map = {};
        var n = g.getNodes();
        if (!n.length)
            return { value: out };
        visitAll(n[0], map);
        var sub = g.split(function (a) { return !map[a.id]; });
        out.push(g);
        if (sub) {
            g = sub;
        }
        else {
            return { value: out };
        }
    };
    while (true) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
exports.decompose = decompose;
function visitAll(n, visited) {
    visited[n.id] = 1;
    n.links.forEach(function (x) {
        if (!visited[x.id]) {
            visitAll(x, visited);
        }
    });
}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeMindmap = void 0;
var core_1 = __webpack_require__(1);
var linkPaths_1 = __webpack_require__(25);
var placement_1 = __webpack_require__(60);
function getAllUniqueShapeIds(treeMatrix) {
    var branchIds = [];
    treeMatrix.forEach(function (branch) {
        branch.forEach(function (shapeId) {
            if (!branchIds.includes(shapeId) && shapeId) {
                branchIds.push(shapeId);
            }
        });
    });
    return branchIds;
}
function getMaxBranchHeight(branch, data) {
    var _a;
    var maxHeight = 0;
    for (var index = 0; index < branch.length; index++) {
        var height = (_a = data.getItem(branch[1])) === null || _a === void 0 ? void 0 : _a.height;
        if (height && height > maxHeight)
            maxHeight = height;
    }
    return maxHeight;
}
function getBranchWidth(branch, data, config) {
    var allWidths = [];
    if (branch.length > 1) {
        branch.forEach(function (id, index) {
            var shape = data.getItem(id);
            if (index !== 0 && !shape.hidden && data.getItem(shape.parent).open) {
                allWidths.push(shape.width + config.margin.itemX);
            }
        });
    }
    if (!allWidths.length) {
        allWidths.push(0);
    }
    return allWidths.reduce(function (acc, curr) { return acc + curr; });
}
function getTreeWidth(treeMatrix, data, config) {
    var allWidths = [];
    treeMatrix.forEach(function (branch) {
        allWidths.push(getBranchWidth(branch, data, config));
    });
    return Math.max.apply(Math, allWidths);
}
function getMatrixTree(data, tree) {
    var matrixTree = [];
    function traverse(tree) {
        tree.forEach(function (branchIds) {
            var shape = data.getItem(branchIds[1]);
            if (shape.$connection) {
                traverse(shape.$connection);
            }
            else {
                var currentParent = (shape.parent && shape.parent.toString()) || data.getItem(data.getId(0)).id;
                var currentBranch = [];
                currentBranch.push(shape.id.toString());
                while (currentParent) {
                    currentBranch.push(currentParent.toString());
                    currentParent = data.getItem(currentParent).parent;
                }
                currentBranch.reverse();
                matrixTree.push(currentBranch);
            }
        });
        return matrixTree;
    }
    traverse(tree);
    return matrixTree;
}
function divideRootDirectChildren(root, data, _a) {
    var _b, _c;
    var typeConfig = _a.typeConfig;
    var rootChild = root.$connection;
    var leftTree = [];
    var rightTree = [];
    var isLeftSide = ((_b = typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.side) === null || _b === void 0 ? void 0 : _b.hasOwnProperty("left")) && typeConfig.side.left.length;
    var isRightSide = ((_c = typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.side) === null || _c === void 0 ? void 0 : _c.hasOwnProperty("right")) && typeConfig.side.right.length;
    if (typeConfig && ((typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.direction) === "left" || (typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.direction) === "right")) {
        rootChild.forEach(function (childArray) {
            if (typeConfig.direction === "left") {
                leftTree.push(childArray);
            }
            else {
                rightTree.push(childArray);
            }
        });
    }
    else if (typeConfig && (isLeftSide || isRightSide)) {
        rootChild.forEach(function (childArray, index) {
            if (isLeftSide && typeConfig.side.left.includes(childArray[1])) {
                leftTree.push(childArray);
            }
            else if (isRightSide && typeConfig.side.right.includes(childArray[1])) {
                rightTree.push(childArray);
            }
            else {
                index % 2 ? leftTree.push(childArray) : rightTree.push(childArray);
            }
        });
    }
    else {
        var rightCount_1 = Math.floor(rootChild.length / 2);
        rootChild.forEach(function (childArray, index) {
            var shape = data.getItem(childArray[1]);
            if (shape.dir === "verticalLeft") {
                leftTree.push(childArray);
            }
            else if (shape.dir === "verticalRight") {
                rightTree.push(childArray);
            }
            else {
                index < rightCount_1 ? rightTree.push(childArray) : leftTree.push(childArray);
            }
        });
    }
    return { leftTree: leftTree, rightTree: rightTree };
}
function setupNodesSizes(branches, config, data, dx, reverse, rootElementPositions) {
    var unique = getAllUniqueShapeIds(branches);
    var currentY = 0;
    var _a = config.margin, itemX = _a.itemX, itemY = _a.itemY;
    var nodesWithSizesArray = branches.map(function (branch) {
        var widthArray = [];
        var heightArray = [];
        var currentX = dx;
        branch.forEach(function (shape) {
            if (!reverse) {
                var item = __assign({}, data.getItem(shape));
                widthArray.push(currentX);
                heightArray.push(currentY);
                currentX += +itemX + +item.width;
            }
            else {
                var item = __assign({}, data.getItem(shape));
                if (item.parent) {
                    currentX -= +itemX + +item.width;
                }
                widthArray.push(currentX);
                heightArray.push(currentY);
            }
        });
        var result = branch.map(function (node, indx) {
            var item = __assign({}, data.getItem(node));
            item._x = widthArray[indx];
            item._y = heightArray[indx];
            return item;
        });
        var maxHeight = getMaxBranchHeight(branch, data);
        currentY += itemY + maxHeight;
        return result;
    });
    var coordinatesArray = unique.map(function (id) {
        var arr = [];
        nodesWithSizesArray.forEach(function (row) {
            var item = row.find(function (item) { return item.id === id; }, true);
            if (item)
                arr.push({ x: item._x, y: item._y });
        });
        var x = arr[0].x;
        var y = arr.reduce(function (acc, curr) { return acc + curr.y; }, 0) / arr.length;
        return { id: id, x: x, y: y };
    });
    rootElementPositions.push(coordinatesArray[0]);
    unique.forEach(function (id, indx) {
        if (id) {
            var item = data.getItem(id);
            item.x = coordinatesArray[indx].x;
            item.y = coordinatesArray[indx].y;
            delete item._x;
            delete item._y;
        }
    });
}
function hCorrection(branches, diff, data) {
    var unique = getAllUniqueShapeIds(branches);
    unique.forEach(function (id) {
        if (id && data.getIndex(id) !== 0) {
            var item = data.getItem(id);
            item.y += diff;
        }
    });
}
function setupLinks(treeIdsArray, dir, data, config, root) {
    treeIdsArray.forEach(function (id) {
        var item = data.getItem(id);
        var kids = item.$connection;
        if (item.id !== root.id)
            item.dir = dir;
        if (kids) {
            item.$count = kids.length;
            kids.forEach(function (kid) {
                if (treeIdsArray.includes(kid[1])) {
                    var sub = data.getItem(kid[1]);
                    var link = data.getItem(kid[0]);
                    link.connectType = "curved";
                    (0, linkPaths_1.directLinkPath)(link, item, sub, config);
                }
            });
        }
    });
}
function verticalCorrection(rootPosition, rightBranches, leftBranches, data, root) {
    if (rootPosition[1] && rootPosition[0].y > rootPosition[1].y) {
        hCorrection(rightBranches, rootPosition[0].y - rootPosition[1].y, data);
        root.y = rootPosition[0].y;
    }
    else if (rootPosition[1] && rootPosition[0].y < rootPosition[1].y) {
        hCorrection(leftBranches, rootPosition[1].y - rootPosition[0].y, data);
        root.y = rootPosition[1].y;
    }
}
var getUniqueCallback = function (value, index, self) {
    return self.indexOf(value) === index;
};
function removeRepetitiveBranches(matrix) {
    return matrix
        .map(function (item) { return JSON.stringify(item); })
        .filter(getUniqueCallback)
        .map(function (item) { return JSON.parse(item); });
}
function removeClosedBranches(data, branches) {
    var isClosed = [];
    var filteredBranches = branches.map(function (branch) {
        var restIgnore = false;
        return branch
            .map(function (id) {
            if (restIgnore) {
                return;
            }
            else {
                var item = data.getItem(id);
                if (item.open === false) {
                    isClosed.push(id);
                    restIgnore = true;
                }
                return id;
            }
        })
            .filter(function (item) { return item; });
    });
    return removeRepetitiveBranches(filteredBranches);
}
function setupBranch(data, config, tree, branchHorizontalOffset, rootPosition, isLeft) {
    if (isLeft) {
        var allLeftBranches = removeClosedBranches(data, getMatrixTree(data, tree));
        branchHorizontalOffset = getTreeWidth(allLeftBranches, data, config);
        setupNodesSizes(allLeftBranches, config, data, branchHorizontalOffset, true, rootPosition);
        return { allLeftBranches: allLeftBranches, leftBranchWidth: branchHorizontalOffset };
    }
    else {
        var allRightBranches = removeClosedBranches(data, getMatrixTree(data, tree));
        setupNodesSizes(allRightBranches, config, data, branchHorizontalOffset, false, rootPosition);
        return { allRightBranches: allRightBranches };
    }
}
function placeMindmap(data, config) {
    var roots = data.getRoots();
    if (roots.length !== 1)
        return;
    var root = data.getItem(roots[0]);
    if (root === null || root === void 0 ? void 0 : root.$connection) {
        var _a = divideRootDirectChildren(root, data, config), leftTree = _a.leftTree, rightTree = _a.rightTree;
        var rootElementPositions_1 = [];
        var allRightBranches_1;
        var allLeftBranches_1;
        var branchHorizontalOffset_1 = 0;
        [leftTree, rightTree].forEach(function (tree, treeIndx) {
            if (tree.length) {
                if (treeIndx === 0) {
                    var res = setupBranch(data, config, tree, branchHorizontalOffset_1, rootElementPositions_1, true);
                    allLeftBranches_1 = res.allLeftBranches;
                    branchHorizontalOffset_1 = res.leftBranchWidth;
                }
                else {
                    var res = setupBranch(data, config, tree, branchHorizontalOffset_1, rootElementPositions_1);
                    allRightBranches_1 = res.allRightBranches;
                }
            }
        });
        if (leftTree.length && rightTree.length) {
            verticalCorrection(rootElementPositions_1, allRightBranches_1, allLeftBranches_1, data, root);
        }
        var rootDir_1 = [];
        [leftTree, rightTree].forEach(function (tree, treeIndx) {
            if (tree.length) {
                var dir_1 = treeIndx === 0 ? "verticalLeft" : "verticalRight";
                var branches = dir_1 === "verticalLeft" ? allLeftBranches_1 : allRightBranches_1;
                !rootDir_1.includes(dir_1) && rootDir_1.push(dir_1);
                root.dir = rootDir_1;
                tree.forEach(function (childIds) {
                    var item = data.getItem(childIds[1]);
                    item.dir = dir_1;
                });
                setupLinks(getAllUniqueShapeIds(branches), dir_1, data, config, root);
            }
        });
        if (Array.isArray(root.dir)) {
            if ((0, core_1.isEmptyObj)(root.openDir))
                root.openDir = {};
            if (root.dir.includes("verticalLeft") && !Object.keys(root.openDir).includes("left")) {
                root.openDir.left = typeof root.open === "undefined" ? true : root.open;
            }
            if (root.dir.includes("verticalRight") && !Object.keys(root.openDir).includes("right")) {
                root.openDir.right = typeof root.open === "undefined" ? true : root.open;
            }
            if (root.open === false)
                root.openDir = { right: false, left: false };
        }
        root.$connection.forEach(function (childId) {
            var childDir = data.getItem(childId[1]).dir.toLowerCase();
            for (var _i = 0, _a = Object.entries(root.openDir); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (childDir.includes(key) && !value) {
                    data.update(childId[1], {
                        hidden: true,
                    }, true);
                }
            }
        });
    }
    else {
        root.x = 0;
        root.y = 0;
    }
    (0, placement_1.setHeaderColor)(data);
}
exports.placeMindmap = placeMindmap;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrgonogram = void 0;
var linkPaths_1 = __webpack_require__(25);
var placement_1 = __webpack_require__(60);
function setLocalSizes(data, shape, config, vbranch, extra) {
    var _a;
    var kids = shape.$connection;
    var assistants = shape.$assistants;
    var partners = (_a = shape.$partners) === null || _a === void 0 ? void 0 : _a.common;
    if ((shape.dir === "vertical" && (partners === null || partners === void 0 ? void 0 : partners.length)) ||
        (shape.$level === 0 && (shape.openDir || Array.isArray(shape.dir))) ||
        shape.dir === "verticalLeft" ||
        shape.dir === "verticalRight") {
        delete shape.dir;
        delete shape.openDir;
    }
    var vertical = shape.dir === "vertical";
    var correction = vertical ? config.margin.itemX / 2 : 0;
    var kidsWidth = 0;
    var kidsHeight = 0;
    var baseHeight = 0;
    if (kids && shape.open !== false && !shape.assistant && !shape.partner) {
        var count = 0;
        for (var i = 0; i < kids.length; i++) {
            var sub = data.getItem(kids[i][1]);
            if (!sub.hidden && !sub.assistant && !sub.partner) {
                var dx = setLocalSizes(data, sub, config, vbranch + correction, correction);
                if (vertical) {
                    kidsWidth = Math.max(kidsWidth, dx);
                }
                else {
                    kidsWidth += dx;
                }
                count++;
            }
        }
        if (count && !vertical) {
            kidsWidth += (count - 1) * config.margin.itemX;
        }
        shape.$count = count;
    }
    if (partners === null || partners === void 0 ? void 0 : partners.length) {
        var leftSideHeight = 0;
        var rightSideHeight = 0;
        var maxSideWidth = 0;
        for (var index = 0; index < partners.length; index++) {
            var sub = data.getItem(partners[index]);
            var height = sub.height + config.margin.itemY;
            var width = sub.width + config.margin.itemX;
            sub.$even = !!(index % 2);
            if (!sub.hidden) {
                if (sub.$even) {
                    rightSideHeight += height;
                }
                else {
                    leftSideHeight += height;
                }
                maxSideWidth = Math.max(maxSideWidth, width);
                ++shape.$count;
            }
        }
        baseHeight = Math.max(leftSideHeight, rightSideHeight);
        kidsWidth = Math.max(kidsWidth, !rightSideHeight
            ? Math.max(maxSideWidth - config.margin.itemX / 2, shape.width + config.margin.itemX / 2) * 2
            : maxSideWidth * 2 + shape.width);
        shape.$partners.leftHeight = leftSideHeight;
        shape.$partners.rightHeight = rightSideHeight;
    }
    if (assistants === null || assistants === void 0 ? void 0 : assistants.length) {
        var maxSideWidth = 0;
        var leftSideHeight = 0;
        var rightSideHeight = 0;
        for (var index = 0; index < assistants.length; index++) {
            var sub = data.getItem(assistants[index]);
            var height = sub.height + config.margin.itemY;
            var width = sub.width + config.margin.itemX / 2;
            sub.$even = !!(index % 2);
            if (!sub.hidden) {
                if (sub.$even) {
                    rightSideHeight += height;
                }
                else {
                    leftSideHeight += height;
                }
                maxSideWidth = Math.max(maxSideWidth, width);
                ++shape.$count;
            }
        }
        if (vertical) {
            kidsWidth = Math.max(kidsWidth, maxSideWidth);
            kidsHeight = leftSideHeight + rightSideHeight;
        }
        else {
            kidsWidth = Math.max(kidsWidth, maxSideWidth * 2);
            kidsHeight = Math.max(rightSideHeight, leftSideHeight);
        }
    }
    kidsWidth = Math.max(shape.width, kidsWidth);
    if (!vertical) {
        var gridStep = config.gridStep || 1;
        var width = (kidsWidth - shape.width) / 2 + vbranch;
        shape.x = Math.ceil(width / gridStep) * gridStep;
    }
    else {
        shape.x = vbranch;
    }
    shape.y = 0;
    shape.$width = kidsWidth;
    shape.$baseHeight = baseHeight ? baseHeight : shape.height + config.margin.itemY;
    shape.$height = kidsHeight + shape.$baseHeight;
    return kidsWidth + extra;
}
function setGlobalSizes(data, shape, left, top, config, level) {
    var _a;
    var kids = shape.$connection;
    var assistants = shape.$assistants;
    var partners = (_a = shape.$partners) === null || _a === void 0 ? void 0 : _a.common;
    var vertical = shape.dir === "vertical";
    var localtop = 0;
    shape.x += left;
    shape.y += top;
    if (config.gridStep) {
        shape.y = Math.ceil(shape.y / config.gridStep) * config.gridStep;
    }
    if (assistants === null || assistants === void 0 ? void 0 : assistants.length) {
        var gapX = config.margin.itemX / 2;
        var midPointX = shape.x + shape.width / 2;
        var lastLefPointY = shape.y + shape.$baseHeight;
        var lastRightPointY = shape.y + shape.$baseHeight;
        for (var index = 0; index < assistants.length; index++) {
            var sub = data.getItem(assistants[index]);
            var height = sub.height + config.margin.itemY;
            if (!sub.hidden) {
                if (vertical) {
                    sub.x = shape.x + gapX;
                    sub.y = lastRightPointY;
                    lastRightPointY += height;
                }
                else {
                    if (sub.$even) {
                        sub.y = lastRightPointY;
                        sub.x = midPointX + gapX;
                        lastRightPointY += height;
                    }
                    else {
                        sub.y = lastLefPointY;
                        sub.x = midPointX - (gapX + sub.width);
                        lastLefPointY += height;
                    }
                }
            }
        }
    }
    if (partners === null || partners === void 0 ? void 0 : partners.length) {
        var shapeY = shape.y + (shape.$baseHeight / 2 - (shape.height + config.margin.itemY) / 2);
        var offsetY = shapeY - shape.y;
        var lastLeftPointY = shapeY - offsetY + (shape.$baseHeight - shape.$partners.leftHeight) / 2;
        var lastRightPointY = shapeY - offsetY + (shape.$baseHeight - shape.$partners.rightHeight) / 2;
        if (partners.length > 1) {
            for (var index = 0; index < partners.length; index++) {
                var sub = data.getItem(partners[index]);
                var height = sub.height + config.margin.itemY;
                if (!sub.hidden) {
                    if (sub.$even) {
                        sub.x = shape.x + shape.width + config.margin.itemX;
                        sub.y = lastRightPointY;
                        lastRightPointY += height;
                    }
                    else {
                        sub.x = shape.x - sub.width - config.margin.itemX;
                        sub.y = lastLeftPointY;
                        lastLeftPointY += height;
                    }
                }
            }
        }
        else {
            shape.x = shape.x + shape.width / 2 + config.margin.itemX / 2;
            var sub = data.getItem(partners[0]);
            sub.x = shape.x - sub.width - config.margin.itemX;
            sub.y = lastLeftPointY;
        }
        shape.y = shapeY;
    }
    top += shape.$height;
    if (shape.open !== false && kids) {
        var sub = void 0;
        for (var i = 0; i < kids.length; i++) {
            sub = data.getItem(kids[i][1]);
            if (!sub.hidden) {
                if (!sub.assistant && !sub.partner) {
                    var pos = setGlobalSizes(data, sub, left, top, config, level + 1);
                    if (vertical) {
                        top += pos;
                        localtop += pos;
                    }
                    else {
                        localtop = Math.max(localtop, pos);
                        left += sub.$width + config.margin.itemX;
                    }
                }
                (0, linkPaths_1.directLinkPath)(data.getItem(kids[i][0]), shape, sub, config);
            }
        }
    }
    return shape.$height + localtop;
}
function placeOrgonogram(data, config) {
    var roots = data.getRoots();
    if (roots.length !== 1) {
        return;
    }
    var root = data.getItem(roots[0]);
    setLocalSizes(data, root, config, 0, 0);
    setGlobalSizes(data, root, 0, 0, config, 0);
    (0, placement_1.setHeaderColor)(data);
}
exports.placeOrgonogram = placeOrgonogram;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = exports.EditorEvents = void 0;
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var KeyManager_1 = __webpack_require__(15);
var EditorEvents;
(function (EditorEvents) {
    EditorEvents["beforeEditorOpen"] = "beforeEditorOpen";
    EditorEvents["afterEditorOpen"] = "afterEditorOpen";
    EditorEvents["beforeEditorClose"] = "beforeEditorClose";
    EditorEvents["afterEditorClose"] = "afterEditorClose";
    EditorEvents["beforeEditorEditing"] = "beforeEditorEditing";
    EditorEvents["afterEditorEditing"] = "afterEditorEditing";
})(EditorEvents || (exports.EditorEvents = EditorEvents = {}));
var Editor = /** @class */ (function () {
    function Editor(config) {
        var _this = this;
        this._currentValue = " ";
        this.data = config.data;
        this.events = config.events;
        this._keyManager = new KeyManager_1.KeyManager();
        this._dblDuration = 300;
        this._documentClick = function (event) {
            if (!(0, html_1.locate)(event, "dhx_editor_id"))
                _this.closeEditor();
        };
        this._handlers = {
            edit: function (event) {
                _this.edit(event.target.innerText);
            },
            didInsert: function (node) {
                var element = node === null || node === void 0 ? void 0 : node.el;
                if (element === null || element === void 0 ? void 0 : element.childNodes[0]) {
                    var range = document.createRange();
                    var selection = window.getSelection();
                    range.setStart(element.childNodes[0], element.innerText.length);
                    range.collapse(true);
                    if (selection) {
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                    element.focus();
                }
            },
        };
    }
    Editor.prototype.openEditor = function (id, key, subId) {
        var _a, _b;
        if (key === void 0) { key = "text"; }
        var item = this.data.getItem(id);
        if (!item || this._editable || !this.events.fire(EditorEvents.beforeEditorOpen, [id, key, subId])) {
            return false;
        }
        this._addHotkeys();
        this._initOuterClick();
        this.data.update(id, { $editable: true }, true);
        this._editableItem = item;
        this._editable = true;
        this._key = key;
        this._subId = subId;
        var type = this._editableItem.$item.getBaseType();
        if (type === "group" || type === "swimlane") {
            if (subId) {
                var _c = this._editableItem, subHeaderRows = _c.subHeaderRows, subHeaderCols = _c.subHeaderCols;
                var subHeaderRow = [];
                if ((subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.enable) && ((_a = subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.headers) === null || _a === void 0 ? void 0 : _a.length)) {
                    subHeaderRow = subHeaderRows.headers;
                }
                var subHeaderCol = [];
                if ((subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.enable) && ((_b = subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.headers) === null || _b === void 0 ? void 0 : _b.length)) {
                    subHeaderCol = subHeaderCols.headers;
                }
                var subHeaders = __spreadArray(__spreadArray([], subHeaderRow, true), subHeaderCol, true);
                var subHeader = subHeaders.find(function (header) { return (header === null || header === void 0 ? void 0 : header.id) === subId; });
                this._currentValue = subHeader === null || subHeader === void 0 ? void 0 : subHeader[key];
            }
            else {
                this._currentValue = this._editableItem.header[key];
            }
        }
        else {
            this._currentValue = this._editableItem[key];
        }
        this.events.fire(EditorEvents.afterEditorOpen, [id, this._key, this._subId]);
        return true;
    };
    Editor.prototype.closeEditor = function () {
        var id = this._editableItem.id;
        if (!this.events.fire(EditorEvents.beforeEditorClose, [id, this._key, this._subId]))
            return false;
        this._removeHotkeys();
        this._removeClickListener();
        this.data.update(id, { $editable: false }, true);
        this._editable = false;
        this.events.fire(EditorEvents.afterEditorClose, [id, this._key, this._subId]);
        this._editableItem = null;
        this._subId = null;
        this._currentValue = " ";
        return true;
    };
    Editor.prototype.isEditable = function () {
        return this._editable;
    };
    Editor.prototype.destructor = function () {
        this._keyManager && this._keyManager.destructor();
        this.data = this.events = this._editable = this._editableItem = this._currentValue = this._keyManager = null;
    };
    Editor.prototype.render = function () {
        var id = this._editableItem.id;
        return (0, dom_1.el)("div.dhx_diagram_inline_editor", {
            dhx_editor_id: id + "_editor",
            contentEditable: true,
            oninput: this._handlers.edit,
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
        }, this._currentValue || " ");
    };
    Editor.prototype.edit = function (value) {
        var _a, _b;
        var _this = this;
        var _c, _d;
        if (!this._editableItem ||
            !this.events.fire(EditorEvents.beforeEditorEditing, [
                value,
                this._currentValue,
                this._editableItem.id,
                this._key,
                this._subId,
            ])) {
            return;
        }
        var _e = this._editableItem, id = _e.id, header = _e.header, $item = _e.$item, subHeaderCols = _e.subHeaderCols, subHeaderRows = _e.subHeaderRows;
        this._currentValue = value;
        var type = $item.getBaseType();
        if (type === "group" || type === "swimlane") {
            if (this._subId) {
                var subHeaderRow = (_c = subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.headers) === null || _c === void 0 ? void 0 : _c.findIndex(function (header) { return (header === null || header === void 0 ? void 0 : header.id) === _this._subId; });
                var subHeaderCol = (_d = subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.headers) === null || _d === void 0 ? void 0 : _d.findIndex(function (header) { return (header === null || header === void 0 ? void 0 : header.id) === _this._subId; });
                if (subHeaderCol > -1) {
                    var headers = __spreadArray([], subHeaderCols.headers, true);
                    headers[subHeaderCol][this._key] = this._currentValue;
                    this.data.update(id, {
                        subHeaderCols: __assign(__assign({}, subHeaderCols), { headers: headers }),
                    });
                }
                if (subHeaderRow > -1) {
                    var headers = __spreadArray([], subHeaderRows.headers, true);
                    headers[subHeaderRow][this._key] = this._currentValue;
                    this.data.update(id, {
                        subHeaderRows: __assign(__assign({}, subHeaderRows), { headers: headers }),
                    });
                }
            }
            else {
                this.data.update(id, {
                    header: __assign(__assign({}, header), (_a = {}, _a[this._key] = this._currentValue, _a)),
                });
            }
        }
        else {
            this.data.update(id, (_b = {},
                _b[this._key] = this._currentValue,
                _b));
        }
        this.events.fire(EditorEvents.afterEditorEditing, [this._currentValue, id, this._key, this._subId]);
    };
    Editor.prototype._addHotkeys = function () {
        var _this = this;
        this._keyManager.addHotKey("escape", function () {
            _this.closeEditor();
        });
    };
    Editor.prototype._removeHotkeys = function () {
        this._keyManager.removeHotKey();
    };
    Editor.prototype._initOuterClick = function () {
        var _this = this;
        setTimeout(function () {
            document.addEventListener("pointerdown", _this._documentClick);
        }, this._dblDuration);
    };
    Editor.prototype._removeClickListener = function () {
        document.removeEventListener("pointerdown", this._documentClick);
    };
    return Editor;
}());
exports.Editor = Editor;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellManager = exports.CellManagerEvents = void 0;
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var CellManagerEvents;
(function (CellManagerEvents) {
    CellManagerEvents["beforeCellsAdd"] = "beforeCellsAdd";
    CellManagerEvents["afterCellsAdd"] = "afterCellsAdd";
    CellManagerEvents["beforeCellsMove"] = "beforeCellsMove";
    CellManagerEvents["afterCellsMove"] = "afterCellsMove";
    CellManagerEvents["beforeCellsRemove"] = "beforeCellsRemove";
    CellManagerEvents["afterCellsRemove"] = "afterCellsRemove";
    CellManagerEvents["beforeCellsValidation"] = "beforeCellsValidation";
    CellManagerEvents["afterCellsValidation"] = "afterCellsValidation";
})(CellManagerEvents || (exports.CellManagerEvents = CellManagerEvents = {}));
var CellManager = /** @class */ (function () {
    function CellManager(data, events) {
        this.events = events;
        this.data = data;
        this.swimlane = null;
    }
    CellManager.prototype.setSwimlane = function (id) {
        var _a;
        var swimlane = this.data.getItem(id);
        if (((_a = swimlane === null || swimlane === void 0 ? void 0 : swimlane.$item) === null || _a === void 0 ? void 0 : _a.getBaseType()) === "swimlane") {
            this.swimlane = swimlane;
            return true;
        }
        return false;
    };
    CellManager.prototype.resetSwimlane = function () {
        var _this = this;
        (0, dom_1.awaitRedraw)().then(function () {
            _this.swimlane = null;
        });
    };
    CellManager.prototype.add = function (cellIndex, dir, unstrict) {
        var _this = this;
        (0, dom_1.awaitRedraw)().then(function () {
            var _a, _b;
            var type = _this.getDirectionType(dir);
            var uniqueLayout = _this.getUniqueLayout();
            var maxIndex = type === "col" ? ((_a = uniqueLayout[0]) === null || _a === void 0 ? void 0 : _a.length) - 1 : (uniqueLayout === null || uniqueLayout === void 0 ? void 0 : uniqueLayout.length) - 1;
            var isIndexCorrect = cellIndex >= 0 && cellIndex <= maxIndex;
            if (!isIndexCorrect ||
                !_this.events.fire(CellManagerEvents.beforeCellsAdd, [_this.swimlane.id]) ||
                (!unstrict && !_this.validation(cellIndex, dir, "add"))) {
                return;
            }
            var layout = _this.swimlane.layout;
            var targetIndex = cellIndex;
            var targetId = type === "col" ? layout[0][targetIndex] : layout[targetIndex][0];
            var targetItem = _this.data.getItem(targetId);
            var placeIndexOffset = type === "col" ? targetItem === null || targetItem === void 0 ? void 0 : targetItem.$colCount : targetItem === null || targetItem === void 0 ? void 0 : targetItem.$rowCount;
            var subHeader = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"];
            var isSubHeaderEnable = (subHeader === null || subHeader === void 0 ? void 0 : subHeader.enable) && ((_b = subHeader === null || subHeader === void 0 ? void 0 : subHeader.headers) === null || _b === void 0 ? void 0 : _b.length);
            var headers;
            var headerIndex;
            if (isSubHeaderEnable) {
                headers = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"].headers;
                headerIndex = _this.getSubHeaderIndex(_this.getCellId(cellIndex, type), type);
            }
            var measureOffset = +Infinity;
            var placeIndex = targetIndex;
            if (dir === "right" || dir === "down") {
                placeIndex += placeIndexOffset;
                isSubHeaderEnable && headerIndex++;
            }
            if (placeIndex < 0)
                placeIndex = 0;
            var newCells = {};
            var placed = {};
            var mutable = {};
            for (var i = 0; i < layout.length; i++) {
                var rows = layout[i];
                for (var k = 0; k < rows.length; k++) {
                    if (type === "col") {
                        var cell = _this.data.getItem(rows[k]);
                        if (cell && measureOffset > cell.width)
                            measureOffset = cell.width;
                        if (k === targetIndex) {
                            if (placed[cell.id]) {
                                layout[i].splice(placeIndex, 0, placed[cell.id]);
                            }
                            else {
                                var id = (0, core_1.uid)();
                                newCells[id] = { id: id, type: "$sgroup" };
                                layout[i].splice(placeIndex, 0, id);
                                placed[cell.id] = id;
                            }
                        }
                    }
                    if (type === "row") {
                        var cell = _this.data.getItem(rows[k]);
                        if (cell && measureOffset > cell.height)
                            measureOffset = cell.height;
                        if (i === targetIndex) {
                            var id = (0, core_1.uid)();
                            if (k === 0) {
                                layout.splice(placeIndex, 0, []);
                            }
                            if (placed[cell.id]) {
                                layout[placeIndex][k] = placed[cell.id];
                            }
                            else {
                                newCells[id] = { id: id, type: "$sgroup" };
                                layout[placeIndex][k] = id;
                                placed[cell.id] = id;
                            }
                        }
                    }
                }
            }
            for (var i = 0; i < layout.length; i++) {
                var rows = layout[i];
                for (var k = 0; k < rows.length; k++) {
                    if (type === "col") {
                        var cellId = rows[k];
                        if (k > placeIndex && !mutable[cellId]) {
                            _this.data.eachChild(cellId, function (item) {
                                item.x += measureOffset;
                            });
                            mutable[cellId] = true;
                        }
                    }
                    if (type === "row") {
                        var cellId = rows[k];
                        if (i > placeIndex && !mutable[cellId]) {
                            _this.data.eachChild(cellId, function (item) {
                                item.y += measureOffset;
                            });
                            mutable[cellId] = true;
                        }
                    }
                }
            }
            isSubHeaderEnable && headers.splice(headerIndex, 0, { text: "Untitled", id: (0, core_1.uid)() });
            var config = { layout: layout };
            if (type === "col") {
                config.width = _this.swimlane.width + measureOffset;
            }
            else {
                config.height = _this.swimlane.height + measureOffset;
            }
            _this.data.add(Object.values(newCells));
            _this.data.update(_this.swimlane.id, config);
            _this.events.fire(CellManagerEvents.afterCellsAdd, [_this.swimlane.id]);
        });
    };
    CellManager.prototype.move = function (cellIndex, dir, unstrict) {
        var _this = this;
        (0, dom_1.awaitRedraw)().then(function () {
            var _a;
            var _b, _c;
            var type = _this.getDirectionType(dir);
            var uniqueLayout = _this.getUniqueLayout();
            var maxIndex = type === "col" ? ((_b = uniqueLayout[0]) === null || _b === void 0 ? void 0 : _b.length) - 1 : (uniqueLayout === null || uniqueLayout === void 0 ? void 0 : uniqueLayout.length) - 1;
            var isIndexCorrect = cellIndex >= 0 && cellIndex <= maxIndex;
            if (!isIndexCorrect ||
                !_this.events.fire(CellManagerEvents.beforeCellsMove, [_this.swimlane.id]) ||
                (!unstrict && !_this.validation(cellIndex, dir, "move"))) {
                return;
            }
            var layout = _this.swimlane.layout;
            var subHeader = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"];
            var isSubHeaderEnable = (subHeader === null || subHeader === void 0 ? void 0 : subHeader.enable) && ((_c = subHeader === null || subHeader === void 0 ? void 0 : subHeader.headers) === null || _c === void 0 ? void 0 : _c.length);
            var headers;
            var headerIndex;
            if (isSubHeaderEnable) {
                headers = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"].headers;
                headerIndex = _this.getSubHeaderIndex(_this.getCellId(cellIndex, type), type);
            }
            var targetIndex = cellIndex;
            var targetId = type === "col" ? layout[0][targetIndex] : layout[targetIndex][0];
            var firstTarget = _this.data.getItem(targetId);
            var placedHeaderIndex = dir === "right" || dir === "down" ? headerIndex + 1 : headerIndex - 1;
            var placedHeaderId = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"].headers[placedHeaderIndex].id;
            var firstPlaced = _this.data.getItem(_this.getSubHeaderCellId(placedHeaderId));
            var targetIndexOffset = type === "col" ? firstTarget === null || firstTarget === void 0 ? void 0 : firstTarget.$colCount : firstTarget === null || firstTarget === void 0 ? void 0 : firstTarget.$rowCount;
            var placedIndexOffset = type === "col" ? firstPlaced === null || firstPlaced === void 0 ? void 0 : firstPlaced.$colCount : firstPlaced === null || firstPlaced === void 0 ? void 0 : firstPlaced.$rowCount;
            var placedIndex = dir === "left" || dir === "up"
                ? targetIndex - placedIndexOffset
                : targetIndex + targetIndexOffset;
            var mutable = {};
            var moved = [];
            for (var i = 0; i < layout.length; i++) {
                var rows = layout[i];
                var _loop_1 = function (k) {
                    var _d, _e;
                    if (type === "col" && k === targetIndex) {
                        var relocableId = layout[i][targetIndex];
                        var placedId = layout[i][placedIndex];
                        var relocable_1 = _this.data.getItem(relocableId);
                        var placed_1 = _this.data.getItem(placedId);
                        if (!mutable[relocableId]) {
                            _this.data.eachChild(relocableId, function (item) {
                                if (dir === "left") {
                                    item.x -= placed_1.width;
                                }
                                else {
                                    item.x += placed_1.width;
                                }
                            });
                            mutable[relocableId] = true;
                        }
                        if (!mutable[placedId]) {
                            _this.data.eachChild(placedId, function (item) {
                                if (dir === "left") {
                                    item.x += relocable_1.width;
                                }
                                else {
                                    item.x -= relocable_1.width;
                                }
                            });
                            mutable[placedId] = true;
                        }
                        if (i === 0 && isSubHeaderEnable) {
                            _d = [
                                headers[placedHeaderIndex],
                                headers[headerIndex],
                            ], headers[headerIndex] = _d[0], headers[placedHeaderIndex] = _d[1];
                        }
                        moved[i] = layout[i].splice(k, targetIndexOffset);
                    }
                    if (type === "row" && i === targetIndex) {
                        var relocableId = layout[targetIndex][k];
                        var placedId = layout[placedIndex][k];
                        var relocable_2 = _this.data.getItem(relocableId);
                        var placed_2 = _this.data.getItem(placedId);
                        if (!mutable[relocableId]) {
                            _this.data.eachChild(relocableId, function (item) {
                                if (dir === "up") {
                                    item.y -= placed_2.height;
                                }
                                else {
                                    item.y += placed_2.height;
                                }
                            });
                            mutable[relocableId] = true;
                        }
                        if (!mutable[placedId]) {
                            _this.data.eachChild(placedId, function (item) {
                                if (dir === "up") {
                                    item.y += relocable_2.height;
                                }
                                else {
                                    item.y -= relocable_2.height;
                                }
                            });
                            mutable[placedId] = true;
                        }
                        if (k === rows.length - 1) {
                            if (isSubHeaderEnable) {
                                _e = [
                                    headers[placedHeaderIndex],
                                    headers[headerIndex],
                                ], headers[headerIndex] = _e[0], headers[placedHeaderIndex] = _e[1];
                            }
                            moved.push(layout.splice(i, targetIndexOffset));
                        }
                    }
                };
                for (var k = 0; k < rows.length; k++) {
                    _loop_1(k);
                }
            }
            if (dir === "right" || dir === "down") {
                placedIndex = targetIndex + placedIndexOffset;
            }
            for (var i = 0; i < layout.length; i++) {
                var rows = layout[i];
                for (var k = 0; k < rows.length; k++) {
                    if ((dir === "left" && k === placedIndex) || (dir === "right" && k === targetIndex)) {
                        (_a = layout[i]).splice.apply(_a, __spreadArray([placedIndex, 0], moved[i], false));
                    }
                    if (((dir === "up" && i === placedIndex) || (dir === "down" && i === targetIndex)) &&
                        k === 0) {
                        layout.splice.apply(layout, __spreadArray([placedIndex, 0], moved[0], false));
                    }
                }
            }
            _this.data.update(_this.swimlane.id, _this.swimlane);
            _this.events.fire(CellManagerEvents.afterCellsMove, [_this.swimlane.id]);
        });
    };
    CellManager.prototype.remove = function (cellIndex, type, unstrict) {
        var _this = this;
        (0, dom_1.awaitRedraw)().then(function () {
            var _a, _b;
            var cellDirection = type === "col" ? "left" : "up";
            var uniqueLayout = _this.getUniqueLayout();
            var maxIndex = type === "col" ? ((_a = uniqueLayout[0]) === null || _a === void 0 ? void 0 : _a.length) - 1 : (uniqueLayout === null || uniqueLayout === void 0 ? void 0 : uniqueLayout.length) - 1;
            var isIndexCorrect = cellIndex >= 0 && cellIndex <= maxIndex;
            if (!isIndexCorrect ||
                !_this.events.fire(CellManagerEvents.beforeCellsRemove, [_this.swimlane.id]) ||
                (!unstrict && !_this.validation(cellIndex, cellDirection, "remove"))) {
                return;
            }
            var layout = _this.swimlane.layout;
            var subHeader = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"];
            var isSubHeaderEnable = (subHeader === null || subHeader === void 0 ? void 0 : subHeader.enable) && ((_b = subHeader === null || subHeader === void 0 ? void 0 : subHeader.headers) === null || _b === void 0 ? void 0 : _b.length);
            var headers;
            var headerIndex;
            if (isSubHeaderEnable) {
                headers = _this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"].headers;
                headerIndex = _this.getSubHeaderIndex(_this.getCellId(cellIndex, type), type);
            }
            var targetIndex = cellIndex;
            var targetId = type === "col" ? layout[0][targetIndex] : layout[targetIndex][0];
            var targetItem = _this.data.getItem(targetId);
            var removable = {};
            var mutable = {};
            var reformed = [];
            for (var i = 0; i < layout.length; i++) {
                var rows = layout[i];
                for (var k = 0; k < rows.length; k++) {
                    var currentId = layout[i][k];
                    if ((type === "col" && k === targetIndex) || (type === "row" && i === targetIndex)) {
                        removable[currentId] = true;
                        if (isSubHeaderEnable &&
                            ((type === "col" && i === 0) || (type === "row" && k === 0))) {
                            headers.splice(headerIndex, 1);
                        }
                    }
                    else if (!removable[currentId]) {
                        if (!reformed[i]) {
                            reformed[i] = [currentId];
                        }
                        else {
                            reformed[i].push(currentId);
                        }
                    }
                    if (!removable[currentId] && !mutable[currentId]) {
                        if (type === "col" && targetIndex < k) {
                            _this.data.eachChild(currentId, function (item) {
                                item.x -= targetItem.width;
                            });
                            mutable[currentId] = true;
                        }
                        else if (type === "row" && targetIndex < i) {
                            _this.data.eachChild(currentId, function (item) {
                                item.y -= targetItem.height;
                            });
                            mutable[currentId] = true;
                        }
                    }
                }
            }
            var config = {
                layout: reformed.filter(function (i) { return i; }),
            };
            if (type === "col") {
                config.width = _this.swimlane.width - targetItem.width;
            }
            else {
                config.height = _this.swimlane.height - targetItem.height;
            }
            _this.data.remove(Object.keys(removable));
            _this.data.update(_this.swimlane.id, config);
            _this.events.fire(CellManagerEvents.afterCellsRemove, [_this.swimlane.id]);
        });
    };
    CellManager.prototype.validation = function (cellIndex, dir, action) {
        var _a;
        var type = this.getDirectionType(dir);
        var uniqueLayout = this.getUniqueLayout();
        var maxIndex = type === "col" ? ((_a = uniqueLayout[0]) === null || _a === void 0 ? void 0 : _a.length) - 1 : (uniqueLayout === null || uniqueLayout === void 0 ? void 0 : uniqueLayout.length) - 1;
        var isIndexCorrect = cellIndex >= 0 && cellIndex <= maxIndex;
        if (!isIndexCorrect ||
            !this.events.fire(CellManagerEvents.beforeCellsValidation, [this.swimlane.id, action])) {
            return;
        }
        if (maxIndex === 0 && action !== "add") {
            this.events.fire(CellManagerEvents.afterCellsValidation, [this.swimlane.id, false, action]);
            return false;
        }
        var layout = this.swimlane.layout;
        var targetIndex = cellIndex;
        var targetCount;
        var validFirstStep = true;
        if (targetIndex >= 0) {
            for (var i = 0; i < layout.length; i++) {
                var rows = layout[i];
                for (var k = 0; k < rows.length; k++) {
                    var targetId = type === "col" ? rows[targetIndex] : layout[targetIndex][k];
                    if (type === "col" && k === targetIndex) {
                        var colCount = this.data.getItem(targetId).$colCount;
                        if (i === 0) {
                            targetCount = colCount;
                        }
                        else if (targetCount !== colCount) {
                            if (action === "remove" || action === "move") {
                                this.events.fire(CellManagerEvents.afterCellsValidation, [
                                    this.swimlane.id,
                                    false,
                                    action,
                                ]);
                                return false;
                            }
                            validFirstStep = false;
                        }
                    }
                    if (type === "row" && i === targetIndex) {
                        var rowCount = this.data.getItem(targetId).$rowCount;
                        if (k === 0) {
                            targetCount = rowCount;
                        }
                        else if (targetCount !== rowCount) {
                            if (action === "remove" || action === "move") {
                                this.events.fire(CellManagerEvents.afterCellsValidation, [
                                    this.swimlane.id,
                                    false,
                                    action,
                                ]);
                                return false;
                            }
                            validFirstStep = false;
                        }
                    }
                }
            }
        }
        if ((dir && !validFirstStep) || action === "move") {
            var targetCell = type === "col" ? layout[0][targetIndex] : layout[targetIndex][0];
            var targetItem = this.data.getItem(targetCell);
            var offset = type === "col" ? targetItem === null || targetItem === void 0 ? void 0 : targetItem.$colCount : targetItem === null || targetItem === void 0 ? void 0 : targetItem.$rowCount;
            if (dir === "right" || dir === "down") {
                targetIndex += offset;
            }
            else {
                targetIndex -= 1;
            }
            if (targetIndex >= 0 && !(type === "row" && targetIndex > layout.length - 1)) {
                for (var i = 0; i < layout.length; i++) {
                    var rows = layout[i];
                    for (var k = 0; k < rows.length; k++) {
                        var currentCell = type === "col" ? rows[targetIndex] : layout[targetIndex][k];
                        if (type === "col" && k === targetIndex) {
                            var colCount = this.data.getItem(currentCell).$colCount;
                            if (i === 0) {
                                targetCount = colCount;
                            }
                            else if (targetCount !== colCount) {
                                this.events.fire(CellManagerEvents.afterCellsValidation, [
                                    this.swimlane.id,
                                    false,
                                    action,
                                ]);
                                return false;
                            }
                        }
                        if (type === "row" && i === targetIndex) {
                            var rowCount = this.data.getItem(currentCell).$rowCount;
                            if (k === 0) {
                                targetCount = rowCount;
                            }
                            else if (targetCount !== rowCount) {
                                this.events.fire(CellManagerEvents.afterCellsValidation, [
                                    this.swimlane.id,
                                    false,
                                    action,
                                ]);
                                return false;
                            }
                        }
                    }
                }
            }
        }
        this.events.fire(CellManagerEvents.afterCellsValidation, [this.swimlane.id, true, action]);
        return true;
    };
    CellManager.prototype.getSubHeaderCellIndex = function (subheaderId) {
        if (!this.swimlane || !arguments.length)
            return;
        var type = this.getSubHeaderType(subheaderId);
        var cellId = this.getSubHeaderCellId(subheaderId);
        return this.getCellIndex(cellId, type);
    };
    CellManager.prototype.getSubHeaderCellId = function (subheaderId) {
        var _a;
        if (!this.swimlane || !arguments.length)
            return;
        var type = this.getSubHeaderType(subheaderId);
        var headers = (_a = this.swimlane[type === "col" ? "subHeaderCols" : "subHeaderRows"]) === null || _a === void 0 ? void 0 : _a.headers;
        if (!(headers === null || headers === void 0 ? void 0 : headers.length)) {
            return;
        }
        var index = headers.findIndex(function (_a) {
            var id = _a.id;
            return id === subheaderId;
        });
        var pull = [];
        for (var i = 0; i < this.swimlane.layout.length; i++) {
            var rows = this.swimlane.layout[i];
            for (var k = 0; k < rows.length; k++) {
                var cell = rows[k];
                if (((type === "col" && i === 0) || (type === "row" && k === 0)) && !pull.includes(cell)) {
                    pull.push(cell);
                }
            }
        }
        return pull[index];
    };
    CellManager.prototype.getSubHeaderType = function (subheaderId) {
        var _a;
        if (!this.swimlane || !arguments.length)
            return;
        var _b = this.swimlane, subHeaderCols = _b.subHeaderCols, subHeaderRows = _b.subHeaderRows;
        var isSubHeaderRowEnable = (subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.enable) && ((_a = subHeaderRows === null || subHeaderRows === void 0 ? void 0 : subHeaderRows.headers) === null || _a === void 0 ? void 0 : _a.length);
        var isSubHeaderColEnable = (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.enable) && (subHeaderCols === null || subHeaderCols === void 0 ? void 0 : subHeaderCols.headers.length);
        var rowIndex = -1;
        var colIndex = -1;
        var type;
        if (isSubHeaderRowEnable) {
            rowIndex = subHeaderRows.headers.findIndex(function (_a) {
                var id = _a.id;
                return subheaderId === id;
            });
            if (rowIndex !== -1)
                type = "row";
        }
        if (isSubHeaderColEnable) {
            colIndex = subHeaderCols.headers.findIndex(function (_a) {
                var id = _a.id;
                return subheaderId === id;
            });
            if (colIndex !== -1)
                type = "col";
        }
        return type;
    };
    CellManager.prototype.getCellIndex = function (cellId, type) {
        var _a, _b;
        if (!this.swimlane || !((_b = (_a = this.swimlane) === null || _a === void 0 ? void 0 : _a.groupChildren) === null || _b === void 0 ? void 0 : _b.includes(cellId)) || arguments.length < 2)
            return;
        var layout = this.swimlane.layout;
        for (var i = 0; i < layout.length; i++) {
            var rows = layout[i];
            for (var k = 0; k < rows.length; k++) {
                var cell = rows[k];
                if (cell == cellId) {
                    return type === "col" ? k : i;
                }
            }
        }
    };
    CellManager.prototype.getCellId = function (cellIndex, type) {
        if (!this.swimlane || arguments.length < 2)
            return;
        return this.swimlane.layout[type === "row" ? cellIndex : 0][type === "col" ? cellIndex : 0];
    };
    CellManager.prototype.getSubHeaderIndex = function (cellId, type) {
        var _a, _b;
        if (!this.swimlane || !((_b = (_a = this.swimlane) === null || _a === void 0 ? void 0 : _a.groupChildren) === null || _b === void 0 ? void 0 : _b.includes(cellId)) || arguments.length < 2)
            return;
        var layout = this.swimlane.layout;
        var pull = {};
        var headerIndex = -1;
        for (var i = 0; i < layout.length; i++) {
            var rows = layout[i];
            for (var k = 0; k < rows.length; k++) {
                var cell = rows[k];
                if (!pull[cell]) {
                    if ((type === "col" && i === 0) || (type === "row" && k === 0)) {
                        headerIndex++;
                    }
                    pull[cell] = true;
                    if (cellId == cell)
                        return headerIndex;
                }
            }
        }
    };
    CellManager.prototype.getDirectionType = function (dir) {
        return dir === "left" || dir === "right" || dir === "col" ? "col" : "row";
    };
    CellManager.prototype.getUniqueLayout = function () {
        if (!this.swimlane)
            return;
        var uniqueLayout = [];
        for (var i = 0; i < this.swimlane.layout.length; i++) {
            var row = this.swimlane.layout[i];
            if (!uniqueLayout[i])
                uniqueLayout[i] = [];
            for (var k = 0; k < row.length; k++) {
                var cell = row[k];
                if (!uniqueLayout[i].includes(cell)) {
                    uniqueLayout[i].push(cell);
                }
            }
        }
        return uniqueLayout;
    };
    return CellManager;
}());
exports.CellManager = CellManager;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var BaseItem_1 = __webpack_require__(37);
var lineHelpers_1 = __webpack_require__(26);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(config, defaults) {
        var _this = _super.call(this, config, defaults) || this;
        _this.id = _this.config.id = config.id || (0, core_1.uid)();
        if (config.width) {
            config.width = parseFloat(config.width);
        }
        if (config.height) {
            config.height = parseFloat(config.height);
        }
        if (config.x) {
            config.x = parseFloat(config.x);
        }
        if (config.y) {
            config.y = parseFloat(config.y);
        }
        if (config.strokeWidth) {
            config.strokeWidth = parseFloat(config.strokeWidth);
        }
        return _this;
    }
    Line.prototype.getBaseType = function () {
        return "line";
    };
    Line.prototype.setDefaults = function (config, defaults) {
        config.connectType = config.connectType === "curved" ? "elbow" : config.connectType || "elbow";
        config.stroke = config.stroke || (defaults === null || defaults === void 0 ? void 0 : defaults.stroke) || "#CCC";
        config.strokeType = config.strokeType || (defaults === null || defaults === void 0 ? void 0 : defaults.strokeType) || config.type;
        config.strokeWidth = config.strokeWidth || (defaults === null || defaults === void 0 ? void 0 : defaults.strokeWidth) || 2;
        config.cornersRadius = config.cornersRadius || (defaults === null || defaults === void 0 ? void 0 : defaults.cornersRadius) || 0;
        config.backArrow = config.backArrow || (defaults === null || defaults === void 0 ? void 0 : defaults.backArrow) || "none";
        config.forwardArrow = config.forwardArrow || (defaults === null || defaults === void 0 ? void 0 : defaults.forwardArrow) || "none";
        return config;
    };
    Line.prototype.getBox = function () {
        var max = this.config.points.reduce(function (m, p) {
            m.x = Math.max(m.x, p.x);
            m.y = Math.max(m.y, p.y);
            return m;
        }, { x: 0, y: 0 });
        var width = max.x - this.config.x;
        var height = max.y - this.config.y;
        var left = this.config.x;
        var right = left + width;
        var top = this.config.y;
        var bottom = top + height;
        return { left: left, right: right, top: top, bottom: bottom };
    };
    Line.prototype.render = function () {
        var _a = this.config, id = _a.id, stroke = _a.stroke, strokeWidth = _a.strokeWidth;
        var linePoints = this._getPoints();
        var arrow = this._getArrowLine() || [];
        var offsetStart = arrow[0] ? strokeWidth + 1 : 0;
        var offsetEnd = arrow[1] ? strokeWidth + 1 : 0;
        var pathLength = (0, lineHelpers_1.calcPathLength)(linePoints);
        return (0, dom_1.sv)("g", {
            "data-dhx-id": id,
            _key: id,
            class: "dhx_diagram_item dhx_diagram_line " +
                ((this.config.$selected && "dhx_diagram_line--selected") || "") +
                (this.config.css || ""),
        }, __spreadArray([
            (0, dom_1.sv)("path", {
                d: linePoints,
                fill: "none",
                "stroke-dasharray": this._getType(pathLength - offsetStart - offsetEnd),
                "stroke-dashoffset": -offsetStart,
                "stroke-linejoin": "round",
                "stroke-width": strokeWidth,
                stroke: stroke,
            })
        ], arrow, true));
    };
    Line.prototype._getType = function (length) {
        if (this.config.strokeType) {
            this.config.type = this.config.strokeType;
        }
        if (this.config.type) {
            switch (this.config.type) {
                case "line":
                    return length.toString();
                case "dash": {
                    var BASE_STEP = this.config.strokeWidth + 3;
                    var partNumber = Math.trunc(length / BASE_STEP);
                    return (length / (partNumber % 2 === 0 ? partNumber + 1 : partNumber)).toFixed(2);
                }
                default:
                    return length.toString();
            }
        }
    };
    Line.prototype._getPoints = function () {
        return this._getStringPoints();
    };
    Line.prototype._getStringPoints = function () {
        this.config.width = Math.abs(this.config.points[this.config.points.length - 1].x - this.config.points[0].x);
        this.config.height = Math.abs(this.config.points[this.config.points.length - 1].y - this.config.points[0].y);
        this.config.x = this.config.points[0].x;
        this.config.y = this.config.points[0].y;
        if (this.config.connectType === "straight" || this.config.connectType === "curved") {
            this.config.points = [this.config.points[0], this.config.points[this.config.points.length - 1]];
            if (this.config.connectType === "curved") {
                return this._getCurvedPoints(this.config);
            }
        }
        return ("M ".concat(this.config.x, ",").concat(this.config.y, " ") +
            this.config.points
                .map(function (a) {
                if (a.x1 && a.y1) {
                    return "Q".concat(a.x1, ",").concat(a.y1, " ").concat(a.x, ",").concat(a.y);
                }
                else {
                    return "L " + a.x + "," + a.y;
                }
            })
                .join(" "));
    };
    Line.prototype._getCurvedPoints = function (config) {
        var ratio = 0.5;
        var x1 = config.points[0].x;
        var x2 = config.points[1].x;
        var y1 = config.points[0].y;
        var y2 = config.points[1].y;
        var dx = (x2 - x1) * ratio;
        var c1 = x1 + dx;
        var c2 = x2 - dx;
        return "M".concat(x1, ",").concat(y1, " C").concat(c1, ",").concat(y1, " ").concat(c2, ",").concat(y2, " ").concat(x2, ",").concat(y2);
    };
    Line.prototype._getArrowLine = function () {
        var p = this.config.points;
        var startArrow = this.config.backArrow === "filled";
        var endArrow = this.config.forwardArrow === "filled";
        if (startArrow || endArrow) {
            return [
                startArrow ? this._getArrow(p[1], p[0]) : null,
                endArrow ? this._getArrow(p[p.length - 2], p[p.length - 1]) : null,
            ];
        }
    };
    Line.prototype._getArrow = function (from, to) {
        var xCatet = from.x - to.x;
        var yCatet = from.y - to.y;
        var infinity = xCatet === 0 && yCatet === 0;
        var hypo = Math.sqrt(Math.pow(xCatet, 2) + Math.pow(yCatet, 2));
        var ratio = (0.7 * this.config.strokeWidth) / hypo;
        var xAdd = xCatet * ratio;
        var yAdd = yCatet * ratio;
        var center = {
            x: to.x,
            y: to.y,
        };
        var w = 5;
        var h = 5;
        var r1x = to.x - w;
        var r1y = to.y - h;
        var r2x = to.x + w;
        var r2y = to.y - h;
        var angle = Math.atan((to.x - from.x) / (to.y - from.y)) * (-180 / 3.14);
        if (from.y > to.y) {
            angle += 180;
        }
        var extraConfig = {};
        if (!infinity) {
            extraConfig.transform = "translate(".concat(xAdd, " ").concat(yAdd, ") rotate(").concat(angle, ",").concat(center.x, ",").concat(center.y, ")");
        }
        return (0, dom_1.sv)("path", __assign({ d: "M".concat(r1x, ",").concat(r1y, " L").concat(center.x, ",").concat(center.y, " L").concat(r2x, ",").concat(r2y, " Z"), class: "dhx_diagram_arrow " + this.getCss(), "stroke-width": this.config.strokeWidth - 1, "shape-rendering": "auto", stroke: this.config.stroke, fill: this.config.stroke }, extraConfig));
    };
    return Line;
}(BaseItem_1.BaseItem));
exports.Line = Line;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineTitle = void 0;
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var core_1 = __webpack_require__(1);
var BaseShape_1 = __webpack_require__(16);
var templates_1 = __webpack_require__(8);
var lineHelpers_1 = __webpack_require__(26);
var LineTitle = /** @class */ (function (_super) {
    __extends(LineTitle, _super);
    function LineTitle(config, parameters) {
        var _this = _super.call(this, config, parameters) || this;
        _this.id = _this.config.id = config.id || (0, core_1.uid)();
        _this.config = _this.setDefaults(config);
        return _this;
    }
    LineTitle.prototype.render = function () {
        var zIndex = this.parent.$level +
            (this.parent.$group || this.parent.$selected ? (this.parent.$selected ? 3 : 2) : 1);
        if (this.config.$selected)
            ++zIndex;
        var _a = this.getSize(this.config.text), width = _a.width, height = _a.height;
        this.config.width = width > 20 ? width + 4 : 20;
        this.config.height = height > 16 ? height + 2 : 16;
        var _b = this.getTitlePosition(this.parent, this.config), x = _b.x, y = _b.y;
        this.config.$x = x;
        this.config.$y = y;
        var selected = (this.config.$selected && "dhx_diagram_line_title--selected") || "";
        return (0, dom_1.el)("div", {
            _key: this.config.id,
            class: "dhx_diagram_line_title " + selected,
            "data-dhx-id": this.config.id,
            "data-dhx-parent-id": this.parent.id,
            style: __assign({ zIndex: zIndex, position: "absolute", top: y, left: x, transform: "rotate(".concat(this.config.$angle, "deg)") }, (0, templates_1.getShapeCss)(this.config)),
        }, [this.getContent()]);
    };
    LineTitle.prototype.getBaseType = function () {
        return "lineTitle";
    };
    LineTitle.prototype.setDefaults = function (config, defaults) {
        config.$angle = config.$angle || 0;
        config.distance = (defaults === null || defaults === void 0 ? void 0 : defaults.distance) || config.distance || 50;
        config.editable = typeof config.editable === "boolean" ? config.editable : true;
        config.fixed = !!config.fixed;
        config.autoPosition = !!config.autoPosition;
        config.fill = (defaults === null || defaults === void 0 ? void 0 : defaults.fill) || config.fill || "#FFFFFF";
        config.lineHeight = (defaults === null || defaults === void 0 ? void 0 : defaults.lineHeight) || config.lineHeight || 14;
        config.fontSize = (defaults === null || defaults === void 0 ? void 0 : defaults.fontSize) || config.fontSize || 14;
        config.fontColor = (defaults === null || defaults === void 0 ? void 0 : defaults.fontColor) || config.fontColor || "#4C4C4C";
        config.fontStyle = (defaults === null || defaults === void 0 ? void 0 : defaults.fontStyle) || config.fontStyle || "normal";
        config.fontWeight = (defaults === null || defaults === void 0 ? void 0 : defaults.fontWeight) || config.fontWeight || "normal";
        config.textAlign = (defaults === null || defaults === void 0 ? void 0 : defaults.textAlign) || config.textAlign || "center";
        config.width = (config.width || 0) < 40 ? 40 : config.width;
        config.height = (config.height || 0) < 18 ? 18 : config.height;
        return config;
    };
    LineTitle.prototype.getContent = function () {
        var _a = this.config, $editable = _a.$editable, text = _a.text, fill = _a.fill;
        return (0, dom_1.el)("span.dhx_diagram_line_title__text", {
            style: {
                backgroundColor: fill,
            },
        }, $editable ? [this.getEditorNode()] : text);
    };
    LineTitle.prototype.getSize = function (text) {
        var _a = this.config, fontSize = _a.fontSize, lineHeight = _a.lineHeight, fontWeight = _a.fontWeight, fontStyle = _a.fontStyle;
        var textStyle = {
            fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
            fontSize: "".concat(fontSize, "px"),
            lineHeight: "".concat(lineHeight, "px"),
            fontWeight: fontWeight,
            fontStyle: fontStyle,
        };
        return (0, html_1.getStrSize)(text, textStyle);
    };
    LineTitle.prototype.getCenterCoords = function (_a, _b) {
        var width = _a.width, height = _a.height;
        var x = _b.x, y = _b.y;
        return {
            x: x - width / 2,
            y: y - height / 2,
        };
    };
    LineTitle.prototype.getStraightCoords = function (sp, ep, factor) {
        if (factor === void 0) { factor = 0.5; }
        var X1 = sp.x, Y1 = sp.y;
        var X2 = ep.x, Y2 = ep.y;
        return { x: X1 * (1 - factor) + X2 * factor, y: Y1 * (1 - factor) + Y2 * factor };
    };
    LineTitle.prototype.getTitlePosition = function (line, title) {
        var _a, _b, _c;
        var factor = (0, lineHelpers_1.getDistanceFactor)(title.distance);
        if (line.connectType === "straight" || ((_a = line.points) === null || _a === void 0 ? void 0 : _a.length) === 2) {
            var sp_1 = (_b = line.points) === null || _b === void 0 ? void 0 : _b[0];
            var ep_1 = (_c = line.points) === null || _c === void 0 ? void 0 : _c[line.points.length - 1];
            this.config.$angle = title.autoPosition ? (0, lineHelpers_1.getLineAngle)(sp_1, ep_1) : 0;
            return this.getCenterCoords(title, this.getStraightCoords(sp_1, ep_1, factor));
        }
        var points = line.points;
        var nodeLengths = [];
        var totalLength = 0;
        for (var index = 0; index < points.length - 1; index++) {
            var sp_2 = points[index];
            var ep_2 = points[index + 1];
            var length_1 = (0, lineHelpers_1.getLineLength)(sp_2, ep_2);
            totalLength += length_1;
            nodeLengths.push(length_1);
        }
        var currentLength = (totalLength / 100) * parseFloat(title.distance);
        var sp = { x: 0, y: 0 };
        var ep = { x: 0, y: 0 };
        var sumLength = 0;
        for (var index = 0; index < points.length - 1; index++) {
            sumLength += nodeLengths[index];
            if (sumLength >= currentLength) {
                sp = points[index];
                ep = points[index + 1];
                factor = 1 - (0, lineHelpers_1.getDistanceFactor)(((sumLength - currentLength) / nodeLengths[index]) * 100);
                break;
            }
        }
        this.config.$angle = title.autoPosition ? (0, lineHelpers_1.getLineAngle)(sp, ep) : 0;
        return this.getCenterCoords(title, this.getStraightCoords(sp, ep, factor));
    };
    LineTitle.prototype.getBox = function () {
        var _a = this.config, _b = _a.$x, $x = _b === void 0 ? 0 : _b, _c = _a.$y, $y = _c === void 0 ? 0 : _c, width = _a.width, height = _a.height;
        var left = $x;
        var right = left + width;
        var top = $y;
        var bottom = top + height;
        return { left: left, right: right, top: top, bottom: bottom };
    };
    return LineTitle;
}(BaseShape_1.BaseShape));
exports.LineTitle = LineTitle;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Radial = /** @class */ (function () {
    function Radial() {
    }
    Radial.prototype.layout = function (g, config) {
        g.setRoot();
        var root = g.getRoot();
        g.root(g.toTree(g.hash[root.id]));
        var radialConfig = {
            minSpaceBetweenGen: config.levelPadding || 20,
            minSpaceBetweenSibling: config.itemPadding || 5,
        };
        var radiusObj = getRadiusObj(root, root, radialConfig);
        autoPositions(g, root, radiusObj);
        g.translate({ x: 1000, y: 1000 });
        return g;
    };
    return Radial;
}());
exports.default = Radial;
function getRadiusObj(parent, shape, radialConfig, sectorConfig, level, radiusObj) {
    var _a;
    if (sectorConfig === void 0) { sectorConfig = { startAngle: 0, endAngle: 360 }; }
    if (level === void 0) { level = 0; }
    if (radiusObj === void 0) { radiusObj = {}; }
    var rangeAngle = (sectorConfig.endAngle - sectorConfig.startAngle) / shape.kids.length;
    if (shape.kids.length) {
        var kidsLevel_1 = level + 1;
        radiusObj[kidsLevel_1] = (_a = radiusObj[kidsLevel_1]) !== null && _a !== void 0 ? _a : { radius: 0, chord: 0 };
        var kidsRadius_1 = 0;
        shape.kids.forEach(function (item, index, array) {
            var _a, _b, _c, _d;
            var itemAngle = sectorConfig.startAngle + rangeAngle * (index + 0.5);
            var optimalRadius = (((_a = radiusObj[level]) === null || _a === void 0 ? void 0 : _a.radius) || 0) +
                getItemsDistance(item, shape) +
                radialConfig.minSpaceBetweenGen;
            kidsRadius_1 = Math.max(radiusObj[kidsLevel_1].radius, optimalRadius);
            if (shape.kids.length > 1) {
                var siblingIndex = index !== array.length - 1 ? index + 1 : 0;
                var chordSector = {
                    startAngle: itemAngle,
                    endAngle: itemAngle + rangeAngle,
                };
                var chordAngle = getChordAngle(chordSector);
                var chord = getRadiusPart(item, chordAngle) +
                    getRadiusPart(array[siblingIndex], chordAngle) +
                    radialConfig.minSpaceBetweenSibling;
                radiusObj[kidsLevel_1].chord = Math.max(radiusObj[kidsLevel_1].chord, chord);
            }
            else {
                var shapeIndex = (_b = parent.kids) === null || _b === void 0 ? void 0 : _b.findIndex(function (kid) { return kid.id === shape.id; });
                var nextIndex = shapeIndex === ((_c = parent.kids) === null || _c === void 0 ? void 0 : _c.length) - 1 ? 0 : shapeIndex + 1;
                var prevIndex = shapeIndex === 0 ? ((_d = parent.kids) === null || _d === void 0 ? void 0 : _d.length) - 1 : shapeIndex - 1;
                if (shapeIndex > -1) {
                    var nextSibling = parent.kids[nextIndex].kids[0];
                    var prevSibling = parent.kids[prevIndex].kids[parent.kids[prevIndex].kids.length - 1];
                    if (nextSibling || prevSibling) {
                        var rangeSiblingAngle = (sectorConfig.endAngle - sectorConfig.startAngle) /
                            parent.kids[nextSibling ? nextIndex : prevIndex].kids.length;
                        var chordSector = {
                            startAngle: itemAngle,
                            endAngle: itemAngle + (rangeAngle + rangeSiblingAngle) * 0.5,
                        };
                        var chordAngle = getChordAngle(chordSector);
                        var chord = getRadiusPart(item, chordAngle) +
                            getRadiusPart(nextSibling ? nextSibling : prevSibling, chordAngle) +
                            radialConfig.minSpaceBetweenSibling +
                            20;
                        radiusObj[kidsLevel_1].chord = Math.max(radiusObj[kidsLevel_1].chord, chord);
                    }
                }
            }
        });
        var newRadius = Math.max(kidsRadius_1, getRadiusByChord(rangeAngle, radiusObj[kidsLevel_1].chord));
        if (newRadius > radiusObj[kidsLevel_1].radius && !!radiusObj[kidsLevel_1 + 1]) {
            var difRadius = newRadius - radiusObj[kidsLevel_1].radius;
            for (var level_1 in radiusObj) {
                if (Number(level_1) > kidsLevel_1) {
                    radiusObj[level_1].radius += difRadius;
                }
            }
        }
        radiusObj[kidsLevel_1].radius = newRadius;
        var kidSector_1 = __assign({}, sectorConfig);
        shape.kids.forEach(function (item) {
            kidSector_1.endAngle = kidSector_1.startAngle + rangeAngle;
            if (item.kids.length) {
                radiusObj = getRadiusObj(shape, item, radialConfig, kidSector_1, kidsLevel_1, radiusObj);
            }
            kidSector_1.startAngle += rangeAngle;
        });
        return radiusObj;
    }
}
function autoPositions(g, shape, radiusObj, sectorConfig, level) {
    if (sectorConfig === void 0) { sectorConfig = { startAngle: 0, endAngle: 360 }; }
    if (level === void 0) { level = 0; }
    var root = g.getRoot();
    var isRoot = root.id === shape.id;
    var kids = shape.kids;
    if (isRoot) {
        shape.x = 0;
        shape.y = 0;
    }
    else {
        var _angle = (sectorConfig.startAngle + sectorConfig.endAngle) / 2;
        var absoluteCenterPos = calcCoords(_angle, radiusObj[level].radius, root.x, root.y);
        shape.x = absoluteCenterPos.x;
        shape.y = absoluteCenterPos.y;
    }
    if (kids.length) {
        var rangeAngle_1 = (sectorConfig.endAngle - sectorConfig.startAngle) / kids.length;
        kids.forEach(function (item, index) {
            var kidSectorConfig = {
                startAngle: sectorConfig.startAngle + rangeAngle_1 * index,
                endAngle: sectorConfig.startAngle + rangeAngle_1 * (index + 1),
            };
            autoPositions(g, item, radiusObj, kidSectorConfig, level + 1);
        });
    }
}
function calcCoords(angle, radius, centerX, centerY) {
    var radAngle = (angle * Math.PI) / 180;
    return {
        x: centerX + radius * Math.cos(radAngle),
        y: centerY - radius * Math.sin(radAngle),
    };
}
function getRadiusByChord(angle, chord) {
    return chord / (2 * Math.sin(((angle / 2) * Math.PI) / 180));
}
function getRadiusPart(shape, angle) {
    var diagAngle = Math.cos(Math.atan(shape.h / shape.w));
    var radiusAngle = Math.cos((angle * Math.PI) / 180);
    var radiusPart;
    if (Math.abs(radiusAngle) > diagAngle) {
        radiusPart = shape.w / (2 * Math.abs(radiusAngle));
    }
    else {
        radiusPart = shape.h / (2 * Math.abs(Math.sin((angle * Math.PI) / 180)));
    }
    return radiusPart;
}
function getChordAngle(sectorConfig) {
    return (90 -
        sectorConfig.endAngle / 2 +
        sectorConfig.startAngle / 2 -
        (sectorConfig.startAngle > 180 ? sectorConfig.startAngle - 180 : sectorConfig.startAngle));
}
function getItemsDistance(shape1, shape2) {
    var width = (shape1.w + shape2.w) / 2;
    var height = (shape1.h + shape2.h) / 2;
    return Math.ceil(Math.sqrt(width * width + height * height));
}


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocale = void 0;
function setLocale(component, value) {
    var target = this[component];
    if (!target)
        return;
    for (var key in value) {
        target[key] = value[key];
    }
}
exports.setLocale = setLocale;
;


/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports) {

Object.values = Object.values
    ? Object.values
    : function (obj) {
        var allowedTypes = [
            "[object String]",
            "[object Object]",
            "[object Array]",
            "[object Function]",
        ];
        var objType = Object.prototype.toString.call(obj);
        if (obj === null || typeof obj === "undefined") {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        else if (!~allowedTypes.indexOf(objType)) {
            return [];
        }
        else {
            // if ES6 is supported
            if (Object.keys) {
                return Object.keys(obj).map(function (key) {
                    return obj[key];
                });
            }
            var result = [];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    result.push(obj[prop]);
                }
            }
            return result;
        }
    };
if (!Object.assign) {
    Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target) {
            "use strict";
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError("Cannot convert first argument to object");
            }
            var to = Object(target);
            for (var i = 0; i < args.length; i++) {
                var nextSource = args[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        },
    });
}


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
// eslint-disable-next-line @typescript-eslint/unbound-method
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        value: function (searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            // 1. Let O be ? ToObject(this value).
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;
            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
            }
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }
            // 8. Return false
            return false;
        },
        configurable: true,
        writable: true,
    });
}
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== "function") {
                throw new TypeError("predicate must be a function");
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true,
    });
}
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate) {
        if (this == null) {
            throw new TypeError("Array.prototype.findIndex called on null or undefined");
        }
        if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}


/***/ }),
/* 144 */
/***/ (function(module, exports) {

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        }
        else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        },
    });
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return String(this) + padString.slice(0, targetLength);
        }
    };
}


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches =
        proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector;
}
// Source: https://github.com/naminho/svg-classlist-polyfill/blob/master/polyfill.js
if (!("classList" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "classList", {
        get: function get() {
            var _this = this;
            return {
                contains: function contains(className) {
                    return _this.className.baseVal.split(" ").indexOf(className) !== -1;
                },
                add: function add(className) {
                    return _this.setAttribute("class", _this.getAttribute("class") + " " + className);
                },
                remove: function remove(className) {
                    var removedClass = _this
                        .getAttribute("class")
                        .replace(new RegExp("(\\s|^)".concat(className, "(\\s|$)"), "g"), "$2");
                    if (_this.classList.contains(className)) {
                        _this.setAttribute("class", removedClass);
                    }
                },
                toggle: function toggle(className) {
                    if (this.contains(className)) {
                        this.remove(className);
                    }
                    else {
                        this.add(className);
                    }
                },
            };
        },
        configurable: true,
    });
}
// Source: https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
if (!Object.entries) {
    var reduce_1 = Function.bind.call(Function.call, Array.prototype.reduce);
    var isEnumerable_1 = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
    var concat_1 = Function.bind.call(Function.call, Array.prototype.concat);
    Object.entries = function entries(O) {
        return reduce_1(Object.keys(O), function (e, k) { return concat_1(e, typeof k === "string" && isEnumerable_1(O, k) ? [[k, O[k]]] : []); }, []);
    };
}
// Source: https://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c
if (!Event.prototype.composedPath) {
    Event.prototype.composedPath = function () {
        if (this.path) {
            return this.path;
        }
        var target = this.target;
        this.path = [];
        while (target.parentNode !== null) {
            this.path.push(target);
            target = target.parentNode;
        }
        this.path.push(document, window);
        return this.path;
    };
}


/***/ }),
/* 146 */
/***/ (function(module, exports) {

Math.sign =
    Math.sign ||
        function (x) {
            x = +x;
            if (x === 0 || isNaN(x)) {
                return x;
            }
            return x > 0 ? 1 : -1;
        };


/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
module.exports = __webpack_require__(171);


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = exports.Diagram = exports.setTheme = exports.awaitRedraw = void 0;
__webpack_require__(76);
var dom_1 = __webpack_require__(0);
Object.defineProperty(exports, "awaitRedraw", { enumerable: true, get: function () { return dom_1.awaitRedraw; } });
Object.defineProperty(exports, "setTheme", { enumerable: true, get: function () { return dom_1.setTheme; } });
var Diagram_1 = __webpack_require__(44);
Object.defineProperty(exports, "Diagram", { enumerable: true, get: function () { return Diagram_1.Diagram; } });
var en_1 = __webpack_require__(40);
var locale_1 = __webpack_require__(135);
var w = window;
exports.i18n = w.dhx && w.dhx.i18n ? w.dhx.i18 : {};
exports.i18n.setLocale = locale_1.setLocale;
exports.i18n.diagram = exports.i18n.diagram || en_1.default;


/***/ })
/******/ ]);
});if (window.dhx_legacy) { 
					if (window.dhx){
						for (var key in dhx)
							if (key === 'i18n') {
								for (var lang in dhx[key])
									window.dhx_legacy[key][lang] = dhx[key][lang];
							} else {
								dhx_legacy[key] = dhx[key];
							}
					}
					window.dhx = dhx_legacy; delete window.dhx_legacy;
				}
//# sourceMappingURL=diagram.js.map