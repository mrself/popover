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
/******/ 	return __webpack_require__(__webpack_require__.s = "./typescript-demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/popover/index.js":
/*!***************************************!*\
  !*** ./node_modules/popover/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.Popover = __webpack_require__(/*! ./src/js/Popover */ \"./node_modules/popover/src/js/Popover.ts\");\r\n\n\n//# sourceURL=webpack:///./node_modules/popover/index.js?");

/***/ }),

/***/ "./node_modules/popover/src/js/Instance.ts":
/*!*************************************************!*\
  !*** ./node_modules/popover/src/js/Instance.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Instance = /** @class */ (function () {\r\n    function Instance() {\r\n        this.data = [];\r\n    }\r\n    Instance.prototype.getAll = function () {\r\n        return this.data;\r\n    };\r\n    Instance.prototype.add = function (instance) {\r\n        this.data.push(instance);\r\n    };\r\n    return Instance;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instance);\r\n\n\n//# sourceURL=webpack:///./node_modules/popover/src/js/Instance.ts?");

/***/ }),

/***/ "./node_modules/popover/src/js/Popover.ts":
/*!************************************************!*\
  !*** ./node_modules/popover/src/js/Popover.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TriggerType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriggerType */ \"./node_modules/popover/src/js/TriggerType.ts\");\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ \"./node_modules/popover/src/js/State.ts\");\n/* harmony import */ var _Instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instance */ \"./node_modules/popover/src/js/Instance.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\nvar Popover = /** @class */ (function () {\r\n    function Popover() {\r\n        this.state = _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Closed;\r\n    }\r\n    Popover.register = function () {\r\n        this.instance = new _Instance__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    };\r\n    Popover.setup = function () {\r\n        this.register();\r\n        this.boot();\r\n    };\r\n    Popover.resetRegister = function () {\r\n        this.instance = null;\r\n    };\r\n    Popover.getInstance = function () {\r\n        return this.instance;\r\n    };\r\n    Popover.init = function (options) {\r\n        var inst = new Popover();\r\n        Popover.instance.add(inst);\r\n        inst.setOptions(options);\r\n        inst.run();\r\n        return inst;\r\n    };\r\n    Popover.boot = function () {\r\n        var _this = this;\r\n        $(document).on('click', function (e) { return _this.onDocumentClick(e); });\r\n        var name = Popover.getInitialOptions().name;\r\n        var selector = '.' + name + ':not([data-' + name + '-auto=false])';\r\n        $(selector).each(function (i, el) {\r\n            _this.init({ $el: $(el) });\r\n        });\r\n    };\r\n    Popover.onDocumentClick = function (e) {\r\n        var target = e.target;\r\n        Popover.instance.getAll().forEach(function (inst) {\r\n            if (inst.$el.find(target).length || inst.$el.is(target)) {\r\n                return;\r\n            }\r\n            if (inst.$trigger.find(target).length || inst.$trigger.is(target)) {\r\n                return;\r\n            }\r\n            if (inst.state === _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Opened)\r\n                inst.close();\r\n        });\r\n    };\r\n    Popover.getInitialOptions = function () {\r\n        return {\r\n            name: 'mrpopover',\r\n            hoverDelay: 200,\r\n            triggerType: _TriggerType__WEBPACK_IMPORTED_MODULE_0__[\"TriggerType\"].Click\r\n        };\r\n    };\r\n    Popover.close = function (skip) {\r\n        this.instance.getAll().forEach(function (inst) {\r\n            if (skip.id !== inst.id && inst.state === _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Opened) {\r\n                inst.close();\r\n            }\r\n        });\r\n    };\r\n    Popover.prototype.getId = function () {\r\n        return this.id;\r\n    };\r\n    Popover.prototype.setOptions = function (options) {\r\n        this.options = __assign(__assign({}, Popover.getInitialOptions()), options);\r\n        var dataOptions = this.options.$el.data(this.options.name);\r\n        this.options = __assign(__assign({}, this.options), dataOptions);\r\n    };\r\n    Popover.prototype.run = function () {\r\n        this.$el = this.options.$el;\r\n        this.id = this.$el.attr('id');\r\n        this.defineTrigger();\r\n        this.initEventByTrigger();\r\n    };\r\n    Popover.prototype.initEventByTrigger = function () {\r\n        if (this.options.triggerType === _TriggerType__WEBPACK_IMPORTED_MODULE_0__[\"TriggerType\"].Click) {\r\n            this.initClickEvent();\r\n        }\r\n        else {\r\n            this.initHoverEvent();\r\n        }\r\n    };\r\n    Popover.prototype.initClickEvent = function () {\r\n        var _this = this;\r\n        this.$trigger.on('click', function (e) {\r\n            e.preventDefault();\r\n            _this.toggle();\r\n        });\r\n    };\r\n    Popover.prototype.initHoverEvent = function () {\r\n        var _this = this;\r\n        if (!this.$trigger.find(this.$el).length)\r\n            this.$trigger = this.$trigger.add(this.$el);\r\n        this.$trigger.on('mouseenter', function () { return _this.onMouseEnter(); })\r\n            .on('mouseleave', function () { return _this.onMouseLeave(); });\r\n    };\r\n    Popover.prototype.toggle = function (state) {\r\n        state = typeof state === 'undefined' ? this.getOppositeState() : state;\r\n        Popover.close(this);\r\n        if (state)\r\n            this.open();\r\n        else\r\n            this.close();\r\n    };\r\n    Popover.prototype.getOppositeState = function () {\r\n        return this.state === _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Opened ? _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Closed : _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Opened;\r\n    };\r\n    Popover.prototype.open = function () {\r\n        this.state = _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Opened;\r\n        this.$trigger.addClass(this.makeTriggerName() + '--active');\r\n        this.$el.addClass(this.options.name + '--open');\r\n        this.$el.trigger('mrpopover/open', {\r\n            instance: this\r\n        });\r\n    };\r\n    Popover.prototype.close = function () {\r\n        clearTimeout(this.timeoutId);\r\n        this.state = _State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Closed;\r\n        this.$trigger.removeClass(this.makeTriggerName() + '--active');\r\n        this.$el.removeClass(this.options.name + '--open');\r\n        this.$el.trigger('mrpopover/close', {\r\n            instance: this\r\n        });\r\n    };\r\n    Popover.prototype.onMouseEnter = function () {\r\n        clearTimeout(this.timeoutId);\r\n        this.toggle(_State__WEBPACK_IMPORTED_MODULE_1__[\"State\"].Opened);\r\n    };\r\n    Popover.prototype.onMouseLeave = function () {\r\n        this.timeoutId = setTimeout($.proxy(this, 'close'), this.options.hoverDelay);\r\n    };\r\n    Popover.prototype.defineTrigger = function () {\r\n        var triggerName = this.makeTriggerName();\r\n        this.$trigger = this.findTriggerById();\r\n        if (!this.$trigger.length) {\r\n            if (this.options.triggerType === _TriggerType__WEBPACK_IMPORTED_MODULE_0__[\"TriggerType\"].Click)\r\n                throw new Error('Trigger type cannot be \"click\" when trigger contains a popup');\r\n            this.$trigger = this.$el.closest('.' + triggerName);\r\n        }\r\n        this.$trigger.addClass(triggerName);\r\n    };\r\n    Popover.prototype.getTrigger = function () {\r\n        return this.$trigger;\r\n    };\r\n    Popover.prototype.getState = function () {\r\n        return this.state;\r\n    };\r\n    Popover.prototype.findTriggerById = function () {\r\n        return $('[data-' + this.options.name + '-target=' + this.id + ']');\r\n    };\r\n    Popover.prototype.makeTriggerName = function () {\r\n        return this.options.name + '__trigger';\r\n    };\r\n    return Popover;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popover);\r\n\n\n//# sourceURL=webpack:///./node_modules/popover/src/js/Popover.ts?");

