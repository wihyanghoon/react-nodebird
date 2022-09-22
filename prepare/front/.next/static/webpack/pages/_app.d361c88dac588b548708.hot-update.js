webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(loadMyInfo),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(getUser),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(getFollwer),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(getFollowing),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(unFollow),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(chanegeNick),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(removeFollower),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
    _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnFollow),
    _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(watchGetUser),
    _marked18 = /*#__PURE__*/_regeneratorRuntime().mark(watchGetFollow),
    _marked19 = /*#__PURE__*/_regeneratorRuntime().mark(watchGetFollowing),
    _marked20 = /*#__PURE__*/_regeneratorRuntime().mark(watchChanegeNick),
    _marked21 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemoveFollower),
    _marked22 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadMyInfo),
    _marked23 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);





function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function loadMyInfo() {
  var result;
  return _regeneratorRuntime().wrap(function loadMyInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MYINFO_SUCCESSS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MYINFO_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user/".concat(data));
}

function getUser() {
  var result;
  return _regeneratorRuntime().wrap(function getUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getUserAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESSS"],
            data: result.data
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function getFollwerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/follower', data);
}

function getFollwer(action) {
  var result;
  return _regeneratorRuntime().wrap(function getFollwer$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getFollwerAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function getFollowingAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/following', data);
}

function getFollowing(action) {
  var result;
  return _regeneratorRuntime().wrap(function getFollowing$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getFollowingAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_SUCESSS"],
            data: result.data
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context5.t0.response.data
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);

        case 3:
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);

        case 3:
          result = _context7.sent;
          console.log(result);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context7.next = 14;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context7.t0.response.data
          });

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 9]]);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _regeneratorRuntime().wrap(function follow$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context8.t0.response.data
          });

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unFollow(action) {
  var result;
  return _regeneratorRuntime().wrap(function unFollow$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unFollowAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return console.log(result);

        case 6:
          _context9.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: result.data
          });

        case 8:
          _context9.next = 14;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          _context9.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context9.t0.response.data
          });

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function chanegeNickAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function chanegeNick(action) {
  var result;
  return _regeneratorRuntime().wrap(function chanegeNick$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(chanegeNickAPI, action.data);

        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return console.log(result);

        case 6:
          _context10.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_SUCCESS"],
            data: result.data
          });

        case 8:
          _context10.next = 14;
          break;

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          _context10.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_FAILURE"],
            error: _context10.t0.response.data
          });

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 10]]);
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/".concat(data, "/following"));
}

function removeFollower(action) {
  var result;
  return _regeneratorRuntime().wrap(function removeFollower$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context11.sent;
          console.log(result);
          _context11.next = 7;
          return console.log(result);

        case 7:
          _context11.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 9:
          _context11.next = 15;
          break;

        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](0);
          _context11.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
            error: _context11.t0.response.data
          });

        case 15:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 11]]);
}

