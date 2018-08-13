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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__truffle__);


var web3;
var env = process.env.ENV || "production" || 'development';

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else if (env == 'development') {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a("http://localhost:" + __WEBPACK_IMPORTED_MODULE_1__truffle___default.a.networks.development.port);
} else {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_numeral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__ = __webpack_require__(3);



function formatNumber(value) {
  return __WEBPACK_IMPORTED_MODULE_0_numeral___default()(value).format('0,0');
}

function isAddressValid(address) {
  var addressRE = /^0x[a-fA-F0-9]{40}$/;
  return address.match(addressRE);
}

function convertToEther(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].utils.fromWei(value, 'ether');
}

function convertToWei(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].utils.toWei(value);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  formatNumber: formatNumber,
  isAddressValid: isAddressValid,
  convertToEther: convertToEther,
  convertToWei: convertToWei
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(13)();

routes.add('./', '/index').add('/token/view/:tokenAddress', '/token/view');
module.exports = routes;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./ethereum/api/web3.js
var api_web3 = __webpack_require__(3);

// EXTERNAL MODULE: ./helpers/web3TxHandler.js
var web3TxHandler = __webpack_require__(7);

// EXTERNAL MODULE: ./helpers/solver.js
var solver = __webpack_require__(4);

// EXTERNAL MODULE: ./ethereum/build/contracts/BasicERC20.json
var BasicERC20 = __webpack_require__(15);
var BasicERC20_default = /*#__PURE__*/__webpack_require__.n(BasicERC20);

// CONCATENATED MODULE: ./ethereum/api/erc20/basicERC20.js

function basicTokenAt(tokenAddress, web3) {
  return new web3.eth.Contract(BasicERC20_default.a.abi, tokenAddress);
}
// CONCATENATED MODULE: ./helpers/erc20/apiBasicERC20.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





/* reading functions */

function getSummary(_x) {
  return _getSummary.apply(this, arguments);
}

function _getSummary() {
  _getSummary = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(tokenAddress) {
    var summary, token;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            summary = {};
            _context.prev = 1;
            token = basicTokenAt(tokenAddress, api_web3["a" /* default */]);
            _context.next = 5;
            return token.methods.name().call();

          case 5:
            summary['name'] = _context.sent;
            _context.next = 8;
            return token.methods.symbol().call();

          case 8:
            summary['symbol'] = _context.sent;
            _context.next = 11;
            return token.methods.decimals().call();

          case 11:
            summary['decimals'] = _context.sent;
            _context.next = 14;
            return token.methods.totalSupply().call();

          case 14:
            summary['totalSupply'] = _context.sent;
            _context.next = 17;
            return token.methods.owner().call();

          case 17:
            summary['owner'] = _context.sent;
            _context.next = 22;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](1);

          case 22:
            return _context.abrupt("return", summary);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 20]]);
  }));
  return _getSummary.apply(this, arguments);
}

function apiBasicERC20_totalSupply(_x2) {
  return _totalSupply.apply(this, arguments);
}

function _totalSupply() {
  _totalSupply = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee2(tokenAddress) {
    var token, totalSupply;
    return regenerator__default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = basicTokenAt(tokenAddress, api_web3["a" /* default */]);
            _context2.next = 3;
            return token.methods.totalSupply().call();

          case 3:
            totalSupply = _context2.sent;
            return _context2.abrupt("return", totalSupply);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _totalSupply.apply(this, arguments);
}

function balanceOf(_x3, _x4) {
  return _balanceOf.apply(this, arguments);
}

function _balanceOf() {
  _balanceOf = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee3(tokenAddress, who) {
    var token, balance;
    return regenerator__default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = basicTokenAt(tokenAddress, api_web3["a" /* default */]);
            _context3.next = 3;
            return token.methods.balanceOf(who).call();

          case 3:
            balance = _context3.sent;
            return _context3.abrupt("return", balance);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _balanceOf.apply(this, arguments);
}

function transfer(_x5, _x6, _x7) {
  return _transfer.apply(this, arguments);
}

function _transfer() {
  _transfer = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee4(tokenAddress, to, value) {
    var token, method, response;
    return regenerator__default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            value = solver["a" /* default */].convertToWei(value);
            token = basicTokenAt(tokenAddress, api_web3["a" /* default */]);
            method = token.methods.transfer(to, value);
            _context4.next = 5;
            return Object(web3TxHandler["a" /* default */])(method);

          case 5:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _transfer.apply(this, arguments);
}

/* harmony default export */ var apiBasicERC20 = __webpack_exports__["a"] = ({
  totalSupply: apiBasicERC20_totalSupply,
  balanceOf: balanceOf,
  transfer: transfer,
  getSummary: getSummary
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sendTx;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__ = __webpack_require__(3);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


function sendTx(_x) {
  return _sendTx.apply(this, arguments);
}

function _sendTx() {
  _sendTx = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(method) {
    var response, accounts, tx;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {
              error: true,
              message: ""
            };
            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].eth.getAccounts();

          case 4:
            accounts = _context.sent;
            _context.next = 7;
            return method.send({
              from: accounts[0]
            });

          case 7:
            tx = _context.sent;
            response.error = false;
            response.message = tx.transactionHash;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            response.message = _context.t0.message.split("\n")[0];

          case 15:
            return _context.abrupt("return", response);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 12]]);
  }));
  return _sendTx.apply(this, arguments);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(2);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: ./ethereum/api/web3.js
var web3 = __webpack_require__(3);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(5);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./components/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "show", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "close", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: false
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "renderModal",

    /* 
    TODO:
    add <Button positive icon='ethereum' labelPosition='right' content='Contribute' />
    inside Modal.Actions, next to the other button
    
    TODO:
    <Modal.Actions>
      TODO: handle error message when  click oo contribte
    </Modal.Actions> 
    */
    value: function renderModal() {
      var open = this.state.open;
      return external__react__default.a.createElement(external__semantic_ui_react_["Modal"], {
        size: "tiny",
        open: open,
        onClose: this.close
      }, external__react__default.a.createElement(external__semantic_ui_react_["Modal"].Header, null, "About"), external__react__default.a.createElement(external__semantic_ui_react_["Modal"].Content, null, this.renderContent()), external__react__default.a.createElement(external__semantic_ui_react_["Modal"].Actions, null, external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        negative: true,
        onClick: this.close
      }, "Close")));
    }
  }, {
    key: "renderLink",
    value: function renderLink(num) {
      var message = "Open Zeppelin Framework";
      var href = "https://openzeppelin.org/";

      if (num == 1) {
        message = "https://github.com/sdelvalle57/token_deployer";
        href = "https://github.com/sdelvalle57/token_deployer";
      } else if (num == 2) {
        message = "Linkedin profile";
        href = "https://www.linkedin.com/in/santiago-del-valle-sdelvalle57-96654969/";
      }

      return external__react__default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href
      }, message);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return external__react__default.a.createElement("p", {
        align: "justify"
      }, external__react__default.a.createElement("strong", null, "ERC Token Interface"), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), "The purpose of this project is to create an ERC Token interface to read and launch tokens on the test and the main network. ", external__react__default.a.createElement("br", null), "We will use ", this.renderLink(0), "  for the contracts and we will add some other contracts for the deployments of these.", external__react__default.a.createElement("br", null), "This is a personal project thus any collaboration would be appreciated, developers, designers and enthusiasts are welcome to contribute.", external__react__default.a.createElement("br", null), "Please pass this project as many peers that you can, is on behalf of the community.", external__react__default.a.createElement("br", null), "Visit ", this.renderLink(1), "  for the latest deployments.", external__react__default.a.createElement("br", null), "If you want to contribute please launch a token and send some ether to the contract(this way is much more appreciated). ", external__react__default.a.createElement("br", null), "Email: sdelvalle57@gmail.com ", external__react__default.a.createElement("br", null), this.renderLink(2));
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Menu"], {
        style: {
          marginTop: '10px'
        }
      }, external__react__default.a.createElement(routes["Link"], {
        route: "/"
      }, external__react__default.a.createElement("a", {
        className: "item"
      }, "ERC-token.online")), external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Menu, {
        position: "right"
      }, external__react__default.a.createElement("a", {
        className: "item",
        onClick: this.show
      }, "About"))), this.renderModal());
    }
  }]);

  return Header;
}(external__react_["Component"]);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.js


/* harmony default export */ var Footer = (function (props) {
  var network = props.network;
  var providerMessage = "Choose a web3 provider";
  var logginMessage = "Not logged";
  var networkMessage = "Select the Main or Rinkeby network";

  if (!network.providerNotSet) {
    providerMessage = window.web3.currentProvider.constructor.name;
  }

  if (!network.notLogged) {
    logginMessage = "Logged";
  }

  if (!network.networkNotSet) {
    networkMessage = "";

    switch (parseInt(network.networkId)) {
      case 1:
        networkMessage = "Main";
        break;

      case 4:
        networkMessage = "Rinkeby";
        break;
    }

    networkMessage += " network selected";
  }

  return external__react__default.a.createElement(external__semantic_ui_react_["Step"].Group, {
    ordered: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Step"], {
    completed: !network.providerNotSet,
    active: network.providerNotSet
  }, external__react__default.a.createElement(external__semantic_ui_react_["Step"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Step"].Title, null, "Provider"), external__react__default.a.createElement(external__semantic_ui_react_["Step"].Description, null, providerMessage))), external__react__default.a.createElement(external__semantic_ui_react_["Step"], {
    completed: !network.networkNotSet,
    active: network.networkNotSet
  }, external__react__default.a.createElement(external__semantic_ui_react_["Step"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Step"].Title, null, "Network"), external__react__default.a.createElement(external__semantic_ui_react_["Step"].Description, null, networkMessage))), external__react__default.a.createElement(external__semantic_ui_react_["Step"], {
    completed: !network.notLogged,
    active: network.notLogged
  }, external__react__default.a.createElement(external__semantic_ui_react_["Step"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Step"].Title, null, "Loggin"), external__react__default.a.createElement(external__semantic_ui_react_["Step"].Description, null, logginMessage))));
});
// CONCATENATED MODULE: ./components/Layout.js


function Layout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout__typeof = function _typeof(obj) { return typeof obj; }; } else { Layout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function Layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout__createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout__defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout__defineProperties(Constructor, staticProps); return Constructor; }

function Layout__possibleConstructorReturn(self, call) { if (call && (Layout__typeof(call) === "object" || typeof call === "function")) { return call; } return Layout__assertThisInitialized(self); }

function Layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Layout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout__inherits(Layout, _Component);

  function Layout() {
    var _ref;

    var _temp, _this;

    Layout__classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Layout__possibleConstructorReturn(_this, (_temp = _this = Layout__possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Layout__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        network: {
          providerNotSet: true,
          networkNotSet: true,
          networkId: 0,
          notLogged: true,
          accounts: [],
          message: '',
          contractError: false
        }
      }
    }), Object.defineProperty(Layout__assertThisInitialized(_this), "setCheckNetworkInterval", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var network = _this.state.network;
        _this.interval = setInterval(function () {
          network.message = '';
          network.accounts = [];

          if (typeof window.web3 == 'undefined') {
            network.providerNotSet = true;
            network.message = "Use a provider to send the Transaction";

            _this.setState({
              network: network
            });

            _this.props.callback({
              network: network
            });

            return;
          }

          network.providerNotSet = false;

          if (typeof window.web3 != 'undefined') {
            window.web3.version.getNetwork(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regenerator__default.a.mark(function _callee(err, netId) {
                var accounts;
                return regenerator__default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        network.networkId = netId;

                        if (!(netId != "1" && netId != "4")) {
                          _context.next = 8;
                          break;
                        }

                        network.message = "Please select the Main or Rinkeby network";
                        network.networkNotSet = true;

                        _this.props.callback({
                          network: network
                        });

                        return _context.abrupt("return");

                      case 8:
                        network.networkNotSet = false;

                      case 9:
                        _context.next = 11;
                        return web3["a" /* default */].eth.getAccounts();

                      case 11:
                        accounts = _context.sent;

                        if (!accounts[0]) {
                          network.message = "Please login to the network";
                          network.notLogged = true;
                        } else {
                          network.accounts = accounts;
                          network.notLogged = false;
                        }

                        _this.setState({
                          network: network
                        });

                        _this.props.callback({
                          network: network
                        });

                      case 15:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          }
        }, 1000);
      }
    }), _temp));
  }

  Layout__createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCheckNetworkInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/dist/semantic.min.css"
      })), external__react__default.a.createElement(components_Header, null), this.props.children, external__react__default.a.createElement(Footer, {
        network: this.state.network
      }));
    }
  }]);

  return Layout;
}(external__react_["Component"]);

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var HDWalletProvider = __webpack_require__(12);

