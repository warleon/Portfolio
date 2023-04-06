(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUY0MUNEMzEwODZGRTUxMTg0NzhEMEI3OTI5ODI2QzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDIwQkM3REQ3MEJDMTFFNThBOEI4Mzg1REJCMTQ1RkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDIwQkM3REM3MEJDMTFFNThBOEI4Mzg1REJCMTQ1RkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzJFQzk5Q0JDNzBFNTExOEIyMkRCODQxRUY3N0EyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjQxQ0QzMTA4NkZFNTExODQ3OEQwQjc5Mjk4MjZDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);

var _templateObject;



var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\t--text-color :", ";\n  position:relative;\n  padding: 1em ;\n  margin:0;\n\tcolor:var(--text-color);\n"])), function (_ref) {
  var text = _ref.theme.text;
  return text;
});
function Section(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSection, {
    id: props.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, props.title), props.children);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0__);

var projects = {
  videoApp: {
    url: "/projects/videoApp",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "video app",
    description: "A containerized video app made using django and ffmpeg.",
    call: "learn more",
    longDescription: "A video on demand app that lets you upload, watch and update videos with descriptions and suggestions to watch next. and also vote the videos with likes or dislikes",
    motivation: "This is my proposed project for my Software Engineering class. I just wanted to make a video on demand server so I conviced other 3 classmates to help me with it. I led the team trough the proccess achieving a perfect score in the course",
    usage: "To see it in action you first need to have docker installed\n\nThen just download the source code and in the main directory run docker-compose up --build\n\nThe use of the actual app is pretty straight forward and intuitive\n\ncreate an account the login and upload a video, declare suggestions and publish it then watch and enjoy",
    source: ["https://github.com/warleon/videoServer", "warleon/videoServer"],
    tech: ["Docker", "python", "Django", "Postgresql", "ffmpeg", "css", "javascript", "html", "JSON", "Nginx"]
  },
  organice: {
    url: "/projects/organice",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "ORGANICE",
    description: "A demo project made using nodejs express and mongodb.",
    call: "learn more",
    longDescription: "A small demo app that required a crud.",
    motivation: "I wanted a web app to host in my raspberrypi and learn the MERN stack. So I made this little app but sadly it does not use React",
    usage: "I forget",
    source: ["https://github.com/warleon/organice", "warleon/organice"],
    tech: ["Linux", "Nodejs", "Javascript", "Express", "MongoDB", "HTML", "CSS", "jquery"]
  },
  dataGenerator: {
    url: "/projects/dataGenerator",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "DATA GENERATOR",
    description: "A data generator that uses pandas to extend google forms responses.",
    call: "learn more",
    longDescription: "A survey responses generator that takes csv files from google forms and creates new responses that maintains the same distribution as the previus answers.",
    motivation: "I just needed a way to generate survey responses for my statistics class. So I created this generator using pandas that maintains the distribution of the data.",
    usage: 'To see it in action you can follow the instructions that I put in the readme of the project (see source code)\n\nTo obtain it just clone the repositorie\n\nThen download the csv file from the google forms that you want to generate from\n\nChange the variables "eBase" and "eGen" to the name of the csv input file and the csv output file respectively\n\nRun the python interpreter as follows python3 dataGen.py in the terminal',
    source: ["https://github.com/warleon/Data_generator", "warleon/Data_generator"],
    tech: ["Python3", "Pandas", "CSV"]
  },
  rtree: {
    url: "/projects/rtree",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "RTREE VISUALIZATION",
    description: "An Rtree implementation in c++ with svg rendering of the tree.",
    call: "learn more",
    longDescription: "An n-dimentional rtree implementation in c++ that persist the data in disk and has visualization abailable when the data is 2d.",
    motivation: "This was my project for the Advance Data Estructures course. The premise just ask me for the c++ implementation and persistence and I added the visualization just to meke the presentation prettier.",
    usage: "To run this you will need a C++ compiler (g++) and Cmake. Also for the demo the boost library is necesary since I compared my implementation performance with the boost:rtree\n\nThen clone the Source code and follow the instructions in the readme",
    source: ["https://github.com/warleon/RtreeVisualization", "warleon/RtreeVisualization"],
    tech: ["C++", "Cmake", "JSON", "SVG", "Google Test"]
  },
  portfolio: {
    url: "/projects/portfolio",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "This site",
    description: "My portfolio, made using react",
    call: "learn more",
    motivation: "My previus portfolio site was written in html, js and css and was a big mess. With my knew knowledge I wanted remake it using react",
    longDescription: "An static site builded with react-static and other extensions",
    usage: "After compilation all the site is contained in static js, html and css files and only needs to be serve like a regular static site",
    source: ["https://github.com/warleon/Portfolio", "warleon/Portfolio"],
    tech: ["Nodejs", "React", "JSX", "React-static", "Styled-components"]
  },
  generalExtendibleHashTable: {
    url: "/projects/generalExtendibleHashTable",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "Extendible Hashing",
    description: "A HashTable in disk to index any type of data",
    call: "learn more",
    motivation: "This was a project for the Data Bases 2 course where I learned how a DB works internally. It was asked to work for a specific schema but I wanted to make it work with any schema.",
    longDescription: "A HashTable in disk to index any type of  data. Made in C++",
    usage: "follow the instructions left in the end of the repository readme",
    source: ["https://github.com/warleon/db2-proyecto1#extendible-hash", "warleon/db2-proyecto1"],
    tech: ["C++", "CMake", "CSV", "docker"]
  },
  imageSearch: {
    url: "/projects/imageSearch",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "Faces Database",
    description: "A database for storing and indexing images so that a proximity search could be done to them. With a demo to upload a photo and search for the K most similar faces in the database",
    call: "learn more",
    motivation: "This was a project for the Data Bases 2 course where I learned how a DB works internally.",
    longDescription: "A database for storing and indexing images so that a proximity search could be done to them. With a demo to upload a photo and search for the K most similar faces in the database",
    usage: "In the backend directory just run 'python api.py'\nIn the Frontend directory run 'npm start'\nthen follow the URL and upload a photo",
    source: ["https://github.com/warleon/db2-proyecto3", "warleon/db2-proyecto3"],
    tech: ["python", "flask", "face_recognition", "Rtree", "numpy", "heap"]
  },
  webScrapper: {
    url: "/projects/webScrapper",
    img: _Assets_placeholderImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    imgText: "",
    title: "Web Scrapper",
    description: "A web scrapper created to extract some information for the Movistar Hackathon 2020",
    call: "learn more",
    motivation: "For the competition we needed a web scrapper to interact and extract some date from a given website",
    longDescription: "A web scrapper created to extract some information for the Movistar Hackathon 2020",
    usage: "There are some instructions in the readme but since the event was long ago I dont think the bot could be tested because of expired credentials or updates in the website",
    source: ["https://github.com/davento/hackathon-movistar-2020", "davento/hackathon-movistar-2020"],
    tech: ["python", "selenium"]
  }
};
// PROJECT_NAME: {
//   url: "/projects/PROJECT_NAME",
//   img: placeholder,
//   imgText: "",
//   title: "PROJECT_NAME",
//   description: "",
//   call: "learn more",
//   motivation: "",
//   longDescription: "",
//   usage: "",
//   source: ["https://github.com/warleon/PROJECT_NAME", "warleon/PROJECT_NAME"],
//   tech: [
//   ],
// },
/* harmony default export */ __webpack_exports__["a"] = (projects);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _templateObject;


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\npadding: 0 1.5em;\n\tbackground-color: ", ";\n"])), function (_ref) {
  var background = _ref.theme.background;
  return background;
});
/* harmony default export */ __webpack_exports__["a"] = (Wrapper);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _templateObject;


