!(function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
              ? e(t, !0)
              : function (t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return e(t);
                })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = t.document,
        o = Object.getPrototypeOf,
        s = n.slice,
        r = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        h = c.hasOwnProperty,
        d = h.toString,
        p = d.call(Object),
        f = {},
        g = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        m = function (t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function y(t, e, n) {
        var o,
            s = (e = e || i).createElement("script");
        if (((s.text = t), n)) for (o in v) n[o] && (s[o] = n[o]);
        e.head.appendChild(s).parentNode.removeChild(s);
    }
    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t;
    }
    var x = function (t, e) {
            return new x.fn.init(t, e);
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function _(t) {
        var e = !!t && "length" in t && t.length,
            n = b(t);
        return !g(t) && !m(t) && ("array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
    }
    (x.fn = x.prototype = {
        jquery: "3.3.1",
        constructor: x,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (t) {
            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function (t) {
            var e = x.merge(this.constructor(), t);
            return (e.prevObject = this), e;
        },
        each: function (t) {
            return x.each(this, t);
        },
        map: function (t) {
            return this.pushStack(
                x.map(this, function (e, n) {
                    return t.call(e, n, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
        (x.extend = x.fn.extend = function () {
            var t,
                e,
                n,
                i,
                o,
                s,
                r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++), "object" == typeof r || g(r) || (r = {}), a === l && ((r = this), a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        (n = r[e]),
                            r !== (i = t[e]) &&
                                (c && i && (x.isPlainObject(i) || (o = Array.isArray(i)))
                                    ? (o ? ((o = !1), (s = n && Array.isArray(n) ? n : [])) : (s = n && x.isPlainObject(n) ? n : {}), (r[e] = x.extend(c, s, i)))
                                    : void 0 !== i && (r[e] = i));
            return r;
        }),
        x.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== u.call(t) || ((e = o(t)) && ("function" != typeof (n = h.call(e, "constructor") && e.constructor) || d.call(n) !== p)));
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            globalEval: function (t) {
                y(t);
            },
            each: function (t, e) {
                var n,
                    i = 0;
                if (_(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                return t;
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(w, "");
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (_(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n;
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : l.call(e, t, n);
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return (t.length = o), t;
            },
            grep: function (t, e, n) {
                for (var i = [], o = 0, s = t.length, r = !n; o < s; o++) !e(t[o], o) !== r && i.push(t[o]);
                return i;
            },
            map: function (t, e, n) {
                var i,
                    o,
                    s = 0,
                    a = [];
                if (_(t)) for (i = t.length; s < i; s++) null != (o = e(t[s], s, n)) && a.push(o);
                else for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
                return r.apply([], a);
            },
            guid: 1,
            support: f,
        }),
        "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
        x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            c["[object " + e + "]"] = e.toLowerCase();
        });
    var C = (function (t) {
        var e,
            n,
            i,
            o,
            s,
            r,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            g,
            m,
            v,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = t.document,
            _ = 0,
            C = 0,
            T = rt(),
            $ = rt(),
            S = rt(),
            E = function (t, e) {
                return t === e && (h = !0), 0;
            },
            P = {}.hasOwnProperty,
            k = [],
            D = k.pop,
            A = k.push,
            L = k.push,
            j = k.slice,
            z = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                return -1;
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            N = "\\[" + H + "*(" + I + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + H + "*\\]",
            O = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            q = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            R = new RegExp("^" + H + "*," + H + "*"),
            B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            W = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            X = new RegExp(O),
            Y = new RegExp("^" + I + "$"),
            V = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
            },
            U = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            tt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function (t, e) {
                return e ? ("\0" === t ? "???" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
            },
            it = function () {
                d();
            },
            ot = yt(
                function (t) {
                    return !0 === t.disabled && ("form" in t || "label" in t);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((k = j.call(w.childNodes)), w.childNodes), k[w.childNodes.length].nodeType;
        } catch (t) {
            L = {
                apply: k.length
                    ? function (t, e) {
                          A.apply(t, j.call(e));
                      }
                    : function (t, e) {
                          for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                          t.length = n - 1;
                      },
            };
        }
        function st(t, e, i, o) {
            var s,
                a,
                c,
                u,
                h,
                f,
                v,
                y = e && e.ownerDocument,
                _ = e ? e.nodeType : 9;
            if (((i = i || []), "string" != typeof t || !t || (1 !== _ && 9 !== _ && 11 !== _))) return i;
            if (!o && ((e ? e.ownerDocument || e : w) !== p && d(e), (e = e || p), g)) {
                if (11 !== _ && (h = G.exec(t)))
                    if ((s = h[1])) {
                        if (9 === _) {
                            if (!(c = e.getElementById(s))) return i;
                            if (c.id === s) return i.push(c), i;
                        } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s) return i.push(c), i;
                    } else {
                        if (h[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(s)), i;
                    }
                if (n.qsa && !S[t + " "] && (!m || !m.test(t))) {
                    if (1 !== _) (y = e), (v = t);
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? (u = u.replace(et, nt)) : e.setAttribute("id", (u = x)), a = (f = r(t)).length; a--; ) f[a] = "#" + u + " " + vt(f[a]);
                        (v = f.join(",")), (y = (K.test(t) && gt(e.parentNode)) || e);
                    }
                    if (v)
                        try {
                            return L.apply(i, y.querySelectorAll(v)), i;
                        } catch (t) {
                        } finally {
                            u === x && e.removeAttribute("id");
                        }
                }
            }
            return l(t.replace(F, "$1"), e, i, o);
        }
        function rt() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = o);
            };
        }
        function at(t) {
            return (t[x] = !0), t;
        }
        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
        }
        function ct(t, e) {
            for (var n = t.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = e;
        }
        function ut(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function ht(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function dt(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function pt(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && ot(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function ft(t) {
            return at(function (e) {
                return (
                    (e = +e),
                    at(function (n, i) {
                        for (var o, s = t([], n.length, e), r = s.length; r--; ) n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
                    })
                );
            });
        }
        function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((n = st.support = {}),
        (s = st.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }),
        (d = st.setDocument = function (t) {
            var e,
                o,
                r = t ? t.ownerDocument || t : w;
            return r !== p && 9 === r.nodeType && r.documentElement
                ? ((f = (p = r).documentElement),
                  (g = !s(p)),
                  w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)),
                  (n.attributes = lt(function (t) {
                      return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (n.getElementsByTagName = lt(function (t) {
                      return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName = Z.test(p.getElementsByClassName)),
                  (n.getById = lt(function (t) {
                      return (f.appendChild(t).id = x), !p.getElementsByName || !p.getElementsByName(x).length;
                  })),
                  n.getById
                      ? ((i.filter.ID = function (t) {
                            var e = t.replace(J, tt);
                            return function (t) {
                                return t.getAttribute("id") === e;
                            };
                        }),
                        (i.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var n = e.getElementById(t);
                                return n ? [n] : [];
                            }
                        }))
                      : ((i.filter.ID = function (t) {
                            var e = t.replace(J, tt);
                            return function (t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e;
                            };
                        }),
                        (i.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var n,
                                    i,
                                    o,
                                    s = e.getElementById(t);
                                if (s) {
                                    if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                    for (o = e.getElementsByName(t), i = 0; (s = o[i++]); ) if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                }
                                return [];
                            }
                        })),
                  (i.find.TAG = n.getElementsByTagName
                      ? function (t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                        }
                      : function (t, e) {
                            var n,
                                i = [],
                                o = 0,
                                s = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                                return i;
                            }
                            return s;
                        }),
                  (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (t, e) {
                          if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
                      }),
                  (v = []),
                  (m = []),
                  (n.qsa = Z.test(p.querySelectorAll)) &&
                      (lt(function (t) {
                          (f.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                              t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"),
                              t.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + M + ")"),
                              t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                              t.querySelectorAll(":checked").length || m.push(":checked"),
                              t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
                      }),
                      lt(function (t) {
                          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var e = p.createElement("input");
                          e.setAttribute("type", "hidden"),
                              t.appendChild(e).setAttribute("name", "D"),
                              t.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="),
                              2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                              (f.appendChild(t).disabled = !0),
                              2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                              t.querySelectorAll("*,:x"),
                              m.push(",.*:");
                      })),
                  (n.matchesSelector = Z.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                      lt(function (t) {
                          (n.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), v.push("!=", O);
                      }),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (e = Z.test(f.compareDocumentPosition)),
                  (b =
                      e || Z.test(f.contains)
                          ? function (t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                            }
                          : function (t, e) {
                                if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                return !1;
                            }),
                  (E = e
                      ? function (t, e) {
                            if (t === e) return (h = !0), 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return (
                                i ||
                                (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                    ? t === p || (t.ownerDocument === w && b(w, t))
                                        ? -1
                                        : e === p || (e.ownerDocument === w && b(w, e))
                                        ? 1
                                        : u
                                        ? z(u, t) - z(u, e)
                                        : 0
                                    : 4 & i
                                    ? -1
                                    : 1)
                            );
                        }
                      : function (t, e) {
                            if (t === e) return (h = !0), 0;
                            var n,
                                i = 0,
                                o = t.parentNode,
                                s = e.parentNode,
                                r = [t],
                                a = [e];
                            if (!o || !s) return t === p ? -1 : e === p ? 1 : o ? -1 : s ? 1 : u ? z(u, t) - z(u, e) : 0;
                            if (o === s) return ut(t, e);
                            for (n = t; (n = n.parentNode); ) r.unshift(n);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (; r[i] === a[i]; ) i++;
                            return i ? ut(r[i], a[i]) : r[i] === w ? -1 : a[i] === w ? 1 : 0;
                        }),
                  p)
                : p;
        }),
        (st.matches = function (t, e) {
            return st(t, null, null, e);
        }),
        (st.matchesSelector = function (t, e) {
            if (((t.ownerDocument || t) !== p && d(t), (e = e.replace(W, "='$1']")), n.matchesSelector && g && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))))
                try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                } catch (t) {}
            return st(e, p, null, [t]).length > 0;
        }),
        (st.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && d(t), b(t, e);
        }),
        (st.attr = function (t, e) {
            (t.ownerDocument || t) !== p && d(t);
            var o = i.attrHandle[e.toLowerCase()],
                s = o && P.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
            return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null;
        }),
        (st.escape = function (t) {
            return (t + "").replace(et, nt);
        }),
        (st.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (st.uniqueSort = function (t) {
            var e,
                i = [],
                o = 0,
                s = 0;
            if (((h = !n.detectDuplicates), (u = !n.sortStable && t.slice(0)), t.sort(E), h)) {
                for (; (e = t[s++]); ) e === t[s] && (o = i.push(s));
                for (; o--; ) t.splice(i[o], 1);
            }
            return (u = null), t;
        }),
        (o = st.getText = function (t) {
            var e,
                n = "",
                i = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += o(e);
            return n;
        }),
        ((i = st.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (t) {
                    return (t[1] = t[1].replace(J, tt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function (t) {
                    return (
                        (t[1] = t[1].toLowerCase()),
                        "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && st.error(t[0]),
                        t
                    );
                },
                PSEUDO: function (t) {
                    var e,
                        n = !t[6] && t[2];
                    return V.CHILD.test(t[0])
                        ? null
                        : (t[3] ? (t[2] = t[4] || t[5] || "") : n && X.test(n) && (e = r(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                },
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t
                        ? function () {
                              return !0;
                          }
                        : function (t) {
                              return t.nodeName && t.nodeName.toLowerCase() === e;
                          };
                },
                CLASS: function (t) {
                    var e = T[t + " "];
                    return (
                        e ||
                        ((e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) &&
                            T(t, function (t) {
                                return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (t, e, n) {
                    return function (i) {
                        var o = st.attr(i, t);
                        return null == o
                            ? "!=" === e
                            : !e ||
                                  ((o += ""),
                                  "=" === e
                                      ? o === n
                                      : "!=" === e
                                      ? o !== n
                                      : "^=" === e
                                      ? n && 0 === o.indexOf(n)
                                      : "*=" === e
                                      ? n && o.indexOf(n) > -1
                                      : "$=" === e
                                      ? n && o.slice(-n.length) === n
                                      : "~=" === e
                                      ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1
                                      : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (t, e, n, i, o) {
                    var s = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === o
                        ? function (t) {
                              return !!t.parentNode;
                          }
                        : function (e, n, l) {
                              var c,
                                  u,
                                  h,
                                  d,
                                  p,
                                  f,
                                  g = s !== r ? "nextSibling" : "previousSibling",
                                  m = e.parentNode,
                                  v = a && e.nodeName.toLowerCase(),
                                  y = !l && !a,
                                  b = !1;
                              if (m) {
                                  if (s) {
                                      for (; g; ) {
                                          for (d = e; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                          f = g = "only" === t && !f && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                                      for (
                                          b = (p = (c = (u = (h = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], d = p && m.childNodes[p];
                                          (d = (++p && d && d[g]) || (b = p = 0) || f.pop());

                                      )
                                          if (1 === d.nodeType && ++b && d === e) {
                                              u[t] = [_, p, b];
                                              break;
                                          }
                                  } else if ((y && (b = p = (c = (u = (h = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === b))
                                      for (
                                          ;
                                          (d = (++p && d && d[g]) || (b = p = 0) || f.pop()) &&
                                          ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [_, b]), d !== e));

                                      );
                                  return (b -= o) === i || (b % i == 0 && b / i >= 0);
                              }
                          };
                },
                PSEUDO: function (t, e) {
                    var n,
                        o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                    return o[x]
                        ? o(e)
                        : o.length > 1
                        ? ((n = [t, t, "", e]),
                          i.setFilters.hasOwnProperty(t.toLowerCase())
                              ? at(function (t, n) {
                                    for (var i, s = o(t, e), r = s.length; r--; ) t[(i = z(t, s[r]))] = !(n[i] = s[r]);
                                })
                              : function (t) {
                                    return o(t, 0, n);
                                })
                        : o;
                },
            },
            pseudos: {
                not: at(function (t) {
                    var e = [],
                        n = [],
                        i = a(t.replace(F, "$1"));
                    return i[x]
                        ? at(function (t, e, n, o) {
                              for (var s, r = i(t, null, o, []), a = t.length; a--; ) (s = r[a]) && (t[a] = !(e[a] = s));
                          })
                        : function (t, o, s) {
                              return (e[0] = t), i(e, null, s, n), (e[0] = null), !n.pop();
                          };
                }),
                has: at(function (t) {
                    return function (e) {
                        return st(t, e).length > 0;
                    };
                }),
                contains: at(function (t) {
                    return (
                        (t = t.replace(J, tt)),
                        function (e) {
                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                        }
                    );
                }),
                lang: at(function (t) {
                    return (
                        Y.test(t || "") || st.error("unsupported lang: " + t),
                        (t = t.replace(J, tt).toLowerCase()),
                        function (e) {
                            var n;
                            do {
                                if ((n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                },
                root: function (t) {
                    return t === f;
                },
                focus: function (t) {
                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: pt(!1),
                disabled: pt(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (t) {
                    return !i.pseudos.empty(t);
                },
                header: function (t) {
                    return Q.test(t.nodeName);
                },
                input: function (t) {
                    return U.test(t.nodeName);
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e && "button" === t.type) || "button" === e;
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: ft(function () {
                    return [0];
                }),
                last: ft(function (t, e) {
                    return [e - 1];
                }),
                eq: ft(function (t, e, n) {
                    return [n < 0 ? n + e : n];
                }),
                even: ft(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t;
                }),
                odd: ft(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t;
                }),
                lt: ft(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                    return t;
                }),
                gt: ft(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                    return t;
                }),
            },
        }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[e] = ht(e);
        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
        function mt() {}
        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i;
        }
        function yt(t, e, n) {
            var i = e.dir,
                o = e.next,
                s = o || i,
                r = n && "parentNode" === s,
                a = C++;
            return e.first
                ? function (e, n, o) {
                      for (; (e = e[i]); ) if (1 === e.nodeType || r) return t(e, n, o);
                      return !1;
                  }
                : function (e, n, l) {
                      var c,
                          u,
                          h,
                          d = [_, a];
                      if (l) {
                          for (; (e = e[i]); ) if ((1 === e.nodeType || r) && t(e, n, l)) return !0;
                      } else
                          for (; (e = e[i]); )
                              if (1 === e.nodeType || r)
                                  if (((u = (h = e[x] || (e[x] = {}))[e.uniqueID] || (h[e.uniqueID] = {})), o && o === e.nodeName.toLowerCase())) e = e[i] || e;
                                  else {
                                      if ((c = u[s]) && c[0] === _ && c[1] === a) return (d[2] = c[2]);
                                      if (((u[s] = d), (d[2] = t(e, n, l)))) return !0;
                                  }
                      return !1;
                  };
        }
        function bt(t) {
            return t.length > 1
                ? function (e, n, i) {
                      for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                      return !0;
                  }
                : t[0];
        }
        function xt(t, e, n, i, o) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), c && e.push(a)));
            return r;
        }
        function wt(t, e, n, i, o, s) {
            return (
                i && !i[x] && (i = wt(i)),
                o && !o[x] && (o = wt(o, s)),
                at(function (s, r, a, l) {
                    var c,
                        u,
                        h,
                        d = [],
                        p = [],
                        f = r.length,
                        g =
                            s ||
                            (function (t, e, n) {
                                for (var i = 0, o = e.length; i < o; i++) st(t, e[i], n);
                                return n;
                            })(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || (!s && e) ? g : xt(g, d, t, a, l),
                        v = n ? (o || (s ? t : f || i) ? [] : r) : m;
                    if ((n && n(m, v, a, l), i)) for (c = xt(v, p), i(c, [], a, l), u = c.length; u--; ) (h = c[u]) && (v[p[u]] = !(m[p[u]] = h));
                    if (s) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = v.length; u--; ) (h = v[u]) && c.push((m[u] = h));
                                o(null, (v = []), c, l);
                            }
                            for (u = v.length; u--; ) (h = v[u]) && (c = o ? z(s, h) : d[u]) > -1 && (s[c] = !(r[c] = h));
                        }
                    } else (v = xt(v === r ? v.splice(f, v.length) : v)), o ? o(null, r, v, l) : L.apply(r, v);
                })
            );
        }
        function _t(t) {
            for (
                var e,
                    n,
                    o,
                    s = t.length,
                    r = i.relative[t[0].type],
                    a = r || i.relative[" "],
                    l = r ? 1 : 0,
                    u = yt(
                        function (t) {
                            return t === e;
                        },
                        a,
                        !0
                    ),
                    h = yt(
                        function (t) {
                            return z(e, t) > -1;
                        },
                        a,
                        !0
                    ),
                    d = [
                        function (t, n, i) {
                            var o = (!r && (i || n !== c)) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                            return (e = null), o;
                        },
                    ];
                l < s;
                l++
            )
                if ((n = i.relative[t[l].type])) d = [yt(bt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                        for (o = ++l; o < s && !i.relative[t[o].type]; o++);
                        return wt(l > 1 && bt(d), l > 1 && vt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(F, "$1"), n, l < o && _t(t.slice(l, o)), o < s && _t((t = t.slice(o))), o < s && vt(t));
                    }
                    d.push(n);
                }
            return bt(d);
        }
        function Ct(t, e) {
            var n = e.length > 0,
                o = t.length > 0,
                s = function (s, r, a, l, u) {
                    var h,
                        f,
                        m,
                        v = 0,
                        y = "0",
                        b = s && [],
                        x = [],
                        w = c,
                        C = s || (o && i.find.TAG("*", u)),
                        T = (_ += null == w ? 1 : Math.random() || 0.1),
                        $ = C.length;
                    for (u && (c = r === p || r || u); y !== $ && null != (h = C[y]); y++) {
                        if (o && h) {
                            for (f = 0, r || h.ownerDocument === p || (d(h), (a = !g)); (m = t[f++]); )
                                if (m(h, r || p, a)) {
                                    l.push(h);
                                    break;
                                }
                            u && (_ = T);
                        }
                        n && ((h = !m && h) && v--, s && b.push(h));
                    }
                    if (((v += y), n && y !== v)) {
                        for (f = 0; (m = e[f++]); ) m(b, x, r, a);
                        if (s) {
                            if (v > 0) for (; y--; ) b[y] || x[y] || (x[y] = D.call(l));
                            x = xt(x);
                        }
                        L.apply(l, x), u && !s && x.length > 0 && v + e.length > 1 && st.uniqueSort(l);
                    }
                    return u && ((_ = T), (c = w)), b;
                };
            return n ? at(s) : s;
        }
        return (
            (mt.prototype = i.filters = i.pseudos),
            (i.setFilters = new mt()),
            (r = st.tokenize = function (t, e) {
                var n,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    u = $[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (a = t, l = [], c = i.preFilter; a; ) {
                    for (r in ((n && !(o = R.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                    (n = !1),
                    (o = B.exec(a)) && ((n = o.shift()), s.push({ value: n, type: o[0].replace(F, " ") }), (a = a.slice(n.length))),
                    i.filter))
                        !(o = V[r].exec(a)) || (c[r] && !(o = c[r](o))) || ((n = o.shift()), s.push({ value: n, type: r, matches: o }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return e ? a.length : a ? st.error(t) : $(t, l).slice(0);
            }),
            (a = st.compile = function (t, e) {
                var n,
                    i = [],
                    o = [],
                    s = S[t + " "];
                if (!s) {
                    for (e || (e = r(t)), n = e.length; n--; ) (s = _t(e[n]))[x] ? i.push(s) : o.push(s);
                    (s = S(t, Ct(o, i))).selector = t;
                }
                return s;
            }),
            (l = st.select = function (t, e, n, o) {
                var s,
                    l,
                    c,
                    u,
                    h,
                    d = "function" == typeof t && t,
                    p = !o && r((t = d.selector || t));
                if (((n = n || []), 1 === p.length)) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return n;
                        d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                    }
                    for (s = V.needsContext.test(t) ? 0 : l.length; s-- && ((c = l[s]), !i.relative[(u = c.type)]); )
                        if ((h = i.find[u]) && (o = h(c.matches[0].replace(J, tt), (K.test(l[0].type) && gt(e.parentNode)) || e))) {
                            if ((l.splice(s, 1), !(t = o.length && vt(l)))) return L.apply(n, o), n;
                            break;
                        }
                }
                return (d || a(t, p))(o, e, !g, n, !e || (K.test(t) && gt(e.parentNode)) || e), n;
            }),
            (n.sortStable = x.split("").sort(E).join("") === x),
            (n.detectDuplicates = !!h),
            d(),
            (n.sortDetached = lt(function (t) {
                return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
            })),
            lt(function (t) {
                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
            }) ||
                ct("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                lt(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                })) ||
                ct("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                }),
            lt(function (t) {
                return null == t.getAttribute("disabled");
            }) ||
                ct(M, function (t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                }),
            st
        );
    })(t);
    (x.find = C), (x.expr = C.selectors), (x.expr[":"] = x.expr.pseudos), (x.uniqueSort = x.unique = C.uniqueSort), (x.text = C.getText), (x.isXMLDoc = C.isXML), (x.contains = C.contains), (x.escapeSelector = C.escape);
    var T = function (t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && x(t).is(n)) break;
                    i.push(t);
                }
            return i;
        },
        $ = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        },
        S = x.expr.match.needsContext;
    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function k(t, e, n) {
        return g(e)
            ? x.grep(t, function (t, i) {
                  return !!e.call(t, i, t) !== n;
              })
            : e.nodeType
            ? x.grep(t, function (t) {
                  return (t === e) !== n;
              })
            : "string" != typeof e
            ? x.grep(t, function (t) {
                  return l.call(e, t) > -1 !== n;
              })
            : x.filter(e, t, n);
    }
    (x.filter = function (t, e, n) {
        var i = e[0];
        return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType
                ? x.find.matchesSelector(i, t)
                    ? [i]
                    : []
                : x.find.matches(
                      t,
                      x.grep(e, function (t) {
                          return 1 === t.nodeType;
                      })
                  )
        );
    }),
        x.fn.extend({
            find: function (t) {
                var e,
                    n,
                    i = this.length,
                    o = this;
                if ("string" != typeof t)
                    return this.pushStack(
                        x(t).filter(function () {
                            for (e = 0; e < i; e++) if (x.contains(o[e], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), e = 0; e < i; e++) x.find(t, o[e], n);
                return i > 1 ? x.uniqueSort(n) : n;
            },
            filter: function (t) {
                return this.pushStack(k(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(k(this, t || [], !0));
            },
            is: function (t) {
                return !!k(this, "string" == typeof t && S.test(t) ? x(t) : t || [], !1).length;
            },
        });
    var D,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((x.fn.init = function (t, e, n) {
        var o, s;
        if (!t) return this;
        if (((n = n || D), "string" == typeof t)) {
            if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : A.exec(t)) || (!o[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (((e = e instanceof x ? e[0] : e), x.merge(this, x.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), P.test(o[1]) && x.isPlainObject(e))) for (o in e) g(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this;
            }
            return (s = i.getElementById(o[2])) && ((this[0] = s), (this.length = 1)), this;
        }
        return t.nodeType ? ((this[0] = t), (this.length = 1), this) : g(t) ? (void 0 !== n.ready ? n.ready(t) : t(x)) : x.makeArray(t, this);
    }).prototype = x.fn),
        (D = x(i));
    var L = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };
    function z(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
    }
    x.fn.extend({
        has: function (t) {
            var e = x(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (x.contains(this, e[t])) return !0;
            });
        },
        closest: function (t, e) {
            var n,
                i = 0,
                o = this.length,
                s = [],
                r = "string" != typeof t && x(t);
            if (!S.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                            s.push(n);
                            break;
                        }
            return this.pushStack(s.length > 1 ? x.uniqueSort(s) : s);
        },
        index: function (t) {
            return t ? ("string" == typeof t ? l.call(x(t), this[0]) : l.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (t, e) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
    }),
        x.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return T(t, "parentNode");
                },
                parentsUntil: function (t, e, n) {
                    return T(t, "parentNode", n);
                },
                next: function (t) {
                    return z(t, "nextSibling");
                },
                prev: function (t) {
                    return z(t, "previousSibling");
                },
                nextAll: function (t) {
                    return T(t, "nextSibling");
                },
                prevAll: function (t) {
                    return T(t, "previousSibling");
                },
                nextUntil: function (t, e, n) {
                    return T(t, "nextSibling", n);
                },
                prevUntil: function (t, e, n) {
                    return T(t, "previousSibling", n);
                },
                siblings: function (t) {
                    return $((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return $(t.firstChild);
                },
                contents: function (t) {
                    return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), x.merge([], t.childNodes));
                },
            },
            function (t, e) {
                x.fn[t] = function (n, i) {
                    var o = x.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), this.length > 1 && (j[t] || x.uniqueSort(o), L.test(t) && o.reverse()), this.pushStack(o);
                };
            }
        );
    var M = /[^\x20\t\r\n\f]+/g;
    function H(t) {
        return t;
    }
    function I(t) {
        throw t;
    }
    function N(t, e, n, i) {
        var o;
        try {
            t && g((o = t.promise)) ? o.call(t).done(e).fail(n) : t && g((o = t.then)) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
        } catch (t) {
            n.apply(void 0, [t]);
        }
    }
    (x.Callbacks = function (t) {
        t =
            "string" == typeof t
                ? (function (t) {
                      var e = {};
                      return (
                          x.each(t.match(M) || [], function (t, n) {
                              e[n] = !0;
                          }),
                          e
                      );
                  })(t)
                : x.extend({}, t);
        var e,
            n,
            i,
            o,
            s = [],
            r = [],
            a = -1,
            l = function () {
                for (o = o || t.once, i = e = !0; r.length; a = -1) for (n = r.shift(); ++a < s.length; ) !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = s.length), (n = !1));
                t.memory || (n = !1), (e = !1), o && (s = n ? [] : "");
            },
            c = {
                add: function () {
                    return (
                        s &&
                            (n && !e && ((a = s.length - 1), r.push(n)),
                            (function e(n) {
                                x.each(n, function (n, i) {
                                    g(i) ? (t.unique && c.has(i)) || s.push(i) : i && i.length && "string" !== b(i) && e(i);
                                });
                            })(arguments),
                            n && !e && l()),
                        this
                    );
                },
                remove: function () {
                    return (
                        x.each(arguments, function (t, e) {
                            for (var n; (n = x.inArray(e, s, n)) > -1; ) s.splice(n, 1), n <= a && a--;
                        }),
                        this
                    );
                },
                has: function (t) {
                    return t ? x.inArray(t, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (o = r = []), (s = n = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (o = r = []), n || e || (s = n = ""), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (t, n) {
                    return o || ((n = [t, (n = n || []).slice ? n.slice() : n]), r.push(n), e || l()), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return c;
    }),
        x.extend({
            Deferred: function (e) {
                var n = [
                        ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                        ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    o = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (t) {
                            return o.then(null, t);
                        },
                        pipe: function () {
                            var t = arguments;
                            return x
                                .Deferred(function (e) {
                                    x.each(n, function (n, i) {
                                        var o = g(t[i[4]]) && t[i[4]];
                                        s[i[1]](function () {
                                            var t = o && o.apply(this, arguments);
                                            t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        then: function (e, i, o) {
                            var s = 0;
                            function r(e, n, i, o) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        c = function () {
                                            var t, c;
                                            if (!(e < s)) {
                                                if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (c = t && ("object" == typeof t || "function" == typeof t) && t.then),
                                                    g(c)
                                                        ? o
                                                            ? c.call(t, r(s, n, H, o), r(s, n, I, o))
                                                            : (s++, c.call(t, r(s, n, H, o), r(s, n, I, o), r(s, n, H, n.notifyWith)))
                                                        : (i !== H && ((a = void 0), (l = [t])), (o || n.resolveWith)(a, l));
                                            }
                                        },
                                        u = o
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (t) {
                                                      x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= s && (i !== I && ((a = void 0), (l = [t])), n.rejectWith(a, l));
                                                  }
                                              };
                                    e ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), t.setTimeout(u));
                                };
                            }
                            return x
                                .Deferred(function (t) {
                                    n[0][3].add(r(0, t, g(o) ? o : H, t.notifyWith)), n[1][3].add(r(0, t, g(e) ? e : H)), n[2][3].add(r(0, t, g(i) ? i : I));
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? x.extend(t, o) : o;
                        },
                    },
                    s = {};
                return (
                    x.each(n, function (t, e) {
                        var r = e[2],
                            a = e[5];
                        (o[e[1]] = r.add),
                            a &&
                                r.add(
                                    function () {
                                        i = a;
                                    },
                                    n[3 - t][2].disable,
                                    n[3 - t][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            r.add(e[3].fire),
                            (s[e[0]] = function () {
                                return s[e[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[e[0] + "With"] = r.fireWith);
                    }),
                    o.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = s.call(arguments),
                    r = x.Deferred(),
                    a = function (t) {
                        return function (n) {
                            (i[t] = this), (o[t] = arguments.length > 1 ? s.call(arguments) : n), --e || r.resolveWith(i, o);
                        };
                    };
                if (e <= 1 && (N(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || g(o[n] && o[n].then))) return r.then();
                for (; n--; ) N(o[n], a(n), r.reject);
                return r.promise();
            },
        });
    var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (x.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && O.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
    }),
        (x.readyException = function (e) {
            t.setTimeout(function () {
                throw e;
            });
        });
    var q = x.Deferred();
    function F() {
        i.removeEventListener("DOMContentLoaded", F), t.removeEventListener("load", F), x.ready();
    }
    (x.fn.ready = function (t) {
        return (
            q.then(t).catch(function (t) {
                x.readyException(t);
            }),
            this
        );
    }),
        x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --x.readyWait : x.isReady) || ((x.isReady = !0), (!0 !== t && --x.readyWait > 0) || q.resolveWith(i, [x]));
            },
        }),
        (x.ready.then = q.then),
        "complete" === i.readyState || ("loading" !== i.readyState && !i.documentElement.doScroll) ? t.setTimeout(x.ready) : (i.addEventListener("DOMContentLoaded", F), t.addEventListener("load", F));
    var R = function (t, e, n, i, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === b(n)) for (a in ((o = !0), n)) R(t, e, a, n[a], !0, s, r);
            else if (
                void 0 !== i &&
                ((o = !0),
                g(i) || (r = !0),
                c &&
                    (r
                        ? (e.call(t, i), (e = null))
                        : ((c = e),
                          (e = function (t, e, n) {
                              return c.call(x(t), n);
                          }))),
                e)
            )
                for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : s;
        },
        B = /^-ms-/,
        W = /-([a-z])/g;
    function X(t, e) {
        return e.toUpperCase();
    }
    function Y(t) {
        return t.replace(B, "ms-").replace(W, X);
    }
    var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    function U() {
        this.expando = x.expando + U.uid++;
    }
    (U.uid = 1),
        (U.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || ((e = {}), V(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
            },
            set: function (t, e, n) {
                var i,
                    o = this.cache(t);
                if ("string" == typeof e) o[Y(e)] = n;
                else for (i in e) o[Y(i)] = e[i];
                return o;
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
            },
            access: function (t, e, n) {
                return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
                var n,
                    i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(M) || []).length;
                        for (; n--; ) delete i[e[n]];
                    }
                    (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !x.isEmptyObject(e);
            },
        });
    var Q = new U(),
        Z = new U(),
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function J(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (((i = "data-" + e.replace(K, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                try {
                    n = (function (t) {
                        return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : G.test(t) ? JSON.parse(t) : t));
                    })(n);
                } catch (t) {}
                Z.set(t, e, n);
            } else n = void 0;
        return n;
    }
    x.extend({
        hasData: function (t) {
            return Z.hasData(t) || Q.hasData(t);
        },
        data: function (t, e, n) {
            return Z.access(t, e, n);
        },
        removeData: function (t, e) {
            Z.remove(t, e);
        },
        _data: function (t, e, n) {
            return Q.access(t, e, n);
        },
        _removeData: function (t, e) {
            Q.remove(t, e);
        },
    }),
        x.fn.extend({
            data: function (t, e) {
                var n,
                    i,
                    o,
                    s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && ((o = Z.get(s)), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                        for (n = r.length; n--; ) r[n] && 0 === (i = r[n].name).indexOf("data-") && ((i = Y(i.slice(5))), J(s, i, o[i]));
                        Q.set(s, "hasDataAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof t
                    ? this.each(function () {
                          Z.set(this, t);
                      })
                    : R(
                          this,
                          function (e) {
                              var n;
                              if (s && void 0 === e) {
                                  if (void 0 !== (n = Z.get(s, t))) return n;
                                  if (void 0 !== (n = J(s, t))) return n;
                              } else
                                  this.each(function () {
                                      Z.set(this, t, e);
                                  });
                          },
                          null,
                          e,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (t) {
                return this.each(function () {
                    Z.remove(this, t);
                });
            },
        }),
        x.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return (e = (e || "fx") + "queue"), (i = Q.get(t, e)), n && (!i || Array.isArray(n) ? (i = Q.access(t, e, x.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = x.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    s = x._queueHooks(t, e);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                        ("fx" === e && n.unshift("inprogress"),
                        delete s.stop,
                        o.call(
                            t,
                            function () {
                                x.dequeue(t, e);
                            },
                            s
                        )),
                    !i && s && s.empty.fire();
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return (
                    Q.get(t, n) ||
                    Q.access(t, n, {
                        empty: x.Callbacks("once memory").add(function () {
                            Q.remove(t, [e + "queue", n]);
                        }),
                    })
                );
            },
        }),
        x.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), n--),
                    arguments.length < n
                        ? x.queue(this[0], t)
                        : void 0 === e
                        ? this
                        : this.each(function () {
                              var n = x.queue(this, t, e);
                              x._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t);
                          })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    x.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var n,
                    i = 1,
                    o = x.Deferred(),
                    s = this,
                    r = this.length,
                    a = function () {
                        --i || o.resolveWith(s, [s]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; r--; ) (n = Q.get(s[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e);
            },
        });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = function (t, e) {
            return "none" === (t = e || t).style.display || ("" === t.style.display && x.contains(t.ownerDocument, t) && "none" === x.css(t, "display"));
        },
        ot = function (t, e, n, i) {
            var o,
                s,
                r = {};
            for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
            for (s in ((o = n.apply(t, i || [])), e)) t.style[s] = r[s];
            return o;
        };
    function st(t, e, n, i) {
        var o,
            s,
            r = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return x.css(t, e, "");
                  },
            l = a(),
            c = (n && n[3]) || (x.cssNumber[e] ? "" : "px"),
            u = (x.cssNumber[e] || ("px" !== c && +l)) && et.exec(x.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; r--; ) x.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0), (u /= s);
            (u *= 2), x.style(t, e, u + c), (n = n || []);
        }
        return n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = o))), o;
    }
    var rt = {};
    function at(t) {
        var e,
            n = t.ownerDocument,
            i = t.nodeName,
            o = rt[i];
        return o || ((e = n.body.appendChild(n.createElement(i))), (o = x.css(e, "display")), e.parentNode.removeChild(e), "none" === o && (o = "block"), (rt[i] = o), o);
    }
    function lt(t, e) {
        for (var n, i, o = [], s = 0, r = t.length; s < r; s++)
            (i = t[s]).style &&
                ((n = i.style.display),
                e ? ("none" === n && ((o[s] = Q.get(i, "display") || null), o[s] || (i.style.display = "")), "" === i.style.display && it(i) && (o[s] = at(i))) : "none" !== n && ((o[s] = "none"), Q.set(i, "display", n)));
        for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
        return t;
    }
    x.fn.extend({
        show: function () {
            return lt(this, !0);
        },
        hide: function () {
            return lt(this);
        },
        toggle: function (t) {
            return "boolean" == typeof t
                ? t
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      it(this) ? x(this).show() : x(this).hide();
                  });
        },
    });
    var ct = /^(?:checkbox|radio)$/i,
        ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i,
        dt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    function pt(t, e) {
        var n;
        return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && E(t, e)) ? x.merge([t], n) : n;
    }
    function ft(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"));
    }
    (dt.optgroup = dt.option), (dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead), (dt.th = dt.td);
    var gt = /<|&#?\w+;/;
    function mt(t, e, n, i, o) {
        for (var s, r, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((s = t[p]) || 0 === s)
                if ("object" === b(s)) x.merge(d, s.nodeType ? [s] : s);
                else if (gt.test(s)) {
                    for (r = r || h.appendChild(e.createElement("div")), a = (ut.exec(s) || ["", ""])[1].toLowerCase(), l = dt[a] || dt._default, r.innerHTML = l[1] + x.htmlPrefilter(s) + l[2], u = l[0]; u--; ) r = r.lastChild;
                    x.merge(d, r.childNodes), ((r = h.firstChild).textContent = "");
                } else d.push(e.createTextNode(s));
        for (h.textContent = "", p = 0; (s = d[p++]); )
            if (i && x.inArray(s, i) > -1) o && o.push(s);
            else if (((c = x.contains(s.ownerDocument, s)), (r = pt(h.appendChild(s), "script")), c && ft(r), n)) for (u = 0; (s = r[u++]); ) ht.test(s.type || "") && n.push(s);
        return h;
    }
    !(function () {
        var t = i.createDocumentFragment().appendChild(i.createElement("div")),
            e = i.createElement("input");
        e.setAttribute("type", "radio"),
            e.setAttribute("checked", "checked"),
            e.setAttribute("name", "t"),
            t.appendChild(e),
            (f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var vt = i.documentElement,
        yt = /^key/,
        bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;
    function wt() {
        return !0;
    }
    function _t() {
        return !1;
    }
    function Ct() {
        try {
            return i.activeElement;
        } catch (t) {}
    }
    function Tt(t, e, n, i, o, s) {
        var r, a;
        if ("object" == typeof e) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) Tt(t, a, n, i, e[a], s);
            return t;
        }
        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = _t;
        else if (!o) return t;
        return (
            1 === s &&
                ((r = o),
                ((o = function (t) {
                    return x().off(t), r.apply(this, arguments);
                }).guid = r.guid || (r.guid = x.guid++))),
            t.each(function () {
                x.event.add(this, e, o, i, n);
            })
        );
    }
    (x.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                u,
                h,
                d,
                p,
                f,
                g,
                m = Q.get(t);
            if (m)
                for (
                    n.handler && ((n = (s = n).handler), (o = s.selector)),
                        o && x.find.matchesSelector(vt, o),
                        n.guid || (n.guid = x.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (r = m.handle) ||
                            (r = m.handle = function (e) {
                                return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        c = (e = (e || "").match(M) || [""]).length;
                    c--;

                )
                    (p = g = (a = xt.exec(e[c]) || [])[1]),
                        (f = (a[2] || "").split(".").sort()),
                        p &&
                            ((h = x.event.special[p] || {}),
                            (p = (o ? h.delegateType : h.bindType) || p),
                            (h = x.event.special[p] || {}),
                            (u = x.extend({ type: p, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: f.join(".") }, s)),
                            (d = l[p]) || (((d = l[p] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(t, i, f, r)) || (t.addEventListener && t.addEventListener(p, r))),
                            h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)),
                            o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                            (x.event.global[p] = !0));
        },
        remove: function (t, e, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                u,
                h,
                d,
                p,
                f,
                g,
                m = Q.hasData(t) && Q.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(M) || [""]).length; c--; )
                    if (((p = g = (a = xt.exec(e[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), p)) {
                        for (h = x.event.special[p] || {}, d = l[(p = (i ? h.delegateType : h.bindType) || p)] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = d.length; s--; )
                            (u = d[s]),
                                (!o && g !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                    (d.splice(s, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        r && !d.length && ((h.teardown && !1 !== h.teardown.call(t, f, m.handle)) || x.removeEvent(t, p, m.handle), delete l[p]);
                    } else for (p in l) x.event.remove(t, p + e[c], n, i, !0);
                x.isEmptyObject(l) && Q.remove(t, "handle events");
            }
        },
        dispatch: function (t) {
            var e,
                n,
                i,
                o,
                s,
                r,
                a = x.event.fix(t),
                l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[a.type] || [],
                u = x.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))) {
                for (r = x.event.handlers.call(this, a, c), e = 0; (o = r[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
                            ((a.handleObj = s), (a.data = s.data), void 0 !== (i = ((x.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (t, e) {
            var n,
                i,
                o,
                s,
                r,
                a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (s = [], r = {}, n = 0; n < l; n++) void 0 === r[(o = (i = e[n]).selector + " ")] && (r[o] = i.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), r[o] && s.push(i);
                        s.length && a.push({ elem: c, handlers: s });
                    }
            return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
        },
        addProp: function (t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: g(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (t) {
            return t[x.expando] ? t : new x.Event(t);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Ct() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Ct() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1;
                },
                _default: function (t) {
                    return E(t.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
    }),
        (x.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
        }),
        (x.Event = function (t, e) {
            if (!(this instanceof x.Event)) return new x.Event(t, e);
            t && t.type
                ? ((this.originalEvent = t),
                  (this.type = t.type),
                  (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? wt : _t),
                  (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                  (this.currentTarget = t.currentTarget),
                  (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
                e && x.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                (this[x.expando] = !0);
        }),
        (x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: _t,
            isPropagationStopped: _t,
            isImmediatePropagationStopped: _t,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = wt), t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = wt), t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = wt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        x.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (t) {
                    var e = t.button;
                    return null == t.which && yt.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && bt.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                },
            },
            x.event.addProp
        ),
        x.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            x.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n,
                        i = t.relatedTarget,
                        o = t.handleObj;
                    return (i && (i === this || x.contains(this, i))) || ((t.type = o.origType), (n = o.handler.apply(this, arguments)), (t.type = e)), n;
                },
            };
        }),
        x.fn.extend({
            on: function (t, e, n, i) {
                return Tt(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
                return Tt(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this;
                }
                return (
                    (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                    !1 === n && (n = _t),
                    this.each(function () {
                        x.event.remove(this, t, n, e);
                    })
                );
            },
        });
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        St = /<script|<style|<link/i,
        Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function kt(t, e) {
        return (E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0]) || t;
    }
    function Dt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function At(t) {
        return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
    }
    function Lt(t, e) {
        var n, i, o, s, r, a, l, c;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && ((s = Q.access(t)), (r = Q.set(e, s)), (c = s.events))) for (o in (delete r.handle, (r.events = {}), c)) for (n = 0, i = c[o].length; n < i; n++) x.event.add(e, o, c[o][n]);
            Z.hasData(t) && ((a = Z.access(t)), (l = x.extend({}, a)), Z.set(e, l));
        }
    }
    function jt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ct.test(t.type) ? (e.checked = t.checked) : ("input" !== n && "textarea" !== n) || (e.defaultValue = t.defaultValue);
    }
    function zt(t, e, n, i) {
        e = r.apply([], e);
        var o,
            s,
            a,
            l,
            c,
            u,
            h = 0,
            d = t.length,
            p = d - 1,
            m = e[0],
            v = g(m);
        if (v || (d > 1 && "string" == typeof m && !f.checkClone && Et.test(m)))
            return t.each(function (o) {
                var s = t.eq(o);
                v && (e[0] = m.call(this, o, s.html())), zt(s, e, n, i);
            });
        if (d && ((s = (o = mt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === o.childNodes.length && (o = s), s || i)) {
            for (l = (a = x.map(pt(o, "script"), Dt)).length; h < d; h++) (c = o), h !== p && ((c = x.clone(c, !0, !0)), l && x.merge(a, pt(c, "script"))), n.call(t[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, x.map(a, At), h = 0; h < l; h++)
                    (c = a[h]), ht.test(c.type || "") && !Q.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(c.src) : y(c.textContent.replace(Pt, ""), u, c));
        }
        return t;
    }
    function Mt(t, e, n) {
        for (var i, o = e ? x.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || x.cleanData(pt(i)), i.parentNode && (n && x.contains(i.ownerDocument, i) && ft(pt(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    x.extend({
        htmlPrefilter: function (t) {
            return t.replace($t, "<$1></$2>");
        },
        clone: function (t, e, n) {
            var i,
                o,
                s,
                r,
                a = t.cloneNode(!0),
                l = x.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || x.isXMLDoc(t))) for (r = pt(a), i = 0, o = (s = pt(t)).length; i < o; i++) jt(s[i], r[i]);
            if (e)
                if (n) for (s = s || pt(t), r = r || pt(a), i = 0, o = s.length; i < o; i++) Lt(s[i], r[i]);
                else Lt(t, a);
            return (r = pt(a, "script")).length > 0 && ft(r, !l && pt(t, "script")), a;
        },
        cleanData: function (t) {
            for (var e, n, i, o = x.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (V(n)) {
                    if ((e = n[Q.expando])) {
                        if (e.events) for (i in e.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                        n[Q.expando] = void 0;
                    }
                    n[Z.expando] && (n[Z.expando] = void 0);
                }
        },
    }),
        x.fn.extend({
            detach: function (t) {
                return Mt(this, t, !0);
            },
            remove: function (t) {
                return Mt(this, t);
            },
            text: function (t) {
                return R(
                    this,
                    function (t) {
                        return void 0 === t
                            ? x.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                              });
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return zt(this, arguments, function (t) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || kt(this, t).appendChild(t);
                });
            },
            prepend: function () {
                return zt(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = kt(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return zt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return zt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (x.cleanData(pt(t, !1)), (t.textContent = ""));
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null != t && t),
                    (e = null == e ? t : e),
                    this.map(function () {
                        return x.clone(this, t, e);
                    })
                );
            },
            html: function (t) {
                return R(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !St.test(t) && !dt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = x.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (x.cleanData(pt(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (t) {}
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = [];
                return zt(
                    this,
                    arguments,
                    function (e) {
                        var n = this.parentNode;
                        x.inArray(this, t) < 0 && (x.cleanData(pt(this)), n && n.replaceChild(e, this));
                    },
                    t
                );
            },
        }),
        x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            x.fn[t] = function (t) {
                for (var n, i = [], o = x(t), s = o.length - 1, r = 0; r <= s; r++) (n = r === s ? this : this.clone(!0)), x(o[r])[e](n), a.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var Ht = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        It = function (e) {
            var n = e.ownerDocument.defaultView;
            return (n && n.opener) || (n = t), n.getComputedStyle(e);
        },
        Nt = new RegExp(nt.join("|"), "i");
    function Ot(t, e, n) {
        var i,
            o,
            s,
            r,
            a = t.style;
        return (
            (n = n || It(t)) &&
                ("" !== (r = n.getPropertyValue(e) || n[e]) || x.contains(t.ownerDocument, t) || (r = x.style(t, e)),
                !f.pixelBoxStyles() && Ht.test(r) && Nt.test(e) && ((i = a.width), (o = a.minWidth), (s = a.maxWidth), (a.minWidth = a.maxWidth = a.width = r), (r = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = s))),
            void 0 !== r ? r + "" : r
        );
    }
    function qt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (u) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    vt.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                (o = "1%" !== e.top),
                    (l = 12 === n(e.marginLeft)),
                    (u.style.right = "60%"),
                    (a = 36 === n(e.right)),
                    (s = 36 === n(e.width)),
                    (u.style.position = "absolute"),
                    (r = 36 === u.offsetWidth || "absolute"),
                    vt.removeChild(c),
                    (u = null);
            }
        }
        function n(t) {
            return Math.round(parseFloat(t));
        }
        var o,
            s,
            r,
            a,
            l,
            c = i.createElement("div"),
            u = i.createElement("div");
        u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
            x.extend(f, {
                boxSizingReliable: function () {
                    return e(), s;
                },
                pixelBoxStyles: function () {
                    return e(), a;
                },
                pixelPosition: function () {
                    return e(), o;
                },
                reliableMarginLeft: function () {
                    return e(), l;
                },
                scrollboxSize: function () {
                    return e(), r;
                },
            }));
    })();
    var Ft = /^(none|table(?!-c[ea]).+)/,
        Rt = /^--/,
        Bt = { position: "absolute", visibility: "hidden", display: "block" },
        Wt = { letterSpacing: "0", fontWeight: "400" },
        Xt = ["Webkit", "Moz", "ms"],
        Yt = i.createElement("div").style;
    function Vt(t) {
        var e = x.cssProps[t];
        return (
            e ||
                (e = x.cssProps[t] =
                    (function (t) {
                        if (t in Yt) return t;
                        for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--; ) if ((t = Xt[n] + e) in Yt) return t;
                    })(t) || t),
            e
        );
    }
    function Ut(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function Qt(t, e, n, i, o, s) {
        var r = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2)
            "margin" === n && (l += x.css(t, n + nt[r], !0, o)),
                i
                    ? ("content" === n && (l -= x.css(t, "padding" + nt[r], !0, o)), "margin" !== n && (l -= x.css(t, "border" + nt[r] + "Width", !0, o)))
                    : ((l += x.css(t, "padding" + nt[r], !0, o)), "padding" !== n ? (l += x.css(t, "border" + nt[r] + "Width", !0, o)) : (a += x.css(t, "border" + nt[r] + "Width", !0, o)));
        return !i && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5))), l;
    }
    function Zt(t, e, n) {
        var i = It(t),
            o = Ot(t, e, i),
            s = "border-box" === x.css(t, "boxSizing", !1, i),
            r = s;
        if (Ht.test(o)) {
            if (!n) return o;
            o = "auto";
        }
        return (
            (r = r && (f.boxSizingReliable() || o === t.style[e])),
            ("auto" === o || (!parseFloat(o) && "inline" === x.css(t, "display", !1, i))) && ((o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = !0)),
            (o = parseFloat(o) || 0) + Qt(t, e, n || (s ? "border" : "content"), r, i, o) + "px"
        );
    }
    function Gt(t, e, n, i, o) {
        return new Gt.prototype.init(t, e, n, i, o);
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Ot(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o,
                    s,
                    r,
                    a = Y(e),
                    l = Rt.test(e),
                    c = t.style;
                if ((l || (e = Vt(a)), (r = x.cssHooks[e] || x.cssHooks[a]), void 0 === n)) return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : c[e];
                "string" == (s = typeof n) && (o = et.exec(n)) && o[1] && ((n = st(t, e, o)), (s = "number")),
                    null != n &&
                        n == n &&
                        ("number" === s && (n += (o && o[3]) || (x.cssNumber[a] ? "" : "px")),
                        f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                        (r && "set" in r && void 0 === (n = r.set(t, n, i))) || (l ? c.setProperty(e, n) : (c[e] = n)));
            }
        },
        css: function (t, e, n, i) {
            var o,
                s,
                r,
                a = Y(e);
            return (
                Rt.test(e) || (e = Vt(a)),
                (r = x.cssHooks[e] || x.cssHooks[a]) && "get" in r && (o = r.get(t, !0, n)),
                void 0 === o && (o = Ot(t, e, i)),
                "normal" === o && e in Wt && (o = Wt[e]),
                "" === n || n ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o) : o
            );
        },
    }),
        x.each(["height", "width"], function (t, e) {
            x.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)
                        return !Ft.test(x.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                            ? Zt(t, e, i)
                            : ot(t, Bt, function () {
                                  return Zt(t, e, i);
                              });
                },
                set: function (t, n, i) {
                    var o,
                        s = It(t),
                        r = "border-box" === x.css(t, "boxSizing", !1, s),
                        a = i && Qt(t, e, i, r, s);
                    return (
                        r && f.scrollboxSize() === s.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Qt(t, e, "border", !1, s) - 0.5)),
                        a && (o = et.exec(n)) && "px" !== (o[3] || "px") && ((t.style[e] = n), (n = x.css(t, e))),
                        Ut(0, n, a)
                    );
                },
            };
        }),
        (x.cssHooks.marginLeft = qt(f.reliableMarginLeft, function (t, e) {
            if (e)
                return (
                    (parseFloat(Ot(t, "marginLeft")) ||
                        t.getBoundingClientRect().left -
                            ot(t, { marginLeft: 0 }, function () {
                                return t.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        x.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (x.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + nt[i] + e] = s[i] || s[i - 2] || s[0];
                    return o;
                },
            }),
                "margin" !== t && (x.cssHooks[t + e].set = Ut);
        }),
        x.fn.extend({
            css: function (t, e) {
                return R(
                    this,
                    function (t, e, n) {
                        var i,
                            o,
                            s = {},
                            r = 0;
                        if (Array.isArray(e)) {
                            for (i = It(t), o = e.length; r < o; r++) s[e[r]] = x.css(t, e[r], !1, i);
                            return s;
                        }
                        return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
                    },
                    t,
                    e,
                    arguments.length > 1
                );
            },
        }),
        (x.Tween = Gt),
        (Gt.prototype = {
            constructor: Gt,
            init: function (t, e, n, i, o, s) {
                (this.elem = t), (this.prop = n), (this.easing = o || x.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = s || (x.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var t = Gt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Gt.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    n = Gt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                    (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Gt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Gt.prototype.init.prototype = Gt.prototype),
        (Gt.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (t) {
                    x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : x.style(t.elem, t.prop, t.now + t.unit);
                },
            },
        }),
        (Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (x.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (x.fx = Gt.prototype.init),
        (x.fx.step = {});
    var Kt,
        Jt,
        te = /^(?:toggle|show|hide)$/,
        ee = /queueHooks$/;
    function ne() {
        Jt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ne) : t.setTimeout(ne, x.fx.interval), x.fx.tick());
    }
    function ie() {
        return (
            t.setTimeout(function () {
                Kt = void 0;
            }),
            (Kt = Date.now())
        );
    }
    function oe(t, e) {
        var n,
            i = 0,
            o = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = nt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o;
    }
    function se(t, e, n) {
        for (var i, o = (re.tweeners[e] || []).concat(re.tweeners["*"]), s = 0, r = o.length; s < r; s++) if ((i = o[s].call(n, e, t))) return i;
    }
    function re(t, e, n) {
        var i,
            o,
            s = 0,
            r = re.prefilters.length,
            a = x.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (var e = Kt || ie(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
            },
            c = a.promise({
                elem: t,
                props: x.extend({}, e),
                opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Kt || ie(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = x.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i;
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
                },
            }),
            u = c.props;
        for (
            (function (t, e) {
                var n, i, o, s, r;
                for (n in t)
                    if (((o = e[(i = Y(n))]), (s = t[n]), Array.isArray(s) && ((o = s[1]), (s = t[n] = s[0])), n !== i && ((t[i] = s), delete t[n]), (r = x.cssHooks[i]) && ("expand" in r)))
                        for (n in ((s = r.expand(s)), delete t[i], s)) (n in t) || ((t[n] = s[n]), (e[n] = o));
                    else e[i] = o;
            })(u, c.opts.specialEasing);
            s < r;
            s++
        )
            if ((i = re.prefilters[s].call(c, t, u, c.opts))) return g(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return (
            x.map(u, se, c),
            g(c.opts.start) && c.opts.start.call(t, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            x.fx.timer(x.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (x.Animation = x.extend(re, {
        tweeners: {
            "*": [
                function (t, e) {
                    var n = this.createTween(t, e);
                    return st(n.elem, t, et.exec(e), n), n;
                },
            ],
        },
        tweener: function (t, e) {
            g(t) ? ((e = t), (t = ["*"])) : (t = t.match(M));
            for (var n, i = 0, o = t.length; i < o; i++) (n = t[i]), (re.tweeners[n] = re.tweeners[n] || []), re.tweeners[n].unshift(e);
        },
        prefilters: [
            function (t, e, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    u,
                    h = "width" in e || "height" in e,
                    d = this,
                    p = {},
                    f = t.style,
                    g = t.nodeType && it(t),
                    m = Q.get(t, "fxshow");
                for (i in (n.queue ||
                    (null == (r = x._queueHooks(t, "fx")).unqueued &&
                        ((r.unqueued = 0),
                        (a = r.empty.fire),
                        (r.empty.fire = function () {
                            r.unqueued || a();
                        })),
                    r.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            r.unqueued--, x.queue(t, "fx").length || r.empty.fire();
                        });
                    })),
                e))
                    if (((o = e[i]), te.test(o))) {
                        if ((delete e[i], (s = s || "toggle" === o), o === (g ? "hide" : "show"))) {
                            if ("show" !== o || !m || void 0 === m[i]) continue;
                            g = !0;
                        }
                        p[i] = (m && m[i]) || x.style(t, i);
                    }
                if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(p))
                    for (i in (h &&
                        1 === t.nodeType &&
                        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                        null == (c = m && m.display) && (c = Q.get(t, "display")),
                        "none" === (u = x.css(t, "display")) && (c ? (u = c) : (lt([t], !0), (c = t.style.display || c), (u = x.css(t, "display")), lt([t]))),
                        ("inline" === u || ("inline-block" === u && null != c)) &&
                            "none" === x.css(t, "float") &&
                            (l ||
                                (d.done(function () {
                                    f.display = c;
                                }),
                                null == c && ((u = f.display), (c = "none" === u ? "" : u))),
                            (f.display = "inline-block"))),
                    n.overflow &&
                        ((f.overflow = "hidden"),
                        d.always(function () {
                            (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    p))
                        l ||
                            (m ? "hidden" in m && (g = m.hidden) : (m = Q.access(t, "fxshow", { display: c })),
                            s && (m.hidden = !g),
                            g && lt([t], !0),
                            d.done(function () {
                                for (i in (g || lt([t]), Q.remove(t, "fxshow"), p)) x.style(t, i, p[i]);
                            })),
                            (l = se(g ? m[i] : 0, i, d)),
                            i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (t, e) {
            e ? re.prefilters.unshift(t) : re.prefilters.push(t);
        },
    })),
        (x.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? x.extend({}, t) : { complete: n || (!n && e) || (g(t) && t), duration: t, easing: (n && e) || (e && !g(e) && e) };
            return (
                x.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in x.fx.speeds ? (i.duration = x.fx.speeds[i.duration]) : (i.duration = x.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
                }),
                i
            );
        }),
        x.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(it).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
            },
            animate: function (t, e, n, i) {
                var o = x.isEmptyObject(t),
                    s = x.speed(e, n, i),
                    r = function () {
                        var e = re(this, x.extend({}, t), s);
                        (o || Q.get(this, "finish")) && e.stop(!0);
                    };
                return (r.finish = r), o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n);
                };
                return (
                    "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                    e && !1 !== t && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = x.timers,
                            r = Q.get(this);
                        if (o) r[o] && r[o].stop && i(r[o]);
                        else for (o in r) r[o] && r[o].stop && ee.test(o) && i(r[o]);
                        for (o = s.length; o--; ) s[o].elem !== this || (null != t && s[o].queue !== t) || (s[o].anim.stop(n), (e = !1), s.splice(o, 1));
                        (!e && n) || x.dequeue(this, t);
                    })
                );
            },
            finish: function (t) {
                return (
                    !1 !== t && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            n = Q.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            s = x.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, x.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--; ) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        x.each(["toggle", "show", "hide"], function (t, e) {
            var n = x.fn[e];
            x.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(oe(e, !0), t, i, o);
            };
        }),
        x.each({ slideDown: oe("show"), slideUp: oe("hide"), slideToggle: oe("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            x.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i);
            };
        }),
        (x.timers = []),
        (x.fx.tick = function () {
            var t,
                e = 0,
                n = x.timers;
            for (Kt = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || x.fx.stop(), (Kt = void 0);
        }),
        (x.fx.timer = function (t) {
            x.timers.push(t), x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function () {
            Jt || ((Jt = !0), ne());
        }),
        (x.fx.stop = function () {
            Jt = null;
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fn.delay = function (e, n) {
            return (
                (e = (x.fx && x.fx.speeds[e]) || e),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(o);
                    };
                })
            );
        }),
        (function () {
            var t = i.createElement("input"),
                e = i.createElement("select").appendChild(i.createElement("option"));
            (t.type = "checkbox"), (f.checkOn = "" !== t.value), (f.optSelected = e.selected), ((t = i.createElement("input")).value = "t"), (t.type = "radio"), (f.radioValue = "t" === t.value);
        })();
    var ae,
        le = x.expr.attrHandle;
    x.fn.extend({
        attr: function (t, e) {
            return R(this, x.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
            return this.each(function () {
                x.removeAttr(this, t);
            });
        },
    }),
        x.extend({
            attr: function (t, e, n) {
                var i,
                    o,
                    s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return void 0 === t.getAttribute
                        ? x.prop(t, e, n)
                        : ((1 === s && x.isXMLDoc(t)) || (o = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? ae : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void x.removeAttr(t, e)
                                  : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                                  ? i
                                  : (t.setAttribute(e, n + ""), n)
                              : o && "get" in o && null !== (i = o.get(t, e))
                              ? i
                              : null == (i = x.find.attr(t, e))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!f.radioValue && "radio" === e && E(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e;
                        }
                    },
                },
            },
            removeAttr: function (t, e) {
                var n,
                    i = 0,
                    o = e && e.match(M);
                if (o && 1 === t.nodeType) for (; (n = o[i++]); ) t.removeAttribute(n);
            },
        }),
        (ae = {
            set: function (t, e, n) {
                return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = le[e] || x.find.attr;
            le[e] = function (t, e, i) {
                var o,
                    s,
                    r = e.toLowerCase();
                return i || ((s = le[r]), (le[r] = o), (o = null != n(t, e, i) ? r : null), (le[r] = s)), o;
            };
        });
    var ce = /^(?:input|select|textarea|button)$/i,
        ue = /^(?:a|area)$/i;
    function he(t) {
        return (t.match(M) || []).join(" ");
    }
    function de(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function pe(t) {
        return Array.isArray(t) ? t : ("string" == typeof t && t.match(M)) || [];
    }
    x.fn.extend({
        prop: function (t, e) {
            return R(this, x.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[x.propFix[t] || t];
            });
        },
    }),
        x.extend({
            prop: function (t, e, n) {
                var i,
                    o,
                    s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return (
                        (1 === s && x.isXMLDoc(t)) || ((e = x.propFix[e] || e), (o = x.propHooks[e])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t[e] = n)) : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = x.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ce.test(t.nodeName) || (ue.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        f.optSelected ||
            (x.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            x.propFix[this.toLowerCase()] = this;
        }),
        x.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    o,
                    s,
                    r,
                    a,
                    l = 0;
                if (g(t))
                    return this.each(function (e) {
                        x(this).addClass(t.call(this, e, de(this)));
                    });
                if ((e = pe(t)).length)
                    for (; (n = this[l++]); )
                        if (((o = de(n)), (i = 1 === n.nodeType && " " + he(o) + " "))) {
                            for (r = 0; (s = e[r++]); ) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            o !== (a = he(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    o,
                    s,
                    r,
                    a,
                    l = 0;
                if (g(t))
                    return this.each(function (e) {
                        x(this).removeClass(t.call(this, e, de(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = pe(t)).length)
                    for (; (n = this[l++]); )
                        if (((o = de(n)), (i = 1 === n.nodeType && " " + he(o) + " "))) {
                            for (r = 0; (s = e[r++]); ) for (; i.indexOf(" " + s + " ") > -1; ) i = i.replace(" " + s + " ", " ");
                            o !== (a = he(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i
                    ? e
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : g(t)
                    ? this.each(function (n) {
                          x(this).toggleClass(t.call(this, n, de(this), e), e);
                      })
                    : this.each(function () {
                          var e, o, s, r;
                          if (i) for (o = 0, s = x(this), r = pe(t); (e = r[o++]); ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                          else (void 0 !== t && "boolean" !== n) || ((e = de(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (t) {
                var e,
                    n,
                    i = 0;
                for (e = " " + t + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + he(de(n)) + " ").indexOf(e) > -1) return !0;
                return !1;
            },
        });
    var fe = /\r/g;
    x.fn.extend({
        val: function (t) {
            var e,
                n,
                i,
                o = this[0];
            return arguments.length
                ? ((i = g(t)),
                  this.each(function (n) {
                      var o;
                      1 === this.nodeType &&
                          (null == (o = i ? t.call(this, n, x(this).val()) : t)
                              ? (o = "")
                              : "number" == typeof o
                              ? (o += "")
                              : Array.isArray(o) &&
                                (o = x.map(o, function (t) {
                                    return null == t ? "" : t + "";
                                })),
                          ((e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                  }))
                : o
                ? (e = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value"))
                    ? n
                    : "string" == typeof (n = o.value)
                    ? n.replace(fe, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        x.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = x.find.attr(t, "value");
                        return null != e ? e : he(x.text(t));
                    },
                },
                select: {
                    get: function (t) {
                        var e,
                            n,
                            i,
                            o = t.options,
                            s = t.selectedIndex,
                            r = "select-one" === t.type,
                            a = r ? null : [],
                            l = r ? s + 1 : o.length;
                        for (i = s < 0 ? l : r ? s : 0; i < l; i++)
                            if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                if (((e = x(n).val()), r)) return e;
                                a.push(e);
                            }
                        return a;
                    },
                    set: function (t, e) {
                        for (var n, i, o = t.options, s = x.makeArray(e), r = o.length; r--; ) ((i = o[r]).selected = x.inArray(x.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s;
                    },
                },
            },
        }),
        x.each(["radio", "checkbox"], function () {
            (x.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return (t.checked = x.inArray(x(t).val(), e) > -1);
                },
            }),
                f.checkOn ||
                    (x.valHooks[this].get = function (t) {
                        return null === t.getAttribute("value") ? "on" : t.value;
                    });
        }),
        (f.focusin = "onfocusin" in t);
    var ge = /^(?:focusinfocus|focusoutblur)$/,
        me = function (t) {
            t.stopPropagation();
        };
    x.extend(x.event, {
        trigger: function (e, n, o, s) {
            var r,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                v = [o || i],
                y = h.call(e, "type") ? e.type : e,
                b = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((a = f = l = o = o || i),
                3 !== o.nodeType &&
                    8 !== o.nodeType &&
                    !ge.test(y + x.event.triggered) &&
                    (y.indexOf(".") > -1 && ((y = (b = y.split(".")).shift()), b.sort()),
                    (u = y.indexOf(":") < 0 && "on" + y),
                    ((e = e[x.expando] ? e : new x.Event(y, "object" == typeof e && e)).isTrigger = s ? 2 : 3),
                    (e.namespace = b.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = o),
                    (n = null == n ? [e] : x.makeArray(n, [e])),
                    (p = x.event.special[y] || {}),
                    s || !p.trigger || !1 !== p.trigger.apply(o, n)))
            ) {
                if (!s && !p.noBubble && !m(o)) {
                    for (c = p.delegateType || y, ge.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (l = a);
                    l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t);
                }
                for (r = 0; (a = v[r++]) && !e.isPropagationStopped(); )
                    (f = a),
                        (e.type = r > 1 ? c : p.bindType || y),
                        (d = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) && d.apply(a, n),
                        (d = u && a[u]) && d.apply && V(a) && ((e.result = d.apply(a, n)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = y),
                    s ||
                        e.isDefaultPrevented() ||
                        (p._default && !1 !== p._default.apply(v.pop(), n)) ||
                        !V(o) ||
                        (u &&
                            g(o[y]) &&
                            !m(o) &&
                            ((l = o[u]) && (o[u] = null),
                            (x.event.triggered = y),
                            e.isPropagationStopped() && f.addEventListener(y, me),
                            o[y](),
                            e.isPropagationStopped() && f.removeEventListener(y, me),
                            (x.event.triggered = void 0),
                            l && (o[u] = l))),
                    e.result
                );
            }
        },
        simulate: function (t, e, n) {
            var i = x.extend(new x.Event(), n, { type: t, isSimulated: !0 });
            x.event.trigger(i, null, e);
        },
    }),
        x.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    x.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return x.event.trigger(t, e, n, !0);
            },
        }),
        f.focusin ||
            x.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                var n = function (t) {
                    x.event.simulate(e, t.target, x.event.fix(t));
                };
                x.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this,
                            o = Q.access(i, e);
                        o || i.addEventListener(t, n, !0), Q.access(i, e, (o || 0) + 1);
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this,
                            o = Q.access(i, e) - 1;
                        o ? Q.access(i, e, o) : (i.removeEventListener(t, n, !0), Q.remove(i, e));
                    },
                };
            });
    var ve = t.location,
        ye = Date.now(),
        be = /\?/;
    x.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || x.error("Invalid XML: " + e), n;
    };
    var xe = /\[\]$/,
        we = /\r?\n/g,
        _e = /^(?:submit|button|image|reset|file)$/i,
        Ce = /^(?:input|select|textarea|keygen)/i;
    function Te(t, e, n, i) {
        var o;
        if (Array.isArray(e))
            x.each(e, function (e, o) {
                n || xe.test(t) ? i(t, o) : Te(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i);
            });
        else if (n || "object" !== b(e)) i(t, e);
        else for (o in e) Te(t + "[" + o + "]", e[o], n, i);
    }
    (x.param = function (t, e) {
        var n,
            i = [],
            o = function (t, e) {
                var n = g(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(t) || (t.jquery && !x.isPlainObject(t)))
            x.each(t, function () {
                o(this.name, this.value);
            });
        else for (n in t) Te(n, t[n], e, o);
        return i.join("&");
    }),
        x.fn.extend({
            serialize: function () {
                return x.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = x.prop(this, "elements");
                    return t ? x.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !x(this).is(":disabled") && Ce.test(this.nodeName) && !_e.test(t) && (this.checked || !ct.test(t));
                    })
                    .map(function (t, e) {
                        var n = x(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? x.map(n, function (t) {
                                  return { name: e.name, value: t.replace(we, "\r\n") };
                              })
                            : { name: e.name, value: n.replace(we, "\r\n") };
                    })
                    .get();
            },
        });
    var $e = /%20/g,
        Se = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ke = /^(?:GET|HEAD)$/,
        De = /^\/\//,
        Ae = {},
        Le = {},
        je = "*/".concat("*"),
        ze = i.createElement("a");
    function Me(t) {
        return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var i,
                o = 0,
                s = e.toLowerCase().match(M) || [];
            if (g(n)) for (; (i = s[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function He(t, e, n, i) {
        var o = {},
            s = t === Le;
        function r(a) {
            var l;
            return (
                (o[a] = !0),
                x.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || o[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), r(c), !1);
                }),
                l
            );
        }
        return r(e.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function Ie(t, e) {
        var n,
            i,
            o = x.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && x.extend(!0, t, i), t;
    }
    (ze.href = ve.href),
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ve.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": je, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
                return e ? Ie(Ie(t, x.ajaxSettings), e) : Ie(x.ajaxSettings, t);
            },
            ajaxPrefilter: Me(Ae),
            ajaxTransport: Me(Le),
            ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
                var o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    u,
                    h,
                    d,
                    p,
                    f = x.ajaxSetup({}, n),
                    g = f.context || f,
                    m = f.context && (g.nodeType || g.jquery) ? x(g) : x.event,
                    v = x.Deferred(),
                    y = x.Callbacks("once memory"),
                    b = f.statusCode || {},
                    w = {},
                    _ = {},
                    C = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!a) for (a = {}; (e = Pe.exec(r)); ) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()];
                            }
                            return null == e ? null : e;
                        },
                        getAllResponseHeaders: function () {
                            return u ? r : null;
                        },
                        setRequestHeader: function (t, e) {
                            return null == u && ((t = _[t.toLowerCase()] = _[t.toLowerCase()] || t), (w[t] = e)), this;
                        },
                        overrideMimeType: function (t) {
                            return null == u && (f.mimeType = t), this;
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (u) T.always(t[T.status]);
                                else for (e in t) b[e] = [b[e], t[e]];
                            return this;
                        },
                        abort: function (t) {
                            var e = t || C;
                            return o && o.abort(e), $(0, e), this;
                        },
                    };
                if (
                    (v.promise(T),
                    (f.url = ((e || f.url || ve.href) + "").replace(De, ve.protocol + "//")),
                    (f.type = n.method || n.type || f.method || f.type),
                    (f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [""]),
                    null == f.crossDomain)
                ) {
                    c = i.createElement("a");
                    try {
                        (c.href = f.url), (c.href = c.href), (f.crossDomain = ze.protocol + "//" + ze.host != c.protocol + "//" + c.host);
                    } catch (t) {
                        f.crossDomain = !0;
                    }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), He(Ae, f, n, T), u)) return T;
                for (d in ((h = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !ke.test(f.type)),
                (s = f.url.replace(Se, "")),
                f.hasContent
                    ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace($e, "+"))
                    : ((p = f.url.slice(s.length)),
                      f.data && (f.processData || "string" == typeof f.data) && ((s += (be.test(s) ? "&" : "?") + f.data), delete f.data),
                      !1 === f.cache && ((s = s.replace(Ee, "$1")), (p = (be.test(s) ? "&" : "?") + "_=" + ye++ + p)),
                      (f.url = s + p)),
                f.ifModified && (x.lastModified[s] && T.setRequestHeader("If-Modified-Since", x.lastModified[s]), x.etag[s] && T.setRequestHeader("If-None-Match", x.etag[s])),
                ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + je + "; q=0.01" : "") : f.accepts["*"]),
                f.headers))
                    T.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(g, T, f) || u)) return T.abort();
                if (((C = "abort"), y.add(f.complete), T.done(f.success), T.fail(f.error), (o = He(Le, f, n, T)))) {
                    if (((T.readyState = 1), h && m.trigger("ajaxSend", [T, f]), u)) return T;
                    f.async &&
                        f.timeout > 0 &&
                        (l = t.setTimeout(function () {
                            T.abort("timeout");
                        }, f.timeout));
                    try {
                        (u = !1), o.send(w, $);
                    } catch (t) {
                        if (u) throw t;
                        $(-1, t);
                    }
                } else $(-1, "No Transport");
                function $(e, n, i, a) {
                    var c,
                        d,
                        p,
                        w,
                        _,
                        C = n;
                    u ||
                        ((u = !0),
                        l && t.clearTimeout(l),
                        (o = void 0),
                        (r = a || ""),
                        (T.readyState = e > 0 ? 4 : 0),
                        (c = (e >= 200 && e < 300) || 304 === e),
                        i &&
                            (w = (function (t, e, n) {
                                for (var i, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in a)
                                        if (a[o] && a[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                if (l[0] in n) s = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || t.converters[o + " " + l[0]]) {
                                            s = o;
                                            break;
                                        }
                                        r || (r = o);
                                    }
                                    s = s || r;
                                }
                                if (s) return s !== l[0] && l.unshift(s), n[s];
                            })(f, T, i)),
                        (w = (function (t, e, n, i) {
                            var o,
                                s,
                                r,
                                a,
                                l,
                                c = {},
                                u = t.dataTypes.slice();
                            if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                            for (s = u.shift(); s; )
                                if ((t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = s), (s = u.shift())))
                                    if ("*" === s) s = l;
                                    else if ("*" !== l && l !== s) {
                                        if (!(r = c[l + " " + s] || c["* " + s]))
                                            for (o in c)
                                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === r ? (r = c[o]) : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== r)
                                            if (r && t.throws) e = r(e);
                                            else
                                                try {
                                                    e = r(e);
                                                } catch (t) {
                                                    return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + s };
                                                }
                                    }
                            return { state: "success", data: e };
                        })(f, w, T, c)),
                        c
                            ? (f.ifModified && ((_ = T.getResponseHeader("Last-Modified")) && (x.lastModified[s] = _), (_ = T.getResponseHeader("etag")) && (x.etag[s] = _)),
                              204 === e || "HEAD" === f.type ? (C = "nocontent") : 304 === e ? (C = "notmodified") : ((C = w.state), (d = w.data), (c = !(p = w.error))))
                            : ((p = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (n || C) + ""),
                        c ? v.resolveWith(g, [d, C, T]) : v.rejectWith(g, [T, C, p]),
                        T.statusCode(b),
                        (b = void 0),
                        h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? d : p]),
                        y.fireWith(g, [T, C]),
                        h && (m.trigger("ajaxComplete", [T, f]), --x.active || x.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (t, e, n) {
                return x.get(t, e, n, "json");
            },
            getScript: function (t, e) {
                return x.get(t, void 0, e, "script");
            },
        }),
        x.each(["get", "post"], function (t, e) {
            x[e] = function (t, n, i, o) {
                return g(n) && ((o = o || i), (i = n), (n = void 0)), x.ajax(x.extend({ url: t, type: e, dataType: o, data: n, success: i }, x.isPlainObject(t) && t));
            };
        }),
        (x._evalUrl = function (t) {
            return x.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        x.fn.extend({
            wrapAll: function (t) {
                var e;
                return (
                    this[0] &&
                        (g(t) && (t = t.call(this[0])),
                        (e = x(t, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                return t;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (t) {
                return g(t)
                    ? this.each(function (e) {
                          x(this).wrapInner(t.call(this, e));
                      })
                    : this.each(function () {
                          var e = x(this),
                              n = e.contents();
                          n.length ? n.wrapAll(t) : e.append(t);
                      });
            },
            wrap: function (t) {
                var e = g(t);
                return this.each(function (n) {
                    x(this).wrapAll(e ? t.call(this, n) : t);
                });
            },
            unwrap: function (t) {
                return (
                    this.parent(t)
                        .not("body")
                        .each(function () {
                            x(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (x.expr.pseudos.hidden = function (t) {
            return !x.expr.pseudos.visible(t);
        }),
        (x.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }),
        (x.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest();
            } catch (t) {}
        });
    var Ne = { 0: 200, 1223: 204 },
        Oe = x.ajaxSettings.xhr();
    (f.cors = !!Oe && "withCredentials" in Oe),
        (f.ajax = Oe = !!Oe),
        x.ajaxTransport(function (e) {
            var n, i;
            if (f.cors || (Oe && !e.crossDomain))
                return {
                    send: function (o, s) {
                        var r,
                            a = e.xhr();
                        if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                        for (r in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(r, o[r]);
                        (n = function (t) {
                            return function () {
                                n &&
                                    ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                    "abort" === t
                                        ? a.abort()
                                        : "error" === t
                                        ? "number" != typeof a.status
                                            ? s(0, "error")
                                            : s(a.status, a.statusText)
                                        : s(Ne[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                            };
                        }),
                            (a.onload = n()),
                            (i = a.onerror = a.ontimeout = n("error")),
                            void 0 !== a.onabort
                                ? (a.onabort = i)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          t.setTimeout(function () {
                                              n && i();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            a.send((e.hasContent && e.data) || null);
                        } catch (t) {
                            if (n) throw t;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        x.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
        }),
        x.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (t) {
                    return x.globalEval(t), t;
                },
            },
        }),
        x.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
        }),
        x.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain)
                return {
                    send: function (o, s) {
                        (e = x("<script>")
                            .prop({ charset: t.scriptCharset, src: t.url })
                            .on(
                                "load error",
                                (n = function (t) {
                                    e.remove(), (n = null), t && s("error" === t.type ? 404 : 200, t.type);
                                })
                            )),
                            i.head.appendChild(e[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var qe = [],
        Fe = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = qe.pop() || x.expando + "_" + ye++;
            return (this[t] = !0), t;
        },
    }),
        x.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o,
                s,
                r,
                a = !1 !== e.jsonp && (Fe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Fe, "$1" + o)) : !1 !== e.jsonp && (e.url += (be.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    (e.converters["script json"] = function () {
                        return r || x.error(o + " was not called"), r[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (s = t[o]),
                    (t[o] = function () {
                        r = arguments;
                    }),
                    i.always(function () {
                        void 0 === s ? x(t).removeProp(o) : (t[o] = s), e[o] && ((e.jsonpCallback = n.jsonpCallback), qe.push(o)), r && g(s) && s(r[0]), (r = s = void 0);
                    }),
                    "script"
                );
        }),
        (f.createHTMLDocument = (function () {
            var t = i.implementation.createHTMLDocument("").body;
            return (t.innerHTML = "<form></form><form></form>"), 2 === t.childNodes.length;
        })()),
        (x.parseHTML = function (t, e, n) {
            return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                  e || (f.createHTMLDocument ? (((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href), e.head.appendChild(o)) : (e = i)),
                  (r = !n && []),
                  (s = P.exec(t)) ? [e.createElement(s[1])] : ((s = mt([t], e, r)), r && r.length && x(r).remove(), x.merge([], s.childNodes)));
            var o, s, r;
        }),
        (x.fn.load = function (t, e, n) {
            var i,
                o,
                s,
                r = this,
                a = t.indexOf(" ");
            return (
                a > -1 && ((i = he(t.slice(a))), (t = t.slice(0, a))),
                g(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
                r.length > 0 &&
                    x
                        .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                        .done(function (t) {
                            (s = arguments), r.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t);
                        })
                        .always(
                            n &&
                                function (t, e) {
                                    r.each(function () {
                                        n.apply(this, s || [t.responseText, e, t]);
                                    });
                                }
                        ),
                this
            );
        }),
        x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            x.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        (x.expr.pseudos.animated = function (t) {
            return x.grep(x.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (x.offset = {
            setOffset: function (t, e, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c = x.css(t, "position"),
                    u = x(t),
                    h = {};
                "static" === c && (t.style.position = "relative"),
                    (a = u.offset()),
                    (s = x.css(t, "top")),
                    (l = x.css(t, "left")),
                    ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? ((r = (i = u.position()).top), (o = i.left)) : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
                    g(e) && (e = e.call(t, n, x.extend({}, a))),
                    null != e.top && (h.top = e.top - a.top + r),
                    null != e.left && (h.left = e.left - a.left + o),
                    "using" in e ? e.using.call(t, h) : u.css(h);
            },
        }),
        x.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              x.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        n,
                        i = this[0],
                        o = { top: 0, left: 0 };
                    if ("fixed" === x.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position"); ) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (((o = x(t).offset()).top += x.css(t, "borderTopWidth", !0)), (o.left += x.css(t, "borderLeftWidth", !0)));
                    }
                    return { top: e.top - o.top - x.css(i, "marginTop", !0), left: e.left - o.left - x.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === x.css(t, "position"); ) t = t.offsetParent;
                    return t || vt;
                });
            },
        }),
        x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var n = "pageYOffset" === e;
            x.fn[t] = function (i) {
                return R(
                    this,
                    function (t, i, o) {
                        var s;
                        if ((m(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView), void 0 === o)) return s ? s[e] : t[i];
                        s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : (t[i] = o);
                    },
                    t,
                    i,
                    arguments.length
                );
            };
        }),
        x.each(["top", "left"], function (t, e) {
            x.cssHooks[e] = qt(f.pixelPosition, function (t, n) {
                if (n) return (n = Ot(t, e)), Ht.test(n) ? x(t).position()[e] + "px" : n;
            });
        }),
        x.each({ Height: "height", Width: "width" }, function (t, e) {
            x.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                x.fn[i] = function (o, s) {
                    var r = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === s ? "margin" : "border");
                    return R(
                        this,
                        function (e, n, o) {
                            var s;
                            return m(e)
                                ? 0 === i.indexOf("outer")
                                    ? e["inner" + t]
                                    : e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                ? ((s = e.documentElement), Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t]))
                                : void 0 === o
                                ? x.css(e, n, a)
                                : x.style(e, n, o, a);
                        },
                        e,
                        r ? o : void 0,
                        r
                    );
                };
            });
        }),
        x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            x.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
            };
        }),
        x.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
        }),
        x.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i);
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
            },
        }),
        (x.proxy = function (t, e) {
            var n, i, o;
            if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), g(t)))
                return (
                    (i = s.call(arguments, 2)),
                    ((o = function () {
                        return t.apply(e || this, i.concat(s.call(arguments)));
                    }).guid = t.guid = t.guid || x.guid++),
                    o
                );
        }),
        (x.holdReady = function (t) {
            t ? x.readyWait++ : x.ready(!0);
        }),
        (x.isArray = Array.isArray),
        (x.parseJSON = JSON.parse),
        (x.nodeName = E),
        (x.isFunction = g),
        (x.isWindow = m),
        (x.camelCase = Y),
        (x.type = b),
        (x.now = Date.now),
        (x.isNumeric = function (t) {
            var e = x.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return x;
            });
    var Re = t.jQuery,
        Be = t.$;
    return (
        (x.noConflict = function (e) {
            return t.$ === x && (t.$ = Be), e && t.jQuery === x && (t.jQuery = Re), x;
        }),
        e || (t.jQuery = t.$ = x),
        x
    );
}),
    (function (t, e, n, i) {
        function o(e, n) {
            (this.settings = null),
                (this.options = t.extend({}, o.Defaults, n)),
                (this.$element = t(e)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                t.each(
                    ["onResize", "onThrottledResize"],
                    t.proxy(function (e, n) {
                        this._handlers[n] = t.proxy(this[n], this);
                    }, this)
                ),
                t.each(
                    o.Plugins,
                    t.proxy(function (t, e) {
                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
                    }, this)
                ),
                t.each(
                    o.Workers,
                    t.proxy(function (e, n) {
                        this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) });
                    }, this)
                ),
                this.setup(),
                this.initialize();
        }
        (o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
        }),
            (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (o.Type = { Event: "event", State: "state" }),
            (o.Plugins = {}),
            (o.Workers = [
                {
                    filter: ["width", "settings"],
                    run: function () {
                        this._width = this.$element.width();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        t.current = this._items && this._items[this.relative(this._current)];
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        this.$stage.children(".cloned").remove();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this.settings.margin || "",
                            n = !this.settings.autoWidth,
                            i = this.settings.rtl,
                            o = { width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e };
                        !n && this.$stage.children().css(o), (t.css = o);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            n = null,
                            i = this._items.length,
                            o = !this.settings.autoWidth,
                            s = [];
                        for (t.items = { merge: !1, width: e }; i--; )
                            (n = this._mergers[i]), (n = (this.settings.mergeFit && Math.min(n, this.settings.items)) || n), (t.items.merge = n > 1 || t.items.merge), (s[i] = o ? e * n : this._items[i].width());
                        this._widths = s;
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        var e = [],
                            n = this._items,
                            i = this.settings,
                            o = Math.max(2 * i.items, 4),
                            s = 2 * Math.ceil(n.length / 2),
                            r = i.loop && n.length ? (i.rewind ? o : Math.max(o, s)) : 0,
                            a = "",
                            l = "";
                        for (r /= 2; r > 0; )
                            e.push(this.normalize(e.length / 2, !0)), (a += n[e[e.length - 1]][0].outerHTML), e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), (l = n[e[e.length - 1]][0].outerHTML + l), (r -= 1);
                        (this._clones = e), t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, s = []; ++n < e; )
                            (i = s[n - 1] || 0), (o = this._widths[this.relative(n)] + this.settings.margin), s.push(i + o * t);
                        this._coordinates = s;
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            n = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                        this.$stage.css(n);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this._coordinates.length,
                            n = !this.settings.autoWidth,
                            i = this.$stage.children();
                        if (n && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), i.eq(e).css(t.css);
                        else n && ((t.css.width = t.items.width), i.css(t.css));
                    },
                },
                {
                    filter: ["items"],
                    run: function () {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style");
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);
                    },
                },
                {
                    filter: ["position"],
                    run: function () {
                        this.animate(this.coordinates(this._current));
                    },
                },
                {
                    filter: ["width", "position", "items", "settings"],
                    run: function () {
                        var t,
                            e,
                            n,
                            i,
                            o = this.settings.rtl ? 1 : -1,
                            s = 2 * this.settings.stagePadding,
                            r = this.coordinates(this.current()) + s,
                            a = r + this.width() * o,
                            l = [];
                        for (n = 0, i = this._coordinates.length; n < i; n++)
                            (t = this._coordinates[n - 1] || 0), (e = Math.abs(this._coordinates[n]) + s * o), ((this.op(t, "<=", r) && this.op(t, ">", a)) || (this.op(e, "<", r) && this.op(e, ">", a))) && l.push(n);
                        this.$stage.children(".active").removeClass("active"),
                            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
                            this.$stage.children(".center").removeClass("center"),
                            this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                    },
                },
            ]),
            (o.prototype.initializeStage = function () {
                (this.$stage = this.$element.find("." + this.settings.stageClass)),
                    this.$stage.length ||
                        (this.$element.addClass(this.options.loadingClass),
                        (this.$stage = t("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
                        this.$element.append(this.$stage.parent()));
            }),
            (o.prototype.initializeItems = function () {
                var e = this.$element.find(".owl-item");
                if (e.length)
                    return (
                        (this._items = e.get().map(function (e) {
                            return t(e);
                        })),
                        (this._mergers = this._items.map(function () {
                            return 1;
                        })),
                        void this.refresh()
                    );
                this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
            }),
            (o.prototype.initialize = function () {
                var t, e, n;
                (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) &&
                    ((t = this.$element.find("img")), (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i), (n = this.$element.children(e).width()), t.length && n <= 0 && this.preloadAutoWidthImages(t));
                this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
            }),
            (o.prototype.isVisible = function () {
                return !this.settings.checkVisibility || this.$element.is(":visible");
            }),
            (o.prototype.setup = function () {
                var e = this.viewport(),
                    n = this.options.responsive,
                    i = -1,
                    o = null;
                n
                    ? (t.each(n, function (t) {
                          t <= e && t > i && (i = Number(t));
                      }),
                      "function" == typeof (o = t.extend({}, this.options, n[i])).stagePadding && (o.stagePadding = o.stagePadding()),
                      delete o.responsive,
                      o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i)))
                    : (o = t.extend({}, this.options)),
                    this.trigger("change", { property: { name: "settings", value: o } }),
                    (this._breakpoint = i),
                    (this.settings = o),
                    this.invalidate("settings"),
                    this.trigger("changed", { property: { name: "settings", value: this.settings } });
            }),
            (o.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (o.prototype.prepare = function (e) {
                var n = this.trigger("prepare", { content: e });
                return (
                    n.data ||
                        (n.data = t("<" + this.settings.itemElement + "/>")
                            .addClass(this.options.itemClass)
                            .append(e)),
                    this.trigger("prepared", { content: n.data }),
                    n.data
                );
            }),
            (o.prototype.update = function () {
                for (
                    var e = 0,
                        n = this._pipe.length,
                        i = t.proxy(function (t) {
                            return this[t];
                        }, this._invalidated),
                        o = {};
                    e < n;

                )
                    (this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
                (this._invalidated = {}), !this.is("valid") && this.enter("valid");
            }),
            (o.prototype.width = function (t) {
                switch ((t = t || o.Width.Default)) {
                    case o.Width.Inner:
                    case o.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
            }),
            (o.prototype.refresh = function () {
                this.enter("refreshing"),
                    this.trigger("refresh"),
                    this.setup(),
                    this.optionsLogic(),
                    this.$element.addClass(this.options.refreshClass),
                    this.update(),
                    this.$element.removeClass(this.options.refreshClass),
                    this.leave("refreshing"),
                    this.trigger("refreshed");
            }),
            (o.prototype.onThrottledResize = function () {
                e.clearTimeout(this.resizeTimer), (this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
            }),
            (o.prototype.onResize = function () {
                return (
                    !!this._items.length &&
                    this._width !== this.$element.width() &&
                    !!this.isVisible() &&
                    (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                );
            }),
            (o.prototype.registerEventHandlers = function () {
                t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
                    !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize),
                    this.settings.mouseDrag &&
                        (this.$element.addClass(this.options.dragClass),
                        this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
                        this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                            return !1;
                        })),
                    this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)));
            }),
            (o.prototype.onDragStart = function (e) {
                var i = null;
                3 !== e.which &&
                    (t.support.transform
                        ? (i = {
                              x: (i = this.$stage
                                  .css("transform")
                                  .replace(/.*\(|\)| /g, "")
                                  .split(","))[16 === i.length ? 12 : 4],
                              y: i[16 === i.length ? 13 : 5],
                          })
                        : ((i = this.$stage.position()), (i = { x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left, y: i.top })),
                    this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")),
                    this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type),
                    this.speed(0),
                    (this._drag.time = new Date().getTime()),
                    (this._drag.target = t(e.target)),
                    (this._drag.stage.start = i),
                    (this._drag.stage.current = i),
                    (this._drag.pointer = this.pointer(e)),
                    t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)),
                    t(n).one(
                        "mousemove.owl.core touchmove.owl.core",
                        t.proxy(function (e) {
                            var i = this.difference(this._drag.pointer, this.pointer(e));
                            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), (Math.abs(i.x) < Math.abs(i.y) && this.is("valid")) || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                        }, this)
                    ));
            }),
            (o.prototype.onDragMove = function (t) {
                var e = null,
                    n = null,
                    i = null,
                    o = this.difference(this._drag.pointer, this.pointer(t)),
                    s = this.difference(this._drag.stage.start, o);
                this.is("dragging") &&
                    (t.preventDefault(),
                    this.settings.loop
                        ? ((e = this.coordinates(this.minimum())), (n = this.coordinates(this.maximum() + 1) - e), (s.x = ((((s.x - e) % n) + n) % n) + e))
                        : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                          (n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                          (i = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
                          (s.x = Math.max(Math.min(s.x, e + i), n + i))),
                    (this._drag.stage.current = s),
                    this.animate(s.x));
            }),
            (o.prototype.onDragEnd = function (e) {
                var i = this.difference(this._drag.pointer, this.pointer(e)),
                    o = this._drag.stage.current,
                    s = (i.x > 0) ^ this.settings.rtl ? "left" : "right";
                t(n).off(".owl.core"),
                    this.$element.removeClass(this.options.grabClass),
                    ((0 !== i.x && this.is("dragging")) || !this.is("valid")) &&
                        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                        this.current(this.closest(o.x, 0 !== i.x ? s : this._drag.direction)),
                        this.invalidate("position"),
                        this.update(),
                        (this._drag.direction = s),
                        (Math.abs(i.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                            this._drag.target.one("click.owl.core", function () {
                                return !1;
                            })),
                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
            }),
            (o.prototype.closest = function (e, n) {
                var o = -1,
                    s = this.width(),
                    r = this.coordinates();
                return (
                    this.settings.freeDrag ||
                        t.each(
                            r,
                            t.proxy(function (t, a) {
                                return (
                                    "left" === n && e > a - 30 && e < a + 30
                                        ? (o = t)
                                        : "right" === n && e > a - s - 30 && e < a - s + 30
                                        ? (o = t + 1)
                                        : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== i ? r[t + 1] : a - s) && (o = "left" === n ? t + 1 : t),
                                    -1 === o
                                );
                            }, this)
                        ),
                    this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? (o = e = this.minimum()) : this.op(e, "<", r[this.maximum()]) && (o = e = this.maximum())),
                    o
                );
            }),
            (o.prototype.animate = function (e) {
                var n = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(),
                    n && (this.enter("animating"), this.trigger("translate")),
                    t.support.transform3d && t.support.transition
                        ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                        : n
                        ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this))
                        : this.$stage.css({ left: e + "px" });
            }),
            (o.prototype.is = function (t) {
                return this._states.current[t] && this._states.current[t] > 0;
            }),
            (o.prototype.current = function (t) {
                if (t === i) return this._current;
                if (0 === this._items.length) return i;
                if (((t = this.normalize(t)), this._current !== t)) {
                    var e = this.trigger("change", { property: { name: "position", value: t } });
                    e.data !== i && (t = this.normalize(e.data)), (this._current = t), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                }
                return this._current;
            }),
            (o.prototype.invalidate = function (e) {
                return (
                    "string" === t.type(e) && ((this._invalidated[e] = !0), this.is("valid") && this.leave("valid")),
                    t.map(this._invalidated, function (t, e) {
                        return e;
                    })
                );
            }),
            (o.prototype.reset = function (t) {
                (t = this.normalize(t)) !== i && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
            }),
            (o.prototype.normalize = function (t, e) {
                var n = this._items.length,
                    o = e ? 0 : this._clones.length;
                return !this.isNumeric(t) || n < 1 ? (t = i) : (t < 0 || t >= n + o) && (t = ((((t - o / 2) % n) + n) % n) + o / 2), t;
            }),
            (o.prototype.relative = function (t) {
                return (t -= this._clones.length / 2), this.normalize(t, !0);
            }),
            (o.prototype.maximum = function (t) {
                var e,
                    n,
                    i,
                    o = this.settings,
                    s = this._coordinates.length;
                if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
                else if (o.autoWidth || o.merge) {
                    if ((e = this._items.length)) for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i); );
                    s = e + 1;
                } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
                return t && (s -= this._clones.length / 2), Math.max(s, 0);
            }),
            (o.prototype.minimum = function (t) {
                return t ? 0 : this._clones.length / 2;
            }),
            (o.prototype.items = function (t) {
                return t === i ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
            }),
            (o.prototype.mergers = function (t) {
                return t === i ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
            }),
            (o.prototype.clones = function (e) {
                var n = this._clones.length / 2,
                    o = n + this._items.length,
                    s = function (t) {
                        return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2;
                    };
                return e === i
                    ? t.map(this._clones, function (t, e) {
                          return s(e);
                      })
                    : t.map(this._clones, function (t, n) {
                          return t === e ? s(n) : null;
                      });
            }),
            (o.prototype.speed = function (t) {
                return t !== i && (this._speed = t), this._speed;
            }),
            (o.prototype.coordinates = function (e) {
                var n,
                    o = 1,
                    s = e - 1;
                return e === i
                    ? t.map(
                          this._coordinates,
                          t.proxy(function (t, e) {
                              return this.coordinates(e);
                          }, this)
                      )
                    : (this.settings.center ? (this.settings.rtl && ((o = -1), (s = e + 1)), (n = this._coordinates[e]), (n += ((this.width() - n + (this._coordinates[s] || 0)) / 2) * o)) : (n = this._coordinates[s] || 0),
                      (n = Math.ceil(n)));
            }),
            (o.prototype.duration = function (t, e, n) {
                return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed);
            }),
            (o.prototype.to = function (t, e) {
                var n = this.current(),
                    i = null,
                    o = t - this.relative(n),
                    s = (o > 0) - (o < 0),
                    r = this._items.length,
                    a = this.minimum(),
                    l = this.maximum();
                this.settings.loop
                    ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), (i = (((((t = n + o) - a) % r) + r) % r) + a) !== t && i - o <= l && i - o > 0 && ((n = i - o), (t = i), this.reset(n)))
                    : this.settings.rewind
                    ? (t = ((t % (l += 1)) + l) % l)
                    : (t = Math.max(a, Math.min(l, t))),
                    this.speed(this.duration(n, t, e)),
                    this.current(t),
                    this.isVisible() && this.update();
            }),
            (o.prototype.next = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) + 1, t);
            }),
            (o.prototype.prev = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) - 1, t);
            }),
            (o.prototype.onTransitionEnd = function (t) {
                if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                this.leave("animating"), this.trigger("translated");
            }),
            (o.prototype.viewport = function () {
                var i;
                return (
                    this.options.responsiveBaseElement !== e
                        ? (i = t(this.options.responsiveBaseElement).width())
                        : e.innerWidth
                        ? (i = e.innerWidth)
                        : n.documentElement && n.documentElement.clientWidth
                        ? (i = n.documentElement.clientWidth)
                        : console.warn("Can not detect viewport width."),
                    i
                );
            }),
            (o.prototype.replace = function (e) {
                this.$stage.empty(),
                    (this._items = []),
                    e && (e = e instanceof jQuery ? e : t(e)),
                    this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)),
                    e
                        .filter(function () {
                            return 1 === this.nodeType;
                        })
                        .each(
                            t.proxy(function (t, e) {
                                (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                            }, this)
                        ),
                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                    this.invalidate("items");
            }),
            (o.prototype.add = function (e, n) {
                var o = this.relative(this._current);
                (n = n === i ? this._items.length : this.normalize(n, !0)),
                    (e = e instanceof jQuery ? e : t(e)),
                    this.trigger("add", { content: e, position: n }),
                    (e = this.prepare(e)),
                    0 === this._items.length || n === this._items.length
                        ? (0 === this._items.length && this.$stage.append(e),
                          0 !== this._items.length && this._items[n - 1].after(e),
                          this._items.push(e),
                          this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                        : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                    this._items[o] && this.reset(this._items[o].index()),
                    this.invalidate("items"),
                    this.trigger("added", { content: e, position: n });
            }),
            (o.prototype.remove = function (t) {
                (t = this.normalize(t, !0)) !== i &&
                    (this.trigger("remove", { content: this._items[t], position: t }),
                    this._items[t].remove(),
                    this._items.splice(t, 1),
                    this._mergers.splice(t, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: t }));
            }),
            (o.prototype.preloadAutoWidthImages = function (e) {
                e.each(
                    t.proxy(function (e, n) {
                        this.enter("pre-loading"),
                            (n = t(n)),
                            t(new Image())
                                .one(
                                    "load",
                                    t.proxy(function (t) {
                                        n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                    }, this)
                                )
                                .attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"));
                    }, this)
                );
            }),
            (o.prototype.destroy = function () {
                for (var i in (this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                t(n).off(".owl.core"),
                !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)),
                this._plugins))
                    this._plugins[i].destroy();
                this.$stage.children(".cloned").remove(),
                    this.$stage.unwrap(),
                    this.$stage.children().contents().unwrap(),
                    this.$stage.children().unwrap(),
                    this.$stage.remove(),
                    this.$element
                        .removeClass(this.options.refreshClass)
                        .removeClass(this.options.loadingClass)
                        .removeClass(this.options.loadedClass)
                        .removeClass(this.options.rtlClass)
                        .removeClass(this.options.dragClass)
                        .removeClass(this.options.grabClass)
                        .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                        .removeData("owl.carousel");
            }),
            (o.prototype.op = function (t, e, n) {
                var i = this.settings.rtl;
                switch (e) {
                    case "<":
                        return i ? t > n : t < n;
                    case ">":
                        return i ? t < n : t > n;
                    case ">=":
                        return i ? t <= n : t >= n;
                    case "<=":
                        return i ? t >= n : t <= n;
                }
            }),
            (o.prototype.on = function (t, e, n, i) {
                t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n);
            }),
            (o.prototype.off = function (t, e, n, i) {
                t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n);
            }),
            (o.prototype.trigger = function (e, n, i, s, r) {
                var a = { item: { count: this._items.length, index: this.current() } },
                    l = t.camelCase(
                        t
                            .grep(["on", e, i], function (t) {
                                return t;
                            })
                            .join("-")
                            .toLowerCase()
                    ),
                    c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, a, n));
                return (
                    this._supress[e] ||
                        (t.each(this._plugins, function (t, e) {
                            e.onTrigger && e.onTrigger(c);
                        }),
                        this.register({ type: o.Type.Event, name: e }),
                        this.$element.trigger(c),
                        this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)),
                    c
                );
            }),
            (o.prototype.enter = function (e) {
                t.each(
                    [e].concat(this._states.tags[e] || []),
                    t.proxy(function (t, e) {
                        this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++;
                    }, this)
                );
            }),
            (o.prototype.leave = function (e) {
                t.each(
                    [e].concat(this._states.tags[e] || []),
                    t.proxy(function (t, e) {
                        this._states.current[e]--;
                    }, this)
                );
            }),
            (o.prototype.register = function (e) {
                if (e.type === o.Type.Event) {
                    if ((t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl)) {
                        var n = t.event.special[e.name]._default;
                        (t.event.special[e.name]._default = function (t) {
                            return !n || !n.apply || (t.namespace && -1 !== t.namespace.indexOf("owl")) ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments);
                        }),
                            (t.event.special[e.name].owl = !0);
                    }
                } else
                    e.type === o.Type.State &&
                        (this._states.tags[e.name] ? (this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags)) : (this._states.tags[e.name] = e.tags),
                        (this._states.tags[e.name] = t.grep(
                            this._states.tags[e.name],
                            t.proxy(function (n, i) {
                                return t.inArray(n, this._states.tags[e.name]) === i;
                            }, this)
                        )));
            }),
            (o.prototype.suppress = function (e) {
                t.each(
                    e,
                    t.proxy(function (t, e) {
                        this._supress[e] = !0;
                    }, this)
                );
            }),
            (o.prototype.release = function (e) {
                t.each(
                    e,
                    t.proxy(function (t, e) {
                        delete this._supress[e];
                    }, this)
                );
            }),
            (o.prototype.pointer = function (t) {
                var n = { x: null, y: null };
                return (
                    (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX
                        ? ((n.x = t.pageX), (n.y = t.pageY))
                        : ((n.x = t.clientX), (n.y = t.clientY)),
                    n
                );
            }),
            (o.prototype.isNumeric = function (t) {
                return !isNaN(parseFloat(t));
            }),
            (o.prototype.difference = function (t, e) {
                return { x: t.x - e.x, y: t.y - e.y };
            }),
            (t.fn.owlCarousel = function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var i = t(this),
                        s = i.data("owl.carousel");
                    s ||
                        ((s = new o(this, "object" == typeof e && e)),
                        i.data("owl.carousel", s),
                        t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
                            s.register({ type: o.Type.Event, name: n }),
                                s.$element.on(
                                    n + ".owl.carousel.core",
                                    t.proxy(function (t) {
                                        t.namespace && t.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n]));
                                    }, s)
                                );
                        })),
                        "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n);
                });
            }),
            (t.fn.owlCarousel.Constructor = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        var o = function (e) {
            (this._core = e),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = t.extend({}, o.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (o.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (o.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (o.prototype.destroy = function () {
                var t, n;
                for (t in (e.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        var o = function (e) {
            (this._core = e),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && ((e.property && "position" == e.property.name) || "initialized" == e.type)) {
                            var n = this._core.settings,
                                i = (n.center && Math.ceil(n.items / 2)) || n.items,
                                o = (n.center && -1 * i) || 0,
                                s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o,
                                r = this._core.clones().length,
                                a = t.proxy(function (t, e) {
                                    this.load(e);
                                }, this);
                            for (n.lazyLoadEager > 0 && ((i += n.lazyLoadEager), n.loop && ((s -= n.lazyLoadEager), i++)); o++ < i; ) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s)), a), s++;
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, o.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (o.prototype.load = function (n) {
                var i = this._core.$stage.children().eq(n),
                    o = i && i.find(".owl-lazy");
                !o ||
                    t.inArray(i.get(0), this._loaded) > -1 ||
                    (o.each(
                        t.proxy(function (n, i) {
                            var o,
                                s = t(i),
                                r = (e.devicePixelRatio > 1 && s.attr("data-src-retina")) || s.attr("data-src") || s.attr("data-srcset");
                            this._core.trigger("load", { element: s, url: r }, "lazy"),
                                s.is("img")
                                    ? s
                                          .one(
                                              "load.owl.lazy",
                                              t.proxy(function () {
                                                  s.css("opacity", 1), this._core.trigger("loaded", { element: s, url: r }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", r)
                                    : s.is("source")
                                    ? s
                                          .one(
                                              "load.owl.lazy",
                                              t.proxy(function () {
                                                  this._core.trigger("loaded", { element: s, url: r }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", r)
                                    : (((o = new Image()).onload = t.proxy(function () {
                                          s.css({ "background-image": 'url("' + r + '")', opacity: "1" }), this._core.trigger("loaded", { element: s, url: r }, "lazy");
                                      }, this)),
                                      (o.src = r));
                        }, this)
                    ),
                    this._loaded.push(i.get(0)));
            }),
            (o.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        var o = function (n) {
            (this._core = n),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = t.extend({}, o.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var i = this;
            t(e).on("load", function () {
                i._core.settings.autoHeight && i.update();
            }),
                t(e).resize(function () {
                    i._core.settings.autoHeight &&
                        (null != i._intervalId && clearTimeout(i._intervalId),
                        (i._intervalId = setTimeout(function () {
                            i.update();
                        }, 250)));
                });
        };
        (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (o.prototype.update = function () {
                var e = this._core._current,
                    n = e + this._core.settings.items,
                    i = this._core.settings.lazyLoad,
                    o = this._core.$stage.children().toArray().slice(e, n),
                    s = [],
                    r = 0;
                t.each(o, function (e, n) {
                    s.push(t(n).height());
                }),
                    (r = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (r = this._previousHeight),
                    (this._previousHeight = r),
                    this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass);
            }),
            (o.prototype.destroy = function () {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        var o = function (e) {
            (this._core = e),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var n = t(e.content).find(".owl-video");
                            n.length && (n.css("display", "none"), this.fetch(n, t(e.content)));
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, o.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    t.proxy(function (t) {
                        this.play(t);
                    }, this)
                );
        };
        (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (o.prototype.fetch = function (t, e) {
                var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                    i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    o = t.attr("data-width") || this._core.settings.videoWidth,
                    s = t.attr("data-height") || this._core.settings.videoHeight,
                    r = t.attr("href");
                if (!r) throw new Error("Missing video URL.");
                if (
                    (i = r.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    ))[3].indexOf("youtu") > -1
                )
                    n = "youtube";
                else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                else {
                    if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    n = "vzaar";
                }
                (i = i[6]), (this._videos[r] = { type: n, id: i, width: o, height: s }), e.attr("data-video", r), this.thumbnail(t, this._videos[r]);
            }),
            (o.prototype.thumbnail = function (e, n) {
                var i,
                    o,
                    s = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                    r = e.find("img"),
                    a = "src",
                    l = "",
                    c = this._core.settings,
                    u = function (n) {
                        '<div class="owl-video-play-icon"></div>',
                            (i = c.lazyLoad ? t("<div/>", { class: "owl-video-tn " + l, srcType: n }) : t("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + n + ")" })),
                            e.after(i),
                            e.after('<div class="owl-video-play-icon"></div>');
                    };
                if ((e.wrap(t("<div/>", { class: "owl-video-wrapper", style: s })), this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")), r.length)) return u(r.attr(a)), r.remove(), !1;
                "youtube" === n.type
                    ? ((o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"), u(o))
                    : "vimeo" === n.type
                    ? t.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (o = t[0].thumbnail_large), u(o);
                          },
                      })
                    : "vzaar" === n.type &&
                      t.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + n.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (o = t.framegrab_url), u(o);
                          },
                      });
            }),
            (o.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (o.prototype.play = function (e) {
                var n,
                    i = t(e.target).closest("." + this._core.settings.itemClass),
                    o = this._videos[i.attr("data-video")],
                    s = o.width || "100%",
                    r = o.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (i = this._core.items(this._core.relative(i.index()))),
                    this._core.reset(i.index()),
                    (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r),
                    n.attr("width", s),
                    "youtube" === o.type
                        ? n.attr("src", "//www.youtube.com/embed/" + o.id + "?autoplay=1&rel=0&v=" + o.id)
                        : "vimeo" === o.type
                        ? n.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1")
                        : "vzaar" === o.type && n.attr("src", "//view.vzaar.com/" + o.id + "/player?autoplay=true"),
                    t(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")),
                    (this._playing = i.addClass("owl-video-playing")));
            }),
            (o.prototype.isInFullScreen = function () {
                var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
                return e && t(e).parent().hasClass("owl-video-frame");
            }),
            (o.prototype.destroy = function () {
                var t, e;
                for (t in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Video = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        var o = function (e) {
            (this.core = e),
                (this.core.options = t.extend({}, o.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = i),
                (this.next = i),
                (this.handlers = {
                    "change.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                        t.namespace && (this.swapping = "translated" == t.type);
                    }, this),
                    "translate.owl.carousel": t.proxy(function (t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (o.Defaults = { animateOut: !1, animateIn: !1 }),
            (o.prototype.swap = function () {
                if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                    this.core.speed(0);
                    var e,
                        n = t.proxy(this.clear, this),
                        i = this.core.$stage.children().eq(this.previous),
                        o = this.core.$stage.children().eq(this.next),
                        s = this.core.settings.animateIn,
                        r = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (r &&
                            ((e = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            i
                                .one(t.support.animation.end, n)
                                .css({ left: e + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(r)),
                        s && o.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s));
                }
            }),
            (o.prototype.clear = function (e) {
                t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (o.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        var o = function (e) {
            (this._core = e),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "settings" === t.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": t.proxy(function (t, e, n) {
                        t.namespace && this.play(e, n);
                    }, this),
                    "stop.owl.autoplay": t.proxy(function (t) {
                        t.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = t.extend({}, o.Defaults, this._core.options));
        };
        (o.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (o.prototype._next = function (i) {
                (this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed);
            }),
            (o.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (o.prototype.play = function (n, i) {
                var o;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (n = n || this._core.settings.autoplayTimeout),
                    (o = Math.min(this._time % (this._timeout || n), n)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : e.clearTimeout(this._call),
                    (this._time += (this.read() % n) - o),
                    (this._timeout = n),
                    (this._call = e.setTimeout(t.proxy(this._next, this, i), n - o));
            }),
            (o.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), e.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (o.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), e.clearTimeout(this._call));
            }),
            (o.prototype.destroy = function () {
                var t, e;
                for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        "use strict";
        var o = function (e) {
            (this._core = e),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": t.proxy(function (e) {
                        e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = t.extend({}, o.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (o.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (o.prototype.initialize = function () {
                var e,
                    n = this._core.settings;
                for (e in ((this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                (this._controls.$previous = t("<" + n.navElement + ">")
                    .addClass(n.navClass[0])
                    .html(n.navText[0])
                    .prependTo(this._controls.$relative)
                    .on(
                        "click",
                        t.proxy(function (t) {
                            this.prev(n.navSpeed);
                        }, this)
                    )),
                (this._controls.$next = t("<" + n.navElement + ">")
                    .addClass(n.navClass[1])
                    .html(n.navText[1])
                    .appendTo(this._controls.$relative)
                    .on(
                        "click",
                        t.proxy(function (t) {
                            this.next(n.navSpeed);
                        }, this)
                    )),
                n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]),
                (this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled")),
                this._controls.$absolute.on(
                    "click",
                    "button",
                    t.proxy(function (e) {
                        var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                        e.preventDefault(), this.to(i, n.dotsSpeed);
                    }, this)
                ),
                this._overrides))
                    this._core[e] = t.proxy(this[e], this);
            }),
            (o.prototype.destroy = function () {
                var t, e, n, i, o;
                for (t in ((o = this._core.settings), this._handlers)) this.$element.off(t, this._handlers[t]);
                for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                for (i in this.overides) this._core[i] = this._overrides[i];
                for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null);
            }),
            (o.prototype.update = function () {
                var t,
                    e,
                    n = this._core.clones().length / 2,
                    i = n + this._core.items().length,
                    o = this._core.maximum(!0),
                    s = this._core.settings,
                    r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
                if (("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy))
                    for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
                        if (e >= r || 0 === e) {
                            if ((this._pages.push({ start: Math.min(o, t - n), end: t - n + r - 1 }), Math.min(o, t - n) === o)) break;
                            (e = 0), 0;
                        }
                        e += this._core.mergers(this._core.relative(t));
                    }
            }),
            (o.prototype.draw = function () {
                var e,
                    n = this._core.settings,
                    i = this._core.items().length <= n.items,
                    o = this._core.relative(this._core.current()),
                    s = n.loop || n.rewind;
                this._controls.$relative.toggleClass("disabled", !n.nav || i),
                    n.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !n.dots || i),
                    n.dots &&
                        ((e = this._pages.length - this._controls.$absolute.children().length),
                        n.dotsData && 0 !== e
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : e > 0
                            ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0]))
                            : e < 0 && this._controls.$absolute.children().slice(e).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (o.prototype.onTrigger = function (e) {
                var n = this._core.settings;
                e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items) };
            }),
            (o.prototype.current = function () {
                var e = this._core.relative(this._core.current());
                return t
                    .grep(
                        this._pages,
                        t.proxy(function (t, n) {
                            return t.start <= e && t.end >= e;
                        }, this)
                    )
                    .pop();
            }),
            (o.prototype.getPosition = function (e) {
                var n,
                    i,
                    o = this._core.settings;
                return (
                    "page" == o.slideBy
                        ? ((n = t.inArray(this.current(), this._pages)), (i = this._pages.length), e ? ++n : --n, (n = this._pages[((n % i) + i) % i].start))
                        : ((n = this._core.relative(this._core.current())), (i = this._core.items().length), e ? (n += o.slideBy) : (n -= o.slideBy)),
                    n
                );
            }),
            (o.prototype.next = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
            }),
            (o.prototype.prev = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
            }),
            (o.prototype.to = function (e, n, i) {
                var o;
                !i && this._pages.length ? ((o = this._pages.length), t.proxy(this._overrides.to, this._core)(this._pages[((e % o) + o) % o].start, n)) : t.proxy(this._overrides.to, this._core)(e, n);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        "use strict";
        var o = function (n) {
            (this._core = n),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (n) {
                        n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!n) return;
                            this._hashes[n] = e.content;
                        }
                    }, this),
                    "changed.owl.carousel": t.proxy(function (n) {
                        if (n.namespace && "position" === n.property.name) {
                            var i = this._core.items(this._core.relative(this._core.current())),
                                o = t
                                    .map(this._hashes, function (t, e) {
                                        return t === i ? e : null;
                                    })
                                    .join();
                            if (!o || e.location.hash.slice(1) === o) return;
                            e.location.hash = o;
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, o.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                t(e).on(
                    "hashchange.owl.navigation",
                    t.proxy(function (t) {
                        var n = e.location.hash.substring(1),
                            i = this._core.$stage.children(),
                            o = this._hashes[n] && i.index(this._hashes[n]);
                        void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0);
                    }, this)
                );
        };
        (o.Defaults = { URLhashListener: !1 }),
            (o.prototype.destroy = function () {
                var n, i;
                for (n in (t(e).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(n, this._handlers[n]);
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        function o(e, n) {
            var o = !1,
                s = e.charAt(0).toUpperCase() + e.slice(1);
            return (
                t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
                    if (r[e] !== i) return (o = !n || e), !1;
                }),
                o
            );
        }
        function s(t) {
            return o(t, !0);
        }
        var r = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            c = function () {
                return !!o("transform");
            },
            u = function () {
                return !!o("perspective");
            },
            h = function () {
                return !!o("animation");
            };
        (function () {
            return !!o("transition");
        })() && ((t.support.transition = new String(s("transition"))), (t.support.transition.end = l.transition.end[t.support.transition])),
            h() && ((t.support.animation = new String(s("animation"))), (t.support.animation.end = l.animation.end[t.support.animation])),
            c() && ((t.support.transform = new String(s("transform"))), (t.support.transform3d = u()));
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, n, i) {
        "use strict";
        if (((t.console = t.console || { info: function (t) {} }), n))
            if (n.fn.fancybox) console.info("fancyBox already initialized");
            else {
                var o,
                    s,
                    r = {
                        closeExisting: !1,
                        loop: !1,
                        gutter: 50,
                        keyboard: !0,
                        preventCaptionOverlap: !0,
                        arrows: !0,
                        infobar: !0,
                        smallBtn: "auto",
                        toolbar: "auto",
                        buttons: ["zoom", "slideShow", "thumbs", "close"],
                        idleTime: 3,
                        protect: !1,
                        modal: !1,
                        image: { preload: !1 },
                        ajax: { settings: { data: { fancybox: !0 } } },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                            preload: !0,
                            css: {},
                            attr: { scrolling: "auto" },
                        },
                        video: {
                            tpl:
                                '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                            format: "",
                            autoStart: !0,
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 366,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl:
                            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                        btnTpl: {
                            download:
                                '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                            zoom:
                                '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                            close:
                                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                            arrowLeft:
                                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                            arrowRight:
                                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                            smallBtn:
                                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                        },
                        parentEl: "body",
                        hideScrollbar: !0,
                        autoFocus: !0,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: { autoStart: !1 },
                        touch: { vertical: !0, momentum: !0 },
                        hash: null,
                        media: {},
                        slideShow: { autoStart: !1, speed: 3e3 },
                        thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                        wheel: "auto",
                        onInit: n.noop,
                        beforeLoad: n.noop,
                        afterLoad: n.noop,
                        beforeShow: n.noop,
                        afterShow: n.noop,
                        beforeClose: n.noop,
                        afterClose: n.noop,
                        onActivate: n.noop,
                        onDeactivate: n.noop,
                        clickContent: function (t, e) {
                            return "image" === t.type && "zoom";
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            preventCaptionOverlap: !1,
                            idleTime: !1,
                            clickContent: function (t, e) {
                                return "image" === t.type && "toggleControls";
                            },
                            clickSlide: function (t, e) {
                                return "image" === t.type ? "toggleControls" : "close";
                            },
                            dblclickContent: function (t, e) {
                                return "image" === t.type && "zoom";
                            },
                            dblclickSlide: function (t, e) {
                                return "image" === t.type && "zoom";
                            },
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom",
                            },
                            de: {
                                CLOSE: "Schlie&szlig;en",
                                NEXT: "Weiter",
                                PREV: "Zur&uuml;ck",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Vergr&ouml;&szlig;ern",
                            },
                        },
                    },
                    a = n(t),
                    l = n(e),
                    c = 0,
                    u =
                        t.requestAnimationFrame ||
                        t.webkitRequestAnimationFrame ||
                        t.mozRequestAnimationFrame ||
                        t.oRequestAnimationFrame ||
                        function (e) {
                            return t.setTimeout(e, 1e3 / 60);
                        },
                    h =
                        t.cancelAnimationFrame ||
                        t.webkitCancelAnimationFrame ||
                        t.mozCancelAnimationFrame ||
                        t.oCancelAnimationFrame ||
                        function (e) {
                            t.clearTimeout(e);
                        },
                    d = (function () {
                        var t,
                            n = e.createElement("fakeelement"),
                            i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                        for (t in i) if (void 0 !== n.style[t]) return i[t];
                        return "transitionend";
                    })(),
                    p = function (t) {
                        return t && t.length && t[0].offsetHeight;
                    },
                    f = function (t, e) {
                        var i = n.extend(!0, {}, t, e);
                        return (
                            n.each(e, function (t, e) {
                                n.isArray(e) && (i[t] = e);
                            }),
                            i
                        );
                    },
                    g = function (t, e, i) {
                        (this.opts = f({ index: i }, n.fancybox.defaults)),
                            n.isPlainObject(e) && (this.opts = f(this.opts, e)),
                            n.fancybox.isMobile && (this.opts = f(this.opts, this.opts.mobile)),
                            (this.id = this.opts.id || ++c),
                            (this.currIndex = parseInt(this.opts.index, 10) || 0),
                            (this.prevIndex = null),
                            (this.prevPos = null),
                            (this.currPos = 0),
                            (this.firstRun = !0),
                            (this.group = []),
                            (this.slides = {}),
                            this.addContent(t),
                            this.group.length && this.init();
                    };
                n.extend(g.prototype, {
                    init: function () {
                        var i,
                            o,
                            s = this,
                            r = s.group[s.currIndex].opts;
                        r.closeExisting && n.fancybox.close(!0),
                            n("body").addClass("fancybox-active"),
                            !n.fancybox.getInstance() &&
                                !1 !== r.hideScrollbar &&
                                !n.fancybox.isMobile &&
                                e.body.scrollHeight > t.innerHeight &&
                                (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                                n("body").addClass("compensate-for-scrollbar")),
                            (o = ""),
                            n.each(r.buttons, function (t, e) {
                                o += r.btnTpl[e] || "";
                            }),
                            (i = n(s.translate(s, r.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)))
                                .attr("id", "fancybox-container-" + s.id)
                                .addClass(r.baseClass)
                                .data("FancyBox", s)
                                .appendTo(r.parentEl)),
                            (s.$refs = { container: i }),
                            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                                s.$refs[t] = i.find(".fancybox-" + t);
                            }),
                            s.trigger("onInit"),
                            s.activate(),
                            s.jumpTo(s.currIndex);
                    },
                    translate: function (t, e) {
                        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                            return void 0 === n[e] ? t : n[e];
                        });
                    },
                    addContent: function (t) {
                        var e,
                            i = this,
                            o = n.makeArray(t);
                        n.each(o, function (t, e) {
                            var o,
                                s,
                                r,
                                a,
                                l,
                                c = {},
                                u = {};
                            n.isPlainObject(e)
                                ? ((c = e), (u = e.opts || e))
                                : "object" === n.type(e) && n(e).length
                                ? ((u = (o = n(e)).data() || {}), ((u = n.extend(!0, {}, u, u.options)).$orig = o), (c.src = i.opts.src || u.src || o.attr("href")), c.type || c.src || ((c.type = "inline"), (c.src = e)))
                                : (c = { type: "html", src: e + "" }),
                                (c.opts = n.extend(!0, {}, i.opts, u)),
                                n.isArray(u.buttons) && (c.opts.buttons = u.buttons),
                                n.fancybox.isMobile && c.opts.mobile && (c.opts = f(c.opts, c.opts.mobile)),
                                (s = c.type || c.opts.type),
                                (a = c.src || ""),
                                !s &&
                                    a &&
                                    ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                        ? ((s = "video"), c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                                        : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                        ? (s = "image")
                                        : a.match(/\.(pdf)((\?|#).*)?$/i)
                                        ? ((s = "iframe"), (c = n.extend(!0, c, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                                        : "#" === a.charAt(0) && (s = "inline")),
                                s ? (c.type = s) : i.trigger("objectNeedsType", c),
                                c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type),
                                (c.index = i.group.length),
                                "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                                "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
                                (c.$thumb = c.opts.$thumb || null),
                                c.opts.$trigger && c.index === i.opts.index && ((c.$thumb = c.opts.$trigger.find("img:first")), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                                (c.$thumb && c.$thumb.length) || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")),
                                c.$thumb && !c.$thumb.length && (c.$thumb = null),
                                (c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null)),
                                "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [i, c])),
                                "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(e, [i, c])),
                                c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                                "ajax" === c.type && (l = a.split(/\s+/, 2)).length > 1 && ((c.src = l.shift()), (c.opts.filter = l.shift())),
                                c.opts.modal &&
                                    (c.opts = n.extend(!0, c.opts, {
                                        trapFocus: !0,
                                        infobar: 0,
                                        toolbar: 0,
                                        smallBtn: 0,
                                        keyboard: 0,
                                        slideShow: 0,
                                        fullScreen: 0,
                                        thumbs: 0,
                                        touch: 0,
                                        clickContent: !1,
                                        clickSlide: !1,
                                        clickOutside: !1,
                                        dblclickContent: !1,
                                        dblclickSlide: !1,
                                        dblclickOutside: !1,
                                    })),
                                i.group.push(c);
                        }),
                            Object.keys(i.slides).length && (i.updateControls(), (e = i.Thumbs) && e.isActive && (e.create(), e.focus()));
                    },
                    addEvents: function () {
                        var e = this;
                        e.removeEvents(),
                            e.$refs.container
                                .on("click.fb-close", "[data-fancybox-close]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.close(t);
                                })
                                .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.previous();
                                })
                                .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.next();
                                })
                                .on("click.fb", "[data-fancybox-zoom]", function (t) {
                                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                                }),
                            a.on("orientationchange.fb resize.fb", function (t) {
                                t && t.originalEvent && "resize" === t.originalEvent.type
                                    ? (e.requestId && h(e.requestId),
                                      (e.requestId = u(function () {
                                          e.update(t);
                                      })))
                                    : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                                      setTimeout(
                                          function () {
                                              e.$refs.stage.show(), e.update(t);
                                          },
                                          n.fancybox.isMobile ? 600 : 250
                                      ));
                            }),
                            l.on("keydown.fb", function (t) {
                                var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                                    o = t.keyCode || t.which;
                                if (9 != o) {
                                    if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select")))
                                        return 8 === o || 27 === o
                                            ? (t.preventDefault(), void e.close(t))
                                            : 37 === o || 38 === o
                                            ? (t.preventDefault(), void e.previous())
                                            : 39 === o || 40 === o
                                            ? (t.preventDefault(), void e.next())
                                            : void e.trigger("afterKeydown", t, o);
                                } else i.opts.trapFocus && e.focus(t);
                            }),
                            e.group[e.currIndex].opts.idleTime &&
                                ((e.idleSecondsCounter = 0),
                                l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                                    (e.idleSecondsCounter = 0), e.isIdle && e.showControls(), (e.isIdle = !1);
                                }),
                                (e.idleInterval = t.setInterval(function () {
                                    e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
                                }, 1e3)));
                    },
                    removeEvents: function () {
                        a.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), (this.idleInterval = null));
                    },
                    previous: function (t) {
                        return this.jumpTo(this.currPos - 1, t);
                    },
                    next: function (t) {
                        return this.jumpTo(this.currPos + 1, t);
                    },
                    jumpTo: function (t, e) {
                        var i,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            u,
                            h,
                            d = this,
                            f = d.group.length;
                        if (!(d.isDragging || d.isClosing || (d.isAnimating && d.firstRun))) {
                            if (((t = parseInt(t, 10)), !(s = d.current ? d.current.opts.loop : d.opts.loop) && (t < 0 || t >= f))) return !1;
                            if (
                                ((i = d.firstRun = !Object.keys(d.slides).length),
                                (a = d.current),
                                (d.prevIndex = d.currIndex),
                                (d.prevPos = d.currPos),
                                (r = d.createSlide(t)),
                                f > 1 && ((s || r.index < f - 1) && d.createSlide(t + 1), (s || r.index > 0) && d.createSlide(t - 1)),
                                (d.current = r),
                                (d.currIndex = r.index),
                                (d.currPos = r.pos),
                                d.trigger("beforeShow", i),
                                d.updateControls(),
                                (r.forcedDuration = void 0),
                                n.isNumeric(e) ? (r.forcedDuration = e) : (e = r.opts[i ? "animationDuration" : "transitionDuration"]),
                                (e = parseInt(e, 10)),
                                (o = d.isMoved(r)),
                                r.$slide.addClass("fancybox-slide--current"),
                                i)
                            )
                                return r.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(r), void d.preload("image");
                            (l = n.fancybox.getTranslate(a.$slide)),
                                (c = n.fancybox.getTranslate(d.$refs.stage)),
                                n.each(d.slides, function (t, e) {
                                    n.fancybox.stop(e.$slide, !0);
                                }),
                                a.pos !== r.pos && (a.isComplete = !1),
                                a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                                o
                                    ? ((h = l.left - (a.pos * l.width + a.pos * a.opts.gutter)),
                                      n.each(d.slides, function (t, i) {
                                          i.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                          });
                                          var o = i.pos * l.width + i.pos * i.opts.gutter;
                                          n.fancybox.setTranslate(i.$slide, { top: 0, left: o - c.left + h }),
                                              i.pos !== r.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > r.pos ? "next" : "previous")),
                                              p(i.$slide),
                                              n.fancybox.animate(i.$slide, { top: 0, left: (i.pos - r.pos) * l.width + (i.pos - r.pos) * i.opts.gutter }, e, function () {
                                                  i.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === d.currPos && d.complete();
                                              });
                                      }))
                                    : e &&
                                      r.opts.transitionEffect &&
                                      ((u = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect),
                                      a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")),
                                      n.fancybox.animate(
                                          a.$slide,
                                          u,
                                          e,
                                          function () {
                                              a.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
                                          },
                                          !1
                                      )),
                                r.isLoaded ? d.revealContent(r) : d.loadSlide(r),
                                d.preload("image");
                        }
                    },
                    createSlide: function (t) {
                        var e, i;
                        return (
                            (i = (i = t % this.group.length) < 0 ? this.group.length + i : i),
                            !this.slides[t] &&
                                this.group[i] &&
                                ((e = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage)), (this.slides[t] = n.extend(!0, {}, this.group[i], { pos: t, $slide: e, isLoaded: !1 })), this.updateSlide(this.slides[t])),
                            this.slides[t]
                        );
                    },
                    scaleToActual: function (t, e, i) {
                        var o,
                            s,
                            r,
                            a,
                            l,
                            c = this,
                            u = c.current,
                            h = u.$content,
                            d = n.fancybox.getTranslate(u.$slide).width,
                            p = n.fancybox.getTranslate(u.$slide).height,
                            f = u.width,
                            g = u.height;
                        c.isAnimating ||
                            c.isMoved() ||
                            !h ||
                            "image" != u.type ||
                            !u.isLoaded ||
                            u.hasError ||
                            ((c.isAnimating = !0),
                            n.fancybox.stop(h),
                            (t = void 0 === t ? 0.5 * d : t),
                            (e = void 0 === e ? 0.5 * p : e),
                            ((o = n.fancybox.getTranslate(h)).top -= n.fancybox.getTranslate(u.$slide).top),
                            (o.left -= n.fancybox.getTranslate(u.$slide).left),
                            (a = f / o.width),
                            (l = g / o.height),
                            (s = 0.5 * d - 0.5 * f),
                            (r = 0.5 * p - 0.5 * g),
                            f > d && ((s = o.left * a - (t * a - t)) > 0 && (s = 0), s < d - f && (s = d - f)),
                            g > p && ((r = o.top * l - (e * l - e)) > 0 && (r = 0), r < p - g && (r = p - g)),
                            c.updateCursor(f, g),
                            n.fancybox.animate(h, { top: r, left: s, scaleX: a, scaleY: l }, i || 366, function () {
                                c.isAnimating = !1;
                            }),
                            c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
                    },
                    scaleToFit: function (t) {
                        var e,
                            i = this,
                            o = i.current,
                            s = o.$content;
                        i.isAnimating ||
                            i.isMoved() ||
                            !s ||
                            "image" != o.type ||
                            !o.isLoaded ||
                            o.hasError ||
                            ((i.isAnimating = !0),
                            n.fancybox.stop(s),
                            (e = i.getFitPos(o)),
                            i.updateCursor(e.width, e.height),
                            n.fancybox.animate(s, { top: e.top, left: e.left, scaleX: e.width / s.width(), scaleY: e.height / s.height() }, t || 366, function () {
                                i.isAnimating = !1;
                            }));
                    },
                    getFitPos: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            r = t.$content,
                            a = t.$slide,
                            l = t.width || t.opts.width,
                            c = t.height || t.opts.height,
                            u = {};
                        return (
                            !!(t.isLoaded && r && r.length) &&
                            ((e = n.fancybox.getTranslate(this.$refs.stage).width),
                            (i = n.fancybox.getTranslate(this.$refs.stage).height),
                            (e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight"))),
                            (i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom"))),
                            (l && c) || ((l = e), (c = i)),
                            (l *= o = Math.min(1, e / l, i / c)) > e - 0.5 && (l = e),
                            (c *= o) > i - 0.5 && (c = i),
                            "image" === t.type
                                ? ((u.top = Math.floor(0.5 * (i - c)) + parseFloat(a.css("paddingTop"))), (u.left = Math.floor(0.5 * (e - l)) + parseFloat(a.css("paddingLeft"))))
                                : "video" === t.contentType && (c > l / (s = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? (c = l / s) : l > c * s && (l = c * s)),
                            (u.width = l),
                            (u.height = c),
                            u)
                        );
                    },
                    update: function (t) {
                        var e = this;
                        n.each(e.slides, function (n, i) {
                            e.updateSlide(i, t);
                        });
                    },
                    updateSlide: function (t, e) {
                        var i = t && t.$content,
                            o = t.width || t.opts.width,
                            s = t.height || t.opts.height,
                            r = t.$slide;
                        this.adjustCaption(t),
                            i && (o || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, this.getFitPos(t)), t.pos === this.currPos && ((this.isAnimating = !1), this.updateCursor())),
                            this.adjustLayout(t),
                            r.length &&
                                (r.trigger("refresh"),
                                t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                            this.trigger("onUpdate", t, e);
                    },
                    centerSlide: function (t) {
                        var e = this,
                            i = e.current,
                            o = i.$slide;
                        !e.isClosing &&
                            i &&
                            (o.siblings().css({ transform: "", opacity: "" }),
                            o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                            n.fancybox.animate(
                                o,
                                { top: 0, left: 0, opacity: 1 },
                                void 0 === t ? 0 : t,
                                function () {
                                    o.css({ transform: "", opacity: "" }), i.isComplete || e.complete();
                                },
                                !1
                            ));
                    },
                    isMoved: function (t) {
                        var e,
                            i,
                            o = t || this.current;
                        return !!o && ((i = n.fancybox.getTranslate(this.$refs.stage)), (e = n.fancybox.getTranslate(o.$slide)), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > 0.5 || Math.abs(e.left - i.left) > 0.5));
                    },
                    updateCursor: function (t, e) {
                        var i,
                            o,
                            s = this.current,
                            r = this.$refs.container;
                        s &&
                            !this.isClosing &&
                            this.Guestures &&
                            (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                            (o = !!(i = this.canPan(t, e)) || this.isZoomable()),
                            r.toggleClass("fancybox-is-zoomable", o),
                            n("[data-fancybox-zoom]").prop("disabled", !o),
                            i
                                ? r.addClass("fancybox-can-pan")
                                : o && ("zoom" === s.opts.clickContent || (n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)))
                                ? r.addClass("fancybox-can-zoomIn")
                                : s.opts.touch && (s.opts.touch.vertical || this.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
                    },
                    isZoomable: function () {
                        var t,
                            e = this.current;
                        if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                            if (!e.isLoaded) return !0;
                            if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0;
                        }
                        return !1;
                    },
                    isScaledDown: function (t, e) {
                        var i = !1,
                            o = this.current,
                            s = o.$content;
                        return void 0 !== t && void 0 !== e ? (i = t < o.width && e < o.height) : s && (i = (i = n.fancybox.getTranslate(s)).width < o.width && i.height < o.height), i;
                    },
                    canPan: function (t, e) {
                        var i = this.current,
                            o = null,
                            s = !1;
                        return (
                            "image" === i.type &&
                                (i.isComplete || (t && e)) &&
                                !i.hasError &&
                                ((s = this.getFitPos(i)),
                                void 0 !== t && void 0 !== e ? (o = { width: t, height: e }) : i.isComplete && (o = n.fancybox.getTranslate(i.$content)),
                                o && s && (s = Math.abs(o.width - s.width) > 1.5 || Math.abs(o.height - s.height) > 1.5)),
                            s
                        );
                    },
                    loadSlide: function (t) {
                        var e,
                            i,
                            o,
                            s = this;
                        if (!t.isLoading && !t.isLoaded) {
                            if (((t.isLoading = !0), !1 === s.trigger("beforeLoad", t))) return (t.isLoading = !1), !1;
                            switch (((e = t.type), (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e)) {
                                case "image":
                                    s.setImage(t);
                                    break;
                                case "iframe":
                                    s.setIframe(t);
                                    break;
                                case "html":
                                    s.setContent(t, t.src || t.content);
                                    break;
                                case "video":
                                    s.setContent(
                                        t,
                                        t.opts.video.tpl
                                            .replace(/\{\{src\}\}/gi, t.src)
                                            .replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "")
                                            .replace("{{poster}}", t.thumb || "")
                                    );
                                    break;
                                case "inline":
                                    n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                                    break;
                                case "ajax":
                                    s.showLoading(t),
                                        (o = n.ajax(
                                            n.extend({}, t.opts.ajax.settings, {
                                                url: t.src,
                                                success: function (e, n) {
                                                    "success" === n && s.setContent(t, e);
                                                },
                                                error: function (e, n) {
                                                    e && "abort" !== n && s.setError(t);
                                                },
                                            })
                                        )),
                                        i.one("onReset", function () {
                                            o.abort();
                                        });
                                    break;
                                default:
                                    s.setError(t);
                            }
                            return !0;
                        }
                    },
                    setImage: function (t) {
                        var i,
                            o = this;
                        setTimeout(function () {
                            var e = t.$image;
                            o.isClosing || !t.isLoading || (e && e.length && e[0].complete) || t.hasError || o.showLoading(t);
                        }, 50),
                            o.checkSrcset(t),
                            (t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"))),
                            !1 !== t.opts.preload &&
                                t.opts.width &&
                                t.opts.height &&
                                t.thumb &&
                                ((t.width = t.opts.width),
                                (t.height = t.opts.height),
                                ((i = e.createElement("img")).onerror = function () {
                                    n(this).remove(), (t.$ghost = null);
                                }),
                                (i.onload = function () {
                                    o.afterLoad(t);
                                }),
                                (t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb))),
                            o.setBigImage(t);
                    },
                    checkSrcset: function (e) {
                        var n,
                            i,
                            o,
                            s,
                            r = e.opts.srcset || e.opts.image.srcset;
                        if (r) {
                            (o = t.devicePixelRatio || 1),
                                (s = t.innerWidth * o),
                                (i = r.split(",").map(function (t) {
                                    var e = {};
                                    return (
                                        t
                                            .trim()
                                            .split(/\s+/)
                                            .forEach(function (t, n) {
                                                var i = parseInt(t.substring(0, t.length - 1), 10);
                                                if (0 === n) return (e.url = t);
                                                i && ((e.value = i), (e.postfix = t[t.length - 1]));
                                            }),
                                        e
                                    );
                                })).sort(function (t, e) {
                                    return t.value - e.value;
                                });
                            for (var a = 0; a < i.length; a++) {
                                var l = i[a];
                                if (("w" === l.postfix && l.value >= s) || ("x" === l.postfix && l.value >= o)) {
                                    n = l;
                                    break;
                                }
                            }
                            !n && i.length && (n = i[i.length - 1]), n && ((e.src = n.url), e.width && e.height && "w" == n.postfix && ((e.height = (e.width / e.height) * n.value), (e.width = n.value)), (e.opts.srcset = r));
                        }
                    },
                    setBigImage: function (t) {
                        var i = this,
                            o = e.createElement("img"),
                            s = n(o);
                        (t.$image = s
                            .one("error", function () {
                                i.setError(t);
                            })
                            .one("load", function () {
                                var e;
                                t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)),
                                    i.isClosing ||
                                        (t.opts.srcset &&
                                            (((e = t.opts.sizes) && "auto" !== e) || (e = (t.width / t.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round((t.width / t.height) * 100)) + "vw"),
                                            s.attr("sizes", e).attr("srcset", t.opts.srcset)),
                                        t.$ghost &&
                                            setTimeout(function () {
                                                t.$ghost && !i.isClosing && t.$ghost.hide();
                                            }, Math.min(300, Math.max(1e3, t.height / 1600))),
                                        i.hideLoading(t));
                            })
                            .addClass("fancybox-image")
                            .attr("src", t.src)
                            .appendTo(t.$content)),
                            (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error");
                    },
                    resolveImageSlideSize: function (t, e, n) {
                        var i = parseInt(t.opts.width, 10),
                            o = parseInt(t.opts.height, 10);
                        (t.width = e), (t.height = n), i > 0 && ((t.width = i), (t.height = Math.floor((i * n) / e))), o > 0 && ((t.width = Math.floor((o * e) / n)), (t.height = o));
                    },
                    setIframe: function (t) {
                        var e,
                            i = this,
                            o = t.opts.iframe,
                            s = t.$slide;
                        (t.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>')
                            .css(o.css)
                            .appendTo(s)),
                            s.addClass("fancybox-slide--" + t.contentType),
                            (t.$iframe = e = n(o.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                                .attr(o.attr)
                                .appendTo(t.$content)),
                            o.preload
                                ? (i.showLoading(t),
                                  e.on("load.fb error.fb", function (e) {
                                      (this.isReady = 1), t.$slide.trigger("refresh"), i.afterLoad(t);
                                  }),
                                  s.on("refresh.fb", function () {
                                      var n,
                                          i = t.$content,
                                          r = o.css.width,
                                          a = o.css.height;
                                      if (1 === e[0].isReady) {
                                          try {
                                              n = e.contents().find("body");
                                          } catch (t) {}
                                          n &&
                                              n.length &&
                                              n.children().length &&
                                              (s.css("overflow", "visible"),
                                              i.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                              void 0 === r && (r = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))),
                                              i.css("width", r || "").css("max-width", ""),
                                              void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))),
                                              i.css("height", a || ""),
                                              s.css("overflow", "auto")),
                                              i.removeClass("fancybox-is-hidden");
                                      }
                                  }))
                                : i.afterLoad(t),
                            e.attr("src", t.src),
                            s.one("onReset", function () {
                                try {
                                    n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                                } catch (t) {}
                                n(this).off("refresh.fb").empty(), (t.isLoaded = !1), (t.isRevealed = !1);
                            });
                    },
                    setContent: function (t, e) {
                        var i;
                        this.isClosing ||
                            (this.hideLoading(t),
                            t.$content && n.fancybox.stop(t.$content),
                            t.$slide.empty(),
                            (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length
                                ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                                  (t.$placeholder = n("<div>").hide().insertAfter(e)),
                                  e.css("display", "inline-block"))
                                : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                            t.$slide.one("onReset", function () {
                                n(this).find("video,audio").trigger("pause"),
                                    t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), (t.$placeholder = null)),
                                    t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                                    t.hasError || (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                            }),
                            n(e).appendTo(t.$slide),
                            n(e).is("video,audio") &&
                                (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), (t.contentType = "video"), (t.opts.width = t.opts.width || n(e).attr("width")), (t.opts.height = t.opts.height || n(e).attr("height"))),
                            (t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                            t.$content.siblings().hide(),
                            t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                            t.$content.addClass("fancybox-content"),
                            t.$slide.addClass("fancybox-slide--" + t.contentType),
                            this.afterLoad(t));
                    },
                    setError: function (t) {
                        (t.hasError = !0),
                            t.$slide
                                .trigger("onReset")
                                .removeClass("fancybox-slide--" + t.contentType)
                                .addClass("fancybox-slide--error"),
                            (t.contentType = "html"),
                            this.setContent(t, this.translate(t, t.opts.errorTpl)),
                            t.pos === this.currPos && (this.isAnimating = !1);
                    },
                    showLoading: function (t) {
                        (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
                    },
                    hideLoading: function (t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
                    },
                    afterLoad: function (t) {
                        this.isClosing ||
                            ((t.isLoading = !1),
                            (t.isLoaded = !0),
                            this.trigger("afterLoad", t),
                            this.hideLoading(t),
                            !t.opts.smallBtn || (t.$smallBtn && t.$smallBtn.length) || (t.$smallBtn = n(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                            t.opts.protect &&
                                t.$content &&
                                !t.hasError &&
                                (t.$content.on("contextmenu.fb", function (t) {
                                    return 2 == t.button && t.preventDefault(), !0;
                                }),
                                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                            this.adjustCaption(t),
                            this.adjustLayout(t),
                            t.pos === this.currPos && this.updateCursor(),
                            this.revealContent(t));
                    },
                    adjustCaption: function (t) {
                        var e,
                            n = t || this.current,
                            i = n.opts.caption,
                            o = n.opts.preventCaptionOverlap,
                            s = this.$refs.caption,
                            r = !1;
                        s.toggleClass("fancybox-caption--separate", o),
                            o &&
                                i &&
                                i.length &&
                                (n.pos !== this.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(i), (r = e.outerHeight(!0)), e.empty().remove()) : this.$caption && (r = this.$caption.outerHeight(!0)),
                                n.$slide.css("padding-bottom", r || ""));
                    },
                    adjustLayout: function (t) {
                        var e,
                            n,
                            i,
                            o,
                            s = t || this.current;
                        s.isLoaded &&
                            !0 !== s.opts.disableLayoutFix &&
                            (s.$content.css("margin-bottom", ""),
                            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                                ((i = s.$slide[0].style["padding-bottom"]),
                                (o = s.$slide.css("padding-bottom")),
                                parseFloat(o) > 0 && ((e = s.$slide[0].scrollHeight), s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = o), s.$slide.css("padding-bottom", i))),
                            s.$content.css("margin-bottom", n));
                    },
                    revealContent: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            r = this,
                            a = t.$slide,
                            l = !1,
                            c = !1,
                            u = r.isMoved(t),
                            h = t.isRevealed;
                        return (
                            (t.isRevealed = !0),
                            (e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"]),
                            (o = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"]),
                            (o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10)),
                            (!u && t.pos === r.currPos && o) || (e = !1),
                            "zoom" === e && (t.pos === r.currPos && o && "image" === t.type && !t.hasError && (c = r.getThumbPos(t)) ? (l = r.getFitPos(t)) : (e = "fade")),
                            "zoom" === e
                                ? ((r.isAnimating = !0),
                                  (l.scaleX = l.width / c.width),
                                  (l.scaleY = l.height / c.height),
                                  "auto" == (s = t.opts.zoomOpacity) && (s = Math.abs(t.width / t.height - c.width / c.height) > 0.1),
                                  s && ((c.opacity = 0.1), (l.opacity = 1)),
                                  n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c),
                                  p(t.$content),
                                  void n.fancybox.animate(t.$content, l, o, function () {
                                      (r.isAnimating = !1), r.complete();
                                  }))
                                : (r.updateSlide(t),
                                  e
                                      ? (n.fancybox.stop(a),
                                        (i = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e),
                                        a.addClass(i).removeClass("fancybox-slide--current"),
                                        t.$content.removeClass("fancybox-is-hidden"),
                                        p(a),
                                        "image" !== t.type && t.$content.hide().show(0),
                                        void n.fancybox.animate(
                                            a,
                                            "fancybox-slide--current",
                                            o,
                                            function () {
                                                a.removeClass(i).css({ transform: "", opacity: "" }), t.pos === r.currPos && r.complete();
                                            },
                                            !0
                                        ))
                                      : (t.$content.removeClass("fancybox-is-hidden"), h || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete())))
                        );
                    },
                    getThumbPos: function (t) {
                        var i,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c = t.$thumb;
                        return (
                            !(
                                !c ||
                                !(function (t) {
                                    var i, o;
                                    return (
                                        !(!t || t.ownerDocument !== e) &&
                                        (n(".fancybox-container").css("pointer-events", "none"),
                                        (i = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }),
                                        (o = e.elementFromPoint(i.x, i.y) === t),
                                        n(".fancybox-container").css("pointer-events", ""),
                                        o)
                                    );
                                })(c[0])
                            ) &&
                            ((o = n.fancybox.getTranslate(c)),
                            (s = parseFloat(c.css("border-top-width") || 0)),
                            (r = parseFloat(c.css("border-right-width") || 0)),
                            (a = parseFloat(c.css("border-bottom-width") || 0)),
                            (l = parseFloat(c.css("border-left-width") || 0)),
                            (i = { top: o.top + s, left: o.left + l, width: o.width - r - l, height: o.height - s - a, scaleX: 1, scaleY: 1 }),
                            o.width > 0 && o.height > 0 && i)
                        );
                    },
                    complete: function () {
                        var t,
                            e = this,
                            i = e.current,
                            o = {};
                        !e.isMoved() &&
                            i.isLoaded &&
                            (i.isComplete ||
                                ((i.isComplete = !0),
                                i.$slide.siblings().trigger("onReset"),
                                e.preload("inline"),
                                p(i.$slide),
                                i.$slide.addClass("fancybox-slide--complete"),
                                n.each(e.slides, function (t, i) {
                                    i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? (o[i.pos] = i) : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
                                }),
                                (e.slides = o)),
                            (e.isAnimating = !1),
                            e.updateCursor(),
                            e.trigger("afterShow"),
                            i.opts.video.autoStart &&
                                i.$slide
                                    .find("video,audio")
                                    .filter(":visible:first")
                                    .trigger("play")
                                    .one("ended", function () {
                                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
                                    }),
                            i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)),
                            i.$slide.scrollTop(0).scrollLeft(0));
                    },
                    preload: function (t) {
                        var e, n;
                        this.group.length < 2 || ((n = this.slides[this.currPos + 1]), (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), n && n.type === t && this.loadSlide(n));
                    },
                    focus: function (t, i) {
                        var o,
                            s,
                            r = [
                                "a[href]",
                                "area[href]",
                                'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                                "select:not([disabled]):not([aria-hidden])",
                                "textarea:not([disabled]):not([aria-hidden])",
                                "button:not([disabled]):not([aria-hidden])",
                                "iframe",
                                "object",
                                "embed",
                                "video",
                                "audio",
                                "[contenteditable]",
                                '[tabindex]:not([tabindex^="-"])',
                            ].join(",");
                        this.isClosing ||
                            ((o = (o = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(r).filter(function () {
                                return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
                            })).length
                                ? ((s = o.index(e.activeElement)),
                                  t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus")))
                                : this.$refs.container.trigger("focus"));
                    },
                    activate: function () {
                        var t = this;
                        n(".fancybox-container").each(function () {
                            var e = n(this).data("FancyBox");
                            e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                        }),
                            (t.isVisible = !0),
                            (t.current || t.isIdle) && (t.update(), t.updateControls()),
                            t.trigger("onActivate"),
                            t.addEvents();
                    },
                    close: function (t, e) {
                        var i,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            h = this,
                            d = h.current,
                            f = function () {
                                h.cleanUp(t);
                            };
                        return (
                            !h.isClosing &&
                            ((h.isClosing = !0),
                            !1 === h.trigger("beforeClose", t)
                                ? ((h.isClosing = !1),
                                  u(function () {
                                      h.update();
                                  }),
                                  !1)
                                : (h.removeEvents(),
                                  (s = d.$content),
                                  (i = d.opts.animationEffect),
                                  (o = n.isNumeric(e) ? e : i ? d.opts.animationDuration : 0),
                                  d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                                  !0 !== t ? n.fancybox.stop(d.$slide) : (i = !1),
                                  d.$slide.siblings().trigger("onReset").remove(),
                                  o &&
                                      h.$refs.container
                                          .removeClass("fancybox-is-open")
                                          .addClass("fancybox-is-closing")
                                          .css("transition-duration", o + "ms"),
                                  h.hideLoading(d),
                                  h.hideControls(!0),
                                  h.updateCursor(),
                                  "zoom" !== i || (s && o && "image" === d.type && !h.isMoved() && !d.hasError && (c = h.getThumbPos(d))) || (i = "fade"),
                                  "zoom" === i
                                      ? (n.fancybox.stop(s),
                                        (l = { top: (r = n.fancybox.getTranslate(s)).top, left: r.left, scaleX: r.width / c.width, scaleY: r.height / c.height, width: c.width, height: c.height }),
                                        "auto" == (a = d.opts.zoomOpacity) && (a = Math.abs(d.width / d.height - c.width / c.height) > 0.1),
                                        a && (c.opacity = 0),
                                        n.fancybox.setTranslate(s, l),
                                        p(s),
                                        n.fancybox.animate(s, c, o, f),
                                        !0)
                                      : (i && o ? n.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, f) : !0 === t ? setTimeout(f, o) : f(),
                                        !0)))
                        );
                    },
                    cleanUp: function (e) {
                        var i,
                            o,
                            s,
                            r = this.current.opts.$orig;
                        this.current.$slide.trigger("onReset"),
                            this.$refs.container.empty().remove(),
                            this.trigger("afterClose", e),
                            this.current.opts.backFocus && ((r && r.length && r.is(":visible")) || (r = this.$trigger), r && r.length && ((o = t.scrollX), (s = t.scrollY), r.trigger("focus"), n("html, body").scrollTop(s).scrollLeft(o))),
                            (this.current = null),
                            (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
                    },
                    trigger: function (t, e) {
                        var i,
                            o = Array.prototype.slice.call(arguments, 1),
                            s = e && e.opts ? e : this.current;
                        if ((s ? o.unshift(s) : (s = this), o.unshift(this), n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, o)), !1 === i)) return i;
                        "afterClose" !== t && this.$refs ? this.$refs.container.trigger(t + ".fb", o) : l.trigger(t + ".fb", o);
                    },
                    updateControls: function () {
                        var t = this.current,
                            i = t.index,
                            o = this.$refs.container,
                            s = this.$refs.caption,
                            r = t.opts.caption;
                        t.$slide.trigger("refresh"),
                            r && r.length ? ((this.$caption = s), s.children().eq(0).html(r)) : (this.$caption = null),
                            this.hasHiddenControls || this.isIdle || this.showControls(),
                            o.find("[data-fancybox-count]").html(this.group.length),
                            o.find("[data-fancybox-index]").html(i + 1),
                            o.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && i <= 0),
                            o.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && i >= this.group.length - 1),
                            "image" === t.type
                                ? o
                                      .find("[data-fancybox-zoom]")
                                      .show()
                                      .end()
                                      .find("[data-fancybox-download]")
                                      .attr("href", t.opts.image.src || t.src)
                                      .show()
                                : t.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                            n(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus");
                    },
                    hideControls: function (t) {
                        var e = ["infobar", "toolbar", "nav"];
                        (!t && this.current.opts.preventCaptionOverlap) || e.push("caption"),
                            this.$refs.container.removeClass(
                                e
                                    .map(function (t) {
                                        return "fancybox-show-" + t;
                                    })
                                    .join(" ")
                            ),
                            (this.hasHiddenControls = !0);
                    },
                    showControls: function () {
                        var t = this.current ? this.current.opts : this.opts,
                            e = this.$refs.container;
                        (this.hasHiddenControls = !1),
                            (this.idleSecondsCounter = 0),
                            e
                                .toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons))
                                .toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1))
                                .toggleClass("fancybox-show-caption", !!this.$caption)
                                .toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1))
                                .toggleClass("fancybox-is-modal", !!t.modal);
                    },
                    toggleControls: function () {
                        this.hasHiddenControls ? this.showControls() : this.hideControls();
                    },
                }),
                    (n.fancybox = {
                        version: "3.5.7",
                        defaults: r,
                        getInstance: function (t) {
                            var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                i = Array.prototype.slice.call(arguments, 1);
                            return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e);
                        },
                        open: function (t, e, n) {
                            return new g(t, e, n);
                        },
                        close: function (t) {
                            var e = this.getInstance();
                            e && (e.close(), !0 === t && this.close(t));
                        },
                        destroy: function () {
                            this.close(!0), l.add("body").off("click.fb-start", "**");
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: ((o = e.createElement("div")), t.getComputedStyle && t.getComputedStyle(o) && t.getComputedStyle(o).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                        getTranslate: function (t) {
                            var e;
                            return !(!t || !t.length) && { top: (e = t[0].getBoundingClientRect()).top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) };
                        },
                        setTranslate: function (t, e) {
                            var n = "",
                                i = {};
                            if (t && e)
                                return (
                                    (void 0 === e.left && void 0 === e.top) ||
                                        ((n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                                    void 0 !== e.scaleX && void 0 !== e.scaleY ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")") : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                                    n.length && (i.transform = n),
                                    void 0 !== e.opacity && (i.opacity = e.opacity),
                                    void 0 !== e.width && (i.width = e.width),
                                    void 0 !== e.height && (i.height = e.height),
                                    t.css(i)
                                );
                        },
                        animate: function (t, e, i, o, s) {
                            var r,
                                a = this;
                            n.isFunction(i) && ((o = i), (i = null)),
                                a.stop(t),
                                (r = a.getTranslate(t)),
                                t.on(d, function (l) {
                                    (!l || !l.originalEvent || (t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName)) &&
                                        (a.stop(t),
                                        n.isNumeric(i) && t.css("transition-duration", ""),
                                        n.isPlainObject(e)
                                            ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, { top: e.top, left: e.left, width: r.width * e.scaleX, height: r.height * e.scaleY, scaleX: 1, scaleY: 1 })
                                            : !0 !== s && t.removeClass(e),
                                        n.isFunction(o) && o(l));
                                }),
                                n.isNumeric(i) && t.css("transition-duration", i + "ms"),
                                n.isPlainObject(e)
                                    ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                                      n.fancybox.setTranslate(t, e))
                                    : t.addClass(e),
                                t.data(
                                    "timer",
                                    setTimeout(function () {
                                        t.trigger(d);
                                    }, i + 33)
                                );
                        },
                        stop: function (t, e) {
                            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
                        },
                    }),
                    (n.fn.fancybox = function (t) {
                        var e;
                        return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, m) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, m), this;
                    }),
                    l.on("click.fb-start", "[data-fancybox]", m),
                    l.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
                            .eq(n(this).attr("data-fancybox-index") || 0)
                            .trigger("click.fb-start", { $trigger: n(this) });
                    }),
                    (s = null),
                    l.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
                        switch (t.type) {
                            case "mousedown":
                                s = n(this);
                                break;
                            case "mouseup":
                                s = null;
                                break;
                            case "focusin":
                                n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(s) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                                break;
                            case "focusout":
                                n(".fancybox-button").removeClass("fancybox-focus");
                        }
                    });
            }
        function m(t, e) {
            var i,
                o,
                s,
                r = [],
                a = 0;
            (t && t.isDefaultPrevented()) ||
                (t.preventDefault(),
                (e = e || {}),
                t && t.data && (e = f(t.data.options, e)),
                (i = e.$target || n(t.currentTarget).trigger("blur")),
                ((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) ||
                    ((r = e.selector ? n(e.selector) : (o = i.attr("data-fancybox") || "") ? ((r = t.data ? t.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]')) : [i]),
                    (a = n(r).index(i)) < 0 && (a = 0),
                    ((s = n.fancybox.open(r, e, a)).$trigger = i)));
        }
    })(window, document, jQuery),
    (function (t) {
        "use strict";
        var e = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/?ll=" +
                            (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") +
                            "&output=" +
                            (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                    },
                },
            },
            n = function (e, n, i) {
                if (e)
                    return (
                        (i = i || ""),
                        "object" === t.type(i) && (i = t.param(i, !0)),
                        t.each(n, function (t, n) {
                            e = e.replace("$" + t, n || "");
                        }),
                        i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
                        e
                    );
            };
        t(document).on("objectNeedsType.fb", function (i, o, s) {
            var r,
                a,
                l,
                c,
                u,
                h,
                d,
                p = s.src || "",
                f = !1;
            (r = t.extend(!0, {}, e, s.opts.media)),
                t.each(r, function (e, i) {
                    if ((l = p.match(i.matcher))) {
                        if (((f = i.type), (d = e), (h = {}), i.paramPlace && l[i.paramPlace])) {
                            "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)), (u = u.split("&"));
                            for (var o = 0; o < u.length; ++o) {
                                var r = u[o].split("=", 2);
                                2 == r.length && (h[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
                            }
                        }
                        return (
                            (c = t.extend(!0, {}, i.params, s.opts[e], h)),
                            (p = "function" === t.type(i.url) ? i.url.call(this, l, c, s) : n(i.url, l, c)),
                            (a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, s) : n(i.thumb, l)),
                            "youtube" === e
                                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
                                      return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
                                  }))
                                : "vimeo" === e && (p = p.replace("&%23", "#")),
                            !1
                        );
                    }
                }),
                f
                    ? (s.opts.thumb || (s.opts.$thumb && s.opts.$thumb.length) || (s.opts.thumb = a),
                      "iframe" === f && (s.opts = t.extend(!0, s.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                      t.extend(s, { type: f, src: p, origSrc: s.src, contentSource: d, contentType: "image" === f ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video" }))
                    : p && (s.type = s.opts.defaultType);
        });
        var i = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (t) {
                var e,
                    n = this;
                this[t].loaded
                    ? setTimeout(function () {
                          n.done(t);
                      })
                    : this[t].loading ||
                      ((this[t].loading = !0),
                      ((e = document.createElement("script")).type = "text/javascript"),
                      (e.src = this[t].src),
                      "youtube" === t
                          ? (window.onYouTubeIframeAPIReady = function () {
                                (n[t].loaded = !0), n.done(t);
                            })
                          : (e.onload = function () {
                                (n[t].loaded = !0), n.done(t);
                            }),
                      document.body.appendChild(e));
            },
            done: function (e) {
                var n, i;
                "youtube" === e && delete window.onYouTubeIframeAPIReady,
                    (n = t.fancybox.getInstance()) &&
                        ((i = n.current.$content.find("iframe")),
                        "youtube" === e && void 0 !== YT && YT
                            ? new YT.Player(i.attr("id"), {
                                  events: {
                                      onStateChange: function (t) {
                                          0 == t.data && n.next();
                                      },
                                  },
                              })
                            : "vimeo" === e &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              new Vimeo.Player(i).on("ended", function () {
                                  n.next();
                              }));
            },
        };
        t(document).on({
            "afterShow.fb": function (t, e, n) {
                e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (t, e, n) {
        "use strict";
        var i =
                t.requestAnimationFrame ||
                t.webkitRequestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                t.oRequestAnimationFrame ||
                function (e) {
                    return t.setTimeout(e, 1e3 / 60);
                },
            o =
                t.cancelAnimationFrame ||
                t.webkitCancelAnimationFrame ||
                t.mozCancelAnimationFrame ||
                t.oCancelAnimationFrame ||
                function (e) {
                    t.clearTimeout(e);
                },
            s = function (e) {
                var n = [];
                for (var i in (e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]))
                    e[i].pageX ? n.push({ x: e[i].pageX, y: e[i].pageY }) : e[i].clientX && n.push({ x: e[i].clientX, y: e[i].clientY });
                return n;
            },
            r = function (t, e, n) {
                return e && t ? ("x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
            },
            a = function (t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++) if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
                return !1;
            },
            l = function (e) {
                for (
                    var n, i, o, s, r, a = !1;
                    (n = e.get(0)),
                        (i = void 0),
                        (o = void 0),
                        (s = void 0),
                        (r = void 0),
                        (i = t.getComputedStyle(n)["overflow-y"]),
                        (o = t.getComputedStyle(n)["overflow-x"]),
                        (s = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight),
                        (r = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth),
                        !(a = s || r) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");

                );
                return a;
            },
            c = function (t) {
                (this.instance = t), (this.$bg = t.$refs.bg), (this.$stage = t.$refs.stage), (this.$container = t.$refs.container), this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"));
            };
        (c.prototype.destroy = function () {
            this.$container.off(".fb.touch"), n(e).off(".fb.touch"), this.requestId && (o(this.requestId), (this.requestId = null)), this.tapped && (clearTimeout(this.tapped), (this.tapped = null));
        }),
            (c.prototype.ontouchstart = function (i) {
                var o = n(i.target),
                    c = this.instance,
                    u = c.current,
                    h = u.$slide,
                    d = u.$content,
                    p = "touchstart" == i.type;
                if (
                    (p && this.$container.off("mousedown.fb.touch"),
                    (!i.originalEvent || 2 != i.originalEvent.button) && h.length && o.length && !a(o) && !a(o.parent()) && (o.is("img") || !(i.originalEvent.clientX > o[0].clientWidth + o.offset().left)))
                ) {
                    if (!u || c.isAnimating || u.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
                    (this.realPoints = this.startPoints = s(i)),
                        this.startPoints.length &&
                            (u.touch && i.stopPropagation(),
                            (this.startEvent = i),
                            (this.canTap = !0),
                            (this.$target = o),
                            (this.$content = d),
                            (this.opts = u.opts.touch),
                            (this.isPanning = !1),
                            (this.isSwiping = !1),
                            (this.isZooming = !1),
                            (this.isScrolling = !1),
                            (this.canPan = c.canPan()),
                            (this.startTime = new Date().getTime()),
                            (this.distanceX = this.distanceY = this.distance = 0),
                            (this.canvasWidth = Math.round(h[0].clientWidth)),
                            (this.canvasHeight = Math.round(h[0].clientHeight)),
                            (this.contentLastPos = null),
                            (this.contentStartPos = n.fancybox.getTranslate(this.$content) || { top: 0, left: 0 }),
                            (this.sliderStartPos = n.fancybox.getTranslate(h)),
                            (this.stagePos = n.fancybox.getTranslate(c.$refs.stage)),
                            (this.sliderStartPos.top -= this.stagePos.top),
                            (this.sliderStartPos.left -= this.stagePos.left),
                            (this.contentStartPos.top -= this.stagePos.top),
                            (this.contentStartPos.left -= this.stagePos.left),
                            n(e)
                                .off(".fb.touch")
                                .on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend"))
                                .on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")),
                            n.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0),
                            (((this.opts || this.canPan) && (o.is(this.$stage) || this.$stage.find(o).length)) || (o.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && o.parents(".fancybox-caption").length)) &&
                                ((this.isScrollable = l(o) || l(o.parent())),
                                (n.fancybox.isMobile && this.isScrollable) || i.preventDefault(),
                                (1 === this.startPoints.length || u.hasError) && (this.canPan ? (n.fancybox.stop(this.$content), (this.isPanning = !0)) : (this.isSwiping = !0), this.$container.addClass("fancybox-is-grabbing")),
                                2 === this.startPoints.length &&
                                    "image" === u.type &&
                                    (u.isLoaded || u.$ghost) &&
                                    ((this.canTap = !1),
                                    (this.isSwiping = !1),
                                    (this.isPanning = !1),
                                    (this.isZooming = !0),
                                    n.fancybox.stop(this.$content),
                                    (this.centerPointStartX = 0.5 * (this.startPoints[0].x + this.startPoints[1].x) - n(t).scrollLeft()),
                                    (this.centerPointStartY = 0.5 * (this.startPoints[0].y + this.startPoints[1].y) - n(t).scrollTop()),
                                    (this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width),
                                    (this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height),
                                    (this.startDistanceBetweenFingers = r(this.startPoints[0], this.startPoints[1])))));
                }
            }),
            (c.prototype.onscroll = function (t) {
                (this.isScrolling = !0), e.removeEventListener("scroll", this.onscroll, !0);
            }),
            (c.prototype.ontouchmove = function (t) {
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons
                    ? this.isScrolling
                        ? (this.canTap = !1)
                        : ((this.newPoints = s(t)),
                          (this.opts || this.canPan) &&
                              this.newPoints.length &&
                              this.newPoints.length &&
                              ((this.isSwiping && !0 === this.isSwiping) || t.preventDefault(),
                              (this.distanceX = r(this.newPoints[0], this.startPoints[0], "x")),
                              (this.distanceY = r(this.newPoints[0], this.startPoints[0], "y")),
                              (this.distance = r(this.newPoints[0], this.startPoints[0])),
                              this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom())))
                    : this.ontouchend(t);
            }),
            (c.prototype.onSwipe = function (e) {
                var s,
                    r = this,
                    a = r.instance,
                    l = r.isSwiping,
                    c = r.sliderStartPos.left || 0;
                if (!0 !== l)
                    "x" == l &&
                        (r.distanceX > 0 && (r.instance.group.length < 2 || (0 === r.instance.current.index && !r.instance.current.opts.loop))
                            ? (c += Math.pow(r.distanceX, 0.8))
                            : r.distanceX < 0 && (r.instance.group.length < 2 || (r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop))
                            ? (c -= Math.pow(-r.distanceX, 0.8))
                            : (c += r.distanceX)),
                        (r.sliderLastPos = { top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY, left: c }),
                        r.requestId && (o(r.requestId), (r.requestId = null)),
                        (r.requestId = i(function () {
                            r.sliderLastPos &&
                                (n.each(r.instance.slides, function (t, e) {
                                    var i = e.pos - r.instance.currPos;
                                    n.fancybox.setTranslate(e.$slide, { top: r.sliderLastPos.top, left: r.sliderLastPos.left + i * r.canvasWidth + i * e.opts.gutter });
                                }),
                                r.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (Math.abs(r.distance) > 10) {
                    if (
                        ((r.canTap = !1),
                        a.group.length < 2 && r.opts.vertical
                            ? (r.isSwiping = "y")
                            : a.isDragging || !1 === r.opts.vertical || ("auto" === r.opts.vertical && n(t).width() > 800)
                            ? (r.isSwiping = "x")
                            : ((s = Math.abs((180 * Math.atan2(r.distanceY, r.distanceX)) / Math.PI)), (r.isSwiping = s > 45 && s < 135 ? "y" : "x")),
                        "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable)
                    )
                        return void (r.isScrolling = !0);
                    (a.isDragging = r.isSwiping),
                        (r.startPoints = r.newPoints),
                        n.each(a.slides, function (t, e) {
                            var i, o;
                            n.fancybox.stop(e.$slide),
                                (i = n.fancybox.getTranslate(e.$slide)),
                                (o = n.fancybox.getTranslate(a.$refs.stage)),
                                e.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                                e.pos === a.current.pos && ((r.sliderStartPos.top = i.top - o.top), (r.sliderStartPos.left = i.left - o.left)),
                                n.fancybox.setTranslate(e.$slide, { top: i.top - o.top, left: i.left - o.left });
                        }),
                        a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
                }
            }),
            (c.prototype.onPan = function () {
                var t = this;
                r(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
                    ? (t.startPoints = t.newPoints)
                    : ((t.canTap = !1),
                      (t.contentLastPos = t.limitMovement()),
                      t.requestId && o(t.requestId),
                      (t.requestId = i(function () {
                          n.fancybox.setTranslate(t.$content, t.contentLastPos);
                      })));
            }),
            (c.prototype.limitMovement = function () {
                var t,
                    e,
                    n,
                    i,
                    o,
                    s,
                    r = this.canvasWidth,
                    a = this.canvasHeight,
                    l = this.distanceX,
                    c = this.distanceY,
                    u = this.contentStartPos,
                    h = u.left,
                    d = u.top,
                    p = u.width,
                    f = u.height;
                return (
                    (o = p > r ? h + l : h),
                    (s = d + c),
                    (t = Math.max(0, 0.5 * r - 0.5 * p)),
                    (e = Math.max(0, 0.5 * a - 0.5 * f)),
                    (n = Math.min(r - p, 0.5 * r - 0.5 * p)),
                    (i = Math.min(a - f, 0.5 * a - 0.5 * f)),
                    l > 0 && o > t && (o = t - 1 + Math.pow(-t + h + l, 0.8) || 0),
                    l < 0 && o < n && (o = n + 1 - Math.pow(n - h - l, 0.8) || 0),
                    c > 0 && s > e && (s = e - 1 + Math.pow(-e + d + c, 0.8) || 0),
                    c < 0 && s < i && (s = i + 1 - Math.pow(i - d - c, 0.8) || 0),
                    { top: s, left: o }
                );
            }),
            (c.prototype.limitPosition = function (t, e, n, i) {
                var o = this.canvasWidth,
                    s = this.canvasHeight;
                return (t = n > o ? ((t = t > 0 ? 0 : t) < o - n ? o - n : t) : Math.max(0, o / 2 - n / 2)), { top: (e = i > s ? ((e = e > 0 ? 0 : e) < s - i ? s - i : e) : Math.max(0, s / 2 - i / 2)), left: t };
            }),
            (c.prototype.onZoom = function () {
                var e = this,
                    s = e.contentStartPos,
                    a = s.width,
                    l = s.height,
                    c = s.left,
                    u = s.top,
                    h = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    d = Math.floor(a * h),
                    p = Math.floor(l * h),
                    f = (a - d) * e.percentageOfImageAtPinchPointX,
                    g = (l - p) * e.percentageOfImageAtPinchPointY,
                    m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                    v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                    y = m - e.centerPointStartX,
                    b = { top: u + (g + (v - e.centerPointStartY)), left: c + (f + y), scaleX: h, scaleY: h };
                (e.canTap = !1),
                    (e.newWidth = d),
                    (e.newHeight = p),
                    (e.contentLastPos = b),
                    e.requestId && o(e.requestId),
                    (e.requestId = i(function () {
                        n.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (c.prototype.ontouchend = function (t) {
                var i = this.isSwiping,
                    r = this.isPanning,
                    a = this.isZooming,
                    l = this.isScrolling;
                if (
                    ((this.endPoints = s(t)),
                    (this.dMs = Math.max(new Date().getTime() - this.startTime, 1)),
                    this.$container.removeClass("fancybox-is-grabbing"),
                    n(e).off(".fb.touch"),
                    e.removeEventListener("scroll", this.onscroll, !0),
                    this.requestId && (o(this.requestId), (this.requestId = null)),
                    (this.isSwiping = !1),
                    (this.isPanning = !1),
                    (this.isZooming = !1),
                    (this.isScrolling = !1),
                    (this.instance.isDragging = !1),
                    this.canTap)
                )
                    return this.onTap(t);
                (this.speed = 100), (this.velocityX = (this.distanceX / this.dMs) * 0.5), (this.velocityY = (this.distanceY / this.dMs) * 0.5), r ? this.endPanning() : a ? this.endZooming() : this.endSwiping(i, l);
            }),
            (c.prototype.endSwiping = function (t, e) {
                var i = !1,
                    o = this.instance.group.length,
                    s = Math.abs(this.distanceX),
                    r = "x" == t && o > 1 && ((this.dMs > 130 && s > 10) || s > 50);
                (this.sliderLastPos = null),
                    "y" == t && !e && Math.abs(this.distanceY) > 50
                        ? (n.fancybox.animate(this.instance.current.$slide, { top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY, opacity: 0 }, 200), (i = this.instance.close(!0, 250)))
                        : r && this.distanceX > 0
                        ? (i = this.instance.previous(300))
                        : r && this.distanceX < 0 && (i = this.instance.next(300)),
                    !1 !== i || ("x" != t && "y" != t) || this.instance.centerSlide(200),
                    this.$container.removeClass("fancybox-is-sliding");
            }),
            (c.prototype.endPanning = function () {
                var t, e, i;
                this.contentLastPos &&
                    (!1 === this.opts.momentum || this.dMs > 350
                        ? ((t = this.contentLastPos.left), (e = this.contentLastPos.top))
                        : ((t = this.contentLastPos.left + 500 * this.velocityX), (e = this.contentLastPos.top + 500 * this.velocityY)),
                    ((i = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width),
                    (i.height = this.contentStartPos.height),
                    n.fancybox.animate(this.$content, i, 366));
            }),
            (c.prototype.endZooming = function () {
                var t,
                    e,
                    i,
                    o,
                    s = this.instance.current,
                    r = this.newWidth,
                    a = this.newHeight;
                this.contentLastPos &&
                    ((t = this.contentLastPos.left),
                    (o = { top: (e = this.contentLastPos.top), left: t, width: r, height: a, scaleX: 1, scaleY: 1 }),
                    n.fancybox.setTranslate(this.$content, o),
                    r < this.canvasWidth && a < this.canvasHeight
                        ? this.instance.scaleToFit(150)
                        : r > s.width || a > s.height
                        ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150)
                        : ((i = this.limitPosition(t, e, r, a)), n.fancybox.animate(this.$content, i, 150)));
            }),
            (c.prototype.onTap = function (e) {
                var i,
                    o = this,
                    r = n(e.target),
                    a = o.instance,
                    l = a.current,
                    c = (e && s(e)) || o.startPoints,
                    u = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
                    h = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
                    d = function (t) {
                        var i = l.opts[t];
                        if ((n.isFunction(i) && (i = i.apply(a, [l, e])), i))
                            switch (i) {
                                case "close":
                                    a.close(o.startEvent);
                                    break;
                                case "toggleControls":
                                    a.toggleControls();
                                    break;
                                case "next":
                                    a.next();
                                    break;
                                case "nextOrClose":
                                    a.group.length > 1 ? a.next() : a.close(o.startEvent);
                                    break;
                                case "zoom":
                                    "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(u, h) : a.group.length < 2 && a.close(o.startEvent));
                            }
                    };
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (r.is("img") || !(u > r[0].clientWidth + r.offset().left))) {
                    if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
                    else if (r.is(".fancybox-slide")) i = "Slide";
                    else {
                        if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length) return;
                        i = "Content";
                    }
                    if (o.tapped) {
                        if ((clearTimeout(o.tapped), (o.tapped = null), Math.abs(u - o.tapX) > 50 || Math.abs(h - o.tapY) > 50)) return this;
                        d("dblclick" + i);
                    } else
                        (o.tapX = u),
                            (o.tapY = h),
                            l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i]
                                ? (o.tapped = setTimeout(function () {
                                      (o.tapped = null), a.isAnimating || d("click" + i);
                                  }, 500))
                                : d("click" + i);
                    return this;
                }
            }),
            n(e)
                .on("onActivate.fb", function (t, e) {
                    e && !e.Guestures && (e.Guestures = new c(e));
                })
                .on("beforeClose.fb", function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var n = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    n = t.instance,
                    i = n.group[n.currIndex].opts.slideShow;
                (t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle();
                })),
                    n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
            },
            set: function (t) {
                var n = this.instance,
                    i = n.current;
                i && (!0 === t || i.opts.loop || n.currIndex < n.group.length - 1)
                    ? this.isActive &&
                      "video" !== i.contentType &&
                      (this.$progress && e.fancybox.animate(this.$progress.show(), { scaleX: 1 }, i.opts.slideShow.speed),
                      (this.timer = setTimeout(function () {
                          n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
                      }, i.opts.slideShow.speed)))
                    : (this.stop(), (n.idleSecondsCounter = 0), n.showControls());
            },
            clear: function () {
                clearTimeout(this.timer), (this.timer = null), this.$progress && this.$progress.removeAttr("style").hide();
            },
            start: function () {
                var t = this.instance.current;
                t &&
                    (this.$button
                        .attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (this.isActive = !0),
                    t.isComplete && this.set(!0),
                    this.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var t = this.instance.current;
                this.clear(),
                    this.$button
                        .attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (this.isActive = !1),
                    this.instance.trigger("onSlideShowChange", !1),
                    this.$progress && this.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                "beforeShow.fb": function (t, e, n, i) {
                    var o = e && e.SlideShow;
                    i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
                },
                "afterShow.fb": function (t, e, n) {
                    var i = e && e.SlideShow;
                    i && i.isActive && i.set();
                },
                "afterKeydown.fb": function (n, i, o, s, r) {
                    var a = i && i.SlideShow;
                    !a || !o.opts.slideShow || (80 !== r && 32 !== r) || e(t.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop();
                },
            }),
            e(t).on("visibilitychange", function () {
                var n = e.fancybox.getInstance(),
                    i = n && n.SlideShow;
                i && i.isActive && (t.hidden ? i.clear() : i.set());
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = (function () {
            for (
                var e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                    ],
                    n = {},
                    i = 0;
                i < e.length;
                i++
            ) {
                var o = e[i];
                if (o && o[1] in t) {
                    for (var s = 0; s < o.length; s++) n[e[0][s]] = o[s];
                    return n;
                }
            }
            return !1;
        })();
        if (n) {
            var i = {
                request: function (e) {
                    (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    t[n.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || t.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(t[n.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(t[n.fullscreenEnabled]);
                },
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
                e(t).on(n.fullscreenchange, function () {
                    var t = i.isFullscreen(),
                        n = e.fancybox.getInstance();
                    n &&
                        (n.current && "image" === n.current.type && n.isAnimating && ((n.isAnimating = !1), n.update(!0, !0, 0), n.isComplete || n.complete()),
                        n.trigger("onFullscreenChange", t),
                        n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                        n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
                });
        }
        e(t).on({
            "onInit.fb": function (t, e) {
                n
                    ? e && e.group[e.currIndex].opts.fullScreen
                        ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                              t.stopPropagation(), t.preventDefault(), i.toggle();
                          }),
                          e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(),
                          (e.FullScreen = i))
                        : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                    : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle());
            },
            "beforeClose.fb": function (t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
            },
        });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = "fancybox-thumbs";
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            e.fancybox.defaults
        );
        var i = function (t) {
            this.init(t);
        };
        e.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    i = 0;
                (e.instance = t), (e.opts = n[t.currIndex].opts.thumbs), (t.Thumbs = e), (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var o = 0, s = n.length; o < s && (n[o].thumb && i++, !(i > 1)); o++);
                i > 1 && e.opts
                    ? (e.$button.removeAttr("style").on("click", function () {
                          e.toggle();
                      }),
                      (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var t,
                    i = this.instance,
                    o = this.opts.parentEl,
                    s = [];
                this.$grid ||
                    ((this.$grid = e('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(i.$refs.container.find(o).addBack().filter(o))),
                    this.$grid.on("click", "a", function () {
                        i.jumpTo(e(this).attr("data-index"));
                    })),
                    this.$list || (this.$list = e('<div class="' + n + '__list">').appendTo(this.$grid)),
                    e.each(i.group, function (e, n) {
                        (t = n.thumb) || "image" !== n.type || (t = n.src),
                            s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (this.$list[0].innerHTML = s.join("")),
                    "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + i.group.length * this.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (t) {
                var e,
                    n,
                    i = this.$list,
                    o = this.$grid;
                this.instance.current &&
                    ((n = (e = i
                        .children()
                        .removeClass("fancybox-thumbs-active")
                        .filter('[data-index="' + this.instance.current.index + '"]')
                        .addClass("fancybox-thumbs-active")).position()),
                    "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight())
                        ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
                        : "x" === this.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"),
                    this.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var n;
                    e && !e.Thumbs && (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show();
                },
                "beforeShow.fb": function (t, e, n, i) {
                    var o = e && e.Thumbs;
                    o && o.isVisible && o.focus(i ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, n, i, o) {
                    var s = e && e.Thumbs;
                    s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var n = e && e.Thumbs;
                    n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (!t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            e(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    n,
                    i,
                    o,
                    s = e.fancybox.getInstance(),
                    r = s.current || null;
                r &&
                    ("function" === e.type(r.opts.share.url) && (t = r.opts.share.url.apply(r, [s, r])),
                    (n = r.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === r.type ? encodeURIComponent(r.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(
                            /\{\{url_raw\}\}/g,
                            ((i = t),
                            (o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }),
                            String(i).replace(/[&<>"'`=\/]/g, function (t) {
                                return o[t];
                            }))
                        )
                        .replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : "")),
                    e.fancybox.open({
                        src: s.translate(s, n),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                s.$refs.container.one("beforeClose.fb", function () {
                                    t.close(null, 0);
                                }),
                                    e.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (t, e, n) {
        "use strict";
        function i() {
            var e = t.location.hash.substr(1),
                n = e.split("-"),
                i = (n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10)) || 1;
            return { hash: e, index: i < 1 ? 1 : i, gallery: n.join("-") };
        }
        function o(t) {
            "" !== t.gallery &&
                n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
                    .eq(t.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function s(t) {
            var e, n;
            return !!t && "" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n;
        }
        n.escapeSelector ||
            (n.escapeSelector = function (t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                    return e ? ("\0" === t ? "???" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                });
            }),
            n(function () {
                !1 !== n.fancybox.defaults.hash &&
                    (n(e).on({
                        "onInit.fb": function (t, e) {
                            var n, o;
                            !1 !== e.group[e.currIndex].opts.hash && ((n = i()), (o = s(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1));
                        },
                        "beforeShow.fb": function (n, i, o, r) {
                            var a;
                            o &&
                                !1 !== o.opts.hash &&
                                (a = s(i)) &&
                                ((i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : "")),
                                t.location.hash !== "#" + i.currentHash &&
                                    (r && !i.origHash && (i.origHash = t.location.hash),
                                    i.hashTimer && clearTimeout(i.hashTimer),
                                    (i.hashTimer = setTimeout(function () {
                                        "replaceState" in t.history
                                            ? (t.history[r ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), r && (i.hasCreatedHistory = !0))
                                            : (t.location.hash = i.currentHash),
                                            (i.hashTimer = null);
                                    }, 300))));
                        },
                        "beforeClose.fb": function (n, i, o) {
                            o &&
                                !1 !== o.opts.hash &&
                                (clearTimeout(i.hashTimer),
                                i.currentHash && i.hasCreatedHistory
                                    ? t.history.back()
                                    : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : (t.location.hash = i.origHash)),
                                (i.currentHash = null));
                        },
                    }),
                    n(t).on("hashchange.fb", function () {
                        var t = i(),
                            e = null;
                        n.each(n(".fancybox-container").get().reverse(), function (t, i) {
                            var o = n(i).data("FancyBox");
                            if (o && o.currentHash) return (e = o), !1;
                        }),
                            e ? e.currentHash === t.gallery + "-" + t.index || (1 === t.index && e.currentHash == t.gallery) || ((e.currentHash = null), e.close()) : "" !== t.gallery && o(t);
                    }),
                    setTimeout(function () {
                        n.fancybox.getInstance() || o(i());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        var n = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, e, i) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var i = e.current,
                        o = new Date().getTime();
                    e.group.length < 2 ||
                        !1 === i.opts.wheel ||
                        ("auto" === i.opts.wheel && "image" !== i.type) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        i.$slide.hasClass("fancybox-animated") || ((t = t.originalEvent || t), o - n < 250 || ((n = o), e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
                });
            },
        });
    })(document, jQuery),
    document.addEventListener("DOMContentLoaded", function () {
        $(".js-toggleheader").on("click", function () {
            $(this).find(".header__list").slideToggle("");
        }),
            $(".blog__aside-title").on("click", function () {
                $(this).find(".blog__aside-svg").toggleClass("active"), $(".blog__aside-toggle").slideToggle("");
            }),
            $(".registration__input-item--category").on("click", function () {
                $(this).find(".arrow").toggleClass("active"), $(".registration__input-game").slideToggle("");
            }),
            $(".bids__category").on("click", function () {
                $(this).find(".arrow").toggleClass("active"), $(this).find(".category__toggle").slideToggle("");
            }),
            $(".bids__country").on("click", function () {
                $(this).find(".arrow").toggleClass("active"), $(".country__toggle").slideToggle("");
            }),
            $(".header__toggle").on("click", function () {
                $(this).find(".header__listReg").slideToggle();
            }),
            $(".setting__select").on("click", function () {
                $(this).find(".setting__list").slideToggle(), $(this).toggleClass("active");
            }),
            $(".tab__button").on("click", function () {
                $(".tab__button").removeClass("active"), $(this).addClass("active");
            }),
            $(".js-referal .button").on("click", function () {
                event.preventDefault(), $(this).prev(".link").slideDown();
            }),
            $(document).mouseup(function (t) {
                var e = $(".header__toggle");
                e.is(t.target) || 0 !== e.has(t.target).length || $(".header__listReg").slideUp();
            }),
            $(document).mouseup(function (t) {
                var e = $(".header__toggle");
                e.is(t.target) || 0 !== e.has(t.target).length || $(".header__list").slideUp();
            }),
            $(document).mouseup(function (t) {
                var e = $(".setting__select");
                e.is(t.target) || 0 !== e.has(t.target).length || ($(".setting__list").slideUp(), $(".setting__select").removeClass("active"));
            }),
            $(".js-scroll").click(function () {
                return $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top + "px" }, { duration: 1e3 }), !1;
            }),
            $(".service__carousel-top .item img").each(function () {
                var t = $(this).attr("src");
                $(".service__carousel-bottom").append('<button class="img owl-dot" style="background: url(' + t + ')"></button>');
            }),
            $(".service__carousel-top").owlCarousel({ items: 1, autoplay: !0, autoplayTimeout: 6e3, nav: !0, dots: !0, loop: !0, dotsContainer: ".service__carousel-bottom", autoplayHoverPause: !0 }),
            $(".service__carousel-bottom").appendTo(".service__carousel-top"),
            $(".service__carousel-bottom img").on("click", function () {
                $(".service__carousel-top").trigger("to.owl.carousel", [$(this).index(), 300]);
            }),
            $(".service__recommend").owlCarousel({
                items: 3,
                autoplay: !0,
                autoplayTimeout: 3e3,
                nav: !0,
                margin: 20,
                dots: !1,
                loop: !0,
                navContainer: ".service__recommend-nav",
                responsive: { 0: { items: 1 }, 576: { items: 2 }, 767: { items: 3 } },
            }),
            $(".service__recommend-nav button").html('<img src="img/svg/arrow-down-sign-to-navigate.svg" alt="">'),
            $(".service__other").owlCarousel({
                items: 3,
                autoplay: !0,
                autoplayTimeout: 3e3,
                nav: !0,
                margin: 20,
                dots: !1,
                loop: !0,
                navContainer: ".service__other-nav",
                responsive: { 0: { items: 1 }, 576: { items: 2 }, 767: { items: 3 } },
            }),
            $(".service__other-nav button").html('<img src="img/svg/arrow-down-sign-to-navigate.svg" alt="">'),
            $(".file_input").change(function (t) {
                $(".file_name").html(t.target.files[0].name);
            }),
            $(".discuss__load-name img").each(function () {
                var t = $(this).attr("src").split("/"),
                    e = t[t.length - 1];
                $(this).next(".js-filename").html(e);
            }),
            $(".discuss__load-delete").on("click", function () {
                $(this).parent(".discuss__load-file").remove();
            }),
            $("#imgInput").change(function () {
                !(function (t) {
                    if (t.files && t.files[0]) {
                        var e = new FileReader();
                        (e.onload = function (t) {
                            $("#image").attr("src", t.target.result);
                        }),
                            e.readAsDataURL(t.files[0]);
                    }
                })(this);
            });
    });
