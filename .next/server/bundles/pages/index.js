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

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = "E:\\Ethereum\\TokenCreator\\components\\Layout.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), props.children);
});

/***/ }),

/***/ "./ethereum/api/token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tokenAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_contracts_TokenFactory_json__ = __webpack_require__("./ethereum/build/contracts/TokenFactory.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_contracts_TokenFactory_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__build_contracts_TokenFactory_json__);

function tokenAt(tokenAddress, web3) {
  return new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_0__build_contracts_TokenFactory_json___default.a.abi, tokenAddress);
}

/***/ }),

/***/ "./ethereum/api/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle__ = __webpack_require__("./ethereum/truffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__truffle__);


var web3;
var env = process.env.ENV || "development" || 'development';

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else if (env == 'development') {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a("http://localhost:" + __WEBPACK_IMPORTED_MODULE_1__truffle___default.a.networks.development.port);
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "./ethereum/api/web3Socket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = web3Socket;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle__ = __webpack_require__("./ethereum/truffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__truffle__);


function web3Socket(network) {
  network = parseInt(network);
  var web3;
  var env = process.env.ENV || "development" || 'development';
  /*if(env == 'development') {
    web3 = new Web3("ws://localhost:"+truffle.networks.development.port);
  } else*/

  {
    switch (network) {
      case 1:
        web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.WebsocketProvider('wss://mainnet.infura.io/_ws'));
        break;

      default:
        web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
        break;
    }
  }
  return web3;
}

/***/ }),