var privKey = "D26D6AFD5A2A4862CC8FB02523BDDE5CCF1427159519D9FC9187BE7D960BECCB".toLowerCase(); // private keys

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
      ///from: "0x9426bAb45448D7830F4e690d34f553Bec97e94Cd"

    },
    rinkeby: {
      provider: function provider() {
        return new HDWalletProvider(privKey, "https://rinkeby.infura.io/qAudSy87uo2SByV57ETq");
      },
      network_id: '4',
      gas: 4612388
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("truffle-hdwallet-provider-privkey");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"contractName":"BasicERC20","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],"bytecode":"0x6080604052601260055534801561001557600080fd5b50604051610b12380380610b12833981018060405281019080805182019291906020018051820192919060200180519060200190929190505050600033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600554600a0a820290508060018190555083600390805190602001906100b992919061016d565b5082600490805190602001906100d092919061016d565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350505050610212565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ae57805160ff19168380011785556101dc565b828001600101855582156101dc579182015b828111156101db5782518255916020019190600101906101c0565b5b5090506101e991906101ed565b5090565b61020f91905b8082111561020b5760008160009055506001016101f3565b5090565b90565b6108f1806102216000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009357806318160ddd14610123578063313ce5671461014e57806370a08231146101795780638da5cb5b146101d057806395d89b4114610227578063a9059cbb146102b7578063f2fde38b1461031c575b600080fd5b34801561009f57600080fd5b506100a861035f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b506101386103fd565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b50610163610407565b6040518082815260200191505060405180910390f35b34801561018557600080fd5b506101ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040d565b6040518082815260200191505060405180910390f35b3480156101dc57600080fd5b506101e5610455565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023357600080fd5b5061023c61047b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c357600080fd5b50610302600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610519565b604051808215151515815260200191505060405180910390f35b34801561032857600080fd5b5061035d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610738565b005b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b505050505081565b6000600154905090565b60055481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561055657600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156105a357600080fd5b6105f4826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461089090919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610687826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108a990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561079457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561089e57fe5b818303905092915050565b600081830190508281101515156108bc57fe5b809050929150505600a165627a7a72305820c36a76fe94900b227a415242b2ea9111f70d39a36c60f4d59e3577835e900bf60029","deployedBytecode":"0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009357806318160ddd14610123578063313ce5671461014e57806370a08231146101795780638da5cb5b146101d057806395d89b4114610227578063a9059cbb146102b7578063f2fde38b1461031c575b600080fd5b34801561009f57600080fd5b506100a861035f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b506101386103fd565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b50610163610407565b6040518082815260200191505060405180910390f35b34801561018557600080fd5b506101ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040d565b6040518082815260200191505060405180910390f35b3480156101dc57600080fd5b506101e5610455565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023357600080fd5b5061023c61047b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c357600080fd5b50610302600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610519565b604051808215151515815260200191505060405180910390f35b34801561032857600080fd5b5061035d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610738565b005b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b505050505081565b6000600154905090565b60055481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561055657600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156105a357600080fd5b6105f4826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461089090919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610687826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108a990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561079457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561089e57fe5b818303905092915050565b600081830190508281101515156108bc57fe5b809050929150505600a165627a7a72305820c36a76fe94900b227a415242b2ea9111f70d39a36c60f4d59e3577835e900bf60029","sourceMap":"94:498:5:-;;;224:2;198:28;;235:354;8:9:-1;5:2;;;30:1;27;20:12;5:2;235:354:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;319:22;539:10:12;531:5;;:18;;;;;;;;;;;;;;;;;;376:8:5;;362:2;:23;344:14;:42;319:67;;412:14;397:12;:29;;;;444:5;437:4;:12;;;;;;;;;;;;:::i;:::-;;469:7;460:6;:16;;;;;;;;;;;;:::i;:::-;;510:14;487:8;:20;496:10;487:20;;;;;;;;;;;;;;;:37;;;;554:10;540:41;;549:3;540:41;566:14;540:41;;;;;;;;;;;;;;;;;;235:354;;;;94:498;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"94:498:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;146:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;146:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;146:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;404:91:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;404:91:0;;;;;;;;;;;;;;;;;;;;;;;198:28:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;198:28:5;;;;;;;;;;;;;;;;;;;;;;;1244:107:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1244:107:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;249:20:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;249:20:12;;;;;;;;;;;;;;;;;;;;;;;;;;;171::5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;171:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;171:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;668:355:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;668:355:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;902:192:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;902:192:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;146:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;404:91:0:-;448:7;475:12;;468:19;;404:91;:::o;198:28:5:-;;;;:::o;1244:107:0:-;1300:7;1327:8;:16;1336:6;1327:16;;;;;;;;;;;;;;;;1320:23;;1244:107;;;:::o;249:20:12:-;;;;;;;;;;;;;:::o;171::5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;668:355:0:-;731:4;771:1;756:17;;:3;:17;;;;748:26;;;;;;;;803:8;:20;812:10;803:20;;;;;;;;;;;;;;;;793:6;:30;;785:39;;;;;;;;860:32;885:6;860:8;:20;869:10;860:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;837:8;:20;846:10;837:20;;;;;;;;;;;;;;;:55;;;;919:25;937:6;919:8;:13;928:3;919:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;903:8;:13;912:3;903:13;;;;;;;;;;;;;;;:41;;;;981:3;960:33;;969:10;960:33;;;986:6;960:33;;;;;;;;;;;;;;;;;;1011:4;1004:11;;668:355;;;;:::o;902:192:12:-;702:5;;;;;;;;;;;688:19;;:10;:19;;;680:28;;;;;;;;1003:1;983:22;;:8;:22;;;;975:31;;;;;;;;1050:8;1022:37;;1043:5;;;;;;;;;;;1022:37;;;;;;;;;;;;1078:8;1070:5;;:16;;;;;;;;;;;;;;;;;;902:192;:::o;922:123:13:-;980:7;1012:1;1007;:6;;1000:14;;;;;;1036:1;1032;:5;1025:12;;922:123;;;;:::o;1114:141::-;1172:9;1202:1;1198;:5;1194:9;;1226:1;1221;:6;;1214:14;;;;;;1246:1;1239:8;;1114:141;;;;:::o","source":"pragma solidity 0.4.24;\r\n\r\nimport \"../BasicToken.sol\"; \r\nimport \"../../utils/Ownable.sol\";\r\n\r\ncontract BasicERC20 is BasicToken, Ownable {\r\n\r\n    string public name;\r\n    string public symbol;\r\n    uint256 public decimals = 18;\r\n\r\n    constructor(string _name, string _symbol, uint256 _initialSupply) public {\r\n        uint256 INITIAL_SUPPLY = _initialSupply * (10 ** uint256(decimals));\r\n        totalSupply_ = INITIAL_SUPPLY;\r\n        name = _name;\r\n        symbol = _symbol;\r\n        balances[msg.sender] = INITIAL_SUPPLY;\r\n        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);\r\n    }\r\n}","sourcePath":"E:\\Ethereum\\TokenCreator\\ethereum\\contracts\\ERC20\\flavors\\BasicERC20.sol","ast":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","exportedSymbols":{"BasicERC20":[541]},"id":542,"nodeType":"SourceUnit","nodes":[{"id":480,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:5"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/BasicToken.sol","file":"../BasicToken.sol","id":481,"nodeType":"ImportDirective","scope":542,"sourceUnit":96,"src":"27:27:5","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/Ownable.sol","file":"../../utils/Ownable.sol","id":482,"nodeType":"ImportDirective","scope":542,"sourceUnit":1205,"src":"57:33:5","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":483,"name":"BasicToken","nodeType":"UserDefinedTypeName","referencedDeclaration":95,"src":"117:10:5","typeDescriptions":{"typeIdentifier":"t_contract$_BasicToken_$95","typeString":"contract BasicToken"}},"id":484,"nodeType":"InheritanceSpecifier","src":"117:10:5"},{"arguments":null,"baseName":{"contractScope":null,"id":485,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":1204,"src":"129:7:5","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$1204","typeString":"contract Ownable"}},"id":486,"nodeType":"InheritanceSpecifier","src":"129:7:5"}],"contractDependencies":[95,170,1204],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":541,"linearizedBaseContracts":[541,1204,95,170],"name":"BasicERC20","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":488,"name":"name","nodeType":"VariableDeclaration","scope":541,"src":"146:18:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":487,"name":"string","nodeType":"ElementaryTypeName","src":"146:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":490,"name":"symbol","nodeType":"VariableDeclaration","scope":541,"src":"171:20:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":489,"name":"string","nodeType":"ElementaryTypeName","src":"171:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":493,"name":"decimals","nodeType":"VariableDeclaration","scope":541,"src":"198:28:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":491,"name":"uint256","nodeType":"ElementaryTypeName","src":"198:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"3138","id":492,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"224:2:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_18_by_1","typeString":"int_const 18"},"value":"18"},"visibility":"public"},{"body":{"id":539,"nodeType":"Block","src":"308:281:5","statements":[{"assignments":[503],"declarations":[{"constant":false,"id":503,"name":"INITIAL_SUPPLY","nodeType":"VariableDeclaration","scope":540,"src":"319:22:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":502,"name":"uint256","nodeType":"ElementaryTypeName","src":"319:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":512,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":511,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":504,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":499,"src":"344:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":509,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"hexValue":"3130","id":505,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"362:2:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10_by_1","typeString":"int_const 10"},"value":"10"},"nodeType":"BinaryOperation","operator":"**","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":507,"name":"decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":493,"src":"376:8:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":506,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"368:7:5","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":508,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"368:17:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"362:23:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":510,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"361:25:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"344:42:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"319:67:5"},{"expression":{"argumentTypes":null,"id":515,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":513,"name":"totalSupply_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"397:12:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":514,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":503,"src":"412:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"397:29:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":516,"nodeType":"ExpressionStatement","src":"397:29:5"},{"expression":{"argumentTypes":null,"id":519,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":517,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":488,"src":"437:4:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":518,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":495,"src":"444:5:5","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"437:12:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":520,"nodeType":"ExpressionStatement","src":"437:12:5"},{"expression":{"argumentTypes":null,"id":523,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":521,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":490,"src":"460:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":522,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":497,"src":"469:7:5","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"460:16:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":524,"nodeType":"ExpressionStatement","src":"460:16:5"},{"expression":{"argumentTypes":null,"id":530,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":525,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"487:8:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":528,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":526,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1313,"src":"496:3:5","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":527,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"496:10:5","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"487:20:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":529,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":503,"src":"510:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"487:37:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":531,"nodeType":"ExpressionStatement","src":"487:37:5"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"307830","id":533,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"549:3:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0x0"},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":534,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1313,"src":"554:3:5","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":535,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"554:10:5","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":536,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":503,"src":"566:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":532,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":169,"src":"540:8:5","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":537,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"540:41:5","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":538,"nodeType":"EmitStatement","src":"535:46:5"}]},"documentation":null,"id":540,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":500,"nodeType":"ParameterList","parameters":[{"constant":false,"id":495,"name":"_name","nodeType":"VariableDeclaration","scope":540,"src":"247:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":494,"name":"string","nodeType":"ElementaryTypeName","src":"247:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":497,"name":"_symbol","nodeType":"VariableDeclaration","scope":540,"src":"261:14:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":496,"name":"string","nodeType":"ElementaryTypeName","src":"261:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":499,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":540,"src":"277:22:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":498,"name":"uint256","nodeType":"ElementaryTypeName","src":"277:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"246:54:5"},"payable":false,"returnParameters":{"id":501,"nodeType":"ParameterList","parameters":[],"src":"308:0:5"},"scope":541,"src":"235:354:5","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":542,"src":"94:498:5"}],"src":"0:592:5"},"legacyAST":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","exportedSymbols":{"BasicERC20":[541]},"id":542,"nodeType":"SourceUnit","nodes":[{"id":480,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:5"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/BasicToken.sol","file":"../BasicToken.sol","id":481,"nodeType":"ImportDirective","scope":542,"sourceUnit":96,"src":"27:27:5","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/Ownable.sol","file":"../../utils/Ownable.sol","id":482,"nodeType":"ImportDirective","scope":542,"sourceUnit":1205,"src":"57:33:5","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":483,"name":"BasicToken","nodeType":"UserDefinedTypeName","referencedDeclaration":95,"src":"117:10:5","typeDescriptions":{"typeIdentifier":"t_contract$_BasicToken_$95","typeString":"contract BasicToken"}},"id":484,"nodeType":"InheritanceSpecifier","src":"117:10:5"},{"arguments":null,"baseName":{"contractScope":null,"id":485,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":1204,"src":"129:7:5","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$1204","typeString":"contract Ownable"}},"id":486,"nodeType":"InheritanceSpecifier","src":"129:7:5"}],"contractDependencies":[95,170,1204],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":541,"linearizedBaseContracts":[541,1204,95,170],"name":"BasicERC20","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":488,"name":"name","nodeType":"VariableDeclaration","scope":541,"src":"146:18:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":487,"name":"string","nodeType":"ElementaryTypeName","src":"146:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":490,"name":"symbol","nodeType":"VariableDeclaration","scope":541,"src":"171:20:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":489,"name":"string","nodeType":"ElementaryTypeName","src":"171:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":493,"name":"decimals","nodeType":"VariableDeclaration","scope":541,"src":"198:28:5","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":491,"name":"uint256","nodeType":"ElementaryTypeName","src":"198:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"3138","id":492,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"224:2:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_18_by_1","typeString":"int_const 18"},"value":"18"},"visibility":"public"},{"body":{"id":539,"nodeType":"Block","src":"308:281:5","statements":[{"assignments":[503],"declarations":[{"constant":false,"id":503,"name":"INITIAL_SUPPLY","nodeType":"VariableDeclaration","scope":540,"src":"319:22:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":502,"name":"uint256","nodeType":"ElementaryTypeName","src":"319:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":512,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":511,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":504,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":499,"src":"344:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":509,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"hexValue":"3130","id":505,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"362:2:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10_by_1","typeString":"int_const 10"},"value":"10"},"nodeType":"BinaryOperation","operator":"**","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":507,"name":"decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":493,"src":"376:8:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":506,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"368:7:5","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":508,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"368:17:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"362:23:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":510,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"361:25:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"344:42:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"319:67:5"},{"expression":{"argumentTypes":null,"id":515,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":513,"name":"totalSupply_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"397:12:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":514,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":503,"src":"412:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"397:29:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":516,"nodeType":"ExpressionStatement","src":"397:29:5"},{"expression":{"argumentTypes":null,"id":519,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":517,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":488,"src":"437:4:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":518,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":495,"src":"444:5:5","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"437:12:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":520,"nodeType":"ExpressionStatement","src":"437:12:5"},{"expression":{"argumentTypes":null,"id":523,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":521,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":490,"src":"460:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":522,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":497,"src":"469:7:5","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"460:16:5","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":524,"nodeType":"ExpressionStatement","src":"460:16:5"},{"expression":{"argumentTypes":null,"id":530,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":525,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"487:8:5","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":528,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":526,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1313,"src":"496:3:5","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":527,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"496:10:5","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"487:20:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":529,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":503,"src":"510:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"487:37:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":531,"nodeType":"ExpressionStatement","src":"487:37:5"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"307830","id":533,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"549:3:5","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0x0"},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":534,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1313,"src":"554:3:5","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":535,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"554:10:5","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":536,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":503,"src":"566:14:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":532,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":169,"src":"540:8:5","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":537,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"540:41:5","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":538,"nodeType":"EmitStatement","src":"535:46:5"}]},"documentation":null,"id":540,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":500,"nodeType":"ParameterList","parameters":[{"constant":false,"id":495,"name":"_name","nodeType":"VariableDeclaration","scope":540,"src":"247:12:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":494,"name":"string","nodeType":"ElementaryTypeName","src":"247:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":497,"name":"_symbol","nodeType":"VariableDeclaration","scope":540,"src":"261:14:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":496,"name":"string","nodeType":"ElementaryTypeName","src":"261:6:5","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":499,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":540,"src":"277:22:5","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":498,"name":"uint256","nodeType":"ElementaryTypeName","src":"277:7:5","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"246:54:5"},"payable":false,"returnParameters":{"id":501,"nodeType":"ParameterList","parameters":[],"src":"308:0:5"},"scope":541,"src":"235:354:5","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":542,"src":"94:498:5"}],"src":"0:592:5"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{},"schemaVersion":"2.0.1","updatedAt":"2018-08-13T03:05:50.499Z"}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(2);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: ./helpers/erc20/apiBasicERC20.js + 1 modules
var apiBasicERC20 = __webpack_require__(6);

// EXTERNAL MODULE: ./helpers/solver.js
var solver = __webpack_require__(4);

// CONCATENATED MODULE: ./components/erc20/TransferCard.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var TransferCard_TransferCard =
/*#__PURE__*/
function (_Component) {
  _inherits(TransferCard, _Component);

  function TransferCard() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TransferCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TransferCard.__proto__ || Object.getPrototypeOf(TransferCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        disabled: _this.props.disabled,
        transfer: {
          'to': _this.props.value,
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          }
        },
        dimmerActive: false,
        loading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, network, transfer, transferValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, network = _this$state.network, transfer = _this$state.transfer;

                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 8;
                        break;
                      }

                      transfer.response.message = network.message;
                      transfer.response.ok = false;

                      _this.setState({
                        transfer: transfer
                      });

                      _context.next = 17;
                      break;

                    case 8:
                      if (!(transfer.to != "" && transfer.value > 0)) {
                        _context.next = 17;
                        break;
                      }

                      transfer.response.message = '';

                      _this.setState({
                        transfer: transfer,
                        dimmerActive: true
                      });

                      _context.next = 13;
                      return apiBasicERC20["a" /* default */].transfer(tokenAddress, transfer.to, transfer.value);

                    case 13:
                      transferValue = _context.sent;
                      transfer.response.ok = !transferValue.error;
                      transfer.response.message = transferValue.message;

                      _this.setState({
                        dimmerActive: false,
                        transfer: transfer
                      });

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  _createClass(TransferCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network,
        value: nextProps.value,
        disabled: nextProps.disabled
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(), this.renderRibbon());
    }
  }, {
    key: "renderResponse",
    value: function renderResponse() {
      var _state = this.state,
          transfer = _state.transfer,
          network = _state.network;

      if (!transfer.response.ok && transfer.response.message != '') {
        transfer.response.message = transfer.response.message.length > 80 ? transfer.response.message.slice(0, 80) : transfer.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, transfer.response.message);
      } else if (transfer.response.ok) {
        var url = parseInt(network.networkId) == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + transfer.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, transfer.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon() {
      var dimmerActive = this.state.dimmerActive;
      var showHide = dimmerActive ? "hide" : "show";
      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
    /* Forms */

  }, {
    key: "renderTransferForm",
    value: function renderTransferForm() {
      var _this2 = this;

      var _state2 = this.state,
          summary = _state2.summary,
          transfer = _state2.transfer,
          disabled = _state2.disabled;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transfer.to = event.target.value;

          _this2.setState({
            transfer: transfer
          });
        },
        placeholder: "0x... address of beneficiary",
        value: transfer.to,
        disabled: disabled
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          transfer.value = event.target.value;

          _this2.setState({
            transfer: transfer
          });
        },
        placeholder: "amount to send"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
    /* Principal rendering */

  }, {
    key: "renderTransferCard",
    value: function renderTransferCard() {
      var _state3 = this.state,
          dimmerActive = _state3.dimmerActive,
          transfer = _state3.transfer;
      var metaClass = !transfer.response.ok && transfer.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Transfer "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderTransferForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta()), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: dimmerActive
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }, {
    key: "render",
    value: function render() {
      var _state4 = this.state,
          dimmerActive = _state4.dimmerActive,
          transfer = _state4.transfer;
      var metaClass = !transfer.response.ok && transfer.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Transfer "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderTransferForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta()), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: dimmerActive
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }]);

  return TransferCard;
}(external__react_["Component"]);

/* harmony default export */ var erc20_TransferCard = (TransferCard_TransferCard);
// CONCATENATED MODULE: ./components/erc20/BalanceCard.js


function BalanceCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BalanceCard__typeof = function _typeof(obj) { return typeof obj; }; } else { BalanceCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BalanceCard__typeof(obj); }

function BalanceCard__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function BalanceCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BalanceCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BalanceCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) BalanceCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) BalanceCard__defineProperties(Constructor, staticProps); return Constructor; }

