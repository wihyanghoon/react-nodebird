webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫번째 게실글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와우와'
    }, {
      User: {
        nickname: 'wi'
      },
      content: '힘내자'
    }]
  }],
  imagePath: [],
  addPostLoadding: false,
  addPostDone: false,
  addPostErr: null,
  addComentLoadding: false,
  addComentDone: false,
  addComentErr: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPostAction = function addPostAction(data) {
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoadding: true,
        addPostDone: false,
        addPostErr: null
      });

    case ADD_POST_SUCCESS:
      alert("게시글 석세스 작동됨");
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoadding: false,
        addPostDone: true,
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts))
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoadding: false,
        addPostErr: action.err
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addComentLoadding: true,
        addComentDone: false,
        addComentErr: null
      });

    case ADD_COMMENT_SUCCESS:
      alert(action.data.postId);
      console.log(action.data);
      var postIndex = state.mainPosts.findIndex(function (item) {
        return item.id === action.data.postId;
      }); // 보낸 개시물과 같은아이디 위치값 찾기

      console.log(postIndex);

      var post = _objectSpread({}, state.mainPosts[postIndex]); // 위치값


      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments)); // 해당 위치 코멘트

      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        addComentLoadding: false,
        addCommentDone: true,
        mainPosts: mainPosts
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addComentLoadding: false,
        addComentErr: action.error
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aCIsImFkZFBvc3RMb2FkZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVyciIsImFkZENvbWVudExvYWRkaW5nIiwiYWRkQ29tZW50RG9uZSIsImFkZENvbWVudEVyciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnRBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZHVtbXlQb3N0Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiYWxlcnQiLCJlcnIiLCJwb3N0SWQiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwicG9zdCIsImFkZENvbW1lbnREb25lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsU0FBUyxFQUFFLENBQUM7SUFDUkMsRUFBRSxFQUFFLENBREk7SUFFUkMsSUFBSSxFQUFFO01BQ0ZELEVBQUUsRUFBRSxDQURGO01BRUZFLFFBQVEsRUFBRTtJQUZSLENBRkU7SUFNUkMsT0FBTyxFQUFFLHNCQU5EO0lBT1JDLE1BQU0sRUFBRSxDQUFDO01BQ0xDLEdBQUcsRUFBRTtJQURBLENBQUQsRUFFTDtNQUNDQSxHQUFHLEVBQUU7SUFETixDQUZLLEVBSUw7TUFDQ0Es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SCxDQXhERDs7QUEwRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3NDY5MDc1NGQ5OTA0ZTZjNTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLpOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3dpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+2emOuCtOyekCdcclxuICAgICAgICB9XSxcclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tZW50TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21lbnRFcnI6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+IChcclxuICAgIHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSW1hZ2VzOiBbXSxcclxuICAgICAgICBDb21tZW50czogW10sXHJcbiAgICB9XHJcbilcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnI6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi6rKM7Iuc6riAIOyEneyEuOyKpCDsnpHrj5nrkKhcIilcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycjogYWN0aW9uLmVycixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tZW50TG9hZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbWVudEVycjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgYWxlcnQoYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSAvLyDrs7Trgrgg6rCc7Iuc66y86rO8IOqwmeydgOyVhOydtOuUlCDsnITsuZjqsJIg7LC+6riwXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3RJbmRleClcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfSAvLyDsnITsuZjqsJJcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdLy8g7ZW064u5IOychOy5mCDsvZTrqZjtirhcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tZW50TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbWVudExvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbWVudEVycjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==