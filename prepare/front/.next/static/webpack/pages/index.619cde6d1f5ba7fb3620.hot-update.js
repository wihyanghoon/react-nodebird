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
  console.log(data);
  alert('게시글 리퀘스트 작동');
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
      console.log(action.data);
      var postIndex = state.mainPosts.findIndex(function (item) {
        return item.id === action.data.postId;
      }); // 보낸 개시물과 같은아이디 위치값 찾기

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aCIsImFkZFBvc3RMb2FkZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVyciIsImFkZENvbWVudExvYWRkaW5nIiwiYWRkQ29tZW50RG9uZSIsImFkZENvbWVudEVyciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3RBY3Rpb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwidHlwZSIsImFkZENvbW1lbnRBY3Rpb24iLCJkdW1teVBvc3QiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnIiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwicG9zdElkIiwicG9zdCIsImFkZENvbW1lbnREb25lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsU0FBUyxFQUFFLENBQUM7SUFDUkMsRUFBRSxFQUFFLENBREk7SUFFUkMsSUFBSSxFQUFFO01BQ0ZELEVBQUUsRUFBRSxDQURGO01BRUZFLFFBQVEsRUFBRTtJQUZSLENBRkU7SUFNUkMsT0FBTyxFQUFFLHNCQU5EO0lBT1JDLE1BQU0sRUFBRSxDQUFDO01BQ0xDLEdBQUcsRUFBRTtJQURBLENBQUQsRUFFTDtNQUNDQSxHQUFHLEVBQUU7SUFETixDQUZLLEVBSUw7TUFDQ0Es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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxOWNkZTZkMWY1YmE3ZmIzNjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLpOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3dpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+2emOuCtOyekCdcclxuICAgICAgICB9XSxcclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tZW50TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21lbnRFcnI6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgYWxlcnQoJ+qyjOyLnOq4gCDrpqztgJjsiqTtirgg7J6R64+ZJylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgY29udGVudDogZGF0YSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbWFnZXM6IFtdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXSxcclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+IChcclxuICAgIHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbilcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgYWxlcnQoXCLqsozsi5zquIAg7ISd7IS47IqkIOyekeuPmeuQqFwiKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyOiBhY3Rpb24uZXJyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21lbnRMb2FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tZW50RXJyOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSAvLyDrs7Trgrgg6rCc7Iuc66y86rO8IOqwmeydgOyVhOydtOuUlCDsnITsuZjqsJIg7LC+6riwXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH0gLy8g7JyE7LmY6rCSXHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXS8vIO2VtOuLuSDsnITsuZgg7L2U66mY7Yq4XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbWVudExvYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21lbnRMb2FkZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21lbnRFcnI6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=