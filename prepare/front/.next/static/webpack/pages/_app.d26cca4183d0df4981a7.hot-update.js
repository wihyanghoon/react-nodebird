webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@redux-saga/core/dist/io-40341e1a.js":
/*!***********************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/io-40341e1a.js ***!
  \***********************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern)) {
      console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types");
    }

    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern)) {
      console.warn("take(channel) takes one argument but two were provided. Second argument is ignored.");
    }

    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(arg);
    }, 'fork: argument must not be an effect');
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js ***!
  \*******************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, default, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return multicastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return runSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io-40341e1a.js */ "./node_modules/@redux-saga/core/dist/io-40341e1a.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["I"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux-saga/deferred */ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["k"];
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["string"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(pattern) ? array : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["stringableFunc"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(pattern) ? predicate : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["symbol"])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"]
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"];
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["e"])();
  }

  var closed = false;
  var takers = [];

  if (true) {
    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["buffer"], INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["i"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["r"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["n"])();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["o"])(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["o"])(function () {
      ensureCanMutateNextTakers();
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["r"])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]];

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["q"])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["q"])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["undef"])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["r"])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["l"])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]) {
    cancelSingleTask(task);
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["l"])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["m"])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["s"])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["p"])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["T"]] = runTakeEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["P"]] = runPutEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["A"]] = runAllEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["R"]] = runRaceEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["C"]] = runCallEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["a"]] = runCPSEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["F"]] = runForkEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["J"]] = runJoinEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["b"]] = runCancelEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["S"]] = runSelectEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["d"]] = runChannelEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["f"]] = runCancelledEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["g"]] = runFlushEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["G"]] = runGetContextEffect, _effectRunnerMap[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["h"]] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["r"])(tasks, task);
      task.cont = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["v"])(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["u"])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["w"])('task', props));
    }

    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = Object(_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["x"]]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["y"])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]
        };
      } else if (Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["z"])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["B"] : _ref$onError;

  if (true) {
    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"], NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(dispatch)) {
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'dispatch must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(getState)) {
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'getState must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"], MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], MIDDLEWARE_TYPE_ERROR);
      });
    }

    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_5__["compose"].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["E"];
  }

  var env = {
    channel: channel,
    dispatch: Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["D"])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["j"])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["channel"], 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["w"])('sagaMiddleware', props));
    }

    Object(_io_40341e1a_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, arrayOfDeferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeferred", function() { return arrayOfDeferred; });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var MAX_SIGNED_INT = 2147483647;
function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#maximum_delay_value
  if ( true && ms > MAX_SIGNED_INT) {
    throw new Error('delay only supports a maximum value of ' + MAX_SIGNED_INT + 'ms');
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, Math.min(MAX_SIGNED_INT, ms), val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/*! exports provided: array, buffer, channel, effect, func, iterable, iterator, multicast, notUndef, number, object, observable, pattern, promise, sagaAction, string, stringableFunc, symbol, task, undef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/*! exports provided: CANCEL, CHANNEL_END_TYPE, IO, MATCH, MULTICAST, SAGA_ACTION, SAGA_LOCATION, SELF_CANCELLATION, TASK, TASK_CANCEL, TERMINATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js ***!
  \***********************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["buffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["channel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["eventChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["isEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["multicastChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["runSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["stdChannel"]; });






/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");






var configureStore = function configureStore() {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var middlewares = [];
  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["legacy_createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9pby00MDM0MWUxYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9yZWR1eC1zYWdhLWNvcmUuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvZGVmZXJyZWQvZGlzdC9yZWR1eC1zYWdhLWRlZmVycmVkLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2RlbGF5LXAvZGlzdC9yZWR1eC1zYWdhLWRlbGF5LXAuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvaXMvZGlzdC9yZWR1eC1zYWdhLWlzLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL3N5bWJvbHMvZGlzdC9yZWR1eC1zYWdhLXN5bWJvbHMuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9kaXN0L3JlZHV4LXNhZ2EtY29yZS1ucG0tcHJveHkuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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ZXMvX2FwcC5kMjZjY2E0MTgzZDBkZjQ5ODFhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVEFTS19DQU5DRUwsIFRFUk1JTkFURSwgU0FHQV9MT0NBVElPTiwgU0FHQV9BQ1RJT04sIElPLCBTRUxGX0NBTkNFTExBVElPTiB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsgYXJyYXksIG5vdFVuZGVmLCBwYXR0ZXJuLCBtdWx0aWNhc3QsIGNoYW5uZWwsIHVuZGVmLCBlZmZlY3QsIHRhc2ssIGZ1bmMsIGJ1ZmZlciwgc3RyaW5nLCBvYmplY3QgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgZGVsYXlQIGZyb20gJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIga29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xudmFyIGtUcnVlID1cbi8qI19fUFVSRV9fKi9cbmtvbnN0KHRydWUpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xuICBub29wID1cbiAgLyojX19QVVJFX18qL1xuICBuZXcgUHJveHkobm9vcCwge1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ1RoZXJlIHdhcyBhbiBhdHRlbXB0IHRvIGFzc2lnbiBhIHByb3BlcnR5IHRvIGludGVybmFsIGBub29wYCBmdW5jdGlvbi4nKTtcbiAgICB9XG4gIH0pO1xufVxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICByZXR1cm4gdjtcbn07XG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gaGFzU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJztcbmZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBwcmVkaWNhdGUsIGVycm9yKSB7XG4gIGlmICghcHJlZGljYXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cbnZhciBhc3NpZ25XaXRoU3ltYm9scyA9IGZ1bmN0aW9uIGFzc2lnbldpdGhTeW1ib2xzKHRhcmdldCwgc291cmNlKSB7XG4gIF9leHRlbmRzKHRhcmdldCwgc291cmNlKTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICB0YXJnZXRbc10gPSBzb3VyY2Vbc107XG4gICAgfSk7XG4gIH1cbn07XG52YXIgZmxhdE1hcCA9IGZ1bmN0aW9uIGZsYXRNYXAobWFwcGVyLCBhcnIpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCBhcnIubWFwKG1hcHBlcikpO1xufTtcbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuXG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuZnVuY3Rpb24gb25jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgZm4oKTtcbiAgfTtcbn1cblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcblxudmFyIGtSZXR1cm4gPSBmdW5jdGlvbiBrUmV0dXJuKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRvbmU6IHRydWVcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYXRvcihuZXh0LCB0aHJvLCBuYW1lKSB7XG4gIGlmICh0aHJvID09PSB2b2lkIDApIHtcbiAgICB0aHJvID0ga1Rocm93O1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAnaXRlcmF0b3InO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG1ldGE6IHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LFxuICAgIG5leHQ6IG5leHQsXG4gICAgdGhyb3c6IHRocm8sXG4gICAgcmV0dXJuOiBrUmV0dXJuLFxuICAgIGlzU2FnYUl0ZXJhdG9yOiB0cnVlXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IsIF9yZWYyKSB7XG4gIHZhciBzYWdhU3RhY2sgPSBfcmVmMi5zYWdhU3RhY2s7XG5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlKi9cbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIGNvbnNvbGUuZXJyb3Ioc2FnYVN0YWNrKTtcbn1cbnZhciBpbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKFwiXFxuICByZWR1eC1zYWdhOiBFcnJvciBjaGVja2luZyBob29rcyBkZXRlY3RlZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRoaXMgaXMgbGlrZWx5IGEgYnVnXFxuICBpbiByZWR1eC1zYWdhIGNvZGUgYW5kIG5vdCB5b3Vycy4gVGhhbmtzIGZvciByZXBvcnRpbmcgdGhpcyBpbiB0aGUgcHJvamVjdCdzIGdpdGh1YiByZXBvLlxcbiAgRXJyb3I6IFwiICsgZXJyICsgXCJcXG5cIik7XG59O1xudmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZnVuY3Rpb24gY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoY3R4LCBwcm9wcykge1xuICByZXR1cm4gKGN0eCA/IGN0eCArICcuJyA6ICcnKSArIFwic2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50IFwiICsgcHJvcHMgKyBcIiBpcyBub3QgYSBwbGFpbiBvYmplY3RcIjtcbn07XG52YXIgRlJPWkVOX0FDVElPTl9FUlJPUiA9IFwiWW91IGNhbid0IHB1dCAoYS5rLmEuIGRpc3BhdGNoIGZyb20gc2FnYSkgZnJvemVuIGFjdGlvbnMuXFxuV2UgaGF2ZSB0byBkZWZpbmUgYSBzcGVjaWFsIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIHRob3NlIGFjdGlvbnMgZm9yIHNjaGVkdWxpbmcgcHVycG9zZXMuXFxuT3RoZXJ3aXNlIHlvdSB3b3VsZG4ndCBiZSBhYmxlIHRvIGNvbW11bmljYXRlIHByb3Blcmx5IGJldHdlZW4gc2FnYXMgJiBvdGhlciBzdWJzY3JpYmVycyAoYWN0aW9uIG9yZGVyaW5nIHdvdWxkIGJlY29tZSBmYXIgbGVzcyBwcmVkaWN0YWJsZSkuXFxuSWYgeW91IGFyZSB1c2luZyByZWR1eCBhbmQgeW91IGNhcmUgYWJvdXQgdGhpcyBiZWhhdmlvdXIgKGZyb3plbiBhY3Rpb25zKSxcXG50aGVuIHlvdSBtaWdodCB3YW50IHRvIHN3aXRjaCB0byBmcmVlemluZyBhY3Rpb25zIGluIGEgbWlkZGxld2FyZSByYXRoZXIgdGhhbiBpbiBhY3Rpb24gY3JlYXRvci5cXG5FeGFtcGxlIGltcGxlbWVudGF0aW9uOlxcblxcbmNvbnN0IGZyZWV6ZUFjdGlvbnMgPSBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiBuZXh0KE9iamVjdC5mcmVlemUoYWN0aW9uKSlcXG5cIjsgLy8gY3JlYXRlcyBlbXB0eSwgYnV0IG5vdC1ob2xleSBhcnJheVxuXG52YXIgY3JlYXRlRW1wdHlBcnJheSA9IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5QXJyYXkobikge1xuICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KG4pKTtcbn07XG52YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2soYWN0aW9uLCBmdW5jdGlvbiAoYWMpIHtcbiAgICAgICAgcmV0dXJuICFPYmplY3QuaXNGcm96ZW4oYWMpO1xuICAgICAgfSwgRlJPWkVOX0FDVElPTl9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgc2hvdWxkVGVybWluYXRlID0gZnVuY3Rpb24gc2hvdWxkVGVybWluYXRlKHJlcykge1xuICByZXR1cm4gcmVzID09PSBURVJNSU5BVEU7XG59O1xudmFyIHNob3VsZENhbmNlbCA9IGZ1bmN0aW9uIHNob3VsZENhbmNlbChyZXMpIHtcbiAgcmV0dXJuIHJlcyA9PT0gVEFTS19DQU5DRUw7XG59O1xudmFyIHNob3VsZENvbXBsZXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcGxldGUocmVzKSB7XG4gIHJldHVybiBzaG91bGRUZXJtaW5hdGUocmVzKSB8fCBzaG91bGRDYW5jZWwocmVzKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzKHNoYXBlLCBwYXJlbnRDYWxsYmFjaykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNoYXBlKTtcbiAgdmFyIHRvdGFsQ291bnQgPSBrZXlzLmxlbmd0aDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHRvdGFsQ291bnQsIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyA+IDA7XG4gICAgfSwgJ2NyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3M6IGdldCBhbiBlbXB0eSBhcnJheSBvciBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIHZhciBjb21wbGV0ZWQ7XG4gIHZhciByZXN1bHRzID0gYXJyYXkoc2hhcGUpID8gY3JlYXRlRW1wdHlBcnJheSh0b3RhbENvdW50KSA6IHt9O1xuICB2YXIgY2hpbGRDYWxsYmFja3MgPSB7fTtcblxuICBmdW5jdGlvbiBjaGVja0VuZCgpIHtcbiAgICBpZiAoY29tcGxldGVkQ291bnQgPT09IHRvdGFsQ291bnQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaENiQXRLZXkgPSBmdW5jdGlvbiBjaENiQXRLZXkocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VyciB8fCBzaG91bGRDb21wbGV0ZShyZXMpKSB7XG4gICAgICAgIHBhcmVudENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXMsIGlzRXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNba2V5XSA9IHJlcztcbiAgICAgICAgY29tcGxldGVkQ291bnQrKztcbiAgICAgICAgY2hlY2tFbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hDYkF0S2V5LmNhbmNlbCA9IG5vb3A7XG4gICAgY2hpbGRDYWxsYmFja3Nba2V5XSA9IGNoQ2JBdEtleTtcbiAgfSk7XG5cbiAgcGFyZW50Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzW2tleV0uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzO1xufVxuZnVuY3Rpb24gZ2V0TWV0YUluZm8oZm4pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmbi5uYW1lIHx8ICdhbm9ueW1vdXMnLFxuICAgIGxvY2F0aW9uOiBnZXRMb2NhdGlvbihmbilcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGluc3RydW1lbnRlZCkge1xuICByZXR1cm4gaW5zdHJ1bWVudGVkW1NBR0FfTE9DQVRJT05dO1xufVxuXG52YXIgQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcbnZhciB6ZXJvQnVmZmVyID0ge1xuICBpc0VtcHR5OiBrVHJ1ZSxcbiAgcHV0OiBub29wLFxuICB0YWtlOiBub29wXG59O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKGxpbWl0LCBvdmVyZmxvd0FjdGlvbikge1xuICBpZiAobGltaXQgPT09IHZvaWQgMCkge1xuICAgIGxpbWl0ID0gMTA7XG4gIH1cblxuICB2YXIgYXJyID0gbmV3IEFycmF5KGxpbWl0KTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBwdXNoSW5kZXggPSAwO1xuICB2YXIgcG9wSW5kZXggPSAwO1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChpdCkge1xuICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgbGVuZ3RoKys7XG4gIH07XG5cbiAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKCkge1xuICAgIGlmIChsZW5ndGggIT0gMCkge1xuICAgICAgdmFyIGl0ID0gYXJyW3BvcEluZGV4XTtcbiAgICAgIGFycltwb3BJbmRleF0gPSBudWxsO1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBwb3BJbmRleCA9IChwb3BJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdDtcblxuICAgICAgICBzd2l0Y2ggKG92ZXJmbG93QWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19USFJPVzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihCVUZGRVJfT1ZFUkZMT1cpO1xuXG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gMDtcbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OiAvLyBEUk9QXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxudmFyIG5vbmUgPSBmdW5jdGlvbiBub25lKCkge1xuICByZXR1cm4gemVyb0J1ZmZlcjtcbn07XG52YXIgZml4ZWQgPSBmdW5jdGlvbiBmaXhlZChsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xufTtcbnZhciBkcm9wcGluZyA9IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19EUk9QKTtcbn07XG52YXIgc2xpZGluZyA9IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1NMSURFKTtcbn07XG52YXIgZXhwYW5kaW5nID0gZnVuY3Rpb24gZXhwYW5kaW5nKGluaXRpYWxTaXplKSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xufTtcblxudmFyIGJ1ZmZlcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgbm9uZTogbm9uZSxcbiAgZml4ZWQ6IGZpeGVkLFxuICBkcm9wcGluZzogZHJvcHBpbmcsXG4gIHNsaWRpbmc6IHNsaWRpbmcsXG4gIGV4cGFuZGluZzogZXhwYW5kaW5nXG59KTtcblxudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBlZmZlY3RUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBUQUtFOiBUQUtFLFxuICBQVVQ6IFBVVCxcbiAgQUxMOiBBTEwsXG4gIFJBQ0U6IFJBQ0UsXG4gIENBTEw6IENBTEwsXG4gIENQUzogQ1BTLFxuICBGT1JLOiBGT1JLLFxuICBKT0lOOiBKT0lOLFxuICBDQU5DRUw6IENBTkNFTCxcbiAgU0VMRUNUOiBTRUxFQ1QsXG4gIEFDVElPTl9DSEFOTkVMOiBBQ1RJT05fQ0hBTk5FTCxcbiAgQ0FOQ0VMTEVEOiBDQU5DRUxMRUQsXG4gIEZMVVNIOiBGTFVTSCxcbiAgR0VUX0NPTlRFWFQ6IEdFVF9DT05URVhULFxuICBTRVRfQ09OVEVYVDogU0VUX0NPTlRFWFRcbn0pO1xuXG52YXIgVEVTVF9ISU5UID0gJ1xcbihISU5UOiBpZiB5b3UgYXJlIGdldHRpbmcgdGhlc2UgZXJyb3JzIGluIHRlc3RzLCBjb25zaWRlciB1c2luZyBjcmVhdGVNb2NrVGFzayBmcm9tIEByZWR1eC1zYWdhL3Rlc3RpbmctdXRpbHMpJztcblxudmFyIG1ha2VFZmZlY3QgPSBmdW5jdGlvbiBtYWtlRWZmZWN0KHR5cGUsIHBheWxvYWQpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltJT10gPSB0cnVlLCBfcmVmLmNvbWJpbmF0b3IgPSBmYWxzZSwgX3JlZi50eXBlID0gdHlwZSwgX3JlZi5wYXlsb2FkID0gcGF5bG9hZCwgX3JlZjtcbn07XG5cbnZhciBpc0ZvcmtFZmZlY3QgPSBmdW5jdGlvbiBpc0ZvcmtFZmZlY3QoZWZmKSB7XG4gIHJldHVybiBlZmZlY3QoZWZmKSAmJiBlZmYudHlwZSA9PT0gRk9SSztcbn07XG5cbnZhciBkZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goZWZmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soZWZmLCBpc0ZvcmtFZmZlY3QsICdkZXRhY2goZWZmKTogYXJndW1lbnQgbXVzdCBiZSBhIGZvcmsgZWZmZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGT1JLLCBfZXh0ZW5kcyh7fSwgZWZmLnBheWxvYWQsIHtcbiAgICBkZXRhY2hlZDogdHJ1ZVxuICB9KSk7XG59O1xuZnVuY3Rpb24gdGFrZShwYXR0ZXJuT3JDaGFubmVsLCBtdWx0aWNhc3RQYXR0ZXJuKSB7XG4gIGlmIChwYXR0ZXJuT3JDaGFubmVsID09PSB2b2lkIDApIHtcbiAgICBwYXR0ZXJuT3JDaGFubmVsID0gJyonO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgbm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgaWYgKHBhdHRlcm4ocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICBpZiAobm90VW5kZWYobXVsdGljYXN0UGF0dGVybikpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInRha2UocGF0dGVybikgdGFrZXMgb25lIGFyZ3VtZW50IGJ1dCB0d28gd2VyZSBwcm92aWRlZC4gQ29uc2lkZXIgcGFzc2luZyBhbiBhcnJheSBmb3IgbGlzdGVuaW5nIHRvIHNldmVyYWwgYWN0aW9uIHR5cGVzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlRWZmZWN0KFRBS0UsIHtcbiAgICAgIHBhdHRlcm46IHBhdHRlcm5PckNoYW5uZWxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChtdWx0aWNhc3QocGF0dGVybk9yQ2hhbm5lbCkgJiYgbm90VW5kZWYobXVsdGljYXN0UGF0dGVybikgJiYgcGF0dGVybihtdWx0aWNhc3RQYXR0ZXJuKSkge1xuICAgIHJldHVybiBtYWtlRWZmZWN0KFRBS0UsIHtcbiAgICAgIGNoYW5uZWw6IHBhdHRlcm5PckNoYW5uZWwsXG4gICAgICBwYXR0ZXJuOiBtdWx0aWNhc3RQYXR0ZXJuXG4gICAgfSk7XG4gIH1cblxuICBpZiAoY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIGlmIChub3RVbmRlZihtdWx0aWNhc3RQYXR0ZXJuKSkge1xuICAgICAgY29uc29sZS53YXJuKFwidGFrZShjaGFubmVsKSB0YWtlcyBvbmUgYXJndW1lbnQgYnV0IHR3byB3ZXJlIHByb3ZpZGVkLiBTZWNvbmQgYXJndW1lbnQgaXMgaWdub3JlZC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBhcmd1bWVudCBcIiArIHBhdHRlcm5PckNoYW5uZWwgKyBcIiBpcyBub3QgdmFsaWQgY2hhbm5lbCBvciBhIHZhbGlkIHBhdHRlcm5cIik7XG4gIH1cbn1cbnZhciB0YWtlTWF5YmUgPSBmdW5jdGlvbiB0YWtlTWF5YmUoKSB7XG4gIHZhciBlZmYgPSB0YWtlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQubWF5YmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcbmZ1bmN0aW9uIHB1dChjaGFubmVsJDEsIGFjdGlvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBjaGFubmVsLCBcInB1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBcIiArIGNoYW5uZWwkMSArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWxcIik7XG4gICAgICBjaGVjayhhY3Rpb24sIG5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuZGVmKGFjdGlvbikpIHtcbiAgICBhY3Rpb24gPSBjaGFubmVsJDE7IC8vIGB1bmRlZmluZWRgIGluc3RlYWQgb2YgYG51bGxgIHRvIG1ha2UgZGVmYXVsdCBwYXJhbWV0ZXIgd29ya1xuXG4gICAgY2hhbm5lbCQxID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoUFVULCB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCQxLFxuICAgIGFjdGlvbjogYWN0aW9uXG4gIH0pO1xufVxudmFyIHB1dFJlc29sdmUgPSBmdW5jdGlvbiBwdXRSZXNvbHZlKCkge1xuICB2YXIgZWZmID0gcHV0LmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQucmVzb2x2ZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgdmFyIGVmZiA9IG1ha2VFZmZlY3QoQUxMLCBlZmZlY3RzKTtcbiAgZWZmLmNvbWJpbmF0b3IgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufVxuZnVuY3Rpb24gcmFjZShlZmZlY3RzKSB7XG4gIHZhciBlZmYgPSBtYWtlRWZmZWN0KFJBQ0UsIGVmZmVjdHMpO1xuICBlZmYuY29tYmluYXRvciA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59IC8vIHRoaXMgbWF0Y2ggZ2V0Rm5DYWxsRGVzY3JpcHRvciBsb2dpY1xuXG52YXIgdmFsaWRhdGVGbkRlc2NyaXB0b3IgPSBmdW5jdGlvbiB2YWxpZGF0ZUZuRGVzY3JpcHRvcihlZmZlY3ROYW1lLCBmbkRlc2NyaXB0b3IpIHtcbiAgY2hlY2soZm5EZXNjcmlwdG9yLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQgb3IgbnVsbFwiKTtcblxuICBpZiAoZnVuYyhmbkRlc2NyaXB0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGFycmF5KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgIGZuID0gZm5EZXNjcmlwdG9yWzFdO1xuICAgIGNoZWNrKGZuLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBvZiB0eXBlIFtjb250ZXh0LCBmbl0gaGFzIHVuZGVmaW5lZCBvciBudWxsIGBmbmBcIik7XG4gIH0gZWxzZSBpZiAob2JqZWN0KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yLmNvbnRleHQ7XG4gICAgZm4gPSBmbkRlc2NyaXB0b3IuZm47XG4gICAgY2hlY2soZm4sIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IG9mIHR5cGUge2NvbnRleHQsIGZufSBoYXMgdW5kZWZpbmVkIG9yIG51bGwgYGZuYFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhmbkRlc2NyaXB0b3IsIGZ1bmMsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgZm4gaXMgbm90IGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikpIHtcbiAgICBjaGVjayhjb250ZXh0W2ZuXSwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiBjb250ZXh0IGFyZ3VtZW50cyBoYXMgbm8gc3VjaCBtZXRob2QgLSBcXFwiXCIgKyBmbiArIFwiXFxcIlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGVjayhmbiwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiB1bnBhY2tlZCBmbiBhcmd1bWVudCAoZnJvbSBbY29udGV4dCwgZm5dIG9yIHtjb250ZXh0LCBmbn0pIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xufTtcblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGZ1bmMoZm5EZXNjcmlwdG9yKSkge1xuICAgIGZuID0gZm5EZXNjcmlwdG9yO1xuICB9IGVsc2Uge1xuICAgIGlmIChhcnJheShmbkRlc2NyaXB0b3IpKSB7XG4gICAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgICAgZm4gPSBmbkRlc2NyaXB0b3JbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3IuY29udGV4dDtcbiAgICAgIGZuID0gZm5EZXNjcmlwdG9yLmZuO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikgJiYgZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICAgIGZuID0gY29udGV4dFtmbl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGZuOiBmbixcbiAgICBhcmdzOiBhcmdzXG4gIH07XG59XG5cbnZhciBpc05vdERlbGF5RWZmZWN0ID0gZnVuY3Rpb24gaXNOb3REZWxheUVmZmVjdChmbikge1xuICByZXR1cm4gZm4gIT09IGRlbGF5O1xufTtcblxuZnVuY3Rpb24gY2FsbChmbkRlc2NyaXB0b3IpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgYXJnMCA9IHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJyA/IGFyZ3NbMF0gOiAnbXMnO1xuICAgIGNoZWNrKGZuRGVzY3JpcHRvciwgaXNOb3REZWxheUVmZmVjdCwgXCJpbnN0ZWFkIG9mIHdyaXRpbmcgYHlpZWxkIGNhbGwoZGVsYXksIFwiICsgYXJnMCArIFwiKWAgd2hlcmUgZGVsYXkgaXMgYW4gZWZmZWN0IGZyb20gYHJlZHV4LXNhZ2EvZWZmZWN0c2AgeW91IHNob3VsZCB3cml0ZSBgeWllbGQgZGVsYXkoXCIgKyBhcmcwICsgXCIpYFwiKTtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignY2FsbCcsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4sIGFyZ3MpIHtcbiAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGFyZ3MgPSBbXTtcbiAgfVxuXG4gIHZhciBmbkRlc2NyaXB0b3IgPSBbY29udGV4dCwgZm5dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2FwcGx5JywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2NyaXB0b3IoW2NvbnRleHQsIGZuXSwgYXJncykpO1xufVxuZnVuY3Rpb24gY3BzKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdjcHMnLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gZm9yayhmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignZm9yaycsIGZuRGVzY3JpcHRvcik7XG4gICAgY2hlY2soZm5EZXNjcmlwdG9yLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gIWVmZmVjdChhcmcpO1xuICAgIH0sICdmb3JrOiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhbiBlZmZlY3QnKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEZPUkssIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBzcGF3bihmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignc3Bhd24nLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGRldGFjaChmb3JrLmFwcGx5KHZvaWQgMCwgW2ZuRGVzY3JpcHRvcl0uY29uY2F0KGFyZ3MpKSk7XG59XG5mdW5jdGlvbiBqb2luKHRhc2tPclRhc2tzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pvaW4oLi4udGFza3MpIGlzIG5vdCBzdXBwb3J0ZWQgYW55IG1vcmUuIFBsZWFzZSB1c2Ugam9pbihbLi4udGFza3NdKSB0byBqb2luIG11bHRpcGxlIHRhc2tzLicpO1xuICAgIH1cblxuICAgIGlmIChhcnJheSh0YXNrT3JUYXNrcykpIHtcbiAgICAgIHRhc2tPclRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2hlY2sodCwgdGFzaywgXCJqb2luKFsuLi50YXNrc10pOiBhcmd1bWVudCBcIiArIHQgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2sodGFza09yVGFza3MsIHRhc2ssIFwiam9pbih0YXNrKTogYXJndW1lbnQgXCIgKyB0YXNrT3JUYXNrcyArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChKT0lOLCB0YXNrT3JUYXNrcyk7XG59XG5mdW5jdGlvbiBjYW5jZWwodGFza09yVGFza3MpIHtcbiAgaWYgKHRhc2tPclRhc2tzID09PSB2b2lkIDApIHtcbiAgICB0YXNrT3JUYXNrcyA9IFNFTEZfQ0FOQ0VMTEFUSU9OO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsKC4uLnRhc2tzKSBpcyBub3Qgc3VwcG9ydGVkIGFueSBtb3JlLiBQbGVhc2UgdXNlIGNhbmNlbChbLi4udGFza3NdKSB0byBjYW5jZWwgbXVsdGlwbGUgdGFza3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFycmF5KHRhc2tPclRhc2tzKSkge1xuICAgICAgdGFza09yVGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjaGVjayh0LCB0YXNrLCBcImNhbmNlbChbLi4udGFza3NdKTogYXJndW1lbnQgXCIgKyB0ICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YXNrT3JUYXNrcyAhPT0gU0VMRl9DQU5DRUxMQVRJT04gJiYgbm90VW5kZWYodGFza09yVGFza3MpKSB7XG4gICAgICBjaGVjayh0YXNrT3JUYXNrcywgdGFzaywgXCJjYW5jZWwodGFzayk6IGFyZ3VtZW50IFwiICsgdGFza09yVGFza3MgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FOQ0VMLCB0YXNrT3JUYXNrcyk7XG59XG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvciA9IGlkZW50aXR5O1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBhcmdzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgbm90VW5kZWYsICdzZWxlY3Qoc2VsZWN0b3IsIFsuLi5dKTogYXJndW1lbnQgc2VsZWN0b3IgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soc2VsZWN0b3IsIGZ1bmMsIFwic2VsZWN0KHNlbGVjdG9yLCBbLi4uXSk6IGFyZ3VtZW50IFwiICsgc2VsZWN0b3IgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFNFTEVDVCwge1xuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBhcmdzOiBhcmdzXG4gIH0pO1xufVxuLyoqXG4gIGNoYW5uZWwocGF0dGVybiwgW2J1ZmZlcl0pICAgID0+IGNyZWF0ZXMgYSBwcm94eSBjaGFubmVsIGZvciBzdG9yZSBhY3Rpb25zXG4qKi9cblxuZnVuY3Rpb24gYWN0aW9uQ2hhbm5lbChwYXR0ZXJuJDEsIGJ1ZmZlciQxKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socGF0dGVybiQxLCBwYXR0ZXJuLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgbm90IHZhbGlkJyk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNoZWNrKGJ1ZmZlciQxLCBub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgYnVmZmVyIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soYnVmZmVyJDEsIGJ1ZmZlciwgXCJhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IFwiICsgYnVmZmVyJDEgKyBcIiBpcyBub3QgYSB2YWxpZCBidWZmZXJcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQUNUSU9OX0NIQU5ORUwsIHtcbiAgICBwYXR0ZXJuOiBwYXR0ZXJuJDEsXG4gICAgYnVmZmVyOiBidWZmZXIkMVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNhbmNlbGxlZCgpIHtcbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5mdW5jdGlvbiBmbHVzaChjaGFubmVsJDEpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhjaGFubmVsJDEsIGNoYW5uZWwsIFwiZmx1c2goY2hhbm5lbCk6IGFyZ3VtZW50IFwiICsgY2hhbm5lbCQxICsgXCIgaXMgbm90IHZhbGlkIGNoYW5uZWxcIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGTFVTSCwgY2hhbm5lbCQxKTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQocHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHByb3AsIHN0cmluZywgXCJnZXRDb250ZXh0KHByb3ApOiBhcmd1bWVudCBcIiArIHByb3AgKyBcIiBpcyBub3QgYSBzdHJpbmdcIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socHJvcHMsIG9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcobnVsbCwgcHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFNFVF9DT05URVhULCBwcm9wcyk7XG59XG52YXIgZGVsYXkgPVxuLyojX19QVVJFX18qL1xuY2FsbC5iaW5kKG51bGwsIGRlbGF5UCk7XG5cbmV4cG9ydCB7IGFwcGx5IGFzICQsIEFMTCBhcyBBLCBsb2dFcnJvciBhcyBCLCBDQUxMIGFzIEMsIHdyYXBTYWdhRGlzcGF0Y2ggYXMgRCwgaWRlbnRpdHkgYXMgRSwgRk9SSyBhcyBGLCBHRVRfQ09OVEVYVCBhcyBHLCBidWZmZXJzIGFzIEgsIGRldGFjaCBhcyBJLCBKT0lOIGFzIEosIHRha2UgYXMgSywgZm9yayBhcyBMLCBjYW5jZWwgYXMgTSwgY2FsbCBhcyBOLCBhY3Rpb25DaGFubmVsIGFzIE8sIFBVVCBhcyBQLCBzbGlkaW5nIGFzIFEsIFJBQ0UgYXMgUiwgU0VMRUNUIGFzIFMsIFRBS0UgYXMgVCwgZGVsYXkgYXMgVSwgcmFjZSBhcyBWLCBlZmZlY3RUeXBlcyBhcyBXLCB0YWtlTWF5YmUgYXMgWCwgcHV0IGFzIFksIHB1dFJlc29sdmUgYXMgWiwgYWxsIGFzIF8sIENQUyBhcyBhLCBjcHMgYXMgYTAsIHNwYXduIGFzIGExLCBqb2luIGFzIGEyLCBzZWxlY3QgYXMgYTMsIGNhbmNlbGxlZCBhcyBhNCwgZmx1c2ggYXMgYTUsIGdldENvbnRleHQgYXMgYTYsIHNldENvbnRleHQgYXMgYTcsIENBTkNFTCBhcyBiLCBjaGVjayBhcyBjLCBBQ1RJT05fQ0hBTk5FTCBhcyBkLCBleHBhbmRpbmcgYXMgZSwgQ0FOQ0VMTEVEIGFzIGYsIEZMVVNIIGFzIGcsIFNFVF9DT05URVhUIGFzIGgsIGludGVybmFsRXJyIGFzIGksIGdldE1ldGFJbmZvIGFzIGosIGtUcnVlIGFzIGssIGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3MgYXMgbCwgY3JlYXRlRW1wdHlBcnJheSBhcyBtLCBub25lIGFzIG4sIG9uY2UgYXMgbywgYXNzaWduV2l0aFN5bWJvbHMgYXMgcCwgbWFrZUl0ZXJhdG9yIGFzIHEsIHJlbW92ZSBhcyByLCBzaG91bGRDb21wbGV0ZSBhcyBzLCBub29wIGFzIHQsIGZsYXRNYXAgYXMgdSwgZ2V0TG9jYXRpb24gYXMgdiwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgYXMgdywgYXN5bmNJdGVyYXRvclN5bWJvbCBhcyB4LCBzaG91bGRDYW5jZWwgYXMgeSwgc2hvdWxkVGVybWluYXRlIGFzIHogfTtcbiIsImltcG9ydCB7IENIQU5ORUxfRU5EX1RZUEUsIE1VTFRJQ0FTVCwgTUFUQ0gsIFNBR0FfQUNUSU9OLCBDQU5DRUwsIFNFTEZfQ0FOQ0VMTEFUSU9OLCBURVJNSU5BVEUsIFRBU0ssIFRBU0tfQ0FOQ0VMLCBJTyB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuZXhwb3J0IHsgQ0FOQ0VMLCBTQUdBX0xPQ0FUSU9OIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgeyBzdHJpbmcgYXMgc3RyaW5nJDEsIGFycmF5IGFzIGFycmF5JDEsIHN0cmluZ2FibGVGdW5jLCBmdW5jLCBzeW1ib2wgYXMgc3ltYm9sJDEsIGJ1ZmZlciwgbm90VW5kZWYsIHByb21pc2UsIGl0ZXJhdG9yLCB1bmRlZiwgb2JqZWN0LCBjaGFubmVsIGFzIGNoYW5uZWwkMSB9IGZyb20gJ0ByZWR1eC1zYWdhL2lzJztcbmltcG9ydCB7IGsgYXMga1RydWUsIGUgYXMgZXhwYW5kaW5nLCBjIGFzIGNoZWNrLCBvIGFzIG9uY2UsIHIgYXMgcmVtb3ZlLCBuIGFzIG5vbmUsIGkgYXMgaW50ZXJuYWxFcnIsIFQgYXMgVEFLRSwgUCBhcyBQVVQsIEEgYXMgQUxMLCBSIGFzIFJBQ0UsIEMgYXMgQ0FMTCwgYSBhcyBDUFMsIEYgYXMgRk9SSywgSiBhcyBKT0lOLCBiIGFzIENBTkNFTCQxLCBTIGFzIFNFTEVDVCwgZCBhcyBBQ1RJT05fQ0hBTk5FTCwgZiBhcyBDQU5DRUxMRUQkMSwgZyBhcyBGTFVTSCwgRyBhcyBHRVRfQ09OVEVYVCwgaCBhcyBTRVRfQ09OVEVYVCwgaiBhcyBnZXRNZXRhSW5mbywgbCBhcyBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzLCBtIGFzIGNyZWF0ZUVtcHR5QXJyYXksIHAgYXMgYXNzaWduV2l0aFN5bWJvbHMsIHEgYXMgbWFrZUl0ZXJhdG9yLCBzIGFzIHNob3VsZENvbXBsZXRlLCB0IGFzIG5vb3AsIHUgYXMgZmxhdE1hcCwgdiBhcyBnZXRMb2NhdGlvbiwgdyBhcyBjcmVhdGVTZXRDb250ZXh0V2FybmluZywgeCBhcyBhc3luY0l0ZXJhdG9yU3ltYm9sLCB5IGFzIHNob3VsZENhbmNlbCwgeiBhcyBzaG91bGRUZXJtaW5hdGUsIEIgYXMgbG9nRXJyb3IsIEQgYXMgd3JhcFNhZ2FEaXNwYXRjaCwgRSBhcyBpZGVudGl0eSB9IGZyb20gJy4vaW8tNDAzNDFlMWEuanMnO1xuZXhwb3J0IHsgSCBhcyBidWZmZXJzLCBJIGFzIGRldGFjaCB9IGZyb20gJy4vaW8tNDAzNDFlMWEuanMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBkZWZlcnJlZCBmcm9tICdAcmVkdXgtc2FnYS9kZWZlcnJlZCc7XG5pbXBvcnQgJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIgcXVldWUgPSBbXTtcbi8qKlxuICBWYXJpYWJsZSB0byBob2xkIGEgY291bnRpbmcgc2VtYXBob3JlXG4gIC0gSW5jcmVtZW50aW5nIGFkZHMgYSBsb2NrIGFuZCBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSAoaWYgaXQncyBub3RcbiAgICBhbHJlYWR5IHN1c3BlbmRlZClcbiAgLSBEZWNyZW1lbnRpbmcgcmVsZWFzZXMgYSBsb2NrLiBaZXJvIGxvY2tzIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuIFRoaXNcbiAgICB0cmlnZ2VycyBmbHVzaGluZyB0aGUgcXVldWVkIHRhc2tzLlxuKiovXG5cbnZhciBzZW1hcGhvcmUgPSAwO1xuLyoqXG4gIEV4ZWN1dGVzIGEgdGFzayAnYXRvbWljYWxseScuIFRhc2tzIHNjaGVkdWxlZCBkdXJpbmcgdGhpcyBleGVjdXRpb24gd2lsbCBiZSBxdWV1ZWRcbiAgYW5kIGZsdXNoZWQgYWZ0ZXIgdGhpcyB0YXNrIGhhcyBmaW5pc2hlZCAoYXNzdW1pbmcgdGhlIHNjaGVkdWxlciBlbmR1cCBpbiBhIHJlbGVhc2VkXG4gIHN0YXRlKS5cbioqL1xuXG5mdW5jdGlvbiBleGVjKHRhc2spIHtcbiAgdHJ5IHtcbiAgICBzdXNwZW5kKCk7XG4gICAgdGFzaygpO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbGVhc2UoKTtcbiAgfVxufVxuLyoqXG4gIEV4ZWN1dGVzIG9yIHF1ZXVlcyBhIHRhc2sgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIChgc3VzcGVuZGVkYCBvciBgcmVsZWFzZWRgKVxuKiovXG5cblxuZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gIHF1ZXVlLnB1c2godGFzayk7XG5cbiAgaWYgKCFzZW1hcGhvcmUpIHtcbiAgICBzdXNwZW5kKCk7XG4gICAgZmx1c2goKTtcbiAgfVxufVxuLyoqXG4gKiBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSBhbmQgZXhlY3V0ZXMgYSB0YXNrIGltbWVkaWF0ZWx5LlxuICovXG5cbmZ1bmN0aW9uIGltbWVkaWF0ZWx5KHRhc2spIHtcbiAgdHJ5IHtcbiAgICBzdXNwZW5kKCk7XG4gICAgcmV0dXJuIHRhc2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmbHVzaCgpO1xuICB9XG59XG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUuIFNjaGVkdWxlZCB0YXNrcyB3aWxsIGJlIHF1ZXVlZCB1bnRpbCB0aGVcbiAgc2NoZWR1bGVyIGlzIHJlbGVhc2VkLlxuKiovXG5cbmZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gIHNlbWFwaG9yZSsrO1xufVxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuXG4qKi9cblxuXG5mdW5jdGlvbiByZWxlYXNlKCkge1xuICBzZW1hcGhvcmUtLTtcbn1cbi8qKlxuICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuKiovXG5cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIHJlbGVhc2UoKTtcbiAgdmFyIHRhc2s7XG5cbiAgd2hpbGUgKCFzZW1hcGhvcmUgJiYgKHRhc2sgPSBxdWV1ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXhlYyh0YXNrKTtcbiAgfVxufVxuXG52YXIgYXJyYXkgPSBmdW5jdGlvbiBhcnJheShwYXR0ZXJucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBtYXRjaGVyKHApKGlucHV0KTtcbiAgICB9KTtcbiAgfTtcbn07XG52YXIgcHJlZGljYXRlID0gZnVuY3Rpb24gcHJlZGljYXRlKF9wcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBfcHJlZGljYXRlKGlucHV0KTtcbiAgfTtcbn07XG52YXIgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC50eXBlID09PSBTdHJpbmcocGF0dGVybik7XG4gIH07XG59O1xudmFyIHN5bWJvbCA9IGZ1bmN0aW9uIHN5bWJvbChwYXR0ZXJuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQudHlwZSA9PT0gcGF0dGVybjtcbiAgfTtcbn07XG52YXIgd2lsZGNhcmQgPSBmdW5jdGlvbiB3aWxkY2FyZCgpIHtcbiAgcmV0dXJuIGtUcnVlO1xufTtcbmZ1bmN0aW9uIG1hdGNoZXIocGF0dGVybikge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgdmFyIG1hdGNoZXJDcmVhdG9yID0gcGF0dGVybiA9PT0gJyonID8gd2lsZGNhcmQgOiBzdHJpbmckMShwYXR0ZXJuKSA/IHN0cmluZyA6IGFycmF5JDEocGF0dGVybikgPyBhcnJheSA6IHN0cmluZ2FibGVGdW5jKHBhdHRlcm4pID8gc3RyaW5nIDogZnVuYyhwYXR0ZXJuKSA/IHByZWRpY2F0ZSA6IHN5bWJvbCQxKHBhdHRlcm4pID8gc3ltYm9sIDogbnVsbDtcblxuICBpZiAobWF0Y2hlckNyZWF0b3IgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHBhdHRlcm46IFwiICsgcGF0dGVybik7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlckNyZWF0b3IocGF0dGVybik7XG59XG5cbnZhciBFTkQgPSB7XG4gIHR5cGU6IENIQU5ORUxfRU5EX1RZUEVcbn07XG52YXIgaXNFbmQgPSBmdW5jdGlvbiBpc0VuZChhKSB7XG4gIHJldHVybiBhICYmIGEudHlwZSA9PT0gQ0hBTk5FTF9FTkRfVFlQRTtcbn07XG52YXIgQ0xPU0VEX0NIQU5ORUxfV0lUSF9UQUtFUlMgPSAnQ2Fubm90IGhhdmUgYSBjbG9zZWQgY2hhbm5lbCB3aXRoIHBlbmRpbmcgdGFrZXJzJztcbnZhciBJTlZBTElEX0JVRkZFUiA9ICdpbnZhbGlkIGJ1ZmZlciBwYXNzZWQgdG8gY2hhbm5lbCBmYWN0b3J5IGZ1bmN0aW9uJztcbnZhciBVTkRFRklORURfSU5QVVRfRVJST1IgPSBcIlNhZ2Egb3IgY2hhbm5lbCB3YXMgcHJvdmlkZWQgd2l0aCBhbiB1bmRlZmluZWQgYWN0aW9uXFxuSGludHM6XFxuICAtIGNoZWNrIHRoYXQgeW91ciBBY3Rpb24gQ3JlYXRvciByZXR1cm5zIGEgbm9uLXVuZGVmaW5lZCB2YWx1ZVxcbiAgLSBpZiB0aGUgU2FnYSB3YXMgc3RhcnRlZCB1c2luZyBydW5TYWdhLCBjaGVjayB0aGF0IHlvdXIgc3Vic2NyaWJlIHNvdXJjZSBwcm92aWRlcyB0aGUgYWN0aW9uIHRvIGl0cyBsaXN0ZW5lcnNcIjtcbmZ1bmN0aW9uIGNoYW5uZWwoYnVmZmVyJDEpIHtcbiAgaWYgKGJ1ZmZlciQxID09PSB2b2lkIDApIHtcbiAgICBidWZmZXIkMSA9IGV4cGFuZGluZygpO1xuICB9XG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICB2YXIgdGFrZXJzID0gW107XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhidWZmZXIkMSwgYnVmZmVyLCBJTlZBTElEX0JVRkZFUik7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvcmJpZGRlblN0YXRlcygpIHtcbiAgICBpZiAoY2xvc2VkICYmIHRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKENMT1NFRF9DSEFOTkVMX1dJVEhfVEFLRVJTKTtcbiAgICB9XG5cbiAgICBpZiAodGFrZXJzLmxlbmd0aCAmJiAhYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignQ2Fubm90IGhhdmUgcGVuZGluZyB0YWtlcnMgd2l0aCBub24gZW1wdHkgYnVmZmVyJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhpbnB1dCwgbm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YWtlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmZmVyJDEucHV0KGlucHV0KTtcbiAgICB9XG5cbiAgICB2YXIgY2IgPSB0YWtlcnMuc2hpZnQoKTtcbiAgICBjYihpbnB1dCk7XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlKGNiKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhjYiwgZnVuYywgXCJjaGFubmVsLnRha2UncyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIkMS5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgfSBlbHNlIGlmICghYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICBjYihidWZmZXIkMS50YWtlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWtlcnMucHVzaChjYik7XG5cbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlKHRha2VycywgY2IpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaChjYikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICAgY2hlY2soY2IsIGZ1bmMsIFwiY2hhbm5lbC5mbHVzaCcgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQgJiYgYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiKGJ1ZmZlciQxLmZsdXNoKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsb3NlZCA9IHRydWU7XG4gICAgdmFyIGFyciA9IHRha2VycztcbiAgICB0YWtlcnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB0YWtlciA9IGFycltpXTtcbiAgICAgIHRha2VyKEVORCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiB0YWtlLFxuICAgIHB1dDogcHV0LFxuICAgIGZsdXNoOiBmbHVzaCxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn1cbmZ1bmN0aW9uIGV2ZW50Q2hhbm5lbChzdWJzY3JpYmUsIGJ1ZmZlcikge1xuICBpZiAoYnVmZmVyID09PSB2b2lkIDApIHtcbiAgICBidWZmZXIgPSBub25lKCk7XG4gIH1cblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciB1bnN1YnNjcmliZTtcbiAgdmFyIGNoYW4gPSBjaGFubmVsKGJ1ZmZlcik7XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsb3NlZCA9IHRydWU7XG5cbiAgICBpZiAoZnVuYyh1bnN1YnNjcmliZSkpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY2hhbi5jbG9zZSgpO1xuICB9O1xuXG4gIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpc0VuZChpbnB1dCkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hhbi5wdXQoaW5wdXQpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHVuc3Vic2NyaWJlLCBmdW5jLCAnaW4gZXZlbnRDaGFubmVsOiBzdWJzY3JpYmUgc2hvdWxkIHJldHVybiBhIGZ1bmN0aW9uIHRvIHVuc3Vic2NyaWJlJyk7XG4gIH1cblxuICB1bnN1YnNjcmliZSA9IG9uY2UodW5zdWJzY3JpYmUpO1xuXG4gIGlmIChjbG9zZWQpIHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiBjaGFuLnRha2UsXG4gICAgZmx1c2g6IGNoYW4uZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59XG5mdW5jdGlvbiBtdWx0aWNhc3RDaGFubmVsKCkge1xuICB2YXIgX3JlZjtcblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciBjdXJyZW50VGFrZXJzID0gW107XG4gIHZhciBuZXh0VGFrZXJzID0gY3VycmVudFRha2VycztcblxuICBmdW5jdGlvbiBjaGVja0ZvcmJpZGRlblN0YXRlcygpIHtcbiAgICBpZiAoY2xvc2VkICYmIG5leHRUYWtlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycihDTE9TRURfQ0hBTk5FTF9XSVRIX1RBS0VSUyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVuc3VyZUNhbk11dGF0ZU5leHRUYWtlcnMgPSBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0VGFrZXJzKCkge1xuICAgIGlmIChuZXh0VGFrZXJzICE9PSBjdXJyZW50VGFrZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dFRha2VycyA9IGN1cnJlbnRUYWtlcnMuc2xpY2UoKTtcbiAgfTtcblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBjbG9zZWQgPSB0cnVlO1xuICAgIHZhciB0YWtlcnMgPSBjdXJyZW50VGFrZXJzID0gbmV4dFRha2VycztcbiAgICBuZXh0VGFrZXJzID0gW107XG4gICAgdGFrZXJzLmZvckVhY2goZnVuY3Rpb24gKHRha2VyKSB7XG4gICAgICB0YWtlcihFTkQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbTVVMVElDQVNUXSA9IHRydWUsIF9yZWYucHV0ID0gZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhpbnB1dCwgbm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0VuZChpbnB1dCkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRha2VycyA9IGN1cnJlbnRUYWtlcnMgPSBuZXh0VGFrZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRha2Vycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIHRha2VyID0gdGFrZXJzW2ldO1xuXG4gICAgICBpZiAodGFrZXJbTUFUQ0hdKGlucHV0KSkge1xuICAgICAgICB0YWtlci5jYW5jZWwoKTtcbiAgICAgICAgdGFrZXIoaW5wdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgX3JlZi50YWtlID0gZnVuY3Rpb24gdGFrZShjYiwgbWF0Y2hlcikge1xuICAgIGlmIChtYXRjaGVyID09PSB2b2lkIDApIHtcbiAgICAgIG1hdGNoZXIgPSB3aWxkY2FyZDtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiW01BVENIXSA9IG1hdGNoZXI7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dFRha2VycygpO1xuICAgIG5leHRUYWtlcnMucHVzaChjYik7XG4gICAgY2IuY2FuY2VsID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0VGFrZXJzKCk7XG4gICAgICByZW1vdmUobmV4dFRha2VycywgY2IpO1xuICAgIH0pO1xuICB9LCBfcmVmLmNsb3NlID0gY2xvc2UsIF9yZWY7XG59XG5mdW5jdGlvbiBzdGRDaGFubmVsKCkge1xuICB2YXIgY2hhbiA9IG11bHRpY2FzdENoYW5uZWwoKTtcbiAgdmFyIHB1dCA9IGNoYW4ucHV0O1xuXG4gIGNoYW4ucHV0ID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0W1NBR0FfQUNUSU9OXSkge1xuICAgICAgcHV0KGlucHV0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHB1dChpbnB1dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNoYW47XG59XG5cbnZhciBSVU5OSU5HID0gMDtcbnZhciBDQU5DRUxMRUQgPSAxO1xudmFyIEFCT1JURUQgPSAyO1xudmFyIERPTkUgPSAzO1xuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBjYikge1xuICB2YXIgY2FuY2VsUHJvbWlzZSA9IHByb21pc2VbQ0FOQ0VMXTtcblxuICBpZiAoZnVuYyhjYW5jZWxQcm9taXNlKSkge1xuICAgIGNiLmNhbmNlbCA9IGNhbmNlbFByb21pc2U7XG4gIH1cblxuICBwcm9taXNlLnRoZW4oY2IsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfSk7XG59XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBuZXh0U2FnYUlkID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICsrY3VycmVudDtcbn0pO1xuXG52YXIgX2VmZmVjdFJ1bm5lck1hcDtcblxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JNZXRhSW5mbyhpdGVyYXRvciwgZm4pIHtcbiAgaWYgKGl0ZXJhdG9yLmlzU2FnYUl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGl0ZXJhdG9yLm1ldGEubmFtZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZ2V0TWV0YUluZm8oZm4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSXRlcmF0b3IoX3JlZikge1xuICB2YXIgY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIGZuID0gX3JlZi5mbixcbiAgICAgIGFyZ3MgPSBfcmVmLmFyZ3M7XG5cbiAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyIGFuZCAjNDQxXG4gIHRyeSB7XG4gICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyAvLyBpLmUuIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybnMgYW4gaXRlcmF0b3JcblxuICAgIGlmIChpdGVyYXRvcihyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGFyZykge1xuICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICByZXNvbHZlZCA9IHRydWU7IC8vIE9ubHkgcHJvbWlzZXMgcmV0dXJuZWQgZnJvbSBmb3JrIHdpbGwgYmUgaW50ZXJwcmV0ZWQuIFNlZSAjMTU3M1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgICBkb25lOiAhcHJvbWlzZShyZXN1bHQpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBhcmcsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKG5leHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBkbyBub3QgYnViYmxlIHVwIHN5bmNocm9ub3VzIGZhaWx1cmVzIGZvciBkZXRhY2hlZCBmb3Jrc1xuICAgIC8vIGluc3RlYWQgY3JlYXRlIGEgZmFpbGVkIHRhc2suIFNlZSAjMTUyIGFuZCAjNDQxXG4gICAgcmV0dXJuIG1ha2VJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuUHV0RWZmZWN0KGVudiwgX3JlZjIsIGNiKSB7XG4gIHZhciBjaGFubmVsID0gX3JlZjIuY2hhbm5lbCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbixcbiAgICAgIHJlc29sdmUgPSBfcmVmMi5yZXNvbHZlO1xuXG4gIC8qKlxuICAgU2NoZWR1bGUgdGhlIHB1dCBpbiBjYXNlIGFub3RoZXIgc2FnYSBpcyBob2xkaW5nIGEgbG9jay5cbiAgIFRoZSBwdXQgd2lsbCBiZSBleGVjdXRlZCBhdG9taWNhbGx5LiBpZSBuZXN0ZWQgcHV0cyB3aWxsIGV4ZWN1dGUgYWZ0ZXJcbiAgIHRoaXMgcHV0IGhhcyB0ZXJtaW5hdGVkLlxuICAgKiovXG4gIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gKGNoYW5uZWwgPyBjaGFubmVsLnB1dCA6IGVudi5kaXNwYXRjaCkoYWN0aW9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2IoZXJyb3IsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXNvbHZlICYmIHByb21pc2UocmVzdWx0KSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UocmVzdWx0LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKHJlc3VsdCk7XG4gICAgfVxuICB9KTsgLy8gUHV0IGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcbn1cblxuZnVuY3Rpb24gcnVuVGFrZUVmZmVjdChlbnYsIF9yZWYzLCBjYikge1xuICB2YXIgX3JlZjMkY2hhbm5lbCA9IF9yZWYzLmNoYW5uZWwsXG4gICAgICBjaGFubmVsID0gX3JlZjMkY2hhbm5lbCA9PT0gdm9pZCAwID8gZW52LmNoYW5uZWwgOiBfcmVmMyRjaGFubmVsLFxuICAgICAgcGF0dGVybiA9IF9yZWYzLnBhdHRlcm4sXG4gICAgICBtYXliZSA9IF9yZWYzLm1heWJlO1xuXG4gIHZhciB0YWtlQ2IgPSBmdW5jdGlvbiB0YWtlQ2IoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY2IoaW5wdXQsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0VuZChpbnB1dCkgJiYgIW1heWJlKSB7XG4gICAgICBjYihURVJNSU5BVEUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiKGlucHV0KTtcbiAgfTtcblxuICB0cnkge1xuICAgIGNoYW5uZWwudGFrZSh0YWtlQ2IsIG5vdFVuZGVmKHBhdHRlcm4pID8gbWF0Y2hlcihwYXR0ZXJuKSA6IG51bGwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYihlcnIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNiLmNhbmNlbCA9IHRha2VDYi5jYW5jZWw7XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbGxFZmZlY3QoZW52LCBfcmVmNCwgY2IsIF9yZWY1KSB7XG4gIHZhciBjb250ZXh0ID0gX3JlZjQuY29udGV4dCxcbiAgICAgIGZuID0gX3JlZjQuZm4sXG4gICAgICBhcmdzID0gX3JlZjQuYXJncztcbiAgdmFyIHRhc2sgPSBfcmVmNS50YXNrO1xuXG4gIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MlxuICB0cnkge1xuICAgIHZhciByZXN1bHQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblxuICAgIGlmIChwcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKHJlc3VsdCwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpdGVyYXRvcihyZXN1bHQpKSB7XG4gICAgICAvLyByZXNvbHZlIGl0ZXJhdG9yXG4gICAgICBwcm9jKGVudiwgcmVzdWx0LCB0YXNrLmNvbnRleHQsIGN1cnJlbnQsIGdldE1ldGFJbmZvKGZuKSxcbiAgICAgIC8qIGlzUm9vdCAqL1xuICAgICAgZmFsc2UsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DUFNFZmZlY3QoZW52LCBfcmVmNiwgY2IpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmNi5jb250ZXh0LFxuICAgICAgZm4gPSBfcmVmNi5mbixcbiAgICAgIGFyZ3MgPSBfcmVmNi5hcmdzO1xuXG4gIC8vIENQUyAoaWUgbm9kZSBzdHlsZSBmdW5jdGlvbnMpIGNhbiBkZWZpbmUgdGhlaXIgb3duIGNhbmNlbGxhdGlvbiBsb2dpY1xuICAvLyBieSBzZXR0aW5nIGNhbmNlbCBmaWVsZCBvbiB0aGUgY2JcbiAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyXG4gIHRyeSB7XG4gICAgdmFyIGNwc0NiID0gZnVuY3Rpb24gY3BzQ2IoZXJyLCByZXMpIHtcbiAgICAgIGlmICh1bmRlZihlcnIpKSB7XG4gICAgICAgIGNiKHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYihlcnIsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChjcHNDYikpO1xuXG4gICAgaWYgKGNwc0NiLmNhbmNlbCkge1xuICAgICAgY2IuY2FuY2VsID0gY3BzQ2IuY2FuY2VsO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjYihlcnJvciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuRm9ya0VmZmVjdChlbnYsIF9yZWY3LCBjYiwgX3JlZjgpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmNy5jb250ZXh0LFxuICAgICAgZm4gPSBfcmVmNy5mbixcbiAgICAgIGFyZ3MgPSBfcmVmNy5hcmdzLFxuICAgICAgZGV0YWNoZWQgPSBfcmVmNy5kZXRhY2hlZDtcbiAgdmFyIHBhcmVudCA9IF9yZWY4LnRhc2s7XG4gIHZhciB0YXNrSXRlcmF0b3IgPSBjcmVhdGVUYXNrSXRlcmF0b3Ioe1xuICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgZm46IGZuLFxuICAgIGFyZ3M6IGFyZ3NcbiAgfSk7XG4gIHZhciBtZXRhID0gZ2V0SXRlcmF0b3JNZXRhSW5mbyh0YXNrSXRlcmF0b3IsIGZuKTtcbiAgaW1tZWRpYXRlbHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGlsZCA9IHByb2MoZW52LCB0YXNrSXRlcmF0b3IsIHBhcmVudC5jb250ZXh0LCBjdXJyZW50LCBtZXRhLCBkZXRhY2hlZCwgdW5kZWZpbmVkKTtcblxuICAgIGlmIChkZXRhY2hlZCkge1xuICAgICAgY2IoY2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hpbGQuaXNSdW5uaW5nKCkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXVlLmFkZFRhc2soY2hpbGQpO1xuICAgICAgICBjYihjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLmlzQWJvcnRlZCgpKSB7XG4gICAgICAgIHBhcmVudC5xdWV1ZS5hYm9ydChjaGlsZC5lcnJvcigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBGb3JrIGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcbn1cblxuZnVuY3Rpb24gcnVuSm9pbkVmZmVjdChlbnYsIHRhc2tPclRhc2tzLCBjYiwgX3JlZjkpIHtcbiAgdmFyIHRhc2sgPSBfcmVmOS50YXNrO1xuXG4gIHZhciBqb2luU2luZ2xlVGFzayA9IGZ1bmN0aW9uIGpvaW5TaW5nbGVUYXNrKHRhc2tUb0pvaW4sIGNiKSB7XG4gICAgaWYgKHRhc2tUb0pvaW4uaXNSdW5uaW5nKCkpIHtcbiAgICAgIHZhciBqb2luZXIgPSB7XG4gICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgIGNiOiBjYlxuICAgICAgfTtcblxuICAgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFza1RvSm9pbi5pc1J1bm5pbmcoKSkgcmVtb3ZlKHRhc2tUb0pvaW4uam9pbmVycywgam9pbmVyKTtcbiAgICAgIH07XG5cbiAgICAgIHRhc2tUb0pvaW4uam9pbmVycy5wdXNoKGpvaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0YXNrVG9Kb2luLmlzQWJvcnRlZCgpKSB7XG4gICAgICAgIGNiKHRhc2tUb0pvaW4uZXJyb3IoKSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYih0YXNrVG9Kb2luLnJlc3VsdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKGFycmF5JDEodGFza09yVGFza3MpKSB7XG4gICAgaWYgKHRhc2tPclRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2IoW10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZENhbGxiYWNrcyA9IGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3ModGFza09yVGFza3MsIGNiKTtcbiAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICBqb2luU2luZ2xlVGFzayh0LCBjaGlsZENhbGxiYWNrc1tpXSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgam9pblNpbmdsZVRhc2sodGFza09yVGFza3MsIGNiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxTaW5nbGVUYXNrKHRhc2tUb0NhbmNlbCkge1xuICBpZiAodGFza1RvQ2FuY2VsLmlzUnVubmluZygpKSB7XG4gICAgdGFza1RvQ2FuY2VsLmNhbmNlbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbmNlbEVmZmVjdChlbnYsIHRhc2tPclRhc2tzLCBjYiwgX3JlZjEwKSB7XG4gIHZhciB0YXNrID0gX3JlZjEwLnRhc2s7XG5cbiAgaWYgKHRhc2tPclRhc2tzID09PSBTRUxGX0NBTkNFTExBVElPTikge1xuICAgIGNhbmNlbFNpbmdsZVRhc2sodGFzayk7XG4gIH0gZWxzZSBpZiAoYXJyYXkkMSh0YXNrT3JUYXNrcykpIHtcbiAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGNhbmNlbFNpbmdsZVRhc2spO1xuICB9IGVsc2Uge1xuICAgIGNhbmNlbFNpbmdsZVRhc2sodGFza09yVGFza3MpO1xuICB9XG5cbiAgY2IoKTsgLy8gY2FuY2VsIGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcbn1cblxuZnVuY3Rpb24gcnVuQWxsRWZmZWN0KGVudiwgZWZmZWN0cywgY2IsIF9yZWYxMSkge1xuICB2YXIgZGlnZXN0RWZmZWN0ID0gX3JlZjExLmRpZ2VzdEVmZmVjdDtcbiAgdmFyIGVmZmVjdElkID0gY3VycmVudDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBjYihhcnJheSQxKGVmZmVjdHMpID8gW10gOiB7fSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNoaWxkQ2FsbGJhY2tzID0gY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcyhlZmZlY3RzLCBjYik7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGlnZXN0RWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGNoaWxkQ2FsbGJhY2tzW2tleV0sIGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW5SYWNlRWZmZWN0KGVudiwgZWZmZWN0cywgY2IsIF9yZWYxMikge1xuICB2YXIgZGlnZXN0RWZmZWN0ID0gX3JlZjEyLmRpZ2VzdEVmZmVjdDtcbiAgdmFyIGVmZmVjdElkID0gY3VycmVudDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcbiAgdmFyIHJlc3BvbnNlID0gYXJyYXkkMShlZmZlY3RzKSA/IGNyZWF0ZUVtcHR5QXJyYXkoa2V5cy5sZW5ndGgpIDoge307XG4gIHZhciBjaGlsZENicyA9IHt9O1xuICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoQ2JBdEtleSA9IGZ1bmN0aW9uIGNoQ2JBdEtleShyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyIHx8IHNob3VsZENvbXBsZXRlKHJlcykpIHtcbiAgICAgICAgLy8gUmFjZSBBdXRvIGNhbmNlbGxhdGlvblxuICAgICAgICBjYi5jYW5jZWwoKTtcbiAgICAgICAgY2IocmVzLCBpc0Vycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYi5jYW5jZWwoKTtcbiAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzcG9uc2Vba2V5XSA9IHJlcztcbiAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaENiQXRLZXkuY2FuY2VsID0gbm9vcDtcbiAgICBjaGlsZENic1trZXldID0gY2hDYkF0S2V5O1xuICB9KTtcblxuICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gcHJldmVudHMgdW5uZWNlc3NhcnkgY2FuY2VsbGF0aW9uXG4gICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gY2hpbGRDYnNba2V5XS5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWdlc3RFZmZlY3QoZWZmZWN0c1trZXldLCBlZmZlY3RJZCwgY2hpbGRDYnNba2V5XSwga2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJ1blNlbGVjdEVmZmVjdChlbnYsIF9yZWYxMywgY2IpIHtcbiAgdmFyIHNlbGVjdG9yID0gX3JlZjEzLnNlbGVjdG9yLFxuICAgICAgYXJncyA9IF9yZWYxMy5hcmdzO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN0YXRlID0gc2VsZWN0b3IuYXBwbHkodm9pZCAwLCBbZW52LmdldFN0YXRlKCldLmNvbmNhdChhcmdzKSk7XG4gICAgY2Ioc3RhdGUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DaGFubmVsRWZmZWN0KGVudiwgX3JlZjE0LCBjYikge1xuICB2YXIgcGF0dGVybiA9IF9yZWYxNC5wYXR0ZXJuLFxuICAgICAgYnVmZmVyID0gX3JlZjE0LmJ1ZmZlcjtcbiAgdmFyIGNoYW4gPSBjaGFubmVsKGJ1ZmZlcik7XG4gIHZhciBtYXRjaCA9IG1hdGNoZXIocGF0dGVybik7XG5cbiAgdmFyIHRha2VyID0gZnVuY3Rpb24gdGFrZXIoYWN0aW9uKSB7XG4gICAgaWYgKCFpc0VuZChhY3Rpb24pKSB7XG4gICAgICBlbnYuY2hhbm5lbC50YWtlKHRha2VyLCBtYXRjaCk7XG4gICAgfVxuXG4gICAgY2hhbi5wdXQoYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgY2xvc2UgPSBjaGFuLmNsb3NlO1xuXG4gIGNoYW4uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFrZXIuY2FuY2VsKCk7XG4gICAgY2xvc2UoKTtcbiAgfTtcblxuICBlbnYuY2hhbm5lbC50YWtlKHRha2VyLCBtYXRjaCk7XG4gIGNiKGNoYW4pO1xufVxuXG5mdW5jdGlvbiBydW5DYW5jZWxsZWRFZmZlY3QoZW52LCBkYXRhLCBjYiwgX3JlZjE1KSB7XG4gIHZhciB0YXNrID0gX3JlZjE1LnRhc2s7XG4gIGNiKHRhc2suaXNDYW5jZWxsZWQoKSk7XG59XG5cbmZ1bmN0aW9uIHJ1bkZsdXNoRWZmZWN0KGVudiwgY2hhbm5lbCwgY2IpIHtcbiAgY2hhbm5lbC5mbHVzaChjYik7XG59XG5cbmZ1bmN0aW9uIHJ1bkdldENvbnRleHRFZmZlY3QoZW52LCBwcm9wLCBjYiwgX3JlZjE2KSB7XG4gIHZhciB0YXNrID0gX3JlZjE2LnRhc2s7XG4gIGNiKHRhc2suY29udGV4dFtwcm9wXSk7XG59XG5cbmZ1bmN0aW9uIHJ1blNldENvbnRleHRFZmZlY3QoZW52LCBwcm9wcywgY2IsIF9yZWYxNykge1xuICB2YXIgdGFzayA9IF9yZWYxNy50YXNrO1xuICBhc3NpZ25XaXRoU3ltYm9scyh0YXNrLmNvbnRleHQsIHByb3BzKTtcbiAgY2IoKTtcbn1cblxudmFyIGVmZmVjdFJ1bm5lck1hcCA9IChfZWZmZWN0UnVubmVyTWFwID0ge30sIF9lZmZlY3RSdW5uZXJNYXBbVEFLRV0gPSBydW5UYWtlRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW1BVVF0gPSBydW5QdXRFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQUxMXSA9IHJ1bkFsbEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtSQUNFXSA9IHJ1blJhY2VFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQ0FMTF0gPSBydW5DYWxsRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0NQU10gPSBydW5DUFNFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbRk9SS10gPSBydW5Gb3JrRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0pPSU5dID0gcnVuSm9pbkVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtDQU5DRUwkMV0gPSBydW5DYW5jZWxFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbU0VMRUNUXSA9IHJ1blNlbGVjdEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtBQ1RJT05fQ0hBTk5FTF0gPSBydW5DaGFubmVsRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0NBTkNFTExFRCQxXSA9IHJ1bkNhbmNlbGxlZEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtGTFVTSF0gPSBydW5GbHVzaEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtHRVRfQ09OVEVYVF0gPSBydW5HZXRDb250ZXh0RWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW1NFVF9DT05URVhUXSA9IHJ1blNldENvbnRleHRFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXApO1xuXG4vKipcbiBVc2VkIHRvIHRyYWNrIGEgcGFyZW50IHRhc2sgYW5kIGl0cyBmb3Jrc1xuIEluIHRoZSBmb3JrIG1vZGVsLCBmb3JrZWQgdGFza3MgYXJlIGF0dGFjaGVkIGJ5IGRlZmF1bHQgdG8gdGhlaXIgcGFyZW50XG4gV2UgbW9kZWwgdGhpcyB1c2luZyB0aGUgY29uY2VwdCBvZiBQYXJlbnQgdGFzayAmJiBtYWluIFRhc2tcbiBtYWluIHRhc2sgaXMgdGhlIG1haW4gZmxvdyBvZiB0aGUgY3VycmVudCBHZW5lcmF0b3IsIHRoZSBwYXJlbnQgdGFza3MgaXMgdGhlXG4gYWdncmVnYXRpb24gb2YgdGhlIG1haW4gdGFza3MgKyBhbGwgaXRzIGZvcmtlZCB0YXNrcy5cbiBUaHVzIHRoZSB3aG9sZSBtb2RlbCByZXByZXNlbnRzIGFuIGV4ZWN1dGlvbiB0cmVlIHdpdGggbXVsdGlwbGUgYnJhbmNoZXMgKHZzIHRoZVxuIGxpbmVhciBleGVjdXRpb24gdHJlZSBpbiBzZXF1ZW50aWFsIChub24gcGFyYWxsZWwpIHByb2dyYW1taW5nKVxuXG4gQSBwYXJlbnQgdGFza3MgaGFzIHRoZSBmb2xsb3dpbmcgc2VtYW50aWNzXG4gLSBJdCBjb21wbGV0ZXMgaWYgYWxsIGl0cyBmb3JrcyBlaXRoZXIgY29tcGxldGUgb3IgYWxsIGNhbmNlbGxlZFxuIC0gSWYgaXQncyBjYW5jZWxsZWQsIGFsbCBmb3JrcyBhcmUgY2FuY2VsbGVkIGFzIHdlbGxcbiAtIEl0IGFib3J0cyBpZiBhbnkgdW5jYXVnaHQgZXJyb3IgYnViYmxlcyB1cCBmcm9tIGZvcmtzXG4gLSBJZiBpdCBjb21wbGV0ZXMsIHRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIG9uZSByZXR1cm5lZCBieSB0aGUgbWFpbiB0YXNrXG4gKiovXG5cbmZ1bmN0aW9uIGZvcmtRdWV1ZShtYWluVGFzaywgb25BYm9ydCwgY29udCkge1xuICB2YXIgdGFza3MgPSBbXTtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICBhZGRUYXNrKG1haW5UYXNrKTtcblxuICB2YXIgZ2V0VGFza3MgPSBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWJvcnQoZXJyKSB7XG4gICAgb25BYm9ydCgpO1xuICAgIGNhbmNlbEFsbCgpO1xuICAgIGNvbnQoZXJyLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG5cbiAgICB0YXNrLmNvbnQgPSBmdW5jdGlvbiAocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZSh0YXNrcywgdGFzayk7XG4gICAgICB0YXNrLmNvbnQgPSBub29wO1xuXG4gICAgICBpZiAoaXNFcnIpIHtcbiAgICAgICAgYWJvcnQocmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXNrID09PSBtYWluVGFzaykge1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWxsKCkge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuY29udCA9IG5vb3A7XG4gICAgICB0LmNhbmNlbCgpO1xuICAgIH0pO1xuICAgIHRhc2tzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2s6IGFkZFRhc2ssXG4gICAgY2FuY2VsQWxsOiBjYW5jZWxBbGwsXG4gICAgYWJvcnQ6IGFib3J0LFxuICAgIGdldFRhc2tzOiBnZXRUYXNrc1xuICB9O1xufVxuXG4vLyB0aGVyZSBjYW4gYmUgb25seSBhIHNpbmdsZSBzYWdhIGVycm9yIGNyZWF0ZWQgYXQgYW55IGdpdmVuIG1vbWVudFxuXG5mdW5jdGlvbiBmb3JtYXRMb2NhdGlvbihmaWxlTmFtZSwgbGluZU51bWJlcikge1xuICByZXR1cm4gZmlsZU5hbWUgKyBcIj9cIiArIGxpbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdExvY2F0aW9uQXNTdHJpbmcoZWZmZWN0KSB7XG4gIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGVmZmVjdCk7XG5cbiAgaWYgKGxvY2F0aW9uKSB7XG4gICAgdmFyIGNvZGUgPSBsb2NhdGlvbi5jb2RlLFxuICAgICAgICBmaWxlTmFtZSA9IGxvY2F0aW9uLmZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyID0gbG9jYXRpb24ubGluZU51bWJlcjtcbiAgICB2YXIgc291cmNlID0gY29kZSArIFwiICBcIiArIGZvcm1hdExvY2F0aW9uKGZpbGVOYW1lLCBsaW5lTnVtYmVyKTtcbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBzYWdhTG9jYXRpb25Bc1N0cmluZyhzYWdhTWV0YSkge1xuICB2YXIgbmFtZSA9IHNhZ2FNZXRhLm5hbWUsXG4gICAgICBsb2NhdGlvbiA9IHNhZ2FNZXRhLmxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbikge1xuICAgIHJldHVybiBuYW1lICsgXCIgIFwiICsgZm9ybWF0TG9jYXRpb24obG9jYXRpb24uZmlsZU5hbWUsIGxvY2F0aW9uLmxpbmVOdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxlZFRhc2tzQXNTdHJpbmcoc2FnYVN0YWNrKSB7XG4gIHZhciBjYW5jZWxsZWRUYXNrcyA9IGZsYXRNYXAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaS5jYW5jZWxsZWRUYXNrcztcbiAgfSwgc2FnYVN0YWNrKTtcblxuICBpZiAoIWNhbmNlbGxlZFRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBbJ1Rhc2tzIGNhbmNlbGxlZCBkdWUgdG8gZXJyb3I6J10uY29uY2F0KGNhbmNlbGxlZFRhc2tzKS5qb2luKCdcXG4nKTtcbn1cblxudmFyIGNyYXNoZWRFZmZlY3QgPSBudWxsO1xudmFyIHNhZ2FTdGFjayA9IFtdO1xudmFyIGFkZFNhZ2FGcmFtZSA9IGZ1bmN0aW9uIGFkZFNhZ2FGcmFtZShmcmFtZSkge1xuICBmcmFtZS5jcmFzaGVkRWZmZWN0ID0gY3Jhc2hlZEVmZmVjdDtcbiAgc2FnYVN0YWNrLnB1c2goZnJhbWUpO1xufTtcbnZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBjcmFzaGVkRWZmZWN0ID0gbnVsbDtcbiAgc2FnYVN0YWNrLmxlbmd0aCA9IDA7XG59OyAvLyB0aGlzIHNldHMgY3Jhc2hlZCBlZmZlY3QgZm9yIHRoZSBzb29uLXRvLWJlLXJlcG9ydGVkIHNhZ2EgZnJhbWVcbi8vIHRoaXMgc2xpZ2h0bHkgc3RyZWF0Y2hlcyB0aGUgc2luZ2xldG9uIG5hdHVyZSBvZiB0aGlzIG1vZHVsZSBpbnRvIHdyb25nIGRpcmVjdGlvblxuLy8gYXMgaXQncyBldmVuIGxlc3Mgb2J2aW91cyB3aGF0J3MgdGhlIGRhdGEgZmxvdyBoZXJlLCBidXQgaXQgaXMgd2hhdCBpdCBpcyBmb3Igbm93XG5cbnZhciBzZXRDcmFzaGVkRWZmZWN0ID0gZnVuY3Rpb24gc2V0Q3Jhc2hlZEVmZmVjdChlZmZlY3QpIHtcbiAgY3Jhc2hlZEVmZmVjdCA9IGVmZmVjdDtcbn07XG4vKipcbiAgQHJldHVybnMge3N0cmluZ31cblxuICBAZXhhbXBsZVxuICBUaGUgYWJvdmUgZXJyb3Igb2NjdXJyZWQgaW4gdGFzayBlcnJvckluUHV0U2FnYSB7cGF0aFRvRmlsZX1cbiAgd2hlbiBleGVjdXRpbmcgZWZmZWN0IHB1dCh7dHlwZTogJ1JFRFVDRVJfQUNUSU9OX0VSUk9SX0lOX1BVVCd9KSB7cGF0aFRvRmlsZX1cbiAgICAgIGNyZWF0ZWQgYnkgZmV0Y2hTYWdhIHtwYXRoVG9GaWxlfVxuICAgICAgY3JlYXRlZCBieSByb290U2FnYSB7cGF0aFRvRmlsZX1cbiovXG5cbnZhciB0b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICB2YXIgZmlyc3RTYWdhID0gc2FnYVN0YWNrWzBdLFxuICAgICAgb3RoZXJTYWdhcyA9IHNhZ2FTdGFjay5zbGljZSgxKTtcbiAgdmFyIGNyYXNoZWRFZmZlY3RMb2NhdGlvbiA9IGZpcnN0U2FnYS5jcmFzaGVkRWZmZWN0ID8gZWZmZWN0TG9jYXRpb25Bc1N0cmluZyhmaXJzdFNhZ2EuY3Jhc2hlZEVmZmVjdCkgOiBudWxsO1xuICB2YXIgZXJyb3JNZXNzYWdlID0gXCJUaGUgYWJvdmUgZXJyb3Igb2NjdXJyZWQgaW4gdGFzayBcIiArIHNhZ2FMb2NhdGlvbkFzU3RyaW5nKGZpcnN0U2FnYS5tZXRhKSArIChjcmFzaGVkRWZmZWN0TG9jYXRpb24gPyBcIiBcXG4gd2hlbiBleGVjdXRpbmcgZWZmZWN0IFwiICsgY3Jhc2hlZEVmZmVjdExvY2F0aW9uIDogJycpO1xuICByZXR1cm4gW2Vycm9yTWVzc2FnZV0uY29uY2F0KG90aGVyU2FnYXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIFwiICAgIGNyZWF0ZWQgYnkgXCIgKyBzYWdhTG9jYXRpb25Bc1N0cmluZyhzLm1ldGEpO1xuICB9KSwgW2NhbmNlbGxlZFRhc2tzQXNTdHJpbmcoc2FnYVN0YWNrKV0pLmpvaW4oJ1xcbicpO1xufTtcblxuZnVuY3Rpb24gbmV3VGFzayhlbnYsIG1haW5UYXNrLCBwYXJlbnRDb250ZXh0LCBwYXJlbnRFZmZlY3RJZCwgbWV0YSwgaXNSb290LCBjb250KSB7XG4gIHZhciBfdGFzaztcblxuICBpZiAoY29udCA9PT0gdm9pZCAwKSB7XG4gICAgY29udCA9IG5vb3A7XG4gIH1cblxuICB2YXIgc3RhdHVzID0gUlVOTklORztcbiAgdmFyIHRhc2tSZXN1bHQ7XG4gIHZhciB0YXNrRXJyb3I7XG4gIHZhciBkZWZlcnJlZEVuZCA9IG51bGw7XG4gIHZhciBjYW5jZWxsZWREdWVUb0Vycm9yVGFza3MgPSBbXTtcbiAgdmFyIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKHBhcmVudENvbnRleHQpO1xuICB2YXIgcXVldWUgPSBmb3JrUXVldWUobWFpblRhc2ssIGZ1bmN0aW9uIG9uQWJvcnQoKSB7XG4gICAgY2FuY2VsbGVkRHVlVG9FcnJvclRhc2tzLnB1c2guYXBwbHkoY2FuY2VsbGVkRHVlVG9FcnJvclRhc2tzLCBxdWV1ZS5nZXRUYXNrcygpLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQubWV0YS5uYW1lO1xuICAgIH0pKTtcbiAgfSwgZW5kKTtcbiAgLyoqXG4gICBUaGlzIG1heSBiZSBjYWxsZWQgYnkgYSBwYXJlbnQgZ2VuZXJhdG9yIHRvIHRyaWdnZXIvcHJvcGFnYXRlIGNhbmNlbGxhdGlvblxuICAgY2FuY2VsIGFsbCBwZW5kaW5nIHRhc2tzIChpbmNsdWRpbmcgdGhlIG1haW4gdGFzayksIHRoZW4gZW5kIHRoZSBjdXJyZW50IHRhc2suXG4gICAgQ2FuY2VsbGF0aW9uIHByb3BhZ2F0ZXMgZG93biB0byB0aGUgd2hvbGUgZXhlY3V0aW9uIHRyZWUgaGVsZCBieSB0aGlzIFBhcmVudCB0YXNrXG4gICBJdCdzIGFsc28gcHJvcGFnYXRlZCB0byBhbGwgam9pbmVycyBvZiB0aGlzIHRhc2sgYW5kIHRoZWlyIGV4ZWN1dGlvbiB0cmVlL2pvaW5lcnNcbiAgICBDYW5jZWxsYXRpb24gaXMgbm9vcCBmb3IgdGVybWluYXRlZC9DYW5jZWxsZWQgdGFza3MgdGFza3NcbiAgICoqL1xuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAoc3RhdHVzID09PSBSVU5OSU5HKSB7XG4gICAgICAvLyBTZXR0aW5nIHN0YXR1cyB0byBDQU5DRUxMRUQgZG9lcyBub3QgbmVjZXNzYXJpbHkgbWVhbiB0aGF0IHRoZSB0YXNrL2l0ZXJhdG9ycyBhcmUgc3RvcHBlZFxuICAgICAgLy8gZWZmZWN0cyBpbiB0aGUgaXRlcmF0b3IncyBmaW5hbGx5IGJsb2NrIHdpbGwgc3RpbGwgYmUgZXhlY3V0ZWRcbiAgICAgIHN0YXR1cyA9IENBTkNFTExFRDtcbiAgICAgIHF1ZXVlLmNhbmNlbEFsbCgpOyAvLyBFbmRpbmcgd2l0aCBhIFRBU0tfQ0FOQ0VMIHdpbGwgcHJvcGFnYXRlIHRoZSBDYW5jZWxsYXRpb24gdG8gYWxsIGpvaW5lcnNcblxuICAgICAgZW5kKFRBU0tfQ0FOQ0VMLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kKHJlc3VsdCwgaXNFcnIpIHtcbiAgICBpZiAoIWlzRXJyKSB7XG4gICAgICAvLyBUaGUgc3RhdHVzIGhlcmUgbWF5IGJlIFJVTk5JTkcgb3IgQ0FOQ0VMTEVEXG4gICAgICAvLyBJZiB0aGUgc3RhdHVzIGlzIENBTkNFTExFRCwgdGhlbiB3ZSBkbyBub3QgbmVlZCB0byBjaGFuZ2UgaXQgaGVyZVxuICAgICAgaWYgKHJlc3VsdCA9PT0gVEFTS19DQU5DRUwpIHtcbiAgICAgICAgc3RhdHVzID0gQ0FOQ0VMTEVEO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgIT09IENBTkNFTExFRCkge1xuICAgICAgICBzdGF0dXMgPSBET05FO1xuICAgICAgfVxuXG4gICAgICB0YXNrUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgZGVmZXJyZWRFbmQgJiYgZGVmZXJyZWRFbmQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSBBQk9SVEVEO1xuICAgICAgYWRkU2FnYUZyYW1lKHtcbiAgICAgICAgbWV0YTogbWV0YSxcbiAgICAgICAgY2FuY2VsbGVkVGFza3M6IGNhbmNlbGxlZER1ZVRvRXJyb3JUYXNrc1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXNrLmlzUm9vdCkge1xuICAgICAgICB2YXIgc2FnYVN0YWNrID0gdG9TdHJpbmcoKTsgLy8gd2UndmUgZHVtcGVkIHRoZSBzYWdhIHN0YWNrIHRvIHN0cmluZyBhbmQgYXJlIHBhc3NpbmcgaXQgdG8gdXNlcidzIGNvZGVcbiAgICAgICAgLy8gd2Uga25vdyB0aGF0IGl0IHdvbid0IGJlIG5lZWRlZCBhbnltb3JlIGFuZCB3ZSBuZWVkIHRvIGNsZWFyIGl0XG5cbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgZW52Lm9uRXJyb3IocmVzdWx0LCB7XG4gICAgICAgICAgc2FnYVN0YWNrOiBzYWdhU3RhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRhc2tFcnJvciA9IHJlc3VsdDtcbiAgICAgIGRlZmVycmVkRW5kICYmIGRlZmVycmVkRW5kLnJlamVjdChyZXN1bHQpO1xuICAgIH1cblxuICAgIHRhc2suY29udChyZXN1bHQsIGlzRXJyKTtcbiAgICB0YXNrLmpvaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoam9pbmVyKSB7XG4gICAgICBqb2luZXIuY2IocmVzdWx0LCBpc0Vycik7XG4gICAgfSk7XG4gICAgdGFzay5qb2luZXJzID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2socHJvcHMsIG9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoJ3Rhc2snLCBwcm9wcykpO1xuICAgIH1cblxuICAgIGFzc2lnbldpdGhTeW1ib2xzKGNvbnRleHQsIHByb3BzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUHJvbWlzZSgpIHtcbiAgICBpZiAoZGVmZXJyZWRFbmQpIHtcbiAgICAgIHJldHVybiBkZWZlcnJlZEVuZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGRlZmVycmVkRW5kID0gZGVmZXJyZWQoKTtcblxuICAgIGlmIChzdGF0dXMgPT09IEFCT1JURUQpIHtcbiAgICAgIGRlZmVycmVkRW5kLnJlamVjdCh0YXNrRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzICE9PSBSVU5OSU5HKSB7XG4gICAgICBkZWZlcnJlZEVuZC5yZXNvbHZlKHRhc2tSZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZEVuZC5wcm9taXNlO1xuICB9XG5cbiAgdmFyIHRhc2sgPSAoX3Rhc2sgPSB7fSwgX3Rhc2tbVEFTS10gPSB0cnVlLCBfdGFzay5pZCA9IHBhcmVudEVmZmVjdElkLCBfdGFzay5tZXRhID0gbWV0YSwgX3Rhc2suaXNSb290ID0gaXNSb290LCBfdGFzay5jb250ZXh0ID0gY29udGV4dCwgX3Rhc2suam9pbmVycyA9IFtdLCBfdGFzay5xdWV1ZSA9IHF1ZXVlLCBfdGFzay5jYW5jZWwgPSBjYW5jZWwsIF90YXNrLmNvbnQgPSBjb250LCBfdGFzay5lbmQgPSBlbmQsIF90YXNrLnNldENvbnRleHQgPSBzZXRDb250ZXh0LCBfdGFzay50b1Byb21pc2UgPSB0b1Byb21pc2UsIF90YXNrLmlzUnVubmluZyA9IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gc3RhdHVzID09PSBSVU5OSU5HO1xuICB9LCBfdGFzay5pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uIGlzQ2FuY2VsbGVkKCkge1xuICAgIHJldHVybiBzdGF0dXMgPT09IENBTkNFTExFRCB8fCBzdGF0dXMgPT09IFJVTk5JTkcgJiYgbWFpblRhc2suc3RhdHVzID09PSBDQU5DRUxMRUQ7XG4gIH0sIF90YXNrLmlzQWJvcnRlZCA9IGZ1bmN0aW9uIGlzQWJvcnRlZCgpIHtcbiAgICByZXR1cm4gc3RhdHVzID09PSBBQk9SVEVEO1xuICB9LCBfdGFzay5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRhc2tSZXN1bHQ7XG4gIH0sIF90YXNrLmVycm9yID0gZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRhc2tFcnJvcjtcbiAgfSwgX3Rhc2spO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gcHJvYyhlbnYsIGl0ZXJhdG9yJDEsIHBhcmVudENvbnRleHQsIHBhcmVudEVmZmVjdElkLCBtZXRhLCBpc1Jvb3QsIGNvbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXRlcmF0b3IkMVthc3luY0l0ZXJhdG9yU3ltYm9sXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJlZHV4LXNhZ2EgZG9lc24ndCBzdXBwb3J0IGFzeW5jIGdlbmVyYXRvcnMsIHBsZWFzZSB1c2Ugb25seSByZWd1bGFyIG9uZXNcIik7XG4gIH1cblxuICB2YXIgZmluYWxSdW5FZmZlY3QgPSBlbnYuZmluYWxpemVSdW5FZmZlY3QocnVuRWZmZWN0KTtcbiAgLyoqXG4gICAgVHJhY2tzIHRoZSBjdXJyZW50IGVmZmVjdCBjYW5jZWxsYXRpb25cbiAgICBFYWNoIHRpbWUgdGhlIGdlbmVyYXRvciBwcm9ncmVzc2VzLiBjYWxsaW5nIHJ1bkVmZmVjdCB3aWxsIHNldCBhIG5ldyB2YWx1ZVxuICAgIG9uIGl0LiBJdCBhbGxvd3MgcHJvcGFnYXRpbmcgY2FuY2VsbGF0aW9uIHRvIGNoaWxkIGVmZmVjdHNcbiAgKiovXG5cbiAgbmV4dC5jYW5jZWwgPSBub29wO1xuICAvKiogQ3JlYXRlcyBhIG1haW4gdGFzayB0byB0cmFjayB0aGUgbWFpbiBmbG93ICovXG5cbiAgdmFyIG1haW5UYXNrID0ge1xuICAgIG1ldGE6IG1ldGEsXG4gICAgY2FuY2VsOiBjYW5jZWxNYWluLFxuICAgIHN0YXR1czogUlVOTklOR1xuICB9O1xuICAvKipcbiAgIENyZWF0ZXMgYSBuZXcgdGFzayBkZXNjcmlwdG9yIGZvciB0aGlzIGdlbmVyYXRvci5cbiAgIEEgdGFzayBpcyB0aGUgYWdncmVnYXRpb24gb2YgaXQncyBtYWluVGFzayBhbmQgYWxsIGl0J3MgZm9ya2VkIHRhc2tzLlxuICAgKiovXG5cbiAgdmFyIHRhc2sgPSBuZXdUYXNrKGVudiwgbWFpblRhc2ssIHBhcmVudENvbnRleHQsIHBhcmVudEVmZmVjdElkLCBtZXRhLCBpc1Jvb3QsIGNvbnQpO1xuICB2YXIgZXhlY3V0aW5nQ29udGV4dCA9IHtcbiAgICB0YXNrOiB0YXNrLFxuICAgIGRpZ2VzdEVmZmVjdDogZGlnZXN0RWZmZWN0XG4gIH07XG4gIC8qKlxuICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgbWFpbiB0YXNrLiBXZSdsbCBzaW1wbHkgcmVzdW1lIHRoZSBHZW5lcmF0b3Igd2l0aCBhIFRBU0tfQ0FOQ0VMXG4gICoqL1xuXG4gIGZ1bmN0aW9uIGNhbmNlbE1haW4oKSB7XG4gICAgaWYgKG1haW5UYXNrLnN0YXR1cyA9PT0gUlVOTklORykge1xuICAgICAgbWFpblRhc2suc3RhdHVzID0gQ0FOQ0VMTEVEO1xuICAgICAgbmV4dChUQVNLX0NBTkNFTCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgIGF0dGFjaGVzIGNhbmNlbGxhdGlvbiBsb2dpYyB0byB0aGlzIHRhc2sncyBjb250aW51YXRpb25cbiAgICB0aGlzIHdpbGwgcGVybWl0IGNhbmNlbGxhdGlvbiB0byBwcm9wYWdhdGUgZG93biB0aGUgY2FsbCBjaGFpblxuICAqKi9cblxuXG4gIGlmIChjb250KSB7XG4gICAgY29udC5jYW5jZWwgPSB0YXNrLmNhbmNlbDtcbiAgfSAvLyBraWNrcyB1cCB0aGUgZ2VuZXJhdG9yXG5cblxuICBuZXh0KCk7IC8vIHRoZW4gcmV0dXJuIHRoZSB0YXNrIGRlc2NyaXB0b3IgdG8gdGhlIGNhbGxlclxuXG4gIHJldHVybiB0YXNrO1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZ2VuZXJhdG9yIGRyaXZlclxuICAgKiBJdCdzIGEgcmVjdXJzaXZlIGFzeW5jL2NvbnRpbnVhdGlvbiBmdW5jdGlvbiB3aGljaCBjYWxscyBpdHNlbGZcbiAgICogdW50aWwgdGhlIGdlbmVyYXRvciB0ZXJtaW5hdGVzIG9yIHRocm93c1xuICAgKiBAcGFyYW0ge2ludGVybmFsIGNvbW1hbmRzKFRBU0tfQ0FOQ0VMIHwgVEVSTUlOQVRFKSB8IGFueX0gYXJnIC0gdmFsdWUsIGdlbmVyYXRvciB3aWxsIGJlIHJlc3VtZWQgd2l0aC5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0VyciAtIHRoZSBmbGFnIHNob3dzIGlmIGVmZmVjdCBmaW5pc2hlZCB3aXRoIGFuIGVycm9yXG4gICAqXG4gICAqIHJlY2VpdmVzIGVpdGhlciAoY29tbWFuZCB8IGVmZmVjdCByZXN1bHQsIGZhbHNlKSBvciAoYW55IHRocm93biB0aGluZywgdHJ1ZSlcbiAgICovXG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGlzRXJyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIGlmIChpc0Vycikge1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvciQxLnRocm93KGFyZyk7IC8vIHVzZXIgaGFuZGxlZCB0aGUgZXJyb3IsIHdlIGNhbiBjbGVhciBib29ra2VwdCB2YWx1ZXNcblxuICAgICAgICBjbGVhcigpO1xuICAgICAgfSBlbHNlIGlmIChzaG91bGRDYW5jZWwoYXJnKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICBnZXR0aW5nIFRBU0tfQ0FOQ0VMIGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgbWFpbiB0YXNrXG4gICAgICAgICAgV2UgY2FuIGdldCB0aGlzIHZhbHVlIGhlcmVcbiAgICAgICAgICAgLSBCeSBjYW5jZWxsaW5nIHRoZSBwYXJlbnQgdGFzayBtYW51YWxseVxuICAgICAgICAgIC0gQnkgam9pbmluZyBhIENhbmNlbGxlZCB0YXNrXG4gICAgICAgICoqL1xuICAgICAgICBtYWluVGFzay5zdGF0dXMgPSBDQU5DRUxMRUQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgIENhbmNlbHMgdGhlIGN1cnJlbnQgZWZmZWN0OyB0aGlzIHdpbGwgcHJvcGFnYXRlIHRoZSBjYW5jZWxsYXRpb24gZG93biB0byBhbnkgY2FsbGVkIHRhc2tzXG4gICAgICAgICoqL1xuXG4gICAgICAgIG5leHQuY2FuY2VsKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgIElmIHRoaXMgR2VuZXJhdG9yIGhhcyBhIGByZXR1cm5gIG1ldGhvZCB0aGVuIGludm9rZXMgaXRcbiAgICAgICAgICBUaGlzIHdpbGwganVtcCB0byB0aGUgZmluYWxseSBibG9ja1xuICAgICAgICAqKi9cblxuICAgICAgICByZXN1bHQgPSBmdW5jKGl0ZXJhdG9yJDEucmV0dXJuKSA/IGl0ZXJhdG9yJDEucmV0dXJuKFRBU0tfQ0FOQ0VMKSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBUQVNLX0NBTkNFTFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChzaG91bGRUZXJtaW5hdGUoYXJnKSkge1xuICAgICAgICAvLyBXZSBnZXQgVEVSTUlOQVRFIGZsYWcsIGkuZS4gYnkgdGFraW5nIGZyb20gYSBjaGFubmVsIHRoYXQgZW5kZWQgdXNpbmcgYHRha2VgIChhbmQgbm90IGB0YWtlbWAgdXNlZCB0byB0cmFwIEVuZCBvZiBjaGFubmVscylcbiAgICAgICAgcmVzdWx0ID0gZnVuYyhpdGVyYXRvciQxLnJldHVybikgPyBpdGVyYXRvciQxLnJldHVybigpIDoge1xuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yJDEubmV4dChhcmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIGRpZ2VzdEVmZmVjdChyZXN1bHQudmFsdWUsIHBhcmVudEVmZmVjdElkLCBuZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgIFRoaXMgR2VuZXJhdG9yIGhhcyBlbmRlZCwgdGVybWluYXRlIHRoZSBtYWluIHRhc2sgYW5kIG5vdGlmeSB0aGUgZm9yayBxdWV1ZVxuICAgICAgICAqKi9cbiAgICAgICAgaWYgKG1haW5UYXNrLnN0YXR1cyAhPT0gQ0FOQ0VMTEVEKSB7XG4gICAgICAgICAgbWFpblRhc2suc3RhdHVzID0gRE9ORTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5UYXNrLmNvbnQocmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKG1haW5UYXNrLnN0YXR1cyA9PT0gQ0FOQ0VMTEVEKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICBtYWluVGFzay5zdGF0dXMgPSBBQk9SVEVEO1xuICAgICAgbWFpblRhc2suY29udChlcnJvciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcnVuRWZmZWN0KGVmZmVjdCwgZWZmZWN0SWQsIGN1cnJDYikge1xuICAgIC8qKlxuICAgICAgZWFjaCBlZmZlY3QgcnVubmVyIG11c3QgYXR0YWNoIGl0cyBvd24gbG9naWMgb2YgY2FuY2VsbGF0aW9uIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgaXQgYWxsb3dzIHRoaXMgZ2VuZXJhdG9yIHRvIHByb3BhZ2F0ZSBjYW5jZWxsYXRpb24gZG93bndhcmQuXG4gICAgICAgQVRURU5USU9OISBlZmZlY3QgcnVubmVycyBtdXN0IHNldHVwIHRoZSBjYW5jZWwgbG9naWMgYnkgc2V0dGluZyBjYi5jYW5jZWwgPSBbY2FuY2VsTWV0aG9kXVxuICAgICAgQW5kIHRoZSBzZXR1cCBtdXN0IG9jY3VyIGJlZm9yZSBjYWxsaW5nIHRoZSBjYWxsYmFja1xuICAgICAgIFRoaXMgaXMgYSBzb3J0IG9mIGludmVyc2lvbiBvZiBjb250cm9sOiBjYWxsZWQgYXN5bmMgZnVuY3Rpb25zIGFyZSByZXNwb25zaWJsZVxuICAgICAgb2YgY29tcGxldGluZyB0aGUgZmxvdyBieSBjYWxsaW5nIHRoZSBwcm92aWRlZCBjb250aW51YXRpb247IHdoaWxlIGNhbGxlciBmdW5jdGlvbnNcbiAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgYWJvcnRpbmcgdGhlIGN1cnJlbnQgZmxvdyBieSBjYWxsaW5nIHRoZSBhdHRhY2hlZCBjYW5jZWwgZnVuY3Rpb25cbiAgICAgICBMaWJyYXJ5IHVzZXJzIGNhbiBhdHRhY2ggdGhlaXIgb3duIGNhbmNlbGxhdGlvbiBsb2dpYyB0byBwcm9taXNlcyBieSBkZWZpbmluZyBhXG4gICAgICBwcm9taXNlW0NBTkNFTF0gbWV0aG9kIGluIHRoZWlyIHJldHVybmVkIHByb21pc2VzXG4gICAgICBBVFRFTlRJT04hIGNhbGxpbmcgY2FuY2VsIG11c3QgaGF2ZSBubyBlZmZlY3Qgb24gYW4gYWxyZWFkeSBjb21wbGV0ZWQgb3IgY2FuY2VsbGVkIGVmZmVjdFxuICAgICoqL1xuICAgIGlmIChwcm9taXNlKGVmZmVjdCkpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKGVmZmVjdCwgY3VyckNiKTtcbiAgICB9IGVsc2UgaWYgKGl0ZXJhdG9yKGVmZmVjdCkpIHtcbiAgICAgIC8vIHJlc29sdmUgaXRlcmF0b3JcbiAgICAgIHByb2MoZW52LCBlZmZlY3QsIHRhc2suY29udGV4dCwgZWZmZWN0SWQsIG1ldGEsXG4gICAgICAvKiBpc1Jvb3QgKi9cbiAgICAgIGZhbHNlLCBjdXJyQ2IpO1xuICAgIH0gZWxzZSBpZiAoZWZmZWN0ICYmIGVmZmVjdFtJT10pIHtcbiAgICAgIHZhciBlZmZlY3RSdW5uZXIgPSBlZmZlY3RSdW5uZXJNYXBbZWZmZWN0LnR5cGVdO1xuICAgICAgZWZmZWN0UnVubmVyKGVudiwgZWZmZWN0LnBheWxvYWQsIGN1cnJDYiwgZXhlY3V0aW5nQ29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgcmV0dXJuZWQgYXMgaXNcbiAgICAgIGN1cnJDYihlZmZlY3QpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpZ2VzdEVmZmVjdChlZmZlY3QsIHBhcmVudEVmZmVjdElkLCBjYiwgbGFiZWwpIHtcbiAgICBpZiAobGFiZWwgPT09IHZvaWQgMCkge1xuICAgICAgbGFiZWwgPSAnJztcbiAgICB9XG5cbiAgICB2YXIgZWZmZWN0SWQgPSBuZXh0U2FnYUlkKCk7XG4gICAgZW52LnNhZ2FNb25pdG9yICYmIGVudi5zYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQoe1xuICAgICAgZWZmZWN0SWQ6IGVmZmVjdElkLFxuICAgICAgcGFyZW50RWZmZWN0SWQ6IHBhcmVudEVmZmVjdElkLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgZWZmZWN0OiBlZmZlY3RcbiAgICB9KTtcbiAgICAvKipcbiAgICAgIGNvbXBsZXRpb24gY2FsbGJhY2sgYW5kIGNhbmNlbCBjYWxsYmFjayBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlXG4gICAgICBXZSBjYW4ndCBjYW5jZWwgYW4gYWxyZWFkeSBjb21wbGV0ZWQgZWZmZWN0XG4gICAgICBBbmQgV2UgY2FuJ3QgY29tcGxldGUgYW4gYWxyZWFkeSBjYW5jZWxsZWQgZWZmZWN0SWRcbiAgICAqKi9cblxuICAgIHZhciBlZmZlY3RTZXR0bGVkOyAvLyBDb21wbGV0aW9uIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgYXBwcm9wcmlhdGUgZWZmZWN0IHJ1bm5lclxuXG4gICAgZnVuY3Rpb24gY3VyckNiKHJlcywgaXNFcnIpIHtcbiAgICAgIGlmIChlZmZlY3RTZXR0bGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWZmZWN0U2V0dGxlZCA9IHRydWU7XG4gICAgICBjYi5jYW5jZWwgPSBub29wOyAvLyBkZWZlbnNpdmUgbWVhc3VyZVxuXG4gICAgICBpZiAoZW52LnNhZ2FNb25pdG9yKSB7XG4gICAgICAgIGlmIChpc0Vycikge1xuICAgICAgICAgIGVudi5zYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZChlZmZlY3RJZCwgcmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnYuc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQoZWZmZWN0SWQsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyKSB7XG4gICAgICAgIHNldENyYXNoZWRFZmZlY3QoZWZmZWN0KTtcbiAgICAgIH1cblxuICAgICAgY2IocmVzLCBpc0Vycik7XG4gICAgfSAvLyB0cmFja3MgZG93biB0aGUgY3VycmVudCBjYW5jZWxcblxuXG4gICAgY3VyckNiLmNhbmNlbCA9IG5vb3A7IC8vIHNldHVwIGNhbmNlbGxhdGlvbiBsb2dpYyBvbiB0aGUgcGFyZW50IGNiXG5cbiAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwcmV2ZW50cyBjYW5jZWxsaW5nIGFuIGFscmVhZHkgY29tcGxldGVkIGVmZmVjdFxuICAgICAgaWYgKGVmZmVjdFNldHRsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlZmZlY3RTZXR0bGVkID0gdHJ1ZTtcbiAgICAgIGN1cnJDYi5jYW5jZWwoKTsgLy8gcHJvcGFnYXRlcyBjYW5jZWwgZG93bndhcmRcblxuICAgICAgY3VyckNiLmNhbmNlbCA9IG5vb3A7IC8vIGRlZmVuc2l2ZSBtZWFzdXJlXG5cbiAgICAgIGVudi5zYWdhTW9uaXRvciAmJiBlbnYuc2FnYU1vbml0b3IuZWZmZWN0Q2FuY2VsbGVkKGVmZmVjdElkKTtcbiAgICB9O1xuXG4gICAgZmluYWxSdW5FZmZlY3QoZWZmZWN0LCBlZmZlY3RJZCwgY3VyckNiKTtcbiAgfVxufVxuXG52YXIgUlVOX1NBR0FfU0lHTkFUVVJFID0gJ3J1blNhZ2Eob3B0aW9ucywgc2FnYSwgLi4uYXJncyknO1xudmFyIE5PTl9HRU5FUkFUT1JfRVJSID0gUlVOX1NBR0FfU0lHTkFUVVJFICsgXCI6IHNhZ2EgYXJndW1lbnQgbXVzdCBiZSBhIEdlbmVyYXRvciBmdW5jdGlvbiFcIjtcbmZ1bmN0aW9uIHJ1blNhZ2EoX3JlZiwgc2FnYSkge1xuICB2YXIgX3JlZiRjaGFubmVsID0gX3JlZi5jaGFubmVsLFxuICAgICAgY2hhbm5lbCA9IF9yZWYkY2hhbm5lbCA9PT0gdm9pZCAwID8gc3RkQ2hhbm5lbCgpIDogX3JlZiRjaGFubmVsLFxuICAgICAgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlLFxuICAgICAgX3JlZiRjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYkY29udGV4dCA9PT0gdm9pZCAwID8ge30gOiBfcmVmJGNvbnRleHQsXG4gICAgICBzYWdhTW9uaXRvciA9IF9yZWYuc2FnYU1vbml0b3IsXG4gICAgICBlZmZlY3RNaWRkbGV3YXJlcyA9IF9yZWYuZWZmZWN0TWlkZGxld2FyZXMsXG4gICAgICBfcmVmJG9uRXJyb3IgPSBfcmVmLm9uRXJyb3IsXG4gICAgICBvbkVycm9yID0gX3JlZiRvbkVycm9yID09PSB2b2lkIDAgPyBsb2dFcnJvciA6IF9yZWYkb25FcnJvcjtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHNhZ2EsIGZ1bmMsIE5PTl9HRU5FUkFUT1JfRVJSKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBpdGVyYXRvciQxID0gc2FnYS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soaXRlcmF0b3IkMSwgaXRlcmF0b3IsIE5PTl9HRU5FUkFUT1JfRVJSKTtcbiAgfVxuXG4gIHZhciBlZmZlY3RJZCA9IG5leHRTYWdhSWQoKTtcblxuICBpZiAoc2FnYU1vbml0b3IpIHtcbiAgICAvLyBtb25pdG9ycyBhcmUgZXhwZWN0ZWQgdG8gaGF2ZSBhIGNlcnRhaW4gaW50ZXJmYWNlLCBsZXQncyBmaWxsLWluIGFueSBtaXNzaW5nIG9uZXNcbiAgICBzYWdhTW9uaXRvci5yb290U2FnYVN0YXJ0ZWQgPSBzYWdhTW9uaXRvci5yb290U2FnYVN0YXJ0ZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0UmVqZWN0ZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQgPSBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3Iucm9vdFNhZ2FTdGFydGVkKHtcbiAgICAgIGVmZmVjdElkOiBlZmZlY3RJZCxcbiAgICAgIHNhZ2E6IHNhZ2EsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChub3RVbmRlZihkaXNwYXRjaCkpIHtcbiAgICAgIGNoZWNrKGRpc3BhdGNoLCBmdW5jLCAnZGlzcGF0Y2ggbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKG5vdFVuZGVmKGdldFN0YXRlKSkge1xuICAgICAgY2hlY2soZ2V0U3RhdGUsIGZ1bmMsICdnZXRTdGF0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAobm90VW5kZWYoZWZmZWN0TWlkZGxld2FyZXMpKSB7XG4gICAgICB2YXIgTUlERExFV0FSRV9UWVBFX0VSUk9SID0gJ2VmZmVjdE1pZGRsZXdhcmVzIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJztcbiAgICAgIGNoZWNrKGVmZmVjdE1pZGRsZXdhcmVzLCBhcnJheSQxLCBNSURETEVXQVJFX1RZUEVfRVJST1IpO1xuICAgICAgZWZmZWN0TWlkZGxld2FyZXMuZm9yRWFjaChmdW5jdGlvbiAoZWZmZWN0TWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gY2hlY2soZWZmZWN0TWlkZGxld2FyZSwgZnVuYywgTUlERExFV0FSRV9UWVBFX0VSUk9SKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrKG9uRXJyb3IsIGZ1bmMsICdvbkVycm9yIHBhc3NlZCB0byB0aGUgcmVkdXgtc2FnYSBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgfVxuXG4gIHZhciBmaW5hbGl6ZVJ1bkVmZmVjdDtcblxuICBpZiAoZWZmZWN0TWlkZGxld2FyZXMpIHtcbiAgICB2YXIgbWlkZGxld2FyZSA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBlZmZlY3RNaWRkbGV3YXJlcyk7XG5cbiAgICBmaW5hbGl6ZVJ1bkVmZmVjdCA9IGZ1bmN0aW9uIGZpbmFsaXplUnVuRWZmZWN0KHJ1bkVmZmVjdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QsIGVmZmVjdElkLCBjdXJyQ2IpIHtcbiAgICAgICAgdmFyIHBsYWluUnVuRWZmZWN0ID0gZnVuY3Rpb24gcGxhaW5SdW5FZmZlY3QoZWZmKSB7XG4gICAgICAgICAgcmV0dXJuIHJ1bkVmZmVjdChlZmYsIGVmZmVjdElkLCBjdXJyQ2IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKHBsYWluUnVuRWZmZWN0KShlZmZlY3QpO1xuICAgICAgfTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGZpbmFsaXplUnVuRWZmZWN0ID0gaWRlbnRpdHk7XG4gIH1cblxuICB2YXIgZW52ID0ge1xuICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgZGlzcGF0Y2g6IHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICBzYWdhTW9uaXRvcjogc2FnYU1vbml0b3IsXG4gICAgb25FcnJvcjogb25FcnJvcixcbiAgICBmaW5hbGl6ZVJ1bkVmZmVjdDogZmluYWxpemVSdW5FZmZlY3RcbiAgfTtcbiAgcmV0dXJuIGltbWVkaWF0ZWx5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFzayA9IHByb2MoZW52LCBpdGVyYXRvciQxLCBjb250ZXh0LCBlZmZlY3RJZCwgZ2V0TWV0YUluZm8oc2FnYSksXG4gICAgLyogaXNSb290ICovXG4gICAgdHJ1ZSwgdW5kZWZpbmVkKTtcblxuICAgIGlmIChzYWdhTW9uaXRvcikge1xuICAgICAgc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQoZWZmZWN0SWQsIHRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2FnYU1pZGRsZXdhcmVGYWN0b3J5KF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZiRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkY29udGV4dCxcbiAgICAgIF9yZWYkY2hhbm5lbCA9IF9yZWYuY2hhbm5lbCxcbiAgICAgIGNoYW5uZWwgPSBfcmVmJGNoYW5uZWwgPT09IHZvaWQgMCA/IHN0ZENoYW5uZWwoKSA6IF9yZWYkY2hhbm5lbCxcbiAgICAgIHNhZ2FNb25pdG9yID0gX3JlZi5zYWdhTW9uaXRvcixcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjb250ZXh0XCIsIFwiY2hhbm5lbFwiLCBcInNhZ2FNb25pdG9yXCJdKTtcblxuICB2YXIgYm91bmRSdW5TYWdhO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soY2hhbm5lbCwgY2hhbm5lbCQxLCAnb3B0aW9ucy5jaGFubmVsIHBhc3NlZCB0byB0aGUgU2FnYSBtaWRkbGV3YXJlIGlzIG5vdCBhIGNoYW5uZWwnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhZ2FNaWRkbGV3YXJlKF9yZWYyKSB7XG4gICAgdmFyIGdldFN0YXRlID0gX3JlZjIuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoID0gX3JlZjIuZGlzcGF0Y2g7XG4gICAgYm91bmRSdW5TYWdhID0gcnVuU2FnYS5iaW5kKG51bGwsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICAgIHNhZ2FNb25pdG9yOiBzYWdhTW9uaXRvclxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmIChzYWdhTW9uaXRvciAmJiBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkKSB7XG4gICAgICAgICAgc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZChhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTsgLy8gaGl0IHJlZHVjZXJzXG5cbiAgICAgICAgY2hhbm5lbC5wdXQoYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhYm91bmRSdW5TYWdhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlZm9yZSBydW5uaW5nIGEgU2FnYSwgeW91IG11c3QgbW91bnQgdGhlIFNhZ2EgbWlkZGxld2FyZSBvbiB0aGUgU3RvcmUgdXNpbmcgYXBwbHlNaWRkbGV3YXJlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kUnVuU2FnYS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgc2FnYU1pZGRsZXdhcmUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVjayhwcm9wcywgb2JqZWN0LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZygnc2FnYU1pZGRsZXdhcmUnLCBwcm9wcykpO1xuICAgIH1cblxuICAgIGFzc2lnbldpdGhTeW1ib2xzKGNvbnRleHQsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gc2FnYU1pZGRsZXdhcmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhZ2FNaWRkbGV3YXJlRmFjdG9yeTtcbmV4cG9ydCB7IEVORCwgY2hhbm5lbCwgZXZlbnRDaGFubmVsLCBpc0VuZCwgbXVsdGljYXN0Q2hhbm5lbCwgcnVuU2FnYSwgc3RkQ2hhbm5lbCB9O1xuIiwiZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG4gIHZhciBkZWYgPSB7fTtcbiAgZGVmLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZGVmLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZi5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICByZXR1cm4gZGVmO1xufVxuZnVuY3Rpb24gYXJyYXlPZkRlZmVycmVkKGxlbmd0aCkge1xuICB2YXIgYXJyID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmZXJyZWQ7XG5leHBvcnQgeyBhcnJheU9mRGVmZXJyZWQgfTtcbiIsImltcG9ydCB7IENBTkNFTCB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuXG52YXIgTUFYX1NJR05FRF9JTlQgPSAyMTQ3NDgzNjQ3O1xuZnVuY3Rpb24gZGVsYXlQKG1zLCB2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgdmFsID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9zZXRUaW1lb3V0I21heGltdW1fZGVsYXlfdmFsdWVcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbXMgPiBNQVhfU0lHTkVEX0lOVCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZGVsYXkgb25seSBzdXBwb3J0cyBhIG1heGltdW0gdmFsdWUgb2YgJyArIE1BWF9TSUdORURfSU5UICsgJ21zJyk7XG4gIH1cblxuICB2YXIgdGltZW91dElkO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChyZXNvbHZlLCBNYXRoLm1pbihNQVhfU0lHTkVEX0lOVCwgbXMpLCB2YWwpO1xuICB9KTtcblxuICBwcm9taXNlW0NBTkNFTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGF5UDtcbiIsImltcG9ydCB7IFRBU0ssIFNBR0FfQUNUSU9OLCBNVUxUSUNBU1QsIElPIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5cbnZhciB1bmRlZiA9IGZ1bmN0aW9uIHVuZGVmKHYpIHtcbiAgcmV0dXJuIHYgPT09IG51bGwgfHwgdiA9PT0gdW5kZWZpbmVkO1xufTtcbnZhciBub3RVbmRlZiA9IGZ1bmN0aW9uIG5vdFVuZGVmKHYpIHtcbiAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xufTtcbnZhciBmdW5jID0gZnVuY3Rpb24gZnVuYyhmKSB7XG4gIHJldHVybiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJztcbn07XG52YXIgbnVtYmVyID0gZnVuY3Rpb24gbnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJztcbn07XG52YXIgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcbn07XG52YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIG9iamVjdCA9IGZ1bmN0aW9uIG9iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAhYXJyYXkob2JqKSAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG52YXIgcHJvbWlzZSA9IGZ1bmN0aW9uIHByb21pc2UocCkge1xuICByZXR1cm4gcCAmJiBmdW5jKHAudGhlbik7XG59O1xudmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGZ1bmMoaXQubmV4dCkgJiYgZnVuYyhpdC50aHJvdyk7XG59O1xudmFyIGl0ZXJhYmxlID0gZnVuY3Rpb24gaXRlcmFibGUoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGZ1bmMoU3ltYm9sKSA/IGZ1bmMoaXRbU3ltYm9sLml0ZXJhdG9yXSkgOiBhcnJheShpdCk7XG59O1xudmFyIHRhc2sgPSBmdW5jdGlvbiB0YXNrKHQpIHtcbiAgcmV0dXJuIHQgJiYgdFtUQVNLXTtcbn07XG52YXIgc2FnYUFjdGlvbiA9IGZ1bmN0aW9uIHNhZ2FBY3Rpb24oYSkge1xuICByZXR1cm4gQm9vbGVhbihhICYmIGFbU0FHQV9BQ1RJT05dKTtcbn07XG52YXIgb2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcbiAgcmV0dXJuIG9iICYmIGZ1bmMob2Iuc3Vic2NyaWJlKTtcbn07XG52YXIgYnVmZmVyID0gZnVuY3Rpb24gYnVmZmVyKGJ1Zikge1xuICByZXR1cm4gYnVmICYmIGZ1bmMoYnVmLmlzRW1wdHkpICYmIGZ1bmMoYnVmLnRha2UpICYmIGZ1bmMoYnVmLnB1dCk7XG59O1xudmFyIHBhdHRlcm4gPSBmdW5jdGlvbiBwYXR0ZXJuKHBhdCkge1xuICByZXR1cm4gcGF0ICYmIChzdHJpbmcocGF0KSB8fCBzeW1ib2wocGF0KSB8fCBmdW5jKHBhdCkgfHwgYXJyYXkocGF0KSAmJiBwYXQuZXZlcnkocGF0dGVybikpO1xufTtcbnZhciBjaGFubmVsID0gZnVuY3Rpb24gY2hhbm5lbChjaCkge1xuICByZXR1cm4gY2ggJiYgZnVuYyhjaC50YWtlKSAmJiBmdW5jKGNoLmNsb3NlKTtcbn07XG52YXIgc3RyaW5nYWJsZUZ1bmMgPSBmdW5jdGlvbiBzdHJpbmdhYmxlRnVuYyhmKSB7XG4gIHJldHVybiBmdW5jKGYpICYmIGYuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJyk7XG59O1xudmFyIHN5bWJvbCA9IGZ1bmN0aW9uIHN5bWJvbChzeW0pIHtcbiAgcmV0dXJuIEJvb2xlYW4oc3ltKSAmJiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHN5bS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIHN5bSAhPT0gU3ltYm9sLnByb3RvdHlwZTtcbn07XG52YXIgbXVsdGljYXN0ID0gZnVuY3Rpb24gbXVsdGljYXN0KGNoKSB7XG4gIHJldHVybiBjaGFubmVsKGNoKSAmJiBjaFtNVUxUSUNBU1RdO1xufTtcbnZhciBlZmZlY3QgPSBmdW5jdGlvbiBlZmZlY3QoZWZmKSB7XG4gIHJldHVybiBlZmYgJiYgZWZmW0lPXTtcbn07XG5cbmV4cG9ydCB7IGFycmF5LCBidWZmZXIsIGNoYW5uZWwsIGVmZmVjdCwgZnVuYywgaXRlcmFibGUsIGl0ZXJhdG9yLCBtdWx0aWNhc3QsIG5vdFVuZGVmLCBudW1iZXIsIG9iamVjdCwgb2JzZXJ2YWJsZSwgcGF0dGVybiwgcHJvbWlzZSwgc2FnYUFjdGlvbiwgc3RyaW5nLCBzdHJpbmdhYmxlRnVuYywgc3ltYm9sLCB0YXNrLCB1bmRlZiB9O1xuIiwidmFyIGNyZWF0ZVN5bWJvbCA9IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChuYW1lKSB7XG4gIHJldHVybiBcIkBAcmVkdXgtc2FnYS9cIiArIG5hbWU7XG59O1xuXG52YXIgQ0FOQ0VMID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnQ0FOQ0VMX1BST01JU0UnKTtcbnZhciBDSEFOTkVMX0VORF9UWVBFID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnQ0hBTk5FTF9FTkQnKTtcbnZhciBJTyA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0lPJyk7XG52YXIgTUFUQ0ggPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdNQVRDSCcpO1xudmFyIE1VTFRJQ0FTVCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ01VTFRJQ0FTVCcpO1xudmFyIFNBR0FfQUNUSU9OID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnU0FHQV9BQ1RJT04nKTtcbnZhciBTRUxGX0NBTkNFTExBVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1NFTEZfQ0FOQ0VMTEFUSU9OJyk7XG52YXIgVEFTSyA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RBU0snKTtcbnZhciBUQVNLX0NBTkNFTCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RBU0tfQ0FOQ0VMJyk7XG52YXIgVEVSTUlOQVRFID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnVEVSTUlOQVRFJyk7XG52YXIgU0FHQV9MT0NBVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0xPQ0FUSU9OJyk7XG5cbmV4cG9ydCB7IENBTkNFTCwgQ0hBTk5FTF9FTkRfVFlQRSwgSU8sIE1BVENILCBNVUxUSUNBU1QsIFNBR0FfQUNUSU9OLCBTQUdBX0xPQ0FUSU9OLCBTRUxGX0NBTkNFTExBVElPTiwgVEFTSywgVEFTS19DQU5DRUwsIFRFUk1JTkFURSB9O1xuIiwiaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlX19kZWZhdWx0IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnQHJlZHV4LXNhZ2EvY29yZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTYWdhTWlkZGxld2FyZV9fZGVmYXVsdDtcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW107XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9