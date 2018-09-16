module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/data.json":
/***/ (function(module, exports) {

module.exports = [{"id":0,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":1,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":2,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":3,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":4,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":5,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":6,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":7,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":8,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":9,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":10,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":11,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":12,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":13,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":14,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":15,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":16,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":17,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."}]

/***/ }),

/***/ "./pages/Card.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card_css__ = __webpack_require__("./pages/Card.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Card_css__);
var _jsxFileName = "/home/tonis/experiments/ssr/pages/Card.js";



var Card = function Card(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "front",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/juice.jpg",
    alt: "Avatar",
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Vitamin Juice ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "$24.99")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Need a jump on your vitamins while drinking? Tired of popping the pills? Drink our vitamin enhanced juice, available in several flavours."))));
};

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./pages/index.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__("./pages/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Card__ = __webpack_require__("./pages/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_redux_wrapper__);

var _jsxFileName = "/home/tonis/experiments/ssr/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 // redux dependencies





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/logo.png",
        className: "static-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.cards.map(function (card) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Card__["a" /* default */], {
          key: card.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        });
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var store;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store__["c" /* initialCards */])());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initialCards: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__store__["c" /* initialCards */], dispatch),
    addItem: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* addItem */], dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cards: state.cards
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_6_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__store__["b" /* initStore */], mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addItem; });
/* unused harmony export reducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_json__ = __webpack_require__("./data/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_data_json__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Initial State

var startState = {
  cards: []
}; // Actions

var initialCards = function initialCards() {
  return {
    type: 'INITIAL_CARDS',
    cards: __WEBPACK_IMPORTED_MODULE_3__data_data_json___default.a
  };
};
var addItem = function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item: item
  };
}; // Reducers

var reducers = function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INITIAL_CARDS':
      return {
        cards: action.cards
      };

    case 'ADD_ITEM':
      return _objectSpread({}, state, {
        cards: _toConsumableArray(state.cards).concat([action.item])
      });

    default:
      return state;
  }
}; // Create Store

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : startState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducers, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map