function BalanceCard__possibleConstructorReturn(self, call) { if (call && (BalanceCard__typeof(call) === "object" || typeof call === "function")) { return call; } return BalanceCard__assertThisInitialized(self); }

function BalanceCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function BalanceCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BalanceCard_BalanceCard =
/*#__PURE__*/
function (_Component) {
  BalanceCard__inherits(BalanceCard, _Component);

  function BalanceCard() {
    var _ref;

    var _temp, _this;

    BalanceCard__classCallCheck(this, BalanceCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return BalanceCard__possibleConstructorReturn(_this, (_temp = _this = BalanceCard__possibleConstructorReturn(this, (_ref = BalanceCard.__proto__ || Object.getPrototypeOf(BalanceCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(BalanceCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        balance: {
          'who': '',
          'response': ''
        },
        loading: false
      }
    }), Object.defineProperty(BalanceCard__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = BalanceCard__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, balance;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, balance = _this$state.balance;

                      _this.setState({
                        loading: true
                      });

                      _context.next = 5;
                      return apiBasicERC20["a" /* default */].balanceOf(tokenAddress, balance.who);

                    case 5:
                      balance.response = _context.sent;

                      _this.setState({
                        balance: balance,
                        loading: false
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  BalanceCard__createClass(BalanceCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(request) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(), this.renderRibbon(request));
    }
  }, {
    key: "renderCheckBalancesForm",
    value: function renderCheckBalancesForm() {
      var _this2 = this;

      var _state = this.state,
          requests = _state.requests,
          balance = _state.balance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], {
        onSubmit: this.onSubmit()
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        action: {
          icon: 'search'
        },
        onChange: function onChange(event) {
          balance.who = event.target.value;

          _this2.setState({
            balance: balance
          });
        },
        placeholder: "0x..."
      })));
    }
  }, {
    key: "renderValue",
    value: function renderValue() {
      var _state2 = this.state,
          summary = _state2.summary,
          balance = _state2.balance,
          loading = _state2.loading;

      if (!loading) {
        return external__react__default.a.createElement("p", null, balance.response != "" ? solver["a" /* default */].formatNumber(solver["a" /* default */].convertToEther(balance.response)) + " " + summary.symbol + "s" : "");
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Check balance of address "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderCheckBalancesForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        active: loading,
        inline: "centered"
      }), this.renderValue()));
    }
  }]);

  return BalanceCard;
}(external__react_["Component"]);

