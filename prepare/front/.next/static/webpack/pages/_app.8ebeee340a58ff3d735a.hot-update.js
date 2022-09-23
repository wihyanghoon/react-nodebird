webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGES_SUCSESS, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGES_SUCSESS", function() { return REMOVE_IMAGES_SUCSESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  // 메인
  singlePost: null,
  // 싱글
  imagePath: [],
  // 이미지
  hasMorePosts: true,
  loadPostsLoading: false,
  // 여러개 게시글 불러오기
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  // 게시글 불러오기
  loadPostDone: false,
  loadPostError: null,
  likeLoading: false,
  // 좋아요
  likeDone: false,
  likeError: null,
  unLikeLoading: false,
  // 좋아요 취소
  unLikeDone: false,
  unLikeError: null,
  addPostLoadding: false,
  // 게시글 저장
  addPostDone: false,
  addPostErr: null,
  removePostLoadding: false,
  // 게시글 삭제
  removePostDone: false,
  removePostErr: null,
  addCommentLoadding: false,
  // 댓글
  addCommentDone: false,
  addCommentErr: null,
  upLoadImagesLoadding: false,
  // 이미지
  upLoadImagesDone: false,
  upLoadImagesErr: null,
  retweetLoadding: false,
  // 리트윗
  retweetDone: false,
  retweetErr: null
}; // export const getDemmuyPost = (number) => Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//     },
//     content: faker.lorem.paragraph(),
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }))

var REMOVE_IMAGES_SUCSESS = 'REMOVE_IMAGES_SUCSESS';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var addPostAction = function addPostAction(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addCommentAction = function addCommentAction(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case RETWEET_REQUEST:
        draft.retweetLoadding = true;
        draft.retweetDone = false;
        draft.retweetErr = null;
        break;

      case RETWEET_SUCCESS:
        draft.retweetLoadding = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;

      case RETWEET_FAILURE:
        draft.retweetLoadding = false;
        draft.retweetErr = action.error;
        break;

      case REMOVE_IMAGES_SUCSESS:
        draft.imagePath = draft.imagePath.filter(function (item, index) {
          return index !== action.data;
        });
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.upLoadImagesLoadding = true;
        draft.upLoadImagesDone = false;
        draft.upLoadImagesErr = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.upLoadImagesLoadding = true;
        draft.upLoadImagesDone = false;
        draft.imagePath = action.data;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.upLoadImagesLoadding = false;
        draft.upLoadImagesErr = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likeLoading = true;
        draft.likeDone = false;
        draft.likeError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (item) {
            return item.id === action.data.PostId;
          });

          _post.Likers.push({
            id: action.data.UserId
          });

          draft.likeLoading = false;
          draft.likeDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.unLikeLoading = false;
        draft.unLikeError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unLikeLoading = true;
        draft.unLikeDone = false;
        draft.unLikeError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Likers = _post2.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unLikeLoading = false;
          draft.unLikeDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unLikeLoading = false;
        draft.unLikeError = action.error;
        break;

      case LOAD_DETAIL_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_DETAIL_SU:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = draft.mainPosts.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoadding = true;
        draft.addPostDone = false;
        draft.addPostErr = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoadding = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePath = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoadding = false;
        draft.addPostErr = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoadding = true;
        draft.removePostDone = false;
        draft.removePostErr = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoadding = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (item) {
          return item.id !== action.data.PostId;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoadding = false;
        draft.removePostErr = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoadding = true;
        draft.addCommentDone = false;
        draft.addCommentErr = null;
        break;

      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (item) {
          return item.id === action.data.PostId;
        });
        post.Comments.unshift(action.data);
        draft.addCommentLoadding = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoadding = false;
        draft.addCommentErr = action.error;
        break;

      default:
        return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ }),

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

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(retweet),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(upLoadImages),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(likePost),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(UnLikePost),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(loadPost),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchRetweet),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchUpLoadImages),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnLiketPost),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPost),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
    _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
    _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
    _marked18 = /*#__PURE__*/_regeneratorRuntime().mark(watchCommentPost),
    _marked19 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);





 // 리트윗 시작

function retweetApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/post/".concat(data, "/retweet"));
}

function retweet(action) {
  var result;
  return _regeneratorRuntime().wrap(function retweet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetApi, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
} // 리트윗 끝
// 이미지 업로드 시작


function upLoadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post/images', data);
}

function upLoadImages(action) {
  var result;
  return _regeneratorRuntime().wrap(function upLoadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(upLoadImagesAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"],
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
} // 이미지 업로드 끝
// 좋아요 포스트 시작


function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("/post/".concat(data, "/like "), data);
}

function likePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"],
            data: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
} // 좋아요 포스트 끝
// 좋아요 삭제 시작


function UnLikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/post/".concat(data, "/like"));
}

_c = UnLikePostAPI;

function UnLikePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function UnLikePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(UnLikePostAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"],
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
} // 좋아요 삭제 끝
// 게시글 하나 불러오기 시작


_c2 = UnLikePost;

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/post/".concat(data));
}

function loadPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"],
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
} // 게시글 하나 불러오기 끝
// 게시글 여러개 불러오기 시작


function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/posts?lastId=".concat(lastId || 0));
}

function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"],
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"],
            error: _context6.t0.response.data
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
} // 게시글 여러개 불러오기 끝
// 게시글 저장 시작


function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post', data);
}

function addPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function addPost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return console.log(result);

        case 6:
          _context7.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 8:
          _context7.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 10:
          _context7.next = 17;
          break;

        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"],
            error: _context7.t0.response.data
          });

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 12]]);
} // 게시글 저장 끝
// 게시글 삭제 시작


function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/post/".concat(data));
}

function removePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function removePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log(action.data);
          _context8.prev = 1;
          _context8.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);

        case 4:
          result = _context8.sent;
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context8.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_TO_ME"],
            data: result.data.PostId
          });

        case 9:
          _context8.next = 15;
          break;

        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](1);
          _context8.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"],
            error: _context8.t0.response.data
          });

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[1, 11]]);
} // 게시글 삭제 끝
// 댓글 저장 시작


function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context9.next = 12;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          _context9.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"],
            error: _context9.t0.response.data
          });

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
} // 댓글 저장 끝
// 리트윗


function watchRetweet() {
  return _regeneratorRuntime().wrap(function watchRetweet$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_REQUEST"], retweet);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
} // 이미지 업로드


function watchUpLoadImages() {
  return _regeneratorRuntime().wrap(function watchUpLoadImages$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"], upLoadImages);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
} // 좋아요


function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
} // 좋아요 삭제


function watchUnLiketPost() {
  return _regeneratorRuntime().wrap(function watchUnLiketPost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"], UnLikePost);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
} // 게시글 하나


function watchLoadPost() {
  return _regeneratorRuntime().wrap(function watchLoadPost$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
} // 게시글 여러개


function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
} //게시글 저장


function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
} //게시글 삭제


function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
} //댓글