function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchUnFollow() {
  return _regeneratorRuntime().wrap(function watchUnFollow$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchGetUser() {
  return _regeneratorRuntime().wrap(function watchGetUser$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], getUser);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchGetFollow() {
  return _regeneratorRuntime().wrap(function watchGetFollow$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_REQUEST"], getFollwer);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchGetFollowing() {
  return _regeneratorRuntime().wrap(function watchGetFollowing$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_REQUEST"], getFollowing);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchChanegeNick() {
  return _regeneratorRuntime().wrap(function watchChanegeNick$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_REQUEST"], chanegeNick);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchRemoveFollower() {
  return _regeneratorRuntime().wrap(function watchRemoveFollower$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchLoadMyInfo() {
  return _regeneratorRuntime().wrap(function watchLoadMyInfo$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MYINFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChanegeNick), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetFollowing)]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2FkTXlJbmZvIiwiZ2V0VXNlciIsImdldEZvbGx3ZXIiLCJnZXRGb2xsb3dpbmciLCJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImZvbGxvdyIsInVuRm9sbG93IiwiY2hhbmVnZU5pY2siLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hHZXRVc2VyIiwid2F0Y2hHZXRGb2xsb3ciLCJ3YXRjaEdldEZvbGxvd2luZyIsIndhdGNoQ2hhbmVnZU5pY2siLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkTXlJbmZvIiwidXNlclNhZ2EiLCJsb2FkTXlJbmZvQVBJIiwiYXhpb3MiLCJnZXQiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfTVlJTkZPX1NVQ0NFU1NTIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJMT0FEX01ZSU5GT19GQUlMVVJFIiwiZXJyb3IiLCJyZXNwb25zZSIsImdldFVzZXJBUEkiLCJhY3Rpb24iLCJMT0FEX1VTRVJfU1VDQ0VTU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsImdldEZvbGx3ZXJBUEkiLCJMT0FEX0ZPTExPV0VSX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSX0ZBSUxVUkUiLCJnZXRGb2xsb3dpbmdBUEkiLCJMT0FEX0ZPTExXSU5HX1NVQ0VTU1MiLCJMT0FEX0ZPTExXSU5HX0ZBSUxVUkUiLCJsb2dJbkFQSSIsInBvc3QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwicGF0Y2giLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5Gb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImNoYW5lZ2VOaWNrQVBJIiwibmlja25hbWUiLCJDSEFOR0VfTklDS19TVUNDRVNTIiwiQ0hBTkdFX05JQ0tfRkFJTFVSRSIsInJlbW92ZUZvbGxvd2VyQVBJIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUl9SRVFVRVNUIiwiTE9BRF9GT0xMV0lOR19SRVFVRVNUIiwiQ0hBTkdFX05JQ0tfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiTE9BRF9NWUlORk9fUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0Esb0o7O3NEQXlDVUEsVTt1REFxQkFDLE87dURBbUJBQyxVO3VEQW1CQUMsWTt1REFvQkFDLEs7dURBbUJBQyxNO3VEQXFCQUMsTTt1REFtQkFDLE07dURBbUJBQyxRO3dEQW9CQUMsVzt3REFvQkFDLGM7d0RBaUJBQyxVO3dEQUlBQyxXO3dEQUlBQyxXO3dEQUlBQyxXO3dEQUlBQyxhO3dEQUlBQyxZO3dEQUlBQyxjO3dEQUlBQyxpQjt3REFJQUMsZ0I7d0RBSUFDLG1CO3dEQUlBQyxlO3dEQUllQyxROztBQTVTekI7QUFDQTtBQUNBOztBQW9DQSxTQUFTQyxhQUFULEdBQXlCO0VBQ3JCLE9BQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxPQUFWLENBQVA7QUFDSDs7QUFFRCxTQUFVekIsVUFBVjtFQUFBO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBRXVCLE9BQU0wQiwrREFB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QUQsQ0FSRSxFQVNOZ0UsK0RBQUksQ0FBQ3BFLFlBQUQsQ0FURSxFQVVOb0UsK0RBQUksQ0FBQ2pFLGdCQUFELENBVkUsRUFXTmlFLCtEQUFJLENBQUNuRSxjQUFELENBWEUsRUFZTm1FLCtEQUFJLENBQUNsRSxpQkFBRCxDQVpFLENBQUQsQ0FBVDs7UUFEVztRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQzNjFjODhkYWM1ODhiNTQ4NzA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSwgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIEZPTExPV19SRVFVRVNULFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1NTLFxyXG4gICAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICBDSEFOR0VfTklDS19SRVFVRVNULFxyXG4gICAgQ0hBTkdFX05JQ0tfU1VDQ0VTUyxcclxuICAgIENIQU5HRV9OSUNLX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0ZPTExXSU5HX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExXSU5HX1NVQ0VTU1MsXHJcbiAgICBMT0FEX0ZPTExXSU5HX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZSU5GT19SRVFVRVNULFxyXG4gICAgTE9BRF9NWUlORk9fU1VDQ0VTU1MsXHJcbiAgICBMT0FEX01ZSU5GT19GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWUlORk9fU1VDQ0VTU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlJTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRVc2VyKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGdldFVzZXJBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvbGx3ZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Rm9sbHdlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRGb2xsd2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9sbG93aW5nQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRGb2xsb3dpbmcoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZ2V0Rm9sbG93aW5nQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExXSU5HX1NVQ0VTU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMV0lOR19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSAsIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bkZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bkZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmVnZU5pY2tBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHsgbmlja25hbWUgOiBkYXRhIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZWdlTmljayhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZWdlTmlja0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93aW5nYClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5Gb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBnZXRVc2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hHZXRGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJfUkVRVUVTVCwgZ2V0Rm9sbHdlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoR2V0Rm9sbG93aW5nKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExXSU5HX1JFUVVFU1QsIGdldEZvbGxvd2luZylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmVnZU5pY2soKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLX1JFUVVFU1QsIGNoYW5lZ2VOaWNrKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWUlORk9fUkVRVUVTVCwgbG9hZE15SW5mbylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEdldFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZWdlTmljayksXHJcbiAgICAgICAgZm9yayh3YXRjaEdldEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaEdldEZvbGxvd2luZyksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==