/* harmony default export */ var erc20_BalanceCard = (BalanceCard_BalanceCard);
// CONCATENATED MODULE: ./components/erc20/BasicToken.js
function BasicToken__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BasicToken__typeof = function _typeof(obj) { return typeof obj; }; } else { BasicToken__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BasicToken__typeof(obj); }

function BasicToken__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BasicToken__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BasicToken__createClass(Constructor, protoProps, staticProps) { if (protoProps) BasicToken__defineProperties(Constructor.prototype, protoProps); if (staticProps) BasicToken__defineProperties(Constructor, staticProps); return Constructor; }

function BasicToken__possibleConstructorReturn(self, call) { if (call && (BasicToken__typeof(call) === "object" || typeof call === "function")) { return call; } return BasicToken__assertThisInitialized(self); }

function BasicToken__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function BasicToken__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BasicToken_BasicToken =
/*#__PURE__*/
function (_Component) {
  BasicToken__inherits(BasicToken, _Component);

  function BasicToken() {
    var _ref;

    var _temp, _this;

    BasicToken__classCallCheck(this, BasicToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return BasicToken__possibleConstructorReturn(_this, (_temp = _this = BasicToken__possibleConstructorReturn(this, (_ref = BasicToken.__proto__ || Object.getPrototypeOf(BasicToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(BasicToken__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        requests: {
          'balanceOf': 1,
          'transfer': 2
        },
        balance: {
          'who': '',
          'response': ''
        },
        transfer: {
          'to': '',
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          }
        },
        dimmerActive: false,
        loading: false
      }
    }), _temp));
  }

  BasicToken__createClass(BasicToken, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          tokenAddress = _state.tokenAddress,
          summary = _state.summary,
          network = _state.network;

      if (typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {
        return external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards",
          id: "basicTokenCards"
        }, external__react__default.a.createElement(erc20_BalanceCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network
        }), external__react__default.a.createElement(erc20_TransferCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network,
          value: '',
          disabled: false
        })))));
      }

      return null;
    }
  }]);

  return BasicToken;
}(external__react_["Component"]);

/* harmony default export */ var erc20_BasicToken = (BasicToken_BasicToken);
// EXTERNAL MODULE: ./ethereum/api/web3.js
var api_web3 = __webpack_require__(3);

// EXTERNAL MODULE: ./helpers/web3TxHandler.js
var web3TxHandler = __webpack_require__(7);

// EXTERNAL MODULE: ./ethereum/build/contracts/StandardERC20.json
var StandardERC20 = __webpack_require__(23);
var StandardERC20_default = /*#__PURE__*/__webpack_require__.n(StandardERC20);

// CONCATENATED MODULE: ./ethereum/api/erc20/standardERC20.js

function standardTokenAt(tokenAddress, web3) {
  return new web3.eth.Contract(StandardERC20_default.a.abi, tokenAddress);
}
// CONCATENATED MODULE: ./helpers/erc20/apiStandardERC20.js


function apiStandardERC20__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





/*Methods for StandardToken */

function apiStandardERC20_allowance(_x, _x2, _x3) {
  return _allowance.apply(this, arguments);
}

function _allowance() {
  _allowance = apiStandardERC20__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(tokenAddress, owner, spender) {
    var token, allowance;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = standardTokenAt(tokenAddress, api_web3["a" /* default */]);
            _context.next = 3;
            return token.methods.allowance(owner, spender).call();

          case 3:
            allowance = _context.sent;
            return _context.abrupt("return", allowance);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _allowance.apply(this, arguments);
}

function apiStandardERC20_approve(_x4, _x5, _x6) {
  return _approve.apply(this, arguments);
}

function _approve() {
  _approve = apiStandardERC20__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee2(tokenAddress, spender, value) {
    var token, method, response;
    return regenerator__default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            value = solver["a" /* default */].convertToWei(value);
            token = standardTokenAt(tokenAddress, api_web3["a" /* default */]);
            method = token.methods.approve(spender, value);
            _context2.next = 5;
            return Object(web3TxHandler["a" /* default */])(method);

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _approve.apply(this, arguments);
}

function apiStandardERC20_increaseApproval(_x7, _x8, _x9) {
  return _increaseApproval.apply(this, arguments);
}

function _increaseApproval() {
  _increaseApproval = apiStandardERC20__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee3(tokenAddress, spender, addedValue) {
    var token, method, response;
    return regenerator__default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            addedValue = solver["a" /* default */].convertToWei(addedValue);
            token = standardTokenAt(tokenAddress, api_web3["a" /* default */]);
            method = token.methods.increaseApproval(spender, addedValue);
            _context3.next = 5;
            return Object(web3TxHandler["a" /* default */])(method);

          case 5:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _increaseApproval.apply(this, arguments);
}

function apiStandardERC20_decreaseApproval(_x10, _x11, _x12) {
  return _decreaseApproval.apply(this, arguments);
}

function _decreaseApproval() {
  _decreaseApproval = apiStandardERC20__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee4(tokenAddress, spender, subtractedValue) {
    var token, method, response;
    return regenerator__default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            subtractedValue = solver["a" /* default */].convertToWei(subtractedValue);
            token = standardTokenAt(tokenAddress, api_web3["a" /* default */]);
            method = token.methods.decreaseApproval(spender, subtractedValue);
            _context4.next = 5;
            return Object(web3TxHandler["a" /* default */])(method);

          case 5:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _decreaseApproval.apply(this, arguments);
}

function apiStandardERC20_transferFrom(_x13, _x14, _x15, _x16) {
  return _transferFrom.apply(this, arguments);
}

function _transferFrom() {
  _transferFrom = apiStandardERC20__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee5(tokenAddress, from, to, value) {
    var token, method, response;
    return regenerator__default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            value = solver["a" /* default */].convertToWei(value);
            token = standardTokenAt(tokenAddress, api_web3["a" /* default */]);
            method = token.methods.transferFrom(from, to, value);
            _context5.next = 5;
            return Object(web3TxHandler["a" /* default */])(method);

          case 5:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _transferFrom.apply(this, arguments);
}

/* harmony default export */ var apiStandardERC20 = ({
  allowance: apiStandardERC20_allowance,
  approve: apiStandardERC20_approve,
  increaseApproval: apiStandardERC20_increaseApproval,
  decreaseApproval: apiStandardERC20_decreaseApproval,
  transferFrom: apiStandardERC20_transferFrom
});
// CONCATENATED MODULE: ./components/erc20/AllowanceCard.js


function AllowanceCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AllowanceCard__typeof = function _typeof(obj) { return typeof obj; }; } else { AllowanceCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AllowanceCard__typeof(obj); }

function AllowanceCard__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function AllowanceCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AllowanceCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AllowanceCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) AllowanceCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) AllowanceCard__defineProperties(Constructor, staticProps); return Constructor; }

function AllowanceCard__possibleConstructorReturn(self, call) { if (call && (AllowanceCard__typeof(call) === "object" || typeof call === "function")) { return call; } return AllowanceCard__assertThisInitialized(self); }

function AllowanceCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AllowanceCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var AllowanceCard_AllowanceCard =
/*#__PURE__*/
function (_Component) {
  AllowanceCard__inherits(AllowanceCard, _Component);

  function AllowanceCard() {
    var _ref;

    var _temp, _this;

    AllowanceCard__classCallCheck(this, AllowanceCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return AllowanceCard__possibleConstructorReturn(_this, (_temp = _this = AllowanceCard__possibleConstructorReturn(this, (_ref = AllowanceCard.__proto__ || Object.getPrototypeOf(AllowanceCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(AllowanceCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        allowance: {
          'spender': '',
          'owner': '',
          'response': '',
          'loading': false
        }
      }
    }), Object.defineProperty(AllowanceCard__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = AllowanceCard__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, allowance;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, allowance = _this$state.allowance;
                      allowance.loading = true;

                      _this.setState({
                        allowance: allowance
                      });

                      _context.next = 6;
                      return apiStandardERC20.allowance(tokenAddress, allowance.owner, allowance.spender);

                    case 6:
                      allowance.response = _context.sent;
                      allowance.loading = false;

                      _this.setState({
                        allowance: allowance
                      });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  AllowanceCard__createClass(AllowanceCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderAllowanceForm",

    /* Forms */
    value: function renderAllowanceForm() {
      var _this2 = this;

      var allowance = this.state.allowance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], {
        onSubmit: this.onSubmit()
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          allowance.owner = event.target.value;

          _this2.setState({
            allowance: allowance
          });
        },
        placeholder: "0x... address of owner"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        action: {
          icon: 'search'
        },
        onChange: function onChange(event) {
          allowance.spender = event.target.value;

          _this2.setState({
            allowance: allowance
          });
        },
        placeholder: "0x... address of spender"
      })));
    }
  }, {
    key: "renderValue",
    value: function renderValue() {
      var _state = this.state,
          summary = _state.summary,
          allowance = _state.allowance;

      if (!allowance.loading) {
        return external__react__default.a.createElement("p", null, allowance.response != "" ? solver["a" /* default */].formatNumber(solver["a" /* default */].convertToEther(allowance.response)) + " " + summary.symbol + "s" : "");
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var allowance = this.state.allowance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Check allowance "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderAllowanceForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        active: allowance.loading,
        inline: "centered"
      }), this.renderValue()));
    }
  }]);

  return AllowanceCard;
}(external__react_["Component"]);