/***/ }),

/***/ "./node_modules/popover/src/js/State.ts":
/*!**********************************************!*\
  !*** ./node_modules/popover/src/js/State.ts ***!
  \**********************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\nvar State;\r\n(function (State) {\r\n    State[State[\"Opened\"] = 1] = \"Opened\";\r\n    State[State[\"Closed\"] = 0] = \"Closed\";\r\n})(State || (State = {}));\r\n\n\n//# sourceURL=webpack:///./node_modules/popover/src/js/State.ts?");

/***/ }),

/***/ "./node_modules/popover/src/js/TriggerType.ts":
/*!****************************************************!*\
  !*** ./node_modules/popover/src/js/TriggerType.ts ***!
  \****************************************************/
/*! exports provided: TriggerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TriggerType\", function() { return TriggerType; });\nvar TriggerType;\r\n(function (TriggerType) {\r\n    TriggerType[\"Click\"] = \"CLICK\";\r\n    TriggerType[\"Hover\"] = \"HOVER\";\r\n})(TriggerType || (TriggerType = {}));\r\n\n\n//# sourceURL=webpack:///./node_modules/popover/src/js/TriggerType.ts?");

/***/ }),

/***/ "./typescript-demo.ts":
/*!****************************!*\
  !*** ./typescript-demo.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popover */ \"./node_modules/popover/index.js\");\n/* harmony import */ var popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(popover__WEBPACK_IMPORTED_MODULE_0__);\n\r\npopover__WEBPACK_IMPORTED_MODULE_0___default.a.boot();\r\n\n\n//# sourceURL=webpack:///./typescript-demo.ts?");

/***/ })

/******/ });