webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(likePost),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(UnLikePost),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(upLoadImages),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchRetweet),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchCommentPost),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnLiketPost),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(watchUpLoadImages),
    _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);







function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post', data);
}

function addPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return console.log(result);

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 10:
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 12]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/post/".concat(data));
}

function removePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function removePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(action.data);
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);

        case 4:
          result = _context2.sent;
          _context2.next = 7;
          return console.log(typeof result.data.PostId);

        case 7:
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
            data: result.data
          });

        case 9:
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_TO_ME"],
            data: result.data.PostId
          });

        case 11:
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"],
            data: _context2.t0.response.data
          });

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 13]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"],
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"],
            data: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/posts', data);
}

function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"],
            data: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("/post/".concat(data, "/like "), data);
}

function likePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"],
            data: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function UnLikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/post/".concat(data, "/like"));
}

_c = UnLikePostAPI;

function UnLikePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function UnLikePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(UnLikePostAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 13;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"],
            data: _context6.t0.response.data
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

_c2 = UnLikePost;

function upLoadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post/images', data);
}

function upLoadImages(action) {
  var result;
  return _regeneratorRuntime().wrap(function upLoadImages$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(upLoadImagesAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"],
            data: _context7.t0.response.data
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchRetweet() {
  return _regeneratorRuntime().wrap(function watchRetweet$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], retweet);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchCommentPost() {
  return _regeneratorRuntime().wrap(function watchCommentPost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchUnLiketPost() {
  return _regeneratorRuntime().wrap(function watchUnLiketPost$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"], UnLikePost);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchUpLoadImages() {
  return _regeneratorRuntime().wrap(function watchUpLoadImages$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"], upLoadImages);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLiketPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUpLoadImages)]);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

var _c, _c2;

$RefreshReg$(_c, "UnLikePostAPI");
$RefreshReg$(_c2, "UnLikePost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHMiLCJsaWtlUG9zdCIsIlVuTGlrZVBvc3QiLCJ1cExvYWRJbWFnZXMiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQ29tbWVudFBvc3QiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2V0UG9zdCIsIndhdGNoVXBMb2FkSW1hZ2VzIiwicG9zdFNhZ2EiLCJhZGRQb3N0QVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiZXJyb3IiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0QVBJIiwiUG9zdElkIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImxvYWRQb3N0c0FQSSIsImdldCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVW5MaWtlUG9zdEFQSSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwidXBMb2FkSW1hZ2VzQVBJIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwidGFrZUxhdGVzdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJyZXR3ZWV0IiwidGhyb3R0bGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0Esb0o7O3NEQWtCVUEsTzt1REF5QkFDLFU7dURBeUJBQyxVO3VEQW1CQUMsUzt1REFxQkFDLFE7dURBb0JBQyxVO3VEQW9CQUMsWTt1REFnQkFDLFk7dURBSUFDLGM7d0RBSUFDLFk7d0RBSUFDLGU7d0RBSUFDLGdCO3dEQUlBQyxhO3dEQUlBQyxnQjt3REFJQUMsaUI7d0RBS2VDLFE7O0FBdE16QjtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0VBQ3RCLE9BQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxPQUFYLEVBQW9CRixJQUFwQixDQUFQO0FBQ0g7O0FBRUQsU0FBVWpCLE9BQVYsQ0FBa0JvQixNQUFsQjtFQUFBO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBRXVCLE9BQU1DLCtEQUFJLENBQUNMLFVBQUQsRUFBYUksTUFBTSxDQUFDSCxJQUFwQixDQUFWOztRQUZ2QjtVQUVjSyxNQUZkO1VBQUE7VUFHUSxPQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQUFOOztRQUhSO1VBQUE7VUFJUSxPQUFNRyw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRUMsK0RBREE7WUFFTlYsSUFBSSxFQUFFSyxNQUFNLENBQUNMO1VBRlAsQ0FBRCxDQUFUOztRQUpSO1VBQUE7VUFRUSxPQUFNUSw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRUUsNkRBREE7WUFFTlgsSUFBSSxFQUFFSyxNQUFNLENBQUNMLElBQVAsQ0FBWVk7VUFGWixDQUFELENBQVQ7O1FBUlI7VUFBQTtVQUFBOztRQUFBO1VBQUE7VUFBQTtVQWFRTixPQUFPLENBQUNPLEtBQVI7VUFiUjtVQWNRLE9BQU1MLDhEQUFHLENBQUM7WUFDTkMsSUFBSSxFQUFFSywrREFEQTtZQUVORCxLQUFLLEVBQUUsWUFBSUUsUUFBSixDQUFhZjtVQUZkLENBQUQsQ0FBVDs7UUFkUjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFxQkEsU0FBU2dCLGFBQVQsQ0FBdUJoQixJQUF2QixFQUE2QjtFQUN6QixPQUFPQyw0Q0FBSyxVQUFMLGlCQUFzQkQsSUFBdEIsRUFBUDtBQUNIOztBQUVELFNBQVVoQixVQUFWLENBQXFCbUIsTUFBckI7RUFBQTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQ0lHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNILElBQW5CO1VBREo7VUFBQTtVQUd1QixPQUFNSSwrREFBSSxDQUFDWSxhQUFELEVBQWdCYixNQUFNLENBQUNILElBQXZCLENBQVY7O1FBSHZCO1VBR2NLLE1BSGQ7VUFBQTtVQUlRLE9BQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQU9GLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZaUIsTUFBL0IsQ0FBTjs7UUFKUjtVQUFBO1VBS1EsT0FBTVQsOERBQUcsQ0FBQztZQUNOQyxJQUFJLEVBQUVTLGtFQURBO1lBRU5sQixJQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7VUFGUCxDQUFELENBQVQ7O1FBTFI7VUFBQTtVQVNRLE9BQU1RLDhEQUFHLENBQUM7WUFDTkMsSUFBSSxFQUFFVSxnRUFEQTtZQUVObkIsSUFBSSxFQUFFSyxNQUFNLENBQUNMLElBQVAsQ0FBWWlCO1VBRlosQ0FBRCxDQUFUOztRQVRSO1VBQUE7VUFBQTs7UUFBQTtVQUFBO1VBQUE7VUFBQTtVQWNRLE9BQU1ULDhEQUFHLENBQUM7WUFDTkMsSUFBSSxFQUFFVyxrRUFEQTtZQUVOcEIsSUFBSSxFQUFFLGFBQUllLFFBQUosQ0FBYWY7VUFGYixDQUFELENBQVQ7O1FBZFI7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBcUJBLFNBQVNxQixhQUFULENBQXVCckIsSUFBdkIsRUFBNkI7RUFDekIsT0FBT0MsNENBQUssQ0FBQ0MsSUFBTixpQkFBb0JGLElBQUksQ0FBQ3NCLE1BQXpCLGVBQTJDdEIsSUFBM0MsQ0FBUDtBQUNIOztBQUVELFNBQVVmLFVBQVYsQ0FBcUJrQixNQUFyQjtFQUFBO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBRXVCLE9BQU1DLCtEQUFJLENBQUNpQixhQUFELEVBQWdCbEIsTUFBTSxDQUFDSCxJQUF2QixDQUFWOztRQUZ2QjtVQUVjSyxNQUZkO1VBQUE7VUFHUSxPQUFNRyw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRWMsa0VBREE7WUFFTnZCLElBQUksRUFBRUssTUFBTSxDQUFDTDtVQUZQLENBQUQsQ0FBVDs7UUFIUjtVQUFBO1VBQUE7O1FBQUE7VUFBQTtVQUFBO1VBQUE7VUFRUSxPQUFNUSw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRWUsa0VBREE7WUFFTnhCLElBQUksRUFBRSxhQUFJZSxRQUFKLENBQWFmO1VBRmIsQ0FBRCxDQUFUOztRQVJSO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQWVBLFNBQVN5QixZQUFULENBQXNCekIsSUFBdEIsRUFBNEI7RUFDeEIsT0FBT0MsNENBQUssQ0FBQ3lCLEdBQU4sQ0FBVSxRQUFWLEVBQW9CMUIsSUFBcEIsQ0FBUDtBQUNIOztBQUVELFNBQVVkLFNBQVYsQ0FBb0JpQixNQUFwQjtFQUFBO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBRXVCLE9BQU1DLCtEQUFJLENBQUNxQixZQUFELEVBQWV0QixNQUFNLENBQUNILElBQXRCLENBQVY7O1FBRnZCO1VBRWNLLE1BRmQ7VUFBQTtVQUlRLE9BQU1HLDhEQUFHLENBQUM7WUFDTkMsSUFBSSxFQUFFa0IsaUVBREE7WUFFTjNCLElBQUksRUFBRUssTUFBTSxDQUFDTDtVQUZQLENBQUQsQ0FBVDs7UUFKUjtVQUFBO1VBQUE7O1FBQUE7VUFBQTtVQUFBO1VBU1FNLE9BQU8sQ0FBQ08sS0FBUjtVQVRSO1VBVVEsT0FBTUwsOERBQUcsQ0FBQztZQUNOQyxJQUFJLEVBQUVtQixpRUFEQTtZQUVONUIsSUFBSSxFQUFFLGFBQUllLFFBQUosQ0FBYWY7VUFGYixDQUFELENBQVQ7O1FBVlI7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBaUJBLFNBQVM2QixXQUFULENBQXFCN0IsSUFBckIsRUFBMkI7RUFDdkIsT0FBT0MsNENBQUssQ0FBQzZCLEtBQU4saUJBQXFCOUIsSUFBckIsYUFBbUNBLElBQW5DLENBQVA7QUFDSDs7QUFFRCxTQUFVYixRQUFWLENBQW1CZ0IsTUFBbkI7RUFBQTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQTtVQUV1QixPQUFNQywrREFBSSxDQUFDeUIsV0FBRCxFQUFjMUIsTUFBTSxDQUFDSCxJQUFyQixDQUFWOztRQUZ2QjtVQUVjSyxNQUZkO1VBQUE7VUFHUSxPQUFNRyw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRXNCLGdFQURBO1lBRU4vQixJQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7VUFGUCxDQUFELENBQVQ7O1FBSFI7VUFBQTtVQUFBOztRQUFBO1VBQUE7VUFBQTtVQVFRTSxPQUFPLENBQUNPLEtBQVI7VUFSUjtVQVNRLE9BQU1MLDhEQUFHLENBQUM7WUFDTkMsSUFBSSxFQUFFdUIsZ0VBREE7WUFFTmhDLElBQUksRUFBRSxhQUFJZSxRQUFKLENBQWFmO1VBRmIsQ0FBRCxDQUFUOztRQVRSO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQWdCQSxTQUFTaUMsYUFBVCxDQUF1QmpDLElBQXZCLEVBQTZCO0VBQ3pCLE9BQU9DLDRDQUFLLFVBQUwsaUJBQXNCRCxJQUF0QixXQUFQO0FBQ0g7O0tBRlFpQyxhOztBQUlULFNBQVU3QyxVQUFWLENBQXFCZSxNQUFyQjtFQUFBO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBRXVCLE9BQU1DLCtEQUFJLENBQUM2QixhQUFELEVBQWdCOUIsTUFBTSxDQUFDSCxJQUF2QixDQUFWOztRQUZ2QjtVQUVjSyxNQUZkO1VBQUE7VUFHUSxPQUFNRyw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRXlCLGtFQURBO1lBRU5sQyxJQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7VUFGUCxDQUFELENBQVQ7O1FBSFI7VUFBQTtVQUFBOztRQUFBO1VBQUE7VUFBQTtVQVFRTSxPQUFPLENBQUNPLEtBQVI7VUFSUjtVQVNRLE9BQU1MLDhEQUFHLENBQUM7WUFDTkMsSUFBSSxFQUFFMEIsa0VBREE7WUFFTm5DLElBQUksRUFBRSxhQUFJZSxRQUFKLENBQWFmO1VBRmIsQ0FBRCxDQUFUOztRQVRSO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztNQUFVWixVOztBQWdCVixTQUFTZ0QsZUFBVCxDQUF5QnBDLElBQXpCLEVBQStCO0VBQzNCLE9BQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxjQUFYLEVBQTJCRixJQUEzQixDQUFQO0FBQ0g7O0FBRUQsU0FBVVgsWUFBVixDQUF1QmMsTUFBdkI7RUFBQTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQTtVQUV1QixPQUFNQywrREFBSSxDQUFDZ0MsZUFBRCxFQUFrQmpDLE1BQU0sQ0FBQ0gsSUFBekIsQ0FBVjs7UUFGdkI7VUFFY0ssTUFGZDtVQUFBO1VBR1EsT0FBTUcsOERBQUcsQ0FBQztZQUNOQyxJQUFJLEVBQUU0QixvRUFEQTtZQUVOckMsSUFBSSxFQUFFSyxNQUFNLENBQUNMO1VBRlAsQ0FBRCxDQUFUOztRQUhSO1VBQUE7VUFBQTs7UUFBQTtVQUFBO1VBQUE7VUFRUU0sT0FBTyxDQUFDTyxLQUFSO1VBUlI7VUFTUSxPQUFNTCw4REFBRyxDQUFDO1lBQ05DLElBQUksRUFBRTZCLG9FQURBO1lBRU50QyxJQUFJLEVBQUUsYUFBSWUsUUFBSixDQUFhZjtVQUZiLENBQUQsQ0FBVDs7UUFUUjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFnQkEsU0FBVVYsWUFBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDSSxPQUFNaUQscUVBQVUsQ0FBQ0Msa0VBQUQsRUFBc0JDLE9BQXRCLENBQWhCOztRQURKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBLFNBQVVsRCxjQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNJLE9BQU1tRCxtRUFBUSxDQUFDLElBQUQsRUFBT0MsaUVBQVAsRUFBMkJ6RCxTQUEzQixDQUFkOztRQURKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBLFNBQVVNLFlBQVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ0ksT0FBTStDLHFFQUFVLENBQUNLLCtEQUFELEVBQW1CN0QsT0FBbkIsQ0FBaEI7O1FBREo7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUEsU0FBVVUsZUFBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDSSxPQUFNOEMscUVBQVUsQ0FBQ0Msa0VBQUQsRUFBc0J4RCxVQUF0QixDQUFoQjs7UUFESjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQSxTQUFVVSxnQkFBVjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDSSxPQUFNNkMscUVBQVUsQ0FBQ00sa0VBQUQsRUFBc0I1RCxVQUF0QixDQUFoQjs7UUFESjtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQSxTQUFVVSxhQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNJLE9BQU00QyxxRUFBVSxDQUFDTyxnRUFBRCxFQUFvQjNELFFBQXBCLENBQWhCOztRQURKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBLFNBQVVTLGdCQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNJLE9BQU0yQyxxRUFBVSxDQUFDUSxrRUFBRCxFQUFzQjNELFVBQXRCLENBQWhCOztRQURKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBLFNBQVVTLGlCQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNJLE9BQU0wQyxxRUFBVSxDQUFDUyxvRUFBRCxFQUF3QjNELFlBQXhCLENBQWhCOztRQURKO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQUtlLFNBQVVTLFFBQVY7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ1gsT0FBTW1ELDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQzFELFlBQUQsQ0FERSxFQUVOMEQsK0RBQUksQ0FBQ3hELGdCQUFELENBRkUsRUFHTndELCtEQUFJLENBQUN6RCxlQUFELENBSEUsRUFJTnlELCtEQUFJLENBQUMzRCxjQUFELENBSkUsRUFLTjJELCtEQUFJLENBQUN2RCxhQUFELENBTEUsRUFNTnVELCtEQUFJLENBQUN0RCxnQkFBRCxDQU5FLEVBT05zRCwrREFBSSxDQUFDckQsaUJBQUQsQ0FQRSxDQUFELENBQVQ7O1FBRFc7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NjE4ZTM3N2IwYzcwZWMzMjYzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXksIGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19TVUNDRVNTLCBVUExPQURfSU1BR0VTX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX1RPX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBjb25zb2xlLmxvZyh0eXBlb2YgcmVzdWx0LmRhdGEuUG9zdElkKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuUG9zdElkXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlIGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBVbkxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogVW5MaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChVbkxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwTG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cExvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBMb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb21tZW50UG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtldFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIFVuTGlrZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwTG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cExvYWRJbWFnZXMpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQ29tbWVudFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkxpa2V0UG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwTG9hZEltYWdlcyksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=