/* harmony default export */ var erc20_AllowanceCard = (AllowanceCard_AllowanceCard);
// CONCATENATED MODULE: ./components/erc20/ApproveCard.js


function ApproveCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ApproveCard__typeof = function _typeof(obj) { return typeof obj; }; } else { ApproveCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ApproveCard__typeof(obj); }

function ApproveCard__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function ApproveCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ApproveCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ApproveCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) ApproveCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) ApproveCard__defineProperties(Constructor, staticProps); return Constructor; }

function ApproveCard__possibleConstructorReturn(self, call) { if (call && (ApproveCard__typeof(call) === "object" || typeof call === "function")) { return call; } return ApproveCard__assertThisInitialized(self); }

function ApproveCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ApproveCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ApproveCard_ApproveCard =
/*#__PURE__*/
function (_Component) {
  ApproveCard__inherits(ApproveCard, _Component);

  function ApproveCard() {
    var _ref;

    var _temp, _this;

    ApproveCard__classCallCheck(this, ApproveCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ApproveCard__possibleConstructorReturn(_this, (_temp = _this = ApproveCard__possibleConstructorReturn(this, (_ref = ApproveCard.__proto__ || Object.getPrototypeOf(ApproveCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ApproveCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        approve: {
          'spender': '',
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        }
      }
    }), Object.defineProperty(ApproveCard__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = ApproveCard__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, approve, network, approveValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, approve = _this$state.approve, network = _this$state.network;

                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 8;
                        break;
                      }

                      approve.response.message = network.message;
                      approve.response.ok = false;

                      _this.setState({
                        approve: approve
                      });

                      _context.next = 19;
                      break;

                    case 8:
                      if (!(approve.spender != "" && approve.value > 0)) {
                        _context.next = 19;
                        break;
                      }

                      approve.response.message = '';
                      approve.dimmer = true;

                      _this.setState({
                        approve: approve
                      });

                      _context.next = 14;
                      return apiStandardERC20.approve(tokenAddress, approve.spender, approve.value);

                    case 14:
                      approveValue = _context.sent;
                      approve.response.ok = !approveValue.error;
                      approve.response.message = approveValue.message;
                      approve.dimmer = false;

                      _this.setState({
                        approve: approve
                      });

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  ApproveCard__createClass(ApproveCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(method) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(method), this.renderRibbon());
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon() {
      var approve = this.state.approve;
      var showHide = approve.dimmer ? "hide" : "show";
      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
  }, {
    key: "renderResponse",
    value: function renderResponse(method) {
      var network = this.state.network;

      if (!method.response.ok && method.response.message != '') {
        method.response.message = method.response.message.length > 80 ? method.response.message.slice(0, 80) : method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, method.response.message);
      } else if (method.response.ok) {
        var url = parseInt(network.networkId) == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, method.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
    /* Forms */

  }, {
    key: "renderApproveForm",
    value: function renderApproveForm() {
      var _this2 = this;

      var _state = this.state,
          summary = _state.summary,
          approve = _state.approve;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          approve.spender = event.target.value;

          _this2.setState({
            approve: approve
          });
        },
        placeholder: "0x... address of spender"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          approve.value = event.target.value;

          _this2.setState({
            approve: approve
          });
        },
        placeholder: "amount to approve"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "render",
    value: function render() {
      var approve = this.state.approve;
      var metaClass = !approve.response.ok && approve.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Approve "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderApproveForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(approve)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: approve.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }]);

  return ApproveCard;
}(external__react_["Component"]);

/* harmony default export */ var erc20_ApproveCard = (ApproveCard_ApproveCard);
// CONCATENATED MODULE: ./components/erc20/IncreaseApprovalCard.js


function IncreaseApprovalCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { IncreaseApprovalCard__typeof = function _typeof(obj) { return typeof obj; }; } else { IncreaseApprovalCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return IncreaseApprovalCard__typeof(obj); }

function IncreaseApprovalCard__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function IncreaseApprovalCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IncreaseApprovalCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function IncreaseApprovalCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) IncreaseApprovalCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) IncreaseApprovalCard__defineProperties(Constructor, staticProps); return Constructor; }

function IncreaseApprovalCard__possibleConstructorReturn(self, call) { if (call && (IncreaseApprovalCard__typeof(call) === "object" || typeof call === "function")) { return call; } return IncreaseApprovalCard__assertThisInitialized(self); }

function IncreaseApprovalCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function IncreaseApprovalCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var IncreaseApprovalCard_IncreaseApproval =
/*#__PURE__*/
function (_Component) {
  IncreaseApprovalCard__inherits(IncreaseApproval, _Component);

  function IncreaseApproval() {
    var _ref;

    var _temp, _this;

    IncreaseApprovalCard__classCallCheck(this, IncreaseApproval);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return IncreaseApprovalCard__possibleConstructorReturn(_this, (_temp = _this = IncreaseApprovalCard__possibleConstructorReturn(this, (_ref = IncreaseApproval.__proto__ || Object.getPrototypeOf(IncreaseApproval)).call.apply(_ref, [this].concat(args))), Object.defineProperty(IncreaseApprovalCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        increaseApproval: {
          'spender': '',
          'addedValue': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        }
      }
    }), Object.defineProperty(IncreaseApprovalCard__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = IncreaseApprovalCard__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, network, increaseApproval, increaseApprovalValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, network = _this$state.network, increaseApproval = _this$state.increaseApproval;

                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 8;
                        break;
                      }

                      increaseApproval.response.message = network.message;
                      increaseApproval.response.ok = false;

                      _this.setState({
                        increaseApproval: increaseApproval
                      });

                      _context.next = 19;
                      break;

                    case 8:
                      if (!(increaseApproval.spender != "" && increaseApproval.addedValue > 0)) {
                        _context.next = 19;
                        break;
                      }

                      increaseApproval.response.message = '';
                      increaseApproval.dimmer = true;

                      _this.setState({
                        increaseApproval: increaseApproval
                      });

                      _context.next = 14;
                      return apiStandardERC20.increaseApproval(tokenAddress, increaseApproval.spender, increaseApproval.addedValue);

                    case 14:
                      increaseApprovalValue = _context.sent;
                      increaseApproval.response.ok = !increaseApprovalValue.error;
                      increaseApproval.response.message = increaseApprovalValue.message;
                      increaseApproval.dimmer = false;

                      _this.setState({
                        increaseApproval: increaseApproval
                      });

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  IncreaseApprovalCard__createClass(IncreaseApproval, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(method) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(method), this.renderRibbon());
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon() {
      var increaseApproval = this.state.increaseApproval;
      var showHide = increaseApproval.dimmer ? "hide" : "show";
      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
  }, {
    key: "renderResponse",
    value: function renderResponse(method) {
      var network = this.state.network;

      if (!method.response.ok && method.response.message != '') {
        method.response.message = method.response.message.length > 80 ? method.response.message.slice(0, 80) : method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, method.response.message);
      } else if (method.response.ok) {
        var url = parseInt(network.networkId) == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, method.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
    /* Forms */

  }, {
    key: "renderIncreaseApprovalForm",
    value: function renderIncreaseApprovalForm() {
      var _this2 = this;

      var _state = this.state,
          summary = _state.summary,
          increaseApproval = _state.increaseApproval;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          increaseApproval.spender = event.target.value;

          _this2.setState({
            increaseApproval: increaseApproval
          });
        },
        placeholder: "0x... address of spender"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          increaseApproval.addedValue = event.target.value;

          _this2.setState({
            increaseApproval: increaseApproval
          });
        },
        placeholder: "amount to increase"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "render",
    value: function render() {
      var increaseApproval = this.state.increaseApproval;
      var metaClass = !increaseApproval.response.ok && increaseApproval.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Increase approval "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderIncreaseApprovalForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(increaseApproval)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: increaseApproval.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }]);

  return IncreaseApproval;
}(external__react_["Component"]);

/* harmony default export */ var IncreaseApprovalCard = (IncreaseApprovalCard_IncreaseApproval);
// CONCATENATED MODULE: ./components/erc20/DecreaseApprovalCard.js


function DecreaseApprovalCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DecreaseApprovalCard__typeof = function _typeof(obj) { return typeof obj; }; } else { DecreaseApprovalCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DecreaseApprovalCard__typeof(obj); }

function DecreaseApprovalCard__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function DecreaseApprovalCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DecreaseApprovalCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DecreaseApprovalCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) DecreaseApprovalCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) DecreaseApprovalCard__defineProperties(Constructor, staticProps); return Constructor; }

function DecreaseApprovalCard__possibleConstructorReturn(self, call) { if (call && (DecreaseApprovalCard__typeof(call) === "object" || typeof call === "function")) { return call; } return DecreaseApprovalCard__assertThisInitialized(self); }

function DecreaseApprovalCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DecreaseApprovalCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var DecreaseApprovalCard_DecreaseApprovalCard =
/*#__PURE__*/
function (_Component) {
  DecreaseApprovalCard__inherits(DecreaseApprovalCard, _Component);

  function DecreaseApprovalCard() {
    var _ref;

    var _temp, _this;

    DecreaseApprovalCard__classCallCheck(this, DecreaseApprovalCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return DecreaseApprovalCard__possibleConstructorReturn(_this, (_temp = _this = DecreaseApprovalCard__possibleConstructorReturn(this, (_ref = DecreaseApprovalCard.__proto__ || Object.getPrototypeOf(DecreaseApprovalCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(DecreaseApprovalCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        decreaseApproval: {
          'spender': '',
          'subtractedValue': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        }
      }
    }), Object.defineProperty(DecreaseApprovalCard__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = DecreaseApprovalCard__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, network, decreaseApproval, decreaseApprovalValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, network = _this$state.network, decreaseApproval = _this$state.decreaseApproval;

                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 8;
                        break;
                      }

                      decreaseApproval.response.message = network.message;
                      decreaseApproval.response.ok = false;

                      _this.setState({
                        decreaseApproval: decreaseApproval
                      });

                      _context.next = 19;
                      break;

                    case 8:
                      if (!(decreaseApproval.spender != "" && decreaseApproval.subtractedValue > 0)) {
                        _context.next = 19;
                        break;
                      }

                      decreaseApproval.response.message = '';
                      decreaseApproval.dimmer = true;

                      _this.setState({
                        decreaseApproval: decreaseApproval
                      });

                      _context.next = 14;
                      return apiStandardERC20.decreaseApproval(tokenAddress, decreaseApproval.spender, decreaseApproval.subtractedValue);

                    case 14:
                      decreaseApprovalValue = _context.sent;
                      decreaseApproval.response.ok = !decreaseApprovalValue.error;
                      decreaseApproval.response.message = decreaseApprovalValue.message;
                      decreaseApproval.dimmer = false;

                      _this.setState({
                        decreaseApproval: decreaseApproval
                      });

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  DecreaseApprovalCard__createClass(DecreaseApprovalCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(method) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(method), this.renderRibbon());
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon() {
      var decreaseApproval = this.state.decreaseApproval;
      var showHide = decreaseApproval.dimmer ? "hide" : "show";
      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
  }, {
    key: "renderResponse",
    value: function renderResponse(method) {
      var network = this.state.network;

      if (!method.response.ok && method.response.message != '') {
        method.response.message = method.response.message.length > 80 ? method.response.message.slice(0, 80) : method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, method.response.message);
      } else if (method.response.ok) {
        var url = parseInt(network.networkId) == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, method.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
    /* Forms */

  }, {
    key: "renderDecreaseApprovalForm",
    value: function renderDecreaseApprovalForm() {
      var _this2 = this;

      var _state = this.state,
          summary = _state.summary,
          decreaseApproval = _state.decreaseApproval;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          decreaseApproval.spender = event.target.value;

          _this2.setState({
            decreaseApproval: decreaseApproval
          });
        },
        placeholder: "0x... address of spender"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          decreaseApproval.subtractedValue = event.target.value;

          _this2.setState({
            decreaseApproval: decreaseApproval
          });
        },
        placeholder: "amount to decrease"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "render",
    value: function render() {
      var decreaseApproval = this.state.decreaseApproval;
      var metaClass = !decreaseApproval.response.ok && decreaseApproval.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Decrease approval "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderDecreaseApprovalForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(decreaseApproval)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: decreaseApproval.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }]);

  return DecreaseApprovalCard;
}(external__react_["Component"]);

/* harmony default export */ var erc20_DecreaseApprovalCard = (DecreaseApprovalCard_DecreaseApprovalCard);
// CONCATENATED MODULE: ./components/erc20/TransferFromCard.js


function TransferFromCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TransferFromCard__typeof = function _typeof(obj) { return typeof obj; }; } else { TransferFromCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TransferFromCard__typeof(obj); }

function TransferFromCard__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function TransferFromCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TransferFromCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TransferFromCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) TransferFromCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) TransferFromCard__defineProperties(Constructor, staticProps); return Constructor; }

function TransferFromCard__possibleConstructorReturn(self, call) { if (call && (TransferFromCard__typeof(call) === "object" || typeof call === "function")) { return call; } return TransferFromCard__assertThisInitialized(self); }

function TransferFromCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TransferFromCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var TransferFromCard_TransferFromCard =
/*#__PURE__*/
function (_Component) {
  TransferFromCard__inherits(TransferFromCard, _Component);

  function TransferFromCard() {
    var _ref;

    var _temp, _this;

    TransferFromCard__classCallCheck(this, TransferFromCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return TransferFromCard__possibleConstructorReturn(_this, (_temp = _this = TransferFromCard__possibleConstructorReturn(this, (_ref = TransferFromCard.__proto__ || Object.getPrototypeOf(TransferFromCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(TransferFromCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        transferFrom: {
          'from': '',
          'to': '',
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        }
      }
    }), Object.defineProperty(TransferFromCard__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = TransferFromCard__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, tokenAddress, network, transferFrom, transferFromlValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, tokenAddress = _this$state.tokenAddress, network = _this$state.network, transferFrom = _this$state.transferFrom;

                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 8;
                        break;
                      }

                      transferFrom.response.message = network.message;
                      transferFrom.response.ok = false;

                      _this.setState({
                        transferFrom: transferFrom
                      });

                      _context.next = 19;
                      break;

                    case 8:
                      if (!(transferFrom.from != "" && transferFrom.to != "" && transferFrom.value > 0)) {
                        _context.next = 19;
                        break;
                      }

                      transferFrom.response.message = '';
                      transferFrom.dimmer = true;

                      _this.setState({
                        transferFrom: transferFrom
                      });

                      _context.next = 14;
                      return apiStandardERC20.transferFrom(tokenAddress, transferFrom.from, transferFrom.to, transferFrom.value);

                    case 14:
                      transferFromlValue = _context.sent;
                      transferFrom.response.ok = !transferFromlValue.error;
                      transferFrom.response.message = transferFromlValue.message;
                      transferFrom.dimmer = false;

                      _this.setState({
                        transferFrom: transferFrom
                      });

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  TransferFromCard__createClass(TransferFromCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(method) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(method), this.renderRibbon());
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon() {
      var transferFrom = this.state.transferFrom;
      var showHide = transferFrom.dimmer ? "hide" : "show";
      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
  }, {
    key: "renderResponse",
    value: function renderResponse(method) {
      var network = this.state.network;

      if (!method.response.ok && method.response.message != '') {
        method.response.message = method.response.message.length > 80 ? method.response.message.slice(0, 80) : method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, method.response.message);
      } else if (method.response.ok) {
        var url = parseInt(network.networkId) == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, method.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
    /* Forms */

  }, {
    key: "renderTransferFromForm",
    value: function renderTransferFromForm() {
      var _this2 = this;

      var _state = this.state,
          summary = _state.summary,
          transferFrom = _state.transferFrom;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transferFrom.from = event.target.value;

          _this2.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "0x... address of owner"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transferFrom.to = event.target.value;

          _this2.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "0x... addressee"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          transferFrom.value = event.target.value;

          _this2.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "amount to transfer"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "render",
    value: function render() {
      var transferFrom = this.state.transferFrom;
      var metaClass = !transferFrom.response.ok && transferFrom.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Transfer from "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderTransferFromForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(transferFrom)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: transferFrom.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }]);

  return TransferFromCard;
}(external__react_["Component"]);

/* harmony default export */ var erc20_TransferFromCard = (TransferFromCard_TransferFromCard);
// CONCATENATED MODULE: ./components/erc20/StandardToken.js
function StandardToken__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StandardToken__typeof = function _typeof(obj) { return typeof obj; }; } else { StandardToken__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StandardToken__typeof(obj); }

function StandardToken__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StandardToken__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StandardToken__createClass(Constructor, protoProps, staticProps) { if (protoProps) StandardToken__defineProperties(Constructor.prototype, protoProps); if (staticProps) StandardToken__defineProperties(Constructor, staticProps); return Constructor; }

function StandardToken__possibleConstructorReturn(self, call) { if (call && (StandardToken__typeof(call) === "object" || typeof call === "function")) { return call; } return StandardToken__assertThisInitialized(self); }

function StandardToken__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function StandardToken__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var StandardToken_StandardToken =
/*#__PURE__*/
function (_Component) {
  StandardToken__inherits(StandardToken, _Component);

  function StandardToken() {
    var _ref;

    var _temp, _this;

    StandardToken__classCallCheck(this, StandardToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return StandardToken__possibleConstructorReturn(_this, (_temp = _this = StandardToken__possibleConstructorReturn(this, (_ref = StandardToken.__proto__ || Object.getPrototypeOf(StandardToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(StandardToken__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network
      }
    }), _temp));
  }

  StandardToken__createClass(StandardToken, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          tokenAddress = _state.tokenAddress,
          summary = _state.summary,
          network = _state.network;

      if (typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {
        return external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards"
        }, external__react__default.a.createElement(erc20_AllowanceCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network
        }), external__react__default.a.createElement(erc20_ApproveCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network
        })))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards"
        }, external__react__default.a.createElement(IncreaseApprovalCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network
        }), external__react__default.a.createElement(erc20_DecreaseApprovalCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network
        })))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards"
        }, external__react__default.a.createElement(erc20_TransferFromCard, {
          tokenAddress: tokenAddress,
          summary: summary,
          network: network
        })))));
      }

      return null;
    }
  }]);

  return StandardToken;
}(external__react_["Component"]);

