import Ne, { useState as ke, useEffect as yr, Fragment as ae } from "react";
import { Menu as F, Transition as ie, Disclosure as ne } from "@headlessui/react";
import { ChevronDown as xr } from "lucide-react";
var J = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function wr() {
  if (Ie) return B;
  Ie = 1;
  var n = Ne, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, p = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, f, w) {
    var y, E = {}, T = null, O = null;
    w !== void 0 && (T = "" + w), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (y in f) b.call(f, y) && !x.hasOwnProperty(y) && (E[y] = f[y]);
    if (v && v.defaultProps) for (y in f = v.defaultProps, f) E[y] === void 0 && (E[y] = f[y]);
    return { $$typeof: o, type: v, key: T, ref: O, props: E, _owner: p.current };
  }
  return B.Fragment = c, B.jsx = h, B.jsxs = h, B;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Er() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ne, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), v = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), I = Symbol.iterator, N = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[N];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Me = !1, We = !1, Be = !1, Ye = !1, Ve = !1, se;
    se = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === x || Ve || e === p || e === w || e === y || Ye || e === O || Me || We || Be || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === h || e.$$typeof === v || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case c:
          return "Portal";
        case x:
          return "Profiler";
        case p:
          return "StrictMode";
        case w:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ue(r) + ".Consumer";
          case h:
            var t = e;
            return ue(t._context) + ".Provider";
          case f:
            return qe(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : P(e.type) || "Memo";
          case T: {
            var l = e, d = l._payload, s = l._init;
            try {
              return P(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, M = 0, le, ce, fe, de, pe, ve, be;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ge() {
      {
        if (M === 0) {
          le = console.log, ce = console.info, fe = console.warn, de = console.error, pe = console.group, ve = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Je() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: le
            }),
            info: $({}, e, {
              value: ce
            }),
            warn: $({}, e, {
              value: fe
            }),
            error: $({}, e, {
              value: de
            }),
            group: $({}, e, {
              value: pe
            }),
            groupCollapsed: $({}, e, {
              value: ve
            }),
            groupEnd: $({}, e, {
              value: be
            })
          });
        }
        M < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = S.ReactCurrentDispatcher, X;
    function V(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            X = a && a[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, U;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ze();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      H = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = K.current, K.current = null, Ge();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (j) {
              a = j;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (j) {
              a = j;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            a = j;
          }
          e();
        }
      } catch (j) {
        if (j && a && typeof j.stack == "string") {
          for (var i = j.stack.split(`
`), _ = a.stack.split(`
`), m = i.length - 1, g = _.length - 1; m >= 1 && g >= 0 && i[m] !== _[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (i[m] !== _[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || i[m] !== _[g]) {
                    var C = `
` + i[m].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = d, Je(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", k = A ? V(A) : "";
      return typeof e == "function" && U.set(e, k), k;
    }
    function Ke(e, r, t) {
      return ge(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Xe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case w:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ke(e.render);
          case E:
            return q(e.type, r, t);
          case T: {
            var a = e, l = a._payload, d = a._init;
            try {
              return q(d(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, he = {}, ye = S.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function He(e, r, t, a, l) {
      {
        var d = Function.call.bind(W);
        for (var s in e)
          if (d(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              i = m;
            }
            i && !(i instanceof Error) && (G(l), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), G(null)), i instanceof Error && !(i.message in he) && (he[i.message] = !0, G(l), R("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var Ze = Array.isArray;
    function Z(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function we(e) {
      if (er(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), xe(e);
    }
    var Ee = S.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e;
    function tr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function ir(e, r) {
      {
        var t = function() {
          Re || (Re = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          _e || (_e = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, a, l, d, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ur(e, r, t, a, l) {
      {
        var d, s = {}, i = null, _ = null;
        t !== void 0 && (we(t), i = "" + t), nr(r) && (we(r.key), i = "" + r.key), tr(r) && (_ = r.ref, ar(r, l));
        for (d in r)
          W.call(r, d) && !rr.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            s[d] === void 0 && (s[d] = m[d]);
        }
        if (i || _) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ir(s, g), _ && or(s, g);
        }
        return sr(e, i, _, l, a, Ee.current, s);
      }
    }
    var Q = S.ReactCurrentOwner, je = S.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ce() {
      {
        if (Q.current) {
          var e = P(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var Te = {};
    function cr(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Q.current && (a = " It was passed a child from " + P(e._owner.type) + "."), D(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            re(a) && Se(a, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = L(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), s; !(s = d.next()).done; )
              re(s.value) && Se(s.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = P(r);
          He(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var l = P(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Pe = {};
    function $e(e, r, t, a, l, d) {
      {
        var s = Ue(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr();
          _ ? i += _ : i += Ce();
          var m;
          e === null ? m = "null" : Z(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, i);
        }
        var g = ur(e, r, t, l, d);
        if (g == null)
          return g;
        if (s) {
          var C = r.children;
          if (C !== void 0)
            if (a)
              if (Z(C)) {
                for (var A = 0; A < C.length; A++)
                  Oe(C[A], e);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(C, e);
        }
        if (W.call(r, "key")) {
          var k = P(e), j = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), te = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[k + te]) {
            var gr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, k, gr, k), Pe[k + te] = !0;
          }
        }
        return e === b ? dr(g) : fr(g), g;
      }
    }
    function pr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function vr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var br = vr, mr = pr;
    Y.Fragment = b, Y.jsx = br, Y.jsxs = mr;
  }()), Y;
}
var Ae;
function Rr() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? J.exports = wr() : J.exports = Er()), J.exports;
}
var u = Rr();
function _r(n = "blue", o = { isDark: !1, appearance: "inverted" }) {
  const { isDark: c, appearance: b } = o;
  if (c)
    return {
      topbarContainer: "flex bg-gray-900 p-3 space-x-4 rounded shadow",
      topbarButton: `text-white font-semibold uppercase hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-${n}-400 px-3 py-2 rounded transition`,
      dropdownContainer: "relative inline-block text-left",
      dropdownButton: "px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition",
      dropdown: "absolute mt-2 bg-gray-800 text-sm rounded shadow-lg w-72 z-50 border border-gray-700",
      item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition text-white hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-${n}-400`,
      selectedItem: "bg-gray-700 font-semibold",
      submenu: "ml-2 pl-2 border-l border-gray-600 space-y-1",
      sidebarContainer: "w-64 bg-gray-900 text-white p-4 space-y-4 rounded-xl shadow",
      sidebarGroupLabel: "uppercase text-xs text-gray-400 mb-2 tracking-wide",
      sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 hover:bg-gray-800 rounded text-sm focus-visible:ring-2 focus-visible:ring-${n}-400 transition`,
      sidebarActiveItem: "bg-gray-800",
      sidebarSubmenu: "ml-4 space-y-1 border-l border-gray-700"
    };
  const p = b === "inverted", x = p ? "text-white" : "text-slate-800", h = p ? "hover:bg-white/10" : `hover:bg-${n}-50`, v = p ? "bg-white/20" : `bg-${n}-100`, f = p ? "border-white/30" : `border-${n}-200`, w = p ? "text-white/70" : "text-slate-600";
  return {
    topbarContainer: `flex bg-gradient-to-r from-${n}-600 to-${n}-700 p-3 space-x-4 rounded shadow`,
    topbarButton: `text-white font-semibold uppercase hover:bg-${n}-500 focus-visible:ring-2 focus-visible:ring-${n}-300 px-3 py-2 rounded transition`,
    dropdownContainer: "relative inline-block text-left",
    dropdownButton: `px-4 py-2 bg-gradient-to-r from-${n}-600 to-${n}-700 text-white rounded hover:from-${n}-500 hover:to-${n}-600 focus-visible:ring-2 focus-visible:ring-${n}-300 transition`,
    dropdown: "absolute mt-2 bg-white text-sm rounded shadow-lg w-72 z-50 border border-gray-200",
    item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition ${x} ${h} focus-visible:ring-2 focus-visible:ring-${n}-300`,
    selectedItem: `${v} font-semibold ${x}`,
    submenu: `ml-2 pl-2 border-l ${f} space-y-1`,
    sidebarContainer: `w-64 bg-gradient-to-b from-${n}-600 to-${n}-700 ${p ? "text-white" : "text-slate-800"} p-4 space-y-4 rounded-xl shadow`,
    sidebarGroupLabel: `uppercase text-xs ${w} mb-2 tracking-wide`,
    sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 ${h} rounded text-sm focus-visible:ring-2 focus-visible:ring-${n}-300 transition`,
    sidebarActiveItem: `${v}`,
    sidebarSubmenu: `ml-4 space-y-1 border-l ${f}`
  };
}
const jr = {
  topbarContainer: "flex bg-purple-900 p-3 space-x-4 rounded",
  topbarButton: "text-white font-bold uppercase hover:bg-purple-700 px-3 py-1 rounded transition",
  dropdownContainer: "relative inline-block text-left",
  dropdownButton: "px-4 py-2 bg-purple-900 text-white rounded",
  dropdown: "absolute mt-2 bg-white text-sm rounded shadow-lg w-72 z-50",
  item: "w-full text-left px-2 py-2 hover:bg-purple-100 rounded flex justify-between items-center transition",
  selectedItem: "bg-purple-200",
  submenu: "ml-2 pl-2 border-l border-gray-200 space-y-1",
  sidebarContainer: "w-64 bg-purple-900 text-white p-4 space-y-4",
  sidebarGroup: "",
  sidebarGroupLabel: "uppercase text-xs text-gray-400 mb-2",
  sidebarItem: "flex w-full px-2 py-2 hover:bg-purple-700 rounded",
  sidebarActiveItem: "bg-purple-800",
  sidebarSubmenu: "ml-4 space-y-1"
};
function Ir({
  items: n = [],
  userScopes: o = [],
  variant: c = "auto",
  theme: b = {},
  color: p = "blue",
  selected: x,
  onSelect: h,
  breakpoint: v = 768,
  themeName: f
}) {
  const [w, y] = ke(null), [E, T] = ke(
    c === "auto" ? Fe() : c
  ), O = x ?? w, I = h ?? y, N = { ...jr, ...b };
  yr(() => {
    if (c !== "auto") return;
    const S = () => T(Fe(v));
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [c, v]);
  const L = Or(n, o);
  return E === "topbar" ? /* @__PURE__ */ u.jsx(
    Tr,
    {
      items: L,
      theme: N,
      selected: O,
      onSelect: I,
      color: p,
      themeName: f
    }
  ) : E === "dropdown" ? /* @__PURE__ */ u.jsx(
    Sr,
    {
      items: L,
      theme: N,
      selected: O,
      onSelect: I,
      color: p,
      themeName: f
    }
  ) : /* @__PURE__ */ u.jsx(Cr, { items: L, theme: N, selected: O, onSelect: I });
}
function Cr({ items: n, theme: o, selected: c, onSelect: b }) {
  return /* @__PURE__ */ u.jsx("div", { className: o.sidebarContainer, children: n.map((p, x) => /* @__PURE__ */ u.jsxs("div", { className: o.sidebarGroup, children: [
    p.label && /* @__PURE__ */ u.jsx("p", { className: o.sidebarGroupLabel, children: p.label }),
    /* @__PURE__ */ u.jsx("div", { className: "space-y-1", children: p.items.map((h, v) => /* @__PURE__ */ u.jsx(
      z,
      {
        item: h,
        theme: o,
        selected: c,
        onSelect: b,
        level: 0,
        variant: "sidebar"
      },
      v
    )) })
  ] }, x)) });
}
function Tr({ items: n, theme: o, selected: c, onSelect: b, color: p, themeName: x }) {
  const v = _r(p, {
    appearance: "normal",
    isDark: x === "dark"
  });
  return /* @__PURE__ */ u.jsx("div", { className: o.topbarContainer, children: n.map((f, w) => /* @__PURE__ */ u.jsxs(F, { as: "div", className: o.topbarGroup, children: [
    /* @__PURE__ */ u.jsx(F.Button, { className: o.topbarButton, children: f.label }),
    /* @__PURE__ */ u.jsx(ie, { as: ae, ...oe, children: /* @__PURE__ */ u.jsx(F.Items, { className: v.dropdown, children: /* @__PURE__ */ u.jsx("div", { className: "p-2 space-y-1", children: f.items.map((y, E) => /* @__PURE__ */ u.jsx(
      z,
      {
        item: y,
        theme: v,
        selected: c,
        onSelect: b,
        level: 0,
        variant: "topbar"
      },
      E
    )) }) }) })
  ] }, w)) });
}
function Sr({ items: n, theme: o, selected: c, onSelect: b, color: p, themeName: x }) {
  return /* @__PURE__ */ u.jsxs(F, { as: "div", className: o.dropdownContainer, children: [
    /* @__PURE__ */ u.jsx(F.Button, { className: o.dropdownButton, children: "Open Menu" }),
    /* @__PURE__ */ u.jsx(ie, { as: ae, ...oe, children: /* @__PURE__ */ u.jsx(F.Items, { className: o.dropdown, children: n.map((h, v) => /* @__PURE__ */ u.jsxs("div", { className: "p-2 space-y-1", children: [
      h.label && /* @__PURE__ */ u.jsx("p", { className: "text-xs text-gray-400", children: h.label }),
      h.items.map((f, w) => /* @__PURE__ */ u.jsx(
        z,
        {
          item: f,
          theme: o,
          selected: c,
          onSelect: b,
          level: 0,
          variant: "dropdown"
        },
        w
      ))
    ] }, v)) }) })
  ] });
}
function z({ item: n, theme: o, selected: c, onSelect: b, level: p, variant: x }) {
  const h = Array.isArray(n.subItems) && n.subItems.length > 0, v = `pl-${p * 2}`, f = c === n.label;
  return h ? /* @__PURE__ */ u.jsx(ne, { children: ({ open: w }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(
      ne.Button,
      {
        className: `${o.item} ${v} flex justify-between items-center w-full`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            n.icon && /* @__PURE__ */ u.jsx(n.icon, {}),
            n.label
          ] }),
          /* @__PURE__ */ u.jsx(
            xr,
            {
              className: `w-4 h-4 transition-transform ${w ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(ie, { as: ae, ...oe, children: /* @__PURE__ */ u.jsx(
      ne.Panel,
      {
        className: `${x === "topbar" || x === "dropdown" ? o.submenu : o.sidebarSubmenu}`,
        children: n.subItems.map((y, E) => /* @__PURE__ */ u.jsx(
          z,
          {
            item: y,
            theme: o,
            selected: c,
            onSelect: b,
            level: p + 1,
            variant: x
          },
          E
        ))
      }
    ) })
  ] }) }) : /* @__PURE__ */ u.jsxs(
    "button",
    {
      onClick: () => {
        b(n.label), n.onClick && n.onClick();
      },
      className: `${o.item} ${f ? o.selectedItem : ""} ${v} flex items-center gap-2 w-full`,
      children: [
        n.icon && /* @__PURE__ */ u.jsx(n.icon, { className: "mr-2" }),
        n.label
      ]
    }
  );
}
function Fe(n = 768) {
  return window.innerWidth < n ? "dropdown" : "topbar";
}
function Or(n, o) {
  return n.filter(
    (c) => !c.requiredScope || o.includes(c.requiredScope)
  ).map((c) => ({
    ...c,
    items: (c.items || []).filter(
      (b) => !b.requiredScope || o.includes(b.requiredScope)
    )
  }));
}
const oe = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 -translate-y-2",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0"
};
function Dr(n, o) {
  const c = o === "dark";
  return n === "dropdown" ? { isDark: c, appearance: "normal" } : n === "sidebar" || n === "topbar" ? { isDark: c, appearance: "inverted" } : { isDark: c, appearance: "inverted" };
}
const Ar = [
  "blue",
  "indigo",
  "cyan",
  "emerald",
  "slate",
  "rose",
  "amber"
];
export {
  Ir as Menu,
  Dr as getAppearanceFromVariant,
  _r as getModernPalette,
  Ar as palettes
};