var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  --bg-color :", "; \n  --attention-color :", "; \n\n\tpadding-bottom: 1em;\n\tmargin:  1em 0;\n\ttext-transform: uppercase;\n\tposition: relative;\n\n\t::after{\n\t\tcontent: ' ';\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth:100%;\n\t\theight: 5px;\n\t\tbackground-image: linear-gradient(to right,var(--attention-color), var(--bg-color));\n\t}\n"])), function (_ref) {
  var background = _ref.theme.background;
  return background;
}, function (_ref2) {
  var attention = _ref2.theme.attention;
  return attention;
});
/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(24);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _requireUniversalModule = __webpack_require__(50);
Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});
var _reportChunks = __webpack_require__(52);
Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(28);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _hoistNonReactStatics = __webpack_require__(30);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);
var _context = __webpack_require__(29);
var _context2 = _interopRequireDefault(_context);
var _utils = __webpack_require__(25);
var _helpers = __webpack_require__(53);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
var hasBabelPlugin = false;
var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (false)
  );
};
var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};
function universal(asyncModule) {
  var _class, _temp;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userRender = opts.render,
    _opts$loading = opts.loading,
    Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
    _opts$error = opts.error,
    Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
    _opts$minDelay = opts.minDelay,
    minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
    _opts$alwaysDelay = opts.alwaysDelay,
    alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
    _opts$testBabelPlugin = opts.testBabelPlugin,
    testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
    _opts$loadingTransiti = opts.loadingTransition,
    loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
    options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);
  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);
    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;
        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }
          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
          error = state.error;
        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }
        this.setState(state);
      }
      // $FlowFixMe
    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          addModule = _req.addModule,
          requireSync = _req.requireSync,
          requireAsync = _req.requireAsync,
          asyncOnly = _req.asyncOnly;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }
        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)
        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }
        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }
        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};
        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          requireAsync = _req2.requireAsync,
          requireSync = _req2.requireSync;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }
        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};
        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
          requireSync = _req3.requireSync;
        var mod = requireSync(props);
        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }
        return mod;
      }
    }]);
    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);
      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));
      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };
      _this.state = _this.init(_this.props);
      // $FlowFixMe
      _this.state.error = null;
      return _this;
    }
    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;
        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
            requireSync = _req4.requireSync,
            requireAsync = _req4.requireAsync,
            shouldUpdate = _req4.shouldUpdate;
          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;
            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }
            this.handleBefore(false, !!mod);
            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }
            var state = {
              mod: mod
            };
            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }
            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
          isLoading = _props.isLoading,
          userError = _props.error,
          props = _objectWithoutProperties(_props, ['isLoading', 'error']);
        var _state = this.state,
          mod = _state.mod,
          error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
          requireSync = _req5.requireSync,
          shouldUpdate = _req5.shouldUpdate;
        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }
        return null;
      }
    }]);
    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _utils = __webpack_require__(25);
