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

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(getUser),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(getFollwer),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(getFollowing),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(unFollow),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(chanegeNick),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(removeFollower),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnFollow),
    _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(watchGetUser),
    _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(watchGetFollow),
    _marked18 = /*#__PURE__*/_regeneratorRuntime().mark(watchGetFollowing),
    _marked19 = /*#__PURE__*/_regeneratorRuntime().mark(watchChanegeNick),
    _marked20 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemoveFollower),
    _marked21 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);





function getUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/login');
}

function getUser(action) {
  var result;
  return _regeneratorRuntime().wrap(function getUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getUserAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESSS"],
            data: result.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getFollwerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/follower', data);
}

function getFollwer(action) {
  var result;
  return _regeneratorRuntime().wrap(function getFollwer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getFollwerAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_SUCCESS"],
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_FAILURE"],
            error: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function getFollowingAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/following', data);
}

function getFollowing(action) {
  var result;
  return _regeneratorRuntime().wrap(function getFollowing$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getFollowingAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_SUCESSS"],
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context5.t0.response.data
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);

        case 3:
          result = _context6.sent;
          console.log(result);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context6.next = 14;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context6.t0.response.data
          });

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 9]]);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _regeneratorRuntime().wrap(function follow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context7.t0.response.data
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unFollow(action) {
  var result;
  return _regeneratorRuntime().wrap(function unFollow$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unFollowAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return console.log(result);

        case 6:
          _context8.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: result.data
          });

        case 8:
          _context8.next = 14;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context8.t0.response.data
          });

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 10]]);
}

function chanegeNickAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function chanegeNick(action) {
  var result;
  return _regeneratorRuntime().wrap(function chanegeNick$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(chanegeNickAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return console.log(result);

        case 6:
          _context9.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_SUCCESS"],
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_FAILURE"],
            error: _context9.t0.response.data
          });

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/".concat(data, "/following"));
}

function removeFollower(action) {
  var result;
  return _regeneratorRuntime().wrap(function removeFollower$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context10.sent;
          console.log(result);
          _context10.next = 7;
          return console.log(result);

        case 7:
          _context10.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 9:
          _context10.next = 15;
          break;

        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          _context10.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
            error: _context10.t0.response.data
          });

        case 15:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 11]]);
}

