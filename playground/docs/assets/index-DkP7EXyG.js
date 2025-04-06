function pp(u, s) {
  for (var i = 0; i < s.length; i++) {
    const c = s[i];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const d in c)
        if (d !== "default" && !(d in u)) {
          const p = Object.getOwnPropertyDescriptor(c, d);
          p &&
            Object.defineProperty(
              u,
              d,
              p.get ? p : { enumerable: !0, get: () => c[d] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const p of d)
      if (p.type === "childList")
        for (const h of p.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(d) {
    const p = {};
    return (
      d.integrity && (p.integrity = d.integrity),
      d.referrerPolicy && (p.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (p.credentials = "omit")
          : (p.credentials = "same-origin"),
      p
    );
  }
  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const p = i(d);
    fetch(d.href, p);
  }
})();
function mp(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var ni = { exports: {} },
  zr = {},
  ri = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc;
function vp() {
  if (Rc) return b;
  Rc = 1;
  var u = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    p = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    P = Symbol.for("react.memo"),
    N = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function F(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (O && g[O]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    D = {};
  function L(g, C, q) {
    (this.props = g),
      (this.context = C),
      (this.refs = D),
      (this.updater = q || A);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (g, C) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, g, C, "setState");
    }),
    (L.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    });
  function te() {}
  te.prototype = L.prototype;
  function z(g, C, q) {
    (this.props = g),
      (this.context = C),
      (this.refs = D),
      (this.updater = q || A);
  }
  var J = (z.prototype = new te());
  (J.constructor = z), H(J, L.prototype), (J.isPureReactComponent = !0);
  var se = Array.isArray,
    le = Object.prototype.hasOwnProperty,
    ae = { current: null },
    ke = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(g, C, q) {
    var Z,
      ue = {},
      oe = null,
      me = null;
    if (C != null)
      for (Z in (C.ref !== void 0 && (me = C.ref),
      C.key !== void 0 && (oe = "" + C.key),
      C))
        le.call(C, Z) && !ke.hasOwnProperty(Z) && (ue[Z] = C[Z]);
    var ce = arguments.length - 2;
    if (ce === 1) ue.children = q;
    else if (1 < ce) {
      for (var ye = Array(ce), ut = 0; ut < ce; ut++)
        ye[ut] = arguments[ut + 2];
      ue.children = ye;
    }
    if (g && g.defaultProps)
      for (Z in ((ce = g.defaultProps), ce))
        ue[Z] === void 0 && (ue[Z] = ce[Z]);
    return {
      $$typeof: u,
      type: g,
      key: oe,
      ref: me,
      props: ue,
      _owner: ae.current,
    };
  }
  function pe(g, C) {
    return {
      $$typeof: u,
      type: g.type,
      key: C,
      ref: g.ref,
      props: g.props,
      _owner: g._owner,
    };
  }
  function Fe(g) {
    return typeof g == "object" && g !== null && g.$$typeof === u;
  }
  function gt(g) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (q) {
        return C[q];
      })
    );
  }
  var Qe = /\/+/g;
  function je(g, C) {
    return typeof g == "object" && g !== null && g.key != null
      ? gt("" + g.key)
      : C.toString(36);
  }
  function rt(g, C, q, Z, ue) {
    var oe = typeof g;
    (oe === "undefined" || oe === "boolean") && (g = null);
    var me = !1;
    if (g === null) me = !0;
    else
      switch (oe) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case s:
              me = !0;
          }
      }
    if (me)
      return (
        (me = g),
        (ue = ue(me)),
        (g = Z === "" ? "." + je(me, 0) : Z),
        se(ue)
          ? ((q = ""),
            g != null && (q = g.replace(Qe, "$&/") + "/"),
            rt(ue, C, q, "", function (ut) {
              return ut;
            }))
          : ue != null &&
            (Fe(ue) &&
              (ue = pe(
                ue,
                q +
                  (!ue.key || (me && me.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(Qe, "$&/") + "/") +
                  g,
              )),
            C.push(ue)),
        1
      );
    if (((me = 0), (Z = Z === "" ? "." : Z + ":"), se(g)))
      for (var ce = 0; ce < g.length; ce++) {
        oe = g[ce];
        var ye = Z + je(oe, ce);
        me += rt(oe, C, q, ye, ue);
      }
    else if (((ye = F(g)), typeof ye == "function"))
      for (g = ye.call(g), ce = 0; !(oe = g.next()).done; )
        (oe = oe.value), (ye = Z + je(oe, ce++)), (me += rt(oe, C, q, ye, ue));
    else if (oe === "object")
      throw (
        ((C = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return me;
  }
  function lt(g, C, q) {
    if (g == null) return g;
    var Z = [],
      ue = 0;
    return (
      rt(g, Z, "", "", function (oe) {
        return C.call(q, oe, ue++);
      }),
      Z
    );
  }
  function Ae(g) {
    if (g._status === -1) {
      var C = g._result;
      (C = C()),
        C.then(
          function (q) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = q));
          },
          function (q) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = q));
          },
        ),
        g._status === -1 && ((g._status = 0), (g._result = C));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var de = { current: null },
    j = { transition: null },
    Y = {
      ReactCurrentDispatcher: de,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: ae,
    };
  function M() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (b.Children = {
      map: lt,
      forEach: function (g, C, q) {
        lt(
          g,
          function () {
            C.apply(this, arguments);
          },
          q,
        );
      },
      count: function (g) {
        var C = 0;
        return (
          lt(g, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (g) {
        return (
          lt(g, function (C) {
            return C;
          }) || []
        );
      },
      only: function (g) {
        if (!Fe(g))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return g;
      },
    }),
    (b.Component = L),
    (b.Fragment = i),
    (b.Profiler = d),
    (b.PureComponent = z),
    (b.StrictMode = c),
    (b.Suspense = y),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (b.act = M),
    (b.cloneElement = function (g, C, q) {
      if (g == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            g +
            ".",
        );
      var Z = H({}, g.props),
        ue = g.key,
        oe = g.ref,
        me = g._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((oe = C.ref), (me = ae.current)),
          C.key !== void 0 && (ue = "" + C.key),
          g.type && g.type.defaultProps)
        )
          var ce = g.type.defaultProps;
        for (ye in C)
          le.call(C, ye) &&
            !ke.hasOwnProperty(ye) &&
            (Z[ye] = C[ye] === void 0 && ce !== void 0 ? ce[ye] : C[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) Z.children = q;
      else if (1 < ye) {
        ce = Array(ye);
        for (var ut = 0; ut < ye; ut++) ce[ut] = arguments[ut + 2];
        Z.children = ce;
      }
      return {
        $$typeof: u,
        type: g.type,
        key: ue,
        ref: oe,
        props: Z,
        _owner: me,
      };
    }),
    (b.createContext = function (g) {
      return (
        (g = {
          $$typeof: h,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (g.Provider = { $$typeof: p, _context: g }),
        (g.Consumer = g)
      );
    }),
    (b.createElement = De),
    (b.createFactory = function (g) {
      var C = De.bind(null, g);
      return (C.type = g), C;
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (g) {
      return { $$typeof: S, render: g };
    }),
    (b.isValidElement = Fe),
    (b.lazy = function (g) {
      return { $$typeof: N, _payload: { _status: -1, _result: g }, _init: Ae };
    }),
    (b.memo = function (g, C) {
      return { $$typeof: P, type: g, compare: C === void 0 ? null : C };
    }),
    (b.startTransition = function (g) {
      var C = j.transition;
      j.transition = {};
      try {
        g();
      } finally {
        j.transition = C;
      }
    }),
    (b.unstable_act = M),
    (b.useCallback = function (g, C) {
      return de.current.useCallback(g, C);
    }),
    (b.useContext = function (g) {
      return de.current.useContext(g);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (g) {
      return de.current.useDeferredValue(g);
    }),
    (b.useEffect = function (g, C) {
      return de.current.useEffect(g, C);
    }),
    (b.useId = function () {
      return de.current.useId();
    }),
    (b.useImperativeHandle = function (g, C, q) {
      return de.current.useImperativeHandle(g, C, q);
    }),
    (b.useInsertionEffect = function (g, C) {
      return de.current.useInsertionEffect(g, C);
    }),
    (b.useLayoutEffect = function (g, C) {
      return de.current.useLayoutEffect(g, C);
    }),
    (b.useMemo = function (g, C) {
      return de.current.useMemo(g, C);
    }),
    (b.useReducer = function (g, C, q) {
      return de.current.useReducer(g, C, q);
    }),
    (b.useRef = function (g) {
      return de.current.useRef(g);
    }),
    (b.useState = function (g) {
      return de.current.useState(g);
    }),
    (b.useSyncExternalStore = function (g, C, q) {
      return de.current.useSyncExternalStore(g, C, q);
    }),
    (b.useTransition = function () {
      return de.current.useTransition();
    }),
    (b.version = "18.3.1"),
    b
  );
}
var Lc;
function gi() {
  return Lc || ((Lc = 1), (ri.exports = vp())), ri.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function hp() {
  if (Ic) return zr;
  Ic = 1;
  var u = gi(),
    s = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(S, y, P) {
    var N,
      O = {},
      F = null,
      A = null;
    P !== void 0 && (F = "" + P),
      y.key !== void 0 && (F = "" + y.key),
      y.ref !== void 0 && (A = y.ref);
    for (N in y) c.call(y, N) && !p.hasOwnProperty(N) && (O[N] = y[N]);
    if (S && S.defaultProps)
      for (N in ((y = S.defaultProps), y)) O[N] === void 0 && (O[N] = y[N]);
    return {
      $$typeof: s,
      type: S,
      key: F,
      ref: A,
      props: O,
      _owner: d.current,
    };
  }
  return (zr.Fragment = i), (zr.jsx = h), (zr.jsxs = h), zr;
}
var Oc;
function gp() {
  return Oc || ((Oc = 1), (ni.exports = hp())), ni.exports;
}
var Q = gp(),
  E = gi();
const ee = mp(E),
  Dc = pp({ __proto__: null, default: ee }, [E]);
var Zl = {},
  li = { exports: {} },
  be = {},
  ui = { exports: {} },
  oi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc;
function yp() {
  return (
    Fc ||
      ((Fc = 1),
      (function (u) {
        function s(j, Y) {
          var M = j.length;
          j.push(Y);
          e: for (; 0 < M; ) {
            var g = (M - 1) >>> 1,
              C = j[g];
            if (0 < d(C, Y)) (j[g] = Y), (j[M] = C), (M = g);
            else break e;
          }
        }
        function i(j) {
          return j.length === 0 ? null : j[0];
        }
        function c(j) {
          if (j.length === 0) return null;
          var Y = j[0],
            M = j.pop();
          if (M !== Y) {
            j[0] = M;
            e: for (var g = 0, C = j.length, q = C >>> 1; g < q; ) {
              var Z = 2 * (g + 1) - 1,
                ue = j[Z],
                oe = Z + 1,
                me = j[oe];
              if (0 > d(ue, M))
                oe < C && 0 > d(me, ue)
                  ? ((j[g] = me), (j[oe] = M), (g = oe))
                  : ((j[g] = ue), (j[Z] = M), (g = Z));
              else if (oe < C && 0 > d(me, M))
                (j[g] = me), (j[oe] = M), (g = oe);
              else break e;
            }
          }
          return Y;
        }
        function d(j, Y) {
          var M = j.sortIndex - Y.sortIndex;
          return M !== 0 ? M : j.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var p = performance;
          u.unstable_now = function () {
            return p.now();
          };
        } else {
          var h = Date,
            S = h.now();
          u.unstable_now = function () {
            return h.now() - S;
          };
        }
        var y = [],
          P = [],
          N = 1,
          O = null,
          F = 3,
          A = !1,
          H = !1,
          D = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          te = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(j) {
          for (var Y = i(P); Y !== null; ) {
            if (Y.callback === null) c(P);
            else if (Y.startTime <= j)
              c(P), (Y.sortIndex = Y.expirationTime), s(y, Y);
            else break;
            Y = i(P);
          }
        }
        function se(j) {
          if (((D = !1), J(j), !H))
            if (i(y) !== null) (H = !0), Ae(le);
            else {
              var Y = i(P);
              Y !== null && de(se, Y.startTime - j);
            }
        }
        function le(j, Y) {
          (H = !1), D && ((D = !1), te(De), (De = -1)), (A = !0);
          var M = F;
          try {
            for (
              J(Y), O = i(y);
              O !== null && (!(O.expirationTime > Y) || (j && !gt()));

            ) {
              var g = O.callback;
              if (typeof g == "function") {
                (O.callback = null), (F = O.priorityLevel);
                var C = g(O.expirationTime <= Y);
                (Y = u.unstable_now()),
                  typeof C == "function"
                    ? (O.callback = C)
                    : O === i(y) && c(y),
                  J(Y);
              } else c(y);
              O = i(y);
            }
            if (O !== null) var q = !0;
            else {
              var Z = i(P);
              Z !== null && de(se, Z.startTime - Y), (q = !1);
            }
            return q;
          } finally {
            (O = null), (F = M), (A = !1);
          }
        }
        var ae = !1,
          ke = null,
          De = -1,
          pe = 5,
          Fe = -1;
        function gt() {
          return !(u.unstable_now() - Fe < pe);
        }
        function Qe() {
          if (ke !== null) {
            var j = u.unstable_now();
            Fe = j;
            var Y = !0;
            try {
              Y = ke(!0, j);
            } finally {
              Y ? je() : ((ae = !1), (ke = null));
            }
          } else ae = !1;
        }
        var je;
        if (typeof z == "function")
          je = function () {
            z(Qe);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            lt = rt.port2;
          (rt.port1.onmessage = Qe),
            (je = function () {
              lt.postMessage(null);
            });
        } else
          je = function () {
            L(Qe, 0);
          };
        function Ae(j) {
          (ke = j), ae || ((ae = !0), je());
        }
        function de(j, Y) {
          De = L(function () {
            j(u.unstable_now());
          }, Y);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (u.unstable_continueExecution = function () {
            H || A || ((H = !0), Ae(le));
          }),
          (u.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (pe = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return F;
          }),
          (u.unstable_getFirstCallbackNode = function () {
            return i(y);
          }),
          (u.unstable_next = function (j) {
            switch (F) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = F;
            }
            var M = F;
            F = Y;
            try {
              return j();
            } finally {
              F = M;
            }
          }),
          (u.unstable_pauseExecution = function () {}),
          (u.unstable_requestPaint = function () {}),
          (u.unstable_runWithPriority = function (j, Y) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var M = F;
            F = j;
            try {
              return Y();
            } finally {
              F = M;
            }
          }),
          (u.unstable_scheduleCallback = function (j, Y, M) {
            var g = u.unstable_now();
            switch (
              (typeof M == "object" && M !== null
                ? ((M = M.delay),
                  (M = typeof M == "number" && 0 < M ? g + M : g))
                : (M = g),
              j)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = M + C),
              (j = {
                id: N++,
                callback: Y,
                priorityLevel: j,
                startTime: M,
                expirationTime: C,
                sortIndex: -1,
              }),
              M > g
                ? ((j.sortIndex = M),
                  s(P, j),
                  i(y) === null &&
                    j === i(P) &&
                    (D ? (te(De), (De = -1)) : (D = !0), de(se, M - g)))
                : ((j.sortIndex = C), s(y, j), H || A || ((H = !0), Ae(le))),
              j
            );
          }),
          (u.unstable_shouldYield = gt),
          (u.unstable_wrapCallback = function (j) {
            var Y = F;
            return function () {
              var M = F;
              F = Y;
              try {
                return j.apply(this, arguments);
              } finally {
                F = M;
              }
            };
          });
      })(oi)),
    oi
  );
}
var jc;
function wp() {
  return jc || ((jc = 1), (ui.exports = yp())), ui.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc;
function Sp() {
  if (zc) return be;
  zc = 1;
  var u = gi(),
    s = wp();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    d = {};
  function p(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var S = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    y = Object.prototype.hasOwnProperty,
    P =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    N = {},
    O = {};
  function F(e) {
    return y.call(O, e)
      ? !0
      : y.call(N, e)
        ? !1
        : P.test(e)
          ? (O[e] = !0)
          : ((N[e] = !0), !1);
  }
  function A(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function H(e, t, n, r) {
    if (t === null || typeof t > "u" || A(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function D(e, t, n, r, l, o, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = a);
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      L[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        L[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      L[e] = new D(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        L[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      L[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      L[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      L[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      L[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var te = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(te, z);
      L[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(te, z);
        L[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(te, z);
      L[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      L[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new D(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      L[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function J(e, t, n, r) {
    var l = L.hasOwnProperty(t) ? L[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (H(t, n, l, r) && (n = null),
      r || l === null
        ? F(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var se = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    le = Symbol.for("react.element"),
    ae = Symbol.for("react.portal"),
    ke = Symbol.for("react.fragment"),
    De = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    Fe = Symbol.for("react.provider"),
    gt = Symbol.for("react.context"),
    Qe = Symbol.for("react.forward_ref"),
    je = Symbol.for("react.suspense"),
    rt = Symbol.for("react.suspense_list"),
    lt = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    de = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var M = Object.assign,
    g;
  function C(e) {
    if (g === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        g = (t && t[1]) || "";
      }
    return (
      `
` +
      g +
      e
    );
  }
  var q = !1;
  function Z(e, t) {
    if (!e || q) return "";
    q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var l = x.stack.split(`
`),
            o = r.stack.split(`
`),
            a = l.length - 1,
            f = o.length - 1;
          1 <= a && 0 <= f && l[a] !== o[f];

        )
          f--;
        for (; 1 <= a && 0 <= f; a--, f--)
          if (l[a] !== o[f]) {
            if (a !== 1 || f !== 1)
              do
                if ((a--, f--, 0 > f || l[a] !== o[f])) {
                  var m =
                    `
` + l[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      m.includes("<anonymous>") &&
                      (m = m.replace("<anonymous>", e.displayName)),
                    m
                  );
                }
              while (1 <= a && 0 <= f);
            break;
          }
      }
    } finally {
      (q = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Z(e.type, !1)), e;
      case 11:
        return (e = Z(e.type.render, !1)), e;
      case 1:
        return (e = Z(e.type, !0)), e;
      default:
        return "";
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ke:
        return "Fragment";
      case ae:
        return "Portal";
      case pe:
        return "Profiler";
      case De:
        return "StrictMode";
      case je:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gt:
          return (e.displayName || "Context") + ".Consumer";
        case Fe:
          return (e._context.displayName || "Context") + ".Provider";
        case Qe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case lt:
          return (
            (t = e.displayName || null), t !== null ? t : oe(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return oe(t);
      case 8:
        return t === De ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ut(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (a) {
            (r = "" + a), o.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ur(e) {
    e._valueTracker || (e._valueTracker = ut(e));
  }
  function ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Br(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function su(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function zi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Mi(e, t) {
    (t = t.checked), t != null && J(e, "checked", t, !1);
  }
  function au(e, t) {
    Mi(e, t);
    var n = ce(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? cu(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && cu(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function $i(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function cu(e, t, n) {
    (t !== "number" || Br(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var qn = Array.isArray;
  function Cn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ai(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (qn(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function Ui(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Bi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Hi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function du(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Hi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Hr,
    Vi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Hr = Hr || document.createElement("div"),
            Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Hr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var bn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    gf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(bn).forEach(function (e) {
    gf.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bn[t] = bn[e]);
    });
  });
  function Wi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (bn.hasOwnProperty(e) && bn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Qi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Wi(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var yf = M(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function pu(e, t) {
    if (t) {
      if (yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function mu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vu = null;
  function hu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var gu = null,
    Pn = null,
    Nn = null;
  function Ki(e) {
    if ((e = kr(e))) {
      if (typeof gu != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = fl(t)), gu(e.stateNode, e.type, t));
    }
  }
  function Gi(e) {
    Pn ? (Nn ? Nn.push(e) : (Nn = [e])) : (Pn = e);
  }
  function Yi() {
    if (Pn) {
      var e = Pn,
        t = Nn;
      if (((Nn = Pn = null), Ki(e), t)) for (e = 0; e < t.length; e++) Ki(t[e]);
    }
  }
  function Xi(e, t) {
    return e(t);
  }
  function Zi() {}
  var yu = !1;
  function qi(e, t, n) {
    if (yu) return e(t, n);
    yu = !0;
    try {
      return Xi(e, t, n);
    } finally {
      (yu = !1), (Pn !== null || Nn !== null) && (Zi(), Yi());
    }
  }
  function er(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = fl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var wu = !1;
  if (S)
    try {
      var tr = {};
      Object.defineProperty(tr, "passive", {
        get: function () {
          wu = !0;
        },
      }),
        window.addEventListener("test", tr, tr),
        window.removeEventListener("test", tr, tr);
    } catch {
      wu = !1;
    }
  function wf(e, t, n, r, l, o, a, f, m) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (T) {
      this.onError(T);
    }
  }
  var nr = !1,
    Vr = null,
    Wr = !1,
    Su = null,
    Sf = {
      onError: function (e) {
        (nr = !0), (Vr = e);
      },
    };
  function kf(e, t, n, r, l, o, a, f, m) {
    (nr = !1), (Vr = null), wf.apply(Sf, arguments);
  }
  function xf(e, t, n, r, l, o, a, f, m) {
    if ((kf.apply(this, arguments), nr)) {
      if (nr) {
        var x = Vr;
        (nr = !1), (Vr = null);
      } else throw Error(i(198));
      Wr || ((Wr = !0), (Su = x));
    }
  }
  function cn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ji(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function bi(e) {
    if (cn(e) !== e) throw Error(i(188));
  }
  function Ef(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = cn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return bi(l), e;
          if (o === r) return bi(l), t;
          o = o.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var a = !1, f = l.child; f; ) {
          if (f === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (f === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          f = f.sibling;
        }
        if (!a) {
          for (f = o.child; f; ) {
            if (f === n) {
              (a = !0), (n = o), (r = l);
              break;
            }
            if (f === r) {
              (a = !0), (r = o), (n = l);
              break;
            }
            f = f.sibling;
          }
          if (!a) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function es(e) {
    return (e = Ef(e)), e !== null ? ts(e) : null;
  }
  function ts(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ts(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ns = s.unstable_scheduleCallback,
    rs = s.unstable_cancelCallback,
    Cf = s.unstable_shouldYield,
    Pf = s.unstable_requestPaint,
    Pe = s.unstable_now,
    Nf = s.unstable_getCurrentPriorityLevel,
    ku = s.unstable_ImmediatePriority,
    ls = s.unstable_UserBlockingPriority,
    Qr = s.unstable_NormalPriority,
    _f = s.unstable_LowPriority,
    us = s.unstable_IdlePriority,
    Kr = null,
    Nt = null;
  function Tf(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function")
      try {
        Nt.onCommitFiberRoot(Kr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : If,
    Rf = Math.log,
    Lf = Math.LN2;
  function If(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Rf(e) / Lf) | 0)) | 0;
  }
  var Gr = 64,
    Yr = 4194304;
  function rr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var f = a & ~l;
      f !== 0 ? (r = rr(f)) : ((o &= a), o !== 0 && (r = rr(o)));
    } else (a = n & ~l), a !== 0 ? (r = rr(a)) : o !== 0 && (r = rr(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - yt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Of(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Df(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var a = 31 - yt(o),
        f = 1 << a,
        m = l[a];
      m === -1
        ? ((f & n) === 0 || (f & r) !== 0) && (l[a] = Of(f, t))
        : m <= t && (e.expiredLanes |= f),
        (o &= ~f);
    }
  }
  function xu(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function os() {
    var e = Gr;
    return (Gr <<= 1), (Gr & 4194240) === 0 && (Gr = 64), e;
  }
  function Eu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function lr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = n);
  }
  function Ff(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - yt(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function Cu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var fe = 0;
  function is(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ss,
    Pu,
    as,
    cs,
    fs,
    Nu = !1,
    Zr = [],
    Ut = null,
    Bt = null,
    Ht = null,
    ur = new Map(),
    or = new Map(),
    Vt = [],
    jf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ds(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ut = null;
        break;
      case "dragenter":
      case "dragleave":
        Bt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ht = null;
        break;
      case "pointerover":
      case "pointerout":
        ur.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        or.delete(t.pointerId);
    }
  }
  function ir(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = kr(t)), t !== null && Pu(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function zf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Ut = ir(Ut, e, t, n, r, l)), !0;
      case "dragenter":
        return (Bt = ir(Bt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ht = ir(Ht, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return ur.set(o, ir(ur.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), or.set(o, ir(or.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function ps(e) {
    var t = fn(e.target);
    if (t !== null) {
      var n = cn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ji(n)), t !== null)) {
            (e.blockedOn = t),
              fs(e.priority, function () {
                as(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (vu = r), n.target.dispatchEvent(r), (vu = null);
      } else return (t = kr(n)), t !== null && Pu(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ms(e, t, n) {
    qr(e) && n.delete(t);
  }
  function Mf() {
    (Nu = !1),
      Ut !== null && qr(Ut) && (Ut = null),
      Bt !== null && qr(Bt) && (Bt = null),
      Ht !== null && qr(Ht) && (Ht = null),
      ur.forEach(ms),
      or.forEach(ms);
  }
  function sr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nu ||
        ((Nu = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Mf)));
  }
  function ar(e) {
    function t(l) {
      return sr(l, e);
    }
    if (0 < Zr.length) {
      sr(Zr[0], e);
      for (var n = 1; n < Zr.length; n++) {
        var r = Zr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ut !== null && sr(Ut, e),
        Bt !== null && sr(Bt, e),
        Ht !== null && sr(Ht, e),
        ur.forEach(t),
        or.forEach(t),
        n = 0;
      n < Vt.length;
      n++
    )
      (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
      ps(n), n.blockedOn === null && Vt.shift();
  }
  var _n = se.ReactCurrentBatchConfig,
    Jr = !0;
  function $f(e, t, n, r) {
    var l = fe,
      o = _n.transition;
    _n.transition = null;
    try {
      (fe = 1), _u(e, t, n, r);
    } finally {
      (fe = l), (_n.transition = o);
    }
  }
  function Af(e, t, n, r) {
    var l = fe,
      o = _n.transition;
    _n.transition = null;
    try {
      (fe = 4), _u(e, t, n, r);
    } finally {
      (fe = l), (_n.transition = o);
    }
  }
  function _u(e, t, n, r) {
    if (Jr) {
      var l = Tu(e, t, n, r);
      if (l === null) Qu(e, t, r, br, n), ds(e, r);
      else if (zf(l, e, t, n, r)) r.stopPropagation();
      else if ((ds(e, r), t & 4 && -1 < jf.indexOf(e))) {
        for (; l !== null; ) {
          var o = kr(l);
          if (
            (o !== null && ss(o),
            (o = Tu(e, t, n, r)),
            o === null && Qu(e, t, r, br, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Qu(e, t, r, null, n);
    }
  }
  var br = null;
  function Tu(e, t, n, r) {
    if (((br = null), (e = hu(r)), (e = fn(e)), e !== null))
      if (((t = cn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ji(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (br = e), null;
  }
  function vs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Nf()) {
          case ku:
            return 1;
          case ls:
            return 4;
          case Qr:
          case _f:
            return 16;
          case us:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wt = null,
    Ru = null,
    el = null;
  function hs() {
    if (el) return el;
    var e,
      t = Ru,
      n = t.length,
      r,
      l = "value" in Wt ? Wt.value : Wt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[o - r]; r++);
    return (el = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function tl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function nl() {
    return !0;
  }
  function gs() {
    return !1;
  }
  function ot(e) {
    function t(n, r, l, o, a) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null);
      for (var f in e)
        e.hasOwnProperty(f) && ((n = e[f]), (this[f] = n ? n(o) : o[f]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? nl
          : gs),
        (this.isPropagationStopped = gs),
        this
      );
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = nl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = nl));
        },
        persist: function () {},
        isPersistent: nl,
      }),
      t
    );
  }
  var Tn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Lu = ot(Tn),
    cr = M({}, Tn, { view: 0, detail: 0 }),
    Uf = ot(cr),
    Iu,
    Ou,
    fr,
    rl = M({}, cr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== fr &&
              (fr && e.type === "mousemove"
                ? ((Iu = e.screenX - fr.screenX), (Ou = e.screenY - fr.screenY))
                : (Ou = Iu = 0),
              (fr = e)),
            Iu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ou;
      },
    }),
    ys = ot(rl),
    Bf = M({}, rl, { dataTransfer: 0 }),
    Hf = ot(Bf),
    Vf = M({}, cr, { relatedTarget: 0 }),
    Du = ot(Vf),
    Wf = M({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qf = ot(Wf),
    Kf = M({}, Tn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Gf = ot(Kf),
    Yf = M({}, Tn, { data: 0 }),
    ws = ot(Yf),
    Xf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    qf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = qf[e])
        ? !!t[e]
        : !1;
  }
  function Fu() {
    return Jf;
  }
  var bf = M({}, cr, {
      key: function (e) {
        if (e.key) {
          var t = Xf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = tl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Zf[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fu,
      charCode: function (e) {
        return e.type === "keypress" ? tl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? tl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ed = ot(bf),
    td = M({}, rl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ss = ot(td),
    nd = M({}, cr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fu,
    }),
    rd = ot(nd),
    ld = M({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ud = ot(ld),
    od = M({}, rl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    id = ot(od),
    sd = [9, 13, 27, 32],
    ju = S && "CompositionEvent" in window,
    dr = null;
  S && "documentMode" in document && (dr = document.documentMode);
  var ad = S && "TextEvent" in window && !dr,
    ks = S && (!ju || (dr && 8 < dr && 11 >= dr)),
    xs = " ",
    Es = !1;
  function Cs(e, t) {
    switch (e) {
      case "keyup":
        return sd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ps(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rn = !1;
  function cd(e, t) {
    switch (e) {
      case "compositionend":
        return Ps(t);
      case "keypress":
        return t.which !== 32 ? null : ((Es = !0), xs);
      case "textInput":
        return (e = t.data), e === xs && Es ? null : e;
      default:
        return null;
    }
  }
  function fd(e, t) {
    if (Rn)
      return e === "compositionend" || (!ju && Cs(e, t))
        ? ((e = hs()), (el = Ru = Wt = null), (Rn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ks && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dd[e.type] : t === "textarea";
  }
  function _s(e, t, n, r) {
    Gi(r),
      (t = sl(t, "onChange")),
      0 < t.length &&
        ((n = new Lu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var pr = null,
    mr = null;
  function pd(e) {
    Qs(e, 0);
  }
  function ll(e) {
    var t = Fn(e);
    if (ji(t)) return e;
  }
  function md(e, t) {
    if (e === "change") return t;
  }
  var Ts = !1;
  if (S) {
    var zu;
    if (S) {
      var Mu = "oninput" in document;
      if (!Mu) {
        var Rs = document.createElement("div");
        Rs.setAttribute("oninput", "return;"),
          (Mu = typeof Rs.oninput == "function");
      }
      zu = Mu;
    } else zu = !1;
    Ts = zu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ls() {
    pr && (pr.detachEvent("onpropertychange", Is), (mr = pr = null));
  }
  function Is(e) {
    if (e.propertyName === "value" && ll(mr)) {
      var t = [];
      _s(t, mr, e, hu(e)), qi(pd, t);
    }
  }
  function vd(e, t, n) {
    e === "focusin"
      ? (Ls(), (pr = t), (mr = n), pr.attachEvent("onpropertychange", Is))
      : e === "focusout" && Ls();
  }
  function hd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ll(mr);
  }
  function gd(e, t) {
    if (e === "click") return ll(t);
  }
  function yd(e, t) {
    if (e === "input" || e === "change") return ll(t);
  }
  function wd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == "function" ? Object.is : wd;
  function vr(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!y.call(t, l) || !wt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Os(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ds(e, t) {
    var n = Os(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Os(n);
    }
  }
  function Fs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Fs(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function js() {
    for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Br(e.document);
    }
    return t;
  }
  function $u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Sd(e) {
    var t = js(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Fs(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && $u(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Ds(n, o));
          var a = Ds(n, r);
          l &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var kd = S && "documentMode" in document && 11 >= document.documentMode,
    Ln = null,
    Au = null,
    hr = null,
    Uu = !1;
  function zs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uu ||
      Ln == null ||
      Ln !== Br(r) ||
      ((r = Ln),
      "selectionStart" in r && $u(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (hr && vr(hr, r)) ||
        ((hr = r),
        (r = sl(Au, "onSelect")),
        0 < r.length &&
          ((t = new Lu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Ln))));
  }
  function ul(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var In = {
      animationend: ul("Animation", "AnimationEnd"),
      animationiteration: ul("Animation", "AnimationIteration"),
      animationstart: ul("Animation", "AnimationStart"),
      transitionend: ul("Transition", "TransitionEnd"),
    },
    Bu = {},
    Ms = {};
  S &&
    ((Ms = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete In.animationend.animation,
      delete In.animationiteration.animation,
      delete In.animationstart.animation),
    "TransitionEvent" in window || delete In.transitionend.transition);
  function ol(e) {
    if (Bu[e]) return Bu[e];
    if (!In[e]) return e;
    var t = In[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ms) return (Bu[e] = t[n]);
    return e;
  }
  var $s = ol("animationend"),
    As = ol("animationiteration"),
    Us = ol("animationstart"),
    Bs = ol("transitionend"),
    Hs = new Map(),
    Vs =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Qt(e, t) {
    Hs.set(e, t), p(t, [e]);
  }
  for (var Hu = 0; Hu < Vs.length; Hu++) {
    var Vu = Vs[Hu],
      xd = Vu.toLowerCase(),
      Ed = Vu[0].toUpperCase() + Vu.slice(1);
    Qt(xd, "on" + Ed);
  }
  Qt($s, "onAnimationEnd"),
    Qt(As, "onAnimationIteration"),
    Qt(Us, "onAnimationStart"),
    Qt("dblclick", "onDoubleClick"),
    Qt("focusin", "onFocus"),
    Qt("focusout", "onBlur"),
    Qt(Bs, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    p(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    p(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    p(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var gr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Cd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(gr),
    );
  function Ws(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), xf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Qs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var f = r[a],
              m = f.instance,
              x = f.currentTarget;
            if (((f = f.listener), m !== o && l.isPropagationStopped()))
              break e;
            Ws(l, f, x), (o = m);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((f = r[a]),
              (m = f.instance),
              (x = f.currentTarget),
              (f = f.listener),
              m !== o && l.isPropagationStopped())
            )
              break e;
            Ws(l, f, x), (o = m);
          }
      }
    }
    if (Wr) throw ((e = Su), (Wr = !1), (Su = null), e);
  }
  function he(e, t) {
    var n = t[qu];
    n === void 0 && (n = t[qu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ks(t, e, 2, !1), n.add(r));
  }
  function Wu(e, t, n) {
    var r = 0;
    t && (r |= 4), Ks(n, e, r, t);
  }
  var il = "_reactListening" + Math.random().toString(36).slice(2);
  function yr(e) {
    if (!e[il]) {
      (e[il] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (Cd.has(n) || Wu(n, !1, e), Wu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[il] || ((t[il] = !0), Wu("selectionchange", !1, t));
    }
  }
  function Ks(e, t, n, r) {
    switch (vs(t)) {
      case 1:
        var l = $f;
        break;
      case 4:
        l = Af;
        break;
      default:
        l = _u;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !wu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function Qu(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var f = r.stateNode.containerInfo;
          if (f === l || (f.nodeType === 8 && f.parentNode === l)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var m = a.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = a.stateNode.containerInfo),
                m === l || (m.nodeType === 8 && m.parentNode === l))
              )
                return;
              a = a.return;
            }
          for (; f !== null; ) {
            if (((a = fn(f)), a === null)) return;
            if (((m = a.tag), m === 5 || m === 6)) {
              r = o = a;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
    qi(function () {
      var x = o,
        T = hu(n),
        R = [];
      e: {
        var _ = Hs.get(e);
        if (_ !== void 0) {
          var $ = Lu,
            B = e;
          switch (e) {
            case "keypress":
              if (tl(n) === 0) break e;
            case "keydown":
            case "keyup":
              $ = ed;
              break;
            case "focusin":
              (B = "focus"), ($ = Du);
              break;
            case "focusout":
              (B = "blur"), ($ = Du);
              break;
            case "beforeblur":
            case "afterblur":
              $ = Du;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = Hf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = rd;
              break;
            case $s:
            case As:
            case Us:
              $ = Qf;
              break;
            case Bs:
              $ = ud;
              break;
            case "scroll":
              $ = Uf;
              break;
            case "wheel":
              $ = id;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = Gf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = Ss;
          }
          var V = (t & 4) !== 0,
            Ne = !V && e === "scroll",
            w = V ? (_ !== null ? _ + "Capture" : null) : _;
          V = [];
          for (var v = x, k; v !== null; ) {
            k = v;
            var I = k.stateNode;
            if (
              (k.tag === 5 &&
                I !== null &&
                ((k = I),
                w !== null &&
                  ((I = er(v, w)), I != null && V.push(wr(v, I, k)))),
              Ne)
            )
              break;
            v = v.return;
          }
          0 < V.length &&
            ((_ = new $(_, B, null, n, T)), R.push({ event: _, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            ($ = e === "mouseout" || e === "pointerout"),
            _ &&
              n !== vu &&
              (B = n.relatedTarget || n.fromElement) &&
              (fn(B) || B[It]))
          )
            break e;
          if (
            ($ || _) &&
            ((_ =
              T.window === T
                ? T
                : (_ = T.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            $
              ? ((B = n.relatedTarget || n.toElement),
                ($ = x),
                (B = B ? fn(B) : null),
                B !== null &&
                  ((Ne = cn(B)), B !== Ne || (B.tag !== 5 && B.tag !== 6)) &&
                  (B = null))
              : (($ = null), (B = x)),
            $ !== B)
          ) {
            if (
              ((V = ys),
              (I = "onMouseLeave"),
              (w = "onMouseEnter"),
              (v = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((V = Ss),
                (I = "onPointerLeave"),
                (w = "onPointerEnter"),
                (v = "pointer")),
              (Ne = $ == null ? _ : Fn($)),
              (k = B == null ? _ : Fn(B)),
              (_ = new V(I, v + "leave", $, n, T)),
              (_.target = Ne),
              (_.relatedTarget = k),
              (I = null),
              fn(T) === x &&
                ((V = new V(w, v + "enter", B, n, T)),
                (V.target = k),
                (V.relatedTarget = Ne),
                (I = V)),
              (Ne = I),
              $ && B)
            )
              t: {
                for (V = $, w = B, v = 0, k = V; k; k = On(k)) v++;
                for (k = 0, I = w; I; I = On(I)) k++;
                for (; 0 < v - k; ) (V = On(V)), v--;
                for (; 0 < k - v; ) (w = On(w)), k--;
                for (; v--; ) {
                  if (V === w || (w !== null && V === w.alternate)) break t;
                  (V = On(V)), (w = On(w));
                }
                V = null;
              }
            else V = null;
            $ !== null && Gs(R, _, $, V, !1),
              B !== null && Ne !== null && Gs(R, Ne, B, V, !0);
          }
        }
        e: {
          if (
            ((_ = x ? Fn(x) : window),
            ($ = _.nodeName && _.nodeName.toLowerCase()),
            $ === "select" || ($ === "input" && _.type === "file"))
          )
            var W = md;
          else if (Ns(_))
            if (Ts) W = yd;
            else {
              W = hd;
              var K = vd;
            }
          else
            ($ = _.nodeName) &&
              $.toLowerCase() === "input" &&
              (_.type === "checkbox" || _.type === "radio") &&
              (W = gd);
          if (W && (W = W(e, x))) {
            _s(R, W, n, T);
            break e;
          }
          K && K(e, _, x),
            e === "focusout" &&
              (K = _._wrapperState) &&
              K.controlled &&
              _.type === "number" &&
              cu(_, "number", _.value);
        }
        switch (((K = x ? Fn(x) : window), e)) {
          case "focusin":
            (Ns(K) || K.contentEditable === "true") &&
              ((Ln = K), (Au = x), (hr = null));
            break;
          case "focusout":
            hr = Au = Ln = null;
            break;
          case "mousedown":
            Uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Uu = !1), zs(R, n, T);
            break;
          case "selectionchange":
            if (kd) break;
          case "keydown":
          case "keyup":
            zs(R, n, T);
        }
        var G;
        if (ju)
          e: {
            switch (e) {
              case "compositionstart":
                var X = "onCompositionStart";
                break e;
              case "compositionend":
                X = "onCompositionEnd";
                break e;
              case "compositionupdate":
                X = "onCompositionUpdate";
                break e;
            }
            X = void 0;
          }
        else
          Rn
            ? Cs(e, n) && (X = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (X = "onCompositionStart");
        X &&
          (ks &&
            n.locale !== "ko" &&
            (Rn || X !== "onCompositionStart"
              ? X === "onCompositionEnd" && Rn && (G = hs())
              : ((Wt = T),
                (Ru = "value" in Wt ? Wt.value : Wt.textContent),
                (Rn = !0))),
          (K = sl(x, X)),
          0 < K.length &&
            ((X = new ws(X, e, null, n, T)),
            R.push({ event: X, listeners: K }),
            G ? (X.data = G) : ((G = Ps(n)), G !== null && (X.data = G)))),
          (G = ad ? cd(e, n) : fd(e, n)) &&
            ((x = sl(x, "onBeforeInput")),
            0 < x.length &&
              ((T = new ws("onBeforeInput", "beforeinput", null, n, T)),
              R.push({ event: T, listeners: x }),
              (T.data = G)));
      }
      Qs(R, t);
    });
  }
  function wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function sl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = er(e, n)),
        o != null && r.unshift(wr(e, o, l)),
        (o = er(e, t)),
        o != null && r.push(wr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function On(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Gs(e, t, n, r, l) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
      var f = n,
        m = f.alternate,
        x = f.stateNode;
      if (m !== null && m === r) break;
      f.tag === 5 &&
        x !== null &&
        ((f = x),
        l
          ? ((m = er(n, o)), m != null && a.unshift(wr(n, m, f)))
          : l || ((m = er(n, o)), m != null && a.push(wr(n, m, f)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Pd = /\r\n?/g,
    Nd = /\u0000|\uFFFD/g;
  function Ys(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Pd,
        `
`,
      )
      .replace(Nd, "");
  }
  function al(e, t, n) {
    if (((t = Ys(t)), Ys(e) !== t && n)) throw Error(i(425));
  }
  function cl() {}
  var Ku = null,
    Gu = null;
  function Yu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Xu = typeof setTimeout == "function" ? setTimeout : void 0,
    _d = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xs = typeof Promise == "function" ? Promise : void 0,
    Td =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xs < "u"
          ? function (e) {
              return Xs.resolve(null).then(e).catch(Rd);
            }
          : Xu;
  function Rd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zu(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), ar(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    ar(t);
  }
  function Kt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Zs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Dn = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + Dn,
    Sr = "__reactProps$" + Dn,
    It = "__reactContainer$" + Dn,
    qu = "__reactEvents$" + Dn,
    Ld = "__reactListeners$" + Dn,
    Id = "__reactHandles$" + Dn;
  function fn(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[It] || n[_t])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Zs(e); e !== null; ) {
            if ((n = e[_t])) return n;
            e = Zs(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function kr(e) {
    return (
      (e = e[_t] || e[It]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Fn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function fl(e) {
    return e[Sr] || null;
  }
  var Ju = [],
    jn = -1;
  function Gt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > jn || ((e.current = Ju[jn]), (Ju[jn] = null), jn--);
  }
  function ve(e, t) {
    jn++, (Ju[jn] = e.current), (e.current = t);
  }
  var Yt = {},
    Ue = Gt(Yt),
    Ye = Gt(!1),
    dn = Yt;
  function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Xe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function dl() {
    ge(Ye), ge(Ue);
  }
  function qs(e, t, n) {
    if (Ue.current !== Yt) throw Error(i(168));
    ve(Ue, t), ve(Ye, n);
  }
  function Js(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(i(108, me(e) || "Unknown", l));
    return M({}, n, r);
  }
  function pl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Yt),
      (dn = Ue.current),
      ve(Ue, e),
      ve(Ye, Ye.current),
      !0
    );
  }
  function bs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n
      ? ((e = Js(e, t, dn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Ye),
        ge(Ue),
        ve(Ue, e))
      : ge(Ye),
      ve(Ye, n);
  }
  var Ot = null,
    ml = !1,
    bu = !1;
  function ea(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Od(e) {
    (ml = !0), ea(e);
  }
  function Xt() {
    if (!bu && Ot !== null) {
      bu = !0;
      var e = 0,
        t = fe;
      try {
        var n = Ot;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Ot = null), (ml = !1);
      } catch (l) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), ns(ku, Xt), l);
      } finally {
        (fe = t), (bu = !1);
      }
    }
    return null;
  }
  var Mn = [],
    $n = 0,
    vl = null,
    hl = 0,
    ct = [],
    ft = 0,
    pn = null,
    Dt = 1,
    Ft = "";
  function mn(e, t) {
    (Mn[$n++] = hl), (Mn[$n++] = vl), (vl = e), (hl = t);
  }
  function ta(e, t, n) {
    (ct[ft++] = Dt), (ct[ft++] = Ft), (ct[ft++] = pn), (pn = e);
    var r = Dt;
    e = Ft;
    var l = 32 - yt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - yt(t) + l;
    if (30 < o) {
      var a = l - (l % 5);
      (o = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (l -= a),
        (Dt = (1 << (32 - yt(t) + l)) | (n << l) | r),
        (Ft = o + e);
    } else (Dt = (1 << o) | (n << l) | r), (Ft = e);
  }
  function eo(e) {
    e.return !== null && (mn(e, 1), ta(e, 1, 0));
  }
  function to(e) {
    for (; e === vl; )
      (vl = Mn[--$n]), (Mn[$n] = null), (hl = Mn[--$n]), (Mn[$n] = null);
    for (; e === pn; )
      (pn = ct[--ft]),
        (ct[ft] = null),
        (Ft = ct[--ft]),
        (ct[ft] = null),
        (Dt = ct[--ft]),
        (ct[ft] = null);
  }
  var it = null,
    st = null,
    we = !1,
    St = null;
  function na(e, t) {
    var n = vt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ra(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (it = e), (st = Kt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (it = e), (st = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = pn !== null ? { id: Dt, overflow: Ft } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = vt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (it = e),
              (st = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function no(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ro(e) {
    if (we) {
      var t = st;
      if (t) {
        var n = t;
        if (!ra(e, t)) {
          if (no(e)) throw Error(i(418));
          t = Kt(n.nextSibling);
          var r = it;
          t && ra(e, t)
            ? na(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (we = !1), (it = e));
        }
      } else {
        if (no(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (we = !1), (it = e);
      }
    }
  }
  function la(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    it = e;
  }
  function gl(e) {
    if (e !== it) return !1;
    if (!we) return la(e), (we = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Yu(e.type, e.memoizedProps))),
      t && (t = st))
    ) {
      if (no(e)) throw (ua(), Error(i(418)));
      for (; t; ) na(e, t), (t = Kt(t.nextSibling));
    }
    if ((la(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                st = Kt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        st = null;
      }
    } else st = it ? Kt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    for (var e = st; e; ) e = Kt(e.nextSibling);
  }
  function An() {
    (st = it = null), (we = !1);
  }
  function lo(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  var Dd = se.ReactCurrentBatchConfig;
  function xr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (a) {
              var f = l.refs;
              a === null ? delete f[o] : (f[o] = a);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function yl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function oa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ia(e) {
    function t(w, v) {
      if (e) {
        var k = w.deletions;
        k === null ? ((w.deletions = [v]), (w.flags |= 16)) : k.push(v);
      }
    }
    function n(w, v) {
      if (!e) return null;
      for (; v !== null; ) t(w, v), (v = v.sibling);
      return null;
    }
    function r(w, v) {
      for (w = new Map(); v !== null; )
        v.key !== null ? w.set(v.key, v) : w.set(v.index, v), (v = v.sibling);
      return w;
    }
    function l(w, v) {
      return (w = rn(w, v)), (w.index = 0), (w.sibling = null), w;
    }
    function o(w, v, k) {
      return (
        (w.index = k),
        e
          ? ((k = w.alternate),
            k !== null
              ? ((k = k.index), k < v ? ((w.flags |= 2), v) : k)
              : ((w.flags |= 2), v))
          : ((w.flags |= 1048576), v)
      );
    }
    function a(w) {
      return e && w.alternate === null && (w.flags |= 2), w;
    }
    function f(w, v, k, I) {
      return v === null || v.tag !== 6
        ? ((v = Zo(k, w.mode, I)), (v.return = w), v)
        : ((v = l(v, k)), (v.return = w), v);
    }
    function m(w, v, k, I) {
      var W = k.type;
      return W === ke
        ? T(w, v, k.props.children, I, k.key)
        : v !== null &&
            (v.elementType === W ||
              (typeof W == "object" &&
                W !== null &&
                W.$$typeof === Ae &&
                oa(W) === v.type))
          ? ((I = l(v, k.props)), (I.ref = xr(w, v, k)), (I.return = w), I)
          : ((I = Hl(k.type, k.key, k.props, null, w.mode, I)),
            (I.ref = xr(w, v, k)),
            (I.return = w),
            I);
    }
    function x(w, v, k, I) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== k.containerInfo ||
        v.stateNode.implementation !== k.implementation
        ? ((v = qo(k, w.mode, I)), (v.return = w), v)
        : ((v = l(v, k.children || [])), (v.return = w), v);
    }
    function T(w, v, k, I, W) {
      return v === null || v.tag !== 7
        ? ((v = xn(k, w.mode, I, W)), (v.return = w), v)
        : ((v = l(v, k)), (v.return = w), v);
    }
    function R(w, v, k) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return (v = Zo("" + v, w.mode, k)), (v.return = w), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case le:
            return (
              (k = Hl(v.type, v.key, v.props, null, w.mode, k)),
              (k.ref = xr(w, null, v)),
              (k.return = w),
              k
            );
          case ae:
            return (v = qo(v, w.mode, k)), (v.return = w), v;
          case Ae:
            var I = v._init;
            return R(w, I(v._payload), k);
        }
        if (qn(v) || Y(v))
          return (v = xn(v, w.mode, k, null)), (v.return = w), v;
        yl(w, v);
      }
      return null;
    }
    function _(w, v, k, I) {
      var W = v !== null ? v.key : null;
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return W !== null ? null : f(w, v, "" + k, I);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case le:
            return k.key === W ? m(w, v, k, I) : null;
          case ae:
            return k.key === W ? x(w, v, k, I) : null;
          case Ae:
            return (W = k._init), _(w, v, W(k._payload), I);
        }
        if (qn(k) || Y(k)) return W !== null ? null : T(w, v, k, I, null);
        yl(w, k);
      }
      return null;
    }
    function $(w, v, k, I, W) {
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return (w = w.get(k) || null), f(v, w, "" + I, W);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case le:
            return (
              (w = w.get(I.key === null ? k : I.key) || null), m(v, w, I, W)
            );
          case ae:
            return (
              (w = w.get(I.key === null ? k : I.key) || null), x(v, w, I, W)
            );
          case Ae:
            var K = I._init;
            return $(w, v, k, K(I._payload), W);
        }
        if (qn(I) || Y(I)) return (w = w.get(k) || null), T(v, w, I, W, null);
        yl(v, I);
      }
      return null;
    }
    function B(w, v, k, I) {
      for (
        var W = null, K = null, G = v, X = (v = 0), Oe = null;
        G !== null && X < k.length;
        X++
      ) {
        G.index > X ? ((Oe = G), (G = null)) : (Oe = G.sibling);
        var ie = _(w, G, k[X], I);
        if (ie === null) {
          G === null && (G = Oe);
          break;
        }
        e && G && ie.alternate === null && t(w, G),
          (v = o(ie, v, X)),
          K === null ? (W = ie) : (K.sibling = ie),
          (K = ie),
          (G = Oe);
      }
      if (X === k.length) return n(w, G), we && mn(w, X), W;
      if (G === null) {
        for (; X < k.length; X++)
          (G = R(w, k[X], I)),
            G !== null &&
              ((v = o(G, v, X)),
              K === null ? (W = G) : (K.sibling = G),
              (K = G));
        return we && mn(w, X), W;
      }
      for (G = r(w, G); X < k.length; X++)
        (Oe = $(G, w, X, k[X], I)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              G.delete(Oe.key === null ? X : Oe.key),
            (v = o(Oe, v, X)),
            K === null ? (W = Oe) : (K.sibling = Oe),
            (K = Oe));
      return (
        e &&
          G.forEach(function (ln) {
            return t(w, ln);
          }),
        we && mn(w, X),
        W
      );
    }
    function V(w, v, k, I) {
      var W = Y(k);
      if (typeof W != "function") throw Error(i(150));
      if (((k = W.call(k)), k == null)) throw Error(i(151));
      for (
        var K = (W = null), G = v, X = (v = 0), Oe = null, ie = k.next();
        G !== null && !ie.done;
        X++, ie = k.next()
      ) {
        G.index > X ? ((Oe = G), (G = null)) : (Oe = G.sibling);
        var ln = _(w, G, ie.value, I);
        if (ln === null) {
          G === null && (G = Oe);
          break;
        }
        e && G && ln.alternate === null && t(w, G),
          (v = o(ln, v, X)),
          K === null ? (W = ln) : (K.sibling = ln),
          (K = ln),
          (G = Oe);
      }
      if (ie.done) return n(w, G), we && mn(w, X), W;
      if (G === null) {
        for (; !ie.done; X++, ie = k.next())
          (ie = R(w, ie.value, I)),
            ie !== null &&
              ((v = o(ie, v, X)),
              K === null ? (W = ie) : (K.sibling = ie),
              (K = ie));
        return we && mn(w, X), W;
      }
      for (G = r(w, G); !ie.done; X++, ie = k.next())
        (ie = $(G, w, X, ie.value, I)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              G.delete(ie.key === null ? X : ie.key),
            (v = o(ie, v, X)),
            K === null ? (W = ie) : (K.sibling = ie),
            (K = ie));
      return (
        e &&
          G.forEach(function (dp) {
            return t(w, dp);
          }),
        we && mn(w, X),
        W
      );
    }
    function Ne(w, v, k, I) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === ke &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case le:
            e: {
              for (var W = k.key, K = v; K !== null; ) {
                if (K.key === W) {
                  if (((W = k.type), W === ke)) {
                    if (K.tag === 7) {
                      n(w, K.sibling),
                        (v = l(K, k.props.children)),
                        (v.return = w),
                        (w = v);
                      break e;
                    }
                  } else if (
                    K.elementType === W ||
                    (typeof W == "object" &&
                      W !== null &&
                      W.$$typeof === Ae &&
                      oa(W) === K.type)
                  ) {
                    n(w, K.sibling),
                      (v = l(K, k.props)),
                      (v.ref = xr(w, K, k)),
                      (v.return = w),
                      (w = v);
                    break e;
                  }
                  n(w, K);
                  break;
                } else t(w, K);
                K = K.sibling;
              }
              k.type === ke
                ? ((v = xn(k.props.children, w.mode, I, k.key)),
                  (v.return = w),
                  (w = v))
                : ((I = Hl(k.type, k.key, k.props, null, w.mode, I)),
                  (I.ref = xr(w, v, k)),
                  (I.return = w),
                  (w = I));
            }
            return a(w);
          case ae:
            e: {
              for (K = k.key; v !== null; ) {
                if (v.key === K)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === k.containerInfo &&
                    v.stateNode.implementation === k.implementation
                  ) {
                    n(w, v.sibling),
                      (v = l(v, k.children || [])),
                      (v.return = w),
                      (w = v);
                    break e;
                  } else {
                    n(w, v);
                    break;
                  }
                else t(w, v);
                v = v.sibling;
              }
              (v = qo(k, w.mode, I)), (v.return = w), (w = v);
            }
            return a(w);
          case Ae:
            return (K = k._init), Ne(w, v, K(k._payload), I);
        }
        if (qn(k)) return B(w, v, k, I);
        if (Y(k)) return V(w, v, k, I);
        yl(w, k);
      }
      return (typeof k == "string" && k !== "") || typeof k == "number"
        ? ((k = "" + k),
          v !== null && v.tag === 6
            ? (n(w, v.sibling), (v = l(v, k)), (v.return = w), (w = v))
            : (n(w, v), (v = Zo(k, w.mode, I)), (v.return = w), (w = v)),
          a(w))
        : n(w, v);
    }
    return Ne;
  }
  var Un = ia(!0),
    sa = ia(!1),
    wl = Gt(null),
    Sl = null,
    Bn = null,
    uo = null;
  function oo() {
    uo = Bn = Sl = null;
  }
  function io(e) {
    var t = wl.current;
    ge(wl), (e._currentValue = t);
  }
  function so(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Hn(e, t) {
    (Sl = e),
      (uo = Bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null));
  }
  function dt(e) {
    var t = e._currentValue;
    if (uo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
        if (Sl === null) throw Error(i(308));
        (Bn = e), (Sl.dependencies = { lanes: 0, firstContext: e });
      } else Bn = Bn.next = e;
    return t;
  }
  var vn = null;
  function ao(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function aa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ao(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      jt(e, r)
    );
  }
  function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zt = !1;
  function co(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ca(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function zt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ne & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        jt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ao(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      jt(e, n)
    );
  }
  function kl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cu(e, n);
    }
  }
  function fa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = a) : (o = o.next = a), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function xl(e, t, n, r) {
    var l = e.updateQueue;
    Zt = !1;
    var o = l.firstBaseUpdate,
      a = l.lastBaseUpdate,
      f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var m = f,
        x = m.next;
      (m.next = null), a === null ? (o = x) : (a.next = x), (a = m);
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (f = T.lastBaseUpdate),
        f !== a &&
          (f === null ? (T.firstBaseUpdate = x) : (f.next = x),
          (T.lastBaseUpdate = m)));
    }
    if (o !== null) {
      var R = l.baseState;
      (a = 0), (T = x = m = null), (f = o);
      do {
        var _ = f.lane,
          $ = f.eventTime;
        if ((r & _) === _) {
          T !== null &&
            (T = T.next =
              {
                eventTime: $,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              });
          e: {
            var B = e,
              V = f;
            switch (((_ = t), ($ = n), V.tag)) {
              case 1:
                if (((B = V.payload), typeof B == "function")) {
                  R = B.call($, R, _);
                  break e;
                }
                R = B;
                break e;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = V.payload),
                  (_ = typeof B == "function" ? B.call($, R, _) : B),
                  _ == null)
                )
                  break e;
                R = M({}, R, _);
                break e;
              case 2:
                Zt = !0;
            }
          }
          f.callback !== null &&
            f.lane !== 0 &&
            ((e.flags |= 64),
            (_ = l.effects),
            _ === null ? (l.effects = [f]) : _.push(f));
        } else
          ($ = {
            eventTime: $,
            lane: _,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            T === null ? ((x = T = $), (m = R)) : (T = T.next = $),
            (a |= _);
        if (((f = f.next), f === null)) {
          if (((f = l.shared.pending), f === null)) break;
          (_ = f),
            (f = _.next),
            (_.next = null),
            (l.lastBaseUpdate = _),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (T === null && (m = R),
        (l.baseState = m),
        (l.firstBaseUpdate = x),
        (l.lastBaseUpdate = T),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (a |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (yn |= a), (e.lanes = a), (e.memoizedState = R);
    }
  }
  function da(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(i(191, l));
          l.call(r);
        }
      }
  }
  var Er = {},
    Tt = Gt(Er),
    Cr = Gt(Er),
    Pr = Gt(Er);
  function hn(e) {
    if (e === Er) throw Error(i(174));
    return e;
  }
  function fo(e, t) {
    switch ((ve(Pr, t), ve(Cr, e), ve(Tt, Er), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : du(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = du(t, e));
    }
    ge(Tt), ve(Tt, t);
  }
  function Vn() {
    ge(Tt), ge(Cr), ge(Pr);
  }
  function pa(e) {
    hn(Pr.current);
    var t = hn(Tt.current),
      n = du(t, e.type);
    t !== n && (ve(Cr, e), ve(Tt, n));
  }
  function po(e) {
    Cr.current === e && (ge(Tt), ge(Cr));
  }
  var xe = Gt(0);
  function El(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var mo = [];
  function vo() {
    for (var e = 0; e < mo.length; e++)
      mo[e]._workInProgressVersionPrimary = null;
    mo.length = 0;
  }
  var Cl = se.ReactCurrentDispatcher,
    ho = se.ReactCurrentBatchConfig,
    gn = 0,
    Ee = null,
    Te = null,
    Le = null,
    Pl = !1,
    Nr = !1,
    _r = 0,
    Fd = 0;
  function Be() {
    throw Error(i(321));
  }
  function go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n])) return !1;
    return !0;
  }
  function yo(e, t, n, r, l, o) {
    if (
      ((gn = o),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Cl.current = e === null || e.memoizedState === null ? $d : Ad),
      (e = n(r, l)),
      Nr)
    ) {
      o = 0;
      do {
        if (((Nr = !1), (_r = 0), 25 <= o)) throw Error(i(301));
        (o += 1),
          (Le = Te = null),
          (t.updateQueue = null),
          (Cl.current = Ud),
          (e = n(r, l));
      } while (Nr);
    }
    if (
      ((Cl.current = Tl),
      (t = Te !== null && Te.next !== null),
      (gn = 0),
      (Le = Te = Ee = null),
      (Pl = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function wo() {
    var e = _r !== 0;
    return (_r = 0), e;
  }
  function Rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Le === null ? (Ee.memoizedState = Le = e) : (Le = Le.next = e), Le;
  }
  function pt() {
    if (Te === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Le === null ? Ee.memoizedState : Le.next;
    if (t !== null) (Le = t), (Te = e);
    else {
      if (e === null) throw Error(i(310));
      (Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        Le === null ? (Ee.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
  }
  function Tr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function So(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = Te,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var a = l.next;
        (l.next = o.next), (o.next = a);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var f = (a = null),
        m = null,
        x = o;
      do {
        var T = x.lane;
        if ((gn & T) === T)
          m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action));
        else {
          var R = {
            lane: T,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          m === null ? ((f = m = R), (a = r)) : (m = m.next = R),
            (Ee.lanes |= T),
            (yn |= T);
        }
        x = x.next;
      } while (x !== null && x !== o);
      m === null ? (a = r) : (m.next = f),
        wt(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = m),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Ee.lanes |= o), (yn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ko(e) {
    var t = pt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var a = (l = l.next);
      do (o = e(o, a.action)), (a = a.next);
      while (a !== l);
      wt(o, t.memoizedState) || (Ze = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function ma() {}
  function va(e, t) {
    var n = Ee,
      r = pt(),
      l = t(),
      o = !wt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      xo(ya.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Rr(9, ga.bind(null, n, r, l, t), void 0, null),
        Ie === null)
      )
        throw Error(i(349));
      (gn & 30) !== 0 || ha(n, t, l);
    }
    return l;
  }
  function ha(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ga(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), wa(t) && Sa(e);
  }
  function ya(e, t, n) {
    return n(function () {
      wa(t) && Sa(e);
    });
  }
  function wa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function Sa(e) {
    var t = jt(e, 1);
    t !== null && Ct(t, e, 1, -1);
  }
  function ka(e) {
    var t = Rt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Md.bind(null, Ee, e)),
      [t.memoizedState, e]
    );
  }
  function Rr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function xa() {
    return pt().memoizedState;
  }
  function Nl(e, t, n, r) {
    var l = Rt();
    (Ee.flags |= e),
      (l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function _l(e, t, n, r) {
    var l = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Te !== null) {
      var a = Te.memoizedState;
      if (((o = a.destroy), r !== null && go(r, a.deps))) {
        l.memoizedState = Rr(t, n, o, r);
        return;
      }
    }
    (Ee.flags |= e), (l.memoizedState = Rr(1 | t, n, o, r));
  }
  function Ea(e, t) {
    return Nl(8390656, 8, e, t);
  }
  function xo(e, t) {
    return _l(2048, 8, e, t);
  }
  function Ca(e, t) {
    return _l(4, 2, e, t);
  }
  function Pa(e, t) {
    return _l(4, 4, e, t);
  }
  function Na(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function _a(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), _l(4, 4, Na.bind(null, t, e), n)
    );
  }
  function Eo() {}
  function Ta(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ra(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function La(e, t, n) {
    return (gn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (wt(n, t) ||
          ((n = os()), (Ee.lanes |= n), (yn |= n), (e.baseState = !0)),
        t);
  }
  function jd(e, t) {
    var n = fe;
    (fe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ho.transition;
    ho.transition = {};
    try {
      e(!1), t();
    } finally {
      (fe = n), (ho.transition = r);
    }
  }
  function Ia() {
    return pt().memoizedState;
  }
  function zd(e, t, n) {
    var r = tn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Oa(e))
    )
      Da(t, n);
    else if (((n = aa(e, t, n, r)), n !== null)) {
      var l = Ge();
      Ct(n, e, r, l), Fa(n, t, r);
    }
  }
  function Md(e, t, n) {
    var r = tn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Oa(e)) Da(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var a = t.lastRenderedState,
            f = o(a, n);
          if (((l.hasEagerState = !0), (l.eagerState = f), wt(f, a))) {
            var m = t.interleaved;
            m === null
              ? ((l.next = l), ao(t))
              : ((l.next = m.next), (m.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = aa(e, t, l, r)),
        n !== null && ((l = Ge()), Ct(n, e, r, l), Fa(n, t, r));
    }
  }
  function Oa(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function Da(e, t) {
    Nr = Pl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Fa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cu(e, n);
    }
  }
  var Tl = {
      readContext: dt,
      useCallback: Be,
      useContext: Be,
      useEffect: Be,
      useImperativeHandle: Be,
      useInsertionEffect: Be,
      useLayoutEffect: Be,
      useMemo: Be,
      useReducer: Be,
      useRef: Be,
      useState: Be,
      useDebugValue: Be,
      useDeferredValue: Be,
      useTransition: Be,
      useMutableSource: Be,
      useSyncExternalStore: Be,
      useId: Be,
      unstable_isNewReconciler: !1,
    },
    $d = {
      readContext: dt,
      useCallback: function (e, t) {
        return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: dt,
      useEffect: Ea,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Nl(4194308, 4, Na.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Nl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Nl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Rt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Rt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = zd.bind(null, Ee, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Rt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: ka,
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        return (Rt().memoizedState = e);
      },
      useTransition: function () {
        var e = ka(!1),
          t = e[0];
        return (e = jd.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ee,
          l = Rt();
        if (we) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(i(349));
          (gn & 30) !== 0 || ha(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ea(ya.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Rr(9, ga.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Rt(),
          t = Ie.identifierPrefix;
        if (we) {
          var n = Ft,
            r = Dt;
          (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = _r++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Fd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ad = {
      readContext: dt,
      useCallback: Ta,
      useContext: dt,
      useEffect: xo,
      useImperativeHandle: _a,
      useInsertionEffect: Ca,
      useLayoutEffect: Pa,
      useMemo: Ra,
      useReducer: So,
      useRef: xa,
      useState: function () {
        return So(Tr);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        var t = pt();
        return La(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = So(Tr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: ma,
      useSyncExternalStore: va,
      useId: Ia,
      unstable_isNewReconciler: !1,
    },
    Ud = {
      readContext: dt,
      useCallback: Ta,
      useContext: dt,
      useEffect: xo,
      useImperativeHandle: _a,
      useInsertionEffect: Ca,
      useLayoutEffect: Pa,
      useMemo: Ra,
      useReducer: ko,
      useRef: xa,
      useState: function () {
        return ko(Tr);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e) {
        var t = pt();
        return Te === null ? (t.memoizedState = e) : La(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = ko(Tr)[0],
          t = pt().memoizedState;
        return [e, t];
      },
      useMutableSource: ma,
      useSyncExternalStore: va,
      useId: Ia,
      unstable_isNewReconciler: !1,
    };
  function kt(e, t) {
    if (e && e.defaultProps) {
      (t = M({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Co(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Rl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ge(),
        l = tn(e),
        o = zt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = qt(e, o, l)),
        t !== null && (Ct(t, e, l, r), kl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ge(),
        l = tn(e),
        o = zt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = qt(e, o, l)),
        t !== null && (Ct(t, e, l, r), kl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ge(),
        r = tn(e),
        l = zt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = qt(e, l, r)),
        t !== null && (Ct(t, e, r, n), kl(t, e, r));
    },
  };
  function ja(e, t, n, r, l, o, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, a)
        : t.prototype && t.prototype.isPureReactComponent
          ? !vr(n, r) || !vr(l, o)
          : !0
    );
  }
  function za(e, t, n) {
    var r = !1,
      l = Yt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = dt(o))
        : ((l = Xe(t) ? dn : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? zn(e, l) : Yt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Rl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ma(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
  }
  function Po(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), co(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = dt(o))
      : ((o = Xe(t) ? dn : Ue.current), (l.context = zn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Co(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
        xl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ue(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function No(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function _o(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Bd = typeof WeakMap == "function" ? WeakMap : Map;
  function $a(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        zl || ((zl = !0), (Ho = r)), _o(e, t);
      }),
      n
    );
  }
  function Aa(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          _o(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          _o(e, t),
            typeof r != "function" &&
              (bt === null ? (bt = new Set([this])) : bt.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Ua(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = tp.bind(null, e, t, n)), t.then(e, e));
  }
  function Ba(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ha(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = zt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Hd = se.ReactCurrentOwner,
    Ze = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? sa(t, null, n, r) : Un(t, e.child, n, r);
  }
  function Va(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Hn(t, l),
      (r = yo(e, t, n, r, o, l)),
      (n = wo()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Mt(e, t, l))
        : (we && n && eo(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
    );
  }
  function Wa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Xo(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Qa(e, t, o, r, l))
        : ((e = Hl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var a = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : vr), n(a, r) && e.ref === t.ref)
      )
        return Mt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = rn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Qa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (vr(o, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return (t.lanes = e.lanes), Mt(e, t, l);
    }
    return To(e, t, n, r, l);
  }
  function Ka(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ve(Kn, at),
          (at |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ve(Kn, at),
            (at |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ve(Kn, at),
          (at |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(Kn, at),
        (at |= r);
    return Ke(e, t, l, n), t.child;
  }
  function Ga(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function To(e, t, n, r, l) {
    var o = Xe(n) ? dn : Ue.current;
    return (
      (o = zn(t, o)),
      Hn(t, l),
      (n = yo(e, t, n, r, o, l)),
      (r = wo()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Mt(e, t, l))
        : (we && r && eo(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
    );
  }
  function Ya(e, t, n, r, l) {
    if (Xe(n)) {
      var o = !0;
      pl(t);
    } else o = !1;
    if ((Hn(t, l), t.stateNode === null))
      Il(e, t), za(t, n, r), Po(t, n, r, l), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        f = t.memoizedProps;
      a.props = f;
      var m = a.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = dt(x))
        : ((x = Xe(n) ? dn : Ue.current), (x = zn(t, x)));
      var T = n.getDerivedStateFromProps,
        R =
          typeof T == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      R ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((f !== r || m !== x) && Ma(t, a, r, x)),
        (Zt = !1);
      var _ = t.memoizedState;
      (a.state = _),
        xl(t, r, a, l),
        (m = t.memoizedState),
        f !== r || _ !== m || Ye.current || Zt
          ? (typeof T == "function" && (Co(t, n, T, r), (m = t.memoizedState)),
            (f = Zt || ja(t, n, f, r, _, m, x))
              ? (R ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (a.props = r),
            (a.state = m),
            (a.context = x),
            (r = f))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        ca(e, t),
        (f = t.memoizedProps),
        (x = t.type === t.elementType ? f : kt(t.type, f)),
        (a.props = x),
        (R = t.pendingProps),
        (_ = a.context),
        (m = n.contextType),
        typeof m == "object" && m !== null
          ? (m = dt(m))
          : ((m = Xe(n) ? dn : Ue.current), (m = zn(t, m)));
      var $ = n.getDerivedStateFromProps;
      (T =
        typeof $ == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((f !== R || _ !== m) && Ma(t, a, r, m)),
        (Zt = !1),
        (_ = t.memoizedState),
        (a.state = _),
        xl(t, r, a, l);
      var B = t.memoizedState;
      f !== R || _ !== B || Ye.current || Zt
        ? (typeof $ == "function" && (Co(t, n, $, r), (B = t.memoizedState)),
          (x = Zt || ja(t, n, x, r, _, B, m) || !1)
            ? (T ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, B, m),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, B, m)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = B)),
          (a.props = r),
          (a.state = B),
          (a.context = m),
          (r = x))
        : (typeof a.componentDidUpdate != "function" ||
            (f === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ro(e, t, n, r, o, l);
  }
  function Ro(e, t, n, r, l, o) {
    Ga(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return l && bs(t, n, !1), Mt(e, t, o);
    (r = t.stateNode), (Hd.current = t);
    var f =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Un(t, e.child, null, o)), (t.child = Un(t, null, f, o)))
        : Ke(e, t, f, o),
      (t.memoizedState = r.state),
      l && bs(t, n, !0),
      t.child
    );
  }
  function Xa(e) {
    var t = e.stateNode;
    t.pendingContext
      ? qs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qs(e, t.context, !1),
      fo(e, t.containerInfo);
  }
  function Za(e, t, n, r, l) {
    return An(), lo(l), (t.flags |= 256), Ke(e, t, n, r), t.child;
  }
  var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Io(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qa(e, t, n) {
    var r = t.pendingProps,
      l = xe.current,
      o = !1,
      a = (t.flags & 128) !== 0,
      f;
    if (
      ((f = a) ||
        (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      f
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(xe, l & 1),
      e === null)
    )
      return (
        ro(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((a = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (a = { mode: "hidden", children: a }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = a))
                  : (o = Vl(a, r, 0, null)),
                (e = xn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Io(n)),
                (t.memoizedState = Lo),
                e)
              : Oo(t, a))
      );
    if (((l = e.memoizedState), l !== null && ((f = l.dehydrated), f !== null)))
      return Vd(e, t, a, r, f, l, n);
    if (o) {
      (o = r.fallback), (a = t.mode), (l = e.child), (f = l.sibling);
      var m = { mode: "hidden", children: r.children };
      return (
        (a & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = m),
            (t.deletions = null))
          : ((r = rn(l, m)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        f !== null ? (o = rn(f, o)) : ((o = xn(o, a, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? Io(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (o.memoizedState = a),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Lo),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = rn(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Oo(e, t) {
    return (
      (t = Vl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ll(e, t, n, r) {
    return (
      r !== null && lo(r),
      Un(t, e.child, null, n),
      (e = Oo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vd(e, t, n, r, l, o, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = No(Error(i(422)))), Ll(e, t, a, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Vl({ mode: "visible", children: r.children }, l, 0, null)),
            (o = xn(o, l, a, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Un(t, e.child, null, a),
            (t.child.memoizedState = Io(a)),
            (t.memoizedState = Lo),
            o);
    if ((t.mode & 1) === 0) return Ll(e, t, a, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var f = r.dgst;
      return (
        (r = f), (o = Error(i(419))), (r = No(o, r, void 0)), Ll(e, t, a, r)
      );
    }
    if (((f = (a & e.childLanes) !== 0), Ze || f)) {
      if (((r = Ie), r !== null)) {
        switch (a & -a) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), jt(e, l), Ct(r, e, l, -1));
      }
      return Yo(), (r = No(Error(i(421)))), Ll(e, t, a, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = np.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (st = Kt(l.nextSibling)),
        (it = t),
        (we = !0),
        (St = null),
        e !== null &&
          ((ct[ft++] = Dt),
          (ct[ft++] = Ft),
          (ct[ft++] = pn),
          (Dt = e.id),
          (Ft = e.overflow),
          (pn = t)),
        (t = Oo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ja(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), so(e.return, t, n);
  }
  function Do(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function ba(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ke(e, t, r.children, n), (r = xe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ja(e, n, t);
          else if (e.tag === 19) Ja(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ve(xe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && El(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Do(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && El(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Do(t, !0, n, null, o);
          break;
        case "together":
          Do(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Il(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Mt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (yn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = rn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Wd(e, t, n) {
    switch (t.tag) {
      case 3:
        Xa(t), An();
        break;
      case 5:
        pa(t);
        break;
      case 1:
        Xe(t.type) && pl(t);
        break;
      case 4:
        fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ve(wl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(xe, xe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? qa(e, t, n)
              : (ve(xe, xe.current & 1),
                (e = Mt(e, t, n)),
                e !== null ? e.sibling : null);
        ve(xe, xe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ba(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(xe, xe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ka(e, t, n);
    }
    return Mt(e, t, n);
  }
  var ec, Fo, tc, nc;
  (ec = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Fo = function () {}),
    (tc = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), hn(Tt.current);
        var o = null;
        switch (n) {
          case "input":
            (l = su(e, l)), (r = su(e, r)), (o = []);
            break;
          case "select":
            (l = M({}, l, { value: void 0 })),
              (r = M({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = fu(e, l)), (r = fu(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = cl);
        }
        pu(n, r);
        var a;
        n = null;
        for (x in l)
          if (!r.hasOwnProperty(x) && l.hasOwnProperty(x) && l[x] != null)
            if (x === "style") {
              var f = l[x];
              for (a in f) f.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (d.hasOwnProperty(x)
                  ? o || (o = [])
                  : (o = o || []).push(x, null));
        for (x in r) {
          var m = r[x];
          if (
            ((f = l != null ? l[x] : void 0),
            r.hasOwnProperty(x) && m !== f && (m != null || f != null))
          )
            if (x === "style")
              if (f) {
                for (a in f)
                  !f.hasOwnProperty(a) ||
                    (m && m.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in m)
                  m.hasOwnProperty(a) &&
                    f[a] !== m[a] &&
                    (n || (n = {}), (n[a] = m[a]));
              } else n || (o || (o = []), o.push(x, n)), (n = m);
            else
              x === "dangerouslySetInnerHTML"
                ? ((m = m ? m.__html : void 0),
                  (f = f ? f.__html : void 0),
                  m != null && f !== m && (o = o || []).push(x, m))
                : x === "children"
                  ? (typeof m != "string" && typeof m != "number") ||
                    (o = o || []).push(x, "" + m)
                  : x !== "suppressContentEditableWarning" &&
                    x !== "suppressHydrationWarning" &&
                    (d.hasOwnProperty(x)
                      ? (m != null && x === "onScroll" && he("scroll", e),
                        o || f === m || (o = []))
                      : (o = o || []).push(x, m));
        }
        n && (o = o || []).push("style", n);
        var x = o;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (nc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Lr(e, t) {
    if (!we)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Qd(e, t, n) {
    var r = t.pendingProps;
    switch ((to(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return Xe(t.type) && dl(), He(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Vn(),
          ge(Ye),
          ge(Ue),
          vo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (gl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), St !== null && (Qo(St), (St = null)))),
          Fo(e, t),
          He(t),
          null
        );
      case 5:
        po(t);
        var l = hn(Pr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          tc(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return He(t), null;
          }
          if (((e = hn(Tt.current)), gl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[_t] = t), (r[Sr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                he("cancel", r), he("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < gr.length; l++) he(gr[l], r);
                break;
              case "source":
                he("error", r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", r), he("load", r);
                break;
              case "details":
                he("toggle", r);
                break;
              case "input":
                zi(r, o), he("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  he("invalid", r);
                break;
              case "textarea":
                Ai(r, o), he("invalid", r);
            }
            pu(n, o), (l = null);
            for (var a in o)
              if (o.hasOwnProperty(a)) {
                var f = o[a];
                a === "children"
                  ? typeof f == "string"
                    ? r.textContent !== f &&
                      (o.suppressHydrationWarning !== !0 &&
                        al(r.textContent, f, e),
                      (l = ["children", f]))
                    : typeof f == "number" &&
                      r.textContent !== "" + f &&
                      (o.suppressHydrationWarning !== !0 &&
                        al(r.textContent, f, e),
                      (l = ["children", "" + f]))
                  : d.hasOwnProperty(a) &&
                    f != null &&
                    a === "onScroll" &&
                    he("scroll", r);
              }
            switch (n) {
              case "input":
                Ur(r), $i(r, o, !0);
                break;
              case "textarea":
                Ur(r), Bi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = cl);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Hi(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = a.createElement(n, { is: r.is }))
                    : ((e = a.createElement(n)),
                      n === "select" &&
                        ((a = e),
                        r.multiple
                          ? (a.multiple = !0)
                          : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[_t] = t),
              (e[Sr] = r),
              ec(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = mu(n, r)), n)) {
                case "dialog":
                  he("cancel", e), he("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  he("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < gr.length; l++) he(gr[l], e);
                  l = r;
                  break;
                case "source":
                  he("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  he("error", e), he("load", e), (l = r);
                  break;
                case "details":
                  he("toggle", e), (l = r);
                  break;
                case "input":
                  zi(e, r), (l = su(e, r)), he("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = M({}, r, { value: void 0 })),
                    he("invalid", e);
                  break;
                case "textarea":
                  Ai(e, r), (l = fu(e, r)), he("invalid", e);
                  break;
                default:
                  l = r;
              }
              pu(n, l), (f = l);
              for (o in f)
                if (f.hasOwnProperty(o)) {
                  var m = f[o];
                  o === "style"
                    ? Qi(e, m)
                    : o === "dangerouslySetInnerHTML"
                      ? ((m = m ? m.__html : void 0), m != null && Vi(e, m))
                      : o === "children"
                        ? typeof m == "string"
                          ? (n !== "textarea" || m !== "") && Jn(e, m)
                          : typeof m == "number" && Jn(e, "" + m)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (d.hasOwnProperty(o)
                            ? m != null && o === "onScroll" && he("scroll", e)
                            : m != null && J(e, o, m, a));
                }
              switch (n) {
                case "input":
                  Ur(e), $i(e, r, !1);
                  break;
                case "textarea":
                  Ur(e), Bi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Cn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        Cn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = cl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return He(t), null;
      case 6:
        if (e && t.stateNode != null) nc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (((n = hn(Pr.current)), hn(Tt.current), gl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[_t] = t),
              (o = r.nodeValue !== n) && ((e = it), e !== null))
            )
              switch (e.tag) {
                case 3:
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    al(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[_t] = t),
              (t.stateNode = r);
        }
        return He(t), null;
      case 13:
        if (
          (ge(xe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && st !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ua(), An(), (t.flags |= 98560), (o = !1);
          else if (((o = gl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(i(317));
              o[_t] = t;
            } else
              An(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            He(t), (o = !1);
          } else St !== null && (Qo(St), (St = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (xe.current & 1) !== 0
                  ? Re === 0 && (Re = 3)
                  : Yo())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return (
          Vn(),
          Fo(e, t),
          e === null && yr(t.stateNode.containerInfo),
          He(t),
          null
        );
      case 10:
        return io(t.type._context), He(t), null;
      case 17:
        return Xe(t.type) && dl(), He(t), null;
      case 19:
        if ((ge(xe), (o = t.memoizedState), o === null)) return He(t), null;
        if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
          if (r) Lr(o, !1);
          else {
            if (Re !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = El(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      Lr(o, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (a = o.alternate),
                      a === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = a.childLanes),
                          (o.lanes = a.lanes),
                          (o.child = a.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = a.memoizedProps),
                          (o.memoizedState = a.memoizedState),
                          (o.updateQueue = a.updateQueue),
                          (o.type = a.type),
                          (e = a.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ve(xe, (xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Pe() > Gn &&
              ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = El(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Lr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !a.alternate &&
                  !we)
              )
                return He(t), null;
            } else
              2 * Pe() - o.renderingStartTime > Gn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = o.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (o.last = a));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Pe()),
            (t.sibling = null),
            (n = xe.current),
            ve(xe, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          Go(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Kd(e, t) {
    switch ((to(t), t.tag)) {
      case 1:
        return (
          Xe(t.type) && dl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vn(),
          ge(Ye),
          ge(Ue),
          vo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return po(t), null;
      case 13:
        if (
          (ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          An();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ge(xe), null;
      case 4:
        return Vn(), null;
      case 10:
        return io(t.type._context), null;
      case 22:
      case 23:
        return Go(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ol = !1,
    Ve = !1,
    Gd = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function Qn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function jo(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var rc = !1;
  function Yd(e, t) {
    if (((Ku = Jr), (e = js()), $u(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              f = -1,
              m = -1,
              x = 0,
              T = 0,
              R = e,
              _ = null;
            t: for (;;) {
              for (
                var $;
                R !== n || (l !== 0 && R.nodeType !== 3) || (f = a + l),
                  R !== o || (r !== 0 && R.nodeType !== 3) || (m = a + r),
                  R.nodeType === 3 && (a += R.nodeValue.length),
                  ($ = R.firstChild) !== null;

              )
                (_ = R), (R = $);
              for (;;) {
                if (R === e) break t;
                if (
                  (_ === n && ++x === l && (f = a),
                  _ === o && ++T === r && (m = a),
                  ($ = R.nextSibling) !== null)
                )
                  break;
                (R = _), (_ = R.parentNode);
              }
              R = $;
            }
            n = f === -1 || m === -1 ? null : { start: f, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Gu = { focusedElem: e, selectionRange: n }, Jr = !1, U = t;
      U !== null;

    )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (U = e);
      else
        for (; U !== null; ) {
          t = U;
          try {
            var B = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (B !== null) {
                    var V = B.memoizedProps,
                      Ne = B.memoizedState,
                      w = t.stateNode,
                      v = w.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? V : kt(t.type, V),
                        Ne,
                      );
                    w.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = "")
                    : k.nodeType === 9 &&
                      k.documentElement &&
                      k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (I) {
            Ce(t, t.return, I);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (U = e);
            break;
          }
          U = t.return;
        }
    return (B = rc), (rc = !1), B;
  }
  function Ir(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && jo(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Dl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function zo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function lc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), lc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[_t],
          delete t[Sr],
          delete t[qu],
          delete t[Ld],
          delete t[Id])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || uc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = cl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Mo(e, t, n), e = e.sibling; e !== null; )
        Mo(e, t, n), (e = e.sibling);
  }
  function $o(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for ($o(e, t, n), e = e.sibling; e !== null; )
        $o(e, t, n), (e = e.sibling);
  }
  var ze = null,
    xt = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; ) ic(e, t, n), (n = n.sibling);
  }
  function ic(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(Kr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || Qn(n, t);
      case 6:
        var r = ze,
          l = xt;
        (ze = null),
          Jt(e, t, n),
          (ze = r),
          (xt = l),
          ze !== null &&
            (xt
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (xt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? Zu(e.parentNode, n)
                : e.nodeType === 1 && Zu(e, n),
              ar(e))
            : Zu(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (l = xt),
          (ze = n.stateNode.containerInfo),
          (xt = !0),
          Jt(e, t, n),
          (ze = r),
          (xt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ve &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              a = o.destroy;
            (o = o.tag),
              a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && jo(n, t, a),
              (l = l.next);
          } while (l !== r);
        }
        Jt(e, t, n);
        break;
      case 1:
        if (
          !Ve &&
          (Qn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (f) {
            Ce(n, t, f);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ve = (r = Ve) || n.memoizedState !== null), Jt(e, t, n), (Ve = r))
          : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function sc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Gd()),
        t.forEach(function (r) {
          var l = rp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function Et(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            a = t,
            f = a;
          e: for (; f !== null; ) {
            switch (f.tag) {
              case 5:
                (ze = f.stateNode), (xt = !1);
                break e;
              case 3:
                (ze = f.stateNode.containerInfo), (xt = !0);
                break e;
              case 4:
                (ze = f.stateNode.containerInfo), (xt = !0);
                break e;
            }
            f = f.return;
          }
          if (ze === null) throw Error(i(160));
          ic(o, a, l), (ze = null), (xt = !1);
          var m = l.alternate;
          m !== null && (m.return = null), (l.return = null);
        } catch (x) {
          Ce(l, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) ac(t, e), (t = t.sibling);
  }
  function ac(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Et(t, e), Lt(e), r & 4)) {
          try {
            Ir(3, e, e.return), Dl(3, e);
          } catch (V) {
            Ce(e, e.return, V);
          }
          try {
            Ir(5, e, e.return);
          } catch (V) {
            Ce(e, e.return, V);
          }
        }
        break;
      case 1:
        Et(t, e), Lt(e), r & 512 && n !== null && Qn(n, n.return);
        break;
      case 5:
        if (
          (Et(t, e),
          Lt(e),
          r & 512 && n !== null && Qn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Jn(l, "");
          } catch (V) {
            Ce(e, e.return, V);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            a = n !== null ? n.memoizedProps : o,
            f = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              f === "input" && o.type === "radio" && o.name != null && Mi(l, o),
                mu(f, a);
              var x = mu(f, o);
              for (a = 0; a < m.length; a += 2) {
                var T = m[a],
                  R = m[a + 1];
                T === "style"
                  ? Qi(l, R)
                  : T === "dangerouslySetInnerHTML"
                    ? Vi(l, R)
                    : T === "children"
                      ? Jn(l, R)
                      : J(l, T, R, x);
              }
              switch (f) {
                case "input":
                  au(l, o);
                  break;
                case "textarea":
                  Ui(l, o);
                  break;
                case "select":
                  var _ = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var $ = o.value;
                  $ != null
                    ? Cn(l, !!o.multiple, $, !1)
                    : _ !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Cn(l, !!o.multiple, o.defaultValue, !0)
                        : Cn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[Sr] = o;
            } catch (V) {
              Ce(e, e.return, V);
            }
        }
        break;
      case 6:
        if ((Et(t, e), Lt(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (V) {
            Ce(e, e.return, V);
          }
        }
        break;
      case 3:
        if (
          (Et(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ar(t.containerInfo);
          } catch (V) {
            Ce(e, e.return, V);
          }
        break;
      case 4:
        Et(t, e), Lt(e);
        break;
      case 13:
        Et(t, e),
          Lt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Bo = Pe())),
          r & 4 && sc(e);
        break;
      case 22:
        if (
          ((T = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ve = (x = Ve) || T), Et(t, e), (Ve = x)) : Et(t, e),
          Lt(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !T && (e.mode & 1) !== 0)
          )
            for (U = e, T = e.child; T !== null; ) {
              for (R = U = T; U !== null; ) {
                switch (((_ = U), ($ = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ir(4, _, _.return);
                    break;
                  case 1:
                    Qn(_, _.return);
                    var B = _.stateNode;
                    if (typeof B.componentWillUnmount == "function") {
                      (r = _), (n = _.return);
                      try {
                        (t = r),
                          (B.props = t.memoizedProps),
                          (B.state = t.memoizedState),
                          B.componentWillUnmount();
                      } catch (V) {
                        Ce(r, n, V);
                      }
                    }
                    break;
                  case 5:
                    Qn(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      dc(R);
                      continue;
                    }
                }
                $ !== null ? (($.return = _), (U = $)) : dc(R);
              }
              T = T.sibling;
            }
          e: for (T = null, R = e; ; ) {
            if (R.tag === 5) {
              if (T === null) {
                T = R;
                try {
                  (l = R.stateNode),
                    x
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((f = R.stateNode),
                        (m = R.memoizedProps.style),
                        (a =
                          m != null && m.hasOwnProperty("display")
                            ? m.display
                            : null),
                        (f.style.display = Wi("display", a)));
                } catch (V) {
                  Ce(e, e.return, V);
                }
              }
            } else if (R.tag === 6) {
              if (T === null)
                try {
                  R.stateNode.nodeValue = x ? "" : R.memoizedProps;
                } catch (V) {
                  Ce(e, e.return, V);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) ||
                R.memoizedState === null ||
                R === e) &&
              R.child !== null
            ) {
              (R.child.return = R), (R = R.child);
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              T === R && (T = null), (R = R.return);
            }
            T === R && (T = null),
              (R.sibling.return = R.return),
              (R = R.sibling);
          }
        }
        break;
      case 19:
        Et(t, e), Lt(e), r & 4 && sc(e);
        break;
      case 21:
        break;
      default:
        Et(t, e), Lt(e);
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (uc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Jn(l, ""), (r.flags &= -33));
            var o = oc(e);
            $o(e, o, l);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              f = oc(e);
            Mo(e, f, a);
            break;
          default:
            throw Error(i(161));
        }
      } catch (m) {
        Ce(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xd(e, t, n) {
    (U = e), cc(e);
  }
  function cc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U,
        o = l.child;
      if (l.tag === 22 && r) {
        var a = l.memoizedState !== null || Ol;
        if (!a) {
          var f = l.alternate,
            m = (f !== null && f.memoizedState !== null) || Ve;
          f = Ol;
          var x = Ve;
          if (((Ol = a), (Ve = m) && !x))
            for (U = l; U !== null; )
              (a = U),
                (m = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? pc(l)
                  : m !== null
                    ? ((m.return = a), (U = m))
                    : pc(l);
          for (; o !== null; ) (U = o), cc(o), (o = o.sibling);
          (U = l), (Ol = f), (Ve = x);
        }
        fc(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (U = o))
          : fc(e);
    }
  }
  function fc(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || Dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : kt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && da(t, o, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  da(t, a, n);
                }
                break;
              case 5:
                var f = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = f;
                  var m = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      m.autoFocus && n.focus();
                      break;
                    case "img":
                      m.src && (n.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var T = x.memoizedState;
                    if (T !== null) {
                      var R = T.dehydrated;
                      R !== null && ar(R);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          Ve || (t.flags & 512 && zo(t));
        } catch (_) {
          Ce(t, t.return, _);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function dc(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function pc(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Dl(4, t);
            } catch (m) {
              Ce(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                Ce(t, l, m);
              }
            }
            var o = t.return;
            try {
              zo(t);
            } catch (m) {
              Ce(t, o, m);
            }
            break;
          case 5:
            var a = t.return;
            try {
              zo(t);
            } catch (m) {
              Ce(t, a, m);
            }
        }
      } catch (m) {
        Ce(t, t.return, m);
      }
      if (t === e) {
        U = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        (f.return = t.return), (U = f);
        break;
      }
      U = t.return;
    }
  }
  var Zd = Math.ceil,
    Fl = se.ReactCurrentDispatcher,
    Ao = se.ReactCurrentOwner,
    mt = se.ReactCurrentBatchConfig,
    ne = 0,
    Ie = null,
    _e = null,
    Me = 0,
    at = 0,
    Kn = Gt(0),
    Re = 0,
    Or = null,
    yn = 0,
    jl = 0,
    Uo = 0,
    Dr = null,
    qe = null,
    Bo = 0,
    Gn = 1 / 0,
    $t = null,
    zl = !1,
    Ho = null,
    bt = null,
    Ml = !1,
    en = null,
    $l = 0,
    Fr = 0,
    Vo = null,
    Al = -1,
    Ul = 0;
  function Ge() {
    return (ne & 6) !== 0 ? Pe() : Al !== -1 ? Al : (Al = Pe());
  }
  function tn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ne & 2) !== 0 && Me !== 0
        ? Me & -Me
        : Dd.transition !== null
          ? (Ul === 0 && (Ul = os()), Ul)
          : ((e = fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : vs(e.type))),
            e);
  }
  function Ct(e, t, n, r) {
    if (50 < Fr) throw ((Fr = 0), (Vo = null), Error(i(185)));
    lr(e, n, r),
      ((ne & 2) === 0 || e !== Ie) &&
        (e === Ie && ((ne & 2) === 0 && (jl |= n), Re === 4 && nn(e, Me)),
        Je(e, r),
        n === 1 &&
          ne === 0 &&
          (t.mode & 1) === 0 &&
          ((Gn = Pe() + 500), ml && Xt()));
  }
  function Je(e, t) {
    var n = e.callbackNode;
    Df(e, t);
    var r = Xr(e, e === Ie ? Me : 0);
    if (r === 0)
      n !== null && rs(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && rs(n), t === 1))
        e.tag === 0 ? Od(vc.bind(null, e)) : ea(vc.bind(null, e)),
          Td(function () {
            (ne & 6) === 0 && Xt();
          }),
          (n = null);
      else {
        switch (is(r)) {
          case 1:
            n = ku;
            break;
          case 4:
            n = ls;
            break;
          case 16:
            n = Qr;
            break;
          case 536870912:
            n = us;
            break;
          default:
            n = Qr;
        }
        n = Ec(n, mc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function mc(e, t) {
    if (((Al = -1), (Ul = 0), (ne & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (Yn() && e.callbackNode !== n) return null;
    var r = Xr(e, e === Ie ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Bl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var o = gc();
      (Ie !== e || Me !== t) && (($t = null), (Gn = Pe() + 500), Sn(e, t));
      do
        try {
          bd();
          break;
        } catch (f) {
          hc(e, f);
        }
      while (!0);
      oo(),
        (Fl.current = o),
        (ne = l),
        _e !== null ? (t = 0) : ((Ie = null), (Me = 0), (t = Re));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = xu(e)), l !== 0 && ((r = l), (t = Wo(e, l)))),
        t === 1)
      )
        throw ((n = Or), Sn(e, 0), nn(e, r), Je(e, Pe()), n);
      if (t === 6) nn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !qd(l) &&
            ((t = Bl(e, r)),
            t === 2 && ((o = xu(e)), o !== 0 && ((r = o), (t = Wo(e, o)))),
            t === 1))
        )
          throw ((n = Or), Sn(e, 0), nn(e, r), Je(e, Pe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            kn(e, qe, $t);
            break;
          case 3:
            if (
              (nn(e, r),
              (r & 130023424) === r && ((t = Bo + 500 - Pe()), 10 < t))
            ) {
              if (Xr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ge(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Xu(kn.bind(null, e, qe, $t), t);
              break;
            }
            kn(e, qe, $t);
            break;
          case 4:
            if ((nn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var a = 31 - yt(r);
              (o = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Pe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Zd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Xu(kn.bind(null, e, qe, $t), r);
              break;
            }
            kn(e, qe, $t);
            break;
          case 5:
            kn(e, qe, $t);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Je(e, Pe()), e.callbackNode === n ? mc.bind(null, e) : null;
  }
  function Wo(e, t) {
    var n = Dr;
    return (
      e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
      (e = Bl(e, t)),
      e !== 2 && ((t = qe), (qe = n), t !== null && Qo(t)),
      e
    );
  }
  function Qo(e) {
    qe === null ? (qe = e) : qe.push.apply(qe, e);
  }
  function qd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!wt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function nn(e, t) {
    for (
      t &= ~Uo,
        t &= ~jl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - yt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function vc(e) {
    if ((ne & 6) !== 0) throw Error(i(327));
    Yn();
    var t = Xr(e, 0);
    if ((t & 1) === 0) return Je(e, Pe()), null;
    var n = Bl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = xu(e);
      r !== 0 && ((t = r), (n = Wo(e, r)));
    }
    if (n === 1) throw ((n = Or), Sn(e, 0), nn(e, t), Je(e, Pe()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kn(e, qe, $t),
      Je(e, Pe()),
      null
    );
  }
  function Ko(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((Gn = Pe() + 500), ml && Xt());
    }
  }
  function wn(e) {
    en !== null && en.tag === 0 && (ne & 6) === 0 && Yn();
    var t = ne;
    ne |= 1;
    var n = mt.transition,
      r = fe;
    try {
      if (((mt.transition = null), (fe = 1), e)) return e();
    } finally {
      (fe = r), (mt.transition = n), (ne = t), (ne & 6) === 0 && Xt();
    }
  }
  function Go() {
    (at = Kn.current), ge(Kn);
  }
  function Sn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), _d(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((to(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && dl();
            break;
          case 3:
            Vn(), ge(Ye), ge(Ue), vo();
            break;
          case 5:
            po(r);
            break;
          case 4:
            Vn();
            break;
          case 13:
            ge(xe);
            break;
          case 19:
            ge(xe);
            break;
          case 10:
            io(r.type._context);
            break;
          case 22:
          case 23:
            Go();
        }
        n = n.return;
      }
    if (
      ((Ie = e),
      (_e = e = rn(e.current, null)),
      (Me = at = t),
      (Re = 0),
      (Or = null),
      (Uo = jl = yn = 0),
      (qe = Dr = null),
      vn !== null)
    ) {
      for (t = 0; t < vn.length; t++)
        if (((n = vn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var a = o.next;
            (o.next = l), (r.next = a);
          }
          n.pending = r;
        }
      vn = null;
    }
    return e;
  }
  function hc(e, t) {
    do {
      var n = _e;
      try {
        if ((oo(), (Cl.current = Tl), Pl)) {
          for (var r = Ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Pl = !1;
        }
        if (
          ((gn = 0),
          (Le = Te = Ee = null),
          (Nr = !1),
          (_r = 0),
          (Ao.current = null),
          n === null || n.return === null)
        ) {
          (Re = 1), (Or = t), (_e = null);
          break;
        }
        e: {
          var o = e,
            a = n.return,
            f = n,
            m = t;
          if (
            ((t = Me),
            (f.flags |= 32768),
            m !== null && typeof m == "object" && typeof m.then == "function")
          ) {
            var x = m,
              T = f,
              R = T.tag;
            if ((T.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var _ = T.alternate;
              _
                ? ((T.updateQueue = _.updateQueue),
                  (T.memoizedState = _.memoizedState),
                  (T.lanes = _.lanes))
                : ((T.updateQueue = null), (T.memoizedState = null));
            }
            var $ = Ba(a);
            if ($ !== null) {
              ($.flags &= -257),
                Ha($, a, f, o, t),
                $.mode & 1 && Ua(o, x, t),
                (t = $),
                (m = x);
              var B = t.updateQueue;
              if (B === null) {
                var V = new Set();
                V.add(m), (t.updateQueue = V);
              } else B.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ua(o, x, t), Yo();
                break e;
              }
              m = Error(i(426));
            }
          } else if (we && f.mode & 1) {
            var Ne = Ba(a);
            if (Ne !== null) {
              (Ne.flags & 65536) === 0 && (Ne.flags |= 256),
                Ha(Ne, a, f, o, t),
                lo(Wn(m, f));
              break e;
            }
          }
          (o = m = Wn(m, f)),
            Re !== 4 && (Re = 2),
            Dr === null ? (Dr = [o]) : Dr.push(o),
            (o = a);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = $a(o, m, t);
                fa(o, w);
                break e;
              case 1:
                f = m;
                var v = o.type,
                  k = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof v.getDerivedStateFromError == "function" ||
                    (k !== null &&
                      typeof k.componentDidCatch == "function" &&
                      (bt === null || !bt.has(k))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var I = Aa(o, f, t);
                  fa(o, I);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        wc(n);
      } catch (W) {
        (t = W), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gc() {
    var e = Fl.current;
    return (Fl.current = Tl), e === null ? Tl : e;
  }
  function Yo() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      Ie === null ||
        ((yn & 268435455) === 0 && (jl & 268435455) === 0) ||
        nn(Ie, Me);
  }
  function Bl(e, t) {
    var n = ne;
    ne |= 2;
    var r = gc();
    (Ie !== e || Me !== t) && (($t = null), Sn(e, t));
    do
      try {
        Jd();
        break;
      } catch (l) {
        hc(e, l);
      }
    while (!0);
    if ((oo(), (ne = n), (Fl.current = r), _e !== null)) throw Error(i(261));
    return (Ie = null), (Me = 0), Re;
  }
  function Jd() {
    for (; _e !== null; ) yc(_e);
  }
  function bd() {
    for (; _e !== null && !Cf(); ) yc(_e);
  }
  function yc(e) {
    var t = xc(e.alternate, e, at);
    (e.memoizedProps = e.pendingProps),
      t === null ? wc(e) : (_e = t),
      (Ao.current = null);
  }
  function wc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Qd(n, t, at)), n !== null)) {
          _e = n;
          return;
        }
      } else {
        if (((n = Kd(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Re = 6), (_e = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function kn(e, t, n) {
    var r = fe,
      l = mt.transition;
    try {
      (mt.transition = null), (fe = 1), ep(e, t, n, r);
    } finally {
      (mt.transition = l), (fe = r);
    }
    return null;
  }
  function ep(e, t, n, r) {
    do Yn();
    while (en !== null);
    if ((ne & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Ff(e, o),
      e === Ie && ((_e = Ie = null), (Me = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ml ||
        ((Ml = !0),
        Ec(Qr, function () {
          return Yn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = mt.transition), (mt.transition = null);
      var a = fe;
      fe = 1;
      var f = ne;
      (ne |= 4),
        (Ao.current = null),
        Yd(e, n),
        ac(n, e),
        Sd(Gu),
        (Jr = !!Ku),
        (Gu = Ku = null),
        (e.current = n),
        Xd(n),
        Pf(),
        (ne = f),
        (fe = a),
        (mt.transition = o);
    } else e.current = n;
    if (
      (Ml && ((Ml = !1), (en = e), ($l = l)),
      (o = e.pendingLanes),
      o === 0 && (bt = null),
      Tf(n.stateNode),
      Je(e, Pe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (zl) throw ((zl = !1), (e = Ho), (Ho = null), e);
    return (
      ($l & 1) !== 0 && e.tag !== 0 && Yn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Vo ? Fr++ : ((Fr = 0), (Vo = e))) : (Fr = 0),
      Xt(),
      null
    );
  }
  function Yn() {
    if (en !== null) {
      var e = is($l),
        t = mt.transition,
        n = fe;
      try {
        if (((mt.transition = null), (fe = 16 > e ? 16 : e), en === null))
          var r = !1;
        else {
          if (((e = en), (en = null), ($l = 0), (ne & 6) !== 0))
            throw Error(i(331));
          var l = ne;
          for (ne |= 4, U = e.current; U !== null; ) {
            var o = U,
              a = o.child;
            if ((U.flags & 16) !== 0) {
              var f = o.deletions;
              if (f !== null) {
                for (var m = 0; m < f.length; m++) {
                  var x = f[m];
                  for (U = x; U !== null; ) {
                    var T = U;
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ir(8, T, o);
                    }
                    var R = T.child;
                    if (R !== null) (R.return = T), (U = R);
                    else
                      for (; U !== null; ) {
                        T = U;
                        var _ = T.sibling,
                          $ = T.return;
                        if ((lc(T), T === x)) {
                          U = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = $), (U = _);
                          break;
                        }
                        U = $;
                      }
                  }
                }
                var B = o.alternate;
                if (B !== null) {
                  var V = B.child;
                  if (V !== null) {
                    B.child = null;
                    do {
                      var Ne = V.sibling;
                      (V.sibling = null), (V = Ne);
                    } while (V !== null);
                  }
                }
                U = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && a !== null)
              (a.return = o), (U = a);
            else
              e: for (; U !== null; ) {
                if (((o = U), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(9, o, o.return);
                  }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (U = w);
                  break e;
                }
                U = o.return;
              }
          }
          var v = e.current;
          for (U = v; U !== null; ) {
            a = U;
            var k = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && k !== null)
              (k.return = a), (U = k);
            else
              e: for (a = v; U !== null; ) {
                if (((f = U), (f.flags & 2048) !== 0))
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(9, f);
                    }
                  } catch (W) {
                    Ce(f, f.return, W);
                  }
                if (f === a) {
                  U = null;
                  break e;
                }
                var I = f.sibling;
                if (I !== null) {
                  (I.return = f.return), (U = I);
                  break e;
                }
                U = f.return;
              }
          }
          if (
            ((ne = l),
            Xt(),
            Nt && typeof Nt.onPostCommitFiberRoot == "function")
          )
            try {
              Nt.onPostCommitFiberRoot(Kr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (fe = n), (mt.transition = t);
      }
    }
    return !1;
  }
  function Sc(e, t, n) {
    (t = Wn(n, t)),
      (t = $a(e, t, 1)),
      (e = qt(e, t, 1)),
      (t = Ge()),
      e !== null && (lr(e, 1, t), Je(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Sc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (bt === null || !bt.has(r)))
          ) {
            (e = Wn(n, e)),
              (e = Aa(t, e, 1)),
              (t = qt(t, e, 1)),
              (e = Ge()),
              t !== null && (lr(t, 1, e), Je(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function tp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ge()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ie === e &&
        (Me & n) === n &&
        (Re === 4 || (Re === 3 && (Me & 130023424) === Me && 500 > Pe() - Bo)
          ? Sn(e, 0)
          : (Uo |= n)),
      Je(e, t);
  }
  function kc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Yr), (Yr <<= 1), (Yr & 130023424) === 0 && (Yr = 4194304)));
    var n = Ge();
    (e = jt(e, t)), e !== null && (lr(e, t, n), Je(e, n));
  }
  function np(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), kc(e, n);
  }
  function rp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(t), kc(e, n);
  }
  var xc;
  xc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ye.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Ze = !1), Wd(e, t, n);
        Ze = (e.flags & 131072) !== 0;
      }
    else (Ze = !1), we && (t.flags & 1048576) !== 0 && ta(t, hl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Il(e, t), (e = t.pendingProps);
        var l = zn(t, Ue.current);
        Hn(t, n), (l = yo(null, t, r, e, l, n));
        var o = wo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Xe(r) ? ((o = !0), pl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              co(t),
              (l.updater = Rl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Po(t, r, e, n),
              (t = Ro(null, t, r, !0, o, n)))
            : ((t.tag = 0), we && o && eo(t), Ke(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Il(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = up(r)),
            (e = kt(r, e)),
            l)
          ) {
            case 0:
              t = To(null, t, r, e, n);
              break e;
            case 1:
              t = Ya(null, t, r, e, n);
              break e;
            case 11:
              t = Va(null, t, r, e, n);
              break e;
            case 14:
              t = Wa(null, t, r, kt(r.type, e), n);
              break e;
          }
          throw Error(i(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : kt(r, l)),
          To(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : kt(r, l)),
          Ya(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Xa(t), e === null)) throw Error(i(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ca(e, t),
            xl(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Wn(Error(i(423)), t)), (t = Za(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Wn(Error(i(424)), t)), (t = Za(e, t, r, n, l));
              break e;
            } else
              for (
                st = Kt(t.stateNode.containerInfo.firstChild),
                  it = t,
                  we = !0,
                  St = null,
                  n = sa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((An(), r === l)) {
              t = Mt(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          pa(t),
          e === null && ro(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (a = l.children),
          Yu(r, l) ? (a = null) : o !== null && Yu(r, o) && (t.flags |= 32),
          Ga(e, t),
          Ke(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && ro(t), null;
      case 13:
        return qa(e, t, n);
      case 4:
        return (
          fo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Un(t, null, r, n)) : Ke(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : kt(r, l)),
          Va(e, t, r, l, n)
        );
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (a = l.value),
            ve(wl, r._currentValue),
            (r._currentValue = a),
            o !== null)
          )
            if (wt(o.value, a)) {
              if (o.children === l.children && !Ye.current) {
                t = Mt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var f = o.dependencies;
                if (f !== null) {
                  a = o.child;
                  for (var m = f.firstContext; m !== null; ) {
                    if (m.context === r) {
                      if (o.tag === 1) {
                        (m = zt(-1, n & -n)), (m.tag = 2);
                        var x = o.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var T = x.pending;
                          T === null
                            ? (m.next = m)
                            : ((m.next = T.next), (T.next = m)),
                            (x.pending = m);
                        }
                      }
                      (o.lanes |= n),
                        (m = o.alternate),
                        m !== null && (m.lanes |= n),
                        so(o.return, n, t),
                        (f.lanes |= n);
                      break;
                    }
                    m = m.next;
                  }
                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((a = o.return), a === null)) throw Error(i(341));
                  (a.lanes |= n),
                    (f = a.alternate),
                    f !== null && (f.lanes |= n),
                    so(a, n, t),
                    (a = o.sibling);
                } else a = o.child;
                if (a !== null) a.return = o;
                else
                  for (a = o; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((o = a.sibling), o !== null)) {
                      (o.return = a.return), (a = o);
                      break;
                    }
                    a = a.return;
                  }
                o = a;
              }
          Ke(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Hn(t, n),
          (l = dt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ke(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = kt(r, t.pendingProps)),
          (l = kt(r.type, l)),
          Wa(e, t, r, l, n)
        );
      case 15:
        return Qa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : kt(r, l)),
          Il(e, t),
          (t.tag = 1),
          Xe(r) ? ((e = !0), pl(t)) : (e = !1),
          Hn(t, n),
          za(t, r, l),
          Po(t, r, l, n),
          Ro(null, t, r, !0, e, n)
        );
      case 19:
        return ba(e, t, n);
      case 22:
        return Ka(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Ec(e, t) {
    return ns(e, t);
  }
  function lp(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function vt(e, t, n, r) {
    return new lp(e, t, n, r);
  }
  function Xo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function up(e) {
    if (typeof e == "function") return Xo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Qe)) return 11;
      if (e === lt) return 14;
    }
    return 2;
  }
  function rn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = vt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Hl(e, t, n, r, l, o) {
    var a = 2;
    if (((r = e), typeof e == "function")) Xo(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case ke:
          return xn(n.children, l, o, t);
        case De:
          (a = 8), (l |= 8);
          break;
        case pe:
          return (
            (e = vt(12, n, t, l | 2)), (e.elementType = pe), (e.lanes = o), e
          );
        case je:
          return (e = vt(13, n, t, l)), (e.elementType = je), (e.lanes = o), e;
        case rt:
          return (e = vt(19, n, t, l)), (e.elementType = rt), (e.lanes = o), e;
        case de:
          return Vl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Fe:
                a = 10;
                break e;
              case gt:
                a = 9;
                break e;
              case Qe:
                a = 11;
                break e;
              case lt:
                a = 14;
                break e;
              case Ae:
                (a = 16), (r = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = vt(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function xn(e, t, n, r) {
    return (e = vt(7, e, r, t)), (e.lanes = n), e;
  }
  function Vl(e, t, n, r) {
    return (
      (e = vt(22, e, r, t)),
      (e.elementType = de),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Zo(e, t, n) {
    return (e = vt(6, e, null, t)), (e.lanes = n), e;
  }
  function qo(e, t, n) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function op(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Eu(0)),
      (this.expirationTimes = Eu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Eu(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Jo(e, t, n, r, l, o, a, f, m) {
    return (
      (e = new op(e, t, n, f, m)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = vt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      co(o),
      e
    );
  }
  function ip(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ae,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Cc(e) {
    if (!e) return Yt;
    e = e._reactInternals;
    e: {
      if (cn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n)) return Js(e, n, t);
    }
    return t;
  }
  function Pc(e, t, n, r, l, o, a, f, m) {
    return (
      (e = Jo(n, r, !0, e, l, o, a, f, m)),
      (e.context = Cc(null)),
      (n = e.current),
      (r = Ge()),
      (l = tn(n)),
      (o = zt(r, l)),
      (o.callback = t ?? null),
      qt(n, o, l),
      (e.current.lanes = l),
      lr(e, l, r),
      Je(e, r),
      e
    );
  }
  function Wl(e, t, n, r) {
    var l = t.current,
      o = Ge(),
      a = tn(l);
    return (
      (n = Cc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(o, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = qt(l, t, a)),
      e !== null && (Ct(e, l, a, o), kl(e, l, a)),
      a
    );
  }
  function Ql(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Nc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function bo(e, t) {
    Nc(e, t), (e = e.alternate) && Nc(e, t);
  }
  function sp() {
    return null;
  }
  var _c =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ei(e) {
    this._internalRoot = e;
  }
  (Kl.prototype.render = ei.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Wl(e, t, null, null);
    }),
    (Kl.prototype.unmount = ei.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          wn(function () {
            Wl(null, e, null, null);
          }),
            (t[It] = null);
        }
      });
  function Kl(e) {
    this._internalRoot = e;
  }
  Kl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = cs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
      Vt.splice(n, 0, e), n === 0 && ps(e);
    }
  };
  function ti(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Gl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Tc() {}
  function ap(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var x = Ql(a);
          o.call(x);
        };
      }
      var a = Pc(t, r, e, 0, null, !1, !1, "", Tc);
      return (
        (e._reactRootContainer = a),
        (e[It] = a.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        a
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function () {
        var x = Ql(m);
        f.call(x);
      };
    }
    var m = Jo(e, 0, !1, null, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = m),
      (e[It] = m.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      wn(function () {
        Wl(t, m, n, r);
      }),
      m
    );
  }
  function Yl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var m = Ql(a);
          f.call(m);
        };
      }
      Wl(t, a, e, l);
    } else a = ap(n, t, e, l, r);
    return Ql(a);
  }
  (ss = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = rr(t.pendingLanes);
          n !== 0 &&
            (Cu(t, n | 1),
            Je(t, Pe()),
            (ne & 6) === 0 && ((Gn = Pe() + 500), Xt()));
        }
        break;
      case 13:
        wn(function () {
          var r = jt(e, 1);
          if (r !== null) {
            var l = Ge();
            Ct(r, e, 1, l);
          }
        }),
          bo(e, 1);
    }
  }),
    (Pu = function (e) {
      if (e.tag === 13) {
        var t = jt(e, 134217728);
        if (t !== null) {
          var n = Ge();
          Ct(t, e, 134217728, n);
        }
        bo(e, 134217728);
      }
    }),
    (as = function (e) {
      if (e.tag === 13) {
        var t = tn(e),
          n = jt(e, t);
        if (n !== null) {
          var r = Ge();
          Ct(n, e, t, r);
        }
        bo(e, t);
      }
    }),
    (cs = function () {
      return fe;
    }),
    (fs = function (e, t) {
      var n = fe;
      try {
        return (fe = e), t();
      } finally {
        fe = n;
      }
    }),
    (gu = function (e, t, n) {
      switch (t) {
        case "input":
          if ((au(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = fl(r);
                if (!l) throw Error(i(90));
                ji(r), au(r, l);
              }
            }
          }
          break;
        case "textarea":
          Ui(e, n);
          break;
        case "select":
          (t = n.value), t != null && Cn(e, !!n.multiple, t, !1);
      }
    }),
    (Xi = Ko),
    (Zi = wn);
  var cp = { usingClientEntryPoint: !1, Events: [kr, Fn, fl, Gi, Yi, Ko] },
    jr = {
      findFiberByHostInstance: fn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    fp = {
      bundleType: jr.bundleType,
      version: jr.version,
      rendererPackageName: jr.rendererPackageName,
      rendererConfig: jr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = es(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: jr.findFiberByHostInstance || sp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xl.isDisabled && Xl.supportsFiber)
      try {
        (Kr = Xl.inject(fp)), (Nt = Xl);
      } catch {}
  }
  return (
    (be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp),
    (be.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ti(t)) throw Error(i(200));
      return ip(e, t, null, n);
    }),
    (be.createRoot = function (e, t) {
      if (!ti(e)) throw Error(i(299));
      var n = !1,
        r = "",
        l = _c;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Jo(e, 1, !1, null, null, n, !1, r, l)),
        (e[It] = t.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        new ei(t)
      );
    }),
    (be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = es(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (be.flushSync = function (e) {
      return wn(e);
    }),
    (be.hydrate = function (e, t, n) {
      if (!Gl(t)) throw Error(i(200));
      return Yl(null, e, t, !0, n);
    }),
    (be.hydrateRoot = function (e, t, n) {
      if (!ti(e)) throw Error(i(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        a = _c;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = Pc(t, null, e, 1, n ?? null, l, !1, o, a)),
        (e[It] = t.current),
        yr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Kl(t);
    }),
    (be.render = function (e, t, n) {
      if (!Gl(t)) throw Error(i(200));
      return Yl(null, e, t, !1, n);
    }),
    (be.unmountComponentAtNode = function (e) {
      if (!Gl(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (wn(function () {
            Yl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[It] = null);
            });
          }),
          !0)
        : !1;
    }),
    (be.unstable_batchedUpdates = Ko),
    (be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Gl(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Yl(e, t, n, !1, r);
    }),
    (be.version = "18.3.1-next-f1338f8080-20240426"),
    be
  );
}
var Mc;
function kp() {
  if (Mc) return li.exports;
  Mc = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return u(), (li.exports = Sp()), li.exports;
}
var $c;
function xp() {
  if ($c) return Zl;
  $c = 1;
  var u = kp();
  return (Zl.createRoot = u.createRoot), (Zl.hydrateRoot = u.hydrateRoot), Zl;
}
var Ep = xp(),
  Cp = Object.defineProperty,
  Pp = (u, s, i) =>
    s in u
      ? Cp(u, s, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (u[s] = i),
  ii = (u, s, i) => (Pp(u, typeof s != "symbol" ? s + "" : s, i), i);
let Np = class {
    constructor() {
      ii(this, "current", this.detect()),
        ii(this, "handoffState", "pending"),
        ii(this, "currentId", 0);
    }
    set(s) {
      this.current !== s &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = s));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  En = new Np(),
  et = (u, s) => {
    En.isServer ? E.useEffect(u, s) : E.useLayoutEffect(u, s);
  };
function sn(u) {
  let s = E.useRef(u);
  return (
    et(() => {
      s.current = u;
    }, [u]),
    s
  );
}
let re = function (u) {
  let s = sn(u);
  return ee.useCallback((...i) => s.current(...i), [s]);
};
function _p(u, s, i) {
  let [c, d] = E.useState(i),
    p = u !== void 0,
    h = E.useRef(p),
    S = E.useRef(!1),
    y = E.useRef(!1);
  return (
    p && !h.current && !S.current
      ? ((S.current = !0),
        (h.current = p),
        console.error(
          "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.",
        ))
      : !p &&
        h.current &&
        !y.current &&
        ((y.current = !0),
        (h.current = p),
        console.error(
          "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.",
        )),
    [p ? u : c, re((P) => (p || d(P), s == null ? void 0 : s(P)))]
  );
}
function Tp(u) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(u)
    : Promise.resolve()
        .then(u)
        .catch((s) =>
          setTimeout(() => {
            throw s;
          }),
        );
}
function At() {
  let u = [],
    s = {
      addEventListener(i, c, d, p) {
        return (
          i.addEventListener(c, d, p),
          s.add(() => i.removeEventListener(c, d, p))
        );
      },
      requestAnimationFrame(...i) {
        let c = requestAnimationFrame(...i);
        return s.add(() => cancelAnimationFrame(c));
      },
      nextFrame(...i) {
        return s.requestAnimationFrame(() => s.requestAnimationFrame(...i));
      },
      setTimeout(...i) {
        let c = setTimeout(...i);
        return s.add(() => clearTimeout(c));
      },
      microTask(...i) {
        let c = { current: !0 };
        return (
          Tp(() => {
            c.current && i[0]();
          }),
          s.add(() => {
            c.current = !1;
          })
        );
      },
      style(i, c, d) {
        let p = i.style.getPropertyValue(c);
        return (
          Object.assign(i.style, { [c]: d }),
          this.add(() => {
            Object.assign(i.style, { [c]: p });
          })
        );
      },
      group(i) {
        let c = At();
        return i(c), this.add(() => c.dispose());
      },
      add(i) {
        return (
          u.push(i),
          () => {
            let c = u.indexOf(i);
            if (c >= 0) for (let d of u.splice(c, 1)) d();
          }
        );
      },
      dispose() {
        for (let i of u.splice(0)) i();
      },
    };
  return s;
}
function Mr() {
  let [u] = E.useState(At);
  return E.useEffect(() => () => u.dispose(), [u]), u;
}
function Rp() {
  let u = typeof document > "u";
  return "useSyncExternalStore" in Dc
    ? ((s) => s.useSyncExternalStore)(Dc)(
        () => () => {},
        () => !1,
        () => !u,
      )
    : !1;
}
function yi() {
  let u = Rp(),
    [s, i] = E.useState(En.isHandoffComplete);
  return (
    s && En.isHandoffComplete === !1 && i(!1),
    E.useEffect(() => {
      s !== !0 && i(!0);
    }, [s]),
    E.useEffect(() => En.handoff(), []),
    u ? !1 : s
  );
}
var Ac;
let an =
  (Ac = ee.useId) != null
    ? Ac
    : function () {
        let u = yi(),
          [s, i] = ee.useState(u ? () => En.nextId() : null);
        return (
          et(() => {
            s === null && i(En.nextId());
          }, [s]),
          s != null ? "" + s : void 0
        );
      };
function We(u, s, ...i) {
  if (u in s) {
    let d = s[u];
    return typeof d == "function" ? d(...i) : d;
  }
  let c = new Error(
    `Tried to handle "${u}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      s,
    )
      .map((d) => `"${d}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(c, We), c);
}
function $r(u) {
  return En.isServer
    ? null
    : u instanceof Node
      ? u.ownerDocument
      : u != null && u.hasOwnProperty("current") && u.current instanceof Node
        ? u.current.ownerDocument
        : document;
}
let pi = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((u) => `${u}:not([tabindex='-1'])`)
  .join(",");
var mi = ((u) => (
    (u[(u.First = 1)] = "First"),
    (u[(u.Previous = 2)] = "Previous"),
    (u[(u.Next = 4)] = "Next"),
    (u[(u.Last = 8)] = "Last"),
    (u[(u.WrapAround = 16)] = "WrapAround"),
    (u[(u.NoScroll = 32)] = "NoScroll"),
    u
  ))(mi || {}),
  Lp = ((u) => (
    (u[(u.Error = 0)] = "Error"),
    (u[(u.Overflow = 1)] = "Overflow"),
    (u[(u.Success = 2)] = "Success"),
    (u[(u.Underflow = 3)] = "Underflow"),
    u
  ))(Lp || {}),
  Ip = ((u) => (
    (u[(u.Previous = -1)] = "Previous"), (u[(u.Next = 1)] = "Next"), u
  ))(Ip || {});
function qc(u = document.body) {
  return u == null
    ? []
    : Array.from(u.querySelectorAll(pi)).sort((s, i) =>
        Math.sign(
          (s.tabIndex || Number.MAX_SAFE_INTEGER) -
            (i.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var wi = ((u) => (
  (u[(u.Strict = 0)] = "Strict"), (u[(u.Loose = 1)] = "Loose"), u
))(wi || {});
function Si(u, s = 0) {
  var i;
  return u === ((i = $r(u)) == null ? void 0 : i.body)
    ? !1
    : We(s, {
        0() {
          return u.matches(pi);
        },
        1() {
          let c = u;
          for (; c !== null; ) {
            if (c.matches(pi)) return !0;
            c = c.parentElement;
          }
          return !1;
        },
      });
}
function Jc(u) {
  let s = $r(u);
  At().nextFrame(() => {
    s && !Si(s.activeElement, 0) && Dp(u);
  });
}
var Op = ((u) => (
  (u[(u.Keyboard = 0)] = "Keyboard"), (u[(u.Mouse = 1)] = "Mouse"), u
))(Op || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (u) => {
      u.metaKey ||
        u.altKey ||
        u.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (u) => {
      u.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : u.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function Dp(u) {
  u == null || u.focus({ preventScroll: !0 });
}
let Fp = ["textarea", "input"].join(",");
function jp(u) {
  var s, i;
  return (i =
    (s = u == null ? void 0 : u.matches) == null ? void 0 : s.call(u, Fp)) !=
    null
    ? i
    : !1;
}
function bc(u, s = (i) => i) {
  return u.slice().sort((i, c) => {
    let d = s(i),
      p = s(c);
    if (d === null || p === null) return 0;
    let h = d.compareDocumentPosition(p);
    return h & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : h & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function zp(u, s) {
  return Mp(qc(), s, { relativeTo: u });
}
function Mp(
  u,
  s,
  { sorted: i = !0, relativeTo: c = null, skipElements: d = [] } = {},
) {
  let p = Array.isArray(u)
      ? u.length > 0
        ? u[0].ownerDocument
        : document
      : u.ownerDocument,
    h = Array.isArray(u) ? (i ? bc(u) : u) : qc(u);
  d.length > 0 && h.length > 1 && (h = h.filter((A) => !d.includes(A))),
    (c = c ?? p.activeElement);
  let S = (() => {
      if (s & 5) return 1;
      if (s & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    y = (() => {
      if (s & 1) return 0;
      if (s & 2) return Math.max(0, h.indexOf(c)) - 1;
      if (s & 4) return Math.max(0, h.indexOf(c)) + 1;
      if (s & 8) return h.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    P = s & 32 ? { preventScroll: !0 } : {},
    N = 0,
    O = h.length,
    F;
  do {
    if (N >= O || N + O <= 0) return 0;
    let A = y + N;
    if (s & 16) A = (A + O) % O;
    else {
      if (A < 0) return 3;
      if (A >= O) return 1;
    }
    (F = h[A]), F == null || F.focus(P), (N += S);
  } while (F !== p.activeElement);
  return s & 6 && jp(F) && F.select(), 2;
}
function $p() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function Ap() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Up() {
  return $p() || Ap();
}
function ql(u, s, i) {
  let c = sn(s);
  E.useEffect(() => {
    function d(p) {
      c.current(p);
    }
    return (
      document.addEventListener(u, d, i),
      () => document.removeEventListener(u, d, i)
    );
  }, [u, i]);
}
function Bp(u, s, i) {
  let c = sn(s);
  E.useEffect(() => {
    function d(p) {
      c.current(p);
    }
    return (
      window.addEventListener(u, d, i),
      () => window.removeEventListener(u, d, i)
    );
  }, [u, i]);
}
function Hp(u, s, i = !0) {
  let c = E.useRef(!1);
  E.useEffect(() => {
    requestAnimationFrame(() => {
      c.current = i;
    });
  }, [i]);
  function d(h, S) {
    if (!c.current || h.defaultPrevented) return;
    let y = S(h);
    if (y === null || !y.getRootNode().contains(y) || !y.isConnected) return;
    let P = (function N(O) {
      return typeof O == "function"
        ? N(O())
        : Array.isArray(O) || O instanceof Set
          ? O
          : [O];
    })(u);
    for (let N of P) {
      if (N === null) continue;
      let O = N instanceof HTMLElement ? N : N.current;
      if (
        (O != null && O.contains(y)) ||
        (h.composed && h.composedPath().includes(O))
      )
        return;
    }
    return !Si(y, wi.Loose) && y.tabIndex !== -1 && h.preventDefault(), s(h, y);
  }
  let p = E.useRef(null);
  ql(
    "pointerdown",
    (h) => {
      var S, y;
      c.current &&
        (p.current =
          ((y = (S = h.composedPath) == null ? void 0 : S.call(h)) == null
            ? void 0
            : y[0]) || h.target);
    },
    !0,
  ),
    ql(
      "mousedown",
      (h) => {
        var S, y;
        c.current &&
          (p.current =
            ((y = (S = h.composedPath) == null ? void 0 : S.call(h)) == null
              ? void 0
              : y[0]) || h.target);
      },
      !0,
    ),
    ql(
      "click",
      (h) => {
        Up() || (p.current && (d(h, () => p.current), (p.current = null)));
      },
      !0,
    ),
    ql(
      "touchend",
      (h) => d(h, () => (h.target instanceof HTMLElement ? h.target : null)),
      !0,
    ),
    Bp(
      "blur",
      (h) =>
        d(h, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
function Vp(...u) {
  return E.useMemo(() => $r(...u), [...u]);
}
function Uc(u) {
  var s;
  if (u.type) return u.type;
  let i = (s = u.as) != null ? s : "button";
  if (typeof i == "string" && i.toLowerCase() === "button") return "button";
}
function ki(u, s) {
  let [i, c] = E.useState(() => Uc(u));
  return (
    et(() => {
      c(Uc(u));
    }, [u.type, u.as]),
    et(() => {
      i ||
        (s.current &&
          s.current instanceof HTMLButtonElement &&
          !s.current.hasAttribute("type") &&
          c("button"));
    }, [i, s]),
    i
  );
}
let ef = Symbol();
function Wp(u, s = !0) {
  return Object.assign(u, { [ef]: s });
}
function ht(...u) {
  let s = E.useRef(u);
  E.useEffect(() => {
    s.current = u;
  }, [u]);
  let i = re((c) => {
    for (let d of s.current)
      d != null && (typeof d == "function" ? d(c) : (d.current = c));
  });
  return u.every((c) => c == null || (c == null ? void 0 : c[ef])) ? void 0 : i;
}
function Bc(u) {
  return [u.screenX, u.screenY];
}
function Qp() {
  let u = E.useRef([-1, -1]);
  return {
    wasMoved(s) {
      let i = Bc(s);
      return u.current[0] === i[0] && u.current[1] === i[1]
        ? !1
        : ((u.current = i), !0);
    },
    update(s) {
      u.current = Bc(s);
    },
  };
}
function Kp({ container: u, accept: s, walk: i, enabled: c = !0 }) {
  let d = E.useRef(s),
    p = E.useRef(i);
  E.useEffect(() => {
    (d.current = s), (p.current = i);
  }, [s, i]),
    et(() => {
      if (!u || !c) return;
      let h = $r(u);
      if (!h) return;
      let S = d.current,
        y = p.current,
        P = Object.assign((O) => S(O), { acceptNode: S }),
        N = h.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, P, !1);
      for (; N.nextNode(); ) y(N.currentNode);
    }, [u, c, d, p]);
}
function bl(...u) {
  return Array.from(
    new Set(u.flatMap((s) => (typeof s == "string" ? s.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
var Zn = ((u) => (
    (u[(u.None = 0)] = "None"),
    (u[(u.RenderStrategy = 1)] = "RenderStrategy"),
    (u[(u.Static = 2)] = "Static"),
    u
  ))(Zn || {}),
  on = ((u) => (
    (u[(u.Unmount = 0)] = "Unmount"), (u[(u.Hidden = 1)] = "Hidden"), u
  ))(on || {});
function tt({
  ourProps: u,
  theirProps: s,
  slot: i,
  defaultTag: c,
  features: d,
  visible: p = !0,
  name: h,
  mergeRefs: S,
}) {
  S = S ?? Gp;
  let y = nf(s, u);
  if (p) return Jl(y, i, c, h, S);
  let P = d ?? 0;
  if (P & 2) {
    let { static: N = !1, ...O } = y;
    if (N) return Jl(O, i, c, h, S);
  }
  if (P & 1) {
    let { unmount: N = !0, ...O } = y;
    return We(N ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Jl({ ...O, hidden: !0, style: { display: "none" } }, i, c, h, S);
      },
    });
  }
  return Jl(y, i, c, h, S);
}
function Jl(u, s = {}, i, c, d) {
  let {
      as: p = i,
      children: h,
      refName: S = "ref",
      ...y
    } = si(u, ["unmount", "static"]),
    P = u.ref !== void 0 ? { [S]: u.ref } : {},
    N = typeof h == "function" ? h(s) : h;
  "className" in y &&
    y.className &&
    typeof y.className == "function" &&
    (y.className = y.className(s));
  let O = {};
  if (s) {
    let F = !1,
      A = [];
    for (let [H, D] of Object.entries(s))
      typeof D == "boolean" && (F = !0), D === !0 && A.push(H);
    F && (O["data-headlessui-state"] = A.join(" "));
  }
  if (p === E.Fragment && Object.keys(vi(y)).length > 0) {
    if (!E.isValidElement(N) || (Array.isArray(N) && N.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${c} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(y).map((D) => `  - ${D}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((D) => `  - ${D}`).join(`
`),
        ].join(`
`),
      );
    let F = N.props,
      A =
        typeof (F == null ? void 0 : F.className) == "function"
          ? (...D) => bl(F == null ? void 0 : F.className(...D), y.className)
          : bl(F == null ? void 0 : F.className, y.className),
      H = A ? { className: A } : {};
    return E.cloneElement(
      N,
      Object.assign(
        {},
        nf(N.props, vi(si(y, ["ref"]))),
        O,
        P,
        { ref: d(N.ref, P.ref) },
        H,
      ),
    );
  }
  return E.createElement(
    p,
    Object.assign(
      {},
      si(y, ["ref"]),
      p !== E.Fragment && P,
      p !== E.Fragment && O,
    ),
    N,
  );
}
function tf() {
  let u = E.useRef([]),
    s = E.useCallback((i) => {
      for (let c of u.current)
        c != null && (typeof c == "function" ? c(i) : (c.current = i));
    }, []);
  return (...i) => {
    if (!i.every((c) => c == null)) return (u.current = i), s;
  };
}
function Gp(...u) {
  return u.every((s) => s == null)
    ? void 0
    : (s) => {
        for (let i of u)
          i != null && (typeof i == "function" ? i(s) : (i.current = s));
      };
}
function nf(...u) {
  if (u.length === 0) return {};
  if (u.length === 1) return u[0];
  let s = {},
    i = {};
  for (let c of u)
    for (let d in c)
      d.startsWith("on") && typeof c[d] == "function"
        ? (i[d] != null || (i[d] = []), i[d].push(c[d]))
        : (s[d] = c[d]);
  if (s.disabled || s["aria-disabled"])
    return Object.assign(
      s,
      Object.fromEntries(Object.keys(i).map((c) => [c, void 0])),
    );
  for (let c in i)
    Object.assign(s, {
      [c](d, ...p) {
        let h = i[c];
        for (let S of h) {
          if (
            (d instanceof Event ||
              (d == null ? void 0 : d.nativeEvent) instanceof Event) &&
            d.defaultPrevented
          )
            return;
          S(d, ...p);
        }
      },
    });
  return s;
}
function nt(u) {
  var s;
  return Object.assign(E.forwardRef(u), {
    displayName: (s = u.displayName) != null ? s : u.name,
  });
}
function vi(u) {
  let s = Object.assign({}, u);
  for (let i in s) s[i] === void 0 && delete s[i];
  return s;
}
function si(u, s = []) {
  let i = Object.assign({}, u);
  for (let c of s) c in i && delete i[c];
  return i;
}
let Yp = "div";
var rf = ((u) => (
  (u[(u.None = 1)] = "None"),
  (u[(u.Focusable = 2)] = "Focusable"),
  (u[(u.Hidden = 4)] = "Hidden"),
  u
))(rf || {});
function Xp(u, s) {
  var i;
  let { features: c = 1, ...d } = u,
    p = {
      ref: s,
      "aria-hidden":
        (c & 2) === 2 ? !0 : (i = d["aria-hidden"]) != null ? i : void 0,
      hidden: (c & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((c & 4) === 4 && (c & 2) !== 2 && { display: "none" }),
      },
    };
  return tt({
    ourProps: p,
    theirProps: d,
    slot: {},
    defaultTag: Yp,
    name: "Hidden",
  });
}
let Zp = nt(Xp),
  xi = E.createContext(null);
xi.displayName = "OpenClosedContext";
var $e = ((u) => (
  (u[(u.Open = 1)] = "Open"),
  (u[(u.Closed = 2)] = "Closed"),
  (u[(u.Closing = 4)] = "Closing"),
  (u[(u.Opening = 8)] = "Opening"),
  u
))($e || {});
function nu() {
  return E.useContext(xi);
}
function Ei({ value: u, children: s }) {
  return ee.createElement(xi.Provider, { value: u }, s);
}
function Ci(u) {
  let s = u.parentElement,
    i = null;
  for (; s && !(s instanceof HTMLFieldSetElement); )
    s instanceof HTMLLegendElement && (i = s), (s = s.parentElement);
  let c = (s == null ? void 0 : s.getAttribute("disabled")) === "";
  return c && qp(i) ? !1 : c;
}
function qp(u) {
  if (!u) return !1;
  let s = u.previousElementSibling;
  for (; s !== null; ) {
    if (s instanceof HTMLLegendElement) return !1;
    s = s.previousElementSibling;
  }
  return !0;
}
function Jp(u) {
  throw new Error("Unexpected object: " + u);
}
var Pt = ((u) => (
  (u[(u.First = 0)] = "First"),
  (u[(u.Previous = 1)] = "Previous"),
  (u[(u.Next = 2)] = "Next"),
  (u[(u.Last = 3)] = "Last"),
  (u[(u.Specific = 4)] = "Specific"),
  (u[(u.Nothing = 5)] = "Nothing"),
  u
))(Pt || {});
function bp(u, s) {
  let i = s.resolveItems();
  if (i.length <= 0) return null;
  let c = s.resolveActiveIndex(),
    d = c ?? -1;
  switch (u.focus) {
    case 0: {
      for (let p = 0; p < i.length; ++p)
        if (!s.resolveDisabled(i[p], p, i)) return p;
      return c;
    }
    case 1: {
      for (let p = d - 1; p >= 0; --p)
        if (!s.resolveDisabled(i[p], p, i)) return p;
      return c;
    }
    case 2: {
      for (let p = d + 1; p < i.length; ++p)
        if (!s.resolveDisabled(i[p], p, i)) return p;
      return c;
    }
    case 3: {
      for (let p = i.length - 1; p >= 0; --p)
        if (!s.resolveDisabled(i[p], p, i)) return p;
      return c;
    }
    case 4: {
      for (let p = 0; p < i.length; ++p)
        if (s.resolveId(i[p], p, i) === u.id) return p;
      return c;
    }
    case 5:
      return null;
    default:
      Jp(u);
  }
}
function em(u) {
  var s, i;
  let c = (s = u == null ? void 0 : u.form) != null ? s : u.closest("form");
  if (c) {
    for (let d of c.elements)
      if (
        d !== u &&
        ((d.tagName === "INPUT" && d.type === "submit") ||
          (d.tagName === "BUTTON" && d.type === "submit") ||
          (d.nodeName === "INPUT" && d.type === "image"))
      ) {
        d.click();
        return;
      }
    (i = c.requestSubmit) == null || i.call(c);
  }
}
var Se = ((u) => (
  (u.Space = " "),
  (u.Enter = "Enter"),
  (u.Escape = "Escape"),
  (u.Backspace = "Backspace"),
  (u.Delete = "Delete"),
  (u.ArrowLeft = "ArrowLeft"),
  (u.ArrowUp = "ArrowUp"),
  (u.ArrowRight = "ArrowRight"),
  (u.ArrowDown = "ArrowDown"),
  (u.Home = "Home"),
  (u.End = "End"),
  (u.PageUp = "PageUp"),
  (u.PageDown = "PageDown"),
  (u.Tab = "Tab"),
  u
))(Se || {});
function Pi() {
  let u = E.useRef(!1);
  return (
    et(
      () => (
        (u.current = !0),
        () => {
          u.current = !1;
        }
      ),
      [],
    ),
    u
  );
}
let lf = E.createContext(null);
function uf() {
  let u = E.useContext(lf);
  if (u === null) {
    let s = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(s, uf), s);
  }
  return u;
}
function tm() {
  let [u, s] = E.useState([]);
  return [
    u.length > 0 ? u.join(" ") : void 0,
    E.useMemo(
      () =>
        function (i) {
          let c = re(
              (p) => (
                s((h) => [...h, p]),
                () =>
                  s((h) => {
                    let S = h.slice(),
                      y = S.indexOf(p);
                    return y !== -1 && S.splice(y, 1), S;
                  })
              ),
            ),
            d = E.useMemo(
              () => ({
                register: c,
                slot: i.slot,
                name: i.name,
                props: i.props,
              }),
              [c, i.slot, i.name, i.props],
            );
          return ee.createElement(lf.Provider, { value: d }, i.children);
        },
      [s],
    ),
  ];
}
let nm = "p";
function rm(u, s) {
  let i = an(),
    { id: c = `headlessui-description-${i}`, ...d } = u,
    p = uf(),
    h = ht(s);
  et(() => p.register(c), [c, p.register]);
  let S = { ref: h, ...p.props, id: c };
  return tt({
    ourProps: S,
    theirProps: d,
    slot: p.slot || {},
    defaultTag: nm,
    name: p.name || "Description",
  });
}
let lm = nt(rm),
  um = Object.assign(lm, {});
var Hc;
let om =
  (Hc = ee.startTransition) != null
    ? Hc
    : function (u) {
        u();
      };
var im = ((u) => (
    (u[(u.Open = 0)] = "Open"), (u[(u.Closed = 1)] = "Closed"), u
  ))(im || {}),
  sm = ((u) => (
    (u[(u.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (u[(u.CloseDisclosure = 1)] = "CloseDisclosure"),
    (u[(u.SetButtonId = 2)] = "SetButtonId"),
    (u[(u.SetPanelId = 3)] = "SetPanelId"),
    (u[(u.LinkPanel = 4)] = "LinkPanel"),
    (u[(u.UnlinkPanel = 5)] = "UnlinkPanel"),
    u
  ))(sm || {});
let am = {
    0: (u) => ({
      ...u,
      disclosureState: We(u.disclosureState, { 0: 1, 1: 0 }),
    }),
    1: (u) => (u.disclosureState === 1 ? u : { ...u, disclosureState: 1 }),
    4(u) {
      return u.linkedPanel === !0 ? u : { ...u, linkedPanel: !0 };
    },
    5(u) {
      return u.linkedPanel === !1 ? u : { ...u, linkedPanel: !1 };
    },
    2(u, s) {
      return u.buttonId === s.buttonId ? u : { ...u, buttonId: s.buttonId };
    },
    3(u, s) {
      return u.panelId === s.panelId ? u : { ...u, panelId: s.panelId };
    },
  },
  Ni = E.createContext(null);
Ni.displayName = "DisclosureContext";
function _i(u) {
  let s = E.useContext(Ni);
  if (s === null) {
    let i = new Error(`<${u} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(i, _i), i);
  }
  return s;
}
let Ti = E.createContext(null);
Ti.displayName = "DisclosureAPIContext";
function of(u) {
  let s = E.useContext(Ti);
  if (s === null) {
    let i = new Error(`<${u} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(i, of), i);
  }
  return s;
}
let Ri = E.createContext(null);
Ri.displayName = "DisclosurePanelContext";
function cm() {
  return E.useContext(Ri);
}
function fm(u, s) {
  return We(s.type, am, u, s);
}
let dm = E.Fragment;
function pm(u, s) {
  let { defaultOpen: i = !1, ...c } = u,
    d = E.useRef(null),
    p = ht(
      s,
      Wp(
        (L) => {
          d.current = L;
        },
        u.as === void 0 || u.as === E.Fragment,
      ),
    ),
    h = E.useRef(null),
    S = E.useRef(null),
    y = E.useReducer(fm, {
      disclosureState: i ? 0 : 1,
      linkedPanel: !1,
      buttonRef: S,
      panelRef: h,
      buttonId: null,
      panelId: null,
    }),
    [{ disclosureState: P, buttonId: N }, O] = y,
    F = re((L) => {
      O({ type: 1 });
      let te = $r(d);
      if (!te || !N) return;
      let z = L
        ? L instanceof HTMLElement
          ? L
          : L.current instanceof HTMLElement
            ? L.current
            : te.getElementById(N)
        : te.getElementById(N);
      z == null || z.focus();
    }),
    A = E.useMemo(() => ({ close: F }), [F]),
    H = E.useMemo(() => ({ open: P === 0, close: F }), [P, F]),
    D = { ref: p };
  return ee.createElement(
    Ni.Provider,
    { value: y },
    ee.createElement(
      Ti.Provider,
      { value: A },
      ee.createElement(
        Ei,
        { value: We(P, { 0: $e.Open, 1: $e.Closed }) },
        tt({
          ourProps: D,
          theirProps: c,
          slot: H,
          defaultTag: dm,
          name: "Disclosure",
        }),
      ),
    ),
  );
}
let mm = "button";
function vm(u, s) {
  let i = an(),
    { id: c = `headlessui-disclosure-button-${i}`, ...d } = u,
    [p, h] = _i("Disclosure.Button"),
    S = cm(),
    y = S === null ? !1 : S === p.panelId,
    P = E.useRef(null),
    N = ht(P, s, y ? null : p.buttonRef),
    O = tf();
  E.useEffect(() => {
    if (!y)
      return (
        h({ type: 2, buttonId: c }),
        () => {
          h({ type: 2, buttonId: null });
        }
      );
  }, [c, h, y]);
  let F = re((z) => {
      var J;
      if (y) {
        if (p.disclosureState === 1) return;
        switch (z.key) {
          case Se.Space:
          case Se.Enter:
            z.preventDefault(),
              z.stopPropagation(),
              h({ type: 0 }),
              (J = p.buttonRef.current) == null || J.focus();
            break;
        }
      } else
        switch (z.key) {
          case Se.Space:
          case Se.Enter:
            z.preventDefault(), z.stopPropagation(), h({ type: 0 });
            break;
        }
    }),
    A = re((z) => {
      switch (z.key) {
        case Se.Space:
          z.preventDefault();
          break;
      }
    }),
    H = re((z) => {
      var J;
      Ci(z.currentTarget) ||
        u.disabled ||
        (y
          ? (h({ type: 0 }), (J = p.buttonRef.current) == null || J.focus())
          : h({ type: 0 }));
    }),
    D = E.useMemo(() => ({ open: p.disclosureState === 0 }), [p]),
    L = ki(u, P),
    te = y
      ? { ref: N, type: L, onKeyDown: F, onClick: H }
      : {
          ref: N,
          id: c,
          type: L,
          "aria-expanded": p.disclosureState === 0,
          "aria-controls": p.linkedPanel ? p.panelId : void 0,
          onKeyDown: F,
          onKeyUp: A,
          onClick: H,
        };
  return tt({
    mergeRefs: O,
    ourProps: te,
    theirProps: d,
    slot: D,
    defaultTag: mm,
    name: "Disclosure.Button",
  });
}
let hm = "div",
  gm = Zn.RenderStrategy | Zn.Static;
function ym(u, s) {
  let i = an(),
    { id: c = `headlessui-disclosure-panel-${i}`, ...d } = u,
    [p, h] = _i("Disclosure.Panel"),
    { close: S } = of("Disclosure.Panel"),
    y = tf(),
    P = ht(s, p.panelRef, (H) => {
      om(() => h({ type: H ? 4 : 5 }));
    });
  E.useEffect(
    () => (
      h({ type: 3, panelId: c }),
      () => {
        h({ type: 3, panelId: null });
      }
    ),
    [c, h],
  );
  let N = nu(),
    O = N !== null ? (N & $e.Open) === $e.Open : p.disclosureState === 0,
    F = E.useMemo(() => ({ open: p.disclosureState === 0, close: S }), [p, S]),
    A = { ref: P, id: c };
  return ee.createElement(
    Ri.Provider,
    { value: p.panelId },
    tt({
      mergeRefs: y,
      ourProps: A,
      theirProps: d,
      slot: F,
      defaultTag: hm,
      features: gm,
      visible: O,
      name: "Disclosure.Panel",
    }),
  );
}
let wm = nt(pm),
  Sm = nt(vm),
  km = nt(ym),
  ai = Object.assign(wm, { Button: Sm, Panel: km }),
  Vc =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Wc(u) {
  var s, i;
  let c = (s = u.innerText) != null ? s : "",
    d = u.cloneNode(!0);
  if (!(d instanceof HTMLElement)) return c;
  let p = !1;
  for (let S of d.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    S.remove(), (p = !0);
  let h = p ? ((i = d.innerText) != null ? i : "") : c;
  return Vc.test(h) && (h = h.replace(Vc, "")), h;
}
function xm(u) {
  let s = u.getAttribute("aria-label");
  if (typeof s == "string") return s.trim();
  let i = u.getAttribute("aria-labelledby");
  if (i) {
    let c = i
      .split(" ")
      .map((d) => {
        let p = document.getElementById(d);
        if (p) {
          let h = p.getAttribute("aria-label");
          return typeof h == "string" ? h.trim() : Wc(p).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (c.length > 0) return c.join(", ");
  }
  return Wc(u).trim();
}
function Em(u) {
  let s = E.useRef(""),
    i = E.useRef("");
  return re(() => {
    let c = u.current;
    if (!c) return "";
    let d = c.innerText;
    if (s.current === d) return i.current;
    let p = xm(c).trim().toLowerCase();
    return (s.current = d), (i.current = p), p;
  });
}
var Cm = ((u) => (
    (u[(u.Open = 0)] = "Open"), (u[(u.Closed = 1)] = "Closed"), u
  ))(Cm || {}),
  Pm = ((u) => (
    (u[(u.Pointer = 0)] = "Pointer"), (u[(u.Other = 1)] = "Other"), u
  ))(Pm || {}),
  Nm = ((u) => (
    (u[(u.OpenMenu = 0)] = "OpenMenu"),
    (u[(u.CloseMenu = 1)] = "CloseMenu"),
    (u[(u.GoToItem = 2)] = "GoToItem"),
    (u[(u.Search = 3)] = "Search"),
    (u[(u.ClearSearch = 4)] = "ClearSearch"),
    (u[(u.RegisterItem = 5)] = "RegisterItem"),
    (u[(u.UnregisterItem = 6)] = "UnregisterItem"),
    u
  ))(Nm || {});
function ci(u, s = (i) => i) {
  let i = u.activeItemIndex !== null ? u.items[u.activeItemIndex] : null,
    c = bc(s(u.items.slice()), (p) => p.dataRef.current.domRef.current),
    d = i ? c.indexOf(i) : null;
  return d === -1 && (d = null), { items: c, activeItemIndex: d };
}
let _m = {
    1(u) {
      return u.menuState === 1
        ? u
        : { ...u, activeItemIndex: null, menuState: 1 };
    },
    0(u) {
      return u.menuState === 0 ? u : { ...u, __demoMode: !1, menuState: 0 };
    },
    2: (u, s) => {
      var i;
      let c = ci(u),
        d = bp(s, {
          resolveItems: () => c.items,
          resolveActiveIndex: () => c.activeItemIndex,
          resolveId: (p) => p.id,
          resolveDisabled: (p) => p.dataRef.current.disabled,
        });
      return {
        ...u,
        ...c,
        searchQuery: "",
        activeItemIndex: d,
        activationTrigger: (i = s.trigger) != null ? i : 1,
      };
    },
    3: (u, s) => {
      let i = u.searchQuery !== "" ? 0 : 1,
        c = u.searchQuery + s.value.toLowerCase(),
        d = (
          u.activeItemIndex !== null
            ? u.items
                .slice(u.activeItemIndex + i)
                .concat(u.items.slice(0, u.activeItemIndex + i))
            : u.items
        ).find((h) => {
          var S;
          return (
            ((S = h.dataRef.current.textValue) == null
              ? void 0
              : S.startsWith(c)) && !h.dataRef.current.disabled
          );
        }),
        p = d ? u.items.indexOf(d) : -1;
      return p === -1 || p === u.activeItemIndex
        ? { ...u, searchQuery: c }
        : { ...u, searchQuery: c, activeItemIndex: p, activationTrigger: 1 };
    },
    4(u) {
      return u.searchQuery === ""
        ? u
        : { ...u, searchQuery: "", searchActiveItemIndex: null };
    },
    5: (u, s) => {
      let i = ci(u, (c) => [...c, { id: s.id, dataRef: s.dataRef }]);
      return { ...u, ...i };
    },
    6: (u, s) => {
      let i = ci(u, (c) => {
        let d = c.findIndex((p) => p.id === s.id);
        return d !== -1 && c.splice(d, 1), c;
      });
      return { ...u, ...i, activationTrigger: 1 };
    },
  },
  Li = E.createContext(null);
Li.displayName = "MenuContext";
function ru(u) {
  let s = E.useContext(Li);
  if (s === null) {
    let i = new Error(`<${u} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(i, ru), i);
  }
  return s;
}
function Tm(u, s) {
  return We(s.type, _m, u, s);
}
let Rm = E.Fragment;
function Lm(u, s) {
  let { __demoMode: i = !1, ...c } = u,
    d = E.useReducer(Tm, {
      __demoMode: i,
      menuState: i ? 0 : 1,
      buttonRef: E.createRef(),
      itemsRef: E.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: p, itemsRef: h, buttonRef: S }, y] = d,
    P = ht(s);
  Hp(
    [S, h],
    (A, H) => {
      var D;
      y({ type: 1 }),
        Si(H, wi.Loose) ||
          (A.preventDefault(), (D = S.current) == null || D.focus());
    },
    p === 0,
  );
  let N = re(() => {
      y({ type: 1 });
    }),
    O = E.useMemo(() => ({ open: p === 0, close: N }), [p, N]),
    F = { ref: P };
  return ee.createElement(
    Li.Provider,
    { value: d },
    ee.createElement(
      Ei,
      { value: We(p, { 0: $e.Open, 1: $e.Closed }) },
      tt({ ourProps: F, theirProps: c, slot: O, defaultTag: Rm, name: "Menu" }),
    ),
  );
}
let Im = "button";
function Om(u, s) {
  var i;
  let c = an(),
    { id: d = `headlessui-menu-button-${c}`, ...p } = u,
    [h, S] = ru("Menu.Button"),
    y = ht(h.buttonRef, s),
    P = Mr(),
    N = re((D) => {
      switch (D.key) {
        case Se.Space:
        case Se.Enter:
        case Se.ArrowDown:
          D.preventDefault(),
            D.stopPropagation(),
            S({ type: 0 }),
            P.nextFrame(() => S({ type: 2, focus: Pt.First }));
          break;
        case Se.ArrowUp:
          D.preventDefault(),
            D.stopPropagation(),
            S({ type: 0 }),
            P.nextFrame(() => S({ type: 2, focus: Pt.Last }));
          break;
      }
    }),
    O = re((D) => {
      switch (D.key) {
        case Se.Space:
          D.preventDefault();
          break;
      }
    }),
    F = re((D) => {
      if (Ci(D.currentTarget)) return D.preventDefault();
      u.disabled ||
        (h.menuState === 0
          ? (S({ type: 1 }),
            P.nextFrame(() => {
              var L;
              return (L = h.buttonRef.current) == null
                ? void 0
                : L.focus({ preventScroll: !0 });
            }))
          : (D.preventDefault(), S({ type: 0 })));
    }),
    A = E.useMemo(() => ({ open: h.menuState === 0 }), [h]),
    H = {
      ref: y,
      id: d,
      type: ki(u, h.buttonRef),
      "aria-haspopup": "menu",
      "aria-controls": (i = h.itemsRef.current) == null ? void 0 : i.id,
      "aria-expanded": h.menuState === 0,
      onKeyDown: N,
      onKeyUp: O,
      onClick: F,
    };
  return tt({
    ourProps: H,
    theirProps: p,
    slot: A,
    defaultTag: Im,
    name: "Menu.Button",
  });
}
let Dm = "div",
  Fm = Zn.RenderStrategy | Zn.Static;
function jm(u, s) {
  var i, c;
  let d = an(),
    { id: p = `headlessui-menu-items-${d}`, ...h } = u,
    [S, y] = ru("Menu.Items"),
    P = ht(S.itemsRef, s),
    N = Vp(S.itemsRef),
    O = Mr(),
    F = nu(),
    A = F !== null ? (F & $e.Open) === $e.Open : S.menuState === 0;
  E.useEffect(() => {
    let z = S.itemsRef.current;
    z &&
      S.menuState === 0 &&
      z !== (N == null ? void 0 : N.activeElement) &&
      z.focus({ preventScroll: !0 });
  }, [S.menuState, S.itemsRef, N]),
    Kp({
      container: S.itemsRef.current,
      enabled: S.menuState === 0,
      accept(z) {
        return z.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : z.hasAttribute("role")
            ? NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_ACCEPT;
      },
      walk(z) {
        z.setAttribute("role", "none");
      },
    });
  let H = re((z) => {
      var J, se;
      switch ((O.dispose(), z.key)) {
        case Se.Space:
          if (S.searchQuery !== "")
            return (
              z.preventDefault(),
              z.stopPropagation(),
              y({ type: 3, value: z.key })
            );
        case Se.Enter:
          if (
            (z.preventDefault(),
            z.stopPropagation(),
            y({ type: 1 }),
            S.activeItemIndex !== null)
          ) {
            let { dataRef: le } = S.items[S.activeItemIndex];
            (se = (J = le.current) == null ? void 0 : J.domRef.current) ==
              null || se.click();
          }
          Jc(S.buttonRef.current);
          break;
        case Se.ArrowDown:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            y({ type: 2, focus: Pt.Next })
          );
        case Se.ArrowUp:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            y({ type: 2, focus: Pt.Previous })
          );
        case Se.Home:
        case Se.PageUp:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            y({ type: 2, focus: Pt.First })
          );
        case Se.End:
        case Se.PageDown:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            y({ type: 2, focus: Pt.Last })
          );
        case Se.Escape:
          z.preventDefault(),
            z.stopPropagation(),
            y({ type: 1 }),
            At().nextFrame(() => {
              var le;
              return (le = S.buttonRef.current) == null
                ? void 0
                : le.focus({ preventScroll: !0 });
            });
          break;
        case Se.Tab:
          z.preventDefault(),
            z.stopPropagation(),
            y({ type: 1 }),
            At().nextFrame(() => {
              zp(S.buttonRef.current, z.shiftKey ? mi.Previous : mi.Next);
            });
          break;
        default:
          z.key.length === 1 &&
            (y({ type: 3, value: z.key }),
            O.setTimeout(() => y({ type: 4 }), 350));
          break;
      }
    }),
    D = re((z) => {
      switch (z.key) {
        case Se.Space:
          z.preventDefault();
          break;
      }
    }),
    L = E.useMemo(() => ({ open: S.menuState === 0 }), [S]),
    te = {
      "aria-activedescendant":
        S.activeItemIndex === null || (i = S.items[S.activeItemIndex]) == null
          ? void 0
          : i.id,
      "aria-labelledby": (c = S.buttonRef.current) == null ? void 0 : c.id,
      id: p,
      onKeyDown: H,
      onKeyUp: D,
      role: "menu",
      tabIndex: 0,
      ref: P,
    };
  return tt({
    ourProps: te,
    theirProps: h,
    slot: L,
    defaultTag: Dm,
    features: Fm,
    visible: A,
    name: "Menu.Items",
  });
}
let zm = E.Fragment;
function Mm(u, s) {
  let i = an(),
    { id: c = `headlessui-menu-item-${i}`, disabled: d = !1, ...p } = u,
    [h, S] = ru("Menu.Item"),
    y = h.activeItemIndex !== null ? h.items[h.activeItemIndex].id === c : !1,
    P = E.useRef(null),
    N = ht(s, P);
  et(() => {
    if (h.__demoMode || h.menuState !== 0 || !y || h.activationTrigger === 0)
      return;
    let le = At();
    return (
      le.requestAnimationFrame(() => {
        var ae, ke;
        (ke = (ae = P.current) == null ? void 0 : ae.scrollIntoView) == null ||
          ke.call(ae, { block: "nearest" });
      }),
      le.dispose
    );
  }, [h.__demoMode, P, y, h.menuState, h.activationTrigger, h.activeItemIndex]);
  let O = Em(P),
    F = E.useRef({
      disabled: d,
      domRef: P,
      get textValue() {
        return O();
      },
    });
  et(() => {
    F.current.disabled = d;
  }, [F, d]),
    et(
      () => (S({ type: 5, id: c, dataRef: F }), () => S({ type: 6, id: c })),
      [F, c],
    );
  let A = re(() => {
      S({ type: 1 });
    }),
    H = re((le) => {
      if (d) return le.preventDefault();
      S({ type: 1 }), Jc(h.buttonRef.current);
    }),
    D = re(() => {
      if (d) return S({ type: 2, focus: Pt.Nothing });
      S({ type: 2, focus: Pt.Specific, id: c });
    }),
    L = Qp(),
    te = re((le) => L.update(le)),
    z = re((le) => {
      L.wasMoved(le) &&
        (d || y || S({ type: 2, focus: Pt.Specific, id: c, trigger: 0 }));
    }),
    J = re((le) => {
      L.wasMoved(le) && (d || (y && S({ type: 2, focus: Pt.Nothing })));
    }),
    se = E.useMemo(() => ({ active: y, disabled: d, close: A }), [y, d, A]);
  return tt({
    ourProps: {
      id: c,
      ref: N,
      role: "menuitem",
      tabIndex: d === !0 ? void 0 : -1,
      "aria-disabled": d === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: H,
      onFocus: D,
      onPointerEnter: te,
      onMouseEnter: te,
      onPointerMove: z,
      onMouseMove: z,
      onPointerLeave: J,
      onMouseLeave: J,
    },
    theirProps: p,
    slot: se,
    defaultTag: zm,
    name: "Menu.Item",
  });
}
let $m = nt(Lm),
  Am = nt(Om),
  Um = nt(jm),
  Bm = nt(Mm),
  Xn = Object.assign($m, { Button: Am, Items: Um, Item: Bm }),
  sf = E.createContext(null);
function af() {
  let u = E.useContext(sf);
  if (u === null) {
    let s = new Error(
      "You used a <Label /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(s, af), s);
  }
  return u;
}
function Hm() {
  let [u, s] = E.useState([]);
  return [
    u.length > 0 ? u.join(" ") : void 0,
    E.useMemo(
      () =>
        function (i) {
          let c = re(
              (p) => (
                s((h) => [...h, p]),
                () =>
                  s((h) => {
                    let S = h.slice(),
                      y = S.indexOf(p);
                    return y !== -1 && S.splice(y, 1), S;
                  })
              ),
            ),
            d = E.useMemo(
              () => ({
                register: c,
                slot: i.slot,
                name: i.name,
                props: i.props,
              }),
              [c, i.slot, i.name, i.props],
            );
          return ee.createElement(sf.Provider, { value: d }, i.children);
        },
      [s],
    ),
  ];
}
let Vm = "label";
function Wm(u, s) {
  let i = an(),
    { id: c = `headlessui-label-${i}`, passive: d = !1, ...p } = u,
    h = af(),
    S = ht(s);
  et(() => h.register(c), [c, h.register]);
  let y = { ref: S, ...h.props, id: c };
  return (
    d &&
      ("onClick" in y && (delete y.htmlFor, delete y.onClick),
      "onClick" in p && delete p.onClick),
    tt({
      ourProps: y,
      theirProps: p,
      slot: h.slot || {},
      defaultTag: Vm,
      name: h.name || "Label",
    })
  );
}
let Qm = nt(Wm),
  Km = Object.assign(Qm, {});
function Gm(u = 0) {
  let [s, i] = E.useState(u),
    c = Pi(),
    d = E.useCallback(
      (y) => {
        c.current && i((P) => P | y);
      },
      [s, c],
    ),
    p = E.useCallback((y) => !!(s & y), [s]),
    h = E.useCallback(
      (y) => {
        c.current && i((P) => P & ~y);
      },
      [i, c],
    ),
    S = E.useCallback(
      (y) => {
        c.current && i((P) => P ^ y);
      },
      [i],
    );
  return { flags: s, addFlag: d, hasFlag: p, removeFlag: h, toggleFlag: S };
}
let Ii = E.createContext(null);
Ii.displayName = "GroupContext";
let Ym = E.Fragment;
function Xm(u) {
  var s;
  let [i, c] = E.useState(null),
    [d, p] = Hm(),
    [h, S] = tm(),
    y = E.useMemo(
      () => ({ switch: i, setSwitch: c, labelledby: d, describedby: h }),
      [i, c, d, h],
    ),
    P = {},
    N = u;
  return ee.createElement(
    S,
    { name: "Switch.Description" },
    ee.createElement(
      p,
      {
        name: "Switch.Label",
        props: {
          htmlFor: (s = y.switch) == null ? void 0 : s.id,
          onClick(O) {
            i &&
              (O.currentTarget.tagName === "LABEL" && O.preventDefault(),
              i.click(),
              i.focus({ preventScroll: !0 }));
          },
        },
      },
      ee.createElement(
        Ii.Provider,
        { value: y },
        tt({
          ourProps: P,
          theirProps: N,
          defaultTag: Ym,
          name: "Switch.Group",
        }),
      ),
    ),
  );
}
let Zm = "button";
function qm(u, s) {
  var i;
  let c = an(),
    {
      id: d = `headlessui-switch-${c}`,
      checked: p,
      defaultChecked: h = !1,
      onChange: S,
      disabled: y = !1,
      name: P,
      value: N,
      form: O,
      ...F
    } = u,
    A = E.useContext(Ii),
    H = E.useRef(null),
    D = ht(H, s, A === null ? null : A.setSwitch),
    [L, te] = _p(p, S, h),
    z = re(() => (te == null ? void 0 : te(!L))),
    J = re((pe) => {
      if (Ci(pe.currentTarget)) return pe.preventDefault();
      pe.preventDefault(), z();
    }),
    se = re((pe) => {
      pe.key === Se.Space
        ? (pe.preventDefault(), z())
        : pe.key === Se.Enter && em(pe.currentTarget);
    }),
    le = re((pe) => pe.preventDefault()),
    ae = E.useMemo(() => ({ checked: L }), [L]),
    ke = {
      id: d,
      ref: D,
      role: "switch",
      type: ki(u, H),
      tabIndex: u.tabIndex === -1 ? 0 : (i = u.tabIndex) != null ? i : 0,
      "aria-checked": L,
      "aria-labelledby": A == null ? void 0 : A.labelledby,
      "aria-describedby": A == null ? void 0 : A.describedby,
      disabled: y,
      onClick: J,
      onKeyUp: se,
      onKeyPress: le,
    },
    De = Mr();
  return (
    E.useEffect(() => {
      var pe;
      let Fe = (pe = H.current) == null ? void 0 : pe.closest("form");
      Fe &&
        h !== void 0 &&
        De.addEventListener(Fe, "reset", () => {
          te(h);
        });
    }, [H, te]),
    ee.createElement(
      ee.Fragment,
      null,
      P != null &&
        L &&
        ee.createElement(Zp, {
          features: rf.Hidden,
          ...vi({
            as: "input",
            type: "checkbox",
            hidden: !0,
            readOnly: !0,
            disabled: y,
            form: O,
            checked: L,
            name: P,
            value: N,
          }),
        }),
      tt({
        ourProps: ke,
        theirProps: F,
        slot: ae,
        defaultTag: Zm,
        name: "Switch",
      }),
    )
  );
}
let Jm = nt(qm),
  bm = Xm,
  ev = Object.assign(Jm, { Group: bm, Label: Km, Description: um });
function tv(u) {
  let s = { called: !1 };
  return (...i) => {
    if (!s.called) return (s.called = !0), u(...i);
  };
}
function fi(u, ...s) {
  u && s.length > 0 && u.classList.add(...s);
}
function di(u, ...s) {
  u && s.length > 0 && u.classList.remove(...s);
}
function nv(u, s) {
  let i = At();
  if (!u) return i.dispose;
  let { transitionDuration: c, transitionDelay: d } = getComputedStyle(u),
    [p, h] = [c, d].map((y) => {
      let [P = 0] = y
        .split(",")
        .filter(Boolean)
        .map((N) => (N.includes("ms") ? parseFloat(N) : parseFloat(N) * 1e3))
        .sort((N, O) => O - N);
      return P;
    }),
    S = p + h;
  if (S !== 0) {
    i.group((P) => {
      P.setTimeout(() => {
        s(), P.dispose();
      }, S),
        P.addEventListener(u, "transitionrun", (N) => {
          N.target === N.currentTarget && P.dispose();
        });
    });
    let y = i.addEventListener(u, "transitionend", (P) => {
      P.target === P.currentTarget && (s(), y());
    });
  } else s();
  return i.add(() => s()), i.dispose;
}
function rv(u, s, i, c) {
  let d = i ? "enter" : "leave",
    p = At(),
    h = c !== void 0 ? tv(c) : () => {};
  d === "enter" && (u.removeAttribute("hidden"), (u.style.display = ""));
  let S = We(d, { enter: () => s.enter, leave: () => s.leave }),
    y = We(d, { enter: () => s.enterTo, leave: () => s.leaveTo }),
    P = We(d, { enter: () => s.enterFrom, leave: () => s.leaveFrom });
  return (
    di(
      u,
      ...s.base,
      ...s.enter,
      ...s.enterTo,
      ...s.enterFrom,
      ...s.leave,
      ...s.leaveFrom,
      ...s.leaveTo,
      ...s.entered,
    ),
    fi(u, ...s.base, ...S, ...P),
    p.nextFrame(() => {
      di(u, ...s.base, ...S, ...P),
        fi(u, ...s.base, ...S, ...y),
        nv(
          u,
          () => (di(u, ...s.base, ...S), fi(u, ...s.base, ...s.entered), h()),
        );
    }),
    p.dispose
  );
}
function lv({
  immediate: u,
  container: s,
  direction: i,
  classes: c,
  onStart: d,
  onStop: p,
}) {
  let h = Pi(),
    S = Mr(),
    y = sn(i);
  et(() => {
    u && (y.current = "enter");
  }, [u]),
    et(() => {
      let P = At();
      S.add(P.dispose);
      let N = s.current;
      if (N && y.current !== "idle" && h.current)
        return (
          P.dispose(),
          d.current(y.current),
          P.add(
            rv(N, c.current, y.current === "enter", () => {
              P.dispose(), p.current(y.current);
            }),
          ),
          P.dispose
        );
    }, [i]);
}
function un(u = "") {
  return u.split(/\s+/).filter((s) => s.length > 1);
}
let lu = E.createContext(null);
lu.displayName = "TransitionContext";
var uv = ((u) => ((u.Visible = "visible"), (u.Hidden = "hidden"), u))(uv || {});
function ov() {
  let u = E.useContext(lu);
  if (u === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return u;
}
function iv() {
  let u = E.useContext(uu);
  if (u === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return u;
}
let uu = E.createContext(null);
uu.displayName = "NestingContext";
function ou(u) {
  return "children" in u
    ? ou(u.children)
    : u.current
        .filter(({ el: s }) => s.current !== null)
        .filter(({ state: s }) => s === "visible").length > 0;
}
function cf(u, s) {
  let i = sn(u),
    c = E.useRef([]),
    d = Pi(),
    p = Mr(),
    h = re((A, H = on.Hidden) => {
      let D = c.current.findIndex(({ el: L }) => L === A);
      D !== -1 &&
        (We(H, {
          [on.Unmount]() {
            c.current.splice(D, 1);
          },
          [on.Hidden]() {
            c.current[D].state = "hidden";
          },
        }),
        p.microTask(() => {
          var L;
          !ou(c) && d.current && ((L = i.current) == null || L.call(i));
        }));
    }),
    S = re((A) => {
      let H = c.current.find(({ el: D }) => D === A);
      return (
        H
          ? H.state !== "visible" && (H.state = "visible")
          : c.current.push({ el: A, state: "visible" }),
        () => h(A, on.Unmount)
      );
    }),
    y = E.useRef([]),
    P = E.useRef(Promise.resolve()),
    N = E.useRef({ enter: [], leave: [], idle: [] }),
    O = re((A, H, D) => {
      y.current.splice(0),
        s &&
          (s.chains.current[H] = s.chains.current[H].filter(([L]) => L !== A)),
        s == null ||
          s.chains.current[H].push([
            A,
            new Promise((L) => {
              y.current.push(L);
            }),
          ]),
        s == null ||
          s.chains.current[H].push([
            A,
            new Promise((L) => {
              Promise.all(N.current[H].map(([te, z]) => z)).then(() => L());
            }),
          ]),
        H === "enter"
          ? (P.current = P.current
              .then(() => (s == null ? void 0 : s.wait.current))
              .then(() => D(H)))
          : D(H);
    }),
    F = re((A, H, D) => {
      Promise.all(N.current[H].splice(0).map(([L, te]) => te))
        .then(() => {
          var L;
          (L = y.current.shift()) == null || L();
        })
        .then(() => D(H));
    });
  return E.useMemo(
    () => ({
      children: c,
      register: S,
      unregister: h,
      onStart: O,
      onStop: F,
      wait: P,
      chains: N,
    }),
    [S, h, c, O, F, N, P],
  );
}
function sv() {}
let av = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qc(u) {
  var s;
  let i = {};
  for (let c of av) i[c] = (s = u[c]) != null ? s : sv;
  return i;
}
function cv(u) {
  let s = E.useRef(Qc(u));
  return (
    E.useEffect(() => {
      s.current = Qc(u);
    }, [u]),
    s
  );
}
let fv = "div",
  ff = Zn.RenderStrategy;
function dv(u, s) {
  var i, c;
  let {
      beforeEnter: d,
      afterEnter: p,
      beforeLeave: h,
      afterLeave: S,
      enter: y,
      enterFrom: P,
      enterTo: N,
      entered: O,
      leave: F,
      leaveFrom: A,
      leaveTo: H,
      ...D
    } = u,
    L = E.useRef(null),
    te = ht(L, s),
    z = (i = D.unmount) == null || i ? on.Unmount : on.Hidden,
    { show: J, appear: se, initial: le } = ov(),
    [ae, ke] = E.useState(J ? "visible" : "hidden"),
    De = iv(),
    { register: pe, unregister: Fe } = De;
  E.useEffect(() => pe(L), [pe, L]),
    E.useEffect(() => {
      if (z === on.Hidden && L.current) {
        if (J && ae !== "visible") {
          ke("visible");
          return;
        }
        return We(ae, { hidden: () => Fe(L), visible: () => pe(L) });
      }
    }, [ae, L, pe, Fe, J, z]);
  let gt = sn({
      base: un(D.className),
      enter: un(y),
      enterFrom: un(P),
      enterTo: un(N),
      entered: un(O),
      leave: un(F),
      leaveFrom: un(A),
      leaveTo: un(H),
    }),
    Qe = cv({ beforeEnter: d, afterEnter: p, beforeLeave: h, afterLeave: S }),
    je = yi();
  E.useEffect(() => {
    if (je && ae === "visible" && L.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [L, ae, je]);
  let rt = le && !se,
    lt = se && J && le,
    Ae = !je || rt ? "idle" : J ? "enter" : "leave",
    de = Gm(0),
    j = re((Z) =>
      We(Z, {
        enter: () => {
          de.addFlag($e.Opening), Qe.current.beforeEnter();
        },
        leave: () => {
          de.addFlag($e.Closing), Qe.current.beforeLeave();
        },
        idle: () => {},
      }),
    ),
    Y = re((Z) =>
      We(Z, {
        enter: () => {
          de.removeFlag($e.Opening), Qe.current.afterEnter();
        },
        leave: () => {
          de.removeFlag($e.Closing), Qe.current.afterLeave();
        },
        idle: () => {},
      }),
    ),
    M = cf(() => {
      ke("hidden"), Fe(L);
    }, De),
    g = E.useRef(!1);
  lv({
    immediate: lt,
    container: L,
    classes: gt,
    direction: Ae,
    onStart: sn((Z) => {
      (g.current = !0), M.onStart(L, Z, j);
    }),
    onStop: sn((Z) => {
      (g.current = !1),
        M.onStop(L, Z, Y),
        Z === "leave" && !ou(M) && (ke("hidden"), Fe(L));
    }),
  });
  let C = D,
    q = { ref: te };
  return (
    lt
      ? (C = {
          ...C,
          className: bl(
            D.className,
            ...gt.current.enter,
            ...gt.current.enterFrom,
          ),
        })
      : g.current &&
        ((C.className = bl(
          D.className,
          (c = L.current) == null ? void 0 : c.className,
        )),
        C.className === "" && delete C.className),
    ee.createElement(
      uu.Provider,
      { value: M },
      ee.createElement(
        Ei,
        { value: We(ae, { visible: $e.Open, hidden: $e.Closed }) | de.flags },
        tt({
          ourProps: q,
          theirProps: C,
          defaultTag: fv,
          features: ff,
          visible: ae === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function pv(u, s) {
  let { show: i, appear: c = !1, unmount: d = !0, ...p } = u,
    h = E.useRef(null),
    S = ht(h, s);
  yi();
  let y = nu();
  if (
    (i === void 0 && y !== null && (i = (y & $e.Open) === $e.Open),
    ![!0, !1].includes(i))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [P, N] = E.useState(i ? "visible" : "hidden"),
    O = cf(() => {
      N("hidden");
    }),
    [F, A] = E.useState(!0),
    H = E.useRef([i]);
  et(() => {
    F !== !1 &&
      H.current[H.current.length - 1] !== i &&
      (H.current.push(i), A(!1));
  }, [H, i]);
  let D = E.useMemo(() => ({ show: i, appear: c, initial: F }), [i, c, F]);
  E.useEffect(() => {
    if (i) N("visible");
    else if (!ou(O)) N("hidden");
    else {
      let J = h.current;
      if (!J) return;
      let se = J.getBoundingClientRect();
      se.x === 0 &&
        se.y === 0 &&
        se.width === 0 &&
        se.height === 0 &&
        N("hidden");
    }
  }, [i, O]);
  let L = { unmount: d },
    te = re(() => {
      var J;
      F && A(!1), (J = u.beforeEnter) == null || J.call(u);
    }),
    z = re(() => {
      var J;
      F && A(!1), (J = u.beforeLeave) == null || J.call(u);
    });
  return ee.createElement(
    uu.Provider,
    { value: O },
    ee.createElement(
      lu.Provider,
      { value: D },
      tt({
        ourProps: {
          ...L,
          as: E.Fragment,
          children: ee.createElement(df, {
            ref: S,
            ...L,
            ...p,
            beforeEnter: te,
            beforeLeave: z,
          }),
        },
        theirProps: {},
        defaultTag: E.Fragment,
        features: ff,
        visible: P === "visible",
        name: "Transition",
      }),
    ),
  );
}
function mv(u, s) {
  let i = E.useContext(lu) !== null,
    c = nu() !== null;
  return ee.createElement(
    ee.Fragment,
    null,
    !i && c
      ? ee.createElement(hi, { ref: s, ...u })
      : ee.createElement(df, { ref: s, ...u }),
  );
}
let hi = nt(pv),
  df = nt(dv),
  vv = nt(mv),
  Oi = Object.assign(hi, { Child: vv, Root: hi });
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hv = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  gv = (u) =>
    u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, i, c) =>
      c ? c.toUpperCase() : i.toLowerCase(),
    ),
  Kc = (u) => {
    const s = gv(u);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  pf = (...u) =>
    u
      .filter((s, i, c) => !!s && s.trim() !== "" && c.indexOf(s) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var yv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wv = E.forwardRef(
  (
    {
      color: u = "currentColor",
      size: s = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: c,
      className: d = "",
      children: p,
      iconNode: h,
      ...S
    },
    y,
  ) =>
    E.createElement(
      "svg",
      {
        ref: y,
        ...yv,
        width: s,
        height: s,
        stroke: u,
        strokeWidth: c ? (Number(i) * 24) / Number(s) : i,
        className: pf("lucide", d),
        ...S,
      },
      [
        ...h.map(([P, N]) => E.createElement(P, N)),
        ...(Array.isArray(p) ? p : [p]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sv = (u, s) => {
  const i = E.forwardRef(({ className: c, ...d }, p) =>
    E.createElement(wv, {
      ref: p,
      iconNode: s,
      className: pf(`lucide-${hv(Kc(u))}`, `lucide-${u}`, c),
      ...d,
    }),
  );
  return (i.displayName = Kc(u)), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  xv = Sv("chevron-down", kv);
function Di(u = "blue", s = { isDark: !1, appearance: "inverted" }) {
  const { isDark: i, appearance: c } = s;
  if (i)
    return {
      topbarContainer: "flex bg-gray-900 p-3 space-x-4 rounded shadow",
      topbarButton: `text-white font-semibold uppercase hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-${u}-400 px-3 py-2 rounded transition`,
      dropdownContainer: "relative inline-block text-left",
      dropdownButton:
        "px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition",
      dropdown:
        "absolute mt-2 bg-gray-800 text-sm rounded shadow-lg w-72 z-50 border border-gray-700",
      item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition text-white hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-${u}-400`,
      selectedItem: "bg-gray-700 font-semibold",
      submenu: "ml-2 pl-2 border-l border-gray-600 space-y-1",
      sidebarContainer:
        "w-64 bg-gray-900 text-white p-4 space-y-4 rounded-xl shadow",
      sidebarGroupLabel: "uppercase text-xs text-gray-400 mb-2 tracking-wide",
      sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 hover:bg-gray-800 rounded text-sm focus-visible:ring-2 focus-visible:ring-${u}-400 transition`,
      sidebarActiveItem: "bg-gray-800",
      sidebarSubmenu: "ml-4 space-y-1 border-l border-gray-700",
    };
  const d = c === "inverted",
    p = d ? "text-white" : "text-slate-800",
    h = d ? "hover:bg-white/10" : `hover:bg-${u}-50`,
    S = d ? "bg-white/20" : `bg-${u}-100`,
    y = d ? "border-white/30" : `border-${u}-200`,
    P = d ? "text-white/70" : "text-slate-600";
  return {
    topbarContainer: `flex bg-gradient-to-r from-${u}-600 to-${u}-700 p-3 space-x-4 rounded shadow`,
    topbarButton: `text-white font-semibold uppercase hover:bg-${u}-500 focus-visible:ring-2 focus-visible:ring-${u}-300 px-3 py-2 rounded transition`,
    dropdownContainer: "relative inline-block text-left",
    dropdownButton: `px-4 py-2 bg-gradient-to-r from-${u}-600 to-${u}-700 text-white rounded hover:from-${u}-500 hover:to-${u}-600 focus-visible:ring-2 focus-visible:ring-${u}-300 transition`,
    dropdown:
      "absolute mt-2 bg-white text-sm rounded shadow-lg w-72 z-50 border border-gray-200",
    item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition ${p} ${h} focus-visible:ring-2 focus-visible:ring-${u}-300`,
    selectedItem: `${S} font-semibold ${p}`,
    submenu: `ml-2 pl-2 border-l ${y} space-y-1`,
    sidebarContainer: `w-64 bg-gradient-to-b from-${u}-600 to-${u}-700 ${d ? "text-white" : "text-slate-800"} p-4 space-y-4 rounded-xl shadow`,
    sidebarGroupLabel: `uppercase text-xs ${P} mb-2 tracking-wide`,
    sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 ${h} rounded text-sm focus-visible:ring-2 focus-visible:ring-${u}-300 transition`,
    sidebarActiveItem: `${S}`,
    sidebarSubmenu: `ml-4 space-y-1 border-l ${y}`,
  };
}
function mf(u, s) {
  const i = s === "dark";
  return u === "dropdown"
    ? { isDark: i, appearance: "normal" }
    : { isDark: i, appearance: "inverted" };
}
function Ev({
  items: u = [],
  userScopes: s = [],
  variant: i = "auto",
  color: c = "blue",
  themeName: d,
  selected: p,
  onSelect: h,
  breakpoint: S = 768,
}) {
  const [y, P] = E.useState(null),
    [N, O] = E.useState(i === "auto" ? Gc() : i),
    F = p ?? y,
    A = h ?? P;
  E.useEffect(() => {
    if (i !== "auto") return;
    const te = () => O(Gc(S));
    return (
      window.addEventListener("resize", te),
      () => window.removeEventListener("resize", te)
    );
  }, [i, S]);
  const H = mf(N, d),
    D = Di(c, H),
    L = _v(u, s);
  return N === "topbar"
    ? Q.jsx(Pv, {
        items: L,
        theme: D,
        selected: F,
        onSelect: A,
        themeName: d,
        color: c,
      })
    : N === "dropdown"
      ? Q.jsx(Nv, { items: L, theme: D, selected: F, onSelect: A })
      : Q.jsx(Cv, { items: L, theme: D, selected: F, onSelect: A });
}
function Cv({ items: u, theme: s, selected: i, onSelect: c }) {
  return Q.jsx("div", {
    className: s.sidebarContainer,
    children: u.map((d, p) =>
      Q.jsxs(
        "div",
        {
          className: s.sidebarGroup,
          children: [
            d.label &&
              Q.jsx("p", { className: s.sidebarGroupLabel, children: d.label }),
            Q.jsx("div", {
              className: "space-y-1",
              children: d.items.map((h, S) =>
                Q.jsx(
                  iu,
                  {
                    item: h,
                    theme: s,
                    selected: i,
                    onSelect: c,
                    level: 0,
                    variant: "sidebar",
                  },
                  S,
                ),
              ),
            }),
          ],
        },
        p,
      ),
    ),
  });
}
function Pv({
  items: u,
  theme: s,
  selected: i,
  onSelect: c,
  themeName: d,
  color: p,
}) {
  const S = Di(p, { appearance: "normal", isDark: d === "dark" });
  return Q.jsx("div", {
    className: s.topbarContainer,
    children: u.map((y, P) =>
      Q.jsxs(
        Xn,
        {
          as: "div",
          className: s.topbarGroup,
          children: [
            Q.jsx(Xn.Button, { className: s.topbarButton, children: y.label }),
            Q.jsx(Oi, {
              as: E.Fragment,
              ...Fi,
              children: Q.jsx(Xn.Items, {
                className: S.dropdown,
                children: Q.jsx("div", {
                  className: "p-2 space-y-1",
                  children: y.items.map((N, O) =>
                    Q.jsx(
                      iu,
                      {
                        item: N,
                        theme: S,
                        selected: i,
                        onSelect: c,
                        level: 0,
                        variant: "topbar",
                      },
                      O,
                    ),
                  ),
                }),
              }),
            }),
          ],
        },
        P,
      ),
    ),
  });
}
function Nv({ items: u, theme: s, selected: i, onSelect: c }) {
  return Q.jsxs(Xn, {
    as: "div",
    className: s.dropdownContainer,
    children: [
      Q.jsx(Xn.Button, { className: s.dropdownButton, children: "Open Menu" }),
      Q.jsx(Oi, {
        as: E.Fragment,
        ...Fi,
        children: Q.jsx(Xn.Items, {
          className: s.dropdown,
          children: u.map((d, p) =>
            Q.jsxs(
              "div",
              {
                className: "p-2 space-y-1",
                children: [
                  d.label &&
                    Q.jsx("p", {
                      className: "text-xs text-gray-400",
                      children: d.label,
                    }),
                  d.items.map((h, S) =>
                    Q.jsx(
                      iu,
                      {
                        item: h,
                        theme: s,
                        selected: i,
                        onSelect: c,
                        level: 0,
                        variant: "dropdown",
                      },
                      S,
                    ),
                  ),
                ],
              },
              p,
            ),
          ),
        }),
      }),
    ],
  });
}
function iu({
  item: u,
  theme: s,
  selected: i,
  onSelect: c,
  level: d,
  variant: p,
}) {
  const h = Array.isArray(u.subItems) && u.subItems.length > 0,
    S = `pl-${d * 2}`,
    y = i === u.label;
  return h
    ? Q.jsx(ai, {
        children: ({ open: P }) =>
          Q.jsxs(Q.Fragment, {
            children: [
              Q.jsxs(ai.Button, {
                className: `${s.item} ${S} flex justify-between items-center w-full`,
                children: [
                  Q.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [u.icon && Q.jsx(u.icon, {}), u.label],
                  }),
                  Q.jsx(xv, {
                    className: `w-4 h-4 transition-transform ${P ? "rotate-180" : ""}`,
                  }),
                ],
              }),
              Q.jsx(Oi, {
                as: E.Fragment,
                ...Fi,
                children: Q.jsx(ai.Panel, {
                  className: `${p === "topbar" || p === "dropdown" ? s.submenu : s.sidebarSubmenu}`,
                  children: u.subItems.map((N, O) =>
                    Q.jsx(
                      iu,
                      {
                        item: N,
                        theme: s,
                        selected: i,
                        onSelect: c,
                        level: d + 1,
                        variant: p,
                      },
                      O,
                    ),
                  ),
                }),
              }),
            ],
          }),
      })
    : Q.jsxs("button", {
        onClick: () => {
          c(u.label), u.onClick && u.onClick();
        },
        className: `${s.item} ${y ? s.selectedItem : ""} ${S} flex items-center gap-2 w-full`,
        children: [u.icon && Q.jsx(u.icon, { className: "mr-2" }), u.label],
      });
}
function Gc(u = 768) {
  return window.innerWidth < u ? "dropdown" : "topbar";
}
function _v(u, s) {
  return u
    .filter((i) => !i.requiredScope || s.includes(i.requiredScope))
    .map((i) => ({
      ...i,
      items: (i.items || []).filter(
        (c) => !c.requiredScope || s.includes(c.requiredScope),
      ),
    }));
}
const Fi = {
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 -translate-y-2",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  Tv = ["blue", "indigo", "cyan", "emerald", "slate", "rose", "amber"];
var vf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Yc = ee.createContext && ee.createContext(vf),
  Rv = ["attr", "size", "title"];
function Lv(u, s) {
  if (u == null) return {};
  var i = Iv(u, s),
    c,
    d;
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(u);
    for (d = 0; d < p.length; d++)
      (c = p[d]),
        !(s.indexOf(c) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(u, c) &&
          (i[c] = u[c]);
  }
  return i;
}
function Iv(u, s) {
  if (u == null) return {};
  var i = {};
  for (var c in u)
    if (Object.prototype.hasOwnProperty.call(u, c)) {
      if (s.indexOf(c) >= 0) continue;
      i[c] = u[c];
    }
  return i;
}
function eu() {
  return (
    (eu = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var s = 1; s < arguments.length; s++) {
            var i = arguments[s];
            for (var c in i)
              Object.prototype.hasOwnProperty.call(i, c) && (u[c] = i[c]);
          }
          return u;
        }),
    eu.apply(this, arguments)
  );
}
function Xc(u, s) {
  var i = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(u);
    s &&
      (c = c.filter(function (d) {
        return Object.getOwnPropertyDescriptor(u, d).enumerable;
      })),
      i.push.apply(i, c);
  }
  return i;
}
function tu(u) {
  for (var s = 1; s < arguments.length; s++) {
    var i = arguments[s] != null ? arguments[s] : {};
    s % 2
      ? Xc(Object(i), !0).forEach(function (c) {
          Ov(u, c, i[c]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(i))
        : Xc(Object(i)).forEach(function (c) {
            Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(i, c));
          });
  }
  return u;
}
function Ov(u, s, i) {
  return (
    (s = Dv(s)),
    s in u
      ? Object.defineProperty(u, s, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[s] = i),
    u
  );
}
function Dv(u) {
  var s = Fv(u, "string");
  return typeof s == "symbol" ? s : s + "";
}
function Fv(u, s) {
  if (typeof u != "object" || !u) return u;
  var i = u[Symbol.toPrimitive];
  if (i !== void 0) {
    var c = i.call(u, s);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(u);
}
function hf(u) {
  return (
    u &&
    u.map((s, i) =>
      ee.createElement(s.tag, tu({ key: i }, s.attr), hf(s.child)),
    )
  );
}
function Ar(u) {
  return (s) =>
    ee.createElement(jv, eu({ attr: tu({}, u.attr) }, s), hf(u.child));
}
function jv(u) {
  var s = (i) => {
    var { attr: c, size: d, title: p } = u,
      h = Lv(u, Rv),
      S = d || i.size || "1em",
      y;
    return (
      i.className && (y = i.className),
      u.className && (y = (y ? y + " " : "") + u.className),
      ee.createElement(
        "svg",
        eu(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          i.attr,
          c,
          h,
          {
            className: y,
            style: tu(tu({ color: u.color || i.color }, i.style), u.style),
            height: S,
            width: S,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        p && ee.createElement("title", null, p),
        u.children,
      )
    );
  };
  return Yc !== void 0
    ? ee.createElement(Yc.Consumer, null, (i) => s(i))
    : s(vf);
}
function zv(u) {
  return Ar({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        },
        child: [],
      },
    ],
  })(u);
}
function Mv(u) {
  return Ar({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z",
        },
        child: [],
      },
    ],
  })(u);
}
function $v(u) {
  return Ar({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z",
        },
        child: [],
      },
    ],
  })(u);
}
function Av(u) {
  return Ar({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(u);
}
function Zc(u) {
  return Ar({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        },
        child: [],
      },
    ],
  })(u);
}
const Uv = ["diagnostics:view", "reporting:view", "reporting:subsection"],
  Bv = [
    {
      label: "Dashboard",
      items: [
        { label: "Home", icon: Av, onClick: () => alert("Home clicked") },
        {
          label: "Analytics",
          icon: zv,
          onClick: () => alert("Analytics clicked"),
        },
      ],
    },
    {
      label: "Projects",
      items: [
        {
          label: "My Projects",
          icon: $v,
          onClick: () => alert("My Projects clicked"),
        },
        {
          label: "Teams",
          icon: Zc,
          subItems: [
            { label: "Members", onClick: () => alert("Members clicked") },
            {
              label: "Permissions",
              subItems: [
                { label: "Roles", onClick: () => alert("Roles clicked") },
                {
                  label: "Access Control",
                  onClick: () => alert("Access Control clicked"),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          label: "General",
          icon: Mv,
          onClick: () => alert("General Settings clicked"),
        },
        {
          label: "Account",
          icon: Zc,
          subItems: [
            { label: "Profile", onClick: () => alert("Profile clicked") },
            { label: "Security", onClick: () => alert("Security clicked") },
          ],
        },
      ],
    },
  ];
function Hv() {
  const [u, s] = E.useState("light"),
    [i, c] = E.useState("blue");
  return Q.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex flex-col space-y-6",
    children: [
      Q.jsxs("header", {
        className:
          "w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0",
        children: [
          Q.jsx("h1", {
            className:
              "text-2xl font-bold text-gray-800 flex items-center gap-2",
            children: "React Headless Menu Playground",
          }),
          Q.jsxs("div", {
            className: "flex flex-wrap items-center justify-end gap-2",
            children: [
              Q.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  Q.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: "Theme",
                  }),
                  Q.jsx(ev, {
                    checked: u === "dark",
                    onChange: (d) => s(d ? "dark" : "light"),
                    className: `${u === "dark" ? "bg-gray-800" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition`,
                    children: Q.jsx("span", {
                      className: `inline-block h-4 w-4 transform rounded-full bg-white transition ${u === "dark" ? "translate-x-6" : "translate-x-1"}`,
                    }),
                  }),
                  Q.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: u === "dark" ? "Dark" : "Light",
                  }),
                ],
              }),
              Q.jsx("div", {
                className: "flex flex-wrap gap-1",
                children: Tv.map((d) =>
                  Q.jsxs(
                    "button",
                    {
                      onClick: () => c(d),
                      className: `flex items-center gap-1 px-2 py-1 rounded text-xs capitalize border transition 
            ${i === d ? "bg-black text-white shadow" : "bg-white text-gray-700 hover:bg-gray-100"}`,
                      children: [
                        Q.jsx("span", {
                          className: `w-3 h-3 rounded-full bg-${d}-500 border border-${d}-700`,
                        }),
                        d,
                      ],
                    },
                    d,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      Q.jsxs("p", {
        className: "max-w-7xl mx-auto text-gray-600",
        children: [
          "Easily switch between ",
          Q.jsx("strong", { children: "light" }),
          " and ",
          Q.jsx("strong", { children: "dark" }),
          " ",
          "themes, and experiment with different color palettes live. Resize the screen to see how the ",
          Q.jsx("strong", { children: "auto" }),
          " variant adapts between a",
          " ",
          Q.jsx("strong", { children: "topbar" }),
          " and a ",
          Q.jsx("strong", { children: "dropdown" }),
          " menu.",
        ],
      }),
      Q.jsx("div", {
        className:
          "grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full",
        children: ["auto", "topbar", "sidebar", "dropdown"].map(
          (d) => (
            Di(i, mf(d, u)),
            Q.jsxs(
              "div",
              {
                className:
                  "p-4 bg-white rounded-xl shadow hover:shadow-lg transition space-y-2 w-full",
                children: [
                  Q.jsxs("h2", {
                    className: "font-semibold text-gray-700 capitalize",
                    children: [d, " Variant"],
                  }),
                  Q.jsx(Ev, {
                    items: Bv,
                    userScopes: Uv,
                    variant: d,
                    color: i,
                    themeName: u,
                  }),
                ],
              },
              d,
            )
          ),
        ),
      }),
      Q.jsxs("footer", {
        className: "text-xs text-gray-400 text-center mt-6 max-w-7xl mx-auto",
        children: ["© React Headless Menu • ", new Date().getFullYear()],
      }),
    ],
  });
}
Ep.createRoot(document.getElementById("root")).render(
  Q.jsx(E.StrictMode, { children: Q.jsx(Hv, {}) }),
);