/***/ "./ethereum/build/contracts/TokenFactory.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"TokenFactory","abi":[{"constant":false,"inputs":[{"name":"_destinatary","type":"address"}],"name":"withDraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"FundAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"token","type":"address"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"symbol","type":"string"}],"name":"TokenCreated","type":"event"},{"constant":false,"inputs":[{"name":"_dataHolder","type":"address"}],"name":"setDataHolder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"}],"name":"setStandardERC20Price","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_destinatary","type":"address"}],"name":"withdrawFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenFactoryImpl","type":"address"}],"name":"setTokenFactoryImpl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_initialSupply","type":"uint256"}],"name":"createBasicToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_initialSupply","type":"uint256"}],"name":"createStandardToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getDataHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x","deployedBytecode":"0x","sourceMap":"","deployedSourceMap":"","source":"pragma solidity 0.4.24;\r\n\r\nimport \"./TokenFactoryInterface.sol\";   \r\nimport \"./TokenFactoryDataHolder.sol\";\r\nimport \"../../utils/Ownable.sol\";\r\nimport \"../flavors/BasicERC20.sol\";\r\nimport \"../flavors/StandardERC20.sol\";\r\n\r\n/**\r\n * @title Contract to hold long term persistent data\r\n */\r\ncontract TokenFactory is TokenFactoryInterface, Ownable  { \r\n\r\n    TokenFactoryDataHolder dataHolder; \r\n\r\n    function setDataHolder(address _dataHolder) external onlyOwner() {\r\n        require(_dataHolder != address(0), \"Data holder cannot be 0 address\");\r\n        dataHolder = TokenFactoryDataHolder(_dataHolder);\r\n    }\r\n\r\n    function setStandardERC20Price(uint256 _price) external onlyOwner() {\r\n        require(_price >0, \"Price must be greater than 0\");\r\n        dataHolder.setStandardERC20Price(_price);\r\n    }\r\n\r\n    function withdrawFunds(address _destinatary) external onlyOwner() {\r\n        require(address(this).balance > 0, \"Cannot transfer 0 balance\");\r\n        address(_destinatary).transfer(address(this).balance);\r\n    }\r\n\r\n    function setTokenFactoryImpl(address _tokenFactoryImpl) external onlyOwner() {\r\n        require(_tokenFactoryImpl != address(0));\r\n        dataHolder.setTokenFactoryImpl(_tokenFactoryImpl);\r\n    }\r\n\r\n    function createBasicToken(string _name, string _symbol, uint256 _initialSupply) external payable {\r\n        BasicERC20 token = new BasicERC20(_name, _symbol, _initialSupply);\r\n        token.transferOwnership(msg.sender);\r\n        dataHolder.addBasicToken(msg.sender, address(token));\r\n        if(msg.value > 0) {\r\n            dataHolder.addFunds(msg.value); \r\n            emit FundAdded(msg.value); \r\n        }\r\n    }\r\n    \r\n    function createStandardToken(string _name, string _symbol, uint256 _initialSupply) external payable {\r\n        require(msg.value >= dataHolder.getStandarERC20Price(), \"Value sent is not enough\");\r\n        StandardERC20 token = new StandardERC20(_name, _symbol, _initialSupply);\r\n        token.transferOwnership(msg.sender);\r\n        dataHolder.addStandardToken(msg.sender, address(token));\r\n        dataHolder.addFunds(msg.value); \r\n        emit FundAdded(msg.value);\r\n    }\r\n\r\n    function getDataHolder() external view  returns(address) {\r\n        return address(dataHolder);   \r\n    } \r\n}","sourcePath":"E:\\Ethereum\\TokenCreator\\ethereum\\contracts\\ERC20\\tokenFactory\\TokenFactory.sol","ast":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/tokenFactory/TokenFactory.sol","exportedSymbols":{"TokenFactory":[834]},"id":835,"nodeType":"SourceUnit","nodes":[{"id":606,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:7"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/tokenFactory/TokenFactoryInterface.sol","file":"./TokenFactoryInterface.sol","id":607,"nodeType":"ImportDirective","scope":835,"sourceUnit":1117,"src":"27:37:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/tokenFactory/TokenFactoryDataHolder.sol","file":"./TokenFactoryDataHolder.sol","id":608,"nodeType":"ImportDirective","scope":835,"sourceUnit":1063,"src":"69:38:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/Ownable.sol","file":"../../utils/Ownable.sol","id":609,"nodeType":"ImportDirective","scope":835,"sourceUnit":1230,"src":"109:33:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","file":"../flavors/BasicERC20.sol","id":610,"nodeType":"ImportDirective","scope":835,"sourceUnit":542,"src":"144:35:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/StandardERC20.sol","file":"../flavors/StandardERC20.sol","id":611,"nodeType":"ImportDirective","scope":835,"sourceUnit":605,"src":"181:38:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":612,"name":"TokenFactoryInterface","nodeType":"UserDefinedTypeName","referencedDeclaration":1116,"src":"312:21:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryInterface_$1116","typeString":"contract TokenFactoryInterface"}},"id":613,"nodeType":"InheritanceSpecifier","src":"312:21:7"},{"arguments":null,"baseName":{"contractScope":null,"id":614,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":1229,"src":"335:7:7","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$1229","typeString":"contract Ownable"}},"id":615,"nodeType":"InheritanceSpecifier","src":"335:7:7"}],"contractDependencies":[541,604,1229,1116],"contractKind":"contract","documentation":"@title Contract to hold long term persistent data\r","fullyImplemented":false,"id":834,"linearizedBaseContracts":[834,1229,1116],"name":"TokenFactory","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":617,"name":"dataHolder","nodeType":"VariableDeclaration","scope":834,"src":"354:33:7","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"},"typeName":{"contractScope":null,"id":616,"name":"TokenFactoryDataHolder","nodeType":"UserDefinedTypeName","referencedDeclaration":1062,"src":"354:22:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"value":null,"visibility":"internal"},{"body":{"id":639,"nodeType":"Block","src":"462:147:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":629,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":625,"name":"_dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":619,"src":"481:11:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":627,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"504:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":626,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"496:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":628,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"496:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"481:25:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4461746120686f6c6465722063616e6e6f7420626520302061646472657373","id":630,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"508:33:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_9ae8aca39d9719b8188cba40ce3c97888af4518cff7aea2ada73e17ec2b545e5","typeString":"literal_string \"Data holder cannot be 0 address\""},"value":"Data holder cannot be 0 address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_9ae8aca39d9719b8188cba40ce3c97888af4518cff7aea2ada73e17ec2b545e5","typeString":"literal_string \"Data holder cannot be 0 address\""}],"id":624,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"473:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":631,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"473:69:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":632,"nodeType":"ExpressionStatement","src":"473:69:7"},{"expression":{"argumentTypes":null,"id":637,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":633,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"553:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":635,"name":"_dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":619,"src":"589:11:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":634,"name":"TokenFactoryDataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1062,"src":"566:22:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_TokenFactoryDataHolder_$1062_$","typeString":"type(contract TokenFactoryDataHolder)"}},"id":636,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"566:35:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"src":"553:48:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":638,"nodeType":"ExpressionStatement","src":"553:48:7"}]},"documentation":null,"id":640,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":622,"modifierName":{"argumentTypes":null,"id":621,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"450:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"450:11:7"}],"name":"setDataHolder","nodeType":"FunctionDefinition","parameters":{"id":620,"nodeType":"ParameterList","parameters":[{"constant":false,"id":619,"name":"_dataHolder","nodeType":"VariableDeclaration","scope":640,"src":"420:19:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":618,"name":"address","nodeType":"ElementaryTypeName","src":"420:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"419:21:7"},"payable":false,"returnParameters":{"id":623,"nodeType":"ParameterList","parameters":[],"src":"462:0:7"},"scope":834,"src":"397:212:7","stateMutability":"nonpayable","superFunction":1070,"visibility":"external"},{"body":{"id":660,"nodeType":"Block","src":"685:120:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":650,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":648,"name":"_price","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":642,"src":"704:6:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"hexValue":"30","id":649,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"712:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"704:9:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"5072696365206d7573742062652067726561746572207468616e2030","id":651,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"715:30:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_f496d2a6b8c6dfd2fdeb51133639f7cbcc6985234f7207231dd11f4a16998dde","typeString":"literal_string \"Price must be greater than 0\""},"value":"Price must be greater than 0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_f496d2a6b8c6dfd2fdeb51133639f7cbcc6985234f7207231dd11f4a16998dde","typeString":"literal_string \"Price must be greater than 0\""}],"id":647,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"696:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":652,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"696:50:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":653,"nodeType":"ExpressionStatement","src":"696:50:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":657,"name":"_price","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":642,"src":"790:6:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":654,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"757:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":656,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"setStandardERC20Price","nodeType":"MemberAccess","referencedDeclaration":1039,"src":"757:32:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":658,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"757:40:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":659,"nodeType":"ExpressionStatement","src":"757:40:7"}]},"documentation":null,"id":661,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":645,"modifierName":{"argumentTypes":null,"id":644,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"673:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"673:11:7"}],"name":"setStandardERC20Price","nodeType":"FunctionDefinition","parameters":{"id":643,"nodeType":"ParameterList","parameters":[{"constant":false,"id":642,"name":"_price","nodeType":"VariableDeclaration","scope":661,"src":"648:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":641,"name":"uint256","nodeType":"ElementaryTypeName","src":"648:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"647:16:7"},"payable":false,"returnParameters":{"id":646,"nodeType":"ParameterList","parameters":[],"src":"685:0:7"},"scope":834,"src":"617:188:7","stateMutability":"nonpayable","superFunction":1075,"visibility":"external"},{"body":{"id":688,"nodeType":"Block","src":"879:146:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":674,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":670,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1373,"src":"906:4:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}],"id":669,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"898:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":671,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"898:13:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":672,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"898:21:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"hexValue":"30","id":673,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"922:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"898:25:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"43616e6e6f74207472616e7366657220302062616c616e6365","id":675,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"925:27:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_402cd79ed164b7710392b8f2e111655c29790fd382ad6a6376a6559f1efca13d","typeString":"literal_string \"Cannot transfer 0 balance\""},"value":"Cannot transfer 0 balance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_402cd79ed164b7710392b8f2e111655c29790fd382ad6a6376a6559f1efca13d","typeString":"literal_string \"Cannot transfer 0 balance\""}],"id":668,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"890:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":676,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"890:63:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":677,"nodeType":"ExpressionStatement","src":"890:63:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":683,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1373,"src":"1003:4:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}],"id":682,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"995:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":684,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"995:13:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":685,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"995:21:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":679,"name":"_destinatary","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":663,"src":"972:12:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":678,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"964:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":680,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"964:21:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":681,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"964:30:7","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":686,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"964:53:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":687,"nodeType":"ExpressionStatement","src":"964:53:7"}]},"documentation":null,"id":689,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":666,"modifierName":{"argumentTypes":null,"id":665,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"867:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"867:11:7"}],"name":"withdrawFunds","nodeType":"FunctionDefinition","parameters":{"id":664,"nodeType":"ParameterList","parameters":[{"constant":false,"id":663,"name":"_destinatary","nodeType":"VariableDeclaration","scope":689,"src":"836:20:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":662,"name":"address","nodeType":"ElementaryTypeName","src":"836:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"835:22:7"},"payable":false,"returnParameters":{"id":667,"nodeType":"ParameterList","parameters":[],"src":"879:0:7"},"scope":834,"src":"813:212:7","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":{"id":710,"nodeType":"Block","src":"1110:119:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":701,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":697,"name":"_tokenFactoryImpl","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"1129:17:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":699,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1158:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":698,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1150:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":700,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1150:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1129:31:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":696,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1341,"src":"1121:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":702,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1121:40:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":703,"nodeType":"ExpressionStatement","src":"1121:40:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":707,"name":"_tokenFactoryImpl","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"1203:17:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":704,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1172:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":706,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"setTokenFactoryImpl","nodeType":"MemberAccess","referencedDeclaration":911,"src":"1172:30:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":708,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1172:49:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":709,"nodeType":"ExpressionStatement","src":"1172:49:7"}]},"documentation":null,"id":711,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":694,"modifierName":{"argumentTypes":null,"id":693,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"1098:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1098:11:7"}],"name":"setTokenFactoryImpl","nodeType":"FunctionDefinition","parameters":{"id":692,"nodeType":"ParameterList","parameters":[{"constant":false,"id":691,"name":"_tokenFactoryImpl","nodeType":"VariableDeclaration","scope":711,"src":"1062:25:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":690,"name":"address","nodeType":"ElementaryTypeName","src":"1062:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1061:27:7"},"payable":false,"returnParameters":{"id":695,"nodeType":"ParameterList","parameters":[],"src":"1110:0:7"},"scope":834,"src":"1033:196:7","stateMutability":"nonpayable","superFunction":1085,"visibility":"external"},{"body":{"id":764,"nodeType":"Block","src":"1334:320:7","statements":[{"assignments":[721],"declarations":[{"constant":false,"id":721,"name":"token","nodeType":"VariableDeclaration","scope":765,"src":"1345:16:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"},"typeName":{"contractScope":null,"id":720,"name":"BasicERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":541,"src":"1345:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"value":null,"visibility":"internal"}],"id":728,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":724,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":713,"src":"1379:5:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":725,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":715,"src":"1386:7:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":726,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":717,"src":"1395:14:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":723,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"1364:14:7","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_contract$_BasicERC20_$541_$","typeString":"function (string memory,string memory,uint256) returns (contract BasicERC20)"},"typeName":{"contractScope":null,"id":722,"name":"BasicERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":541,"src":"1368:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}}},"id":727,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1364:46:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"nodeType":"VariableDeclarationStatement","src":"1345:65:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":732,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1445:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":733,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1445:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":729,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":721,"src":"1421:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"id":731,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transferOwnership","nodeType":"MemberAccess","referencedDeclaration":1228,"src":"1421:23:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":734,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1421:35:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":735,"nodeType":"ExpressionStatement","src":"1421:35:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":739,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1492:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":740,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1492:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":742,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":721,"src":"1512:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}],"id":741,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1504:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":743,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1504:14:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":736,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1467:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":738,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addBasicToken","nodeType":"MemberAccess","referencedDeclaration":989,"src":"1467:24:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_address_$returns$__$","typeString":"function (address,address) external"}},"id":744,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1467:52:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":745,"nodeType":"ExpressionStatement","src":"1467:52:7"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":749,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":746,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1533:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":747,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1533:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"hexValue":"30","id":748,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1545:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1533:13:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":763,"nodeType":"IfStatement","src":"1530:117:7","trueBody":{"id":762,"nodeType":"Block","src":"1548:99:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":753,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1583:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":754,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1583:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":750,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1563:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":752,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addFunds","nodeType":"MemberAccess","referencedDeclaration":926,"src":"1563:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":755,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1563:30:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":756,"nodeType":"ExpressionStatement","src":"1563:30:7"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":758,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1624:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":759,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1624:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":757,"name":"FundAdded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1107,"src":"1614:9:7","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":760,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1614:20:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":761,"nodeType":"EmitStatement","src":"1609:25:7"}]}}]},"documentation":null,"id":765,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createBasicToken","nodeType":"FunctionDefinition","parameters":{"id":718,"nodeType":"ParameterList","parameters":[{"constant":false,"id":713,"name":"_name","nodeType":"VariableDeclaration","scope":765,"src":"1263:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":712,"name":"string","nodeType":"ElementaryTypeName","src":"1263:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":715,"name":"_symbol","nodeType":"VariableDeclaration","scope":765,"src":"1277:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":714,"name":"string","nodeType":"ElementaryTypeName","src":"1277:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":717,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":765,"src":"1293:22:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":716,"name":"uint256","nodeType":"ElementaryTypeName","src":"1293:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1262:54:7"},"payable":true,"returnParameters":{"id":719,"nodeType":"ParameterList","parameters":[],"src":"1334:0:7"},"scope":834,"src":"1237:417:7","stateMutability":"payable","superFunction":1094,"visibility":"external"},{"body":{"id":822,"nodeType":"Block","src":"1766:374:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":780,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":775,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1785:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":776,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1785:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"expression":{"argumentTypes":null,"id":777,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1798:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":778,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getStandarERC20Price","nodeType":"MemberAccess","referencedDeclaration":1048,"src":"1798:31:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$__$returns$_t_uint256_$","typeString":"function () view external returns (uint256)"}},"id":779,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1798:33:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1785:46:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"56616c75652073656e74206973206e6f7420656e6f756768","id":781,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1833:26:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_7a90f13f4f298ce19a1ae72e4b29d3eac484d4eeff1dcbe4ab9510c9c899c0ac","typeString":"literal_string \"Value sent is not enough\""},"value":"Value sent is not enough"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_7a90f13f4f298ce19a1ae72e4b29d3eac484d4eeff1dcbe4ab9510c9c899c0ac","typeString":"literal_string \"Value sent is not enough\""}],"id":774,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"1777:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":782,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1777:83:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":783,"nodeType":"ExpressionStatement","src":"1777:83:7"},{"assignments":[785],"declarations":[{"constant":false,"id":785,"name":"token","nodeType":"VariableDeclaration","scope":823,"src":"1871:19:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"},"typeName":{"contractScope":null,"id":784,"name":"StandardERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":604,"src":"1871:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}},"value":null,"visibility":"internal"}],"id":792,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":788,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":767,"src":"1911:5:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":789,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":769,"src":"1918:7:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":790,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":771,"src":"1927:14:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":787,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"1893:17:7","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_contract$_StandardERC20_$604_$","typeString":"function (string memory,string memory,uint256) returns (contract StandardERC20)"},"typeName":{"contractScope":null,"id":786,"name":"StandardERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":604,"src":"1897:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}}},"id":791,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1893:49:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}},"nodeType":"VariableDeclarationStatement","src":"1871:71:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":796,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1977:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":797,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1977:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":793,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":785,"src":"1953:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}},"id":795,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transferOwnership","nodeType":"MemberAccess","referencedDeclaration":1228,"src":"1953:23:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":798,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1953:35:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":799,"nodeType":"ExpressionStatement","src":"1953:35:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":803,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"2027:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":804,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2027:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":806,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":785,"src":"2047:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}],"id":805,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2039:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":807,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2039:14:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":800,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1999:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":802,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addStandardToken","nodeType":"MemberAccess","referencedDeclaration":1025,"src":"1999:27:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_address_$returns$__$","typeString":"function (address,address) external"}},"id":808,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1999:55:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":809,"nodeType":"ExpressionStatement","src":"1999:55:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":813,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"2085:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":814,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2085:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":810,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"2065:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":812,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addFunds","nodeType":"MemberAccess","referencedDeclaration":926,"src":"2065:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":815,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2065:30:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":816,"nodeType":"ExpressionStatement","src":"2065:30:7"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":818,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"2122:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":819,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2122:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":817,"name":"FundAdded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1107,"src":"2112:9:7","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":820,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2112:20:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":821,"nodeType":"EmitStatement","src":"2107:25:7"}]},"documentation":null,"id":823,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createStandardToken","nodeType":"FunctionDefinition","parameters":{"id":772,"nodeType":"ParameterList","parameters":[{"constant":false,"id":767,"name":"_name","nodeType":"VariableDeclaration","scope":823,"src":"1695:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":766,"name":"string","nodeType":"ElementaryTypeName","src":"1695:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":769,"name":"_symbol","nodeType":"VariableDeclaration","scope":823,"src":"1709:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":768,"name":"string","nodeType":"ElementaryTypeName","src":"1709:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":771,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":823,"src":"1725:22:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":770,"name":"uint256","nodeType":"ElementaryTypeName","src":"1725:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1694:54:7"},"payable":true,"returnParameters":{"id":773,"nodeType":"ParameterList","parameters":[],"src":"1766:0:7"},"scope":834,"src":"1666:474:7","stateMutability":"payable","superFunction":1103,"visibility":"external"},{"body":{"id":832,"nodeType":"Block","src":"2205:48:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":829,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"2231:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}],"id":828,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2223:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":830,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2223:19:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":827,"id":831,"nodeType":"Return","src":"2216:26:7"}]},"documentation":null,"id":833,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getDataHolder","nodeType":"FunctionDefinition","parameters":{"id":824,"nodeType":"ParameterList","parameters":[],"src":"2170:2:7"},"payable":false,"returnParameters":{"id":827,"nodeType":"ParameterList","parameters":[{"constant":false,"id":826,"name":"","nodeType":"VariableDeclaration","scope":833,"src":"2196:7:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":825,"name":"address","nodeType":"ElementaryTypeName","src":"2196:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2195:9:7"},"scope":834,"src":"2148:105:7","stateMutability":"view","superFunction":null,"visibility":"external"}],"scope":835,"src":"287:1970:7"}],"src":"0:2257:7"},"legacyAST":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/tokenFactory/TokenFactory.sol","exportedSymbols":{"TokenFactory":[834]},"id":835,"nodeType":"SourceUnit","nodes":[{"id":606,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:7"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/tokenFactory/TokenFactoryInterface.sol","file":"./TokenFactoryInterface.sol","id":607,"nodeType":"ImportDirective","scope":835,"sourceUnit":1117,"src":"27:37:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/tokenFactory/TokenFactoryDataHolder.sol","file":"./TokenFactoryDataHolder.sol","id":608,"nodeType":"ImportDirective","scope":835,"sourceUnit":1063,"src":"69:38:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/Ownable.sol","file":"../../utils/Ownable.sol","id":609,"nodeType":"ImportDirective","scope":835,"sourceUnit":1230,"src":"109:33:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","file":"../flavors/BasicERC20.sol","id":610,"nodeType":"ImportDirective","scope":835,"sourceUnit":542,"src":"144:35:7","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/StandardERC20.sol","file":"../flavors/StandardERC20.sol","id":611,"nodeType":"ImportDirective","scope":835,"sourceUnit":605,"src":"181:38:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":612,"name":"TokenFactoryInterface","nodeType":"UserDefinedTypeName","referencedDeclaration":1116,"src":"312:21:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryInterface_$1116","typeString":"contract TokenFactoryInterface"}},"id":613,"nodeType":"InheritanceSpecifier","src":"312:21:7"},{"arguments":null,"baseName":{"contractScope":null,"id":614,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":1229,"src":"335:7:7","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$1229","typeString":"contract Ownable"}},"id":615,"nodeType":"InheritanceSpecifier","src":"335:7:7"}],"contractDependencies":[541,604,1229,1116],"contractKind":"contract","documentation":"@title Contract to hold long term persistent data\r","fullyImplemented":false,"id":834,"linearizedBaseContracts":[834,1229,1116],"name":"TokenFactory","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":617,"name":"dataHolder","nodeType":"VariableDeclaration","scope":834,"src":"354:33:7","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"},"typeName":{"contractScope":null,"id":616,"name":"TokenFactoryDataHolder","nodeType":"UserDefinedTypeName","referencedDeclaration":1062,"src":"354:22:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"value":null,"visibility":"internal"},{"body":{"id":639,"nodeType":"Block","src":"462:147:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":629,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":625,"name":"_dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":619,"src":"481:11:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":627,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"504:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":626,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"496:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":628,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"496:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"481:25:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4461746120686f6c6465722063616e6e6f7420626520302061646472657373","id":630,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"508:33:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_9ae8aca39d9719b8188cba40ce3c97888af4518cff7aea2ada73e17ec2b545e5","typeString":"literal_string \"Data holder cannot be 0 address\""},"value":"Data holder cannot be 0 address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_9ae8aca39d9719b8188cba40ce3c97888af4518cff7aea2ada73e17ec2b545e5","typeString":"literal_string \"Data holder cannot be 0 address\""}],"id":624,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"473:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":631,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"473:69:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":632,"nodeType":"ExpressionStatement","src":"473:69:7"},{"expression":{"argumentTypes":null,"id":637,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":633,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"553:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":635,"name":"_dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":619,"src":"589:11:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":634,"name":"TokenFactoryDataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1062,"src":"566:22:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_TokenFactoryDataHolder_$1062_$","typeString":"type(contract TokenFactoryDataHolder)"}},"id":636,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"566:35:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"src":"553:48:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":638,"nodeType":"ExpressionStatement","src":"553:48:7"}]},"documentation":null,"id":640,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":622,"modifierName":{"argumentTypes":null,"id":621,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"450:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"450:11:7"}],"name":"setDataHolder","nodeType":"FunctionDefinition","parameters":{"id":620,"nodeType":"ParameterList","parameters":[{"constant":false,"id":619,"name":"_dataHolder","nodeType":"VariableDeclaration","scope":640,"src":"420:19:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":618,"name":"address","nodeType":"ElementaryTypeName","src":"420:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"419:21:7"},"payable":false,"returnParameters":{"id":623,"nodeType":"ParameterList","parameters":[],"src":"462:0:7"},"scope":834,"src":"397:212:7","stateMutability":"nonpayable","superFunction":1070,"visibility":"external"},{"body":{"id":660,"nodeType":"Block","src":"685:120:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":650,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":648,"name":"_price","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":642,"src":"704:6:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"hexValue":"30","id":649,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"712:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"704:9:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"5072696365206d7573742062652067726561746572207468616e2030","id":651,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"715:30:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_f496d2a6b8c6dfd2fdeb51133639f7cbcc6985234f7207231dd11f4a16998dde","typeString":"literal_string \"Price must be greater than 0\""},"value":"Price must be greater than 0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_f496d2a6b8c6dfd2fdeb51133639f7cbcc6985234f7207231dd11f4a16998dde","typeString":"literal_string \"Price must be greater than 0\""}],"id":647,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"696:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":652,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"696:50:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":653,"nodeType":"ExpressionStatement","src":"696:50:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":657,"name":"_price","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":642,"src":"790:6:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":654,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"757:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":656,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"setStandardERC20Price","nodeType":"MemberAccess","referencedDeclaration":1039,"src":"757:32:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":658,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"757:40:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":659,"nodeType":"ExpressionStatement","src":"757:40:7"}]},"documentation":null,"id":661,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":645,"modifierName":{"argumentTypes":null,"id":644,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"673:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"673:11:7"}],"name":"setStandardERC20Price","nodeType":"FunctionDefinition","parameters":{"id":643,"nodeType":"ParameterList","parameters":[{"constant":false,"id":642,"name":"_price","nodeType":"VariableDeclaration","scope":661,"src":"648:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":641,"name":"uint256","nodeType":"ElementaryTypeName","src":"648:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"647:16:7"},"payable":false,"returnParameters":{"id":646,"nodeType":"ParameterList","parameters":[],"src":"685:0:7"},"scope":834,"src":"617:188:7","stateMutability":"nonpayable","superFunction":1075,"visibility":"external"},{"body":{"id":688,"nodeType":"Block","src":"879:146:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":674,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":670,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1373,"src":"906:4:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}],"id":669,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"898:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":671,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"898:13:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":672,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"898:21:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"hexValue":"30","id":673,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"922:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"898:25:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"43616e6e6f74207472616e7366657220302062616c616e6365","id":675,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"925:27:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_402cd79ed164b7710392b8f2e111655c29790fd382ad6a6376a6559f1efca13d","typeString":"literal_string \"Cannot transfer 0 balance\""},"value":"Cannot transfer 0 balance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_402cd79ed164b7710392b8f2e111655c29790fd382ad6a6376a6559f1efca13d","typeString":"literal_string \"Cannot transfer 0 balance\""}],"id":668,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"890:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":676,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"890:63:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":677,"nodeType":"ExpressionStatement","src":"890:63:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":683,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1373,"src":"1003:4:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_TokenFactory_$834","typeString":"contract TokenFactory"}],"id":682,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"995:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":684,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"995:13:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":685,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"995:21:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":679,"name":"_destinatary","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":663,"src":"972:12:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":678,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"964:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":680,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"964:21:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":681,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"964:30:7","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":686,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"964:53:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":687,"nodeType":"ExpressionStatement","src":"964:53:7"}]},"documentation":null,"id":689,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":666,"modifierName":{"argumentTypes":null,"id":665,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"867:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"867:11:7"}],"name":"withdrawFunds","nodeType":"FunctionDefinition","parameters":{"id":664,"nodeType":"ParameterList","parameters":[{"constant":false,"id":663,"name":"_destinatary","nodeType":"VariableDeclaration","scope":689,"src":"836:20:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":662,"name":"address","nodeType":"ElementaryTypeName","src":"836:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"835:22:7"},"payable":false,"returnParameters":{"id":667,"nodeType":"ParameterList","parameters":[],"src":"879:0:7"},"scope":834,"src":"813:212:7","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":{"id":710,"nodeType":"Block","src":"1110:119:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":701,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":697,"name":"_tokenFactoryImpl","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"1129:17:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":699,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1158:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":698,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1150:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":700,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1150:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1129:31:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":696,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1341,"src":"1121:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":702,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1121:40:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":703,"nodeType":"ExpressionStatement","src":"1121:40:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":707,"name":"_tokenFactoryImpl","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"1203:17:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":704,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1172:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":706,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"setTokenFactoryImpl","nodeType":"MemberAccess","referencedDeclaration":911,"src":"1172:30:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":708,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1172:49:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":709,"nodeType":"ExpressionStatement","src":"1172:49:7"}]},"documentation":null,"id":711,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":[],"id":694,"modifierName":{"argumentTypes":null,"id":693,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1203,"src":"1098:9:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1098:11:7"}],"name":"setTokenFactoryImpl","nodeType":"FunctionDefinition","parameters":{"id":692,"nodeType":"ParameterList","parameters":[{"constant":false,"id":691,"name":"_tokenFactoryImpl","nodeType":"VariableDeclaration","scope":711,"src":"1062:25:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":690,"name":"address","nodeType":"ElementaryTypeName","src":"1062:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1061:27:7"},"payable":false,"returnParameters":{"id":695,"nodeType":"ParameterList","parameters":[],"src":"1110:0:7"},"scope":834,"src":"1033:196:7","stateMutability":"nonpayable","superFunction":1085,"visibility":"external"},{"body":{"id":764,"nodeType":"Block","src":"1334:320:7","statements":[{"assignments":[721],"declarations":[{"constant":false,"id":721,"name":"token","nodeType":"VariableDeclaration","scope":765,"src":"1345:16:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"},"typeName":{"contractScope":null,"id":720,"name":"BasicERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":541,"src":"1345:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"value":null,"visibility":"internal"}],"id":728,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":724,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":713,"src":"1379:5:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":725,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":715,"src":"1386:7:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":726,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":717,"src":"1395:14:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":723,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"1364:14:7","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_contract$_BasicERC20_$541_$","typeString":"function (string memory,string memory,uint256) returns (contract BasicERC20)"},"typeName":{"contractScope":null,"id":722,"name":"BasicERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":541,"src":"1368:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}}},"id":727,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1364:46:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"nodeType":"VariableDeclarationStatement","src":"1345:65:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":732,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1445:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":733,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1445:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":729,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":721,"src":"1421:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}},"id":731,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transferOwnership","nodeType":"MemberAccess","referencedDeclaration":1228,"src":"1421:23:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":734,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1421:35:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":735,"nodeType":"ExpressionStatement","src":"1421:35:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":739,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1492:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":740,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1492:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":742,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":721,"src":"1512:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_BasicERC20_$541","typeString":"contract BasicERC20"}],"id":741,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1504:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":743,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1504:14:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":736,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1467:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":738,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addBasicToken","nodeType":"MemberAccess","referencedDeclaration":989,"src":"1467:24:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_address_$returns$__$","typeString":"function (address,address) external"}},"id":744,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1467:52:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":745,"nodeType":"ExpressionStatement","src":"1467:52:7"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":749,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":746,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1533:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":747,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1533:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"hexValue":"30","id":748,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1545:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1533:13:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":763,"nodeType":"IfStatement","src":"1530:117:7","trueBody":{"id":762,"nodeType":"Block","src":"1548:99:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":753,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1583:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":754,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1583:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":750,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1563:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":752,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addFunds","nodeType":"MemberAccess","referencedDeclaration":926,"src":"1563:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":755,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1563:30:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":756,"nodeType":"ExpressionStatement","src":"1563:30:7"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":758,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1624:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":759,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1624:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":757,"name":"FundAdded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1107,"src":"1614:9:7","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":760,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1614:20:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":761,"nodeType":"EmitStatement","src":"1609:25:7"}]}}]},"documentation":null,"id":765,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createBasicToken","nodeType":"FunctionDefinition","parameters":{"id":718,"nodeType":"ParameterList","parameters":[{"constant":false,"id":713,"name":"_name","nodeType":"VariableDeclaration","scope":765,"src":"1263:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":712,"name":"string","nodeType":"ElementaryTypeName","src":"1263:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":715,"name":"_symbol","nodeType":"VariableDeclaration","scope":765,"src":"1277:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":714,"name":"string","nodeType":"ElementaryTypeName","src":"1277:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":717,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":765,"src":"1293:22:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":716,"name":"uint256","nodeType":"ElementaryTypeName","src":"1293:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1262:54:7"},"payable":true,"returnParameters":{"id":719,"nodeType":"ParameterList","parameters":[],"src":"1334:0:7"},"scope":834,"src":"1237:417:7","stateMutability":"payable","superFunction":1094,"visibility":"external"},{"body":{"id":822,"nodeType":"Block","src":"1766:374:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":780,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":775,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1785:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":776,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1785:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"expression":{"argumentTypes":null,"id":777,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1798:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":778,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"getStandarERC20Price","nodeType":"MemberAccess","referencedDeclaration":1048,"src":"1798:31:7","typeDescriptions":{"typeIdentifier":"t_function_external_view$__$returns$_t_uint256_$","typeString":"function () view external returns (uint256)"}},"id":779,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1798:33:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1785:46:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"56616c75652073656e74206973206e6f7420656e6f756768","id":781,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1833:26:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_7a90f13f4f298ce19a1ae72e4b29d3eac484d4eeff1dcbe4ab9510c9c899c0ac","typeString":"literal_string \"Value sent is not enough\""},"value":"Value sent is not enough"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_7a90f13f4f298ce19a1ae72e4b29d3eac484d4eeff1dcbe4ab9510c9c899c0ac","typeString":"literal_string \"Value sent is not enough\""}],"id":774,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1341,1342],"referencedDeclaration":1342,"src":"1777:7:7","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":782,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1777:83:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":783,"nodeType":"ExpressionStatement","src":"1777:83:7"},{"assignments":[785],"declarations":[{"constant":false,"id":785,"name":"token","nodeType":"VariableDeclaration","scope":823,"src":"1871:19:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"},"typeName":{"contractScope":null,"id":784,"name":"StandardERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":604,"src":"1871:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}},"value":null,"visibility":"internal"}],"id":792,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":788,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":767,"src":"1911:5:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":789,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":769,"src":"1918:7:7","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"}},{"argumentTypes":null,"id":790,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":771,"src":"1927:14:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_string_calldata_ptr","typeString":"string calldata"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":787,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"1893:17:7","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_contract$_StandardERC20_$604_$","typeString":"function (string memory,string memory,uint256) returns (contract StandardERC20)"},"typeName":{"contractScope":null,"id":786,"name":"StandardERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":604,"src":"1897:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}}},"id":791,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1893:49:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}},"nodeType":"VariableDeclarationStatement","src":"1871:71:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":796,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"1977:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":797,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1977:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":793,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":785,"src":"1953:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}},"id":795,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transferOwnership","nodeType":"MemberAccess","referencedDeclaration":1228,"src":"1953:23:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":798,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1953:35:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":799,"nodeType":"ExpressionStatement","src":"1953:35:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":803,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"2027:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":804,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2027:10:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":806,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":785,"src":"2047:5:7","typeDescriptions":{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_StandardERC20_$604","typeString":"contract StandardERC20"}],"id":805,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2039:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":807,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2039:14:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":800,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"1999:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":802,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addStandardToken","nodeType":"MemberAccess","referencedDeclaration":1025,"src":"1999:27:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_address_$returns$__$","typeString":"function (address,address) external"}},"id":808,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1999:55:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":809,"nodeType":"ExpressionStatement","src":"1999:55:7"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":813,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"2085:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":814,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2085:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":810,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"2065:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}},"id":812,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addFunds","nodeType":"MemberAccess","referencedDeclaration":926,"src":"2065:19:7","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":815,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2065:30:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":816,"nodeType":"ExpressionStatement","src":"2065:30:7"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":818,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1338,"src":"2122:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":819,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2122:9:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":817,"name":"FundAdded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1107,"src":"2112:9:7","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":820,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2112:20:7","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":821,"nodeType":"EmitStatement","src":"2107:25:7"}]},"documentation":null,"id":823,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createStandardToken","nodeType":"FunctionDefinition","parameters":{"id":772,"nodeType":"ParameterList","parameters":[{"constant":false,"id":767,"name":"_name","nodeType":"VariableDeclaration","scope":823,"src":"1695:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":766,"name":"string","nodeType":"ElementaryTypeName","src":"1695:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":769,"name":"_symbol","nodeType":"VariableDeclaration","scope":823,"src":"1709:14:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_calldata_ptr","typeString":"string"},"typeName":{"id":768,"name":"string","nodeType":"ElementaryTypeName","src":"1709:6:7","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":771,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":823,"src":"1725:22:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":770,"name":"uint256","nodeType":"ElementaryTypeName","src":"1725:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1694:54:7"},"payable":true,"returnParameters":{"id":773,"nodeType":"ParameterList","parameters":[],"src":"1766:0:7"},"scope":834,"src":"1666:474:7","stateMutability":"payable","superFunction":1103,"visibility":"external"},{"body":{"id":832,"nodeType":"Block","src":"2205:48:7","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":829,"name":"dataHolder","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":617,"src":"2231:10:7","typeDescriptions":{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_TokenFactoryDataHolder_$1062","typeString":"contract TokenFactoryDataHolder"}],"id":828,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2223:7:7","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":830,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2223:19:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":827,"id":831,"nodeType":"Return","src":"2216:26:7"}]},"documentation":null,"id":833,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getDataHolder","nodeType":"FunctionDefinition","parameters":{"id":824,"nodeType":"ParameterList","parameters":[],"src":"2170:2:7"},"payable":false,"returnParameters":{"id":827,"nodeType":"ParameterList","parameters":[{"constant":false,"id":826,"name":"","nodeType":"VariableDeclaration","scope":833,"src":"2196:7:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":825,"name":"address","nodeType":"ElementaryTypeName","src":"2196:7:7","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2195:9:7"},"scope":834,"src":"2148:105:7","stateMutability":"view","superFunction":null,"visibility":"external"}],"scope":835,"src":"287:1970:7"}],"src":"0:2257:7"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{},"schemaVersion":"2.0.1","updatedAt":"2018-08-06T07:54:21.258Z"}