/* harmony default export */ var erc20_StandardToken = (StandardToken_StandardToken);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(5);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./pages/token/view.js


function view__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { view__typeof = function _typeof(obj) { return typeof obj; }; } else { view__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return view__typeof(obj); }

function view__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function view__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view__createClass(Constructor, protoProps, staticProps) { if (protoProps) view__defineProperties(Constructor.prototype, protoProps); if (staticProps) view__defineProperties(Constructor, staticProps); return Constructor; }

function view__possibleConstructorReturn(self, call) { if (call && (view__typeof(call) === "object" || typeof call === "function")) { return call; } return view__assertThisInitialized(self); }

function view__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function view__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var view_ViewToken =
/*#__PURE__*/
function (_Component) {
  view__inherits(ViewToken, _Component);

  function ViewToken() {
    var _ref;

    var _temp, _this;

    view__classCallCheck(this, ViewToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return view__possibleConstructorReturn(_this, (_temp = _this = view__possibleConstructorReturn(this, (_ref = ViewToken.__proto__ || Object.getPrototypeOf(ViewToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(view__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.url.query.tokenAddress,
        contractError: false,
        summary: {},
        web3: {},
        dimmerActive: true,
        network: {}
      }
    }), Object.defineProperty(view__assertThisInitialized(_this), "networkCallback", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = view__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(network) {
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.setValues(network.network);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(view__assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        routes["Router"].pushRoute("/");
      }
    }), _temp));
  }

  view__createClass(ViewToken, [{
    key: "setValues",
    value: function () {
      var _setValues = view__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(network) {
        var tokenAddress, summary, dimmerActive, contractError;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tokenAddress = this.props.url.query.tokenAddress;
                _context2.next = 3;
                return apiBasicERC20["a" /* default */].getSummary(tokenAddress, network.networkId);

              case 3:
                summary = _context2.sent;
                dimmerActive = typeof summary.name == 'undefined';
                contractError = dimmerActive;
                this.setState({
                  summary: summary,
                  dimmerActive: dimmerActive,
                  contractError: contractError,
                  network: network
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function setValues(_x2) {
        return _setValues.apply(this, arguments);
      };
    }()
  }, {
    key: "renderDimmer",
    value: function renderDimmer() {
      var dimmerActive = this.state.dimmerActive;
      return external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        active: dimmerActive
      }, this.renderDimmerContent());
    }
  }, {
    key: "renderDimmerContent",
    value: function renderDimmerContent() {
      var contractError = this.state.contractError;

      if (contractError) {
        return external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
          as: "h2",
          icon: true,
          inverted: true
        }, external__react__default.a.createElement(external__semantic_ui_react_["Icon"], {
          name: "broken chain"
        }), "Contract not found!", external__react__default.a.createElement(external__semantic_ui_react_["Icon"], {
          link: true,
          name: "reply",
          onClick: this.onClick
        }));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
          size: "large"
        }, "Loading");
      }
    }
    /* Principal Rendering */

  }, {
    key: "renderSummaryCard",
    value: function renderSummaryCard() {
      var summary = this.state.summary;

      if (typeof summary.totalSupply != 'undefined') {
        var items = [{
          header: "Name and symbol: " + summary.name + "(" + summary.symbol + ")",
          meta: summary.decimals + " decimals",
          description: "Total supply is " + solver["a" /* default */].formatNumber(solver["a" /* default */].convertToEther(summary.totalSupply)) + " " + summary.symbol + "s",
          extra: 'owner: ' + summary.owner
        }];
        return external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          id: "summaryCard",
          items: items
        });
      }

      return null;
    }
  }, {
    key: "renderBasicToken",
    value: function renderBasicToken() {
      var _state = this.state,
          tokenAddress = _state.tokenAddress,
          summary = _state.summary,
          network = _state.network;
      return external__react__default.a.createElement(erc20_BasicToken, {
        tokenAddress: tokenAddress,
        summary: summary,
        network: network
      });
    }
  }, {
    key: "renderStandardToken",
    value: function renderStandardToken() {
      var _state2 = this.state,
          tokenAddress = _state2.tokenAddress,
          summary = _state2.summary,
          network = _state2.network;
      return external__react__default.a.createElement(erc20_StandardToken, {
        tokenAddress: tokenAddress,
        summary: summary,
        network: network
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], {
        callback: this.networkCallback
      }, this.renderDimmer(), external__react__default.a.createElement("div", null, this.renderSummaryCard(), this.renderBasicToken(), this.renderStandardToken()));
    }
  }]);

  return ViewToken;
}(external__react_["Component"]);