function watchCommentPost() {
  return _regeneratorRuntime().wrap(function watchCommentPost$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLiketPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUpLoadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRoIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsaWtlTG9hZGluZyIsImxpa2VEb25lIiwibGlrZUVycm9yIiwidW5MaWtlTG9hZGluZyIsInVuTGlrZURvbmUiLCJ1bkxpa2VFcnJvciIsImFkZFBvc3RMb2FkZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVyciIsInJlbW92ZVBvc3RMb2FkZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVyciIsImFkZENvbW1lbnRMb2FkZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVyciIsInVwTG9hZEltYWdlc0xvYWRkaW5nIiwidXBMb2FkSW1hZ2VzRG9uZSIsInVwTG9hZEltYWdlc0VyciIsInJldHdlZXRMb2FkZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVyciIsIlJFTU9WRV9JTUFHRVNfU1VDU0VTUyIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsImFkZFBvc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsInYiLCJMT0FEX0RFVEFJTF9SRVFVRVNUIiwiTE9BRF9ERVRBSUxfU1UiLCJjb25jYXQiLCJsZW5ndGgiLCJDb21tZW50cyIsInJldHdlZXQiLCJ1cExvYWRJbWFnZXMiLCJsaWtlUG9zdCIsIlVuTGlrZVBvc3QiLCJsb2FkUG9zdCIsImxvYWRQb3N0cyIsImFkZFBvc3QiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsIndhdGNoUmV0d2VldCIsIndhdGNoVXBMb2FkSW1hZ2VzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtldFBvc3QiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaENvbW1lbnRQb3N0IiwicG9zdFNhZ2EiLCJyZXR3ZWV0QXBpIiwiYXhpb3MiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwiY29uc29sZSIsInJlc3BvbnNlIiwidXBMb2FkSW1hZ2VzQVBJIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsIlVuTGlrZVBvc3RBUEkiLCJsb2FkUG9zdEFQSSIsImdldCIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImFkZFBvc3RBUEkiLCJsb2ciLCJBRERfUE9TVF9UT19NRSIsInJlbW92ZVBvc3RBUEkiLCJSRU1PVkVfUE9TVF9UT19NRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDeEJDLFNBQVMsRUFBRSxFQURhO0VBQ1Q7RUFDZkMsVUFBVSxFQUFFLElBRlk7RUFFTjtFQUNsQkMsU0FBUyxFQUFFLEVBSGE7RUFHVDtFQUNmQyxZQUFZLEVBQUUsSUFKVTtFQUt4QkMsZ0JBQWdCLEVBQUUsS0FMTTtFQUtDO0VBQ3pCQyxhQUFhLEVBQUUsS0FOUztFQU94QkMsY0FBYyxFQUFFLElBUFE7RUFReEJDLGVBQWUsRUFBRSxLQVJPO0VBUUE7RUFDeEJDLFlBQVksRUFBRSxLQVRVO0VBVXhCQyxhQUFhLEVBQUUsSUFWUztFQVd4QkMsV0FBVyxFQUFFLEtBWFc7RUFXSjtFQUNwQkMsUUFBUSxFQUFFLEtBWmM7RUFheEJDLFNBQVMsRUFBRSxJQWJhO0VBY3hCQyxhQUFhLEVBQUUsS0FkUztFQWNGO0VBQ3RCQyxVQUFVLEVBQUUsS0FmWTtFQWdCeEJDLFdBQVcsRUFBRSxJQWhCVztFQWlCeEJDLGVBQWUsRUFBRSxLQWpCTztFQWlCQTtFQUN4QkMsV0FBVyxFQUFFLEtBbEJXO0VBbUJ4QkMsVUFBVSxF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L3dlYnBhY2svcGFnZXMvX2FwcC44ZWJlZWUzNDBhNThmZjNkNzM1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sIC8vIOuplOyduFxyXG4gICAgc2luZ2xlUG9zdDogbnVsbCwgLy8g7Iux6riAXHJcbiAgICBpbWFnZVBhdGg6IFtdLCAvLyDsnbTrr7jsp4BcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyDsl6zrn6zqsJwg6rKM7Iuc6riAIOu2iOufrOyYpOq4sFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOq4gCDrtojrn6zsmKTquLBcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbGlrZUxvYWRpbmc6IGZhbHNlLCAvLyDsoovslYTsmpRcclxuICAgIGxpa2VEb25lOiBmYWxzZSxcclxuICAgIGxpa2VFcnJvcjogbnVsbCxcclxuICAgIHVuTGlrZUxvYWRpbmc6IGZhbHNlLCAvLyDsoovslYTsmpQg7Leo7IaMXHJcbiAgICB1bkxpa2VEb25lOiBmYWxzZSxcclxuICAgIHVuTGlrZUVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc6riAIOyggOyepVxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkZGluZzogZmFsc2UsIC8vIOqyjOyLnOq4gCDsgq3soJxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnI6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGRpbmc6IGZhbHNlLCAvLyDrjJPquIBcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnI6IG51bGwsXHJcbiAgICB1cExvYWRJbWFnZXNMb2FkZGluZzogZmFsc2UsIC8vIOydtOuvuOyngFxyXG4gICAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cExvYWRJbWFnZXNFcnI6IG51bGwsXHJcbiAgICByZXR3ZWV0TG9hZGRpbmc6IGZhbHNlLCAvLyDrpqztirjsnJdcclxuICAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnI6IG51bGwsXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0RGVtbXV5UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBJbWFnZXM6IFt7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czogW3tcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vIH0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRVNfU1VDU0VTUyA9ICdSRU1PVkVfSU1BR0VTX1NVQ1NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0VTX1NVQ1NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGggPSBkcmFmdC5pbWFnZVBhdGguZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aCA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VFcnJvciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZURvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZURvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRXJyb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZURvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9ERVRBSUxfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfREVUQUlMX1NVOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGggPSBbXVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkIH0pXHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRocm90dGxlLCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVTkxJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9TVUNDRVNTLCBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgIFJFVFdFRVRfUkVRVUVTVCwgUkVUV0VFVF9TVUNDRVNTLCBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9UT19NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG4vLyDrpqztirjsnJcg7Iuc7J6RXHJcbmZ1bmN0aW9uIHJldHdlZXRBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDrpqztirjsnJcg64GdXHJcblxyXG5cclxuLy8g7J2066+47KeAIOyXheuhnOuTnCDsi5zsnpFcclxuZnVuY3Rpb24gdXBMb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwTG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cExvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIOydtOuvuOyngCDsl4XroZzrk5wg64GdXHJcblxyXG4vLyDsoovslYTsmpQg7Y+s7Iqk7Yq4IOyLnOyekVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZSBgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDsoovslYTsmpQg7Y+s7Iqk7Yq4IOuBnVxyXG5cclxuLy8g7KKL7JWE7JqUIOyCreygnCDsi5zsnpFcclxuZnVuY3Rpb24gVW5MaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIFVuTGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoVW5MaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDsoovslYTsmpQg7IKt7KCcIOuBnVxyXG5cclxuLy8g6rKM7Iuc6riAIO2VmOuCmCDrtojrn6zsmKTquLAg7Iuc7J6RXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8g6rKM7Iuc6riAIO2VmOuCmCDrtojrn6zsmKTquLAg64GdXHJcblxyXG4vLyDqsozsi5zquIAg7Jes65+s6rCcIOu2iOufrOyYpOq4sCDsi5zsnpFcclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDqsozsi5zquIAg7Jes65+s6rCcIOu2iOufrOyYpOq4sCDrgZ1cclxuXHJcbi8vIOqyjOyLnOq4gCDsoIDsnqUg7Iuc7J6RXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDqsozsi5zquIAg7KCA7J6lIOuBnVxyXG5cclxuLy8g6rKM7Iuc6riAIOyCreygnCDsi5zsnpFcclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLlBvc3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDqsozsi5zquIAg7IKt7KCcIOuBnVxyXG5cclxuLy8g64yT6riAIOyggOyepSDsi5zsnpFcclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyDrjJPquIAg7KCA7J6lIOuBnVxyXG5cclxuLy8g66as7Yq47JyXXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldClcclxufVxyXG5cclxuLy8g7J2066+47KeAIOyXheuhnOuTnFxyXG5mdW5jdGlvbiogd2F0Y2hVcExvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBMb2FkSW1hZ2VzKVxyXG59XHJcblxyXG4vLyDsoovslYTsmpRcclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdClcclxufVxyXG5cclxuLy8g7KKL7JWE7JqUIOyCreygnFxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2V0UG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgVW5MaWtlUG9zdClcclxufVxyXG5cclxuLy8g6rKM7Iuc6riAIO2VmOuCmFxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuLy8g6rKM7Iuc6riAIOyXrOufrOqwnFxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbi8v6rKM7Iuc6riAIOyggOyepVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KVxyXG59XHJcblxyXG4vL+qyjOyLnOq4gCDsgq3soJxcclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdClcclxufVxyXG5cclxuLy/rjJPquIBcclxuZnVuY3Rpb24qIHdhdGNoQ29tbWVudFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQ29tbWVudFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuTGlrZXRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBMb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=