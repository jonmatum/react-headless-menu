import Ne, { useState as ke, useEffect as xr, Fragment as ae } from "react";
import { Menu as F, Transition as ie, Disclosure as ne } from "@headlessui/react";
import { ChevronDown as wr } from "lucide-react";
var J = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Er() {
  if (De) return L;
  De = 1;
  var n = Ne, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(b, p, _) {
    var m, w = {}, C = null, O = null;
    _ !== void 0 && (C = "" + _), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (O = p.ref);
    for (m in p) v.call(p, m) && !y.hasOwnProperty(m) && (w[m] = p[m]);
    if (b && b.defaultProps) for (m in p = b.defaultProps, p) w[m] === void 0 && (w[m] = p[m]);
    return { $$typeof: o, type: b, key: C, ref: O, props: w, _owner: f.current };
  }
  return L.Fragment = c, L.jsx = x, L.jsxs = x, L;
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
var Ie;
function Rr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ne, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), b = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), B = Symbol.iterator, A = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[A];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Le = !1, Ye = !1, Be = !1, Ve = !1, Ue = !1, se;
    se = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === y || Ue || e === f || e === _ || e === m || Ve || e === O || Le || Ye || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === w || e.$$typeof === x || e.$$typeof === b || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
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
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case c:
          return "Portal";
        case y:
          return "Profiler";
        case f:
          return "StrictMode";
        case _:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ue(r) + ".Consumer";
          case x:
            var t = e;
            return ue(t._context) + ".Provider";
          case p:
            return Ge(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : P(e.type) || "Memo";
          case C: {
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
    function Je() {
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
    function ze() {
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
        M < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ke();
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
      d = K.current, K.current = null, Je();
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
`), R = a.stack.split(`
`), g = i.length - 1, h = R.length - 1; g >= 1 && h >= 0 && i[g] !== R[h]; )
            h--;
          for (; g >= 1 && h >= 0; g--, h--)
            if (i[g] !== R[h]) {
              if (g !== 1 || h !== 1)
                do
                  if (g--, h--, h < 0 || i[g] !== R[h]) {
                    var T = `
` + i[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, T), T;
                  }
                while (g >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = d, ze(), Error.prepareStackTrace = l;
      }
      var I = e ? e.displayName || e.name : "", k = I ? V(I) : "";
      return typeof e == "function" && U.set(e, k), k;
    }
    function Xe(e, r, t) {
      return ge(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, He(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case _:
          return V("Suspense");
        case m:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Xe(e.render);
          case w:
            return q(e.type, r, t);
          case C: {
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
    function Ze(e, r, t, a, l) {
      {
        var d = Function.call.bind(W);
        for (var s in e)
          if (d(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var R = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              i = g;
            }
            i && !(i instanceof Error) && (G(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), G(null)), i instanceof Error && !(i.message in he) && (he[i.message] = !0, G(l), E("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Z(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
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
      if (rr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), xe(e);
    }
    var Ee = S.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e;
    function nr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function or(e, r) {
      {
        var t = function() {
          Re || (Re = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, a, l, d, s) {
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
    function lr(e, r, t, a, l) {
      {
        var d, s = {}, i = null, R = null;
        t !== void 0 && (we(t), i = "" + t), ar(r) && (we(r.key), i = "" + r.key), nr(r) && (R = r.ref, ir(r, l));
        for (d in r)
          W.call(r, d) && !tr.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            s[d] === void 0 && (s[d] = g[d]);
        }
        if (i || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && or(s, h), R && sr(s, h);
        }
        return ur(e, i, R, l, a, Ee.current, s);
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
    function Te() {
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
    function cr(e) {
      return "";
    }
    var Ce = {};
    function fr(e) {
      {
        var r = Te();
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
        var t = fr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Q.current && (a = " It was passed a child from " + P(e._owner.type) + "."), D(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
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
          var l = N(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), s; !(s = d.next()).done; )
              re(s.value) && Se(s.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = P(r);
          Ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var l = P(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Pe = {};
    function $e(e, r, t, a, l, d) {
      {
        var s = qe(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = cr();
          R ? i += R : i += Te();
          var g;
          e === null ? g = "null" : Z(e) ? g = "array" : e !== void 0 && e.$$typeof === o ? (g = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
        }
        var h = lr(e, r, t, l, d);
        if (h == null)
          return h;
        if (s) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (Z(T)) {
                for (var I = 0; I < T.length; I++)
                  Oe(T[I], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(T, e);
        }
        if (W.call(r, "key")) {
          var k = P(e), j = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), te = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[k + te]) {
            var hr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, k, hr, k), Pe[k + te] = !0;
          }
        }
        return e === v ? pr(h) : dr(h), h;
      }
    }
    function vr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function br(e, r, t) {
      return $e(e, r, t, !1);
    }
    var mr = br, gr = vr;
    Y.Fragment = v, Y.jsx = mr, Y.jsxs = gr;
  }()), Y;
}
var Fe;
function _r() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? J.exports = Er() : J.exports = Rr()), J.exports;
}
var u = _r();
function Me(n = "blue", o = { isDark: !1, appearance: "inverted" }) {
  const { isDark: c, appearance: v } = o;
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
  const f = v === "inverted", y = f ? "text-white" : "text-slate-800", x = f ? "hover:bg-white/10" : `hover:bg-${n}-50`, b = f ? "bg-white/20" : `bg-${n}-100`, p = f ? "border-white/30" : `border-${n}-200`, _ = f ? "text-white/70" : "text-slate-600";
  return {
    topbarContainer: `flex bg-gradient-to-r from-${n}-600 to-${n}-700 p-3 space-x-4 rounded shadow`,
    topbarButton: `text-white font-semibold uppercase hover:bg-${n}-500 focus-visible:ring-2 focus-visible:ring-${n}-300 px-3 py-2 rounded transition`,
    dropdownContainer: "relative inline-block text-left",
    dropdownButton: `px-4 py-2 bg-gradient-to-r from-${n}-600 to-${n}-700 text-white rounded hover:from-${n}-500 hover:to-${n}-600 focus-visible:ring-2 focus-visible:ring-${n}-300 transition`,
    dropdown: "absolute mt-2 bg-white text-sm rounded shadow-lg w-72 z-50 border border-gray-200",
    item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition ${y} ${x} focus-visible:ring-2 focus-visible:ring-${n}-300`,
    selectedItem: `${b} font-semibold ${y}`,
    submenu: `ml-2 pl-2 border-l ${p} space-y-1`,
    sidebarContainer: `w-64 bg-gradient-to-b from-${n}-600 to-${n}-700 ${f ? "text-white" : "text-slate-800"} p-4 space-y-4 rounded-xl shadow`,
    sidebarGroupLabel: `uppercase text-xs ${_} mb-2 tracking-wide`,
    sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 ${x} rounded text-sm focus-visible:ring-2 focus-visible:ring-${n}-300 transition`,
    sidebarActiveItem: `${b}`,
    sidebarSubmenu: `ml-4 space-y-1 border-l ${p}`
  };
}
function jr(n, o) {
  const c = o === "dark";
  return n === "dropdown" ? { isDark: c, appearance: "normal" } : { isDark: c, appearance: "inverted" };
}
function Dr({
  items: n = [],
  userScopes: o = [],
  variant: c = "auto",
  color: v = "blue",
  themeName: f,
  selected: y,
  onSelect: x,
  breakpoint: b = 768
}) {
  const [p, _] = ke(null), [m, w] = ke(
    c === "auto" ? Ae() : c
  ), C = y ?? p, O = x ?? _;
  xr(() => {
    if (c !== "auto") return;
    const S = () => w(Ae(b));
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [c, b]);
  const B = jr(m, f), A = Me(v, B), N = Or(n, o);
  return m === "topbar" ? /* @__PURE__ */ u.jsx(
    Cr,
    {
      items: N,
      theme: A,
      selected: C,
      onSelect: O,
      themeName: f,
      color: v
    }
  ) : m === "dropdown" ? /* @__PURE__ */ u.jsx(Sr, { items: N, theme: A, selected: C, onSelect: O }) : /* @__PURE__ */ u.jsx(Tr, { items: N, theme: A, selected: C, onSelect: O });
}
function Tr({ items: n, theme: o, selected: c, onSelect: v }) {
  return /* @__PURE__ */ u.jsx("div", { className: o.sidebarContainer, children: n.map((f, y) => /* @__PURE__ */ u.jsxs("div", { className: o.sidebarGroup, children: [
    f.label && /* @__PURE__ */ u.jsx("p", { className: o.sidebarGroupLabel, children: f.label }),
    /* @__PURE__ */ u.jsx("div", { className: "space-y-1", children: f.items.map((x, b) => /* @__PURE__ */ u.jsx(
      z,
      {
        item: x,
        theme: o,
        selected: c,
        onSelect: v,
        level: 0,
        variant: "sidebar"
      },
      b
    )) })
  ] }, y)) });
}
function Cr({ items: n, theme: o, selected: c, onSelect: v, themeName: f, color: y }) {
  const b = Me(y, {
    appearance: "normal",
    isDark: f === "dark"
  });
  return /* @__PURE__ */ u.jsx("div", { className: o.topbarContainer, children: n.map((p, _) => /* @__PURE__ */ u.jsxs(F, { as: "div", className: o.topbarGroup, children: [
    /* @__PURE__ */ u.jsx(F.Button, { className: o.topbarButton, children: p.label }),
    /* @__PURE__ */ u.jsx(ie, { as: ae, ...oe, children: /* @__PURE__ */ u.jsx(F.Items, { className: b.dropdown, children: /* @__PURE__ */ u.jsx("div", { className: "p-2 space-y-1", children: p.items.map((m, w) => /* @__PURE__ */ u.jsx(
      z,
      {
        item: m,
        theme: b,
        selected: c,
        onSelect: v,
        level: 0,
        variant: "topbar"
      },
      w
    )) }) }) })
  ] }, _)) });
}
function Sr({ items: n, theme: o, selected: c, onSelect: v }) {
  return /* @__PURE__ */ u.jsxs(F, { as: "div", className: o.dropdownContainer, children: [
    /* @__PURE__ */ u.jsx(F.Button, { className: o.dropdownButton, children: "Open Menu" }),
    /* @__PURE__ */ u.jsx(ie, { as: ae, ...oe, children: /* @__PURE__ */ u.jsx(F.Items, { className: o.dropdown, children: n.map((f, y) => /* @__PURE__ */ u.jsxs("div", { className: "p-2 space-y-1", children: [
      f.label && /* @__PURE__ */ u.jsx("p", { className: "text-xs text-gray-400", children: f.label }),
      f.items.map((x, b) => /* @__PURE__ */ u.jsx(
        z,
        {
          item: x,
          theme: o,
          selected: c,
          onSelect: v,
          level: 0,
          variant: "dropdown"
        },
        b
      ))
    ] }, y)) }) })
  ] });
}
function z({ item: n, theme: o, selected: c, onSelect: v, level: f, variant: y }) {
  const x = Array.isArray(n.subItems) && n.subItems.length > 0, b = `pl-${f * 2}`, p = c === n.label;
  return x ? /* @__PURE__ */ u.jsx(ne, { children: ({ open: _ }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(
      ne.Button,
      {
        className: `${o.item} ${b} flex justify-between items-center w-full`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            n.icon && /* @__PURE__ */ u.jsx(n.icon, {}),
            n.label
          ] }),
          /* @__PURE__ */ u.jsx(
            wr,
            {
              className: `w-4 h-4 transition-transform ${_ ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(ie, { as: ae, ...oe, children: /* @__PURE__ */ u.jsx(
      ne.Panel,
      {
        className: `${y === "topbar" || y === "dropdown" ? o.submenu : o.sidebarSubmenu}`,
        children: n.subItems.map((m, w) => /* @__PURE__ */ u.jsx(
          z,
          {
            item: m,
            theme: o,
            selected: c,
            onSelect: v,
            level: f + 1,
            variant: y
          },
          w
        ))
      }
    ) })
  ] }) }) : /* @__PURE__ */ u.jsxs(
    "button",
    {
      onClick: () => {
        v(n.label), n.onClick && n.onClick();
      },
      className: `${o.item} ${p ? o.selectedItem : ""} ${b} flex items-center gap-2 w-full`,
      children: [
        n.icon && /* @__PURE__ */ u.jsx(n.icon, { className: "mr-2" }),
        n.label
      ]
    }
  );
}
function Ae(n = 768) {
  return window.innerWidth < n ? "dropdown" : "topbar";
}
function Or(n, o) {
  return n.filter(
    (c) => !c.requiredScope || o.includes(c.requiredScope)
  ).map((c) => ({
    ...c,
    items: (c.items || []).filter(
      (v) => !v.requiredScope || o.includes(v.requiredScope)
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
}, Ir = [
  "blue",
  "indigo",
  "cyan",
  "emerald",
  "slate",
  "rose",
  "amber"
];
export {
  Dr as Menu,
  jr as getAppearanceFromVariant,
  Me as getModernPalette,
  Ir as palettes
};