var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(51)("" + id);
  }
  return __webpack_require__('' + id);
};
exports["default"] = requireById;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;





var Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tmargin: 0 0 1.5em 1em;\n"])));
var CallToAction = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tmargin-left:1em;\n\ttext-transform: uppercase;\n"])));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\theight: 10em;\n"])));
var BottomLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\t--text-color :", ";\n\tdisplay: block;\n\tmargin: 0 0 1em 0;\n\tcolor:var(--text-color);\n"])), function (_ref) {
  var action = _ref.theme.action;
  return action;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\t--bg-color :", "75;\n\t--text-color :", ";\n\n\tpadding: 0 1em ;\n\twidth:20em;\n\tbox-sizing: border-box;\n\tborder-radius: 5px;\n\tborder: 2px solid var(--text-color);\n\tcolor:var(--text-color);\n\tbackground: var(--bg-color);\n"])), function (_ref2) {
  var neutral = _ref2.theme.neutral;
  return neutral;
}, function (_ref3) {
  var text = _ref3.theme.text;
  return text;
});
function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, null, props.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_4__["HashLink"], {
    smooth: true,
    to: props.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BottomLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "fas fa-chevron-circle-right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CallToAction, null, props.call))));
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _Components_pageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _Components_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _Components_roulette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _utils_mapObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _Components_getInTouch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _Components_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _data_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);










function MainPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_pageWrapper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_section__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "projects",
    id: "projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_roulette__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, Object(_utils_mapObject__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_data_projects__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function (id, card, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_card__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, card, {
      url: card.url + "#projects",
      key: i
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_section__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "experience"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_section__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "contact",
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_getInTouch__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    socialNetworks: _data_contact__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
  })));
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProjectPage; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(14);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/data/projects.js
var projects = __webpack_require__(9);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/pageWrapper.js
var pageWrapper = __webpack_require__(10);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/section.js
var section = __webpack_require__(5);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(6);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(3);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/card.js
var Components_card = __webpack_require__(15);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/title.js
var title = __webpack_require__(11);

// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/showcase.js

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;







var Subtitle = external_styled_components_default.a.h3(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n  --bg-color :", "; \n  --attention-color :", "; \n\tpadding-bottom: 1em;\n\tmargin: 1em 0;\n\tposition:relative;\n\ttext-transform: uppercase;\n\t::after{\n\t\tcontent: ' ';\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth:100%;\n\t\theight: 5px;\n\t\tbackground-image: linear-gradient(to right,var(--attention-color), var(--bg-color));\n\t}\n"])), function (_ref) {
  var text = _ref.theme.text;
  return text;
}, function (_ref2) {
  var background = _ref2.theme.background;
  return background;
}, function (_ref3) {
  var attention = _ref3.theme.attention;
  return attention;
});
var Line = external_styled_components_default.a.p(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor: var(--text-color)\n"])), function (_ref4) {
  var text = _ref4.theme.text;
  return text;
});
var Section = external_styled_components_default.a.div(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor: var(--text-color)\n"])), function (_ref5) {
  var text = _ref5.theme.text;
  return text;
});
var Span = external_styled_components_default.a.span(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor:var(--text-color);\n"])), function (_ref6) {
  var action = _ref6.theme.action;
  return action;
});
var CallToAction = external_styled_components_default.a.span(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor:var(--text-color);\n\tmargin-left:1em;\n\ttext-transform: uppercase;\n"])), function (_ref7) {
  var action = _ref7.theme.action;
  return action;
});
var Wrapper = external_styled_components_default.a.div(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tpadding:1em;\n\tcolor:var(--text-color);\n"])), function (_ref8) {
  var text = _ref8.theme.text;
  return text;
});
var Icon = external_styled_components_default.a.span(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n\tmargin:0 1em 0 0;\n\t--text-color :", ";\n\tcolor:var(--text-color);\n"])), function (_ref9) {
  var action = _ref9.theme.action;
  return action;
});
function Showcase(props) {
  var _useParams = Object(external_react_router_dom_["useParams"])(),
    projectId = _useParams.projectId;
  var project = projects["a" /* default */][projectId];
  return /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(title["a" /* default */], null, project.title), /*#__PURE__*/external_react_default.a.createElement(Line, null, project.longDescription)), /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(Subtitle, null, "motivation"), /*#__PURE__*/external_react_default.a.createElement(Line, null, project.motivation)), /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(Subtitle, null, "usage"), project.usage.split("\n").map(function (line, i) {
    return /*#__PURE__*/external_react_default.a.createElement(Line, {
      key: i
    }, line);
  })), /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(Subtitle, null, "TECHNOLOGIES"), /*#__PURE__*/external_react_default.a.createElement("table", null, /*#__PURE__*/external_react_default.a.createElement("tbody", null, project.tech.map(function (line, i) {
    return /*#__PURE__*/external_react_default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/external_react_default.a.createElement("td", null, /*#__PURE__*/external_react_default.a.createElement(Icon, null, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: "fas fa-bookmark"
    })), line));
  })))), /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(Subtitle, null, "source code"), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: project.source[0],
    target: "_blank"
  }, /*#__PURE__*/external_react_default.a.createElement(Span, null, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "fa-brands fa-github"
  }), /*#__PURE__*/external_react_default.a.createElement(CallToAction, null, project.source[1])))));
}
// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/roulette.js
var roulette = __webpack_require__(19);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/utils/mapObject.js
var mapObject = __webpack_require__(20);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/getInTouch.js + 2 modules
var getInTouch = __webpack_require__(22);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/data/contact.js
var contact = __webpack_require__(21);

// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Pages/project.js











function ProjectPage() {
  return /*#__PURE__*/external_react_default.a.createElement(pageWrapper["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(section["a" /* default */], {
    title: "projects",
    id: "projects"
  }, /*#__PURE__*/external_react_default.a.createElement(Showcase, null), /*#__PURE__*/external_react_default.a.createElement(roulette["a" /* default */], null, Object(mapObject["a" /* default */])(projects["a" /* default */], function (id, card, i) {
    return /*#__PURE__*/external_react_default.a.createElement(Components_card["a" /* default */], extends_default()({}, card, {
      url: card.url + "#projects",
      key: i
    }));
  }))), /*#__PURE__*/external_react_default.a.createElement(section["a" /* default */], {
    title: "experience"
  }), /*#__PURE__*/external_react_default.a.createElement(section["a" /* default */], {
    title: "contact",
    id: ""
  }, /*#__PURE__*/external_react_default.a.createElement(getInTouch["a" /* default */], {
    socialNetworks: contact["a" /* default */]
  })));
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _templateObject, _templateObject2;



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-auto-columns: max-content;\n\toverflow-x: auto;\n\tscroll-snap-type: inline mandatory;\n\tgap: 5px;\n\tpadding: 0 5px;\n"])));
var Item = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n"])));
function Roulette(props) {
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var scroll = 0;
  var changed = false;
  var handleScroll = function handleScroll(e) {
    var dist = 5;
    var width = wrapper.current.scrollWidth / 2; //+ wrapper.current.clientWidth;
    var currScroll = wrapper.current.scrollLeft;
    var diff = currScroll - scroll;
    if (diff > 0) {
      if (currScroll >= width - dist && !changed) {
        wrapper.current.scrollLeft = dist;
        changed = true;
      } else changed = false;
    }
    if (diff < 0) {
      if (currScroll <= dist && !changed) {
        wrapper.current.scrollLeft = width - dist;
        changed = true;
      } else changed = false;
    }
    scroll = currScroll;
  };
  var renderChildren = function renderChildren() {
    return props.children.map(function (child, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
        key: i
      }, child);
    });
  };
  return (
    /*#__PURE__*/
    // <Wrapper {...props} ref={wrapper} onScroll={handleScroll}>
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, props, renderChildren())
  );
}
Roulette.defaultProps = {
  direction: "row"
};
/* harmony default export */ __webpack_exports__["a"] = (Roulette);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMapping; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

function createMapping(obj, func) {
  var arr = Array();
  var i = 0;
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var _ref = _Object$entries[_i];
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2);
    var key = _ref2[0];
    var value = _ref2[1];
    arr.push(func(key, value, i));
    i++;
  }
  return arr;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SocialNetworks = [{
  icon: "fa-brands fa-github",
  url: "https://github.com/warleon",
  text: "warleon"
}];
/* harmony default export */ __webpack_exports__["a"] = (SocialNetworks);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GetInTouch; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/Form.js

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;