/***/ }),

/***/ "./ethereum/truffle.js":
/***/ (function(module, exports, __webpack_require__) {

var HDWalletProvider = __webpack_require__("truffle-hdwallet-provider-privkey");

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

/***/ "./helpers/apiToken.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__ = __webpack_require__("./ethereum/api/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__ = __webpack_require__("./ethereum/api/web3Socket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__ = __webpack_require__("./ethereum/api/token.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* reading functions */

function getSummary(_x, _x2) {
  return _getSummary.apply(this, arguments);
}
/* Methods for BasicToken */


function _getSummary() {
  _getSummary = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(tokenAddress, network) {
    var summary, token;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            summary = {};
            _context.prev = 1;
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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

function totalSupply(_x3) {
  return _totalSupply.apply(this, arguments);
}

function _totalSupply() {
  _totalSupply = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(tokenAddress) {
    var token, totalSupply;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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

function balanceOf(_x4, _x5, _x6) {
  return _balanceOf.apply(this, arguments);
}

function _balanceOf() {
  _balanceOf = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(tokenAddress, who, network) {
    var token, balance;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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

function transfer(_x7, _x8, _x9) {
  return _transfer.apply(this, arguments);
}
/*Methods for StandardToken */


function _transfer() {
  _transfer = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(tokenAddress, to, value) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            value = convertToWei(value);
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
            method = token.methods.transfer(to, value);
            _context4.next = 5;
            return sendTx(method);

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

function allowance(_x10, _x11, _x12, _x13) {
  return _allowance.apply(this, arguments);
}

function _allowance() {
  _allowance = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(tokenAddress, owner, spender, network) {
    var token, allowance;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
            _context5.next = 3;
            return token.methods.allowance(owner, spender).call();

          case 3:
            allowance = _context5.sent;
            return _context5.abrupt("return", allowance);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _allowance.apply(this, arguments);
}

function approve(_x14, _x15, _x16) {
  return _approve.apply(this, arguments);
}

function _approve() {
  _approve = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(tokenAddress, spender, value) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            value = convertToWei(value);
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
            method = token.methods.approve(spender, value);
            _context6.next = 5;
            return sendTx(method);

          case 5:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _approve.apply(this, arguments);
}

function increaseApproval(_x17, _x18, _x19) {
  return _increaseApproval.apply(this, arguments);
}

function _increaseApproval() {
  _increaseApproval = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(tokenAddress, spender, addedValue) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            addedValue = convertToWei(addedValue);
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
            method = token.methods.increaseApproval(spender, addedValue);
            _context7.next = 5;
            return sendTx(method);

          case 5:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _increaseApproval.apply(this, arguments);
}

function decreaseApproval(_x20, _x21, _x22) {
  return _decreaseApproval.apply(this, arguments);
}

function _decreaseApproval() {
  _decreaseApproval = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(tokenAddress, spender, subtractedValue) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            subtractedValue = convertToWei(subtractedValue);
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
            method = token.methods.decreaseApproval(spender, subtractedValue);
            _context8.next = 5;
            return sendTx(method);

          case 5:
            response = _context8.sent;
            return _context8.abrupt("return", response);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _decreaseApproval.apply(this, arguments);
}

function transferFrom(_x23, _x24, _x25, _x26) {
  return _transferFrom.apply(this, arguments);
}

function _transferFrom() {
  _transferFrom = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee9(tokenAddress, from, to, value) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            value = convertToWei(value);
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
            method = token.methods.transferFrom(from, to, value);
            _context9.next = 5;
            return sendTx(method);

          case 5:
            response = _context9.sent;
            return _context9.abrupt("return", response);

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _transferFrom.apply(this, arguments);
}

function sendTx(_x27) {
  return _sendTx.apply(this, arguments);
}

function _sendTx() {
  _sendTx = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee10(method) {
    var response, accounts, tx;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            response = {
              error: true,
              message: ""
            };
            _context10.prev = 1;
            _context10.next = 4;
            return getAccounts();

          case 4:
            accounts = _context10.sent;
            _context10.next = 7;
            return method.send({
              from: accounts[0]
            });

          case 7:
            tx = _context10.sent;
            response.error = false;
            response.message = tx.transactionHash;
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](1);
            response.message = _context10.t0.message.split("\n")[0];

          case 15:
            return _context10.abrupt("return", response);

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this, [[1, 12]]);
  }));
  return _sendTx.apply(this, arguments);
}

function getAccounts() {
  return _getAccounts.apply(this, arguments);
}

function _getAccounts() {
  _getAccounts = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee11() {
    var accounts;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].eth.getAccounts();

          case 2:
            accounts = _context11.sent;
            return _context11.abrupt("return", accounts);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _getAccounts.apply(this, arguments);
}

function convertToEther(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].utils.fromWei(value, 'ether');
}

function convertToWei(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].utils.toWei(value);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  totalSupply: totalSupply,
  balanceOf: balanceOf,
  transfer: transfer,
  getSummary: getSummary,
  convertToEther: convertToEther,
  getAccounts: getAccounts,
  allowance: allowance,
  approve: approve,
  increaseApproval: increaseApproval,
  decreaseApproval: decreaseApproval,
  sendTx: sendTx,
  transferFrom: transferFrom
});

/***/ }),

/***/ "./helpers/solver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral__ = __webpack_require__("numeral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_numeral__);


function formatNumber(value) {
  return __WEBPACK_IMPORTED_MODULE_0_numeral___default()(value).format('0,0');
}

function isAddressValid(address) {
  var addressRE = /^0x[a-fA-F0-9]{40}$/;
  return address.match(addressRE);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  formatNumber: formatNumber,
  isAddressValid: isAddressValid
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_solver__ = __webpack_require__("./helpers/solver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_apiToken__ = __webpack_require__("./helpers/apiToken.js");

var _jsxFileName = "E:\\Ethereum\\TokenCreator\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var InsertTokenAddress =
/*#__PURE__*/
function (_Component) {
  _inherits(InsertTokenAddress, _Component);

  function InsertTokenAddress() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, InsertTokenAddress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = InsertTokenAddress.__proto__ || Object.getPrototypeOf(InsertTokenAddress)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: "",
        errroMessage: "",
        network: '4'
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
          var _this$state, tokenAddress, network, summary;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  _this$state = _this.state, tokenAddress = _this$state.tokenAddress, network = _this$state.network;
                  tokenAddress = tokenAddress.trim();

                  if (!__WEBPACK_IMPORTED_MODULE_5__helpers_solver__["a" /* default */].isAddressValid(tokenAddress)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 6;
                  return __WEBPACK_IMPORTED_MODULE_6__helpers_apiToken__["a" /* default */].getSummary(tokenAddress, network);

                case 6:
                  summary = _context.sent;
                  typeof summary.name == 'undefined' ? _this.setState({
                    errroMessage: "Contract not found"
                  }) : __WEBPACK_IMPORTED_MODULE_4__routes__["Router"].pushRoute("/token/view/".concat(tokenAddress, "/").concat(network));
                  _context.next = 11;
                  break;

                case 10:
                  _this.setState({
                    errroMessage: "Not valid eth address"
                  });

                case 11:
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
    }), _temp));
  }

  _createClass(InsertTokenAddress, [{
    key: "renderIndex",
    value: function renderIndex() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        className: "mainIndex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
        as: "h1",
        id: "indexHeader",
        block: true,
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "ERC20 TOKEN INTERFACE"));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this2 = this;

      var options = [{
        key: 'rinkeby',
        text: 'Rinkeby eth//: ',
        value: '4'
      }, {
        key: 'main',
        text: 'Main eth//: ',
        value: '1'
      }];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        className: "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        className: "indexForm",
        onSubmit: this.onSubmit,
        error: !!this.state.errroMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "index",
        label: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dropdown"], {
          defaultValue: "4",
          options: options,
          onChange: function onChange(e, result) {
            _this2.setState({
              network: result.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }),
        labelPosition: "left",
        action: {
          icon: 'search'
        },
        onChange: function onChange(event) {
          return _this2.setState({
            tokenAddress: event.target.value,
            errroMessage: ''
          });
        },
        placeholder: "0x...  Enter the ERC20 token contract address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errroMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })));
    } // 

  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.renderIndex(), this.renderInput()));
    }
  }]);

  return InsertTokenAddress;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InsertTokenAddress);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('./', '/index'); //.add('/token/view/:tokenAddress/:network', '/token/view')

module.exports = routes;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "numeral":
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "truffle-hdwallet-provider-privkey":
/***/ (function(module, exports) {

module.exports = require("truffle-hdwallet-provider-privkey");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map