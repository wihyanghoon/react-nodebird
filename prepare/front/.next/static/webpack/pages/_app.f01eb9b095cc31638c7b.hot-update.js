webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, getDemmuyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDemmuyPost", function() { return getDemmuyPost; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [{// id: 1,
    // User: {
    //     id: 1,
    //     nickname: '제로초',
    // },
    // content: '첫번째 게실글 #해시태그 #익스프레스',
    // Images: [{
    //     id: shortId.generate(),
    //     src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    // }, {
    //     id: shortId.generate(),
    //     src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    // }, {
    //     id: shortId.generate(),
    //     src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    // }],
    // Comments: [{
    //     id: shortId.generate(),
    //     User: {
    //         id: shortId.generate(),
    //         nickname: 'nero',
    //     },
    //     content: '우와우와'
    // }, {
    //     id: shortId.generate(),
    //     User: {
    //         id: shortId.generate(),
    //         nickname: 'wi',
    //     },
    //     content: '힘내자'
    // }],
  }],
  imagePath: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoadding: false,
  addPostDone: false,
  addPostErr: null,
  removePostLoadding: false,
  removePostDone: false,
  removePostErr: null,
  addCommentLoadding: false,
  addCommentDone: false,
  addCommentErr: null
};
var getDemmuyPost = function getDemmuyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
      }]
    };
  });
};
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
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts.push(action.data);
        draft.hasMorePosts = draft.mainPosts.length < 50;
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
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
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
        draft.addCommentLoadding = true;
        draft.addCommentDone = false;
        draft.addCommentErr = null;
        break;

      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (item) {
          return item.id === action.data.postId;
        });
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoadding = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoadding = false;
        draft.addCommentErr = action.error;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGgiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyIiwicmVtb3ZlUG9zdExvYWRkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyIiwiYWRkQ29tbWVudExvYWRkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyIiwiZ2V0RGVtbXV5UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0QWN0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYWRkQ29tbWVudEFjdGlvbiIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInB1c2giLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJlcnIiLCJmaWx0ZXIiLCJpdGVtIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsU0FBUyxFQUFFLENBQUMsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQS9CUSxDQUFELENBRGE7RUFrQ3hCQyxTQUFTLEVBQUUsRUFsQ2E7RUFtQ3hCQyxZQUFZLEVBQUUsSUFuQ1U7RUFvQ3hCQyxnQkFBZ0IsRUFBRSxLQXBDTTtFQXFDeEJDLGFBQWEsRUFBRSxLQXJDUztFQXNDeEJDLGNBQWMsRUFBRSxJQXRDUTtFQXVDeEJDLGVBQWUsRUFBRSxLQXZDTztFQXdDeEJDLFdBQVcsRUFBRSxLQXhDVztFQXlDeEJDLFVBQVUsRUFBRSxJQXpDWTtFQTBDeEJDLGtCQUFrQixFQUFFLEtBMUNJO0VBMkN4QkMsY0FBYyxFQUFFLEtBM0NRO0VBNEN4QkMsYUFBYSxFQUFFLElBNUNTO0VBNkN4QkMsa0JBQWtCLEVBQUUsS0E3Q0k7RUE4Q3hCQyxjQUFjLEVBQUUsS0E5Q1E7RUErQ3hCQyxhQUFhLEVBQUU7QUEvQ1MsQ0FBckI7QUFtREEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxNQUFEO0VBQUEsT0FBWUMsS0FBSyxDQUFDRCxNQUFELENBQUwsQ0FBY0UsSUFBZCxHQUFxQkMsR0FBckIs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LGtCQUFOLEdBQTJCLEtBQTNCO1FBQ0FnRCxLQUFLLENBQUMvQyxjQUFOLEdBQXVCLElBQXZCO1FBQ0E7O01BQ0osS0FBS2tDLG1CQUFMO1FBQ0lhLEtBQUssQ0FBQ2hELGtCQUFOLEdBQTJCLEtBQTNCO1FBQ0FnRCxLQUFLLENBQUM5QyxhQUFOLEdBQXNCNEMsTUFBTSxDQUFDSyxLQUE3Qjs7TUFFSjtRQUNJLE9BQU9OLEtBQVA7SUFsRVI7RUFvRUgsQ0FyRWEsQ0FBZDtBQXNFSCxDQXZFRDs7QUF5RWVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjAxZWI5YjA5NWNjMzE2MzhjN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIC8vIGlkOiAxLFxyXG4gICAgICAgIC8vIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgaWQ6IDEsXHJcbiAgICAgICAgLy8gICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuk6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgLy8gSW1hZ2VzOiBbe1xyXG4gICAgICAgIC8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgLy8gfSwge1xyXG4gICAgICAgIC8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICAvLyB9XSxcclxuICAgICAgICAvLyBDb21tZW50czogW3tcclxuICAgICAgICAvLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgVXNlcjoge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgLy8gfSwge1xyXG4gICAgICAgIC8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICBVc2VyOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgbmlja25hbWU6ICd3aScsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICftnpjrgrTsnpAnXHJcbiAgICAgICAgLy8gfV0sXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aDogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnI6IG51bGwsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGVtbXV5UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSdcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbWFnZXM6IFtdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXSxcclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+IChcclxuICAgIHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbilcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnB1c2goYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoKGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSkpXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gYWN0aW9uLmVycm9yXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=