function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchUnFollow() {
  return _regeneratorRuntime().wrap(function watchUnFollow$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchGetUser() {
  return _regeneratorRuntime().wrap(function watchGetUser$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], getUser);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchGetFollow() {
  return _regeneratorRuntime().wrap(function watchGetFollow$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_REQUEST"], getFollwer);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchGetFollowing() {
  return _regeneratorRuntime().wrap(function watchGetFollowing$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_REQUEST"], getFollowing);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchChanegeNick() {
  return _regeneratorRuntime().wrap(function watchChanegeNick$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_REQUEST"], chanegeNick);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchRemoveFollower() {
  return _regeneratorRuntime().wrap(function watchRemoveFollower$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChanegeNick), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetFollowing)]);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJnZXRVc2VyIiwiZ2V0Rm9sbHdlciIsImdldEZvbGxvd2luZyIsImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwiZm9sbG93IiwidW5Gb2xsb3ciLCJjaGFuZWdlTmljayIsInJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaEdldFVzZXIiLCJ3YXRjaEdldEZvbGxvdyIsIndhdGNoR2V0Rm9sbG93aW5nIiwid2F0Y2hDaGFuZWdlTmljayIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ1c2VyU2FnYSIsImdldFVzZXJBUEkiLCJheGlvcyIsImdldCIsImFjdGlvbiIsImNhbGwiLCJkYXRhIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfVVNFUl9TVUNDRVNTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiZXJyb3IiLCJyZXNwb25zZSIsImdldEZvbGx3ZXJBUEkiLCJMT0FEX0ZPTExPV0VSX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSX0ZBSUxVUkUiLCJnZXRGb2xsb3dpbmdBUEkiLCJMT0FEX0ZPTExXSU5HX1NVQ0VTU1MiLCJMT0FEX0ZPTExXSU5HX0ZBSUxVUkUiLCJsb2dJbkFQSSIsInBvc3QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiY29uc29sZSIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsImxvZyIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsInBhdGNoIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuRm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJjaGFuZWdlTmlja0FQSSIsIm5pY2tuYW1lIiwiQ0hBTkdFX05JQ0tfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLX0ZBSUxVUkUiLCJyZW1vdmVGb2xsb3dlckFQSSIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJfUkVRVUVTVCIsIkxPQURfRk9MTFdJTkdfUkVRVUVTVCIsIkNIQU5HRV9OSUNLX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0Esb0o7O3NEQXNDVUEsTzt1REFtQkFDLFU7dURBbUJBQyxZO3VEQW9CQUMsSzt1REFtQkFDLE07dURBcUJBQyxNO3VEQW1CQUMsTTt1REFtQkFDLFE7dURBb0JBQyxXO3dEQW9CQUMsYzt3REFpQkFDLFU7d0RBSUFDLFc7d0RBSUFDLFc7d0RBSUFDLFc7d0RBSUFDLGE7d0RBSUFDLFk7d0RBSUFDLGM7d0RBSUFDLGlCO3dEQUlBQyxnQjt3REFJQUMsbUI7d0RBSWVDLFE7O0FBaFJ6QjtBQUNBO0FBQ0E7O0FBaUNBLFNBQVNDLFVBQVQsR0FBc0I7RUFDbEIsT0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGFBQVYsQ0FBUDtBQUNIOztBQUVELFNBQVV2QixPQUFWLENBQWtCd0IsTUFBbEI7RUFBQTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQTtVQUV1QixPQUFNQywrREFBSSxDQUFDSixVQUFELEVBQWFHLE1BQU0sQ0FBQ0UsSUFBcEIsQ0FBVjs7UUFGdkI7VUFFY0MsTUFGZDtVQUFBO1VBR1EsT0FBTUMsOERBQUcsQ0FBQztZQUNOQyxJQUFJLEVBQUVDLGlFQURBO1lBRU5KLElBQUks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LENBRkUsRUFHTm1FLCtEQUFJLENBQUNuRSxXQUFELENBSEUsRUFJTm1FLCtEQUFJLENBQUNsRSxXQUFELENBSkUsRUFLTmtFLCtEQUFJLENBQUNqRSxXQUFELENBTEUsRUFNTmlFLCtEQUFJLENBQUNoRSxhQUFELENBTkUsRUFPTmdFLCtEQUFJLENBQUMzRCxtQkFBRCxDQVBFLEVBUU4yRCwrREFBSSxDQUFDL0QsWUFBRCxDQVJFLEVBU04rRCwrREFBSSxDQUFDNUQsZ0JBQUQsQ0FURSxFQVVONEQsK0RBQUksQ0FBQzlELGNBQUQsQ0FWRSxFQVdOOEQsK0RBQUksQ0FBQzdELGlCQUFELENBWEUsQ0FBRCxDQUFUOztRQURXO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDJlMmQ0NGQ4NTk4NjUzNzVjMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIENIQU5HRV9OSUNLX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS19TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XRVJfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTFdJTkdfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTFdJTkdfU1VDRVNTUyxcclxuICAgIExPQURfRk9MTFdJTkdfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9naW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0VXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRVc2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb2xsd2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VyJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEZvbGx3ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZ2V0Rm9sbHdlckFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvbGxvd2luZ0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmcnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Rm9sbG93aW5nKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGdldEZvbGxvd2luZ0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMV0lOR19TVUNFU1NTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTFdJTkdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEkgLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5lZ2VOaWNrQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lIDogZGF0YSB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmVnZU5pY2soYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmVnZU5pY2tBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93aW5nYClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5Gb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBnZXRVc2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hHZXRGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJfUkVRVUVTVCwgZ2V0Rm9sbHdlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoR2V0Rm9sbG93aW5nKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExXSU5HX1JFUVVFU1QsIGdldEZvbGxvd2luZylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmVnZU5pY2soKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLX1JFUVVFU1QsIGNoYW5lZ2VOaWNrKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEdldFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZWdlTmljayksXHJcbiAgICAgICAgZm9yayh3YXRjaEdldEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaEdldEZvbGxvd2luZyksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==