/*! For license information please see main.js.LICENSE.txt */
(() => {
    var t = {
            6955: () => {
                "serviceWorker" in navigator && navigator.serviceWorker.register("/magicaxismodels/service-worker.js")
            },
            1663: t => {
                "use strict";
                t.exports = (t, {
                    include: e,
                    exclude: i
                } = {}) => {
                    const s = t => {
                        const s = e => "string" == typeof e ? t === e : e.test(t);
                        return e ? e.some(s) : !i || !i.some(s)
                    };
                    for (const [e, i] of (t => {
                            const e = new Set;
                            do {
                                for (const i of Reflect.ownKeys(t)) e.add([t, i])
                            } while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
                            return e
                        })(t.constructor.prototype)) {
                        if ("constructor" === i || !s(i)) continue;
                        const r = Reflect.getOwnPropertyDescriptor(e, i);
                        r && "function" == typeof r.value && (t[i] = t[i].bind(t))
                    }
                    return t
                }
            },
            1590: t => {
                "use strict";
                var e, i = "object" == typeof Reflect ? Reflect : null,
                    s = i && "function" == typeof i.apply ? i.apply : function(t, e, i) {
                        return Function.prototype.apply.call(t, e, i)
                    };
                e = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                } : function(t) {
                    return Object.getOwnPropertyNames(t)
                };
                var r = Number.isNaN || function(t) {
                    return t != t
                };

                function n() {
                    n.init.call(this)
                }
                t.exports = n, t.exports.once = function(t, e) {
                    return new Promise((function(i, s) {
                        function r(i) {
                            t.removeListener(e, n), s(i)
                        }

                        function n() {
                            "function" == typeof t.removeListener && t.removeListener("error", r), i([].slice.call(arguments))
                        }
                        f(t, e, n, {
                            once: !0
                        }), "error" !== e && function(t, e, i) {
                            "function" == typeof t.on && f(t, "error", e, i)
                        }(t, r, {
                            once: !0
                        })
                    }))
                }, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._eventsCount = 0, n.prototype._maxListeners = void 0;
                var a = 10;

                function o(t) {
                    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
                }

                function h(t) {
                    return void 0 === t._maxListeners ? n.defaultMaxListeners : t._maxListeners
                }

                function l(t, e, i, s) {
                    var r, n, a, l;
                    if (o(i), void 0 === (n = t._events) ? (n = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== n.newListener && (t.emit("newListener", e, i.listener ? i.listener : i), n = t._events), a = n[e]), void 0 === a) a = n[e] = i, ++t._eventsCount;
                    else if ("function" == typeof a ? a = n[e] = s ? [i, a] : [a, i] : s ? a.unshift(i) : a.push(i), (r = h(t)) > 0 && a.length > r && !a.warned) {
                        a.warned = !0;
                        var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = a.length, l = u, console && console.warn && console.warn(l)
                    }
                    return t
                }

                function u() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }

                function c(t, e, i) {
                    var s = {
                            fired: !1,
                            wrapFn: void 0,
                            target: t,
                            type: e,
                            listener: i
                        },
                        r = u.bind(s);
                    return r.listener = i, s.wrapFn = r, r
                }

                function d(t, e, i) {
                    var s = t._events;
                    if (void 0 === s) return [];
                    var r = s[e];
                    return void 0 === r ? [] : "function" == typeof r ? i ? [r.listener || r] : [r] : i ? function(t) {
                        for (var e = new Array(t.length), i = 0; i < e.length; ++i) e[i] = t[i].listener || t[i];
                        return e
                    }(r) : m(r, r.length)
                }

                function p(t) {
                    var e = this._events;
                    if (void 0 !== e) {
                        var i = e[t];
                        if ("function" == typeof i) return 1;
                        if (void 0 !== i) return i.length
                    }
                    return 0
                }

                function m(t, e) {
                    for (var i = new Array(e), s = 0; s < e; ++s) i[s] = t[s];
                    return i
                }

                function f(t, e, i, s) {
                    if ("function" == typeof t.on) s.once ? t.once(e, i) : t.on(e, i);
                    else {
                        if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                        t.addEventListener(e, (function r(n) {
                            s.once && t.removeEventListener(e, r), i(n)
                        }))
                    }
                }
                Object.defineProperty(n, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        if ("number" != typeof t || t < 0 || r(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                        a = t
                    }
                }), n.init = function() {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, n.prototype.setMaxListeners = function(t) {
                    if ("number" != typeof t || t < 0 || r(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                    return this._maxListeners = t, this
                }, n.prototype.getMaxListeners = function() {
                    return h(this)
                }, n.prototype.emit = function(t) {
                    for (var e = [], i = 1; i < arguments.length; i++) e.push(arguments[i]);
                    var r = "error" === t,
                        n = this._events;
                    if (void 0 !== n) r = r && void 0 === n.error;
                    else if (!r) return !1;
                    if (r) {
                        var a;
                        if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
                        var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                        throw o.context = a, o
                    }
                    var h = n[t];
                    if (void 0 === h) return !1;
                    if ("function" == typeof h) s(h, this, e);
                    else {
                        var l = h.length,
                            u = m(h, l);
                        for (i = 0; i < l; ++i) s(u[i], this, e)
                    }
                    return !0
                }, n.prototype.addListener = function(t, e) {
                    return l(this, t, e, !1)
                }, n.prototype.on = n.prototype.addListener, n.prototype.prependListener = function(t, e) {
                    return l(this, t, e, !0)
                }, n.prototype.once = function(t, e) {
                    return o(e), this.on(t, c(this, t, e)), this
                }, n.prototype.prependOnceListener = function(t, e) {
                    return o(e), this.prependListener(t, c(this, t, e)), this
                }, n.prototype.removeListener = function(t, e) {
                    var i, s, r, n, a;
                    if (o(e), void 0 === (s = this._events)) return this;
                    if (void 0 === (i = s[t])) return this;
                    if (i === e || i.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, i.listener || e));
                    else if ("function" != typeof i) {
                        for (r = -1, n = i.length - 1; n >= 0; n--)
                            if (i[n] === e || i[n].listener === e) {
                                a = i[n].listener, r = n;
                                break
                            }
                        if (r < 0) return this;
                        0 === r ? i.shift() : function(t, e) {
                            for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                            t.pop()
                        }(i, r), 1 === i.length && (s[t] = i[0]), void 0 !== s.removeListener && this.emit("removeListener", t, a || e)
                    }
                    return this
                }, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = function(t) {
                    var e, i, s;
                    if (void 0 === (i = this._events)) return this;
                    if (void 0 === i.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== i[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete i[t]), this;
                    if (0 === arguments.length) {
                        var r, n = Object.keys(i);
                        for (s = 0; s < n.length; ++s) "removeListener" !== (r = n[s]) && this.removeAllListeners(r);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if ("function" == typeof(e = i[t])) this.removeListener(t, e);
                    else if (void 0 !== e)
                        for (s = e.length - 1; s >= 0; s--) this.removeListener(t, e[s]);
                    return this
                }, n.prototype.listeners = function(t) {
                    return d(this, t, !0)
                }, n.prototype.rawListeners = function(t) {
                    return d(this, t, !1)
                }, n.listenerCount = function(t, e) {
                    return "function" == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
                }, n.prototype.listenerCount = p, n.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? e(this._events) : []
                }
            },
            9940: (t, e, i) => {
                var s = i(3203)(i(4362), "DataView");
                t.exports = s
            },
            1979: (t, e, i) => {
                var s = i(9129),
                    r = i(7644),
                    n = i(3486),
                    a = i(4786),
                    o = i(6444);

                function h(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.clear(); ++e < i;) {
                        var s = t[e];
                        this.set(s[0], s[1])
                    }
                }
                h.prototype.clear = s, h.prototype.delete = r, h.prototype.get = n, h.prototype.has = a, h.prototype.set = o, t.exports = h
            },
            2768: (t, e, i) => {
                var s = i(3708),
                    r = i(6993),
                    n = i(286),
                    a = i(1678),
                    o = i(9743);

                function h(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.clear(); ++e < i;) {
                        var s = t[e];
                        this.set(s[0], s[1])
                    }
                }
                h.prototype.clear = s, h.prototype.delete = r, h.prototype.get = n, h.prototype.has = a, h.prototype.set = o, t.exports = h
            },
            4804: (t, e, i) => {
                var s = i(3203)(i(4362), "Map");
                t.exports = s
            },
            8423: (t, e, i) => {
                var s = i(6977),
                    r = i(7474),
                    n = i(727),
                    a = i(3653),
                    o = i(6140);

                function h(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.clear(); ++e < i;) {
                        var s = t[e];
                        this.set(s[0], s[1])
                    }
                }
                h.prototype.clear = s, h.prototype.delete = r, h.prototype.get = n, h.prototype.has = a, h.prototype.set = o, t.exports = h
            },
            7114: (t, e, i) => {
                var s = i(3203)(i(4362), "Promise");
                t.exports = s
            },
            689: (t, e, i) => {
                var s = i(3203)(i(4362), "Set");
                t.exports = s
            },
            9832: (t, e, i) => {
                var s = i(8423),
                    r = i(9911),
                    n = i(7447);

                function a(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.__data__ = new s; ++e < i;) this.add(t[e])
                }
                a.prototype.add = a.prototype.push = r, a.prototype.has = n, t.exports = a
            },
            959: (t, e, i) => {
                var s = i(2768),
                    r = i(7553),
                    n = i(6038),
                    a = i(2397),
                    o = i(2421),
                    h = i(2936);

                function l(t) {
                    var e = this.__data__ = new s(t);
                    this.size = e.size
                }
                l.prototype.clear = r, l.prototype.delete = n, l.prototype.get = a, l.prototype.has = o, l.prototype.set = h, t.exports = l
            },
            2773: (t, e, i) => {
                var s = i(4362).Symbol;
                t.exports = s
            },
            2496: (t, e, i) => {
                var s = i(4362).Uint8Array;
                t.exports = s
            },
            5284: (t, e, i) => {
                var s = i(3203)(i(4362), "WeakMap");
                t.exports = s
            },
            4111: t => {
                t.exports = function(t, e) {
                    for (var i = -1, s = null == t ? 0 : t.length; ++i < s && !1 !== e(t[i], i, t););
                    return t
                }
            },
            6523: t => {
                t.exports = function(t, e) {
                    for (var i = -1, s = null == t ? 0 : t.length, r = 0, n = []; ++i < s;) {
                        var a = t[i];
                        e(a, i, t) && (n[r++] = a)
                    }
                    return n
                }
            },
            8083: (t, e, i) => {
                var s = i(5094),
                    r = i(9246),
                    n = i(3670),
                    a = i(2343),
                    o = i(4782),
                    h = i(1589),
                    l = Object.prototype.hasOwnProperty;
                t.exports = function(t, e) {
                    var i = n(t),
                        u = !i && r(t),
                        c = !i && !u && a(t),
                        d = !i && !u && !c && h(t),
                        p = i || u || c || d,
                        m = p ? s(t.length, String) : [],
                        f = m.length;
                    for (var g in t) !e && !l.call(t, g) || p && ("length" == g || c && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || o(g, f)) || m.push(g);
                    return m
                }
            },
            9258: t => {
                t.exports = function(t, e) {
                    for (var i = -1, s = null == t ? 0 : t.length, r = Array(s); ++i < s;) r[i] = e(t[i], i, t);
                    return r
                }
            },
            8421: t => {
                t.exports = function(t, e) {
                    for (var i = -1, s = e.length, r = t.length; ++i < s;) t[r + i] = e[i];
                    return t
                }
            },
            4481: t => {
                t.exports = function(t, e) {
                    for (var i = -1, s = null == t ? 0 : t.length; ++i < s;)
                        if (e(t[i], i, t)) return !0;
                    return !1
                }
            },
            6213: (t, e, i) => {
                var s = i(7950);
                t.exports = function(t, e) {
                    for (var i = t.length; i--;)
                        if (s(t[i][0], e)) return i;
                    return -1
                }
            },
            5806: (t, e, i) => {
                var s = i(5645),
                    r = i(3978)(s);
                t.exports = r
            },
            5135: t => {
                t.exports = function(t, e, i, s) {
                    for (var r = t.length, n = i + (s ? 1 : -1); s ? n-- : ++n < r;)
                        if (e(t[n], n, t)) return n;
                    return -1
                }
            },
            7079: (t, e, i) => {
                var s = i(7924)();
                t.exports = s
            },
            5645: (t, e, i) => {
                var s = i(7079),
                    r = i(3225);
                t.exports = function(t, e) {
                    return t && s(t, e, r)
                }
            },
            5974: (t, e, i) => {
                var s = i(6883),
                    r = i(7102);
                t.exports = function(t, e) {
                    for (var i = 0, n = (e = s(e, t)).length; null != t && i < n;) t = t[r(e[i++])];
                    return i && i == n ? t : void 0
                }
            },
            891: (t, e, i) => {
                var s = i(8421),
                    r = i(3670);
                t.exports = function(t, e, i) {
                    var n = e(t);
                    return r(t) ? n : s(n, i(t))
                }
            },
            1185: (t, e, i) => {
                var s = i(2773),
                    r = i(3888),
                    n = i(2299),
                    a = s ? s.toStringTag : void 0;
                t.exports = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? r(t) : n(t)
                }
            },
            5529: t => {
                t.exports = function(t, e) {
                    return null != t && e in Object(t)
                }
            },
            1075: (t, e, i) => {
                var s = i(1185),
                    r = i(4939);
                t.exports = function(t) {
                    return r(t) && "[object Arguments]" == s(t)
                }
            },
            9856: (t, e, i) => {
                var s = i(1829),
                    r = i(4939);
                t.exports = function t(e, i, n, a, o) {
                    return e === i || (null == e || null == i || !r(e) && !r(i) ? e != e && i != i : s(e, i, n, a, t, o))
                }
            },
            1829: (t, e, i) => {
                var s = i(959),
                    r = i(3426),
                    n = i(1402),
                    a = i(4572),
                    o = i(2417),
                    h = i(3670),
                    l = i(2343),
                    u = i(1589),
                    c = "[object Arguments]",
                    d = "[object Array]",
                    p = "[object Object]",
                    m = Object.prototype.hasOwnProperty;
                t.exports = function(t, e, i, f, g, v) {
                    var _ = h(t),
                        y = h(e),
                        x = _ ? d : o(t),
                        w = y ? d : o(e),
                        b = (x = x == c ? p : x) == p,
                        M = (w = w == c ? p : w) == p,
                        T = x == w;
                    if (T && l(t)) {
                        if (!l(e)) return !1;
                        _ = !0, b = !1
                    }
                    if (T && !b) return v || (v = new s), _ || u(t) ? r(t, e, i, f, g, v) : n(t, e, x, i, f, g, v);
                    if (!(1 & i)) {
                        var A = b && m.call(t, "__wrapped__"),
                            E = M && m.call(e, "__wrapped__");
                        if (A || E) {
                            var S = A ? t.value() : t,
                                O = E ? e.value() : e;
                            return v || (v = new s), g(S, O, i, f, v)
                        }
                    }
                    return !!T && (v || (v = new s), a(t, e, i, f, g, v))
                }
            },
            4656: (t, e, i) => {
                var s = i(959),
                    r = i(9856);
                t.exports = function(t, e, i, n) {
                    var a = i.length,
                        o = a,
                        h = !n;
                    if (null == t) return !o;
                    for (t = Object(t); a--;) {
                        var l = i[a];
                        if (h && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
                    }
                    for (; ++a < o;) {
                        var u = (l = i[a])[0],
                            c = t[u],
                            d = l[1];
                        if (h && l[2]) {
                            if (void 0 === c && !(u in t)) return !1
                        } else {
                            var p = new s;
                            if (n) var m = n(c, d, u, t, e, p);
                            if (!(void 0 === m ? r(d, c, 3, n, p) : m)) return !1
                        }
                    }
                    return !0
                }
            },
            4106: (t, e, i) => {
                var s = i(3626),
                    r = i(9249),
                    n = i(71),
                    a = i(1214),
                    o = /^\[object .+?Constructor\]$/,
                    h = Function.prototype,
                    l = Object.prototype,
                    u = h.toString,
                    c = l.hasOwnProperty,
                    d = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                t.exports = function(t) {
                    return !(!n(t) || r(t)) && (s(t) ? d : o).test(a(t))
                }
            },
            3638: (t, e, i) => {
                var s = i(1185),
                    r = i(7100),
                    n = i(4939),
                    a = {};
                a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
                    return n(t) && r(t.length) && !!a[s(t)]
                }
            },
            9047: (t, e, i) => {
                var s = i(8334),
                    r = i(5941),
                    n = i(1559),
                    a = i(3670),
                    o = i(8886);
                t.exports = function(t) {
                    return "function" == typeof t ? t : null == t ? n : "object" == typeof t ? a(t) ? r(t[0], t[1]) : s(t) : o(t)
                }
            },
            7521: (t, e, i) => {
                var s = i(2803),
                    r = i(3865),
                    n = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    if (!s(t)) return r(t);
                    var e = [];
                    for (var i in Object(t)) n.call(t, i) && "constructor" != i && e.push(i);
                    return e
                }
            },
            5901: (t, e, i) => {
                var s = i(5806),
                    r = i(6175);
                t.exports = function(t, e) {
                    var i = -1,
                        n = r(t) ? Array(t.length) : [];
                    return s(t, (function(t, s, r) {
                        n[++i] = e(t, s, r)
                    })), n
                }
            },
            8334: (t, e, i) => {
                var s = i(4656),
                    r = i(2811),
                    n = i(4248);
                t.exports = function(t) {
                    var e = r(t);
                    return 1 == e.length && e[0][2] ? n(e[0][0], e[0][1]) : function(i) {
                        return i === t || s(i, t, e)
                    }
                }
            },
            5941: (t, e, i) => {
                var s = i(9856),
                    r = i(643),
                    n = i(9059),
                    a = i(837),
                    o = i(3631),
                    h = i(4248),
                    l = i(7102);
                t.exports = function(t, e) {
                    return a(t) && o(e) ? h(l(t), e) : function(i) {
                        var a = r(i, t);
                        return void 0 === a && a === e ? n(i, t) : s(e, a, 3)
                    }
                }
            },
            3184: t => {
                t.exports = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }
            },
            886: (t, e, i) => {
                var s = i(5974);
                t.exports = function(t) {
                    return function(e) {
                        return s(e, t)
                    }
                }
            },
            5094: t => {
                t.exports = function(t, e) {
                    for (var i = -1, s = Array(t); ++i < t;) s[i] = e(i);
                    return s
                }
            },
            8257: (t, e, i) => {
                var s = i(2773),
                    r = i(9258),
                    n = i(3670),
                    a = i(4655),
                    o = s ? s.prototype : void 0,
                    h = o ? o.toString : void 0;
                t.exports = function t(e) {
                    if ("string" == typeof e) return e;
                    if (n(e)) return r(e, t) + "";
                    if (a(e)) return h ? h.call(e) : "";
                    var i = e + "";
                    return "0" == i && 1 / e == -Infinity ? "-0" : i
                }
            },
            1432: (t, e, i) => {
                var s = i(9751),
                    r = /^\s+/;
                t.exports = function(t) {
                    return t ? t.slice(0, s(t) + 1).replace(r, "") : t
                }
            },
            9081: t => {
                t.exports = function(t) {
                    return function(e) {
                        return t(e)
                    }
                }
            },
            3159: t => {
                t.exports = function(t, e) {
                    return t.has(e)
                }
            },
            3183: (t, e, i) => {
                var s = i(1559);
                t.exports = function(t) {
                    return "function" == typeof t ? t : s
                }
            },
            6883: (t, e, i) => {
                var s = i(3670),
                    r = i(837),
                    n = i(376),
                    a = i(2049);
                t.exports = function(t, e) {
                    return s(t) ? t : r(t, e) ? [t] : n(a(t))
                }
            },
            1741: (t, e, i) => {
                var s = i(4362)["__core-js_shared__"];
                t.exports = s
            },
            3978: (t, e, i) => {
                var s = i(6175);
                t.exports = function(t, e) {
                    return function(i, r) {
                        if (null == i) return i;
                        if (!s(i)) return t(i, r);
                        for (var n = i.length, a = e ? n : -1, o = Object(i);
                            (e ? a-- : ++a < n) && !1 !== r(o[a], a, o););
                        return i
                    }
                }
            },
            7924: t => {
                t.exports = function(t) {
                    return function(e, i, s) {
                        for (var r = -1, n = Object(e), a = s(e), o = a.length; o--;) {
                            var h = a[t ? o : ++r];
                            if (!1 === i(n[h], h, n)) break
                        }
                        return e
                    }
                }
            },
            7780: (t, e, i) => {
                var s = i(9047),
                    r = i(6175),
                    n = i(3225);
                t.exports = function(t) {
                    return function(e, i, a) {
                        var o = Object(e);
                        if (!r(e)) {
                            var h = s(i, 3);
                            e = n(e), i = function(t) {
                                return h(o[t], t, o)
                            }
                        }
                        var l = t(e, i, a);
                        return l > -1 ? o[h ? e[l] : l] : void 0
                    }
                }
            },
            3426: (t, e, i) => {
                var s = i(9832),
                    r = i(4481),
                    n = i(3159);
                t.exports = function(t, e, i, a, o, h) {
                    var l = 1 & i,
                        u = t.length,
                        c = e.length;
                    if (u != c && !(l && c > u)) return !1;
                    var d = h.get(t),
                        p = h.get(e);
                    if (d && p) return d == e && p == t;
                    var m = -1,
                        f = !0,
                        g = 2 & i ? new s : void 0;
                    for (h.set(t, e), h.set(e, t); ++m < u;) {
                        var v = t[m],
                            _ = e[m];
                        if (a) var y = l ? a(_, v, m, e, t, h) : a(v, _, m, t, e, h);
                        if (void 0 !== y) {
                            if (y) continue;
                            f = !1;
                            break
                        }
                        if (g) {
                            if (!r(e, (function(t, e) {
                                    if (!n(g, e) && (v === t || o(v, t, i, a, h))) return g.push(e)
                                }))) {
                                f = !1;
                                break
                            }
                        } else if (v !== _ && !o(v, _, i, a, h)) {
                            f = !1;
                            break
                        }
                    }
                    return h.delete(t), h.delete(e), f
                }
            },
            1402: (t, e, i) => {
                var s = i(2773),
                    r = i(2496),
                    n = i(7950),
                    a = i(3426),
                    o = i(8961),
                    h = i(6983),
                    l = s ? s.prototype : void 0,
                    u = l ? l.valueOf : void 0;
                t.exports = function(t, e, i, s, l, c, d) {
                    switch (i) {
                        case "[object DataView]":
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                            t = t.buffer, e = e.buffer;
                        case "[object ArrayBuffer]":
                            return !(t.byteLength != e.byteLength || !c(new r(t), new r(e)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return n(+t, +e);
                        case "[object Error]":
                            return t.name == e.name && t.message == e.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return t == e + "";
                        case "[object Map]":
                            var p = o;
                        case "[object Set]":
                            var m = 1 & s;
                            if (p || (p = h), t.size != e.size && !m) return !1;
                            var f = d.get(t);
                            if (f) return f == e;
                            s |= 2, d.set(t, e);
                            var g = a(p(t), p(e), s, l, c, d);
                            return d.delete(t), g;
                        case "[object Symbol]":
                            if (u) return u.call(t) == u.call(e)
                    }
                    return !1
                }
            },
            4572: (t, e, i) => {
                var s = i(5788),
                    r = Object.prototype.hasOwnProperty;
                t.exports = function(t, e, i, n, a, o) {
                    var h = 1 & i,
                        l = s(t),
                        u = l.length;
                    if (u != s(e).length && !h) return !1;
                    for (var c = u; c--;) {
                        var d = l[c];
                        if (!(h ? d in e : r.call(e, d))) return !1
                    }
                    var p = o.get(t),
                        m = o.get(e);
                    if (p && m) return p == e && m == t;
                    var f = !0;
                    o.set(t, e), o.set(e, t);
                    for (var g = h; ++c < u;) {
                        var v = t[d = l[c]],
                            _ = e[d];
                        if (n) var y = h ? n(_, v, d, e, t, o) : n(v, _, d, t, e, o);
                        if (!(void 0 === y ? v === _ || a(v, _, i, n, o) : y)) {
                            f = !1;
                            break
                        }
                        g || (g = "constructor" == d)
                    }
                    if (f && !g) {
                        var x = t.constructor,
                            w = e.constructor;
                        x == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof x && x instanceof x && "function" == typeof w && w instanceof w || (f = !1)
                    }
                    return o.delete(t), o.delete(e), f
                }
            },
            8556: (t, e, i) => {
                var s = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
                t.exports = s
            },
            5788: (t, e, i) => {
                var s = i(891),
                    r = i(6918),
                    n = i(3225);
                t.exports = function(t) {
                    return s(t, n, r)
                }
            },
            404: (t, e, i) => {
                var s = i(9008);
                t.exports = function(t, e) {
                    var i = t.__data__;
                    return s(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
                }
            },
            2811: (t, e, i) => {
                var s = i(3631),
                    r = i(3225);
                t.exports = function(t) {
                    for (var e = r(t), i = e.length; i--;) {
                        var n = e[i],
                            a = t[n];
                        e[i] = [n, a, s(a)]
                    }
                    return e
                }
            },
            3203: (t, e, i) => {
                var s = i(4106),
                    r = i(7338);
                t.exports = function(t, e) {
                    var i = r(t, e);
                    return s(i) ? i : void 0
                }
            },
            3888: (t, e, i) => {
                var s = i(2773),
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    a = r.toString,
                    o = s ? s.toStringTag : void 0;
                t.exports = function(t) {
                    var e = n.call(t, o),
                        i = t[o];
                    try {
                        t[o] = void 0;
                        var s = !0
                    } catch (t) {}
                    var r = a.call(t);
                    return s && (e ? t[o] = i : delete t[o]), r
                }
            },
            6918: (t, e, i) => {
                var s = i(6523),
                    r = i(4043),
                    n = Object.prototype.propertyIsEnumerable,
                    a = Object.getOwnPropertySymbols,
                    o = a ? function(t) {
                        return null == t ? [] : (t = Object(t), s(a(t), (function(e) {
                            return n.call(t, e)
                        })))
                    } : r;
                t.exports = o
            },
            2417: (t, e, i) => {
                var s = i(9940),
                    r = i(4804),
                    n = i(7114),
                    a = i(689),
                    o = i(5284),
                    h = i(1185),
                    l = i(1214),
                    u = "[object Map]",
                    c = "[object Promise]",
                    d = "[object Set]",
                    p = "[object WeakMap]",
                    m = "[object DataView]",
                    f = l(s),
                    g = l(r),
                    v = l(n),
                    _ = l(a),
                    y = l(o),
                    x = h;
                (s && x(new s(new ArrayBuffer(1))) != m || r && x(new r) != u || n && x(n.resolve()) != c || a && x(new a) != d || o && x(new o) != p) && (x = function(t) {
                    var e = h(t),
                        i = "[object Object]" == e ? t.constructor : void 0,
                        s = i ? l(i) : "";
                    if (s) switch (s) {
                        case f:
                            return m;
                        case g:
                            return u;
                        case v:
                            return c;
                        case _:
                            return d;
                        case y:
                            return p
                    }
                    return e
                }), t.exports = x
            },
            7338: t => {
                t.exports = function(t, e) {
                    return null == t ? void 0 : t[e]
                }
            },
            4727: (t, e, i) => {
                var s = i(6883),
                    r = i(9246),
                    n = i(3670),
                    a = i(4782),
                    o = i(7100),
                    h = i(7102);
                t.exports = function(t, e, i) {
                    for (var l = -1, u = (e = s(e, t)).length, c = !1; ++l < u;) {
                        var d = h(e[l]);
                        if (!(c = null != t && i(t, d))) break;
                        t = t[d]
                    }
                    return c || ++l != u ? c : !!(u = null == t ? 0 : t.length) && o(u) && a(d, u) && (n(t) || r(t))
                }
            },
            9129: (t, e, i) => {
                var s = i(6326);
                t.exports = function() {
                    this.__data__ = s ? s(null) : {}, this.size = 0
                }
            },
            7644: t => {
                t.exports = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }
            },
            3486: (t, e, i) => {
                var s = i(6326),
                    r = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    var e = this.__data__;
                    if (s) {
                        var i = e[t];
                        return "__lodash_hash_undefined__" === i ? void 0 : i
                    }
                    return r.call(e, t) ? e[t] : void 0
                }
            },
            4786: (t, e, i) => {
                var s = i(6326),
                    r = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    var e = this.__data__;
                    return s ? void 0 !== e[t] : r.call(e, t)
                }
            },
            6444: (t, e, i) => {
                var s = i(6326);
                t.exports = function(t, e) {
                    var i = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, i[t] = s && void 0 === e ? "__lodash_hash_undefined__" : e, this
                }
            },
            4782: t => {
                var e = /^(?:0|[1-9]\d*)$/;
                t.exports = function(t, i) {
                    var s = typeof t;
                    return !!(i = null == i ? 9007199254740991 : i) && ("number" == s || "symbol" != s && e.test(t)) && t > -1 && t % 1 == 0 && t < i
                }
            },
            837: (t, e, i) => {
                var s = i(3670),
                    r = i(4655),
                    n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    a = /^\w*$/;
                t.exports = function(t, e) {
                    if (s(t)) return !1;
                    var i = typeof t;
                    return !("number" != i && "symbol" != i && "boolean" != i && null != t && !r(t)) || (a.test(t) || !n.test(t) || null != e && t in Object(e))
                }
            },
            9008: t => {
                t.exports = function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }
            },
            9249: (t, e, i) => {
                var s, r = i(1741),
                    n = (s = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "";
                t.exports = function(t) {
                    return !!n && n in t
                }
            },
            2803: t => {
                var e = Object.prototype;
                t.exports = function(t) {
                    var i = t && t.constructor;
                    return t === ("function" == typeof i && i.prototype || e)
                }
            },
            3631: (t, e, i) => {
                var s = i(71);
                t.exports = function(t) {
                    return t == t && !s(t)
                }
            },
            3708: t => {
                t.exports = function() {
                    this.__data__ = [], this.size = 0
                }
            },
            6993: (t, e, i) => {
                var s = i(6213),
                    r = Array.prototype.splice;
                t.exports = function(t) {
                    var e = this.__data__,
                        i = s(e, t);
                    return !(i < 0) && (i == e.length - 1 ? e.pop() : r.call(e, i, 1), --this.size, !0)
                }
            },
            286: (t, e, i) => {
                var s = i(6213);
                t.exports = function(t) {
                    var e = this.__data__,
                        i = s(e, t);
                    return i < 0 ? void 0 : e[i][1]
                }
            },
            1678: (t, e, i) => {
                var s = i(6213);
                t.exports = function(t) {
                    return s(this.__data__, t) > -1
                }
            },
            9743: (t, e, i) => {
                var s = i(6213);
                t.exports = function(t, e) {
                    var i = this.__data__,
                        r = s(i, t);
                    return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this
                }
            },
            6977: (t, e, i) => {
                var s = i(1979),
                    r = i(2768),
                    n = i(4804);
                t.exports = function() {
                    this.size = 0, this.__data__ = {
                        hash: new s,
                        map: new(n || r),
                        string: new s
                    }
                }
            },
            7474: (t, e, i) => {
                var s = i(404);
                t.exports = function(t) {
                    var e = s(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }
            },
            727: (t, e, i) => {
                var s = i(404);
                t.exports = function(t) {
                    return s(this, t).get(t)
                }
            },
            3653: (t, e, i) => {
                var s = i(404);
                t.exports = function(t) {
                    return s(this, t).has(t)
                }
            },
            6140: (t, e, i) => {
                var s = i(404);
                t.exports = function(t, e) {
                    var i = s(this, t),
                        r = i.size;
                    return i.set(t, e), this.size += i.size == r ? 0 : 1, this
                }
            },
            8961: t => {
                t.exports = function(t) {
                    var e = -1,
                        i = Array(t.size);
                    return t.forEach((function(t, s) {
                        i[++e] = [s, t]
                    })), i
                }
            },
            4248: t => {
                t.exports = function(t, e) {
                    return function(i) {
                        return null != i && (i[t] === e && (void 0 !== e || t in Object(i)))
                    }
                }
            },
            5933: (t, e, i) => {
                var s = i(104);
                t.exports = function(t) {
                    var e = s(t, (function(t) {
                            return 500 === i.size && i.clear(), t
                        })),
                        i = e.cache;
                    return e
                }
            },
            6326: (t, e, i) => {
                var s = i(3203)(Object, "create");
                t.exports = s
            },
            3865: (t, e, i) => {
                var s = i(5290)(Object.keys, Object);
                t.exports = s
            },
            1985: (t, e, i) => {
                t = i.nmd(t);
                var s = i(8556),
                    r = e && !e.nodeType && e,
                    n = r && t && !t.nodeType && t,
                    a = n && n.exports === r && s.process,
                    o = function() {
                        try {
                            var t = n && n.require && n.require("util").types;
                            return t || a && a.binding && a.binding("util")
                        } catch (t) {}
                    }();
                t.exports = o
            },
            2299: t => {
                var e = Object.prototype.toString;
                t.exports = function(t) {
                    return e.call(t)
                }
            },
            5290: t => {
                t.exports = function(t, e) {
                    return function(i) {
                        return t(e(i))
                    }
                }
            },
            4362: (t, e, i) => {
                var s = i(8556),
                    r = "object" == typeof self && self && self.Object === Object && self,
                    n = s || r || Function("return this")();
                t.exports = n
            },
            9911: t => {
                t.exports = function(t) {
                    return this.__data__.set(t, "__lodash_hash_undefined__"), this
                }
            },
            7447: t => {
                t.exports = function(t) {
                    return this.__data__.has(t)
                }
            },
            6983: t => {
                t.exports = function(t) {
                    var e = -1,
                        i = Array(t.size);
                    return t.forEach((function(t) {
                        i[++e] = t
                    })), i
                }
            },
            7553: (t, e, i) => {
                var s = i(2768);
                t.exports = function() {
                    this.__data__ = new s, this.size = 0
                }
            },
            6038: t => {
                t.exports = function(t) {
                    var e = this.__data__,
                        i = e.delete(t);
                    return this.size = e.size, i
                }
            },
            2397: t => {
                t.exports = function(t) {
                    return this.__data__.get(t)
                }
            },
            2421: t => {
                t.exports = function(t) {
                    return this.__data__.has(t)
                }
            },
            2936: (t, e, i) => {
                var s = i(2768),
                    r = i(4804),
                    n = i(8423);
                t.exports = function(t, e) {
                    var i = this.__data__;
                    if (i instanceof s) {
                        var a = i.__data__;
                        if (!r || a.length < 199) return a.push([t, e]), this.size = ++i.size, this;
                        i = this.__data__ = new n(a)
                    }
                    return i.set(t, e), this.size = i.size, this
                }
            },
            376: (t, e, i) => {
                var s = i(5933),
                    r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    n = /\\(\\)?/g,
                    a = s((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, (function(t, i, s, r) {
                            e.push(s ? r.replace(n, "$1") : i || t)
                        })), e
                    }));
                t.exports = a
            },
            7102: (t, e, i) => {
                var s = i(4655);
                t.exports = function(t) {
                    if ("string" == typeof t || s(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -Infinity ? "-0" : e
                }
            },
            1214: t => {
                var e = Function.prototype.toString;
                t.exports = function(t) {
                    if (null != t) {
                        try {
                            return e.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
            },
            9751: t => {
                var e = /\s/;
                t.exports = function(t) {
                    for (var i = t.length; i-- && e.test(t.charAt(i)););
                    return i
                }
            },
            6270: (t, e, i) => {
                t.exports = i(9982)
            },
            7950: t => {
                t.exports = function(t, e) {
                    return t === e || t != t && e != e
                }
            },
            5066: (t, e, i) => {
                var s = i(7780)(i(9377));
                t.exports = s
            },
            9377: (t, e, i) => {
                var s = i(5135),
                    r = i(9047),
                    n = i(2826),
                    a = Math.max;
                t.exports = function(t, e, i) {
                    var o = null == t ? 0 : t.length;
                    if (!o) return -1;
                    var h = null == i ? 0 : n(i);
                    return h < 0 && (h = a(o + h, 0)), s(t, r(e, 3), h)
                }
            },
            9982: (t, e, i) => {
                var s = i(4111),
                    r = i(5806),
                    n = i(3183),
                    a = i(3670);
                t.exports = function(t, e) {
                    return (a(t) ? s : r)(t, n(e))
                }
            },
            643: (t, e, i) => {
                var s = i(5974);
                t.exports = function(t, e, i) {
                    var r = null == t ? void 0 : s(t, e);
                    return void 0 === r ? i : r
                }
            },
            9059: (t, e, i) => {
                var s = i(5529),
                    r = i(4727);
                t.exports = function(t, e) {
                    return null != t && r(t, e, s)
                }
            },
            1559: t => {
                t.exports = function(t) {
                    return t
                }
            },
            9246: (t, e, i) => {
                var s = i(1075),
                    r = i(4939),
                    n = Object.prototype,
                    a = n.hasOwnProperty,
                    o = n.propertyIsEnumerable,
                    h = s(function() {
                        return arguments
                    }()) ? s : function(t) {
                        return r(t) && a.call(t, "callee") && !o.call(t, "callee")
                    };
                t.exports = h
            },
            3670: t => {
                var e = Array.isArray;
                t.exports = e
            },
            6175: (t, e, i) => {
                var s = i(3626),
                    r = i(7100);
                t.exports = function(t) {
                    return null != t && r(t.length) && !s(t)
                }
            },
            2343: (t, e, i) => {
                t = i.nmd(t);
                var s = i(4362),
                    r = i(3444),
                    n = e && !e.nodeType && e,
                    a = n && t && !t.nodeType && t,
                    o = a && a.exports === n ? s.Buffer : void 0,
                    h = (o ? o.isBuffer : void 0) || r;
                t.exports = h
            },
            3626: (t, e, i) => {
                var s = i(1185),
                    r = i(71);
                t.exports = function(t) {
                    if (!r(t)) return !1;
                    var e = s(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }
            },
            7100: t => {
                t.exports = function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                }
            },
            71: t => {
                t.exports = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
            },
            4939: t => {
                t.exports = function(t) {
                    return null != t && "object" == typeof t
                }
            },
            4655: (t, e, i) => {
                var s = i(1185),
                    r = i(4939);
                t.exports = function(t) {
                    return "symbol" == typeof t || r(t) && "[object Symbol]" == s(t)
                }
            },
            1589: (t, e, i) => {
                var s = i(3638),
                    r = i(9081),
                    n = i(1985),
                    a = n && n.isTypedArray,
                    o = a ? r(a) : s;
                t.exports = o
            },
            3225: (t, e, i) => {
                var s = i(8083),
                    r = i(7521),
                    n = i(6175);
                t.exports = function(t) {
                    return n(t) ? s(t) : r(t)
                }
            },
            7976: (t, e, i) => {
                var s = i(9258),
                    r = i(9047),
                    n = i(5901),
                    a = i(3670);
                t.exports = function(t, e) {
                    return (a(t) ? s : n)(t, r(e, 3))
                }
            },
            104: (t, e, i) => {
                var s = i(8423);

                function r(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                    var i = function() {
                        var s = arguments,
                            r = e ? e.apply(this, s) : s[0],
                            n = i.cache;
                        if (n.has(r)) return n.get(r);
                        var a = t.apply(this, s);
                        return i.cache = n.set(r, a) || n, a
                    };
                    return i.cache = new(r.Cache || s), i
                }
                r.Cache = s, t.exports = r
            },
            8886: (t, e, i) => {
                var s = i(3184),
                    r = i(886),
                    n = i(837),
                    a = i(7102);
                t.exports = function(t) {
                    return n(t) ? s(a(t)) : r(t)
                }
            },
            4043: t => {
                t.exports = function() {
                    return []
                }
            },
            3444: t => {
                t.exports = function() {
                    return !1
                }
            },
            1286: (t, e, i) => {
                var s = i(6705),
                    r = 1 / 0;
                t.exports = function(t) {
                    return t ? (t = s(t)) === r || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                }
            },
            2826: (t, e, i) => {
                var s = i(1286);
                t.exports = function(t) {
                    var e = s(t),
                        i = e % 1;
                    return e == e ? i ? e - i : e : 0
                }
            },
            6705: (t, e, i) => {
                var s = i(1432),
                    r = i(71),
                    n = i(4655),
                    a = /^[-+]0x[0-9a-f]+$/i,
                    o = /^0b[01]+$/i,
                    h = /^0o[0-7]+$/i,
                    l = parseInt;
                t.exports = function(t) {
                    if ("number" == typeof t) return t;
                    if (n(t)) return NaN;
                    if (r(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = r(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = s(t);
                    var i = o.test(t);
                    return i || h.test(t) ? l(t.slice(2), i ? 2 : 8) : a.test(t) ? NaN : +t
                }
            },
            2049: (t, e, i) => {
                var s = i(8257);
                t.exports = function(t) {
                    return null == t ? "" : s(t)
                }
            },
            7320: (t, e, i) => {
                t.exports = i(1045)
            },
            7230: t => {
                "use strict";
                var e = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    i = {
                        canUseDOM: e,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: e && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: e && !!window.screen,
                        isInWorker: !e
                    };
                t.exports = i
            },
            2907: t => {
                var e, i, s, r, n, a, o, h, l, u, c, d, p, m, f, g = !1;

                function v() {
                    if (!g) {
                        g = !0;
                        var t = navigator.userAgent,
                            v = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
                            _ = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
                        if (d = /\b(iPhone|iP[ao]d)/.exec(t), p = /\b(iP[ao]d)/.exec(t), u = /Android/i.exec(t), m = /FBAN\/\w+;/i.exec(t), f = /Mobile/i.exec(t), c = !!/Win64/.exec(t), v) {
                            (e = v[1] ? parseFloat(v[1]) : v[5] ? parseFloat(v[5]) : NaN) && document && document.documentMode && (e = document.documentMode);
                            var y = /(?:Trident\/(\d+.\d+))/.exec(t);
                            a = y ? parseFloat(y[1]) + 4 : e, i = v[2] ? parseFloat(v[2]) : NaN, s = v[3] ? parseFloat(v[3]) : NaN, (r = v[4] ? parseFloat(v[4]) : NaN) ? (v = /(?:Chrome\/(\d+\.\d+))/.exec(t), n = v && v[1] ? parseFloat(v[1]) : NaN) : n = NaN
                        } else e = i = s = n = r = NaN;
                        if (_) {
                            if (_[1]) {
                                var x = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                                o = !x || parseFloat(x[1].replace("_", "."))
                            } else o = !1;
                            h = !!_[2], l = !!_[3]
                        } else o = h = l = !1
                    }
                }
                var _ = {
                    ie: function() {
                        return v() || e
                    },
                    ieCompatibilityMode: function() {
                        return v() || a > e
                    },
                    ie64: function() {
                        return _.ie() && c
                    },
                    firefox: function() {
                        return v() || i
                    },
                    opera: function() {
                        return v() || s
                    },
                    webkit: function() {
                        return v() || r
                    },
                    safari: function() {
                        return _.webkit()
                    },
                    chrome: function() {
                        return v() || n
                    },
                    windows: function() {
                        return v() || h
                    },
                    osx: function() {
                        return v() || o
                    },
                    linux: function() {
                        return v() || l
                    },
                    iphone: function() {
                        return v() || d
                    },
                    mobile: function() {
                        return v() || d || p || u || f
                    },
                    nativeApp: function() {
                        return v() || m
                    },
                    android: function() {
                        return v() || u
                    },
                    ipad: function() {
                        return v() || p
                    }
                };
                t.exports = _
            },
            4480: (t, e, i) => {
                "use strict";
                var s, r = i(7230);
                r.canUseDOM && (s = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), t.exports = function(t, e) {
                    if (!r.canUseDOM || e && !("addEventListener" in document)) return !1;
                    var i = "on" + t,
                        n = i in document;
                    if (!n) {
                        var a = document.createElement("div");
                        a.setAttribute(i, "return;"), n = "function" == typeof a[i]
                    }
                    return !n && s && "wheel" === t && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
                }
            },
            1045: (t, e, i) => {
                "use strict";
                var s = i(2907),
                    r = i(4480);

                function n(t) {
                    var e = 0,
                        i = 0,
                        s = 0,
                        r = 0;
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), s = 10 * e, r = 10 * i, "deltaY" in t && (r = t.deltaY), "deltaX" in t && (s = t.deltaX), (s || r) && t.deltaMode && (1 == t.deltaMode ? (s *= 40, r *= 40) : (s *= 800, r *= 800)), s && !e && (e = s < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                        spinX: e,
                        spinY: i,
                        pixelX: s,
                        pixelY: r
                    }
                }
                n.getEventType = function() {
                    return s.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel"
                }, t.exports = n
            },
            2273: t => {
                var e = "undefined" != typeof document ? document.createElement("p").style : {},
                    i = ["O", "ms", "Moz", "Webkit"],
                    s = /([A-Z])/g,
                    r = {};

                function n(t) {
                    if (t = t.replace(/-([a-z])/g, (function(t, e) {
                            return e.toUpperCase()
                        })), void 0 !== e[t]) return t;
                    for (var s = t.charAt(0).toUpperCase() + t.slice(1), r = i.length; r--;) {
                        var n = i[r] + s;
                        if (void 0 !== e[n]) return n
                    }
                    return t
                }
                t.exports = function(t) {
                    return t in r ? r[t] : r[t] = n(t)
                }, t.exports.dash = function(t) {
                    return t = n(t), s.test(t) && (t = "-" + t.replace(s, "-$1"), s.lastIndex = 0), t.toLowerCase()
                }
            }
        },
        e = {};

    function i(s) {
        var r = e[s];
        if (void 0 !== r) return r.exports;
        var n = e[s] = {
            id: s,
            loaded: !1,
            exports: {}
        };
        return t[s](n, n.exports, i), n.loaded = !0, n.exports
    }
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
            enumerable: !0,
            get: e[s]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.nmd = t => (t.paths = [], t.children || (t.children = []), t), (() => {
        "use strict";
        i(6955);
        var t = i(7320),
            e = i.n(t),
            s = i(6270),
            r = i.n(s);

        function n(t) {
            let e = t[0],
                i = t[1],
                s = t[2];
            return Math.sqrt(e * e + i * i + s * s)
        }

        function a(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
        }

        function o(t, e, i) {
            return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t
        }

        function h(t, e, i) {
            return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t
        }

        function l(t, e, i) {
            return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
        }

        function u(t) {
            let e = t[0],
                i = t[1],
                s = t[2];
            return e * e + i * i + s * s
        }

        function c(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = i * i + s * s + r * r;
            return n > 0 && (n = 1 / Math.sqrt(n)), t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
        }

        function d(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        }

        function p(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = i[0],
                o = i[1],
                h = i[2];
            return t[0] = r * h - n * o, t[1] = n * a - s * h, t[2] = s * o - r * a, t
        }
        const m = function() {
            const t = [0, 0, 0],
                e = [0, 0, 0];
            return function(i, s) {
                a(t, i), a(e, s), c(t, t), c(e, e);
                let r = d(t, e);
                return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r)
            }
        }();
        class f extends Array {
            constructor(t = 0, e = t, i = t) {
                return super(t, e, i), this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set z(t) {
                this[2] = t
            }
            set(t, e = t, i = t) {
                return t.length ? this.copy(t) : (function(t, e, i, s) {
                    t[0] = e, t[1] = i, t[2] = s
                }(this, t, e, i), this)
            }
            copy(t) {
                return a(this, t), this
            }
            add(t, e) {
                return e ? o(this, t, e) : o(this, this, t), this
            }
            sub(t, e) {
                return e ? h(this, t, e) : h(this, this, t), this
            }
            multiply(t) {
                var e, i, s;
                return t.length ? (i = this, s = t, (e = this)[0] = i[0] * s[0], e[1] = i[1] * s[1], e[2] = i[2] * s[2]) : l(this, this, t), this
            }
            divide(t) {
                var e, i, s;
                return t.length ? (i = this, s = t, (e = this)[0] = i[0] / s[0], e[1] = i[1] / s[1], e[2] = i[2] / s[2]) : l(this, this, 1 / t), this
            }
            inverse(t = this) {
                var e, i;
                return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], e[2] = 1 / i[2], this
            }
            len() {
                return n(this)
            }
            distance(t) {
                return t ? function(t, e) {
                    let i = e[0] - t[0],
                        s = e[1] - t[1],
                        r = e[2] - t[2];
                    return Math.sqrt(i * i + s * s + r * r)
                }(this, t) : n(this)
            }
            squaredLen() {
                return u(this)
            }
            squaredDistance(t) {
                return t ? function(t, e) {
                    let i = e[0] - t[0],
                        s = e[1] - t[1],
                        r = e[2] - t[2];
                    return i * i + s * s + r * r
                }(this, t) : u(this)
            }
            negate(t = this) {
                var e, i;
                return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], this
            }
            cross(t, e) {
                return e ? p(this, t, e) : p(this, this, t), this
            }
            scale(t) {
                return l(this, this, t), this
            }
            normalize() {
                return c(this, this), this
            }
            dot(t) {
                return d(this, t)
            }
            equals(t) {
                return i = t, (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2];
                var e, i
            }
            applyMatrix4(t) {
                return function(t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = i[3] * s + i[7] * r + i[11] * n + i[15];
                    a = a || 1, t[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / a, t[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / a, t[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / a
                }(this, this, t), this
            }
            scaleRotateMatrix4(t) {
                return function(t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = i[3] * s + i[7] * r + i[11] * n + i[15];
                    a = a || 1, t[0] = (i[0] * s + i[4] * r + i[8] * n) / a, t[1] = (i[1] * s + i[5] * r + i[9] * n) / a, t[2] = (i[2] * s + i[6] * r + i[10] * n) / a
                }(this, this, t), this
            }
            applyQuaternion(t) {
                return function(t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = i[0],
                        o = i[1],
                        h = i[2],
                        l = o * n - h * r,
                        u = h * s - a * n,
                        c = a * r - o * s,
                        d = o * c - h * u,
                        p = h * l - a * c,
                        m = a * u - o * l,
                        f = 2 * i[3];
                    l *= f, u *= f, c *= f, d *= 2, p *= 2, m *= 2, t[0] = s + l + d, t[1] = r + u + p, t[2] = n + c + m
                }(this, this, t), this
            }
            angle(t) {
                return m(this, t)
            }
            lerp(t, e) {
                return function(t, e, i, s) {
                    let r = e[0],
                        n = e[1],
                        a = e[2];
                    t[0] = r + s * (i[0] - r), t[1] = n + s * (i[1] - n), t[2] = a + s * (i[2] - a)
                }(this, this, t, e), this
            }
            clone() {
                return new f(this[0], this[1], this[2])
            }
            fromArray(t, e = 0) {
                return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
            }
            transformDirection(t) {
                const e = this[0],
                    i = this[1],
                    s = this[2];
                return this[0] = t[0] * e + t[4] * i + t[8] * s, this[1] = t[1] * e + t[5] * i + t[9] * s, this[2] = t[2] * e + t[6] * i + t[10] * s, this.normalize()
            }
        }
        const g = new f;
        let v = 1;
        class _ {
            constructor({
                canvas: t = document.createElement("canvas"),
                width: e = 300,
                height: i = 150,
                dpr: s = 1,
                alpha: r = !1,
                depth: n = !0,
                stencil: a = !1,
                antialias: o = !1,
                premultipliedAlpha: h = !1,
                preserveDrawingBuffer: l = !1,
                powerPreference: u = "default",
                autoClear: c = !0,
                webgl: d = 2
            } = {}) {
                const p = {
                    alpha: r,
                    depth: n,
                    stencil: a,
                    antialias: o,
                    premultipliedAlpha: h,
                    preserveDrawingBuffer: l,
                    powerPreference: u
                };
                this.dpr = s, this.alpha = r, this.color = !0, this.depth = n, this.stencil = a, this.premultipliedAlpha = h, this.autoClear = c, this.id = v++, 2 === d && (this.gl = t.getContext("webgl2", p)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", p) || t.getContext("experimental-webgl", p)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(e, i), this.state = {}, this.state.blendFunc = {
                    src: this.gl.ONE,
                    dst: this.gl.ZERO
                }, this.state.blendEquation = {
                    modeRGB: this.gl.FUNC_ADD
                }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
                    width: null,
                    height: null
                }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
            setSize(t, e) {
                this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, Object.assign(this.gl.canvas.style, {
                    width: t + "px",
                    height: e + "px"
                })
            }
            setViewport(t, e) {
                this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.gl.viewport(0, 0, t, e))
            }
            enable(t) {
                !0 !== this.state[t] && (this.gl.enable(t), this.state[t] = !0)
            }
            disable(t) {
                !1 !== this.state[t] && (this.gl.disable(t), this.state[t] = !1)
            }
            setBlendFunc(t, e, i, s) {
                this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === s || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = s, void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, s) : this.gl.blendFunc(t, e))
            }
            setBlendEquation(t, e) {
                t = t || this.gl.FUNC_ADD, this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
            }
            setCullFace(t) {
                this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
            }
            setFrontFace(t) {
                this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
            }
            setDepthMask(t) {
                this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
            }
            setDepthFunc(t) {
                this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
            }
            activeTexture(t) {
                this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
            }
            bindFramebuffer({
                target: t = this.gl.FRAMEBUFFER,
                buffer: e = null
            } = {}) {
                this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
            }
            getExtension(t, e, i) {
                return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t])
            }
            sortOpaque(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
            }
            sortTransparent(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
            }
            sortUI(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
            }
            getRenderList({
                scene: t,
                camera: e,
                frustumCull: i,
                sort: s
            }) {
                let r = [];
                if (e && i && e.updateFrustum(), t.traverse((t => {
                        if (!t.visible) return !0;
                        t.draw && (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t) || r.push(t))
                    })), s) {
                    const t = [],
                        i = [],
                        s = [];
                    r.forEach((r => {
                        r.program.transparent ? r.program.depthTest ? i.push(r) : s.push(r) : t.push(r), r.zDepth = 0, 0 === r.renderOrder && r.program.depthTest && e && (r.worldMatrix.getTranslation(g), g.applyMatrix4(e.projectionViewMatrix), r.zDepth = g.z)
                    })), t.sort(this.sortOpaque), i.sort(this.sortTransparent), s.sort(this.sortUI), r = t.concat(i, s)
                }
                return r
            }
            render({
                scene: t,
                camera: e,
                target: i = null,
                update: s = !0,
                sort: r = !0,
                frustumCull: n = !0,
                clear: a
            }) {
                null === i ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (a || this.autoClear && !1 !== a) && (!this.depth || i && !i.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), s && t.updateMatrixWorld(), e && e.updateMatrixWorld();
                this.getRenderList({
                    scene: t,
                    camera: e,
                    frustumCull: n,
                    sort: r
                }).forEach((t => {
                    t.draw({
                        camera: e
                    })
                }))
            }
        }

        function y(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = i[0],
                h = i[1],
                l = i[2],
                u = i[3];
            return t[0] = s * u + a * o + r * l - n * h, t[1] = r * u + a * h + n * o - s * l, t[2] = n * u + a * l + s * h - r * o, t[3] = a * u - s * o - r * h - n * l, t
        }
        const x = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
            },
            w = function(t, e, i, s, r) {
                return t[0] = e, t[1] = i, t[2] = s, t[3] = r, t
            },
            b = function(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            },
            M = function(t, e) {
                let i = e[0],
                    s = e[1],
                    r = e[2],
                    n = e[3],
                    a = i * i + s * s + r * r + n * n;
                return a > 0 && (a = 1 / Math.sqrt(a)), t[0] = i * a, t[1] = s * a, t[2] = r * a, t[3] = n * a, t
            };
        class T extends Array {
            constructor(t = 0, e = 0, i = 0, s = 1) {
                return super(t, e, i, s), this.onChange = () => {}, this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            get w() {
                return this[3]
            }
            set x(t) {
                this[0] = t, this.onChange()
            }
            set y(t) {
                this[1] = t, this.onChange()
            }
            set z(t) {
                this[2] = t, this.onChange()
            }
            set w(t) {
                this[3] = t, this.onChange()
            }
            identity() {
                var t;
                return (t = this)[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, this.onChange(), this
            }
            set(t, e, i, s) {
                return t.length ? this.copy(t) : (w(this, t, e, i, s), this.onChange(), this)
            }
            rotateX(t) {
                return function(t, e, i) {
                    i *= .5;
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        o = Math.sin(i),
                        h = Math.cos(i);
                    t[0] = s * h + a * o, t[1] = r * h + n * o, t[2] = n * h - r * o, t[3] = a * h - s * o
                }(this, this, t), this.onChange(), this
            }
            rotateY(t) {
                return function(t, e, i) {
                    i *= .5;
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        o = Math.sin(i),
                        h = Math.cos(i);
                    t[0] = s * h - n * o, t[1] = r * h + a * o, t[2] = n * h + s * o, t[3] = a * h - r * o
                }(this, this, t), this.onChange(), this
            }
            rotateZ(t) {
                return function(t, e, i) {
                    i *= .5;
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        o = Math.sin(i),
                        h = Math.cos(i);
                    t[0] = s * h + r * o, t[1] = r * h - s * o, t[2] = n * h + a * o, t[3] = a * h - n * o
                }(this, this, t), this.onChange(), this
            }
            inverse(t = this) {
                return function(t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = i * i + s * s + r * r + n * n,
                        o = a ? 1 / a : 0;
                    t[0] = -i * o, t[1] = -s * o, t[2] = -r * o, t[3] = n * o
                }(this, t), this.onChange(), this
            }
            conjugate(t = this) {
                var e, i;
                return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], e[3] = i[3], this.onChange(), this
            }
            copy(t) {
                return x(this, t), this.onChange(), this
            }
            normalize(t = this) {
                return M(this, t), this.onChange(), this
            }
            multiply(t, e) {
                return e ? y(this, t, e) : y(this, this, t), this.onChange(), this
            }
            dot(t) {
                return b(this, t)
            }
            fromMatrix3(t) {
                return function(t, e) {
                    let i, s = e[0] + e[4] + e[8];
                    if (s > 0) i = Math.sqrt(s + 1), t[3] = .5 * i, i = .5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;
                    else {
                        let s = 0;
                        e[4] > e[0] && (s = 1), e[8] > e[3 * s + s] && (s = 2);
                        let r = (s + 1) % 3,
                            n = (s + 2) % 3;
                        i = Math.sqrt(e[3 * s + s] - e[3 * r + r] - e[3 * n + n] + 1), t[s] = .5 * i, i = .5 / i, t[3] = (e[3 * r + n] - e[3 * n + r]) * i, t[r] = (e[3 * r + s] + e[3 * s + r]) * i, t[n] = (e[3 * n + s] + e[3 * s + n]) * i
                    }
                }(this, t), this.onChange(), this
            }
            fromEuler(t) {
                return function(t, e, i = "YXZ") {
                    let s = Math.sin(.5 * e[0]),
                        r = Math.cos(.5 * e[0]),
                        n = Math.sin(.5 * e[1]),
                        a = Math.cos(.5 * e[1]),
                        o = Math.sin(.5 * e[2]),
                        h = Math.cos(.5 * e[2]);
                    "XYZ" === i ? (t[0] = s * a * h + r * n * o, t[1] = r * n * h - s * a * o, t[2] = r * a * o + s * n * h, t[3] = r * a * h - s * n * o) : "YXZ" === i ? (t[0] = s * a * h + r * n * o, t[1] = r * n * h - s * a * o, t[2] = r * a * o - s * n * h, t[3] = r * a * h + s * n * o) : "ZXY" === i ? (t[0] = s * a * h - r * n * o, t[1] = r * n * h + s * a * o, t[2] = r * a * o + s * n * h, t[3] = r * a * h - s * n * o) : "ZYX" === i ? (t[0] = s * a * h - r * n * o, t[1] = r * n * h + s * a * o, t[2] = r * a * o - s * n * h, t[3] = r * a * h + s * n * o) : "YZX" === i ? (t[0] = s * a * h + r * n * o, t[1] = r * n * h + s * a * o, t[2] = r * a * o - s * n * h, t[3] = r * a * h - s * n * o) : "XZY" === i && (t[0] = s * a * h - r * n * o, t[1] = r * n * h - s * a * o, t[2] = r * a * o + s * n * h, t[3] = r * a * h + s * n * o)
                }(this, t, t.order), this
            }
            fromAxisAngle(t, e) {
                return function(t, e, i) {
                    i *= .5;
                    let s = Math.sin(i);
                    t[0] = s * e[0], t[1] = s * e[1], t[2] = s * e[2], t[3] = Math.cos(i)
                }(this, t, e), this
            }
            slerp(t, e) {
                return function(t, e, i, s) {
                    let r, n, a, o, h, l = e[0],
                        u = e[1],
                        c = e[2],
                        d = e[3],
                        p = i[0],
                        m = i[1],
                        f = i[2],
                        g = i[3];
                    n = l * p + u * m + c * f + d * g, n < 0 && (n = -n, p = -p, m = -m, f = -f, g = -g), 1 - n > 1e-6 ? (r = Math.acos(n), a = Math.sin(r), o = Math.sin((1 - s) * r) / a, h = Math.sin(s * r) / a) : (o = 1 - s, h = s), t[0] = o * l + h * p, t[1] = o * u + h * m, t[2] = o * c + h * f, t[3] = o * d + h * g
                }(this, this, t, e), this
            }
            fromArray(t, e = 0) {
                return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
            }
        }

        function A(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = e[4],
                h = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                d = e[9],
                p = e[10],
                m = e[11],
                f = e[12],
                g = e[13],
                v = e[14],
                _ = e[15],
                y = i[0],
                x = i[1],
                w = i[2],
                b = i[3];
            return t[0] = y * s + x * o + w * c + b * f, t[1] = y * r + x * h + w * d + b * g, t[2] = y * n + x * l + w * p + b * v, t[3] = y * a + x * u + w * m + b * _, y = i[4], x = i[5], w = i[6], b = i[7], t[4] = y * s + x * o + w * c + b * f, t[5] = y * r + x * h + w * d + b * g, t[6] = y * n + x * l + w * p + b * v, t[7] = y * a + x * u + w * m + b * _, y = i[8], x = i[9], w = i[10], b = i[11], t[8] = y * s + x * o + w * c + b * f, t[9] = y * r + x * h + w * d + b * g, t[10] = y * n + x * l + w * p + b * v, t[11] = y * a + x * u + w * m + b * _, y = i[12], x = i[13], w = i[14], b = i[15], t[12] = y * s + x * o + w * c + b * f, t[13] = y * r + x * h + w * d + b * g, t[14] = y * n + x * l + w * p + b * v, t[15] = y * a + x * u + w * m + b * _, t
        }

        function E(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[4],
                a = e[5],
                o = e[6],
                h = e[8],
                l = e[9],
                u = e[10];
            return t[0] = Math.hypot(i, s, r), t[1] = Math.hypot(n, a, o), t[2] = Math.hypot(h, l, u), t
        }
        const S = function() {
            const t = [0, 0, 0];
            return function(e, i) {
                let s = t;
                E(s, i);
                let r = 1 / s[0],
                    n = 1 / s[1],
                    a = 1 / s[2],
                    o = i[0] * r,
                    h = i[1] * n,
                    l = i[2] * a,
                    u = i[4] * r,
                    c = i[5] * n,
                    d = i[6] * a,
                    p = i[8] * r,
                    m = i[9] * n,
                    f = i[10] * a,
                    g = o + c + f,
                    v = 0;
                return g > 0 ? (v = 2 * Math.sqrt(g + 1), e[3] = .25 * v, e[0] = (d - m) / v, e[1] = (p - l) / v, e[2] = (h - u) / v) : o > c && o > f ? (v = 2 * Math.sqrt(1 + o - c - f), e[3] = (d - m) / v, e[0] = .25 * v, e[1] = (h + u) / v, e[2] = (p + l) / v) : c > f ? (v = 2 * Math.sqrt(1 + c - o - f), e[3] = (p - l) / v, e[0] = (h + u) / v, e[1] = .25 * v, e[2] = (d + m) / v) : (v = 2 * Math.sqrt(1 + f - o - c), e[3] = (h - u) / v, e[0] = (p + l) / v, e[1] = (d + m) / v, e[2] = .25 * v), e
            }
        }();
        class O extends Array {
            constructor(t = 1, e = 0, i = 0, s = 0, r = 0, n = 1, a = 0, o = 0, h = 0, l = 0, u = 1, c = 0, d = 0, p = 0, m = 0, f = 1) {
                return super(t, e, i, s, r, n, a, o, h, l, u, c, d, p, m, f), this
            }
            get x() {
                return this[12]
            }
            get y() {
                return this[13]
            }
            get z() {
                return this[14]
            }
            get w() {
                return this[15]
            }
            set x(t) {
                this[12] = t
            }
            set y(t) {
                this[13] = t
            }
            set z(t) {
                this[14] = t
            }
            set w(t) {
                this[15] = t
            }
            set(t, e, i, s, r, n, a, o, h, l, u, c, d, p, m, f) {
                return t.length ? this.copy(t) : (function(t, e, i, s, r, n, a, o, h, l, u, c, d, p, m, f, g) {
                    t[0] = e, t[1] = i, t[2] = s, t[3] = r, t[4] = n, t[5] = a, t[6] = o, t[7] = h, t[8] = l, t[9] = u, t[10] = c, t[11] = d, t[12] = p, t[13] = m, t[14] = f, t[15] = g
                }(this, t, e, i, s, r, n, a, o, h, l, u, c, d, p, m, f), this)
            }
            translate(t, e = this) {
                return function(t, e, i) {
                    let s, r, n, a, o, h, l, u, c, d, p, m, f = i[0],
                        g = i[1],
                        v = i[2];
                    e === t ? (t[12] = e[0] * f + e[4] * g + e[8] * v + e[12], t[13] = e[1] * f + e[5] * g + e[9] * v + e[13], t[14] = e[2] * f + e[6] * g + e[10] * v + e[14], t[15] = e[3] * f + e[7] * g + e[11] * v + e[15]) : (s = e[0], r = e[1], n = e[2], a = e[3], o = e[4], h = e[5], l = e[6], u = e[7], c = e[8], d = e[9], p = e[10], m = e[11], t[0] = s, t[1] = r, t[2] = n, t[3] = a, t[4] = o, t[5] = h, t[6] = l, t[7] = u, t[8] = c, t[9] = d, t[10] = p, t[11] = m, t[12] = s * f + o * g + c * v + e[12], t[13] = r * f + h * g + d * v + e[13], t[14] = n * f + l * g + p * v + e[14], t[15] = a * f + u * g + m * v + e[15])
                }(this, e, t), this
            }
            rotate(t, e, i = this) {
                return function(t, e, i, s) {
                    let r, n, a, o, h, l, u, c, d, p, m, f, g, v, _, y, x, w, b, M, T, A, E, S, O = s[0],
                        z = s[1],
                        P = s[2],
                        L = Math.hypot(O, z, P);
                    Math.abs(L) < 1e-6 || (L = 1 / L, O *= L, z *= L, P *= L, r = Math.sin(i), n = Math.cos(i), a = 1 - n, o = e[0], h = e[1], l = e[2], u = e[3], c = e[4], d = e[5], p = e[6], m = e[7], f = e[8], g = e[9], v = e[10], _ = e[11], y = O * O * a + n, x = z * O * a + P * r, w = P * O * a - z * r, b = O * z * a - P * r, M = z * z * a + n, T = P * z * a + O * r, A = O * P * a + z * r, E = z * P * a - O * r, S = P * P * a + n, t[0] = o * y + c * x + f * w, t[1] = h * y + d * x + g * w, t[2] = l * y + p * x + v * w, t[3] = u * y + m * x + _ * w, t[4] = o * b + c * M + f * T, t[5] = h * b + d * M + g * T, t[6] = l * b + p * M + v * T, t[7] = u * b + m * M + _ * T, t[8] = o * A + c * E + f * S, t[9] = h * A + d * E + g * S, t[10] = l * A + p * E + v * S, t[11] = u * A + m * E + _ * S, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]))
                }(this, i, t, e), this
            }
            scale(t, e = this) {
                return function(t, e, i) {
                    let s = i[0],
                        r = i[1],
                        n = i[2];
                    t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]
                }(this, e, "number" == typeof t ? [t, t, t] : t), this
            }
            multiply(t, e) {
                return e ? A(this, t, e) : A(this, this, t), this
            }
            identity() {
                var t;
                return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }
            copy(t) {
                var e, i;
                return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
            }
            fromPerspective({
                fov: t,
                aspect: e,
                near: i,
                far: s
            } = {}) {
                return function(t, e, i, s, r) {
                    let n = 1 / Math.tan(e / 2),
                        a = 1 / (s - r);
                    t[0] = n / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (r + s) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * r * s * a, t[15] = 0
                }(this, t, e, i, s), this
            }
            fromOrthogonal({
                left: t,
                right: e,
                bottom: i,
                top: s,
                near: r,
                far: n
            }) {
                return function(t, e, i, s, r, n, a) {
                    let o = 1 / (e - i),
                        h = 1 / (s - r),
                        l = 1 / (n - a);
                    t[0] = -2 * o, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + i) * o, t[13] = (r + s) * h, t[14] = (a + n) * l, t[15] = 1
                }(this, t, e, i, s, r, n), this
            }
            fromQuaternion(t) {
                return function(t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = i + i,
                        o = s + s,
                        h = r + r,
                        l = i * a,
                        u = s * a,
                        c = s * o,
                        d = r * a,
                        p = r * o,
                        m = r * h,
                        f = n * a,
                        g = n * o,
                        v = n * h;
                    t[0] = 1 - c - m, t[1] = u + v, t[2] = d - g, t[3] = 0, t[4] = u - v, t[5] = 1 - l - m, t[6] = p + f, t[7] = 0, t[8] = d + g, t[9] = p - f, t[10] = 1 - l - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1
                }(this, t), this
            }
            setPosition(t) {
                return this.x = t[0], this.y = t[1], this.z = t[2], this
            }
            inverse(t = this) {
                return function(t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = e[4],
                        o = e[5],
                        h = e[6],
                        l = e[7],
                        u = e[8],
                        c = e[9],
                        d = e[10],
                        p = e[11],
                        m = e[12],
                        f = e[13],
                        g = e[14],
                        v = e[15],
                        _ = i * o - s * a,
                        y = i * h - r * a,
                        x = i * l - n * a,
                        w = s * h - r * o,
                        b = s * l - n * o,
                        M = r * l - n * h,
                        T = u * f - c * m,
                        A = u * g - d * m,
                        E = u * v - p * m,
                        S = c * g - d * f,
                        O = c * v - p * f,
                        z = d * v - p * g,
                        P = _ * z - y * O + x * S + w * E - b * A + M * T;
                    P && (P = 1 / P, t[0] = (o * z - h * O + l * S) * P, t[1] = (r * O - s * z - n * S) * P, t[2] = (f * M - g * b + v * w) * P, t[3] = (d * b - c * M - p * w) * P, t[4] = (h * E - a * z - l * A) * P, t[5] = (i * z - r * E + n * A) * P, t[6] = (g * x - m * M - v * y) * P, t[7] = (u * M - d * x + p * y) * P, t[8] = (a * O - o * E + l * T) * P, t[9] = (s * E - i * O - n * T) * P, t[10] = (m * b - f * x + v * _) * P, t[11] = (c * x - u * b - p * _) * P, t[12] = (o * A - a * S - h * T) * P, t[13] = (i * S - s * A + r * T) * P, t[14] = (f * y - m * w - g * _) * P, t[15] = (u * w - c * y + d * _) * P)
                }(this, t), this
            }
            compose(t, e, i) {
                return function(t, e, i, s) {
                    let r = e[0],
                        n = e[1],
                        a = e[2],
                        o = e[3],
                        h = r + r,
                        l = n + n,
                        u = a + a,
                        c = r * h,
                        d = r * l,
                        p = r * u,
                        m = n * l,
                        f = n * u,
                        g = a * u,
                        v = o * h,
                        _ = o * l,
                        y = o * u,
                        x = s[0],
                        w = s[1],
                        b = s[2];
                    t[0] = (1 - (m + g)) * x, t[1] = (d + y) * x, t[2] = (p - _) * x, t[3] = 0, t[4] = (d - y) * w, t[5] = (1 - (c + g)) * w, t[6] = (f + v) * w, t[7] = 0, t[8] = (p + _) * b, t[9] = (f - v) * b, t[10] = (1 - (c + m)) * b, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1
                }(this, t, e, i), this
            }
            getRotation(t) {
                return S(t, this), this
            }
            getTranslation(t) {
                var e, i;
                return i = this, (e = t)[0] = i[12], e[1] = i[13], e[2] = i[14], this
            }
            getScaling(t) {
                return E(t, this), this
            }
            getMaxScaleOnAxis() {
                return function(t) {
                    let e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[4],
                        n = t[5],
                        a = t[6],
                        o = t[8],
                        h = t[9],
                        l = t[10];
                    const u = e * e + i * i + s * s,
                        c = r * r + n * n + a * a,
                        d = o * o + h * h + l * l;
                    return Math.sqrt(Math.max(u, c, d))
                }(this)
            }
            lookAt(t, e, i) {
                return function(t, e, i, s) {
                    let r = e[0],
                        n = e[1],
                        a = e[2],
                        o = s[0],
                        h = s[1],
                        l = s[2],
                        u = r - i[0],
                        c = n - i[1],
                        d = a - i[2],
                        p = u * u + c * c + d * d;
                    0 === p ? d = 1 : (p = 1 / Math.sqrt(p), u *= p, c *= p, d *= p);
                    let m = h * d - l * c,
                        f = l * u - o * d,
                        g = o * c - h * u;
                    p = m * m + f * f + g * g, 0 === p && (l ? o += 1e-6 : h ? l += 1e-6 : h += 1e-6, m = h * d - l * c, f = l * u - o * d, g = o * c - h * u, p = m * m + f * f + g * g), p = 1 / Math.sqrt(p), m *= p, f *= p, g *= p, t[0] = m, t[1] = f, t[2] = g, t[3] = 0, t[4] = c * g - d * f, t[5] = d * m - u * g, t[6] = u * f - c * m, t[7] = 0, t[8] = u, t[9] = c, t[10] = d, t[11] = 0, t[12] = r, t[13] = n, t[14] = a, t[15] = 1
                }(this, t, e, i), this
            }
            determinant() {
                return function(t) {
                    let e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        a = t[5],
                        o = t[6],
                        h = t[7],
                        l = t[8],
                        u = t[9],
                        c = t[10],
                        d = t[11],
                        p = t[12],
                        m = t[13],
                        f = t[14],
                        g = t[15];
                    return (e * a - i * n) * (c * g - d * f) - (e * o - s * n) * (u * g - d * m) + (e * h - r * n) * (u * f - c * m) + (i * o - s * a) * (l * g - d * p) - (i * h - r * a) * (l * f - c * p) + (s * h - r * o) * (l * m - u * p)
                }(this)
            }
            fromArray(t, e = 0) {
                return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t
            }
        }
        const z = new O;
        class P extends Array {
            constructor(t = 0, e = t, i = t, s = "YXZ") {
                return super(t, e, i), this.order = s, this.onChange = () => {}, this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(t) {
                this[0] = t, this.onChange()
            }
            set y(t) {
                this[1] = t, this.onChange()
            }
            set z(t) {
                this[2] = t, this.onChange()
            }
            set(t, e = t, i = t) {
                return t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = i, this.onChange(), this)
            }
            copy(t) {
                return this[0] = t[0], this[1] = t[1], this[2] = t[2], this.onChange(), this
            }
            reorder(t) {
                return this.order = t, this.onChange(), this
            }
            fromRotationMatrix(t, e = this.order) {
                return function(t, e, i = "YXZ") {
                    "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]), t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]), t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]), t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0, t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]), t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0, t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]), t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0, t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]), t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]), t[1] = 0))
                }(this, t, e), this
            }
            fromQuaternion(t, e = this.order) {
                return z.fromQuaternion(t), this.fromRotationMatrix(z, e)
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
            }
        }
        class L {
            constructor() {
                this.parent = null, this.children = [], this.visible = !0, this.matrix = new O, this.worldMatrix = new O, this.matrixAutoUpdate = !0, this.position = new f, this.quaternion = new T, this.scale = new f(1), this.rotation = new P, this.up = new f(0, 1, 0), this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation), this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion)
            }
            setParent(t, e = !0) {
                this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1)
            }
            addChild(t, e = !0) {
                ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1)
            }
            removeChild(t, e = !0) {
                ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1)
            }
            updateMatrixWorld(t) {
                this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
                for (let e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t)
            }
            updateMatrix() {
                this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
            }
            traverse(t) {
                if (!t(this))
                    for (let e = 0, i = this.children.length; e < i; e++) this.children[e].traverse(t)
            }
            decompose() {
                this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
            }
            lookAt(t, e = !1) {
                e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion)
            }
        }
        const C = new O,
            R = new f,
            F = new f;
        class D extends L {
            constructor(t, {
                near: e = .1,
                far: i = 100,
                fov: s = 45,
                aspect: r = 1,
                left: n,
                right: a,
                bottom: o,
                top: h,
                zoom: l = 1
            } = {}) {
                super(), Object.assign(this, {
                    near: e,
                    far: i,
                    fov: s,
                    aspect: r,
                    left: n,
                    right: a,
                    bottom: o,
                    top: h,
                    zoom: l
                }), this.projectionMatrix = new O, this.viewMatrix = new O, this.projectionViewMatrix = new O, this.worldPosition = new f, this.type = n || a ? "orthographic" : "perspective", "orthographic" === this.type ? this.orthographic() : this.perspective()
            }
            perspective({
                near: t = this.near,
                far: e = this.far,
                fov: i = this.fov,
                aspect: s = this.aspect
            } = {}) {
                return Object.assign(this, {
                    near: t,
                    far: e,
                    fov: i,
                    aspect: s
                }), this.projectionMatrix.fromPerspective({
                    fov: i * (Math.PI / 180),
                    aspect: s,
                    near: t,
                    far: e
                }), this.type = "perspective", this
            }
            orthographic({
                near: t = this.near,
                far: e = this.far,
                left: i = this.left,
                right: s = this.right,
                bottom: r = this.bottom,
                top: n = this.top,
                zoom: a = this.zoom
            } = {}) {
                return Object.assign(this, {
                    near: t,
                    far: e,
                    left: i,
                    right: s,
                    bottom: r,
                    top: n,
                    zoom: a
                }), i /= a, s /= a, r /= a, n /= a, this.projectionMatrix.fromOrthogonal({
                    left: i,
                    right: s,
                    bottom: r,
                    top: n,
                    near: t,
                    far: e
                }), this.type = "orthographic", this
            }
            updateMatrixWorld() {
                return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
            }
            lookAt(t) {
                return super.lookAt(t, !0), this
            }
            project(t) {
                return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
            }
            unproject(t) {
                return t.applyMatrix4(C.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
            }
            updateFrustum() {
                this.frustum || (this.frustum = [new f, new f, new f, new f, new f, new f]);
                const t = this.projectionViewMatrix;
                this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
                for (let t = 0; t < 6; t++) {
                    const e = 1 / this.frustum[t].distance();
                    this.frustum[t].multiply(e), this.frustum[t].constant *= e
                }
            }
            frustumIntersectsMesh(t) {
                if (!t.geometry.attributes.position) return !0;
                if (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(), !t.geometry.bounds) return !0;
                const e = R;
                e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
                const i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
                return this.frustumIntersectsSphere(e, i)
            }
            frustumIntersectsSphere(t, e) {
                const i = F;
                for (let s = 0; s < 6; s++) {
                    const r = this.frustum[s];
                    if (i.copy(r).dot(t) + r.constant < -e) return !1
                }
                return !0
            }
        }
        const I = new f;
        let k = 1,
            j = 1,
            B = !1;
        class U extends class {
            constructor(t, e = {}) {
                t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = k++, this.VAOs = {}, this.drawRange = {
                    start: 0,
                    count: 0
                }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
                for (let t in e) this.addAttribute(t, e[t])
            }
            addAttribute(t, e) {
                if (this.attributes[t] = e, e.id = j++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.buffer || (e.buffer = this.gl.createBuffer(), this.updateAttribute(e)), e.divisor) {
                    if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                    this.instancedCount = e.count * e.divisor
                } else "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
            }
            updateAttribute(t) {
                this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW), t.needsUpdate = !1
            }
            setIndex(t) {
                this.addAttribute("index", t)
            }
            setDrawRange(t, e) {
                this.drawRange.start = t, this.drawRange.count = e
            }
            setInstancedCount(t) {
                this.instancedCount = t
            }
            createVAO(t) {
                this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
            }
            bindAttributes(t) {
                t.attributeLocations.forEach(((t, {
                    name: e,
                    type: i
                }) => {
                    if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
                    const s = this.attributes[e];
                    this.gl.bindBuffer(s.target, s.buffer), this.glState.boundBuffer = s.buffer;
                    let r = 1;
                    35674 === i && (r = 2), 35675 === i && (r = 3), 35676 === i && (r = 4);
                    const n = s.size / r,
                        a = 1 === r ? 0 : r * r * r,
                        o = 1 === r ? 0 : r * r;
                    for (let e = 0; e < r; e++) this.gl.vertexAttribPointer(t + e, n, s.type, s.normalized, s.stride + a, s.offset + e * o), this.gl.enableVertexAttribArray(t + e), this.gl.renderer.vertexAttribDivisor(t + e, s.divisor)
                })), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
            }
            draw({
                program: t,
                mode: e = this.gl.TRIANGLES
            }) {
                this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach(((t, {
                    name: e
                }) => {
                    const i = this.attributes[e];
                    i.needsUpdate && this.updateAttribute(i)
                })), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
            }
            getPosition() {
                const t = this.attributes.position;
                return t.data ? t : B ? void 0 : (console.warn("No position buffer data found to compute bounds"), B = !0)
            }
            computeBoundingBox(t) {
                t || (t = this.getPosition());
                const e = t.data,
                    i = t.offset || 0,
                    s = t.stride || t.size;
                this.bounds || (this.bounds = {
                    min: new f,
                    max: new f,
                    center: new f,
                    scale: new f,
                    radius: 1 / 0
                });
                const r = this.bounds.min,
                    n = this.bounds.max,
                    a = this.bounds.center,
                    o = this.bounds.scale;
                r.set(1 / 0), n.set(-1 / 0);
                for (let t = i, a = e.length; t < a; t += s) {
                    const i = e[t],
                        s = e[t + 1],
                        a = e[t + 2];
                    r.x = Math.min(i, r.x), r.y = Math.min(s, r.y), r.z = Math.min(a, r.z), n.x = Math.max(i, n.x), n.y = Math.max(s, n.y), n.z = Math.max(a, n.z)
                }
                o.sub(n, r), a.add(r, n).divide(2)
            }
            computeBoundingSphere(t) {
                t || (t = this.getPosition());
                const e = t.data,
                    i = t.offset || 0,
                    s = t.stride || t.size;
                this.bounds || this.computeBoundingBox(t);
                let r = 0;
                for (let t = i, n = e.length; t < n; t += s) I.fromArray(e, t), r = Math.max(r, this.bounds.center.squaredDistance(I));
                this.bounds.radius = Math.sqrt(r)
            }
            remove() {
                for (let t in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
                for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
            }
        } {
            constructor(t, {
                width: e = 1,
                height: i = 1,
                widthSegments: s = 1,
                heightSegments: r = 1,
                attributes: n = {}
            } = {}) {
                const a = s,
                    o = r,
                    h = (a + 1) * (o + 1),
                    l = a * o * 6,
                    u = new Float32Array(3 * h),
                    c = new Float32Array(3 * h),
                    d = new Float32Array(2 * h),
                    p = h > 65536 ? new Uint32Array(l) : new Uint16Array(l);
                U.buildPlane(u, c, d, p, e, i, 0, a, o), Object.assign(n, {
                    position: {
                        size: 3,
                        data: u
                    },
                    normal: {
                        size: 3,
                        data: c
                    },
                    uv: {
                        size: 2,
                        data: d
                    },
                    index: {
                        data: p
                    }
                }), super(t, n)
            }
            static buildPlane(t, e, i, s, r, n, a, o, h, l = 0, u = 1, c = 2, d = 1, p = -1, m = 0, f = 0) {
                const g = m,
                    v = r / o,
                    _ = n / h;
                for (let y = 0; y <= h; y++) {
                    let x = y * _ - n / 2;
                    for (let n = 0; n <= o; n++, m++) {
                        let _ = n * v - r / 2;
                        if (t[3 * m + l] = _ * d, t[3 * m + u] = x * p, t[3 * m + c] = a / 2, e[3 * m + l] = 0, e[3 * m + u] = 0, e[3 * m + c] = a >= 0 ? 1 : -1, i[2 * m] = n / o, i[2 * m + 1] = 1 - y / h, y === h || n === o) continue;
                        let w = g + n + y * (o + 1),
                            b = g + n + (y + 1) * (o + 1),
                            M = g + n + (y + 1) * (o + 1) + 1,
                            T = g + n + y * (o + 1) + 1;
                        s[6 * f] = w, s[6 * f + 1] = b, s[6 * f + 2] = T, s[6 * f + 3] = b, s[6 * f + 4] = M, s[6 * f + 5] = T, f++
                    }
                }
            }
        }
        var N = i(7976),
            q = i.n(N);

        function Y(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function V(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        var X, W, G, H, $, Z, Q, K, J, tt, et, it, st, rt, nt, at, ot, ht, lt, ut, ct, dt, pt, mt, ft, gt, vt, _t, yt = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            xt = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            wt = 1e8,
            bt = 1e-8,
            Mt = 2 * Math.PI,
            Tt = Mt / 4,
            At = 0,
            Et = Math.sqrt,
            St = Math.cos,
            Ot = Math.sin,
            zt = function(t) {
                return "string" == typeof t
            },
            Pt = function(t) {
                return "function" == typeof t
            },
            Lt = function(t) {
                return "number" == typeof t
            },
            Ct = function(t) {
                return void 0 === t
            },
            Rt = function(t) {
                return "object" == typeof t
            },
            Ft = function(t) {
                return !1 !== t
            },
            Dt = function() {
                return "undefined" != typeof window
            },
            It = function(t) {
                return Pt(t) || zt(t)
            },
            kt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
            jt = Array.isArray,
            Bt = /(?:-?\.?\d|\.)+/gi,
            Ut = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            Nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            qt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            Yt = /[+-]=-?[.\d]+/,
            Vt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            Xt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
            Wt = {},
            Gt = {},
            Ht = function(t) {
                return (Gt = xe(t, Wt)) && ns
            },
            $t = function(t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            Zt = function(t, e) {
                return !e && console.warn(t)
            },
            Qt = function(t, e) {
                return t && (Wt[t] = e) && Gt && (Gt[t] = e) || Wt
            },
            Kt = function() {
                return 0
            },
            Jt = {},
            te = [],
            ee = {},
            ie = {},
            se = {},
            re = 30,
            ne = [],
            ae = "",
            oe = function(t) {
                var e, i, s = t[0];
                if (Rt(s) || Pt(s) || (t = [t]), !(e = (s._gsap || {}).harness)) {
                    for (i = ne.length; i-- && !ne[i].targetTest(s););
                    e = ne[i]
                }
                for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Pi(t[i], e))) || t.splice(i, 1);
                return t
            },
            he = function(t) {
                return t._gsap || oe($e(t))[0]._gsap
            },
            le = function(t, e, i) {
                return (i = t[e]) && Pt(i) ? t[e]() : Ct(i) && t.getAttribute && t.getAttribute(e) || i
            },
            ue = function(t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            ce = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            de = function(t, e) {
                for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i;);
                return s < i
            },
            pe = function(t, e, i) {
                var s, r = Lt(t[1]),
                    n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                    a = t[n];
                if (r && (a.duration = t[1]), a.parent = i, e) {
                    for (s = a; i && !("immediateRender" in s);) s = i.vars.defaults || {}, i = Ft(i.vars.inherit) && i.parent;
                    a.immediateRender = Ft(s.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[n - 1]
                }
                return a
            },
            me = function() {
                var t, e, i = te.length,
                    s = te.slice(0);
                for (ee = {}, te.length = 0, t = 0; t < i; t++)(e = s[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
            },
            fe = function(t, e, i, s) {
                te.length && me(), t.render(e, i, s), te.length && me()
            },
            ge = function(t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(Vt).length < 2 ? e : zt(t) ? t.trim() : t
            },
            ve = function(t) {
                return t
            },
            _e = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            ye = function(t, e) {
                for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
            },
            xe = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            we = function t(e, i) {
                for (var s in i) "__proto__" !== s && "constructor" !== s && "prototype" !== s && (e[s] = Rt(i[s]) ? t(e[s] || (e[s] = {}), i[s]) : i[s]);
                return e
            },
            be = function(t, e) {
                var i, s = {};
                for (i in t) i in e || (s[i] = t[i]);
                return s
            },
            Me = function(t) {
                var e = t.parent || W,
                    i = t.keyframes ? ye : _e;
                if (Ft(t.inherit))
                    for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
                return t
            },
            Te = function(t, e, i, s) {
                void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                var r = e._prev,
                    n = e._next;
                r ? r._next = n : t[i] === e && (t[i] = n), n ? n._prev = r : t[s] === e && (t[s] = r), e._next = e._prev = e.parent = null
            },
            Ae = function(t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
            },
            Ee = function(t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0))
                    for (var i = t; i;) i._dirty = 1, i = i.parent;
                return t
            },
            Se = function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            Oe = function t(e) {
                return !e || e._ts && t(e.parent)
            },
            ze = function(t) {
                return t._repeat ? Pe(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            Pe = function(t, e) {
                var i = Math.floor(t /= e);
                return t && i === t ? i - 1 : i
            },
            Le = function(t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            Ce = function(t) {
                return t._end = ce(t._start + (t._tDur / Math.abs(t._ts || t._rts || bt) || 0))
            },
            Re = function(t, e) {
                var i = t._dp;
                return i && i.smoothChildTiming && t._ts && (t._start = ce(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ce(t), i._dirty || Ee(i, t)), t
            },
            Fe = function(t, e) {
                var i;
                if ((e._time || e._initted && !e._dur) && (i = Le(t.rawTime(), e), (!e._dur || Ve(0, e.totalDuration(), i) - e._tTime > bt) && e.render(i, !0)), Ee(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    t._zTime = -1e-8
                }
            },
            De = function(t, e, i, s) {
                return e.parent && Ae(e), e._start = ce(i + e._delay), e._end = ce(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                    function(t, e, i, s, r) {
                        void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                        var n, a = t[s];
                        if (r)
                            for (n = e[r]; a && a[r] > n;) a = a._prev;
                        a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = a, e.parent = e._dp = t
                    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, s || Fe(t, e), t
            },
            Ie = function(t, e) {
                return (Wt.ScrollTrigger || $t("scrollTrigger", e)) && Wt.ScrollTrigger.create(e, t)
            },
            ke = function(t, e, i, s) {
                return ki(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Q !== vi.frame ? (te.push(t), t._lazy = [e, s], 1) : void 0 : 1
            },
            je = function t(e) {
                var i = e.parent;
                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
            },
            Be = function(t, e, i, s) {
                var r = t._repeat,
                    n = ce(e) || 0,
                    a = t._tTime / t._tDur;
                return a && !s && (t._time *= n / t._dur), t._dur = n, t._tDur = r ? r < 0 ? 1e10 : ce(n * (r + 1) + t._rDelay * r) : n, a && !s ? Re(t, t._tTime = t._tDur * a) : t.parent && Ce(t), i || Ee(t.parent, t), t
            },
            Ue = function(t) {
                return t instanceof Ci ? Ee(t) : Be(t, t._dur)
            },
            Ne = {
                _start: 0,
                endTime: Kt
            },
            qe = function t(e, i) {
                var s, r, n = e.labels,
                    a = e._recent || Ne,
                    o = e.duration() >= wt ? a.endTime(!1) : e._dur;
                return zt(i) && (isNaN(i) || i in n) ? "<" === (s = i.charAt(0)) || ">" === s ? ("<" === s ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (s = i.indexOf("=")) < 0 ? (i in n || (n[i] = o), n[i]) : (r = +(i.charAt(s - 1) + i.substr(s + 1)), s > 1 ? t(e, i.substr(0, s - 1)) + r : o + r) : null == i ? o : +i
            },
            Ye = function(t, e) {
                return t || 0 === t ? e(t) : e
            },
            Ve = function(t, e, i) {
                return i < t ? t : i > e ? e : i
            },
            Xe = function(t) {
                if ("string" != typeof t) return "";
                var e = Xt.exec(t);
                return e ? t.substr(e.index + e[0].length) : ""
            },
            We = [].slice,
            Ge = function(t, e) {
                return t && Rt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Rt(t[0])) && !t.nodeType && t !== G
            },
            He = function(t, e, i) {
                return void 0 === i && (i = []), t.forEach((function(t) {
                    var s;
                    return zt(t) && !e || Ge(t, 1) ? (s = i).push.apply(s, $e(t)) : i.push(t)
                })) || i
            },
            $e = function(t, e) {
                return !zt(t) || e || !H && _i() ? jt(t) ? He(t, e) : Ge(t) ? We.call(t, 0) : t ? [t] : [] : We.call($.querySelectorAll(t), 0)
            },
            Ze = function(t) {
                return t.sort((function() {
                    return .5 - Math.random()
                }))
            },
            Qe = function(t) {
                if (Pt(t)) return t;
                var e = Rt(t) ? t : {
                        each: t
                    },
                    i = Ai(e.ease),
                    s = e.from || 0,
                    r = parseFloat(e.base) || 0,
                    n = {},
                    a = s > 0 && s < 1,
                    o = isNaN(s) || a,
                    h = e.axis,
                    l = s,
                    u = s;
                return zt(s) ? l = u = {
                        center: .5,
                        edges: .5,
                        end: 1
                    }[s] || 0 : !a && o && (l = s[0], u = s[1]),
                    function(t, a, c) {
                        var d, p, m, f, g, v, _, y, x, w = (c || e).length,
                            b = n[w];
                        if (!b) {
                            if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, wt])[1])) {
                                for (_ = -wt; _ < (_ = c[x++].getBoundingClientRect().left) && x < w;);
                                x--
                            }
                            for (b = n[w] = [], d = o ? Math.min(x, w) * l - .5 : s % x, p = o ? w * u / x - .5 : s / x | 0, _ = 0, y = wt, v = 0; v < w; v++) m = v % x - d, f = p - (v / x | 0), b[v] = g = h ? Math.abs("y" === h ? f : m) : Et(m * m + f * f), g > _ && (_ = g), g < y && (y = g);
                            "random" === s && Ze(b), b.max = _ - y, b.min = y, b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : h ? "y" === h ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === s ? -1 : 1), b.b = w < 0 ? r - w : r, b.u = Xe(e.amount || e.each) || 0, i = i && w < 0 ? Mi(i) : i
                        }
                        return w = (b[t] - b.min) / b.max || 0, ce(b.b + (i ? i(w) : w) * b.v) + b.u
                    }
            },
            Ke = function(t) {
                var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                return function(i) {
                    var s = Math.round(parseFloat(i) / t) * t * e;
                    return (s - s % 1) / e + (Lt(i) ? 0 : Xe(i))
                }
            },
            Je = function(t, e) {
                var i, s, r = jt(t);
                return !r && Rt(t) && (i = r = t.radius || wt, t.values ? (t = $e(t.values), (s = !Lt(t[0])) && (i *= i)) : t = Ke(t.increment)), Ye(e, r ? Pt(t) ? function(e) {
                    return s = t(e), Math.abs(s - e) <= i ? s : e
                } : function(e) {
                    for (var r, n, a = parseFloat(s ? e.x : e), o = parseFloat(s ? e.y : 0), h = wt, l = 0, u = t.length; u--;)(r = s ? (r = t[u].x - a) * r + (n = t[u].y - o) * n : Math.abs(t[u] - a)) < h && (h = r, l = u);
                    return l = !i || h <= i ? t[l] : e, s || l === e || Lt(e) ? l : l + Xe(e)
                } : Ke(t))
            },
            ti = function(t, e, i, s) {
                return Ye(jt(t) ? !e : !0 === i ? !!(i = 0) : !s, (function() {
                    return jt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * s) / s
                }))
            },
            ei = function(t, e, i) {
                return Ye(i, (function(i) {
                    return t[~~e(i)]
                }))
            },
            ii = function(t) {
                for (var e, i, s, r, n = 0, a = ""; ~(e = t.indexOf("random(", n));) s = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, s - e - 7).match(r ? Vt : Bt), a += t.substr(n, e - n) + ti(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), n = s + 1;
                return a + t.substr(n, t.length - n)
            },
            si = function(t, e, i, s, r) {
                var n = e - t,
                    a = s - i;
                return Ye(r, (function(e) {
                    return i + ((e - t) / n * a || 0)
                }))
            },
            ri = function(t, e, i) {
                var s, r, n, a = t.labels,
                    o = wt;
                for (s in a)(r = a[s] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && (n = s, o = r);
                return n
            },
            ni = function(t, e, i) {
                var s, r, n = t.vars,
                    a = n[e];
                if (a) return s = n[e + "Params"], r = n.callbackScope || t, i && te.length && me(), s ? a.apply(r, s) : a.call(r)
            },
            ai = function(t) {
                return Ae(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ni(t, "onInterrupt"), t
            },
            oi = function(t) {
                var e = (t = !t.name && t.default || t).name,
                    i = Pt(t),
                    s = e && !i && t.init ? function() {
                        this._props = []
                    } : t,
                    r = {
                        init: Kt,
                        render: Zi,
                        add: Di,
                        kill: Ki,
                        modifier: Qi,
                        rawVars: 0
                    },
                    n = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Wi,
                        aliases: {},
                        register: 0
                    };
                if (_i(), t !== s) {
                    if (ie[e]) return;
                    _e(s, _e(be(t, r), n)), xe(s.prototype, xe(r, be(t, n))), ie[s.prop = e] = s, t.targetTest && (ne.push(s), Jt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                Qt(e, s), t.register && t.register(ns, s, es)
            },
            hi = 255,
            li = {
                aqua: [0, hi, hi],
                lime: [0, hi, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, hi],
                navy: [0, 0, 128],
                white: [hi, hi, hi],
                olive: [128, 128, 0],
                yellow: [hi, hi, 0],
                orange: [hi, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [hi, 0, 0],
                pink: [hi, 192, 203],
                cyan: [0, hi, hi],
                transparent: [hi, hi, hi, 0]
            },
            ui = function(t, e, i) {
                return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * hi + .5 | 0
            },
            ci = function(t, e, i) {
                var s, r, n, a, o, h, l, u, c, d, p = t ? Lt(t) ? [t >> 16, t >> 8 & hi, t & hi] : 0 : li.black;
                if (!p) {
                    if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), li[t]) p = li[t];
                    else if ("#" === t.charAt(0)) {
                        if (t.length < 6 && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & hi, p & hi, parseInt(t.substr(7), 16) / 255];
                        p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & hi, t & hi]
                    } else if ("hsl" === t.substr(0, 3))
                        if (p = d = t.match(Bt), e) {
                            if (~t.indexOf("=")) return p = t.match(Ut), i && p.length < 4 && (p[3] = 1), p
                        } else a = +p[0] % 360 / 360, o = +p[1] / 100, s = 2 * (h = +p[2] / 100) - (r = h <= .5 ? h * (o + 1) : h + o - h * o), p.length > 3 && (p[3] *= 1), p[0] = ui(a + 1 / 3, s, r), p[1] = ui(a, s, r), p[2] = ui(a - 1 / 3, s, r);
                    else p = t.match(Bt) || li.transparent;
                    p = p.map(Number)
                }
                return e && !d && (s = p[0] / hi, r = p[1] / hi, n = p[2] / hi, h = ((l = Math.max(s, r, n)) + (u = Math.min(s, r, n))) / 2, l === u ? a = o = 0 : (c = l - u, o = h > .5 ? c / (2 - l - u) : c / (l + u), a = l === s ? (r - n) / c + (r < n ? 6 : 0) : l === r ? (n - s) / c + 2 : (s - r) / c + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
            },
            di = function(t) {
                var e = [],
                    i = [],
                    s = -1;
                return t.split(mi).forEach((function(t) {
                    var r = t.match(Nt) || [];
                    e.push.apply(e, r), i.push(s += r.length + 1)
                })), e.c = i, e
            },
            pi = function(t, e, i) {
                var s, r, n, a, o = "",
                    h = (t + o).match(mi),
                    l = e ? "hsla(" : "rgba(",
                    u = 0;
                if (!h) return t;
                if (h = h.map((function(t) {
                        return (t = ci(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                    })), i && (n = di(t), (s = i.c).join(o) !== n.c.join(o)))
                    for (a = (r = t.replace(mi, "1").split(Nt)).length - 1; u < a; u++) o += r[u] + (~s.indexOf(u) ? h.shift() || l + "0,0,0,0)" : (n.length ? n : h.length ? h : i).shift());
                if (!r)
                    for (a = (r = t.split(mi)).length - 1; u < a; u++) o += r[u] + h[u];
                return o + r[a]
            },
            mi = function() {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in li) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(),
            fi = /hsl[a]?\(/,
            gi = function(t) {
                var e, i = t.join(" ");
                if (mi.lastIndex = 0, mi.test(i)) return e = fi.test(i), t[1] = pi(t[1], e), t[0] = pi(t[0], e, di(t[1])), !0
            },
            vi = (at = Date.now, ot = 500, ht = 33, lt = at(), ut = lt, dt = ct = 1e3 / 240, mt = function t(e) {
                var i, s, r, n, a = at() - ut,
                    o = !0 === e;
                if (a > ot && (lt += a - ht), ((i = (r = (ut += a) - lt) - dt) > 0 || o) && (n = ++st.frame, rt = r - 1e3 * st.time, st.time = r /= 1e3, dt += i + (i >= ct ? 4 : ct - i), s = 1), o || (tt = et(t)), s)
                    for (nt = 0; nt < pt.length; nt++) pt[nt](r, rt, n, e)
            }, st = {
                time: 0,
                frame: 0,
                tick: function() {
                    mt(!0)
                },
                deltaRatio: function(t) {
                    return rt / (1e3 / (t || 60))
                },
                wake: function() {
                    Z && (!H && Dt() && (G = H = window, $ = G.document || {}, Wt.gsap = ns, (G.gsapVersions || (G.gsapVersions = [])).push(ns.version), Ht(Gt || G.GreenSockGlobals || !G.gsap && G || {}), it = G.requestAnimationFrame), tt && st.sleep(), et = it || function(t) {
                        return setTimeout(t, dt - 1e3 * st.time + 1 | 0)
                    }, J = 1, mt(2))
                },
                sleep: function() {
                    (it ? G.cancelAnimationFrame : clearTimeout)(tt), J = 0, et = Kt
                },
                lagSmoothing: function(t, e) {
                    ot = t || 1e8, ht = Math.min(e, ot, 0)
                },
                fps: function(t) {
                    ct = 1e3 / (t || 240), dt = 1e3 * st.time + ct
                },
                add: function(t) {
                    pt.indexOf(t) < 0 && pt.push(t), _i()
                },
                remove: function(t) {
                    var e;
                    ~(e = pt.indexOf(t)) && pt.splice(e, 1) && nt >= e && nt--
                },
                _listeners: pt = []
            }),
            _i = function() {
                return !J && vi.wake()
            },
            yi = {},
            xi = /^[\d.\-M][\d.\-,\s]/,
            wi = /["']/g,
            bi = function(t) {
                for (var e, i, s, r = {}, n = t.substr(1, t.length - 3).split(":"), a = n[0], o = 1, h = n.length; o < h; o++) i = n[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, s = i.substr(0, e), r[a] = isNaN(s) ? s.replace(wi, "").trim() : +s, a = i.substr(e + 1).trim();
                return r
            },
            Mi = function(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            },
            Ti = function t(e, i) {
                for (var s, r = e._first; r;) r instanceof Ci ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (s = r._ease, r._ease = r._yEase, r._yEase = s, r._yoyo = i)), r = r._next
            },
            Ai = function(t, e) {
                return t && (Pt(t) ? t : yi[t] || function(t) {
                    var e, i, s, r, n = (t + "").split("("),
                        a = yi[n[0]];
                    return a && n.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [bi(n[1])] : (e = t, i = e.indexOf("(") + 1, s = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < s ? e.indexOf(")", s + 1) : s)).split(",").map(ge)) : yi._CE && xi.test(t) ? yi._CE("", t) : a
                }(t)) || e
            },
            Ei = function(t, e, i, s) {
                void 0 === i && (i = function(t) {
                    return 1 - e(1 - t)
                }), void 0 === s && (s = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                });
                var r, n = {
                    easeIn: e,
                    easeOut: i,
                    easeInOut: s
                };
                return ue(t, (function(t) {
                    for (var e in yi[t] = Wt[t] = n, yi[r = t.toLowerCase()] = i, n) yi[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = yi[t + "." + e] = n[e]
                })), n
            },
            Si = function(t) {
                return function(e) {
                    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                }
            },
            Oi = function t(e, i, s) {
                var r = i >= 1 ? i : 1,
                    n = (s || (e ? .3 : .45)) / (i < 1 ? i : 1),
                    a = n / Mt * (Math.asin(1 / r) || 0),
                    o = function(t) {
                        return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Ot((t - a) * n) + 1
                    },
                    h = "out" === e ? o : "in" === e ? function(t) {
                        return 1 - o(1 - t)
                    } : Si(o);
                return n = Mt / n, h.config = function(i, s) {
                    return t(e, i, s)
                }, h
            },
            zi = function t(e, i) {
                void 0 === i && (i = 1.70158);
                var s = function(t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                    },
                    r = "out" === e ? s : "in" === e ? function(t) {
                        return 1 - s(1 - t)
                    } : Si(s);
                return r.config = function(i) {
                    return t(e, i)
                }, r
            };
        ue("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var i = e < 5 ? e + 1 : e;
            Ei(t + ",Power" + (i - 1), e ? function(t) {
                return Math.pow(t, i)
            } : function(t) {
                return t
            }, (function(t) {
                return 1 - Math.pow(1 - t, i)
            }), (function(t) {
                return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
            }))
        })), yi.Linear.easeNone = yi.none = yi.Linear.easeIn, Ei("Elastic", Oi("in"), Oi("out"), Oi()), ft = 7.5625, vt = 1 / (gt = 2.75), Ei("Bounce", (function(t) {
            return 1 - _t(1 - t)
        }), _t = function(t) {
            return t < vt ? ft * t * t : t < .7272727272727273 ? ft * Math.pow(t - 1.5 / gt, 2) + .75 : t < .9090909090909092 ? ft * (t -= 2.25 / gt) * t + .9375 : ft * Math.pow(t - 2.625 / gt, 2) + .984375
        }), Ei("Expo", (function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })), Ei("Circ", (function(t) {
            return -(Et(1 - t * t) - 1)
        })), Ei("Sine", (function(t) {
            return 1 === t ? 1 : 1 - St(t * Tt)
        })), Ei("Back", zi("in"), zi("out"), zi()), yi.SteppedEase = yi.steps = Wt.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    s = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                return function(t) {
                    return ((s * Ve(0, .99999999, t) | 0) + r) * i
                }
            }
        }, xt.ease = yi["quad.out"], ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return ae += t + "," + t + "Params,"
        }));
        var Pi = function(t, e) {
                this.id = At++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : le, this.set = e ? e.getSetter : Wi
            },
            Li = function() {
                function t(t, e) {
                    var i = t.parent || W;
                    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Be(this, +t.duration, 1, 1), this.data = t.data, J || vi.wake(), i && De(i, this, e || 0 === e ? e : i._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
                }
                var e = t.prototype;
                return e.delay = function(t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                }, e.duration = function(t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }, e.totalDuration = function(t) {
                    return arguments.length ? (this._dirty = 0, Be(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, e.totalTime = function(t, e) {
                    if (_i(), !arguments.length) return this._tTime;
                    var i = this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (Re(this, t), !i._dp || i.parent || Fe(i, this); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && De(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === bt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), fe(this, t, e)), this
                }, e.time = function(t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ze(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                }, e.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, e.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ze(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, e.iteration = function(t, e) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Pe(this._tTime, i) + 1 : 1
                }, e.timeScale = function(t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? Le(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Se(this.totalTime(Ve(-this._delay, this._tDur, e), !0))
                }, e.paused = function(t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (_i(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= bt) && Math.abs(this._zTime) !== bt))), this) : this._ps
                }, e.startTime = function(t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && De(e, this, t - this._delay), this
                    }
                    return this._start
                }, e.endTime = function(t) {
                    return this._start + (Ft(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                }, e.rawTime = function(t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Le(e.rawTime(t), this) : this._tTime : this._tTime
                }, e.globalTime = function(t) {
                    for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                    return i
                }, e.repeat = function(t) {
                    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ue(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, e.repeatDelay = function(t) {
                    return arguments.length ? (this._rDelay = t, Ue(this)) : this._rDelay
                }, e.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, e.seek = function(t, e) {
                    return this.totalTime(qe(this, t), Ft(e))
                }, e.restart = function(t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, Ft(e))
                }, e.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, e.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, e.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, e.resume = function() {
                    return this.paused(!1)
                }, e.reversed = function(t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                }, e.invalidate = function() {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, e.isActive = function() {
                    var t, e = this.parent || this._dp,
                        i = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - bt))
                }, e.eventCallback = function(t, e, i) {
                    var s = this.vars;
                    return arguments.length > 1 ? (e ? (s[t] = e, i && (s[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete s[t], this) : s[t]
                }, e.then = function(t) {
                    var e = this;
                    return new Promise((function(i) {
                        var s = Pt(t) ? t : ve,
                            r = function() {
                                var t = e.then;
                                e.then = null, Pt(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), i(s), e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                    }))
                }, e.kill = function() {
                    ai(this)
                }, t
            }();
        _e(Li.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Ci = function(t) {
            function e(e, i) {
                var s;
                return void 0 === e && (e = {}), (s = t.call(this, e, i) || this).labels = {}, s.smoothChildTiming = !!e.smoothChildTiming, s.autoRemoveChildren = !!e.autoRemoveChildren, s._sort = Ft(e.sortChildren), s.parent && Fe(s.parent, Y(s)), e.scrollTrigger && Ie(Y(s), e.scrollTrigger), s
            }
            V(e, t);
            var i = e.prototype;
            return i.to = function(t, e, i) {
                return new Ni(t, pe(arguments, 0, this), qe(this, Lt(e) ? arguments[3] : i)), this
            }, i.from = function(t, e, i) {
                return new Ni(t, pe(arguments, 1, this), qe(this, Lt(e) ? arguments[3] : i)), this
            }, i.fromTo = function(t, e, i, s) {
                return new Ni(t, pe(arguments, 2, this), qe(this, Lt(e) ? arguments[4] : s)), this
            }, i.set = function(t, e, i) {
                return e.duration = 0, e.parent = this, Me(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ni(t, e, qe(this, i), 1), this
            }, i.call = function(t, e, i) {
                return De(this, Ni.delayedCall(0, t, e), qe(this, i))
            }, i.staggerTo = function(t, e, i, s, r, n, a) {
                return i.duration = e, i.stagger = i.stagger || s, i.onComplete = n, i.onCompleteParams = a, i.parent = this, new Ni(t, i, qe(this, r)), this
            }, i.staggerFrom = function(t, e, i, s, r, n, a) {
                return i.runBackwards = 1, Me(i).immediateRender = Ft(i.immediateRender), this.staggerTo(t, e, i, s, r, n, a)
            }, i.staggerFromTo = function(t, e, i, s, r, n, a, o) {
                return s.startAt = i, Me(s).immediateRender = Ft(s.immediateRender), this.staggerTo(t, e, s, r, n, a, o)
            }, i.render = function(t, e, i) {
                var s, r, n, a, o, h, l, u, c, d, p, m, f = this._time,
                    g = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    _ = this !== W && t > g - bt && t >= 0 ? g : t < bt ? 0 : t,
                    y = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (_ !== this._tTime || i || y) {
                    if (f !== this._time && v && (_ += this._time - f, t += this._time - f), s = _, c = this._start, h = !(u = this._ts), y && (v || (f = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                        if (p = this._yoyo, o = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                        if (s = ce(_ % o), _ === g ? (a = this._repeat, s = v) : ((a = ~~(_ / o)) && a === _ / o && (s = v, a--), s > v && (s = v)), d = Pe(this._tTime, o), !f && this._tTime && d !== a && (d = a), p && 1 & a && (s = v - s, m = 1), a !== d && !this._lock) {
                            var x = p && 1 & d,
                                w = x === (p && 1 & a);
                            if (a < d && (x = !x), f = x ? 0 : v, this._lock = 1, this.render(f || (m ? 0 : ce(a * o)), e, !v)._lock = 0, !e && this.parent && ni(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), f && f !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (v = this._dur, g = this._tDur, w && (this._lock = 2, f = x ? v : -1e-4, this.render(f, !0)), this._lock = 0, !this._ts && !h) return this;
                            Ti(this, m)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, i) {
                            var s;
                            if (i > e)
                                for (s = t._first; s && s._start <= i;) {
                                    if (!s._dur && "isPause" === s.data && s._start > e) return s;
                                    s = s._next
                                } else
                                    for (s = t._last; s && s._start >= i;) {
                                        if (!s._dur && "isPause" === s.data && s._start < e) return s;
                                        s = s._prev
                                    }
                        }(this, ce(f), ce(s))) && (_ -= s - (s = l._start)), this._tTime = _, this._time = s, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, f = 0), !f && s && !e && ni(this, "onStart"), s >= f && t >= 0)
                        for (r = this._first; r;) {
                            if (n = r._next, (r._act || s >= r._start) && r._ts && l !== r) {
                                if (r.parent !== this) return this.render(t, e, i);
                                if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, e, i), s !== this._time || !this._ts && !h) {
                                    l = 0, n && (_ += this._zTime = -1e-8);
                                    break
                                }
                            }
                            r = n
                        } else {
                            r = this._last;
                            for (var b = t < 0 ? t : s; r;) {
                                if (n = r._prev, (r._act || b <= r._end) && r._ts && l !== r) {
                                    if (r.parent !== this) return this.render(t, e, i);
                                    if (r.render(r._ts > 0 ? (b - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (b - r._start) * r._ts, e, i), s !== this._time || !this._ts && !h) {
                                        l = 0, n && (_ += this._zTime = b ? -1e-8 : bt);
                                        break
                                    }
                                }
                                r = n
                            }
                        }
                    if (l && !e && (this.pause(), l.render(s >= f ? 0 : -1e-8)._zTime = s >= f ? 1 : -1, this._ts)) return this._start = c, Ce(this), this.render(t, e, i);
                    this._onUpdate && !e && ni(this, "onUpdate", !0), (_ === g && g >= this.totalDuration() || !_ && f) && (c !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !v) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && Ae(this, 1), e || t < 0 && !f || !_ && !f || (ni(this, _ === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < g && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, i.add = function(t, e) {
                var i = this;
                if (Lt(e) || (e = qe(this, e)), !(t instanceof Li)) {
                    if (jt(t)) return t.forEach((function(t) {
                        return i.add(t, e)
                    })), this;
                    if (zt(t)) return this.addLabel(t, e);
                    if (!Pt(t)) return this;
                    t = Ni.delayedCall(0, t)
                }
                return this !== t ? De(this, t, e) : this
            }, i.getChildren = function(t, e, i, s) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === s && (s = -wt);
                for (var r = [], n = this._first; n;) n._start >= s && (n instanceof Ni ? e && r.push(n) : (i && r.push(n), t && r.push.apply(r, n.getChildren(!0, e, i)))), n = n._next;
                return r
            }, i.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                    if (e[i].vars.id === t) return e[i]
            }, i.remove = function(t) {
                return zt(t) ? this.removeLabel(t) : Pt(t) ? this.killTweensOf(t) : (Te(this, t), t === this._recent && (this._recent = this._last), Ee(this))
            }, i.totalTime = function(e, i) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ce(vi.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
            }, i.addLabel = function(t, e) {
                return this.labels[t] = qe(this, e), this
            }, i.removeLabel = function(t) {
                return delete this.labels[t], this
            }, i.addPause = function(t, e, i) {
                var s = Ni.delayedCall(0, e || Kt, i);
                return s.data = "isPause", this._hasPause = 1, De(this, s, qe(this, t))
            }, i.removePause = function(t) {
                var e = this._first;
                for (t = qe(this, t); e;) e._start === t && "isPause" === e.data && Ae(e), e = e._next
            }, i.killTweensOf = function(t, e, i) {
                for (var s = this.getTweensOf(t, i), r = s.length; r--;) Ri !== s[r] && s[r].kill(t, e);
                return this
            }, i.getTweensOf = function(t, e) {
                for (var i, s = [], r = $e(t), n = this._first, a = Lt(e); n;) n instanceof Ni ? de(n._targets, r) && (a ? (!Ri || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && s.push(n) : (i = n.getTweensOf(r, e)).length && s.push.apply(s, i), n = n._next;
                return s
            }, i.tweenTo = function(t, e) {
                e = e || {};
                var i = this,
                    s = qe(i, t),
                    r = e,
                    n = r.startAt,
                    a = r.onStart,
                    o = r.onStartParams,
                    h = r.immediateRender,
                    l = Ni.to(i, _e({
                        ease: e.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: s,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((s - (n && "time" in n ? n.time : i._time)) / i.timeScale()) || bt,
                        onStart: function() {
                            i.pause();
                            var t = e.duration || Math.abs((s - i._time) / i.timeScale());
                            l._dur !== t && Be(l, t, 0, 1).render(l._time, !0, !0), a && a.apply(l, o || [])
                        }
                    }, e));
                return h ? l.render(0) : l
            }, i.tweenFromTo = function(t, e, i) {
                return this.tweenTo(e, _e({
                    startAt: {
                        time: qe(this, t)
                    }
                }, i))
            }, i.recent = function() {
                return this._recent
            }, i.nextLabel = function(t) {
                return void 0 === t && (t = this._time), ri(this, qe(this, t))
            }, i.previousLabel = function(t) {
                return void 0 === t && (t = this._time), ri(this, qe(this, t), 1)
            }, i.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + bt)
            }, i.shiftChildren = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var s, r = this._first, n = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return Ee(this)
            }, i.invalidate = function() {
                var e = this._first;
                for (this._lock = 0; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, i.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ee(this)
            }, i.totalDuration = function(t) {
                var e, i, s, r = 0,
                    n = this,
                    a = n._last,
                    o = wt;
                if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -t : t));
                if (n._dirty) {
                    for (s = n.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && n._sort && a._ts && !n._lock ? (n._lock = 1, De(n, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (r -= i, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += i / n._ts, n._time -= i, n._tTime -= i), n.shiftChildren(-i, !1, -Infinity), o = 0), a._end > r && a._ts && (r = a._end), a = e;
                    Be(n, n === W && n._time > r ? n._time : r, 1, 1), n._dirty = 0
                }
                return n._tDur
            }, e.updateRoot = function(t) {
                if (W._ts && (fe(W, Le(t, W)), Q = vi.frame), vi.frame >= re) {
                    re += yt.autoSleep || 120;
                    var e = W._first;
                    if ((!e || !e._ts) && yt.autoSleep && vi._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || vi.sleep()
                    }
                }
            }, e
        }(Li);
        _e(Ci.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Ri, Fi = function(t, e, i, s, r, n, a) {
                var o, h, l, u, c, d, p, m, f = new es(this._pt, t, e, 0, 1, $i, null, r),
                    g = 0,
                    v = 0;
                for (f.b = i, f.e = s, i += "", (p = ~(s += "").indexOf("random(")) && (s = ii(s)), n && (n(m = [i, s], t, e), i = m[0], s = m[1]), h = i.match(qt) || []; o = qt.exec(s);) u = o[0], c = s.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), u !== h[v++] && (d = parseFloat(h[v - 1]) || 0, f._pt = {
                    _next: f._pt,
                    p: c || 1 === v ? c : ",",
                    s: d,
                    c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - d,
                    m: l && l < 4 ? Math.round : 0
                }, g = qt.lastIndex);
                return f.c = g < s.length ? s.substring(g, s.length) : "", f.fp = a, (Yt.test(s) || p) && (f.e = 0), this._pt = f, f
            },
            Di = function(t, e, i, s, r, n, a, o, h) {
                Pt(s) && (s = s(r || 0, t, n));
                var l, u = t[e],
                    c = "get" !== i ? i : Pt(u) ? h ? t[e.indexOf("set") || !Pt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : u,
                    d = Pt(u) ? h ? Vi : Yi : qi;
                if (zt(s) && (~s.indexOf("random(") && (s = ii(s)), "=" === s.charAt(1) && (s = parseFloat(c) + parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) + (Xe(c) || 0))), c !== s) return isNaN(c * s) ? (!u && !(e in t) && $t(e, s), Fi.call(this, t, e, c, s, d, o || yt.stringFilter, h)) : (l = new es(this._pt, t, e, +c || 0, s - (c || 0), "boolean" == typeof u ? Hi : Gi, 0, d), h && (l.fp = h), a && l.modifier(a, this, t), this._pt = l)
            },
            Ii = function(t, e, i, s, r, n) {
                var a, o, h, l;
                if (ie[t] && !1 !== (a = new ie[t]).init(r, a.rawVars ? e[t] : function(t, e, i, s, r) {
                        if (Pt(t) && (t = ji(t, r, e, i, s)), !Rt(t) || t.style && t.nodeType || jt(t) || kt(t)) return zt(t) ? ji(t, r, e, i, s) : t;
                        var n, a = {};
                        for (n in t) a[n] = ji(t[n], r, e, i, s);
                        return a
                    }(e[t], s, r, n, i), i, s, n) && (i._pt = o = new es(i._pt, r, t, 0, 1, a.render, a, 0, a.priority), i !== K))
                    for (h = i._ptLookup[i._targets.indexOf(r)], l = a._props.length; l--;) h[a._props[l]] = o;
                return a
            },
            ki = function t(e, i) {
                var s, r, n, a, o, h, l, u, c, d, p, m, f, g = e.vars,
                    v = g.ease,
                    _ = g.startAt,
                    y = g.immediateRender,
                    x = g.lazy,
                    w = g.onUpdate,
                    b = g.onUpdateParams,
                    M = g.callbackScope,
                    T = g.runBackwards,
                    A = g.yoyoEase,
                    E = g.keyframes,
                    S = g.autoRevert,
                    O = e._dur,
                    z = e._startAt,
                    P = e._targets,
                    L = e.parent,
                    C = L && "nested" === L.data ? L.parent._targets : P,
                    R = "auto" === e._overwrite && !X,
                    F = e.timeline;
                if (F && (!E || !v) && (v = "none"), e._ease = Ai(v, xt.ease), e._yEase = A ? Mi(Ai(!0 === A ? v : A, xt.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), !F) {
                    if (m = (u = P[0] ? he(P[0]).harness : 0) && g[u.prop], s = be(g, Jt), z && z.render(-1, !0).kill(), _)
                        if (Ae(e._startAt = Ni.set(P, _e({
                                data: "isStart",
                                overwrite: !1,
                                parent: L,
                                immediateRender: !0,
                                lazy: Ft(x),
                                startAt: null,
                                delay: 0,
                                onUpdate: w,
                                onUpdateParams: b,
                                callbackScope: M,
                                stagger: 0
                            }, _))), y) {
                            if (i > 0) S || (e._startAt = 0);
                            else if (O && !(i < 0 && z)) return void(i && (e._zTime = i))
                        } else !1 === S && (e._startAt = 0);
                    else if (T && O)
                        if (z) !S && (e._startAt = 0);
                        else if (i && (y = !1), n = _e({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && Ft(x),
                            immediateRender: y,
                            stagger: 0,
                            parent: L
                        }, s), m && (n[u.prop] = m), Ae(e._startAt = Ni.set(P, n)), y) {
                        if (!i) return
                    } else t(e._startAt, bt);
                    for (e._pt = 0, x = O && Ft(x) || x && !O, r = 0; r < P.length; r++) {
                        if (l = (o = P[r])._gsap || oe(P)[r]._gsap, e._ptLookup[r] = d = {}, ee[l.id] && te.length && me(), p = C === P ? r : C.indexOf(o), u && !1 !== (c = new u).init(o, m || s, e, p, C) && (e._pt = a = new es(e._pt, o, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function(t) {
                                d[t] = a
                            })), c.priority && (h = 1)), !u || m)
                            for (n in s) ie[n] && (c = Ii(n, s, e, p, o, C)) ? c.priority && (h = 1) : d[n] = a = Di.call(e, o, n, "get", s[n], p, C, 0, g.stringFilter);
                        e._op && e._op[r] && e.kill(o, e._op[r]), R && e._pt && (Ri = e, W.killTweensOf(o, d, e.globalTime(0)), f = !e.parent, Ri = 0), e._pt && x && (ee[l.id] = 1)
                    }
                    h && ts(e), e._onInit && e._onInit(e)
                }
                e._from = !F && !!g.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !f
            },
            ji = function(t, e, i, s, r) {
                return Pt(t) ? t.call(e, i, s, r) : zt(t) && ~t.indexOf("random(") ? ii(t) : t
            },
            Bi = ae + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            Ui = (Bi + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
            Ni = function(t) {
                function e(e, i, s, r) {
                    var n;
                    "number" == typeof i && (s.duration = i, i = s, s = null);
                    var a, o, h, l, u, c, d, p, m = (n = t.call(this, r ? i : Me(i), s) || this).vars,
                        f = m.duration,
                        g = m.delay,
                        v = m.immediateRender,
                        _ = m.stagger,
                        y = m.overwrite,
                        x = m.keyframes,
                        w = m.defaults,
                        b = m.scrollTrigger,
                        M = m.yoyoEase,
                        T = n.parent,
                        A = (jt(e) || kt(e) ? Lt(e[0]) : "length" in i) ? [e] : $e(e);
                    if (n._targets = A.length ? oe(A) : Zt("GSAP target " + e + " not found. https://greensock.com", !yt.nullTargetWarn) || [], n._ptLookup = [], n._overwrite = y, x || _ || It(f) || It(g)) {
                        if (i = n.vars, (a = n.timeline = new Ci({
                                data: "nested",
                                defaults: w || {}
                            })).kill(), a.parent = a._dp = Y(n), a._start = 0, x) _e(a.vars.defaults, {
                            ease: "none"
                        }), x.forEach((function(t) {
                            return a.to(A, t, ">")
                        }));
                        else {
                            if (l = A.length, d = _ ? Qe(_) : Kt, Rt(_))
                                for (u in _) ~Bi.indexOf(u) && (p || (p = {}), p[u] = _[u]);
                            for (o = 0; o < l; o++) {
                                for (u in h = {}, i) Ui.indexOf(u) < 0 && (h[u] = i[u]);
                                h.stagger = 0, M && (h.yoyoEase = M), p && xe(h, p), c = A[o], h.duration = +ji(f, Y(n), o, c, A), h.delay = (+ji(g, Y(n), o, c, A) || 0) - n._delay, !_ && 1 === l && h.delay && (n._delay = g = h.delay, n._start += g, h.delay = 0), a.to(c, h, d(o, c, A))
                            }
                            a.duration() ? f = g = 0 : n.timeline = 0
                        }
                        f || n.duration(f = a.duration())
                    } else n.timeline = 0;
                    return !0 !== y || X || (Ri = Y(n), W.killTweensOf(A), Ri = 0), T && Fe(T, Y(n)), (v || !f && !x && n._start === ce(T._time) && Ft(v) && Oe(Y(n)) && "nested" !== T.data) && (n._tTime = -1e-8, n.render(Math.max(0, -g))), b && Ie(Y(n), b), n
                }
                V(e, t);
                var i = e.prototype;
                return i.render = function(t, e, i) {
                    var s, r, n, a, o, h, l, u, c, d = this._time,
                        p = this._tDur,
                        m = this._dur,
                        f = t > p - bt && t >= 0 ? p : t < bt ? 0 : t;
                    if (m) {
                        if (f !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                            if (s = f, u = this.timeline, this._repeat) {
                                if (a = m + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                                if (s = ce(f % a), f === p ? (n = this._repeat, s = m) : ((n = ~~(f / a)) && n === f / a && (s = m, n--), s > m && (s = m)), (h = this._yoyo && 1 & n) && (c = this._yEase, s = m - s), o = Pe(this._tTime, a), s === d && !i && this._initted) return this;
                                n !== o && (u && this._yEase && Ti(u, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(ce(a * n), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (ke(this, t < 0 ? t : s, i, e)) return this._tTime = 0, this;
                                if (m !== this._dur) return this.render(t, e, i)
                            }
                            for (this._tTime = f, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(s / m), this._from && (this.ratio = l = 1 - l), s && !d && !e && ni(this, "onStart"), r = this._pt; r;) r.r(l, r.d), r = r._next;
                            u && u.render(t < 0 ? t : !s && h ? -1e-8 : u._dur * l, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), ni(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !e && this.parent && ni(this, "onRepeat"), f !== this._tDur && f || this._tTime !== f || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !m) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ae(this, 1), e || t < 0 && !d || !f && !d || (ni(this, f === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < p && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function(t, e, i, s) {
                        var r, n, a, o = t.ratio,
                            h = e < 0 || !e && (!t._start && je(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                            l = t._rDelay,
                            u = 0;
                        if (l && t._repeat && (u = Ve(0, t._tDur, e), n = Pe(u, l), a = Pe(t._tTime, l), t._yoyo && 1 & n && (h = 1 - h), n !== a && (o = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== o || s || t._zTime === bt || !e && t._zTime) {
                            if (!t._initted && ke(t, e, s, i)) return;
                            for (a = t._zTime, t._zTime = e || (i ? bt : 0), i || (i = e && !a), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = u, r = t._pt; r;) r.r(h, r.d), r = r._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && ni(t, "onUpdate"), u && t._repeat && !i && t.parent && ni(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Ae(t, 1), i || (ni(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, i);
                    return this
                }, i.targets = function() {
                    return this._targets
                }, i.invalidate = function() {
                    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                }, i.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ai(this) : this;
                    if (this.timeline) {
                        var i = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, Ri && !0 !== Ri.vars.overwrite)._first || ai(this), this.parent && i !== this.timeline.totalDuration() && Be(this, this._dur * this.timeline._tDur / i, 0, 1), this
                    }
                    var s, r, n, a, o, h, l, u = this._targets,
                        c = t ? $e(t) : u,
                        d = this._ptLookup,
                        p = this._pt;
                    if ((!e || "all" === e) && function(t, e) {
                            for (var i = t.length, s = i === e.length; s && i-- && t[i] === e[i];);
                            return i < 0
                        }(u, c)) return "all" === e && (this._pt = 0), ai(this);
                    for (s = this._op = this._op || [], "all" !== e && (zt(e) && (o = {}, ue(e, (function(t) {
                            return o[t] = 1
                        })), e = o), e = function(t, e) {
                            var i, s, r, n, a = t[0] ? he(t[0]).harness : 0,
                                o = a && a.aliases;
                            if (!o) return e;
                            for (s in i = xe({}, e), o)
                                if (s in i)
                                    for (r = (n = o[s].split(",")).length; r--;) i[n[r]] = i[s];
                            return i
                        }(u, e)), l = u.length; l--;)
                        if (~c.indexOf(u[l]))
                            for (o in r = d[l], "all" === e ? (s[l] = e, a = r, n = {}) : (n = s[l] = s[l] || {}, a = e), a)(h = r && r[o]) && ("kill" in h.d && !0 !== h.d.kill(o) || Te(this, h, "_pt"), delete r[o]), "all" !== n && (n[o] = 1);
                    return this._initted && !this._pt && p && ai(this), this
                }, e.to = function(t, i) {
                    return new e(t, i, arguments[2])
                }, e.from = function(t, i) {
                    return new e(t, pe(arguments, 1))
                }, e.delayedCall = function(t, i, s, r) {
                    return new e(i, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: i,
                        onReverseComplete: i,
                        onCompleteParams: s,
                        onReverseCompleteParams: s,
                        callbackScope: r
                    })
                }, e.fromTo = function(t, i, s) {
                    return new e(t, pe(arguments, 2))
                }, e.set = function(t, i) {
                    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
                }, e.killTweensOf = function(t, e, i) {
                    return W.killTweensOf(t, e, i)
                }, e
            }(Li);
        _e(Ni.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), ue("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            Ni[t] = function() {
                var e = new Ci,
                    i = We.call(arguments, 0);
                return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            }
        }));
        var qi = function(t, e, i) {
                return t[e] = i
            },
            Yi = function(t, e, i) {
                return t[e](i)
            },
            Vi = function(t, e, i, s) {
                return t[e](s.fp, i)
            },
            Xi = function(t, e, i) {
                return t.setAttribute(e, i)
            },
            Wi = function(t, e) {
                return Pt(t[e]) ? Yi : Ct(t[e]) && t.setAttribute ? Xi : qi
            },
            Gi = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
            },
            Hi = function(t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            $i = function(t, e) {
                var i = e._pt,
                    s = "";
                if (!t && e.b) s = e.b;
                else if (1 === t && e.e) s = e.e;
                else {
                    for (; i;) s = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + s, i = i._next;
                    s += e.c
                }
                e.set(e.t, e.p, s, e)
            },
            Zi = function(t, e) {
                for (var i = e._pt; i;) i.r(t, i.d), i = i._next
            },
            Qi = function(t, e, i, s) {
                for (var r, n = this._pt; n;) r = n._next, n.p === s && n.modifier(t, e, i), n = r
            },
            Ki = function(t) {
                for (var e, i, s = this._pt; s;) i = s._next, s.p === t && !s.op || s.op === t ? Te(this, s, "_pt") : s.dep || (e = 1), s = i;
                return !e
            },
            Ji = function(t, e, i, s) {
                s.mSet(t, e, s.m.call(s.tween, i, s.mt), s)
            },
            ts = function(t) {
                for (var e, i, s, r, n = t._pt; n;) {
                    for (e = n._next, i = s; i && i.pr > n.pr;) i = i._next;
                    (n._prev = i ? i._prev : r) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : r = n, n = e
                }
                t._pt = s
            },
            es = function() {
                function t(t, e, i, s, r, n, a, o, h) {
                    this.t = e, this.s = s, this.c = r, this.p = i, this.r = n || Gi, this.d = a || this, this.set = o || qi, this.pr = h || 0, this._next = t, t && (t._prev = this)
                }
                return t.prototype.modifier = function(t, e, i) {
                    this.mSet = this.mSet || this.set, this.set = Ji, this.m = t, this.mt = i, this.tween = e
                }, t
            }();
        ue(ae + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
            return Jt[t] = 1
        })), Wt.TweenMax = Wt.TweenLite = Ni, Wt.TimelineLite = Wt.TimelineMax = Ci, W = new Ci({
            sortChildren: !1,
            defaults: xt,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), yt.stringFilter = gi;
        var is = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach((function(t) {
                    return oi(t)
                }))
            },
            timeline: function(t) {
                return new Ci(t)
            },
            getTweensOf: function(t, e) {
                return W.getTweensOf(t, e)
            },
            getProperty: function(t, e, i, s) {
                zt(t) && (t = $e(t)[0]);
                var r = he(t || {}).get,
                    n = i ? ve : ge;
                return "native" === i && (i = ""), t ? e ? n((ie[e] && ie[e].get || r)(t, e, i, s)) : function(e, i, s) {
                    return n((ie[e] && ie[e].get || r)(t, e, i, s))
                } : t
            },
            quickSetter: function(t, e, i) {
                if ((t = $e(t)).length > 1) {
                    var s = t.map((function(t) {
                            return ns.quickSetter(t, e, i)
                        })),
                        r = s.length;
                    return function(t) {
                        for (var e = r; e--;) s[e](t)
                    }
                }
                t = t[0] || {};
                var n = ie[e],
                    a = he(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    h = n ? function(e) {
                        var s = new n;
                        K._pt = 0, s.init(t, i ? e + i : e, K, 0, [t]), s.render(1, s), K._pt && Zi(1, K)
                    } : a.set(t, o);
                return n ? h : function(e) {
                    return h(t, o, i ? e + i : e, a, 1)
                }
            },
            isTweening: function(t) {
                return W.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Ai(t.ease, xt.ease)), we(xt, t || {})
            },
            config: function(t) {
                return we(yt, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    i = t.effect,
                    s = t.plugins,
                    r = t.defaults,
                    n = t.extendTimeline;
                (s || "").split(",").forEach((function(t) {
                    return t && !ie[t] && !Wt[t] && Zt(e + " effect requires " + t + " plugin.")
                })), se[e] = function(t, e, s) {
                    return i($e(t), _e(e || {}, r), s)
                }, n && (Ci.prototype[e] = function(t, i, s) {
                    return this.add(se[e](t, Rt(i) ? i : (s = i) && {}, this), s)
                })
            },
            registerEase: function(t, e) {
                yi[t] = Ai(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Ai(t, e) : yi
            },
            getById: function(t) {
                return W.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var i, s, r = new Ci(t);
                for (r.smoothChildTiming = Ft(t.smoothChildTiming), W.remove(r), r._dp = 0, r._time = r._tTime = W._time, i = W._first; i;) s = i._next, !e && !i._dur && i instanceof Ni && i.vars.onComplete === i._targets[0] || De(r, i, i._start - i._delay), i = s;
                return De(W, r, 0), r
            },
            utils: {
                wrap: function t(e, i, s) {
                    var r = i - e;
                    return jt(e) ? ei(e, t(0, e.length), i) : Ye(s, (function(t) {
                        return (r + (t - e) % r) % r + e
                    }))
                },
                wrapYoyo: function t(e, i, s) {
                    var r = i - e,
                        n = 2 * r;
                    return jt(e) ? ei(e, t(0, e.length - 1), i) : Ye(s, (function(t) {
                        return e + ((t = (n + (t - e) % n) % n || 0) > r ? n - t : t)
                    }))
                },
                distribute: Qe,
                random: ti,
                snap: Je,
                normalize: function(t, e, i) {
                    return si(t, e, 0, 1, i)
                },
                getUnit: Xe,
                clamp: function(t, e, i) {
                    return Ye(i, (function(i) {
                        return Ve(t, e, i)
                    }))
                },
                splitColor: ci,
                toArray: $e,
                mapRange: si,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function(t, e) {
                    return function(i) {
                        return t(parseFloat(i)) + (e || Xe(i))
                    }
                },
                interpolate: function t(e, i, s, r) {
                    var n = isNaN(e + i) ? 0 : function(t) {
                        return (1 - t) * e + t * i
                    };
                    if (!n) {
                        var a, o, h, l, u, c = zt(e),
                            d = {};
                        if (!0 === s && (r = 1) && (s = null), c) e = {
                            p: e
                        }, i = {
                            p: i
                        };
                        else if (jt(e) && !jt(i)) {
                            for (h = [], l = e.length, u = l - 2, o = 1; o < l; o++) h.push(t(e[o - 1], e[o]));
                            l--, n = function(t) {
                                t *= l;
                                var e = Math.min(u, ~~t);
                                return h[e](t - e)
                            }, s = i
                        } else r || (e = xe(jt(e) ? [] : {}, e));
                        if (!h) {
                            for (a in i) Di.call(d, e, a, "get", i[a]);
                            n = function(t) {
                                return Zi(t, d) || (c ? e.p : e)
                            }
                        }
                    }
                    return Ye(s, n)
                },
                shuffle: Ze
            },
            install: Ht,
            effects: se,
            ticker: vi,
            updateRoot: Ci.updateRoot,
            plugins: ie,
            globalTimeline: W,
            core: {
                PropTween: es,
                globals: Qt,
                Tween: Ni,
                Timeline: Ci,
                Animation: Li,
                getCache: he,
                _removeLinkedListItem: Te,
                suppressOverwrites: function(t) {
                    return X = t
                }
            }
        };
        ue("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return is[t] = Ni[t]
        })), vi.add(Ci.updateRoot), K = is.to({}, {
            duration: 0
        });
        var ss = function(t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i
            },
            rs = function(t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function(t, i, s) {
                        s._onInit = function(t) {
                            var s, r;
                            if (zt(i) && (s = {}, ue(i, (function(t) {
                                    return s[t] = 1
                                })), i = s), e) {
                                for (r in s = {}, i) s[r] = e(i[r]);
                                i = s
                            }! function(t, e) {
                                var i, s, r, n = t._targets;
                                for (i in e)
                                    for (s = n.length; s--;)(r = t._ptLookup[s][i]) && (r = r.d) && (r._pt && (r = ss(r, i)), r && r.modifier && r.modifier(e[i], t, n[s], i))
                            }(t, i)
                        }
                    }
                }
            },
            ns = is.registerPlugin({
                name: "attr",
                init: function(t, e, i, s, r) {
                    var n, a;
                    for (n in e)(a = this.add(t, "setAttribute", (t.getAttribute(n) || 0) + "", e[n], s, r, 0, 0, n)) && (a.op = n), this._props.push(n)
                }
            }, {
                name: "endArray",
                init: function(t, e) {
                    for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
                }
            }, rs("roundProps", Ke), rs("modifiers"), rs("snap", Je)) || is;
        Ni.version = Ci.version = ns.version = "3.6.1", Z = 1, Dt() && _i();
        yi.Power0, yi.Power1, yi.Power2, yi.Power3, yi.Power4, yi.Linear, yi.Quad, yi.Cubic, yi.Quart, yi.Quint, yi.Strong, yi.Elastic, yi.Back, yi.SteppedEase, yi.Bounce, yi.Sine, yi.Expo, yi.Circ;
        var as, os, hs, ls, us, cs, ds, ps = {},
            ms = 180 / Math.PI,
            fs = Math.PI / 180,
            gs = Math.atan2,
            vs = /([A-Z])/g,
            _s = /(?:left|right|width|margin|padding|x)/i,
            ys = /[\s,\(]\S/,
            xs = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            ws = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            bs = function(t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Ms = function(t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            },
            Ts = function(t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
            },
            As = function(t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            Es = function(t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            },
            Ss = function(t, e, i) {
                return t.style[e] = i
            },
            Os = function(t, e, i) {
                return t.style.setProperty(e, i)
            },
            zs = function(t, e, i) {
                return t._gsap[e] = i
            },
            Ps = function(t, e, i) {
                return t._gsap.scaleX = t._gsap.scaleY = i
            },
            Ls = function(t, e, i, s, r) {
                var n = t._gsap;
                n.scaleX = n.scaleY = i, n.renderTransform(r, n)
            },
            Cs = function(t, e, i, s, r) {
                var n = t._gsap;
                n[e] = i, n.renderTransform(r, n)
            },
            Rs = "transform",
            Fs = Rs + "Origin",
            Ds = function(t, e) {
                var i = os.createElementNS ? os.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : os.createElement(t);
                return i.style ? i : os.createElement(t)
            },
            Is = function t(e, i, s) {
                var r = getComputedStyle(e);
                return r[i] || r.getPropertyValue(i.replace(vs, "-$1").toLowerCase()) || r.getPropertyValue(i) || !s && t(e, js(i) || i, 1) || ""
            },
            ks = "O,Moz,ms,Ms,Webkit".split(","),
            js = function(t, e, i) {
                var s = (e || us).style,
                    r = 5;
                if (t in s && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(ks[r] + t in s););
                return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? ks[r] : "") + t
            },
            Bs = function() {
                "undefined" != typeof window && window.document && (as = window, os = as.document, hs = os.documentElement, us = Ds("div") || {
                    style: {}
                }, Ds("div"), Rs = js(Rs), Fs = Rs + "Origin", us.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ds = !!js("perspective"), ls = 1)
            },
            Us = function t(e) {
                var i, s = Ds("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    n = this.nextSibling,
                    a = this.style.cssText;
                if (hs.appendChild(s), s.appendChild(this), this.style.display = "block", e) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), hs.removeChild(s), this.style.cssText = a, i
            },
            Ns = function(t, e) {
                for (var i = e.length; i--;)
                    if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
            },
            qs = function(t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (i) {
                    e = Us.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === Us || (e = Us.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                    x: +Ns(t, ["x", "cx", "x1"]) || 0,
                    y: +Ns(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            Ys = function(t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !qs(t))
            },
            Vs = function(t, e) {
                if (e) {
                    var i = t.style;
                    e in ps && e !== Fs && (e = Rs), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(vs, "-$1").toLowerCase())) : i.removeAttribute(e)
                }
            },
            Xs = function(t, e, i, s, r, n) {
                var a = new es(t._pt, e, i, 0, 1, n ? Es : As);
                return t._pt = a, a.b = s, a.e = r, t._props.push(i), a
            },
            Ws = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            Gs = function t(e, i, s, r) {
                var n, a, o, h, l = parseFloat(s) || 0,
                    u = (s + "").trim().substr((l + "").length) || "px",
                    c = us.style,
                    d = _s.test(i),
                    p = "svg" === e.tagName.toLowerCase(),
                    m = (p ? "client" : "offset") + (d ? "Width" : "Height"),
                    f = 100,
                    g = "px" === r,
                    v = "%" === r;
                return r === u || !l || Ws[r] || Ws[u] ? l : ("px" !== u && !g && (l = t(e, i, s, "px")), h = e.getCTM && Ys(e), !v && "%" !== u || !ps[i] && !~i.indexOf("adius") ? (c[d ? "width" : "height"] = f + (g ? u : r), a = ~i.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, h && (a = (e.ownerSVGElement || {}).parentNode), a && a !== os && a.appendChild || (a = os.body), (o = a._gsap) && v && o.width && d && o.time === vi.time ? ce(l / o.width * f) : ((v || "%" === u) && (c.position = Is(e, "position")), a === e && (c.position = "static"), a.appendChild(us), n = us[m], a.removeChild(us), c.position = "absolute", d && v && ((o = he(a)).time = vi.time, o.width = a[m]), ce(g ? n * l / f : n && l ? f / n * l : 0))) : (n = h ? e.getBBox()[d ? "width" : "height"] : e[m], ce(v ? l / n * f : l / 100 * n)))
            },
            Hs = function(t, e, i, s) {
                var r;
                return ls || Bs(), e in xs && "transform" !== e && ~(e = xs[e]).indexOf(",") && (e = e.split(",")[0]), ps[e] && "transform" !== e ? (r = ar(t, s), r = "transformOrigin" !== e ? r[e] : or(Is(t, Fs)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = Js[e] && Js[e](t, e, i) || Is(t, e) || le(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? Gs(t, e, r, i) + i : r
            },
            $s = function(t, e, i, s) {
                if (!i || "none" === i) {
                    var r = js(e, t, 1),
                        n = r && Is(t, r, 1);
                    n && n !== i ? (e = r, i = n) : "borderColor" === e && (i = Is(t, "borderTopColor"))
                }
                var a, o, h, l, u, c, d, p, m, f, g, v, _ = new es(this._pt, t.style, e, 0, 1, $i),
                    y = 0,
                    x = 0;
                if (_.b = i, _.e = s, i += "", "auto" === (s += "") && (t.style[e] = s, s = Is(t, e) || s, t.style[e] = i), gi(a = [i, s]), s = a[1], h = (i = a[0]).match(Nt) || [], (s.match(Nt) || []).length) {
                    for (; o = Nt.exec(s);) d = o[0], m = s.substring(y, o.index), u ? u = (u + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (u = 1), d !== (c = h[x++] || "") && (l = parseFloat(c) || 0, g = c.substr((l + "").length), (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), f = d.substr((p + "").length), y = Nt.lastIndex - f.length, f || (f = f || yt.units[e] || g, y === s.length && (s += f, _.e += f)), g !== f && (l = Gs(t, e, c, f) || 0), _._pt = {
                        _next: _._pt,
                        p: m || 1 === x ? m : ",",
                        s: l,
                        c: v ? v * p : p - l,
                        m: u && u < 4 || "zIndex" === e ? Math.round : 0
                    });
                    _.c = y < s.length ? s.substring(y, s.length) : ""
                } else _.r = "display" === e && "none" === s ? Es : As;
                return Yt.test(s) && (_.e = 0), this._pt = _, _
            },
            Zs = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            Qs = function(t) {
                var e = t.split(" "),
                    i = e[0],
                    s = e[1] || "50%";
                return "top" !== i && "bottom" !== i && "left" !== s && "right" !== s || (t = i, i = s, s = t), e[0] = Zs[i] || i, e[1] = Zs[s] || s, e.join(" ")
            },
            Ks = function(t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i, s, r, n = e.t,
                        a = n.style,
                        o = e.u,
                        h = n._gsap;
                    if ("all" === o || !0 === o) a.cssText = "", s = 1;
                    else
                        for (r = (o = o.split(",")).length; --r > -1;) i = o[r], ps[i] && (s = 1, i = "transformOrigin" === i ? Fs : Rs), Vs(n, i);
                    s && (Vs(n, Rs), h && (h.svg && n.removeAttribute("transform"), ar(n, 1), h.uncache = 1))
                }
            },
            Js = {
                clearProps: function(t, e, i, s, r) {
                    if ("isFromStart" !== r.data) {
                        var n = t._pt = new es(t._pt, e, i, 0, 0, Ks);
                        return n.u = s, n.pr = -10, n.tween = r, t._props.push(i), 1
                    }
                }
            },
            tr = [1, 0, 0, 1, 0, 0],
            er = {},
            ir = function(t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            },
            sr = function(t) {
                var e = Is(t, Rs);
                return ir(e) ? tr : e.substr(7).match(Ut).map(ce)
            },
            rr = function(t, e) {
                var i, s, r, n, a = t._gsap || he(t),
                    o = t.style,
                    h = sr(t);
                return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? tr : h : (h !== tr || t.offsetParent || t === hs || a.svg || (r = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (n = 1, s = t.nextSibling, hs.appendChild(t)), h = sr(t), r ? o.display = r : Vs(t, "display"), n && (s ? i.insertBefore(t, s) : i ? i.appendChild(t) : hs.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
            },
            nr = function(t, e, i, s, r, n) {
                var a, o, h, l = t._gsap,
                    u = r || rr(t, !0),
                    c = l.xOrigin || 0,
                    d = l.yOrigin || 0,
                    p = l.xOffset || 0,
                    m = l.yOffset || 0,
                    f = u[0],
                    g = u[1],
                    v = u[2],
                    _ = u[3],
                    y = u[4],
                    x = u[5],
                    w = e.split(" "),
                    b = parseFloat(w[0]) || 0,
                    M = parseFloat(w[1]) || 0;
                i ? u !== tr && (o = f * _ - g * v) && (h = b * (-g / o) + M * (f / o) - (f * x - g * y) / o, b = b * (_ / o) + M * (-v / o) + (v * x - _ * y) / o, M = h) : (b = (a = qs(t)).x + (~w[0].indexOf("%") ? b / 100 * a.width : b), M = a.y + (~(w[1] || w[0]).indexOf("%") ? M / 100 * a.height : M)), s || !1 !== s && l.smooth ? (y = b - c, x = M - d, l.xOffset = p + (y * f + x * v) - y, l.yOffset = m + (y * g + x * _) - x) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin = M, l.smooth = !!s, l.origin = e, l.originIsAbsolute = !!i, t.style[Fs] = "0px 0px", n && (Xs(n, l, "xOrigin", c, b), Xs(n, l, "yOrigin", d, M), Xs(n, l, "xOffset", p, l.xOffset), Xs(n, l, "yOffset", m, l.yOffset)), t.setAttribute("data-svg-origin", b + " " + M)
            },
            ar = function(t, e) {
                var i = t._gsap || new Pi(t);
                if ("x" in i && !e && !i.uncache) return i;
                var s, r, n, a, o, h, l, u, c, d, p, m, f, g, v, _, y, x, w, b, M, T, A, E, S, O, z, P, L, C, R, F, D = t.style,
                    I = i.scaleX < 0,
                    k = "px",
                    j = "deg",
                    B = Is(t, Fs) || "0";
                return s = r = n = h = l = u = c = d = p = 0, a = o = 1, i.svg = !(!t.getCTM || !Ys(t)), g = rr(t, i.svg), i.svg && (E = !i.uncache && !e && t.getAttribute("data-svg-origin"), nr(t, E || B, !!E || i.originIsAbsolute, !1 !== i.smooth, g)), m = i.xOrigin || 0, f = i.yOrigin || 0, g !== tr && (x = g[0], w = g[1], b = g[2], M = g[3], s = T = g[4], r = A = g[5], 6 === g.length ? (a = Math.sqrt(x * x + w * w), o = Math.sqrt(M * M + b * b), h = x || w ? gs(w, x) * ms : 0, (c = b || M ? gs(b, M) * ms + h : 0) && (o *= Math.abs(Math.cos(c * fs))), i.svg && (s -= m - (m * x + f * b), r -= f - (m * w + f * M))) : (F = g[6], C = g[7], z = g[8], P = g[9], L = g[10], R = g[11], s = g[12], r = g[13], n = g[14], l = (v = gs(F, L)) * ms, v && (E = T * (_ = Math.cos(-v)) + z * (y = Math.sin(-v)), S = A * _ + P * y, O = F * _ + L * y, z = T * -y + z * _, P = A * -y + P * _, L = F * -y + L * _, R = C * -y + R * _, T = E, A = S, F = O), u = (v = gs(-b, L)) * ms, v && (_ = Math.cos(-v), R = M * (y = Math.sin(-v)) + R * _, x = E = x * _ - z * y, w = S = w * _ - P * y, b = O = b * _ - L * y), h = (v = gs(w, x)) * ms, v && (E = x * (_ = Math.cos(v)) + w * (y = Math.sin(v)), S = T * _ + A * y, w = w * _ - x * y, A = A * _ - T * y, x = E, T = S), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, u = 180 - u), a = ce(Math.sqrt(x * x + w * w + b * b)), o = ce(Math.sqrt(A * A + F * F)), v = gs(T, A), c = Math.abs(v) > 2e-4 ? v * ms : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), i.svg && (E = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !ir(Is(t, Rs)), E && t.setAttribute("transform", E))), Math.abs(c) > 90 && Math.abs(c) < 270 && (I ? (a *= -1, c += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, c += c <= 0 ? 180 : -180)), i.x = s - ((i.xPercent = s && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + k, i.y = r - ((i.yPercent = r && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + k, i.z = n + k, i.scaleX = ce(a), i.scaleY = ce(o), i.rotation = ce(h) + j, i.rotationX = ce(l) + j, i.rotationY = ce(u) + j, i.skewX = c + j, i.skewY = d + j, i.transformPerspective = p + k, (i.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (D[Fs] = or(B)), i.xOffset = i.yOffset = 0, i.force3D = yt.force3D, i.renderTransform = i.svg ? mr : ds ? pr : lr, i.uncache = 0, i
            },
            or = function(t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            hr = function(t, e, i) {
                var s = Xe(e);
                return ce(parseFloat(e) + parseFloat(Gs(t, "x", i + "px", s))) + s
            },
            lr = function(t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, pr(t, e)
            },
            ur = "0deg",
            cr = "0px",
            dr = ") ",
            pr = function(t, e) {
                var i = e || this,
                    s = i.xPercent,
                    r = i.yPercent,
                    n = i.x,
                    a = i.y,
                    o = i.z,
                    h = i.rotation,
                    l = i.rotationY,
                    u = i.rotationX,
                    c = i.skewX,
                    d = i.skewY,
                    p = i.scaleX,
                    m = i.scaleY,
                    f = i.transformPerspective,
                    g = i.force3D,
                    v = i.target,
                    _ = i.zOrigin,
                    y = "",
                    x = "auto" === g && t && 1 !== t || !0 === g;
                if (_ && (u !== ur || l !== ur)) {
                    var w, b = parseFloat(l) * fs,
                        M = Math.sin(b),
                        T = Math.cos(b);
                    b = parseFloat(u) * fs, w = Math.cos(b), n = hr(v, n, M * w * -_), a = hr(v, a, -Math.sin(b) * -_), o = hr(v, o, T * w * -_ + _)
                }
                f !== cr && (y += "perspective(" + f + dr), (s || r) && (y += "translate(" + s + "%, " + r + "%) "), (x || n !== cr || a !== cr || o !== cr) && (y += o !== cr || x ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + dr), h !== ur && (y += "rotate(" + h + dr), l !== ur && (y += "rotateY(" + l + dr), u !== ur && (y += "rotateX(" + u + dr), c === ur && d === ur || (y += "skew(" + c + ", " + d + dr), 1 === p && 1 === m || (y += "scale(" + p + ", " + m + dr), v.style[Rs] = y || "translate(0, 0)"
            },
            mr = function(t, e) {
                var i, s, r, n, a, o = e || this,
                    h = o.xPercent,
                    l = o.yPercent,
                    u = o.x,
                    c = o.y,
                    d = o.rotation,
                    p = o.skewX,
                    m = o.skewY,
                    f = o.scaleX,
                    g = o.scaleY,
                    v = o.target,
                    _ = o.xOrigin,
                    y = o.yOrigin,
                    x = o.xOffset,
                    w = o.yOffset,
                    b = o.forceCSS,
                    M = parseFloat(u),
                    T = parseFloat(c);
                d = parseFloat(d), p = parseFloat(p), (m = parseFloat(m)) && (p += m = parseFloat(m), d += m), d || p ? (d *= fs, p *= fs, i = Math.cos(d) * f, s = Math.sin(d) * f, r = Math.sin(d - p) * -g, n = Math.cos(d - p) * g, p && (m *= fs, a = Math.tan(p - m), r *= a = Math.sqrt(1 + a * a), n *= a, m && (a = Math.tan(m), i *= a = Math.sqrt(1 + a * a), s *= a)), i = ce(i), s = ce(s), r = ce(r), n = ce(n)) : (i = f, n = g, s = r = 0), (M && !~(u + "").indexOf("px") || T && !~(c + "").indexOf("px")) && (M = Gs(v, "x", u, "px"), T = Gs(v, "y", c, "px")), (_ || y || x || w) && (M = ce(M + _ - (_ * i + y * r) + x), T = ce(T + y - (_ * s + y * n) + w)), (h || l) && (a = v.getBBox(), M = ce(M + h / 100 * a.width), T = ce(T + l / 100 * a.height)), a = "matrix(" + i + "," + s + "," + r + "," + n + "," + M + "," + T + ")", v.setAttribute("transform", a), b && (v.style[Rs] = a)
            },
            fr = function(t, e, i, s, r, n) {
                var a, o, h = 360,
                    l = zt(r),
                    u = parseFloat(r) * (l && ~r.indexOf("rad") ? ms : 1),
                    c = n ? u * n : u - s,
                    d = s + c + "deg";
                return l && ("short" === (a = r.split("_")[1]) && (c %= h) !== c % 180 && (c += c < 0 ? h : -360), "cw" === a && c < 0 ? c = (c + 36e9) % h - ~~(c / h) * h : "ccw" === a && c > 0 && (c = (c - 36e9) % h - ~~(c / h) * h)), t._pt = o = new es(t._pt, e, i, s, c, bs), o.e = d, o.u = "deg", t._props.push(i), o
            },
            gr = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            vr = function(t, e, i) {
                var s, r, n, a, o, h, l, u = gr({}, i._gsap),
                    c = i.style;
                for (r in u.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), c[Rs] = e, s = ar(i, 1), Vs(i, Rs), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[Rs], c[Rs] = e, s = ar(i, 1), c[Rs] = n), ps)(n = u[r]) !== (a = s[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = Xe(n) !== (l = Xe(a)) ? Gs(i, r, n, l) : parseFloat(n), h = parseFloat(a), t._pt = new es(t._pt, s, r, o, h - o, ws), t._pt.u = l || 0, t._props.push(r));
                gr(s, u)
            };
        ue("padding,margin,Width,Radius", (function(t, e) {
            var i = "Top",
                s = "Right",
                r = "Bottom",
                n = "Left",
                a = (e < 3 ? [i, s, r, n] : [i + n, i + s, r + s, r + n]).map((function(i) {
                    return e < 2 ? t + i : "border" + i + t
                }));
            Js[e > 1 ? "border" + t : t] = function(t, e, i, s, r) {
                var n, o;
                if (arguments.length < 4) return n = a.map((function(e) {
                    return Hs(t, e, i)
                })), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
                n = (s + "").split(" "), o = {}, a.forEach((function(t, e) {
                    return o[t] = n[e] = n[e] || n[(e - 1) / 2 | 0]
                })), t.init(e, o, r)
            }
        }));
        var _r, yr, xr, wr = {
            name: "css",
            register: Bs,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, s, r) {
                var n, a, o, h, l, u, c, d, p, m, f, g, v, _, y, x = this._props,
                    w = t.style,
                    b = i.vars.startAt;
                for (c in ls || Bs(), e)
                    if ("autoRound" !== c && (a = e[c], !ie[c] || !Ii(c, e, i, s, t, r)))
                        if (l = typeof a, u = Js[c], "function" === l && (l = typeof(a = a.call(i, s, t, r))), "string" === l && ~a.indexOf("random(") && (a = ii(a)), u) u(this, t, c, a, i) && (y = 1);
                        else if ("--" === c.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(c) + "").trim(), a += "", mi.lastIndex = 0, mi.test(n) || (d = Xe(n), p = Xe(a)), p ? d !== p && (n = Gs(t, c, n, p) + p) : d && (a += d), this.add(w, "setProperty", n, a, s, r, 0, 0, c);
                else if ("undefined" !== l) {
                    if (b && c in b ? (n = "function" == typeof b[c] ? b[c].call(i, s, t, r) : b[c], c in yt.units && !Xe(n) && (n += yt.units[c]), "=" === (n + "").charAt(1) && (n = Hs(t, c))) : n = Hs(t, c), h = parseFloat(n), (m = "string" === l && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), c in xs && ("autoAlpha" === c && (1 === h && "hidden" === Hs(t, "visibility") && o && (h = 0), Xs(this, w, "visibility", h ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== c && "transform" !== c && ~(c = xs[c]).indexOf(",") && (c = c.split(",")[0])), f = c in ps)
                        if (g || ((v = t._gsap).renderTransform && !e.parseTransform || ar(t, e.parseTransform), _ = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new es(this._pt, w, Rs, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new es(this._pt, v, "scaleY", v.scaleY, m ? m * o : o - v.scaleY), x.push("scaleY", c), c += "X";
                        else {
                            if ("transformOrigin" === c) {
                                a = Qs(a), v.svg ? nr(t, a, 0, _, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && Xs(this, v, "zOrigin", v.zOrigin, p), Xs(this, w, c, or(n), or(a)));
                                continue
                            }
                            if ("svgOrigin" === c) {
                                nr(t, a, 1, _, 0, this);
                                continue
                            }
                            if (c in er) {
                                fr(this, v, c, h, a, m);
                                continue
                            }
                            if ("smoothOrigin" === c) {
                                Xs(this, v, "smooth", v.smooth, a);
                                continue
                            }
                            if ("force3D" === c) {
                                v[c] = a;
                                continue
                            }
                            if ("transform" === c) {
                                vr(this, a, t);
                                continue
                            }
                        }
                    else c in w || (c = js(c) || c);
                    if (f || (o || 0 === o) && (h || 0 === h) && !ys.test(a) && c in w) o || (o = 0), (d = (n + "").substr((h + "").length)) !== (p = Xe(a) || (c in yt.units ? yt.units[c] : d)) && (h = Gs(t, c, n, p)), this._pt = new es(this._pt, f ? v : w, c, h, m ? m * o : o - h, f || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? ws : Ts), this._pt.u = p || 0, d !== p && (this._pt.b = n, this._pt.r = Ms);
                    else if (c in w) $s.call(this, t, c, n, a);
                    else {
                        if (!(c in t)) {
                            $t(c, a);
                            continue
                        }
                        this.add(t, c, t[c], a, s, r)
                    }
                    x.push(c)
                }
                y && ts(this)
            },
            get: Hs,
            aliases: xs,
            getSetter: function(t, e, i) {
                var s = xs[e];
                return s && s.indexOf(",") < 0 && (e = s), e in ps && e !== Fs && (t._gsap.x || Hs(t, "x")) ? i && cs === i ? "scale" === e ? Ps : zs : (cs = i || {}) && ("scale" === e ? Ls : Cs) : t.style && !Ct(t.style[e]) ? Ss : ~e.indexOf("-") ? Os : Wi(t, e)
            },
            core: {
                _removeProperty: Vs,
                _getMatrix: rr
            }
        };
        ns.utils.checkPrefix = js, xr = ue((_r = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (yr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            ps[t] = 1
        })), ue(yr, (function(t) {
            yt.units[t] = "deg", er[t] = 1
        })), xs[xr[13]] = _r + "," + yr, ue("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            xs[e[1]] = xr[e[0]]
        })), ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            yt.units[t] = "px"
        })), ns.registerPlugin(wr);
        var br = ns.registerPlugin(wr) || ns;
        br.core.Tween;
        let Mr = 1;
        const Tr = {};
        class Ar {
            constructor(t, {
                vertex: e,
                fragment: i,
                uniforms: s = {},
                transparent: r = !1,
                cullFace: n = t.BACK,
                frontFace: a = t.CCW,
                depthTest: o = !0,
                depthWrite: h = !0,
                depthFunc: l = t.LESS
            } = {}) {
                t.canvas || console.error("gl not passed as fist argument to Program"), this.gl = t, this.uniforms = s, this.id = Mr++, e || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = r, this.cullFace = n, this.frontFace = a, this.depthTest = o, this.depthWrite = h, this.depthFunc = l, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
                const u = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(u, e), t.compileShader(u), "" !== t.getShaderInfoLog(u) && console.warn(`${t.getShaderInfoLog(u)}\nVertex Shader\n${Sr(e)}`);
                const c = t.createShader(t.FRAGMENT_SHADER);
                if (t.shaderSource(c, i), t.compileShader(c), "" !== t.getShaderInfoLog(c) && console.warn(`${t.getShaderInfoLog(c)}\nFragment Shader\n${Sr(i)}`), this.program = t.createProgram(), t.attachShader(this.program, u), t.attachShader(this.program, c), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) return console.warn(t.getProgramInfoLog(this.program));
                t.deleteShader(u), t.deleteShader(c), this.uniformLocations = new Map;
                let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
                for (let e = 0; e < d; e++) {
                    let i = t.getActiveUniform(this.program, e);
                    this.uniformLocations.set(i, t.getUniformLocation(this.program, i.name));
                    const s = i.name.match(/(\w+)/g);
                    i.uniformName = s[0], 3 === s.length ? (i.isStructArray = !0, i.structIndex = Number(s[1]), i.structProperty = s[2]) : 2 === s.length && isNaN(Number(s[1])) && (i.isStruct = !0, i.structProperty = s[1])
                }
                this.attributeLocations = new Map;
                const p = [],
                    m = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
                for (let e = 0; e < m; e++) {
                    const i = t.getActiveAttrib(this.program, e),
                        s = t.getAttribLocation(this.program, i.name);
                    p[s] = i.name, this.attributeLocations.set(i, s)
                }
                this.attributeOrder = p.join("")
            }
            setBlendFunc(t, e, i, s) {
                this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = s, t && (this.transparent = !0)
            }
            setBlendEquation(t, e) {
                this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
            }
            applyState() {
                this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
            }
            use({
                flipFaces: t = !1
            } = {}) {
                let e = -1;
                this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.currentProgram = this.id), this.uniformLocations.forEach(((t, i) => {
                    let s = i.uniformName,
                        r = this.uniforms[s];
                    if (i.isStruct && (r = r[i.structProperty], s += `.${i.structProperty}`), i.isStructArray && (r = r[i.structIndex][i.structProperty], s += `[${i.structIndex}].${i.structProperty}`), !r) return zr(`Active uniform ${s} has not been supplied`);
                    if (r && void 0 === r.value) return zr(`${s} uniform is missing a value parameter`);
                    if (r.value.texture) return e += 1, r.value.update(e), Er(this.gl, i.type, t, e);
                    if (r.value.length && r.value[0].texture) {
                        const s = [];
                        return r.value.forEach((t => {
                            e += 1, t.update(e), s.push(e)
                        })), Er(this.gl, i.type, t, s)
                    }
                    Er(this.gl, i.type, t, r.value)
                })), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
            }
            remove() {
                this.gl.deleteProgram(this.program)
            }
        }

        function Er(t, e, i, s) {
            s = s.length ? function(t) {
                const e = t.length,
                    i = t[0].length;
                if (void 0 === i) return t;
                const s = e * i;
                let r = Tr[s];
                r || (Tr[s] = r = new Float32Array(s));
                for (let s = 0; s < e; s++) r.set(t[s], s * i);
                return r
            }(s) : s;
            const r = t.renderer.state.uniformLocations.get(i);
            if (s.length)
                if (void 0 === r || r.length !== s.length) t.renderer.state.uniformLocations.set(i, s.slice(0));
                else {
                    if (function(t, e) {
                            if (t.length !== e.length) return !1;
                            for (let i = 0, s = t.length; i < s; i++)
                                if (t[i] !== e[i]) return !1;
                            return !0
                        }(r, s)) return;
                    r.set ? r.set(s) : function(t, e) {
                        for (let i = 0, s = t.length; i < s; i++) t[i] = e[i]
                    }(r, s), t.renderer.state.uniformLocations.set(i, r)
                }
            else {
                if (r === s) return;
                t.renderer.state.uniformLocations.set(i, s)
            }
            switch (e) {
                case 5126:
                    return s.length ? t.uniform1fv(i, s) : t.uniform1f(i, s);
                case 35664:
                    return t.uniform2fv(i, s);
                case 35665:
                    return t.uniform3fv(i, s);
                case 35666:
                    return t.uniform4fv(i, s);
                case 35670:
                case 5124:
                case 35678:
                case 35680:
                    return s.length ? t.uniform1iv(i, s) : t.uniform1i(i, s);
                case 35671:
                case 35667:
                    return t.uniform2iv(i, s);
                case 35672:
                case 35668:
                    return t.uniform3iv(i, s);
                case 35673:
                case 35669:
                    return t.uniform4iv(i, s);
                case 35674:
                    return t.uniformMatrix2fv(i, !1, s);
                case 35675:
                    return t.uniformMatrix3fv(i, !1, s);
                case 35676:
                    return t.uniformMatrix4fv(i, !1, s)
            }
        }

        function Sr(t) {
            let e = t.split("\n");
            for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
            return e.join("\n")
        }
        let Or = 0;

        function zr(t) {
            Or > 100 || (console.warn(t), Or++, Or > 100 && console.warn("More than 100 program warnings - stopping logs."))
        }

        function Pr(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = e[4],
                h = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                d = i[0],
                p = i[1],
                m = i[2],
                f = i[3],
                g = i[4],
                v = i[5],
                _ = i[6],
                y = i[7],
                x = i[8];
            return t[0] = d * s + p * a + m * l, t[1] = d * r + p * o + m * u, t[2] = d * n + p * h + m * c, t[3] = f * s + g * a + v * l, t[4] = f * r + g * o + v * u, t[5] = f * n + g * h + v * c, t[6] = _ * s + y * a + x * l, t[7] = _ * r + y * o + x * u, t[8] = _ * n + y * h + x * c, t
        }
        class Lr extends Array {
            constructor(t = 1, e = 0, i = 0, s = 0, r = 1, n = 0, a = 0, o = 0, h = 1) {
                return super(t, e, i, s, r, n, a, o, h), this
            }
            set(t, e, i, s, r, n, a, o, h) {
                return t.length ? this.copy(t) : (function(t, e, i, s, r, n, a, o, h, l) {
                    t[0] = e, t[1] = i, t[2] = s, t[3] = r, t[4] = n, t[5] = a, t[6] = o, t[7] = h, t[8] = l
                }(this, t, e, i, s, r, n, a, o, h), this)
            }
            translate(t, e = this) {
                return function(t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        o = e[4],
                        h = e[5],
                        l = e[6],
                        u = e[7],
                        c = e[8],
                        d = i[0],
                        p = i[1];
                    t[0] = s, t[1] = r, t[2] = n, t[3] = a, t[4] = o, t[5] = h, t[6] = d * s + p * a + l, t[7] = d * r + p * o + u, t[8] = d * n + p * h + c
                }(this, e, t), this
            }
            rotate(t, e = this) {
                return function(t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        o = e[4],
                        h = e[5],
                        l = e[6],
                        u = e[7],
                        c = e[8],
                        d = Math.sin(i),
                        p = Math.cos(i);
                    t[0] = p * s + d * a, t[1] = p * r + d * o, t[2] = p * n + d * h, t[3] = p * a - d * s, t[4] = p * o - d * r, t[5] = p * h - d * n, t[6] = l, t[7] = u, t[8] = c
                }(this, e, t), this
            }
            scale(t, e = this) {
                return function(t, e, i) {
                    let s = i[0],
                        r = i[1];
                    t[0] = s * e[0], t[1] = s * e[1], t[2] = s * e[2], t[3] = r * e[3], t[4] = r * e[4], t[5] = r * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8]
                }(this, e, t), this
            }
            multiply(t, e) {
                return e ? Pr(this, t, e) : Pr(this, this, t), this
            }
            identity() {
                var t;
                return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, this
            }
            copy(t) {
                var e, i;
                return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
            }
            fromMatrix4(t) {
                var e, i;
                return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[4], e[4] = i[5], e[5] = i[6], e[6] = i[8], e[7] = i[9], e[8] = i[10], this
            }
            fromQuaternion(t) {
                return function(t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = i + i,
                        o = s + s,
                        h = r + r,
                        l = i * a,
                        u = s * a,
                        c = s * o,
                        d = r * a,
                        p = r * o,
                        m = r * h,
                        f = n * a,
                        g = n * o,
                        v = n * h;
                    t[0] = 1 - c - m, t[3] = u - v, t[6] = d + g, t[1] = u + v, t[4] = 1 - l - m, t[7] = p - f, t[2] = d - g, t[5] = p + f, t[8] = 1 - l - c
                }(this, t), this
            }
            fromBasis(t, e, i) {
                return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
            }
            inverse(t = this) {
                return function(t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = e[4],
                        o = e[5],
                        h = e[6],
                        l = e[7],
                        u = e[8],
                        c = u * a - o * l,
                        d = -u * n + o * h,
                        p = l * n - a * h,
                        m = i * c + s * d + r * p;
                    m && (m = 1 / m, t[0] = c * m, t[1] = (-u * s + r * l) * m, t[2] = (o * s - r * a) * m, t[3] = d * m, t[4] = (u * i - r * h) * m, t[5] = (-o * i + r * n) * m, t[6] = p * m, t[7] = (-l * i + s * h) * m, t[8] = (a * i - s * n) * m)
                }(this, t), this
            }
            getNormalMatrix(t) {
                return function(t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = e[4],
                        o = e[5],
                        h = e[6],
                        l = e[7],
                        u = e[8],
                        c = e[9],
                        d = e[10],
                        p = e[11],
                        m = e[12],
                        f = e[13],
                        g = e[14],
                        v = e[15],
                        _ = i * o - s * a,
                        y = i * h - r * a,
                        x = i * l - n * a,
                        w = s * h - r * o,
                        b = s * l - n * o,
                        M = r * l - n * h,
                        T = u * f - c * m,
                        A = u * g - d * m,
                        E = u * v - p * m,
                        S = c * g - d * f,
                        O = c * v - p * f,
                        z = d * v - p * g,
                        P = _ * z - y * O + x * S + w * E - b * A + M * T;
                    P && (P = 1 / P, t[0] = (o * z - h * O + l * S) * P, t[1] = (h * E - a * z - l * A) * P, t[2] = (a * O - o * E + l * T) * P, t[3] = (r * O - s * z - n * S) * P, t[4] = (i * z - r * E + n * A) * P, t[5] = (s * E - i * O - n * T) * P, t[6] = (f * M - g * b + v * w) * P, t[7] = (g * x - m * M - v * y) * P, t[8] = (m * b - f * x + v * _) * P)
                }(this, t), this
            }
        }
        let Cr = 0;
        class Rr extends L {
            constructor(t, {
                geometry: e,
                program: i,
                mode: s = t.TRIANGLES,
                frustumCulled: r = !0,
                renderOrder: n = 0
            } = {}) {
                super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = Cr++, this.geometry = e, this.program = i, this.mode = s, this.frustumCulled = r, this.renderOrder = n, this.modelViewMatrix = new O, this.normalMatrix = new Lr, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
            }
            onBeforeRender(t) {
                return this.beforeRenderCallbacks.push(t), this
            }
            onAfterRender(t) {
                return this.afterRenderCallbacks.push(t), this
            }
            draw({
                camera: t
            } = {}) {
                this.beforeRenderCallbacks.forEach((e => e && e({
                    mesh: this,
                    camera: t
                }))), t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                    modelMatrix: {
                        value: null
                    },
                    viewMatrix: {
                        value: null
                    },
                    modelViewMatrix: {
                        value: null
                    },
                    normalMatrix: {
                        value: null
                    },
                    projectionMatrix: {
                        value: null
                    },
                    cameraPosition: {
                        value: null
                    }
                }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
                let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
                this.program.use({
                    flipFaces: e
                }), this.geometry.draw({
                    mode: this.mode,
                    program: this.program
                }), this.afterRenderCallbacks.forEach((e => e && e({
                    mesh: this,
                    camera: t
                })))
            }
        }
        const Fr = 768;
        class Dr {
            constructor({
                element: t,
                geometry: e,
                index: i,
                gl: s,
                scene: r,
                sizes: n
            }) {
                this.element = t, this.elementWrapper = t.querySelector(".about__gallery__wrapper"), this.geometry = e, this.index = i, this.gl = s, this.scene = r, this.sizes = n, this.group = new L, this.scroll = {
                    current: 0,
                    start: 0,
                    target: 0,
                    lerp: .1,
                    velocity: 1,
                    last: 0
                }, this.createMedias(), this.onResize({
                    sizes: this.sizes
                }), this.group.setParent(this.scene)
            }
            createMedias() {
                this.mediasElements = this.element.querySelectorAll(".about__gallery__media"), this.medias = q()(this.mediasElements, ((t, e) => new class {
                    constructor({
                        element: t,
                        geometry: e,
                        gl: i,
                        index: s,
                        scene: r,
                        sizes: n
                    }) {
                        this.element = t, this.geometry = e, this.gl = i, this.index = s, this.scene = r, this.sizes = n, this.extra = {
                            x: 0,
                            y: 0
                        }, this.createTexture(), this.createProgram(), this.createMesh(), this.createBounds({
                            sizes: this.sizes
                        })
                    }
                    createTexture() {
                        const t = this.element.querySelector("img");
                        this.texture = window.TEXTURES[t.getAttribute("data-src")]
                    }
                    createProgram() {
                        this.program = new Ar(this.gl, {
                            fragment: "precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texture = texture2D(tMap, vUv);\n\n  gl_FragColor = vec4(texture.rgb, texture.a * uAlpha);\n}\n",
                            vertex: "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uSpeed;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
                            uniforms: {
                                uAlpha: {
                                    value: 0
                                },
                                uSpeed: {
                                    value: 0
                                },
                                uTime: {
                                    value: br.utils.random(0, 1e3)
                                },
                                tMap: {
                                    value: this.texture
                                }
                            }
                        })
                    }
                    createMesh() {
                        this.mesh = new Rr(this.gl, {
                            geometry: this.geometry,
                            program: this.program
                        }), this.mesh.setParent(this.scene)
                    }
                    createBounds({
                        sizes: t
                    }) {
                        this.sizes = t, this.bounds = this.element.getBoundingClientRect(), this.updateScale(), this.updateX(), this.updateY()
                    }
                    show() {
                        br.fromTo(this.program.uniforms.uAlpha, {
                            value: 0
                        }, {
                            value: 1
                        })
                    }
                    hide() {
                        br.to(this.program.uniforms.uAlpha, {
                            value: 0
                        })
                    }
                    onResize(t, e, i) {
                        this.extra = 0, this.widthTotal = i, this.createBounds(t), this.updateX(e), this.updateY(0)
                    }
                    updateRotation() {
                        this.mesh.rotation.z = br.utils.mapRange(-this.sizes.width / 2, this.sizes.width / 2, .1 * Math.PI, .1 * -Math.PI, this.mesh.position.x)
                    }
                    updateScale() {
                        this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.sizes.width * this.width, this.mesh.scale.y = this.sizes.height * this.height
                    }
                    updateX(t = 0) {
                        this.x = (this.bounds.left + t) / window.innerWidth, this.mesh.position.x = -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra
                    }
                    updateY(t = 0) {
                        this.y = (this.bounds.top + t) / window.innerHeight;
                        const e = window.innerWidth < Fr ? 15 : 60;
                        this.mesh.position.y = this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height, this.mesh.position.y += Math.cos(this.mesh.position.x / this.sizes.width * Math.PI * .1) * e - e
                    }
                    update(t) {
                        this.updateRotation(), this.updateScale(), this.updateX(t.current), this.updateY(0), this.program.uniforms.uSpeed.value = .005 * (t.current - t.last), this.program.uniforms.uTime.value += .01
                    }
                }({
                    element: t,
                    geometry: this.geometry,
                    index: e,
                    gl: this.gl,
                    scene: this.group,
                    sizes: this.sizes
                })))
            }
            show() {
                q()(this.medias, (t => t.show()))
            }
            hide() {
                q()(this.medias, (t => t.hide()))
            }
            onResize(t) {
                this.bounds = this.elementWrapper.getBoundingClientRect(), this.sizes = t.sizes, this.width = this.bounds.width / window.innerWidth * this.sizes.width, this.scroll.current = this.scroll.target = 0, q()(this.medias, (e => e.onResize(t, this.scroll.current, this.width)))
            }
            onTouchDown({
                x: t,
                y: e
            }) {
                this.scroll.start = this.scroll.current
            }
            onTouchMove({
                x: t,
                y: e
            }) {
                const i = t.start - t.end;
                this.scroll.target = this.scroll.start - i
            }
            onTouchUp({
                x: t,
                y: e
            }) {}
            update(t) {
                const e = .1 * (t.current - t.target),
                    i = t.current / window.innerHeight;
                this.scroll.current < this.scroll.target ? (this.direction = "right", this.scroll.velocity = -1) : this.scroll.current > this.scroll.target && (this.direction = "left", this.scroll.velocity = 1), this.scroll.target -= this.scroll.velocity, this.scroll.target += e, this.scroll.current = br.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp), q()(this.medias, ((t, e) => {
                    const i = t.mesh.scale.x / 2 + .25;
                    if ("left" === this.direction) {
                        t.mesh.position.x + i < -this.sizes.width / 2 && (t.extra += this.width)
                    } else if ("right" === this.direction) {
                        t.mesh.position.x - i > this.sizes.width / 2 && (t.extra -= this.width)
                    }
                    t.update(this.scroll)
                })), this.group.position.y = i * this.sizes.height, this.scroll.last = this.scroll.current
            }
            destroy() {
                this.scene.removeChild(this.group)
            }
        }

        function Ir(t, e, i) {
            return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
        }

        function kr(t, e, i) {
            return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
        }

        function jr(t, e, i) {
            return t[0] = e[0] * i, t[1] = e[1] * i, t
        }

        function Br(t) {
            var e = t[0],
                i = t[1];
            return Math.sqrt(e * e + i * i)
        }

        function Ur(t, e) {
            return t[0] * e[1] - t[1] * e[0]
        }
        class Nr extends Array {
            constructor(t = 0, e = t) {
                return super(t, e), this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set(t, e = t) {
                return t.length ? this.copy(t) : (function(t, e, i) {
                    t[0] = e, t[1] = i
                }(this, t, e), this)
            }
            copy(t) {
                var e, i;
                return i = t, (e = this)[0] = i[0], e[1] = i[1], this
            }
            add(t, e) {
                return e ? Ir(this, t, e) : Ir(this, this, t), this
            }
            sub(t, e) {
                return e ? kr(this, t, e) : kr(this, this, t), this
            }
            multiply(t) {
                var e, i, s;
                return t.length ? (i = this, s = t, (e = this)[0] = i[0] * s[0], e[1] = i[1] * s[1]) : jr(this, this, t), this
            }
            divide(t) {
                var e, i, s;
                return t.length ? (i = this, s = t, (e = this)[0] = i[0] / s[0], e[1] = i[1] / s[1]) : jr(this, this, 1 / t), this
            }
            inverse(t = this) {
                var e, i;
                return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], this
            }
            len() {
                return Br(this)
            }
            distance(t) {
                return t ? (e = this, s = (i = t)[0] - e[0], r = i[1] - e[1], Math.sqrt(s * s + r * r)) : Br(this);
                var e, i, s, r
            }
            squaredLen() {
                return this.squaredDistance()
            }
            squaredDistance(t) {
                return t ? (e = this, s = (i = t)[0] - e[0], r = i[1] - e[1], s * s + r * r) : function(t) {
                    var e = t[0],
                        i = t[1];
                    return e * e + i * i
                }(this);
                var e, i, s, r
            }
            negate(t = this) {
                var e, i;
                return i = t, (e = this)[0] = -i[0], e[1] = -i[1], this
            }
            cross(t, e) {
                return e ? Ur(t, e) : Ur(this, t)
            }
            scale(t) {
                return jr(this, this, t), this
            }
            normalize() {
                var t, e, i, s, r;
                return t = this, i = (e = this)[0], s = e[1], (r = i * i + s * s) > 0 && (r = 1 / Math.sqrt(r)), t[0] = e[0] * r, t[1] = e[1] * r, this
            }
            dot(t) {
                return i = t, (e = this)[0] * i[0] + e[1] * i[1];
                var e, i
            }
            equals(t) {
                return i = t, (e = this)[0] === i[0] && e[1] === i[1];
                var e, i
            }
            applyMatrix3(t) {
                var e, i, s, r, n;
                return e = this, s = t, r = (i = this)[0], n = i[1], e[0] = s[0] * r + s[3] * n + s[6], e[1] = s[1] * r + s[4] * n + s[7], this
            }
            applyMatrix4(t) {
                return function(t, e, i) {
                    let s = e[0],
                        r = e[1];
                    t[0] = i[0] * s + i[4] * r + i[12], t[1] = i[1] * s + i[5] * r + i[13]
                }(this, this, t), this
            }
            lerp(t, e) {
                ! function(t, e, i, s) {
                    var r = e[0],
                        n = e[1];
                    t[0] = r + s * (i[0] - r), t[1] = n + s * (i[1] - n)
                }(this, this, t, e)
            }
            clone() {
                return new Nr(this[0], this[1])
            }
            fromArray(t, e = 0) {
                return this[0] = t[e], this[1] = t[e + 1], this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0], t[e + 1] = this[1], t
            }
        }
        const qr = new Nr,
            Yr = new Nr,
            Vr = new Nr,
            Xr = new f,
            Wr = new f,
            Gr = new f,
            Hr = new f,
            $r = new f,
            Zr = new f,
            Qr = new f,
            Kr = new f,
            Jr = new f,
            tn = new f,
            en = new f,
            sn = new O;
        class rn {
            constructor() {
                this.origin = new f, this.direction = new f
            }
            castMouse(t, e = [0, 0]) {
                if ("orthographic" === t.type) {
                    const {
                        left: i,
                        right: s,
                        bottom: r,
                        top: n,
                        zoom: a
                    } = t, o = i / a + (s - i) / a * (.5 * e[0] + .5), h = r / a + (n - r) / a * (.5 * e[1] + .5);
                    this.origin.set(o, h, 0), this.origin.applyMatrix4(t.worldMatrix), this.direction.x = -t.worldMatrix[8], this.direction.y = -t.worldMatrix[9], this.direction.z = -t.worldMatrix[10]
                } else t.worldMatrix.getTranslation(this.origin), this.direction.set(e[0], e[1], .5), t.unproject(this.direction), this.direction.sub(this.origin).normalize()
            }
            intersectBounds(t, {
                maxDistance: e,
                output: i = []
            } = {}) {
                Array.isArray(t) || (t = [t]);
                const s = sn,
                    r = Xr,
                    n = Wr,
                    a = i;
                return a.length = 0, t.forEach((t => {
                    t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
                    const i = t.geometry.bounds;
                    let o;
                    if (s.inverse(t.worldMatrix), e && (n.copy(this.direction).scaleRotateMatrix4(s), o = e * n.len()), r.copy(this.origin).applyMatrix4(s), n.copy(this.direction).transformDirection(s), e && r.distance(i.center) - i.radius > o) return;
                    let h = 0;
                    if ("sphere" === t.geometry.raycast) {
                        if (r.distance(i.center) > i.radius && (h = this.intersectSphere(i, r, n), !h)) return
                    } else if ((r.x < i.min.x || r.x > i.max.x || r.y < i.min.y || r.y > i.max.y || r.z < i.min.z || r.z > i.max.z) && (h = this.intersectBox(i, r, n), !h)) return;
                    e && h > o || (t.hit || (t.hit = {
                        localPoint: new f,
                        point: new f
                    }), t.hit.localPoint.copy(n).multiply(h).add(r), t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix), t.hit.distance = t.hit.point.distance(this.origin), a.push(t))
                })), a.sort(((t, e) => t.hit.distance - e.hit.distance)), a
            }
            intersectMeshes(t, {
                cullFace: e = !0,
                maxDistance: i,
                includeUV: s = !0,
                includeNormal: r = !0,
                output: n = []
            } = {}) {
                const a = this.intersectBounds(t, {
                    maxDistance: i,
                    output: n
                });
                if (!a.length) return a;
                const o = sn,
                    h = Xr,
                    l = Wr,
                    u = Gr,
                    c = Hr,
                    d = $r,
                    p = Zr,
                    m = Qr,
                    g = Kr,
                    v = qr,
                    _ = Yr,
                    y = Vr;
                for (let t = a.length - 1; t >= 0; t--) {
                    const n = a[t];
                    let x;
                    o.inverse(n.worldMatrix), i && (l.copy(this.direction).scaleRotateMatrix4(o), x = i * l.len()), h.copy(this.origin).applyMatrix4(o), l.copy(this.direction).transformDirection(o);
                    let w, b, M, T = 0;
                    const A = n.geometry,
                        E = A.attributes,
                        S = E.index,
                        O = Math.max(0, A.drawRange.start),
                        z = Math.min(S ? S.count : E.position.count, A.drawRange.start + A.drawRange.count);
                    for (let t = O; t < z; t += 3) {
                        const s = S ? S.data[t] : t,
                            r = S ? S.data[t + 1] : t + 1,
                            n = S ? S.data[t + 2] : t + 2;
                        u.fromArray(E.position.data, 3 * s), c.fromArray(E.position.data, 3 * r), d.fromArray(E.position.data, 3 * n);
                        const a = this.intersectTriangle(u, c, d, e, h, l, m);
                        a && (i && a > x || (!T || a < T) && (T = a, w = s, b = r, M = n, p.copy(m)))
                    }
                    T || a.splice(t, 1), n.hit.localPoint.copy(l).multiply(T).add(h), n.hit.point.copy(n.hit.localPoint).applyMatrix4(n.worldMatrix), n.hit.distance = n.hit.point.distance(this.origin), n.hit.faceNormal || (n.hit.localFaceNormal = new f, n.hit.faceNormal = new f, n.hit.uv = new Nr, n.hit.localNormal = new f, n.hit.normal = new f), n.hit.localFaceNormal.copy(p), n.hit.faceNormal.copy(n.hit.localFaceNormal).transformDirection(n.worldMatrix), (s || r) && (u.fromArray(E.position.data, 3 * w), c.fromArray(E.position.data, 3 * b), d.fromArray(E.position.data, 3 * M), this.getBarycoord(n.hit.localPoint, u, c, d, g)), s && E.uv && (v.fromArray(E.uv.data, 2 * w), _.fromArray(E.uv.data, 2 * b), y.fromArray(E.uv.data, 2 * M), n.hit.uv.set(v.x * g.x + _.x * g.y + y.x * g.z, v.y * g.x + _.y * g.y + y.y * g.z)), r && E.normal && (u.fromArray(E.normal.data, 3 * w), c.fromArray(E.normal.data, 3 * b), d.fromArray(E.normal.data, 3 * M), n.hit.localNormal.set(u.x * g.x + c.x * g.y + d.x * g.z, u.y * g.x + c.y * g.y + d.y * g.z, u.z * g.x + c.z * g.y + d.z * g.z), n.hit.normal.copy(n.hit.localNormal).transformDirection(n.worldMatrix))
                }
                return a.sort(((t, e) => t.hit.distance - e.hit.distance)), a
            }
            intersectSphere(t, e = this.origin, i = this.direction) {
                const s = Gr;
                s.sub(t.center, e);
                const r = s.dot(i),
                    n = s.dot(s) - r * r,
                    a = t.radius * t.radius;
                if (n > a) return 0;
                const o = Math.sqrt(a - n),
                    h = r - o,
                    l = r + o;
                return h < 0 && l < 0 ? 0 : h < 0 ? l : h
            }
            intersectBox(t, e = this.origin, i = this.direction) {
                let s, r, n, a, o, h;
                const l = 1 / i.x,
                    u = 1 / i.y,
                    c = 1 / i.z,
                    d = t.min,
                    p = t.max;
                return s = ((l >= 0 ? d.x : p.x) - e.x) * l, r = ((l >= 0 ? p.x : d.x) - e.x) * l, n = ((u >= 0 ? d.y : p.y) - e.y) * u, a = ((u >= 0 ? p.y : d.y) - e.y) * u, s > a || n > r ? 0 : (n > s && (s = n), a < r && (r = a), o = ((c >= 0 ? d.z : p.z) - e.z) * c, h = ((c >= 0 ? p.z : d.z) - e.z) * c, s > h || o > r ? 0 : (o > s && (s = o), h < r && (r = h), r < 0 ? 0 : s >= 0 ? s : r))
            }
            intersectTriangle(t, e, i, s = !0, r = this.origin, n = this.direction, a = Qr) {
                const o = Kr,
                    h = Jr,
                    l = tn;
                o.sub(e, t), h.sub(i, t), a.cross(o, h);
                let u, c = n.dot(a);
                if (!c) return 0;
                if (c > 0) {
                    if (s) return 0;
                    u = 1
                } else u = -1, c = -c;
                l.sub(r, t);
                let d = u * n.dot(h.cross(l, h));
                if (d < 0) return 0;
                let p = u * n.dot(o.cross(l));
                if (p < 0) return 0;
                if (d + p > c) return 0;
                let m = -u * l.dot(a);
                return m < 0 ? 0 : m / c
            }
            getBarycoord(t, e, i, s, r = Kr) {
                const n = Jr,
                    a = tn,
                    o = en;
                n.sub(s, e), a.sub(i, e), o.sub(t, e);
                const h = n.dot(n),
                    l = n.dot(a),
                    u = n.dot(o),
                    c = a.dot(a),
                    d = a.dot(o),
                    p = h * c - l * l;
                if (0 === p) return r.set(-2, -1, -1);
                const m = 1 / p,
                    f = (c * u - l * d) * m,
                    g = (h * d - l * u) * m;
                return r.set(1 - f - g, g, f)
            }
        }
        var nn = i(2273),
            an = i.n(nn),
            on = i(5066),
            hn = i.n(on);
        const ln = (t, e = 0) => {
            const i = t.getBoundingClientRect();
            return {
                bottom: i.bottom,
                height: i.height,
                left: i.left,
                top: i.top + e,
                width: i.width
            }
        };

        function un(t, e) {
            return t instanceof window.HTMLElement ? [e(t)] : q()(t, e)
        }
        var cn = i(1663),
            dn = i.n(cn),
            pn = i(1590),
            mn = i.n(pn);
        class fn extends(mn()) {
            constructor({
                classes: t,
                element: e,
                elements: i
            }) {
                super(), dn()(this), this.classes = t, this.selector = e, this.selectorChildren = { ...i
                }, this.create(), this.addEventListeners()
            }
            create() {
                this.selector instanceof window.HTMLElement ? this.element = this.selector : this.element = document.querySelector(this.selector), this.elements = {}, r()(this.selectorChildren, ((t, e) => {
                    t instanceof window.HTMLElement || t instanceof window.NodeList || Array.isArray(t) ? this.elements[e] = t : (this.elements[e] = this.element.querySelectorAll(t), 0 === this.elements[e].length ? this.elements[e] = null : 1 === this.elements[e].length && (this.elements[e] = this.element.querySelector(t)))
                }))
            }
            addEventListeners() {}
            removeEventListeners() {}
        }
        const gn = "precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying float vPosition;\nvarying vec2 vUv;\n\nvec3 saturation(vec3 rgb, float adjustment) {\n  const vec3 W = vec3(0.2125, 0.7154, 0.0721);\n  vec3 intensity = vec3(dot(rgb, W));\n  return mix(intensity, rgb, adjustment);\n}\n\nvoid main() {\n  vec4 color = texture2D(tMap, vUv);\n  float value = 1.0;\n\n  if (vPosition > 0.0) {\n    color.rgb += clamp(vPosition, 0.0, 0.1);\n    value = 1.0 + vPosition;\n  }\n\n  color.rgb = saturation(color.rgb, value);\n\n  gl_FragColor = vec4(color.rgb, color.a * uAlpha);\n}\n",
            vn = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uSpeed;\n\nvarying float vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n  float speed = 0.1 + uSpeed;\n\n  p.z = (sin(p.x * 4.0 + uTime) * speed + cos(p.y * 2.0 + uTime) * speed);\n\n  vPosition = p.z;\n\n  vec4 newPosition = modelViewMatrix * vec4(p, 1.0);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n",
            _n = class extends fn {
                constructor({
                    detail: t,
                    element: e,
                    geometry: i,
                    gl: s,
                    index: r,
                    scene: n,
                    sizes: a
                }) {
                    super({
                        element: e,
                        elements: {
                            image: ".collections__gallery__media__image"
                        }
                    }), this.id = t.getAttribute("id"), this.detail = t, this.detailMedia = this.detail.querySelector(".detail__media"), this.detailMedia.addEventListener("click", this.onClick.bind(this)), this.detailBounds = ln(this.detailMedia), this.geometry = i, this.gl = s, this.index = r, this.scene = n, this.sizes = a, this.animation = 0, this.group = new L, this.frame = 0, this.rotation = {
                        current: 0,
                        target: 0
                    }, this.opacity = {
                        current: 0,
                        target: 0,
                        lerp: .1,
                        multiplier: 0
                    }, this.createJewlery(), this.createModel(), this.createBounds({
                        sizes: this.sizes
                    }), this.original = -this.sizes.width / 2 + this.jewlery.scale.x / 2 + this.x * this.sizes.width, this.group.setParent(this.scene)
                }
                createJewlery() {
                    const t = new Ar(this.gl, {
                        fragment: gn,
                        vertex: vn,
                        uniforms: {
                            uAlpha: {
                                value: 0
                            },
                            uSpeed: {
                                value: 0
                            },
                            uTime: {
                                value: br.utils.random(0, 1e3)
                            },
                            tMap: {
                                value: window.TEXTURES[this.elements.image.getAttribute("data-src")]
                            }
                        }
                    });
                    this.jewlery = new Rr(this.gl, {
                        geometry: this.geometry,
                        program: t
                    }), this.jewlery.index = this.index, this.jewlery.setParent(this.group)
                }
                createModel() {
                    const t = new Ar(this.gl, {
                        fragment: gn,
                        vertex: vn,
                        uniforms: {
                            uAlpha: {
                                value: 0
                            },
                            uSpeed: {
                                value: 0
                            },
                            uTime: {
                                value: br.utils.random(0, 1e3)
                            },
                            tMap: {
                                value: window.TEXTURES[this.elements.image.getAttribute("data-model-src")]
                            }
                        }
                    });
                    this.model = new Rr(this.gl, {
                        geometry: this.geometry,
                        program: t
                    }), this.model.rotation.y = Math.PI, this.model.setParent(this.group)
                }
                createBounds({
                    sizes: t
                }) {
                    this.sizes = t, this.collectionsBounds = this.element.getBoundingClientRect(), this.detailBounds = ln(this.detailMedia), this.updateScale(), this.updateX()
                }
                show() {
                    br.to(this.opacity, {
                        delay: .5,
                        multiplier: 1,
                        onStart: t => {
                            this.group.visible = !0
                        }
                    })
                }
                hide() {
                    br.to(this.opacity, {
                        multiplier: 0,
                        onComplete: t => {
                            this.group.visible = !1
                        }
                    })
                }
                onClick(t) {
                    t.preventDefault(), t.stopPropagation(), this.rotation.target += Math.PI, this.rotation.target = this.rotation.target % (2 * Math.PI), br.to(this.rotation, {
                        current: this.rotation.target,
                        duration: 1,
                        ease: "expo.inOut"
                    })
                }
                onMouseEnter() {
                    this.rotation.target += Math.PI, this.rotation.target = this.rotation.target % (2 * Math.PI), br.to(this.rotation, {
                        current: this.rotation.target,
                        duration: 1,
                        ease: "expo.inOut"
                    })
                }
                onMouseLeave() {
                    this.rotation.target += Math.PI, br.to(this.rotation, {
                        current: this.rotation.target,
                        duration: 1,
                        ease: "expo.inOut"
                    })
                }
                onResize(t, e) {
                    this.createBounds(t), this.updateX(e && e.x)
                }
                onOpen() {
                    br.to(this, {
                        animation: 1,
                        duration: 2,
                        ease: "expo.inOut"
                    })
                }
                onClose() {
                    br.to(this, {
                        animation: 0,
                        duration: 2,
                        ease: "expo.inOut"
                    }), br.to(this.rotation, {
                        current: 0,
                        target: 0,
                        duration: 2,
                        ease: "expo.inOut"
                    })
                }
                updateScale() {
                    const t = br.utils.interpolate(this.collectionsBounds.height, this.detailBounds.height, this.animation),
                        e = br.utils.interpolate(this.collectionsBounds.width, this.detailBounds.width, this.animation);
                    this.height = t / window.innerHeight, this.width = e / window.innerWidth, this.jewlery.scale.x = this.sizes.width * this.width, this.jewlery.scale.y = this.sizes.height * this.height, this.model.scale.x = this.sizes.width * this.width, this.model.scale.y = this.sizes.height * this.height
                }
                updateX(t = 0) {
                    const e = br.utils.interpolate(this.collectionsBounds.left + t, this.detailBounds.left, this.animation);
                    this.x = e / window.innerWidth, this.group.position.x = -this.sizes.width / 2 + this.jewlery.scale.x / 2 + this.x * this.sizes.width, this.group.position.z = br.utils.interpolate(0, .1, this.animation)
                }
                updateY(t = 0) {
                    const e = .5 * Math.sin(this.original / 10 * (2 * Math.PI) + this.frame / 500);
                    this.group.position.y = br.utils.interpolate(e, 0, this.animation), this.group.position.y += t / window.innerHeight * this.sizes.height
                }
                update(t, e, i) {
                    this.updateScale(), this.updateX(t.current), this.updateY(i), this.animation > .01 ? (this.jewlery.program.depthTest = !1, this.jewlery.program.depthWrite = !1, this.model.program.depthTest = !1, this.model.program.depthWrite = !1) : (this.jewlery.program.depthTest = !0, this.jewlery.program.depthWrite = !0, this.model.program.depthTest = !0, this.model.program.depthWrite = !0);
                    const s = br.utils.mapRange(.25 * -this.sizes.width, .25 * this.sizes.width, .3 * this.group.position.y, .3 * -this.group.position.y, this.group.position.x),
                        r = .01 * Math.PI;
                    this.group.rotation.y = br.utils.interpolate(0, 2 * Math.PI, this.animation) + br.utils.interpolate(0, this.rotation.current, this.animation), this.group.rotation.z = br.utils.interpolate(s, r, this.animation), this.opacity.target = br.utils.clamp(0, 1, this.animation + (e === this.index ? 1 : .4)), this.opacity.current = br.utils.interpolate(this.opacity.current, this.opacity.target, this.opacity.lerp), this.model.program.uniforms.uAlpha.value = this.opacity.multiplier * this.opacity.current, this.model.program.uniforms.uSpeed.value = .005 * (t.current - t.last), this.model.program.uniforms.uTime.value += .01, this.jewlery.program.uniforms.uAlpha.value = this.opacity.multiplier * this.opacity.current, this.jewlery.program.uniforms.uSpeed.value = .005 * (t.current - t.last), this.jewlery.program.uniforms.uTime.value += .01, this.frame += 1
                }
                destroy() {
                    this.animation = 0, this.opacity.multiplier = 0
                }
            };
        class yn {
            constructor({
                template: t
            }) {
                this.template = t, this.x = {
                    start: 0,
                    distance: 0,
                    end: 0
                }, this.y = {
                    start: 0,
                    distance: 0,
                    end: 0
                }, this.createRenderer(), this.createCamera(), this.createScene(), this.onResize()
            }
            createRenderer() {
                this.renderer = new _({
                    alpha: !0,
                    antialias: !0,
                    dpr: Math.min(window.devicePixelRatio, 2)
                }), this.gl = this.renderer.gl, document.body.appendChild(this.gl.canvas)
            }
            createCamera() {
                this.camera = new D(this.gl), this.camera.position.z = 5
            }
            createScene() {
                this.scene = new L
            }
            createHome() {
                this.home = new class {
                    constructor({
                        gl: t,
                        scene: e,
                        sizes: i
                    }) {
                        this.gl = t, this.scene = e, this.sizes = i, this.group = new L, this.galleryElement = document.querySelector(".home__gallery"), this.mediasElements = document.querySelectorAll(".home__gallery__media__image"), this.y = {
                            current: 0,
                            target: 0,
                            lerp: .1
                        }, this.scrollCurrent = {
                            x: 0,
                            y: 0
                        }, this.scroll = {
                            x: 0,
                            y: 0
                        }, this.speed = {
                            current: 0,
                            target: 0,
                            lerp: .1
                        }, this.velocity = 2, this.createGeometry(), this.createGallery(), this.onResize({
                            sizes: this.sizes
                        })
                    }
                    createGeometry() {
                        this.geometry = new U(this.gl, {
                            heightSegments: 20,
                            widthSegments: 20
                        })
                    }
                    createGallery() {
                        this.medias = q()(this.mediasElements, ((t, e) => new class {
                            constructor({
                                element: t,
                                geometry: e,
                                gl: i,
                                index: s,
                                scene: r,
                                sizes: n
                            }) {
                                this.element = t, this.geometry = e, this.gl = i, this.index = s, this.scene = r, this.sizes = n, this.extra = {
                                    x: 0,
                                    y: 0
                                }, this.createTexture(), this.createProgram(), this.createMesh(), this.createBounds({
                                    sizes: this.sizes
                                })
                            }
                            createTexture() {
                                const t = this.element;
                                this.texture = window.TEXTURES[t.getAttribute("data-src")]
                            }
                            createProgram() {
                                this.program = new Ar(this.gl, {
                                    fragment: "precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texture = texture2D(tMap, vUv);\n\n  gl_FragColor = vec4(texture.rgb, texture.a * uAlpha);\n}\n",
                                    vertex: "#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying float speed;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  newPosition.z += (sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0)) * uSpeed;\n\n  gl_Position = projectionMatrix * newPosition;\n}\n",
                                    uniforms: {
                                        uAlpha: {
                                            value: 0
                                        },
                                        uSpeed: {
                                            value: 0
                                        },
                                        uViewportSizes: {
                                            value: [this.sizes.width, this.sizes.height]
                                        },
                                        tMap: {
                                            value: this.texture
                                        }
                                    }
                                })
                            }
                            createMesh() {
                                this.mesh = new Rr(this.gl, {
                                    geometry: this.geometry,
                                    program: this.program
                                }), this.mesh.setParent(this.scene)
                            }
                            createBounds({
                                sizes: t
                            }) {
                                this.sizes = t, this.bounds = this.element.getBoundingClientRect(), this.updateScale(), this.updateX(), this.updateY()
                            }
                            show(t) {
                                const e = t ? 2.5 : 0;
                                this.timelineIn = br.timeline({
                                    delay: br.utils.random(e, e + 1.5)
                                }), this.timelineIn.fromTo(this.program.uniforms.uAlpha, {
                                    value: 0
                                }, {
                                    duration: 2,
                                    ease: "expo.inOut",
                                    value: .4
                                }, "start"), this.timelineIn.fromTo(this.mesh.position, {
                                    z: br.utils.random(2, 6)
                                }, {
                                    duration: 2,
                                    ease: "expo.inOut",
                                    z: 0
                                }, "start")
                            }
                            hide() {}
                            onResize(t, e) {
                                this.extra = {
                                    x: 0,
                                    y: 0
                                }, this.createBounds(t), this.updateX(e && e.x), this.updateY(e && e.y)
                            }
                            updateScale() {
                                this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.sizes.width * this.width, this.mesh.scale.y = this.sizes.height * this.height
                            }
                            updateX(t = 0) {
                                this.x = (this.bounds.left + t) / window.innerWidth, this.mesh.position.x = -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra.x
                            }
                            updateY(t = 0) {
                                this.y = (this.bounds.top + t) / window.innerHeight, this.mesh.position.y = this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height + this.extra.y
                            }
                            update(t, e) {
                                this.updateX(), this.updateY(t.y), this.program.uniforms.uSpeed.value = e
                            }
                        }({
                            element: t,
                            geometry: this.geometry,
                            index: e,
                            gl: this.gl,
                            scene: this.group,
                            sizes: this.sizes
                        })))
                    }
                    show(t) {
                        this.group.setParent(this.scene), q()(this.medias, (e => e.show(t)))
                    }
                    hide() {
                        this.group.setParent(null), q()(this.medias, (t => t.hide()))
                    }
                    onResize(t) {
                        this.galleryBounds = this.galleryElement.getBoundingClientRect(), this.sizes = t.sizes, this.gallerySizes = {
                            height: this.galleryBounds.height / window.innerHeight * this.sizes.height,
                            width: this.galleryBounds.width / window.innerWidth * this.sizes.width
                        }, this.scroll.y = this.y.target = 0, q()(this.medias, (e => e.onResize(t, this.scroll)))
                    }
                    onTouchDown({
                        x: t,
                        y: e
                    }) {
                        this.scrollCurrent.x = this.scroll.x, this.scrollCurrent.y = this.scroll.y
                    }
                    onTouchMove({
                        x: t,
                        y: e
                    }) {
                        const i = e.start - e.end;
                        this.y.target = this.scrollCurrent.y - i
                    }
                    onTouchUp({
                        x: t,
                        y: e
                    }) {}
                    onWheel({
                        pixelX: t,
                        pixelY: e
                    }) {
                        this.y.target += e, this.velocity = e > 0 ? 2 : -2
                    }
                    update() {
                        this.y.target += this.velocity, this.speed.target = .001 * (this.y.target - this.y.current), this.speed.current = br.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp), this.y.current = br.utils.interpolate(this.y.current, this.y.target, this.y.lerp), this.scroll.y < this.y.current ? this.y.direction = "top" : this.scroll.y > this.y.current && (this.y.direction = "bottom"), this.scroll.y = this.y.current, q()(this.medias, ((t, e) => {
                            const i = .5 * this.sizes.height,
                                s = t.mesh.scale.y / 2;
                            "top" === this.y.direction ? t.mesh.position.y + s < -i && (t.extra.y += this.gallerySizes.height) : "bottom" === this.y.direction && t.mesh.position.y - s > i && (t.extra.y -= this.gallerySizes.height), t.update(this.scroll, this.speed.current)
                        }))
                    }
                    destroy() {
                        this.scene.removeChild(this.group)
                    }
                }({
                    gl: this.gl,
                    scene: this.scene,
                    sizes: this.sizes
                })
            }
            createAbout() {
                this.about = new class {
                    constructor({
                        gl: t,
                        scene: e,
                        sizes: i
                    }) {
                        this.gl = t, this.scene = e, this.sizes = i, this.group = new L, this.createGeometry(), this.createGalleries(), this.onResize({
                            sizes: this.sizes
                        })
                    }
                    createGeometry() {
                        this.geometry = new U(this.gl, {
                            heightSegments: 30,
                            widthSegments: 20
                        })
                    }
                    createGalleries() {
                        this.galleriesElements = document.querySelectorAll(".about__gallery"), this.galleries = q()(this.galleriesElements, ((t, e) => new Dr({
                            element: t,
                            geometry: this.geometry,
                            index: e,
                            gl: this.gl,
                            scene: this.group,
                            sizes: this.sizes
                        })))
                    }
                    show() {
                        this.group.setParent(this.scene), q()(this.galleries, (t => t.show()))
                    }
                    hide() {
                        this.group.setParent(null), q()(this.galleries, (t => t.hide()))
                    }
                    onResize(t) {
                        q()(this.galleries, (e => e.onResize(t)))
                    }
                    onTouchDown(t) {
                        q()(this.galleries, (e => e.onTouchDown(t)))
                    }
                    onTouchMove(t) {
                        q()(this.galleries, (e => e.onTouchMove(t)))
                    }
                    onTouchUp(t) {
                        q()(this.galleries, (e => e.onTouchUp(t)))
                    }
                    onWheel({
                        pixelX: t,
                        pixelY: e
                    }) {}
                    update(t) {
                        q()(this.galleries, (e => e.update(t)))
                    }
                    destroy() {
                        q()(this.galleries, (t => t.destroy()))
                    }
                }({
                    gl: this.gl,
                    scene: this.scene,
                    sizes: this.sizes
                })
            }
            createCollections() {
                this.collections = new class {
                    constructor({
                        camera: t,
                        gl: e,
                        renderer: i,
                        scene: s,
                        sizes: r
                    }) {
                        this.id = "collections", this.camera = t, this.gl = e, this.renderer = i, this.scene = s, this.sizes = r, this.transformPrefix = an()("transform"), this.group = new L, this.galleryWrapperElement = document.querySelector(".collections__gallery__wrapper"), this.titlesElement = document.querySelector(".collections__titles"), this.titlesItemsElements = document.querySelectorAll(".collections__titles__wrapper:nth-child(2) .collections__titles__item"), this.collectionsElements = document.querySelectorAll(".collections__article"), this.collectionsElementsLinks = document.querySelectorAll(".collections__gallery__link"), this.collectionsElementsActive = "collections__article--active", this.detailsElements = document.querySelectorAll(".detail"), this.mediasElements = document.querySelectorAll(".collections__gallery__media"), this.mouse = new Nr, this.scroll = {
                            current: 0,
                            target: 0,
                            lerp: .1,
                            velocity: 1
                        }, this.createRaycast(), this.createGeometry(), this.createGallery(), this.onResize({
                            sizes: this.sizes
                        })
                    }
                    createRaycast() {
                        this.raycast = new rn(this.gl)
                    }
                    createGeometry() {
                        this.geometry = new U(this.gl, {
                            heightSegments: 30,
                            widthSegments: 20
                        })
                    }
                    createGallery() {
                        this.medias = un(this.mediasElements, ((t, e) => new _n({
                            detail: this.detailsElements[e],
                            element: t,
                            geometry: this.geometry,
                            gl: this.gl,
                            index: e,
                            scene: this.group,
                            sizes: this.sizes
                        }))), this.mediasMeshes = un(this.medias, (t => t.jewlery))
                    }
                    async show(t, e) {
                        if (this.isOpen = !1, this.isVisible = !0, this.group.setParent(this.scene), un(this.medias, (t => t.show())), t && e.indexOf("detail") > -1) {
                            const t = this.change(e);
                            this.scroll.target = -t.collectionsBounds.left - .5 * t.collectionsBounds.width + .5 * window.innerWidth, this.index = t.index
                        }
                    }
                    hide() {
                        document.body.style.cursor = "", this.isOpen = !1, this.isVisible = !1, this.group.setParent(null), un(this.medias, (t => {
                            t.destroy()
                        }))
                    }
                    change(t) {
                        if (!(t.indexOf("collections") > -1)) {
                            this.isOpen = !0;
                            const e = t.replace("/magicaxismodels/detail/", ""),
                                i = hn()(this.medias, (t => t.id === e));
                            return un(this.medias, (t => {
                                i !== t && t.hide()
                            })), i.onOpen(), i
                        }
                        this.isOpen = !1, un(this.medias, (t => {
                            t.show(), t.onClose()
                        }))
                    }
                    onResize(t) {
                        this.sizes = t.sizes, this.bounds = this.galleryWrapperElement.getBoundingClientRect(), this.isFirstResize || (this.scroll.target = this.scroll.last = this.scroll.target = 0), un(this.medias, (e => e.onResize(t, this.scroll))), un(this.collectionsElementsLinks, ((t, e) => {
                            t.bounds = ln(t)
                        })), un(this.titlesItemsElements, (t => {
                            t.bounds = ln(t)
                        })), this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth, this.isFirstResize = !0
                    }
                    onTouchDown({
                        x: t,
                        y: e
                    }) {
                        this.isVisible && !this.isOpen && (this.distance = 0, this.isDown = !0, this.scroll.last = this.scroll.current)
                    }
                    onTouchMove({
                        x: t,
                        y: e
                    }) {
                        if (!this.isVisible || this.isOpen) return;
                        this.mouse.set(t.end / this.renderer.width * 2 - 1, 2 * (1 - e.end / this.renderer.height) - 1), this.raycast.castMouse(this.camera, this.mouse);
                        const [i] = this.raycast.intersectBounds(this.mediasMeshes);
                        this.hit = i ? i.index : null, null !== this.hit && this.index === this.hit ? document.body.style.cursor = "pointer" : document.body.style.cursor = "", this.isDown && (this.distance = t.start - t.end, this.scroll.target = this.scroll.last - this.distance)
                    }
                    onTouchUp({
                        x: t,
                        y: e
                    }) {
                        this.isVisible && !this.isOpen && (this.isDown = !1, this.distance > 50 || this.distance < -50 || null !== this.hit && this.index === this.hit && (document.body.style.cursor = "", this.collectionsElementsLinks[this.hit].click()))
                    }
                    onWheel({
                        pixelY: t
                    }) {
                        this.isVisible && !this.isOpen && (this.scroll.target -= t)
                    }
                    onChange(t) {
                        if (this.index = t, this.mediasElements[this.index]) {
                            const t = parseInt(this.mediasElements[this.index].getAttribute("data-index"));
                            un(this.collectionsElements, ((e, i) => {
                                i === t ? e.classList.add(this.collectionsElementsActive) : e.classList.remove(this.collectionsElementsActive)
                            }))
                        }
                    }
                    onUpdateTitle() {
                        const t = {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0
                        };
                        un(this.collectionsElementsLinks, ((e, i) => {
                            const s = e.getAttribute("data-index");
                            t[s] += e.bounds.width
                        }));
                        const e = [br.utils.clamp(0, 1, br.utils.mapRange(0, t[0], 0, 1, -this.scroll.current)), br.utils.clamp(0, 1, br.utils.mapRange(0, t[1], 0, 1, -this.scroll.current - t[0])), br.utils.clamp(0, 1, br.utils.mapRange(0, t[2], 0, 1, -this.scroll.current - t[0] - t[1])), br.utils.clamp(0, 1, br.utils.mapRange(0, t[3], 0, 1, -this.scroll.current - t[0] - t[1] - t[2]))];
                        let i = 0;
                        un(this.titlesItemsElements, ((t, s) => {
                            i += t.bounds.height * e[s]
                        })), this.titlesElement.style[this.transformPrefix] = `translateY(calc(-${i}px - 33.33% + ${.5*window.innerHeight}px))`
                    }
                    update(t) {
                        this.scroll.target = br.utils.clamp(-this.scroll.limit, 0, this.scroll.target), this.scroll.current = br.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp), this.scroll.last < this.scroll.current ? this.scroll.direction = "right" : this.scroll.last > this.scroll.current && (this.scroll.direction = "left");
                        const e = Math.floor(Math.abs((this.scroll.current - this.medias[0].collectionsBounds.width / 2) / this.scroll.limit) * (this.medias.length - 1));
                        this.index !== e && this.onChange(e), this.onUpdateTitle(), un(this.medias, ((e, i) => {
                            e.update(this.scroll, this.index, t.current)
                        })), this.scroll.last = this.scroll.current
                    }
                }({
                    camera: this.camera,
                    gl: this.gl,
                    renderer: this.renderer,
                    scene: this.scene,
                    sizes: this.sizes
                })
            }
            onPreloaded() {
                this.createAbout(), this.createCollections(), this.createHome(), this.onChange(this.template, !0)
            }
            onChange(t, e) {
                "/magicaxismodels/about" === t ? this.about.show(e) : this.about.hide(), "/magicaxismodels/collections" === t || t.indexOf("detail") > -1 ? this.collections.isVisible ? this.collections.change(t) : this.collections.show(e, t) : this.collections.hide(), "/magicaxismodels/" === t ? this.home.show(e) : this.home.hide(), this.template = t
            }
            onResize() {
                this.renderer.setSize(window.innerWidth, window.innerHeight), this.camera.perspective({
                    aspect: window.innerWidth / window.innerHeight
                });
                const t = this.camera.fov * (Math.PI / 180),
                    e = 2 * Math.tan(t / 2) * this.camera.position.z,
                    i = e * this.camera.aspect;
                this.sizes = {
                    height: e,
                    width: i
                };
                const s = {
                    sizes: this.sizes
                };
                this.about && this.about.onResize(s), this.collections && this.collections.onResize(s), this.home && this.home.onResize(s)
            }
            onTouchDown(t) {
                this.isDown = !0, this.x.start = t.touches ? t.touches[0].clientX : t.clientX, this.y.start = t.touches ? t.touches[0].clientY : t.clientY;
                const e = {
                    x: this.x,
                    y: this.y
                };
                this.about && this.about.onTouchDown(e), this.collections && this.collections.onTouchDown(e), this.home && this.home.onTouchDown(e)
            }
            onTouchMove(t) {
                const e = t.touches ? t.touches[0].clientX : t.clientX,
                    i = t.touches ? t.touches[0].clientY : t.clientY;
                this.x.end = e, this.y.end = i;
                const s = {
                    x: this.x,
                    y: this.y
                };
                this.collections && this.collections.onTouchMove(s), this.isDown && (this.about && this.about.onTouchMove(s), this.home && this.home.onTouchMove(s))
            }
            onTouchUp(t) {
                this.isDown = !1;
                const e = t.changedTouches ? t.changedTouches[0].clientX : t.clientX,
                    i = t.changedTouches ? t.changedTouches[0].clientY : t.clientY;
                this.x.end = e, this.y.end = i;
                const s = {
                    x: this.x,
                    y: this.y
                };
                this.about && this.about.onTouchUp(s), this.collections && this.collections.onTouchUp(s), this.home && this.home.onTouchUp(s)
            }
            onWheel(t) {
                this.collections && this.collections.onWheel(t), this.home && this.home.onWheel(t)
            }
            update(t) {
                this.about && this.about.update(t), this.collections && this.collections.update(t), this.home && this.home.update(), this.renderer.render({
                    camera: this.camera,
                    scene: this.scene
                })
            }
        }
        const xn = class {
            constructor({
                element: t,
                elements: e
            }) {
                dn()(this);
                const {
                    animationDelay: i,
                    animationTarget: s
                } = t.dataset;
                this.delay = i, this.element = t, this.elements = e, this.target = s ? t.closest(s) : t, this.transformPrefix = an()("transform"), this.isVisible = !1, "IntersectionObserver" in window ? (this.createObserver(), this.animateOut()) : this.animateIn()
            }
            createObserver() {
                this.observer = new window.IntersectionObserver((t => {
                    t.forEach((t => {
                        !this.isVisible && t.isIntersecting ? this.animateIn() : this.animateOut()
                    }))
                })).observe(this.target)
            }
            animateIn() {
                this.isVisible = !0
            }
            animateOut() {
                this.isVisible = !1
            }
        };
        var wn = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            bn = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            Mn = Math.PI / 180,
            Tn = (Math.PI, Math.sin),
            An = Math.cos,
            En = Math.abs,
            Sn = Math.sqrt,
            On = (Math.atan2, function(t) {
                return "number" == typeof t
            }),
            zn = 1e5,
            Pn = function(t) {
                return Math.round(t * zn) / zn || 0
            };

        function Ln(t, e, i, s, r, n, a, o, h) {
            if (t !== o || e !== h) {
                i = En(i), s = En(s);
                var l = r % 360 * Mn,
                    u = An(l),
                    c = Tn(l),
                    d = Math.PI,
                    p = 2 * d,
                    m = (t - o) / 2,
                    f = (e - h) / 2,
                    g = u * m + c * f,
                    v = -c * m + u * f,
                    _ = g * g,
                    y = v * v,
                    x = _ / (i * i) + y / (s * s);
                x > 1 && (i = Sn(x) * i, s = Sn(x) * s);
                var w = i * i,
                    b = s * s,
                    M = (w * b - w * y - b * _) / (w * y + b * _);
                M < 0 && (M = 0);
                var T = (n === a ? -1 : 1) * Sn(M),
                    A = T * (i * v / s),
                    E = T * (-s * g / i),
                    S = (t + o) / 2 + (u * A - c * E),
                    O = (e + h) / 2 + (c * A + u * E),
                    z = (g - A) / i,
                    P = (v - E) / s,
                    L = (-g - A) / i,
                    C = (-v - E) / s,
                    R = z * z + P * P,
                    F = (P < 0 ? -1 : 1) * Math.acos(z / Sn(R)),
                    D = (z * C - P * L < 0 ? -1 : 1) * Math.acos((z * L + P * C) / Sn(R * (L * L + C * C)));
                isNaN(D) && (D = d), !a && D > 0 ? D -= p : a && D < 0 && (D += p), F %= p, D %= p;
                var I, k = Math.ceil(En(D) / (p / 4)),
                    j = [],
                    B = D / k,
                    U = 4 / 3 * Tn(B / 2) / (1 + An(B / 2)),
                    N = u * i,
                    q = c * i,
                    Y = c * -s,
                    V = u * s;
                for (I = 0; I < k; I++) g = An(r = F + I * B), v = Tn(r), z = An(r += B), P = Tn(r), j.push(g - U * v, v + U * g, z + U * P, P - U * z, z, P);
                for (I = 0; I < j.length; I += 2) g = j[I], v = j[I + 1], j[I] = g * N + v * Y + S, j[I + 1] = g * q + v * V + O;
                return j[I - 2] = o, j[I - 1] = h, j
            }
        }

        function Cn(t) {
            var e, i, s, r, n, a, o, h, l, u, c, d, p, m, f, g = (t + "").replace(bn, (function(t) {
                    var e = +t;
                    return e < 1e-4 && e > -1e-4 ? 0 : e
                })).match(wn) || [],
                v = [],
                _ = 0,
                y = 0,
                x = 2 / 3,
                w = g.length,
                b = 0,
                M = "ERROR: malformed path: " + t,
                T = function(t, e, i, s) {
                    u = (i - t) / 3, c = (s - e) / 3, o.push(t + u, e + c, i - u, s - c, i, s)
                };
            if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(M), v;
            for (e = 0; e < w; e++)
                if (p = n, isNaN(g[e]) ? a = (n = g[e].toUpperCase()) !== g[e] : e--, s = +g[e + 1], r = +g[e + 2], a && (s += _, r += y), e || (h = s, l = r), "M" === n) o && (o.length < 8 ? v.length -= 1 : b += o.length), _ = h = s, y = l = r, o = [s, r], v.push(o), e += 2, n = "L";
                else if ("C" === n) o || (o = [0, 0]), a || (_ = y = 0), o.push(s, r, _ + 1 * g[e + 3], y + 1 * g[e + 4], _ += 1 * g[e + 5], y += 1 * g[e + 6]), e += 6;
            else if ("S" === n) u = _, c = y, "C" !== p && "S" !== p || (u += _ - o[o.length - 4], c += y - o[o.length - 3]), a || (_ = y = 0), o.push(u, c, s, r, _ += 1 * g[e + 3], y += 1 * g[e + 4]), e += 4;
            else if ("Q" === n) u = _ + (s - _) * x, c = y + (r - y) * x, a || (_ = y = 0), _ += 1 * g[e + 3], y += 1 * g[e + 4], o.push(u, c, _ + (s - _) * x, y + (r - y) * x, _, y), e += 4;
            else if ("T" === n) u = _ - o[o.length - 4], c = y - o[o.length - 3], o.push(_ + u, y + c, s + (_ + 1.5 * u - s) * x, r + (y + 1.5 * c - r) * x, _ = s, y = r), e += 2;
            else if ("H" === n) T(_, y, _ = s, y), e += 1;
            else if ("V" === n) T(_, y, _, y = s + (a ? y - _ : 0)), e += 1;
            else if ("L" === n || "Z" === n) "Z" === n && (s = h, r = l, o.closed = !0), ("L" === n || En(_ - s) > .5 || En(y - r) > .5) && (T(_, y, s, r), "L" === n && (e += 2)), _ = s, y = r;
            else if ("A" === n) {
                if (m = g[e + 4], f = g[e + 5], u = g[e + 6], c = g[e + 7], i = 7, m.length > 1 && (m.length < 3 ? (c = u, u = f, i--) : (c = f, u = m.substr(2), i -= 2), f = m.charAt(1), m = m.charAt(0)), d = Ln(_, y, +g[e + 1], +g[e + 2], +g[e + 3], +m, +f, (a ? _ : 0) + 1 * u, (a ? y : 0) + 1 * c), e += i, d)
                    for (i = 0; i < d.length; i++) o.push(d[i]);
                _ = o[o.length - 2], y = o[o.length - 1]
            } else console.log(M);
            return (e = o.length) < 6 ? (v.pop(), e = 0) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), v.totalPoints = b + e, v
        }

        function Rn(t) {
            On(t[0]) && (t = [t]);
            var e, i, s, r, n = "",
                a = t.length;
            for (i = 0; i < a; i++) {
                for (r = t[i], n += "M" + Pn(r[0]) + "," + Pn(r[1]) + " C", e = r.length, s = 2; s < e; s++) n += Pn(r[s++]) + "," + Pn(r[s++]) + " " + Pn(r[s++]) + "," + Pn(r[s++]) + " " + Pn(r[s++]) + "," + Pn(r[s]) + " ";
                r.closed && (n += "z")
            }
            return n
        }
        let Fn, Dn, In = () => Fn || "undefined" != typeof window && (Fn = window.gsap) && Fn.registerPlugin && Fn,
            kn = () => {
                Fn = In(), Fn ? (Fn.registerEase("_CE", qn.create), Dn = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
            },
            jn = t => ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3,
            Bn = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
            Un = /[cLlsSaAhHvVtTqQ]/g,
            Nn = function(t, e, i, s, r, n, a, o, h, l, u) {
                let c, d = (t + i) / 2,
                    p = (e + s) / 2,
                    m = (i + r) / 2,
                    f = (s + n) / 2,
                    g = (r + a) / 2,
                    v = (n + o) / 2,
                    _ = (d + m) / 2,
                    y = (p + f) / 2,
                    x = (m + g) / 2,
                    w = (f + v) / 2,
                    b = (_ + x) / 2,
                    M = (y + w) / 2,
                    T = a - t,
                    A = o - e,
                    E = Math.abs((i - a) * A - (s - o) * T),
                    S = Math.abs((r - a) * A - (n - o) * T);
                return l || (l = [{
                    x: t,
                    y: e
                }, {
                    x: a,
                    y: o
                }], u = 1), l.splice(u || l.length - 1, 0, {
                    x: b,
                    y: M
                }), (E + S) * (E + S) > h * (T * T + A * A) && (c = l.length, Nn(t, e, d, p, _, y, b, M, h, l, u), Nn(b, M, x, w, g, v, a, o, h, l, u + 1 + (l.length - c))), l
            };
        class qn {
            constructor(t, e, i) {
                Dn || kn(), this.id = t, this.setData(e, i)
            }
            setData(t, e) {
                e = e || {};
                let i, s, r, n, a, o, h, l, u, c = (t = t || "0,0,1,1").match(Bn),
                    d = 1,
                    p = [],
                    m = [],
                    f = e.precision || 1,
                    g = f <= 1;
                if (this.data = t, (Un.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (c = Cn(t)[0]), i = c.length, 4 === i) c.unshift(0, 0), c.push(1, 1), i = 8;
                else if ((i - 2) % 6) throw "Invalid CustomEase";
                for (0 == +c[0] && 1 == +c[i - 2] || ((t, e, i) => {
                        i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                        let s, r = -1 * +t[0],
                            n = -i,
                            a = t.length,
                            o = 1 / (+t[a - 2] + r),
                            h = -e || (Math.abs(+t[a - 1] - +t[1]) < .01 * (+t[a - 2] - +t[0]) ? (t => {
                                let e, i = t.length,
                                    s = 1e20;
                                for (e = 1; e < i; e += 6) + t[e] < s && (s = +t[e]);
                                return s
                            })(t) + n : +t[a - 1] + n);
                        for (h = h ? 1 / h : -o, s = 0; s < a; s += 2) t[s] = (+t[s] + r) * o, t[s + 1] = (+t[s + 1] + n) * h
                    })(c, e.height, e.originY), this.segment = c, n = 2; n < i; n += 6) s = {
                    x: +c[n - 2],
                    y: +c[n - 1]
                }, r = {
                    x: +c[n + 4],
                    y: +c[n + 5]
                }, p.push(s, r), Nn(s.x, s.y, +c[n], +c[n + 1], +c[n + 2], +c[n + 3], r.x, r.y, 1 / (2e5 * f), p, p.length - 1);
                for (i = p.length, n = 0; n < i; n++) h = p[n], l = p[n - 1] || h, (h.x > l.x || l.y !== h.y && l.x === h.x || h === l) && h.x <= 1 ? (l.cx = h.x - l.x, l.cy = h.y - l.y, l.n = h, l.nx = h.x, g && n > 1 && Math.abs(l.cy / l.cx - p[n - 2].cy / p[n - 2].cx) > 2 && (g = 0), l.cx < d && (l.cx ? d = l.cx : (l.cx = .001, n === i - 1 && (l.x -= .001, d = Math.min(d, .001), g = 0)))) : (p.splice(n--, 1), i--);
                if (i = 1 / d + 1 | 0, a = 1 / i, o = 0, h = p[0], g) {
                    for (n = 0; n < i; n++) u = n * a, h.nx < u && (h = p[++o]), s = h.y + (u - h.x) / h.cx * h.cy, m[n] = {
                        x: u,
                        cx: a,
                        y: s,
                        cy: 0,
                        nx: 9
                    }, n && (m[n - 1].cy = s - m[n - 1].y);
                    m[i - 1].cy = p[p.length - 1].y - s
                } else {
                    for (n = 0; n < i; n++) h.nx < n * a && (h = p[++o]), m[n] = h;
                    o < p.length - 1 && (m[n - 1] = p[p.length - 2])
                }
                return this.ease = t => {
                    let e = m[t * i | 0] || m[i - 1];
                    return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                }, this.ease.custom = this, this.id && Fn.registerEase(this.id, this.ease), this
            }
            getSVGData(t) {
                return qn.getSVGData(this, t)
            }
            static create(t, e, i) {
                return new qn(t, e, i).ease
            }
            static register(t) {
                Fn = t, kn()
            }
            static get(t) {
                return Fn.parseEase(t)
            }
            static getSVGData(t, e) {
                let i, s, r, n, a, o, h, l, u, c, d = (e = e || {}).width || 100,
                    p = e.height || 100,
                    m = e.x || 0,
                    f = (e.y || 0) + p,
                    g = Fn.utils.toArray(e.path)[0];
                if (e.invert && (p = -p, f = 0), "string" == typeof t && (t = Fn.parseEase(t)), t.custom && (t = t.custom), t instanceof qn) i = Rn(function(t, e, i, s, r, n, a) {
                    for (var o, h, l, u, c, d = t.length; --d > -1;)
                        for (h = (o = t[d]).length, l = 0; l < h; l += 2) u = o[l], c = o[l + 1], o[l] = u * e + c * s + n, o[l + 1] = u * i + c * r + a;
                    return t._dirty = 1, t
                }([t.segment], d, 0, 0, -p, m, f));
                else {
                    for (i = [m, f], h = Math.max(5, 200 * (e.precision || 1)), n = 1 / h, h += 2, l = 5 / h, u = jn(m + n * d), c = jn(f + t(n) * -p), s = (c - f) / (u - m), r = 2; r < h; r++) a = jn(m + r * n * d), o = jn(f + t(r * n) * -p), (Math.abs((o - c) / (a - u) - s) > l || r === h - 1) && (i.push(u, c), s = (o - c) / (a - u)), u = a, c = o;
                    i = "M" + i.join(",")
                }
                return g && g.setAttribute("d", i), i
            }
        }
        In() && Fn.registerPlugin(qn), qn.version = "3.5.1", br.registerPlugin(qn);
        const Yn = qn.create("default", "0.77, 0, 0.175, 1");

        function Vn({
            element: t,
            expression: e = " ",
            append: i = !0
        }) {
            const s = function(t, e) {
                const i = t.split("<br>");
                let s = [];
                return r()(i, ((t, i) => {
                    i > 0 && s.push("<br>"), s = s.concat(t.split(e));
                    let n = !1,
                        a = "";
                    const o = [];
                    r()(s, (t => {
                        n || !t.includes("<a") && !t.includes("<strong") || (a = "", n = !0), n && (a += ` ${t}`), n && (t.includes("/a>") || t.includes("/strong>")) && (o.push(a), a = ""), n || "" !== a || o.push(t), n && (t.includes("/a>") || t.includes("/strong>")) && (n = !1)
                    })), s = o
                })), s
            }(t.innerHTML.toString().trim(), e);
            let n = "";
            r()(s, (t => {
                if (t.indexOf("<br>") > -1) {
                    const e = t.split("<br>");
                    r()(e, ((t, e) => {
                        n += e > 0 ? "<br>" + Wn(t) : Wn(t)
                    }))
                } else n += Wn(t)
            })), t.innerHTML = n;
            const a = t.querySelectorAll("span");
            return i && r()(a, (t => {
                const e = 1 === t.textContent.length,
                    i = "" !== t.innerHTML.trim(),
                    s = "&" !== t.textContent,
                    r = "-" !== t.textContent;
                e && i && s && r && (t.innerHTML = `${t.textContent}&nbsp;`)
            })), a
        }

        function Xn(t) {
            const e = [];
            let i = [],
                s = t[0].offsetTop;
            return r()(t, ((r, n) => {
                r.offsetTop === s && i.push(r), r.offsetTop !== s && (e.push(i), i = [], i.push(r), s = r.offsetTop), n + 1 === t.length && e.push(i)
            })), e
        }

        function Wn(t) {
            return "" === t ? t : " " === t ? "<span>&nbsp;</span>" : "<br>" === (t = t.trim()) ? "<br>" : `<span>${t}</span>` + (t.length > 1 ? " " : "")
        }
        const Gn = class extends xn {
            constructor({
                element: t,
                elements: e
            }) {
                super({
                    element: t,
                    elements: {}
                });
                const {
                    innerHTML: i
                } = this.element.querySelector("span");
                this.elements.text = document.createElement("div"), this.elements.text.innerHTML = i, this.elements.textSpans = Vn({
                    append: !1,
                    element: this.elements.text,
                    expression: ""
                }), this.elements.hover = document.createElement("div"), this.elements.hover.innerHTML = i, this.elements.hoverSpans = Vn({
                    append: !1,
                    element: this.elements.hover,
                    expression: ""
                }), this.element.innerHTML = "", this.element.appendChild(this.elements.text), this.element.appendChild(this.elements.hover), "center" === this.element.getAttribute("data-animation-position") ? br.set(this.elements.hover, {
                    left: "50%",
                    position: "absolute",
                    top: "50%",
                    x: "-50%",
                    y: "-50%"
                }) : br.set(this.elements.hover, {
                    left: 0,
                    position: "absolute",
                    top: 0
                }), this.timeline = br.timeline({
                    paused: !0
                }), this.timeline.to(this.elements.textSpans, {
                    duration: .5,
                    ease: Yn,
                    transform: "rotate3d(1, 0.2, 0, -90deg)",
                    stagger: .02
                }, 0), this.timeline.fromTo(this.elements.hoverSpans, {
                    transform: "rotate3d(1, 0.2, 0, 90deg)"
                }, {
                    duration: .5,
                    ease: Yn,
                    transform: "rotate3d(0, 0, 0, 90deg)",
                    stagger: .02
                }, .05), this.animateOut(), this.addEventListener()
            }
            animateIn() {}
            animateOut() {}
            onMouseEnter() {
                this.timeline.play()
            }
            onMouseLeave() {
                this.timeline.reverse()
            }
            addEventListener() {
                this.element.addEventListener("mouseenter", this.onMouseEnter), this.element.addEventListener("mouseleave", this.onMouseLeave)
            }
            removeEventListener() {
                this.element.addEventListener("mouseenter", this.onMouseEnter), this.element.addEventListener("mouseleave", this.onMouseLeave)
            }
        };
        class Hn extends fn {
            constructor({
                template: t
            }) {
                super({
                    element: ".navigation",
                    elements: {
                        items: ".navigation__list__item",
                        links: ".navigation__list__link"
                    }
                }), this.links = un(this.elements.links, (t => new Gn({
                    element: t
                }))), this.onChange(t)
            }
            onChange(t) {
                "/magicaxismodels/about" === t ? (br.set(this.element, {
                    color: "#37384C"
                }), br.set(this.elements.items[0], {
                    autoAlpha: 1
                }), br.set(this.elements.items[1], {
                    autoAlpha: 0
                })) : (br.set(this.element, {
                    color: "#F9F1E7"
                }), br.set(this.elements.items[0], {
                    autoAlpha: 0
                }), br.set(this.elements.items[1], {
                    autoAlpha: 1
                }))
            }
        }
        const $n = new Uint8Array(4);

        function Zn(t) {
            return 0 == (t & t - 1)
        }
        let Qn = 1;
        class Kn {
            constructor(t, {
                image: e,
                target: i = t.TEXTURE_2D,
                type: s = t.UNSIGNED_BYTE,
                format: r = t.RGBA,
                internalFormat: n = r,
                wrapS: a = t.CLAMP_TO_EDGE,
                wrapT: o = t.CLAMP_TO_EDGE,
                generateMipmaps: h = !0,
                minFilter: l = (h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR),
                magFilter: u = t.LINEAR,
                premultiplyAlpha: c = !1,
                unpackAlignment: d = 4,
                flipY: p = i == t.TEXTURE_2D,
                anisotropy: m = 0,
                level: f = 0,
                width: g,
                height: v = g
            } = {}) {
                this.gl = t, this.id = Qn++, this.image = e, this.target = i, this.type = s, this.format = r, this.internalFormat = n, this.minFilter = l, this.magFilter = u, this.wrapS = a, this.wrapT = o, this.generateMipmaps = h, this.premultiplyAlpha = c, this.unpackAlignment = d, this.flipY = p, this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy), this.level = f, this.width = g, this.height = v, this.texture = this.gl.createTexture(), this.store = {
                    image: null
                }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
            }
            bind() {
                this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
            }
            update(t = 0) {
                const e = !(this.image === this.store.image && !this.needsUpdate);
                if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), e) {
                    if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
                        if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
                            for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
                        else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                        else if (this.image.isCompressedTexture)
                            for (let t = 0; t < this.image.length; t++) this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
                        else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                        this.generateMipmaps && (this.gl.renderer.isWebgl2 || Zn(this.image.width) && Zn(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR)), this.onUpdate && this.onUpdate()
                    } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                        for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, $n);
                    else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, $n);
                    this.store.image = this.image
                }
            }
        }
        class Jn extends fn {
            constructor({
                canvas: t
            }) {
                super({
                    element: ".preloader",
                    elements: {
                        title: ".preloader__text",
                        number: ".preloader__number",
                        numberText: ".preloader__number__text"
                    }
                }), this.canvas = t, window.TEXTURES = {}, this.elements.titleSpans = Vn({
                    append: !0,
                    element: this.elements.title,
                    expression: "<br>"
                }), r()(this.elements.titleSpans, (t => {
                    Vn({
                        append: !1,
                        element: t,
                        expression: ""
                    })
                })), this.length = 0, this.createLoader()
            }
            createLoader() {
                this.animateIn = br.timeline(), this.animateIn.set(this.elements.title, {
                    autoAlpha: 1
                }), r()(this.elements.titleSpans, ((t, e) => {
                    const i = t.querySelectorAll("span");
                    this.animateIn.fromTo(t, {
                        autoAlpha: 0,
                        y: "100%"
                    }, {
                        autoAlpha: 1,
                        delay: .2 * e,
                        duration: 1.5,
                        onStart: t => {
                            br.fromTo(i, {
                                autoAlpha: 0,
                                display: "inline-block",
                                y: "100%"
                            }, {
                                autoAlpha: 1,
                                delay: .2,
                                display: "inline-block",
                                duration: 1,
                                ease: "back.inOut",
                                stagger: .015,
                                y: "0%"
                            })
                        },
                        ease: "expo.inOut",
                        y: "0%"
                    }, "start")
                })), this.animateIn.call((t => {
                    window.ASSETS.forEach((t => {
                        const e = new Kn(this.canvas.gl, {
                                generateMipmaps: !1
                            }),
                            i = new window.Image;
                        i.crossOrigin = "anonymous", i.src = t, i.onload = t => {
                            e.image = i, this.onAssetLoaded()
                        }, window.TEXTURES[t] = e
                    }))
                }))
            }
            onAssetLoaded(t) {
                this.length += 1;
                const e = this.length / window.ASSETS.length;
                this.elements.numberText.innerHTML = `${Math.round(100*e)}%`, 1 === e && this.onLoaded()
            }
            onLoaded() {
                return new Promise((t => {
                    this.emit("completed"), this.animateOut = br.timeline({
                        delay: 1
                    }), r()(this.elements.titleSpans, ((t, e) => {
                        const i = t.querySelectorAll("span");
                        this.animateOut.to(t, {
                            autoAlpha: 0,
                            delay: .2 * e,
                            duration: 1.5,
                            onStart: t => {
                                br.to(i, {
                                    autoAlpha: 0,
                                    delay: .2,
                                    display: "inline-block",
                                    duration: 1,
                                    ease: "back.inOut",
                                    stagger: .015,
                                    y: "-100%"
                                })
                            },
                            ease: "expo.inOut",
                            y: "-100%"
                        }, "start")
                    })), this.animateOut.to(this.elements.numberText, {
                        autoAlpha: 0,
                        duration: 1,
                        ease: Yn
                    }, "start"), this.animateOut.to(this.element, {
                        autoAlpha: 0,
                        duration: 1
                    }), this.animateOut.call((t => {
                        this.destroy()
                    }))
                }))
            }
            destroy() {
                this.element.parentNode.removeChild(this.element)
            }
        }
        class ta extends fn {
            constructor({
                element: t
            }) {
                super({
                    element: t
                }), this.createText(), this.createPath()
            }
            createText() {
                const t = this.element.textContent;
                this.elements.wrapper = this.element.querySelector("span"), this.elements.text = document.createElement("div"), this.elements.text.innerHTML = t, this.elements.textSpans = Vn({
                    append: !1,
                    element: this.elements.text,
                    expression: ""
                }), this.elements.hover = document.createElement("div"), this.elements.hover.innerHTML = t, this.elements.hoverSpans = Vn({
                    append: !1,
                    element: this.elements.hover,
                    expression: ""
                }), this.elements.wrapper.innerHTML = "", this.elements.wrapper.appendChild(this.elements.text), this.elements.wrapper.appendChild(this.elements.hover), br.set(this.elements.hover, {
                    left: 0,
                    position: "absolute",
                    top: 0
                }), this.timeline = br.timeline({
                    paused: !0
                }), this.timeline.to(this.elements.textSpans, {
                    duration: .5,
                    ease: Yn,
                    transform: "rotate3d(1, 0.1, 0, -90deg)",
                    stagger: .01
                }, 0), this.timeline.fromTo(this.elements.hoverSpans, {
                    transform: "rotate3d(1, 0.1, 0, 90deg)"
                }, {
                    duration: .5,
                    ease: Yn,
                    transform: "rotate3d(0, 0, 0, 90deg)",
                    stagger: .01
                }, .05)
            }
            createPath() {
                this.path = this.element.querySelector("path:last-child"), this.pathLength = this.path.getTotalLength(), this.pathValue = this.pathLength, br.set(this.path, {
                    strokeDashoffset: this.pathLength,
                    strokeDasharray: `${this.pathLength} ${this.pathLength}`
                })
            }
            onMouseEnter() {
                this.pathValue -= this.pathLength, br.to(this.path, {
                    duration: 1,
                    ease: Yn,
                    strokeDashoffset: this.pathValue
                }), this.timeline.play()
            }
            onMouseLeave() {
                this.pathValue -= this.pathLength, br.to(this.path, {
                    duration: 1,
                    ease: Yn,
                    strokeDashoffset: this.pathValue
                }), this.timeline.reverse()
            }
            addEventListeners() {
                this.onMouseEnterEvent = this.onMouseEnter.bind(this), this.onMouseLeaveEvent = this.onMouseLeave.bind(this), this.element.addEventListener("mouseenter", this.onMouseEnterEvent), this.element.addEventListener("mouseleave", this.onMouseLeaveEvent)
            }
            removeEventListeners() {
                this.element.removeEventListener("mouseenter", this.onMouseEnterEvent), this.element.removeEventListener("mouseleave", this.onMouseLeaveEvent)
            }
        }

        function ea(t, e, i) {
            return br.utils.interpolate(t, e, i)
        }

        function ia(t, e, i) {
            return br.utils.clamp(t, e, i)
        }

        function sa(t, e, i, s, r) {
            return br.utils.mapRange(e, i, s, r, t)
        }
        const ra = class extends xn {
                constructor({
                    element: t
                }) {
                    const e = [],
                        i = t.querySelectorAll("h1, h2, p");
                    0 !== i.length ? r()(i, (t => {
                        Vn({
                            element: t
                        }), Vn({
                            element: t
                        }), e.push(...t.querySelectorAll("span span"))
                    })) : (Vn({
                        element: t
                    }), Vn({
                        element: t
                    }), e.push(...t.querySelectorAll("span span"))), super({
                        element: t,
                        elements: {
                            lines: e
                        }
                    }), this.onResize(), "IntersectionObserver" in window && this.animateOut()
                }
                animateIn() {
                    super.animateIn(), r()(this.lines, ((t, e) => {
                        r()(t, (t => {
                            t.style.transition = `transform 1.5s ${.1*e}s cubic-bezier(0.77, 0, 0.175, 1)`, t.style[this.transformPrefix] = "translateY(0)"
                        }))
                    }))
                }
                animateOut() {
                    super.animateOut(), r()(this.lines, (t => {
                        r()(t, (t => {
                            t.style[this.transformPrefix] = "translateY(100%)"
                        }))
                    }))
                }
                onResize() {
                    this.lines = Xn(this.elements.lines)
                }
            },
            na = class extends xn {
                constructor({
                    element: t
                }) {
                    const e = Vn({
                        append: !1,
                        element: t
                    });
                    super({
                        element: t,
                        elements: {
                            lines: r()(e, (t => {
                                Vn({
                                    append: !1,
                                    element: t,
                                    expression: ""
                                })
                            }))
                        }
                    }), this.onResize(), "IntersectionObserver" in window && this.animateOut()
                }
                animateIn() {
                    super.animateIn(), this.timelineIn = br.timeline(), this.timelineIn.set(this.element, {
                        autoAlpha: 1
                    }), r()(this.lines, ((t, e) => {
                        r()(t, (t => {
                            const i = t.querySelectorAll("span");
                            this.timelineIn.fromTo(t, {
                                autoAlpha: 0,
                                y: "100%"
                            }, {
                                autoAlpha: 1,
                                delay: .2 * e,
                                duration: 1.5,
                                onStart: t => {
                                    br.fromTo(i, {
                                        autoAlpha: 0,
                                        display: "inline-block",
                                        y: "100%"
                                    }, {
                                        autoAlpha: 1,
                                        delay: t => .2 + br.utils.random(.2, .3),
                                        display: "inline-block",
                                        duration: 1,
                                        ease: "back.inOut",
                                        y: "0%"
                                    })
                                },
                                ease: "expo.inOut",
                                y: "0%"
                            }, "start")
                        }))
                    }))
                }
                animateOut() {
                    super.animateOut(), br.set(this.element, {
                        autoAlpha: 0
                    })
                }
                onResize() {
                    this.lines = Xn(this.elements.lines)
                }
            };
        class aa extends fn {
            constructor({
                element: t
            }) {
                super({
                    element: t
                }), this.createObserver()
            }
            createObserver() {
                this.observer = new window.IntersectionObserver((t => {
                    t.forEach((t => {
                        t.isIntersecting && (this.element.src || (this.element.src = this.element.getAttribute("data-src"), this.element.onload = t => {
                            this.element.classList.add("loaded")
                        }))
                    }))
                })), this.observer.observe(this.element)
            }
        }
        const oa = new class {
                isPhone() {
                    return this.isPhoneChecked || (this.isPhoneChecked = !0, this.isPhoneCheck = document.documentElement.classList.contains("phone")), this.isPhoneCheck
                }
                isTablet() {
                    return this.isTabletChecked || (this.isTabletChecked = !0, this.isTabletCheck = document.documentElement.classList.contains("phone")), this.isTabletCheck
                }
                isDesktop() {
                    return !this.isPhone()
                }
                isWebPSupported() {
                    if (!this.isWebPChecked) {
                        this.isWebPChecked = !0;
                        const t = document.createElement("canvas");
                        t.getContext && t.getContext("2d") && (this.isWebPCheck = 0 === t.toDataURL("image/webp").indexOf("data:image/webp"))
                    }
                    return this.isWebPCheck
                }
            },
            ha = class extends(mn()) {
                constructor({
                    classes: t,
                    element: e,
                    elements: i,
                    isScrollable: s = !0
                }) {
                    super(), dn()(this), this.classes = { ...t
                    }, this.selectors = {
                        element: e,
                        elements: {
                            preloaders: "[data-src]",
                            animationsButtons: '[data-animation="button"]',
                            animationsLinks: '[data-animation="link"]',
                            animationsParallaxes: '[data-animation="parallax"]',
                            animationsParagraphs: '[data-animation="paragraph"]',
                            animationsTitles: '[data-animation="title"]',
                            animationsTranslates: '[data-animation="translate"]',
                            animationsRotates: '[data-animation="rotate"]',
                            footer: ".footer",
                            footerCredits: ".footer__credits",
                            ...i
                        }
                    }, this.scroll = {
                        ease: .07,
                        position: 0,
                        current: 0,
                        target: 0,
                        limit: 0,
                        last: 0
                    }, this.isScrollable = s, this.transformPrefix = an()("transform"), this.create()
                }
                create() {
                    this.animations = [], this.element = this.selectors.element instanceof window.HTMLElement ? this.selectors.element : document.querySelector(this.selectors.element), this.elements = {}, r()(this.selectors.elements, ((t, e) => {
                        t instanceof window.HTMLElement || t instanceof window.NodeList || Array.isArray(t) ? this.elements[e] = t : (this.elements[e] = this.element.querySelectorAll(t), 0 === this.elements[e].length ? this.elements[e] = null : 1 === this.elements[e].length && (this.elements[e] = this.element.querySelector(t)))
                    })), this.createAnimations(), this.createObserver(), this.createPreloaders()
                }
                createAnimations() {
                    this.animationsButtons = un(this.elements.animationsButtons, ((t, e) => new ta({
                        element: t
                    }))), this.animations.push(...this.animationsButtons), this.animationsLinks = un(this.elements.animationsLinks, ((t, e) => new Gn({
                        element: t
                    }))), this.animations.push(...this.animationsLinks), this.animationsParallaxes = un(this.elements.animationsParallaxes, (t => new class {
                        constructor({
                            element: t
                        }) {
                            this.transform = an()("transform"), this.element = t, this.media = t.querySelector("img"), this.media.onload = t => {
                                this.onResize()
                            }, this.isVisible = !1, this.scale = {
                                current: 1.15,
                                target: 1.15
                            }, this.onResize()
                        }
                        onResize() {
                            this.offset = ln(this.element)
                        }
                        update(t) {
                            if (!this.offset) return;
                            const {
                                innerHeight: e
                            } = window;
                            t.current + e >= this.offset.top ? (this.scale = ia(1, 1.15, sa(this.offset.top - t.current, -this.offset.height, e, 1, 1.15)), this.media.style[this.transform] = `translate3d(0, 0, 0) scale(${this.scale})`) : this.media.style[this.transform] = "translate3d(0, 0, 0) scale(1.15)"
                        }
                    }({
                        element: t
                    }))), this.animations.push(...this.animationsParallaxes), this.animationsParagraphs = un(this.elements.animationsParagraphs, (t => new ra({
                        element: t
                    }))), this.animations.push(...this.animationsParagraphs), this.animationsRotates = un(this.elements.animationsRotates, (t => new class {
                        constructor({
                            element: t
                        }) {
                            this.transform = an()("transform"), this.element = t, this.isVisible = !1, this.rotate = {
                                current: 15,
                                target: 15
                            }, this.onResize()
                        }
                        onResize() {
                            this.offset = ln(this.element)
                        }
                        update(t) {
                            if (!this.offset) return;
                            const {
                                innerHeight: e
                            } = window;
                            t.current + e >= this.offset.top ? (this.rotate = ia(5, 15, sa(this.offset.top - t.current, -this.offset.height, e, 5, 15)), this.element.style[this.transform] = `translate3d(0, 0, 0) rotate(${this.rotate}deg)`) : this.element.style[this.transform] = "translate3d(0, 0, 0) rotate(-25deg)"
                        }
                    }({
                        element: t
                    }))), this.animations.push(...this.animationsRotates), this.animationsTitles = un(this.elements.animationsTitles, (t => new na({
                        element: t
                    }))), this.animations.push(...this.animationsTitles), this.animationsTranslates = un(this.elements.animationsTranslates, (t => new class {
                        constructor({
                            element: t
                        }) {
                            this.transform = an()("transform"), this.element = t, this.speed = this.element.getAttribute("data-animation-speed") || -1, this.child = this.element.childNodes[0], this.isVisible = !1, this.onResize(), this.parallax = {
                                current: -this.amount,
                                ease: .05,
                                target: -this.amount
                            }
                        }
                        onResize() {
                            this.amount = (window.innerWidth < Fr ? 0 : 50) * this.speed, this.offset = ln(this.element)
                        }
                        update(t) {
                            const {
                                innerHeight: e
                            } = window;
                            if (t.current + e >= this.offset.top) {
                                const e = br.utils.mapRange(-this.offset.height, this.offset.height, this.amount, -this.amount, this.offset.top - t.current);
                                this.element.style[this.transform] = `translate3d(0, ${e}px, 0)`
                            } else this.element.style[this.transform] = `translate3d(0, -${this.amount}px, 0)`
                        }
                    }({
                        element: t
                    }))), this.animations.push(...this.animationsTranslates)
                }
                createObserver() {
                    this.observer = new window.ResizeObserver((t => {
                        for (const e of t) window.requestAnimationFrame((t => {
                            this.scroll.limit = ln(this.elements.wrapper).height - window.innerHeight
                        }))
                    })), this.observer.observe(this.elements.wrapper)
                }
                createPreloaders() {
                    this.preloaders = un(this.elements.preloaders, (t => new aa({
                        element: t
                    })))
                }
                show(t) {
                    return this.scroll.position = this.scroll.current = this.scroll.target = 0, this.transform(this.elements.wrapper, this.scroll.current), this.isVisible = !0, this.addEventListeners(), br.set(document.documentElement, {
                        backgroundColor: this.element.getAttribute("data-background"),
                        color: this.element.getAttribute("data-color")
                    }), Promise.resolve()
                }
                hide(t) {
                    return this.isVisible = !1, this.removeEventListeners(), Promise.resolve()
                }
                transform(t, e) {
                    t.style[this.transformPrefix] = `translate3d(0, ${-Math.round(e)}px, 0)`
                }
                onResize() {
                    this.elements.wrapper && window.requestAnimationFrame((t => {
                        r()(this.animations, (t => {
                            t.onResize && t.onResize()
                        }))
                    }))
                }
                onTouchDown(t) {
                    oa.isPhone() && (this.isDown = !0, this.scroll.position = this.scroll.current, this.start = t.touches ? t.touches[0].clientY : t.clientY)
                }
                onTouchMove(t) {
                    if (!oa.isPhone() || !this.isDown) return;
                    const e = t.touches ? t.touches[0].clientY : t.clientY,
                        i = 3 * (this.start - e);
                    this.scroll.target = this.scroll.position + i
                }
                onTouchUp(t) {
                    oa.isPhone() && (this.isDown = !1)
                }
                onWheel(t) {
                    const e = t.pixelY;
                    return this.scroll.target += e, e
                }
                addEventListeners() {}
                removeEventListeners() {}
                update() {
                    this.scroll.target = ia(0, this.scroll.limit, this.scroll.target), this.scroll.current = ea(this.scroll.current, this.scroll.target, this.scroll.ease), this.scroll.current = Math.floor(this.scroll.current), this.scroll.current < .1 && (this.scroll.current = 0), this.isScrollable ? this.elements.wrapper && this.transform(this.elements.wrapper, this.scroll.current) : window.innerWidth < Fr ? this.transform(this.elements.wrapper, this.scroll.current) : this.elements.wrapper.style[this.transformPrefix] = "", r()(this.animations, (t => {
                        t.update && t.update(this.scroll)
                    })), this.scroll.last = this.scroll.current
                }
            },
            la = class extends ha {
                constructor() {
                    super({
                        id: "about",
                        classes: {
                            active: "about--active"
                        },
                        element: ".about",
                        elements: {
                            wrapper: ".about__wrapper",
                            navigation: document.querySelector(".navigation"),
                            title: ".about__title"
                        }
                    })
                }
                async show(t) {
                    return this.element.classList.add(this.classes.active), super.show(t)
                }
                async hide(t) {
                    return this.element.classList.remove(this.classes.active), super.hide(t)
                }
            },
            ua = class extends ha {
                constructor() {
                    super({
                        id: "collections",
                        classes: {
                            active: "collections--active"
                        },
                        element: ".collections",
                        elements: {
                            wrapper: ".collections__wrapper",
                            articles: ".collections__article",
                            articlesDescriptions: ".collections__article__description"
                        }
                    })
                }
                async show(t) {
                    return this.element.classList.add(this.classes.active), un(this.elements.articlesDescriptions, (t => {
                        Vn({
                            element: t,
                            expression: "<br>"
                        }), Vn({
                            element: t,
                            expression: "<br>"
                        })
                    })), super.show(t)
                }
                async hide(t) {
                    return this.element.classList.remove(this.classes.active), super.hide(t)
                }
            },
            ca = class extends ha {
                constructor({
                    element: t
                }) {
                    super({
                        classes: {
                            active: "detail--active",
                            collectionsActive: "collections--open"
                        },
                        element: t,
                        elements: {
                            collections: document.querySelector(".collections"),
                            wrapper: ".detail__wrapper",
                            media: ".detail__media",
                            collection: ".detail__information__collection__text",
                            title: ".detail__information__title",
                            titleSpans: [],
                            size: ".detail__information__highlight:first-of-type .detail__information__highlight__text",
                            sizeIcon: ".detail__information__highlight__icon--arrow",
                            sizeIconPaths: ".detail__information__highlight__icon--arrow path:nth-child(2), .detail__information__highlight__icon--arrow path:nth-child(3)",
                            sizeIconLine: ".detail__information__highlight__icon--arrow path:nth-child(1)",
                            sizeSpans: [],
                            star: ".detail__information__highlight:last-of-type .detail__information__highlight__text",
                            starIcon: ".detail__information__highlight__icon--star",
                            starIconPath: ".detail__information__highlight__icon--star path:first-child",
                            starSpans: [],
                            info: ".detail__information__item:first-of-type .detail__information__item__description",
                            infoLabel: ".detail__information__item:first-of-type .detail__information__item__title__text",
                            infoSpans: [],
                            disclaimer: ".detail__information__item:last-of-type .detail__information__item__description",
                            disclaimerLabel: ".detail__information__item:last-of-type .detail__information__item__title__text",
                            disclaimerSpans: [],
                            link: ".detail__information__link",
                            close: ".detail__button"
                        },
                        isScrollable: !1
                    }), this.createTitle(), this.createSize(), this.createStar(), this.createInfo(), this.createDisclaimer()
                }
                createTitle() {
                    this.elements.titleSpans = Vn({
                        append: !0,
                        element: this.elements.title,
                        expression: "<br>"
                    }), un(this.elements.titleSpans, (t => {
                        Vn({
                            append: !1,
                            element: t,
                            expression: ""
                        })
                    }))
                }
                createSize() {
                    Vn({
                        append: !0,
                        element: this.elements.size,
                        expression: " "
                    }), Vn({
                        append: !1,
                        element: this.elements.size,
                        expression: " "
                    }), this.elements.sizeSpans = this.elements.size.querySelectorAll("span span")
                }
                createStar() {
                    Vn({
                        append: !0,
                        element: this.elements.star,
                        expression: " "
                    }), Vn({
                        append: !1,
                        element: this.elements.star,
                        expression: " "
                    }), this.elements.starSpans = this.elements.star.querySelectorAll("span span")
                }
                createInfo() {
                    Vn({
                        append: !0,
                        element: this.elements.info,
                        expression: " "
                    }), Vn({
                        append: !1,
                        element: this.elements.info,
                        expression: " "
                    }), this.elements.infoSpans = this.elements.info.querySelectorAll("span span")
                }
                createDisclaimer() {
                    Vn({
                        append: !0,
                        element: this.elements.disclaimer,
                        expression: " "
                    }), Vn({
                        append: !1,
                        element: this.elements.disclaimer,
                        expression: " "
                    }), this.elements.disclaimerSpans = this.elements.disclaimer.querySelectorAll("span span")
                }
                show(t) {
                    return this.timelineIn = br.timeline({
                        delay: .5
                    }), this.timelineIn.call((t => {
                        this.element.classList.add(this.classes.active)
                    })), this.timelineIn.fromTo(this.elements.collection, {
                        y: "100%"
                    }, {
                        duration: 1,
                        ease: Yn,
                        y: "0%"
                    }, "start"), un(this.elements.titleSpans, ((t, e) => {
                        const i = t.querySelectorAll("span");
                        this.timelineIn.fromTo(t, {
                            autoAlpha: 0,
                            y: "100%"
                        }, {
                            autoAlpha: 1,
                            delay: .2 * e,
                            duration: 1.5,
                            onStart: t => {
                                br.fromTo(i, {
                                    autoAlpha: 0,
                                    display: "inline-block",
                                    y: "100%"
                                }, {
                                    autoAlpha: 1,
                                    delay: .2,
                                    display: "inline-block",
                                    duration: 1,
                                    ease: "back.inOut",
                                    stagger: .015,
                                    y: "0%"
                                })
                            },
                            ease: "expo.inOut",
                            y: "0%"
                        }, "start")
                    })), un(this.elements.sizeLines, ((t, e) => {
                        this.timelineIn.fromTo(t, {
                            y: "100%"
                        }, {
                            delay: .05 * e,
                            duration: 1,
                            ease: Yn,
                            y: "0%"
                        }, "-=0.9")
                    })), this.timelineIn.fromTo(this.elements.sizeIcon, {
                        autoAlpha: 0,
                        rotation: 45
                    }, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: Yn,
                        rotation: 0
                    }, "-=0.9"), this.timelineIn.fromTo(this.elements.sizeIconPaths[0], {
                        autoAlpha: 0,
                        transformOrigin: "50% 50%",
                        x: "-50%"
                    }, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: Yn,
                        transformOrigin: "50% 50%",
                        x: "0%"
                    }, "-=0.9"), this.timelineIn.fromTo(this.elements.sizeIconPaths[1], {
                        autoAlpha: 0,
                        transformOrigin: "50% 50%",
                        x: "50%"
                    }, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: Yn,
                        transformOrigin: "50% 50%",
                        x: "0%"
                    }, "-=1.5"), this.timelineIn.fromTo(this.elements.sizeIconLine, {
                        autoAlpha: 0,
                        scale: 0,
                        transformOrigin: "50% 50%"
                    }, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: Yn,
                        scale: 1,
                        transformOrigin: "50% 50%"
                    }, "-=1.5"), un(this.elements.starLines, ((t, e) => {
                        this.timelineIn.fromTo(t, {
                            y: "100%"
                        }, {
                            delay: .05 * e,
                            duration: 1,
                            ease: Yn,
                            y: "0%"
                        }, "-=0.9")
                    })), this.timelineIn.fromTo(this.elements.starIcon, {
                        autoAlpha: 0,
                        rotation: 360
                    }, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: Yn,
                        rotation: 0
                    }, "-=0.9"), this.timelineIn.fromTo(this.elements.starIconPath, {
                        autoAlpha: 0,
                        scale: .5,
                        transformOrigin: "50% 50%"
                    }, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: Yn,
                        scale: 1,
                        transformOrigin: "50% 50%"
                    }, "-=0.9"), this.timelineIn.fromTo(this.elements.infoLabel, {
                        y: "100%"
                    }, {
                        duration: 1,
                        ease: Yn,
                        y: "0%"
                    }, "-=1.4"), un(this.elements.infoLines, ((t, e) => {
                        this.timelineIn.fromTo(t, {
                            y: "100%"
                        }, {
                            delay: .05 * e,
                            duration: 1,
                            ease: Yn,
                            y: "0%"
                        }, "-=1")
                    })), this.timelineIn.fromTo(this.elements.disclaimerLabel, {
                        y: "100%"
                    }, {
                        duration: 1,
                        ease: Yn,
                        y: "0%"
                    }, "-=0.95"), un(this.elements.disclaimerLines, ((t, e) => {
                        this.timelineIn.fromTo(t, {
                            y: "100%"
                        }, {
                            delay: .05 * e,
                            duration: 1,
                            ease: Yn,
                            y: "0%"
                        }, "-=1")
                    })), this.timelineIn.fromTo(this.elements.link, {
                        y: "100%"
                    }, {
                        duration: 1,
                        ease: Yn,
                        y: "0%"
                    }, "-=0.95"), this.element.classList.add(this.classes.active), this.elements.collections.classList.add(this.classes.collectionsActive), super.show(t)
                }
                hide(t) {
                    return this.element.classList.remove(this.classes.active), this.elements.collections.classList.remove(this.classes.collectionsActive), br.set([this.elements.sizeSpans, this.elements.starSpans, this.elements.infoSpans, this.elements.disclaimerSpans], {
                        clearProps: "all"
                    }), super.hide(t)
                }
                onResize() {
                    super.onResize(), br.set([this.elements.sizeSpans, this.elements.starSpans, this.elements.infoSpans, this.elements.disclaimerSpans], {
                        clearProps: "all"
                    }), window.requestAnimationFrame((t => {
                        this.elements.sizeLines = Xn(this.elements.sizeSpans), this.elements.starLines = Xn(this.elements.starSpans), this.elements.infoLines = Xn(this.elements.infoSpans), this.elements.disclaimerLines = Xn(this.elements.disclaimerSpans)
                    }))
                }
            },
            da = class extends fn {
                constructor({
                    element: t,
                    elements: e
                }) {
                    super({
                        element: t,
                        elements: e
                    }), this.transformPrefix = an()("transform"), this.speed = 2, this.scroll = {
                        ease: .1,
                        position: 0,
                        current: 0,
                        target: 0,
                        last: 0,
                        clamp: 0
                    }, r()(this.elements.items, (t => {
                        const e = ln(t);
                        t.extra = 0, t.height = e.height, t.offset = e.top, t.position = 0
                    })), this.length = this.elements.items.length, this.height = this.elements.items[0].height, this.heightTotal = this.elements.list.getBoundingClientRect().height
                }
                enable() {
                    this.isEnabled = !0, this.update()
                }
                disable() {
                    this.isEnabled = !1
                }
                onTouchDown(t) {
                    this.isEnabled && (this.isDown = !0, this.scroll.position = this.scroll.current, this.start = t.touches ? t.touches[0].clientY : t.clientY)
                }
                onTouchMove(t) {
                    if (!this.isDown || !this.isEnabled) return;
                    const e = t.touches ? t.touches[0].clientY : t.clientY,
                        i = 2 * (this.start - e);
                    this.scroll.target = this.scroll.position + i
                }
                onTouchUp(t) {
                    this.isEnabled && (this.isDown = !1)
                }
                onWheel(t) {
                    if (!this.isEnabled) return;
                    const e = .5 * t.pixelY;
                    this.scroll.target += e, this.speed = e > 0 ? 2 : -2
                }
                transform(t, e) {
                    t.style[this.transformPrefix] = `translate3d(0, ${Math.floor(e)}px, 0)`
                }
                update() {
                    if (!this.isEnabled) return;
                    this.scroll.target += this.speed, this.scroll.current = ea(this.scroll.current, this.scroll.target, this.scroll.ease);
                    const t = Math.round(this.scroll.current % this.heightTotal);
                    this.scroll.current < this.scroll.last ? this.direction = "down" : this.direction = "up", r()(this.elements.items, ((e, i) => {
                        e.position = -this.scroll.current - e.extra;
                        const s = e.position + e.offset + e.height;
                        e.isBefore = s < 0, e.isAfter = s > this.heightTotal, "up" === this.direction && e.isBefore && (e.extra = e.extra - this.heightTotal, e.isBefore = !1, e.isAfter = !1), "down" === this.direction && e.isAfter && (e.extra = e.extra + this.heightTotal, e.isBefore = !1, e.isAfter = !1), e.clamp = e.extra % t, this.transform(e, e.position)
                    })), this.scroll.last = this.scroll.current, this.scroll.clamp = t
                }
                onResize() {
                    r()(this.elements.items, (t => {
                        this.transform(t, 0);
                        const e = ln(t);
                        t.extra = 0, t.height = e.height, t.offset = e.top, t.position = 0
                    })), this.height = this.elements.items[0].getBoundingClientRect().height, this.heightTotal = this.elements.list.getBoundingClientRect().height, this.scroll = {
                        ease: .1,
                        position: 0,
                        current: 0,
                        target: 0,
                        last: 0
                    }
                }
            },
            pa = class extends ha {
                constructor() {
                    super({
                        id: "home",
                        classes: {
                            active: "home--active"
                        },
                        element: ".home",
                        elements: {
                            wrapper: ".home__wrapper",
                            navigation: document.querySelector(".navigation"),
                            link: ".home__link",
                            list: ".home__titles",
                            items: ".home__titles__label, .home__titles__title"
                        }
                    })
                }
                create() {
                    super.create(), this.titles = new da({
                        element: document.body,
                        elements: {
                            list: this.elements.list,
                            items: this.elements.items
                        }
                    }), this.titles.enable()
                }
                async show(t) {
                    return this.element.classList.add(this.classes.active), super.show(t)
                }
                async hide(t) {
                    return this.element.classList.remove(this.classes.active), super.hide(t)
                }
                onResize() {
                    super.onResize(), this.titles.onResize()
                }
                onTouchDown(t) {
                    this.titles.onTouchDown(t)
                }
                onTouchMove(t) {
                    this.titles.onTouchMove(t)
                }
                onTouchUp(t) {
                    this.titles.onTouchUp(t)
                }
                onWheel(t) {
                    this.titles.onWheel(t)
                }
                update() {
                    super.update(), this.titles.update()
                }
            };
        new class {
            constructor() {
                this.template = window.location.pathname, this.createCanvas(), this.createPreloader(), this.createTransition(), this.createNavigation(), this.createPages(), this.addEventListeners(), this.addLinkListeners(), this.onResize(), this.update()
            }
            createNavigation() {
                this.navigation = new Hn({
                    template: this.template
                })
            }
            createPreloader() {
                this.preloader = new Jn({
                    canvas: this.canvas
                }), this.preloader.once("completed", this.onPreloaded.bind(this))
            }
            createCanvas() {
                this.canvas = new yn({
                    template: this.template
                })
            }
            createTransition() {
                this.transition = new class {
                    constructor() {
                        this.element = document.createElement("canvas"), this.element.className = "transition", this.element.height = window.innerHeight * window.devicePixelRatio, this.element.width = window.innerWidth * window.devicePixelRatio, this.context = this.element.getContext("2d"), this.progress = 0, document.body.appendChild(this.element)
                    }
                    show({
                        color: t
                    }) {
                        return this.color = t, new Promise((t => {
                            br.set(this.element, {
                                rotation: 0
                            }), br.to(this, {
                                duration: 1.5,
                                ease: "expo.inOut",
                                onComplete: t,
                                onUpdate: this.onUpdate.bind(this),
                                progress: 1
                            })
                        }))
                    }
                    hide() {
                        return new Promise((t => {
                            br.set(this.element, {
                                rotation: 180
                            }), br.to(this, {
                                duration: 1.5,
                                ease: "expo.inOut",
                                onComplete: t,
                                onUpdate: this.onUpdate.bind(this),
                                progress: 0
                            })
                        }))
                    }
                    onUpdate() {
                        this.context.clearRect(0, 0, this.element.width, this.element.height), this.context.save(), this.context.beginPath();
                        const t = window.innerWidth < Fr ? 20 : 40;
                        this.widthSegments = Math.ceil(this.element.width / t), this.context.moveTo(this.element.width, this.element.height), this.context.lineTo(0, this.element.height);
                        const e = (1 - this.progress) * this.element.height,
                            i = 250 * Math.sin(this.progress * Math.PI);
                        this.context.lineTo(0, e);
                        for (let s = 0; s <= this.widthSegments; s++) {
                            const r = t * s,
                                n = e - Math.sin(r / this.element.width * Math.PI) * i;
                            this.context.lineTo(r, n)
                        }
                        this.context.fillStyle = this.color, this.context.fill(), this.context.restore()
                    }
                }
            }
            createPages() {
                this.about = new la, this.collections = new ua, this.home = new pa, this.pages = {
                    "/magicaxismodels/": this.home,
                    "/magicaxismodels/about": this.about,
                    "/magicaxismodels/collections": this.collections
                }, this.detailsElements = document.querySelectorAll(".detail"), this.details = un(this.detailsElements, (t => {
                    const e = new ca({
                        element: t
                    });
                    this.pages[`/magicaxismodels/detail/${t.getAttribute("id")}`] = e
                })), this.page = this.pages[this.template]
            }
            onPreloaded() {
                this.onResize(), this.canvas.onPreloaded(), this.page.show()
            }
            onPopState() {
                this.onChange({
                    url: window.location.pathname,
                    push: !1
                })
            }
            async onChange({
                url: t,
                push: e = !0
            }) {
                t = t.replace(window.location.origin, "");
                const i = this.template.indexOf("collections") > -1 && t.indexOf("detail") > -1,
                    s = this.template.indexOf("detail") > -1 && t.indexOf("collections") > -1;
                this.isTransition = i || s;
                const r = this.pages[t];
                this.isTransition || await this.transition.show({
                    color: r.element.getAttribute("data-color")
                }), e && window.history.pushState({}, "", t), this.template = window.location.pathname, this.page.hide(), this.navigation.onChange(this.template), this.canvas.onChange(this.template), this.page = r, this.onResize(!0), window.requestAnimationFrame((t => {
                    this.page.show(), this.transition.hide()
                }))
            }
            onResize(t = !1) {
                this.page && this.page.onResize && this.page.onResize(), this.canvas && this.canvas.onResize && this.canvas.onResize()
            }
            onTouchDown(t) {
                this.canvas && this.canvas.onTouchDown && this.canvas.onTouchDown(t), this.page && this.page.onTouchDown && this.page.onTouchDown(t)
            }
            onTouchMove(t) {
                this.canvas && this.canvas.onTouchMove && this.canvas.onTouchMove(t), this.page && this.page.onTouchDown && this.page.onTouchMove(t)
            }
            onTouchUp(t) {
                this.canvas && this.canvas.onTouchUp && this.canvas.onTouchUp(t), this.page && this.page.onTouchDown && this.page.onTouchUp(t)
            }
            onWheel(t) {
                const i = e()(t);
                this.canvas && this.canvas.onWheel && this.canvas.onWheel(i), this.page && this.page.onWheel && this.page.onWheel(i)
            }
            update() {
                this.page && this.page.update && this.page.update(), this.canvas && this.canvas.update && this.canvas.update(this.page.scroll), this.frame = window.requestAnimationFrame(this.update.bind(this))
            }
            addEventListeners() {
                window.addEventListener("popstate", this.onPopState.bind(this)), window.addEventListener("mousewheel", this.onWheel.bind(this)), window.addEventListener("wheel", this.onWheel.bind(this)), window.addEventListener("mousedown", this.onTouchDown.bind(this)), window.addEventListener("mousemove", this.onTouchMove.bind(this)), window.addEventListener("mouseup", this.onTouchUp.bind(this)), window.addEventListener("touchstart", this.onTouchDown.bind(this)), window.addEventListener("touchmove", this.onTouchMove.bind(this)), window.addEventListener("touchend", this.onTouchUp.bind(this)), window.addEventListener("resize", this.onResize.bind(this))
            }
            addLinkListeners() {
                const t = document.querySelectorAll("a");
                r()(t, (t => {
                    const e = t.href.indexOf(window.location.origin) > -1,
                        i = -1 === t.href.indexOf("mailto"),
                        s = -1 === t.href.indexOf("tel");
                    e ? t.onclick = e => {
                        e.preventDefault(), this.onChange({
                            url: t.href
                        })
                    } : i && s && (t.rel = "noopener", t.target = "_blank")
                }))
            }
        }
    })()
})();