var InputBox = Object(external_styled_components_["css"])(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\t--bg-color :", "75;\n\tbox-sizing: border-box;\n\tdisplay: block;\n\tpadding: 0 1em;\n\twidth: 100%;\n\tborder-radius: 5px;\n\tborder-color:var(--text-color);\n\tbackground: var(--bg-color);\n\tflex-grow:1;\n\tborder-width: 2px;\n\tcolor:var(--text-color)\n"])), function (_ref) {
  var text = _ref.theme.text;
  return text;
}, function (_ref2) {
  var neutral = _ref2.theme.neutral;
  return neutral;
});
var Input = external_styled_components_default.a.input(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n\t", ";\n\theight: 2.75em;\n"])), InputBox);
var TextArea = external_styled_components_default.a.textarea(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n\t", ";\n\tresize: vertical;\n"])), InputBox);
var Label = external_styled_components_default.a.label(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n\tdisplay: block;\n\tfont-family: Raleway, Helvetica, sans-serif;\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tletter-spacing: 0.1em;\n\tmargin: 0 0 0.7em 0;\n\ttext-transform: uppercase;\n"])));
var Field = external_styled_components_default.a.div(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\twidth: 100% ;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tdisplay:flex;\n\tflex-direction:column;\n\tpadding-top: 1.5em;\n\tcolor:var(--text-color)\n"])), function (_ref3) {
  var text = _ref3.theme.text;
  return text;
});
var Fields = external_styled_components_default.a.div(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n\tpadding: 0 1.5em 0 1.5em;\n\twidth: calc(100% - 3em);\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"])));
var StyledForm = external_styled_components_default.a.form(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor: var(--text-color);\n\t@media screen and (min-width: 720px) {\n\t\twidth:70%;\n\t\t\n\t}\n"])), function (_ref4) {
  var text = _ref4.theme.text;
  return text;
});
function Form(props) {
  return /*#__PURE__*/external_react_default.a.createElement(StyledForm, {
    method: props.method,
    action: props.action
  }, /*#__PURE__*/external_react_default.a.createElement(Fields, null, props.fields.map(function (field, i) {
    return /*#__PURE__*/external_react_default.a.createElement(Field, {
      key: i
    }, /*#__PURE__*/external_react_default.a.createElement(Label, {
      htmlFor: field.name
    }, field.name), field.textArea ? /*#__PURE__*/external_react_default.a.createElement(TextArea, {
      id: field.name,
      required: field.required,
      rows: field.rows
    }) : /*#__PURE__*/external_react_default.a.createElement(Input, {
      type: field.type,
      id: field.name,
      required: field.required
    }));
  }), /*#__PURE__*/external_react_default.a.createElement(Field, null, /*#__PURE__*/external_react_default.a.createElement(Input, {
    type: "submit",
    value: props.sendMessage
  }))));
}
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(6);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(3);

// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/iconList.js

var iconList_templateObject, iconList_templateObject2, iconList_templateObject3, iconList_templateObject4;




var List = external_styled_components_default.a.ul(iconList_templateObject || (iconList_templateObject = taggedTemplateLiteral_default()(["\n\tlist-style-type: none;\n\tpadding: 0 1.5em 0 1.5em;\n\twidth: calc(100% - 3em);\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction:column;\n\tflex-shrink: 1;\n\twidth: auto;\n"])));
var Item = external_styled_components_default.a.li(iconList_templateObject2 || (iconList_templateObject2 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor:var(--text-color);\n\tpadding: 1em 0;\n"])), function (_ref) {
  var text = _ref.theme.text;
  return text;
});
var Spaced = external_styled_components_default.a.p(iconList_templateObject3 || (iconList_templateObject3 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor:var(--text-color);\n\tpadding: 0 0 0 1em;\n\tmargin: 0;\n"])), function (_ref2) {
  var text = _ref2.theme.text;
  return text;
});
var Span = external_styled_components_default.a.span(iconList_templateObject4 || (iconList_templateObject4 = taggedTemplateLiteral_default()(["\n\t--text-color :", ";\n\tcolor:var(--text-color);\n\tdisplay:flex;\n\tflex-wrap:nowrap;\n"])), function (_ref3) {
  var action = _ref3.theme.action;
  return action;
});
function IconList(props) {
  return /*#__PURE__*/external_react_default.a.createElement(List, null, props.items.map(function (item, i) {
    return /*#__PURE__*/external_react_default.a.createElement(Item, {
      key: i
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: item.url,
      target: "_blank"
    }, /*#__PURE__*/external_react_default.a.createElement(Span, null, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: item.icon
    }), /*#__PURE__*/external_react_default.a.createElement(Spaced, null, item.text))));
  }));
}
// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Components/getInTouch.js

var getInTouch_templateObject;




