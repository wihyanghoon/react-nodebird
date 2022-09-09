webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫번째 게실글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'nero'
      },
      content: '우와우와'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'wi'
      },
      content: '힘내자'
    }]
  }],
  imagePath: [],
  addPostLoadding: false,
  addPostDone: false,
  addPostErr: null,
  removePostLoadding: false,
  removePostDone: false,
  removePostErr: null,
  addComentLoadding: false,
  addComentDone: false,
  addComentErr: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPostAction = function addPostAction(data) {
  console.log(data);
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addCommentAction = function addCommentAction(data) {
  console.log(data);
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: '제로초'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '제로초'
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoadding = true;
        draft.addPostDone = false;
        draft.addPostErr = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoadding = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_COMMENT_FAILURE:
        draft.addPostLoadding = false;
        draft.addPostErr = action.err;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoadding = true;
        draft.removePostDone = false;
        draft.removePostErr = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoadding = false;
        draft.removePostDone = true;
        draft.mainPosts = state.mainPosts.filter(function (item) {
          return item.id !== action.data;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoadding = false;
        draft.removePostErr = action.err;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addComentLoadding = true;
        draft.addComentDone = false;
        draft.addComentErr = null;
        break;

      case ADD_COMMENT_SUCCESS:
        var post = draft.find(function (item) {
          return item.id === action.data.postId;
        });
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addComentLoadding = false;
        draft.addCommentDone = true;
        draft.mainPosts;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addComentLoadding = false;
        draft.addComentErr = action.error;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aCIsImFkZFBvc3RMb2FkZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVyciIsInJlbW92ZVBvc3RMb2FkZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVyciIsImFkZENvbWVudExvYWRkaW5nIiwiYWRkQ29tZW50RG9uZSIsImFkZENvbWVudEVyciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3RBY3Rpb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJhZGRDb21tZW50QWN0aW9uIiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVyciIsImZpbHRlciIsIml0ZW0iLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsImFkZENvbW1lbnREb25lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDeEJDLFNBQVMsRUFBRSxDQUFD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Q0ksT0FBT1osS0FBUDtJQW5EUjtFQXFESCxDQXREYSxDQUFkO0FBdURILENBeEREOztBQTBEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YzRiMWNlN2NmZGQ5Y2Y0MzZhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuk6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICd3aScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICftnpjrgrTsnpAnXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aDogW10sXHJcbiAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tZW50TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21lbnRFcnI6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSdcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbWFnZXM6IFtdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXSxcclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+IChcclxuICAgIHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbilcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbWVudExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tZW50RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21lbnRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZClcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdCgoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKSlcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbWVudEVyciA9IGFjdGlvbi5lcnJvclxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9