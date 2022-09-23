webpackHotUpdate_N_E("pages/index",{

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
var LOAD_POST_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POSTS_FAILURE';
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

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = action.data;
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRoIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsaWtlTG9hZGluZyIsImxpa2VEb25lIiwibGlrZUVycm9yIiwidW5MaWtlTG9hZGluZyIsInVuTGlrZURvbmUiLCJ1bkxpa2VFcnJvciIsImFkZFBvc3RMb2FkZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVyciIsInJlbW92ZVBvc3RMb2FkZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVyciIsImFkZENvbW1lbnRMb2FkZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVyciIsInVwTG9hZEltYWdlc0xvYWRkaW5nIiwidXBMb2FkSW1hZ2VzRG9uZSIsInVwTG9hZEltYWdlc0VyciIsInJldHdlZXRMb2FkZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVyciIsIlJFTU9WRV9JTUFHRVNfU1VDU0VTUyIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsImFkZFBvc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsInYiLCJjb25jYXQiLCJsZW5ndGgiLCJDb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxTQUFTLEVBQUUsRUFEYTtFQUNUO0VBQ2ZDLFVBQVUsRUFBRSxJQUZZO0VBRU47RUFDbEJDLFNBQVMsRUFBRSxFQUhhO0VBR1Q7RUFDZkMsWUFBWSxFQUFFLElBSlU7RUFLeEJDLGdCQUFnQixFQUFFLEtBTE07RUFLQztFQUN6QkMsYUFBYSxFQUFFLEtBTlM7RUFPeEJDLGNBQWMsRUFBRSxJQVBRO0VBUXhCQyxlQUFlLEVBQUUsS0FSTztFQVFB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Q0wsSUFBN0I7UUFDQU8sS0FBSyxDQUFDN0Msa0JBQU4sR0FBMkIsS0FBM0I7UUFDQTZDLEtBQUssQ0FBQzVDLGNBQU4sR0FBdUIsSUFBdkI7UUFDQTs7TUFFSixLQUFLdUIsbUJBQUw7UUFDSXFCLEtBQUssQ0FBQzdDLGtCQUFOLEdBQTJCLEtBQTNCO1FBQ0E2QyxLQUFLLENBQUMzQyxhQUFOLEdBQXNCeUMsTUFBTSxDQUFDSSxLQUE3QjtRQUNBOztNQUVKO1FBQ0ksT0FBT0wsS0FBUDtJQXJLUjtFQXVLSCxDQXhLYSxDQUFkO0FBeUtILENBMUtEOztBQTRLZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2M0YTFiZDE3MTExYzA1YzUyN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLCAvLyDrqZTsnbhcclxuICAgIHNpbmdsZVBvc3Q6IG51bGwsIC8vIOyLseq4gFxyXG4gICAgaW1hZ2VQYXRoOiBbXSwgLy8g7J2066+47KeAXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7Jes65+s6rCcIOqyjOyLnOq4gCDrtojrn6zsmKTquLBcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zquIAg67aI65+s7Jik6riwXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGxpa2VMb2FkaW5nOiBmYWxzZSwgLy8g7KKL7JWE7JqUXHJcbiAgICBsaWtlRG9uZTogZmFsc2UsXHJcbiAgICBsaWtlRXJyb3I6IG51bGwsXHJcbiAgICB1bkxpa2VMb2FkaW5nOiBmYWxzZSwgLy8g7KKL7JWE7JqUIOy3qOyGjFxyXG4gICAgdW5MaWtlRG9uZTogZmFsc2UsXHJcbiAgICB1bkxpa2VFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkZGluZzogZmFsc2UsIC8vIOqyjOyLnOq4gCDsoIDsnqVcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnI6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGRpbmc6IGZhbHNlLCAvLyDqsozsi5zquIAg7IKt7KCcXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRkaW5nOiBmYWxzZSwgLy8g64yT6riAXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyOiBudWxsLFxyXG4gICAgdXBMb2FkSW1hZ2VzTG9hZGRpbmc6IGZhbHNlLCAvLyDsnbTrr7jsp4BcclxuICAgIHVwTG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gICAgdXBMb2FkSW1hZ2VzRXJyOiBudWxsLFxyXG4gICAgcmV0d2VldExvYWRkaW5nOiBmYWxzZSwgLy8g66as7Yq47JyXXHJcbiAgICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyOiBudWxsLFxyXG59XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldERlbW11eVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4vLyAgICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyAgICAgQ29tbWVudHM6IFt7XHJcbi8vICAgICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyB9KSlcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0VTX1NVQ1NFU1MgPSAnUkVNT1ZFX0lNQUdFU19TVUNTRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFU19TVUNTRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gZHJhZnQuaW1hZ2VQYXRoLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGggPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0VyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlRXJyb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUVycm9yID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VFcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gW11cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0uaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCB9KVxyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=