/* harmony default export */ var view = __webpack_exports__["default"] = (view_ViewToken);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {"contractName":"StandardERC20","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],"bytecode":"0x608060405260126005553480156200001657600080fd5b506040516200174d3803806200174d833981018060405281019080805182019291906020018051820192919060200180519060200190929190505050828282600033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600554600a0a82029050806001819055508360039080519060200190620000c19291906200017b565b508260049080519060200190620000da9291906200017b565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050505050506200022a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001be57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ee578251825591602001919060010190620001d1565b5b509050620001fe919062000202565b5090565b6200022791905b808211156200022357600081600090555060010162000209565b5090565b90565b611513806200023a6000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca578063095ea7b31461015a57806318160ddd146101bf57806323b872dd146101ea578063313ce5671461026f578063661884631461029a57806370a08231146102ff5780638da5cb5b1461035657806395d89b41146103ad578063a9059cbb1461043d578063d73dd623146104a2578063dd62ed3e14610507578063f2fde38b1461057e575b600080fd5b3480156100d657600080fd5b506100df6105c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011f578082015181840152602081019050610104565b50505050905090810190601f16801561014c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016657600080fd5b506101a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061065f565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d4610751565b6040518082815260200191505060405180910390f35b3480156101f657600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061075b565b604051808215151515815260200191505060405180910390f35b34801561027b57600080fd5b50610284610b15565b6040518082815260200191505060405180910390f35b3480156102a657600080fd5b506102e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b1b565b604051808215151515815260200191505060405180910390f35b34801561030b57600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dac565b6040518082815260200191505060405180910390f35b34801561036257600080fd5b5061036b610df4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103b957600080fd5b506103c2610e1a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104025780820151818401526020810190506103e7565b50505050905090810190601f16801561042f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561044957600080fd5b50610488600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610eb8565b604051808215151515815260200191505060405180910390f35b3480156104ae57600080fd5b506104ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110d7565b604051808215151515815260200191505060405180910390f35b34801561051357600080fd5b50610568600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112d3565b6040518082815260200191505060405180910390f35b34801561058a57600080fd5b506105bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061135a565b005b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106575780601f1061062c57610100808354040283529160200191610657565b820191906000526020600020905b81548152906001019060200180831161063a57829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561079857600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107e557600080fd5b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561087057600080fd5b6108c1826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b290919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610954826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114cb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a2582600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b290919063ffffffff16565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60055481565b600080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610c2c576000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cc0565b610c3f83826114b290919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eb05780601f10610e8557610100808354040283529160200191610eb0565b820191906000526020600020905b815481529060010190602001808311610e9357829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ef557600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610f4257600080fd5b610f93826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b290919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611026826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114cb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061116882600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114cb90919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113b657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156113f257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156114c057fe5b818303905092915050565b600081830190508281101515156114de57fe5b809050929150505600a165627a7a723058208fbc218c939185133e5e1cea54694e9a424135965ceba85a7ed7705e1e8dd2680029","deployedBytecode":"0x6080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca578063095ea7b31461015a57806318160ddd146101bf57806323b872dd146101ea578063313ce5671461026f578063661884631461029a57806370a08231146102ff5780638da5cb5b1461035657806395d89b41146103ad578063a9059cbb1461043d578063d73dd623146104a2578063dd62ed3e14610507578063f2fde38b1461057e575b600080fd5b3480156100d657600080fd5b506100df6105c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011f578082015181840152602081019050610104565b50505050905090810190601f16801561014c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016657600080fd5b506101a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061065f565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d4610751565b6040518082815260200191505060405180910390f35b3480156101f657600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061075b565b604051808215151515815260200191505060405180910390f35b34801561027b57600080fd5b50610284610b15565b6040518082815260200191505060405180910390f35b3480156102a657600080fd5b506102e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b1b565b604051808215151515815260200191505060405180910390f35b34801561030b57600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dac565b6040518082815260200191505060405180910390f35b34801561036257600080fd5b5061036b610df4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103b957600080fd5b506103c2610e1a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104025780820151818401526020810190506103e7565b50505050905090810190601f16801561042f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561044957600080fd5b50610488600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610eb8565b604051808215151515815260200191505060405180910390f35b3480156104ae57600080fd5b506104ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110d7565b604051808215151515815260200191505060405180910390f35b34801561051357600080fd5b50610568600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112d3565b6040518082815260200191505060405180910390f35b34801561058a57600080fd5b506105bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061135a565b005b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106575780601f1061062c57610100808354040283529160200191610657565b820191906000526020600020905b81548152906001019060200180831161063a57829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561079857600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107e557600080fd5b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561087057600080fd5b6108c1826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b290919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610954826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114cb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a2582600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b290919063ffffffff16565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60055481565b600080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610c2c576000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cc0565b610c3f83826114b290919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eb05780601f10610e8557610100808354040283529160200191610eb0565b820191906000526020600020905b815481529060010190602001808311610e9357829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ef557600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610f4257600080fd5b610f93826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b290919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611026826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114cb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061116882600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114cb90919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113b657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156113f257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156114c057fe5b818303905092915050565b600081830190508281101515156114de57fe5b809050929150505600a165627a7a723058208fbc218c939185133e5e1cea54694e9a424135965ceba85a7ed7705e1e8dd2680029","sourceMap":"91:198:7:-;;;224:2:5;198:28;;152:134:7;8:9:-1;5:2;;;30:1;27;20:12;5:2;152:134:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;229:5;236:7;245:14;319:22:5;539:10:12;531:5;;:18;;;;;;;;;;;;;;;;;;376:8:5;;362:2;:23;344:14;:42;319:67;;412:14;397:12;:29;;;;444:5;437:4;:12;;;;;;;;;;;;:::i;:::-;;469:7;460:6;:16;;;;;;;;;;;;:::i;:::-;;510:14;487:8;:20;496:10;487:20;;;;;;;;;;;;;;;:37;;;;554:10;540:41;;549:3;540:41;566:14;540:41;;;;;;;;;;;;;;;;;;235:354;;;;152:134:7;;;91:198;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"91:198:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;146:18:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;146:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;146:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2257:206:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2257:206:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;404:91:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;404:91:0;;;;;;;;;;;;;;;;;;;;;;;1121:488:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1121:488:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;198:28:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;198:28:5;;;;;;;;;;;;;;;;;;;;;;;4182:450:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4182:450:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1244:107:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1244:107:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;249:20:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;249:20:12;;;;;;;;;;;;;;;;;;;;;;;;;;;171::5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;171:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;171:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;668:355:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;668:355:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3415:280:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3415:280:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2799:134;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2799:134:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;902:192:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;902:192:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;146:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2257:206:4:-;2324:4;2373:6;2341:7;:19;2349:10;2341:19;;;;;;;;;;;;;;;:29;2361:8;2341:29;;;;;;;;;;;;;;;:38;;;;2416:8;2395:38;;2404:10;2395:38;;;2426:6;2395:38;;;;;;;;;;;;;;;;;;2451:4;2444:11;;2257:206;;;;:::o;404:91:0:-;448:7;475:12;;468:19;;404:91;:::o;1121:488:4:-;1203:4;1243:1;1228:17;;:3;:17;;;;1220:26;;;;;;;;1275:8;:15;1284:5;1275:15;;;;;;;;;;;;;;;;1265:6;:25;;1257:34;;;;;;;;1320:7;:14;1328:5;1320:14;;;;;;;;;;;;;;;:26;1335:10;1320:26;;;;;;;;;;;;;;;;1310:6;:36;;1302:45;;;;;;;;1378:27;1398:6;1378:8;:15;1387:5;1378:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;1360:8;:15;1369:5;1360:15;;;;;;;;;;;;;;;:45;;;;1432:25;1450:6;1432:8;:13;1441:3;1432:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1416:8;:13;1425:3;1416:13;;;;;;;;;;;;;;;:41;;;;1497:38;1528:6;1497:7;:14;1505:5;1497:14;;;;;;;;;;;;;;;:26;1512:10;1497:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1468:7;:14;1476:5;1468:14;;;;;;;;;;;;;;;:26;1483:10;1468:26;;;;;;;;;;;;;;;:67;;;;1567:3;1551:28;;1560:5;1551:28;;;1572:6;1551:28;;;;;;;;;;;;;;;;;;1597:4;1590:11;;1121:488;;;;;:::o;198:28:5:-;;;;:::o;4182:450:4:-;4265:4;4282:13;4298:7;:19;4306:10;4298:19;;;;;;;;;;;;;;;:29;4318:8;4298:29;;;;;;;;;;;;;;;;4282:45;;4361:8;4342:16;:27;4338:188;;;4418:1;4386:7;:19;4394:10;4386:19;;;;;;;;;;;;;;;:29;4406:8;4386:29;;;;;;;;;;;;;;;:33;;;;4338:188;;;4484:30;4497:16;4484:8;:12;;:30;;;;:::i;:::-;4452:7;:19;4460:10;4452:19;;;;;;;;;;;;;;;:29;4472:8;4452:29;;;;;;;;;;;;;;;:62;;;;4338:188;4562:8;4541:61;;4550:10;4541:61;;;4572:7;:19;4580:10;4572:19;;;;;;;;;;;;;;;:29;4592:8;4572:29;;;;;;;;;;;;;;;;4541:61;;;;;;;;;;;;;;;;;;4620:4;4613:11;;4182:450;;;;;:::o;1244:107:0:-;1300:7;1327:8;:16;1336:6;1327:16;;;;;;;;;;;;;;;;1320:23;;1244:107;;;:::o;249:20:12:-;;;;;;;;;;;;;:::o;171::5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;668:355:0:-;731:4;771:1;756:17;;:3;:17;;;;748:26;;;;;;;;803:8;:20;812:10;803:20;;;;;;;;;;;;;;;;793:6;:30;;785:39;;;;;;;;860:32;885:6;860:8;:20;869:10;860:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;837:8;:20;846:10;837:20;;;;;;;;;;;;;;;:55;;;;919:25;937:6;919:8;:13;928:3;919:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;903:8;:13;912:3;903:13;;;;;;;;;;;;;;;:41;;;;981:3;960:33;;969:10;960:33;;;986:6;960:33;;;;;;;;;;;;;;;;;;1011:4;1004:11;;668:355;;;;:::o;3415:280:4:-;3493:4;3542:46;3576:11;3542:7;:19;3550:10;3542:19;;;;;;;;;;;;;;;:29;3562:8;3542:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3510:7;:19;3518:10;3510:19;;;;;;;;;;;;;;;:29;3530:8;3510:29;;;;;;;;;;;;;;;:78;;;;3625:8;3604:61;;3613:10;3604:61;;;3635:7;:19;3643:10;3635:19;;;;;;;;;;;;;;;:29;3655:8;3635:29;;;;;;;;;;;;;;;;3604:61;;;;;;;;;;;;;;;;;;3683:4;3676:11;;3415:280;;;;:::o;2799:134::-;2873:7;2900;:15;2908:6;2900:15;;;;;;;;;;;;;;;:25;2916:8;2900:25;;;;;;;;;;;;;;;;2893:32;;2799:134;;;;:::o;902:192:12:-;702:5;;;;;;;;;;;688:19;;:10;:19;;;680:28;;;;;;;;1003:1;983:22;;:8;:22;;;;975:31;;;;;;;;1050:8;1022:37;;1043:5;;;;;;;;;;;1022:37;;;;;;;;;;;;1078:8;1070:5;;:16;;;;;;;;;;;;;;;;;;902:192;:::o;922:123:13:-;980:7;1012:1;1007;:6;;1000:14;;;;;;1036:1;1032;:5;1025:12;;922:123;;;;:::o;1114:141::-;1172:9;1202:1;1198;:5;1194:9;;1226:1;1221;:6;;1214:14;;;;;;1246:1;1239:8;;1114:141;;;;:::o","source":"pragma solidity 0.4.24;\r\n\r\nimport \"./BasicERC20.sol\"; \r\nimport \"../StandardToken.sol\"; \r\n\r\ncontract StandardERC20 is BasicERC20, StandardToken {\r\n\r\n    constructor(string _name, string _symbol, uint256 _initialSupply) BasicERC20(_name, _symbol, _initialSupply) public {\r\n        \r\n    }\r\n}","sourcePath":"E:\\Ethereum\\TokenCreator\\ethereum\\contracts\\ERC20\\flavors\\StandardERC20.sol","ast":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/StandardERC20.sol","exportedSymbols":{"StandardERC20":[574]},"id":575,"nodeType":"SourceUnit","nodes":[{"id":552,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:7"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","file":"./BasicERC20.sol","id":553,"nodeType":"ImportDirective","scope":575,"sourceUnit":542,"src":"27:26:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/StandardToken.sol","file":"../StandardToken.sol","id":554,"nodeType":"ImportDirective","scope":575,"sourceUnit":479,"src":"56:30:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":555,"name":"BasicERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":541,"src":"117:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"id":556,"nodeType":"InheritanceSpecifier","src":"117:10:7"},{"arguments":null,"baseName":{"contractScope":null,"id":557,"name":"StandardToken","nodeType":"UserDefinedTypeName","referencedDeclaration":478,"src":"129:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardToken_$478","typeString":"contract StandardToken"}},"id":558,"nodeType":"InheritanceSpecifier","src":"129:13:7"}],"contractDependencies":[95,138,170,478,541,1204],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":574,"linearizedBaseContracts":[574,478,541,1204,95,138,170],"name":"StandardERC20","nodeType":"ContractDefinition","nodes":[{"body":{"id":572,"nodeType":"Block","src":"268:18:7","statements":[]},"documentation":null,"id":573,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[{"arguments":[{"argumentTypes":null,"id":567,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":560,"src":"229:5:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":568,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":562,"src":"236:7:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":569,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":564,"src":"245:14:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":570,"modifierName":{"argumentTypes":null,"id":566,"name":"BasicERC20","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":541,"src":"218:10:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_BasicERC20_$541_$","typeString":"type(contract BasicERC20)"}},"nodeType":"ModifierInvocation","src":"218:42:7"}],"name":"","nodeType":"FunctionDefinition","parameters":{"id":565,"nodeType":"ParameterList","parameters":[{"constant":false,"id":560,"name":"_name","nodeType":"VariableDeclaration","scope":573,"src":"164:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":559,"name":"string","nodeType":"ElementaryTypeName","src":"164:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":562,"name":"_symbol","nodeType":"VariableDeclaration","scope":573,"src":"178:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":561,"name":"string","nodeType":"ElementaryTypeName","src":"178:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":564,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":573,"src":"194:22:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":563,"name":"uint256","nodeType":"ElementaryTypeName","src":"194:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"163:54:7"},"payable":false,"returnParameters":{"id":571,"nodeType":"ParameterList","parameters":[],"src":"268:0:7"},"scope":574,"src":"152:134:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":575,"src":"91:198:7"}],"src":"0:289:7"},"legacyAST":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/StandardERC20.sol","exportedSymbols":{"StandardERC20":[574]},"id":575,"nodeType":"SourceUnit","nodes":[{"id":552,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:7"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","file":"./BasicERC20.sol","id":553,"nodeType":"ImportDirective","scope":575,"sourceUnit":542,"src":"27:26:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/StandardToken.sol","file":"../StandardToken.sol","id":554,"nodeType":"ImportDirective","scope":575,"sourceUnit":479,"src":"56:30:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":555,"name":"BasicERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":541,"src":"117:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"id":556,"nodeType":"InheritanceSpecifier","src":"117:10:7"},{"arguments":null,"baseName":{"contractScope":null,"id":557,"name":"StandardToken","nodeType":"UserDefinedTypeName","referencedDeclaration":478,"src":"129:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardToken_$478","typeString":"contract StandardToken"}},"id":558,"nodeType":"InheritanceSpecifier","src":"129:13:7"}],"contractDependencies":[95,138,170,478,541,1204],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":574,"linearizedBaseContracts":[574,478,541,1204,95,138,170],"name":"StandardERC20","nodeType":"ContractDefinition","nodes":[{"body":{"id":572,"nodeType":"Block","src":"268:18:7","statements":[]},"documentation":null,"id":573,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[{"arguments":[{"argumentTypes":null,"id":567,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":560,"src":"229:5:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":568,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":562,"src":"236:7:7","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":569,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":564,"src":"245:14:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":570,"modifierName":{"argumentTypes":null,"id":566,"name":"BasicERC20","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":541,"src":"218:10:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_BasicERC20_$541_$","typeString":"type(contract BasicERC20)"}},"nodeType":"ModifierInvocation","src":"218:42:7"}],"name":"","nodeType":"FunctionDefinition","parameters":{"id":565,"nodeType":"ParameterList","parameters":[{"constant":false,"id":560,"name":"_name","nodeType":"VariableDeclaration","scope":573,"src":"164:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":559,"name":"string","nodeType":"ElementaryTypeName","src":"164:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":562,"name":"_symbol","nodeType":"VariableDeclaration","scope":573,"src":"178:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":561,"name":"string","nodeType":"ElementaryTypeName","src":"178:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":564,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":573,"src":"194:22:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":563,"name":"uint256","nodeType":"ElementaryTypeName","src":"194:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"163:54:7"},"payable":false,"returnParameters":{"id":571,"nodeType":"ParameterList","parameters":[],"src":"268:0:7"},"scope":574,"src":"152:134:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":575,"src":"91:198:7"}],"src":"0:289:7"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{},"schemaVersion":"2.0.1","updatedAt":"2018-08-13T03:05:50.500Z"}

/***/ })
/******/ ]);