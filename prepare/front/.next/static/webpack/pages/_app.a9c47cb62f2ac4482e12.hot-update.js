webpackHotUpdate_N_E("pages/_app",{

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
  hasMoreImg: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aCIsImhhc01vcmVJbWciLCJnZXRQb3N0TG9hZGRpbmciLCJnZXRQb3N0RG9uZSIsImdldFBvc3RFcnIiLCJhZGRQb3N0TG9hZGRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnIiLCJyZW1vdmVQb3N0TG9hZGRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnIiLCJhZGRDb21tZW50TG9hZGRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnIiLCJnZXREZW1tdXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJjb25jYXQiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0QWN0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYWRkQ29tbWVudEFjdGlvbiIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnIiLCJmaWx0ZXIiLCJpdGVtIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxTQUFTLEVBQUUsQ0FBQztJQUNSQyxFQUFFLEVBQUUsQ0FESTtJQUVSQyxJQUFJLEVBQUU7TUFDRkQsRUFBRSxFQUFFLENBREY7TUFFRkUsUUFBUSxFQUFFO0lBRlIsQ0FGRTtJQU1SQyxPQUFPLEVBQUUsc0JBTkQ7SUFPUkMsTUFBTSxFQUFFLENBQUM7TUFDTEosRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREM7TUFFTEMsR0FBRyxFQUFFO0lBRkEsQ0FBRCxFQUdMO01BQ0NQLEVBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURMO01BRUNDLEdBQUcsRUFBRTtJQUZOLENBSEssRUFNTDtNQUNDUCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFETDtNQUVDQyxHQUFHLEVBQUU7SUFGTixDQU5LLENBUEE7SUFpQlJDLFFBQVEsRUFBRSxDQUFDO01BQ1BSLEVBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURHO01BRVBMLElBQUksRUFBRTtRQUNGRCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFERjtRQUVGSixRQUFRLEVBQUU7TUFGUixDQUZDO01BTVBDLE9BQU8sRUFBRTtJQU5GLENBQUQsRUFPUDtNQUNDSCxFQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFETDtNQUVDTCxJQUFJLEVBQUU7UUFDRkQsRUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREY7UUFFRkosUUFBUSxFQUFFO01BRlIsQ0FGUDtNQU1DQyxPQUFP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O1FBQ0E7O01BQ0osS0FBS0wsbUJBQUw7UUFDSWdCLEtBQUssQ0FBQzNDLGtCQUFOLEdBQTJCLEtBQTNCO1FBQ0EyQyxLQUFLLENBQUN6QyxhQUFOLEdBQXNCdUMsTUFBTSxDQUFDSSxHQUE3QjtRQUNBOztNQUNKLEtBQUtqQixtQkFBTDtRQUNJZSxLQUFLLENBQUN4QyxrQkFBTixHQUEyQixJQUEzQjtRQUNBd0MsS0FBSyxDQUFDdkMsY0FBTixHQUF1QixLQUF2QjtRQUNBdUMsS0FBSyxDQUFDdEMsYUFBTixHQUFzQixJQUF0QjtRQUNBOztNQUNKLEtBQUt3QixtQkFBTDtRQUNJLElBQU1tQixJQUFJLEdBQUdMLEtBQUssQ0FBQzdELFNBQU4sQ0FBZ0JtRSxJQUFoQixDQUFxQixVQUFDRixJQUFEO1VBQUEsT0FBVUEsSUFBSSxDQUFDaEUsRUFBTCxLQUFZMEQsTUFBTSxDQUFDVCxJQUFQLENBQVlrQixNQUFsQztRQUFBLENBQXJCLENBQWI7UUFDQUYsSUFBSSxDQUFDekQsUUFBTCxDQUFjcUQsT0FBZCxDQUF1Qk4sWUFBWSxDQUFDRyxNQUFNLENBQUNULElBQVAsQ0FBWTlDLE9BQWIsQ0FBbkM7UUFFQXlELEtBQUssQ0FBQ3hDLGtCQUFOLEdBQTJCLEtBQTNCO1FBQ0F3QyxLQUFLLENBQUN2QyxjQUFOLEdBQXVCLElBQXZCO1FBQ0E7O01BQ0osS0FBSzBCLG1CQUFMO1FBQ0lhLEtBQUssQ0FBQ3hDLGtCQUFOLEdBQTJCLEtBQTNCO1FBQ0F3QyxLQUFLLENBQUN0QyxhQUFOLEdBQXNCb0MsTUFBTSxDQUFDVSxLQUE3Qjs7TUFFSjtRQUNJLE9BQU9YLEtBQVA7SUFwRVI7RUFzRUgsQ0F2RWEsQ0FBZDtBQXdFSCxDQXpFRDs7QUEyRWVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTljNDdjYjYyZjJhYzQ0ODJlMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuk6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICd3aScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICftnpjrgrTsnpAnXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aDogW10sXHJcbiAgICBoYXNNb3JlSW1nIDogZmFsc2UsXHJcbiAgICBnZXRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgZ2V0UG9zdERvbmU6IGZhbHNlLFxyXG4gICAgZ2V0UG9zdEVycjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnI6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycjogbnVsbCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZW1tdXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpXHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2V0RGVtbXV5UG9zdCgxMCkpXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEltYWdlczogW10sXHJcbiAgICAgICAgQ29tbWVudHM6IFtdLFxyXG4gICAgfVxyXG4pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgY29udGVudDogZGF0YSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdEVyciA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmdldFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UG9zdEVyciA9IGFjdGlvbi5lcnJcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyID0gYWN0aW9uLmVyclxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpKVxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVyciA9IGFjdGlvbi5lcnJvclxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9