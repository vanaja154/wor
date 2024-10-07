



function toggleSidebar() {
  const header = document.getElementById('header');
  const sidebar = document.getElementById('sidebar');
  const menuButton = document.getElementById('menu');
  const isSidebarVisible = sidebar.style.display === 'block';

  if (isSidebarVisible) {
    sidebar.style.display = 'none';
    header.style.display = 'block';
    menuButton.style.display = 'block';
  } else {
    sidebar.style.display = 'block';
    header.style.display = 'none';
    menuButton.style.display = 'none';
  }
}






(() => {
  var e = {
      5089: (e, t, n) => {
        var r = n(930),
          i = n(9268),
          s = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw s(i(e) + " is not a function");
        };
      },
      6112: (e, t, n) => {
        var r = n(8759),
          i = String,
          s = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw s(i(e) + " is not an object");
        };
      },
      6198: (e, t, n) => {
        var r = n(4088),
          i = n(7740),
          s = n(2871),
          a = function (e) {
            return function (t, n, a) {
              var o,
                l = r(t),
                c = s(l),
                d = i(a, c);
              if (e && n != n) {
                for (; c > d; ) if ((o = l[d++]) != o) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === n) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: a(!0), indexOf: a(!1) };
      },
      4710: (e, t, n) => {
        "use strict";
        var r = n(5283),
          i = n(6526),
          s = TypeError,
          a = Object.getOwnPropertyDescriptor,
          o =
            r &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], "length", {
                  writable: !1,
                }).length = 1;
              } catch (e) {
                return e instanceof TypeError;
              }
            })();
        e.exports = o
          ? function (e, t) {
              if (i(e) && !a(e, "length").writable)
                throw s("Cannot set read only .length");
              return (e.length = t);
            }
          : function (e, t) {
              return (e.length = t);
            };
      },
      2306: (e, t, n) => {
        var r = n(8240),
          i = r({}.toString),
          s = r("".slice);
        e.exports = function (e) {
          return s(i(e), 8, -1);
        };
      },
      8474: (e, t, n) => {
        var r = n(9606),
          i = n(6095),
          s = n(4399),
          a = n(7826);
        e.exports = function (e, t, n) {
          for (var o = i(t), l = a.f, c = s.f, d = 0; d < o.length; d++) {
            var u = o[d];
            r(e, u) || (n && r(n, u)) || l(e, u, c(t, u));
          }
        };
      },
      2585: (e, t, n) => {
        var r = n(5283),
          i = n(7826),
          s = n(5736);
        e.exports = r
          ? function (e, t, n) {
              return i.f(e, t, s(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      5736: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      1343: (e, t, n) => {
        var r = n(930),
          i = n(7826),
          s = n(3712),
          a = n(9444);
        e.exports = function (e, t, n, o) {
          o || (o = {});
          var l = o.enumerable,
            c = void 0 !== o.name ? o.name : t;
          if ((r(n) && s(n, c, o), o.global)) l ? (e[t] = n) : a(t, n);
          else {
            try {
              o.unsafe ? e[t] && (l = !0) : delete e[t];
            } catch (e) {}
            l
              ? (e[t] = n)
              : i.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !o.nonConfigurable,
                  writable: !o.nonWritable,
                });
          }
          return e;
        };
      },
      9444: (e, t, n) => {
        var r = n(2086),
          i = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            i(r, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      5283: (e, t, n) => {
        var r = n(3677);
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7886: (e) => {
        var t = "object" == typeof document && document.all,
          n = void 0 === t && void 0 !== t;
        e.exports = { all: t, IS_HTMLDDA: n };
      },
      821: (e, t, n) => {
        var r = n(2086),
          i = n(8759),
          s = r.document,
          a = i(s) && i(s.createElement);
        e.exports = function (e) {
          return a ? s.createElement(e) : {};
        };
      },
      7620: (e) => {
        var t = TypeError;
        e.exports = function (e) {
          if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
          return e;
        };
      },
      4999: (e) => {
        e.exports =
          ("undefined" != typeof navigator && String(navigator.userAgent)) ||
          "";
      },
      1448: (e, t, n) => {
        var r,
          i,
          s = n(2086),
          a = n(4999),
          o = s.process,
          l = s.Deno,
          c = (o && o.versions) || (l && l.version),
          d = c && c.v8;
        d && (i = (r = d.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !i &&
            a &&
            (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = a.match(/Chrome\/(\d+)/)) &&
            (i = +r[1]),
          (e.exports = i);
      },
      8684: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      1695: (e, t, n) => {
        var r = n(2086),
          i = n(4399).f,
          s = n(2585),
          a = n(1343),
          o = n(9444),
          l = n(8474),
          c = n(7189);
        e.exports = function (e, t) {
          var n,
            d,
            u,
            p,
            f,
            h = e.target,
            m = e.global,
            g = e.stat;
          if ((n = m ? r : g ? r[h] || o(h, {}) : (r[h] || {}).prototype))
            for (d in t) {
              if (
                ((p = t[d]),
                (u = e.dontCallGetSet ? (f = i(n, d)) && f.value : n[d]),
                !c(m ? d : h + (g ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof p == typeof u) continue;
                l(p, u);
              }
              (e.sham || (u && u.sham)) && s(p, "sham", !0), a(n, d, p, e);
            }
        };
      },
      3677: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      6059: (e, t, n) => {
        var r = n(3677);
        e.exports = !r(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      9413: (e, t, n) => {
        var r = n(6059),
          i = Function.prototype.call;
        e.exports = r
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      4398: (e, t, n) => {
        var r = n(5283),
          i = n(9606),
          s = Function.prototype,
          a = r && Object.getOwnPropertyDescriptor,
          o = i(s, "name"),
          l = o && "something" === function () {}.name,
          c = o && (!r || (r && a(s, "name").configurable));
        e.exports = { EXISTS: o, PROPER: l, CONFIGURABLE: c };
      },
      8240: (e, t, n) => {
        var r = n(6059),
          i = Function.prototype,
          s = i.call,
          a = r && i.bind.bind(s, s);
        e.exports = r
          ? a
          : function (e) {
              return function () {
                return s.apply(e, arguments);
              };
            };
      },
      563: (e, t, n) => {
        var r = n(2086),
          i = n(930);
        e.exports = function (e, t) {
          return arguments.length < 2
            ? ((n = r[e]), i(n) ? n : void 0)
            : r[e] && r[e][t];
          var n;
        };
      },
      2964: (e, t, n) => {
        var r = n(5089),
          i = n(1858);
        e.exports = function (e, t) {
          var n = e[t];
          return i(n) ? void 0 : r(n);
        };
      },
      2086: (e, t, n) => {
        var r = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          r("object" == typeof globalThis && globalThis) ||
          r("object" == typeof window && window) ||
          r("object" == typeof self && self) ||
          r("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      9606: (e, t, n) => {
        var r = n(8240),
          i = n(3060),
          s = r({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return s(i(e), t);
          };
      },
      7153: (e) => {
        e.exports = {};
      },
      6761: (e, t, n) => {
        var r = n(5283),
          i = n(3677),
          s = n(821);
        e.exports =
          !r &&
          !i(function () {
            return (
              7 !=
              Object.defineProperty(s("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      5974: (e, t, n) => {
        var r = n(8240),
          i = n(3677),
          s = n(2306),
          a = Object,
          o = r("".split);
        e.exports = i(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == s(e) ? o(e, "") : a(e);
            }
          : a;
      },
      9277: (e, t, n) => {
        var r = n(8240),
          i = n(930),
          s = n(4489),
          a = r(Function.toString);
        i(s.inspectSource) ||
          (s.inspectSource = function (e) {
            return a(e);
          }),
          (e.exports = s.inspectSource);
      },
      3278: (e, t, n) => {
        var r,
          i,
          s,
          a = n(640),
          o = n(2086),
          l = n(8759),
          c = n(2585),
          d = n(9606),
          u = n(4489),
          p = n(8944),
          f = n(7153),
          h = "Object already initialized",
          m = o.TypeError,
          g = o.WeakMap;
        if (a || u.state) {
          var v = u.state || (u.state = new g());
          (v.get = v.get),
            (v.has = v.has),
            (v.set = v.set),
            (r = function (e, t) {
              if (v.has(e)) throw m(h);
              return (t.facade = e), v.set(e, t), t;
            }),
            (i = function (e) {
              return v.get(e) || {};
            }),
            (s = function (e) {
              return v.has(e);
            });
        } else {
          var y = p("state");
          (f[y] = !0),
            (r = function (e, t) {
              if (d(e, y)) throw m(h);
              return (t.facade = e), c(e, y, t), t;
            }),
            (i = function (e) {
              return d(e, y) ? e[y] : {};
            }),
            (s = function (e) {
              return d(e, y);
            });
        }
        e.exports = {
          set: r,
          get: i,
          has: s,
          enforce: function (e) {
            return s(e) ? i(e) : r(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!l(t) || (n = i(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      6526: (e, t, n) => {
        var r = n(2306);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == r(e);
          };
      },
      930: (e, t, n) => {
        var r = n(7886),
          i = r.all;
        e.exports = r.IS_HTMLDDA
          ? function (e) {
              return "function" == typeof e || e === i;
            }
          : function (e) {
              return "function" == typeof e;
            };
      },
      7189: (e, t, n) => {
        var r = n(3677),
          i = n(930),
          s = /#|\.prototype\./,
          a = function (e, t) {
            var n = l[o(e)];
            return n == d || (n != c && (i(t) ? r(t) : !!t));
          },
          o = (a.normalize = function (e) {
            return String(e).replace(s, ".").toLowerCase();
          }),
          l = (a.data = {}),
          c = (a.NATIVE = "N"),
          d = (a.POLYFILL = "P");
        e.exports = a;
      },
      1858: (e) => {
        e.exports = function (e) {
          return null == e;
        };
      },
      8759: (e, t, n) => {
        var r = n(930),
          i = n(7886),
          s = i.all;
        e.exports = i.IS_HTMLDDA
          ? function (e) {
              return "object" == typeof e ? null !== e : r(e) || e === s;
            }
          : function (e) {
              return "object" == typeof e ? null !== e : r(e);
            };
      },
      3296: (e) => {
        e.exports = !1;
      },
      2071: (e, t, n) => {
        var r = n(563),
          i = n(930),
          s = n(5516),
          a = n(1876),
          o = Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = r("Symbol");
              return i(t) && s(t.prototype, o(e));
            };
      },
      2871: (e, t, n) => {
        var r = n(4005);
        e.exports = function (e) {
          return r(e.length);
        };
      },
      3712: (e, t, n) => {
        var r = n(8240),
          i = n(3677),
          s = n(930),
          a = n(9606),
          o = n(5283),
          l = n(4398).CONFIGURABLE,
          c = n(9277),
          d = n(3278),
          u = d.enforce,
          p = d.get,
          f = String,
          h = Object.defineProperty,
          m = r("".slice),
          g = r("".replace),
          v = r([].join),
          y =
            o &&
            !i(function () {
              return 8 !== h(function () {}, "length", { value: 8 }).length;
            }),
          b = String(String).split("String"),
          w = (e.exports = function (e, t, n) {
            "Symbol(" === m(f(t), 0, 7) &&
              (t = "[" + g(f(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
              n && n.getter && (t = "get " + t),
              n && n.setter && (t = "set " + t),
              (!a(e, "name") || (l && e.name !== t)) &&
                (o
                  ? h(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              y &&
                n &&
                a(n, "arity") &&
                e.length !== n.arity &&
                h(e, "length", { value: n.arity });
            try {
              n && a(n, "constructor") && n.constructor
                ? o && h(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var r = u(e);
            return (
              a(r, "source") ||
                (r.source = v(b, "string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = w(function () {
          return (s(this) && p(this).source) || c(this);
        }, "toString");
      },
      5681: (e) => {
        var t = Math.ceil,
          n = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var r = +e;
            return (r > 0 ? n : t)(r);
          };
      },
      7826: (e, t, n) => {
        var r = n(5283),
          i = n(6761),
          s = n(8202),
          a = n(6112),
          o = n(2258),
          l = TypeError,
          c = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          u = "enumerable",
          p = "configurable",
          f = "writable";
        t.f = r
          ? s
            ? function (e, t, n) {
                if (
                  (a(e),
                  (t = o(t)),
                  a(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    f in n &&
                    !n[f])
                ) {
                  var r = d(e, t);
                  r &&
                    r[f] &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: p in n ? n[p] : r[p],
                      enumerable: u in n ? n[u] : r[u],
                      writable: !1,
                    }));
                }
                return c(e, t, n);
              }
            : c
          : function (e, t, n) {
              if ((a(e), (t = o(t)), a(n), i))
                try {
                  return c(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw l("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      4399: (e, t, n) => {
        var r = n(5283),
          i = n(9413),
          s = n(7446),
          a = n(5736),
          o = n(4088),
          l = n(2258),
          c = n(9606),
          d = n(6761),
          u = Object.getOwnPropertyDescriptor;
        t.f = r
          ? u
          : function (e, t) {
              if (((e = o(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return a(!i(s.f, e, t), e[t]);
            };
      },
      62: (e, t, n) => {
        var r = n(1352),
          i = n(8684).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, i);
          };
      },
      6952: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      5516: (e, t, n) => {
        var r = n(8240);
        e.exports = r({}.isPrototypeOf);
      },
      1352: (e, t, n) => {
        var r = n(8240),
          i = n(9606),
          s = n(4088),
          a = n(6198).indexOf,
          o = n(7153),
          l = r([].push);
        e.exports = function (e, t) {
          var n,
            r = s(e),
            c = 0,
            d = [];
          for (n in r) !i(o, n) && i(r, n) && l(d, n);
          for (; t.length > c; ) i(r, (n = t[c++])) && (~a(d, n) || l(d, n));
          return d;
        };
      },
      7446: (e, t) => {
        "use strict";
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          i = r && !n.call({ 1: 2 }, 1);
        t.f = i
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      7999: (e, t, n) => {
        var r = n(9413),
          i = n(930),
          s = n(8759),
          a = TypeError;
        e.exports = function (e, t) {
          var n, o;
          if ("string" === t && i((n = e.toString)) && !s((o = r(n, e))))
            return o;
          if (i((n = e.valueOf)) && !s((o = r(n, e)))) return o;
          if ("string" !== t && i((n = e.toString)) && !s((o = r(n, e))))
            return o;
          throw a("Can't convert object to primitive value");
        };
      },
      6095: (e, t, n) => {
        var r = n(563),
          i = n(8240),
          s = n(62),
          a = n(6952),
          o = n(6112),
          l = i([].concat);
        e.exports =
          r("Reflect", "ownKeys") ||
          function (e) {
            var t = s.f(o(e)),
              n = a.f;
            return n ? l(t, n(e)) : t;
          };
      },
      9586: (e, t, n) => {
        var r = n(1858),
          i = TypeError;
        e.exports = function (e) {
          if (r(e)) throw i("Can't call method on " + e);
          return e;
        };
      },
      8944: (e, t, n) => {
        var r = n(9197),
          i = n(5422),
          s = r("keys");
        e.exports = function (e) {
          return s[e] || (s[e] = i(e));
        };
      },
      4489: (e, t, n) => {
        var r = n(2086),
          i = n(9444),
          s = "__core-js_shared__",
          a = r[s] || i(s, {});
        e.exports = a;
      },
      9197: (e, t, n) => {
        var r = n(3296),
          i = n(4489);
        (e.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.27.2",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      5558: (e, t, n) => {
        var r = n(1448),
          i = n(3677);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && r && r < 41)
            );
          });
      },
      7740: (e, t, n) => {
        var r = n(9502),
          i = Math.max,
          s = Math.min;
        e.exports = function (e, t) {
          var n = r(e);
          return n < 0 ? i(n + t, 0) : s(n, t);
        };
      },
      4088: (e, t, n) => {
        var r = n(5974),
          i = n(9586);
        e.exports = function (e) {
          return r(i(e));
        };
      },
      9502: (e, t, n) => {
        var r = n(5681);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : r(t);
        };
      },
      4005: (e, t, n) => {
        var r = n(9502),
          i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
      },
      3060: (e, t, n) => {
        var r = n(9586),
          i = Object;
        e.exports = function (e) {
          return i(r(e));
        };
      },
      1288: (e, t, n) => {
        var r = n(9413),
          i = n(8759),
          s = n(2071),
          a = n(2964),
          o = n(7999),
          l = n(211),
          c = TypeError,
          d = l("toPrimitive");
        e.exports = function (e, t) {
          if (!i(e) || s(e)) return e;
          var n,
            l = a(e, d);
          if (l) {
            if (
              (void 0 === t && (t = "default"), (n = r(l, e, t)), !i(n) || s(n))
            )
              return n;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), o(e, t);
        };
      },
      2258: (e, t, n) => {
        var r = n(1288),
          i = n(2071);
        e.exports = function (e) {
          var t = r(e, "string");
          return i(t) ? t : t + "";
        };
      },
      9268: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      5422: (e, t, n) => {
        var r = n(8240),
          i = 0,
          s = Math.random(),
          a = r((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++i + s, 36);
        };
      },
      1876: (e, t, n) => {
        var r = n(5558);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8202: (e, t, n) => {
        var r = n(5283),
          i = n(3677);
        e.exports =
          r &&
          i(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      640: (e, t, n) => {
        var r = n(2086),
          i = n(930),
          s = r.WeakMap;
        e.exports = i(s) && /native code/.test(String(s));
      },
      211: (e, t, n) => {
        var r = n(2086),
          i = n(9197),
          s = n(9606),
          a = n(5422),
          o = n(5558),
          l = n(1876),
          c = r.Symbol,
          d = i("wks"),
          u = l ? c.for || c : (c && c.withoutSetter) || a;
        e.exports = function (e) {
          return (
            s(d, e) || (d[e] = o && s(c, e) ? c[e] : u("Symbol." + e)), d[e]
          );
        };
      },
      5988: (e, t, n) => {
        "use strict";
        var r = n(1695),
          i = n(3060),
          s = n(2871),
          a = n(4710),
          o = n(7620);
        r(
          {
            target: "Array",
            proto: !0,
            arity: 1,
            forced:
              n(3677)(function () {
                return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
              }) ||
              !(function () {
                try {
                  Object.defineProperty([], "length", { writable: !1 }).push();
                } catch (e) {
                  return e instanceof TypeError;
                }
              })(),
          },
          {
            push: function (e) {
              var t = i(this),
                n = s(t),
                r = arguments.length;
              o(n + r);
              for (var l = 0; l < r; l++) (t[n] = arguments[l]), n++;
              return a(t, n), n;
            },
          }
        );
      },
      8317: (e) => {
        function t() {}
        (t.prototype = {
          on: function (e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
          },
          once: function (e, t, n) {
            var r = this;
            function i() {
              r.off(e, i), t.apply(n, arguments);
            }
            return (i._ = t), this.on(e, i, n);
          },
          emit: function (e) {
            for (
              var t = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[e] || []).slice(),
                r = 0,
                i = n.length;
              r < i;
              r++
            )
              n[r].fn.apply(n[r].ctx, t);
            return this;
          },
          off: function (e, t) {
            var n = this.e || (this.e = {}),
              r = n[e],
              i = [];
            if (r && t)
              for (var s = 0, a = r.length; s < a; s++)
                r[s].fn !== t && r[s].fn._ !== t && i.push(r[s]);
            return i.length ? (n[e] = i) : delete n[e], this;
          },
        }),
          (e.exports = t),
          (e.exports.TinyEmitter = t);
      },
      4712: function (e) {
        e.exports = (function () {
          var e = 0;
          function t(t) {
            return "__private_" + e++ + "_" + t;
          }
          function n(e, t) {
            if (!Object.prototype.hasOwnProperty.call(e, t))
              throw new TypeError(
                "attempted to use private field on non-instance"
              );
            return e;
          }
          function r() {}
          r.prototype = {
            on: function (e, t, n) {
              var r = this.e || (this.e = {});
              return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
            },
            once: function (e, t, n) {
              var r = this;
              function i() {
                r.off(e, i), t.apply(n, arguments);
              }
              return (i._ = t), this.on(e, i, n);
            },
            emit: function (e) {
              for (
                var t = [].slice.call(arguments, 1),
                  n = ((this.e || (this.e = {}))[e] || []).slice(),
                  r = 0,
                  i = n.length;
                r < i;
                r++
              )
                n[r].fn.apply(n[r].ctx, t);
              return this;
            },
            off: function (e, t) {
              var n = this.e || (this.e = {}),
                r = n[e],
                i = [];
              if (r && t)
                for (var s = 0, a = r.length; s < a; s++)
                  r[s].fn !== t && r[s].fn._ !== t && i.push(r[s]);
              return i.length ? (n[e] = i) : delete n[e], this;
            },
          };
          var i = r;
          i.TinyEmitter = r;
          var s,
            a = "virtualscroll",
            o = t("options"),
            l = t("el"),
            c = t("emitter"),
            d = t("event"),
            u = t("touchStart"),
            p = t("bodyTouchAction");
          return (function () {
            function e(e) {
              var t = this;
              Object.defineProperty(this, o, { writable: !0, value: void 0 }),
                Object.defineProperty(this, l, { writable: !0, value: void 0 }),
                Object.defineProperty(this, c, { writable: !0, value: void 0 }),
                Object.defineProperty(this, d, { writable: !0, value: void 0 }),
                Object.defineProperty(this, u, { writable: !0, value: void 0 }),
                Object.defineProperty(this, p, { writable: !0, value: void 0 }),
                (this._onWheel = function (e) {
                  var r = n(t, o)[o],
                    i = n(t, d)[d];
                  (i.deltaX = e.wheelDeltaX || -1 * e.deltaX),
                    (i.deltaY = e.wheelDeltaY || -1 * e.deltaY),
                    s.isFirefox &&
                      1 === e.deltaMode &&
                      ((i.deltaX *= r.firefoxMultiplier),
                      (i.deltaY *= r.firefoxMultiplier)),
                    (i.deltaX *= r.mouseMultiplier),
                    (i.deltaY *= r.mouseMultiplier),
                    t._notify(e);
                }),
                (this._onMouseWheel = function (e) {
                  var r = n(t, d)[d];
                  (r.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0),
                    (r.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta),
                    t._notify(e);
                }),
                (this._onTouchStart = function (e) {
                  var r = e.targetTouches ? e.targetTouches[0] : e;
                  (n(t, u)[u].x = r.pageX), (n(t, u)[u].y = r.pageY);
                }),
                (this._onTouchMove = function (e) {
                  var r = n(t, o)[o];
                  r.preventTouch &&
                    !e.target.classList.contains(r.unpreventTouchClass) &&
                    e.preventDefault();
                  var i = n(t, d)[d],
                    s = e.targetTouches ? e.targetTouches[0] : e;
                  (i.deltaX = (s.pageX - n(t, u)[u].x) * r.touchMultiplier),
                    (i.deltaY = (s.pageY - n(t, u)[u].y) * r.touchMultiplier),
                    (n(t, u)[u].x = s.pageX),
                    (n(t, u)[u].y = s.pageY),
                    t._notify(e);
                }),
                (this._onKeyDown = function (e) {
                  var r = n(t, d)[d];
                  r.deltaX = r.deltaY = 0;
                  var i = window.innerHeight - 40;
                  switch (e.keyCode) {
                    case 37:
                    case 38:
                      r.deltaY = n(t, o)[o].keyStep;
                      break;
                    case 39:
                    case 40:
                      r.deltaY = -n(t, o)[o].keyStep;
                      break;
                    case 32:
                      r.deltaY = i * (e.shiftKey ? 1 : -1);
                      break;
                    default:
                      return;
                  }
                  t._notify(e);
                }),
                (n(this, l)[l] = window),
                e && e.el && ((n(this, l)[l] = e.el), delete e.el),
                s ||
                  (s = {
                    hasWheelEvent: "onwheel" in document,
                    hasMouseWheelEvent: "onmousewheel" in document,
                    hasTouch: "ontouchstart" in document,
                    hasTouchWin:
                      navigator.msMaxTouchPoints &&
                      navigator.msMaxTouchPoints > 1,
                    hasPointer: !!window.navigator.msPointerEnabled,
                    hasKeyDown: "onkeydown" in document,
                    isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
                  }),
                (n(this, o)[o] = Object.assign(
                  {
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    useKeyboard: !0,
                    useTouch: !0,
                  },
                  e
                )),
                (n(this, c)[c] = new i()),
                (n(this, d)[d] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
                (n(this, u)[u] = { x: null, y: null }),
                (n(this, p)[p] = null),
                void 0 !== n(this, o)[o].passive &&
                  (this.listenerOptions = { passive: n(this, o)[o].passive });
            }
            var t = e.prototype;
            return (
              (t._notify = function (e) {
                var t = n(this, d)[d];
                (t.x += t.deltaX),
                  (t.y += t.deltaY),
                  n(this, c)[c].emit(a, {
                    x: t.x,
                    y: t.y,
                    deltaX: t.deltaX,
                    deltaY: t.deltaY,
                    originalEvent: e,
                  });
              }),
              (t._bind = function () {
                s.hasWheelEvent &&
                  n(this, l)[l].addEventListener(
                    "wheel",
                    this._onWheel,
                    this.listenerOptions
                  ),
                  s.hasMouseWheelEvent &&
                    n(this, l)[l].addEventListener(
                      "mousewheel",
                      this._onMouseWheel,
                      this.listenerOptions
                    ),
                  s.hasTouch &&
                    n(this, o)[o].useTouch &&
                    (n(this, l)[l].addEventListener(
                      "touchstart",
                      this._onTouchStart,
                      this.listenerOptions
                    ),
                    n(this, l)[l].addEventListener(
                      "touchmove",
                      this._onTouchMove,
                      this.listenerOptions
                    )),
                  s.hasPointer &&
                    s.hasTouchWin &&
                    ((n(this, p)[p] = document.body.style.msTouchAction),
                    (document.body.style.msTouchAction = "none"),
                    n(this, l)[l].addEventListener(
                      "MSPointerDown",
                      this._onTouchStart,
                      !0
                    ),
                    n(this, l)[l].addEventListener(
                      "MSPointerMove",
                      this._onTouchMove,
                      !0
                    )),
                  s.hasKeyDown &&
                    n(this, o)[o].useKeyboard &&
                    document.addEventListener("keydown", this._onKeyDown);
              }),
              (t._unbind = function () {
                s.hasWheelEvent &&
                  n(this, l)[l].removeEventListener("wheel", this._onWheel),
                  s.hasMouseWheelEvent &&
                    n(this, l)[l].removeEventListener(
                      "mousewheel",
                      this._onMouseWheel
                    ),
                  s.hasTouch &&
                    (n(this, l)[l].removeEventListener(
                      "touchstart",
                      this._onTouchStart
                    ),
                    n(this, l)[l].removeEventListener(
                      "touchmove",
                      this._onTouchMove
                    )),
                  s.hasPointer &&
                    s.hasTouchWin &&
                    ((document.body.style.msTouchAction = n(this, p)[p]),
                    n(this, l)[l].removeEventListener(
                      "MSPointerDown",
                      this._onTouchStart,
                      !0
                    ),
                    n(this, l)[l].removeEventListener(
                      "MSPointerMove",
                      this._onTouchMove,
                      !0
                    )),
                  s.hasKeyDown &&
                    n(this, o)[o].useKeyboard &&
                    document.removeEventListener("keydown", this._onKeyDown);
              }),
              (t.on = function (e, t) {
                n(this, c)[c].on(a, e, t);
                var r = n(this, c)[c].e;
                r && r[a] && 1 === r[a].length && this._bind();
              }),
              (t.off = function (e, t) {
                n(this, c)[c].off(a, e, t);
                var r = n(this, c)[c].e;
                (!r[a] || r[a].length <= 0) && this._unbind();
              }),
              (t.destroy = function () {
                n(this, c)[c].off(), this._unbind();
              }),
              e
            );
          })();
        })();
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { exports: {} });
    return e[r].call(s.exports, s, s.exports, n), s.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      "use strict";
      const e = function (e) {
          return (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document
          ).querySelector(e);
        },
        t = function (e) {
          return (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document
          ).querySelectorAll(e);
        },
        r = "#header.hero",
        i = "down",
        s = "up",
        a = (e, t) => {
          if (null === e || 0 === e.length) return null;
          e instanceof HTMLElement
            ? e.classList.toggle(t)
            : e.forEach((e) => {
                e.classList.toggle(t);
              });
        },
        o = (e, t) => {
          if (null === e || 0 === e.length) return null;
          e instanceof HTMLElement
            ? e.classList.add(t)
            : e.forEach((e) => {
                e.classList.add(t);
              });
        },
        l = (e, t) => {
          if (null === e || 0 === e.length) return null;
          e instanceof HTMLElement
            ? e.classList.remove(t)
            : e.forEach((e) => {
                e.classList.remove(t);
              });
        };
      let c = "focus";
      const { IS_MOBILE: d } = TB_CONFIG_SITE_JS,
        u = 1 === d || !0 === d,
        p = {
          TABS_NAV: e('[data-js-fil="filter"]'),
          TABS_NAV_ITEMS: t('[data-js-fil="filter"] [data-js-fil-target]'),
          TABS_NAV_ITEMS_ACTIVE: () =>
            t('[data-js-fil="filter"] [data-js-fil-target].link--active'),
          TABS_NAV_PANELS: () => t(".tabs-clients-tab-content.tabs--active"),
          TABS_NAV_PANEL: (t) => {
            if (null !== t && "" !== t)
              return e("".concat(t, ".tabs-clients-tab-content"));
          },
          ARROW_NAV: e('[data-js-place="line"]'),
        },
        f = () => {
          let e = [];
          return (
            p.TABS_NAV_ITEMS.forEach((t) => {
              if (t.classList.contains("link--active")) {
                let n = t.closest(".item--active");
                if (null === n) return;
                e = { decorLeft: n.offsetLeft, decorWidth: n.offsetWidth / 2 };
              }
            }),
            e
          );
        },
        h = (e, t) => {
          let n = p.ARROW_NAV;
          if (null === n) return null;
          let r = e + t;
          n.style.left = "".concat(r, "px");
        },
        m = (e) => {
          p.TABS_NAV_ITEMS_ACTIVE().forEach((e) => {
            l(e, "link--active"), l(e.parentElement, "item--active");
          }),
            o(e, "link--active"),
            o(e.parentElement, "item--active");
        },
        g = (e) => {
          l(p.TABS_NAV_PANELS(), "tabs--active");
          let t = p.TABS_NAV_PANEL(e);
          o(t, "tabs--active");
        };
      window.addEventListener("load", () => {
        if (null === p.TABS_NAV || u)
          null !== p.TABS_NAV &&
            p.TABS_NAV.addEventListener("click", (e) => {
              let t = e.target,
                n = t.getAttribute("data-js-fil-target");
              t && null !== n && (e.preventDefault(), m(t), g(n));
            });
        else {
          const { decorLeft: e, decorWidth: t } = f();
          h(e, t),
            p.TABS_NAV.addEventListener("click", (e) => {
              let t = e.target,
                n = t.getAttribute("data-js-fil-target");
              if ((console.log(t, n), t && null !== n)) {
                e.preventDefault(), m(t);
                const { decorLeft: r, decorWidth: i } = f();
                h(r, i), g(n);
              }
            });
        }
      });
      var v = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: "normal",
          autoplay: !0,
          timelineOffset: 0,
        },
        y = {
          duration: 1e3,
          delay: 0,
          endDelay: 0,
          easing: "easeOutElastic(1, .5)",
          round: 0,
        },
        b = [
          "translateX",
          "translateY",
          "translateZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "skew",
          "skewX",
          "skewY",
          "perspective",
          "matrix",
          "matrix3d",
        ],
        w = { CSS: {}, springs: {} };
      function T(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function E(e, t) {
        return e.indexOf(t) > -1;
      }
      function x(e, t) {
        return e.apply(null, t);
      }
      var S = {
        arr: function (e) {
          return Array.isArray(e);
        },
        obj: function (e) {
          return E(Object.prototype.toString.call(e), "Object");
        },
        pth: function (e) {
          return S.obj(e) && e.hasOwnProperty("totalLength");
        },
        svg: function (e) {
          return e instanceof SVGElement;
        },
        inp: function (e) {
          return e instanceof HTMLInputElement;
        },
        dom: function (e) {
          return e.nodeType || S.svg(e);
        },
        str: function (e) {
          return "string" == typeof e;
        },
        fnc: function (e) {
          return "function" == typeof e;
        },
        und: function (e) {
          return void 0 === e;
        },
        nil: function (e) {
          return S.und(e) || null === e;
        },
        hex: function (e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function (e) {
          return /^rgb/.test(e);
        },
        hsl: function (e) {
          return /^hsl/.test(e);
        },
        col: function (e) {
          return S.hex(e) || S.rgb(e) || S.hsl(e);
        },
        key: function (e) {
          return (
            !v.hasOwnProperty(e) &&
            !y.hasOwnProperty(e) &&
            "targets" !== e &&
            "keyframes" !== e
          );
        },
      };
      function M(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t
          ? t[1].split(",").map(function (e) {
              return parseFloat(e);
            })
          : [];
      }
      function C(e, t) {
        var n = M(e),
          r = T(S.und(n[0]) ? 1 : n[0], 0.1, 100),
          i = T(S.und(n[1]) ? 100 : n[1], 0.1, 100),
          s = T(S.und(n[2]) ? 10 : n[2], 0.1, 100),
          a = T(S.und(n[3]) ? 0 : n[3], 0.1, 100),
          o = Math.sqrt(i / r),
          l = s / (2 * Math.sqrt(i * r)),
          c = l < 1 ? o * Math.sqrt(1 - l * l) : 0,
          d = l < 1 ? (l * o - a) / c : -a + o;
        function u(e) {
          var n = t ? (t * e) / 1e3 : e;
          return (
            (n =
              l < 1
                ? Math.exp(-n * l * o) *
                  (1 * Math.cos(c * n) + d * Math.sin(c * n))
                : (1 + d * n) * Math.exp(-n * o)),
            0 === e || 1 === e ? e : 1 - n
          );
        }
        return t
          ? u
          : function () {
              var t = w.springs[e];
              if (t) return t;
              for (var n = 1 / 6, r = 0, i = 0; ; )
                if (1 === u((r += n))) {
                  if (++i >= 16) break;
                } else i = 0;
              var s = r * n * 1e3;
              return (w.springs[e] = s), s;
            };
      }
      function P(e) {
        return (
          void 0 === e && (e = 10),
          function (t) {
            return Math.ceil(T(t, 1e-6, 1) * e) * (1 / e);
          }
        );
      }
      var L,
        O,
        A = (function () {
          var e = 0.1;
          function t(e, t) {
            return 1 - 3 * t + 3 * e;
          }
          function n(e, t) {
            return 3 * t - 6 * e;
          }
          function r(e) {
            return 3 * e;
          }
          function i(e, i, s) {
            return ((t(i, s) * e + n(i, s)) * e + r(i)) * e;
          }
          function s(e, i, s) {
            return 3 * t(i, s) * e * e + 2 * n(i, s) * e + r(i);
          }
          return function (t, n, r, a) {
            if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
              var o = new Float32Array(11);
              if (t !== n || r !== a)
                for (var l = 0; l < 11; ++l) o[l] = i(l * e, t, r);
              return function (l) {
                return (t === n && r === a) || 0 === l || 1 === l
                  ? l
                  : i(
                      (function (n) {
                        for (var a = 0, l = 1; 10 !== l && o[l] <= n; ++l)
                          a += e;
                        --l;
                        var c = a + ((n - o[l]) / (o[l + 1] - o[l])) * e,
                          d = s(c, t, r);
                        return d >= 0.001
                          ? (function (e, t, n, r) {
                              for (var a = 0; a < 4; ++a) {
                                var o = s(t, n, r);
                                if (0 === o) return t;
                                t -= (i(t, n, r) - e) / o;
                              }
                              return t;
                            })(n, c, t, r)
                          : 0 === d
                          ? c
                          : (function (e, t, n, r, s) {
                              var a,
                                o,
                                l = 0;
                              do {
                                (a = i((o = t + (n - t) / 2), r, s) - e) > 0
                                  ? (n = o)
                                  : (t = o);
                              } while (Math.abs(a) > 1e-7 && ++l < 10);
                              return o;
                            })(n, a, a + e, t, r);
                      })(l),
                      n,
                      a
                    );
              };
            }
          };
        })(),
        k =
          ((L = {
            linear: function () {
              return function (e) {
                return e;
              };
            },
          }),
          (O = {
            Sine: function () {
              return function (e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              };
            },
            Circ: function () {
              return function (e) {
                return 1 - Math.sqrt(1 - e * e);
              };
            },
            Back: function () {
              return function (e) {
                return e * e * (3 * e - 2);
              };
            },
            Bounce: function () {
              return function (e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                return (
                  1 / Math.pow(4, 3 - n) -
                  7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                );
              };
            },
            Elastic: function (e, t) {
              void 0 === e && (e = 1), void 0 === t && (t = 0.5);
              var n = T(e, 1, 10),
                r = T(t, 0.1, 2);
              return function (e) {
                return 0 === e || 1 === e
                  ? e
                  : -n *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) *
                          (2 * Math.PI)) /
                          r
                      );
              };
            },
          }),
          ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, t) {
            O[e] = function () {
              return function (e) {
                return Math.pow(e, t + 2);
              };
            };
          }),
          Object.keys(O).forEach(function (e) {
            var t = O[e];
            (L["easeIn" + e] = t),
              (L["easeOut" + e] = function (e, n) {
                return function (r) {
                  return 1 - t(e, n)(1 - r);
                };
              }),
              (L["easeInOut" + e] = function (e, n) {
                return function (r) {
                  return r < 0.5
                    ? t(e, n)(2 * r) / 2
                    : 1 - t(e, n)(-2 * r + 2) / 2;
                };
              }),
              (L["easeOutIn" + e] = function (e, n) {
                return function (r) {
                  return r < 0.5
                    ? (1 - t(e, n)(1 - 2 * r)) / 2
                    : (t(e, n)(2 * r - 1) + 1) / 2;
                };
              });
          }),
          L);
      function _(e, t) {
        if (S.fnc(e)) return e;
        var n = e.split("(")[0],
          r = k[n],
          i = M(e);
        switch (n) {
          case "spring":
            return C(e, t);
          case "cubicBezier":
            return x(A, i);
          case "steps":
            return x(P, i);
          default:
            return x(r, i);
        }
      }
      function I(e) {
        try {
          return document.querySelectorAll(e);
        } catch (e) {
          return;
        }
      }
      function D(e, t) {
        for (
          var n = e.length,
            r = arguments.length >= 2 ? arguments[1] : void 0,
            i = [],
            s = 0;
          s < n;
          s++
        )
          if (s in e) {
            var a = e[s];
            t.call(r, a, s, e) && i.push(a);
          }
        return i;
      }
      function N(e) {
        return e.reduce(function (e, t) {
          return e.concat(S.arr(t) ? N(t) : t);
        }, []);
      }
      function z(e) {
        return S.arr(e)
          ? e
          : (S.str(e) && (e = I(e) || e),
            e instanceof NodeList || e instanceof HTMLCollection
              ? [].slice.call(e)
              : [e]);
      }
      function j(e, t) {
        return e.some(function (e) {
          return e === t;
        });
      }
      function B(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function G(e, t) {
        var n = B(e);
        for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
        return n;
      }
      function F(e, t) {
        var n = B(e);
        for (var r in t) n[r] = S.und(e[r]) ? t[r] : e[r];
        return n;
      }
      function H(e) {
        var t =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            e
          );
        if (t) return t[1];
      }
      function Y(e, t) {
        return S.fnc(e) ? e(t.target, t.id, t.total) : e;
      }
      function $(e, t) {
        return e.getAttribute(t);
      }
      function W(e, t, n) {
        if (j([n, "deg", "rad", "turn"], H(t))) return t;
        var r = w.CSS[t + n];
        if (!S.und(r)) return r;
        var i = document.createElement(e.tagName),
          s =
            e.parentNode && e.parentNode !== document
              ? e.parentNode
              : document.body;
        s.appendChild(i),
          (i.style.position = "absolute"),
          (i.style.width = 100 + n);
        var a = 100 / i.offsetWidth;
        s.removeChild(i);
        var o = a * parseFloat(t);
        return (w.CSS[t + n] = o), o;
      }
      function X(e, t, n) {
        if (t in e.style) {
          var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            i = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
          return n ? W(e, i, n) : i;
        }
      }
      function V(e, t) {
        return S.dom(e) && !S.inp(e) && (!S.nil($(e, t)) || (S.svg(e) && e[t]))
          ? "attribute"
          : S.dom(e) && j(b, t)
          ? "transform"
          : S.dom(e) && "transform" !== t && X(e, t)
          ? "css"
          : null != e[t]
          ? "object"
          : void 0;
      }
      function R(e) {
        if (S.dom(e)) {
          for (
            var t,
              n = e.style.transform || "",
              r = /(\w+)\(([^)]*)\)/g,
              i = new Map();
            (t = r.exec(n));

          )
            i.set(t[1], t[2]);
          return i;
        }
      }
      function q(e, t, n, r) {
        switch (V(e, t)) {
          case "transform":
            return (function (e, t, n, r) {
              var i = E(t, "scale")
                  ? 1
                  : 0 +
                    (function (e) {
                      return E(e, "translate") || "perspective" === e
                        ? "px"
                        : E(e, "rotate") || E(e, "skew")
                        ? "deg"
                        : void 0;
                    })(t),
                s = R(e).get(t) || i;
              return (
                n && (n.transforms.list.set(t, s), (n.transforms.last = t)),
                r ? W(e, s, r) : s
              );
            })(e, t, r, n);
          case "css":
            return X(e, t, n);
          case "attribute":
            return $(e, t);
          default:
            return e[t] || 0;
        }
      }
      function K(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var r = H(e) || 0,
          i = parseFloat(t),
          s = parseFloat(e.replace(n[0], ""));
        switch (n[0][0]) {
          case "+":
            return i + s + r;
          case "-":
            return i - s + r;
          case "*":
            return i * s + r;
        }
      }
      function U(e, t) {
        if (S.col(e))
          return (function (e) {
            return S.rgb(e)
              ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
                ? "rgba(" + n[1] + ",1)"
                : t
              : S.hex(e)
              ? (function (e) {
                  var t = e.replace(
                      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      function (e, t, n, r) {
                        return t + t + n + n + r + r;
                      }
                    ),
                    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                  return (
                    "rgba(" +
                    parseInt(n[1], 16) +
                    "," +
                    parseInt(n[2], 16) +
                    "," +
                    parseInt(n[3], 16) +
                    ",1)"
                  );
                })(e)
              : S.hsl(e)
              ? (function (e) {
                  var t,
                    n,
                    r,
                    i =
                      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                        e
                      ),
                    s = parseInt(i[1], 10) / 360,
                    a = parseInt(i[2], 10) / 100,
                    o = parseInt(i[3], 10) / 100,
                    l = i[4] || 1;
                  function c(e, t, n) {
                    return (
                      n < 0 && (n += 1),
                      n > 1 && (n -= 1),
                      n < 1 / 6
                        ? e + 6 * (t - e) * n
                        : n < 0.5
                        ? t
                        : n < 2 / 3
                        ? e + (t - e) * (2 / 3 - n) * 6
                        : e
                    );
                  }
                  if (0 == a) t = n = r = o;
                  else {
                    var d = o < 0.5 ? o * (1 + a) : o + a - o * a,
                      u = 2 * o - d;
                    (t = c(u, d, s + 1 / 3)),
                      (n = c(u, d, s)),
                      (r = c(u, d, s - 1 / 3));
                  }
                  return (
                    "rgba(" +
                    255 * t +
                    "," +
                    255 * n +
                    "," +
                    255 * r +
                    "," +
                    l +
                    ")"
                  );
                })(e)
              : void 0;
            var t, n;
          })(e);
        if (/\s/g.test(e)) return e;
        var n = H(e),
          r = n ? e.substr(0, e.length - n.length) : e;
        return t ? r + t : r;
      }
      function Q(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function Z(e) {
        for (var t, n = e.points, r = 0, i = 0; i < n.numberOfItems; i++) {
          var s = n.getItem(i);
          i > 0 && (r += Q(t, s)), (t = s);
        }
        return r;
      }
      function J(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
          case "circle":
            return (function (e) {
              return 2 * Math.PI * $(e, "r");
            })(e);
          case "rect":
            return (function (e) {
              return 2 * $(e, "width") + 2 * $(e, "height");
            })(e);
          case "line":
            return (function (e) {
              return Q(
                { x: $(e, "x1"), y: $(e, "y1") },
                { x: $(e, "x2"), y: $(e, "y2") }
              );
            })(e);
          case "polyline":
            return Z(e);
          case "polygon":
            return (function (e) {
              var t = e.points;
              return Z(e) + Q(t.getItem(t.numberOfItems - 1), t.getItem(0));
            })(e);
        }
      }
      function ee(e, t) {
        var n = t || {},
          r =
            n.el ||
            (function (e) {
              for (var t = e.parentNode; S.svg(t) && S.svg(t.parentNode); )
                t = t.parentNode;
              return t;
            })(e),
          i = r.getBoundingClientRect(),
          s = $(r, "viewBox"),
          a = i.width,
          o = i.height,
          l = n.viewBox || (s ? s.split(" ") : [0, 0, a, o]);
        return {
          el: r,
          viewBox: l,
          x: l[0] / 1,
          y: l[1] / 1,
          w: a,
          h: o,
          vW: l[2],
          vH: l[3],
        };
      }
      function te(e, t, n) {
        function r(n) {
          void 0 === n && (n = 0);
          var r = t + n >= 1 ? t + n : 0;
          return e.el.getPointAtLength(r);
        }
        var i = ee(e.el, e.svg),
          s = r(),
          a = r(-1),
          o = r(1),
          l = n ? 1 : i.w / i.vW,
          c = n ? 1 : i.h / i.vH;
        switch (e.property) {
          case "x":
            return (s.x - i.x) * l;
          case "y":
            return (s.y - i.y) * c;
          case "angle":
            return (180 * Math.atan2(o.y - a.y, o.x - a.x)) / Math.PI;
        }
      }
      function ne(e, t) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          r = U(S.pth(e) ? e.totalLength : e, t) + "";
        return {
          original: r,
          numbers: r.match(n) ? r.match(n).map(Number) : [0],
          strings: S.str(e) || t ? r.split(n) : [],
        };
      }
      function re(e) {
        return D(e ? N(S.arr(e) ? e.map(z) : z(e)) : [], function (e, t, n) {
          return n.indexOf(e) === t;
        });
      }
      function ie(e) {
        var t = re(e);
        return t.map(function (e, n) {
          return {
            target: e,
            id: n,
            total: t.length,
            transforms: { list: R(e) },
          };
        });
      }
      function se(e, t) {
        var n = B(t);
        if (
          (/^spring/.test(n.easing) && (n.duration = C(n.easing)), S.arr(e))
        ) {
          var r = e.length;
          2 !== r || S.obj(e[0])
            ? S.fnc(t.duration) || (n.duration = t.duration / r)
            : (e = { value: e });
        }
        var i = S.arr(e) ? e : [e];
        return i
          .map(function (e, n) {
            var r = S.obj(e) && !S.pth(e) ? e : { value: e };
            return (
              S.und(r.delay) && (r.delay = n ? 0 : t.delay),
              S.und(r.endDelay) &&
                (r.endDelay = n === i.length - 1 ? t.endDelay : 0),
              r
            );
          })
          .map(function (e) {
            return F(e, n);
          });
      }
      var ae = {
        css: function (e, t, n) {
          return (e.style[t] = n);
        },
        attribute: function (e, t, n) {
          return e.setAttribute(t, n);
        },
        object: function (e, t, n) {
          return (e[t] = n);
        },
        transform: function (e, t, n, r, i) {
          if ((r.list.set(t, n), t === r.last || i)) {
            var s = "";
            r.list.forEach(function (e, t) {
              s += t + "(" + e + ") ";
            }),
              (e.style.transform = s);
          }
        },
      };
      function oe(e, t) {
        ie(e).forEach(function (e) {
          for (var n in t) {
            var r = Y(t[n], e),
              i = e.target,
              s = H(r),
              a = q(i, n, s, e),
              o = K(U(r, s || H(a)), a),
              l = V(i, n);
            ae[l](i, n, o, e.transforms, !0);
          }
        });
      }
      function le(e, t) {
        return D(
          N(
            e.map(function (e) {
              return t.map(function (t) {
                return (function (e, t) {
                  var n = V(e.target, t.name);
                  if (n) {
                    var r = (function (e, t) {
                        var n;
                        return e.tweens.map(function (r) {
                          var i = (function (e, t) {
                              var n = {};
                              for (var r in e) {
                                var i = Y(e[r], t);
                                S.arr(i) &&
                                  1 ===
                                    (i = i.map(function (e) {
                                      return Y(e, t);
                                    })).length &&
                                  (i = i[0]),
                                  (n[r] = i);
                              }
                              return (
                                (n.duration = parseFloat(n.duration)),
                                (n.delay = parseFloat(n.delay)),
                                n
                              );
                            })(r, t),
                            s = i.value,
                            a = S.arr(s) ? s[1] : s,
                            o = H(a),
                            l = q(t.target, e.name, o, t),
                            c = n ? n.to.original : l,
                            d = S.arr(s) ? s[0] : c,
                            u = H(d) || H(l),
                            p = o || u;
                          return (
                            S.und(a) && (a = c),
                            (i.from = ne(d, p)),
                            (i.to = ne(K(a, d), p)),
                            (i.start = n ? n.end : 0),
                            (i.end =
                              i.start + i.delay + i.duration + i.endDelay),
                            (i.easing = _(i.easing, i.duration)),
                            (i.isPath = S.pth(s)),
                            (i.isPathTargetInsideSVG =
                              i.isPath && S.svg(t.target)),
                            (i.isColor = S.col(i.from.original)),
                            i.isColor && (i.round = 1),
                            (n = i),
                            i
                          );
                        });
                      })(t, e),
                      i = r[r.length - 1];
                    return {
                      type: n,
                      property: t.name,
                      animatable: e,
                      tweens: r,
                      duration: i.end,
                      delay: r[0].delay,
                      endDelay: i.endDelay,
                    };
                  }
                })(e, t);
              });
            })
          ),
          function (e) {
            return !S.und(e);
          }
        );
      }
      function ce(e, t) {
        var n = e.length,
          r = function (e) {
            return e.timelineOffset ? e.timelineOffset : 0;
          },
          i = {};
        return (
          (i.duration = n
            ? Math.max.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.duration;
                })
              )
            : t.duration),
          (i.delay = n
            ? Math.min.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.delay;
                })
              )
            : t.delay),
          (i.endDelay = n
            ? i.duration -
              Math.max.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.duration - e.endDelay;
                })
              )
            : t.endDelay),
          i
        );
      }
      var de = 0,
        ue = [],
        pe = (function () {
          var e;
          function t(n) {
            for (var r = ue.length, i = 0; i < r; ) {
              var s = ue[i];
              s.paused ? (ue.splice(i, 1), r--) : (s.tick(n), i++);
            }
            e = i > 0 ? requestAnimationFrame(t) : void 0;
          }
          return (
            "undefined" != typeof document &&
              document.addEventListener("visibilitychange", function () {
                he.suspendWhenDocumentHidden &&
                  (fe()
                    ? (e = cancelAnimationFrame(e))
                    : (ue.forEach(function (e) {
                        return e._onDocumentVisibility();
                      }),
                      pe()));
              }),
            function () {
              e ||
                (fe() && he.suspendWhenDocumentHidden) ||
                !(ue.length > 0) ||
                (e = requestAnimationFrame(t));
            }
          );
        })();
      function fe() {
        return !!document && document.hidden;
      }
      function he(e) {
        void 0 === e && (e = {});
        var t,
          n = 0,
          r = 0,
          i = 0,
          s = 0,
          a = null;
        function o(e) {
          var t =
            window.Promise &&
            new Promise(function (e) {
              return (a = e);
            });
          return (e.finished = t), t;
        }
        var l = (function (e) {
          var t = G(v, e),
            n = G(y, e),
            r = (function (e, t) {
              var n = [],
                r = t.keyframes;
              for (var i in (r &&
                (t = F(
                  (function (e) {
                    for (
                      var t = D(
                          N(
                            e.map(function (e) {
                              return Object.keys(e);
                            })
                          ),
                          function (e) {
                            return S.key(e);
                          }
                        ).reduce(function (e, t) {
                          return e.indexOf(t) < 0 && e.push(t), e;
                        }, []),
                        n = {},
                        r = function (r) {
                          var i = t[r];
                          n[i] = e.map(function (e) {
                            var t = {};
                            for (var n in e)
                              S.key(n)
                                ? n == i && (t.value = e[n])
                                : (t[n] = e[n]);
                            return t;
                          });
                        },
                        i = 0;
                      i < t.length;
                      i++
                    )
                      r(i);
                    return n;
                  })(r),
                  t
                )),
              t))
                S.key(i) && n.push({ name: i, tweens: se(t[i], e) });
              return n;
            })(n, e),
            i = ie(e.targets),
            s = le(i, r),
            a = ce(s, n),
            o = de;
          return (
            de++,
            F(t, {
              id: o,
              children: [],
              animatables: i,
              animations: s,
              duration: a.duration,
              delay: a.delay,
              endDelay: a.endDelay,
            })
          );
        })(e);
        function c() {
          var e = l.direction;
          "alternate" !== e &&
            (l.direction = "normal" !== e ? "normal" : "reverse"),
            (l.reversed = !l.reversed),
            t.forEach(function (e) {
              return (e.reversed = l.reversed);
            });
        }
        function d(e) {
          return l.reversed ? l.duration - e : e;
        }
        function u() {
          (n = 0), (r = d(l.currentTime) * (1 / he.speed));
        }
        function p(e, t) {
          t && t.seek(e - t.timelineOffset);
        }
        function f(e) {
          for (var t = 0, n = l.animations, r = n.length; t < r; ) {
            var i = n[t],
              s = i.animatable,
              a = i.tweens,
              o = a.length - 1,
              c = a[o];
            o &&
              (c =
                D(a, function (t) {
                  return e < t.end;
                })[0] || c);
            for (
              var d = T(e - c.start - c.delay, 0, c.duration) / c.duration,
                u = isNaN(d) ? 1 : c.easing(d),
                p = c.to.strings,
                f = c.round,
                h = [],
                m = c.to.numbers.length,
                g = void 0,
                v = 0;
              v < m;
              v++
            ) {
              var y = void 0,
                b = c.to.numbers[v],
                w = c.from.numbers[v] || 0;
              (y = c.isPath
                ? te(c.value, u * b, c.isPathTargetInsideSVG)
                : w + u * (b - w)),
                f && ((c.isColor && v > 2) || (y = Math.round(y * f) / f)),
                h.push(y);
            }
            var E = p.length;
            if (E) {
              g = p[0];
              for (var x = 0; x < E; x++) {
                p[x];
                var S = p[x + 1],
                  M = h[x];
                isNaN(M) || (g += S ? M + S : M + " ");
              }
            } else g = h[0];
            ae[i.type](s.target, i.property, g, s.transforms),
              (i.currentValue = g),
              t++;
          }
        }
        function h(e) {
          l[e] && !l.passThrough && l[e](l);
        }
        function m(e) {
          var u = l.duration,
            m = l.delay,
            g = u - l.endDelay,
            v = d(e);
          (l.progress = T((v / u) * 100, 0, 100)),
            (l.reversePlayback = v < l.currentTime),
            t &&
              (function (e) {
                if (l.reversePlayback) for (var n = s; n--; ) p(e, t[n]);
                else for (var r = 0; r < s; r++) p(e, t[r]);
              })(v),
            !l.began && l.currentTime > 0 && ((l.began = !0), h("begin")),
            !l.loopBegan &&
              l.currentTime > 0 &&
              ((l.loopBegan = !0), h("loopBegin")),
            v <= m && 0 !== l.currentTime && f(0),
            ((v >= g && l.currentTime !== u) || !u) && f(u),
            v > m && v < g
              ? (l.changeBegan ||
                  ((l.changeBegan = !0),
                  (l.changeCompleted = !1),
                  h("changeBegin")),
                h("change"),
                f(v))
              : l.changeBegan &&
                ((l.changeCompleted = !0),
                (l.changeBegan = !1),
                h("changeComplete")),
            (l.currentTime = T(v, 0, u)),
            l.began && h("update"),
            e >= u &&
              ((r = 0),
              l.remaining && !0 !== l.remaining && l.remaining--,
              l.remaining
                ? ((n = i),
                  h("loopComplete"),
                  (l.loopBegan = !1),
                  "alternate" === l.direction && c())
                : ((l.paused = !0),
                  l.completed ||
                    ((l.completed = !0),
                    h("loopComplete"),
                    h("complete"),
                    !l.passThrough && "Promise" in window && (a(), o(l)))));
        }
        return (
          o(l),
          (l.reset = function () {
            var e = l.direction;
            (l.passThrough = !1),
              (l.currentTime = 0),
              (l.progress = 0),
              (l.paused = !0),
              (l.began = !1),
              (l.loopBegan = !1),
              (l.changeBegan = !1),
              (l.completed = !1),
              (l.changeCompleted = !1),
              (l.reversePlayback = !1),
              (l.reversed = "reverse" === e),
              (l.remaining = l.loop),
              (t = l.children);
            for (var n = (s = t.length); n--; ) l.children[n].reset();
            ((l.reversed && !0 !== l.loop) ||
              ("alternate" === e && 1 === l.loop)) &&
              l.remaining++,
              f(l.reversed ? l.duration : 0);
          }),
          (l._onDocumentVisibility = u),
          (l.set = function (e, t) {
            return oe(e, t), l;
          }),
          (l.tick = function (e) {
            (i = e), n || (n = i), m((i + (r - n)) * he.speed);
          }),
          (l.seek = function (e) {
            m(d(e));
          }),
          (l.pause = function () {
            (l.paused = !0), u();
          }),
          (l.play = function () {
            l.paused &&
              (l.completed && l.reset(),
              (l.paused = !1),
              ue.push(l),
              u(),
              pe());
          }),
          (l.reverse = function () {
            c(), (l.completed = !l.reversed), u();
          }),
          (l.restart = function () {
            l.reset(), l.play();
          }),
          (l.remove = function (e) {
            ge(re(e), l);
          }),
          l.reset(),
          l.autoplay && l.play(),
          l
        );
      }
      function me(e, t) {
        for (var n = t.length; n--; )
          j(e, t[n].animatable.target) && t.splice(n, 1);
      }
      function ge(e, t) {
        var n = t.animations,
          r = t.children;
        me(e, n);
        for (var i = r.length; i--; ) {
          var s = r[i],
            a = s.animations;
          me(e, a), a.length || s.children.length || r.splice(i, 1);
        }
        n.length || r.length || t.pause();
      }
      (he.version = "3.2.1"),
        (he.speed = 1),
        (he.suspendWhenDocumentHidden = !0),
        (he.running = ue),
        (he.remove = function (e) {
          for (var t = re(e), n = ue.length; n--; ) ge(t, ue[n]);
        }),
        (he.get = q),
        (he.set = oe),
        (he.convertPx = W),
        (he.path = function (e, t) {
          var n = S.str(e) ? I(e)[0] : e,
            r = t || 100;
          return function (e) {
            return {
              property: e,
              el: n,
              svg: ee(n),
              totalLength: J(n) * (r / 100),
            };
          };
        }),
        (he.setDashoffset = function (e) {
          var t = J(e);
          return e.setAttribute("stroke-dasharray", t), t;
        }),
        (he.stagger = function (e, t) {
          void 0 === t && (t = {});
          var n = t.direction || "normal",
            r = t.easing ? _(t.easing) : null,
            i = t.grid,
            s = t.axis,
            a = t.from || 0,
            o = "first" === a,
            l = "center" === a,
            c = "last" === a,
            d = S.arr(e),
            u = d ? parseFloat(e[0]) : parseFloat(e),
            p = d ? parseFloat(e[1]) : 0,
            f = H(d ? e[1] : e) || 0,
            h = t.start || 0 + (d ? u : 0),
            m = [],
            g = 0;
          return function (e, t, v) {
            if (
              (o && (a = 0),
              l && (a = (v - 1) / 2),
              c && (a = v - 1),
              !m.length)
            ) {
              for (var y = 0; y < v; y++) {
                if (i) {
                  var b = l ? (i[0] - 1) / 2 : a % i[0],
                    w = l ? (i[1] - 1) / 2 : Math.floor(a / i[0]),
                    T = b - (y % i[0]),
                    E = w - Math.floor(y / i[0]),
                    x = Math.sqrt(T * T + E * E);
                  "x" === s && (x = -T), "y" === s && (x = -E), m.push(x);
                } else m.push(Math.abs(a - y));
                g = Math.max.apply(Math, m);
              }
              r &&
                (m = m.map(function (e) {
                  return r(e / g) * g;
                })),
                "reverse" === n &&
                  (m = m.map(function (e) {
                    return s ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
                  }));
            }
            return (
              h + (d ? (p - u) / g : u) * (Math.round(100 * m[t]) / 100) + f
            );
          };
        }),
        (he.timeline = function (e) {
          void 0 === e && (e = {});
          var t = he(e);
          return (
            (t.duration = 0),
            (t.add = function (n, r) {
              var i = ue.indexOf(t),
                s = t.children;
              function a(e) {
                e.passThrough = !0;
              }
              i > -1 && ue.splice(i, 1);
              for (var o = 0; o < s.length; o++) a(s[o]);
              var l = F(n, G(y, e));
              l.targets = l.targets || e.targets;
              var c = t.duration;
              (l.autoplay = !1),
                (l.direction = t.direction),
                (l.timelineOffset = S.und(r) ? c : K(r, c)),
                a(t),
                t.seek(l.timelineOffset);
              var d = he(l);
              a(d), s.push(d);
              var u = ce(s, e);
              return (
                (t.delay = u.delay),
                (t.endDelay = u.endDelay),
                (t.duration = u.duration),
                t.seek(0),
                t.reset(),
                t.autoplay && t.play(),
                t
              );
            }),
            t
          );
        }),
        (he.easing = _),
        (he.penner = k),
        (he.random = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        });
      const ve = he;
      class ye {
        constructor(e) {
          (this.counter = e.counter),
            (this.intervalUpdated = e.intervalUpdated),
            this.init();
        }
        init() {
          if (null === this.counter) return null;
          (this.numCounter = Number(this.getNumCounter())),
            this.onIncrementDigits(),
            this.onAnimationEnd();
        }
        getNumCounter() {
          return this.counter.getAttribute("data-js-counter");
        }
        setNumCounter() {
          (this.numCounter = this.numCounter + 1),
            this.counter.setAttribute("data-js-counter", this.numCounter);
        }
        onPad(e, t) {
          let n = e + "";
          for (; n.length < t; ) n = "0" + n;
          return n;
        }
        onIncrementDigits() {
          setInterval(() => {
            this.setNumCounter(), this.onFlipDigits();
          }, this.intervalUpdated);
        }
        onAnimationEnd() {
          t(".digit", this.counter).forEach((t) => {
            let n = e("span", t);
            n.addEventListener(
              "animationend",
              () => {
                l(n.parentNode, "flip");
              },
              !1
            );
          });
        }
        onFlipDigits() {
          let e = t(".digit", this.counter);
          this.setNewDigits(e, this.numCounter), this.onAnimateDigits(e);
        }
        setNewDigits(t, n) {
          let r = this.onPad(n, t.length);
          t.forEach((t, n) => {
            let i = e("span", t);
            t.setAttribute("data-js-count-from", i.textContent),
              t.setAttribute("data-js-count-to", r[n]),
              i.setAttribute("data-js-count-from", i.textContent),
              i.setAttribute("data-js-count-to", r[n]),
              (i.textContent = r[n]);
          });
        }
        onAnimateDigits(t) {
          t.forEach((t) => {
            let n = e("span", t);
            t.getAttribute("data-js-count-from") !== n.textContent &&
              o(t, "flip");
          });
        }
      }
      window.addEventListener("load", () => {
        new ye({
          counter: e("#_6etih86kf [data-js-counter]"),
          intervalUpdated: 2400,
        });
      }),
        n(5988);
      const be = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { root: null, rootMargin: "0px", threshold: 0.1 };
        if (null === n) return;
        let i = [];
        if (
          (Array.isArray(e)
            ? e.forEach((e) => {
                e instanceof HTMLElement
                  ? i.push(e)
                  : NodeList.prototype.isPrototypeOf(e)
                  ? e.forEach((e) => {
                      e instanceof HTMLElement ? i.push(e) : i.push(t(e));
                    })
                  : i.push(t(e));
              })
            : NodeList.prototype.isPrototypeOf(e)
            ? e.forEach((e) => {
                e instanceof HTMLElement ? i.push(e) : i.push(t(e));
              })
            : e instanceof HTMLElement
            ? i.push(e)
            : i.push(t(e)),
          null !== i)
        )
          try {
            let e = new IntersectionObserver(n, r);
            i.forEach((t) => {
              e.observe(t);
            });
          } catch (e) {
            console.error(
              "ERROR: Error in the creation of the 'IntersectionObserver'.\n      ".concat(
                e
              )
            );
          }
      };
      t("[data-js-hover]").forEach((t) => {
        let n = e("img", t);
        if (null !== n) {
          let e = n.clientWidth,
            r = n.clientHeight;
          t.addEventListener("mousemove", (t) => {
            const { layerX: i, layerY: s } = t,
              a = ((i - e / 2) / e) * 20,
              o =
                "\n        translate(-50%, -50%)\n        perspective(800px)\n        scale(1.08)\n        rotateX("
                  .concat(((s - r / 2) / r) * 20, "deg)\n        rotateY(")
                  .concat(a, "deg)\n      ");
            n.style.transform = o;
          }),
            t.addEventListener("mouseout", (e) => {
              n.style.transform =
                "\n        translate(-50%, -50%)\n        perspective(800px)\n        scale(1)\n        rotateX(0)\n        rotateY(0)\n      ";
            });
        }
      });
      class we {
        constructor() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = { ...t.class },
            r = 0 === Object.entries(n).length ? { toggle: "closed" } : n;
          (this.source = e(t.source) || null),
            (this.sourceSelector = t.source || ""),
            (this.target = e(t.target) || null),
            (this.targetSelector = t.target || ""),
            (this.class = r),
            (this.changeText = t.changeText || !1),
            (this.textSelector = t.textSelector || null),
            (this.textOpen = t.textOpen || "open"),
            (this.textClose = t.textClose || "close"),
            this.onInit() ||
              this.onHandlerClick(this.source, this.class.toggle);
        }
        onInit() {
          if (null === this.source && null === this.target)
            return (
              console.error(
                "ERROR: Error in the initialization of the dropdown"
              ),
              !0
            );
        }
        onHandlerClick(e, t) {
          null !== e &&
            "" !== e &&
            e.addEventListener("click", (e) => {
              e.preventDefault(),
                a(this.target, "".concat(t)),
                this.changeText && this.onChangeText(t);
            });
        }
        onChangeText(e) {
          this.target.classList.contains(e)
            ? this.onUpdatedText(this.source, this.textSelector, this.textClose)
            : this.onUpdatedText(this.source, this.textSelector, this.textOpen);
        }
        onUpdatedText(t, n, r) {
          if (null === n) t.innerText = r;
          else {
            let i = e(n, t);
            if (null === i) return;
            i.innerText = r;
          }
        }
      }
      e("#box-primary-nav") &&
        (new we({
          source: 'a[href="#nav-primary"]',
          target: "#box-primary-nav",
          changeText: !1,
        }),
        new we({
          source: "#close-primary-nav",
          target: "#box-primary-nav",
          changeText: !1,
        }));
      var Te = n(8317),
        Ee = n(4712);
      function xe() {
        return (
          (xe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          xe.apply(this, arguments)
        );
      }
      function Se(e, t) {
        let n = e % t;
        return ((t > 0 && n < 0) || (t < 0 && n > 0)) && (n += t), n;
      }
      const Me = ["duration", "easing"];
      class Ce {
        to(e, t = {}) {
          let { duration: n = 1, easing: r = (e) => e } = t,
            i = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                s = Object.keys(e);
              for (r = 0; r < s.length; r++)
                t.indexOf((n = s[r])) >= 0 || (i[n] = e[n]);
              return i;
            })(t, Me);
          (this.target = e),
            (this.fromKeys = xe({}, i)),
            (this.toKeys = xe({}, i)),
            (this.keys = Object.keys(xe({}, i))),
            this.keys.forEach((t) => {
              this.fromKeys[t] = e[t];
            }),
            (this.duration = n),
            (this.easing = r),
            (this.currentTime = 0),
            (this.isRunning = !0);
        }
        stop() {
          this.isRunning = !1;
        }
        raf(e) {
          if (!this.isRunning) return;
          this.currentTime = Math.min(this.currentTime + e, this.duration);
          const t = this.progress >= 1 ? 1 : this.easing(this.progress);
          this.keys.forEach((e) => {
            const n = this.fromKeys[e];
            this.target[e] = n + (this.toKeys[e] - n) * t;
          }),
            1 === t && this.stop();
        }
        get progress() {
          return this.currentTime / this.duration;
        }
      }
      class Pe extends Te.TinyEmitter {
        constructor({
          duration: e = 1.2,
          easing: t = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          smooth: n = !0,
          mouseMultiplier: r = 1,
          smoothTouch: i = !1,
          touchMultiplier: s = 2,
          direction: a = "vertical",
          gestureDirection: o = "vertical",
          infinite: l = !1,
          wrapper: c = window,
          content: d = document.body,
        } = {}) {
          var u, p, f;
          super(),
            (this.onWindowResize = () => {
              (this.wrapperWidth = window.innerWidth),
                (this.wrapperHeight = window.innerHeight);
            }),
            (this.onWrapperResize = ([e]) => {
              if (e) {
                const t = e.contentRect;
                (this.wrapperWidth = t.width), (this.wrapperHeight = t.height);
              }
            }),
            (this.onContentResize = ([e]) => {
              if (e) {
                const t = e.contentRect;
                (this.contentWidth = t.width), (this.contentHeight = t.height);
              }
            }),
            (this.onVirtualScroll = ({
              deltaY: e,
              deltaX: t,
              originalEvent: n,
            }) => {
              if (
                ("vertical" === this.gestureDirection && 0 === e) ||
                ("horizontal" === this.gestureDirection && 0 === t)
              )
                return;
              const r = !!n
                .composedPath()
                .find(
                  (e) => e.hasAttribute && e.hasAttribute("data-lenis-prevent")
                );
              if (n.ctrlKey || r) return;
              if (
                ((this.smooth = n.changedTouches
                  ? this.smoothTouch
                  : this.options.smooth),
                this.stopped)
              )
                return void n.preventDefault();
              if (!this.smooth) return;
              if (4 === n.buttons) return;
              this.smooth && n.preventDefault();
              let i = 0;
              (i =
                "both" === this.gestureDirection
                  ? t + e
                  : "horizontal" === this.gestureDirection
                  ? t
                  : e),
                (this.targetScroll -= i),
                this.scrollTo(this.targetScroll);
            }),
            (this.onScroll = (e) => {
              (this.isScrolling && this.smooth) ||
                ((this.targetScroll =
                  this.scroll =
                  this.lastScroll =
                    this.wrapperNode[this.scrollProperty]),
                this.notify());
            }),
            (window.lenisVersion = "0.2.28"),
            (this.options = {
              duration: e,
              easing: t,
              smooth: n,
              mouseMultiplier: r,
              smoothTouch: i,
              touchMultiplier: s,
              direction: a,
              gestureDirection: o,
              infinite: l,
              wrapper: c,
              content: d,
            }),
            (this.duration = e),
            (this.easing = t),
            (this.smooth = n),
            (this.mouseMultiplier = r),
            (this.smoothTouch = i),
            (this.touchMultiplier = s),
            (this.direction = a),
            (this.gestureDirection = o),
            (this.infinite = l),
            (this.wrapperNode = c),
            (this.contentNode = d),
            this.wrapperNode.addEventListener("scroll", this.onScroll),
            this.wrapperNode === window
              ? (this.wrapperNode.addEventListener(
                  "resize",
                  this.onWindowResize
                ),
                this.onWindowResize())
              : ((this.wrapperHeight = this.wrapperNode.offsetHeight),
                (this.wrapperWidth = this.wrapperNode.offsetWidth),
                (this.wrapperObserver = new ResizeObserver(
                  this.onWrapperResize
                )),
                this.wrapperObserver.observe(this.wrapperNode)),
            (this.contentHeight = this.contentNode.offsetHeight),
            (this.contentWidth = this.contentNode.offsetWidth),
            (this.contentObserver = new ResizeObserver(this.onContentResize)),
            this.contentObserver.observe(this.contentNode),
            (this.targetScroll =
              this.scroll =
              this.lastScroll =
                this.wrapperNode[this.scrollProperty]),
            (this.animate = new Ce());
          const h =
            (null == (u = navigator) || null == (p = u.userAgentData)
              ? void 0
              : p.platform) ||
            (null == (f = navigator) ? void 0 : f.platform) ||
            "unknown";
          (this.virtualScroll = new Ee({
            el: this.wrapperNode,
            firefoxMultiplier: 50,
            mouseMultiplier:
              this.mouseMultiplier *
              (h.includes("Win") || h.includes("Linux") ? 0.84 : 0.4),
            touchMultiplier: this.touchMultiplier,
            passive: !1,
            useKeyboard: !1,
            useTouch: !0,
          })),
            this.virtualScroll.on(this.onVirtualScroll);
        }
        get scrollProperty() {
          let e;
          return (
            (e =
              this.wrapperNode === window
                ? "horizontal" === this.direction
                  ? "scrollX"
                  : "scrollY"
                : "horizontal" === this.direction
                ? "scrollLeft"
                : "scrollTop"),
            e
          );
        }
        start() {
          let e = this.wrapperNode;
          this.wrapperNode === window && (e = document.documentElement),
            e.classList.remove("lenis-stopped"),
            (this.stopped = !1);
        }
        stop() {
          let e = this.wrapperNode;
          this.wrapperNode === window && (e = document.documentElement),
            e.classList.add("lenis-stopped"),
            (this.stopped = !0),
            this.animate.stop();
        }
        destroy() {
          var e;
          this.wrapperNode === window &&
            this.wrapperNode.removeEventListener("resize", this.onWindowResize),
            this.wrapperNode.removeEventListener("scroll", this.onScroll),
            this.virtualScroll.destroy(),
            null == (e = this.wrapperObserver) || e.disconnect(),
            this.contentObserver.disconnect();
        }
        get limit() {
          return "horizontal" === this.direction
            ? this.contentWidth - this.wrapperWidth
            : this.contentHeight - this.wrapperHeight;
        }
        raf(e) {
          const t = e - (this.now || 0);
          (this.now = e),
            !this.stopped &&
              this.smooth &&
              ((this.lastScroll = this.scroll),
              this.animate.raf(0.001 * t),
              this.scroll === this.targetScroll &&
                (this.lastScroll = this.scroll),
              this.isScrolling && (this.setScroll(this.scroll), this.notify()),
              (this.isScrolling = this.scroll !== this.targetScroll));
        }
        get velocity() {
          return this.scroll - this.lastScroll;
        }
        setScroll(e) {
          let t = this.infinite ? Se(e, this.limit) : e;
          "horizontal" === this.direction
            ? this.wrapperNode.scrollTo(t, 0)
            : this.wrapperNode.scrollTo(0, t);
        }
        notify() {
          let e = this.infinite ? Se(this.scroll, this.limit) : this.scroll;
          this.emit("scroll", {
            scroll: e,
            limit: this.limit,
            velocity: this.velocity,
            direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1,
            progress: e / this.limit,
          });
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            duration: r = this.duration,
            easing: i = this.easing,
          } = {}
        ) {
          if (null == e || this.stopped) return;
          let s;
          if ("number" == typeof e) s = e;
          else if ("top" === e || "#top" === e) s = 0;
          else if ("bottom" === e) s = this.limit;
          else {
            let t;
            if ("string" == typeof e) t = document.querySelector(e);
            else {
              if (null == e || !e.nodeType) return;
              t = e;
            }
            if (!t) return;
            let n = 0;
            if (this.wrapperNode !== window) {
              const e = this.wrapperNode.getBoundingClientRect();
              n = "horizontal" === this.direction ? e.left : e.top;
            }
            const r = t.getBoundingClientRect();
            s =
              ("horizontal" === this.direction ? r.left : r.top) +
              this.scroll -
              n;
          }
          (s += t),
            (this.targetScroll = this.infinite
              ? s
              : Math.max(0, Math.min(s, this.limit))),
            !this.smooth || n
              ? (this.animate.stop(),
                (this.scroll = this.lastScroll = this.targetScroll),
                this.setScroll(this.targetScroll))
              : this.animate.to(this, {
                  duration: r,
                  easing: i,
                  scroll: this.targetScroll,
                });
        }
      }
      const Le = new Pe(
        {
          OPTIONS_HOME: {
            duration: 2,
            easing: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
            smooth: !0,
            direction: "vertical",
          },
          OPTIONS_DEFAULT: {
            duration: 1.4,
            easing: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
            smooth: !0,
            direction: "vertical",
          },
        }[TEMPLATE_PAGE]
      );
      var Oe;
      (Oe = Le),
        requestAnimationFrame(function e(t) {
          Oe.raf(t), requestAnimationFrame(e);
        });
      const Ae = { scrollPos: 0, direction: 1 },
        ke = () => {
          document.body.getBoundingClientRect().top > Ae.scrollPos
            ? (Ae.direction = 1)
            : (Ae.direction = -1),
            (Ae.scrollPos = document.body.getBoundingClientRect().top);
        };
      let _e = 0,
        Ie = i,
        De = s;
      const Ne = () => {
        let t = window.pageYOffset || document.documentElement.scrollTop,
          n = e(r);
        t > 100
          ? t > _e
            ? (o(n, Ie), l(n, De))
            : (l(n, Ie), o(n, De))
          : (l(n, Ie), l(n, De)),
          (_e = t <= 0 ? 0 : t);
      };
      Ne(),
        ke(),
        window.addEventListener("scroll", function () {
          Ne(), ke();
        });
      const ze = {};
      e("#_soyh5qm8e") &&
        ((ze.PATH_MEET_1 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-meeting-1"
        )),
        (ze.PATH_WEDD_1 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-wedding-1"
        )),
        (ze.PATH_CAKE_1 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-cake-1"
        )),
        (ze.PATH_MEET_2 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-meeting-2"
        )),
        (ze.PATH_WEDD_2 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-wedding-2"
        )),
        (ze.PATH_CAKE_2 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-cake-2"
        )),
        (ze.PATH_MEET_3 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-meeting-3"
        )),
        (ze.PATH_WEDD_3 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-wedding-3"
        )),
        (ze.PATH_CAKE_3 = ve.path(
          "#_soyh5qm8e svg.template-belt .path-cake-3"
        )));
      const je = ze,
        Be = e(".bl-benefits-template--icon.icon--shadow-box"),
        Ge = e(".bl-benefits-template--icon.icon--box"),
        Fe = e(".bl-benefits-template--icon.icon--lever"),
        He = e(".bl-benefits-template--icon.icon--on"),
        Ye = e(".bl-benefits-template--icon.icon--off"),
        $e = e(".bl-benefits-template--icon.icon--shadow-belt"),
        We = e(".bl-benefits-template--icon.icon--belt"),
        Xe = e(".bl-benefits-template--icon.icon--shadow-hotel"),
        Ve = e(".bl-benefits-template--icon.icon--hotel"),
        Re = t('[data-js="title"].bl-benefits-items--box-title'),
        qe = t('[data-js="title"].item--550861'),
        Ke = t('[data-js="title"].item--550862'),
        Ue = t('[data-js="title"].item--550863'),
        Qe = t('[data-js="title"].item--550864'),
        Ze = t('[data-js="title"].item--550865'),
        Je = t('[data-js="title"].item--550866'),
        et = t('[data-js="title"].item--550867'),
        tt = t('[data-js="title"].item--550868'),
        nt = t('[data-js="title"].item--551178'),
        rt = t('[data-js="title"].item--551179'),
        it = e(".bl-benefits-template--figure.figure--550861-0"),
        st = e(".bl-benefits-template--figure.figure--550863-0"),
        at = e(".bl-benefits-template--figure.figure--550866-0"),
        ot = e(".bl-benefits-template--figure.figure--550862-0"),
        lt = e(".bl-benefits-template--figure.figure--550865-0"),
        ct = e(".bl-benefits-template--figure.figure--550867-0"),
        dt = e(".bl-benefits-template--figure.figure--550862-1"),
        ut = e(".bl-benefits-template--figure.figure--550865-1"),
        pt = e(".bl-benefits-template--figure.figure--550867-1"),
        ft = { loop: !1, autoplay: !1 },
        ht = {};
      if (e("#_soyh5qm8e")) {
        const {
          PATH_MEET_1: e,
          PATH_CAKE_1: t,
          PATH_WEDD_1: n,
          PATH_MEET_2: r,
          PATH_CAKE_2: i,
          PATH_WEDD_2: s,
          PATH_MEET_3: a,
          PATH_WEDD_3: c,
          PATH_CAKE_3: d,
        } = je;
        (ht.ANI_BELT = ve
          .timeline({
            ...ft,
            easing: "easeInOutSine",
            duration: 820,
            delay: ve.stagger(80),
            update: function (e) {
              e.progress >= 70 && l(document.body, "overflow-element");
            },
          })
          .add({ targets: Be, opacity: 1, translateY: [-80, 8, -16, 0] })
          .add(
            { targets: Ge, opacity: [0, 0.6, 1], translateY: [-80, 8, -16, 0] },
            "-=540"
          )
          .add(
            { targets: $e, opacity: 1, translateY: [-80, 8, -12, 0] },
            "-=580"
          )
          .add(
            { targets: We, opacity: [0, 0.6, 1], translateY: [-80, 8, -12, 0] },
            "-=640"
          )
          .add(
            {
              targets: Fe,
              opacity: { value: 1, duration: 400 },
              translateY: 0,
            },
            "-=800"
          )
          .add({ targets: He, opacity: 0.4 }, "-=300")
          .add({ targets: Ye, opacity: 1 }, "-=400")
          .add(
            { targets: Fe, duration: 600, translateY: [0, "-128%"] },
            "-=1180"
          )
          .add({ targets: Ye, opacity: 0.4 }, "-=200")
          .add({ targets: He, opacity: 1 }, "-=400")
          .add(
            { targets: it, duration: 500, opacity: 1, top: [-80, -58] },
            "-=1800"
          )),
          (ht.ANI_PICTURE_1 = ve
            .timeline({ ...ft, easing: "easeOutQuad", duration: 5e3 })
            .add({ targets: it, translateX: e("x"), translateY: e("y") })
            .add({ targets: dt, translateX: t("x"), translateY: t("y") }, 1e3)
            .add({ targets: ot, translateX: n("x"), translateY: n("y") }, 2e3)),
          (ht.ANI_PICTURE_2 = ve
            .timeline({ ...ft, easing: "easeOutQuad", duration: 5e3 })
            .add({ targets: st, translateX: r("x"), translateY: r("y") })),
          (ht.ANI_PICTURE_3 = ve
            .timeline({ ...ft, easing: "easeOutQuad", duration: 6e3 })
            .add({ targets: ut, translateX: i("x"), translateY: i("y") })
            .add(
              { targets: lt, translateX: s("x"), translateY: s("y") },
              "-=5400"
            )),
          (ht.ANI_PICTURE_4 = ve
            .timeline({
              ...ft,
              easing: "easeOutQuad",
              duration: 7e3,
              update: function (e) {
                e.progress >= 32 &&
                  (o(Xe, "icon--visible"), o(Ve, "icon--visible"));
              },
            })
            .add({ targets: at, translateX: a("x"), translateY: a("y") })
            .add(
              { targets: ct, translateX: c("x"), translateY: c("y") },
              "-=5000"
            )
            .add(
              { targets: pt, translateX: d("x"), translateY: d("y") },
              "-=5800"
            )),
          (ht.ANI_PICTURE_ALL = ve
            .timeline({ ...ft, easing: "easeOutQuad", duration: 8e3 })
            .add({ targets: it, translateX: e("x"), translateY: e("y") }, 0)
            .add({ targets: dt, translateX: t("x"), translateY: t("y") }, 10)
            .add({ targets: ot, translateX: n("x"), translateY: n("y") }, 20)
            .add({ targets: st, translateX: r("x"), translateY: r("y") }, 50)
            .add({ targets: ut, translateX: i("x"), translateY: i("y") }, 70)
            .add({ targets: lt, translateX: s("x"), translateY: s("y") }, 80)
            .add({ targets: at, translateX: a("x"), translateY: a("y") }, 100)
            .add(
              { targets: pt, translateX: d("x"), translateY: d("y") },
              "-=8400"
            )
            .add(
              { targets: ct, translateX: c("x"), translateY: c("y") },
              "-=8000"
            ));
      }
      const mt = ht;
      function gt(e, t) {
        e.forEach((e) => {
          e.isIntersecting && e.target && o(e.target, "anime-title--visible");
        });
      }
      function vt(e, t) {
        e.forEach((e) => {
          e.isIntersecting && e.target && o(e.target, "icon--visible");
        });
      }
      let yt = [Re, qe, Ke, Ue, Qe, Ze, Je, et, tt, nt, rt],
        bt = [Xe, Ve],
        wt = e("body#home");
      wt &&
        !u &&
        (function () {
          const {
            ANI_BELT: n,
            ANI_PICTURE_1: r,
            ANI_PICTURE_2: i,
            ANI_PICTURE_3: s,
            ANI_PICTURE_4: a,
            ANI_PICTURE_ALL: l,
          } = mt;
          n.play(),
            n.finished.then(() => {
              let e = t(".bl-benefits-template--figure");
              o(e, "figure--visible");
            }),
            be(yt, gt, {
              root: null,
              rootMargin: "-180px 200px",
              threshold: 0.8,
            }),
            be(bt, vt, { root: null, rootMargin: "0px", threshold: 0.6 }),
            Le.on("scroll", (t) => {
              let { scroll: n, limit: r, progress: i } = t,
                s = e(
                  ".bl-benefits-items--box-title.anime-title.anime-title--visible"
                );
              null !== s && l.seek(Mt(s, 8e3, 200) * l.duration);
            });
        })(),
        wt &&
          u &&
          (function () {
            let e = t(".bl-benefits-template--figure");
            o(e, "figure--visible"),
              be(yt, gt, {
                root: null,
                rootMargin: "-180px 200px",
                threshold: 0.8,
              }),
              be(bt, vt, { root: null, rootMargin: "0px", threshold: 0.6 });
          })();
      const Tt = {
          solution1: e(".bl-solution-points-solution.solution--550859"),
          solution2: e(".bl-solution-points-solution.solution--550869"),
          solution3: e(".bl-solution-points-solution.solution--550870"),
          solution4: e(".bl-solution-points-solution.solution--550871"),
          solution5: e(".bl-solution-points-solution.solution--550872"),
          solution6: e(".bl-solution-points-solution.solution--550873"),
          solution7: e(".bl-solution-points-solution.solution--550874"),
        },
        Et = {
          opacity1: {
            value: 0,
            delay: ve.random(1600, 2e3),
            duration: ve.random(3e3, 4e3),
            easing: "easeInOutBack",
          },
          scale1: {
            value: 0.7,
            duration: ve.random(3e3, 4e3),
            easing: "easeInOutSine",
          },
          translateY1: {
            value: 380,
            duration: ve.random(3e3, 4e3),
            easing: "easeInOutSine",
          },
          translateY2: {
            value: 480,
            duration: ve.random(3e3, 5e3),
            easing: "easeInOutSine",
          },
          translateX1: {
            value: ve.random(100, 150),
            duration: ve.random(3e3, 4e3),
            easing: "easeInOutSine",
          },
          translateX2: {
            value: -ve.random(100, 150),
            duration: ve.random(3e3, 4e3),
            easing: "easeInOutSine",
          },
          translateX2: {
            value: -ve.random(100, 150),
            duration: ve.random(3e3, 4e3),
            easing: "easeInOutSine",
          },
        },
        xt = ve
          .timeline({
            loop: !1,
            autoplay: !1,
            duration: 5e3,
            easing: "easeInOutBack",
            delay: function (e, t) {
              return 200 * t;
            },
            direction: "alternate",
          })
          .add(
            {
              targets: Tt.solution1,
              translateX: { ...Et.translateX1 },
              translateY: { ...Et.translateY2 },
              scale: { ...Et.scale1 },
              opacity: { ...Et.opacity1 },
            },
            ve.random(200, 500)
          )
          .add(
            {
              targets: Tt.solution2,
              translateX: { ...Et.translateX3 },
              translateY: { ...Et.translateY2 },
              scale: { ...Et.scale1 },
              opacity: { ...Et.opacity1 },
            },
            ve.random(200, 500)
          )
          .add(
            {
              targets: Tt.solution3,
              translateX: { ...Et.translateX3 },
              translateY: { ...Et.translateY2 },
              scale: { ...Et.scale1 },
              opacity: { ...Et.opacity1 },
            },
            ve.random(200, 500)
          )
          .add(
            {
              targets: Tt.solution4,
              translateX: { ...Et.translateX2 },
              translateY: { ...Et.translateY2 },
              scale: { ...Et.scale1 },
              opacity: { ...Et.opacity1 },
            },
            ve.random(200, 500)
          )
          .add(
            {
              targets: Tt.solution5,
              opacity: { ...Et.opacity1 },
              scale: { ...Et.scale1 },
              translateY: { ...Et.translateY1 },
              translateX: { ...Et.translateX1 },
            },
            ve.random(200, 600)
          )
          .add(
            {
              targets: Tt.solution6,
              opacity: { ...Et.opacity1 },
              scale: { ...Et.scale1 },
              translateY: { ...Et.translateY1 },
            },
            ve.random(200, 600)
          )
          .add(
            {
              targets: Tt.solution7,
              opacity: { ...Et.opacity1 },
              scale: { ...Et.scale1 },
              translateY: { ...Et.translateY1 },
              translateX: { ...Et.translateX2 },
            },
            ve.random(200, 600)
          );
      let St = e("#_vee3w1wqx");
      null === St ||
        u ||
        Le.on("scroll", (e) => {
          let { scroll: t, limit: n, progress: r } = e;
          xt.seek(Mt(St, 1e3, 180) * xt.duration);
        });
      const Mt = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return (window.scrollY - e.offsetTop + n) / t;
      };
      function Ct(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function Pt(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          void 0 === e[n]
            ? (e[n] = t[n])
            : Ct(t[n]) &&
              Ct(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              Pt(e[n], t[n]);
        });
      }
      document.onreadystatechange = function () {
        Le.scrollTo("body", { duration: 1 }),
          "complete" === document.readyState &&
            (document.documentElement.scrollTop = 0);
      };
      const Lt = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function Ot() {
        const e = "undefined" != typeof document ? document : {};
        return Pt(e, Lt), e;
      }
      const At = {
        document: Lt,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function kt() {
        const e = "undefined" != typeof window ? window : {};
        return Pt(e, At), e;
      }
      function _t(e, t = 0) {
        return setTimeout(e, t);
      }
      function It() {
        return Date.now();
      }
      function Dt(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Nt(...e) {
        const t = Object(e[0]),
          n = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
          const s = e[i];
          if (
            null != s &&
            ((r = s),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? r instanceof HTMLElement
              : r && (1 === r.nodeType || 11 === r.nodeType)))
          ) {
            const e = Object.keys(Object(s)).filter((e) => n.indexOf(e) < 0);
            for (let n = 0, r = e.length; n < r; n += 1) {
              const r = e[n],
                i = Object.getOwnPropertyDescriptor(s, r);
              void 0 !== i &&
                i.enumerable &&
                (Dt(t[r]) && Dt(s[r])
                  ? s[r].__swiper__
                    ? (t[r] = s[r])
                    : Nt(t[r], s[r])
                  : !Dt(t[r]) && Dt(s[r])
                  ? ((t[r] = {}),
                    s[r].__swiper__ ? (t[r] = s[r]) : Nt(t[r], s[r]))
                  : (t[r] = s[r]));
            }
          }
        }
        var r;
        return t;
      }
      function zt(e, t, n) {
        e.style.setProperty(t, n);
      }
      function jt({ swiper: e, targetPosition: t, side: n }) {
        const r = kt(),
          i = -e.translate;
        let s,
          a = null;
        const o = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > i ? "next" : "prev",
          c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
          d = () => {
            (s = new Date().getTime()), null === a && (a = s);
            const l = Math.max(Math.min((s - a) / o, 1), 0),
              u = 0.5 - Math.cos(l * Math.PI) / 2;
            let p = i + u * (t - i);
            if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), c(p, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [n]: p });
                }),
                void r.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = r.requestAnimationFrame(d);
          };
        d();
      }
      function Bt(e) {
        return (
          e.querySelector(".swiper-slide-transform") ||
          (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
          e
        );
      }
      function Gt(e, t = "") {
        return [...e.children].filter((e) => e.matches(t));
      }
      function Ft(e, t = []) {
        const n = document.createElement(e);
        return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
      }
      function Ht(e, t) {
        return kt().getComputedStyle(e, null).getPropertyValue(t);
      }
      function Yt(e) {
        let t,
          n = e;
        if (n) {
          for (t = 0; null !== (n = n.previousSibling); )
            1 === n.nodeType && (t += 1);
          return t;
        }
      }
      function $t(e, t) {
        const n = [];
        let r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
        return n;
      }
      function Wt(e, t, n) {
        const r = kt();
        return n
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      let Xt, Vt, Rt;
      function qt() {
        return (
          Xt ||
            (Xt = (function () {
              const e = kt(),
                t = Ot();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          Xt
        );
      }
      const Kt = {
          on(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;
            const i = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                r.eventsListeners[e] || (r.eventsListeners[e] = []),
                  r.eventsListeners[e][i](t);
              }),
              r
            );
          },
          once(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;
            function i(...n) {
              r.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy,
                t.apply(r, n);
            }
            return (i.__emitterProxy = t), r.on(e, i, n);
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const r = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
              n
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed
              ? n
              : n.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((r, i) => {
                        (r === t ||
                          (r.__emitterProxy && r.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(i, 1);
                      });
                }),
                n)
              : n;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let n, r, i;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
                : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
              r.unshift(i),
              (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(i, [e, ...r]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(i, r);
                    });
              }),
              t
            );
          },
        },
        Ut = {
          updateSize: function () {
            const e = this;
            let t, n;
            const r = e.el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : r.clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : r.clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(Ht(r, "padding-left") || 0, 10) -
                  parseInt(Ht(r, "padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(Ht(r, "padding-top") || 0, 10) -
                  parseInt(Ht(r, "padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            const r = e.params,
              {
                wrapperEl: i,
                slidesEl: s,
                size: a,
                rtlTranslate: o,
                wrongRTL: l,
              } = e,
              c = e.virtual && r.virtual.enabled,
              d = c ? e.virtual.slides.length : e.slides.length,
              u = Gt(s, `.${e.params.slideClass}, swiper-slide`),
              p = c ? e.virtual.slides.length : u.length;
            let f = [];
            const h = [],
              m = [];
            let g = r.slidesOffsetBefore;
            "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
            let v = r.slidesOffsetAfter;
            "function" == typeof v && (v = r.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length,
              b = e.slidesGrid.length;
            let w = r.spaceBetween,
              T = -g,
              E = 0,
              x = 0;
            if (void 0 === a) return;
            "string" == typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * a),
              (e.virtualSize = -w),
              u.forEach((e) => {
                o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                  (e.style.marginBottom = ""),
                  (e.style.marginTop = "");
              }),
              r.centeredSlides &&
                r.cssMode &&
                (zt(i, "--swiper-centered-offset-before", ""),
                zt(i, "--swiper-centered-offset-after", ""));
            const S = r.grid && r.grid.rows > 1 && e.grid;
            let M;
            S && e.grid.initSlides(p);
            const C =
              "auto" === r.slidesPerView &&
              r.breakpoints &&
              Object.keys(r.breakpoints).filter(
                (e) => void 0 !== r.breakpoints[e].slidesPerView
              ).length > 0;
            for (let i = 0; i < p; i += 1) {
              let s;
              if (
                ((M = 0),
                u[i] && (s = u[i]),
                S && e.grid.updateSlide(i, s, p, t),
                !u[i] || "none" !== Ht(s, "display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  C && (u[i].style[t("width")] = "");
                  const a = getComputedStyle(s),
                    o = s.style.transform,
                    l = s.style.webkitTransform;
                  if (
                    (o && (s.style.transform = "none"),
                    l && (s.style.webkitTransform = "none"),
                    r.roundLengths)
                  )
                    M = e.isHorizontal()
                      ? Wt(s, "width", !0)
                      : Wt(s, "height", !0);
                  else {
                    const e = n(a, "width"),
                      t = n(a, "padding-left"),
                      r = n(a, "padding-right"),
                      i = n(a, "margin-left"),
                      o = n(a, "margin-right"),
                      l = a.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) M = e + i + o;
                    else {
                      const { clientWidth: n, offsetWidth: a } = s;
                      M = e + t + r + i + o + (a - n);
                    }
                  }
                  o && (s.style.transform = o),
                    l && (s.style.webkitTransform = l),
                    r.roundLengths && (M = Math.floor(M));
                } else
                  (M = (a - (r.slidesPerView - 1) * w) / r.slidesPerView),
                    r.roundLengths && (M = Math.floor(M)),
                    u[i] && (u[i].style[t("width")] = `${M}px`);
                u[i] && (u[i].swiperSlideSize = M),
                  m.push(M),
                  r.centeredSlides
                    ? ((T = T + M / 2 + E / 2 + w),
                      0 === E && 0 !== i && (T = T - a / 2 - w),
                      0 === i && (T = T - a / 2 - w),
                      Math.abs(T) < 0.001 && (T = 0),
                      r.roundLengths && (T = Math.floor(T)),
                      x % r.slidesPerGroup == 0 && f.push(T),
                      h.push(T))
                    : (r.roundLengths && (T = Math.floor(T)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && f.push(T),
                      h.push(T),
                      (T = T + M + w)),
                  (e.virtualSize += M + w),
                  (E = M),
                  (x += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, a) + v),
              o &&
                l &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                (i.style.width = `${e.virtualSize + r.spaceBetween}px`),
              r.setWrapperSize &&
                (i.style[t("width")] = `${e.virtualSize + r.spaceBetween}px`),
              S && e.grid.updateWrapperSize(M, f, t),
              !r.centeredSlides)
            ) {
              const t = [];
              for (let n = 0; n < f.length; n += 1) {
                let i = f[n];
                r.roundLengths && (i = Math.floor(i)),
                  f[n] <= e.virtualSize - a && t.push(i);
              }
              (f = t),
                Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) >
                  1 && f.push(e.virtualSize - a);
            }
            if (c && r.loop) {
              const t = m[0] + w;
              if (r.slidesPerGroup > 1) {
                const n = Math.ceil(
                    (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                      r.slidesPerGroup
                  ),
                  i = t * r.slidesPerGroup;
                for (let e = 0; e < n; e += 1) f.push(f[f.length - 1] + i);
              }
              for (
                let n = 0;
                n < e.virtual.slidesBefore + e.virtual.slidesAfter;
                n += 1
              )
                1 === r.slidesPerGroup && f.push(f[f.length - 1] + t),
                  h.push(h[h.length - 1] + t),
                  (e.virtualSize += t);
            }
            if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              u.filter(
                (e, t) => !(r.cssMode && !r.loop) || t !== u.length - 1
              ).forEach((e) => {
                e.style[n] = `${w}px`;
              });
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              let e = 0;
              m.forEach((t) => {
                e += t + (r.spaceBetween ? r.spaceBetween : 0);
              }),
                (e -= r.spaceBetween);
              const t = e - a;
              f = f.map((e) => (e < 0 ? -g : e > t ? t + v : e));
            }
            if (r.centerInsufficientSlides) {
              let e = 0;
              if (
                (m.forEach((t) => {
                  e += t + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (e -= r.spaceBetween),
                e < a)
              ) {
                const t = (a - e) / 2;
                f.forEach((e, n) => {
                  f[n] = e - t;
                }),
                  h.forEach((e, n) => {
                    h[n] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: u,
                snapGrid: f,
                slidesGrid: h,
                slidesSizesGrid: m,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              zt(i, "--swiper-centered-offset-before", -f[0] + "px"),
                zt(
                  i,
                  "--swiper-centered-offset-after",
                  e.size / 2 - m[m.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + n));
            }
            if (
              (p !== d && e.emit("slidesLengthChange"),
              f.length !== y &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                c ||
                r.cssMode ||
                ("slide" !== r.effect && "fade" !== r.effect)
              ))
            ) {
              const t = `${r.containerModifierClass}backface-hidden`,
                n = e.el.classList.contains(t);
              p <= r.maxBackfaceHiddenSlides
                ? n || e.el.classList.add(t)
                : n && e.el.classList.remove(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              n = [],
              r = t.virtual && t.params.virtual.enabled;
            let i,
              s = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const a = (e) =>
              r
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || []).forEach((e) => {
                  n.push(e);
                });
              else
                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                  const e = t.activeIndex + i;
                  if (e > t.slides.length && !r) break;
                  n.push(a(e));
                }
            else n.push(a(t.activeIndex));
            for (i = 0; i < n.length; i += 1)
              if (void 0 !== n[i]) {
                const e = n[i].offsetHeight;
                s = e > s ? e : s;
              }
            (s || 0 === s) && (t.wrapperEl.style.height = `${s}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides,
              n = e.isElement
                ? e.isHorizontal()
                  ? e.wrapperEl.offsetLeft
                  : e.wrapperEl.offsetTop
                : 0;
            for (let r = 0; r < t.length; r += 1)
              t[r].swiperSlideOffset =
                (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              n = t.params,
              { slides: r, rtlTranslate: i, snapGrid: s } = t;
            if (0 === r.length) return;
            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            i && (a = e),
              r.forEach((e) => {
                e.classList.remove(n.slideVisibleClass);
              }),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < r.length; e += 1) {
              const o = r[e];
              let l = o.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
              const c =
                  (a + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (o.swiperSlideSize + n.spaceBetween),
                d =
                  (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (o.swiperSlideSize + n.spaceBetween),
                u = -(a - l),
                p = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (u <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(e),
                r[e].classList.add(n.slideVisibleClass)),
                (o.progress = i ? -c : c),
                (o.originalProgress = i ? -d : d);
            }
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            const n = t.params,
              r = t.maxTranslate() - t.minTranslate();
            let { progress: i, isBeginning: s, isEnd: a, progressLoop: o } = t;
            const l = s,
              c = a;
            if (0 === r) (i = 0), (s = !0), (a = !0);
            else {
              i = (e - t.minTranslate()) / r;
              const n = Math.abs(e - t.minTranslate()) < 1,
                o = Math.abs(e - t.maxTranslate()) < 1;
              (s = n || i <= 0), (a = o || i >= 1), n && (i = 0), o && (i = 1);
            }
            if (n.loop) {
              const n = Yt(
                  t.slides.filter(
                    (e) => "0" === e.getAttribute("data-swiper-slide-index")
                  )[0]
                ),
                r = Yt(
                  t.slides.filter(
                    (e) =>
                      1 * e.getAttribute("data-swiper-slide-index") ==
                      t.slides.length - 1
                  )[0]
                ),
                i = t.slidesGrid[n],
                s = t.slidesGrid[r],
                a = t.slidesGrid[t.slidesGrid.length - 1],
                l = Math.abs(e);
              (o = l >= i ? (l - i) / a : (l + a - s) / a), o > 1 && (o -= 1);
            }
            Object.assign(t, {
              progress: i,
              progressLoop: o,
              isBeginning: s,
              isEnd: a,
            }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              s && !l && t.emit("reachBeginning toEdge"),
              a && !c && t.emit("reachEnd toEdge"),
              ((l && !s) || (c && !a)) && t.emit("fromEdge"),
              t.emit("progress", i);
          },
          updateSlidesClasses: function () {
            const e = this,
              { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
              s = e.virtual && n.virtual.enabled,
              a = (e) => Gt(r, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
            let o;
            if (
              (t.forEach((e) => {
                e.classList.remove(
                  n.slideActiveClass,
                  n.slideNextClass,
                  n.slidePrevClass
                );
              }),
              s)
            )
              if (n.loop) {
                let t = i - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t),
                  t >= e.virtual.slides.length &&
                    (t -= e.virtual.slides.length),
                  (o = a(`[data-swiper-slide-index="${t}"]`));
              } else o = a(`[data-swiper-slide-index="${i}"]`);
            else o = t[i];
            if (o) {
              o.classList.add(n.slideActiveClass);
              let e = (function (e, t) {
                const n = [];
                for (; e.nextElementSibling; ) {
                  const r = e.nextElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(o, `.${n.slideClass}, swiper-slide`)[0];
              n.loop && !e && (e = t[0]),
                e && e.classList.add(n.slideNextClass);
              let r = (function (e, t) {
                const n = [];
                for (; e.previousElementSibling; ) {
                  const r = e.previousElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(o, `.${n.slideClass}, swiper-slide`)[0];
              n.loop && 0 === !r && (r = t[t.length - 1]),
                r && r.classList.add(n.slidePrevClass);
            }
            e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                snapGrid: r,
                params: i,
                activeIndex: s,
                realIndex: a,
                snapIndex: o,
              } = t;
            let l,
              c = e;
            const d = (e) => {
              let n = e - t.virtual.slidesBefore;
              return (
                n < 0 && (n = t.virtual.slides.length + n),
                n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
                n
              );
            };
            if (
              (void 0 === c &&
                (c = (function (e) {
                  const { slidesGrid: t, params: n } = e,
                    r = e.rtlTranslate ? e.translate : -e.translate;
                  let i;
                  for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1]
                      ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2
                        ? (i = e)
                        : r >= t[e] && r < t[e + 1] && (i = e + 1)
                      : r >= t[e] && (i = e);
                  return (
                    n.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0),
                    i
                  );
                })(t)),
              r.indexOf(n) >= 0)
            )
              l = r.indexOf(n);
            else {
              const e = Math.min(i.slidesPerGroupSkip, c);
              l = e + Math.floor((c - e) / i.slidesPerGroup);
            }
            if ((l >= r.length && (l = r.length - 1), c === s))
              return (
                l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
                void (
                  t.params.loop &&
                  t.virtual &&
                  t.params.virtual.enabled &&
                  (t.realIndex = d(c))
                )
              );
            let u;
            (u =
              t.virtual && i.virtual.enabled && i.loop
                ? d(c)
                : t.slides[c]
                ? parseInt(
                    t.slides[c].getAttribute("data-swiper-slide-index") || c,
                    10
                  )
                : c),
              Object.assign(t, {
                snapIndex: l,
                realIndex: u,
                previousIndex: s,
                activeIndex: c,
              }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== u && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              n = t.params,
              r = e.closest(`.${n.slideClass}, swiper-slide`);
            let i,
              s = !1;
            if (r)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === r) {
                  (s = !0), (i = e);
                  break;
                }
            if (!r || !s)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = r),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    r.getAttribute("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = i),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        Qt = {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: n,
              translate: r,
              wrapperEl: i,
            } = this;
            if (t.virtualTranslate) return n ? -r : r;
            if (t.cssMode) return r;
            let s = (function (e, t = "x") {
              const n = kt();
              let r, i, s;
              const a = (function (e) {
                const t = kt();
                let n;
                return (
                  t.getComputedStyle && (n = t.getComputedStyle(e, null)),
                  !n && e.currentStyle && (n = e.currentStyle),
                  n || (n = e.style),
                  n
                );
              })(e);
              return (
                n.WebKitCSSMatrix
                  ? ((i = a.transform || a.webkitTransform),
                    i.split(",").length > 6 &&
                      (i = i
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (s = new n.WebKitCSSMatrix("none" === i ? "" : i)))
                  : ((s =
                      a.MozTransform ||
                      a.OTransform ||
                      a.MsTransform ||
                      a.msTransform ||
                      a.transform ||
                      a
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (r = s.toString().split(","))),
                "x" === t &&
                  (i = n.WebKitCSSMatrix
                    ? s.m41
                    : 16 === r.length
                    ? parseFloat(r[12])
                    : parseFloat(r[4])),
                "y" === t &&
                  (i = n.WebKitCSSMatrix
                    ? s.m42
                    : 16 === r.length
                    ? parseFloat(r[13])
                    : parseFloat(r[5])),
                i || 0
              );
            })(i, e);
            return n && (s = -s), s || 0;
          },
          setTranslate: function (e, t) {
            const n = this,
              { rtlTranslate: r, params: i, wrapperEl: s, progress: a } = n;
            let o,
              l = 0,
              c = 0;
            n.isHorizontal() ? (l = r ? -e : e) : (c = e),
              i.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
              i.cssMode
                ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -l : -c)
                : i.virtualTranslate ||
                  (s.style.transform = `translate3d(${l}px, ${c}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? l : c);
            const d = n.maxTranslate() - n.minTranslate();
            (o = 0 === d ? 0 : (e - n.minTranslate()) / d),
              o !== a && n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            n = !0,
            r = !0,
            i
          ) {
            const s = this,
              { params: a, wrapperEl: o } = s;
            if (s.animating && a.preventInteractionOnTransition) return !1;
            const l = s.minTranslate(),
              c = s.maxTranslate();
            let d;
            if (
              ((d = r && e > l ? l : r && e < c ? c : e),
              s.updateProgress(d),
              a.cssMode)
            ) {
              const e = s.isHorizontal();
              if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
              else {
                if (!s.support.smoothScroll)
                  return (
                    jt({
                      swiper: s,
                      targetPosition: -d,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (s.setTransition(0),
                  s.setTranslate(d),
                  n &&
                    (s.emit("beforeTransitionStart", t, i),
                    s.emit("transitionEnd")))
                : (s.setTransition(t),
                  s.setTranslate(d),
                  n &&
                    (s.emit("beforeTransitionStart", t, i),
                    s.emit("transitionStart")),
                  s.animating ||
                    ((s.animating = !0),
                    s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.wrapperEl.removeEventListener(
                            "transitionend",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          (s.onTranslateToWrapperTransitionEnd = null),
                          delete s.onTranslateToWrapperTransitionEnd,
                          n && s.emit("transitionEnd"));
                      }),
                    s.wrapperEl.addEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        };
      function Zt({ swiper: e, runCallbacks: t, direction: n, step: r }) {
        const { activeIndex: i, previousIndex: s } = e;
        let a = n;
        if (
          (a || (a = i > s ? "next" : i < s ? "prev" : "reset"),
          e.emit(`transition${r}`),
          t && i !== s)
        ) {
          if ("reset" === a) return void e.emit(`slideResetTransition${r}`);
          e.emit(`slideChangeTransition${r}`),
            "next" === a
              ? e.emit(`slideNextTransition${r}`)
              : e.emit(`slidePrevTransition${r}`);
        }
      }
      const Jt = {
        slideTo: function (e = 0, t = this.params.speed, n = !0, r, i) {
          "string" == typeof e && (e = parseInt(e, 10));
          const s = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: h,
          } = s;
          if (
            (s.animating && o.preventInteractionOnTransition) ||
            (!h && !r && !i)
          )
            return !1;
          const m = Math.min(s.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / s.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (o.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                r = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < r - (r - n) / 2
                  ? (a = e)
                  : t >= n && t < r && (a = e + 1)
                : t >= n && (a = e);
            }
          if (s.initialized && a !== u) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              v > s.translate &&
              v > s.maxTranslate() &&
              (u || 0) !== a
            )
              return !1;
          }
          let y;
          if (
            (a !== (d || 0) && n && s.emit("beforeSlideChangeStart"),
            s.updateProgress(v),
            (y = a > u ? "next" : a < u ? "prev" : "reset"),
            (p && -v === s.translate) || (!p && v === s.translate))
          )
            return (
              s.updateActiveIndex(a),
              o.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== o.effect && s.setTranslate(v),
              "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)),
              !1
            );
          if (o.cssMode) {
            const e = s.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
                  ? ((s._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      f[e ? "scrollLeft" : "scrollTop"] = n;
                    }))
                  : (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._immediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  jt({
                    swiper: s,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(a),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, r),
            s.transitionStart(n, y),
            0 === t
              ? s.transitionEnd(n, y)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.wrapperEl.removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, y));
                  }),
                s.wrapperEl.addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, n = !0, r) {
          "string" == typeof e && (e = parseInt(e, 10));
          const i = this;
          let s = e;
          return (
            i.params.loop &&
              (i.virtual && i.params.virtual.enabled
                ? (s += i.virtual.slidesBefore)
                : (s = Yt(
                    i.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === s
                    )[0]
                  ))),
            i.slideTo(s, t, n, r)
          );
        },
        slideNext: function (e = this.params.speed, t = !0, n) {
          const r = this,
            { enabled: i, params: s, animating: a } = r;
          if (!i) return r;
          let o = s.slidesPerGroup;
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
            c = r.virtual && s.virtual.enabled;
          if (s.loop) {
            if (a && !c && s.loopPreventsSliding) return !1;
            r.loopFix({ direction: "next" }),
              (r._clientLeft = r.wrapperEl.clientLeft);
          }
          return s.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function (e = this.params.speed, t = !0, n) {
          const r = this,
            {
              params: i,
              snapGrid: s,
              slidesGrid: a,
              rtlTranslate: o,
              enabled: l,
              animating: c,
            } = r;
          if (!l) return r;
          const d = r.virtual && i.virtual.enabled;
          if (i.loop) {
            if (c && !d && i.loopPreventsSliding) return !1;
            r.loopFix({ direction: "prev" }),
              (r._clientLeft = r.wrapperEl.clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = u(o ? r.translate : -r.translate),
            f = s.map((e) => u(e));
          let h = s[f.indexOf(p) - 1];
          if (void 0 === h && i.cssMode) {
            let e;
            s.forEach((t, n) => {
              p >= t && (e = n);
            }),
              void 0 !== e && (h = s[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          if (
            (void 0 !== h &&
              ((m = a.indexOf(h)),
              m < 0 && (m = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            i.rewind && r.isBeginning)
          ) {
            const i =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(i, e, t, n);
          }
          return r.slideTo(m, e, t, n);
        },
        slideReset: function (e = this.params.speed, t = !0, n) {
          return this.slideTo(this.activeIndex, e, t, n);
        },
        slideToClosest: function (e = this.params.speed, t = !0, n, r = 0.5) {
          const i = this;
          let s = i.activeIndex;
          const a = Math.min(i.params.slidesPerGroupSkip, s),
            o = a + Math.floor((s - a) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[o]) {
            const e = i.snapGrid[o];
            l - e > (i.snapGrid[o + 1] - e) * r &&
              (s += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[o - 1];
            l - e <= (i.snapGrid[o] - e) * r && (s -= i.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, i.slidesGrid.length - 1)),
            i.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, slidesEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            s = e.clickedIndex;
          const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - r / 2 ||
                  s > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (s = Yt(Gt(n, `${a}[data-swiper-slide-index="${i}"]`)[0])),
                    _t(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - r
                ? (e.loopFix(),
                  (s = Yt(Gt(n, `${a}[data-swiper-slide-index="${i}"]`)[0])),
                  _t(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      function en(e) {
        const t = this,
          n = Ot(),
          r = kt(),
          i = t.touchEventsData;
        i.evCache.push(e);
        const { params: s, touches: a, enabled: o } = t;
        if (!o) return;
        if (!s.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = l.target;
        if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(c))
          return;
        if ("which" in l && 3 === l.which) return;
        if ("button" in l && l.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const d = !!s.noSwipingClass && "" !== s.noSwipingClass,
          u = e.composedPath ? e.composedPath() : e.path;
        d && l.target && l.target.shadowRoot && u && (c = u[0]);
        const p = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          f = !(!l.target || !l.target.shadowRoot);
        if (
          s.noSwiping &&
          (f
            ? (function (e, t = this) {
                return (function t(n) {
                  if (!n || n === Ot() || n === kt()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const r = n.closest(e);
                  return r || n.getRootNode
                    ? r || t(n.getRootNode().host)
                    : null;
                })(t);
              })(p, c)
            : c.closest(p))
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)) return;
        (a.currentX = l.pageX), (a.currentY = l.pageY);
        const h = a.currentX,
          m = a.currentY,
          g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (g && (h <= v || h >= r.innerWidth - v)) {
          if ("prevent" !== g) return;
          e.preventDefault();
        }
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (a.startX = h),
          (a.startY = m),
          (i.touchStartTime = It()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (i.allowThresholdMove = !1);
        let y = !0;
        c.matches(i.focusableElements) &&
          ((y = !1), "SELECT" === c.nodeName && (i.isTouched = !1)),
          n.activeElement &&
            n.activeElement.matches(i.focusableElements) &&
            n.activeElement !== c &&
            n.activeElement.blur();
        const b = y && t.allowTouchMove && s.touchStartPreventDefault;
        (!s.touchStartForcePreventDefault && !b) ||
          c.isContentEditable ||
          l.preventDefault(),
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !s.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function tn(e) {
        const t = Ot(),
          n = this,
          r = n.touchEventsData,
          { params: i, touches: s, rtlTranslate: a, enabled: o } = n;
        if (!o) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !r.isTouched))
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit("touchMoveOpposite", l)
          );
        const c = r.evCache.findIndex((e) => e.pointerId === l.pointerId);
        c >= 0 && (r.evCache[c] = l);
        const d = r.evCache.length > 1 ? r.evCache[0] : l,
          u = d.pageX,
          p = d.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = p);
        if (!n.allowTouchMove)
          return (
            l.target.matches(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: p,
                prevX: n.touches.currentX,
                prevY: n.touches.currentY,
                currentX: u,
                currentY: p,
              }),
              (r.touchStartTime = It()))
            )
          );
        if (i.touchReleaseOnEdges && !i.loop)
          if (n.isVertical()) {
            if (
              (p < s.startY && n.translate <= n.maxTranslate()) ||
              (p > s.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (u < s.startX && n.translate <= n.maxTranslate()) ||
            (u > s.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          l.target === t.activeElement &&
          l.target.matches(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        if (
          (r.allowTouchCallbacks && n.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = p);
        const f = s.currentX - s.startX,
          h = s.currentY - s.startY;
        if (
          n.params.threshold &&
          Math.sqrt(f ** 2 + h ** 2) < n.params.threshold
        )
          return;
        if (void 0 === r.isScrolling) {
          let e;
          (n.isHorizontal() && s.currentY === s.startY) ||
          (n.isVertical() && s.currentX === s.startX)
            ? (r.isScrolling = !1)
            : f * f + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > i.touchAngle
                : 90 - e > i.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", l),
          void 0 === r.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (r.startMoving = !0)),
          r.isScrolling ||
            (n.zoom &&
              n.params.zoom &&
              n.params.zoom.enabled &&
              r.evCache.length > 1))
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !i.cssMode && l.cancelable && l.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
        let m = n.isHorizontal() ? f : h,
          g = n.isHorizontal()
            ? s.currentX - s.previousX
            : s.currentY - s.previousY;
        i.oneWayMovement &&
          ((m = Math.abs(m) * (a ? 1 : -1)), (g = Math.abs(g) * (a ? 1 : -1))),
          (s.diff = m),
          (m *= i.touchRatio),
          a && ((m = -m), (g = -g));
        const v = n.touchesDirection;
        (n.swipeDirection = m > 0 ? "prev" : "next"),
          (n.touchesDirection = g > 0 ? "prev" : "next");
        const y = n.params.loop && !i.cssMode;
        if (!r.isMoved) {
          if (
            (y && n.loopFix({ direction: n.swipeDirection }),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            n.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            !i.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", l);
        }
        let b;
        r.isMoved &&
          v !== n.touchesDirection &&
          y &&
          Math.abs(m) >= 1 &&
          (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }),
          (b = !0)),
          n.emit("sliderMove", l),
          (r.isMoved = !0),
          (r.currentTranslate = m + r.startTranslate);
        let w = !0,
          T = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (T = 0),
          m > 0
            ? (y &&
                !b &&
                r.currentTranslate >
                  (i.centeredSlides
                    ? n.minTranslate() - n.size / 2
                    : n.minTranslate()) &&
                n.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > n.minTranslate() &&
                ((w = !1),
                i.resistance &&
                  (r.currentTranslate =
                    n.minTranslate() -
                    1 +
                    (-n.minTranslate() + r.startTranslate + m) ** T)))
            : m < 0 &&
              (y &&
                !b &&
                r.currentTranslate <
                  (i.centeredSlides
                    ? n.maxTranslate() + n.size / 2
                    : n.maxTranslate()) &&
                n.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    n.slides.length -
                    ("auto" === i.slidesPerView
                      ? n.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(i.slidesPerView, 10))),
                }),
              r.currentTranslate < n.maxTranslate() &&
                ((w = !1),
                i.resistance &&
                  (r.currentTranslate =
                    n.maxTranslate() +
                    1 -
                    (n.maxTranslate() - r.startTranslate - m) ** T))),
          w && (l.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(m) > i.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (r.currentTranslate = r.startTranslate),
              void (s.diff = n.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        i.followFinger &&
          !i.cssMode &&
          (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
            i.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            i.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function nn(e) {
        const t = this,
          n = t.touchEventsData,
          r = n.evCache.findIndex((t) => t.pointerId === e.pointerId);
        if (
          (r >= 0 && n.evCache.splice(r, 1),
          ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
        )
          return;
        const {
          params: i,
          touches: s,
          rtlTranslate: a,
          slidesGrid: o,
          enabled: l,
        } = t;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", c),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = It(),
          u = d - n.touchStartTime;
        if (t.allowClick) {
          const e = c.path || (c.composedPath && c.composedPath());
          t.updateClickedSlide((e && e[0]) || c.target),
            t.emit("tap click", c),
            u < 300 &&
              d - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", c);
        }
        if (
          ((n.lastClickTime = It()),
          _t(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === s.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let p;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (p = i.followFinger
            ? a
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p });
        let f = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? p >= o[e] && p < o[e + t] && ((f = e), (h = o[e + t] - o[e]))
            : p >= o[e] && ((f = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        let m = null,
          g = null;
        i.rewind &&
          (t.isBeginning
            ? (g =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (m = 0));
        const v = (p - o[f]) / h,
          y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (v >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? m : f + y)
              : t.slideTo(f)),
            "prev" === t.swipeDirection &&
              (v > 1 - i.longSwipesRatio
                ? t.slideTo(f + y)
                : null !== g && v < 0 && Math.abs(v) > i.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(f));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation ||
          (c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl)
            ? ("next" === t.swipeDirection && t.slideTo(null !== m ? m : f + y),
              "prev" === t.swipeDirection && t.slideTo(null !== g ? g : f))
            : c.target === t.navigation.nextEl
            ? t.slideTo(f + y)
            : t.slideTo(f);
        }
      }
      let rn;
      function sn() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(rn),
            (rn = setTimeout(() => {
              e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = r),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function an(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function on() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let i;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      const ln = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const n = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (n) {
          const t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      };
      function cn(e) {
        ln(this, e.target), this.update();
      }
      let dn = !1;
      function un() {}
      const pn = (e, t) => {
          const n = Ot(),
            { params: r, el: i, wrapperEl: s, device: a } = e,
            o = !!r.nested,
            l = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          i[l]("pointerdown", e.onTouchStart, { passive: !1 }),
            n[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            n[l]("pointerup", e.onTouchEnd, { passive: !0 }),
            n[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
            n[l]("pointerout", e.onTouchEnd, { passive: !0 }),
            n[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              i[l]("click", e.onClick, !0),
            r.cssMode && s[l]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[c](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  sn,
                  !0
                )
              : e[c]("observerUpdate", sn, !0),
            i[l]("load", e.onLoad, { capture: !0 });
        },
        fn = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        hn = {
          init: !0,
          direction: "horizontal",
          oneWayMovement: !1,
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopedSlides: null,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function mn(e, t) {
        return function (n = {}) {
          const r = Object.keys(n)[0],
            i = n[r];
          "object" == typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in i
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" != typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Nt(t, n))
                : Nt(t, n))
            : Nt(t, n);
        };
      }
      const gn = {
          eventsEmitter: Kt,
          update: Ut,
          translate: Qt,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode ||
                (n.wrapperEl.style.transitionDuration = `${e}ms`),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const n = this,
                { params: r } = n;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                Zt({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e = !0, t) {
              const n = this,
                { params: r } = n;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  Zt({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Jt,
          loop: {
            loopCreate: function (e) {
              const t = this,
                { params: n, slidesEl: r } = t;
              !n.loop ||
                (t.virtual && t.params.virtual.enabled) ||
                (Gt(r, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t);
                }),
                t.loopFix({
                  slideRealIndex: e,
                  direction: n.centeredSlides ? void 0 : "next",
                }));
            },
            loopFix: function ({
              slideRealIndex: e,
              slideTo: t = !0,
              direction: n,
              setTranslate: r,
              activeSlideIndex: i,
              byController: s,
              byMousewheel: a,
            } = {}) {
              const o = this;
              if (!o.params.loop) return;
              o.emit("beforeLoopFix");
              const {
                slides: l,
                allowSlidePrev: c,
                allowSlideNext: d,
                slidesEl: u,
                params: p,
              } = o;
              if (
                ((o.allowSlidePrev = !0),
                (o.allowSlideNext = !0),
                o.virtual && p.virtual.enabled)
              )
                return (
                  t &&
                    (p.centeredSlides || 0 !== o.snapIndex
                      ? p.centeredSlides && o.snapIndex < p.slidesPerView
                        ? o.slideTo(
                            o.virtual.slides.length + o.snapIndex,
                            0,
                            !1,
                            !0
                          )
                        : o.snapIndex === o.snapGrid.length - 1 &&
                          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                      : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                  (o.allowSlidePrev = c),
                  (o.allowSlideNext = d),
                  void o.emit("loopFix")
                );
              const f =
                "auto" === p.slidesPerView
                  ? o.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(p.slidesPerView, 10));
              let h = p.loopedSlides || f;
              h % p.slidesPerGroup != 0 &&
                (h += p.slidesPerGroup - (h % p.slidesPerGroup)),
                (o.loopedSlides = h);
              const m = [],
                g = [];
              let v = o.activeIndex;
              void 0 === i
                ? (i = Yt(
                    o.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  ))
                : (v = i);
              const y = "next" === n || !n,
                b = "prev" === n || !n;
              let w = 0,
                T = 0;
              if (i < h) {
                w = h - i;
                for (let e = 0; e < h - i; e += 1) {
                  const t = e - Math.floor(e / l.length) * l.length;
                  m.push(l.length - t - 1);
                }
              } else if (i > o.slides.length - 2 * h) {
                T = i - (o.slides.length - 2 * h);
                for (let e = 0; e < T; e += 1) {
                  const t = e - Math.floor(e / l.length) * l.length;
                  g.push(t);
                }
              }
              if (
                (b &&
                  m.forEach((e) => {
                    u.prepend(o.slides[e]);
                  }),
                y &&
                  g.forEach((e) => {
                    u.append(o.slides[e]);
                  }),
                o.recalcSlides(),
                p.watchSlidesProgress && o.updateSlidesOffset(),
                t)
              )
                if (m.length > 0 && b)
                  if (void 0 === e) {
                    const e = o.slidesGrid[v],
                      t = o.slidesGrid[v + w] - e;
                    a
                      ? o.setTranslate(o.translate - t)
                      : (o.slideTo(v + w, 0, !1, !0),
                        r &&
                          (o.touches[o.isHorizontal() ? "startX" : "startY"] +=
                            t));
                  } else r && o.slideToLoop(e, 0, !1, !0);
                else if (g.length > 0 && y)
                  if (void 0 === e) {
                    const e = o.slidesGrid[v],
                      t = o.slidesGrid[v - T] - e;
                    a
                      ? o.setTranslate(o.translate - t)
                      : (o.slideTo(v - T, 0, !1, !0),
                        r &&
                          (o.touches[o.isHorizontal() ? "startX" : "startY"] +=
                            t));
                  } else o.slideToLoop(e, 0, !1, !0);
              if (
                ((o.allowSlidePrev = c),
                (o.allowSlideNext = d),
                o.controller && o.controller.control && !s)
              ) {
                const t = {
                  slideRealIndex: e,
                  slideTo: !1,
                  direction: n,
                  setTranslate: r,
                  activeSlideIndex: i,
                  byController: !0,
                };
                Array.isArray(o.controller.control)
                  ? o.controller.control.forEach((e) => {
                      e.params.loop && e.loopFix(t);
                    })
                  : o.controller.control instanceof o.constructor &&
                    o.controller.control.params.loop &&
                    o.controller.control.loopFix(t);
              }
              o.emit("loopFix");
            },
            loopDestroy: function () {
              const e = this,
                { slides: t, params: n, slidesEl: r } = e;
              if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
              e.recalcSlides();
              const i = [];
              t.forEach((e) => {
                const t =
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex;
                i[t] = e;
              }),
                t.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  r.append(e);
                }),
                e.recalcSlides(),
                e.slideTo(e.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                t = Ot(),
                { params: n } = e;
              (e.onTouchStart = en.bind(e)),
                (e.onTouchMove = tn.bind(e)),
                (e.onTouchEnd = nn.bind(e)),
                n.cssMode && (e.onScroll = on.bind(e)),
                (e.onClick = an.bind(e)),
                (e.onLoad = cn.bind(e)),
                dn || (t.addEventListener("touchstart", un), (dn = !0)),
                pn(e, "on");
            },
            detachEvents: function () {
              pn(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { realIndex: t, initialized: n, params: r, el: i } = e,
                s = r.breakpoints;
              if (!s || (s && 0 === Object.keys(s).length)) return;
              const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const o = (a in s ? s[a] : void 0) || e.originalParams,
                l = fn(e, r),
                c = fn(e, o),
                d = r.enabled;
              l && !c
                ? (i.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !l &&
                  c &&
                  (i.classList.add(`${r.containerModifierClass}grid`),
                  ((o.grid.fill && "column" === o.grid.fill) ||
                    (!o.grid.fill && "column" === r.grid.fill)) &&
                    i.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  const n = r[t] && r[t].enabled,
                    i = o[t] && o[t].enabled;
                  n && !i && e[t].disable(), !n && i && e[t].enable();
                });
              const u = o.direction && o.direction !== r.direction,
                p = r.loop && (o.slidesPerView !== r.slidesPerView || u);
              u && n && e.changeDirection(), Nt(e.params, o);
              const f = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                d && !f ? e.disable() : !d && f && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", o),
                p && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
                e.emit("breakpoint", o);
            },
            getBreakpoint: function (e, t = "window", n) {
              if (!e || ("container" === t && !n)) return;
              let r = !1;
              const i = kt(),
                s = "window" === t ? i.innerHeight : n.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: s * t, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                const { point: s, value: o } = a[e];
                "window" === t
                  ? i.matchMedia(`(min-width: ${o}px)`).matches && (r = s)
                  : o <= n.clientWidth && (r = s);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: r } = n;
              if (r) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                { classNames: t, params: n, rtl: r, el: i, device: s } = e,
                a = (function (e, t) {
                  const n = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && n.push(t + r);
                          })
                        : "string" == typeof e && n.push(t + e);
                    }),
                    n
                  );
                })(
                  [
                    "initialized",
                    n.direction,
                    { "free-mode": e.params.freeMode && n.freeMode.enabled },
                    { autoheight: n.autoHeight },
                    { rtl: r },
                    { grid: n.grid && n.grid.rows > 1 },
                    {
                      "grid-column":
                        n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                    },
                    { android: s.android },
                    { ios: s.ios },
                    { "css-mode": n.cssMode },
                    { centered: n.cssMode && n.centeredSlides },
                    { "watch-progress": n.watchSlidesProgress },
                  ],
                  n.containerModifierClass
                );
              t.push(...a), i.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
              const { el: e, classNames: t } = this;
              e.classList.remove(...t), this.emitContainerClasses();
            },
          },
        },
        vn = {};
      class yn {
        constructor(...e) {
          let t, n;
          1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
            n || (n = {}),
            (n = Nt({}, n)),
            t && !n.el && (n.el = t);
          const r = Ot();
          if (
            n.el &&
            "string" == typeof n.el &&
            r.querySelectorAll(n.el).length > 1
          ) {
            const e = [];
            return (
              r.querySelectorAll(n.el).forEach((t) => {
                const r = Nt({}, n, { el: t });
                e.push(new yn(r));
              }),
              e
            );
          }
          const i = this;
          (i.__swiper__ = !0),
            (i.support = qt()),
            (i.device = (function (e = {}) {
              return (
                Vt ||
                  (Vt = (function ({ userAgent: e } = {}) {
                    const t = qt(),
                      n = kt(),
                      r = n.navigator.platform,
                      i = e || n.navigator.userAgent,
                      s = { ios: !1, android: !1 },
                      a = n.screen.width,
                      o = n.screen.height,
                      l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = i.match(/(iPad).*OS\s([\d_]+)/);
                    const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                      u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      p = "Win32" === r;
                    let f = "MacIntel" === r;
                    return (
                      !c &&
                        f &&
                        t.touch &&
                        [
                          "1024x1366",
                          "1366x1024",
                          "834x1194",
                          "1194x834",
                          "834x1112",
                          "1112x834",
                          "768x1024",
                          "1024x768",
                          "820x1180",
                          "1180x820",
                          "810x1080",
                          "1080x810",
                        ].indexOf(`${a}x${o}`) >= 0 &&
                        ((c = i.match(/(Version)\/([\d.]+)/)),
                        c || (c = [0, 1, "13_0_0"]),
                        (f = !1)),
                      l && !p && ((s.os = "android"), (s.android = !0)),
                      (c || u || d) && ((s.os = "ios"), (s.ios = !0)),
                      s
                    );
                  })(e)),
                Vt
              );
            })({ userAgent: n.userAgent })),
            (i.browser =
              (Rt ||
                (Rt = (function () {
                  const e = kt();
                  let t = !1;
                  function n() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  }
                  if (n()) {
                    const n = String(e.navigator.userAgent);
                    if (n.includes("Version/")) {
                      const [e, r] = n
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      t = e < 16 || (16 === e && r < 2);
                    }
                  }
                  return {
                    isSafari: t || n(),
                    needPerspectiveFix: t,
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  };
                })()),
              Rt)),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            n.modules &&
              Array.isArray(n.modules) &&
              i.modules.push(...n.modules);
          const s = {};
          i.modules.forEach((e) => {
            e({
              params: n,
              swiper: i,
              extendParams: mn(n, s),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          const a = Nt({}, hn, s);
          return (
            (i.params = Nt({}, a, vn, n)),
            (i.originalParams = Nt({}, i.params)),
            (i.passedParams = Nt({}, n)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: t,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: It(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: [],
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = Gt(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            i = (n.maxTranslate() - r) * e + r;
          n.translateTo(i, void 0 === t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: n,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = r[o].swiperSlideSize;
            for (let n = o + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let n = o - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = o + 1; e < r.length; e += 1)
              (t ? i[e] + s[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          else for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let i;
          n.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && ln(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (r(), e.params.autoHeight && e.updateAutoHeight())
              : ((i =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                i || r()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.el.classList.remove(`${n.params.containerModifierClass}${r}`),
              n.el.classList.add(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let n = e || t.params.el;
          if (("string" == typeof n && (n = document.querySelector(n)), !n))
            return !1;
          (n.swiper = t), n.shadowEl && (t.isElement = !0);
          const r = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let i =
            n && n.shadowRoot && n.shadowRoot.querySelector
              ? n.shadowRoot.querySelector(r())
              : Gt(n, r())[0];
          return (
            !i &&
              t.params.createElements &&
              ((i = Ft("div", t.params.wrapperClass)),
              n.append(i),
              Gt(n, `.${t.params.slideClass}`).forEach((e) => {
                i.append(e);
              })),
            Object.assign(t, {
              el: n,
              wrapperEl: i,
              slidesEl: t.isElement ? n : i,
              mounted: !0,
              rtl:
                "rtl" === n.dir.toLowerCase() || "rtl" === Ht(n, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === n.dir.toLowerCase() || "rtl" === Ht(n, "direction")),
              wrongRTL: "-webkit-box" === Ht(i, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          return (
            t.initialized ||
              !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                    t.params.initialSlide + t.virtual.slidesBefore,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.params.loop && t.loopCreate(),
              t.attachEvents(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete
                  ? ln(t, e)
                  : e.addEventListener("load", (e) => {
                      ln(t, e.target);
                    });
              }),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const n = this,
            { params: r, el: i, wrapperEl: s, slides: a } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                i.removeAttribute("style"),
                s.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          Nt(vn, e);
        }
        static get extendedDefaults() {
          return vn;
        }
        static get defaults() {
          return hn;
        }
        static installModule(e) {
          yn.prototype.__modules__ || (yn.prototype.__modules__ = []);
          const t = yn.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => yn.installModule(e)), yn)
            : (yn.installModule(e), yn);
        }
      }
      Object.keys(gn).forEach((e) => {
        Object.keys(gn[e]).forEach((t) => {
          yn.prototype[t] = gn[e][t];
        });
      }),
        yn.use([
          function ({ swiper: e, on: t, emit: n }) {
            const r = kt();
            let i = null,
              s = null;
            const a = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (n("beforeResize"), n("resize"));
              },
              o = () => {
                e && !e.destroyed && e.initialized && n("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== r.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((i = new ResizeObserver((t) => {
                    s = r.requestAnimationFrame(() => {
                      const { width: n, height: r } = e;
                      let i = n,
                        s = r;
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: n, target: r }) => {
                          (r && r !== e.el) ||
                            ((i = n ? n.width : (t[0] || t).inlineSize),
                            (s = n ? n.height : (t[0] || t).blockSize));
                        }
                      ),
                        (i === n && s === r) || a();
                    });
                  })),
                  i.observe(e.el))
                : (r.addEventListener("resize", a),
                  r.addEventListener("orientationchange", o));
            }),
              t("destroy", () => {
                s && r.cancelAnimationFrame(s),
                  i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                  r.removeEventListener("resize", a),
                  r.removeEventListener("orientationchange", o);
              });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: r }) {
            const i = [],
              s = kt(),
              a = (e, t = {}) => {
                const n = new (s.MutationObserver || s.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function () {
                      r("observerUpdate", e[0]);
                    };
                    s.requestAnimationFrame
                      ? s.requestAnimationFrame(t)
                      : s.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  i.push(n);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              n("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = $t(e.el);
                    for (let e = 0; e < t.length; e += 1) a(t[e]);
                  }
                  a(e.el, { childList: e.params.observeSlideChildren }),
                    a(e.wrapperEl, { attributes: !1 });
                }
              }),
              n("destroy", () => {
                i.forEach((e) => {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      const bn = yn;
      function wn(e, t, n, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((i) => {
              if (!n[i] && !0 === n.auto) {
                let s = Gt(e.el, `.${r[i]}`)[0];
                s ||
                  ((s = Ft("div", r[i])), (s.className = r[i]), e.el.append(s)),
                  (n[i] = s),
                  (t[i] = s);
              }
            }),
          n
        );
      }
      function Tn({ swiper: e, extendParams: t, on: n, emit: r }) {
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (e.navigation = { nextEl: null, prevEl: null });
        const i = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function s(t) {
          let n;
          return t &&
            "string" == typeof t &&
            e.isElement &&
            ((n = e.el.shadowRoot.querySelector(t)), n)
            ? n
            : (t &&
                ("string" == typeof t &&
                  (n = [...document.querySelectorAll(t)]),
                e.params.uniqueNavElements &&
                  "string" == typeof t &&
                  n.length > 1 &&
                  1 === e.el.querySelectorAll(t).length &&
                  (n = e.el.querySelector(t))),
              t && !n ? t : n);
        }
        function a(t, n) {
          const r = e.params.navigation;
          (t = i(t)).forEach((t) => {
            t &&
              (t.classList[n ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === t.tagName && (t.disabled = n),
              e.params.watchOverflow &&
                e.enabled &&
                t.classList[e.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function o() {
          const { nextEl: t, prevEl: n } = e.navigation;
          if (e.params.loop) return a(n, !1), void a(t, !1);
          a(n, e.isBeginning && !e.params.rewind),
            a(t, e.isEnd && !e.params.rewind);
        }
        function l(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), r("navigationPrev"));
        }
        function c(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), r("navigationNext"));
        }
        function d() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = wn(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          let n = s(t.nextEl),
            r = s(t.prevEl);
          Object.assign(e.navigation, { nextEl: n, prevEl: r }),
            (n = i(n)),
            (r = i(r));
          const a = (n, r) => {
            n && n.addEventListener("click", "next" === r ? c : l),
              !e.enabled && n && n.classList.add(...t.lockClass.split(" "));
          };
          n.forEach((e) => a(e, "next")), r.forEach((e) => a(e, "prev"));
        }
        function u() {
          let { nextEl: t, prevEl: n } = e.navigation;
          (t = i(t)), (n = i(n));
          const r = (t, n) => {
            t.removeEventListener("click", "next" === n ? c : l),
              t.classList.remove(
                ...e.params.navigation.disabledClass.split(" ")
              );
          };
          t.forEach((e) => r(e, "next")), n.forEach((e) => r(e, "prev"));
        }
        n("init", () => {
          !1 === e.params.navigation.enabled ? p() : (d(), o());
        }),
          n("toEdge fromEdge lock unlock", () => {
            o();
          }),
          n("destroy", () => {
            u();
          }),
          n("enable disable", () => {
            let { nextEl: t, prevEl: n } = e.navigation;
            (t = i(t)),
              (n = i(n)),
              [...t, ...n]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList[e.enabled ? "remove" : "add"](
                    e.params.navigation.lockClass
                  )
                );
          }),
          n("click", (t, n) => {
            let { nextEl: s, prevEl: a } = e.navigation;
            (s = i(s)), (a = i(a));
            const o = n.target;
            if (
              e.params.navigation.hideOnClick &&
              !a.includes(o) &&
              !s.includes(o)
            ) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              s.length
                ? (t = s[0].classList.contains(e.params.navigation.hiddenClass))
                : a.length &&
                  (t = a[0].classList.contains(
                    e.params.navigation.hiddenClass
                  )),
                r(!0 === t ? "navigationShow" : "navigationHide"),
                [...s, ...a]
                  .filter((e) => !!e)
                  .forEach((t) =>
                    t.classList.toggle(e.params.navigation.hiddenClass)
                  );
            }
          });
        const p = () => {
          e.el.classList.add(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            u();
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.el.classList.remove(
              ...e.params.navigation.navigationDisabledClass.split(" ")
            ),
              d(),
              o();
          },
          disable: p,
          update: o,
          init: d,
          destroy: u,
        });
      }
      function En(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function xn({ swiper: e, extendParams: t, on: n, emit: r }) {
        const i = "swiper-pagination";
        let s;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
            paginationDisabledClass: `${i}-disabled`,
          },
        }),
          (e.pagination = { el: null, bullets: [] });
        let a = 0;
        const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function l() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
          );
        }
        function c(t, n) {
          const { bulletActiveClass: r } = e.params.pagination;
          t &&
            (t = t[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
            (t.classList.add(`${r}-${n}`),
            (t = t[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
              t.classList.add(`${r}-${n}-${n}`));
        }
        function d(t) {
          const n = t.target.closest(En(e.params.pagination.bulletClass));
          if (!n) return;
          t.preventDefault();
          const r = Yt(n) * e.params.slidesPerGroup;
          e.params.loop ? e.slideToLoop(r) : e.slideTo(r);
        }
        function u() {
          const t = e.rtl,
            n = e.params.pagination;
          if (l()) return;
          let i,
            d = e.pagination.el;
          d = o(d);
          const u =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            p = e.params.loop
              ? Math.ceil(u / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            ((i = e.params.loop
              ? e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex
              : void 0 !== e.snapIndex
              ? e.snapIndex
              : e.activeIndex || 0),
            "bullets" === n.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const r = e.pagination.bullets;
            let o, l, u;
            if (
              (n.dynamicBullets &&
                ((s = Wt(r[0], e.isHorizontal() ? "width" : "height", !0)),
                d.forEach((t) => {
                  t.style[e.isHorizontal() ? "width" : "height"] =
                    s * (n.dynamicMainBullets + 4) + "px";
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((a += i - (e.previousIndex || 0)),
                  a > n.dynamicMainBullets - 1
                    ? (a = n.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (o = Math.max(i - a, 0)),
                (l = o + (Math.min(r.length, n.dynamicMainBullets) - 1)),
                (u = (l + o) / 2)),
              r.forEach((e) => {
                e.classList.remove(
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${n.bulletActiveClass}${e}`)
                );
              }),
              d.length > 1)
            )
              r.forEach((e) => {
                const t = Yt(e);
                t === i && e.classList.add(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (t >= o &&
                      t <= l &&
                      e.classList.add(`${n.bulletActiveClass}-main`),
                    t === o && c(e, "prev"),
                    t === l && c(e, "next"));
              });
            else {
              const e = r[i];
              if (
                (e && e.classList.add(n.bulletActiveClass), n.dynamicBullets)
              ) {
                const e = r[o],
                  t = r[l];
                for (let e = o; e <= l; e += 1)
                  r[e].classList.add(`${n.bulletActiveClass}-main`);
                c(e, "prev"), c(t, "next");
              }
            }
            if (n.dynamicBullets) {
              const i = Math.min(r.length, n.dynamicMainBullets + 4),
                a = (s * i - s) / 2 - u * s,
                o = t ? "right" : "left";
              r.forEach((t) => {
                t.style[e.isHorizontal() ? o : "top"] = `${a}px`;
              });
            }
          }
          d.forEach((t, s) => {
            if (
              ("fraction" === n.type &&
                (t.querySelectorAll(En(n.currentClass)).forEach((e) => {
                  e.textContent = n.formatFractionCurrent(i + 1);
                }),
                t.querySelectorAll(En(n.totalClass)).forEach((e) => {
                  e.textContent = n.formatFractionTotal(p);
                })),
              "progressbar" === n.type)
            ) {
              let r;
              r = n.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical";
              const s = (i + 1) / p;
              let a = 1,
                o = 1;
              "horizontal" === r ? (a = s) : (o = s),
                t.querySelectorAll(En(n.progressbarFillClass)).forEach((t) => {
                  (t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                    (t.style.transitionDuration = `${e.params.speed}ms`);
                });
            }
            "custom" === n.type && n.renderCustom
              ? ((t.innerHTML = n.renderCustom(e, i + 1, p)),
                0 === s && r("paginationRender", t))
              : (0 === s && r("paginationRender", t), r("paginationUpdate", t)),
              e.params.watchOverflow &&
                e.enabled &&
                t.classList[e.isLocked ? "add" : "remove"](n.lockClass);
          });
        }
        function p() {
          const t = e.params.pagination;
          if (l()) return;
          const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length;
          let i = e.pagination.el;
          i = o(i);
          let s = "";
          if ("bullets" === t.type) {
            let r = e.params.loop
              ? Math.ceil(n / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && r > n && (r = n);
            for (let n = 0; n < r; n += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          }
          "fraction" === t.type &&
            (s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            "progressbar" === t.type &&
              (s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
            i.forEach((n) => {
              "custom" !== t.type && (n.innerHTML = s || ""),
                "bullets" === t.type &&
                  (e.pagination.bullets = [
                    ...n.querySelectorAll(En(t.bulletClass)),
                  ]);
            }),
            "custom" !== t.type && r("paginationRender", i[0]);
        }
        function f() {
          e.params.pagination = wn(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let n;
          "string" == typeof t.el &&
            e.isElement &&
            (n = e.el.shadowRoot.querySelector(t.el)),
            n ||
              "string" != typeof t.el ||
              (n = [...document.querySelectorAll(t.el)]),
            n || (n = t.el),
            n &&
              0 !== n.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                Array.isArray(n) &&
                n.length > 1 &&
                ((n = [...e.el.querySelectorAll(t.el)]),
                n.length > 1 &&
                  (n = n.filter((t) => $t(t, ".swiper")[0] === e.el)[0])),
              Array.isArray(n) && 1 === n.length && (n = n[0]),
              Object.assign(e.pagination, { el: n }),
              (n = o(n)),
              n.forEach((n) => {
                "bullets" === t.type &&
                  t.clickable &&
                  n.classList.add(t.clickableClass),
                  n.classList.add(t.modifierClass + t.type),
                  n.classList.add(
                    e.isHorizontal() ? t.horizontalClass : t.verticalClass
                  ),
                  "bullets" === t.type &&
                    t.dynamicBullets &&
                    (n.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                    (a = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  "progressbar" === t.type &&
                    t.progressbarOpposite &&
                    n.classList.add(t.progressbarOppositeClass),
                  t.clickable && n.addEventListener("click", d),
                  e.enabled || n.classList.add(t.lockClass);
              }));
        }
        function h() {
          const t = e.params.pagination;
          if (l()) return;
          let n = e.pagination.el;
          n &&
            ((n = o(n)),
            n.forEach((n) => {
              n.classList.remove(t.hiddenClass),
                n.classList.remove(t.modifierClass + t.type),
                n.classList.remove(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                t.clickable && n.removeEventListener("click", d);
            })),
            e.pagination.bullets &&
              e.pagination.bullets.forEach((e) =>
                e.classList.remove(t.bulletActiveClass)
              );
        }
        n("init", () => {
          !1 === e.params.pagination.enabled ? m() : (f(), p(), u());
        }),
          n("activeIndexChange", () => {
            void 0 === e.snapIndex && u();
          }),
          n("snapIndexChange", () => {
            u();
          }),
          n("snapGridLengthChange", () => {
            p(), u();
          }),
          n("destroy", () => {
            h();
          }),
          n("enable disable", () => {
            let { el: t } = e.pagination;
            t &&
              ((t = o(t)),
              t.forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.pagination.lockClass
                )
              ));
          }),
          n("lock unlock", () => {
            u();
          }),
          n("click", (t, n) => {
            const i = n.target;
            let { el: s } = e.pagination;
            if (
              (Array.isArray(s) || (s = [s].filter((e) => !!e)),
              e.params.pagination.el &&
                e.params.pagination.hideOnClick &&
                s &&
                s.length > 0 &&
                !i.classList.contains(e.params.pagination.bulletClass))
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              const t = s[0].classList.contains(
                e.params.pagination.hiddenClass
              );
              r(!0 === t ? "paginationShow" : "paginationHide"),
                s.forEach((t) =>
                  t.classList.toggle(e.params.pagination.hiddenClass)
                );
            }
          });
        const m = () => {
          e.el.classList.add(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList.add(e.params.pagination.paginationDisabledClass)
            )),
            h();
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let { el: t } = e.pagination;
            t &&
              ((t = o(t)),
              t.forEach((t) =>
                t.classList.remove(e.params.pagination.paginationDisabledClass)
              )),
              f(),
              p(),
              u();
          },
          disable: m,
          render: p,
          update: u,
          init: f,
          destroy: h,
        });
      }
      function Sn({ swiper: e, extendParams: t, on: n, emit: r, params: i }) {
        let s, a;
        (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let o,
          l,
          c,
          d,
          u,
          p,
          f,
          h = i && i.autoplay ? i.autoplay.delay : 3e3,
          m = i && i.autoplay ? i.autoplay.delay : 3e3,
          g = new Date().getTime;
        function v(t) {
          e &&
            !e.destroyed &&
            e.wrapperEl &&
            t.target === e.wrapperEl &&
            (e.wrapperEl.removeEventListener("transitionend", v), x());
        }
        const y = () => {
            if (e.destroyed || !e.autoplay.running) return;
            e.autoplay.paused ? (l = !0) : l && ((m = o), (l = !1));
            const t = e.autoplay.paused ? o : g + m - new Date().getTime();
            (e.autoplay.timeLeft = t),
              r("autoplayTimeLeft", t, t / h),
              (a = requestAnimationFrame(() => {
                y();
              }));
          },
          b = (t) => {
            if (e.destroyed || !e.autoplay.running) return;
            cancelAnimationFrame(a), y();
            let n = void 0 === t ? e.params.autoplay.delay : t;
            (h = e.params.autoplay.delay), (m = e.params.autoplay.delay);
            const i = (() => {
              let t;
              if (
                ((t =
                  e.virtual && e.params.virtual.enabled
                    ? e.slides.filter((e) =>
                        e.classList.contains("swiper-slide-active")
                      )[0]
                    : e.slides[e.activeIndex]),
                t)
              )
                return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(i) &&
              i > 0 &&
              void 0 === t &&
              ((n = i), (h = i), (m = i)),
              (o = n);
            const l = e.params.speed,
              c = () => {
                e &&
                  !e.destroyed &&
                  (e.params.autoplay.reverseDirection
                    ? !e.isBeginning || e.params.loop || e.params.rewind
                      ? (e.slidePrev(l, !0, !0), r("autoplay"))
                      : e.params.autoplay.stopOnLastSlide ||
                        (e.slideTo(e.slides.length - 1, l, !0, !0),
                        r("autoplay"))
                    : !e.isEnd || e.params.loop || e.params.rewind
                    ? (e.slideNext(l, !0, !0), r("autoplay"))
                    : e.params.autoplay.stopOnLastSlide ||
                      (e.slideTo(0, l, !0, !0), r("autoplay")),
                  e.params.cssMode &&
                    ((g = new Date().getTime()),
                    requestAnimationFrame(() => {
                      b();
                    })));
              };
            return (
              n > 0
                ? (clearTimeout(s),
                  (s = setTimeout(() => {
                    c();
                  }, n)))
                : requestAnimationFrame(() => {
                    c();
                  }),
              n
            );
          },
          w = () => {
            (e.autoplay.running = !0), b(), r("autoplayStart");
          },
          T = () => {
            (e.autoplay.running = !1),
              clearTimeout(s),
              cancelAnimationFrame(a),
              r("autoplayStop");
          },
          E = (t, n) => {
            if (e.destroyed || !e.autoplay.running) return;
            clearTimeout(s), t || (f = !0);
            const i = () => {
              r("autoplayPause"),
                e.params.autoplay.waitForTransition
                  ? e.wrapperEl.addEventListener("transitionend", v)
                  : x();
            };
            if (((e.autoplay.paused = !0), n))
              return p && (o = e.params.autoplay.delay), (p = !1), void i();
            const a = o || e.params.autoplay.delay;
            (o = a - (new Date().getTime() - g)),
              (e.isEnd && o < 0 && !e.params.loop) || (o < 0 && (o = 0), i());
          },
          x = () => {
            (e.isEnd && o < 0 && !e.params.loop) ||
              e.destroyed ||
              !e.autoplay.running ||
              ((g = new Date().getTime()),
              f ? ((f = !1), b(o)) : b(),
              (e.autoplay.paused = !1),
              r("autoplayResume"));
          },
          S = () => {
            if (e.destroyed || !e.autoplay.running) return;
            const t = Ot();
            "hidden" === t.visibilityState && ((f = !0), E(!0)),
              "visible" === t.visibilityState && x();
          },
          M = (e) => {
            "mouse" === e.pointerType && ((f = !0), E(!0));
          },
          C = (t) => {
            "mouse" === t.pointerType && e.autoplay.paused && x();
          };
        n("init", () => {
          e.params.autoplay.enabled &&
            (e.params.autoplay.pauseOnMouseEnter &&
              (e.el.addEventListener("pointerenter", M),
              e.el.addEventListener("pointerleave", C)),
            Ot().addEventListener("visibilitychange", S),
            (g = new Date().getTime()),
            w());
        }),
          n("destroy", () => {
            e.el.removeEventListener("pointerenter", M),
              e.el.removeEventListener("pointerleave", C),
              Ot().removeEventListener("visibilitychange", S),
              e.autoplay.running && T();
          }),
          n("beforeTransitionStart", (t, n, r) => {
            !e.destroyed &&
              e.autoplay.running &&
              (r || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : T());
          }),
          n("sliderFirstMove", () => {
            !e.destroyed &&
              e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? T()
                : ((c = !0),
                  (d = !1),
                  (f = !1),
                  (u = setTimeout(() => {
                    (f = !0), (d = !0), E(!0);
                  }, 200))));
          }),
          n("touchEnd", () => {
            if (!e.destroyed && e.autoplay.running && c) {
              if (
                (clearTimeout(u),
                clearTimeout(s),
                e.params.autoplay.disableOnInteraction)
              )
                return (d = !1), void (c = !1);
              d && e.params.cssMode && x(), (d = !1), (c = !1);
            }
          }),
          n("slideChange", () => {
            !e.destroyed && e.autoplay.running && (p = !0);
          }),
          Object.assign(e.autoplay, { start: w, stop: T, pause: E, resume: x });
      }
      function Mn(e, t) {
        const n = Bt(t);
        return (
          n !== t &&
            ((n.style.backfaceVisibility = "hidden"),
            (n.style["-webkit-backface-visibility"] = "hidden")),
          n
        );
      }
      function Cn({ swiper: e, extendParams: t, on: n }) {
        t({ fadeEffect: { crossFade: !1 } }),
          (function (e) {
            const {
              effect: t,
              swiper: n,
              on: r,
              setTranslate: i,
              setTransition: s,
              overwriteParams: a,
              perspective: o,
              recreateShadows: l,
              getEffectParams: c,
            } = e;
            let d;
            r("beforeInit", () => {
              if (n.params.effect !== t) return;
              n.classNames.push(`${n.params.containerModifierClass}${t}`),
                o &&
                  o() &&
                  n.classNames.push(`${n.params.containerModifierClass}3d`);
              const e = a ? a() : {};
              Object.assign(n.params, e), Object.assign(n.originalParams, e);
            }),
              r("setTranslate", () => {
                n.params.effect === t && i();
              }),
              r("setTransition", (e, r) => {
                n.params.effect === t && s(r);
              }),
              r("transitionEnd", () => {
                if (n.params.effect === t && l) {
                  if (!c || !c().slideShadows) return;
                  n.slides.forEach((e) => {
                    e.querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    ).forEach((e) => e.remove());
                  }),
                    l();
                }
              }),
              r("virtualUpdate", () => {
                n.params.effect === t &&
                  (n.slides.length || (d = !0),
                  requestAnimationFrame(() => {
                    d && n.slides && n.slides.length && (i(), (d = !1));
                  }));
              });
          })({
            effect: "fade",
            swiper: e,
            on: n,
            setTranslate: () => {
              const { slides: t } = e;
              e.params.fadeEffect;
              for (let n = 0; n < t.length; n += 1) {
                const t = e.slides[n];
                let r = -t.swiperSlideOffset;
                e.params.virtualTranslate || (r -= e.translate);
                let i = 0;
                e.isHorizontal() || ((i = r), (r = 0));
                const s = e.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(t.progress), 0)
                    : 1 + Math.min(Math.max(t.progress, -1), 0),
                  a = Mn(0, t);
                (a.style.opacity = s),
                  (a.style.transform = `translate3d(${r}px, ${i}px, 0px)`);
              }
            },
            setTransition: (t) => {
              const n = e.slides.map((e) => Bt(e));
              n.forEach((e) => {
                e.style.transitionDuration = `${t}ms`;
              }),
                (function ({
                  swiper: e,
                  duration: t,
                  transformElements: n,
                  allSlides: r,
                }) {
                  const { activeIndex: i } = e;
                  if (e.params.virtualTranslate && 0 !== t) {
                    let t,
                      s = !1;
                    (t = r
                      ? n
                      : n.filter((t) => {
                          return (
                            Yt(
                              t.classList.contains("swiper-slide-transform")
                                ? (n = t).parentElement
                                  ? n.parentElement
                                  : e.slides.filter(
                                      (e) =>
                                        e.shadowEl &&
                                        e.shadowEl === n.parentNode
                                    )[0]
                                : t
                            ) === i
                          );
                          var n;
                        })),
                      t.forEach((t) => {
                        !(function (e, t) {
                          t &&
                            e.addEventListener("transitionend", function n(r) {
                              r.target === e &&
                                (t.call(e, r),
                                e.removeEventListener("transitionend", n));
                            });
                        })(t, () => {
                          if (s) return;
                          if (!e || e.destroyed) return;
                          (s = !0), (e.animating = !1);
                          const t = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                          });
                          e.wrapperEl.dispatchEvent(t);
                        });
                      });
                  }
                })({
                  swiper: e,
                  duration: t,
                  transformElements: n,
                  allSlides: !0,
                });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !e.params.cssMode,
            }),
          });
      }
      function Pn(t) {
        let n = t.el.closest("[data-js-quad]"),
          r = null === n ? null : n.getAttribute("data-js-quad");
        return {
          quadEl: n,
          quadId: r,
          counterEl: null === n ? null : e('[data-js-counter="current"]', n),
        };
      }
      function Ln() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = "";
        return (
          null === e
            ? ((t = (function (e) {
                if (null == e) return null;
                let t = e.closest("[data-js-quad]");
                return null === t
                  ? null
                  : "#".concat(t.getAttribute("data-js-quad"));
              })(arguments.length > 1 ? arguments[1] : void 0)),
              null === t && (t = ""))
            : (t = e),
          {
            nextEl: "".concat(t, ".sw-arrow.sw-button-next").trim(),
            prevEl: "".concat(t, ".sw-arrow.sw-button-prev").trim(),
          }
        );
      }
      const On = { grabCursor: !0, loop: !0, speed: 3e3 };
      t('[data-js-swiper="tabs-clients"]').forEach((e) => {
        new bn(e, {
          modules: [Sn],
          ...On,
          slidesPerView: "auto",
          centeredSlides: !0,
          autoplay: { delay: 200, pauseOnMouseEnter: !1 },
          breakpoints: {
            770: { slidesPerView: 4, spaceBetween: 44, centeredSlides: !1 },
            980: { slidesPerView: 5, spaceBetween: 52, centeredSlides: !1 },
            1140: { slidesPerView: 6, spaceBetween: 70, centeredSlides: !1 },
          },
          on: {
            init: function (e) {
              e.customProps = { ...Pn(e) };
            },
          },
        });
      }),
        t('[data-js-swiper="reviews"]').forEach((e) => {
          const { nextEl: t, prevEl: n } = Ln(null, e);
          new bn(e, {
            modules: [Cn, xn, Tn, Sn],
            ...On,
            speed: 400,
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            autoplay: { delay: 3400 },
            navigation: { nextEl: t, prevEl: n },
            pagination: { el: ".bl-reviews-progress-bar", type: "progressbar" },
            on: {
              init: function (e) {
                e.customProps = { ...Pn(e) };
              },
            },
          });
        }),
        t('[data-js-swiper="insets-gallery"]').forEach((e) => {
          const { nextEl: t, prevEl: n } = Ln(null, e);
          new bn(e, {
            modules: [Cn, Sn],
            ...On,
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            navigation: { nextEl: t, prevEl: n },
            autoplay: { delay: 5e3 },
            on: {
              init: function (e) {
                e.customProps = { ...Pn(e) };
              },
            },
          });
        }),
        t('[data-js-swiper="filter"]').forEach((t) => {
          const { nextEl: n, prevEl: r } = Ln(null, t);
          new bn(t, {
            modules: [Tn],
            ...On,
            speed: 1e3,
            navigation: { nextEl: n, prevEl: r },
            on: {
              init: function (e) {
                e.customProps = { ...Pn(e) };
              },
              slideChange: function (t) {
                let n = t.slides[t.activeIndex],
                  r = e("[data-js-fil-target]", n);
                setTimeout(() => {
                  null !== r && r.click();
                }, 800);
              },
            },
          });
        }),
        [
          "#email-signup_FNAME",
          "#email-signup_LNAME",
          "#email-signup_email_address",
          ".form-module .form-module__field input",
          ".bl-login-form .bl-login-form__field.field--label input",
        ].forEach((e) => {
          if ("" === e) return;
          let n = t(e);
          !(function () {
            let e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
            if (null === t) return null;
            t.forEach((t) => {
              t.addEventListener("focus", function (n) {
                return null !== t.previousElementSibling &&
                  t.previousElementSibling.classList.contains("hidden")
                  ? null
                  : (n.preventDefault(),
                    (e = t.parentElement),
                    null === e ? null : void o(e, c));
              }),
                t.addEventListener("blur", function (n) {
                  return t.classList.contains("datepicker") ||
                    (null !== t.previousElementSibling &&
                      t.previousElementSibling.classList.contains("hidden")) ||
                    "" !== t.value
                    ? null
                    : (n.preventDefault(),
                      (e = t.parentElement),
                      null === e ? null : void l(e, c));
                });
            });
          })(n),
            (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              if (null === e) return null;
              e.forEach((e) => {
                e.setAttribute("autocomplete", "off");
              });
            })(n);
        }),
        window.addEventListener("load", () => {
          (t("p") || []).forEach(
            (e) => "" === e.innerHTML.trim() && e.parentNode.removeChild(e)
          ),
            t("[data-js-overflow]").forEach((t) => {
              let n = (function (t, n) {
                const r = (function (e, t) {
                  let n = e.getAttribute(t);
                  if (!n || "#" === n) {
                    let t = e.getAttribute("href");
                    if (!t || (!t.includes("#") && !t.startsWith(".")))
                      return null;
                    t.includes("#") &&
                      !t.startsWith("#") &&
                      (t = "#".concat(t.split("#")[1])),
                      (n = t && "#" !== t ? t.trim() : null);
                  }
                  return n;
                })(t, "data-js-overflow");
                return r && e(r) ? r : null;
              })(t);
              if (n) {
                let r = e(n);
                t.addEventListener("click", function (e) {
                  e.preventDefault(), a(r, "overflow-element");
                });
              }
              return null;
            });
        });
    })();
})();
//# sourceMappingURL=scripts.js.map
