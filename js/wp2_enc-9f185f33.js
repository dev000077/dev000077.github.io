define(["module", "require", "exports"], (function(n, r, t) {
    var e, o = (e = n.uri, function(r) {
        var t, o;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(n, r) {
            t = n, o = r
        }));
        var i, a = {};
        for (i in r) r.hasOwnProperty(i) && (a[i] = r[i]);
        var u, c = "";
        c = self.location.href, e && (c = e), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "", u = function(n) {
            var r = new XMLHttpRequest;
            return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
        };
        var f, s, l = r.print || console.log.bind(console),
            p = r.printErr || console.warn.bind(console);
        for (i in a) a.hasOwnProperty(i) && (r[i] = a[i]);
        a = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit, r.wasmBinary && (f = r.wasmBinary), r.noExitRuntime, "object" != typeof WebAssembly && H("no native wasm support detected");
        var h = !1,
            v = new TextDecoder("utf8");

        function d(n, r) {
            if (!n) return "";
            for (var t = n + r, e = n; !(e >= t) && m[e];) ++e;
            return v.decode(m.subarray(n, e))
        }
        var y, g, m, w, b, T, _, A, C, P, E = new TextDecoder("utf-16le");

        function W(n, r) {
            for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && b[e];) ++e;
            return t = e << 1, E.decode(m.subarray(n, t))
        }

        function k(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 2) return 0;
            for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, i = 0; i < o; ++i) {
                var a = n.charCodeAt(i);
                w[r >> 1] = a, r += 2
            }
            return w[r >> 1] = 0, r - e
        }

        function F(n) {
            return 2 * n.length
        }

        function R(n, r) {
            for (var t = 0, e = ""; !(t >= r / 4);) {
                var o = T[n + 4 * t >> 2];
                if (0 == o) break;
                if (++t, o >= 65536) {
                    var i = o - 65536;
                    e += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                } else e += String.fromCharCode(o)
            }
            return e
        }

        function I(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 4) return 0;
            for (var e = r, o = e + t - 4, i = 0; i < n.length; ++i) {
                var a = n.charCodeAt(i);
                if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & n.charCodeAt(++i)), T[r >> 2] = a, (r += 4) + 4 > o) break
            }
            return T[r >> 2] = 0, r - e
        }

        function U(n) {
            for (var r = 0, t = 0; t < n.length; ++t) {
                var e = n.charCodeAt(t);
                e >= 55296 && e <= 57343 && ++t, r += 4
            }
            return r
        }

        function S(n) {
            y = n, r.HEAP8 = g = new Int8Array(n), r.HEAP16 = w = new Int16Array(n), r.HEAP32 = T = new Int32Array(n), r.HEAPU8 = m = new Uint8Array(n), r.HEAPU16 = b = new Uint16Array(n), r.HEAPU32 = _ = new Uint32Array(n), r.HEAPF32 = A = new Float32Array(n), r.HEAPF64 = C = new Float64Array(n)
        }
        r.INITIAL_MEMORY;
        var x, j = [],
            O = [],
            D = [],
            M = 0,
            B = null;

        function H(n) {
            r.onAbort && r.onAbort(n), p(n += ""), h = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(n);
            throw o(t), t
        }

        function V(n) {
            return n.startsWith("data:application/octet-stream;base64,")
        }
        if (r.preloadedImages = {}, r.preloadedAudios = {}, r.locateFile) V(q = "wp2_enc.wasm") || (x = q, q = r.locateFile ? r.locateFile(x, c) : c + x);
        else var q = new URL("/wasm/wp2_enc-89317929.wasm", n.uri).toString();

        function z(n) {
            try {
                if (n == q && f) return new Uint8Array(f);
                if (u) return u(n);
                throw "both async and sync fetching of the wasm failed"
            } catch (n) {
                H(n)
            }
        }

        function N(n) {
            for (; n.length > 0;) {
                var t = n.shift();
                if ("function" != typeof t) {
                    var e = t.func;
                    "number" == typeof e ? void 0 === t.arg ? P.get(e)() : P.get(e)(t.arg) : e(void 0 === t.arg ? null : t.arg)
                } else t(r)
            }
        }
        var L = 0,
            G = 4,
            J = 8,
            X = 12,
            Y = 13,
            Z = 16;

        function $(n) {
            this.excPtr = n, this.ptr = n - Z, this.set_type = function(n) {
                T[this.ptr + J >> 2] = n
            }, this.get_type = function() {
                return T[this.ptr + J >> 2]
            }, this.set_destructor = function(n) {
                T[this.ptr + L >> 2] = n
            }, this.get_destructor = function() {
                return T[this.ptr + L >> 2]
            }, this.set_refcount = function(n) {
                T[this.ptr + G >> 2] = n
            }, this.set_caught = function(n) {
                n = n ? 1 : 0, g[this.ptr + X >> 0] = n
            }, this.get_caught = function() {
                return 0 != g[this.ptr + X >> 0]
            }, this.set_rethrown = function(n) {
                n = n ? 1 : 0, g[this.ptr + Y >> 0] = n
            }, this.get_rethrown = function() {
                return 0 != g[this.ptr + Y >> 0]
            }, this.init = function(n, r) {
                this.set_type(n), this.set_destructor(r), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
            }, this.add_ref = function() {
                var n = T[this.ptr + G >> 2];
                T[this.ptr + G >> 2] = n + 1
            }, this.release_ref = function() {
                var n = T[this.ptr + G >> 2];
                return T[this.ptr + G >> 2] = n - 1, 1 === n
            }
        }
        var K = {};

        function Q(n) {
            for (; n.length;) {
                var r = n.pop();
                n.pop()(r)
            }
        }

        function nn(n) {
            return this.fromWireType(_[n >> 2])
        }
        var rn = {},
            tn = {},
            en = {};

        function on(n) {
            if (void 0 === n) return "_unknown";
            var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return r >= 48 && r <= 57 ? "_" + n : n
        }

        function an(n, r) {
            return n = on(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
        }

        function un(n, r) {
            var t = an(r, (function(n) {
                this.name = r, this.message = n;
                var t = new Error(n).stack;
                void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
            }));
            return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, t
        }
        var cn = void 0;

        function fn(n) {
            throw new cn(n)
        }

        function sn(n, r, t) {
            function e(r) {
                var e = t(r);
                e.length !== n.length && fn("Mismatched type converter count");
                for (var o = 0; o < n.length; ++o) yn(n[o], e[o])
            }
            n.forEach((function(n) {
                en[n] = r
            }));
            var o = new Array(r.length),
                i = [],
                a = 0;
            r.forEach((function(n, r) {
                tn.hasOwnProperty(n) ? o[r] = tn[n] : (i.push(n), rn.hasOwnProperty(n) || (rn[n] = []), rn[n].push((function() {
                    o[r] = tn[n], ++a === i.length && e(o)
                })))
            })), 0 === i.length && e(o)
        }

        function ln(n) {
            switch (n) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + n)
            }
        }
        var pn = void 0;

        function hn(n) {
            for (var r = "", t = n; m[t];) r += pn[m[t++]];
            return r
        }
        var vn = void 0;

        function dn(n) {
            throw new vn(n)
        }

        function yn(n, r, t) {
            if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var e = r.name;
            if (n || dn('type "' + e + '" must have a positive integer typeid pointer'), tn.hasOwnProperty(n)) {
                if (t.ignoreDuplicateRegistrations) return;
                dn("Cannot register type '" + e + "' twice")
            }
            if (tn[n] = r, delete en[n], rn.hasOwnProperty(n)) {
                var o = rn[n];
                delete rn[n], o.forEach((function(n) {
                    n()
                }))
            }
        }
        var gn = [],
            mn = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];

        function wn(n) {
            n > 4 && 0 == --mn[n].refcount && (mn[n] = void 0, gn.push(n))
        }

        function bn() {
            for (var n = 0, r = 5; r < mn.length; ++r) void 0 !== mn[r] && ++n;
            return n
        }

        function Tn() {
            for (var n = 5; n < mn.length; ++n)
                if (void 0 !== mn[n]) return mn[n];
            return null
        }

        function _n(n) {
            switch (n) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var r = gn.length ? gn.pop() : mn.length;
                    return mn[r] = {
                        refcount: 1,
                        value: n
                    }, r
            }
        }

        function An(n) {
            if (null === n) return "null";
            var r = typeof n;
            return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
        }

        function Cn(n, r) {
            switch (r) {
                case 2:
                    return function(n) {
                        return this.fromWireType(A[n >> 2])
                    };
                case 3:
                    return function(n) {
                        return this.fromWireType(C[n >> 3])
                    };
                default:
                    throw new TypeError("Unknown float type: " + n)
            }
        }

        function Pn(n, r, t, e, o) {
            var i = r.length;
            i < 2 && dn("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var a = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                if (null !== r[c] && void 0 === r[c].destructorFunction) {
                    u = !0;
                    break
                } var f = "void" !== r[0].name,
                s = "",
                l = "";
            for (c = 0; c < i - 2; ++c) s += (0 !== c ? ", " : "") + "arg" + c, l += (0 !== c ? ", " : "") + "arg" + c + "Wired";
            var p = "return function " + on(n) + "(" + s + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n";
            u && (p += "var destructors = [];\n");
            var h = u ? "destructors" : "null",
                v = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                d = [dn, e, o, Q, r[0], r[1]];
            for (a && (p += "var thisWired = classParam.toWireType(" + h + ", this);\n"), c = 0; c < i - 2; ++c) p += "var arg" + c + "Wired = argType" + c + ".toWireType(" + h + ", arg" + c + "); // " + r[c + 2].name + "\n", v.push("argType" + c), d.push(r[c + 2]);
            if (a && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), p += (f ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) p += "runDestructors(destructors);\n";
            else
                for (c = a ? 1 : 2; c < r.length; ++c) {
                    var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                    null !== r[c].destructorFunction && (p += y + "_dtor(" + y + "); // " + r[c].name + "\n", v.push(y + "_dtor"), d.push(r[c].destructorFunction))
                }
            return f && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", v.push(p),
                function(n, r) {
                    if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                    var t = an(n.name || "unknownFunctionName", (function() {}));
                    t.prototype = n.prototype;
                    var e = new t,
                        o = n.apply(e, r);
                    return o instanceof Object ? o : e
                }(Function, v).apply(null, d)
        }

        function En(n, t, e) {
            r.hasOwnProperty(n) ? ((void 0 === e || void 0 !== r[n].overloadTable && void 0 !== r[n].overloadTable[e]) && dn("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                if (void 0 === n[r].overloadTable) {
                    var e = n[r];
                    n[r] = function() {
                        return n[r].overloadTable.hasOwnProperty(arguments.length) || dn("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                    }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                }
            }(r, n, n), r.hasOwnProperty(e) && dn("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), r[n].overloadTable[e] = t) : (r[n] = t, void 0 !== e && (r[n].numArguments = e))
        }

        function Wn(n, t, e) {
            return n.includes("j") ? function(n, t, e) {
                var o = r["dynCall_" + n];
                return e && e.length ? o.apply(null, [t].concat(e)) : o.call(null, t)
            }(n, t, e) : P.get(t).apply(null, e)
        }

        function kn(n, r) {
            var t, e, o, i = (n = hn(n)).includes("j") ? (t = n, e = r, o = [], function() {
                o.length = arguments.length;
                for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                return Wn(t, e, o)
            }) : P.get(r);
            return "function" != typeof i && dn("unknown function pointer with signature " + n + ": " + r), i
        }
        var Fn = void 0;

        function Rn(n) {
            var r = qn(n),
                t = hn(r);
            return Hn(r), t
        }

        function In(n, r, t) {
            switch (r) {
                case 0:
                    return t ? function(n) {
                        return g[n]
                    } : function(n) {
                        return m[n]
                    };
                case 1:
                    return t ? function(n) {
                        return w[n >> 1]
                    } : function(n) {
                        return b[n >> 1]
                    };
                case 2:
                    return t ? function(n) {
                        return T[n >> 2]
                    } : function(n) {
                        return _[n >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + n)
            }
        }
        var Un = {};

        function Sn() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }

        function xn(n, r) {
            var t = tn[n];
            return void 0 === t && dn(r + " has unknown type " + Rn(n)), t
        }
        var jn = {};

        function On(n) {
            try {
                return s.grow(n - y.byteLength + 65535 >>> 16), S(s.buffer), 1
            } catch (n) {}
        }
        var Dn = {
            mappings: {},
            buffers: [null, [],
                []
            ],
            printChar: function(n, r) {
                var t = Dn.buffers[n];
                0 === r || 10 === r ? ((1 === n ? l : p)(function(n, r, t) {
                    for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                    return v.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                }(t, 0)), t.length = 0) : t.push(r)
            },
            varargs: void 0,
            get: function() {
                return Dn.varargs += 4, T[Dn.varargs - 4 >> 2]
            },
            getStr: function(n) {
                return d(n)
            },
            get64: function(n, r) {
                return n
            }
        };
        cn = r.InternalError = un(Error, "InternalError"),
            function() {
                for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
                pn = n
            }(), vn = r.BindingError = un(Error, "BindingError"), r.count_emval_handles = bn, r.get_first_emval = Tn, Fn = r.UnboundTypeError = un(Error, "UnboundTypeError");
        var Mn = {
            o: function(n, r, t, e) {
                H("Assertion failed: " + d(n) + ", at: " + [r ? d(r) : "unknown filename", t, e ? d(e) : "unknown function"])
            },
            z: function(n) {
                return Vn(n + Z) + Z
            },
            B: function(n, r) {},
            y: function(n, r, t) {
                throw new $(n).init(r, t), n
            },
            l: function(n) {
                var r = K[n];
                delete K[n];
                var t = r.rawConstructor,
                    e = r.rawDestructor,
                    o = r.fields;
                sn([n], o.map((function(n) {
                    return n.getterReturnType
                })).concat(o.map((function(n) {
                    return n.setterArgumentType
                }))), (function(n) {
                    var i = {};
                    return o.forEach((function(r, t) {
                        var e = r.fieldName,
                            a = n[t],
                            u = r.getter,
                            c = r.getterContext,
                            f = n[t + o.length],
                            s = r.setter,
                            l = r.setterContext;
                        i[e] = {
                            read: function(n) {
                                return a.fromWireType(u(c, n))
                            },
                            write: function(n, r) {
                                var t = [];
                                s(l, n, f.toWireType(t, r)), Q(t)
                            }
                        }
                    })), [{
                        name: r.name,
                        fromWireType: function(n) {
                            var r = {};
                            for (var t in i) r[t] = i[t].read(n);
                            return e(n), r
                        },
                        toWireType: function(n, r) {
                            for (var o in i)
                                if (!(o in r)) throw new TypeError('Missing field:  "' + o + '"');
                            var a = t();
                            for (o in i) i[o].write(a, r[o]);
                            return null !== n && n.push(e, a), a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: nn,
                        destructorFunction: e
                    }]
                }))
            },
            q: function(n, r, t, e, o) {},
            w: function(n, r, t, e, o) {
                var i = ln(t);
                yn(n, {
                    name: r = hn(r),
                    fromWireType: function(n) {
                        return !!n
                    },
                    toWireType: function(n, r) {
                        return r ? e : o
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(n) {
                        var e;
                        if (1 === t) e = g;
                        else if (2 === t) e = w;
                        else {
                            if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                            e = T
                        }
                        return this.fromWireType(e[n >> i])
                    },
                    destructorFunction: null
                })
            },
            v: function(n, r) {
                yn(n, {
                    name: r = hn(r),
                    fromWireType: function(n) {
                        var r = mn[n].value;
                        return wn(n), r
                    },
                    toWireType: function(n, r) {
                        return _n(r)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: nn,
                    destructorFunction: null
                })
            },
            h: function(n, r, t) {
                var e = ln(t);
                yn(n, {
                    name: r = hn(r),
                    fromWireType: function(n) {
                        return n
                    },
                    toWireType: function(n, r) {
                        if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + An(r) + '" to ' + this.name);
                        return r
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Cn(r, e),
                    destructorFunction: null
                })
            },
            k: function(n, t, e, o, i, a) {
                var u = function(n, r) {
                    for (var t = [], e = 0; e < n; e++) t.push(T[(r >> 2) + e]);
                    return t
                }(t, e);
                n = hn(n), i = kn(o, i), En(n, (function() {
                    ! function(n, r) {
                        var t = [],
                            e = {};
                        throw r.forEach((function n(r) {
                            e[r] || tn[r] || (en[r] ? en[r].forEach(n) : (t.push(r), e[r] = !0))
                        })), new Fn(n + ": " + t.map(Rn).join([", "]))
                    }("Cannot call " + n + " due to unbound types", u)
                }), t - 1), sn([], u, (function(e) {
                    var o = [e[0], null].concat(e.slice(1));
                    return function(n, t, e) {
                        r.hasOwnProperty(n) || fn("Replacing nonexistant public symbol"), void 0 !== r[n].overloadTable && void 0 !== e ? r[n].overloadTable[e] = t : (r[n] = t, r[n].argCount = e)
                    }(n, Pn(n, o, null, i, a), t - 1), []
                }))
            },
            c: function(n, r, t, e, o) {
                r = hn(r), -1 === o && (o = 4294967295);
                var i = ln(t),
                    a = function(n) {
                        return n
                    };
                if (0 === e) {
                    var u = 32 - 8 * t;
                    a = function(n) {
                        return n << u >>> u
                    }
                }
                var c = r.includes("unsigned");
                yn(n, {
                    name: r,
                    fromWireType: a,
                    toWireType: function(n, t) {
                        if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + An(t) + '" to ' + this.name);
                        if (t < e || t > o) throw new TypeError('Passing a number "' + An(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                        return c ? t >>> 0 : 0 | t
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: In(r, i, 0 !== e),
                    destructorFunction: null
                })
            },
            a: function(n, r, t) {
                var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                function o(n) {
                    var r = _,
                        t = r[n >>= 2],
                        o = r[n + 1];
                    return new e(y, o, t)
                }
                yn(n, {
                    name: t = hn(t),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o
                }, {
                    ignoreDuplicateRegistrations: !0
                })
            },
            i: function(n, r) {
                var t = "std::string" === (r = hn(r));
                yn(n, {
                    name: r,
                    fromWireType: function(n) {
                        var r, e = _[n >> 2];
                        if (t)
                            for (var o = n + 4, i = 0; i <= e; ++i) {
                                var a = n + 4 + i;
                                if (i == e || 0 == m[a]) {
                                    var u = d(o, a - o);
                                    void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = a + 1
                                }
                            } else {
                                var c = new Array(e);
                                for (i = 0; i < e; ++i) c[i] = String.fromCharCode(m[n + 4 + i]);
                                r = c.join("")
                            }
                        return Hn(n), r
                    },
                    toWireType: function(n, r) {
                        r instanceof ArrayBuffer && (r = new Uint8Array(r));
                        var e = "string" == typeof r;
                        e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || dn("Cannot pass non-string to std::string");
                        var o = (t && e ? function() {
                                return function(n) {
                                    for (var r = 0, t = 0; t < n.length; ++t) {
                                        var e = n.charCodeAt(t);
                                        e >= 55296 && e <= 57343 && (e = 65536 + ((1023 & e) << 10) | 1023 & n.charCodeAt(++t)), e <= 127 ? ++r : r += e <= 2047 ? 2 : e <= 65535 ? 3 : 4
                                    }
                                    return r
                                }(r)
                            } : function() {
                                return r.length
                            })(),
                            i = Vn(4 + o + 1);
                        if (_[i >> 2] = o, t && e) ! function(n, r, t, e) {
                            if (!(e > 0)) return 0;
                            for (var o = t + e - 1, i = 0; i < n.length; ++i) {
                                var a = n.charCodeAt(i);
                                if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & n.charCodeAt(++i)), a <= 127) {
                                    if (t >= o) break;
                                    r[t++] = a
                                } else if (a <= 2047) {
                                    if (t + 1 >= o) break;
                                    r[t++] = 192 | a >> 6, r[t++] = 128 | 63 & a
                                } else if (a <= 65535) {
                                    if (t + 2 >= o) break;
                                    r[t++] = 224 | a >> 12, r[t++] = 128 | a >> 6 & 63, r[t++] = 128 | 63 & a
                                } else {
                                    if (t + 3 >= o) break;
                                    r[t++] = 240 | a >> 18, r[t++] = 128 | a >> 12 & 63, r[t++] = 128 | a >> 6 & 63, r[t++] = 128 | 63 & a
                                }
                            }
                            r[t] = 0
                        }(r, m, i + 4, o + 1);
                        else if (e)
                            for (var a = 0; a < o; ++a) {
                                var u = r.charCodeAt(a);
                                u > 255 && (Hn(i), dn("String has UTF-16 code units that do not fit in 8 bits")), m[i + 4 + a] = u
                            } else
                                for (a = 0; a < o; ++a) m[i + 4 + a] = r[a];
                        return null !== n && n.push(Hn, i), i
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: nn,
                    destructorFunction: function(n) {
                        Hn(n)
                    }
                })
            },
            e: function(n, r, t) {
                var e, o, i, a, u;
                t = hn(t), 2 === r ? (e = W, o = k, a = F, i = function() {
                    return b
                }, u = 1) : 4 === r && (e = R, o = I, a = U, i = function() {
                    return _
                }, u = 2), yn(n, {
                    name: t,
                    fromWireType: function(n) {
                        for (var t, o = _[n >> 2], a = i(), c = n + 4, f = 0; f <= o; ++f) {
                            var s = n + 4 + f * r;
                            if (f == o || 0 == a[s >> u]) {
                                var l = e(c, s - c);
                                void 0 === t ? t = l : (t += String.fromCharCode(0), t += l), c = s + r
                            }
                        }
                        return Hn(n), t
                    },
                    toWireType: function(n, e) {
                        "string" != typeof e && dn("Cannot pass non-string to C++ string type " + t);
                        var i = a(e),
                            c = Vn(4 + i + r);
                        return _[c >> 2] = i >> u, o(e, c + 4, i + r), null !== n && n.push(Hn, c), c
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: nn,
                    destructorFunction: function(n) {
                        Hn(n)
                    }
                })
            },
            m: function(n, r, t, e, o, i) {
                K[n] = {
                    name: hn(r),
                    rawConstructor: kn(t, e),
                    rawDestructor: kn(o, i),
                    fields: []
                }
            },
            b: function(n, r, t, e, o, i, a, u, c, f) {
                K[n].fields.push({
                    fieldName: hn(r),
                    getterReturnType: t,
                    getter: kn(e, o),
                    getterContext: i,
                    setterArgumentType: a,
                    setter: kn(u, c),
                    setterContext: f
                })
            },
            x: function(n, r) {
                yn(n, {
                    isVoid: !0,
                    name: r = hn(r),
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function(n, r) {}
                })
            },
            g: wn,
            A: function(n) {
                return 0 === n ? _n(Sn()) : (n = void 0 === (t = Un[r = n]) ? hn(r) : t, _n(Sn()[n]));
                var r, t
            },
            j: function(n) {
                n > 4 && (mn[n].refcount += 1)
            },
            n: function(n, t, e, o) {
                n = function(n) {
                    return n || dn("Cannot use deleted val. handle = " + n), mn[n].value
                }(n);
                var i = jn[t];
                return i || (i = function(n) {
                    for (var t = "", e = 0; e < n; ++e) t += (0 !== e ? ", " : "") + "arg" + e;
                    var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                    for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                    return o += "var obj = new constructor(" + t + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(xn, r, _n)
                }(t), jn[t] = i), i(n, e, o)
            },
            f: function() {
                H()
            },
            s: function(n, r, t) {
                m.copyWithin(n, r, r + t)
            },
            d: function(n) {
                var r, t, e = m.length,
                    o = 2147483648;
                if ((n >>>= 0) > o) return !1;
                for (var i = 1; i <= 4; i *= 2) {
                    var a = e * (1 + .2 / i);
                    if (a = Math.min(a, n + 100663296), On(Math.min(o, ((r = Math.max(n, a)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                }
                return !1
            },
            u: function(n) {
                return 0
            },
            p: function(n, r, t, e, o) {},
            t: function(n, r, t, e) {
                for (var o = 0, i = 0; i < t; i++) {
                    for (var a = T[r + 8 * i >> 2], u = T[r + (8 * i + 4) >> 2], c = 0; c < u; c++) Dn.printChar(n, m[a + c]);
                    o += u
                }
                return T[e >> 2] = o, 0
            },
            r: function(n) {}
        };
        ! function() {
            var n = {
                a: Mn
            };

            function t(n, t) {
                var e, o = n.exports;
                r.asm = o, S((s = r.asm.C).buffer), P = r.asm.I, e = r.asm.D, O.unshift(e),
                    function(n) {
                        if (M--, r.monitorRunDependencies && r.monitorRunDependencies(M), 0 == M && B) {
                            var t = B;
                            B = null, t()
                        }
                    }()
            }

            function e(n) {
                t(n.instance)
            }

            function i(r) {
                return (f || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return z(q)
                })) : fetch(q, {
                    credentials: "same-origin"
                }).then((function(n) {
                    if (!n.ok) throw "failed to load wasm binary file at '" + q + "'";
                    return n.arrayBuffer()
                })).catch((function() {
                    return z(q)
                }))).then((function(r) {
                    return WebAssembly.instantiate(r, n)
                })).then(r, (function(n) {
                    p("failed to asynchronously prepare wasm: " + n), H(n)
                }))
            }
            if (M++, r.monitorRunDependencies && r.monitorRunDependencies(M), r.instantiateWasm) try {
                return r.instantiateWasm(n, t)
            } catch (n) {
                return p("Module.instantiateWasm callback failed with error: " + n), !1
            }(f || "function" != typeof WebAssembly.instantiateStreaming || V(q) || "function" != typeof fetch ? i(e) : fetch(q, {
                credentials: "same-origin"
            }).then((function(r) {
                return WebAssembly.instantiateStreaming(r, n).then(e, (function(n) {
                    return p("wasm streaming compile failed: " + n), p("falling back to ArrayBuffer instantiation"), i(e)
                }))
            }))).catch(o)
        }(), r.___wasm_call_ctors = function() {
            return (r.___wasm_call_ctors = r.asm.D).apply(null, arguments)
        };
        var Bn, Hn = r._free = function() {
                return (Hn = r._free = r.asm.E).apply(null, arguments)
            },
            Vn = r._malloc = function() {
                return (Vn = r._malloc = r.asm.F).apply(null, arguments)
            },
            qn = r.___getTypeName = function() {
                return (qn = r.___getTypeName = r.asm.G).apply(null, arguments)
            };

        function zn(n) {
            function e() {
                Bn || (Bn = !0, r.calledRun = !0, h || (N(O), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), function() {
                    if (r.postRun)
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) n = r.postRun.shift(), D.unshift(n);
                    var n;
                    N(D)
                }()))
            }
            M > 0 || (function() {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) n = r.preRun.shift(), j.unshift(n);
                var n;
                N(j)
            }(), M > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    r.setStatus("")
                }), 1), e()
            }), 1)) : e()))
        }
        if (r.___embind_register_native_and_builtin_types = function() {
                return (r.___embind_register_native_and_builtin_types = r.asm.H).apply(null, arguments)
            }, r.dynCall_jiji = function() {
                return (r.dynCall_jiji = r.asm.J).apply(null, arguments)
            }, B = function n() {
                Bn || zn(), Bn || (B = n)
            }, r.run = zn, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        return zn(), r.ready
    });
    t.default = o
}));