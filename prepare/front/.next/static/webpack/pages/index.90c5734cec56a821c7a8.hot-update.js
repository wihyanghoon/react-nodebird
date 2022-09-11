webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, getDemmuyPost, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDemmuyPost", function() { return getDemmuyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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
  hasMorePost: false,
  getPostLoadding: false,
  getPostDone: false,
  getPostErr: null,
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
initialState.mainPosts = initialState.mainPosts.concat(getDemmuyPost(10));
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
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
      case LOAD_POST_REQUEST:
        draft.getPostLoadding = true;
        draft.getPostDone = false;
        draft.getPostErr = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.getPostLoadding = false;
        draft.getPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;

      case LOAD_POST_FAILURE:
        draft.getPostLoadding = false;
        draft.getPostErr = action.err;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aCIsImhhc01vcmVQb3N0IiwiZ2V0UG9zdExvYWRkaW5nIiwiZ2V0UG9zdERvbmUiLCJnZXRQb3N0RXJyIiwiYWRkUG9zdExvYWRkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyIiwicmVtb3ZlUG9zdExvYWRkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyIiwiYWRkQ29tbWVudExvYWRkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyIiwiZ2V0RGVtbXV5UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsInNlbnRlbmNlIiwiY29uY2F0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdEFjdGlvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImFkZENvbW1lbnRBY3Rpb24iLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwibGVuZ3RoIiwiZXJyIiwiZmlsdGVyIiwiaXRlbSIsInBvc3QiLCJmaW5kIiwicG9zdElkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsU0FBUyxFQUFFLENBQUM7SUFDUkMsRUFBRSxFQUFFLENBREk7SUFFUkMsSUFBSSxFQUFFO01BQ0ZELEVBQUUsRUFBRSxDQURGO01BRUZFLFFBQVEsRUFBRTtJQUZSLENBRkU7SUFNUkMsT0FBTyxFQUFFLHNCQU5EO0lBT1JDLE1BQU0sRUFBRSxDQUFDO01BQ0xKLEVBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURDO01BRUxDLEdBQUcsRUFBRTtJQUZBLENBQUQsRUFHTDtNQUNDUCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFETDtNQUVDQyxHQUFHLEVBQUU7SUFGTixDQUhLLEVBTUw7TUFDQ1AsRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREw7TUFFQ0MsR0FBRyxFQUFFO0lBRk4sQ0FOSyxDQVBBO0lBaUJSQyxRQUFRLEVBQUUsQ0FBQztNQUNQUixFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFERztNQUVQTCxJQUFJLEVBQUU7UUFDRkQsRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREY7UUFFRkosUUFBUSxFQUFFO01BRlIsQ0FGQztNQU1QQyxPQUFPLEVBQUU7SUFORixDQUFELEVBT1A7TUFDQ0gsRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREw7TUFFQ0wsSUFBSSxFQUFFO1FBQ0ZELEVBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURGO1FBRUZKLFFBQVEsRUFBRTtNQUZSLENBRlA7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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+yyq+uyiOynuCDqsozsi6TquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yasOyZgOyasOyZgCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3dpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+2emOuCtOyekCdcclxuICAgICAgICB9XSxcclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoOiBbXSxcclxuICAgIGhhc01vcmVQb3N0IDogZmFsc2UsXHJcbiAgICBnZXRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgZ2V0UG9zdERvbmU6IGZhbHNlLFxyXG4gICAgZ2V0UG9zdEVycjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnI6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycjogbnVsbCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZW1tdXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpXHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2V0RGVtbXV5UG9zdCgxMCkpXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEltYWdlczogW10sXHJcbiAgICAgICAgQ29tbWVudHM6IFtdLFxyXG4gICAgfVxyXG4pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgY29udGVudDogZGF0YSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdEVyciA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmdldFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdEVyciA9IGFjdGlvbi5lcnJcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyID0gYWN0aW9uLmVyclxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpKVxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVyciA9IGFjdGlvbi5lcnJvclxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9