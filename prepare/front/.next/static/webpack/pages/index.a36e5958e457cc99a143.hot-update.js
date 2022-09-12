webpackHotUpdate_N_E("pages/index",{

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
        draft.mainPosts = action.data.concat(draft.mainPosts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aCIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnIiLCJyZW1vdmVQb3N0TG9hZGRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnIiLCJhZGRDb21tZW50TG9hZGRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnIiLCJnZXREZW1tdXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0QWN0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYWRkQ29tbWVudEFjdGlvbiIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImVyciIsImZpbHRlciIsIml0ZW0iLCJwb3N0IiwiZmluZCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxTQUFTLEVBQUUsQ0FBQztJQUNSQyxFQUFFLEVBQUUsQ0FESTtJQUVSQyxJQUFJLEVBQUU7TUFDRkQsRUFBRSxFQUFFLENBREY7TUFFRkUsUUFBUSxFQUFFO0lBRlIsQ0FGRTtJQU1SQyxPQUFPLEVBQUUsc0JBTkQ7SUFPUkMsTUFBTSxFQUFFLENBQUM7TUFDTEosRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREM7TUFFTEMsR0FBRyxFQUFFO0lBRkEsQ0FBRCxFQUdMO01BQ0NQLEVBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURMO01BRUNDLEdBQUcsRUFBRTtJQUZOLENBSEssRUFNTDtNQUNDUCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFETDtNQUVDQyxHQUFHLEVBQUU7SUFGTixDQU5LLENBUEE7SUFpQlJDLFFBQVEsRUFBRSxDQUFDO01BQ1BSLEVBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURHO01BRVBMLElBQUksRUFBRTtRQUNGRCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFERjtRQUVGSixRQUFRLEVBQUU7TUFGUixDQUZDO01BTVBDLE9BQU8sRUFBRTtJQU5GLENBQUQsRUFPUDtNQUNDSCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFETDtNQUVDTCxJQUFJLEVBQUU7UUFDRkQsRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREY7UUFFRkosUUFBUSxFQUFF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QTdCO1FBQUEsQ0FBdkIsQ0FBbEI7UUFDQTs7TUFDSixLQUFLTCxtQkFBTDtRQUNJZ0IsS0FBSyxDQUFDMUMsa0JBQU4sR0FBMkIsS0FBM0I7UUFDQTBDLEtBQUssQ0FBQ3hDLGFBQU4sR0FBc0JzQyxNQUFNLENBQUNPLEdBQTdCO1FBQ0E7O01BQ0osS0FBS3BCLG1CQUFMO1FBQ0llLEtBQUssQ0FBQ3ZDLGtCQUFOLEdBQTJCLElBQTNCO1FBQ0F1QyxLQUFLLENBQUN0QyxjQUFOLEdBQXVCLEtBQXZCO1FBQ0FzQyxLQUFLLENBQUNyQyxhQUFOLEdBQXNCLElBQXRCO1FBQ0E7O01BQ0osS0FBS3VCLG1CQUFMO1FBQ0ksSUFBTXNCLElBQUksR0FBR1IsS0FBSyxDQUFDNUQsU0FBTixDQUFnQnFFLElBQWhCLENBQXFCLFVBQUNGLElBQUQ7VUFBQSxPQUFVQSxJQUFJLENBQUNsRSxFQUFMLEtBQVl5RCxNQUFNLENBQUNULElBQVAsQ0FBWXFCLE1BQWxDO1FBQUEsQ0FBckIsQ0FBYjtRQUNBRixJQUFJLENBQUMzRCxRQUFMLENBQWN1RCxPQUFkLENBQXVCVCxZQUFZLENBQUNHLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZN0MsT0FBYixDQUFuQztRQUVBd0QsS0FBSyxDQUFDdkMsa0JBQU4sR0FBMkIsS0FBM0I7UUFDQXVDLEtBQUssQ0FBQ3RDLGNBQU4sR0FBdUIsSUFBdkI7UUFDQTs7TUFDSixLQUFLeUIsbUJBQUw7UUFDSWEsS0FBSyxDQUFDdkMsa0JBQU4sR0FBMkIsS0FBM0I7UUFDQXVDLEtBQUssQ0FBQ3JDLGFBQU4sR0FBc0JtQyxNQUFNLENBQUNLLEtBQTdCOztNQUVKO1FBQ0ksT0FBT04sS0FBUDtJQWxFUjtFQW9FSCxDQXJFYSxDQUFkO0FBc0VILENBdkVEOztBQXlFZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTM2ZTU5NThlNDU3Y2M5OWExNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuk6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICd3aScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICftnpjrgrTsnpAnXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aDogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnI6IG51bGwsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGVtbXV5UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSdcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbWFnZXM6IFtdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXSxcclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+IChcclxuICAgIHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbilcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoKGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSkpXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gYWN0aW9uLmVycm9yXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=