var Wrapper = external_styled_components_default.a.div(getInTouch_templateObject || (getInTouch_templateObject = taggedTemplateLiteral_default()(["\n\tdisplay:flex;\n\tflex-wrap:wrap;\n"])));
function GetInTouch(props) {
  var formProps = {
    method: "post",
    action: "https://formsubmit.co/ad445c50c346c2a38d4d79094ff96bb9",
    sendMessage: "Send Message",
    fields: [{
      name: "name",
      type: "text",
      required: true
    }, {
      name: "email",
      type: "email",
      required: true
    }, {
      name: "message",
      required: true,
      textArea: true,
      rows: 4
    }]
  };
  return /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(Form, formProps), /*#__PURE__*/external_react_default.a.createElement(IconList, {
    items: props.socialNetworks
  }));
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(35);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(36);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(37);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(38);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(26);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(39);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(40);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(41);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/NormalStyle.js

var _templateObject;

var NormalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n\nbody {\n  margin: 0;\n}\n\n\nmain {\n  display: block;\n}\n\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\na {\n  background-color: transparent;\n}\n\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n * 1. Correct the inability to style clickable types in iOS and Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"])));
/* harmony default export */ var src_NormalStyle = (NormalStyle);
// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Assets/colorPalette.js
var ColorPalettes = [{
  action: "#00FF00",
  background: "#14648D",
  text: "#D0F5FF",
  neutral: "#7095B2",
  attention: ""
}, {
  background: "white",
  text: "black",
  action: "#920632",
  //rojo oscuro
  attention: "#BDD178",
  //verde claro
  neutral: "grey"
}];
/* harmony default export */ var colorPalette = (ColorPalettes);
// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Pages/project.js + 1 modules
var project = __webpack_require__(17);

// EXTERNAL MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/Pages/main.js
var main = __webpack_require__(16);

// CONCATENATED MODULE: /mnt/c/Users/Usurio/Desktop/repositories/Portfolio/src/App.js






var App_templateObject;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"], free_solid_svg_icons_["fas"]);
var GlobalStyle = external_styled_components_default()(src_NormalStyle)(App_templateObject || (App_templateObject = taggedTemplateLiteral_default()(["\n  * {\n    --text-color: ", ";\n    --bg-color: ", ";\n    --action-color: ", ";\n    --neutral-color: ", ";\n    --attention-color: ", ";\n    --gradient: linear-gradient(\n      to right,\n      var(--attention-color),\n      var(--bg-color)\n    );\n\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 12pt;\n\tcolor: var(--text-color);\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: Raleway, Helvetica, sans - serif;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin: 0 0 1em 0;\n  text-transform: uppercase;\n}\n\n&::-webkit-scrollbar{\n  width: 10px;\n  height: 10px;\n}\n&::-webkit-scrollbar-track {\n  background-color:var(--bg-color);\n  padding:10px\n}\n&::-webkit-scrollbar-thumb {\n  background: var(--neutral-color); \n  border-radius:5px;\n}\n&::-webkit-scrollbar-thumb:hover {\nbackground: var(--text-color); \n} \n"])), function (_ref) {
  var text = _ref.theme.text;
  return text;
}, function (_ref2) {
  var background = _ref2.theme.background;
  return background;
}, function (_ref3) {
  var action = _ref3.theme.action;
  return action;
}, function (_ref4) {
  var neutral = _ref4.theme.neutral;
  return neutral;
}, function (_ref5) {
  var attention = _ref5.theme.attention;
  return attention;
});
var App_App = /*#__PURE__*/function (_Component) {
  inherits_default()(App, _Component);
  var _super = _createSuper(App);
  function App() {
    var _this;
    classCallCheck_default()(this, App);
    _this = _super.call(this);
    _this.state = {
      colorPalette: colorPalette[1]
    };
    return _this;
  }
  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: this.state.colorPalette
      }, /*#__PURE__*/external_react_default.a.createElement(GlobalStyle, null), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Routes"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
        path: "projects/:projectId",
        element: /*#__PURE__*/external_react_default.a.createElement(project["default"], null)
      }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
        path: "/",
        element: /*#__PURE__*/external_react_default.a.createElement(main["default"], null)
      }))));
    }
  }]);
  return App;
}(external_react_["Component"]);
/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(24);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};
var _react = __webpack_require__(0);
var React = _interopRequireWildcard(_react);
var _requireById = __webpack_require__(13);
var _requireById2 = _interopRequireDefault(_requireById);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};
var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};
var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }
  return null;
};
var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};
var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};
var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};
var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }
    return createElement(Loading, props);
  };
};
var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};
var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};
var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};
var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};
var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("/mnt/c/Users/Usurio/Desktop/repositories/Portfolio/node_modules/react-static/lib/browser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var ReportContext = _react2["default"].createContext({
  report: function report() {}
});
exports["default"] = ReportContext;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


function MainPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, "PAGE NOT FOUND");
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-router-hash-link");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(47);
module.exports = __webpack_require__(54);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-dynamic-require */
var plugins = __webpack_require__(46)["default"];
var _require = __webpack_require__(27),
  registerPlugins = _require.registerPlugins;
registerPlugins(plugins);
if (false) {}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports

// Plugins
var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}];

// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-dynamic-require */
var _require = __webpack_require__(27),
  registerTemplates = _require.registerTemplates;
var _require2 = __webpack_require__(48),
  templates = _require2["default"],
  notFoundTemplate = _require2.notFoundTemplate;
registerTemplates(templates, notFoundTemplate);
if (false) {}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);








Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Pages/404 */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/Pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Pages/main.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Pages/main.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Pages/main";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/Pages/main.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Pages/project.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Pages/project.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Pages/project";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/Pages/project.js';

// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/Pages/404.js': t_0,
  '__react_static_root__/src/Pages/main.js': t_1,
  '__react_static_root__/src/Pages/project.js': t_2
});
// Not Found Template
var notFoundTemplate = "__react_static_root__/src/Pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
exports["default"] = requireUniversalModule;
var _utils = __webpack_require__(25);
var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();
function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
    _options$timeout = options.timeout,
    timeout = _options$timeout === undefined ? 15000 : _options$timeout,
    onLoad = options.onLoad,
    onError = options.onError,
    isDynamic = options.isDynamic,
    modCache = options.modCache,
    promCache = options.promCache,
    usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
    path = config.path,
    resolve = config.resolve,
    load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';
  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (!exp) {
      var mod = void 0;
      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }
      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }
    return exp;
  };
  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);
      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };
      var request = load(props, {
        resolve: resolve,
        reject: reject
      });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };
  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;
          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }
      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };
  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };
  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}
var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};
var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};
var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};
var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }
    return resultingConfig;
  }
  var load = typeof universalConfig === 'function' ? universalConfig :
  // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 13,
	"./": 13,
	"./index": 13,
	"./index.js": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(24);
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(28);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _context = __webpack_require__(29);
var _context2 = _interopRequireDefault(_context);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);
  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);
    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));
    _this.state = {
      report: props.report
    };
    return _this;
  }
  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return ReportChunks;
}(_react2["default"].Component);
ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;
var _hoistNonReactStatics = __webpack_require__(30);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _index = __webpack_require__(12);
var _index2 = _interopRequireDefault(_index);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;
  if (!state.error) {
    state.error = null;
  }
  return __handleAfter(props, state, isMount, isSync, isServer);
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */
var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
    error = state.error;
  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });
    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }
  return state;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(31);
var _interopRequireWildcard = __webpack_require__(32);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(0));
var _useStaticInfo = __webpack_require__(55);
var _Suspense = _interopRequireDefault(__webpack_require__(56));

/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500
React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];
var App = __webpack_require__(58)["default"];
var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};
exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("/mnt/c/Users/Usurio/Desktop/repositories/Portfolio/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(32);
var _interopRequireDefault = __webpack_require__(31);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(14));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(57));
var React = _interopRequireWildcard(__webpack_require__(0));
var OriginalSuspense = React.Suspense;
function Suspense(_ref) {
  var key = _ref.key,
    children = _ref.children,
    rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}
var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);





// Your top level component


// Export your top level component as JSX (for static rendering)
/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

// Render your app
if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;
  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null))), target);
  };

  // Render!
  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule);
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
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

/***/ })
/******/ ]);
});