window.Q = function (t, i, n) {
    "use strict";
    function e(t, i, n) {
        if (t[Ur]()) {
            var s = t._fk || t[Wr]();
            if (s) {
                s = s._j7 || s;
                for (var r = 0,
                h = s[qr]; h > r; r++) if (i.call(n, s[r]) === !1 || e(s[r], i, n) === !1) return !1;
                return !0
            }
        }
    }
    function s(t) {
        if (!t[Ur]()) return t instanceof xW ? t : null;
        for (var i, n = t._fk._j7,
        e = n[qr] - 1; e >= 0; ) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }
    function r(t, i, n, e) {
        return e ? h(t, i, n) : a(t, i, n)
    }
    function h(t, i, n) {
        t = t._j7 || t;
        for (var e, s = 0,
        r = t[qr]; r > s; s++) if (e = t[s], e[Ur]() && !h(e.children, i, n) || i.call(n, e) === !1) return !1;
        return !0
    }
    function a(t, i, n) {
        t = t._j7 || t;
        for (var e, s = 0,
        r = t[qr]; r > s; s++) if (e = t[s], i[Vr](n, e) === !1 || e[Ur]() && !a(e.children, i, n)) return !1;
        return !0
    }
    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }
    function f(t, i, n) {
        t = t._j7 || t;
        for (var e, s = t[qr], r = s - 1; r >= 0; r--) if (e = t[r], e[Ur]() && !f(e.children, i, n) || i[Vr](n, e) === !1) return !1;
        return !0
    }
    function u(t, i, n) {
        t = t._j7 || t;
        for (var e, s = t[qr], r = s - 1; r >= 0; r--) if (e = t[r], i[Vr](n, e) === !1 || e[Ur]() && !u(e.children, i, n)) return !1;
        return !0
    }
    function c(t, i, n) {
        for (var e, s = (t._j7 || t)[Xr](0); s[qr]; ) {
            e = s[0],
            s = s[Zr](1);
            var r = i[Vr](n, e);
            if (r === !1) return !1;
            if (e[Ur]()) {
                var h = e[Kr];
                h = h._j7 || h,
                s = s.concat(h)
            }
        }
        return !0
    }
    function _(t, i, n) {
        for (var e, s = (t._j7 || t).slice(0); s[qr]; ) {
            e = s[s[qr] - 1],
            s = s[Zr](0, s[qr] - 1);
            var r = i[Vr](n, e);
            if (r === !1) return !1;
            if (e[Ur]()) {
                var h = e.children;
                h = h._j7 || h,
                s = s[Jr](h)
            }
        }
        return !0
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t.length,
            s = n[qr], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; ) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }
        function e(t) {
            var i = t[qr],
            s = Math.ceil(i / 2);
            return 1 >= i ? t : n(e(t[Xr](0, s)), e(t[Xr](s)))
        }
        return e(t)
    }
    function l(t, i, n, e) {
        t instanceof Qz && (t = t._j7);
        for (var s = 0,
        r = (t._j7 || t).length; r > s; s++) {
            var h = i[Vr](n, t[s], s, e);
            if (h === !1) return !1
        }
        return !0
    }
    function v(t, i, n) {
        for (var e = t instanceof Qz,
        s = t._j7 || t,
        r = 0,
        h = s.length; h > r; r++) {
            var a = s[r];
            i[Vr](n, a) && (e ? t.remove(a) : t[Zr](r, 1), r--, h--)
        }
    }
    function b(t, i, n, e) {
        t instanceof Qz && (t = t._j7);
        for (var s = (t._j7 || t)[qr] - 1; s >= 0; s--) {
            var r = i.call(n, t[s], s, e);
            if (r === !1) return !1
        }
        return !0
    }
    function y(t) {
        if (t[Qr] instanceof Function) return t.clone(!0);
        var i, n = [];
        return l(t,
        function (t) {
            i = t && t.clone instanceof Function ? t.clone() : t,
            n[th](i)
        },
        this),
        n
    }
    function g(t, i, e) {
        e === n || 0 > e ? t[th](i) : t.splice(e, 0, i)
    }
    function m(t, i) {
        var n = t[ih](i);
        return 0 > n || n >= t.length ? !1 : t[Zr](n, 1)
    }
    function x(t, i) {
        var n = !1;
        return l(t,
        function (t) {
            return i == t ? (n = !0, !1) : void 0
        }),
        n
    }
    function E(t, i) {
        var n = t;
        for (var e in i) if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(e),
            r = i.__lookupSetter__(e);
            s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
        } else n[e] = i[e];
        return n
    }
    function p(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        nh == typeof i && (e = i, i = t, t = function () {
            i[eh](this, arguments)
        });
        var s = t[sh],
        r = function () { };
        return r[sh] = i.prototype,
        t[sh] = new r,
        t.superclass = i.prototype,
        t[rh].constructor = i,
        E(t[sh], s),
        e && E(t.prototype, e),
        n && E(t.prototype, n),
        t.prototype[hh] = t,
        t
    }
    function k(t, i, n) {
        return w(t, i, "constructor", n)
    }
    function w(t, i, n, e) {
        var s = i.superclass;
        if (s) {
            var r = s[n];
            return r ? r[eh](t, e) : void 0
        }
    }
    function T(t, i, n, e) {
        if ("constructor" == n) return O(t, i, e);
        if (i.super_ instanceof Function) {
            var s = i.super_[sh][n];
            return s instanceof Function ? s[eh](t, e) : void 0
        }
    }
    function O(t, i, n) {
        return i.super_ instanceof Function ? i[ah][eh](t, n) : void 0
    }
    function M(t, i) {
        return t.super_ = i,
        t.prototype = Object[oh](i[sh], {
            super_: {
                value: i,
                enumerable: !1
            },
            constructor: {
                value: t,
                enumerable: !1
            }
        }),
        t
    }
    function S(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t[fh];
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ?
            function () {
                i[eh](this, arguments)
            } : function () { },
            S(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object) return S(t, i.super, i);
        if (i && M(t, i), n) {
            var s = t[sh];
            for (var r in n) s[r] = n[r]
        }
        return t
    }
    function j(t, i, e, s, r) {
        if (s) return void Object[uh](t, i, {
            value: e,
            enumerable: !0
        });
        var h = {
            configurable: !0,
            enumerable: !0
        },
        a = ch + i;
        e !== n && (t[a] = e),
        h.get = function () {
            return this[a]
        },
        h.set = function (t) {
            var n = this[a];
            if (n == t) return !1;
            var e = new gH(this, i, t, n);
            return this[_h](e) ? (this[a] = t, r && r[Vr](this, t, n), this[dh](e), !0) : !1
        },
        Object[uh](t, i, h)
    }
    function I(t, i) {
        for (var n = 0,
        e = i.length; e > n; n++) {
            var s = i[n];
            j(t, s[lh] || s, s[vh] || s[bh], s[yh], s[gh])
        }
    }
    function A(t, i, n) {
        return i instanceof Object ? t = t[mh](i) : i && !n && (n = parseInt(i)),
        i && !n && (n = parseInt(i)),
        n ? setTimeout(t, n) : setTimeout(t)
    }
    function C(i, n) {
        return n && (i = i[mh](n)),
        t[xh](i)
    }
    function R(t, i) {
        return t[Eh] = i,
        t
    }
    function L(t, i) {
        if (!t.hasOwnProperty(ph)) {
            var n = t.getAttribute(hh);
            if (!n) return R(t, i);
            for (var e = n[kh](wh), s = 0, r = e[qr]; r > s; s++) if (e[s] == i) return;
            return n += wh + i,
            R(t, n)
        }
        t.classList.add(i)
    }
    function P(t, i) {
        if (!t.hasOwnProperty(ph)) {
            var n = t[Th](hh);
            if (!n || !n[ih](i)) return;
            for (var e = "",
            s = n.split(wh), r = 0, h = s[qr]; h > r; r++) s[r] != i && (e += s[r] + wh);
            return R(t, e)
        }
        t[ph][Oh](i)
    }
    function D(t) {
        return !isNaN(t) && t instanceof Number || Mh == typeof t
    }
    function N(t) {
        return t !== n && (t instanceof String || Sh == typeof t)
    }
    function $(t) {
        return t !== n && (t instanceof Boolean || jh == typeof t)
    }
    function B(t) {
        return Array.isArray(t)
    }
    function F(i) {
        i || (i = t[Ih]),
        i[Ah] ? i[Ah]() : i[Ch] = !1
    }
    function G(i) {
        i || (i = t[Ih]),
        i[Rh] ? i[Rh]() : i.cancelBubble || (i[Lh] = !0)
    }
    function z(t) {
        F(t),
        G(t)
    }
    function H(t) {
        return Math[Ph](Math.random() * t)
    }
    function Y() {
        return Math[Dh]() >= .5
    }
    function U(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }
    function W(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[Ph](16777215 * Math[Dh]());
            return Nh + (i >> 16 & 255) + $h + (i >> 8 & 255) + $h + (255 & i) + $h + t.toFixed(2) + Bh
        }
        return X(Math.floor(16777215 * Math[Dh]()))
    }
    function q(t) {
        return t > 0 ? Math.floor(t) : Math[Fh](t)
    }
    function V(t) {
        return t > 0 ? Math.ceil(t) : Math[Ph](t)
    }
    function X(t) {
        return 16777216 > t ? Gh + (zh + t.toString(16))[Xr](-6) : Nh + (t >> 16 & 255) + $h + (t >> 8 & 255) + $h + (255 & t) + $h + ((t >> 24 & 255) / 255).toFixed(2) + Bh
    }
    function Z(t, i, n) {
        nh != typeof n || n.hasOwnProperty(Hh) || (n[Hh] = !0),
        Object[uh](t, i, n)
    }
    function K(t, i) {
        for (var n in i) if (Yh != n[0]) {
            var e = i[n];
            nh != typeof e || e.hasOwnProperty(Hh) || (e[Hh] = !0)
        }
        Object.defineProperties(t, i)
    }
    function J(i, n) {
        n || (n = t);
        for (var e = i[kh](Uh), s = 0, r = e.length; r > s; s++) {
            var h = e[s];
            n = n[h]
        }
        return n
    }
    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Wh] !== n
    }
    function ti() {
        t.console && console.log.apply(console, arguments)
    }
    function ii(i) {
        t[qh] && console[Vh](i)
    }
    function ni(i) {
        t[qh] && console.error(i)
    }
    function ei(t, i, n) {
        var e, s, r;
        0 == t._n0 ? (e = -1, r = 0, s = i) : 0 == t._mx ? (e = 0, r = 1, s = n) : (e = -1 / t._n0, s = (t._n0 - e) * i + t._my, r = 1);
        var h = new sH;
        return h._n0 = e,
        h._my = s,
        h._mx = r,
        h._mr = i,
        h._mw = n,
        h._km = Math.atan2(e, r),
        h[Xh] = Math.cos(h._km),
        h[Zh] = Math.sin(h._km),
        h
    }
    function si(t, i, n, e, s) {
        var r, h;
        i > e ? r = -1 : e > i && (r = 1),
        n > s ? h = -1 : s > n && (h = 1);
        var a, o;
        if (!r) return o = 0 > h ? t.y : t[Kh],
        {
            x: i,
            y: o
        };
        if (!h) return a = 0 > r ? t.x : t[Jh],
        {
            x: a,
            y: n
        };
        var f = (n - s) / (i - e),
        u = n - f * i,
        c = 0 > r ? i - t.x : i - t.right,
        _ = 0 > h ? n - t.y : n - t.bottom;
        return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > h ? t.y : t[Kh], a = (o - u) / f) : (a = 0 > r ? t.x : t[Jh], o = f * a + u),
        {
            x: a,
            y: o
        }
    }
    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }
    function hi(t, i, n, e, s, r) {
        return s >= t && t + n >= s && r >= i && i + e >= r
    }
    function ai(t, i, n, e, s, r, h, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o),
        s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }
    function oi(t, i, n, e, s, r, h, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += h;
        var c = r;
        return c += a,
        s > t && (t = s),
        r > i && (i = r),
        o > u && (o = u),
        f > c && (f = c),
        o -= t,
        f -= i,
        0 > o || 0 > f ? null : new hH(t, i, o, f)
    }
    function fi(t) {
        return Qh in t && ta in t
    }
    function ui(t, i, e) {
        if (N(t) && (t = oH[ia](t)), !t) return {
            x: 0,
            y: 0
        };
        if (t.x !== n) return {
            x: t.x,
            y: t.y
        };
        var s, r, h = t.horizontalPosition,
        a = t[na];
        switch (h) {
            case fH:
                s = 0;
                break;
            case cH:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (a) {
            case _H:
                r = 0;
                break;
            case lH:
                r = e;
                break;
            default:
                r = e / 2
        }
        return {
            x: s,
            y: r
        }
    }
    function ci(t, i, n) {
        t[Kr].add(i, n),
        t.onChildAdd(i, n)
    }
    function _i(t, i) {
        t._fk && (t._fk[Oh](i), t.onChildRemove(i))
    }
    function di(t) {
        return t[ea](/^-ms-/, sa)[ea](/-([\da-z])/gi,
        function (t, i) {
            return i[ra]()
        })
    }
    function li(t) {
        return t[ea](/[A-Z]/g,
        function (t) {
            return ha + t[aa]()
        }).replace(/^ms-/, oa)
    }
    function vi(t, i) {
        var n = t.style;
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = LH(e)) && (n[s] = i[e]);
        return t
    }
    function bi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = LH(i)) && (e += li(n) + fa + t[i] + ua);
        return e ? e[ca](0, e[qr] - 1) : e
    }
    function yi(t, i, n) {
        (i = LH(i)) && (t[_a][i] = n)
    }
    function gi(t, i) {
        return CH ? (i && !N(i) && (i = bi(i)), CH.insertRule ? void CH[da](t + la + i + va, 0) : void (CH.addRule && CH[ba](t, i, 0))) : !1
    }
    function mi(i, n) {
        i[Wh] && (i = i.changedTouches && i[ya].length ? i.changedTouches[0] : i.touches[0]);
        var e = n.getBoundingClientRect(),
        s = i.clientX || 0,
        r = i.clientY || 0;
        return Zz && Uz && (t[ga] && s == i[ma] && (s -= t[ga]), t[xa] && r == i[Ea] && (r -= t[xa])),
        {
            x: s - e[pa],
            y: r - e.top
        }
    }
    function xi(t, i, n) {
        this._m7 = t,
        this._scope = n,
        this[ka] = i,
        this._dragPoints = new pi,
        this[wa]()
    }
    function Ei(t) {
        return Wz && t[Ta] || !Wz && t[Oa]
    }
    function pi() {
        this[Ma] = []
    }
    function ki(t, i, n, e, s) {
        Ti(t,
        function (e) {
            if (i) {
                var s = e[Sa];
                if (!s) return void (n || _Y)(ja + t + Ia);
                i(s)
            }
        },
        n, e, s)
    }
    function wi(t, i, n, e, s) {
        Ti(t,
        function (e) {
            if (i) {
                var s, r = e[Aa];
                if (!r) return (n || _Y)(ja + t + Ca),
                s = new Error(ja + t + Ca),
                i(r, s);
                try {
                    r = JSON[Ra](r)
                } catch (h) {
                    (n || _Y)(h),
                    s = h
                }
                i(r, s)
            }
        },
        n, e, s)
    }
    function Ti(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest,
            h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h[ih](La) > 0 ? "&" : La,
                h += a + Pa + Date.now()
            }
            r.open(Da, h),
            r[Na] = function () {
                return 4 == r[$a] ? r[Ba] && 200 != r.status ? void (n || _Y)(ja + t + Fa) : void (i && i(r)) : void 0
            },
            r.send(e)
        } catch (o) {
            (n || _Y)(ja + t + Fa, o)
        }
    }
    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }
    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }
    function Oi(t, i, n) {
        return t instanceof Object && t.x ? Si(t, i, 0, 0) : Mi(t, i, n, 0, 0)
    }
    function Mi(t, i, n, e, s) {
        var r = Math.sin(n),
        h = Math.cos(n),
        a = t - e,
        o = i - s;
        return t = a * h - o * r + e,
        i = a * r + o * h + s,
        new nH(t, i, n)
    }
    function Si(t, i, n, e) {
        n = n || 0,
        e = e || 0;
        var s = Math.sin(i),
        r = Math.cos(i),
        h = t.x - n,
        a = t.y - e;
        return t.x = h * r - a * s + n,
        t.y = h * s + a * r + e,
        t
    }
    function ji(t, i, n) {
        return Ii(t, i, n, 0, 0)
    }
    function Ii(t, i, n, e, s) {
        var r = Mi(t.x, t.y, i, e, s),
        h = Mi(t.x + t[Ga], t.y, i, e, s),
        a = Mi(t.x + t.width, t.y + t[za], i, e, s),
        o = Mi(t.x, t.y + t[za], i, e, s);
        return n ? n[Ha]() : n = new hH,
        n[Ya](r),
        n[Ya](h),
        n[Ya](a),
        n[Ya](o),
        n
    }
    function Ai(t, i) {
        var n = this[Ua] || 1;
        this[_a][Ga] = t + Wa,
        this[_a][za] = i + Wa,
        this[Ga] = t * n,
        this[za] = i * n
    }
    function Ci(t) {
        var i = t[qa] || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t[Va] || 1;
        return vY / i
    }
    function Ri(t, n, e) {
        var s = i[Xa](Za);
        if (s.g = s.getContext(Ka), t !== !0 && !e) return t && n && (s[Ga] = t, s[za] = n),
        s;
        var r = s.g;
        return r[Ua] = s[Ua] = Ci(r),
        s[Ja] = Ai,
        r._ks = function () {
            this.canvas[Ga] = this.canvas[Ga]
        },
        t && n && s.setSize(t, n),
        s
    }
    function Li(t, i) {
        return bY || (bY = Ri()),
        t && i && (bY[Ga] = t, bY[za] = i),
        bY.g
    }
    function Pi(t, i, n) {
        return (n || Jz.FONT_STYLE) + wh + (i || Jz[Qa]) + to + (t || Jz[io])
    }
    function Di(t, i, n, e, s, r, h, a, o, f) {
        if (t[no](), t[eo](n, e), yY && gY > h) {
            var u = h / gY;
            t[so](u, u),
            h = gY,
            f = null
        }
        o || (o = Jz[ro]),
        h || (h = Jz[Qa]),
        o *= h,
        t[ho] = f || Pi(r, h, a),
        t.textAlign = s,
        t[ao] = oo;
        for (var c = o / 2,
        _ = i[kh](fo), d = 0, l = _[qr]; l > d; d++) {
            var v = _[d];
            t[uo](v, 0, c),
            c += o
        }
        t[co]()
    }
    function Ni(t, i, n, e, s, r) {
        if (!t) return {
            width: 0,
            height: 0
        };
        if (i || (i = Jz[Qa]), yY && gY > i) {
            var h = i / gY,
            a = Ni(t, gY, n, e, s);
            return a.width *= h,
            a[za] *= h,
            a
        }
        var o = Li();
        o[ho] = r || Pi(n, i, e),
        s || (s = Jz.LINE_HEIGHT);
        for (var f = i * s,
        u = 0,
        c = 0,
        _ = t[kh](fo), d = 0, l = _[qr]; l > d; d++) {
            var v = _[d];
            u = Math.max(o.measureText(v)[Ga], u),
            c += f
        }
        return {
            width: u,
            height: c
        }
    }
    function $i(t, i, n, e, s) {
        var r;
        try {
            r = t[_o](i, n, e, s)
        } catch (h) { }
        return r
    }
    function Bi(t) {
        return Math.log(t + Math[lo](t * t + 1))
    }
    function Fi(t, i) {
        i = i || t(1);
        var n = 1 / i,
        e = .5 * n,
        s = Math.min(1, i / 100);
        return function (r) {
            if (0 >= r) return 0;
            if (r >= i) return 1;
            for (var h = r * n,
            a = 0; a++ < 10; ) {
                var o = t(h),
                f = r - o;
                if (Math.abs(f) <= s) return h;
                h += f * e
            }
            return h
        }
    }
    function Gi(t, i, n) {
        var e = 1 - t,
        s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
        r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
            a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: r,
                rotate: Math.atan2(a, h)
            }
        }
        return {
            t: t,
            x: s,
            y: r
        }
    }
    function zi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }
    function Hi(t, i) {
        i.add(t[4], t[5]);
        var n = zi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Gi(n, t);
            i.add(e.x, e.y)
        }
        var s = zi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Gi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }
    function Yi(t, i) {
        return Math.abs(t - i) < 1e-7
    }
    function Ui(t, i) {
        return Yi(t[0], i[0]) && Yi(t[1], i[1])
    }
    function Wi(t) {
        if (Ui([t[0], t[1]], [t[2], t[3]])) {
            var i = t[0],
            n = t[1],
            e = t[4],
            s = t[5],
            r = Math[lo](mY(i, n, e, s));
            return function (t) {
                return r * t
            }
        }
        if (Ui([t[0], t[1]], [t[4], t[5]]) || Ui([t[2], t[3]], [t[4], t[5]])) {
            var i = t[0],
            n = t[1],
            e = t[2],
            s = t[3],
            r = Math[lo](mY(i, n, e, s));
            return function (t) {
                return r * t
            }
        }
        var h = t[0],
        a = t[2],
        o = t[4],
        f = h - 2 * a + o,
        u = 2 * a - 2 * h;
        h = t[1],
        a = t[3],
        o = t[5];
        var c = h - 2 * a + o,
        _ = 2 * a - 2 * h,
        d = 4 * (f * f + c * c),
        l = 4 * (f * u + c * _),
        v = u * u + _ * _,
        r = 4 * d * v - l * l,
        b = 1 / r,
        y = .125 * Math.pow(d, -1.5),
        g = 2 * Math[lo](d),
        m = (r * Bi(l / Math.sqrt(r)) + 2 * Math[lo](d) * l * Math[lo](v)) * y;
        return function (t) {
            var i = l + 2 * t * d,
            n = i / Math[lo](r),
            e = i * i * b;
            return (r * Math.log(n + Math.sqrt(e + 1)) + g * i * Math[lo](v + t * l + t * t * d)) * y - m
        }
    }
    function qi(t, i, n) {
        var e = 1 - t,
        s = i[0],
        r = i[2],
        h = i[4],
        a = i[6],
        o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1],
        r = i[3],
        h = i[5],
        a = i[7];
        var u = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: u,
                rotate: Math[vo](c, f)
            }
        }
        return {
            x: o,
            y: u
        }
    }
    function Vi(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * n,
        h = i - t,
        a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[lo](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
    }
    function Xi(t, i) {
        i.add(t[6], t[7]);
        var n = Vi(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n[qr]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var r = qi(s, t);
                i.add(r.x, r.y)
            }
        }
        if (n = Vi(t[1], t[3], t[5], t[7])) for (var e = 0; e < n[qr]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var r = qi(s, t);
                i.add(r.x, r.y)
            }
        }
    }
    function Zi(t) {
        var i = {
            x: t[0],
            y: t[1]
        },
        n = {
            x: t[2],
            y: t[3]
        },
        e = {
            x: t[4],
            y: t[5]
        },
        s = {
            x: t[6],
            y: t[7]
        },
        r = i.x - 0,
        h = i.y - 0,
        a = n.x - 0,
        o = n.y - 0,
        f = e.x - 0,
        u = e.y - 0,
        c = s.x - 0,
        _ = s.y - 0,
        d = 3 * (-r + 3 * a - 3 * f + c),
        l = 6 * (r - 2 * a + f),
        v = 3 * (-r + a),
        b = 3 * (-h + 3 * o - 3 * u + _),
        y = 6 * (h - 2 * o + u),
        g = 3 * (-h + o),
        m = function (t) {
            var i = d * t * t + l * t + v,
            n = b * t * t + y * t + g;
            return Math.sqrt(i * i + n * n)
        },
        x = (m(0) + 4 * m(.5) + m(1)) / 6;
        return x
    }
    function Ki(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
            r = 2 * t - 4 * i + 2 * n,
            h = i - t;
            return function (t) {
                return 3 * (s * t * t + r * t + h)
            }
        }
        function e(t, i) {
            var n = s(t),
            e = r(t);
            return Math[lo](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6]),
        r = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, n = 0,
            s = 0; ; ) {
                if (i = n + h, i >= t) return s += e(n, i - n);
                s += e(n, h),
                n = i
            }
        }
    }
    function Ji(t, i, n) {
        return mY(i, n, t.cx, t.cy) <= t[bo] + xY
    }
    function Qi(t, i, n, e) {
        return n = n || tn(t, i),
        new nn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }
    function tn(t, i) {
        return eH(t.x, t.y, i.x, i.y)
    }
    function nn(t, i, n, e, s, r, h) {
        this.cx = t,
        this.cy = i,
        this.r = n,
        this[bo] = n * n,
        this.p1 = e,
        this.p2 = s,
        this.p3 = r,
        this[yo] = h
    }
    function en(t, i, n, e) {
        this.cx = t,
        this.cy = i,
        this[Ga] = n,
        this.height = e
    }
    function sn(t) {
        var i = t[0],
        n = t[1],
        e = t[2],
        s = nn._joCircle(i, n, e);
        return hn(t, i, n, e, s)
    }
    function rn(t, i) {
        i = i || an(t);
        for (var n, e = i.width / i[za], s = [], r = t[qr], h = 0; r > h; h++) n = t[h],
        s[th]({
            x: n.x,
            y: n.y * e
        });
        var a = sn(s);
        return a ? new en(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }
    function hn(t, i, n, e, s) {
        for (var r, h, a = t[qr], o = s[bo], f = 0; a > f; f++) if (r = t[f], r != i && r != n && r != e) {
            var u = mY(s.cx, s.cy, r.x, r.y);
            u - xY > o && (o = u, h = r)
        }
        if (!h) return s;
        var c, _ = nn[go](h, i, n),
        d = nn[go](h, i, e),
        l = nn._joCircle(h, e, n);
        return Ji(_, e.x, e.y) && (c = _),
        Ji(d, n.x, n.y) && (!c || c.r > d.r) && (c = d),
        Ji(l, i.x, i.y) && (!c || c.r > l.r) && (c = l),
        i = c.p1,
        n = c.p2,
        e = c.p3 || c[yo],
        hn(t, i, n, e, c)
    }
    function an(t) {
        for (var i, n = t[qr], e = new hH, s = 0; n > s; s++) i = t[s],
        e.add(i.x, i.y);
        return e
    }
    function on(t, i, n, e, s) {
        this._6k && this[mo]();
        var r = s ? this.getBounds(s) : this[xo],
        h = n / r[Ga],
        a = t - h * r.x,
        o = e / r[za],
        f = i - o * r.y,
        u = this._f8,
        c = [];
        return l(u,
        function (t) {
            var i = t[Qr](),
            n = i.points;
            if (n && n[qr]) {
                for (var e = n[qr], s = [], r = 0; e > r; r++) {
                    var u = n[r];
                    r++;
                    var _ = n[r];
                    u = h * u + a,
                    _ = o * _ + f,
                    s[th](u),
                    s.push(_)
                }
                i.points = s
            }
            c.push(i)
        },
        this),
        new KY(c)
    }
    function fn(t, i, n, e, s, r) {
        if (s = s || 0, n = n || 0, !s && !r) return !1;
        if (!e) {
            var h = this[Eo](s);
            if (!h.intersectsPoint(t, i, n)) return !1
        }
        var a = Math[po](2 * n) || 1,
        o = Li(a, a),
        f = (o.canvas, -t + n),
        u = -i + n;
        if (o[ko](1, 0, 0, 1, f, u), !o[wo]) {
            this._li(o),
            s && o[To](),
            r && o[Oo]();
            var c = $i(o, 0, 0, a, a);
            if (!c) return !1;
            c = c[Mo];
            for (var _ = c[qr] / 4; _ > 0; ) {
                if (c[4 * _ - 1] > ZY) return !0; --_
            }
            return !1
        }
        return o[So] = (s || 0) + 2 * n,
        this._li(o),
        s && o.isPointInStroke(n, n) ? !0 : r ? o.isPointInPath(n, n) : !1
    }
    function un(t, i, n) {
        if (!this._iy) return null;
        var e = this._f8;
        if (e[qr] < 2) return null;
        n === !1 && (t += this._iy);
        var s = e[0];
        if (0 >= t) return Hs(s[Ma][0], s[Ma][1], e[1][Ma][0], e[1][Ma][1], t, i);
        if (t >= this._iy) {
            s = e[e.length - 1];
            var r, h, a = s[Ma],
            o = a[qr],
            f = a[o - 2],
            u = a[o - 1];
            if (o >= 4) r = a[o - 4],
            h = a[o - 3];
            else {
                s = e[e[qr] - 2];
                var c = s[jo];
                r = c.x,
                h = c.y
            }
            return Hs(f, u, f + f - r, u + u - h, t - this._iy, i)
        }
        for (var _, d = 0,
        l = 1,
        o = e[qr]; o > l; l++) if (_ = e[l], _._iy) {
            if (!(d + _._iy < t)) {
                var v, c = s[jo];
                if (_.type == qY) {
                    var b = _[Ma];
                    v = cn(t - d, _, c.x, c.y, b[0], b[1], b[2], b[3], _._r)
                } else {
                    if (!_._lf) return Hs(c.x, c.y, _[Ma][0], _[Ma][1], t - d, i);
                    var y = Fi(_._lf, _._iy)(t - d),
                    b = _[Ma];
                    v = _[Io] == WY && 6 == b[qr] ? qi(y, [c.x, c.y][Jr](b), !0) : Gi(y, [c.x, c.y][Jr](b), !0)
                }
                return i && (v.x -= i * Math.sin(v[Ao] || 0), v.y += i * Math.cos(v[Ao] || 0)),
                v
            }
            d += _._iy,
            s = _
        } else s = _
    }
    function cn(t, i, n, e, s, r, h, a) {
        if (t <= i._l1) return Hs(n, e, s, r, t, t);
        if (t >= i._iy) return t -= i._iy,
        Hs(i[Co], i[Ro], h, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i[Lo] && (o = -o);
            var f = Mi(i._p1x, i[Po], o, i._o.x, i._o.y);
            return f.rotate += i[Do] || 0,
            f[Ao] += Math.PI,
            f
        }
        return Hs(i[No], i[Po], i[Co], i[Ro], t, t)
    }
    function ei(t, i, n) {
        var e, s, r;
        0 == t._n0 ? (e = -1, r = 0, s = i) : 0 == t._mx ? (e = 0, r = 1, s = n) : (e = -1 / t._n0, s = (t._n0 - e) * i + t._my, r = 1);
        var h = new sH;
        return h._n0 = e,
        h._my = s,
        h._mx = r,
        h._mr = i,
        h._mw = n,
        h
    }
    function _n(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
        t
    }
    function dn(t, i, n, e, s, r, h, a) {
        var o = eH(i, n, e, s),
        f = eH(e, s, r, h);
        if (!o || !f) return t._d = 0,
        t._r = 0,
        t._l1 = o,
        t._l2 = f,
        t._iy = 0;
        var u = vn(e, s, i, n),
        c = vn(e, s, r, h);
        t[Do] = u,
        t[$o] = c;
        var _ = u - c;
        _ = _n(_),
        _ > Math.PI && (_ = 2 * Math.PI - _, t[Lo] = !0);
        var d = Math.PI - _,
        l = Math.tan(_ / 2),
        v = a / l,
        b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math.cos(u) * v,
        m = s + Math.sin(u) * v,
        x = e + Math.cos(c) * v,
        E = s + Math.sin(c) * v,
        p = new sH(i, n, e, s),
        k = new sH(e, s, r, h),
        w = ei(p, g, m),
        T = ei(k, x, E),
        O = w._3c(T),
        M = Math[vo](m - O.y, g - O.x),
        S = Math.atan2(E - O.y, x - O.x);
        y = t[Lo] ? S : M;
        for (var j, I = 0; 4 > I; ) {
            var A = I * tH;
            if (_n(A - y) <= d) {
                var C, R;
                if (j ? j++ : j = 1, 0 == I ? (C = O.x + a, R = O.y) : 1 == I ? (C = O.x, R = O.y + a) : 2 == I ? (C = O.x - a, R = O.y) : (C = O.x, R = O.y - a), t[Bo + j] = {
                    x: C,
                    y: R
                },
                2 == j) break
            }
            I++
        }
        return t[No] = g,
        t[Po] = m,
        t._p2x = x,
        t[Ro] = E,
        t._o = O,
        t._d = v,
        t._r = a,
        t._l1 = o - v,
        t._l2 = f - v,
        t._iy = t._l1 + d * a
    }
    function ln(t, i, n, e, s, r, h) {
        var a = vn(n, e, t, i),
        o = vn(n, e, s, r),
        f = a - o;
        return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }
    function vn(t, i, n, e) {
        return Math[vo](e - i, n - t)
    }
    function bn(t) {
        var i = pY.exec(t);
        if (i) return i[1];
        var n = t.lastIndexOf(Uh);
        return n >= 0 && n < t[qr] - 1 ? t.substring(n + 1) : void 0
    }
    function yn(t) {
        if (!t) return null;
        if (t instanceof KY) return jY;
        if (t[Fo] instanceof Function) return SY;
        if (N(t)) {
            var i = bn(t);
            if (i) {
                if (!$z && kY[Go](i)) return MY;
                if (wY[Go](i)) return OY
            }
            return TY
        }
    }
    function gn(t, i, n) {
        if (this._lo = yn(t), !this._lo) throw new Error("the image format is not supported", t);
        this._lm = t,
        this[zo] = i,
        this._96 = n,
        this[Ga] = i || Jz[Ho],
        this[za] = n || Jz[Yo],
        this._jb = {}
    }
    function mn(t, i, n, e) {
        return i ? (RY[t] = new gn(i, n, e), t) : void delete RY[t]
    }
    function xn(t) {
        if (t._k9) return t._k9;
        var i = N(t);
        if (!i && !t[lh]) return t._k9 = new gn(t);
        var n = t.name || t;
        return n in RY ? RY[n] : RY[n] = new gn(t)
    }
    function En(t) {
        return t in RY
    }
    function pn(t, i, n) {
        n = n || {};
        var e = t[Eo](n.lineWidth);
        if (!e[Ga] || !e.height) return !1;
        var s = i.getContext(Ka),
        r = i[Ua] || 1,
        h = n.scaleMode || Uo,
        a = /full/i[Go](h),
        o = /uniform/i.test(h),
        f = 1,
        u = 1;
        if (a) {
            var c = i.width,
            _ = i.height,
            d = n[Wo],
            l = 0,
            v = 0;
            if (d) {
                var b, y, g, m;
                D(d) ? b = y = g = m = d : (b = d.top || 0, y = d[Kh] || 0, g = d[pa] || 0, m = d[Jh] || 0),
                c -= g + m,
                _ -= b + y,
                l += g,
                v += b
            }
            f = c / e[Ga],
            u = _ / e[za],
            o && (f > u ? (l += (c - u * e[Ga]) / 2, f = u) : u > f && (v += (_ - f * e[za]) / 2, u = f)),
            (l || v) && s[eo](l, v)
        }
        s[eo](-e.x * f, -e.y * u),
        t[Fo](s, r, n, f, u, !0)
    }
    function kn(t, i, n) {
        var e = xn(t);
        return e ? (e.validate(), (e._lo == MY || e._6l()) && e[qo](function (t) {
            t.source && (this[Ga] = this.width, pn(t[Vo], this, n))
        },
        i), void pn(e, i, n)) : (dY.error(Xo + t), !1)
    }
    function wn(t, i, e, s) {
        var r = t[qr];
        if (r && !(0 > r)) {
            s = s || 1;
            for (var h, a, o, f = [], u = 0; u++ < r; ) if (h = t[Zo](u, 0), h && eH(i, e, h.x, h.y) <= s) {
                a = u,
                o = h[Ao];
                break
            }
            if (a !== n) {
                for (var c, _, d = 0,
                u = 0,
                l = t._f8.length; l > u; u++) {
                    if (h = t._f8[u], !c && (d += h._iy || 0, d > a)) if (c = !0, h[Io] == YY || h[Io] == VY) f.push(new XY(YY, [i, e]));
                    else {
                        var v = Math.max(10, h._iy / 6),
                        b = v * Math.sin(o),
                        y = v * Math.cos(o);
                        if (h[Io] == WY) {
                            var g = h[Ma][0],
                            m = h[Ma][1];
                            if (_) {
                                var x = new sH(i, e, i + y, e + b),
                                E = x._3c(new sH(_[jo].x, _.lastPoint.y, h[Ma][0], h[Ma][1]));
                                E.x !== n && (g = E.x, m = E.y)
                            }
                            f[th](new XY(WY, [g, m, i - y, e - b, i, e]))
                        } else f[th](new XY(UY, [i - y, e - b, i, e]));
                        if (h[Ma]) if (h[Io] == WY) {
                            h.points[0] = i + y,
                            h[Ma][1] = e + b;
                            var x = new sH(i, e, i + y, e + b),
                            E = x._3c(new sH(h[Ma][2], h[Ma][3], h.points[4], h.points[5]));
                            E.x !== n && (h[Ma][2] = E.x, h[Ma][3] = E.y)
                        } else if (h[Io] == UY) {
                            h[Io] = WY,
                            h.points = [i + y, e + b][Jr](h[Ma]);
                            var x = new sH(i, e, i + y, e + b),
                            E = x._3c(new sH(h[Ma][2], h.points[3], h[Ma][4], h[Ma][5]));
                            E.x !== n && (h[Ma][2] = E.x, h[Ma][3] = E.y)
                        } else h[Io] == YY && (h.type = UY, h[Ma] = [i + y, e + b][Jr](h.points), u == l - 1 && (h[Ko] = !0))
                    }
                    f[th](h),
                    _ = h
                }
                return f
            }
        }
    }
    function Tn(t) {
        var i = t[Ga],
        n = t[za],
        e = $i(t.g, 0, 0, i, n);
        return e ? Mn(e[Mo], i, n) : void 0
    }
    function On(t, i, n) {
        this._16(t, i, n)
    }
    function Mn(t, i, n) {
        return new On(t, i, n)
    }
    function Sn(t) {
        if (Gh == t[0]) {
            if (t = t[ca](1), 3 == t[qr]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[qr]) return;
            return t = parseInt(t, 16),
            [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i[Go](t)) {
            var i = t[ih](Jo),
            n = t[ih](Bh);
            if (0 > i || i > n) return;
            if (t = t[ca](i + 1, n), t = t.split($h), t[qr] < 3) return;
            var e = parseInt(t[0]),
            s = parseInt(t[1]),
            r = parseInt(t[2]),
            h = 3 == t[qr] ? 255 : parseInt(t[3]);
            return [e, s, r, h]
        }
        dY[Qo]("color format error, [" + t + tf)
    }
    function jn(t, i, n) {
        return n || (n = Jz[nf]),
        n == lY[ef] ? t * i : n == lY[sf] ? Math.min(t, i) : n == lY.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : n == lY.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == lY[rf] ? Math.max(t, i) : n == lY.BLEND_MODE_SCREEN ? t + i - t * i : i
    }
    function In(t, i, n) {
        var e = $i(t.g, 0, 0, t.width, t[za]);
        if (e) {
            var s = e.data;
            if (n instanceof Function) s = n(t, s, i) || s;
            else {
                var r = i[0] / 255,
                h = i[1] / 255,
                a = i[2] / 255;
                if (n == lY[hf]) for (var o = 0,
                f = s.length; f > o; o += 4) {
                    var u = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
                    s[o] = u * r | 0,
                    s[o + 1] = u * h | 0,
                    s[o + 2] = u * a | 0
                } else for (var o = 0,
                f = s.length; f > o; o += 4) s[o] = 255 * jn(r, s[o] / 255, n) | 0,
                s[o + 1] = 255 * jn(h, s[o + 1] / 255, n) | 0,
                s[o + 2] = 255 * jn(a, s[o + 2] / 255, n) | 0
            }
            var t = Ri(t[Ga], t[za]);
            return t.g[af](e, 0, 0),
            t
        }
    }
    function An(t, i, n, e) {
        return 1 > n && (n = 1),
        Cn(t - n, i - n, 2 * n, 2 * n, e)
    }
    function Cn(t, i, n, e, s) {
        n = Math[po](n) || 1,
        e = Math.round(e) || 1;
        var r = Li(n, e);
        r[ko](1, 0, 0, 1, -t, -i),
        s[Fo](r);
        var h = $i(r, 0, 0, n, e);
        if (!h) return !1;
        h = h[Mo];
        for (var a = h[qr] / 4; a-- > 0; ) if (h[4 * a - 1] > ZY) return !0;
        return !1
    }
    function Rn(t, i, n, e, s, r) {
        t -= s.$x,
        i -= s.$y;
        var h = s._fn[of](t, i, n, e);
        if (!h) return !1;
        t = h.x * r,
        i = h.y * r,
        n = h.width * r,
        e = h[za] * r,
        n = Math[po](n) || 1,
        e = Math.round(e) || 1;
        var a = Li(),
        o = a[Za];
        o[Ga] < n || o[za] < e ? (o.width = n, o[za] = e) : (a[ko](1, 0, 0, 1, 0, 0), a[ff](0, 0, n, e)),
        a[ko](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r),
        a[so](r, r),
        s._jv(a, 1);
        var f = $i(a, 0, 0, n, e);
        if (!f) return !1;
        f = f.data;
        for (var u = f[qr] / 4; u-- > 0; ) if (f[4 * u - 1] > ZY) return !0;
        return !1
    }
    function Ln(t, i, n, e, s, r, h, a, o) {
        if (hi(t, i, n, e, a, o)) return null;
        var f, u, c, _ = new XY(YY, [t + n - s, i]),
        d = new XY(UY, [t + n, i, t + n, i + r]),
        l = new XY(YY, [t + n, i + e - r]),
        v = new XY(UY, [t + n, i + e, t + n - s, i + e]),
        b = new XY(YY, [t + s, i + e]),
        y = new XY(UY, [t, i + e, t, i + e - r]),
        g = new XY(YY, [t, i + r]),
        m = new XY(UY, [t, i, t + s, i]),
        x = (new XY(VY), [_, d, l, v, b, y, g, m]),
        E = new hH(t + s, i + r, n - s - s, e - r - r);
        t > a ? (f = fH, c = 5) : a > t + n ? (f = cH, c = 1) : (f = uH, c = 0),
        i > o ? (u = _H, f == fH && (c = 7)) : o > i + e ? (u = lH, f == cH ? c = 3 : f == uH && (c = 4)) : (u = dH, f == fH ? c = 6 : f == cH && (c = 2));
        var p = Fn(c, t, i, n, e, s, r, h, a, o, E),
        k = p[0],
        w = p[1],
        T = new KY,
        O = T._f8;
        O[th](new XY(HY, [k.x, k.y])),
        O.push(new XY(YY, [a, o])),
        O.push(new XY(YY, [w.x, w.y])),
        w._m6 && (O.push(w._m6), w[uf]++);
        for (var M = w._m6NO % 8,
        S = k[uf]; O.push(x[M]), ++M, M %= 8, M != S; );
        return k._m6 && O[th](k._m6),
        T.closePath(),
        T
    }
    function Pn(t, i, e, s, r, h, a, o, f, u, c, _, d, l) {
        var v = new sH(_, d, e, s),
        b = new sH(i[0], i[1], i[4], i[5]),
        y = b._3c(v, c),
        g = y[0],
        m = y[1];
        if (g[cf] !== n) {
            g[uf] = (t - 1) % 8,
            m[uf] = (t + 1) % 8;
            var x = g[cf];
            7 == t ? (g.y = h + u + Math.min(l[za], x), m.x = r + f + Math.min(l[Ga], x)) : 5 == t ? (g.x = r + f + Math.min(l.width, x), m.y = h + o - u - Math.min(l.height, x)) : 3 == t ? (g.y = h + o - u - Math.min(l[za], x), m.x = r + a - f - Math.min(l[Ga], x)) : 1 == t && (g.x = r + a - f - Math.min(l[Ga], x), m.y = h + u + Math.min(l[za], x))
        } else {
            v._mm(v._mr, v._mw, g.x, g.y),
            g = v._$h(i),
            v._mm(v._mr, v._mw, m.x, m.y),
            m = v._$h(i);
            var E = Gn(i, [g, m]),
            p = E[0],
            k = E[2];
            g[uf] = t,
            m[uf] = t,
            g._m6 = new XY(UY, p[Xr](2)),
            m._m6 = new XY(UY, k.slice(2))
        }
        return [g, m]
    }
    function Dn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) u = {
            y: n,
            x: o - a
        },
        u[uf] = 0;
        else {
            u = {
                y: n + h,
                x: Math.max(i, o - a)
            };
            var _ = [i, n + h, i, n, i + r, n],
            d = new sH(o, f, u.x, u.y);
            if (u = d._$h(_)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Gn(_, [u]);
                l = l[0],
                l && (u._m6 = new XY(UY, l[Xr](2))),
                u[uf] = 7
            } else u = {
                y: n,
                x: i + r
            },
            u[uf] = 0
        }
        if (i + e - r >= o + a) c = {
            y: n,
            x: o + a
        },
        c[uf] = 0;
        else {
            c = {
                y: n + h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e - r, n, i + e, n, i + e, n + h],
            d = new sH(o, f, c.x, c.y);
            if (c = d._$h(v)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Gn(v, [c]);
                l && l[l.length - 1] && (c._m6 = new XY(UY, l[l[qr] - 1][Xr](2))),
                c[uf] = 1
            } else c = {
                y: n,
                x: i + e - r
            },
            c[uf] = 0
        }
        return [u, c]
    }
    function Nn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) u = {
            x: i + e,
            y: f - a
        },
        u[uf] = 2;
        else {
            u = {
                x: i + e - r,
                y: Math.max(n, f - a)
            };
            var _ = [i + e - r, n, i + e, n, i + e, n + h],
            d = new sH(o, f, u.x, u.y);
            if (u = d._$h(_)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Gn(_, [u]);
                l = l[0],
                l && (u._m6 = new XY(UY, l.slice(2))),
                u[uf] = 1
            } else u = {
                x: i + e,
                y: n + h
            },
            u._m6NO = 2
        }
        if (n + s - h >= f + a) c = {
            x: i + e,
            y: f + a
        },
        c[uf] = 2;
        else {
            c = {
                x: i + e - r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = new sH(o, f, c.x, c.y);
            if (c = d._$h(v)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Gn(v, [c]);
                l[1] && (c._m6 = new XY(UY, l[1][Xr](2))),
                c[uf] = 3
            } else c = {
                x: i + e,
                y: n + s - h
            },
            c[uf] = 2
        }
        return [u, c]
    }
    function $n(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) c = {
            y: n + s,
            x: o - a
        },
        c._m6NO = 4;
        else {
            c = {
                y: n + s - h,
                x: Math.max(i, o - a)
            };
            var _ = [i + r, n + s, i, n + s, i, n + s - h],
            d = new sH(o, f, c.x, c.y);
            if (c = d._$h(_)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Gn(_, [c]);
                l = l[l[qr] - 1],
                l && (c._m6 = new XY(UY, l[Xr](2))),
                c[uf] = 5
            } else c = {
                y: n + s,
                x: i + r
            },
            c[uf] = 4
        }
        if (i + e - r >= o + a) u = {
            y: n + s,
            x: o + a
        },
        u[uf] = 4;
        else {
            u = {
                y: n + s - h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = new sH(o, f, u.x, u.y);
            if (u = d._$h(v)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Gn(v, [u]);
                l[0] && (u._m6 = new XY(UY, l[0][Xr](2))),
                u._m6NO = 3
            } else u = {
                y: n + s,
                x: i + e - r
            },
            u[uf] = 4
        }
        return [u, c]
    }
    function Bn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) c = {
            x: i,
            y: f - a
        },
        c._m6NO = 6;
        else {
            c = {
                x: i + r,
                y: Math.max(n, f - a)
            };
            var _ = [i, n + h, i, n, i + r, n],
            d = new sH(o, f, c.x, c.y);
            if (c = d._$h(_)) {
                B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Gn(_, [c]);
                l = l[l[qr] - 1],
                l && (c._m6 = new XY(UY, l[Xr](2)))
            } else c = {
                x: i,
                y: n + h
            };
            c._m6NO = 7
        }
        if (n + s - h >= f + a) u = {
            x: i,
            y: f + a
        },
        u[uf] = 6;
        else {
            u = {
                x: i + r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + r, n + s, i, n + s, i, n + s - h],
            d = new sH(o, f, u.x, u.y);
            if (u = d._$h(v)) {
                B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Gn(v, [u]);
                l[0] && (u._m6 = new XY(UY, l[0][Xr](2))),
                u[uf] = 5
            } else u = {
                x: i,
                y: n + s - h
            },
            u[uf] = 6
        }
        return [u, c]
    }
    function Fn(t, i, n, e, s, r, h, a, o, f, u) {
        var c = a / 2;
        switch (r = r || 1e-4, h = h || 1e-4, t) {
            case 7:
                var _ = [i, n + h, i, n, i + r, n],
            d = i + r,
            l = n + h;
                return Pn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 5:
                return _ = [i + r, n + s, i, n + s, i, n + s - h],
            d = i + r,
            l = n + s - h,
            Pn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 3:
                return _ = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = i + e - r,
            l = n + s - h,
            Pn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 1:
                return _ = [i + e - r, n, i + e, n, i + e, n + h],
            d = i + e - r,
            l = n + h,
            Pn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 0:
                return Dn(t, i, n, e, s, r, h, c, o, f, u);
            case 2:
                return Nn(t, i, n, e, s, r, h, c, o, f, u);
            case 4:
                return $n(t, i, n, e, s, r, h, c, o, f, u);
            case 6:
                return Bn(t, i, n, e, s, r, h, c, o, f, u)
        }
    }
    function Gn(t, i) {
        for (var e, s, r, h, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[qr]; b++) a = i[b],
        o = a.t,
        0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (_ - u) * o, r = c + (d - c) * o, h = _ + (l - _) * o, v.push([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = r, _ = h) : v[th](null);
        return r !== n && v[th]([a.x, a.y, r, h, d, l]),
        v
    }
    function zn(t) {
        return this.$layoutByAnchorPoint && this._n0q && (t.x -= this[_f].x, t.y -= this[_f].y),
        this.$rotate && Si(t, this.$rotate),
        t.x += this[df] || 0,
        t.y += this[lf] || 0,
        this.$rotatable && this.$_hostRotate ? Si(t, this[vf]) : t
    }
    function Hn(t) {
        return this[bf] && this.$_hostRotate && Si(t, -this[vf]),
        t.x -= this.$offsetX || 0,
        t.y -= this[lf] || 0,
        this[yf] && Si(t, -this[yf]),
        this[gf] && this[_f] && (t.x += this[_f].x, t.y += this[_f].y),
        t
    }
    function Yn() {
        var t = this[mf];
        this[mf] && (this.$invalidateSize = !1, this[xf] = !0, this._8e[Ef](this._jc), this[pf] && this._8e[kf](this[pf]), this.$border && this._8e[kf](this[wf]));
        var i = this._$t();
        if (i) var n = this[Tf] && this[Of];
        return this.$invalidateAnchorPoint && this[gf] && (this[xf] = !1, n && (t = !0), this[_f] = ui(this[Mf], this._8e[Ga], this._8e.height), this._n0q.x += this._8e.x, this[_f].y += this._8e.y),
        i ? (t && (this[Sf] = !0, Un.call(this, n)), this[Sf] && (this[Sf] = !1, this[jf] = this[If] && this[Af] && this[Af][xo] ? LY[sh][Cf].call(this[If], this[Af][xo]) : null), t) : (this[Rf] = !1, t)
    }
    function Un(t) {
        var i = this._8e.x + this[wf] / 2,
        n = this._8e.y + this[wf] / 2,
        e = this._8e.width - this[wf],
        s = this._8e.height - this[wf],
        r = 0,
        h = 0;
        if (this.$borderRadius && (D(this[Lf]) ? r = h = this[Lf] : (r = this[Lf].x || 0, h = this[Lf].y || 0), r = Math.min(r, e / 2), h = Math.min(h, s / 2)), t && (this._pointerX = this._n0q.x - this.$offsetX + this[Pf], this[Df] = this[_f].y - this[lf] + this[Nf], !this._8e[$f](this._pointerX, this._pointerY))) {
            var a = new QY(i, n, e, s, r, h, this[Of], this._pointerX, this._pointerY);
            return this[Af] = a._m6,
            this._lsShape.bounds.set(i, n, e, s),
            void (this[Rf] = !0)
        }
        this._lsShape && this._lsShape.clear(),
        this._lsShape = pW[Bf](i, n, e, s, r, h, this[Af]),
        this._lsShape.bounds.set(i, n, e, s)
    }
    function Wn(t, i, n, e) {
        return e && (t[Ga] < 0 || t[za] < 0) ? (t.x = i, t.y = n, void (t[Ga] = t[za] = 0)) : (i < t.x ? (t[Ga] += t.x - i, t.x = i) : i > t.x + t[Ga] && (t[Ga] = i - t.x), void (n < t.y ? (t[za] += t.y - n, t.y = n) : n > t.y + t[za] && (t.height = n - t.y)))
    }
    function qn(t, i, e) {
        var s, r = t.position,
        h = t[Ff] === n ? this[Ff] : t[Ff];
        return this.$data instanceof KY && h ? (s = EY[Gf](r, this[zf], this[So], i, e), s.x *= this._j1, s.y *= this._j2) : (s = ui(r, this._8e.width, this._8e[za]), s.x += this._8e.x, s.y += this._8e.y),
        zn[Vr](this, s)
    }
    function Vn(t, i) {
        if (i) if (i._8e[Hf]()) t.$x = i.$x,
        t.$y = i.$y;
        else {
            var n = qn[Vr](i, t);
            t.$x = n.x,
            t.$y = n.y,
            t[Yf] = n[Ao]
        } else t.$x = 0,
        t.$y = 0;
        t[Uf] && nU[Vr](t)
    }
    function Xn(t) {
        if (t[Wf] === n) {
            var i, e;
            if (t[qf]) i = t[Vf],
            e = t[qf];
            else {
                var s;
                if (t[Xf] !== n) s = Xf;
                else {
                    if (t[Zf] === n) return !1;
                    s = Zf
                }
                e = function (t) {
                    this[s] = t
                },
                i = function () {
                    return this[s]
                }
            }
            Z(t, Wf, {
                get: function () {
                    return i[Vr](this)
                },
                set: function (t) {
                    e.call(this, t)
                }
            })
        }
        if (t[Kf] === n) {
            var r;
            if (t[Jf] !== n) r = Jf;
            else {
                if (t[Qf] === n) return;
                r = Qf
            }
            Z(t, Kf, {
                get: function () {
                    return this[r]
                },
                set: function (t) {
                    this[r] = t
                }
            })
        }
    }
    function Zn(t, i, n, e, s) {
        var r, h, a, o, f, u, c, _, d = function (t) {
            return function (i) {
                t(i)
            }
        },
        l = function () {
            h = null,
            a = null,
            o = f,
            f = null,
            u = null
        },
        v = function (t) {
            r = t,
            c || (c = Ri()),
            c.width = r[Ga],
            c[za] = r.height,
            i[Ga] = r[Ga],
            i.height = r[za]
        },
        b = function (t) {
            y(),
            l(),
            h = t[tu] ? t[iu] : null,
            a = 10 * t[nu],
            f = t[eu]
        },
        y = function () {
            if (u) {
                var t = u.getImageData(0, 0, r[Ga], r[za]),
                n = {
                    data: t,
                    _pixels: Mn(t[Mo], r[Ga], r[za]),
                    delay: a
                };
                s[Vr](i, n)
            }
        },
        g = function (t) {
            u || (u = c.getContext(Ka));
            var i = t[su] ? t.lct : r.gct,
            n = u[_o](t[ru], t[hu], t.width, t[za]);
            t.pixels[au](function (t, e) {
                h !== t ? (n[Mo][4 * e + 0] = i[t][0], n[Mo][4 * e + 1] = i[t][1], n.data[4 * e + 2] = i[t][2], n[Mo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[Mo][4 * e + 3] = 0)
            }),
            u[af](n, t[ru], t.topPos)
        },
        m = function () { },
        x = {
            hdr: d(v),
            gce: d(b),
            com: d(m),
            app: {
                NETSCAPE: d(m)
            },
            img: d(g, !0),
            eof: function () {
                y(),
                n.call(i)
            }
        },
        E = new XMLHttpRequest;
        $z || E[ou]("text/plain; charset=x-user-defined"),
        E[fu] = function () {
            _ = new aU(E[Aa]);
            try {
                fU(_, x)
            } catch (t) {
                e[Vr](i, Ra)
            }
        },
        E[uu] = function () {
            e.call(i, cu)
        },
        E[_u](Da, t, !0),
        E[du]()
    }
    function Kn(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i[au](function (n, e) {
            i[e] = t(n)
        }),
        i[lu]("")
    }
    function Jn(t, i) {
        try {
            if (null == t || t[qr] < 8) return;
            if (null == i || i[qr] <= 0) return;
            for (var n = "",
            e = 0; e < i[qr]; e++) n += i[vu](e).toString();
            var s = Math[Ph](n[qr] / 5),
            r = parseInt(n.charAt(s) + n[bu](2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n[bu](5 * s), 10),
            h = Math[po](i.length / 2),
            a = Math.pow(2, 31) - 1,
            o = parseInt(t[ca](t[qr] - 8, t[qr]), 16);
            for (t = t[ca](0, t.length - 8), n += o; n[qr] > 10; ) n = (parseInt(n.substring(0, 10), 10) + parseInt(n.substring(10, n[qr]), 10)).toString();
            n = (r * n + h) % a;
            for (var f = "",
            u = "",
            e = 0; e < t.length; e += 2) f = parseInt(parseInt(t[ca](e, e + 2), 16) ^ Math[Ph](n / a * 255), 10),
            u += String.fromCharCode(f),
            n = (r * n + h) % a;
            return 0 | u[0] ? FU = vU[yu + gU + gu](u) : null
        } catch (c) { }
    }
    function Qn() {
        var t = cU;
        if (!t) return void (WU = !0);
        BU = t;
        var i;
        t = t[kh]($h);
        for (var n = 0; n < t[qr] && (i = Jn(t[n], dU), !(i && i[kh](fo)[qr] >= 8)); ) 1 == t[qr] && (i = Jn(t[n], mu)),
        n++;
        if (!i || i.split(fo)[qr] < 8) return HU = !0,
        dU.length > 0 || "" === dU || dU == xu + pU + Eu + kU + pu || dU == ku + EU + wu ? (YU = XU, WU = !1, void ($U = !1)) : (YU = XU, void (WU = !0));
        $U = i[kh](fo);
        var e = $U[3];
        if (e != Zq) return void (HU = !0);
        WU = !1;
        var s = $U[0]; (Tu == s || Ou == s) && (HU = !1);
        var r = $U[5];
        UU = r;
        var h = $U[6];
        YU = h
    }
    function te() {
        var t = BU;
        if (t) {
            var i;
            t = t[kh]($h);
            for (var n = 0; n < t[qr] && (i = ZU(t[n], dU), !(i && i[kh](fo)[qr] >= 8)); ) 1 == t[qr] && (i = ZU(t[n], mu)),
            n++;
            if (i.split(fo)[qr] >= 8) return void (qU = !1)
        }
        return dU && dU != xu + pU + Eu + kU + pu && dU != ku + EU + wu ? void (qU = !0) : void (qU = !1)
    }
    function ie() {
        if (HU) {
            var t = ur[SU + Io]._jv,
            i = zU;
            ur[SU + Io]._jv = function () {
                t[eh](this, arguments),
                i[Vr](this[Mu], this.g)
            };
            var n = uW[SU + Io]._fe;
            uW[SU + Io]._fe = function (t) {
                n[eh](this, arguments),
                i.call(this, t)
            }
        }
    }
    function ne() {
        if (UU !== !0 && UU) {
            var t = UU.split(Uh);
            if (3 != t[qr]) return void (wW[sh]._jv = null);
            var i = parseInt(t[0], 10),
            n = parseInt(t[1], 10),
            e = parseInt(t[2], 10),
            s = 3,
            r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            _U > r && (wW.prototype._jv = null)
        }
    }
    function ee() {
        var t = 0 | YU;
        if (t) {
            var i = IH.prototype._kg;
            IH[SU + Io]._kg = function () {
                return this._j7.length > t ? !1 : i[eh](this, arguments)
            }
        }
    }
    function se() {
        WU && (Qz[SU + Io]._kg = Qz[SU + Io]._gi)
    }
    function re() {
        if (qU) {
            var t = zU,
            i = uW[SU + Io]._fe;
            uW[SU + Io]._fe = function (n) {
                i[eh](this, arguments),
                t.call(this, n)
            }
        }
    }
    function he() {
        if (VU) {
            var t = ur[SU + Io]._jv,
            i = zU;
            ur[SU + Io]._jv = function () {
                t[eh](this, arguments),
                i[Vr](this._myaseCanvas, this.g)
            }
        }
    }
    function ae() {
        $U === n && (uW[SU + Io]._j0 = hH[Su])
    }
    function oe(t) {
        var i = Ri(!0);
        return Xn(i.g),
        i[ju] = function () {
            return !1
        },
        t[Iu](i),
        i.className = iW,
        i
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t[qr], s = n[qr], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; ) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }
        function e(t) {
            var i = t[qr],
            s = Math[Fh](i / 2);
            return 1 >= i ? t : n(e(t[Xr](0, s)), e(t[Xr](s)))
        }
        return e(t)
    }
    function fe(t) {
        t.width = t[Ga]
    }
    function ue(t) {
        aW || (aW = "imageSmoothingEnabled" in CanvasRenderingContext2D[sh] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D[sh] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[sh] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"),
        t[aW] = !1
    }
    function ce(t, i, n, e, s) {
        e = V(i + e) - (i = q(i)),
        s = V(n + s) - (n = q(n)),
        t[ff](i, n, e, s),
        t[Au](i, n, e, s)
    }
    function q(t) {
        return Math.floor(t)
    }
    function V(t) {
        return Math[Fh](t)
    }
    function _e(t) {
        var i = [];
        return t.forEach(function (t) {
            i[th](-t)
        }),
        i
    }
    function de(t) {
        return t %= _W,
        0 > t && (t += _W),
        t
    }
    function le(t, i, n, e, s, r, h, a) {
        var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h)),
        f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1
        } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1
        } else if (!(f >= i && e >= f)) return !1;
        if (s >= h) {
            if (!(o >= h && s >= o)) return !1
        } else if (!(o >= s && h >= o)) return !1;
        if (r >= a) {
            if (!(f >= a && r >= f)) return !1
        } else if (!(f >= r && a >= f)) return !1;
        return !0
    }
    function ve(t, i) {
        for (var n = 0,
        e = t.length; e > n; ) {
            for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h; ) {
                var a = i[h],
                o = i[(h + 1) % e];
                if (le(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1])) return !0;
                h++
            }
            n++
        }
        return !1
    }
    function be(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }
    function ye(t) {
        return t[Cu] ? (t = t[Cu], t._et ? t._et : t instanceof kW && t._hb === !1 ? t : null) : null
    }
    function ge(t, i, n) {
        if (n = n || i[Ru], n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e || (e = new Bq(t, n), t._linkedNodes[n.id] = e),
        e._i3(i, t)
    }
    function me(t, i, n) {
        if (n = n || i[Ru], n == t) return !1;
        var e = t[Lu](n);
        return e ? e._da(i, t) : void 0
    }
    function xe(t, i, e) {
        return e === n && (e = i[Ru]),
        e != t ? (t._85 || (t._85 = new Qz), t._85.add(i) === !1 ? !1 : void t._9b++) : void 0
    }
    function Ee(t, i, n) {
        return t._85 && t._85[Oh](i) !== !1 ? (t._9b--, void me(t, i, n)) : !1
    }
    function pe(t, i) {
        return i.fromAgent != t ? (t._99 || (t._99 = new Qz), t._99.add(i) === !1 ? !1 : void t[Pu]++) : void 0
    }
    function ke(t, i) {
        return t._99 && t._99[Oh](i) !== !1 ? (t._myr--, void me(i[Du], i, t)) : !1
    }
    function we(t, i) {
        if (i === n && (i = t instanceof mW), i) {
            if (t[Nu]()) return null;
            var e = we(t[$u], !1);
            if (t.isLooped()) return e;
            for (var s = we(t.to, !1); null != e && null != s; ) {
                if (e == s) return e;
                if (e[Bu](s)) return s;
                if (s.isDescendantOf(e)) return e;
                e = we(e, !1),
                s = we(s, !1)
            }
            return null
        }
        for (var r = t.parent; null != r; ) {
            if (r._ib()) return r;
            r = r[Cu]
        }
        return null
    }
    function Te(t, i, n) {
        t._ib() && t[Ur]() && t[Kr][au](function (t) {
            t instanceof xW && i.add(t) && Te(t, i, n)
        },
        this),
        t.hasFollowers() && t._ey[au](function (t) {
            (null == n || n[Fu](t)) && i.add(t) && Te(t, i, n)
        })
    }
    function Oe(t, i) {
        i[Cu] ? i[Cu][Gu](i, i.parent[zu] - 1) : t[Hu][Yu](i, t[Hu][qr] - 1)
    }
    function Me(t, i) {
        i[Cu] ? i[Cu][Gu](i, 0) : t[Hu].setIndex(i, 0)
    }
    function Se(t, i) {
        if (i instanceof mW) return void (i.isInvalid() || Ie(t, i));
        for (Oe(t, i); i = i[Cu]; ) Oe(t, i)
    }
    function je(t, i) {
        if (i instanceof mW) return void (i[Nu]() || Ae(t, i));
        for (Me(t, i); i = i[Cu]; ) Me(t, i)
    }
    function Ie(t, i) {
        var n = i.fromAgent;
        if (i[Uu]()) Oe(t, n);
        else {
            var e = i[Ru];
            Oe(t, n),
            Oe(t, e)
        }
    }
    function Ae(t, i) {
        var n = i[Du];
        if (i[Uu]()) Me(t, n);
        else {
            var e = i.toAgent;
            Me(t, n),
            Me(t, e)
        }
    }
    function Ce(t, i) {
        return t._9b++,
        t._fs ? (i._id = t._i6, t._i6._if = i, void (t._i6 = i)) : (t._fs = i, void (t._i6 = i))
    }
    function Re(t, i) {
        t._9b--,
        t._i6 == i && (t._i6 = i._id),
        i._id ? i._id._if = i._if : t._fs = i._if,
        i._if && (i._if._id = i._id),
        i._id = null,
        i._if = null,
        me(t, i, i.$to)
    }
    function Le(t, i) {
        return t[Pu]++,
        t._i4 ? (i._jx = t._j3, t._j3._jz = i, void (t._j3 = i)) : (t._i4 = i, void (t._j3 = i))
    }
    function Pe(t, i) {
        t._myr--,
        t._j3 == i && (t._j3 = i._jx),
        i._jx ? i._jx._jz = i._jz : t._i4 = i._jz,
        i._jz && (i._jz._jx = i._jx),
        i._jx = null,
        i._jz = null
    }
    function De(t, i) {
        return i = i || new Qz,
        t[Wu](function (t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t[qu]._et,
                toAgent: t.$to._et
            })
        }),
        t[Vu](function (t) {
            t instanceof xW && De(t, i)
        }),
        i
    }
    function Ne(t, i, n) {
        return Be(t, i, n) === !1 ? !1 : $e(t, i, n)
    }
    function $e(t, i, n) {
        if (t._fs) for (var e = t._fs; e; ) {
            if (i.call(n, e) === !1) return !1;
            e = e._if
        }
    }
    function Be(t, i, n) {
        if (t._i4) for (var e = t._i4; e; ) {
            if (i[Vr](n, e) === !1) return !1;
            e = e._jz
        }
    }
    function Fe(t, i, e, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t[Xu](i + h, e), t[Zu](i + s - h, e), t[Ku](i + s, e, i + s, e + a), t[Zu](i + s, e + r - a), t.quadTo(i + s, e + r, i + s - h, e + r), t.lineTo(i + h, e + r), t[Ku](i, e + r, i, e + r - a), t[Zu](i, e + a), t.quadTo(i, e, i + h, e), t[Ju](), t) : (t[Xu](i, e), t.lineTo(i + s, e), t[Zu](i + s, e + r), t[Zu](i, e + r), t[Ju](), t)
    }
    function Ge(t, i) {
        var n = i.r || 1,
        e = i.cx || 0,
        s = i.cy || 0,
        r = n * Math.tan(Math.PI / 8),
        h = n * Math.sin(Math.PI / 4);
        t[Xu](e + n, s),
        t[Ku](e + n, s + r, e + h, s + h),
        t.quadTo(e + r, s + n, e, s + n),
        t[Ku](e - r, s + n, e - h, s + h),
        t[Ku](e - n, s + r, e - n, s),
        t.quadTo(e - n, s - r, e - h, s - h),
        t[Ku](e - r, s - n, e, s - n),
        t[Ku](e + r, s - n, e + h, s - h),
        t[Ku](e + n, s - r, e + n, s)
    }
    function ze(t, i, n, e, s) {
        i instanceof en && (e = i.width, s = i[za], n = i.cy - s / 2, i = i.cx - e / 2);
        var r = .5522848,
        h = e / 2 * r,
        a = s / 2 * r,
        o = i + e,
        f = n + s,
        u = i + e / 2,
        c = n + s / 2;
        return t.moveTo(i, c),
        t.curveTo(i, c - a, u - h, n, u, n),
        t[Qu](u + h, n, o, c - a, o, c),
        t[Qu](o, c + a, u + h, f, u, f),
        t[Qu](u - h, f, i, c + a, i, c),
        t
    }
    function He(t, i, n, e, s) {
        var r = 2 * e,
        h = 2 * s,
        a = i + e / 2,
        o = n + s / 2;
        return t[Xu](a - r / 4, o - h / 12),
        t.lineTo(i + .306 * e, n + .579 * s),
        t[Zu](a - r / 6, o + h / 4),
        t[Zu](i + e / 2, n + .733 * s),
        t[Zu](a + r / 6, o + h / 4),
        t.lineTo(i + .693 * e, n + .579 * s),
        t[Zu](a + r / 4, o - h / 12),
        t[Zu](i + .611 * e, n + .332 * s),
        t[Zu](a + 0, o - h / 4),
        t.lineTo(i + .388 * e, n + .332 * s),
        t[Ju](),
        t
    }
    function Ye(t, i, n, e, s) {
        return t[Xu](i, n),
        t[Zu](i + e, n + s / 2),
        t[Zu](i, n + s),
        t.closePath(),
        t
    }
    function Ue(t, i, n, e, s) {
        return t.moveTo(i, n + s / 2),
        t[Zu](i + e / 2, n),
        t[Zu](i + e, n + s / 2),
        t.lineTo(i + e / 2, n + s),
        t[Ju](),
        t
    }
    function We(t, i, n, e, s, r) {
        return t[Xu](i, n),
        t[Zu](i + e, n + s / 2),
        t[Zu](i, n + s),
        r || (t[Zu](i + .25 * e, n + s / 2), t[Ju]()),
        t
    }
    function qe(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t,
        e = e || 50,
        s = s || 0,
        i = i || 0,
        n = n || 0;
        for (var r, h, a = 0,
        o = 2 * Math.PI / t,
        f = new KY; t > a; ) r = i + e * Math.cos(s),
        h = n + e * Math.sin(s),
        a ? f.lineTo(r, h) : f[Xu](r, h),
        ++a,
        s += o;
        return f.closePath(),
        f
    }
    function Ve() {
        var t = new KY;
        return t.moveTo(75, 40),
        t[Qu](75, 37, 70, 25, 50, 25),
        t[Qu](20, 25, 20, 62.5, 20, 62.5),
        t[Qu](20, 80, 40, 102, 75, 120),
        t.curveTo(110, 102, 130, 80, 130, 62.5),
        t[Qu](130, 62.5, 130, 25, 100, 25),
        t[Qu](85, 25, 75, 37, 75, 40),
        t
    }
    function Xe() {
        var t = new KY;
        return t[Xu](20, 0),
        t[Zu](80, 0),
        t.lineTo(100, 100),
        t[Zu](0, 100),
        t.closePath(),
        t
    }
    function Ze() {
        var t = new KY;
        return t[Xu](100, 0),
        t[Zu](100, 80),
        t.lineTo(0, 100),
        t.lineTo(0, 20),
        t[Ju](),
        t
    }
    function Ke() {
        var t = new KY;
        return t[Xu](20, 0),
        t[Zu](100, 0),
        t[Zu](80, 100),
        t[Zu](0, 100),
        t[Ju](),
        t
    }
    function Je() {
        var t = new KY;
        return t[Xu](43, 23),
        t[Zu](28, 10),
        t.lineTo(37, 2),
        t[Zu](63, 31),
        t[Zu](37, 59),
        t.lineTo(28, 52),
        t[Zu](44, 38),
        t[Zu](3, 38),
        t[Zu](3, 23),
        t.closePath(),
        t
    }
    function Qe() {
        var t = new KY;
        return t[Xu](1, 8),
        t[Zu](7, 2),
        t[Zu](32, 26),
        t[Zu](7, 50),
        t.lineTo(1, 44),
        t.lineTo(18, 26),
        t[Ju](),
        t[Xu](27, 8),
        t[Zu](33, 2),
        t[Zu](57, 26),
        t[Zu](33, 50),
        t[Zu](27, 44),
        t[Zu](44, 26),
        t[Ju](),
        t
    }
    function ts() {
        var t = new KY;
        return t[Xu](0, 15),
        t[Zu](23, 15),
        t.lineTo(23, 1),
        t[Zu](47, 23),
        t[Zu](23, 43),
        t[Zu](23, 29),
        t[Zu](0, 29),
        t[Ju](),
        t
    }
    function is() {
        var t = new KY;
        return t[Xu](0, 21),
        t[Zu](30, 21),
        t[Zu](19, 0),
        t[Zu](25, 0),
        t.lineTo(47, 25),
        t[Zu](25, 48),
        t[Zu](19, 48),
        t.lineTo(30, 28),
        t[Zu](0, 28),
        t[Ju](),
        t
    }
    function ns() {
        var t = new KY;
        return t[Xu](0, 0),
        t[Zu](34, 24),
        t[Zu](0, 48),
        t.lineTo(14, 24),
        t.closePath(),
        t
    }
    function es() {
        var t = new KY;
        return t[Xu](20, 0),
        t.lineTo(34, 14),
        t.lineTo(20, 28),
        t.lineTo(22, 18),
        t.lineTo(1, 25),
        t[Zu](10, 14),
        t[Zu](1, 3),
        t[Zu](22, 10),
        t[Ju](),
        t
    }
    function ss() {
        var t = new KY;
        return t.moveTo(4, 18),
        t[Zu](45, 18),
        t[Zu](37, 4),
        t.lineTo(83, 25),
        t[Zu](37, 46),
        t[Zu](45, 32),
        t[Zu](4, 32),
        t[Ju](),
        t
    }
    function rs() {
        var t = new KY;
        return t.moveTo(17, 11),
        t[Zu](27, 11),
        t[Zu](42, 27),
        t[Zu](27, 42),
        t[Zu](17, 42),
        t[Zu](28, 30),
        t[Zu](4, 30),
        t.lineTo(4, 23),
        t[Zu](28, 23),
        t.closePath(),
        t
    }
    function hs() {
        pW.register(lY.SHAPE_CIRCLE, ze(new KY, 0, 0, 100, 100)),
        pW[tc](lY[ic], Fe(new KY, 0, 0, 100, 100)),
        pW[tc](lY[nc], Fe(new KY, 0, 0, 100, 100, 20, 20)),
        pW[tc](lY[ec], He(new KY, 0, 0, 100, 100)),
        pW[tc](lY.SHAPE_TRIANGLE, Ye(new KY, 0, 0, 100, 100)),
        pW.register(lY.SHAPE_PENTAGON, qe(5)),
        pW[tc](lY[sc], qe(6)),
        pW[tc](lY[rc], Ue(new KY, 0, 0, 100, 100)),
        pW[tc](lY.SHAPE_HEART, Ve()),
        pW.register(lY[hc], Xe()),
        pW.register(lY.SHAPE_RHOMBUS, Ze()),
        pW.register(lY[ac], Ke());
        var t = new KY;
        t[Xu](20, 0),
        t[Zu](40, 0),
        t[Zu](40, 20),
        t.lineTo(60, 20),
        t[Zu](60, 40),
        t[Zu](40, 40),
        t[Zu](40, 60),
        t[Zu](20, 60),
        t.lineTo(20, 40),
        t[Zu](0, 40),
        t[Zu](0, 20),
        t[Zu](20, 20),
        t[Ju](),
        pW[tc](lY[oc], t),
        pW[tc](lY[fc], We(new KY, 0, 0, 100, 100)),
        pW[tc](lY[uc], Je()),
        pW[tc](lY[cc], Qe()),
        pW[tc](lY.SHAPE_ARROW_3, ts()),
        pW[tc](lY[_c], is()),
        pW.register(lY[dc], ns()),
        pW[tc](lY[lc], es()),
        pW[tc](lY.SHAPE_ARROW_7, ss()),
        pW.register(lY.SHAPE_ARROW_8, rs()),
        pW[tc](lY.SHAPE_ARROW_OPEN, We(new KY, 0, 0, 100, 100, !0))
    }
    function as() {
        k(this, as, arguments),
        this[vc] = !0
    }
    function os() {
        k(this, os),
        this._$v = new wH
    }
    function fs() {
        if (this._hb === !0) {
            var t = this._85,
            i = this._99;
            if (t) for (t = t._j7; t[qr]; ) {
                var n = t[0];
                Ee(this, n, n[Ru])
            }
            if (i) for (i = i._j7; i.length; ) {
                var n = i[0];
                ke(this, n, n.fromAgent)
            }
            return void this[Vu](function (t) {
                t._ib() && fs[Vr](t)
            })
        }
        var e = De(this);
        e[au](function (t) {
            t = t.edge;
            var i = t.$from,
            n = t.$to,
            e = i.isDescendantOf(this),
            s = n[Bu](this);
            e && !s ? (xe(this, t), ge(this, t)) : s && !e && (pe(this, t), ge(t[Du], t, this))
        },
        this)
    }
    function us() {
        k(this, us, arguments),
        this.$image = null
    }
    function cs(t, i, n, e) {
        return t[i] = n,
        e ? {
            get: function () {
                return this[i]
            },
            set: function (t) {
                if (t !== this[i]) {
                    this[i] = t,
                    !this._n0k,
                    this._1g = !0;
                    for (var n = e[qr]; --n >= 0; ) this[e[n]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            },
            set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }
    function _s(t, i) {
        var n = {},
        e = {};
        for (var s in i) {
            var r = i[s];
            r[bc] && r.validateFlags[au](function (t, i, n) {
                n[i] = yc + t,
                e[t] = !0
            }),
            n[s] = cs(t, ch + s, r[bh], r[bc])
        }
        for (var h in e) t[yc + h] = !0;
        Object[gc](t, n)
    }
    function ds(t, i, n, e) {
        if (Array[mc](i)) for (var s = i[qr]; --s >= 0; ) ds(t, i[s], n, e);
        else {
            var r = i[xc];
            if (r) {
                if (r instanceof wW || (r = t[r]), !r) return
            } else r = t;
            if (e || (e = t.getProperty(i.property, n)), i[Ec] && (r[i[Ec]] = e), i[pc]) {
                var h = i[pc];
                h instanceof Function || (h = t[h]),
                h instanceof Function && h.call(t, e, r)
            }
        }
    }
    function ls() {
        TW.forEach(function (t) {
            this[t] = {}
        },
        this)
    }
    function vs(t, i, n, e) {
        return e == lY[kc] ? void (t[n] = i) : e == lY[wc] ? void t.set(n, i) : e == lY[Tc] ? void t[Oc](n, i) : !1
    }
    function bs() {
        k(this, bs, arguments)
    }
    function ys() {
        k(this, ys, arguments)
    }
    function gs(t, i, n, e) {
        var s = ms(t, i, n, e),
        r = [];
        if (ks(t)) xs(s, i, n, r, e[Mc](OW[Sc]));
        else {
            Rs(t, i, n, r, s, e);
            var h = Es(t, e),
            a = h ? Ss(t, s, i, n, e.getStyle(OW[jc])) : e[Mc](OW.EDGE_SPLIT_VALUE);
            0 == a && (s = !s)
        }
        return r
    }
    function ms(t, i, n) {
        if (null != t) {
            if (t == lY[Ic] || t == lY[Ac] || t == lY[Cc] || t == lY[Rc] || t == lY.EDGE_TYPE_EXTEND_RIGHT) return !0;
            if (t == lY[Lc] || t == lY.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == lY[Pc] || t == lY[Dc] || t == lY[Nc]) return !1
        }
        var e = Os(i, n),
        s = Ms(i, n);
        return e >= s
    }
    function xs(t, i, n, e, s) {
        t ? $s(i, n, e, s) : Bs(i, n, e, s)
    }
    function Es(t, i) {
        return i.getStyle(OW[$c])
    }
    function ps(t) {
        return null != t && (t == lY[Dc] || t == lY[Rc] || t == lY[Nc] || t == lY.EDGE_TYPE_EXTEND_RIGHT)
    }
    function ks(t) {
        return t && (t == lY[Bc] || t == lY.EDGE_TYPE_ELBOW_HORIZONTAL || t == lY.EDGE_TYPE_ELBOW_VERTICAL)
    }
    function ws(t, i, n, e, s) {
        if (t == lY.EDGE_TYPE_HORIZONTAL_VERTICAL || t == lY[Pc]) return new nH(e.x + e[Ga] / 2, e.y + e[za] / 2);
        var r;
        if (ps(t)) {
            var h = Math.min(n.y, e.y),
            a = Math.min(n.x, e.x),
            o = Math.max(n[Kh], e.bottom),
            f = Math.max(n[Jh], e[Jh]);
            if (r = s[Mc](OW.EDGE_EXTEND), t == lY[Dc]) return new nH((a + f) / 2, h - r);
            if (t == lY[Rc]) return new nH(a - r, (h + o) / 2);
            if (t == lY[Nc]) return new nH((a + f) / 2, o + r);
            if (t == lY[Fc]) return new nH(f + r, (h + o) / 2)
        }
        var u = Es(t, s);
        if (r = u ? Ss(t, i, n, e, s[Mc](OW[jc])) : s[Mc](OW[Gc]), r == Number.NEGATIVE_INFINITY || r == Number[zc]) return new nH(e.x + e[Ga] / 2, e.y + e[za] / 2);
        if (0 == r) return new nH(n.x + n[Ga] / 2, n.y + n[za] / 2);
        if (i) {
            var c = n.x + n[Jh] < e.x + e[Jh];
            return new nH(As(c, r, n.x, n.width), n.y + n.height / 2)
        }
        var _ = n.y + n.bottom < e.y + e[Kh];
        return new nH(n.x + n[Ga] / 2, As(_, r, n.y, n[za]))
    }
    function Ts(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }
    function Os(t, i) {
        var n = Math.max(t.x + t[Ga], i.x + i[Ga]) - Math.min(t.x, i.x);
        return n - t.width - i[Ga]
    }
    function Ms(t, i) {
        var n = Math.max(t.y + t[za], i.y + i[za]) - Math.min(t.y, i.y);
        return n - t[za] - i[za]
    }
    function Ss(t, i, n, e, s) {
        var r = js(s, i, n, e, null);
        return r * s
    }
    function js(t, i, n, e) {
        return i ? Is(t, n.x, n.right, e.x, e[Jh]) : Is(t, n.y, n.bottom, e.y, e.bottom)
    }
    function Is(t, i, n, e, s) {
        var r = Ts(i, n, e, s),
        h = e + s > i + n;
        if (r > 0) {
            if (1 == t) return r + (s - e) / 2;
            if (t >= 0 && 1 > t) return r;
            if (0 > t) return h ? e - i : n - s
        }
        return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
    }
    function As(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }
    function Cs(t, i) {
        var n = t.length;
        if (!(3 > n)) {
            var e = i.getStyle(OW[Hc]);
            if (e != lY[Yc]) {
                var s = i[Mc](OW[Uc]),
                r = 0,
                h = 0;
                s && (D(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
                for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l],
                    b = _.x - c.x,
                    y = _.y - c.y,
                    x = v.x - _.x,
                    E = v.y - _.y,
                    p = !b || b > -xY && xY > b,
                    k = !y || y > -xY && xY > y,
                    w = !x || x > -xY && xY > x,
                    T = !E || E > -xY && xY > E,
                    O = k; (p && T || k && w) && (O ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math.abs(E) : Math.abs(E) / 2, h), f = new nH(_.x - (b > 0 ? a : -a), _.y), u = new nH(_.x, _.y + (E > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, r), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, h), f = new nH(_.x, _.y - (y > 0 ? o : -o)), u = new nH(_.x + (x > 0 ? a : -a), _.y)), m(t, _), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == lY[Wc] ? (g(t, u, l), l++, n++) : e == lY[qc] && (g(t, [_, u], l), l++, n++)),
                    c = _,
                    _ = v
                }
                null != d && u.x == _.x && u.y == _.y && m(t, _)
            }
        }
    }
    function Rs(t, i, n, e, s, r) {
        var h = r[Mc](OW[Vc]),
        a = null == h;
        if (null != h) {
            var o = (new hH)[Xc](i)[Xc](n);
            o[Zc](h) || (s = Ls(h.x, h.y, o.y, o.x, o[Kh], o[Jh]))
        } else h = ws(t, s, i, n, r);
        s ? Ns(i, n, h, e, a) : Ds(i, n, h, e, a)
    }
    function Ls(t, i, n, e, s, r) {
        return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
    }
    function Ps(t, i, n) {
        return i >= t.x && i <= t.right && n >= t.y && n <= t[Kh]
    }
    function Ds(t, i, n, e, s) {
        var r = Math.max(t.y, i.y),
        h = Math.min(t.y + t[za], i.y + i[za]),
        a = null != n ? n.y : h + (r - h) / 2,
        o = t.x + t[Ga] / 2,
        f = i.x + i[Ga] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Ga] && (o = n.x), n.x >= i.x && n.x <= i.x + i[Ga] && (f = n.x)), Ps(i, o, a) || Ps(t, o, a) || e.push(new nH(o, a)), Ps(i, f, a) || Ps(t, f, a) || e[th](new nH(f, a)), 0 == e[qr]) if (null != n) Ps(i, n.x, a) || Ps(t, n.x, a) || e[th](new nH(n.x, a));
        else {
            var u = Math.max(t.x, i.x),
            c = Math.min(t.x + t[Ga], i.x + i.width);
            e[th](new nH(u + (c - u) / 2, a))
        }
    }
    function Ns(t, i, n, e, s) {
        var r = Math.max(t.x, i.x),
        h = Math.min(t.x + t.width, i.x + i.width),
        a = null != n ? n.x : h + (r - h) / 2,
        o = t.y + t[za] / 2,
        f = i.y + i[za] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t.height && (o = n.y), n.y >= i.y && n.y <= i.y + i[za] && (f = n.y)), Ps(i, a, o) || Ps(t, a, o) || e.push(new nH(a, o)), Ps(i, a, f) || Ps(t, a, f) || e.push(new nH(a, f)), 0 == e[qr]) if (null != n) Ps(i, a, n.y) || Ps(t, a, n.y) || e.push(new nH(a, n.y));
        else {
            var u = Math.max(t.y, i.y),
            c = Math.min(t.y + t[za], i.y + i[za]);
            e.push(new nH(a, u + (c - u) / 2))
        }
    }
    function $s(t, i, n, e) {
        var s = i.x + i[Ga] < t.x,
        r = t.x + t[Ga] < i.x,
        h = s ? t.x : t.x + t.width,
        a = t.y + t.height / 2,
        o = r ? i.x : i.x + i[Ga],
        f = i.y + i[za] / 2,
        u = e,
        c = s ? -u : u,
        _ = new nH(h + c, a);
        c = r ? -u : u;
        var d = new nH(o + c, f);
        if (s == r) {
            var l = s ? Math.min(h, o) - e : Math.max(h, o) + e;
            n[th](new nH(l, a)),
            n[th](new nH(l, f))
        } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n[th](_),
            n[th](new nH(_.x, v)),
            n.push(new nH(d.x, v)),
            n[th](d)
        } else n.push(_),
        n.push(d)
    }
    function Bs(t, i, n, e) {
        var s = i.y + i[za] < t.y,
        r = t.y + t[za] < i.y,
        h = t.x + t[Ga] / 2,
        a = s ? t.y : t.y + t.height,
        o = i.x + i[Ga] / 2,
        f = r ? i.y : i.y + i[za],
        u = e,
        c = s ? -u : u,
        _ = new nH(h, a + c);
        c = r ? -u : u;
        var d = new nH(o, f + c);
        if (s == r) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n[th](new nH(h, l)),
            n[th](new nH(o, l))
        } else if (_.y < d.y == s) {
            var v = h + (o - h) / 2;
            n[th](_),
            n.push(new nH(v, _.y)),
            n[th](new nH(v, d.y)),
            n.push(d)
        } else n[th](_),
        n.push(d)
    }
    function Fs(t) {
        return t == lY.EDGE_TYPE_ORTHOGONAL || t == lY[Ac] || t == lY.EDGE_TYPE_HORIZONTAL_VERTICAL || t == lY[Kc] || t == lY[Pc] || t == lY[Dc] || t == lY[Rc] || t == lY.EDGE_TYPE_EXTEND_BOTTOM || t == lY[Fc] || t == lY[Bc] || t == lY[Ic] || t == lY[Lc]
    }
    function Gs(t, i) {
        var n, e;
        i && i[Ga] && i[za] ? (n = i[Ga], e = i[za]) : n = e = isNaN(i) ? Jz.ARROW_SIZE : i;
        var s = pW[Jc](t, -n, -e / 2, n, e);
        return s || (s = new KY, s.moveTo(-n, -e / 2), s[Zu](0, 0), s[Zu](-n, e / 2)),
        s
    }
    function zs(t, i) {
        var n = Math.sin(i),
        e = Math.cos(i),
        s = t.x,
        r = t.y;
        return t.x = s * e - r * n,
        t.y = s * n + r * e,
        t
    }
    function Hs(t, i, n, e, s, r) {
        var h = Math[vo](e - i, n - t),
        a = new nH(s, r);
        return a[Ao] = h,
        zs(a, h),
        a.x += t,
        a.y += i,
        a
    }
    function Ys(t, i, e, s, r) {
        i = si(s, i.x, i.y, e.x, e.y),
        e = si(r, e.x, e.y, i.x, i.y);
        var h = Math.PI / 2 + Math[vo](e.y - i.y, e.x - i.x),
        a = t * Math.cos(h),
        o = t * Math.sin(h),
        f = e.x - i.x,
        u = e.y - i.y,
        c = i.x + .25 * f,
        _ = i.y + .25 * u,
        d = i.x + .75 * f,
        l = i.y + .75 * u;
        return [new XY(WY, [c + a, _ + o, d + a, l + o, n, n])]
    }
    function Us(t, i, e) {
        if (g(t, new XY(HY, [i.x, i.y]), 0), e) {
            if (t[qr] > 1) {
                var s = t[t.length - 1];
                if (UY == s[Io] && (s.invalidTerminal || s[Ma][2] === n || null === s.points[2])) return s[Ma][2] = e.x,
                s.points[3] = e.y,
                void (s[Ko] = !0);
                if (WY == s.type && (s.invalidTerminal || s[Ma][4] === n || null === s[Ma][4])) return s.points[4] = e.x,
                s[Ma][5] = e.y,
                void (s.invalidTerminal = !0)
            }
            t[th](new XY(YY, [e.x, e.y]))
        }
    }
    function Ws(t, i, n, e, s) {
        var r = e == s,
        h = t[Qc].getUI(e),
        a = r ? h : t.graph.getUI(s);
        if (h && a) {
            var o = i.edgeType,
            f = t[t_](h),
            u = r ? f : t[t_](a),
            c = t[Mc](OW[i_]),
            _ = t[Mc](OW[n_]);
            c && (f.x += c.x || 0, f.y += c.y || 0),
            _ && (u.x += _.x || 0, u.y += _.y || 0);
            var d = i.hasPathSegments();
            if (!r && !o && !d) {
                var l = e[vc],
                v = s[vc];
                if (l != v) {
                    var b, y, g, m, x = i.angle;
                    l ? (b = h, y = f, g = a, m = u) : (b = a, y = u, g = h, m = f);
                    var E = Js(y, b, l, g, m, x);
                    if (E && 2 == E[qr]) {
                        var p = E[0],
                        k = E[1];
                        return n[Xu](p.x, p.y),
                        k.x == p.x && k.y == p.y && (k.y += .01),
                        n.lineTo(k.x, k.y),
                        void (n._6k = !0)
                    }
                }
            }
            t._3k(i, n, h, a, o, f, u),
            (!r || d) && qs(t, i, n, h, a, o, f, u),
            n._6k = !0
        }
    }
    function qs(t, i, e, s, r, h, a, o) {
        var f = a.center,
        u = o[e_],
        c = t[s_],
        _ = t[r_];
        if (!c && !_) return void Us(e._f8, f, u);
        var d = e._f8;
        if (d[qr]) {
            if (c) {
                var l = d[0],
                v = l[h_];
                Vs(s, a, v, f, n, n)
            }
            if (_) {
                var b, y = d[d[qr] - 1],
                g = y[jo],
                m = y[Ma].length,
                x = g.x === n || g.y === n;
                m >= 4 && (x || o[a_](g.x, g.y)) && (x || (u = g), b = !0, g = {
                    x: y.points[m - 4],
                    y: y[Ma][m - 3]
                },
                o[a_](g.x, g.y) && (u = g, m >= 6 ? (g = {
                    x: y[Ma][m - 6],
                    y: y.points[m - 5]
                },
                y[Ma] = y.points.slice(0, 4), y[Io] = UY) : 1 == d[qr] ? (g = {
                    x: f.x,
                    y: f.y
                },
                y.points = y[Ma][Xr](0, 2), y[Io] = YY) : (y = d[d.length - 2], g = y[jo]))),
                Vs(r, o, g, u, n, n),
                b && (m = y.points[qr], y[Ma][m - 2] = u.x, y[Ma][m - 1] = u.y, u = null)
            }
        } else {
            var E = Math[vo](u.y - f.y, u.x - f.x),
            p = Math.cos(E),
            k = Math.sin(E);
            c && Vs(s, a, u, f, p, k),
            _ && Vs(r, o, f, u, -p, -k)
        }
        Us(e._f8, f, u)
    }
    function Vs(t, i, e, s, r, h) {
        if (r === n) {
            var a = Math.atan2(e.y - s.y, e.x - s.x);
            r = Math.cos(a),
            h = Math.sin(a)
        }
        for (e = {
            x: e.x,
            y: e.y
        },
        i[a_](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ; ) {
            if (!i[a_](e.x, e.y)) return s;
            if (t[o_](e.x - r, e.y - h, Jz[f_])) {
                s.x = e.x - r / 2,
                s.y = e.y - h / 2;
                break
            }
            e.x -= r,
            e.y -= h
        }
        return s
    }
    function Xs(t, i, n, e, s, r, h, a) {
        if (i[u_]()) return i._9v;
        var o = i[c_];
        if (Fs(o)) {
            var f = gs(o, n, e, t, s, r);
            if (!f || !f[qr]) return null;
            g(f, h, 0),
            f[th](a),
            o != lY[Bc] && Cs(f, t);
            for (var u = [], c = f[qr], _ = 1; c - 1 > _; _++) {
                var d = f[_];
                u[th](B(d) ? new XY(UY, [d[0].x, d[0].y, d[1].x, d[1].y]) : new XY(YY, [d.x, d.y]))
            }
            return u
        }
        if (i[__]) {
            var l = t._2g();
            if (!l) return;
            return Ys(l, h, a, n, e)
        }
    }
    function Zs(t, i, n) {
        var e = t.getStyle(OW[d_]),
        s = t._2g(),
        r = e + .2 * s,
        h = i.x + i.width - r,
        a = i.y,
        o = i.x + i[Ga],
        f = i.y + r;
        e += s;
        var u = .707,
        c = -.707,
        _ = i.x + i[Ga],
        d = i.y,
        l = _ + u * e,
        v = d + c * e,
        b = {
            x: h,
            y: a
        },
        y = {
            x: l,
            y: v
        },
        g = {
            x: o,
            y: f
        },
        m = b.x,
        x = y.x,
        E = g.x,
        p = b.y,
        k = y.y,
        w = g.y,
        T = ((w - p) * (k * k - p * p + x * x - m * m) + (k - p) * (p * p - w * w + m * m - E * E)) / (2 * (x - m) * (w - p) - 2 * (E - m) * (k - p)),
        O = ((E - m) * (x * x - m * m + k * k - p * p) + (x - m) * (m * m - E * E + p * p - w * w)) / (2 * (k - p) * (E - m) - 2 * (w - p) * (x - m)),
        r = Math.sqrt((m - T) * (m - T) + (p - O) * (p - O)),
        M = Math.atan2(b.y - O, b.x - T),
        S = Math[vo](g.y - O, g.x - T),
        j = S - M;
        return 0 > j && (j += 2 * Math.PI),
        Ks(T, O, M, j, r, r, !0, n)
    }
    function Ks(t, i, n, e, s, r, h, a) {
        var o, f, u, c, _, d, l, v, b, y, g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[Fh](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, u = n, _ > 0) {
            d = t + Math.cos(u) * s,
            l = i + Math.sin(u) * r,
            moveTo ? a.moveTo(d, l) : a[Zu](d, l);
            for (var m = 0; _ > m; m++) u += f,
            c = u - f / 2,
            v = t + Math.cos(u) * s,
            b = i + Math.sin(u) * r,
            y = t + Math.cos(c) * (s / Math.cos(f / 2)),
            g = i + Math.sin(c) * (r / Math.cos(f / 2)),
            a.quadTo(y, g, v, b)
        }
    }
    function Js(t, i, e, s, r, h) {
        var a = r.cx,
        o = r.cy,
        f = a < t.x,
        u = a > t[Jh],
        c = o < t.y,
        _ = o > t.bottom,
        d = t.cx,
        l = t.cy,
        v = f || u,
        b = c || _,
        y = h === n || null === h;
        y && (h = Math[vo](o - l, a - d), v || b || (h += Math.PI));
        var g = Math.cos(h),
        m = Math.sin(h),
        x = tr(i, t, {
            x: a,
            y: o
        },
        -g, -m);
        x || (h = Math[vo](o - l, a - d), v || b || (h += Math.PI), g = Math.cos(h), m = Math.sin(h), x = tr(i, t, {
            x: a,
            y: o
        },
        -g, -m) || {
            x: d,
            y: l
        });
        var E = tr(s, r, {
            x: x.x,
            y: x.y
        },
        -x[l_] || g, -x.perY || m, !1) || {
            x: a,
            y: o
        };
        return e ? [x, E] : [E, x]
    }
    function Qs(t, i, n, e, s, r) {
        var h = i < t.x,
        a = i > t.right,
        o = n < t.y,
        f = n > t[Kh];
        if (h && e > 0) {
            var u = t.x - i,
            c = n + u * s / e;
            if (c >= t.y && c <= t[Kh]) return {
                x: t.x,
                y: c,
                perX: e,
                perY: s
            }
        }
        if (a && 0 > e) {
            var u = t[Jh] - i,
            c = n + u * s / e;
            if (c >= t.y && c <= t[Kh]) return {
                x: t[Jh],
                y: c,
                perX: e,
                perY: s
            }
        }
        if (o && s > 0) {
            var _ = t.y - n,
            d = i + _ * e / s;
            if (d >= t.x && d <= t.right) return {
                x: d,
                y: t.y,
                perX: e,
                perY: s
            }
        }
        if (f && 0 > s) {
            var _ = t[Kh] - n,
            d = i + _ * e / s;
            if (d >= t.x && d <= t[Jh]) return {
                x: d,
                y: t.bottom,
                perX: e,
                perY: s
            }
        }
        return r !== !1 ? Qs(t, i, n, -e, -s, !1) : void 0
    }
    function tr(t, i, n, e, s, r) {
        if (!i[a_](n.x, n.y)) {
            if (n = Qs(i, n.x, n.y, e, s, r), !n) return;
            return ir(t, i, n, n[l_], n.perY)
        }
        return r === !1 ? ir(t, i, n, e, s) : ir(t, i, {
            x: n.x,
            y: n.y,
            perX: e,
            perY: s
        },
        e, s) || ir(t, i, n, -e, -s)
    }
    function ir(t, i, n, e, s) {
        for (; ; ) {
            if (!i[a_](n.x, n.y)) return;
            if (t.hitTest(n.x + e, n.y + s)) break;
            n.x += e,
            n.y += s
        }
        return n
    }
    function nr(t) {
        return En(t) ? t : t[v_](/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i[Go](t) ? t : (t = J(t), t instanceof Object && t[Fo] ? t : void 0)
    }
    function er(t) {
        for (var i = t[Cu]; i; ) {
            if (i[b_]) return i;
            i = i[Cu]
        }
        return null
    }
    function sr() {
        k(this, sr, arguments)
    }
    function rr(t, n, e, s, r, h, a) {
        var o = i[Xa](y_);
        o[Eh] = g_,
        vi(o, YW),
        n && vi(o, n);
        var f = i[Xa](m_);
        return h && (Zz && (f[x_] = h), GH || (f.onclick = h)),
        f[lh] = a,
        f.src = e,
        vi(f, UW),
        r && vi(f, r),
        s && yi(f, E_, p_),
        o._img = f,
        o[Iu](f),
        t.appendChild(o),
        o
    }
    function hr(t, n) {
        this._navPane = i[Xa](y_),
        this[k_].className = w_,
        vi(this[k_], {
            "background-color": T_,
            overflow: O_,
            "user-select": M_,
            position: S_
        }),
        this[j_] = rr(this[k_], {
            width: I_
        },
        Jz[A_], !1, null, n, C_),
        this[R_] = rr(this[k_], {
            height: I_
        },
        Jz[L_], !1, WW, n, pa),
        this[P_] = rr(this._navPane, {
            height: I_,
            right: D_
        },
        Jz[L_], !0, WW, n, Jh),
        this[N_] = rr(this[k_], {
            width: I_,
            bottom: D_
        },
        Jz[A_], !0, null, n, Kh),
        t.appendChild(this._navPane)
    }
    function ar(t, i) {
        if (!Jz.NAVIGATION_IMAGE_LEFT) {
            var n = Ri(20, 40),
            e = n.g;
            e.scale(e.ratio, e[Ua]),
            e[Xu](16, 4),
            e.lineTo(4, 20),
            e.lineTo(16, 36),
            e[So] = 3,
            e.lineCap = po,
            e[$_] = po,
            e[B_] = F_,
            e[G_] = z_,
            e.shadowBlur = 5,
            e.stroke(),
            Jz.NAVIGATION_IMAGE_LEFT = n.toDataURL();
            var s = Ri(n[za], n[Ga], !1);
            s.g.translate(s.width, 0),
            s.g[Ao](Math.PI / 2),
            s.g[H_](n, 0, 0),
            Jz[A_] = s.toDataURL()
        }
        this[Mu] = t;
        var r = function (i) {
            z(i);
            var n, e, s = i[xc],
            r = s[lh];
            if (pa == r) n = 1;
            else if (Jh == r) n = -1;
            else if (C_ == r) e = 1;
            else {
                if (Kh != r) return;
                e = -1
            }
            Zz && (s.className = Y_, setTimeout(function () {
                s[Eh] = ""
            },
            100)),
            z(i),
            t._kj._9o(n, e)
        };
        hr[Vr](this, i, r),
        this._3q(i[U_], i[W_])
    }
    function or(t, i) {
        this[Mu] = t,
        this[q_](i, t)
    }
    function fr() {
        k(this, fr, arguments)
    }
    function ur(t, i) {
        this[Mu] = t,
        this._j9 = oe(i),
        this.g = this._j9.g,
        this[V_] = new Qz
    }
    function cr(t) {
        var i = t[X_],
        n = [];
        return t[Z_][au](function (i) {
            t[K_](i) && t[J_](i) && n[th](i)
        }),
        i.set(n)
    }
    function _r(t, i, n) {
        var e = t[xo];
        n = n || e,
        i = i || 1;
        var s = null;
        s && n[Ga] * n[za] * i * i > s && (i = Math[lo](s / n[Ga] / n.height));
        var r = Ri();
        Xn(r.g),
        r[Ga] = n[Ga] * i,
        r[za] = n[za] * i,
        t._8y._fe(r.g, i, n);
        var h = null;
        try {
            h = r[Q_](td)
        } catch (a) {
            dY.error(a)
        }
        return {
            canvas: r,
            data: h,
            width: r[Ga],
            height: r.height
        }
    }
    function dr(t) {
        this[Qc] = t,
        this.topCanvas = t[id]
    }
    function lr(t, i) {
        this.interactions = t,
        this[nd] = i || ed
    }
    function vr() {
        k(this, vr, arguments)
    }
    function br(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }
    function yr() {
        k(this, yr, arguments)
    }
    function gr() {
        k(this, gr, arguments)
    }
    function mr() {
        k(this, mr, arguments)
    }
    function xr() {
        k(this, xr, arguments)
    }
    function Er(i, n, e) {
        i += t[ga],
        n += t.pageYOffset;
        var s = e[sd]();
        return {
            x: i + s[pa],
            y: n + s.top
        }
    }
    function pr(t, i, n) {
        var e = t[rd],
        s = t[hd];
        t.style.left = i - e / 2 + Wa,
        t[_a].top = n - s / 2 + Wa
    }
    function kr(t) {
        var n = i[Xa](Za),
        e = n[ad](Ka),
        s = getComputedStyle(t, null),
        r = s[ho];
        r || (r = s[od] + wh + s[fd] + wh + s[ud]),
        e[ho] = r;
        var h = t[bh],
        a = h[kh](fo),
        o = parseInt(s.fontSize),
        f = 0,
        u = 0;
        return dY.forEach(a,
        function (t) {
            var i = e.measureText(t).width;
            i > f && (f = i),
            u += 1.2 * o
        }),
        {
            width: f,
            height: u
        }
    }
    function wr(t, n) {
        if (Mh == typeof t[cd] && Mh == typeof t[_d]) {
            var e = t.value,
            s = t[cd];
            t[bh] = e.slice(0, s) + n + e[Xr](t.selectionEnd),
            t.selectionEnd = t.selectionStart = s + n[qr]
        } else if (dd != typeof i[ld]) {
            var r = i[ld][vd]();
            r[bd] = n,
            r[yd](!1),
            r.select()
        }
    }
    function Tr(i) {
        if ($z) {
            var n = t[gd] || t.pageXOffset,
            e = t[md] || t[xa];
            return i.select(),
            void t[xd](n, e)
        }
        i.select()
    }
    function Or() { }
    function Mr(t) {
        this[Qc] = t,
        this[id] = t[id],
        this[Ed] = Zz ? 8 : 5
    }
    function Sr(t) {
        return t.type == UY || t[Io] == WY
    }
    function jr(t) {
        this[Qc] = t,
        this[id] = t[id],
        this[Ed] = Zz ? 8 : 4,
        this[pd] = Zz ? 30 : 20
    }
    function Ir(t, i) {
        var n = new hH;
        return n[Ya](zn[Vr](t, {
            x: i.x,
            y: i.y
        })),
        n[Ya](zn[Vr](t, {
            x: i.x + i[Ga],
            y: i.y
        })),
        n.addPoint(zn[Vr](t, {
            x: i.x + i[Ga],
            y: i.y + i[za]
        })),
        n[Ya](zn[Vr](t, {
            x: i.x,
            y: i.y + i.height
        })),
        n
    }
    function Ar(t) {
        t %= 2 * Math.PI;
        var i = Math[po](t / XW);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : kd
    }
    function Cr() { }
    function Rr(n, e, s) {
        var r = i[wd],
        h = new hH(t[ga], t[xa], r[U_] - 2, r.clientHeight - 2),
        a = n.offsetWidth,
        o = n.offsetHeight;
        e + a > h.x + h[Ga] && (e = h.x + h[Ga] - a),
        s + o > h.y + h[za] && (s = h.y + h[za] - o),
        e < h.x && (e = h.x),
        s < h.y && (s = h.y),
        n.style[pa] = e + Wa,
        n.style.top = s + Wa
    }
    function Lr(t) {
        this[Td] = t,
        this[Od] = function (t) {
            return this._ki && (this[Md] ? (cancelAnimationFrame(this._ki), this._isFrameTimer = null) : clearTimeout(this._ki), this._ki = null),
            t === !0 || t === !1 ? void this[Td]() : t ? void (this._ki = setTimeout(function () {
                this[Td](),
                this._ki = null
            } .bind(this), t)) : (this._isFrameTimer = !0, void (this._ki = requestAnimationFrame(function () {
                this[Td](),
                this._ki = null,
                this[Md] = null
            } [mh](this))))
        }
    }
    function Pr(t, i, n, e, s) {
        this.source = t,
        this.type = Sd,
        this[jd] = i,
        this[Ih] = n,
        this.data = e,
        this[Id] = s
    }
    function Dr(t) {
        this._48 = {},
        this._kj = t,
        this._kj._1i.addListener(this._n04, this),
        this[Ad] = lY.INTERACTION_MODE_DEFAULT
    }
    function Nr(t) {
        return t >= 100 && 200 > t
    }
    function $r(t) {
        return t == cq || t == mq || t == gq || t == lq || t == pq || t == kq
    }
    function Br() {
        var t, i, n = {},
        e = [],
        s = 0,
        r = {},
        h = 0;
        this[Qc][au](function (a) {
            if (this[Cd](a)) if (a instanceof xW) {
                var o = {
                    node: a,
                    id: a.id,
                    x: a.x,
                    y: a.y
                };
                for (this.appendNodeInfo && this[Rd](a, o), n[a.id] = o, e[th](o), s++, i = a[Cu]; i instanceof kW; ) {
                    t || (t = {});
                    var f = t[i.id];
                    f || (f = t[i.id] = {
                        id: i.id,
                        children: []
                    }),
                    f.children[th](o),
                    i = i[Cu]
                }
            } else if (a instanceof mW && !a.isLooped() && a[Du] && a[Ru]) {
                var o = {
                    edge: a
                };
                r[a.id] = o,
                h++
            }
        },
        this);
        var a = {};
        for (var o in r) {
            var f = r[o],
            u = f.edge,
            c = u[Du],
            _ = u.toAgent,
            d = c.id + ha + _.id,
            l = _.id + ha + c.id;
            if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[c.id],
                b = n[_.id];
                f.from = v,
                f.to = b,
                a[d] = f,
                this.appendEdgeInfo && this.appendEdgeInfo(u, f)
            } else delete r[o],
            h--
        }
        return {
            groups: t,
            nodesArray: e,
            nodes: n,
            nodeCount: s,
            edges: r,
            edgeCount: h,
            minEnergy: this[Ld](s, h)
        }
    }
    function Fr(t) {
        this.graph = t,
        this.currentMovingNodes = {}
    }
    function Gr() {
        k(this, Gr, arguments)
    }
    function zr(t, i, n, e, s) {
        e ? t[Wu](function (e) {
            var r = e[Pd](t);
            r != n && r[Dd] != s && i(r, t)
        },
        this, !0) : t[Nd](function (e) {
            var r = e[Ru];
            r != n && r[Dd] != s && i(r, t)
        })
    }
    var Hr = "5fa26da91ed21a0633e699e48e94035c0f1df3411441ec157272b909b8a7cb14dd90753716e8dee027a67eac11a83ac92735388fcb3299dc519c26354006b910e5a9fa6136d6ffa93399e22003be9e5928094d4a3663cc1374ddd5950937a312157f17783ddfd16964edb52fde25c879356227e7b87e45c6e959d790f37405a6cf21242c8ec82de45e838bd22dbe0041573443463925b975fb9556d8d00dca2edec3fbb64467655c8de715010b9eefa5a0eafa600d752a514e86ebf825dc891bb037dab5405b2b834db4f37adcb5acf61ce95bb85d4bbae2d24421291b0d6f9561c4d6262d5621d1bf5941e4b14fcd8806ee00d703483ffe4781264eedef51ff556117741f4b46d7aa01c45482e110ff2ae5da50998579be6de2497c2c08774ffd306d6cf52f4b39fe6ed312b7d7f4145f7e3eaa0a96c82aae91b23f0fb1ce1bee27e76dcdb9e115f637f61f2dd679868ec09bbf899e91d66e17f3061bab3729f39f4efde6d7fb009e3b1f1c846b04bf32da59a9b90290aed737710b59d7b8ba5cc42337572e54af1eef996e9fc5608e4591574f988b453878b3873b2b66148d95006b9feba71c4cefd8d7b88c695d3192aa69386f603658e9a0ed672639f593c42970426eea708311f367e22ed7c92d2548830016f13b5fcf755825896947d1446be05ab7be1805876b950419a69fbf2ace3e209168295b6d295eec43d84c2192f9b3aae6ec697f4d76c3305105a875a38a2805a35b6f4a1f44bac896cd9237bd76c7685a4dabb997e060b6aa925888c452160de3c8690126864b4ee75c34f1ea891971048664b4759d327d7695b57f0562362ff7df165075b323453e0e6ee74ce4f7c90382d62075e276815498d8948f4526e58a4bbd1b8570052988cf76b176ec1f86acdfe85f4f16f3d5a736df4078f0d637f01dd168a05be5fbb8e77e53e60606b577f4c7de567f142e9d1a637f380ed76bf6f890062a95c4a221ebc3b14591d2b4ff45f8dabf40c63346f274c2fa977c49e2c86549897eb2f95731ab05d7b83eae62b30a7b597dd3d0bbd2718a024ae3de649063f7f096b0750732d8f7d5d3051d102ba87ad0db44e88eee087fd6f458178b9646bb4d40b925be88c9362b30d4ca83874e42b9f6a5abd521bd074e853bf2867938f63857708fee342f1b197ab80b8372eef732244cb43fdcd0ac81ca6de2dc76e4d2332cbd270fb5058a607069e01d6ee11c65cb31158d5408130a5cdcf019f1d03fbb330b8fcfe7260122013a85056b2aea3b0eba2d0bb30195f2fdfea9c6381891804f5156a637650e77c4cbe67eda1f79c37902868c16e508cd36eaa2ac6855a2ffa2ff1fb67920890581ef419f73d98a63dec46adcd93a68e386b4d06e8dc9a9298c27e6a05faf5cacfd3c10b76e1b10eddb6fecfe2e68a512fc26112030894079d1a00cba24dea89b96c3f9ee4d87124579e7b247b59af40a3abd5ddd960681f5886a04f38963598144da22da27001d2872322ca5b8448f542fdcf342cdf3c982b8a271b6b2d58d0fdb355bb783f5a1135f6c29e6e36e02984cc654ef6729e8265be26709a7b02750536b19147b0a63f93e8b1e7130d30e6825b505cd8bf68e178be5d8f539219b633fa3107d111466b044e9e39d01291a14697d02fdf3ff03026daf5593671109a4e706a1fa1e1af468d97a510d5fc72003f1a89f74689a0e849a8ab1e01798405e8f627b0b9e5c5f10d0fdc94851cbc41cac8a321733a258d49de971959db1ee4c8ddc1657655a1cebcfdd8365c5913a587e344eb1ea287bc85fc434e4ca2674d6b9ace6c585977d637bdde5243b0c0fffadf8e2a8889cc035f27e884e46d9d0d2a539c80f52e19d5e92b780d5d250c687053d151ac1b59523b7696ff343b7341ad29629c0458f6dd998a66b20b333eeab39e5acf32ed3a99601815473233900bb5ede5672a38a221c10ab565e8823f5fb8cb8d04a644feaa7db361a1f6eb47c55e8d7a4c88cb5dd0373931fc1bc16de5931d9e602d331996e4b32c91d84b7cbc3566551755689cd0e2bd38a54207ade31767eead998c4679ee9033781af7f77d5467e6335e131097274bd8fe024fbbaa8c982a929d6669b80ab70c2e30f937535543f6cc463a2d8c8455096c2fdb71580da250bc25b773e8aa9444acddc190e599d99ce801a71e72a1e68cd745b358d9f8f517e6b27b1b5d968edc8bddded984046369c26215599307981a386309f111fe67534d558be6471bb8ef7db4fc858bce73d972ac760c578ee1e6efd989430ba5bcb028e62a6bec5a3d430ba958533490754a892bab4ff1d759a8463a8293ab97bd2bf7867dd27c17790f75ab346626c1120b213091d934b58862b9e5f810cf1bb022d13925ba8ef2e0e1dc4a75b31b5c88a8fa5fb6e242ca07bc11b52b0d7f1269d0c86fbf4e324f3efac2f70c010d22ec0cb51105a2b0958a8f7f39a640c69a8e5d7e09a988e0f02cd2e5b5fccc24ab7b4359060b115f4d7e3b4daab3befa63c3700eba4334d126041e2b74b49666b9afa6855368cbab7365a79d690cc1d084a33c709918dd8d2311fb3115c60367f138496b04a4cd376f533972893922bb203cb6c08d8dba8bfb9b96846c2f09dcc570365ea2a1e40e5203ccbee303a1b34233abbf24b118caf53f6fa7a8649378ed5197cf6d1a57a88f501343365cb847d44fe5c02e47a48bf5f1f0ac261dbc3433932a6591ed25671517d5758345039b01c90ae755179ae5352fd3704c2183e3f9998c44b9bd426f22434351feb6175107520af0e13c814c1eebe3c76ecd7e0b1080340f36662aa9d13c4c5e6daefacc3f2cfc24598b67c00fdfd768cc3c4160fe2d10bd74e03f890fc76c448ea770f7c009c97435d1f0a3fc928a092edd43eaede862477e7de2c61bbe73a6ce797f6f72f84791ed8d78fdafb01bd73e432dbf31f72380018100ea1954dac8c764a5f38bdfbd0b2caa34b6b12eff7ce97ea91560f4910df705137dcf961526e6bfbeb2f1eb84f70eb6bf2f9138b274cf824fa599d30ee3d520e4c0646c877c6d8f6ea949e1b2d18a80de1f52b2b80ea06234fc140c37af3971ff46530010222cc609d005ac5d639500f19d94f4c783e0884da9ddae7096ab353e2546b97675dd8423a9fdf3a86b5a8089c456302340bc3f0a4ff37d201a3848bc9a42dd7a76ac59575f0dc6880fc471bb8e93c400088cf9ecf70e6f626a0af7994d7ab6e85c556660c2f061cef5d4e005db834da3b8ad997f0e020b39cf1ca1ca108a8fbe77690a2df158ad06528d40f825d704d818124631e6ca4ee6645e84ee578e65e158301c8a4fbe3c63f4b94bd16c06d59a1f0b222e3333790e73802b80ef8aa6bfa04e4fddb97287e2475be7620c3975632537836cc44305c4bc27e77b6f20227ce5afcfd6e98f37db9f7acb95b56ae608958de149bacd98898e856a089903a77e84f658ffadc4d0bdd786642ebf1aeee69ff5437abba83b058850e9f49a37b83c1dd84864306eb020d85bd685d66b53598d5bde1e593280c1a122abc21c2298858fb934f4920e478558834813104028df411e6fa9d81af491877a50286dcff00ca935e988aa39100f65ef88b4f4baf55b432149177362f89601750a94457cd8f0a9bc29472ea7d4a301b7031319a36d0b711a292c9e191b1faf4aba6245394a9a24dbc60c62ad9562b478be2544e42eefceb69e2849d736395b5c7cbc3c8560cc545dc32f601028cb0725f5a9a3a8e0cdae06a8f5db4248525d31c774e34c44f54dbe81277da7e92c0e60dd5dd6de6ab494539050b6f9f02579045d16df23d18d977e6bb186e52a9f633b614537870ea76f7f2633699ab0f510778494effd4853610bd6514d7aa4fd0f4bd1439d120a63586621b0152b06173c98cb8b71e25c061de2862ba886e127f6218b58ce89d26d7259a8df04248d9ca97f5f478fd4ffa4890bf94374e46d8cbff982d855a8fb669051842d422e577f81895a9dfb7ccca10f4592deea24eb36e2a7ab4077a3c547859c078f952fa5670a6ec251527f10991bcab47ed1f05c0368a5e6a521e03d82d1c23db57886e623d34e95288168328ceef30eb9276dd48b55b2f2381edf833a8174fa1028a7338b747182e214199e14dceca3562dd60a008517ad8d4d6c7cdcfaee7dee5f70143e1031c5be77f322693bd3d11422f1be9b41976c5fd3350ed46527a82cbe8d43ef35322e6bf3c50cb728d197bb6d8c565d3381f13428168e1834b308b780b38b44f40962518d486cd81eb35a5a6853073f624f52107a1dfec7618dbb1ba7400d5577d167335028301358b546fa1469393c13b5f43962b21a8a7f6e6fd76705ac5fa0b2105b0ee24516db4525da719d5cd97f7be4da1303ae0b3fc307f3ac89ba900753c74bb5e0efaa6fbfc3fd18e67e5b1595efe2582e43f703747ead422d40ac261006a281d1592d318934dd538173c259bc2683bfb93e921222500ff5e529653fa6810a06cd467b1e75c7c2fbf600daeb765a155af31f541714416cd80085041e3c46befd014cbb5efd13f35e41d60c640d053c468ac2bc93352eb820c18ac780855d93339e5d9eb80c80ee0ee3b269aee57071259285ecb38ab09496a7762acd8e432e3177581223e2dab1540ef4fa392415d99991d5aac114b336695847b08f43133f959d090aa5a4885d638f556c6def26e217ab5851aa82fa95edb670c99166b4d8544c0ce59c5c6de7a956e6b0cfdc9b6fec7072fbc0fc2525deed6e52ab3c66b185c509c7a03998fd24551906f9fc35777a705767aa302dad058170a2a308e615658026a220660392380c72a71c97baf02f7ca664aee964e1bf51fd4b9bad645362dcb32ac8371c3c1418e4a07489c529f7b1526496e8876837bc7e236f52ed795b4cc8337aab65d250c7ce888a00e6e06f73865819b5bb7c1483fa9114619c29840edba6a9ca37a88b4abf50d15a3fb17393eeb7a64bf7ea4bb532f79e2eb20e4b0b6ea15753e49f370b02e5f1a6e17870966ece3cbf883f76ed7a8c58cfbf415090c8078776376917ce7b86ab92dcb7293c7bc4778cc97aa90033b969fba9e0d06712ade8ff7591a1c1913cc1db63cb4c864f5f7e58b2238faa66b06664809f69b8888f2821a535e8785e38ff5dca7e23c1432e189d751e0c7ac42d86b9789db8ee0e8d4e6e5b024ed8a54e7c1e989b6feb7c266184794d4966bce6830272853d35ade1f19ac7104b7f45055683046e34d199f096d59c4784219ec2a28051a156290078b79f63f778f49169d0b300962e0d7b54d3692bce14f0944a7ac034c479c5c7275a413708c7aef0e4bdf7ab93bbbd0bc9b337fd005506ceb9e4fa14618b2d5dfed83c5bc6923a902c7c03faa6b1153cee68bddb1e1dbead97d2e5f1849b66ab48f505384b5a39e4f0f9365d8a4160b21472f05355a76de9ee330d149c3b972e5090d9da36d4da1389d02af9a7330f0b5d21841a30854557b454661a2891a26fe2a70046c0760794a579060e5e76428e17e69ecd9c2f20c19975c5502a6cf1fac56c6e055f4b89b4f63ee83553a1388027efc6311831a7365162bb18d173c2d3664fbdc3978194fb347b7d1dd010c958eee76ff64130291fdd37cab5dcde378b8ce12f269ebe2bed32d6109fa0a770db573abd07fad1a8fd78825f09971f8ee01b758ffca5987061b369ec45553972e50eeda07063019c8d5956bf141ab6f859d87251e73396a172c28a10238476798e1317797e7aa934197d5c11d22ac3c36641d89e3193228503fe593ed52ef22a741e7fae920ffcaecd06dc30fd647f761054a3ccc29bdd92862399f49d9454bd62a3e2dfad56f549403e5e735fe4bfd319b84bacc7a794514f8e13e1c44a58918d03139fdeeb76f8c40845cdab3e963ae054aebdb49d348e477c02a5f58eb5f4c78a5a955f341a74193b9bce7206b394c4ef750843e324ba1d649f4b62843370dc0671b17703f2d6f01e8cfabf62fc9acf3758c552096456d1ddcaff40644c15ace200e59e7fcb09c4501c3f71e7cb0ea3571a03458c26a9b13bf9aa17a6524d7a2f9877bc1e788fc736dcf7fab80a62b081d22a9c45e1b2de599585560a590e13b568fe7ea80f84bfd303fe0a13def8707eaf925858e377ddffb74c60a0e557cde277e7fc8a2434fe8e2f64576d6f2b66f42f2266b5ed5bb74352b6f2d5a4368f95fa6a76029f25609f5ef87296cd7f9bd794c52e3ea93ba5286314f553d21d91895424b519cc123f9fcce3c898701f0c4fc775a2107ac01bf47d30af8695058fa0664ff81f4ae9db51770f3e2332ea57398628df0db4e3dbb10252b971bb88c404ee88dcb1633f363dca5c5419f21a269ffc44f840d1279bb9ad389821bef15e3c1170610a06b0f249a6de1d4c780f64cc4b15412f03bc27e01811478b983c1a35a1cd9f6be56d8f24edce3c2d16770f56789c0b3973cf85e36f4c44eaac5e79c9a038d102e81b331c79847df6b35cfb76cd1ec97b52cbfff03c6a83e2d7f1e17062969839ebea8545354a36a207cdfb7d814b5fd572ee07efdb25a57548b27dceb7b95185774d88576ec2012bb5e936c8b6c05cb0978cf07890e5e121cd79a5e2ff45161a6a252a5a6ea46edd638af7bda616be895b1fbc3972a8bfb5763c6529b6fb4a7466e0db3ca3c14556fff7db49a5f086aa8c396c2205414a90462d91eacec70620a9849fecadc9630f0bb7200e48913d2a4f13c2e3ef0db40fd2b17013f6a8884110c9123fcb8c113940de1a0409f5d805dd3e8452469bf2c548e631a15a4e92ed57a56898cd877492c3e381ffca0c327a9ee701230db9812500fb1cc48ade3fb6f1b290390ce172765c60eb59824d2c92cbebdcfd2547ca0f236e7adf1eddfd008a2091f709bca2384afebf1cb0f7eaa531ca9cf74d9cb866f73107c26db360bf3d20fe46995bae105d22adb4c949cf4eca3f78323f58a10899621bbf002e3d07a2e2cef1f3815aed2d87f79b25cce79e6b753d7ca443be907c7d76589e70f24f2977191a861c1956f3552676d56f9a65762fd2a436769850a106a3cca0d3e60e5adbc1639c503d5abaffef9bdc7310091ac19b9cf0c25d1d6897466d2edfcddb574014d8dac9bd17959c484c31bf04356d4c52caad8cc1b63fc5333d47b22a71d492c5d22435d8b6ccdd9463dc29c52da874cdf3a699074591bf6f627e1cc73bf8c554ceae93ce9456f96e98965116f1a9e0dd2f774036dcb19fc1fe1732e9649dbffdf5403be0448371088e57a1d88388453503342f69c844e4f5b5dbfe882ca7947db4fa00832ffffbf22347ea495138e999530fdcebd5cf9708c606a3f2576d6f3d947c5b1bd48cbdbfd8696a3cbb8bc906e58fc17c2bca34883f7fae216b57c24b401b9ed22632b60ec49b274928e6c6ed221da10fe30942b938adec5235a069d58613221790c47e162dcd186f7b7e8857dec765a11efc84608e1656c480a615340c96d20d5d12174cad122d0d38bc021fdec5e00235d83234cc45ec549aafddbd4d72f0e2e283fc80e9172056802eef06f06b524f7841514de56457b6ba3158a74c7fae816fbd0e432e4d978334669d6012fd6114de5fad8adccf078ea9d4bfe47a88cb80f2902b18fe8eb502b6f8e2b2b33e6ab0e3d240b861925d88107ba52fb735d2d7fea6a8237b86a356d1e57d6e948ee071830054fd839f87f7403b582ffd5b406e0e32d39efa121c44ac92857df20152e5663a40cfb6aed05fc03dbac6b2bafb4e05c3a55b648ad15980f3426c8d547de53bcd6596a15dbd522e81066b6b06aff5a2850c81f24c63980e29388b6267f0cad55e4c2db3c924c3a9ad7ecbcb8a4a2844819a16bcaea7f1d2aec9aa61b335cd91cfe862ae9ea0562b133c098171cd54b6ec92c09cd1fda7e71092a26b93eed74af7f5b004093744954f2e639b44f9ac9c5c2a3c9f728e1dfe472abe7c3faa8d4116adb9ef5fc933fc2ec9809e8766d9f3863a6d51ae74f96b333c82457934d912b169570340f3d36b2bf2617dcde8160b9c4c7fa8d9343a6e0b66cf4754acc26fb3e25eaf35ab6dad42459d9c8697667b1786088da62c635884cd91049537dcca7aac0549f6eb0f670829e3ef7e1ca13d8dc94de9fea142eb99f23041b528eb9489e0835ecf6c87ca9cd873c0bb31288fd9b742a57b7a6dc9203b54c356300f06561e0611b0b98a5e00f2823081b80b355a39a0a967d7a16a92531e2a558dc42a561dd391f54a6bde55d52f18c007797601b0cd0bc0bc3dcb09d54f3afbfa64b5f3aa0849d8a3f23d42c130c709ce2aede61ae0aa57a3cef21e9d836d76cff4d364e2124c73a65dd5085eaf298e6f251b72603b85d4bc49ef7ce85fc5f5923fd64952572284e668b20f69156d98ee0607af881ec8a58ae0f0a55458cb3fe37338e75a43a9bb2ec6e2fbf0d230da1bfab0ba5c12c31b8602cc00bdb0e7384295e8013e9404a1d655c6e309c09572766a6f3ca2b9865e075c3c57d247d66cc0d509683bffdd4a5a0ba885ffd7d5c051ba2748fe04f464725b9a01c098b4fe92695836811968e91074ab68126622d82e96cd12a69f7fc9c06e98cbc48d2b1887a6e3f9c75af3d1be054ba60708133cc4f6858be13ea01e07b1c08988e530ebd6636b1229d86cb25935838d61cf6732902483aafbae1d059d8bcdf50cbb92c83cd7ea2f9e20082a3df2e9a3a7db44b1e46d3af6fa42e13ebd6e90d67f7b73613e18f370b7bfe7b049411ea3d46ac88b324e9dd330bc19d31df0210ed69d067aa2fd04992454def214248dabaa0c491ac778353c349923616d699d1c9f9a72c99c3d4e5924358d6eb7bad3a8fb94109e523daa0402f321f9d4ad051f19f1652239d9c6561ae3025ed2467c88a2abb11033199c213d7e4d1c84466970e820614ebc68b53faa4a39b04dda98e5568ba0006b86f90346cb6ad68dfa1b7d15061ca4811e47d14d49c387919b1d45abbf635ccd437ec5b9232f4c82c7ee3a7d2484fc86557473602a6f4fe3d6d81d6e89328009ce2ab342746ad0f7e06c5cffdadf91dad33fa6bc50cd52b06201be3bc75e7f811f942f030b4fe4f178b206155e624e69a26f4f0609c407fc5bcbe219098d38e2636fdb78e4b891fe00ebc4a1e488e3b9370be99b9c1c58bd33693debb211cf41b5de186a23db65af0c7fb843312c591ce03c8bf679fcb9304cd43ee34aa44ed0369941c3ebdac8e2eb6fe7ec53615338e1099e5c6970d7dbd7ea88c3af98309c20d744b906f2f25fd945d2e8e3c9da165376d58d272c49ea9183d46b214990b19b0e8178394b71def9a5e9b5c6451d7132be37a70d4893bba5f985068d504f01ed7e1b4adde5d4aebcd4bb8bddd871cf3f803e38c08722b85fd7f84a2718106eaf6f0528b6fdc9657ee759390409ea6714a01a1f297e62f54b1d398cf7ebf314386feea02e95ba02d3e72de0fd6137ed6f25dd15384d044f3b75c596a946ae770ba75034a130a30575e02f2db0b0c2ed43ddd9ac70799ff58b522543b97856987a672489a3c6768961a55c9e0bb289289859432ac0f7193b5a217015f10410d4ac92baedcfe428701341f2339032c6e7050748ec2953f68c5ca7b406bee323f1138830b21bb8ec44dcb362d33a660bd3019fb1aff05949af4f41c79d77e8bdcca7f31196f68466c7475cf2965b82a51407d2e857523a6a9bb233ef349f8444f6d2d019d3ca96129b48b5165b8100dc7ab17341fac82062e6a9e05549a5806fba46169811099cff4229c4393df0f15b96dcf310767c5197538eefe3d06b64de4922dc3f551af682ffbca05f406fb46068732668f0897df1bcb45b41ec8495bc732a183195cc3032d4aedf3425ce7bfaeedb1021a6dfe8bd5e8c464a7572ab14a1051dbf2f10d13b41a3b54afbf3397c005fb7b16524a79a7569177a4e615ee02a269445fdbe53b0c6352ee8500688629a1e0def18a3ab3c1e9fab49f631b57b2c233d25aa2e921ba217c9b6db14806e57736828d4f9429f917e143e870794fd691a2a4138205603a28d2eb7d86afdf2edbc1b230f013f63b16509374ad6b36b86a37ef75075136e29f5aacaa104a1c6f212698d709ee09246cfa5932bc86e699afc2d38a4ab7320ee5310159fdb24fcedbf4d4942b0279cae14b89442e9184313cf22da13fba57b354c3ec41595b87fabb53c9b33a126ca233708820074c6949aa0a148059b4d95eee152e550f4124593027d07302c31673fec741a60a352de029b2cb37be4fe5dc09d2c7ff2ba757705e7384a0271e1e262c6028bdea32bfa009ae316aacdf62fd74ff5e4a9ccc825c5b4206b09ef4ec2960b99d8c00e8ed8abd87bc8a038f4050150f5425723831ad322a63ce367745191f444b4b5ffcfc99f2588cba61e712871b6b0de7facbac1e5a6701f1865c2d1ad95f8d697036ece49e7ce166c952cd03d379ca2bb4db2d991e3fd82659b1341051b86f4c0e478fd1e12ccaa3a62a18d52280f3747a1264c85a6db354cf71d1fcf3b4085cddc7dff9a203f9280d0d4a2a4316c00f07b22146375b82474e2f744ba67d12dda1d5a46e8477f88a6097d5198973484232d25bdd3856553394bf8b46c1bce0a519f7bfdcbaa1c25b967d411d3cfb78f66711bc95a624967830fa21c774f4d1ed66f9a76320c88991e654aa0260be0e1a8977d57a352eb87b43a0c534b9fbb4b5d21df7d2d67f64e60b65b7fa349434cc967bcadfbacb7d8ff521451ae2c6edb4f0b188741937800558ff349353929176f529823f6c2fa114710d18ec0211695ecfa02fc02912b7130abdd18a5e54ceb182a70c917d30c642eb48ff59debcfc1d422b02b2ad9dea98297bb84407fd6999789cb54c02859b1430bb51580f221b8f0bbfac1a4f42e92b0a5c0913fb7e4f86c7b9232854cce680c798ed3c63bb3a00ee78324770ce30b5a5051b38f310b77987e4b4d760671a1623a3df2fca26eb9ff319bb961da7e6b453a19df8b671e400499392f7057312ac40d46f6b4b2b8608df43135670e179acd9ed1355ac56072125800d64a11b2ea52dac7852429c855c5b93917fa219511175b6aa0da482d2b04e6640956eb8da4cb0019495012be64423bc519878b14084dbcb7d0ca782eef170c410093c50500c80979bccf4ee9364cfaec8d1577fc3ea4f1db67f39cd9b234a84e8fe59e90ff29d6dddc449f92ae92bb197d48b4bd276aec8ec7211130914446812e8395138cf92641187377d52c14209c90c81742eba88dbf4d714c76aaa6d457c98196840a7ec16cf041a4a03fe792f8dfcda4d7251f8180226e7a6f59a8ebf40877d380379701a08d80e83809a4146e023c4fd1c2221c32c9dcc7f0de93050a186446269f3f977e4331f7e3922f41d55a08f1be92185a30e3f548e8359afef7dca375b706435355f63a941853fc5b5c447faf62046b3ed3629de907bea13ac39ae4e1b4439f084803bcc414d9c9e0aedd851cf44c784e30f46b74971ba10b4443ffb91902260b6328e3129a36cdfd77fd1a6e9ceca0774c774bf6772550a759f0674c838fdea0d9551953ee061ca3cce584f89f46a3ea3f0766e0641d106df04ee3a8335a3395a7952067fb7d849fe85b94e5896429bc2075bf18d24ccd48875eadce8d313ee73d660e80bf2b160ab0ff5ec6db8b8ca78c03387c2b1291c74bdaa56b8db2002a8c848400e07baf47e068d813badd6a7f6e624d7b6b03c588daba8daf24dc373ba1cc22317d27d7537c00960c04b4b3af167868e6dc7dbb012fd413cd5eab79ce094f86cc5e6492a5755a47629134c4a0cb191d436c2ffc103f7e3a329b8446d133ef8edebe35fc3d7d07327e5b102bddbe3bd129c0df5b6d2e7f587e8fda04dbbbe387f080c42d5d503a436765c01884e911c51b6f561eeffeba5c2510cc5906bcd6223e253f8387418630e413359f83a1e6ca0a15fcf6a93cef69ee380e8d44a38ee0ae89010c2cb66809eda7b25b84b8bb4b366665df96a1628086c7b3e14148eb3e3cb92a87a8161ab9f4fc3e2e18d0284661c38b5cf15a872a433fe3afca8d7893d7208f7227a0256496344b9b404b15f3d4715619547de4e26049d01e0aa0f4730621630b4c038064e71a881b4bb1ef461d7c821fe847174293af8c8610cd3f6b00ae5703c1611761a56f58d0caa61b4a34f208df56cd32dcfe7208aa38a4daaa38dd4fc1f17eb8a0d1ef37ba4b097f7e1d0007ff74ea798a0cc37e1993f700857073584b7f108b92a3b36c815c9495a5a9425d90bdebf65ee6bfc4ffa9d6261f028c9def6e6b036888dde91b795c6af6d3b970bcafd6423c63eb20518cd542d0c7bea7319732800d513c711e31cbdadca9112bcc62ad803763c7df3e64d6a0dd75cb1204c3800e80b505ea256f370b733751c197ab6f5401c331e23d11dd7aee0937aa3c4e15c7404dce79f97b75ad50f28b14bcef150d692e8a6257c5a03f6003427a7eec7927e0316866d24689207b63d6d0d4fed398b53802b2468f4bd781d85de96502c417391ae1be95f77230c2d4aa7319ff1e3f99aaf5a95d01c6dc4bee0536ea43154a78fa63211c779a841a75dfdb29bfc48f645645630c50d1c06f509e7eba4231e70f24976d7be733effa2ee531fa30056ccf3912bc093f78f3975961097de6b403f79e5d511ee3c88aeb76a9a5dbbf037e002c6bc14173756e63c530787e457f7dba5cad9f5a30e38a7abeca6c06845d8e3632f1f44c3caf17e27ec46de741aaec4e9cef61aa7e46d62e776f6f54123b17f1e87b4b16b588695f4d7c9042153079cedc0744d4dfb00d34fc741ff125c0866366047dd229794dfa1ec093710b3d7c5dff7aa12802e3339355000bd3ccd47011a62aff6894b1b9185a099261c097915763e5295e7386c552d7f7363031eab97e1408d2e3bb717f08291cb097c8beebbb10ff3d5ca75163180092e1b2791ae6d23f5e560c5cb0ad7032a06e3d9e2a1b21b09b82c58a58f1cc9ffec679e78a8d40fd421fce5486f76e722759acecbdab687d4a6a9407fb5656bb3459da586a20fdef467fb24c4541336f3fbedf8db0784ccec9d9d75c151f8a179fce68d75d709b891d0a5e52645fb10865b14ff2bd2d09b2207648c1bda40cdffd39e3d3d5fe9573b453624e20f798aceb054b2a05f892f898125877b28708d8835074208eea788861bb895fb7aa638e4d560e71f309c926dbfa20030e72f72b697bdeacc2deac4b2f52cac174b836cf43ed42065df96c0a7ac74c7d24461e2d75b37773f637011abb16ea4c2c2f774dfb50cb85a4706376045318890604ff968f373167b7853287291caab4f12c236a55c7d7f31a6a32eeb653af6f54bd5379a0da0b854c122d1ad035e740a3014d72ddd91a60c9567c9a0981337285f430f75439fa09ae1b645dde6fd255466e2b7a677a7935ccb982bedb415cb131804f8d31d94f5c7cfb5de9debf90561aed9aad28beb9e4bf849b622e50277036785d42136c47a9afa849922a08af2a94df38b143a957bd10d019d6a4490ee6fc872db7b8178359d1be63f40f8e13cd05464189f42f2600006eb4005afeea76894a95827d0fe9db3c9206ac5c8607b265a14c6ea075dbfe70e68b6bbe49c664ba63cd9184a1b024a4bbb7bb69c953f88a3465c670a98657c61063132b86c8ecf08a77652b4e6c1b5cab6bae362247fed68d5d7c97f01ae463433ffcb797f870841c23a5af7efa91462539d295a9de6b41bb6f1a9407d46252fcc4607e0350d93ed7c771b2ff116a31b58f19b89e99c972587ea245f7adfeb107ad6da6fc7ac14a345cb76b45caa452b2f059215db2ea02d74c160b3e6684a722cfb6e52d61bf70c20672c0769d1f5471f733b523d274030f0f3ecc001f1f896cd75b259057c7694ed852a6062ce1b79672199c8dc6c5a29fb8672dfbaa5fde9ef1390ff983f81e824fc2f99a81e86e9fdbe401eb49c5358b4bafb64f37d91763a7cc8e2173693b5b88f5c64876bd02f1da4515c947e802d10c7f7da21b0692b0ca61a4a0036c9750e11925eb4d3a7b8542a7eab14dff04d44b91a394a48abdf77a012a64958240acf29d76eecbec912e6090b539ac0c3eb786595056fbe410a2f7b9be3a943db301379d7c1a7df37d15dc7653e47f1da4b0a7c0a31c842d7e128761426de2237908a42b4b895ffe1dc8c7995b3130d911bdaa0cf21a0b623e84c8f4ee3e6be78b3f2d9531ccea699305ff556d46b90a43a7b928bbe83c70b93fea501db5d0b2039ea93c05d3cee31a8b08333810d310509d48962182c984d0fbf4520ee9c478d4b8adbf64da1ffa2b5482c9ce9d7c0c13ea3287f12944dd2bb4a8b1ae61aaa847ff282b993cc2fa5ab18e5ae3c4fec5cb29d41fd6a1c62d6fdcb4d441509aece090e5f17671e807e329444b9311b18604783557e91e5d2b22be00894cee5fb64d7e3a4ff19a8f6663039348aa8d47ae04a59ea3717ea499705e3c35f30850b281d3d526280b9bc32f1625be14143fc52cc894316edbba555774439234b49a1024e2bdedc69875d22c2d0b9b1e1abc0d959ab273e879403e62781384b57eaa341a7f61864a89d440ccdaeaaff6f4c856efa01fa41c61bae579d393a7ba1d92a9b4f6cc755958ce93164ff40f57adb6b3ae0b052fda35b1b1c76c6d83bb0f3c231f8a5d4aa512451604010f90db729a4729ee26368db03fe2b691d8c24428105990de451abb0f37590762e541ba2c06ad97bde82d95b1eb12f48ae9f261ac547947a948909eacb4ad9f3c02a96732c2a60bb765804bd3467b530cf34c8ab3f5c8733ea3941a418a1f1443f4d36cb7446249e1290275d51b0c530899c8ad8e81bedc89a18249ba69f6985e148a2e83086c3192da8c91d51ee22bb819bf52d7fab0c1188850dd6c608c2e9568677819901b138b77b36a3c6763974f767920e6b9fbdd32996b1dcc6caf292c846f1ab4e7fb540dc11ab1f016b2221c2a757c4089048a7fbf8322dcda852564bf0f3c17a7ed07a02a32efb3c8accf9ab66832472e0618bc0830c9aaa2d88fd0c6111b1945b53bc00974be7922c2841ae550954b22335e9e500010905aa901ed8a87e69f4c65a8ed5c360e9bc37e6e360eb9bfc7700d9eeeb2fc7313f8fba0d5eed27e66516f8244b8dada0bb96c6ff9f38dcfecf54b0b292f85ae346838484233efbe7ab1ca351ba3b839e794ad5a420d5de8fb6b004a8636cd9fdc95a24a88cb1737c48ab95f40e86a8cebdaf725fb1f16bf2b69ce6a93754680de950e20d855cf0b3b2012b1697c1ae7ffe5ce2388d88f26d246147135ec4027a963a8ef69f1941087c3c710ffe7fd6f07faed549cb911410e748f7c64a17875be4a3aacff34f95d88dc7f3a79272291215271ff8142e50b80e1eb6e73a48c549995c760ec577da73feb46e813829948479436e18cf065aa1a6ead2fde761053309e583ca2152c8a68fd9a9d63d25bfe1eb41947dd884890c672fea065d5ff6e7d01f59dba6288182127a68d98e749ac4c6f603a24a622cd96e32cac1b5f607ec96729c7fb6bc4a3875af3d02dd1dc9638d103a325a0b6cf2b2f46d2b44f08e3b1b9fd88ab7254d2d569ef7f82e23c0e168a6e4f2596c3a86a0cea6095bd19875a936145c2e29e1839afdf635273f4bc1e44215d17ce741bccb1d62f77c0a15b6953d75bcac23cfc7862e82945ac3516c44c03f54ff6ee15a5e9738b196f85f3a321dacbf8c505d3bad63d0f51ef1ef057ee98e1b5660ed7e473d2f6d9aa2d16e630ed7136d7fc1f208ac7d48a1ef68a73911f3a03b84d44c5da68d6734ff323b61dd61ac4d5e0c15f01a9f37eef82b3bf915d21be9076b5612c04e19889c448ecb0e62adf96ef2b5e0998ac3e9b6835a37e8432d7804c421836b59284f93b069ac59de661b98f65d06981221cf0e575a6a537f4b8b0cc8ffbf7278fc3ad3f5d43892960959cbafdf823bc2d8bf6cd3731a176eb56c07f360ed4cf765da68850f2f31fb742ee3f376b8e88381da6d90be07fb912e71d7cdf6acb559a30ab24dfb35ad1778225c0898605549be7e462515dedec1e6aa7b43b1ad60426f1c6f2284545c2450b0b00c1f67d627542acc088aee09e5dd11cdcd4576e948290609f9c0b3ba03c8dcf21baf2b083c95ecfee699f119fef67b8fcc416252e7e5c39646426a95073a693166b434cded0ec55fe99c08cdac73baa6b8e35dea821347ad3b1d366c9275d1ca8cd188f4cf14a756484f1ee20bb908679f7ff96ba636d9da17c56a1978172e37a52d9099c4e95db577b5b763825ed30661dde23b3e42aba2f42fda3b323952154bbd7a04bcbb6637cb6d64ecfdec1f830f8cb8af91726e4f840543025b4b8fe1db147e5d0507a8dfd830916fb26d5f091d8477a60120a522",
    Yr = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]"; !
    function (t) {
        function i(t, i) {
            for (var n = "",
            e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
            r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
            h = Math.round(i.length / 2),
            a = Math.pow(2, 31) - 1,
            o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10; ) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (r * n + h) % a;
            for (var f = "",
            u = "",
            e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)),
            u += String.fromCharCode(f),
            n = (r * n + h) % a;
            return u
        }
        t = i(t, "QUNEE"),
        Yr = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    } (Hr);
    var Ur = Yr[0] + Yr[1] + Yr[2],
    Wr = Yr[3] + Yr[1] + Yr[2],
    qr = Yr[4],
    Vr = Yr[5],
    Xr = Yr[6],
    Zr = Yr[7],
    Kr = Yr[8],
    Jr = Yr[9],
    Qr = Yr[10],
    th = Yr[11],
    ih = Yr[12] + Yr[13] + Yr[14],
    nh = Yr[15],
    eh = Yr[16],
    sh = Yr[17],
    rh = Yr[18],
    hh = Yr[19],
    ah = Yr[20] + Yr[21],
    oh = Yr[22],
    fh = Yr[20],
    uh = Yr[23] + Yr[24] + Yr[25],
    ch = Yr[26],
    _h = Yr[27] + Yr[28] + Yr[29],
    dh = Yr[30] + Yr[28] + Yr[29],
    lh = Yr[31],
    vh = Yr[32] + Yr[33] + Yr[34],
    bh = Yr[35],
    yh = Yr[36] + Yr[13] + Yr[37],
    gh = Yr[30] + Yr[38] + Yr[39],
    mh = Yr[40],
    xh = Yr[41] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    Eh = Yr[19] + Yr[46] + Yr[47],
    ph = Yr[19] + Yr[48] + Yr[49],
    kh = Yr[50],
    wh = Yr[51],
    Th = Yr[3] + Yr[42] + Yr[52],
    Oh = Yr[53],
    Mh = Yr[54],
    Sh = Yr[55],
    jh = Yr[56],
    Ih = Yr[57],
    Ah = Yr[58] + Yr[59] + Yr[60],
    Ch = Yr[61] + Yr[33] + Yr[34],
    Rh = Yr[62] + Yr[24] + Yr[63],
    Lh = Yr[64] + Yr[65] + Yr[66],
    Ph = Yr[67],
    Dh = Yr[68],
    Nh = Yr[69] + Yr[70],
    $h = Yr[71],
    Bh = Yr[72],
    Fh = Yr[73],
    Gh = Yr[74],
    zh = Yr[75],
    Hh = Yr[76],
    Yh = Yr[21],
    Uh = Yr[77],
    Wh = Yr[78],
    qh = Yr[79],
    Vh = Yr[80],
    Xh = Yr[21] + Yr[81],
    Zh = Yr[21] + Yr[82],
    Kh = Yr[83],
    Jh = Yr[84],
    Qh = Yr[85],
    ta = Yr[86],
    ia = Yr[87] + Yr[38] + Yr[88],
    na = Yr[89] + Yr[24] + Yr[90],
    ea = Yr[91],
    sa = Yr[92] + Yr[93],
    ra = Yr[94] + Yr[95] + Yr[96] + Yr[1] + Yr[97],
    ha = Yr[93],
    aa = Yr[94] + Yr[48] + Yr[98] + Yr[1] + Yr[97],
    oa = Yr[93] + Yr[92] + Yr[93],
    fa = Yr[99],
    ua = Yr[100],
    ca = Yr[101],
    _a = Yr[102],
    da = Yr[103] + Yr[104] + Yr[105],
    la = Yr[106],
    va = Yr[107],
    ba = Yr[108] + Yr[104] + Yr[105],
    ya = Yr[109] + Yr[110] + Yr[111],
    ga = Yr[112] + Yr[113] + Yr[114],
    ma = Yr[112] + Yr[115],
    xa = Yr[112] + Yr[116] + Yr[114],
    Ea = Yr[112] + Yr[117],
    pa = Yr[118],
    ka = Yr[21] + Yr[119],
    wa = Yr[21] + Yr[120],
    Ta = Yr[121] + Yr[122] + Yr[123],
    Oa = Yr[124] + Yr[122] + Yr[123],
    Ma = Yr[125],
    Sa = Yr[126] + Yr[127],
    ja = Yr[128],
    Ia = Yr[129] + Yr[127] + Yr[51] + Yr[130] + Yr[51] + Yr[131] + Yr[77],
    Aa = Yr[126] + Yr[110] + Yr[132],
    Ca = Yr[129] + Yr[133] + Yr[51] + Yr[130] + Yr[51] + Yr[131] + Yr[77],
    Ra = Yr[134],
    La = Yr[135],
    Pa = Yr[136] + Yr[137] + Yr[138],
    Da = Yr[139],
    Na = Yr[140],
    $a = Yr[141] + Yr[38] + Yr[142],
    Ba = Yr[143],
    Fa = Yr[129] + Yr[144] + Yr[51] + Yr[131],
    Ga = Yr[145],
    za = Yr[146],
    Ha = Yr[147],
    Ya = Yr[108] + Yr[24] + Yr[148],
    Ua = Yr[149],
    Wa = Yr[150],
    qa = Yr[151] + Yr[65] + Yr[152] + Yr[38] + Yr[153] + Yr[24] + Yr[154] + Yr[104] + Yr[155],
    Va = Yr[156] + Yr[38] + Yr[153] + Yr[24] + Yr[154] + Yr[104] + Yr[155],
    Xa = Yr[22] + Yr[28] + Yr[157],
    Za = Yr[158],
    Ka = Yr[159] + Yr[160],
    Ja = Yr[161] + Yr[38] + Yr[162],
    Qa = Yr[163] + Yr[21] + Yr[164],
    to = Yr[150] + Yr[51],
    io = Yr[163] + Yr[21] + Yr[165],
    no = Yr[166],
    eo = Yr[167],
    so = Yr[168],
    ro = Yr[169] + Yr[21] + Yr[170],
    ho = Yr[171],
    ao = Yr[172] + Yr[65] + Yr[173],
    oo = Yr[174],
    fo = Yr[175],
    uo = Yr[176] + Yr[110] + Yr[132],
    co = Yr[177],
    _o = Yr[3] + Yr[178] + Yr[179] + Yr[59] + Yr[180],
    lo = Yr[181],
    vo = Yr[182] + Yr[159],
    bo = Yr[21] + Yr[183] + Yr[104],
    yo = Yr[21] + Yr[184] + Yr[24] + Yr[148],
    go = Yr[21] + Yr[185] + Yr[1] + Yr[186],
    mo = Yr[187],
    xo = Yr[188],
    Eo = Yr[3] + Yr[65] + Yr[189],
    po = Yr[190],
    ko = Yr[161] + Yr[110] + Yr[191],
    wo = Yr[192] + Yr[24] + Yr[148] + Yr[178] + Yr[193] + Yr[38] + Yr[194],
    To = Yr[195],
    Oo = Yr[176],
    Mo = Yr[196],
    So = Yr[197] + Yr[198] + Yr[199],
    jo = Yr[200] + Yr[24] + Yr[148],
    Io = Yr[201],
    Ao = Yr[202],
    Co = Yr[21] + Yr[203] + Yr[159] + Yr[85],
    Ro = Yr[21] + Yr[203] + Yr[159] + Yr[86],
    Lo = Yr[21] + Yr[204],
    Po = Yr[21] + Yr[203] + Yr[205] + Yr[86],
    Do = Yr[21] + Yr[193] + Yr[206],
    No = Yr[21] + Yr[203] + Yr[205] + Yr[85],
    $o = Yr[21] + Yr[193] + Yr[207],
    Bo = Yr[26] + Yr[208] + Yr[24] + Yr[148],
    Fo = Yr[209],
    Go = Yr[210],
    zo = Yr[21] + Yr[211],
    Ho = Yr[212] + Yr[21] + Yr[213],
    Yo = Yr[212] + Yr[21] + Yr[170],
    Uo = Yr[214] + Yr[77] + Yr[215],
    Wo = Yr[216],
    qo = Yr[21] + Yr[217],
    Vo = Yr[218],
    Xo = Yr[209] + Yr[51] + Yr[219] + Yr[51] + Yr[131] + Yr[220],
    Zo = Yr[3] + Yr[48] + Yr[221],
    Ko = Yr[222] + Yr[110] + Yr[223],
    Jo = Yr[70],
    Qo = Yr[131],
    tf = Yr[224],
    nf = Yr[225] + Yr[21] + Yr[226],
    ef = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[227],
    sf = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[228],
    rf = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[229],
    hf = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[230],
    af = Yr[231] + Yr[178] + Yr[179] + Yr[59] + Yr[180],
    of = Yr[232],
    ff = Yr[147] + Yr[104] + Yr[233],
    uf = Yr[21] + Yr[234] + Yr[235] + Yr[236],
    cf = Yr[21] + Yr[237],
    _f = Yr[21] + Yr[193] + Yr[238] + Yr[239],
    df = Yr[26] + Yr[240] + Yr[115],
    lf = Yr[26] + Yr[240] + Yr[117],
    vf = Yr[241] + Yr[242] + Yr[104] + Yr[243],
    bf = Yr[26] + Yr[244],
    yf = Yr[26] + Yr[202],
    gf = Yr[26] + Yr[245] + Yr[65] + Yr[86] + Yr[42] + Yr[246] + Yr[24] + Yr[148],
    mf = Yr[26] + Yr[247] + Yr[38] + Yr[162],
    xf = Yr[26] + Yr[247] + Yr[42] + Yr[246] + Yr[24] + Yr[148],
    Ef = Yr[161] + Yr[65] + Yr[86] + Yr[104] + Yr[233],
    pf = Yr[26] + Yr[216],
    kf = Yr[248],
    wf = Yr[26] + Yr[249],
    Tf = Yr[250] + Yr[24] + Yr[251],
    Of = Yr[26] + Yr[252] + Yr[198] + Yr[199],
    Mf = Yr[26] + Yr[253] + Yr[24] + Yr[90],
    Sf = Yr[21] + Yr[254] + Yr[255] + Yr[256] + Yr[178] + Yr[257] + Yr[44] + Yr[258],
    jf = Yr[21] + Yr[254] + Yr[255] + Yr[256],
    If = Yr[259] + Yr[255] + Yr[256],
    Af = Yr[21] + Yr[260] + Yr[38] + Yr[261],
    Cf = Yr[262] + Yr[255] + Yr[256],
    Rf = Yr[136] + Yr[234] + Yr[263] + Yr[24] + Yr[251],
    Lf = Yr[26] + Yr[249] + Yr[104] + Yr[264],
    Pf = Yr[26] + Yr[252] + Yr[115],
    Df = Yr[21] + Yr[252] + Yr[117],
    Nf = Yr[26] + Yr[252] + Yr[117],
    $f = Yr[265] + Yr[24] + Yr[148],
    Bf = Yr[3] + Yr[104] + Yr[233],
    Ff = Yr[245] + Yr[65] + Yr[86] + Yr[24] + Yr[266],
    Gf = Yr[21] + Yr[267],
    zf = Yr[26] + Yr[196],
    Hf = Yr[192] + Yr[28] + Yr[268],
    Yf = Yr[21] + Yr[242] + Yr[104] + Yr[243],
    Uf = Yr[26] + Yr[247] + Yr[104] + Yr[243],
    Wf = Yr[197] + Yr[59] + Yr[269],
    qf = Yr[161] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    Vf = Yr[3] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    Xf = Yr[271] + Yr[59] + Yr[269],
    Zf = Yr[151] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    Kf = Yr[197] + Yr[59] + Yr[269] + Yr[13] + Yr[114],
    Jf = Yr[271] + Yr[59] + Yr[269] + Yr[13] + Yr[114],
    Qf = Yr[151] + Yr[48] + Yr[270] + Yr[59] + Yr[269] + Yr[13] + Yr[114],
    tu = Yr[272] + Yr[255] + Yr[273],
    iu = Yr[272] + Yr[178] + Yr[274],
    nu = Yr[275] + Yr[110] + Yr[276],
    eu = Yr[277] + Yr[278] + Yr[279],
    su = Yr[280] + Yr[44] + Yr[258],
    ru = Yr[118] + Yr[24] + Yr[281],
    hu = Yr[282] + Yr[24] + Yr[281],
    au = Yr[283] + Yr[28] + Yr[284],
    ou = Yr[285] + Yr[278] + Yr[276] + Yr[110] + Yr[286],
    fu = Yr[287],
    uu = Yr[288],
    cu = Yr[289],
    _u = Yr[290],
    du = Yr[291],
    lu = Yr[292],
    vu = Yr[293] + Yr[1] + Yr[294] + Yr[42] + Yr[295],
    bu = Yr[293] + Yr[42] + Yr[295],
    yu = Yr[296] + Yr[95],
    gu = Yr[297],
    mu = Yr[298],
    xu = Yr[299],
    Eu = Yr[300],
    pu = Yr[295],
    ku = Yr[301],
    wu = Yr[238] + Yr[77] + Yr[238] + Yr[77] + Yr[205],
    Tu = Yr[159],
    Ou = Yr[302],
    Mu = Yr[21] + Yr[303] + Yr[1] + Yr[304],
    Su = Yr[305],
    ju = Yr[306],
    Iu = Yr[307] + Yr[1] + Yr[308],
    Au = Yr[309],
    Cu = Yr[310],
    Ru = Yr[94] + Yr[42] + Yr[311],
    Lu = Yr[3] + Yr[28] + Yr[312] + Yr[65] + Yr[313],
    Pu = Yr[21] + Yr[314],
    Du = Yr[87] + Yr[42] + Yr[311],
    Nu = Yr[192] + Yr[178] + Yr[315],
    $u = Yr[87],
    Bu = Yr[192] + Yr[59] + Yr[316] + Yr[13] + Yr[14],
    Fu = Yr[317],
    Gu = Yr[161] + Yr[1] + Yr[308] + Yr[178] + Yr[274],
    zu = Yr[8] + Yr[1] + Yr[318],
    Hu = Yr[319],
    Yu = Yr[161] + Yr[178] + Yr[274],
    Uu = Yr[192] + Yr[48] + Yr[320],
    Wu = Yr[283] + Yr[28] + Yr[284] + Yr[28] + Yr[312],
    qu = Yr[26] + Yr[87],
    Vu = Yr[283] + Yr[28] + Yr[284] + Yr[1] + Yr[308],
    Xu = Yr[321] + Yr[110] + Yr[322],
    Zu = Yr[197] + Yr[110] + Yr[322],
    Ku = Yr[323] + Yr[110] + Yr[322],
    Ju = Yr[324] + Yr[24] + Yr[266],
    Qu = Yr[325] + Yr[110] + Yr[322],
    tc = Yr[326],
    ic = Yr[327] + Yr[21] + Yr[328],
    nc = Yr[327] + Yr[21] + Yr[329],
    ec = Yr[327] + Yr[21] + Yr[330],
    sc = Yr[327] + Yr[21] + Yr[331],
    rc = Yr[327] + Yr[21] + Yr[332],
    hc = Yr[327] + Yr[21] + Yr[333],
    ac = Yr[327] + Yr[21] + Yr[334],
    oc = Yr[327] + Yr[21] + Yr[335],
    fc = Yr[327] + Yr[21] + Yr[336] + Yr[21] + Yr[337],
    uc = Yr[327] + Yr[21] + Yr[336] + Yr[21] + Yr[205],
    cc = Yr[327] + Yr[21] + Yr[336] + Yr[21] + Yr[159],
    _c = Yr[327] + Yr[21] + Yr[336] + Yr[21] + Yr[338],
    dc = Yr[327] + Yr[21] + Yr[336] + Yr[21] + Yr[339],
    lc = Yr[327] + Yr[21] + Yr[336] + Yr[21] + Yr[235],
    vc = Yr[340] + Yr[48] + Yr[341],
    bc = Yr[187] + Yr[44] + Yr[342],
    yc = Yr[26] + Yr[247],
    gc = Yr[23] + Yr[24] + Yr[343],
    mc = Yr[192] + Yr[42] + Yr[344],
    xc = Yr[345],
    Ec = Yr[346] + Yr[24] + Yr[25],
    pc = Yr[347],
    kc = Yr[348] + Yr[21] + Yr[349] + Yr[21] + Yr[350],
    wc = Yr[348] + Yr[21] + Yr[349] + Yr[21] + Yr[351],
    Tc = Yr[348] + Yr[21] + Yr[349] + Yr[21] + Yr[352],
    Oc = Yr[161] + Yr[38] + Yr[353],
    Mc = Yr[3] + Yr[38] + Yr[353],
    Sc = Yr[354] + Yr[21] + Yr[355],
    jc = Yr[354] + Yr[21] + Yr[356] + Yr[21] + Yr[357],
    Ic = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[358] + Yr[21] + Yr[359],
    Ac = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[360] + Yr[21] + Yr[359],
    Cc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[359] + Yr[21] + Yr[361],
    Rc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[355] + Yr[21] + Yr[362],
    Lc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[358] + Yr[21] + Yr[361],
    Pc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[361] + Yr[21] + Yr[359],
    Dc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[355] + Yr[21] + Yr[363],
    Nc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[355] + Yr[21] + Yr[364],
    $c = Yr[354] + Yr[21] + Yr[356] + Yr[21] + Yr[365] + Yr[21] + Yr[357],
    Bc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[358],
    Fc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[355] + Yr[21] + Yr[366],
    Gc = Yr[354] + Yr[21] + Yr[356] + Yr[21] + Yr[367],
    zc = Yr[368] + Yr[21] + Yr[369],
    Hc = Yr[354] + Yr[21] + Yr[370],
    Yc = Yr[354] + Yr[21] + Yr[370] + Yr[21] + Yr[371],
    Uc = Yr[354] + Yr[21] + Yr[370] + Yr[21] + Yr[372],
    Wc = Yr[354] + Yr[21] + Yr[370] + Yr[21] + Yr[373],
    qc = Yr[354] + Yr[21] + Yr[370] + Yr[21] + Yr[374],
    Vc = Yr[354] + Yr[21] + Yr[375] + Yr[21] + Yr[376],
    Xc = Yr[377],
    Zc = Yr[265],
    Kc = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[360] + Yr[21] + Yr[361],
    Jc = Yr[3] + Yr[38] + Yr[261],
    Qc = Yr[378],
    t_ = Yr[3] + Yr[28] + Yr[379] + Yr[24] + Yr[148] + Yr[65] + Yr[189],
    i_ = Yr[354] + Yr[21] + Yr[380] + Yr[21] + Yr[381],
    n_ = Yr[354] + Yr[21] + Yr[382] + Yr[21] + Yr[381],
    e_ = Yr[383],
    s_ = Yr[87] + Yr[42] + Yr[295] + Yr[28] + Yr[312],
    r_ = Yr[94] + Yr[42] + Yr[295] + Yr[28] + Yr[312],
    h_ = Yr[384] + Yr[24] + Yr[148],
    a_ = Yr[385],
    o_ = Yr[386] + Yr[110] + Yr[387],
    f_ = Yr[388] + Yr[21] + Yr[354] + Yr[21] + Yr[389] + Yr[21] + Yr[390],
    u_ = Yr[0] + Yr[24] + Yr[266] + Yr[38] + Yr[391],
    c_ = Yr[392] + Yr[110] + Yr[286],
    __ = Yr[26] + Yr[393] + Yr[28] + Yr[394],
    d_ = Yr[354] + Yr[21] + Yr[395] + Yr[21] + Yr[396],
    l_ = Yr[397] + Yr[115],
    v_ = Yr[398],
    b_ = Yr[399] + Yr[38] + Yr[400] + Yr[46] + Yr[401],
    y_ = Yr[402],
    g_ = Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[46] + Yr[405] + Yr[93] + Yr[65] + Yr[406],
    m_ = Yr[407],
    x_ = Yr[408],
    E_ = Yr[409],
    p_ = Yr[202] + Yr[70] + Yr[410] + Yr[411] + Yr[72],
    k_ = Yr[21] + Yr[412] + Yr[24] + Yr[413],
    w_ = Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[46] + Yr[405],
    T_ = Yr[69] + Yr[70] + Yr[238] + Yr[414] + Yr[238] + Yr[414] + Yr[238] + Yr[414] + Yr[238] + Yr[72],
    O_ = Yr[415],
    M_ = Yr[416],
    S_ = Yr[417],
    j_ = Yr[21] + Yr[282],
    I_ = Yr[418] + Yr[419],
    A_ = Yr[420] + Yr[21] + Yr[212] + Yr[21] + Yr[363],
    C_ = Yr[282],
    R_ = Yr[21] + Yr[118],
    L_ = Yr[420] + Yr[21] + Yr[212] + Yr[21] + Yr[362],
    P_ = Yr[21] + Yr[84],
    D_ = Yr[238] + Yr[150],
    N_ = Yr[21] + Yr[421],
    $_ = Yr[197] + Yr[422] + Yr[423],
    B_ = Yr[195] + Yr[38] + Yr[353],
    F_ = Yr[74] + Yr[424],
    G_ = Yr[425] + Yr[1] + Yr[426],
    z_ = Yr[74] + Yr[427],
    H_ = Yr[209] + Yr[178] + Yr[179],
    Y_ = Yr[428],
    U_ = Yr[429] + Yr[198] + Yr[199],
    W_ = Yr[429] + Yr[430] + Yr[431],
    q_ = Yr[432],
    V_ = Yr[21] + Yr[193] + Yr[238] + Yr[433],
    X_ = Yr[434] + Yr[278] + Yr[435],
    Z_ = Yr[378] + Yr[278] + Yr[435],
    K_ = Yr[192] + Yr[33] + Yr[436],
    J_ = Yr[192] + Yr[38] + Yr[437],
    Q_ = Yr[94] + Yr[59] + Yr[180] + Yr[438],
    td = Yr[219] + Yr[439] + Yr[440],
    id = Yr[282] + Yr[1] + Yr[304],
    nd = Yr[32] + Yr[1] + Yr[441],
    ed = Yr[32],
    sd = Yr[3] + Yr[65] + Yr[442] + Yr[1] + Yr[443] + Yr[104] + Yr[233],
    rd = Yr[240] + Yr[198] + Yr[199],
    hd = Yr[240] + Yr[430] + Yr[431],
    ad = Yr[3] + Yr[1] + Yr[444],
    od = Yr[171] + Yr[38] + Yr[353],
    fd = Yr[171] + Yr[38] + Yr[162],
    ud = Yr[171] + Yr[44] + Yr[445],
    cd = Yr[434] + Yr[38] + Yr[446],
    _d = Yr[434] + Yr[28] + Yr[379],
    dd = Yr[447],
    ld = Yr[434],
    vd = Yr[22] + Yr[104] + Yr[448],
    bd = Yr[172],
    yd = Yr[449],
    gd = Yr[450] + Yr[115],
    md = Yr[450] + Yr[117],
    xd = Yr[450] + Yr[110] + Yr[322],
    Ed = Yr[119] + Yr[38] + Yr[162],
    pd = Yr[21] + Yr[202] + Yr[430] + Yr[451] + Yr[48] + Yr[452],
    kd = Yr[453] + Yr[93] + Yr[454],
    wd = Yr[455] + Yr[28] + Yr[157],
    Td = Yr[21] + Yr[193] + Yr[238] + Yr[456],
    Od = Yr[457],
    Md = Yr[21] + Yr[192] + Yr[44] + Yr[45] + Yr[110] + Yr[458],
    Sd = Yr[459],
    jd = Yr[460],
    Id = Yr[461],
    Ad = Yr[462] + Yr[278] + Yr[294],
    Cd = Yr[192] + Yr[48] + Yr[463],
    Rd = Yr[307] + Yr[46] + Yr[294] + Yr[178] + Yr[464],
    Ld = Yr[465] + Yr[28] + Yr[466] + Yr[44] + Yr[467],
    Pd = Yr[184] + Yr[46] + Yr[294],
    Dd = Yr[21] + Yr[468],
    Nd = Yr[283] + Yr[28] + Yr[284] + Yr[13] + Yr[469] + Yr[28] + Yr[312],
    $d = Yr[470],
    Bd = Yr[271] + Yr[104] + Yr[471] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    Fd = Yr[322] + Yr[104] + Yr[471] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    Gd = Yr[92] + Yr[104] + Yr[471] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    zd = Yr[161] + Yr[110] + Yr[472],
    Hd = Yr[64] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    Yd = Yr[151] + Yr[1] + Yr[473] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    Ud = Yr[271] + Yr[1] + Yr[473] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    Wd = Yr[92] + Yr[1] + Yr[473] + Yr[42] + Yr[43] + Yr[44] + Yr[45],
    qd = Yr[147] + Yr[110] + Yr[472],
    Vd = Yr[74] + Yr[474],
    Xd = Yr[21] + Yr[171] + Yr[38] + Yr[353],
    Zd = Yr[475],
    Kd = Yr[21] + Yr[171] + Yr[1] + Yr[476],
    Jd = Yr[21] + Yr[171] + Yr[38] + Yr[162],
    Qd = Yr[21] + Yr[171] + Yr[44] + Yr[445],
    tl = Yr[21] + Yr[171],
    il = Yr[3] + Yr[65] + Yr[86] + Yr[178] + Yr[274],
    nl = Yr[385] + Yr[65] + Yr[86] + Yr[178] + Yr[160],
    el = Yr[129] + Yr[477] + Yr[51] + Yr[478],
    sl = Yr[21] + Yr[479],
    rl = Yr[53] + Yr[65] + Yr[86] + Yr[178] + Yr[160],
    hl = Yr[3] + Yr[65] + Yr[86] + Yr[178] + Yr[160],
    al = Yr[94] + Yr[59] + Yr[480],
    ol = Yr[384] + Yr[28] + Yr[157] + Yr[1] + Yr[308],
    fl = Yr[481] + Yr[46] + Yr[47],
    ul = Yr[482] + Yr[38] + Yr[483],
    cl = Yr[484] + Yr[110] + Yr[286],
    _l = Yr[24] + Yr[148] + Yr[70],
    dl = Yr[414],
    ll = Yr[485],
    vl = Yr[38] + Yr[162] + Yr[70],
    bl = Yr[486] + Yr[51] + Yr[131],
    yl = Yr[265] + Yr[104] + Yr[233],
    gl = Yr[487] + Yr[21] + Yr[367],
    ml = Yr[488],
    xl = Yr[489] + Yr[24] + Yr[90],
    El = Yr[490] + Yr[46] + Yr[47],
    pl = Yr[491],
    kl = Yr[433],
    wl = Yr[492],
    Tl = Yr[234],
    Ol = Yr[493],
    Ml = Yr[362] + Yr[21] + Yr[494],
    Sl = Yr[362] + Yr[21] + Yr[364],
    jl = Yr[495] + Yr[21] + Yr[494],
    Il = Yr[366] + Yr[21] + Yr[494],
    Al = Yr[366] + Yr[21] + Yr[364],
    Cl = Yr[362] + Yr[21] + Yr[363],
    Rl = Yr[495] + Yr[21] + Yr[364],
    Ll = Yr[366] + Yr[21] + Yr[363],
    Pl = Yr[496],
    Dl = Yr[497],
    Nl = Yr[218] + Yr[498],
    $l = Yr[414] + Yr[201] + Yr[498],
    Bl = Yr[414] + Yr[460] + Yr[498],
    Fl = Yr[499] + Yr[33] + Yr[34],
    Gl = Yr[500] + Yr[110] + Yr[286],
    zl = Yr[500] + Yr[77] + Yr[501],
    Hl = Yr[414] + Yr[500] + Yr[46] + Yr[47] + Yr[498],
    Yl = Yr[414] + Yr[499] + Yr[33] + Yr[34] + Yr[498],
    Ul = Yr[414] + Yr[35] + Yr[498],
    Wl = Yr[500] + Yr[46] + Yr[47],
    ql = Yr[502] + Yr[178] + Yr[274],
    Vl = Yr[499] + Yr[178] + Yr[274],
    Xl = Yr[3] + Yr[1] + Yr[308] + Yr[178] + Yr[274],
    Zl = Yr[503] + Yr[77] + Yr[108],
    Kl = Yr[503] + Yr[77] + Yr[53],
    Jl = Yr[503],
    Ql = Yr[503] + Yr[77] + Yr[12],
    tv = Yr[504],
    iv = Yr[505],
    nv = Yr[506],
    ev = Yr[507],
    sv = Yr[108] + Yr[48] + Yr[508],
    rv = Yr[53] + Yr[48] + Yr[508],
    hv = Yr[509],
    av = Yr[12],
    ov = Yr[414] + Yr[196] + Yr[498],
    fv = Yr[414] + Yr[12] + Yr[498],
    uv = Yr[414] + Yr[499] + Yr[178] + Yr[274] + Yr[498],
    cv = Yr[510] + Yr[21] + Yr[511],
    _v = Yr[108],
    dv = Yr[510] + Yr[21] + Yr[512],
    lv = Yr[510] + Yr[21] + Yr[513] + Yr[21] + Yr[514],
    vv = Yr[12] + Yr[77] + Yr[501],
    bv = Yr[21] + Yr[515],
    yv = Yr[30] + Yr[24] + Yr[516] + Yr[1] + Yr[476],
    gv = Yr[30] + Yr[1] + Yr[308] + Yr[42] + Yr[517],
    mv = Yr[94] + Yr[1] + Yr[2],
    xv = Yr[3] + Yr[178] + Yr[160],
    Ev = Yr[21] + Yr[518],
    pv = Yr[21] + Yr[519],
    kv = Yr[510] + Yr[21] + Yr[520],
    wv = Yr[521],
    Tv = Yr[509] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    Ov = Yr[21] + Yr[434] + Yr[278] + Yr[435],
    Mv = Yr[196] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    Sv = Yr[27] + Yr[59] + Yr[180] + Yr[24] + Yr[25] + Yr[1] + Yr[522],
    jv = Yr[310] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    Iv = Yr[503] + Yr[178] + Yr[274] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    Av = Yr[26] + Yr[319],
    Cv = Yr[21] + Yr[524] + Yr[178] + Yr[274] + Yr[44] + Yr[258],
    Rv = Yr[3] + Yr[28] + Yr[525],
    Lv = Yr[136] + Yr[235] + Yr[526],
    Pv = Yr[196] + Yr[527],
    Dv = Yr[528],
    Nv = Yr[110] + Yr[191],
    $v = Yr[22] + Yr[24] + Yr[529],
    Bv = Yr[22] + Yr[110] + Yr[132] + Yr[46] + Yr[294],
    Fv = Yr[172] + Yr[439] + Yr[530],
    Gv = Yr[298] + Yr[93] + Yr[531],
    zv = Yr[532],
    Hv = Yr[533],
    Yv = Yr[534],
    Uv = Yr[53] + Yr[28] + Yr[29] + Yr[48] + Yr[508],
    Wv = Yr[535] + Yr[21] + Yr[536],
    qv = Yr[537] + Yr[42] + Yr[311],
    Vv = Yr[538] + Yr[71] + Yr[539] + Yr[71] + Yr[540] + Yr[71] + Yr[541],
    Xv = Yr[542],
    Zv = Yr[543] + Yr[544] + Yr[38] + Yr[545],
    Kv = Yr[546] + Yr[71] + Yr[547] + Yr[71] + Yr[548] + Yr[71] + Yr[549] + Yr[71] + Yr[550] + Yr[71] + Yr[551] + Yr[71] + Yr[552] + Yr[71] + Yr[553] + Yr[71],
    Jv = Yr[71] + Yr[538] + Yr[71] + Yr[539] + Yr[71] + Yr[540] + Yr[71] + Yr[541],
    Qv = Yr[110] + Yr[554] + Yr[28] + Yr[29],
    tb = Yr[555] + Yr[21] + Yr[536] + Yr[21] + Yr[556] + Yr[21] + Yr[557],
    ib = Yr[558] + Yr[21] + Yr[559] + Yr[21] + Yr[556],
    nb = Yr[32] + Yr[24] + Yr[560],
    eb = Yr[21] + Yr[561] + Yr[178] + Yr[562],
    sb = Yr[108] + Yr[28] + Yr[29] + Yr[48] + Yr[508],
    rb = Yr[21] + Yr[193] + Yr[238] + Yr[526],
    hb = Yr[551],
    ab = Yr[548],
    ob = Yr[137] + Yr[38] + Yr[563],
    fb = Yr[136] + Yr[193] + Yr[238] + Yr[456],
    ub = Yr[21] + Yr[534] + Yr[28] + Yr[29],
    cb = Yr[21] + Yr[30] + Yr[28] + Yr[29],
    _b = Yr[30],
    db = Yr[136] + Yr[564] + Yr[24] + Yr[565] + Yr[110] + Yr[458],
    lb = Yr[136] + Yr[30] + Yr[48] + Yr[566] + Yr[24] + Yr[565] + Yr[44] + Yr[467],
    vb = Yr[136] + Yr[567] + Yr[1] + Yr[568],
    bb = Yr[21] + Yr[569] + Yr[28] + Yr[29],
    yb = Yr[570],
    gb = Yr[571] + Yr[159],
    mb = Yr[571],
    xb = Yr[429] + Yr[115],
    Eb = Yr[429] + Yr[117],
    pb = Yr[21] + Yr[572] + Yr[24] + Yr[573],
    kb = Yr[136] + Yr[574] + Yr[110] + Yr[554] + Yr[28] + Yr[29],
    wb = Yr[21] + Yr[575],
    Tb = Yr[136] + Yr[569] + Yr[48] + Yr[566] + Yr[24] + Yr[565],
    Ob = Yr[136] + Yr[569] + Yr[278] + Yr[576] + Yr[110] + Yr[554] + Yr[28] + Yr[29],
    Mb = Yr[21] + Yr[168],
    Sb = Yr[160] + Yr[38] + Yr[577],
    jb = Yr[578] + Yr[38] + Yr[577],
    Ib = Yr[136] + Yr[579],
    Ab = Yr[580],
    Cb = Yr[136] + Yr[581],
    Rb = Yr[21] + Yr[582],
    Lb = Yr[583],
    Pb = Yr[136] + Yr[584] + Yr[1] + Yr[318] + Yr[1] + Yr[522],
    Db = Yr[585],
    Nb = Yr[21] + Yr[586],
    $b = Yr[21] + Yr[534] + Yr[110] + Yr[554] + Yr[28] + Yr[29],
    Bb = Yr[547],
    Fb = Yr[21] + Yr[587],
    Gb = Yr[549],
    zb = Yr[21] + Yr[192] + Yr[59] + Yr[588] + Yr[1] + Yr[568],
    Hb = Yr[136] + Yr[589],
    Yb = Yr[550],
    Ub = Yr[546],
    Wb = Yr[590],
    qb = Yr[591],
    Vb = Yr[21] + Yr[507],
    Xb = Yr[21] + Yr[94] + Yr[592] + Yr[29],
    Zb = Yr[593],
    Kb = Yr[594] + Yr[117],
    Jb = Yr[21] + Yr[595],
    Qb = Yr[136] + Yr[596],
    ty = Yr[136] + Yr[597] + Yr[110] + Yr[458],
    iy = Yr[598],
    ny = Yr[589],
    ey = Yr[575] + Yr[159],
    sy = Yr[575],
    ry = Yr[21] + Yr[567] + Yr[48] + Yr[566] + Yr[24] + Yr[565] + Yr[110] + Yr[458],
    hy = Yr[587] + Yr[159],
    ay = Yr[587],
    oy = Yr[599] + Yr[159],
    fy = Yr[599],
    uy = Yr[21] + Yr[193] + Yr[238] + Yr[600] + Yr[59] + Yr[601] + Yr[178] + Yr[464],
    cy = Yr[595] + Yr[159],
    _y = Yr[595],
    dy = Yr[3] + Yr[1] + Yr[602] + Yr[38] + Yr[603],
    ly = Yr[586] + Yr[159],
    vy = Yr[586],
    by = Yr[21] + Yr[604] + Yr[38] + Yr[605],
    yy = Yr[3] + Yr[59] + Yr[180],
    gy = Yr[3] + Yr[28] + Yr[157] + Yr[65] + Yr[86] + Yr[278] + Yr[544] + Yr[28] + Yr[29],
    my = Yr[3] + Yr[606] + Yr[86] + Yr[278] + Yr[544] + Yr[28] + Yr[29],
    xy = Yr[21] + Yr[607] + Yr[59] + Yr[180],
    Ey = Yr[3] + Yr[608],
    py = Yr[30] + Yr[28] + Yr[157] + Yr[104] + Yr[609],
    ky = Yr[30] + Yr[1] + Yr[610],
    wy = Yr[21] + Yr[611] + Yr[612],
    Ty = Yr[21] + Yr[613] + Yr[178] + Yr[614],
    Oy = Yr[21] + Yr[615] + Yr[178] + Yr[616] + Yr[48] + Yr[617],
    My = Yr[136] + Yr[30] + Yr[28] + Yr[29],
    Sy = Yr[136] + Yr[534] + Yr[28] + Yr[29],
    jy = Yr[618],
    Iy = Yr[21] + Yr[569] + Yr[115],
    Ay = Yr[21] + Yr[569] + Yr[117],
    Cy = Yr[619],
    Ry = Yr[620] + Yr[115],
    Ly = Yr[620] + Yr[117],
    Py = Yr[621] + Yr[59] + Yr[622] + Yr[115],
    Dy = Yr[621] + Yr[59] + Yr[622] + Yr[117],
    Ny = Yr[623] + Yr[1] + Yr[318],
    $y = Yr[93] + Yr[151] + Yr[93] + Yr[624] + Yr[93] + Yr[625],
    By = Yr[93] + Yr[151] + Yr[93] + Yr[624] + Yr[93] + Yr[626],
    Fy = Yr[93] + Yr[151] + Yr[93] + Yr[627],
    Gy = Yr[93] + Yr[151] + Yr[93] + Yr[628],
    zy = Yr[93] + Yr[271] + Yr[93] + Yr[624] + Yr[93] + Yr[625],
    Hy = Yr[93] + Yr[271] + Yr[93] + Yr[624] + Yr[93] + Yr[626],
    Yy = Yr[93] + Yr[271] + Yr[93] + Yr[627],
    Uy = Yr[93] + Yr[271] + Yr[93] + Yr[628],
    Wy = Yr[629],
    qy = Yr[321],
    Vy = Yr[630] + Yr[70] + Yr[196] + Yr[99] + Yr[219] + Yr[439] + Yr[631] + Yr[100] + Yr[632] + Yr[633] + Yr[71] + Yr[634] + Yr[635] + Yr[636] + Yr[238] + Yr[637] + Yr[638] + Yr[639] + Yr[640] + Yr[641] + Yr[642] + Yr[643] + Yr[14] + Yr[644] + Yr[439] + Yr[263] + Yr[640] + Yr[645] + Yr[493] + Yr[159] + Yr[646] + Yr[238] + Yr[160] + Yr[159] + Yr[44] + Yr[86] + Yr[647] + Yr[263] + Yr[634] + Yr[648] + Yr[493] + Yr[649] + Yr[193] + Yr[650] + Yr[491] + Yr[651] + Yr[339] + Yr[652] + Yr[653] + Yr[654] + Yr[46] + Yr[655] + Yr[439] + Yr[24] + Yr[656] + Yr[24] + Yr[636] + Yr[278] + Yr[657] + Yr[658] + Yr[14] + Yr[659] + Yr[86] + Yr[660] + Yr[193] + Yr[439] + Yr[661] + Yr[662] + Yr[663] + Yr[664] + Yr[654] + Yr[42] + Yr[665] + Yr[255] + Yr[642] + Yr[115] + Yr[338] + Yr[666] + Yr[667] + Yr[668] + Yr[234] + Yr[669] + Yr[636] + Yr[205] + Yr[1] + Yr[239] + Yr[670] + Yr[491] + Yr[42] + Yr[205] + Yr[86] + Yr[42] + Yr[338] + Yr[671] + Yr[122] + Yr[640] + Yr[117] + Yr[636] + Yr[65] + Yr[672] + Yr[673] + Yr[674] + Yr[675] + Yr[676] + Yr[677] + Yr[642] + Yr[678] + Yr[642] + Yr[679] + Yr[644] + Yr[640] + Yr[439] + Yr[338] + Yr[680] + Yr[681] + Yr[682] + Yr[683] + Yr[339] + Yr[684] + Yr[685] + Yr[644] + Yr[51] + Yr[644] + Yr[71] + Yr[629],
    Xy = Yr[686] + Yr[13] + Yr[469],
    Zy = Yr[686] + Yr[178] + Yr[193],
    Ky = Yr[21] + Yr[687],
    Jy = Yr[21] + Yr[41] + Yr[688],
    Qy = Yr[21] + Yr[30] + Yr[38] + Yr[689],
    tg = Yr[21] + Yr[690],
    ig = Yr[21] + Yr[691],
    ng = Yr[238] + Yr[77] + Yr[238],
    eg = Yr[192] + Yr[110] + Yr[554] + Yr[38] + Yr[692],
    sg = Yr[192] + Yr[693],
    rg = Yr[385] + Yr[104] + Yr[233],
    hg = Yr[104] + Yr[233],
    ag = Yr[178] + Yr[694],
    og = Yr[28] + Yr[29],
    fg = Yr[24] + Yr[25] + Yr[1] + Yr[522] + Yr[28] + Yr[29],
    ug = Yr[430] + Yr[695],
    cg = Yr[59] + Yr[523],
    _g = Yr[59] + Yr[180],
    dg = Yr[38] + Yr[696] + Yr[278] + Yr[435],
    lg = Yr[697] + Yr[508],
    vg = Yr[144] + Yr[438],
    bg = Yr[144] + Yr[133],
    yg = Yr[698] + Yr[59] + Yr[699],
    gg = Yr[700],
    mg = Yr[701],
    xg = Yr[108] + Yr[702] + Yr[105],
    Eg = Yr[703],
    pg = Yr[704],
    kg = Yr[249] + Yr[77] + Yr[309],
    wg = Yr[249],
    Tg = Yr[425],
    Og = Yr[705],
    Mg = Yr[705] + Yr[77] + Yr[430],
    Sg = Yr[705] + Yr[77] + Yr[33],
    jg = Yr[706],
    Ig = Yr[706] + Yr[77] + Yr[430],
    Ag = Yr[706] + Yr[77] + Yr[33],
    Cg = Yr[706] + Yr[77] + Yr[430] + Yr[77] + Yr[33],
    Rg = Yr[706] + Yr[77] + Yr[33] + Yr[77] + Yr[430],
    Lg = Yr[707] + Yr[77] + Yr[282],
    Pg = Yr[707] + Yr[77] + Yr[118],
    Dg = Yr[707] + Yr[77] + Yr[83],
    Ng = Yr[707] + Yr[77] + Yr[84],
    $g = Yr[708],
    Bg = Yr[709],
    Fg = Yr[710],
    Gg = Yr[711],
    zg = Yr[712],
    Hg = Yr[713],
    Yg = Yr[714],
    Ug = Yr[715],
    Wg = Yr[716],
    qg = Yr[717],
    Vg = Yr[718],
    Xg = Yr[719],
    Zg = Yr[720],
    Kg = Yr[721],
    Jg = Yr[722],
    Qg = Yr[723],
    tm = Yr[724] + Yr[77] + Yr[725],
    im = Yr[724] + Yr[77] + Yr[205],
    nm = Yr[724] + Yr[77] + Yr[159],
    em = Yr[724] + Yr[77] + Yr[302],
    sm = Yr[724] + Yr[77] + Yr[338],
    rm = Yr[724] + Yr[77] + Yr[339],
    hm = Yr[724] + Yr[77] + Yr[235],
    am = Yr[724] + Yr[77] + Yr[726],
    om = Yr[724] + Yr[77] + Yr[644],
    fm = Yr[724] + Yr[77] + Yr[290],
    um = Yr[169] + Yr[21] + Yr[727] + Yr[21] + Yr[349] + Yr[21] + Yr[728],
    cm = Yr[729],
    _m = Yr[169] + Yr[21] + Yr[727] + Yr[21] + Yr[349] + Yr[21] + Yr[374],
    dm = Yr[183],
    lm = Yr[169] + Yr[21] + Yr[730] + Yr[21] + Yr[349] + Yr[21] + Yr[373],
    vm = Yr[169] + Yr[21] + Yr[730] + Yr[21] + Yr[349] + Yr[21] + Yr[374],
    bm = Yr[169] + Yr[21] + Yr[730] + Yr[21] + Yr[349] + Yr[21] + Yr[731],
    ym = Yr[732],
    gm = Yr[733] + Yr[21] + Yr[349] + Yr[21] + Yr[734],
    mm = Yr[733] + Yr[21] + Yr[390],
    xm = Yr[733] + Yr[21] + Yr[349],
    Em = Yr[735] + Yr[21] + Yr[372],
    pm = Yr[736] + Yr[21] + Yr[213],
    km = Yr[336] + Yr[21] + Yr[164],
    wm = Yr[212] + Yr[21] + Yr[487] + Yr[21] + Yr[164],
    Tm = Yr[737] + Yr[24] + Yr[154] + Yr[104] + Yr[155],
    Om = Yr[22] + Yr[1] + Yr[304],
    Mm = Yr[240],
    Sm = Yr[738] + Yr[1] + Yr[739] + Yr[110] + Yr[322],
    jm = Yr[740] + Yr[1] + Yr[739] + Yr[110] + Yr[322],
    Im = Yr[26] + Yr[208] + Yr[24] + Yr[148] + Yr[205],
    Am = Yr[26] + Yr[208] + Yr[24] + Yr[148] + Yr[159],
    Cm = Yr[487] + Yr[21] + Yr[741] + Yr[21] + Yr[742],
    Rm = Yr[21] + Yr[743],
    Lm = Yr[310] + Yr[46] + Yr[294],
    Pm = Yr[53] + Yr[1] + Yr[308],
    Dm = Yr[178] + Yr[179] + Yr[51] + Yr[144] + Yr[51] + Yr[131] + Yr[220],
    Nm = Yr[21] + Yr[744],
    $m = Yr[42] + Yr[745],
    Bm = Yr[746],
    Fm = Yr[747],
    Gm = Yr[74] + Yr[748],
    zm = Yr[172] + Yr[42] + Yr[749],
    Hm = Yr[475] + Yr[51],
    Ym = Yr[74] + Yr[750],
    Um = Yr[195] + Yr[110] + Yr[132],
    Wm = Yr[425] + Yr[13] + Yr[114] + Yr[117],
    qm = Yr[48] + Yr[751] + Yr[752],
    Vm = Yr[28] + Yr[753] + Yr[752],
    Xm = Yr[754] + Yr[1] + Yr[426],
    Zm = Yr[754] + Yr[1] + Yr[426] + Yr[65] + Yr[755] + Yr[278] + Yr[294],
    Km = Yr[756],
    Jm = Yr[21] + Yr[32] + Yr[1] + Yr[757],
    Qm = Yr[758] + Yr[38] + Yr[577],
    tx = Yr[219],
    ix = Yr[144],
    nx = Yr[326] + Yr[178] + Yr[179],
    ex = Yr[0] + Yr[178] + Yr[179],
    sx = Yr[3] + Yr[42] + Yr[759] + Yr[178] + Yr[760],
    rx = Yr[761],
    hx = Yr[762],
    ax = Yr[763] + Yr[21] + Yr[349] + Yr[21] + Yr[764],
    ox = Yr[765],
    fx = Yr[763] + Yr[21] + Yr[349] + Yr[21] + Yr[766],
    ux = Yr[767],
    cx = Yr[22] + Yr[104] + Yr[768] + Yr[255] + Yr[256],
    _x = Yr[108] + Yr[1] + Yr[426] + Yr[38] + Yr[282],
    dx = Yr[764] + Yr[21] + Yr[763] + Yr[21] + Yr[359],
    lx = Yr[766] + Yr[21] + Yr[763],
    vx = Yr[769] + Yr[21] + Yr[764] + Yr[21] + Yr[763] + Yr[21] + Yr[361],
    bx = Yr[239],
    yx = Yr[770],
    gx = Yr[667],
    mx = Yr[771] + Yr[21] + Yr[772] + Yr[21] + Yr[382],
    xx = Yr[771] + Yr[21] + Yr[169] + Yr[21] + Yr[382],
    Ex = Yr[771] + Yr[21] + Yr[773] + Yr[21] + Yr[382],
    px = Yr[771] + Yr[21] + Yr[774],
    kx = Yr[24] + Yr[266] + Yr[38] + Yr[775],
    wx = Yr[94] + Yr[133],
    Tx = Yr[434] + Yr[1] + Yr[426],
    Ox = Yr[434] + Yr[38] + Yr[776] + Yr[65] + Yr[777],
    Mx = Yr[425] + Yr[13] + Yr[114] + Yr[115],
    Sx = Yr[434] + Yr[38] + Yr[776] + Yr[13] + Yr[114] + Yr[115],
    jx = Yr[733] + Yr[21] + Yr[349] + Yr[21] + Yr[735],
    Ix = Yr[778],
    Ax = Yr[197] + Yr[1] + Yr[779],
    Cx = Yr[434] + Yr[110] + Yr[286],
    Rx = Yr[778] + Yr[38] + Yr[353],
    Lx = Yr[69] + Yr[70] + Yr[238] + Yr[71] + Yr[238] + Yr[71] + Yr[238] + Yr[71] + Yr[238] + Yr[72],
    Px = Yr[176] + Yr[1] + Yr[426],
    Dx = Yr[176] + Yr[255] + Yr[256],
    Nx = Yr[176] + Yr[38] + Yr[353],
    $x = Yr[21] + Yr[176] + Yr[255] + Yr[256],
    Bx = Yr[197] + Yr[44] + Yr[780] + Yr[1] + Yr[426],
    Fx = Yr[197] + Yr[59] + Yr[269] + Yr[422] + Yr[423],
    Gx = Yr[781] + Yr[24] + Yr[266],
    zx = Yr[21] + Yr[145],
    Hx = Yr[21] + Yr[146],
    Yx = Yr[21] + Yr[782] + Yr[24] + Yr[783],
    Ux = Yr[784],
    Wx = Yr[785],
    qx = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[786] + Yr[21] + Yr[787],
    Vx = Yr[788] + Yr[77] + Yr[789],
    Xx = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[764] + Yr[21] + Yr[787],
    Zx = Yr[790] + Yr[77] + Yr[789],
    Kx = Yr[791],
    Jx = Yr[225] + Yr[21] + Yr[226] + Yr[21] + Yr[792],
    Qx = Yr[594],
    tE = Yr[793],
    iE = Yr[794],
    nE = Yr[732] + Yr[48] + Yr[795],
    eE = Yr[22] + Yr[48] + Yr[796] + Yr[255] + Yr[256],
    sE = Yr[74] + Yr[205] + Yr[1] + Yr[235] + Yr[65] + Yr[263] + Yr[59],
    rE = Yr[74] + Yr[797],
    hE = Yr[74] + Yr[798] + Yr[28] + Yr[644] + Yr[65],
    aE = Yr[74] + Yr[799] + Yr[65] + Yr[800],
    oE = Yr[74] + Yr[799] + Yr[42] + Yr[801],
    fE = Yr[74] + Yr[802] + Yr[1] + Yr[803],
    uE = Yr[74] + Yr[804],
    cE = Yr[74] + Yr[205] + Yr[59] + Yr[235] + Yr[1] + Yr[263] + Yr[44],
    _E = Yr[74] + Yr[805] + Yr[65] + Yr[238],
    dE = Yr[74] + Yr[806] + Yr[807],
    lE = Yr[74] + Yr[205] + Yr[44] + Yr[235] + Yr[808] + Yr[159],
    vE = Yr[74] + Yr[799] + Yr[42] + Yr[809],
    bE = Yr[74] + Yr[810],
    yE = Yr[74] + Yr[159] + Yr[654] + Yr[644] + Yr[811],
    gE = Yr[74] + Yr[812],
    mE = Yr[74] + Yr[813] + Yr[59] + Yr[803],
    xE = Yr[74] + Yr[814],
    EE = Yr[74] + Yr[205] + Yr[44] + Yr[815] + Yr[42] + Yr[338],
    pE = Yr[74] + Yr[816] + Yr[817] + Yr[159],
    kE = Yr[74] + Yr[818] + Yr[819],
    wE = Yr[74] + Yr[205] + Yr[28] + Yr[235] + Yr[820] + Yr[238],
    TE = Yr[74] + Yr[821],
    OE = Yr[74] + Yr[14] + Yr[726] + Yr[14] + Yr[644] + Yr[14] + Yr[644],
    ME = Yr[74] + Yr[235] + Yr[42] + Yr[822],
    SE = Yr[74] + Yr[338] + Yr[44] + Yr[338] + Yr[1] + Yr[338] + Yr[65],
    jE = Yr[74] + Yr[823],
    IE = Yr[74] + Yr[824],
    AE = Yr[74] + Yr[235] + Yr[44] + Yr[235] + Yr[28] + Yr[235] + Yr[44],
    CE = Yr[74] + Yr[338] + Yr[1] + Yr[825],
    RE = Yr[74] + Yr[826],
    LE = Yr[74] + Yr[726] + Yr[59] + Yr[726] + Yr[59] + Yr[726] + Yr[59],
    PE = Yr[74] + Yr[827],
    DE = Yr[74] + Yr[828],
    NE = Yr[74] + Yr[829],
    $E = Yr[74] + Yr[263] + Yr[28] + Yr[263] + Yr[59] + Yr[263] + Yr[59],
    BE = Yr[74] + Yr[42] + Yr[726] + Yr[42] + Yr[339] + Yr[42] + Yr[338],
    FE = Yr[74] + Yr[42] + Yr[263] + Yr[42] + Yr[235] + Yr[42] + Yr[339],
    GE = Yr[74] + Yr[42] + Yr[726] + Yr[42] + Yr[338] + Yr[42] + Yr[302],
    zE = Yr[74] + Yr[830],
    HE = Yr[74] + Yr[28] + Yr[263] + Yr[831],
    YE = Yr[74] + Yr[263] + Yr[832] + Yr[238] + Yr[770] + Yr[238],
    UE = Yr[74] + Yr[433] + Yr[263] + Yr[833],
    WE = Yr[74] + Yr[302] + Yr[654] + Yr[302] + Yr[770] + Yr[834],
    qE = Yr[74] + Yr[65] + Yr[159] + Yr[835],
    VE = Yr[74] + Yr[159] + Yr[28] + Yr[644] + Yr[836],
    XE = Yr[837] + Yr[42] + Yr[838],
    ZE = Yr[74] + Yr[839],
    KE = Yr[74] + Yr[493] + Yr[339] + Yr[493] + Yr[339] + Yr[493] + Yr[235],
    JE = Yr[403] + Yr[93],
    QE = Yr[21] + Yr[252] + Yr[115],
    tp = Yr[275],
    ip = Yr[21] + Yr[840],
    np = Yr[21] + Yr[841],
    ep = Yr[21] + Yr[842],
    sp = Yr[21] + Yr[843] + Yr[178] + Yr[179],
    rp = Yr[844],
    hp = Yr[36] + Yr[65] + Yr[845],
    ap = Yr[36] + Yr[65] + Yr[846],
    op = Yr[36],
    fp = Yr[87] + Yr[1] + Yr[847] + Yr[1] + Yr[294],
    up = Yr[36] + Yr[95] + Yr[848],
    cp = Yr[178] + Yr[315] + Yr[51] + Yr[849] + Yr[51] + Yr[850] + Yr[77],
    _p = Yr[851],
    dp = Yr[46] + Yr[852] + Yr[51] + Yr[770] + Yr[51] + Yr[851] + Yr[51] + Yr[853] + Yr[77],
    lp = Yr[854],
    vp = Yr[788] + Yr[104] + Yr[855],
    bp = Yr[856] + Yr[38] + Yr[162],
    yp = Yr[857] + Yr[1] + Yr[426],
    gp = Yr[858] + Yr[42] + Yr[859] + Yr[104] + Yr[155],
    mp = Yr[856] + Yr[44] + Yr[258],
    xp = Yr[537] + Yr[178] + Yr[860],
    Ep = Yr[861],
    pp = Yr[862],
    kp = Yr[863] + Yr[430] + Yr[864],
    wp = Yr[863] + Yr[59] + Yr[180],
    Tp = Yr[865],
    Op = Yr[866],
    Mp = Yr[867],
    Sp = Yr[868] + Yr[59] + Yr[180],
    jp = Yr[869],
    Ip = Yr[870],
    Ap = Yr[871],
    Cp = Yr[132] + Yr[110] + Yr[286],
    Rp = Yr[872],
    Lp = Yr[873],
    Pp = Yr[868],
    Dp = Yr[280] + Yr[38] + Yr[162],
    Np = Yr[744],
    $p = Yr[874] + Yr[278] + Yr[625] + Yr[1] + Yr[294] + Yr[38] + Yr[162],
    Bp = Yr[875],
    Fp = Yr[876],
    Gp = Yr[132],
    zp = Yr[877],
    Hp = Yr[95] + Yr[878] + Yr[51] + Yr[879] + Yr[498] + Yr[238] + Yr[85],
    Yp = Yr[552],
    Up = Yr[880] + Yr[122] + Yr[123],
    Wp = Yr[881] + Yr[1] + Yr[294],
    qp = Yr[175] + Yr[33] + Yr[882] + Yr[220],
    Vp = Yr[883],
    Xp = Yr[175] + Yr[24] + Yr[884] + Yr[51] + Yr[59] + Yr[885] + Yr[220],
    Zp = Yr[886] + Yr[59] + Yr[885],
    Kp = Yr[887],
    Jp = Yr[888],
    Qp = Yr[14] + Yr[889] + Yr[493] + Yr[338] + Yr[654] + Yr[890] + Yr[891] + Yr[726] + Yr[770] + Yr[892] + Yr[654] + Yr[893] + Yr[433] + Yr[302] + Yr[894] + Yr[263] + Yr[895] + Yr[896] + Yr[897] + Yr[898] + Yr[899] + Yr[238] + Yr[493] + Yr[339] + Yr[14] + Yr[900] + Yr[770] + Yr[901] + Yr[902] + Yr[903] + Yr[433] + Yr[904] + Yr[905] + Yr[302] + Yr[906] + Yr[238] + Yr[907] + Yr[908] + Yr[493] + Yr[909] + Yr[910] + Yr[911] + Yr[912] + Yr[302] + Yr[654] + Yr[913] + Yr[14] + Yr[914] + Yr[915] + Yr[235] + Yr[493] + Yr[916] + Yr[14] + Yr[917] + Yr[918] + Yr[263] + Yr[919] + Yr[920] + Yr[14] + Yr[263] + Yr[433] + Yr[339] + Yr[160] + Yr[205] + Yr[654] + Yr[338] + Yr[654] + Yr[921] + Yr[493] + Yr[159] + Yr[160] + Yr[903] + Yr[922] + Yr[644] + Yr[160] + Yr[302] + Yr[654] + Yr[71] + Yr[923] + Yr[205] + Yr[770] + Yr[924] + Yr[160] + Yr[925] + Yr[770] + Yr[926] + Yr[14] + Yr[927] + Yr[902] + Yr[928] + Yr[929] + Yr[930] + Yr[931] + Yr[338] + Yr[932] + Yr[933] + Yr[934] + Yr[935] + Yr[770] + Yr[726] + Yr[936] + Yr[302] + Yr[433] + Yr[238] + Yr[937] + Yr[938] + Yr[939] + Yr[940] + Yr[654] + Yr[941] + Yr[942] + Yr[238] + Yr[433] + Yr[943] + Yr[944] + Yr[945] + Yr[923] + Yr[946] + Yr[947] + Yr[948] + Yr[433] + Yr[238] + Yr[949] + Yr[950] + Yr[951] + Yr[952] + Yr[433] + Yr[953] + Yr[954] + Yr[263] + Yr[493] + Yr[955] + Yr[433] + Yr[956] + Yr[957] + Yr[235] + Yr[958] + Yr[959] + Yr[770] + Yr[960] + Yr[654] + Yr[205] + Yr[961] + Yr[962] + Yr[963] + Yr[644] + Yr[433] + Yr[964] + Yr[654] + Yr[965] + Yr[957] + Yr[71] + Yr[644] + Yr[966] + Yr[263] + Yr[14] + Yr[159] + Yr[14] + Yr[967] + Yr[654] + Yr[968] + Yr[912] + Yr[969] + Yr[910] + Yr[205] + Yr[433] + Yr[970] + Yr[654] + Yr[338] + Yr[971] + Yr[972] + Yr[160] + Yr[973] + Yr[974] + Yr[975] + Yr[976] + Yr[977] + Yr[978] + Yr[979] + Yr[493] + Yr[263] + Yr[922] + Yr[834] + Yr[433] + Yr[980] + Yr[14] + Yr[981] + Yr[493] + Yr[339] + Yr[517] + Yr[982] + Yr[654] + Yr[983] + Yr[14] + Yr[984] + Yr[770] + Yr[302] + Yr[433] + Yr[263] + Yr[770] + Yr[985] + Yr[986] + Yr[987] + Yr[770] + Yr[988] + Yr[770] + Yr[989] + Yr[990] + Yr[991] + Yr[992] + Yr[993] + Yr[433] + Yr[994] + Yr[433] + Yr[995] + Yr[493] + Yr[644] + Yr[493] + Yr[996] + Yr[905] + Yr[997] + Yr[433] + Yr[302] + Yr[160] + Yr[998] + Yr[919] + Yr[962] + Yr[14],
    tk = Yr[175] + Yr[48] + Yr[999] + Yr[51] + Yr[94] + Yr[498],
    ik = Yr[419] + Yr[611] + Yr[1e3] + Yr[419] + Yr[302] + Yr[42] + Yr[419] + Yr[611] + Yr[1001] + Yr[77] + Yr[298] + Yr[77] + Yr[872] + Yr[419] + Yr[159] + Yr[1] + Yr[1002] + Yr[77] + Yr[298] + Yr[77] + Yr[872] + Yr[419] + Yr[159] + Yr[1] + Yr[1003] + Yr[77] + Yr[298] + Yr[77] + Yr[872],
    nk = Yr[1004],
    ek = Yr[1005],
    sk = Yr[1006],
    rk = Yr[161] + Yr[110],
    hk = Yr[1007],
    ak = Yr[726] + Yr[77],
    ok = Yr[963],
    fk = Yr[281],
    uk = Yr[1008],
    ck = Yr[1] + Yr[304],
    _k = Yr[104] + Yr[1009],
    dk = Yr[1] + Yr[1010],
    lk = Yr[1011],
    vk = Yr[1012],
    bk = Yr[1013],
    yk = Yr[1014],
    gk = Yr[1015],
    mk = Yr[1016],
    xk = Yr[1017],
    Ek = Yr[1018],
    pk = Yr[472],
    kk = Yr[1019],
    wk = Yr[1020],
    Tk = Yr[403] + Yr[1021],
    Ok = Yr[51] + Yr[283] + Yr[51] + Yr[1022] + Yr[339],
    Mk = Yr[1023],
    Sk = Yr[1024],
    jk = Yr[1025] + Yr[198] + Yr[1026],
    Ik = Yr[1027],
    Ak = Yr[1028] + Yr[77] + Yr[903] + Yr[77] + Yr[205],
    Ck = Yr[28] + Yr[157],
    Rk = Yr[47],
    Lk = Yr[1029],
    Pk = Yr[1030] + Yr[198] + Yr[1026],
    Dk = Yr[59] + Yr[885],
    Nk = Yr[1031],
    $k = Yr[132] + Yr[159] + Yr[59],
    Bk = Yr[491] + Yr[110] + Yr[132],
    Fk = Yr[1032],
    Gk = Yr[238] + Yr[51] + Yr[238],
    zk = Yr[403] + Yr[93] + Yr[1] + Yr[304],
    Hk = Yr[403] + Yr[93] + Yr[1] + Yr[304] + Yr[24] + Yr[1033],
    Yk = Yr[403] + Yr[93] + Yr[255] + Yr[404],
    Uk = Yr[21] + Yr[1034] + Yr[235],
    Wk = Yr[21] + Yr[1035] + Yr[644],
    qk = Yr[21] + Yr[1036],
    Vk = Yr[161] + Yr[24] + Yr[516],
    Xk = Yr[21] + Yr[235] + Yr[604],
    Zk = Yr[247],
    Kk = Yr[21] + Yr[524],
    Jk = Yr[1037],
    Qk = Yr[1038],
    tw = Yr[21] + Yr[1039] + Yr[688],
    iw = Yr[21] + Yr[1040],
    nw = Yr[21] + Yr[1041],
    ew = Yr[1042],
    sw = Yr[21] + Yr[193] + Yr[238] + Yr[667],
    rw = Yr[21] + Yr[1034] + Yr[644],
    hw = Yr[21] + Yr[1043] + Yr[48] + Yr[49],
    aw = Yr[21] + Yr[1044],
    ow = Yr[21] + Yr[1038],
    fw = Yr[490],
    uw = Yr[667] + Yr[178] + Yr[274],
    cw = Yr[1045] + Yr[65] + Yr[1046],
    _w = Yr[754],
    dw = Yr[21] + Yr[1047],
    lw = Yr[21] + Yr[1048],
    vw = Yr[21] + Yr[524] + Yr[1] + Yr[304] + Yr[38] + Yr[162] + Yr[44] + Yr[258],
    bw = Yr[1049] + Yr[110] + Yr[191],
    yw = Yr[21] + Yr[561] + Yr[278] + Yr[1050],
    gw = Yr[1051] + Yr[278] + Yr[1050],
    mw = Yr[1052],
    xw = Yr[1042] + Yr[70],
    Ew = Yr[136] + Yr[1053] + Yr[278] + Yr[1050],
    pw = Yr[136] + Yr[1054],
    kw = Yr[1055],
    ww = Yr[3] + Yr[28] + Yr[157] + Yr[65] + Yr[86] + Yr[178] + Yr[160],
    Tw = Yr[21] + Yr[1034] + Yr[263],
    Ow = Yr[1056] + Yr[178] + Yr[274],
    Mw = Yr[1057] + Yr[178] + Yr[160],
    Sw = Yr[136] + Yr[1058],
    jw = Yr[21] + Yr[1059],
    Iw = Yr[21] + Yr[524] + Yr[65] + Yr[189] + Yr[44] + Yr[258],
    Aw = Yr[283] + Yr[28] + Yr[284] + Yr[104] + Yr[1060],
    Cw = Yr[94] + Yr[48] + Yr[1061],
    Rw = Yr[167] + Yr[110] + Yr[322],
    Lw = Yr[21] + Yr[1062] + Yr[1] + Yr[304],
    Pw = Yr[21] + Yr[1038] + Yr[1] + Yr[1063],
    Dw = Yr[3] + Yr[255] + Yr[1064] + Yr[65] + Yr[189],
    Nw = Yr[158] + Yr[65] + Yr[189],
    $w = Yr[1065] + Yr[77] + Yr[570],
    Bw = Yr[1065] + Yr[77] + Yr[1066],
    Fw = Yr[420] + Yr[21] + Yr[349],
    Gw = Yr[420] + Yr[21] + Yr[1067],
    zw = Yr[21] + Yr[1068],
    Hw = Yr[21] + Yr[282] + Yr[1] + Yr[304],
    Yw = Yr[21] + Yr[193] + Yr[1069],
    Uw = Yr[21] + Yr[193] + Yr[238] + Yr[1070],
    Ww = Yr[21] + Yr[945],
    qw = Yr[21] + Yr[1054] + Yr[44] + Yr[1071],
    Vw = Yr[192] + Yr[65] + Yr[313] + Yr[28] + Yr[394],
    Xw = Yr[1057] + Yr[65] + Yr[189],
    Zw = Yr[21] + Yr[726] + Yr[491],
    Kw = Yr[21] + Yr[302] + Yr[239],
    Jw = Yr[21] + Yr[1072] + Yr[42] + Yr[1073],
    Qw = Yr[1072] + Yr[42] + Yr[295] + Yr[1] + Yr[1074],
    tT = Yr[247] + Yr[33] + Yr[1075],
    iT = Yr[21] + Yr[832],
    nT = Yr[21] + Yr[1076] + Yr[1] + Yr[476],
    eT = Yr[1077] + Yr[77] + Yr[188],
    sT = Yr[21] + Yr[1038] + Yr[1] + Yr[476],
    rT = Yr[136] + Yr[926],
    hT = Yr[108] + Yr[104] + Yr[233],
    aT = Yr[94] + Yr[1] + Yr[304],
    oT = Yr[1078],
    fT = Yr[247] + Yr[104] + Yr[1079],
    uT = Yr[1057] + Yr[1] + Yr[1080],
    cT = Yr[1081],
    _T = Yr[30] + Yr[24] + Yr[25] + Yr[1] + Yr[522],
    dT = Yr[247] + Yr[59] + Yr[180],
    lT = Yr[21] + Yr[1082],
    vT = Yr[21] + Yr[392] + Yr[65] + Yr[313] + Yr[178] + Yr[257] + Yr[44] + Yr[258],
    bT = Yr[21] + Yr[1083],
    yT = Yr[136] + Yr[491] + Yr[338],
    gT = Yr[0] + Yr[28] + Yr[312],
    mT = Yr[3] + Yr[178] + Yr[274] + Yr[65] + Yr[86] + Yr[178] + Yr[160],
    xT = Yr[608] + Yr[527],
    ET = Yr[129] + Yr[477] + Yr[51] + Yr[1084],
    pT = Yr[161] + Yr[178] + Yr[274] + Yr[65] + Yr[1085],
    kT = Yr[161] + Yr[178] + Yr[274] + Yr[42] + Yr[1086],
    wT = Yr[1038] + Yr[65] + Yr[189],
    TT = Yr[21] + Yr[1087] + Yr[278] + Yr[435],
    OT = Yr[21] + Yr[1062] + Yr[278],
    MT = Yr[21] + Yr[837] + Yr[65] + Yr[189],
    ST = Yr[26] + Yr[31],
    jT = Yr[21] + Yr[1088],
    IT = Yr[1057],
    AT = Yr[21] + Yr[1089],
    CT = Yr[403] + Yr[77] + Yr[28] + Yr[157],
    RT = Yr[1090],
    LT = Yr[1091] + Yr[255] + Yr[1092],
    PT = Yr[1093],
    DT = Yr[403] + Yr[77] + Yr[28] + Yr[312],
    NT = Yr[21] + Yr[1094],
    $T = Yr[1095],
    BT = Yr[393] + Yr[28] + Yr[394],
    FT = Yr[1096] + Yr[77] + Yr[1097],
    GT = Yr[1098] + Yr[24] + Yr[266] + Yr[1] + Yr[522],
    zT = Yr[192] + Yr[46] + Yr[1099],
    HT = Yr[1100],
    YT = Yr[94],
    UT = Yr[403] + Yr[93] + Yr[484],
    WT = Yr[0] + Yr[48] + Yr[1101],
    qT = Yr[21] + Yr[1102] + Yr[46] + Yr[1103],
    VT = Yr[392],
    XT = Yr[21] + Yr[1035] + Yr[235],
    ZT = Yr[26] + Yr[1104],
    KT = Yr[1104],
    JT = Yr[242],
    QT = Yr[0] + Yr[44] + Yr[1105],
    tO = Yr[94] + Yr[44] + Yr[1105],
    iO = Yr[21] + Yr[242],
    nO = Yr[403] + Yr[77] + Yr[46] + Yr[294],
    eO = Yr[1106] + Yr[77] + Yr[108],
    sO = Yr[1106] + Yr[77] + Yr[53],
    rO = Yr[253] + Yr[24] + Yr[90],
    hO = Yr[1107] + Yr[21] + Yr[1108],
    aO = Yr[336] + Yr[21] + Yr[382],
    oO = Yr[231] + Yr[38] + Yr[1109],
    fO = Yr[403] + Yr[77] + Yr[38] + Yr[261] + Yr[46] + Yr[294],
    uO = Yr[1096],
    cO = Yr[1110] + Yr[110] + Yr[322],
    _O = Yr[1111],
    dO = Yr[262],
    lO = Yr[403] + Yr[77] + Yr[65] + Yr[1112],
    vO = Yr[462] + Yr[38] + Yr[400] + Yr[46] + Yr[401],
    bO = Yr[1113] + Yr[21] + Yr[349],
    yO = Yr[1113] + Yr[21] + Yr[349] + Yr[21] + Yr[328],
    gO = Yr[1113] + Yr[21] + Yr[1114] + Yr[21] + Yr[164],
    mO = Yr[247] + Yr[44] + Yr[258],
    xO = Yr[26] + Yr[1115] + Yr[110] + Yr[286],
    EO = Yr[26] + Yr[219],
    pO = Yr[1115],
    kO = Yr[26] + Yr[465] + Yr[38] + Yr[162],
    wO = Yr[1113] + Yr[21] + Yr[1116],
    TO = Yr[403] + Yr[77] + Yr[255] + Yr[1092],
    OO = Yr[21] + Yr[193] + Yr[238] + Yr[770],
    MO = Yr[465] + Yr[38] + Yr[162],
    SO = Yr[1115] + Yr[110] + Yr[286],
    jO = Yr[1115] + Yr[178] + Yr[179],
    IO = Yr[255] + Yr[1092],
    AO = Yr[403] + Yr[77] + Yr[110] + Yr[132],
    CO = Yr[110] + Yr[132],
    RO = Yr[74] + Yr[1117],
    LO = Yr[26] + Yr[253] + Yr[24] + Yr[148],
    PO = Yr[425] + Yr[65] + Yr[777],
    DO = Yr[434] + Yr[38] + Yr[776] + Yr[13] + Yr[114] + Yr[117],
    NO = Yr[434] + Yr[65] + Yr[1118],
    $O = Yr[434] + Yr[65] + Yr[1119] + Yr[1] + Yr[426],
    BO = Yr[176] + Yr[104] + Yr[233],
    FO = Yr[1120] + Yr[38] + Yr[696] + Yr[38] + Yr[1109],
    GO = Yr[26] + Yr[1121],
    zO = Yr[240] + Yr[115],
    HO = Yr[240] + Yr[117],
    YO = Yr[733] + Yr[21] + Yr[349] + Yr[21] + Yr[735] + Yr[21] + Yr[328],
    UO = Yr[21] + Yr[1122],
    WO = Yr[249] + Yr[1] + Yr[426],
    qO = Yr[249] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    VO = Yr[249] + Yr[48] + Yr[270] + Yr[59] + Yr[269] + Yr[13] + Yr[114],
    XO = Yr[26] + Yr[259] + Yr[1] + Yr[426],
    ZO = Yr[26] + Yr[247] + Yr[59] + Yr[180],
    KO = Yr[26] + Yr[259] + Yr[255] + Yr[256],
    JO = Yr[1123],
    QO = Yr[187] + Yr[38] + Yr[162],
    tM = Yr[30] + Yr[65] + Yr[189] + Yr[1] + Yr[476],
    iM = Yr[26] + Yr[247] + Yr[33] + Yr[1075],
    nM = Yr[26] + Yr[250] + Yr[28] + Yr[268],
    eM = Yr[1124],
    sM = Yr[1125] + Yr[33] + Yr[1126],
    rM = Yr[21] + Yr[193] + Yr[238] + Yr[612],
    hM = Yr[33] + Yr[1075],
    aM = Yr[48] + Yr[221],
    oM = Yr[42] + Yr[246] + Yr[24] + Yr[148],
    fM = Yr[38] + Yr[162],
    uM = Yr[65] + Yr[1119] + Yr[255] + Yr[256],
    cM = Yr[733] + Yr[21] + Yr[735],
    _M = Yr[733] + Yr[21] + Yr[734] + Yr[21] + Yr[1127],
    dM = Yr[104] + Yr[243],
    lM = Yr[500],
    vM = Yr[733] + Yr[21] + Yr[786],
    bM = Yr[434] + Yr[77] + Yr[788],
    yM = Yr[434] + Yr[77] + Yr[249],
    gM = Yr[733] + Yr[21] + Yr[734] + Yr[21] + Yr[381] + Yr[21] + Yr[117],
    mM = Yr[434] + Yr[77] + Yr[201],
    xM = Yr[1128] + Yr[21] + Yr[786],
    EM = Yr[754] + Yr[77] + Yr[788],
    pM = Yr[1128] + Yr[21] + Yr[786] + Yr[21] + Yr[225] + Yr[21] + Yr[226],
    kM = Yr[1121],
    wM = Yr[425] + Yr[77] + Yr[1129],
    TM = Yr[734] + Yr[21] + Yr[786],
    OM = Yr[425] + Yr[77] + Yr[788],
    MM = Yr[734] + Yr[21] + Yr[381] + Yr[21] + Yr[115],
    SM = Yr[425] + Yr[77] + Yr[240] + Yr[77] + Yr[85],
    jM = Yr[425] + Yr[77] + Yr[240] + Yr[77] + Yr[86],
    IM = Yr[327] + Yr[21] + Yr[1130],
    AM = Yr[1131] + Yr[77] + Yr[195],
    CM = Yr[327] + Yr[21] + Yr[1130] + Yr[21] + Yr[352],
    RM = Yr[1131] + Yr[77] + Yr[195] + Yr[77] + Yr[102],
    LM = Yr[327] + Yr[21] + Yr[169] + Yr[21] + Yr[1132] + Yr[21] + Yr[786],
    PM = Yr[1131] + Yr[77] + Yr[197] + Yr[77] + Yr[1133],
    DM = Yr[327] + Yr[21] + Yr[1132] + Yr[21] + Yr[786],
    NM = Yr[1131] + Yr[77] + Yr[176] + Yr[77] + Yr[788],
    $M = Yr[1131] + Yr[77] + Yr[176] + Yr[77] + Yr[1134],
    BM = Yr[327] + Yr[21] + Yr[1135],
    FM = Yr[1131] + Yr[77] + Yr[778],
    GM = Yr[1131] + Yr[77] + Yr[778] + Yr[77] + Yr[102],
    zM = Yr[245] + Yr[77] + Yr[1136] + Yr[77] + Yr[1096],
    HM = Yr[1137] + Yr[21] + Yr[786],
    YM = Yr[259] + Yr[77] + Yr[788],
    UM = Yr[259] + Yr[77] + Yr[1134],
    WM = Yr[249] + Yr[77] + Yr[145],
    qM = Yr[249] + Yr[77] + Yr[788],
    VM = Yr[735] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    XM = Yr[249] + Yr[77] + Yr[197] + Yr[77] + Yr[1133],
    ZM = Yr[735] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    KM = Yr[249] + Yr[77] + Yr[496],
    JM = Yr[1139],
    QM = Yr[197] + Yr[77] + Yr[1140],
    tS = Yr[169] + Yr[21] + Yr[730],
    iS = Yr[197] + Yr[77] + Yr[292],
    nS = Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[727],
    eS = Yr[197] + Yr[77] + Yr[1133] + Yr[77] + Yr[1140],
    sS = Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[730],
    rS = Yr[197] + Yr[77] + Yr[1133] + Yr[77] + Yr[292],
    hS = Yr[212] + Yr[21] + Yr[1137] + Yr[21] + Yr[786],
    aS = Yr[212] + Yr[21] + Yr[1137] + Yr[21] + Yr[763],
    oS = Yr[219] + Yr[77] + Yr[249] + Yr[77] + Yr[145],
    fS = Yr[212] + Yr[21] + Yr[735] + Yr[21] + Yr[352],
    uS = Yr[212] + Yr[21] + Yr[735] + Yr[21] + Yr[786],
    cS = Yr[219] + Yr[77] + Yr[249] + Yr[77] + Yr[102],
    _S = Yr[212] + Yr[21] + Yr[735] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    dS = Yr[212] + Yr[21] + Yr[372],
    lS = Yr[212] + Yr[21] + Yr[735] + Yr[21] + Yr[372],
    vS = Yr[219] + Yr[77] + Yr[496],
    bS = Yr[212] + Yr[21] + Yr[1139],
    yS = Yr[219] + Yr[77] + Yr[216],
    gS = Yr[212] + Yr[21] + Yr[646] + Yr[21] + Yr[513],
    mS = Yr[219] + Yr[77] + Yr[667] + Yr[77] + Yr[12],
    xS = Yr[212] + Yr[21] + Yr[1141],
    ES = Yr[219] + Yr[77] + Yr[1142],
    pS = Yr[212] + Yr[21] + Yr[1143],
    kS = Yr[219] + Yr[77] + Yr[1121],
    wS = Yr[1144] + Yr[21] + Yr[1145],
    TS = Yr[870] + Yr[77] + Yr[202],
    OS = Yr[1144] + Yr[21] + Yr[1146],
    MS = Yr[870] + Yr[77] + Yr[767],
    SS = Yr[870] + Yr[77] + Yr[1055],
    jS = Yr[870] + Yr[77] + Yr[788],
    IS = Yr[1144] + Yr[21] + Yr[163] + Yr[21] + Yr[164],
    AS = Yr[870] + Yr[77] + Yr[171] + Yr[77] + Yr[1037],
    CS = Yr[1144] + Yr[21] + Yr[163] + Yr[21] + Yr[165],
    RS = Yr[870] + Yr[77] + Yr[171] + Yr[77] + Yr[1147],
    LS = Yr[1144] + Yr[21] + Yr[163] + Yr[21] + Yr[352],
    PS = Yr[870] + Yr[77] + Yr[171] + Yr[77] + Yr[102],
    DS = Yr[1144] + Yr[21] + Yr[1139],
    NS = Yr[870] + Yr[77] + Yr[216],
    $S = Yr[870] + Yr[77] + Yr[252] + Yr[77] + Yr[145],
    BS = Yr[1144] + Yr[21] + Yr[736],
    FS = Yr[870] + Yr[77] + Yr[252],
    GS = Yr[870] + Yr[77] + Yr[496],
    zS = Yr[1144] + Yr[21] + Yr[381] + Yr[21] + Yr[115],
    HS = Yr[870] + Yr[77] + Yr[240] + Yr[77] + Yr[85],
    YS = Yr[1144] + Yr[21] + Yr[381] + Yr[21] + Yr[117],
    US = Yr[870] + Yr[77] + Yr[240] + Yr[77] + Yr[86],
    WS = Yr[1144] + Yr[21] + Yr[164],
    qS = Yr[870] + Yr[77] + Yr[1037],
    VS = Yr[1144] + Yr[21] + Yr[1148] + Yr[21] + Yr[1146],
    XS = Yr[870] + Yr[77] + Yr[1149] + Yr[77] + Yr[767],
    ZS = Yr[870] + Yr[77] + Yr[249],
    KS = Yr[1144] + Yr[21] + Yr[735] + Yr[21] + Yr[352],
    JS = Yr[870] + Yr[77] + Yr[249] + Yr[77] + Yr[102],
    QS = Yr[1144] + Yr[21] + Yr[1137] + Yr[21] + Yr[786],
    tj = Yr[1144] + Yr[21] + Yr[1150],
    ij = Yr[870] + Yr[77] + Yr[244],
    nj = Yr[1144] + Yr[21] + Yr[734] + Yr[21] + Yr[1127],
    ej = Yr[870] + Yr[77] + Yr[425] + Yr[77] + Yr[1129],
    sj = Yr[1144] + Yr[21] + Yr[734] + Yr[21] + Yr[786],
    rj = Yr[870] + Yr[77] + Yr[425] + Yr[77] + Yr[788],
    hj = Yr[1144] + Yr[21] + Yr[734] + Yr[21] + Yr[381] + Yr[21] + Yr[115],
    aj = Yr[1144] + Yr[21] + Yr[734] + Yr[21] + Yr[381] + Yr[21] + Yr[117],
    oj = Yr[1144] + Yr[21] + Yr[646] + Yr[21] + Yr[513],
    fj = Yr[870] + Yr[77] + Yr[667] + Yr[77] + Yr[12],
    uj = Yr[1144] + Yr[21] + Yr[1151] + Yr[21] + Yr[363],
    cj = Yr[870] + Yr[77] + Yr[30] + Yr[77] + Yr[282],
    _j = Yr[1113] + Yr[21] + Yr[1137] + Yr[21] + Yr[763],
    dj = Yr[1113] + Yr[21] + Yr[1130],
    lj = Yr[1115] + Yr[77] + Yr[195],
    vj = Yr[1113] + Yr[21] + Yr[1130] + Yr[21] + Yr[352],
    bj = Yr[1115] + Yr[77] + Yr[195] + Yr[77] + Yr[788],
    yj = Yr[1113] + Yr[21] + Yr[1130] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    gj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[1153] + Yr[21] + Yr[1146],
    mj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[786],
    xj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[163] + Yr[21] + Yr[164],
    Ej = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[163] + Yr[21] + Yr[165],
    pj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[1139],
    kj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[736] + Yr[21] + Yr[213],
    wj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[736],
    Tj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[372],
    Oj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[381] + Yr[21] + Yr[115],
    Mj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[381] + Yr[21] + Yr[117],
    Sj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[735],
    jj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[1137] + Yr[21] + Yr[786],
    Ij = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[1137] + Yr[21] + Yr[763],
    Aj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[1150],
    Cj = Yr[354] + Yr[21] + Yr[213],
    Rj = Yr[392] + Yr[77] + Yr[145],
    Lj = Yr[354] + Yr[21] + Yr[786],
    Pj = Yr[392] + Yr[77] + Yr[788],
    Dj = Yr[354] + Yr[21] + Yr[1135],
    Nj = Yr[392] + Yr[77] + Yr[778],
    $j = Yr[354] + Yr[21] + Yr[1135] + Yr[21] + Yr[352],
    Bj = Yr[392] + Yr[77] + Yr[778] + Yr[77] + Yr[102],
    Fj = Yr[354] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    Gj = Yr[392] + Yr[77] + Yr[197] + Yr[77] + Yr[1133],
    zj = Yr[354] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    Hj = Yr[392] + Yr[77] + Yr[87] + Yr[77] + Yr[240],
    Yj = Yr[392] + Yr[77] + Yr[94] + Yr[77] + Yr[240],
    Uj = Yr[392] + Yr[77] + Yr[176] + Yr[77] + Yr[788],
    Wj = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1154],
    qj = Yr[392] + Yr[77] + Yr[393] + Yr[77] + Yr[1155],
    Vj = Yr[392] + Yr[77] + Yr[1156] + Yr[77] + Yr[1157],
    Xj = Yr[392] + Yr[77] + Yr[707],
    Zj = Yr[392] + Yr[77] + Yr[1158] + Yr[77] + Yr[1159],
    Kj = Yr[392] + Yr[77] + Yr[50] + Yr[77] + Yr[1160],
    Jj = Yr[392] + Yr[77] + Yr[50] + Yr[77] + Yr[35],
    Qj = Yr[392] + Yr[77] + Yr[1161],
    tI = Yr[392] + Yr[77] + Yr[1161] + Yr[77] + Yr[496],
    iI = Yr[354] + Yr[21] + Yr[380] + Yr[21] + Yr[1162] + Yr[21] + Yr[354],
    nI = Yr[392] + Yr[77] + Yr[87] + Yr[77] + Yr[1163] + Yr[77] + Yr[392],
    eI = Yr[392] + Yr[77] + Yr[94] + Yr[77] + Yr[1163] + Yr[77] + Yr[392],
    sI = Yr[724] + Yr[77] + Yr[87],
    rI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[1037],
    hI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[381],
    aI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[240],
    oI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[195],
    fI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[1130] + Yr[21] + Yr[352],
    uI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[1135],
    cI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[778],
    _I = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[1135] + Yr[21] + Yr[352],
    dI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    lI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[197] + Yr[77] + Yr[1133],
    vI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[1132] + Yr[21] + Yr[763],
    bI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[169] + Yr[21] + Yr[727],
    yI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[197] + Yr[77] + Yr[1140],
    gI = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[169] + Yr[21] + Yr[730],
    mI = Yr[724] + Yr[77] + Yr[87] + Yr[77] + Yr[197] + Yr[77] + Yr[292],
    xI = Yr[724] + Yr[77] + Yr[94],
    EI = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[164],
    pI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[1037],
    kI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[240],
    wI = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[1130],
    TI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[195],
    OI = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[1135],
    MI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[778],
    SI = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[1135] + Yr[21] + Yr[352],
    jI = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    II = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[197] + Yr[77] + Yr[1133],
    AI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[176] + Yr[77] + Yr[788],
    CI = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[169] + Yr[21] + Yr[727],
    RI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[197] + Yr[77] + Yr[1140],
    LI = Yr[724] + Yr[77] + Yr[94] + Yr[77] + Yr[197] + Yr[77] + Yr[292],
    PI = Yr[733] + Yr[21] + Yr[734] + Yr[21] + Yr[381] + Yr[21] + Yr[115],
    DI = Yr[1144] + Yr[21] + Yr[1164],
    NI = Yr[1144] + Yr[21] + Yr[1153] + Yr[21] + Yr[1146],
    $I = Yr[1144] + Yr[21] + Yr[786],
    BI = Yr[788],
    FI = Yr[1144] + Yr[21] + Yr[735],
    GI = Yr[259] + Yr[1] + Yr[426],
    zI = Yr[250] + Yr[13] + Yr[193] + Yr[110] + Yr[1165],
    HI = Yr[734] + Yr[21] + Yr[1127],
    YI = Yr[734] + Yr[21] + Yr[381] + Yr[21] + Yr[117],
    UI = Yr[1149] + Yr[24] + Yr[90],
    WI = Yr[1144] + Yr[21] + Yr[736] + Yr[21] + Yr[213],
    qI = Yr[252] + Yr[198] + Yr[199],
    VI = Yr[249] + Yr[104] + Yr[264],
    XI = Yr[244],
    ZI = Yr[1144] + Yr[21] + Yr[1137] + Yr[21] + Yr[763],
    KI = Yr[1143],
    JI = Yr[21] + Yr[159] + Yr[203],
    QI = Yr[1137] + Yr[21] + Yr[763],
    tA = Yr[735] + Yr[21] + Yr[786],
    iA = Yr[21] + Yr[1166],
    nA = Yr[1167] + Yr[21] + Yr[365] + Yr[21] + Yr[1168],
    eA = Yr[1142] + Yr[110] + Yr[286],
    sA = Yr[327] + Yr[21] + Yr[1135] + Yr[21] + Yr[352],
    rA = Yr[327] + Yr[21] + Yr[1132] + Yr[21] + Yr[763],
    hA = Yr[327] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    aA = Yr[169] + Yr[21] + Yr[727],
    oA = Yr[212] + Yr[21] + Yr[735],
    fA = Yr[1169] + Yr[65] + Yr[1170],
    uA = Yr[21] + Yr[339] + Yr[634],
    cA = Yr[1113] + Yr[21] + Yr[1137] + Yr[21] + Yr[786],
    _A = Yr[1131],
    dA = Yr[1113] + Yr[21] + Yr[1130] + Yr[21] + Yr[169] + Yr[21] + Yr[1138],
    lA = Yr[21] + Yr[926],
    vA = Yr[336] + Yr[21] + Yr[380],
    bA = Yr[87] + Yr[42] + Yr[1171],
    yA = Yr[94] + Yr[42] + Yr[1171],
    gA = Yr[197] + Yr[59] + Yr[269] + Yr[1] + Yr[779],
    mA = Yr[354] + Yr[21] + Yr[1132] + Yr[21] + Yr[786],
    xA = Yr[354] + Yr[21] + Yr[382] + Yr[21] + Yr[1162] + Yr[21] + Yr[354],
    EA = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[164],
    pA = Yr[87] + Yr[42] + Yr[1171] + Yr[38] + Yr[162],
    kA = Yr[87] + Yr[42] + Yr[1171] + Yr[13] + Yr[114],
    wA = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[1130],
    TA = Yr[87] + Yr[42] + Yr[1171] + Yr[38] + Yr[194],
    OA = Yr[87] + Yr[42] + Yr[1171] + Yr[38] + Yr[194] + Yr[38] + Yr[353],
    MA = Yr[87] + Yr[42] + Yr[1171] + Yr[13] + Yr[1172],
    SA = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[1132] + Yr[21] + Yr[786],
    jA = Yr[87] + Yr[42] + Yr[1171] + Yr[44] + Yr[780] + Yr[1] + Yr[426],
    IA = Yr[87] + Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    AA = Yr[336] + Yr[21] + Yr[380] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    CA = Yr[87] + Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[422] + Yr[423],
    RA = Yr[87] + Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[1] + Yr[779],
    LA = Yr[94] + Yr[42] + Yr[1171] + Yr[38] + Yr[162],
    PA = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[381],
    DA = Yr[94] + Yr[42] + Yr[1171] + Yr[13] + Yr[114],
    NA = Yr[94] + Yr[42] + Yr[1171] + Yr[38] + Yr[194],
    $A = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[1130] + Yr[21] + Yr[352],
    BA = Yr[94] + Yr[42] + Yr[1171] + Yr[38] + Yr[194] + Yr[38] + Yr[353],
    FA = Yr[94] + Yr[42] + Yr[1171] + Yr[13] + Yr[1172],
    GA = Yr[94] + Yr[42] + Yr[1171] + Yr[13] + Yr[1172] + Yr[38] + Yr[353],
    zA = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[1132] + Yr[21] + Yr[786],
    HA = Yr[94] + Yr[42] + Yr[1171] + Yr[44] + Yr[780] + Yr[1] + Yr[426],
    YA = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[1132] + Yr[21] + Yr[763],
    UA = Yr[94] + Yr[42] + Yr[1171] + Yr[44] + Yr[780] + Yr[255] + Yr[256],
    WA = Yr[94] + Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    qA = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[169] + Yr[21] + Yr[730],
    VA = Yr[94] + Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[422] + Yr[423],
    XA = Yr[94] + Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[1] + Yr[779],
    ZA = Yr[393] + Yr[48] + Yr[1173],
    KA = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[1146],
    JA = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1144] + Yr[21] + Yr[163] + Yr[21] + Yr[352],
    QA = Yr[735],
    tC = Yr[247] + Yr[38] + Yr[261],
    iC = Yr[327] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    nC = Yr[212] + Yr[21] + Yr[735] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    eC = Yr[336] + Yr[21] + Yr[382] + Yr[21] + Yr[169] + Yr[21] + Yr[1138] + Yr[21] + Yr[381],
    sC = Yr[21] + Yr[1174],
    rC = Yr[247] + Yr[38] + Yr[162],
    hC = Yr[26] + Yr[247] + Yr[1] + Yr[308],
    aC = Yr[53] + Yr[65] + Yr[1175],
    oC = Yr[30] + Yr[65] + Yr[1175] + Yr[24] + Yr[25] + Yr[1] + Yr[522],
    fC = Yr[432] + Yr[48] + Yr[1173],
    uC = Yr[432] + Yr[65] + Yr[1175] + Yr[24] + Yr[343],
    cC = Yr[346] + Yr[24] + Yr[343],
    _C = Yr[108] + Yr[65] + Yr[1175],
    dC = Yr[108] + Yr[1] + Yr[308],
    lC = Yr[187] + Yr[1] + Yr[2],
    vC = Yr[26] + Yr[434] + Yr[65] + Yr[1118],
    bC = Yr[26] + Yr[425] + Yr[13] + Yr[114] + Yr[115],
    yC = Yr[26] + Yr[425] + Yr[13] + Yr[114] + Yr[117],
    gC = Yr[26] + Yr[434] + Yr[38] + Yr[776] + Yr[13] + Yr[114] + Yr[117],
    mC = Yr[26] + Yr[425] + Yr[65] + Yr[777],
    xC = Yr[26] + Yr[434] + Yr[38] + Yr[776] + Yr[65] + Yr[777],
    EC = Yr[26] + Yr[247] + Yr[65] + Yr[189],
    pC = Yr[21] + Yr[1176],
    kC = Yr[747] + Yr[1] + Yr[476],
    wC = Yr[26] + Yr[754] + Yr[1] + Yr[426],
    TC = Yr[26] + Yr[754] + Yr[1] + Yr[426] + Yr[65] + Yr[755] + Yr[278] + Yr[294],
    OC = Yr[608] + Yr[21] + Yr[1177] + Yr[21] + Yr[1178],
    MC = Yr[30] + Yr[59] + Yr[180] + Yr[1] + Yr[476],
    SC = Yr[26] + Yr[247] + Yr[38] + Yr[577],
    jC = Yr[21] + Yr[782] + Yr[65] + Yr[189],
    IC = Yr[161] + Yr[278] + Yr[1179] + Yr[65] + Yr[189],
    AC = Yr[26] + Yr[247] + Yr[44] + Yr[780] + Yr[255] + Yr[256],
    CC = Yr[26] + Yr[1142] + Yr[110] + Yr[286],
    RC = Yr[26] + Yr[197] + Yr[198] + Yr[199],
    LC = Yr[26] + Yr[176] + Yr[1] + Yr[426],
    PC = Yr[38] + Yr[577],
    DC = Yr[44] + Yr[780] + Yr[255] + Yr[256],
    NC = Yr[1148] + Yr[21] + Yr[1146],
    $C = Yr[26] + Yr[171] + Yr[44] + Yr[445],
    BC = Yr[26] + Yr[171],
    FC = Yr[26] + Yr[1037],
    GC = Yr[26] + Yr[171] + Yr[38] + Yr[162],
    zC = Yr[26] + Yr[171] + Yr[38] + Yr[353],
    HC = Yr[44] + Yr[1010],
    YC = Yr[26] + Yr[247] + Yr[44] + Yr[1010],
    UC = Yr[163] + Yr[21] + Yr[352],
    WC = Yr[26] + Yr[247] + Yr[44] + Yr[1180] + Yr[42] + Yr[1171],
    qC = Yr[26] + Yr[247] + Yr[110] + Yr[322] + Yr[42] + Yr[1171],
    VC = Yr[26] + Yr[778],
    XC = Yr[1096] + Yr[65] + Yr[189],
    ZC = Yr[187] + Yr[44] + Yr[1180] + Yr[42] + Yr[1171],
    KC = Yr[187] + Yr[110] + Yr[322] + Yr[42] + Yr[1171],
    JC = Yr[26] + Yr[87] + Yr[42] + Yr[1171],
    QC = Yr[26] + Yr[87] + Yr[42] + Yr[1171] + Yr[13] + Yr[114],
    tR = Yr[87] + Yr[42] + Yr[1171] + Yr[48] + Yr[221],
    iR = Yr[26] + Yr[87] + Yr[42] + Yr[1171] + Yr[38] + Yr[162],
    nR = Yr[26] + Yr[87] + Yr[42] + Yr[1171] + Yr[38] + Yr[261],
    eR = Yr[87] + Yr[42] + Yr[1171] + Yr[38] + Yr[1109],
    sR = Yr[87] + Yr[42] + Yr[1171] + Yr[44] + Yr[780] + Yr[255] + Yr[256],
    rR = Yr[255] + Yr[256],
    hR = Yr[26] + Yr[94] + Yr[42] + Yr[1171] + Yr[38] + Yr[261],
    aR = Yr[94] + Yr[42] + Yr[1171] + Yr[48] + Yr[221],
    oR = Yr[26] + Yr[94] + Yr[42] + Yr[1171],
    fR = Yr[94] + Yr[42] + Yr[1171] + Yr[38] + Yr[1109],
    uR = Yr[42] + Yr[1171] + Yr[38] + Yr[194],
    cR = Yr[42] + Yr[1171] + Yr[38] + Yr[194] + Yr[38] + Yr[353],
    _R = Yr[42] + Yr[1171] + Yr[38] + Yr[1109],
    dR = Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[59] + Yr[269],
    lR = Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[59] + Yr[269] + Yr[13] + Yr[114],
    vR = Yr[42] + Yr[1171] + Yr[44] + Yr[780] + Yr[1] + Yr[426],
    bR = Yr[42] + Yr[1171] + Yr[44] + Yr[780] + Yr[255] + Yr[256],
    yR = Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[1] + Yr[779],
    gR = Yr[42] + Yr[1171] + Yr[48] + Yr[270] + Yr[422] + Yr[423],
    mR = Yr[42] + Yr[1171] + Yr[13] + Yr[1172],
    xR = Yr[42] + Yr[1171] + Yr[13] + Yr[1172] + Yr[38] + Yr[353],
    ER = Yr[26] + Yr[176] + Yr[255] + Yr[256],
    pR = Yr[209] + Yr[42] + Yr[1171],
    kR = Yr[44] + Yr[1180] + Yr[42] + Yr[1171],
    wR = Yr[110] + Yr[322] + Yr[42] + Yr[1171],
    TR = Yr[747] + Yr[65] + Yr[189],
    OR = Yr[209] + Yr[28] + Yr[312],
    MR = Yr[1181] + Yr[65] + Yr[1182],
    SR = Yr[3] + Yr[116] + Yr[114],
    jR = Yr[192] + Yr[24] + Yr[1183] + Yr[13] + Yr[1184],
    IR = Yr[3] + Yr[65] + Yr[313] + Yr[48] + Yr[1173],
    AR = Yr[22] + Yr[65] + Yr[313] + Yr[48] + Yr[1173],
    CR = Yr[1185],
    RR = Yr[187] + Yr[24] + Yr[573],
    LR = Yr[1169] + Yr[65] + Yr[313] + Yr[48] + Yr[1173],
    PR = Yr[209] + Yr[104] + Yr[1186] + Yr[48] + Yr[270],
    DR = Yr[707] + Yr[77],
    NR = Yr[354] + Yr[21] + Yr[349] + Yr[21] + Yr[1187],
    $R = Yr[1096] + Yr[38] + Yr[391],
    BR = Yr[21] + Yr[1034] + Yr[205],
    FR = Yr[1144] + Yr[21] + Yr[372],
    GR = Yr[74] + Yr[1188],
    zR = Yr[74] + Yr[1189] + Yr[1190] + Yr[339],
    HR = Yr[74] + Yr[1191] + Yr[28] + Yr[238],
    YR = Yr[454],
    UR = Yr[1192] + Yr[33] + Yr[1193],
    WR = Yr[1194],
    qR = Yr[1195],
    VR = Yr[62] + Yr[28] + Yr[29],
    XR = Yr[196] + Yr[110] + Yr[1196],
    ZR = Yr[837] + Yr[110] + Yr[322] + Yr[48] + Yr[1197],
    KR = Yr[46] + Yr[294],
    JR = Yr[22] + Yr[110] + Yr[132],
    QR = Yr[38] + Yr[261] + Yr[46] + Yr[294],
    tL = Yr[22] + Yr[38] + Yr[261] + Yr[46] + Yr[294],
    iL = Yr[22] + Yr[46] + Yr[294],
    nL = Yr[854] + Yr[122] + Yr[123],
    eL = Yr[1198],
    sL = Yr[429] + Yr[24] + Yr[343],
    rL = Yr[531],
    hL = Yr[30] + Yr[178] + Yr[616] + Yr[28] + Yr[29],
    aL = Yr[1169] + Yr[48] + Yr[1199] + Yr[65] + Yr[189],
    oL = Yr[1200],
    fL = Yr[1201],
    uL = Yr[1202],
    cL = Yr[1181] + Yr[48] + Yr[1203] + Yr[44] + Yr[1180],
    _L = Yr[1204],
    dL = Yr[1181] + Yr[48] + Yr[1203] + Yr[110] + Yr[322],
    lL = Yr[108] + Yr[28] + Yr[157],
    vL = Yr[3] + Yr[59] + Yr[60] + Yr[38] + Yr[353],
    bL = Yr[1205] + Yr[65] + Yr[189],
    yL = Yr[62] + Yr[42] + Yr[43],
    gL = Yr[21] + Yr[1206] + Yr[65] + Yr[189],
    mL = Yr[5] + Yr[48] + Yr[1207],
    xL = Yr[624] + Yr[178] + Yr[193],
    EL = Yr[465] + Yr[38] + Yr[577],
    pL = Yr[21] + Yr[1208],
    kL = Yr[192] + Yr[178] + Yr[257],
    wL = Yr[383] + Yr[110] + Yr[322],
    TL = Yr[321] + Yr[110] + Yr[322] + Yr[1] + Yr[1074],
    OL = Yr[624] + Yr[110] + Yr[322] + Yr[13] + Yr[1209],
    ML = Yr[624] + Yr[42] + Yr[43],
    SL = Yr[1210] + Yr[21] + Yr[1211],
    jL = Yr[624] + Yr[42] + Yr[295],
    IL = Yr[21] + Yr[1212] + Yr[42] + Yr[43],
    AL = Yr[158] + Yr[24] + Yr[1033],
    CL = Yr[1213],
    RL = Yr[1049] + Yr[38] + Yr[1214],
    LL = Yr[1215] + Yr[38] + Yr[1214] + Yr[42] + Yr[759],
    PL = Yr[161] + Yr[48] + Yr[221],
    DL = Yr[192] + Yr[278] + Yr[1216],
    NL = Yr[21] + Yr[1200] + Yr[44] + Yr[1071],
    $L = Yr[108] + Yr[1] + Yr[1217] + Yr[178] + Yr[616],
    BL = Yr[53] + Yr[1] + Yr[1217] + Yr[178] + Yr[616],
    FL = Yr[21] + Yr[1218],
    GL = Yr[1219],
    zL = Yr[1220] + Yr[1022],
    HL = Yr[59] + Yr[1221] + Yr[51] + Yr[28] + Yr[1222] + Yr[220],
    YL = Yr[53] + Yr[38] + Yr[696],
    UL = Yr[38] + Yr[261],
    WL = Yr[30] + Yr[28] + Yr[157] + Yr[1] + Yr[1223],
    qL = Yr[1224] + Yr[21] + Yr[1225],
    VL = Yr[48] + Yr[270],
    XL = Yr[38] + Yr[1109],
    ZL = Yr[22] + Yr[28] + Yr[312],
    KL = Yr[28] + Yr[312],
    JL = Yr[392] + Yr[1226] + Yr[1080],
    QL = Yr[459] + Yr[24] + Yr[343],
    tP = Yr[620] + Yr[28] + Yr[1227],
    iP = Yr[48] + Yr[1173] + Yr[51] + Yr[1] + Yr[1228] + Yr[128] + Yr[295] + Yr[51] + Yr[28] + Yr[268],
    nP = Yr[247] + Yr[28] + Yr[157],
    eP = Yr[459] + Yr[278] + Yr[294],
    sP = Yr[1229] + Yr[28] + Yr[312],
    rP = Yr[1230],
    hP = Yr[1231] + Yr[104] + Yr[1232],
    aP = Yr[1233],
    oP = Yr[500] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    fP = Yr[434] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    uP = Yr[21] + Yr[1205] + Yr[65] + Yr[189],
    cP = Yr[1234] + Yr[21] + Yr[1235],
    _P = Yr[1236] + Yr[104] + Yr[1232],
    dP = Yr[214] + Yr[104] + Yr[1237],
    lP = Yr[1113] + Yr[21] + Yr[1114] + Yr[21] + Yr[213],
    vP = Yr[1113] + Yr[21] + Yr[1114] + Yr[21] + Yr[170],
    bP = Yr[1113] + Yr[21] + Yr[349] + Yr[21] + Yr[711],
    yP = Yr[1113] + Yr[21] + Yr[349] + Yr[21] + Yr[1238],
    gP = Yr[21] + Yr[1239],
    mP = Yr[1239] + Yr[150],
    xP = Yr[1240] + Yr[51] + Yr[238] + Yr[77] + Yr[159] + Yr[612] + Yr[51] + Yr[1241] + Yr[93] + Yr[625],
    EP = Yr[879],
    pP = Yr[77] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[46] + Yr[405] + Yr[51] + Yr[407],
    kP = Yr[1240] + Yr[99] + Yr[205] + Yr[100] + Yr[259] + Yr[93] + Yr[788] + Yr[498] + Yr[69] + Yr[70] + Yr[238] + Yr[414] + Yr[238] + Yr[414] + Yr[238] + Yr[414] + Yr[238] + Yr[77] + Yr[339] + Yr[72],
    wP = Yr[77] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[46] + Yr[405],
    TP = Yr[1240] + Yr[99] + Yr[238] + Yr[100],
    OP = Yr[1242],
    MP = Yr[99] + Yr[1240] + Yr[51] + Yr[302] + Yr[612] + Yr[51] + Yr[1243] + Yr[93] + Yr[740] + Yr[70] + Yr[238] + Yr[77] + Yr[644] + Yr[414] + Yr[238] + Yr[414] + Yr[238] + Yr[77] + Yr[644] + Yr[414] + Yr[205] + Yr[72],
    SP = Yr[77] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[46] + Yr[405] + Yr[99] + Yr[428],
    jP = Yr[1240] + Yr[99] + Yr[205] + Yr[100],
    IP = Yr[99] + Yr[1240] + Yr[51] + Yr[238] + Yr[77] + Yr[302] + Yr[612] + Yr[51] + Yr[790],
    AP = Yr[21] + Yr[407],
    CP = Yr[21] + Yr[1244],
    RP = Yr[21] + Yr[193] + Yr[238] + Yr[160],
    LP = Yr[77] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[38] + Yr[545] + Yr[65] + Yr[1245],
    PP = Yr[1246] + Yr[498] + Yr[159] + Yr[150] + Yr[1247] + Yr[767] + Yr[498] + Yr[1032] + Yr[100] + Yr[1248] + Yr[93] + Yr[1249] + Yr[498] + Yr[249] + Yr[93] + Yr[1248] + Yr[100] + Yr[1248] + Yr[93] + Yr[425] + Yr[1250] + Yr[424] + Yr[51] + Yr[238] + Yr[150] + Yr[51] + Yr[238] + Yr[150] + Yr[51] + Yr[205] + Yr[150] + Yr[1247] + Yr[259] + Yr[93] + Yr[788] + Yr[498] + Yr[69] + Yr[70] + Yr[1251] + Yr[71] + Yr[1251] + Yr[71] + Yr[1251] + Yr[71] + Yr[238] + Yr[77] + Yr[302] + Yr[1252] + Yr[249] + Yr[93] + Yr[496] + Yr[498] + Yr[338] + Yr[150] + Yr[100] + Yr[1246] + Yr[498] + Yr[205] + Yr[150] + Yr[100],
    DP = Yr[77] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[38] + Yr[545] + Yr[65] + Yr[1245] + Yr[77] + Yr[428] + Yr[1253] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[38] + Yr[545] + Yr[65] + Yr[1245] + Yr[99] + Yr[428],
    NP = Yr[1246] + Yr[93] + Yr[83] + Yr[498] + Yr[644] + Yr[150] + Yr[100],
    $P = Yr[1246] + Yr[93] + Yr[84] + Yr[498] + Yr[644] + Yr[150] + Yr[100],
    BP = Yr[77] + Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[38] + Yr[545] + Yr[24] + Yr[413],
    FP = Yr[99] + Yr[1240] + Yr[51] + Yr[302] + Yr[612] + Yr[51] + Yr[1243] + Yr[93] + Yr[740] + Yr[70] + Yr[238] + Yr[77] + Yr[644] + Yr[414] + Yr[238] + Yr[414] + Yr[238] + Yr[77] + Yr[644] + Yr[414] + Yr[205] + Yr[1252],
    GP = Yr[21] + Yr[89] + Yr[59] + Yr[601] + Yr[38] + Yr[692],
    zP = Yr[21] + Yr[489] + Yr[59] + Yr[601] + Yr[38] + Yr[692],
    HP = Yr[403] + Yr[93] + Yr[255] + Yr[404] + Yr[93] + Yr[38] + Yr[545] + Yr[24] + Yr[413],
    YP = Yr[21] + Yr[1034] + Yr[302],
    UP = Yr[399] + Yr[178] + Yr[1254],
    WP = Yr[65] + Yr[1255],
    qP = Yr[1256],
    VP = Yr[1257] + Yr[21] + Yr[1258],
    XP = Yr[1257] + Yr[21] + Yr[349],
    ZP = Yr[1241] + Yr[13] + Yr[469],
    KP = Yr[30] + Yr[42] + Yr[43] + Yr[38] + Yr[446],
    JP = Yr[136] + Yr[275] + Yr[104] + Yr[1079],
    QP = Yr[21] + Yr[87] + Yr[1259],
    tD = Yr[21] + Yr[94] + Yr[1259],
    iD = Yr[21] + Yr[87] + Yr[1260],
    nD = Yr[21] + Yr[87] + Yr[38] + Yr[577],
    eD = Yr[21] + Yr[94] + Yr[38] + Yr[577],
    sD = Yr[1261],
    rD = Yr[758] + Yr[110] + Yr[276],
    hD = Yr[1262] + Yr[110] + Yr[286],
    aD = Yr[21] + Yr[94] + Yr[1260],
    oD = Yr[1263] + Yr[21] + Yr[1145] + Yr[21] + Yr[1264] + Yr[21] + Yr[164] + Yr[21] + Yr[1265],
    fD = Yr[1077],
    uD = Yr[21] + Yr[1266] + Yr[178] + Yr[160],
    cD = Yr[108] + Yr[59] + Yr[1267],
    _D = Yr[1125] + Yr[59] + Yr[1268],
    dD = Yr[1269],
    lD = Yr[59] + Yr[1267] + Yr[178] + Yr[616],
    vD = Yr[1270],
    bD = Yr[3] + Yr[59] + Yr[60] + Yr[59] + Yr[1268] + Yr[38] + Yr[1109],
    yD = Yr[59] + Yr[1268] + Yr[24] + Yr[266] + Yr[178] + Yr[616],
    gD = Yr[620],
    mD = Yr[771] + Yr[21] + Yr[1271] + Yr[21] + Yr[382],
    xD = Yr[22] + Yr[28] + Yr[312] + Yr[65] + Yr[86] + Yr[178] + Yr[616],
    ED = Yr[94] + Yr[48] + Yr[1061] + Yr[24] + Yr[148],
    pD = Yr[21] + Yr[1272],
    kD = Yr[462] + Yr[24] + Yr[148],
    wD = Yr[1273],
    TD = Yr[1274],
    OD = Yr[1] + Yr[1275] + Yr[28] + Yr[312] + Yr[178] + Yr[616],
    MD = Yr[1276],
    SD = Yr[22] + Yr[38] + Yr[261] + Yr[65] + Yr[86] + Yr[178] + Yr[616],
    jD = Yr[22] + Yr[48] + Yr[270] + Yr[65] + Yr[86] + Yr[178] + Yr[616],
    ID = Yr[28] + Yr[312] + Yr[608],
    AD = Yr[1277],
    CD = Yr[403] + Yr[93] + Yr[48] + Yr[1173] + Yr[28] + Yr[1278],
    RD = Yr[1279] + Yr[1280] + Yr[1281] + Yr[28] + Yr[51] + Yr[205] + Yr[150],
    LD = Yr[339] + Yr[150],
    PD = Yr[1248] + Yr[38] + Yr[776],
    DD = Yr[1282],
    ND = Yr[1283],
    $D = Yr[30] + Yr[33] + Yr[34] + Yr[1] + Yr[522],
    BD = Yr[1284],
    FD = Yr[1285],
    GD = Yr[62] + Yr[28] + Yr[1227],
    zD = Yr[1144] + Yr[21] + Yr[1286] + Yr[21] + Yr[1287] + Yr[21] + Yr[1288] + Yr[21] + Yr[1289] + Yr[21] + Yr[1290],
    HD = Yr[64] + Yr[28] + Yr[1227],
    YD = Yr[22] + Yr[1022],
    UD = Yr[62] + Yr[28] + Yr[1227] + Yr[198] + Yr[1291] + Yr[1] + Yr[568] + Yr[13] + Yr[193] + Yr[198] + Yr[1026],
    WD = Yr[30] + Yr[1] + Yr[568] + Yr[13] + Yr[193] + Yr[198] + Yr[1026],
    qD = Yr[192] + Yr[28] + Yr[1292],
    VD = Yr[870] + Yr[28] + Yr[1278],
    XD = Yr[1293],
    ZD = Yr[192] + Yr[28] + Yr[1294],
    KD = Yr[620] + Yr[48] + Yr[1173] + Yr[28] + Yr[1227],
    JD = Yr[0] + Yr[28] + Yr[312] + Yr[65] + Yr[313],
    QD = Yr[1049] + Yr[28] + Yr[1295],
    tN = Yr[354] + Yr[21] + Yr[1152],
    iN = Yr[1296] + Yr[38] + Yr[400] + Yr[46] + Yr[401],
    nN = Yr[399] + Yr[59] + Yr[1297] + Yr[1] + Yr[568] + Yr[110] + Yr[322] + Yr[13] + Yr[1209],
    eN = Yr[1298] + Yr[38] + Yr[577],
    sN = Yr[28] + Yr[1227] + Yr[178] + Yr[616],
    rN = Yr[1299] + Yr[178] + Yr[179],
    hN = Yr[1300],
    aN = Yr[1299] + Yr[51] + Yr[219] + Yr[220],
    oN = Yr[51] + Yr[85] + Yr[51],
    fN = Yr[581] + Yr[28] + Yr[1222],
    uN = Yr[462] + Yr[59] + Yr[1301] + Yr[28] + Yr[157],
    cN = Yr[1224] + Yr[21] + Yr[772] + Yr[21] + Yr[1302],
    _N = Yr[1224] + Yr[21] + Yr[1303],
    dN = Yr[321] + Yr[28] + Yr[1222],
    lN = Yr[1102] + Yr[198] + Yr[1304],
    vN = Yr[1305],
    bN = Yr[1306] + Yr[21] + Yr[1307],
    yN = Yr[21] + Yr[1308] + Yr[24] + Yr[25] + Yr[1] + Yr[522] + Yr[48] + Yr[1309],
    gN = Yr[196] + Yr[24] + Yr[25] + Yr[1] + Yr[522] + Yr[59] + Yr[523],
    mN = Yr[21] + Yr[1310],
    xN = Yr[21] + Yr[1311] + Yr[24] + Yr[1312],
    EN = Yr[209] + Yr[48] + Yr[270] + Yr[178] + Yr[160],
    pN = Yr[192] + Yr[28] + Yr[379] + Yr[24] + Yr[148] + Yr[28] + Yr[1294],
    kN = Yr[192] + Yr[44] + Yr[1180],
    wN = Yr[192] + Yr[1] + Yr[1313] + Yr[24] + Yr[148],
    TN = Yr[192] + Yr[28] + Yr[379] + Yr[24] + Yr[148],
    ON = Yr[74] + Yr[1314],
    MN = Yr[209] + Yr[24] + Yr[148],
    SN = Yr[21] + Yr[1315] + Yr[28] + Yr[1227],
    jN = Yr[21] + Yr[1316],
    IN = Yr[53] + Yr[24] + Yr[266] + Yr[38] + Yr[775] + Yr[65] + Yr[86] + Yr[178] + Yr[274],
    AN = Yr[192] + Yr[104] + Yr[1317],
    CN = Yr[499] + Yr[24] + Yr[573],
    RN = Yr[482] + Yr[38] + Yr[775],
    LN = Yr[376] + Yr[21] + Yr[772] + Yr[21] + Yr[1302],
    PN = Yr[1159],
    DN = Yr[1318],
    NN = Yr[376] + Yr[21] + Yr[1303],
    $N = Yr[499] + Yr[46] + Yr[132] + Yr[24] + Yr[573],
    BN = Yr[376] + Yr[21] + Yr[772] + Yr[21] + Yr[1307],
    FN = Yr[733] + Yr[21] + Yr[1319] + Yr[21] + Yr[1130] + Yr[21] + Yr[786],
    GN = Yr[733] + Yr[21] + Yr[1319] + Yr[21] + Yr[1132] + Yr[21] + Yr[786],
    zN = Yr[1319] + Yr[21] + Yr[733] + Yr[21] + Yr[226] + Yr[21] + Yr[1320],
    HN = Yr[1321],
    YN = Yr[1319] + Yr[21] + Yr[733] + Yr[21] + Yr[226] + Yr[21] + Yr[1322],
    UN = Yr[1323],
    WN = Yr[21] + Yr[1009],
    qN = Yr[1324] + Yr[21] + Yr[1302],
    VN = Yr[21] + Yr[832] + Yr[110] + Yr[458],
    XN = Yr[733] + Yr[21] + Yr[1319] + Yr[21] + Yr[1130],
    ZN = Yr[1325] + Yr[38] + Yr[696] + Yr[278] + Yr[294],
    KN = Yr[283] + Yr[28] + Yr[284] + Yr[33] + Yr[436] + Yr[608],
    JN = Yr[1319] + Yr[21] + Yr[733] + Yr[21] + Yr[226],
    QN = Yr[21] + Yr[938] + Yr[178] + Yr[160],
    t$ = Yr[53] + Yr[59] + Yr[1267],
    i$ = Yr[399] + Yr[104] + Yr[1326] + Yr[38] + Yr[696] + Yr[65] + Yr[86] + Yr[104] + Yr[1327] + Yr[65] + Yr[406],
    n$ = Yr[1328],
    e$ = Yr[1329],
    s$ = Yr[21] + Yr[193] + Yr[238] + Yr[640],
    r$ = Yr[21] + Yr[202] + Yr[24] + Yr[148],
    h$ = Yr[1330] + Yr[93] + Yr[454],
    a$ = Yr[495] + Yr[21] + Yr[363],
    o$ = Yr[1331] + Yr[93] + Yr[454],
    f$ = Yr[1332] + Yr[93] + Yr[454],
    u$ = Yr[69] + Yr[70] + Yr[238] + Yr[414] + Yr[1333] + Yr[414] + Yr[238] + Yr[414] + Yr[205] + Yr[72],
    c$ = Yr[74] + Yr[1334] + Yr[238],
    _$ = Yr[21] + Yr[1335],
    d$ = Yr[192] + Yr[104] + Yr[1336],
    l$ = Yr[21] + Yr[1035] + Yr[205],
    v$ = Yr[21] + Yr[193] + Yr[1281],
    b$ = Yr[1337],
    y$ = Yr[1338],
    g$ = Yr[1339] + Yr[21] + Yr[1307],
    m$ = Yr[1324],
    x$ = Yr[192] + Yr[38] + Yr[1340],
    E$ = Yr[161] + Yr[38] + Yr[696],
    p$ = Yr[291] + Yr[110] + Yr[322] + Yr[110] + Yr[1165],
    k$ = Yr[1341] + Yr[42] + Yr[759],
    w$ = Yr[1342] + Yr[21] + Yr[1343],
    T$ = Yr[1342] + Yr[21] + Yr[535],
    O$ = Yr[1344] + Yr[21] + Yr[1345],
    M$ = Yr[403] + Yr[93] + Yr[110] + Yr[1346],
    S$ = Yr[1347] + Yr[21] + Yr[381] + Yr[21] + Yr[115],
    j$ = Yr[1347] + Yr[21] + Yr[381] + Yr[21] + Yr[117],
    I$ = Yr[74] + Yr[1348],
    A$ = Yr[205] + Yr[150] + Yr[51] + Yr[1279] + Yr[1280] + Yr[59] + Yr[263] + Yr[59] + Yr[263] + Yr[59] + Yr[263],
    C$ = Yr[159] + Yr[150] + Yr[51] + Yr[338] + Yr[150],
    R$ = Yr[3] + Yr[178] + Yr[1349],
    L$ = Yr[1350],
    P$ = Yr[250],
    D$ = Yr[192] + Yr[38] + Yr[1351],
    N$ = Yr[1352] + Yr[1353] + Yr[1354],
    $$ = Yr[3] + Yr[110] + Yr[1346] + Yr[28] + Yr[157],
    B$ = Yr[172] + Yr[1] + Yr[1355],
    F$ = Yr[21] + Yr[1356],
    G$ = Yr[1025],
    z$ = Yr[21] + Yr[193] + Yr[1357],
    H$ = Yr[1192],
    Y$ = Yr[161] + Yr[110] + Yr[1346],
    U$ = Yr[620] + Yr[110] + Yr[458],
    W$ = Yr[62] + Yr[110] + Yr[458],
    q$ = Yr[399] + Yr[110] + Yr[1346],
    V$ = Yr[3] + Yr[110] + Yr[1346],
    X$ = Yr[1090] + Yr[110] + Yr[286],
    Z$ = Yr[1090] + Yr[59] + Yr[588],
    K$ = Yr[1090] + Yr[59] + Yr[1358],
    J$ = Yr[275] + Yr[42] + Yr[456],
    Q$ = Yr[624] + Yr[65] + Yr[86] + Yr[278] + Yr[544] + Yr[28] + Yr[29],
    tB = Yr[1077] + Yr[77] + Yr[321] + Yr[77] + Yr[620],
    iB = Yr[1077] + Yr[77] + Yr[1359],
    nB = Yr[1224] + Yr[21] + Yr[772] + Yr[21] + Yr[1307],
    eB = Yr[1077] + Yr[77] + Yr[321] + Yr[77] + Yr[1009],
    sB = Yr[1077] + Yr[77] + Yr[1360],
    rB = Yr[1224] + Yr[21] + Yr[1361],
    hB = Yr[1077] + Yr[77] + Yr[1362],
    aB = Yr[1159] + Yr[77] + Yr[321] + Yr[77] + Yr[620],
    oB = Yr[1159] + Yr[77] + Yr[1359],
    fB = Yr[1159] + Yr[77] + Yr[321] + Yr[77] + Yr[1009],
    uB = Yr[454] + Yr[77] + Yr[620],
    cB = Yr[1363],
    _B = Yr[454] + Yr[77] + Yr[1009],
    dB = Yr[1364],
    lB = Yr[1145] + Yr[21] + Yr[1307],
    vB = Yr[202] + Yr[77] + Yr[1009],
    bB = Yr[1306] + Yr[21] + Yr[1302],
    yB = Yr[1212] + Yr[77] + Yr[620],
    gB = Yr[1212] + Yr[77] + Yr[1009],
    mB = Yr[1115] + Yr[77] + Yr[1081],
    xB = Yr[392] + Yr[77] + Yr[393],
    EB = Yr[1341],
    pB = Yr[1341] + Yr[77] + Yr[620],
    kB = Yr[1341] + Yr[77] + Yr[1365],
    wB = Yr[1324] + Yr[21] + Yr[1307],
    TB = Yr[1341] + Yr[77] + Yr[1009],
    OB = Yr[558] + Yr[21] + Yr[536],
    MB = Yr[564] + Yr[77] + Yr[549],
    SB = Yr[21] + Yr[459] + Yr[38] + Yr[692],
    jB = Yr[21] + Yr[30] + Yr[28] + Yr[157] + Yr[104] + Yr[609],
    IB = Yr[21] + Yr[1366] + Yr[178] + Yr[616],
    AB = Yr[21] + Yr[1367] + Yr[1] + Yr[1217] + Yr[178] + Yr[616] + Yr[48] + Yr[508],
    CB = Yr[21] + Yr[526] + Yr[302] + Yr[1] + Yr[1217] + Yr[178] + Yr[616] + Yr[48] + Yr[508],
    RB = Yr[462] + Yr[178] + Yr[616] + Yr[278] + Yr[294],
    LB = Yr[21] + Yr[561] + Yr[278] + Yr[294],
    PB = Yr[3] + Yr[178] + Yr[616] + Yr[178] + Yr[1368],
    DB = Yr[1369],
    NB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1370],
    $B = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[733],
    BB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1371],
    FB = Yr[1372],
    GB = Yr[1373],
    zB = Yr[22] + Yr[77] + Yr[1374] + Yr[77] + Yr[392],
    HB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1375] + Yr[21] + Yr[354],
    YB = Yr[22] + Yr[77] + Yr[392],
    UB = Yr[22] + Yr[77] + Yr[1131],
    WB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1375] + Yr[21] + Yr[169],
    qB = Yr[22] + Yr[77] + Yr[197],
    VB = Yr[326] + Yr[178] + Yr[614],
    XB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1376],
    ZB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1375] + Yr[21] + Yr[1377] + Yr[21] + Yr[354],
    KB = Yr[1263] + Yr[21] + Yr[226] + Yr[21] + Yr[1375] + Yr[21] + Yr[327],
    JB = Yr[24] + Yr[1228] + Yr[178] + Yr[616],
    QB = Yr[38] + Yr[696] + Yr[178] + Yr[616],
    tF = Yr[278] + Yr[1378] + Yr[178] + Yr[616],
    iF = Yr[198] + Yr[1379] + Yr[646] + Yr[1380] + Yr[178] + Yr[616],
    nF = Yr[59] + Yr[1297] + Yr[1] + Yr[568] + Yr[178] + Yr[616],
    eF = Yr[28] + Yr[1381] + Yr[178] + Yr[616],
    sF = Yr[110] + Yr[1346] + Yr[178] + Yr[616],
    rF = Yr[104] + Yr[1326] + Yr[38] + Yr[696] + Yr[178] + Yr[616],
    hF = Yr[104] + Yr[1326] + Yr[38] + Yr[696] + Yr[178] + Yr[616] + Yr[65] + Yr[86] + Yr[104] + Yr[1327] + Yr[65] + Yr[406],
    aF = Yr[24] + Yr[573] + Yr[178] + Yr[616],
    oF = Yr[3] + Yr[606] + Yr[189],
    fF = Yr[1382],
    uF = Yr[1383],
    cF = Yr[484],
    _F = Yr[1136] + Yr[42] + Yr[1384],
    dF = Yr[1192] + Yr[48] + Yr[1385],
    lF = Yr[1386] + Yr[21] + Yr[362],
    vF = Yr[1386] + Yr[21] + Yr[495],
    bF = Yr[1386] + Yr[21] + Yr[364],
    yF = Yr[1386] + Yr[21] + Yr[363],
    gF = Yr[1386] + Yr[21] + Yr[494],
    mF = Yr[1386] + Yr[21] + Yr[366] + Yr[21] + Yr[364],
    xF = Yr[1386] + Yr[21] + Yr[362] + Yr[21] + Yr[363],
    EF = Yr[1386] + Yr[21] + Yr[362] + Yr[21] + Yr[364],
    pF = Yr[1386] + Yr[21] + Yr[364] + Yr[21] + Yr[362],
    kF = Yr[1386] + Yr[21] + Yr[364] + Yr[21] + Yr[366],
    wF = Yr[1386] + Yr[21] + Yr[363] + Yr[21] + Yr[362],
    TF = Yr[1386] + Yr[21] + Yr[363] + Yr[21] + Yr[366],
    OF = Yr[1387],
    MF = Yr[1388] + Yr[77] + Yr[1389],
    SF = Yr[1387] + Yr[77] + Yr[640],
    jF = Yr[1387] + Yr[77] + Yr[1070],
    IF = Yr[1167] + Yr[21] + Yr[349] + Yr[21] + Yr[1390],
    AF = Yr[1167] + Yr[21] + Yr[349] + Yr[21] + Yr[1390] + Yr[21] + Yr[359],
    CF = Yr[1167] + Yr[21] + Yr[349] + Yr[21] + Yr[1391] + Yr[21] + Yr[1392],
    RF = Yr[32] + Yr[38] + Yr[162],
    LF = Yr[3] + Yr[46] + Yr[294] + Yr[38] + Yr[162],
    PF = Yr[3] + Yr[1393] + Yr[779],
    DF = Yr[3] + Yr[1394] + Yr[779],
    NF = Yr[3] + Yr[48] + Yr[341] + Yr[110] + Yr[286],
    $F = Yr[310] + Yr[1] + Yr[2] + Yr[59] + Yr[1395],
    BF = Yr[640] + Yr[255] + Yr[779],
    FF = Yr[1070] + Yr[255] + Yr[779],
    GF = Yr[245] + Yr[110] + Yr[286],
    zF = Yr[21] + Yr[193] + Yr[238] + Yr[634],
    HF = Yr[21] + Yr[1396],
    YF = Yr[1125] + Yr[48] + Yr[341],
    UF = Yr[310] + Yr[65] + Yr[189],
    WF = Yr[21] + Yr[1397],
    qF = Yr[21] + Yr[193] + Yr[238] + Yr[246] + Yr[48] + Yr[221],
    VF = Yr[21] + Yr[14] + Yr[339],
    XF = Yr[242] + Yr[1398],
    ZF = Yr[242] + Yr[1399],
    KF = Yr[21] + Yr[1400] + Yr[24] + Yr[516] + Yr[1] + Yr[2] + Yr[59] + Yr[1395],
    JF = Yr[484] + Yr[117],
    QF = Yr[484] + Yr[115],
    tG = Yr[21] + Yr[1401],
    iG = Yr[21] + Yr[1402],
    nG = Yr[21] + Yr[1403],
    eG = Yr[462] + Yr[278] + Yr[1404] + Yr[46] + Yr[1103],
    sG = Yr[245] + Yr[59] + Yr[480],
    rG = Yr[247] + Yr[48] + Yr[341] + Yr[59] + Yr[480],
    hG = Yr[1405],
    aG = Yr[62],
    oG = Yr[3] + Yr[278] + Yr[1406] + Yr[178] + Yr[1407],
    fG = Yr[484] + Yr[1] + Yr[318],
    uG = Yr[392] + Yr[1] + Yr[318],
    cG = Yr[1408],
    _G = Yr[137] + Yr[38] + Yr[689],
    dG = Yr[1298] + Yr[48] + Yr[341] + Yr[59] + Yr[480],
    lG = Yr[1409],
    vG = Yr[192] + Yr[104] + Yr[1410],
    bG = Yr[21] + Yr[1411],
    yG = Yr[620] + Yr[42] + Yr[1412],
    gG = Yr[1413],
    mG = Yr[1414],
    xG = Yr[215],
    EG = Yr[1415],
    pG = Yr[1416] + Yr[21] + Yr[1417] + Yr[21] + Yr[1418],
    kG = Yr[372] + Yr[21] + Yr[226] + Yr[21] + Yr[1419],
    wG = Yr[372] + Yr[21] + Yr[226] + Yr[21] + Yr[1420],
    TG = Yr[3] + Yr[255] + Yr[779],
    OG = Yr[1421],
    MG = Yr[496] + Yr[278] + Yr[294],
    SG = Yr[484] + Yr[159],
    jG = Yr[354] + Yr[21] + Yr[1152] + Yr[21] + Yr[1116],
    IG = Yr[484] + Yr[205],
    AG = Yr[21] + Yr[524] + Yr[65] + Yr[1422] + Yr[44] + Yr[258],
    CG = Yr[21] + Yr[1054] + Yr[178] + Yr[193] + Yr[65] + Yr[313],
    RG = Yr[1423] + Yr[178] + Yr[1424],
    LG = Yr[1425],
    PG = Yr[1426],
    DG = Yr[1427] + Yr[115],
    NG = Yr[1427],
    $G = Yr[1427] + Yr[117],
    BG = Yr[192] + Yr[178] + Yr[1428],
    FG = Yr[1298],
    GG = Yr[1114] + Yr[21] + Yr[367],
    zG = Yr[1429],
    HG = Yr[1430],
    YG = Yr[245] + Yr[278] + Yr[1431],
    UG = Yr[245] + Yr[28] + Yr[1432],
    WG = Yr[1433],
    qG = Yr[21] + Yr[1434] + Yr[44] + Yr[1435],
    VG = Yr[1409] + Yr[42] + Yr[344],
    XG = Yr[1436],
    ZG = Yr[465] + Yr[28] + Yr[466],
    KG = Yr[462] + Yr[28] + Yr[466],
    JG = Yr[38] + Yr[1437] + Yr[48] + Yr[1438],
    QG = Yr[1439],
    tz = Yr[499] + Yr[48] + Yr[1385],
    iz = Yr[21] + Yr[193] + Yr[238] + Yr[1384],
    nz = Yr[21] + Yr[654] + Yr[339] + Yr[110] + Yr[286],
    ez = Yr[21] + Yr[1440],
    sz = Yr[283] + Yr[28] + Yr[284] + Yr[178] + Yr[193] + Yr[28] + Yr[312],
    rz = Yr[319] + Yr[51] + Yr[131],
    hz = Yr[283] + Yr[28] + Yr[284] + Yr[65] + Yr[86] + Yr[110] + Yr[1441] + Yr[59] + Yr[1442] + Yr[44] + Yr[1443] + Yr[38] + Yr[1444],
    az = Yr[283] + Yr[28] + Yr[284] + Yr[65] + Yr[86] + Yr[110] + Yr[1441] + Yr[65] + Yr[1445] + Yr[44] + Yr[1443] + Yr[38] + Yr[1444],
    oz = Yr[21] + Yr[87],
    fz = Yr[94] + Yr[1] + Yr[426],
    uz = Yr[192] + Yr[1446],
    cz = Yr[192] + Yr[13] + Yr[1447],
    _z = Yr[192] + Yr[198] + Yr[1448],
    dz = Yr[192] + Yr[255] + Yr[1449],
    lz = Yr[192] + Yr[44] + Yr[1450],
    vz = Yr[192] + Yr[38] + Yr[1451],
    bz = Yr[192] + Yr[1] + Yr[1452],
    yz = Yr[192] + Yr[278] + Yr[1453],
    gz = Yr[59] + Yr[1454],
    mz = Yr[1] + Yr[1455],
    xz = Yr[255] + Yr[1456],
    Ez = Yr[65] + Yr[97] + Yr[608],
    pz = Yr[28] + Yr[157] + Yr[608],
    kz = Yr[46] + Yr[294] + Yr[608],
    wz = Yr[48] + Yr[1173] + Yr[608],
    Tz = Yr[178] + Yr[179] + Yr[608],
    Oz = Yr[38] + Yr[1457],
    Mz = Yr[255] + Yr[404] + Yr[278] + Yr[435],
    Sz = Yr[28] + Yr[312] + Yr[65] + Yr[313],
    jz = Yr[110] + Yr[1458] + Yr[48] + Yr[1438],
    Iz = Yr[283] + Yr[51] + Yr[1022] + Yr[339],
    Az = Yr[159] + Yr[77] + Yr[238],
    Cz = Yr[159] + Yr[77] + Yr[235] + Yr[77] + Yr[205] + Yr[77] + Yr[611],
    Rz = Yr[403] + Yr[1459] + Yr[220] + Yr[59] + Yr[1460] + Yr[51] + Yr[1] + Yr[1461] + Yr[51] + Yr[283] + Yr[51] + Yr[1022] + Yr[339] + Yr[439] + Yr[1] + Yr[304],
    Lz = Yr[611] + Yr[439] + Yr[235] + Yr[439] + Yr[1462],
    Pz = 0;
    if (t[$d]) {
        var Dz = navigator.userAgent,
        Nz = /opera/i.test(Dz),
        $z = !Nz && /msie/i.test(Dz),
        Bz = /rv:11.0/i[Go](Dz),
        Fz = /MSIE 10./i[Go](Dz);
        if (Bz && ($z = !0), /msie\s[6,7,8]/i.test(Dz)) throw new Error("your browser is not supported");
        var Gz = /webkit|khtml/i[Go](Dz),
        zz = !Gz && /gecko/i[Go](Dz),
        Hz = /firefox\//i[Go](Dz),
        Yz = /Chrome\//i[Go](Dz),
        Uz = !Yz && /Safari\//i[Go](Dz),
        Wz = /Macintosh;/i[Go](Dz),
        qz = /(iPad|iPhone|iPod)/g[Go](Dz),
        Vz = /Android/g[Go](Dz),
        Xz = /Windows Phone/g[Go](Dz),
        Zz = (qz || Vz || Xz) && x_ in t,
        Kz = Dz[v_](/AppleWebKit\/([0-9\.]*)/);
        if (Kz && Kz[qr] > 1) {
            parseFloat(Kz[1])
        }
        Vz && parseFloat(Dz[v_](/Android\s([0-9\.]*)/)[1])
    }
    t[xh] || (t[xh] = t.webkitRequestAnimationFrame || t[Bd] || t[Fd] || t[Gd] ||
    function (i) {
        return t[zd](function () {
            i()
        },
        1e3 / 60)
    }),
    t[Hd] || (t[Hd] = t[Yd] || t[Ud] || t.oCancelAnimationFrame || t[Wd] ||
    function (i) {
        return t[qd](i)
    });
    var Jz = {
        SELECTION_TOLERANCE: Zz ? 5 : 2,
        LABEL_COLOR: Vd
    };
    K(Jz, {
        FONT_STYLE: {
            get: function () {
                return this[Xd] || (this._fontStyle = Zd)
            },
            set: function (t) {
                this[Xd] != t && (this._fontStyle = t, this[Kd] = !0)
            }
        },
        FONT_SIZE: {
            get: function () {
                return this[Jd] || (this._fontSize = 12)
            },
            set: function (t) {
                this._fontSize != t && (this[Jd] = t, this[Kd] = !0)
            }
        },
        FONT_FAMILY: {
            get: function () {
                return this[Qd] || (this[Qd] = "Verdana,helvetica,arial,sans-serif")
            },
            set: function (t) {
                this[Qd] != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        },
        FONT: {
            get: function () {
                return (this[Kd] || this._fontChanged === n) && (this[Kd] = !1, this[tl] = this.FONT_STYLE + wh + this[Qa] + to + this[io]),
                this[tl]
            }
        }
    });
    var Qz = function (t) {
        this._j7 = [],
        this._m0 = {},
        t && this.add(t)
    };
    Qz[sh] = {
        _j7: null,
        _m0: null,
        get: function (t) {
            return this[il](t)
        },
        getById: function (t) {
            return this._m0[t]
        },
        getByIndex: function (t) {
            return this._j7[t]
        },
        forEach: function (t, i, n) {
            return l(this._j7, t, i, n)
        },
        forEachReverse: function (t, i, n) {
            return b(this._j7, t, i, n)
        },
        size: function () {
            return this._j7.length
        },
        contains: function (t) {
            return this[nl](t.id)
        },
        containsById: function (t) {
            return this._m0.hasOwnProperty(t)
        },
        setIndex: function (t, i) {
            var n = this._j7[ih](t);
            if (0 > n) throw new Error(ja + t.id + el);
            return n == i ? !1 : (this._j7.splice(n, 1), this._j7[Zr](i, 0, t), !0)
        },
        setIndexAfter: function (t, i) {
            var n = this._j7[ih](t);
            if (0 > n) throw new Error(ja + t.id + el);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._j7[Zr](n, 1), this._j7[Zr](i, 0, t), i)
        },
        setIndexBefore: function (t, i) {
            var n = this._j7[ih](t);
            if (0 > n) throw new Error(ja + t.id + el);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._j7.splice(n, 1), this._j7[Zr](i, 0, t), i)
        },
        indexOf: function (t) {
            return this._j7[ih](t)
        },
        getIndexById: function (t) {
            var i = this.getById(t);
            return i ? this._j7[ih](i) : -1
        },
        add: function (t, i) {
            return B(t) ? this._gd(t, i) : this._kg(t, i)
        },
        addFirst: function (t) {
            return this.add(t, 0)
        },
        _gd: function (t, i) {
            if (0 == t[qr]) return !1;
            var e = !1,
            s = i >= 0;
            t = t._j7 || t;
            for (var r = 0,
            h = t[qr]; h > r; r++) {
                var a = t[r];
                null !== a && a !== n && this._kg(a, i, !0) && (e = !0, s && i++)
            }
            return e
        },
        _kg: function (t, i) {
            var e = t.id;
            return e === n || this.containsById(e) ? !1 : (g(this._j7, t, i), this._m0[e] = t, t)
        },
        remove: function (t) {
            return B(t) ? this[sl](t) : t.id ? this._gi(t.id, t) : this[rl](t)
        },
        _myc: function (t) {
            if (0 == t.length) return !1;
            var i = !1;
            t = t._j7 || t;
            for (var e = 0,
            s = t.length; s > e; e++) {
                var r = t[e];
                if (null !== r && r !== n) {
                    r.id === n && (r = this._m0[r]);
                    var h = r.id;
                    this._gi(h, r, !0) && (i = !0)
                }
            }
            return i
        },
        _gi: function (t, i) {
            return t !== n && this[nl](t) ? ((null === i || i === n) && (i = this[hl](t)), delete this._m0[t], m(this._j7, i), !0) : !1
        },
        removeById: function (t) {
            var i = this._m0[t];
            return i ? this._gi(t, i) : !1
        },
        set: function (t) {
            if (!t || 0 == t) return void this[Ha]();
            if (this[Hf]() || !B(t)) return this.clear(),
            this.add(t);
            var i = [],
            n = {},
            e = 0;
            if (l(t,
            function (t) {
                this._m0[t.id] ? (n[t.id] = t, e++) : i[th](t)
            },
            this), e != this[qr]) {
                var s = [];
                this.forEach(function (t) {
                    n[t.id] || s[th](t)
                },
                this),
                s.length && this._myc(s)
            }
            return i[qr] && this._gd(i),
            !0
        },
        clear: function () {
            return this.isEmpty() ? !1 : (this._j7[qr] = 0, this._m0 = {},
            !0)
        },
        toDatas: function () {
            return this._j7.slice(0)
        },
        isEmpty: function () {
            return 0 == this._j7.length
        },
        valueOf: function () {
            return this._j7[qr]
        },
        clone: function (t) {
            var i = new Qz;
            return i.add(t ? y(this._j7) : this[al]()),
            i
        }
    },
    K(Qz[sh], {
        datas: {
            get: function () {
                return this._j7
            }
        },
        random: {
            get: function () {
                return this._j7 && this._j7[qr] ? this._j7[H(this._j7[qr])] : null
            }
        },
        length: {
            get: function () {
                return this._j7 ? this._j7[qr] : 0
            }
        }
    });
    var tH = (2 * Math.PI, .5 * Math.PI),
    iH = function (t, i) {
        i = i.toUpperCase();
        for (var n = $z ? t.firstChild : t[ol]; n && (1 != n.nodeType || n[fl] && n[fl].toUpperCase() != i); ) n = $z ? n[ul] : n.nextElementSibling;
        return n && 1 == n[cl] && n[fl] && n[fl][ra]() == i ? n : null
    },
    nH = function (t, i, n) {
        t instanceof nH && (i = t.y, t = t.x, n = t[Ao]),
        this.set(t, i, n)
    },
    eH = function (t, i, n, e) {
        var s = t - n,
        r = i - e;
        return Math.sqrt(s * s + r * r)
    };
    nH[sh] = {
        x: 0,
        y: 0,
        rotate: n,
        set: function (t, i, n) {
            this.x = t || 0,
            this.y = i || 0,
            this[Ao] = n || 0
        },
        negate: function () {
            this.x = -this.x,
            this.y = -this.y
        },
        offset: function (t, i) {
            this.x += t,
            this.y += i
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function (t) {
            return eH(this.x, this.y, t.x, t.y)
        },
        toString: function () {
            return _l + this.x + dl + this.y + Bh
        },
        clone: function () {
            return new nH(this.x, this.y)
        }
    },
    Object.defineProperty(nH[sh], ll, {
        get: function () {
            return Math[lo](this.x * this.x + this.y * this.y)
        }
    });
    var sH = function (t, i, e, s) {
        t !== n && this._mm(t, i, e, s)
    };
    sH[sh] = {
        _mr: null,
        _mw: null,
        _mu: null,
        _ms: null,
        _n0: null,
        _my: null,
        _mx: 1,
        _mm: function (t, i, n, e) {
            this._mr = t,
            this._mw = i,
            this._mu = n,
            this._ms = e,
            t == n ? (this._n0 = -1, this._mx = 0, this._my = t) : (this._n0 = (i - e) / (t - n), this._my = i - this._n0 * t, this._mx = 1),
            this._km = Math[vo](this._ms - this._mw, this._mu - this._mr),
            this._mxos = Math.cos(this._km),
            this._sin = Math.sin(this._km)
        },
        _mx4: function (t) {
            return 0 == this._mx ? Number.NaN : this._n0 * t + this._my
        },
        _mx3: function (t) {
            return 0 == this._n0 ? Number.NaN : (t - this._my) / this._n0
        },
        _$h: function (t) {
            var i, n, e, s, r, h = t[0],
            a = t[2],
            o = t[4],
            f = t[1],
            u = t[3],
            c = t[5],
            _ = this._n0,
            d = this._my,
            l = this._mx;
            if (0 == l ? (e = Math[lo]((-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -_ * a + _ * h, r = _ * o - 2 * _ * a + _ * h) : (e = Math.sqrt((-f + _ * h + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -u + f + _ * a - _ * h, r = c - 2 * u + f - _ * o + 2 * _ * a - _ * h), 0 != r) {
                i = (e + s) / r,
                n = (-e + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Gi(i, t)),
                n >= 0 && 1 >= n && (b = Gi(n, t)),
                v && b ? [v, b] : v ? v : b ? b : void 0
            }
        },
        _3c: function (t, i, n) {
            if (this._n0 == t._n0 || 0 == this._mx && 0 == t._mx) return null;
            var e, s;
            if (e = 0 == this._mx ? this._my : 0 == t._mx ? t._my : (t._my - this._my) / (this._n0 - t._n0), s = 0 == this._n0 ? this._my : 0 == t._n0 ? t._my : this._mx ? this._n0 * e + this._my : t._n0 * e + t._my, !i) return {
                x: e,
                y: s
            };
            var r, h, a;
            if (n) r = -i / 2,
            h = -r;
            else {
                r = -eH(this._mr, this._mw, e, s),
                h = eH(this._mu, this._ms, e, s);
                var o = -r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f,
                    h *= f
                } else a = (i - o) / 2
            }
            var u = this._6p(e, s, r),
            c = this._6p(e, s, h);
            return a && (u[cf] = a, c[cf] = a),
            [u, c]
        },
        _6p: function (t, i, n) {
            return 0 == this._mx ? {
                x: t,
                y: i + n
            } : {
                x: t + n * this._mxos,
                y: i + n * this._sin
            }
        }
    };
    var rH = function (t, i) {
        this[Ga] = t,
        this.height = i
    };
    rH[sh] = {
        width: 0,
        height: 0,
        isEmpty: function () {
            return this[Ga] <= 0 || this[za] <= 0
        },
        clone: function () {
            return new rH(this[Ga], this.height)
        },
        toString: function () {
            return vl + this.width + dl + this[za] + Bh
        }
    };
    var hH = function (t, i, e, s) {
        t instanceof Object && !D(t) && (i = t.y, e = t.width, s = t.height, t = t.x),
        e === n && (e = -1),
        s === n && (s = -1),
        this.x = t || 0,
        this.y = i || 0,
        this[Ga] = e,
        this.height = s
    };
    hH[sh] = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function (t) {
            this.x = t.x || 0,
            this.y = t.y || 0,
            this.width = t[Ga] || 0,
            this[za] = t.height || 0
        },
        set: function (t, i, n, e) {
            this.x = t || 0,
            this.y = i || 0,
            this[Ga] = n || 0,
            this.height = e || 0
        },
        offset: function (t, i) {
            return this.x += t,
            this.y += i,
            this
        },
        contains: function (t, i, n, e) {
            if (1 == arguments.length) {
                if (nh == typeof t && fi(t)) return this.contains(t.x, t.y, t.width, t[za]);
                throw {
                    message: bl
                }
            }
            return 2 == arguments[qr] ? t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[za] : ai(this.x, this.y, this[Ga], this[za], t, i, n || 0, e || 0)
        },
        intersectsPoint: function (t, i, n) {
            return this.width <= 0 && this.height <= 0 ? !1 : n ? this[yl](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        },
        intersectsRect: function (t, i, n, e) {
            return ri(this.x, this.y, this[Ga], this.height, t, i, n, e)
        },
        intersects: function (t, i) {
            return D(t[Ga]) ? this[yl](t.x, t.y, t[Ga], t[za]) : this[$f](t, i)
        },
        intersection: function (t, i, n, e) {
            var s = this.x,
            r = this.y,
            h = s;
            h += this[Ga];
            var a = r;
            a += this[za];
            var o = t;
            o += n;
            var f = i;
            return f += e,
            t > s && (s = t),
            i > r && (r = i),
            h > o && (h = o),
            a > f && (a = f),
            h -= s,
            a -= r,
            0 > h || 0 > a ? null : new hH(s, r, h, a)
        },
        addPoint: function (t) {
            this.add(t.x, t.y)
        },
        add: function (t, i) {
            if (D(t[Ga])) return this.addRect(t.x, t.y, t.width, t.height);
            if (D(t.x) && (i = t.y, t = t.x), this[Ga] < 0 || this.height < 0) return this.x = t,
            this.y = i,
            void (this.width = this[za] = 0);
            var n = this.x,
            e = this.y,
            s = this[Ga],
            r = this[za];
            s += n,
            r += e,
            n > t && (n = t),
            e > i && (e = i),
            t > s && (s = t),
            i > r && (r = i),
            s -= n,
            r -= e,
            s > Number[gl] && (s = Number.MAX_VALUE),
            r > Number[gl] && (r = Number[gl]),
            this.set(n, e, s, r)
        },
        addRect: function (t, i, n, e) {
            var s = this[Ga],
            r = this.height; (0 > s || 0 > r) && this.set(t, i, n, e);
            var h = n,
            a = e;
            if (!(0 > h || 0 > a)) {
                var o = this.x,
                f = this.y;
                s += o,
                r += f;
                var u = t,
                c = i;
                h += u,
                a += c,
                o > u && (o = u),
                f > c && (f = c),
                h > s && (s = h),
                a > r && (r = a),
                s -= o,
                r -= f,
                s > Number.MAX_VALUE && (s = Number[gl]),
                r > Number.MAX_VALUE && (r = Number.MAX_VALUE),
                this.set(o, f, s, r)
            }
        },
        shrink: function (t, i, n, e) {
            return D(t) ? 1 == arguments[qr] ? e = i = n = t || 0 : 2 == arguments[qr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[pa] || 0, n = t[Kh] || 0, e = t[Jh] || 0, t = t.top || 0),
            this.x += i,
            this.y += t,
            this.width -= i + e,
            this[za] -= t + n,
            this
        },
        grow: function (t, i, n, e) {
            return D(t) ? 1 == arguments[qr] ? e = i = n = t || 0 : 2 == arguments[qr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[pa] || 0, n = t[Kh] || 0, e = t[Jh] || 0, t = t.top || 0),
            this.x -= i,
            this.y -= t,
            this[Ga] += i + e,
            this.height += t + n,
            this
        },
        scale: function (t) {
            return this.x *= t,
            this.y *= t,
            this.width *= t,
            this[za] *= t,
            this
        },
        isEmpty: function () {
            return this[Ga] <= 0 && this.height <= 0
        },
        toString: function () {
            return this.x + ml + this.y + ml + this[Ga] + ml + this[za]
        },
        union: function (t) {
            var i = this[Ga],
            n = this[za];
            if (0 > i || 0 > n) return new hH(t.x, t.y, t[Ga], t[za]);
            var e = t[Ga],
            s = t[za];
            if (0 > e || 0 > s) return new hH(this.x, this.y, this[Ga], this[za]);
            var r = this.x,
            h = this.y;
            i += r,
            n += h;
            var a = t.x,
            o = t.y;
            return e += a,
            s += o,
            r > a && (r = a),
            h > o && (h = o),
            e > i && (i = e),
            s > n && (n = s),
            i -= r,
            n -= h,
            i > Number.MAX_VALUE && (i = Number[gl]),
            n > Number[gl] && (n = Number.MAX_VALUE),
            new hH(r, h, i, n)
        },
        clear: function () {
            this.set(0, 0, -1, -1)
        },
        equals: function (t) {
            return t && this.x == t.x && this.y == t.y && this[Ga] == t[Ga] && this[za] == t.height
        },
        clone: function (t, i) {
            return new hH(this.x + (t || 0), this.y + (i || 0), this[Ga], this.height)
        },
        toArray: function () {
            return [this.x, this.y, this[Ga], this[za]]
        },
        getIntersectionPoint: function (t, i, n, e) {
            return si(this, t, i, n, e)
        }
    },
    p(hH, rH),
    hH[Su] = function (t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i[Ga] && t[za] == i.height
    },
    K(hH.prototype, {
        left: {
            get: function () {
                return this.x
            }
        },
        top: {
            get: function () {
                return this.y
            }
        },
        bottom: {
            get: function () {
                return this.y + this.height
            }
        },
        right: {
            get: function () {
                return this.x + this[Ga]
            }
        },
        cx: {
            get: function () {
                return this.x + this.width / 2
            }
        },
        cy: {
            get: function () {
                return this.y + this.height / 2
            }
        },
        center: {
            get: function () {
                return new nH(this.cx, this.cy)
            }
        }
    }),
    hH[Zc] = ri,
    hH[of] = oi,
    hH[$f] = hi;
    var aH = function (t, i, n, e) {
        1 == arguments.length ? i = n = e = t : 2 == arguments[qr] && (n = t, e = i),
        this.set(t, i, n, e)
    };
    aH[sh] = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function (t, i, n, e) {
            this.top = t || 0,
            this[pa] = i || 0,
            this[Kh] = n || 0,
            this[Jh] = e || 0
        },
        clone: function () {
            return new aH(this.top, this[pa], this[Kh], this.right)
        },
        equals: function (t) {
            return t && this.top == t.top && this[Kh] == t.bottom && this.left == t[pa] && this[Jh] == t.right
        }
    };
    var oH = function (t, i) {
        this.horizontalPosition = t,
        this.verticalPosition = i
    };
    oH[sh] = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function () {
            return (this[xl] || "") + (this[na] || "")
        }
    },
    Z(oH[sh], El, {
        get: function () {
            return (this[xl] || "") + (this.verticalPosition || "")
        }
    });
    var fH = pl,
    uH = kl,
    cH = wl,
    _H = pu,
    dH = Tl,
    lH = Ol;
    oH.LEFT_TOP = new oH(fH, _H),
    oH[Ml] = new oH(fH, dH),
    oH[Sl] = new oH(fH, lH),
    oH.CENTER_TOP = new oH(uH, _H),
    oH[jl] = new oH(uH, dH),
    oH.CENTER_BOTTOM = new oH(uH, lH),
    oH.RIGHT_TOP = new oH(cH, _H),
    oH[Il] = new oH(cH, dH),
    oH[Al] = new oH(cH, lH);
    var vH = [oH[Cl], oH[Ml], oH[Sl], oH.CENTER_TOP, oH.CENTER_MIDDLE, oH[Rl], oH[Ll], oH[Il], oH[Al]];
    Z(oH, Dh, {
        get: function () {
            return vH[H(vH.length)]
        }
    }),
    oH[ia] = function (t) {
        for (var i in oH) {
            var n = oH[i];
            if (n && Dh != i && n instanceof oH && n.toString() == t) return n
        }
    };
    var bH = function (t, i, n, e, s) {
        this.set(t, i, n, e),
        this[Pl] = s
    };
    bH[sh] = {
        radius: 0,
        classify: function (t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },
        intersectsRect: function (t, i, n, e) {
            if (w(this, bH, yl, arguments) === !1) return !1;
            var s = this.x,
            r = this.y,
            h = s + this[Ga],
            a = r + this[za],
            o = 2 * radius,
            f = 2 * radius,
            u = Math.min(this[Ga], Math.abs(o)) / 2,
            c = Math.min(this.height, Math.abs(f)) / 2,
            _ = this.classify(t, s, h, u),
            d = this[Dl](t + n, s, h, u),
            l = this[Dl](i, r, a, c),
            v = this.classify(i + e, r, a, c);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= h - u, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
        },
        intersectsPoint: function (t, i) {
            if (w(this, bH, $f, arguments) === !1) return !1;
            var n = this.x,
            e = this.y,
            s = n + this[Ga],
            r = e + this[za];
            if (n > t || e > i || t >= s || i >= r) return !1;
            var h = 2 * radius,
            a = 2 * radius,
            o = Math.min(this.width, Math.abs(h)) / 2,
            f = Math.min(this[za], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        },
        clone: function () {
            return new bH(this.x, this.y, this[Ga], this[za], this[Pl])
        }
    },
    p(bH, hH);
    var yH = function (t, i, n, e) {
        this[Vo] = t,
        this[Io] = i,
        this[jd] = n,
        this[bh] = e
    };
    yH[sh] = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function () {
            return Nl + this[Vo] + $l + this[Io] + Bl + this[jd]
        }
    };
    var gH = function (t, i, n, e, s) {
        this[Vo] = t,
        this[jd] = i,
        this[Fl] = e,
        this[bh] = n,
        this[Gl] = s
    };
    gH[sh] = {
        type: zl,
        propertyType: null,
        toString: function () {
            return Nl + this.source + $l + this[Io] + Hl + this[jd] + Yl + this.oldValue + Ul + this[bh]
        }
    },
    p(gH, yH),
    Z(gH[sh], Wl, {
        get: function () {
            return this[jd]
        },
        set: function (t) {
            this[jd] = t
        }
    });
    var mH = function (t, i, n) {
        this[Vo] = t,
        this[Fl] = t[Cu],
        this[bh] = i,
        this[ql] = n,
        this[Fl] && (this[Vl] = this[Fl][Xl](t))
    };
    mH.prototype = {
        kind: Cu
    },
    p(mH, gH);
    var xH = function (t, i) {
        this.source = t,
        this.value = i
    };
    xH[sh].kind = Zl,
    p(xH, gH);
    var EH = function (t, i) {
        this[Vo] = t,
        this.value = i
    };
    EH[sh][jd] = Kl,
    p(EH, gH);
    var pH = function (t, i, n, e) {
        this[Vo] = i,
        this[Fl] = n,
        this[bh] = e,
        this[Cu] = t,
        this[Jl] = i,
        this.oldIndex = n,
        this[ql] = e
    };
    pH[sh][jd] = Ql,
    p(pH, gH);
    var kH = function () { };
    kH.prototype = {
        listener: null,
        beforeEvent: function (t) {
            return null != this[tv] && this[tv][_h] ? this[tv][_h](t) : !0
        },
        onEvent: function (t) {
            null != this.listener && this[tv][dh] && this.listener[dh](t)
        }
    };
    var wH = function () {
        k(this, wH, arguments),
        this[iv] = {},
        this[nv] = []
    },
    TH = function (t, i) {
        this[tv] = t,
        this[ev] = i,
        t instanceof Function ? this[dh] = t : (this[dh] = t[dh], this[_h] = t[_h]),
        this[Su] = function (t) {
            return t && this[tv] == t[tv] && this[ev] == t.scope
        }
    };
    TH[sh] = {
        equals: function (t) {
            return t && this[tv] == t.listener && this[ev] == t[ev]
        },
        destroy: function () {
            delete this[ev],
            delete this[tv]
        }
    },
    wH[sh] = {
        listeners: null,
        _mym: function () {
            return this[nv] && this[nv][qr] > 0
        },
        _6n: function (t, i) {
            return t instanceof wH ? t : new TH(t, i)
        },
        _97: function (t, i) {
            if (t instanceof wH) return this[nv][ih](t);
            for (var n = this.listeners,
            e = 0,
            s = n.length; s > e; e++) {
                var r = n[e];
                if (r[tv] == t && r.scope == i) return e
            }
            return -1
        },
        contains: function (t, i) {
            return this._97(t, i) >= 0
        },
        addListener: function (t, i) {
            return this[a_](t, i) ? !1 : void this[nv][th](this._6n(t, i))
        },
        removeListener: function (t, i) {
            var n = this._97(t, i);
            n >= 0 && this.listeners[Zr](n, 1)
        },
        on: function (t, i) {
            this[sv](t, i)
        },
        un: function (t, i, n) {
            this[rv](t, i, n)
        },
        onEvent: function (t) {
            return this[nv] ? void l(this[nv],
            function (i) {
                i.onEvent && (i[ev] ? i[dh][Vr](i[ev], t) : i[dh](t))
            },
            this) : !1
        },
        beforeEvent: function (t) {
            return this[nv] ? l(this[nv],
            function (i) {
                return i[_h] ? i[ev] ? i[_h].call(i[ev], t) : i[_h](t) : !0
            },
            this) : !0
        },
        _e3: function (t) {
            return this.beforeEvent(t) === !1 ? !1 : (this[dh](t), !0)
        },
        clear: function () {
            this[nv] = []
        },
        destroy: function () {
            this[Ha]()
        }
    },
    p(wH, kH);
    var OH = {
        onEvent: function () { },
        beforeEvent: function () { }
    },
    MH = function (t, i, n, e, s) {
        this.source = t,
        this[Io] = hv,
        this[jd] = i,
        this.data = n,
        this[av] = e,
        this.oldIndex = s
    };
    MH[sh] = {
        index: -1,
        oldIndex: -1,
        toString: function () {
            return Nl + this[Vo] + $l + this[Io] + Bl + this[jd] + ov + this[Mo] + fv + this.index + uv + this[Vl]
        }
    },
    p(MH, yH),
    MH[cv] = _v,
    MH[dv] = Oh,
    MH.KIND_CLEAR = Ha,
    MH[lv] = vv;
    var SH = function () {
        this.id = ++Pz,
        this[bv] = {}
    };
    SH.prototype = {
        _mxf: null,
        id: null,
        get: function (t) {
            return this[bv][t]
        },
        set: function (t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new gH(this, t, i, n);
            return e[Gl] = lY[wc],
            this._myj(t, i, e, this[bv])
        },
        _myj: function (t, i, e, s) {
            return this[_h](e) === !1 ? !1 : (s || (s = this[bv]), i === n ? delete s[t] : s[t] = i, this[dh](e), !0)
        },
        remove: function (t) {
            this.set(t, null)
        },
        valueOf: function () {
            return this.id
        },
        toString: function () {
            return this.id
        },
        _ej: function (t, i) {
            if (i === n && (i = -1), this == t || t == this._jg) return !1;
            if (t && this == t._jg && !t._ej(null)) return !1;
            var e = new mH(this, t, i);
            if (!this[_h](e)) return !1;
            var s, r, h = this._jg;
            return t && (s = new xH(t, this), !t.beforeEvent(s)) ? !1 : null == h || (r = new EH(h, this), h.beforeEvent(r)) ? (this._jg = t, null != t && ci(t, this, i), null != h && _i(h, this), this[dh](e), null != t && t.onEvent(s), null != h && h[dh](r), this[yv](h, t), !0) : !1
        },
        addChild: function (t, i) {
            var n = t._ej(this, i);
            return n && this[gv](t, i),
            n
        },
        removeChild: function (t) {
            if (!this._fk || !this._fk.contains(t)) return !1;
            var i = t._ej(null);
            return this.onChildRemove(t),
            i
        },
        toChildren: function () {
            return this._fk ? this._fk[al]() : null
        },
        clearChildren: function () {
            if (this._fk && this._fk[qr]) {
                var t = this[mv]();
                l(t,
                function (t) {
                    t._ej(null)
                },
                this),
                this.onChildrenClear(t)
            }
        },
        forEachChild: function (t, i) {
            return this[Ur]() ? this._fk[au](t, i) : !1
        },
        onChildAdd: function () { },
        onChildRemove: function () { },
        onChildrenClear: function () { },
        onParentChanged: function () { },
        getChildIndex: function (t) {
            return this._fk && this._fk[qr] ? this._fk[ih](t) : -1
        },
        setChildIndex: function (t, i) {
            if (!this._fk || !this._fk[qr]) return !1;
            var n = this._fk[ih](t);
            if (0 > n || n == i) return !1;
            var e = new pH(this, t, n, i);
            return this.beforeEvent(e) === !1 ? !1 : (this._fk[Oh](t) && this._fk.add(t, i), this.onEvent(e), !0)
        },
        hasChildren: function () {
            return this._fk && this._fk[qr] > 0
        },
        getChildAt: function (t) {
            return null == this._fk ? null : this._fk._j7[t]
        },
        isDescendantOf: function (t) {
            if (!t.hasChildren()) return !1;
            for (var i = this[Cu]; null != i; ) {
                if (t == i) return !0;
                i = i[Cu]
            }
            return !1
        },
        firePropertyChangeEvent: function (t, i, n, e) {
            this.onEvent(new gH(this, t, i, n, e))
        }
    },
    p(SH, kH),
    K(SH[sh], {
        childrenCount: {
            get: function () {
                return this._fk ? this._fk[qr] : 0
            }
        },
        children: {
            get: function () {
                return this._fk || (this._fk = new Qz),
                this._fk
            }
        },
        parent: {
            get: function () {
                return this._jg
            },
            set: function (t) {
                this._ej(t, -1)
            }
        },
        properties: {
            get: function () {
                return this[bv]
            },
            set: function (t) {
                this._mxf != t && (this._mxf = t)
            }
        }
    });
    var jH = function () {
        this._j7 = [],
        this._m0 = {},
        this._1i = new wH
    };
    jH[sh] = {
        beforeEvent: function (t) {
            return null != this._1i && this._1i[_h] ? this._1i.beforeEvent(t) : !0
        },
        onEvent: function (t) {
            return this._1i instanceof Function ? void this._1i(t) : void (null != this._1i && this._1i[dh] && this._1i[dh](t))
        },
        _1i: null,
        setIndex: function (t, i) {
            if (!this[a_](t)) throw new Error(ja + t[xv]() + el);
            var n = this[ih](t);
            if (n == i) return !1;
            var e = new MH(this, MH[lv], t, i, n);
            return this.beforeEvent(e) === !1 ? !1 : (this._j7[Oh](t) >= 0 && this._j7.add(i, t), this[dh](e), !0)
        },
        _gd: function (t, i) {
            if (0 == t.length) return !1;
            var e = !1,
            s = i >= 0,
            r = new MH(this, MH.KIND_ADD, t, i);
            if (this[_h](r) === !1) return !1;
            var h = [];
            t = t._j7 || t;
            for (var a = 0,
            o = t[qr]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._kg(f, i, !0) && (h[th](f), e = !0, s && i++)
            }
            return r[Mo] = h,
            this[dh](r),
            e
        },
        _kg: function (t, i, n) {
            if (this.accept(t) === !1) return !1;
            if (n) return w(this, jH, Ev, arguments);
            var e = new MH(this, MH[cv], t, i);
            return this[_h](e) === !1 ? !1 : w(this, jH, Ev, arguments) ? (this._kf(t, e), t) : !1
        },
        _kf: function (t, i) {
            this[dh](i)
        },
        _myc: function (t) {
            if (0 == t[qr]) return !1;
            var i = new MH(this, MH.KIND_REMOVE, t);
            if (this[_h](i) === !1) return !1;
            var e = [],
            s = !1;
            t = t._j7 || t;
            for (var r = 0,
            h = t[qr]; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null),
                    this._gi(o, a, !0) && (e[th](a), s = !0)
                }
            }
            return i[Mo] = e,
            this.onEvent(i),
            s
        },
        _gi: function (t, i, n) {
            if (n) return w(this, jH, pv, arguments);
            var e = new MH(this, MH[dv], i);
            return this[_h](e) === !1 ? !1 : w(this, jH, pv, arguments) ? (this[dh](e), !0) : !1
        },
        clear: function () {
            if (this[Hf]()) return !1;
            var t = new MH(this, MH[kv], this[al]());
            return this[_h](t) === !1 ? !1 : w(this, jH, Ha) ? (this[dh](t), !0) : !1
        },
        accept: function (t) {
            return this[wv] && this.filter(t) === !1 ? !1 : !0
        }
    },
    p(jH, Qz),
    Z(jH[sh], Tv, {
        get: function () {
            return this._1i
        }
    });
    var IH = function () {
        k(this, IH, arguments),
        this.selectionChangeDispatcher = new wH,
        this[Ov] = new AH(this),
        this[Ov]._1i = this.selectionChangeDispatcher,
        this[Mv] = new wH,
        this[Mv][sv]({
            beforeEvent: this[Sv],
            onEvent: this.onDataPropertyChanged
        },
        this),
        this[jv] = new wH,
        this[Iv] = new wH,
        this.$roots = new Qz;
        var t = this;
        this[Av][Yu] = function (i, n) {
            if (!t.$roots[a_](i)) throw new Error(ja + i.id + el);
            var e = t[Av]._j7[ih](i);
            if (e == n) return !1;
            t[Av]._j7[Zr](e, 1),
            t.$roots._j7.splice(n, 0, i),
            t[Cv] = !0;
            var s = new pH(t, i, e, n);
            return t._2i(s),
            !0
        }
    };
    IH.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _kf: function (t, i) {
            t[tv] = this[Mv],
            t[Cu] || this[Av].add(t),
            this.onEvent(i)
        },
        _gi: function (t, i) {
            if (w(this, IH, pv, arguments)) {
                if (i instanceof mW) i.disconnect();
                else if (i instanceof xW) {
                    var n = i[Rv]();
                    this.remove(n)
                }
                var e = i[Cu];
                return null == e ? this[Av][Oh](i) : (e.removeChild(i), e[Lv] = !0),
                i[Ur]() && this[Oh](i[mv]()),
                i.listener = null,
                !0
            }
            return !1
        },
        _5w: function (t) {
            var i = t[Vo];
            this.contains(i) && (null == i[Cu] ? this[Av].add(i) : null == t.oldValue && this.$roots.remove(i), this[jv][dh](t))
        },
        _2i: function (t) {
            this[Iv].onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof mH ? this[jv][_h](t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof mH ? (this._mxuIndexFlag = !0, t[Vo][Cv] = !0, void this._5w(t)) : void (t instanceof pH && (this[Cv] = !0, t[Vo][Cv] = !0, this._2i(t)))
        },
        toRoots: function () {
            return this[Av].toDatas()
        },
        _gg: function (t) {
            var i, n = t._jg;
            i = n ? n._fk : this[Av];
            var e = i[ih](t);
            if (0 > e) throw new Error(Pv + t + "' not exist in the box");
            return 0 == e ? n : i[il](e - 1)
        },
        _ge: function (t) {
            var i, n = t._jg;
            i = n ? n._fk : this.$roots;
            var e = i[ih](t);
            if (0 > e) throw new Error(Pv + t + "' not exist in the box");
            return e == i[qr] - 1 ? n ? this._ge(n) : null : i[il](e + 1)
        },
        forEachByDepthFirst: function (t, i, n) {
            return this[Av].length ? r(this[Av], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function (t, i, n) {
            return this.$roots[qr] ? o(this[Av], t, i, n) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this.$roots[qr] ? c(this.$roots, t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this.$roots.length ? _(this[Av], t, i) : !1
        },
        clear: function () {
            return w(this, IH, Ha) ? (this[Av][Ha](), this[X_][Ha](), !0) : !1
        }
    },
    p(IH, jH),
    K(IH[sh], {
        selectionModel: {
            get: function () {
                return this[Ov]
            }
        },
        roots: {
            get: function () {
                return this[Av]
            }
        }
    });
    var AH = function (t) {
        k(this, AH),
        this.box = t,
        this._myoxChangeListener = {
            onEvent: function (t) {
                MH[dv] == t[jd] ? null != t[Mo] ? this[Oh](t[Mo]) : null != t[Id] && this[Oh](t[Id]) : MH.KIND_CLEAR == t[jd] && this.clear()
            }
        },
        this.box[Tv].addListener(this._myoxChangeListener, this)
    };
    AH[sh] = {
        box: null,
        isSelected: function (t) {
            return this.containsById(t.id || t)
        },
        select: function (t) {
            return this.add(t)
        },
        unselect: function (t) {
            return this[Oh](t)
        },
        reverseSelect: function (t) {
            return this[a_](t) ? this[Oh](t) : this.add(t)
        },
        accept: function (t) {
            return this.box[a_](t)
        }
    },
    p(AH, jH);
    var CH = null,
    RH = null,
    LH = function () {
        if (!i[Xa]) return function (t) {
            return t
        };
        var t = i.createElement(y_),
        e = t[_a],
        s = {};
        return function (t) {
            if (s[t]) return s[t];
            var i = di(t);
            return e[i] !== n || RH && e[i = di(RH + i)] !== n ? (s[t] = i, i) : t
        }
    } (),
    PH = {}; !
    function () {
        if (!i[Dv]) return !1;
        for (var e = i[Dv], s = "Webkit Moz O ms Khtml".split(wh), r = 0; r < s[qr]; r++) if (e[_a][s[r] + Nv] !== n) {
            RH = ha + s[r][aa]() + ha;
            break
        }
        var h = i[Xa](_a);
        t[$v] || h[Iu](i[Bv]("")),
        h[Io] = Fv,
        h.id = Gv,
        e.appendChild(h),
        CH = h[zv];
        var a, o;
        for (var f in PH) {
            var u = PH[f];
            a = f,
            o = "";
            for (var c in u) o += LH(c) + fa + u[c] + Hv;
            gi(a, o)
        }
    } ();
    var DH = function (t, i, n, e, s) {
        if (s) {
            var r = function (t) {
                r.handle.call(r.scope, t)
            };
            return r.scope = s,
            r[Yv] = n,
            t.addEventListener(i, r, e),
            r
        }
        return t.addEventListener(i, n, e),
        n
    },
    NH = function (t, i, n) {
        t[Uv](i, n)
    };
    if (Jz.DOUBLE_CLICK_INTERVAL_TIME = 200, Jz.LONG_PRESS_INTERVAL = 800, Jz[Wv] = !0, t[$d] && navigator[qv]) {
        var $H, BH = /mobile|tablet|ip(ad|hone|od)|android/i,
        FH = x_ in t,
        GH = FH && BH[Go](navigator.userAgent);
        if (GH) $H = Vv;
        else {
            var zH = Xv in t ? "mousewheel" : Zv;
            $H = Kv + zH,
            FH && ($H += Jv)
        }
        $H = $H[kh](/[\s,]+/);
        var HH = function (i) {
            return t.TouchEvent && i instanceof t[Qv]
        },
        YH = function () {
            return Jz[tb]
        },
        UH = function () {
            return Jz[ib]
        },
        F = function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        },
        G = function (t) {
            t[Rh] && t.stopPropagation(),
            t[Lh] = !0
        },
        z = function (t) {
            F(t),
            G(t)
        },
        WH = function (t) {
            return t[nb] || t.returnValue === !1
        },
        qH = function (t) {
            QH[eb] && QH[eb]._onWindowMouseMove(t)
        },
        VH = function (t) {
            if (QH._mxurrentItem) {
                var i = QH[eb];
                i._onWindowMouseUp(t),
                XH(null)
            }
        },
        XH = function (t) {
            QH[eb] != t && (QH[eb] && (QH[eb].__dragging = !1), QH[eb] = t)
        },
        ZH = function (i, n) {
            $H.forEach(function (t) {
                i[sb](t, n, !1)
            }),
            Zz || QH[rb] || (QH[rb] = !0, t.addEventListener(hb, qH, !0), t[sb](ab, VH, !0))
        },
        KH = function (t, i) {
            $H.forEach(function (n) {
                t.removeEventListener(n, i, !1)
            })
        },
        JH = function (t) {
            return t.touches ? {
                timeStamp: t[ob],
                x: t.cx,
                y: t.cy
            } : {
                timeStamp: t[ob],
                x: t.clientX,
                y: t.clientY
            }
        };
        xi[sh] = {
            _install: function () {
                this[fb] || (this[fb] = function (t) {
                    this[Td](t)
                } [mh](this), ZH(this._m7, this[fb]))
            },
            _uninstall: function () {
                this[fb] && KH(this._m7, this[fb])
            },
            _n0ction: function (t) {
                t = this._toQEvent(t);
                var i = t[Io];
                this[ub](t, i) === !1 && this[cb](t, _b + i)
            },
            _mxancelLongPressTimer: function () {
                this[db] && (clearTimeout(this[db]), this.__longPressTimer = null)
            },
            __krLongPress: function (t) {
                this[lb] || (this.__onLongPressFunction = function () {
                    this._krEvent && (this[vb] = !0, this[bb][yb] ? this._onEvent(this[bb], gb) : this[cb](this._krEvent, mb))
                } [mh](this)),
                this._mxancelLongPressTimer(),
                this[db] = setTimeout(this[lb], UH(t))
            },
            __fixTouchEvent: function (t) {
                for (var i, n, e = 0,
                s = 0,
                r = t[Wh][qr], h = 0; r > h; ) {
                    var a = t[Wh][h++],
                    o = a[xb],
                    f = a[Eb];
                    if (2 == h) {
                        var u = n[0] - o,
                        c = n[1] - f;
                        i = Math.sqrt(u * u + c * c)
                    }
                    n = [o, f],
                    e += o,
                    s += f
                }
                t.cx = e / r,
                t.cy = s / r,
                t[e_] = {
                    x: t.cx,
                    y: t.cy,
                    clientX: t.cx,
                    clientY: t.cy
                },
                t[ll] = i
            },
            __touchCountChange: function (t) {
                this[pb][Ha](),
                this._9r = JH(t)
            },
            _handleTouchEvent: function (t, i) {
                switch (i) {
                    case "touchstart":
                        G(t),
                    this[kb](t),
                    this.__touchCountChange(t);
                        var n = t[Wh].length;
                        this[bb] || (this[bb] = t, this[wb](t), this[vb] = !1, this[Tb](t)),
                    1 == n && (this[Ob] = null),
                    n >= 2 && !this.__krMulTouchEvent && (this[Ob] = {
                        cx: t.cx,
                        cy: t.cy,
                        distance: t.distance
                    });
                        break;
                    case "touchmove":
                        z(t),
                    this.__fixTouchEvent(t);
                        var n = t.touches[qr];
                        if (n >= 2 && this[Ob]) {
                            var e = this[Ob].distance;
                            t[Mb] = t[ll] / e,
                        t[Sb] = this[Ob][jb] ? t[Mb] / this.__krMulTouchEvent[jb] : t[Mb],
                        this.__krMulTouchEvent[jb] = t[Mb],
                        this[Ib] || (this[Ib] = !0, this[cb](t, Ab))
                        }
                        this[Cb] || (this[Cb] = !0, this[Rb](t)),
                    this._ondrag(t),
                    this[Ib] && this[cb](t, Lb);
                        break;
                    case "touchend":
                        z(t);
                        var n = t.touches[qr];
                        n && (this[kb](t), this[Pb](t)),
                    1 >= n && (this.__pinching && (this[Ib] = !1, this._onEvent(t, Db)), this[Ob] = null),
                    0 == n && (this[Cb] ? (this[Nb](t), this[Cb] = !1) : t[ob] - this[bb][ob] < .8 * YH(t) && this.__onclick(this[bb]), this._onrelease(t));
                        break;
                    case "touchcancel":
                        this.__dragging = !1,
                    this[Ib] = !1,
                    this[Ob] = null
                }
                return !1
            },
            _handleEvent: function (t, i) {
                if (HH(t)) return this[$b](t, i);
                if (Bb == i) G(t),
                XH(this),
                this._9r = JH(t),
                this._krEvent || (this[bb] = t, this[wb](t)),
                this.__mxancelClick = !1,
                this.__krLongPress(t);
                else if (ab == i) XH(),
                this[Fb](t);
                else if (Gb == i) {
                    if (this.__mxancelClick) return !0;
                    if (this[zb]()) return this[Hb](t),
                    !0
                } else if (Yb == i) {
                    if (this[zb]()) return !0
                } else {
                    if (Ub == i) return this[cb](t, Wb),
                    this[bb] && WH(t) && XH(this),
                    !0;
                    if (i == zH) {
                        var e = t.wheelDelta;
                        if (e !== n ? e /= 120 : e = -t.detail, !e) return;
                        return t.delta = e,
                        this._onEvent(t, Xv)
                    }
                }
                return !1
            },
            _onEvent: function (t, i) {
                if (this[ka]) {
                    var n = this[ka];
                    if (i = i || t[Io], n instanceof Function) return n(t, i);
                    if (!(n[Fu] instanceof Function && n[Fu](i, t) === !1)) return n[qb] instanceof Function && n[qb](i, t, this._scope || this._m7),
                    n[i] instanceof Function ? n[i].call(n, t, this[Vb] || this._m7) : void 0
                }
            },
            _toQEvent: function (t) {
                return t
            },
            _onWindowMouseUp: function (t) {
                this[Cb] && (z(t), this[Cb] = !1, t = this[Xb](t), this[Nb](t), this._onrelease(t), this[cb](t, Zb))
            },
            _krDragDistance: 4,
            _onWindowMouseMove: function (t) {
                if (this[bb]) {
                    if (z(t), !this.__dragging) {
                        var i = this[bb].screenX - t.screenX,
                        n = this[bb].screenY - t[Kb];
                        if (i * i + n * n < this._krDragDistance) return;
                        this[Cb] = !0,
                        this[Rb](t)
                    }
                    this[Jb](this[Xb](t))
                }
            },
            _isDelayClick: function () {
                return Jz.DELAY_CLICK
            },
            __onclick: function (t) {
                if (!this[vb]) {
                    var i = YH(t);
                    this.__mxlickTimer ? this[Qb] || (clearTimeout(this.__mxlickTimer), this[ty] = null, this[cb](t, iy), this[Qb] = !0) : (this[Qb] = !1, this[ty] = setTimeout(function (t) {
                        this.__mxlickTimer = null,
                        this[Qb] || this[cb](t, ny)
                    } .bind(this, t, i), i))
                }
            },
            _onstart: function (t) {
                t.button ? this[cb](t, ey) : this[cb](t, sy)
            },
            _onrelease: function (t) {
                this[bb] && (this[ry](), t.button ? this._onEvent(t, hy) : this[cb](t, ay), this[bb] = null, this._9r = null)
            },
            _n0ppendDragInfo: function (t) {
                var i = this._9r;
                this._9r = JH(t),
                this[pb].add(i, this._9r, t)
            },
            _krdrag: function () {
                this.__mxancelClick = !0,
                this._mxancelLongPressTimer(),
                this[bb][yb] ? this[cb](this[bb], oy) : this[cb](this[bb], fy)
            },
            _ondrag: function (t) {
                this[uy](t),
                this[bb][yb] ? this[cb](t, cy) : this._onEvent(t, _y)
            },
            _enddrag: function (t) {
                if (t[ob] - this._9r[ob] < 100) {
                    var i = this[pb][dy]();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this[bb][yb] ? this[cb](t, ly) : this[cb](t, vy),
                this._dragPoints[Ha]()
            },
            _hj: function () {
                this[by]()
            },
            _ksStatus: function () {
                QH[eb] == this && delete QH[eb],
                this[ry](),
                delete this._9r,
                this[bb] && (delete this[bb][yy], delete this[bb].getUI, delete this[bb])
            }
        };
        var QH = S(function (t) {
            this._kj = t,
            xi[eh](this, [t.canvasPanel, null, t])
        },
        {
            "super": xi,
            _mgData: function (t) {
                return this._kj[gy](t)
            },
            _kt: function (t) {
                return this._kj[my](t)
            },
            _toQEvent: function (i) {
                return (i instanceof MouseEvent || t[Qv] && i instanceof t[Qv]) && (i[yy] = this[xy][mh](this, i), i[Ey] = this._kt[mh](this, i)),
                i
            },
            _onElementRemoved: function (t) {
                this._itListeners(function (i) {
                    i[py] instanceof Function && i[py](t, this._kj)
                })
            },
            _onElementClear: function () {
                this._itListeners(function (t) {
                    t[ky] instanceof Function && t.onClear(this._kj)
                })
            },
            _hj: function (t) {
                this[wy] && this[Ty](this._20s, t),
                this[Oy] && this[Ty](this[Oy], t),
                this[by]()
            },
            _kj: null,
            _20s: null,
            _mxustomInteractionListeners: null,
            _mmInteraction: function (t) {
                return this[wy] == t ? !1 : (this[wy] && this._20s[qr] && this._hjInteractions(this[wy]), void (this[wy] = t))
            },
            _mhCustomInteractionListener: function (t) {
                this[Oy] || (this[Oy] = []),
                this[Oy][th](t)
            },
            _k3CustomInteractionListener: function (t) {
                this[Oy] && 0 != this[Oy][qr] && m(this[Oy], t)
            },
            _onEvent: function (t, i, n) {
                this._kj[i] instanceof Function && this._kj[i][Vr](this._kj, t, n),
                this[wy] && this.__onEvent(t, i, this[wy], n),
                this._mxustomInteractionListeners && this[My](t, i, this[Oy], n)
            },
            _itListeners: function (t) {
                this._20s && l(this[wy], t, this),
                this[Oy] && l(this._mxustomInteractionListeners, t, this)
            },
            __onEvent: function (t, i, n, e) {
                if (!B(n)) return void this[Sy](t, i, n, e);
                for (var s = 0; s < n[qr]; s++) {
                    var r = n[s];
                    this[Sy](t, i, r, e)
                }
            },
            __handleEvent: function (t, i, n, e) {
                if (!(n.accept instanceof Function && n[Fu](i, t, this._kj, e) === !1)) {
                    n[qb] instanceof Function && n[qb](i, t, this._kj, e);
                    var s = n[i];
                    s instanceof Function && s[Vr](n, t, this._kj, e)
                }
            },
            _hjInteraction: function (t) {
                t[jy] instanceof Function && t[jy][Vr](t, this._kj)
            },
            _hjInteractions: function (t, i) {
                if (!B(t)) return void this._hjInteraction(t, i);
                for (var n = 0; n < t[qr]; n++) {
                    var e = t[n];
                    e && this._hjInteraction(e, i)
                }
            }
        })
    }
    pi[sh] = {
        limitCount: 10,
        points: null,
        add: function (t, i, n) {
            0 == this[Ma][qr] && (this[Iy] = t.x, this[Ay] = t.y);
            var e = i[ob] - t[ob] || 1;
            n[Cy] = e;
            var s = i.x - t.x,
            r = i.y - t.y;
            n.dx = s,
            n.dy = r,
            n[Ry] = this[Iy],
            n[Ly] = this[Ay],
            n[Py] = i.x - this._krX,
            n[Dy] = i.y - this[Ay],
            this[Ma][Zr](0, 0, {
                interval: e,
                dx: s,
                dy: r
            }),
            this.points[qr] > this[Ny] && this.points.pop()
        },
        getCurrentSpeed: function () {
            if (!this[Ma].length) return null;
            for (var t = 0,
            i = 0,
            n = 0,
            e = 0,
            s = this[Ma].length; s > e; e++) {
                var r = this[Ma][e],
                h = r.interval;
                if (h > 150) {
                    t = 0;
                    break
                }
                if (t += h, i += r.dx, n += r.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {
                x: i / t,
                y: n / t
            }
        },
        clear: function () {
            this.points = []
        }
    };
    var tY, iY, nY, eY;
    Gz ? (tY = $y, iY = By, nY = Fy, eY = Gy) : zz ? (tY = zy, iY = Hy, nY = Yy, eY = Uy) : (tY = Wy, iY = Wy, nY = ed, eY = qy);
    var sY = Vy,
    rY = Math.PI,
    hY = Math.pow,
    aY = Math.sin,
    oY = 1.70158,
    fY = {
        swing: function (t) {
            return -Math.cos(t * rY) / 2 + .5
        },
        easeNone: function (t) {
            return t
        },
        easeIn: function (t) {
            return t * t
        },
        easeOut: function (t) {
            return (2 - t) * t
        },
        easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        },
        easeInStrong: function (t) {
            return t * t * t * t
        },
        easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        },
        easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        },
        elasticIn: function (t) {
            var i = .3,
            n = i / 4;
            return 0 === t || 1 === t ? t : -(hY(2, 10 * (t -= 1)) * aY(2 * (t - n) * rY / i))
        },
        elasticOut: function (t) {
            var i = .3,
            n = i / 4;
            return 0 === t || 1 === t ? t : hY(2, -10 * t) * aY(2 * (t - n) * rY / i) + 1
        },
        elasticBoth: function (t) {
            var i = .45,
            n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * hY(2, 10 * (t -= 1)) * aY(2 * (t - n) * rY / i) : hY(2, -10 * (t -= 1)) * aY(2 * (t - n) * rY / i) * .5 + 1
        },
        backIn: function (t) {
            return 1 === t && (t -= .001),
            t * t * ((oY + 1) * t - oY)
        },
        backOut: function (t) {
            return (t -= 1) * t * ((oY + 1) * t + oY) + 1
        },
        backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((oY *= 1.525) + 1) * t - oY) : .5 * ((t -= 2) * t * (((oY *= 1.525) + 1) * t + oY) + 2)
        },
        bounceIn: function (t) {
            return 1 - fY[Xy](1 - t)
        },
        bounceOut: function (t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceBoth: function (t) {
            return .5 > t ? .5 * fY[Zy](2 * t) : .5 * fY[Xy](2 * t - 1) + .5
        }
    },
    uY = function (t) {
        this._jw = t
    };
    uY.prototype = {
        _jw: null,
        _83: function () {
            this._mxallback instanceof Function && (this[Ky](), this[Ky] = null)
        },
        _kr: function (t) {
            var i = Date.now();
            this._la(),
            this[Ky] = t,
            this._requestID = requestAnimationFrame(function n() {
                var t = Date.now(),
                e = t - i;
                return !e || this._jw && this._jw(e) !== !1 ? (i = t, void (this[Jy] = requestAnimationFrame(n[mh](this)))) : void this._la()
            } [mh](this))
        },
        _6g: function () { },
        _la: function () {
            return this[Jy] ? (this._6g(), this._83(), t[Hd](this._requestID), void delete this[Jy]) : !1
        },
        _dk: function () {
            return null != this[Jy]
        }
    };
    var cY = function (t, i, n, e) {
        this[Qy] = t,
        this._scope = i || this,
        this._3t = e,
        n && n > 0 && (this._iq = n)
    };
    cY[sh] = {
        _iq: 1e3,
        _3t: null,
        _dr: 0,
        _la: function () {
            return this._dr = 0,
            this[tg] = 0,
            w(this, cY, ig)
        },
        _mxa: 0,
        _jw: function (t) {
            if (this._dr += t, this._dr >= this._iq) return this[Qy][Vr](this._scope, 1, (1 - this[tg]) * this._iq, t, this._iq),
            !1;
            var i = this._dr / this._iq;
            return this._3t && (i = this._3t(i)),
            this._onStep[Vr](this._scope, i, (i - this[tg]) * this._iq, t, this._iq) === !1 ? !1 : void (this._mxa = i)
        }
    },
    p(cY, uY);
    var _Y = function (t) {
        ni(t)
    },
    dY = {
        version: ng,
        extend: p,
        doSuperConstructor: k,
        doSuper: w,
        createFunction: function (t, i) {
            return i[mh](t)
        },
        setClass: R,
        appendClass: L,
        removeClass: P,
        forEach: l,
        forEachReverse: b,
        isNumber: D,
        isString: N,
        isBoolean: $,
        isArray: B,
        eventPreventDefault: F,
        eventStopPropagation: G,
        stopEvent: z,
        callLater: A,
        nextFrame: C,
        forEachChild: e,
        forEachByDepthFirst: r,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: H,
        randomBool: Y,
        randomColor: W,
        addEventListener: DH,
        getFirstElementChildByTagName: iH
    };
    dY[eg] = Zz,
    dY[sg] = qz,
    dY.intersectsPoint = hi,
    dY[rg] = ai,
    dY[hg] = hH,
    dY.Size = rH,
    dY.Point = nH,
    dY[ag] = aH,
    dY[og] = yH,
    dY[fg] = gH,
    dY.ListEvent = MH,
    dY[ug] = kH,
    dY[cg] = wH,
    dY.Position = oH,
    dY[_g] = SH,
    dY[dg] = AH,
    dY.DataModel = IH,
    dY[lg] = OH,
    dY[vg] = Ti,
    dY.loadXML = ki,
    dY[bg] = wi,
    dY.isMetaKey = Ei,
    dY[yg] = eH,
    dY.HashList = Qz,
    dY.DragSupport = xi,
    dY[gg] = function (t) {
        alert(t)
    },
    dY.prompt = function (t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[Vr](e, s) : s
    },
    dY[mg] = function (t, i, n) {
        var e = confirm(t);
        return e && i ? i[Vr](n) : e
    },
    dY[xg] = gi;
    var lY = {
        IMAGE_ADJUST_FLIP: Eg,
        IMAGE_ADJUST_MIRROR: pg,
        SELECTION_TYPE_BORDER_RECT: kg,
        SELECTION_TYPE_BORDER: wg,
        SELECTION_TYPE_SHADOW: Tg,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: Og,
        EDGE_TYPE_ELBOW_HORIZONTAL: Mg,
        EDGE_TYPE_ELBOW_VERTICAL: Sg,
        EDGE_TYPE_ORTHOGONAL: jg,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Ig,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: Ag,
        EDGE_TYPE_HORIZONTAL_VERTICAL: Cg,
        EDGE_TYPE_VERTICAL_HORIZONTAL: Rg,
        EDGE_TYPE_EXTEND_TOP: Lg,
        EDGE_TYPE_EXTEND_LEFT: Pg,
        EDGE_TYPE_EXTEND_BOTTOM: Dg,
        EDGE_TYPE_EXTEND_RIGHT: Ng,
        EDGE_TYPE_ZIGZAG: $g,
        EDGE_CORNER_NONE: M_,
        EDGE_CORNER_ROUND: po,
        EDGE_CORNER_BEVEL: Bg,
        GROUP_TYPE_RECT: Au,
        GROUP_TYPE_CIRCLE: Fg,
        GROUP_TYPE_ELLIPSE: Gg,
        SHAPE_CIRCLE: zg,
        SHAPE_RECT: Au,
        SHAPE_ROUNDRECT: Hg,
        SHAPE_STAR: Yg,
        SHAPE_TRIANGLE: Ug,
        SHAPE_HEXAGON: Wg,
        SHAPE_PENTAGON: qg,
        SHAPE_TRAPEZIUM: Vg,
        SHAPE_RHOMBUS: Xg,
        SHAPE_PARALLELOGRAM: Zg,
        SHAPE_HEART: Kg,
        SHAPE_DIAMOND: Jg,
        SHAPE_CROSS: Qg,
        SHAPE_ARROW_STANDARD: tm,
        SHAPE_ARROW_1: im,
        SHAPE_ARROW_2: nm,
        SHAPE_ARROW_3: em,
        SHAPE_ARROW_4: sm,
        SHAPE_ARROW_5: rm,
        SHAPE_ARROW_6: hm,
        SHAPE_ARROW_7: am,
        SHAPE_ARROW_8: om,
        SHAPE_ARROW_OPEN: fm
    };
    lY[um] = cm,
    lY[_m] = po,
    lY.LINE_CAP_TYPE_SQUARE = dm,
    lY[lm] = Bg,
    lY[vm] = po,
    lY[bm] = ym,
    Jz.SELECTION_TYPE = lY[gm],
    Jz[mm] = GH ? 8 : 3,
    Jz.SELECTION_BORDER = 2,
    Jz.SELECTION_SHADOW_BLUR = 7,
    Jz.SELECTION_COLOR = X(3422561023),
    Jz[xm] = lY[gm],
    Jz[Em] = 10,
    Jz[pm] = 10,
    Jz[km] = 10,
    Jz[wm] = 200,
    Jz[ro] = 1.2;
    var vY = t[Tm] || 1;
    1 > vY && (vY = 1);
    var bY;
    dY[Om] = Ri;
    var yY = Yz && !Zz,
    gY = 9,
    mY = function (t, i, n, e) {
        var s = t - n,
        r = i - e;
        return s * s + r * r
    };
    nn[sh] = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    },
    nn[go] = function (t, i, n) {
        if (!n) return Qi(t, i);
        var e = mY(t.x, t.y, i.x, i.y),
        s = mY(t.x, t.y, n.x, n.y),
        r = mY(n.x, n.y, i.x, i.y);
        if (e + xY >= s + r) return Qi(t, i, 0, n);
        if (s + xY >= e + r) return Qi(t, n, 0, i);
        if (r + xY >= e + s) return Qi(i, n, 0, t);
        var h;
        Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h),
        h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
        o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new nn(a, o, eH(a, o, t.x, t.y), t, i, n)
    };
    var xY = .01,
    EY = {
        _myf: function (t, i, e, s, r) {
            if (N(t) && (t = oH[ia](t)), !t) return {
                x: 0,
                y: 0
            };
            var h = 0,
            a = 0,
            o = i._iy;
            if (e = e || 0, t.x === n) {
                var f = t[xl],
                u = t[na],
                c = !0;
                switch (f) {
                    case cH:
                        c = !1;
                        break;
                    case uH:
                        h += o / 2
                }
                switch (u) {
                    case _H:
                        a -= e / 2;
                        break;
                    case lH:
                        a += e / 2
                }
            } else h = t.x,
            a = t.y,
            Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
            r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var _ = un[Vr](i, h, a, c);
            return _ ? (r || null == s || _[Mm](s), _) : {
                x: 0,
                y: 0
            }
        },
        _li: function (t, i) {
            var n = i[Io],
            e = i[Ma];
            switch (n) {
                case qY:
                    t.arcTo(e[0], e[1], e[2], e[3], i._r);
                    break;
                case HY:
                    t[Xu](e[0], e[1]);
                    break;
                case YY:
                    t[Zu](e[0], e[1]);
                    break;
                case UY:
                    t[Sm](e[0], e[1], e[2], e[3]);
                    break;
                case WY:
                    t[jm](e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case VY:
                    t.closePath()
            }
        },
        _61: function (t, i, n, e) {
            var s = i.type;
            if (s != HY && s != VY) {
                var r = n[jo],
                h = i[Ma];
                switch (n[Io] == HY && t.add(r.x, r.y), s) {
                    case qY:
                        dn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]),
                    t.add(h[0], h[1]),
                    t.add(i[No], i[Po]),
                    t.add(i[Co], i[Ro]),
                    i.$boundaryPoint1 && t.add(i[Im].x, i.$boundaryPoint1.y),
                    i[Am] && t.add(i[Am].x, i.$boundaryPoint2.y);
                        break;
                    case YY:
                        t.add(h[0], h[1]);
                        break;
                    case UY:
                        Hi([r.x, r.y][Jr](h), t);
                        break;
                    case WY:
                        Xi([r.x, r.y][Jr](h), t);
                        break;
                    case VY:
                        e && t.add(e[Ma][0], e[Ma][1])
                }
            }
        },
        _5z: function (t, i, n) {
            var e = t.type;
            if (e == HY) return 0;
            var s = i[jo],
            r = t.points;
            switch (e == WY && 4 == r[qr] && (e = UY), e) {
                case YY:
                    return eH(r[0], r[1], s.x, s.y);
                case qY:
                    return t._iy;
                case UY:
                    var h = Wi([s.x, s.y].concat(r));
                    return t._lf = h,
                h(1);
                case WY:
                    var h = Ki([s.x, s.y][Jr](r));
                    return t._lf = h,
                h(1) || Zi([s.x, s.y][Jr](r));
                case VY:
                    if (s && n) return t[Ma] = n[Ma],
                eH(n.points[0], n[Ma][1], s.x, s.y)
            }
            return 0
        }
    },
    pY = /^data:image\/(\w+);base64,/i,
    kY = /^gif/i,
    wY = /^svg/i,
    TY = 10,
    OY = 11,
    MY = 12,
    SY = 20,
    jY = 30;
    Jz[Ho] = 50,
    Jz.IMAGE_HEIGHT = 30,
    Jz[Cm] = 1e6;
    var IY = 1,
    AY = 2,
    CY = 3;
    gn[sh] = {
        _jf: 0,
        _6k: !0,
        _k9: null,
        _j9: null,
        _lm: null,
        _lo: null,
        _myl: n,
        _96: n,
        _6l: function () {
            return this._jf == IY
        },
        getBounds: function (t) {
            return this._lo == jY ? this._lm[Eo](t) : (this._6k && this._fa(), this)
        },
        validate: function () {
            this._6k && this._fa()
        },
        _fa: function () {
            if (this._6k = !1, this._lo == jY) return this._lm[mo](),
            void this[Ef](this._lm[xo]);
            if (this._lo == SY) return void this._9d();
            if (this._jf != IY) try {
                this._e7()
            } catch (t) {
                this._jf = CY,
                dY[Qo](t)
            }
        },
        _5b: function () {
            this._e3(),
            this[Rm].clear(),
            delete this[Rm]
        },
        _hl: function (t) {
            this._k9 && this._k9.parentNode && this._k9[Lm][Pm](this._k9),
            this._jf = CY,
            dY.error(Dm + this._lm),
            this[Nm] = null,
            this._j9 = null,
            this._k9 = null,
            t !== !1 && this._5b()
        },
        _e7: function () {
            var t = this._lm;
            if (this._jf = IY, this._dispatcher = new wH, this._lo == MY) {
                for (var n in sU) this[n] = sU[n];
                return void Zn(this._lm, this, this._dc, this._hl, this._dm)
            }
            this._k9 || (this._k9 = i.createElement(m_), this._k9.crossOrigin = $m, $z && (this._k9.style[Bm] = O_, i[Fm][Iu](this._k9))),
            this._k9.src = t,
            this._k9[Ga] && (this.width = this._k9[Ga], this.height = this._k9[za]),
            this._k9[fu] = $z ?
            function (t) {
                setTimeout(this._87[mh](this, t), 100)
            } [mh](this) : this._87.bind(this),
            this._k9.onerror = this._hl[mh](this)
        },
        _87: function () {
            this._jf = AY;
            var t = this._k9[Ga],
            i = this._k9[za];
            if (this._k9[Lm] && this._k9[Lm][Pm](this._k9), !t || !i) return void this._hl();
            this[Ga] = t,
            this.height = i;
            var n = this._e6();
            n[Ga] = t,
            n.height = i,
            n.g[H_](this._k9, 0, 0, t, i),
            this._pixels = $z && this._lo == OY ? null : Tn(n),
            this._5b()
        },
        _9d: function () {
            var t = this._lm;
            if (!(t[Fo] instanceof Function)) return void this._hl(!1);
            if (t.cacheable === !1 && t.width && t[za]) return this[Ga] = t[Ga],
            void (this[za] = t[za]);
            var i = t[Ga] || Jz[wm],
            n = t[za] || Jz[wm],
            e = this._e6();
            e.width = i,
            e[za] = n;
            var s = e.g;
            t[Fo](s);
            var r = $i(s, 0, 0, i, n);
            if (r) {
                var h = Mn(r[Mo], i, n);
                this.x = h._x,
                this.y = h._y,
                this[Ga] = h._width,
                this[za] = h._height,
                e.width = this.width,
                e[za] = this[za],
                s[af](r, -this.x, -this.y),
                this[Nm] = h
            }
        },
        _e6: function () {
            return this._j9 || (this._j9 = Ri())
        },
        _6q: function (t, i, n, e, s, r) {
            i[no](),
            i[Au](0, 0, e, s),
            i.fillStyle = r || Gm,
            i.fill(),
            i.clip(),
            i[zm] = e_,
            i[ao] = oo,
            i.fillStyle = z_;
            var h = 6 * (i[Za][Ua] || 1);
            i.font = Hm + h + "px Verdana,helvetica,arial,sans-serif",
            i[B_] = F_,
            i[So] = 1,
            i.strokeText(t, e / 2 + .5, s / 2 + .5),
            i[B_] = Ym,
            i[Um](t, e / 2 - .5, s / 2 - .5),
            i[uo](t, e / 2, s / 2),
            i.restore()
        },
        draw: function (t, i, n, e, s, r) {
            if (this[Ga] && this[za]) {
                i = i || 1,
                e = e || 1,
                s = s || 1;
                var h = this[Ga] * e,
                a = this[za] * s;
                if (r && n[G_] && (t.shadowColor = n[G_], t.shadowBlur = (n.shadowBlur || 0) * i, t.shadowOffsetX = (n.shadowOffsetX || 0) * i, t[Wm] = (n[Wm] || 0) * i), this._jf == IY) return this._6q(qm, t, i, h, a, n.renderColor);
                if (this._jf == CY) return this._6q(Vm, t, i, h, a, n.renderColor);
                if (this._lo == jY) return t[so](e, s),
                void this._lm[Fo](t, i, n);
                var o = this._fx(i, e, s);
                return o ? ((this.x || this.y) && t[eo](this.x * e, this.y * s), t[so](e / o[so], s / o.scale), void o._li(t, n[Xm], n[Zm])) : void this._j0(t, i, e, s, this[Ga] * e, this.height * s, n)
            }
        },
        _j0: function (t, i, n, e, s, r, h) {
            if (this._lo == SY) return 1 != n && 1 != e && t[so](n, e),
            void this._lm[Fo](t, h);
            if (this._k9) {
                if (!Hz) return void t[H_](this._k9, 0, 0, s, r);
                var n = i * s / this.width,
                e = i * r / this[za];
                t[so](1 / n, 1 / e),
                t.drawImage(this._k9, 0, 0, s * n, r * e)
            }
        },
        _jb: null,
        _fx: function (t, i, n) {
            if (this._lo == SY && this._lm[Km] === !1) return null;
            if (this._lo == TY || (t *= Math.max(i, n)) <= 1) return this[Jm] || (this[Jm] = this._g0(this._j9 || this._k9, 1)),
            this[Jm];
            var e = this._jb[Qm] || 0;
            if (t = Math[Fh](t), e >= t) {
                for (var s = t,
                r = this._jb[s]; !r && ++s <= e; ) r = this._jb[s];
                if (r) return r
            }
            t % 2 && t++;
            var h = this[Ga] * t,
            a = this[za] * t;
            if (h * a > Jz[Cm]) return null;
            var o = Ri(h, a);
            return (this.x || this.y) && o.g.translate(-this.x * t, -this.y * t),
            this._j0(o.g, 1, t, t, h, a),
            this._g0(o, t)
        },
        _g0: function (t, i) {
            var n = new JY(t, i);
            return this._jb[i] = n,
            this._jb[Qm] = i,
            n
        },
        hitTest: function (t, i, n) {
            if (this._lo == jY) return this._lm[o_].apply(this._lm, arguments);
            if (!(this[Nm] || this._k9 && this._k9[Nm])) return !0;
            var e = this._pixels || this._k9[Nm];
            return e._hv(t, i, n)
        },
        _e3: function () {
            this._dispatcher && this._dispatcher.onEvent(new yH(this, tx, ix, this._k9))
        },
        _myo: function (t, i) {
            this[Rm] && this[Rm][sv](t, i)
        },
        _6s: function (t, i) {
            this[Rm] && this._dispatcher[rv](t, i)
        },
        _mx2: function (t) {
            this._jb = {},
            (t || this[Ga] * this[za] > 1e5) && (this._k9 = null, this._j9 = null)
        }
    },
    p(gn, hH);
    var RY = {};
    dY.drawImage = kn,
    dY[nx] = mn,
    dY[ex] = En,
    dY[sx] = function () {
        var t = [];
        for (var i in RY) t.push(i);
        return t
    };
    var LY = function (t, i, n, e, s, r) {
        this[Io] = t,
        this.colors = i,
        this[rx] = n,
        this[hx] = e || 0,
        this.tx = s || 0,
        this.ty = r || 0
    };
    lY.GRADIENT_TYPE_RADIAL = wl,
    lY[ax] = pl,
    LY[sh] = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: oH[jl],
        isEmpty: function () {
            return null == this.colors || 0 == this.colors.length
        },
        _7a: function () {
            var t = this.colors[qr];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[th](n * e);
            return this.positions || (this[rx] = i),
            i
        },
        generatorGradient: function (t) {
            if (null == this[ox] || 0 == this[ox][qr]) return null;
            var i, n = Li();
            if (this[Io] == lY[ax]) {
                var e = this[hx];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var r = Math.atan2(t[za], t[Ga]),
                    h = Math[lo](t[Ga] * t[Ga] + t[za] * t[za]),
                    a = r - e;
                    s = Math.cos(a) * h
                } else {
                    var r = Math[vo](t[Ga], t[za]),
                    h = Math[lo](t.width * t[Ga] + t.height * t.height),
                    a = r - (e - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2,
                f = o * Math.cos(e),
                u = o * Math.sin(e),
                c = t.x + t.width / 2 - f,
                _ = t.y + t[za] / 2 - u,
                d = t.x + t[Ga] / 2 + f,
                l = t.y + t[za] / 2 + u;
                i = n.createLinearGradient(c, _, d, l)
            } else {
                if (!(this[Io] = lY[fx])) return null;
                var v = ui(this[ux], t[Ga], t[za]);
                v.x += t.x,
                v.y += t.y,
                this.tx && (v.x += Math.abs(this.tx) < 1 ? t[Ga] * this.tx : this.tx),
                this.ty && (v.y += Math.abs(this.ty) < 1 ? t.height * this.ty : this.ty);
                var b = eH(v.x, v.y, t.x, t.y);
                b = Math.max(b, eH(v.x, v.y, t.x, t.y + t[za])),
                b = Math.max(b, eH(v.x, v.y, t.x + t.width, t.y + t[za])),
                b = Math.max(b, eH(v.x, v.y, t.x + t.width, t.y)),
                i = n[cx](v.x, v.y, 0, v.x, v.y, b)
            }
            var y = this.colors,
            g = this[rx];
            g && g[qr] == y[qr] || (g = this._7a());
            for (var m = 0,
            x = y[qr]; x > m; m++) i[_x](g[m], y[m]);
            return i
        }
    };
    var PY = new LY(lY[ax], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
    DY = new LY(lY[ax], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
    NY = (new LY(lY[ax], [X(1154272460), X(1442840575)], [.1, .9], 0), new LY(lY[fx], [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
    $Y = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
    BY = [0, .12, .28, .45, .6, .75, .8, 1],
    FY = new LY(lY[ax], $Y, BY),
    GY = new LY(lY[ax], $Y, BY, Math.PI / 2),
    zY = new LY(lY[fx], $Y, BY);
    LY.LINEAR_GRADIENT_VERTICAL = PY,
    LY[dx] = DY,
    LY[lx] = NY,
    LY.RAINBOW_LINEAR_GRADIENT = FY,
    LY[vx] = GY,
    LY.RAINBOW_RADIAL_GRADIENT = zY;
    var HY = Tl,
    YY = pl,
    UY = bx,
    WY = kl,
    qY = yx,
    VY = gx;
    lY[mx] = HY,
    lY[xx] = YY,
    lY.SEGMENT_QUAD_TO = UY,
    lY[Ex] = WY,
    lY.SEGMENT_ARC_TO = qY,
    lY[px] = VY;
    var XY = function (t, i) {
        this.id = ++Pz,
        B(t) ? this[Ma] = t : (this[Io] = t, this.points = i)
    };
    XY.prototype = {
        toJSON: function () {
            var t = {
                type: this[Io],
                points: this.points
            };
            return this[Ko] && (t[Ko] = !0),
            t
        },
        parseJSON: function (t) {
            this[Io] = t[Io],
            this.points = t[Ma],
            this.invalidTerminal = t[Ko]
        },
        points: null,
        type: YY,
        clone: function () {
            return new XY(this.type, this[Ma] ? y(this[Ma]) : null)
        },
        move: function (t, i) {
            if (this[Ma]) for (var n = 0,
            e = this.points.length; e > n; n++) {
                var s = this.points[n];
                dY.isNumber(s) && (this[Ma][n] += n % 2 == 0 ? t : i)
            }
        }
    },
    K(XY[sh], {
        lastPoint: {
            get: function () {
                return this[Io] == qY ? {
                    x: this[Co],
                    y: this[Ro]
                } : {
                    x: this[Ma][this[Ma][qr] - 2],
                    y: this.points[this.points[qr] - 1]
                }
            }
        },
        firstPoint: {
            get: function () {
                return {
                    x: this[Ma][0],
                    y: this[Ma][1]
                }
            }
        }
    }),
    dY[kx] = XY;
    var ZY = 0,
    KY = function (t) {
        this[xo] = new hH,
        this._f8 = t || []
    };
    KY[sh] = {
        toJSON: function () {
            var t = [];
            return this._f8[au](function (i) {
                t[th](i[wx]())
            }),
            t
        },
        parseJSON: function (t) {
            var i = this._f8;
            t[au](function (t) {
                i[th](new XY(t[Io], t[Ma]))
            })
        },
        clear: function () {
            this._f8.length = 0,
            this[xo][Ha](),
            this._iy = 0,
            this._6k = !0
        },
        _dl: !0,
        _6c: function (t, i) {
            this._dl && 0 === this._f8[qr] && t != HY && this._f8[th](new XY(HY, [0, 0])),
            this._f8[th](new XY(t, i)),
            this._6k = !0
        },
        add: function (t, i) {
            g(this._f8, t, i),
            this._6k = !0
        },
        removePathSegment: function (t) {
            return t >= this._f8[qr] ? !1 : (this._f8[Zr](t, 1), void (this._6k = !0))
        },
        moveTo: function (t, i) {
            this._6c(HY, [t, i])
        },
        lineTo: function (t, i) {
            this._6c(YY, [t, i])
        },
        quadTo: function (t, i, n, e) {
            this._6c(UY, [t, i, n, e])
        },
        curveTo: function (t, i, n, e, s, r) {
            this._6c(WY, [t, i, n, e, s, r])
        },
        arcTo: function (t, i, n, e, s) {
            this._6c(qY, [t, i, n, e, s])
        },
        closePath: function () {
            this._6c(VY)
        },
        _88: function (t, i, n, e, s) {
            if (e[Tx]) {
                if (n == lY.SELECTION_TYPE_SHADOW) {
                    if (!e[Ox]) return;
                    return t[G_] = e.selectionColor,
                    t.shadowBlur = e[Ox] * i,
                    t[Mx] = (e[Sx] || 0) * i,
                    void (t[Wm] = (e.selectionShadowOffsetY || 0) * i)
                }
                if (n == lY[jx]) {
                    if (!e.selectionBorder) return;
                    t[B_] = e.selectionColor;
                    var r = s[So] || 0;
                    s[Ix] && (r += 2 * s[Ix]),
                    t[So] = e.selectionBorder + r,
                    this._li(t),
                    t[To]()
                }
            }
        },
        _6k: !0,
        _f8: null,
        _iy: 0,
        lineCap: cm,
        lineJoin: po,
        draw: function (t, i, n, e, s) {
            t.lineCap = n.lineCap || this[Ax],
            t[$_] = n[$_] || this[$_],
            e && (s || (s = n), this._88(t, i, s.selectionType, s, n));
            var r = e && s[Cx] == lY[gm];
            n[Rx] && (this._li(t), t.lineWidth = n[So] + 2 * (n.outline || 0), t[B_] = n.outlineStyle, t[To](), r && (r = !1, t[G_] = Lx)),
            t[So] = 0,
            this._li(t),
            n.fillColor && (t.fillStyle = n.renderColor || n[Px], t.fill()),
            n[Dx] && (t[Nx] = n[$x] || n[Dx], t[Oo]()),
            n.lineWidth && (t[So] = n[So], n[Wf] && (n[Bx] && (t.strokeStyle = n.lineFillColor, t.stroke(), r && (t[G_] = Lx)), t[Ax] = n.lineDashCap || t[Ax], t[$_] = n[Fx] || t.lineJoin, t.lineDash = n[Wf], t[Kf] = n[Kf]), t.strokeStyle = n[Xm] || n[B_], t[To](), t.lineDash = [])
        },
        _li: function (t) {
            t[Gx]();
            for (var i, n, e = 0,
            s = this._f8.length; s > e; e++) i = this._f8[e],
            EY._li(t, i, n),
            n = i
        },
        invalidate: function () {
            this._6k = !0
        },
        validate: function () {
            if (this._6k = !1, this[xo][Ha](), this._iy = 0, 0 != this._f8.length) for (var t, i, n = this._f8,
            e = 1,
            s = n[0], r = s, h = n.length; h > e; e++) t = n[e],
            t.type == HY ? r = t : (EY._61(this[xo], t, s, r), i = EY._5z(t, s, r), t._iy = i, this._iy += i),
            s = t
        },
        getBounds: function (t, i) {
            if (this._6k && this[mo](), i = i || new hH, t) {
                var n = t / 2;
                i.set(this[xo].x - n, this.bounds.y - n, this[xo][Ga] + t, this.bounds[za] + t)
            } else i.set(this[xo].x, this[xo].y, this[xo][Ga], this[xo].height);
            return i
        },
        hitTest: function (t, i, n, e, s, r) {
            return fn[Vr](this, t, i, n, e, s, r)
        },
        toSegments: function () {
            return [][Jr](this._f8)
        },
        generator: function (t, i, n, e, s) {
            return on.call(this, t, i, n, e, s)
        },
        getLocation: function (t, i) {
            return un.call(this, t, i || 0)
        }
    },
    K(KY[sh], {
        segments: {
            get: function () {
                return this._f8
            },
            set: function (t) {
                this[Ha](),
                this._f8 = t
            }
        },
        length: {
            get: function () {
                return this._6k && this[mo](),
                this._iy
            }
        },
        _empty: {
            get: function () {
                return 0 == this._f8[qr]
            }
        }
    }),
    On[sh] = {
        _16: function (t, i) {
            var n, e, s, r, h, a = t[qr],
            o = 0,
            f = 0;
            for (h = 0; a > h; h += 4) if (t[h + 3] > 0) {
                n = (h + 4) / i / 4 | 0;
                break
            }
            for (h = a - 4; h >= 0; h -= 4) if (t[h + 3] > 0) {
                e = (h + 4) / i / 4 | 0;
                break
            }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    s = o;
                    break
                }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    r = o;
                    break
                }
                if (r >= 0) break
            }
            this._x = s,
            this._y = n,
            this[zx] = r - s + 1,
            this[Hx] = e - n + 1,
            this._jc = new hH(s, n, this[zx], this[Hx]),
            this._pixelSize = this[zx] * this[Hx],
            this._originalPixelsWidth = i,
            this._originalPixels = t
        },
        _ep: function (t, i) {
            return this[Yx][4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        },
        _hv: function (t, i, n) {
            (!n || 1 >= n) && (n = 1),
            n = 0 | n,
            t = Math.round(t - this._x) - n,
            i = Math[po](i - this._y) - n,
            n += n;
            for (var e = t,
            s = i; i + n > s; ) {
                for (var e = t; t + n > e; ) {
                    if (this._ep(e, s)) return !0; ++e
                } ++s
            }
            return !1
        }
    },
    lY.BLEND_MODE_DARKEN = Ux,
    lY.BLEND_MODE_MULTIPLY = Wx,
    lY[qx] = Vx,
    lY[Xx] = Zx,
    lY[rf] = Kx,
    lY[Jx] = Qx,
    lY[hf] = tE,
    Jz[nf] = lY[Xx];
    var JY = function (t, i, n) {
        this._j9 = t,
        this[so] = i || 1,
        t instanceof Image && (n = !1),
        this._ip = n
    };
    JY[sh] = {
        scale: 1,
        _j9: null,
        _jb: null,
        _ip: !0,
        _li: function (t, i, n) {
            if (i && (i = Sn(i)), !i || this._ip === !1) return void t[H_](this._j9, 0, 0);
            this._jb || (this._jb = {});
            var e = i + n,
            s = this._jb[e];
            if (s || (s = In(this._j9, i, n), s || (this._ip = !1), this._jb[e] = s || this._j9), s) if ($z) try {
                t[H_](s, 0, 0)
            } catch (r) { } else t[H_](s, 0, 0)
        }
    };
    var QY = function (t, i, n, e, s, r, h, a, o) {
        this._m6 = Ln(t, i, n, e, s, r, h, a, o)
    },
    tU = {
        server: {
            draw: function (t) {
                t[no](),
                t[eo](0, 0),
                t[Gx](),
                t[Xu](0, 0),
                t[Zu](40, 0),
                t[Zu](40, 40),
                t.lineTo(0, 40),
                t[Ju](),
                t[iE](),
                t[eo](0, 0),
                t[eo](0, 0),
                t[so](1, 1),
                t[eo](0, 0),
                t[B_] = Lx,
                t[Ax] = cm,
                t[$_] = ym,
                t[nE] = 4,
                t[no](),
                t[no](),
                t[co](),
                t[no](),
                t[co](),
                t[no](),
                t[co](),
                t[no](),
                t[co](),
                t.save(),
                t.restore(),
                t.save(),
                t[co](),
                t.save(),
                t.restore(),
                t[no](),
                t.restore(),
                t.save(),
                t.restore(),
                t.save(),
                t[co](),
                t.save(),
                t.restore(),
                t[no](),
                t[co](),
                t.save(),
                t[co](),
                t[co](),
                t.save();
                var i = t[eE](6.75, 3.9033, 30.5914, 27.7447);
                i.addColorStop(.0493, sE),
                i[_x](.0689, rE),
                i[_x](.0939, hE),
                i[_x](.129, aE),
                i[_x](.2266, oE),
                i[_x](.2556, fE),
                i[_x](.2869, uE),
                i[_x](.3194, cE),
                i[_x](.3525, _E),
                i.addColorStop(.3695, dE),
                i.addColorStop(.5025, lE),
                i[_x](.9212, vE),
                i.addColorStop(1, bE),
                t.fillStyle = i,
                t[Gx](),
                t[Xu](25.677, 4.113),
                t[jm](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
                t[jm](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
                t[jm](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
                t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
                t[jm](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
                t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
                t[jm](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
                t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
                t[jm](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
                t[jm](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
                t[jm](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
                t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
                t[jm](25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
                t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t.restore(),
                t[no](),
                t[no](),
                t.fillStyle = yE,
                t[Gx](),
                t[Xu](19.763, 6.645),
                t[jm](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
                t[jm](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
                t[jm](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
                t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
                t[Zu](21.398, 36.253),
                t[jm](21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
                t[jm](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
                t[jm](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
                t[jm](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
                t.lineTo(4.675, 37.877),
                t[jm](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
                t[jm](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
                t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
                t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
                t[Zu](2.924, 8.431),
                t[jm](2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
                t[jm](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
                t[jm](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
                t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
                t.lineTo(19.763, 6.645),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t[co](),
                t.save(),
                t[Nx] = gE,
                t[Gx](),
                t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
                t[Ju](),
                t[Oo](),
                t[To](),
                t.restore(),
                t[no](),
                t.fillStyle = yE,
                t.beginPath(),
                t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t[co](),
                t.save(),
                t.fillStyle = gE,
                t[Gx](),
                t[Xu](19.377, 17.247),
                t[jm](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
                t[Zu](5.882, 18.108999999999998),
                t[jm](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
                t.lineTo(5.02, 11.144),
                t[jm](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
                t[Zu](18.516, 10.281),
                t[jm](18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
                t.lineTo(19.377, 17.247),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t[co](),
                t.save(),
                t[no](),
                t[Nx] = yE,
                t[Gx](),
                t[Xu](18.536, 13.176),
                t[jm](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
                t.lineTo(6.479, 13.794),
                t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
                t[Zu](5.861, 11.84),
                t[jm](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
                t.lineTo(17.918, 11.221),
                t[jm](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
                t[Zu](18.535, 13.176),
                t[Ju](),
                t.fill(),
                t[To](),
                t[co](),
                t[no](),
                t[Nx] = yE,
                t[Gx](),
                t.moveTo(18.536, 16.551),
                t[jm](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
                t[Zu](6.479, 17.168999999999997),
                t[jm](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
                t.lineTo(5.861, 15.215999999999998),
                t[jm](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
                t.lineTo(17.918, 14.596999999999998),
                t[jm](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
                t.lineTo(18.535, 16.551),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t.restore(),
                t[co](),
                t[co]()
            }
        },
        exchanger2: {
            draw: function (t) {
                t[no](),
                t[eo](0, 0),
                t[Gx](),
                t[Xu](0, 0),
                t.lineTo(40, 0),
                t[Zu](40, 40),
                t[Zu](0, 40),
                t.closePath(),
                t.clip(),
                t.translate(0, 0),
                t[eo](0, 0),
                t[so](1, 1),
                t[eo](0, 0),
                t[B_] = Lx,
                t[Ax] = cm,
                t[$_] = ym,
                t[nE] = 4,
                t.save(),
                t[no](),
                t[co](),
                t[no](),
                t[co](),
                t[no](),
                t[co](),
                t.save(),
                t[co](),
                t.save(),
                t.restore(),
                t[no](),
                t.restore(),
                t.save(),
                t.restore(),
                t.save(),
                t[co](),
                t[no](),
                t.restore(),
                t[no](),
                t.restore(),
                t[co](),
                t.save();
                var i = t[eE](.4102, 24.3613, 39.5898, 24.3613);
                i.addColorStop(0, sE),
                i.addColorStop(.0788, oE),
                i[_x](.2046, mE),
                i[_x](.3649, xE),
                i[_x](.5432, EE),
                i.addColorStop(.6798, pE),
                i[_x](.7462, kE),
                i[_x](.8508, wE),
                i[_x](.98, fE),
                i[_x](1, TE),
                t.fillStyle = i,
                t[Gx](),
                t[Xu](.41, 16.649),
                t[jm](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
                t[jm](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
                t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
                t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
                t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
                t[jm](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
                t[jm](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
                t[Ju](),
                t.fill(),
                t[To](),
                t[co](),
                t[no](),
                t[no](),
                t.fillStyle = yE,
                t.beginPath(),
                t[Xu](16.4, 25.185),
                t[jm](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
                t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
                t[jm](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
                t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
                t[jm](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
                t[jm](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
                t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
                t[jm](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
                t[jm](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
                t[jm](13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t[co](),
                t.restore(),
                t[no](),
                t[no](),
                t[no](),
                t[no](),
                t[no](),
                t.fillStyle = OE,
                t[Gx](),
                t.moveTo(5.21, 21.754),
                t[Zu](8.188, 17.922),
                t[Zu](9.53, 18.75),
                t[Zu](15.956, 16.004),
                t[Zu](18.547, 17.523),
                t[Zu](12.074, 20.334),
                t.lineTo(13.464, 21.204),
                t[Zu](5.21, 21.754),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t.restore(),
                t.restore(),
                t[co](),
                t.save(),
                t.save(),
                t.save(),
                t[Nx] = OE,
                t.beginPath(),
                t.moveTo(17.88, 14.61),
                t.lineTo(9.85, 13.522),
                t.lineTo(11.703, 12.757),
                t[Zu](7.436, 10.285),
                t[Zu](10.783, 8.942),
                t[Zu](15.091, 11.357),
                t[Zu](16.88, 10.614),
                t[Zu](17.88, 14.61),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t[co](),
                t.save(),
                t[no](),
                t[Nx] = OE,
                t.beginPath(),
                t.moveTo(17.88, 14.61),
                t[Zu](9.85, 13.522),
                t[Zu](11.703, 12.757),
                t.lineTo(7.436, 10.285),
                t[Zu](10.783, 8.942),
                t[Zu](15.091, 11.357),
                t[Zu](16.88, 10.614),
                t.lineTo(17.88, 14.61),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t.restore(),
                t[co](),
                t[co](),
                t[no](),
                t[no](),
                t.save(),
                t[Nx] = OE,
                t[Gx](),
                t[Xu](23.556, 15.339),
                t.lineTo(20.93, 13.879),
                t[Zu](26.953, 11.304),
                t[Zu](25.559, 10.567),
                t[Zu](33.251, 9.909),
                t[Zu](31.087, 13.467),
                t[Zu](29.619, 12.703),
                t[Zu](23.556, 15.339),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t[co](),
                t[co](),
                t[co](),
                t.save(),
                t[no](),
                t[no](),
                t[Nx] = OE,
                t[Gx](),
                t[Xu](30.028, 23.383),
                t.lineTo(24.821, 20.366),
                t[Zu](22.915, 21.227),
                t.lineTo(21.669, 16.762),
                t.lineTo(30.189, 17.942),
                t.lineTo(28.33, 18.782),
                t[Zu](33.579, 21.725),
                t[Zu](30.028, 23.383),
                t[Ju](),
                t[Oo](),
                t[To](),
                t.restore(),
                t[co](),
                t[no](),
                t.save(),
                t[Nx] = OE,
                t[Gx](),
                t[Xu](30.028, 23.383),
                t.lineTo(24.821, 20.366),
                t[Zu](22.915, 21.227),
                t[Zu](21.669, 16.762),
                t[Zu](30.189, 17.942),
                t.lineTo(28.33, 18.782),
                t[Zu](33.579, 21.725),
                t[Zu](30.028, 23.383),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t.restore(),
                t[co](),
                t[co](),
                t[co](),
                t[co](),
                t.restore()
            }
        },
        exchanger: {
            draw: function (t) {
                t.save(),
                t[eo](0, 0),
                t[Gx](),
                t[Xu](0, 0),
                t[Zu](40, 0),
                t[Zu](40, 40),
                t[Zu](0, 40),
                t[Ju](),
                t[iE](),
                t[eo](0, 0),
                t[eo](0, 0),
                t[so](1, 1),
                t.translate(0, 0),
                t.strokeStyle = Lx,
                t[Ax] = cm,
                t[$_] = ym,
                t.miterLimit = 4,
                t.save(),
                t[no](),
                t[co](),
                t.save(),
                t[co](),
                t.save(),
                t[co](),
                t.save(),
                t[co](),
                t.save(),
                t.restore(),
                t.save(),
                t[co](),
                t[no](),
                t[co](),
                t[co](),
                t[no]();
                var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                i.addColorStop(0, ME),
                i[_x](.0788, SE),
                i[_x](.352, jE),
                i.addColorStop(.6967, IE),
                i[_x](.8916, AE),
                i[_x](.9557, CE),
                i[_x](1, RE),
                t[Nx] = i,
                t[Gx](),
                t[Xu](39.449, 12.417),
                t.lineTo(39.384, 9.424),
                t[jm](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
                t[jm](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
                t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
                t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
                t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
                t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
                t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
                t[jm](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
                t[Zu](37.711, 30.316999999999997),
                t[Zu](39.281, 16.498999999999995),
                t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
                t[jm](39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t[no](),
                t[no](),
                t.save(),
                t.save(),
                t[co](),
                t[no](),
                t[co](),
                t.save(),
                t.restore(),
                t[no](),
                t[co](),
                t[no](),
                t.restore(),
                t.save(),
                t.restore(),
                t.save(),
                t[co](),
                t[no](),
                t[co](),
                t[no](),
                t.restore(),
                t[co](),
                t[no]();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i.addColorStop(0, LE),
                i.addColorStop(.1455, PE),
                i.addColorStop(.2975, DE),
                i.addColorStop(.4527, NE),
                i[_x](.6099, $E),
                i[_x](.7687, BE),
                i.addColorStop(.9268, FE),
                i[_x](.9754, GE),
                i[_x](1, zE),
                t.fillStyle = i,
                t[Gx](),
                t[Xu](33.591, 24.763),
                t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
                t[jm](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
                t[jm](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
                t[jm](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
                t[jm](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
                t[jm](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
                t[jm](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
                t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
                t[jm](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
                t[jm](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
                t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
                t[jm](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
                t[jm](37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t.restore(),
                t[co](),
                t[co](),
                t[no](),
                t[no](),
                t.save(),
                t[Nx] = OE,
                t[Gx](),
                t.moveTo(10.427, 19.292),
                t[Zu](5.735, 16.452),
                t[Zu](12.58, 13.8),
                t.lineTo(12.045, 15.07),
                t.lineTo(20.482, 15.072),
                t[Zu](19.667, 17.887),
                t.lineTo(11.029, 17.851),
                t[Zu](10.427, 19.292),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t[co](),
                t[co](),
                t.save(),
                t.save(),
                t.fillStyle = OE,
                t[Gx](),
                t[Xu](13.041, 13.042),
                t[Zu](8.641, 10.73),
                t.lineTo(14.82, 8.474),
                t[Zu](14.373, 9.537),
                t[Zu](22.102, 9.479),
                t.lineTo(21.425, 11.816),
                t.lineTo(13.54, 11.85),
                t[Zu](13.041, 13.042),
                t.closePath(),
                t[Oo](),
                t[To](),
                t[co](),
                t[co](),
                t[no](),
                t[no](),
                t[Nx] = OE,
                t[Gx](),
                t[Xu](29.787, 16.049),
                t[Zu](29.979, 14.704),
                t[Zu](21.51, 14.706),
                t[Zu](22.214, 12.147),
                t.lineTo(30.486, 12.116),
                t[Zu](30.653, 10.926),
                t[Zu](36.141, 13.4),
                t[Zu](29.787, 16.049),
                t.closePath(),
                t[Oo](),
                t[To](),
                t[co](),
                t.restore(),
                t[no](),
                t[no](),
                t.fillStyle = OE,
                t[Gx](),
                t[Xu](28.775, 23.14),
                t[Zu](29.011, 21.49),
                t[Zu](19.668, 21.405),
                t[Zu](20.523, 18.295),
                t[Zu](29.613, 18.338),
                t.lineTo(29.815, 16.898),
                t[Zu](35.832, 19.964),
                t[Zu](28.775, 23.14),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t[co](),
                t[co](),
                t[co](),
                t[co]()
            }
        },
        cloud: {
            draw: function (t) {
                t[no](),
                t[Gx](),
                t[Xu](0, 0),
                t[Zu](90.75, 0),
                t.lineTo(90.75, 62.125),
                t[Zu](0, 62.125),
                t[Ju](),
                t.clip(),
                t[B_] = Lx,
                t[Ax] = cm,
                t.lineJoin = ym,
                t[nE] = 4,
                t[no]();
                var i = t[eE](44.0054, 6.4116, 44.0054, 51.3674);
                i[_x](0, "rgba(159, 160, 160, 0.7)"),
                i[_x](.9726, HE),
                t[Nx] = i,
                t[Gx](),
                t.moveTo(57.07, 20.354),
                t[jm](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
                t[jm](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
                t[jm](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
                t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
                t[jm](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
                t[jm](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
                t[jm](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
                t[jm](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
                t[jm](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
                t[jm](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
                t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t[co](),
                t.restore()
            }
        },
        node: {
            width: 60,
            height: 100,
            draw: function (t) {
                t[no](),
                t[eo](0, 0),
                t[Gx](),
                t[Xu](0, 0),
                t.lineTo(40, 0),
                t.lineTo(40, 40),
                t[Zu](0, 40),
                t[Ju](),
                t.clip(),
                t[eo](0, 0),
                t.translate(0, 0),
                t[so](1, 1),
                t.translate(0, 0),
                t[B_] = Lx,
                t[Ax] = cm,
                t[$_] = ym,
                t[nE] = 4,
                t[no](),
                t[Nx] = YE,
                t[Gx](),
                t[Xu](13.948, 31.075),
                t[Zu](25.914, 31.075),
                t[Sm](25.914, 31.075, 25.914, 31.075),
                t[Zu](25.914, 34.862),
                t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862),
                t[Zu](13.948, 34.862),
                t[Sm](13.948, 34.862, 13.948, 34.862),
                t.lineTo(13.948, 31.075),
                t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t[no](),
                t[Nx] = UE,
                t.beginPath(),
                t[Xu](29.679, 35.972),
                t[jm](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
                t.lineTo(11.456, 37.244),
                t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
                t[Zu](10.183, 36.136),
                t[jm](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
                t[Zu](28.407, 34.863),
                t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
                t[Zu](29.678, 35.972),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t[co](),
                t[no](),
                t.fillStyle = UE,
                t.beginPath(),
                t[Xu](.196, 29.346),
                t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
                t[Zu](37.936, 31.075),
                t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
                t[Zu](39.665, 27.174),
                t[Zu](.196, 27.174),
                t[Zu](.196, 29.346),
                t[Ju](),
                t[Oo](),
                t[To](),
                t.restore(),
                t[no](),
                t[Nx] = WE,
                t.beginPath(),
                t.moveTo(37.937, 3.884),
                t[Zu](1.926, 3.884),
                t[jm](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
                t[Zu](.19699999999999984, 27.12),
                t[Zu](39.666000000000004, 27.12),
                t.lineTo(39.666000000000004, 5.615),
                t[jm](39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
                t[Ju](),
                t.fill(),
                t.stroke(),
                t[co](),
                t[no](),
                t[no](),
                t[co](),
                t[no](),
                t[co](),
                t[co](),
                t[no]();
                var i = t[eE](6.9609, 2.9341, 32.9008, 28.874);
                i[_x](0, qE),
                i.addColorStop(1, VE),
                t[Nx] = i,
                t.beginPath(),
                t.moveTo(35.788, 6.39),
                t[Zu](4.074, 6.39),
                t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
                t.lineTo(2.702, 24.616),
                t.lineTo(37.159, 24.616),
                t[Zu](37.159, 7.763),
                t[jm](37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t[co]()
            }
        },
        group: {
            draw: function (t) {
                t[no](),
                t[eo](0, 0),
                t[Gx](),
                t[Xu](0, 0),
                t[Zu](47.75, 0),
                t.lineTo(47.75, 40),
                t[Zu](0, 40),
                t[Ju](),
                t[iE](),
                t[eo](0, 0),
                t[eo](0, 0),
                t[so](1, 1),
                t[eo](0, 0),
                t[B_] = Lx,
                t[Ax] = cm,
                t.lineJoin = ym,
                t[nE] = 4,
                t.save(),
                t[no](),
                t[Nx] = YE,
                t.beginPath(),
                t[Xu](10.447, 26.005),
                t[Zu](18.847, 26.005),
                t[Sm](18.847, 26.005, 18.847, 26.005),
                t[Zu](18.847, 28.663),
                t[Sm](18.847, 28.663, 18.847, 28.663),
                t[Zu](10.447, 28.663),
                t[Sm](10.447, 28.663, 10.447, 28.663),
                t.lineTo(10.447, 26.005),
                t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t[co](),
                t[no](),
                t[Nx] = UE,
                t[Gx](),
                t[Xu](21.491, 29.443),
                t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
                t.lineTo(8.698, 30.338),
                t[jm](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
                t[Zu](7.8020000000000005, 29.557000000000002),
                t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
                t.lineTo(20.597, 28.662000000000003),
                t[jm](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
                t[Zu](21.491, 29.443),
                t.closePath(),
                t[Oo](),
                t.stroke(),
                t.restore(),
                t.save(),
                t[Nx] = UE,
                t[Gx](),
                t.moveTo(.789, 24.79),
                t[jm](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
                t[Zu](27.289, 26.005),
                t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
                t.lineTo(28.504, 23.267),
                t.lineTo(.789, 23.267),
                t[Zu](.789, 24.79),
                t.closePath(),
                t.fill(),
                t[To](),
                t[co](),
                t[no](),
                t[Nx] = WE,
                t[Gx](),
                t[Xu](27.289, 6.912),
                t[Zu](2.006, 6.912),
                t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
                t[Zu](.7889999999999997, 23.227),
                t.lineTo(28.503999999999998, 23.227),
                t.lineTo(28.503999999999998, 8.126),
                t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t.save(),
                t.save(),
                t.restore(),
                t[no](),
                t.restore(),
                t[co](),
                t.save();
                var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                i[_x](0, qE),
                i[_x](1, VE),
                t[Nx] = i,
                t[Gx](),
                t[Xu](25.78, 8.671),
                t[Zu](3.514, 8.671),
                t[jm](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
                t[Zu](2.549, 21.466),
                t.lineTo(26.743, 21.466),
                t[Zu](26.743, 9.636),
                t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t.restore(),
                t[no](),
                t[no](),
                t[Nx] = YE,
                t.beginPath(),
                t[Xu](27.053, 33.602),
                t[Zu](36.22, 33.602),
                t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602),
                t[Zu](36.22, 36.501),
                t[Sm](36.22, 36.501, 36.22, 36.501),
                t.lineTo(27.053, 36.501),
                t[Sm](27.053, 36.501, 27.053, 36.501),
                t[Zu](27.053, 33.602),
                t[Sm](27.053, 33.602, 27.053, 33.602),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t.save(),
                t[Nx] = UE,
                t[Gx](),
                t[Xu](39.104, 37.352),
                t[jm](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
                t.lineTo(25.143, 38.327),
                t[jm](24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
                t[Zu](24.166, 37.477999999999994),
                t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
                t.lineTo(38.131, 36.501),
                t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
                t[Zu](39.105, 37.352),
                t[Ju](),
                t[Oo](),
                t[To](),
                t.restore(),
                t[no](),
                t[Nx] = UE,
                t[Gx](),
                t[Xu](16.514, 32.275),
                t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
                t[Zu](45.433, 33.601),
                t[jm](46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
                t.lineTo(46.758, 30.607999999999997),
                t[Zu](16.514, 30.607999999999997),
                t[Zu](16.514, 32.275),
                t[Ju](),
                t.fill(),
                t[To](),
                t[co](),
                t.save(),
                t[Nx] = WE,
                t[Gx](),
                t[Xu](45.433, 12.763),
                t[Zu](17.839, 12.763),
                t[jm](17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
                t[Zu](16.514, 30.57),
                t[Zu](46.757999999999996, 30.57),
                t.lineTo(46.757999999999996, 14.088),
                t[jm](46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t[co](),
                t.save(),
                t.save(),
                t[co](),
                t[no](),
                t[co](),
                t[co](),
                t[no](),
                i = t[eE](21.6973, 12.0352, 41.5743, 31.9122),
                i[_x](0, qE),
                i[_x](1, VE),
                t.fillStyle = i,
                t[Gx](),
                t[Xu](43.785, 14.683),
                t[Zu](19.486, 14.683),
                t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
                t.lineTo(18.433, 28.649),
                t[Zu](44.837, 28.649),
                t.lineTo(44.837, 15.734),
                t[jm](44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
                t[Ju](),
                t.fill(),
                t.stroke(),
                t[co](),
                t[co](),
                t[no](),
                t[XE] = .5,
                t[Gx](),
                t[Xu](23.709, 36.33),
                t[Zu](4.232, 36.33),
                t.lineTo(4.232, 27.199),
                t.lineTo(5.304, 27.199),
                t[Zu](5.304, 35.259),
                t[Zu](23.709, 35.259),
                t[Zu](23.709, 36.33),
                t[Ju](),
                t.fill(),
                t[To](),
                t[co](),
                t.restore()
            }
        },
        subnetwork: {
            draw: function (t) {
                t[no](),
                t[eo](0, 0),
                t[Gx](),
                t.moveTo(0, 0),
                t.lineTo(60.75, 0),
                t.lineTo(60.75, 42.125),
                t.lineTo(0, 42.125),
                t.closePath(),
                t[iE](),
                t[eo](0, .26859504132231393),
                t.scale(.6694214876033058, .6694214876033058),
                t[eo](0, 0),
                t[B_] = Lx,
                t.lineCap = cm,
                t.lineJoin = ym,
                t[nE] = 4,
                t[no](),
                t[no](),
                t[co](),
                t[no](),
                t.restore(),
                t.restore(),
                t.save();
                var i = t[eE](43.6724, -2.7627, 43.6724, 59.3806);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"),
                i.addColorStop(.9726, HE),
                t[Nx] = i,
                t[Gx](),
                t[Xu](61.732, 16.509),
                t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
                t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
                t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
                t[jm](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
                t[jm](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
                t[jm](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
                t[jm](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
                t[jm](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
                t[jm](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
                t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
                t[jm](85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t[no](),
                t[no](),
                t[Nx] = YE,
                t[Gx](),
                t.moveTo(34.966, 44.287),
                t.lineTo(45.112, 44.287),
                t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287),
                t.lineTo(45.112, 47.497),
                t[Sm](45.112, 47.497, 45.112, 47.497),
                t[Zu](34.966, 47.497),
                t[Sm](34.966, 47.497, 34.966, 47.497),
                t[Zu](34.966, 44.287),
                t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287),
                t[Ju](),
                t[Oo](),
                t.stroke(),
                t[co](),
                t.save(),
                t.fillStyle = ZE,
                t.beginPath(),
                t[Xu](48.306, 48.439),
                t[jm](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
                t[Zu](32.854, 49.52),
                t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
                t[Zu](31.771, 48.578),
                t[jm](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
                t[Zu](47.226, 47.497),
                t[jm](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
                t[Zu](48.306, 48.439),
                t[Ju](),
                t[Oo](),
                t[To](),
                t[co](),
                t.save(),
                t[Nx] = KE,
                t[Gx](),
                t.moveTo(23.302, 42.82),
                t[jm](23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
                t[Zu](55.308, 44.287),
                t[jm](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
                t[Zu](56.775, 40.98),
                t[Zu](23.302, 40.98),
                t[Zu](23.302, 42.82),
                t[Ju](),
                t[Oo](),
                t[To](),
                t.restore(),
                t[no](),
                t.fillStyle = WE,
                t[Gx](),
                t.moveTo(55.307, 21.229),
                t.lineTo(24.771, 21.229),
                t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
                t[Zu](23.301000000000002, 40.933),
                t[Zu](56.774, 40.933),
                t[Zu](56.774, 22.695),
                t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
                t[Ju](),
                t.fill(),
                t.stroke(),
                t[co](),
                t.save(),
                t[no](),
                t.restore(),
                t[no](),
                t[co](),
                t[co](),
                t[no](),
                i = t[eE](29.04, 20.4219, 51.0363, 42.4181),
                i[_x](0, qE),
                i.addColorStop(1, VE),
                t.fillStyle = i,
                t.beginPath(),
                t[Xu](53.485, 23.353),
                t[Zu](26.592, 23.353),
                t[jm](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
                t[Zu](25.427, 38.807),
                t[Zu](54.647, 38.807),
                t[Zu](54.647, 24.517000000000003),
                t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
                t.closePath(),
                t.fill(),
                t[To](),
                t[co](),
                t[co](),
                t[co]()
            }
        }
    };
    for (var iU in tU) mn(JE + iU, tU[iU]);
    var nU = function () {
        this[Uf] = !1;
        var t = this._fn;
        t[Ha]();
        var i = this[wf] || 0,
        n = this._8e.x + i / 2,
        e = this._8e.y + i / 2,
        s = this._8e.width - i,
        r = this._8e[za] - i,
        h = zn.call(this, {
            x: n,
            y: e
        });
        Wn(t, h.x, h.y, !0),
        h = zn[Vr](this, {
            x: n + s,
            y: e
        }),
        Wn(t, h.x, h.y),
        h = zn[Vr](this, {
            x: n + s,
            y: e + r
        }),
        Wn(t, h.x, h.y),
        h = zn.call(this, {
            x: n,
            y: e + r
        }),
        Wn(t, h.x, h.y),
        this[Rf] && (h = zn[Vr](this, {
            x: this[QE],
            y: this[Df]
        }), Wn(t, h.x, h.y)),
        i && t[kf](i / 2)
    },
    eU = 20,
    sU = {
        _fz: !1,
        _jd: null,
        _df: 0,
        _l4: -1,
        _ki: null,
        _dm: function (t) {
            this._jd || (this._jd = [], this._jf = AY),
            this._jd[th](t),
            this._dp(),
            this._kr()
        },
        _kr: function () {
            if (!this._ki) {
                var t = this;
                this._ki = setTimeout(function i() {
                    return t._dp() !== !1 ? void (t._ki = setTimeout(i, t._fc())) : void delete t._ki
                },
                this._fc())
            }
        },
        _fc: function () {
            return Math.max(eU, this._jd[this._l4][tp])
        },
        _dp: function () {
            return this._fq(this._l4 + 1)
        },
        _fq: function (t) {
            if (this._fz) t %= this._df;
            else if (t >= this._jd[qr]) return !1;
            if (this._l4 == t) return !1;
            this._l4 = t;
            var i = this._jd[this._l4],
            n = i._mxache;
            return n || (i[ip] = n = Ri(this[Ga], this[za]), n.g[af](i[Mo], 0, 0), n[Nm] = i._pixels),
            this._k9 = n,
            this[mf] = !0,
            this._e3()
        },
        _dc: function () {
            return this._jd ? (this._fz = !0, this._df = this._jd[qr], 1 == this._df ? this._e3() : void this._kr()) : void this._hl()
        },
        _la: function () {
            this._ki && (clearTimeout(this._ki), delete this._ki)
        },
        _e3: function () {
            var t = this[Rm][nv];
            if (!t || !t[qr]) return !1;
            for (var i = new yH(this, tx, ix, this._k9), n = 0, e = t[qr]; e > n; n++) {
                var s = t[n];
                s[ev]._jg && s.scope._jg[np] ? (t[Zr](n, 1), n--, e--) : s[dh][Vr](s[ev], i)
            }
            return t[qr] > 0
        },
        _myo: function (t, i) {
            this[Rm].addListener(t, i),
            this._fz && !this._ki && this._kr()
        },
        _6s: function (t, i) {
            this[Rm].removeListener(t, i),
            this._dispatcher[ep]() || this._la()
        },
        _hj: function () {
            this._la(),
            this._dispatcher[Ha]()
        },
        _fx: function () {
            var t = this._k9[sp];
            return t || (this._k9[sp] = t = new JY(this._k9, 1)),
            t
        }
    },
    rU = function (t) {
        return t[rp](function (t, i) {
            return 2 * t + i
        },
        0)
    },
    hU = function (t) {
        for (var i = [], n = 7; n >= 0; n--) i.push(!!(t & 1 << n));
        return i
    },
    aU = function (t) {
        this[Mo] = t,
        this.len = this[Mo].length,
        this.pos = 0,
        this[hp] = function () {
            if (this.pos >= this[Mo][qr]) throw new Error("Attempted to read past end of stream.");
            return 255 & t[vu](this.pos++)
        },
        this[ap] = function (t) {
            for (var i = [], n = 0; t > n; n++) i[th](this[hp]());
            return i
        },
        this[op] = function (t) {
            for (var i = "",
            n = 0; t > n; n++) i += String[fp](this.readByte());
            return i
        },
        this[up] = function () {
            var t = this[ap](2);
            return (t[1] << 8) + t[0]
        }
    },
    oU = function (t, i, n) {
        for (var e, s, r = 0,
        h = function (t) {
            for (var n = 0,
            e = 0; t > e; e++) i.charCodeAt(r >> 3) & 1 << (7 & r) && (n |= 1 << e),
            r++;
            return n
        },
        a = [], o = 1 << t, f = o + 1, u = t + 1, c = [], _ = function () {
            c = [],
            u = t + 1;
            for (var i = 0; o > i; i++) c[i] = [i];
            c[o] = [],
            c[f] = null
        },
        d = 0; s = e, e = h(u), !(d++ > n); ) if (e !== o) {
            if (e === f) break;
            if (e < c.length) s !== o && c[th](c[s][Jr](c[e][0]));
            else {
                if (e !== c[qr]) throw new Error(cp);
                c.push(c[s].concat(c[s][0]))
            }
            a.push.apply(a, c[e]),
            c[qr] === 1 << u && 12 > u && u++
        } else _();
        return a
    },
    fU = function (t, i) {
        i || (i = {});
        var n = function (i) {
            for (var n = [], e = 0; i > e; e++) n[th](t[ap](3));
            return n
        },
        e = function () {
            var i, n;
            n = "";
            do i = t.readByte(),
            n += t[op](i);
            while (0 !== i);
            return n
        },
        s = function () {
            var e = {};
            if (e.sig = t[op](3), e.ver = t[op](3), _p !== e.sig) throw new Error(dp);
            e[Ga] = t.readUnsigned(),
            e[za] = t[up]();
            var s = hU(t[hp]());
            e.gctFlag = s[lp](),
            e[vp] = rU(s.splice(0, 3)),
            e.sorted = s.shift(),
            e[bp] = rU(s.splice(0, 3)),
            e[yp] = t[hp](),
            e[gp] = t.readByte(),
            e[mp] && (e.gct = n(1 << e[bp] + 1)),
            i.hdr && i.hdr(e)
        },
        r = function (n) {
            var s = function (n) {
                var e = (t[hp](), hU(t[hp]()));
                n.reserved = e[Zr](0, 3),
                n[eu] = rU(e[Zr](0, 3)),
                n[xp] = e.shift(),
                n[tu] = e[lp](),
                n.delayTime = t.readUnsigned(),
                n[iu] = t[hp](),
                n[Ep] = t[hp](),
                i.gce && i.gce(n)
            },
            r = function (t) {
                t[pp] = e(),
                i.com && i.com(t)
            },
            h = function (n) {
                t.readByte(),
                n[kp] = t[ap](12),
                n[wp] = e(),
                i.pte && i.pte(n)
            },
            a = function (n) {
                var s = function (n) {
                    t.readByte(),
                    n[Tp] = t[hp](),
                    n[Op] = t.readUnsigned(),
                    n[Ep] = t.readByte(),
                    i.app && i.app[Mp] && i.app[Mp](n)
                },
                r = function (t) {
                    t[Sp] = e(),
                    i.app && i.app[t[jp]] && i.app[t.identifier](t)
                };
                switch (t[hp](), n.identifier = t[op](8), n.authCode = t.read(3), n[jp]) {
                    case "NETSCAPE":
                        s(n);
                        break;
                    default:
                        r(n)
                }
            },
            o = function (t) {
                t[Mo] = e(),
                i.unknown && i[Tp](t)
            };
            switch (n[Ip] = t[hp](), n[Ip]) {
                case 249:
                    n.extType = Ap,
                s(n);
                    break;
                case 254:
                    n[Cp] = Rp,
                r(n);
                    break;
                case 1:
                    n[Cp] = Lp,
                h(n);
                    break;
                case 255:
                    n.extType = Pp,
                a(n);
                    break;
                default:
                    n[Cp] = Tp,
                o(n)
            }
        },
        h = function (s) {
            var r = function (t, i) {
                for (var n = new Array(t.length), e = t[qr] / i, s = function (e, s) {
                    var r = t[Xr](s * i, (s + 1) * i);
                    n.splice[eh](n, [e * i, i][Jr](r))
                },
                r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++) for (var f = r[o]; e > f; f += h[o]) s(f, a),
                a++;
                return n
            };
            s[ru] = t[up](),
            s.topPos = t[up](),
            s[Ga] = t[up](),
            s[za] = t[up]();
            var h = s[Ga] * s[za],
            a = hU(t[hp]());
            s.lctFlag = a[lp](),
            s.interlaced = a.shift(),
            s.sorted = a[lp](),
            s.reserved = a[Zr](0, 2),
            s[Dp] = rU(a[Zr](0, 3)),
            s[su] && (s.lct = n(1 << s[Dp] + 1)),
            s.lzwMinCodeSize = t[hp]();
            var o = e();
            s[Np] = oU(s[$p], o, h),
            s[Bp] && (s.pixels = r(s[Np], s[Ga])),
            i.img && i.img(s)
        },
        a = function () {
            var n = {};
            switch (n[Fp] = t.readByte(), String[fp](n.sentinel)) {
                case "!":
                    n[Io] = Gp,
                r(n);
                    break;
                case ",":
                    n[Io] = m_,
                h(n);
                    break;
                case ";":
                    n.type = zp,
                i.eof && i.eof(n);
                    break;
                default:
                    throw new Error(Hp + n[Fp].toString(16))
            }
            zp !== n[Io] && setTimeout(a, 0)
        },
        o = function () {
            s(),
            setTimeout(a, 0)
        };
        o()
    },
    uU = "";
    i[sb] && i[sb](Yp,
    function (t) {
        if (t[Oa] && t.shiftKey && t[Up] && 73 == t[Wp]) {
            var i = dY[lh] + qp + dY[Vp] + Xp + dY[Zp] + fo + dY[Kp] + fo + dY[Jp] + uU;
            dY[gg](i)
        }
    },
    !1);
    var cU = Qp;
    uU = tk + decodeURIComponent(ik);
    var _U, dU, lU, vU = t,
    bU = nk,
    yU = ek,
    gU = sk,
    mU = rk,
    xU = hk,
    EU = ak,
    pU = ok,
    kU = fk,
    wU = uk,
    TU = ck,
    OU = _k,
    MU = dk,
    SU = lk,
    jU = vk,
    IU = oh,
    AU = bk,
    CU = yk,
    RU = gk,
    LU = mk,
    PU = xk,
    DU = Ek,
    NU = vU[mU + pk];
    NU && (dU = vU[jU + kk][xU + wk], NU.call(vU, Qn, AU), NU[Vr](vU, te, LU), NU[Vr](vU,
    function () {
        BU && BU == cU && (VU = !1)
    },
    CU));
    var $U, BU, FU, GU = 111,
    zU = function (t, i) {
        i || (i = "");
        try {
            lU.call(t, i, 6 * GU, 1 * GU)
        } catch (n) { }
    },
    HU = !0,
    YU = !0,
    UU = !0,
    WU = !0,
    qU = !0,
    VU = !0,
    XU = 2048,
    ZU = function (t, i) {
        return Jn ? Jn(t, i) || "" : void 0
    };
    if (i[Xa]) {
        var KU = i[Xa](Mk);
        KU.style[Sk] = M_,
        KU[fu] = function (t) {
            var i = t.target[jk],
            n = dU;
            if (n.length > 0 || "" === n || Ik == n || Ak == n) return void this.parentNode.parentNode.removeChild(this.parentNode);
            var e = i.String.fromCharCode;
            i[mU + pk](function () {
                Kn(e) != $U && (wW[sh]._jv = null)
            },
            LU),
            this.parentNode[Lm][Pm](this[Lm])
        };
        var JU = i[Xa](y_);
        JU[_a][Ga] = D_,
        JU[_a].height = D_,
        JU[_a].overflow = O_,
        JU.appendChild(KU),
        i.documentElement.appendChild(JU)
    }
    if (i[IU + Ck]) {
        var QU = i[IU + Ck](wU + Rk);
        QU[_a].display = M_,
        QU[fu] = function (t) {
            var i = Lk,
            n = t[xc][i + Pk];
            _U = n[Dk].now();
            var e = n[TU + OU + Nk + MU + $k][SU + Io];
            lU = e[bU + Bk],
            Yz && (n = vU);
            var s = n[mU + pk];
            s.call(vU, se, LU),
            s[Vr](vU, re, PU),
            s[Vr](vU, ae, CU),
            s.call(vU, ie, RU),
            s[Vr](vU, ee, DU),
            s.call(vU, he, LU),
            s.call(vU, ne, LU),
            this.parentNode[Lm].removeChild(this[Lm])
        };
        var JU = i.createElement(y_);
        JU[_a][Ga] = D_,
        JU[_a][za] = D_,
        JU[_a].overflow = O_,
        JU[Iu](QU),
        i[wd][Iu](JU)
    }
    var tW = {
        position: Fk,
        userSelect: M_,
        outline: M_,
        transformOrigin: Gk,
        "-webkit-tap-highlight-color": Lx
    },
    iW = zk;
    gi(Uh + iW, tW);
    var nW = {
        width: I_,
        height: I_,
        position: S_,
        overflow: O_,
        textAlign: pa,
        outline: M_,
        tapHighlightColor: Lx,
        userSelect: M_
    },
    eW = Hk;
    gi(Uh + eW, nW);
    var sW = Yk,
    rW = {
        overflow: O_,
        "text-align": pa,
        "-webkit-tap-highlight-color": Lx,
        outline: M_
    };
    gi(Uh + sW, rW);
    var hW = S(function (t) {
        this[Uk] = new oW,
        this._mi = new Qz,
        this._8u = [],
        this[Wk] = [],
        this._liingList = [],
        this._8s = {},
        this.bounds = new hH,
        this._ju = new lW,
        this._viewport = new vW,
        this._ju.listener = function (t) {
            this._7m(t)
        } [mh](this),
        this[qk](),
        this[Vk](t)
    },
    {
        _my9: null,
        _j9: null,
        _mi: null,
        _mx8: null,
        _ju: null,
        _mxu: function (t) {
            return t ? (this[Xk] || (this._6ks = {}), this[Xk][t] ? !1 : (this[Xk][t] = !0, void this.invalidate())) : this[Zk]()
        },
        _9m: function (t) {
            return this._6ks && this._6ks[t]
        },
        isInvalidate: function () {
            return this._6k
        },
        clear: function () {
            this._mi[Ha](),
            this._mx8[qr] = 0,
            this._8s = {},
            this._n0k = !1,
            this[Zk]()
        },
        _7i: function () {
            this[Kk](Jk),
            this._2s()
        },
        _2s: function () {
            this._mxu(Qk)
        },
        invalidate: function (t) {
            (t || !this._6k) && (this._6k = !0, this._la || (this[tw] = requestAnimationFrame(this._fa[mh](this))))
        },
        _7k: function (t) {
            return this._la = t,
            t ? void (this._jvingID && (cancelAnimationFrame(this[tw]), this[tw] = null)) : void (this._6k && this.invalidate(!0))
        },
        _fa: function () {
            this._jvingID = null,
            this._6k = !1;
            var t = this[rb];
            this[rb] || (this._mxq(), this._n0k = !0),
            this[iw](!t),
            this._3p(),
            this._jv(),
            this._27()
        },
        _mxx: function (t) {
            this[nw] = t || this.fullRefresh,
            (t || this._6ks[Jk]) && this._9t(),
            (t || this._6ks[ew]) && this._7n(),
            this[sw](t),
            this._4r(t),
            this[Xk] = {}
        },
        _3p: function () {
            this[Wk][qr] = 0;
            var t = this._viewport;
            if (this._mi[au](function (i) {
                if (i.__hm !== !1) {
                    var n = this[rw](i);
                    t.intersects(n.x, n.y, n.width, n[za]) && this[Wk][th](i)
                }
            },
            this), this[Wk] = this._ht(this[Wk]), !this[nw]) {
                var i = this[Uk];
                this[hw][qr] = 0,
                i[aw](this[ow]),
                i._i0() || this._mx8[au](function (t) {
                    var n = this[rw](t);
                    i._e9(n.x, n.y, n[Ga], n[za]) && this[hw].push(t)
                },
                this)
            }
        },
        _ht: function (t) {
            return Yz ? t = d(t, this._9s) : t[fw](this._9s),
            t
        },
        _9s: function (t, i) {
            return t = t.zIndex || 0,
            i = i[uw] || 0,
            t - i
        },
        _my8: function (t) {
            return t[cw]
        },
        _jv: function () {
            if (this._myk) return this._eg(),
            this._7l(!0),
            void this[_w](this[dw], this[Wk]);
            this._7l(this._myuffer);
            var t = this._my6,
            i = this[dw];
            i[no](),
            this[lw] && (ue(i), i.drawImage(this._myuffer[Za], this[lw].x, this[lw].y)),
            t._k5(i, this._ee.bind(this)),
            this._eg(),
            this[_w](i, this[hw]),
            i[co]()
        },
        _7l: function (t) {
            this._mxuCanvasSizeFlag ? (this._mxuCanvasSizeFlag = !1, this._j9.setSize(this[zx], this[Hx])) : t && fe(this._j9)
        },
        _9t: function () {
            var t = this[Ga],
            i = this[za];
            return this[zx] == t && this._height == i ? !1 : (this._width = t, this[Hx] = i, void (this[vw] = !0))
        },
        _4r: function (t) {
            if (!t && !this[Xk][Qk]) return !1;
            var i = this._ju[bw]([0, 0]),
            n = this[so],
            e = this._width / n,
            s = this._height / n,
            r = this[Ao],
            h = this._viewport;
            if (h.x == i[0] && h.y == i[1] && h[Ga] == e && h.height == s && h[Ao] == r) return !1;
            var a = h[wx]();
            return this[ow].set(i[0], i[1], e, s, r, n),
            this._3q(this[ow], a, t),
            !0
        },
        _3q: function (t, i, n) {
            this[nw] || n || (this[lw] = this._he(i, t))
        },
        _7m: function () {
            if (this._n0k) {
                if (this._la) {
                    var t;
                    this[yw] ? this._mxurrentMatrix[gw] = t = cW.mul([], this._ju.m, cW[mw]([], this._mxurrentMatrix.m)) : t = this._ju.m,
                    this._57(t)
                }
                this[Kk](ew),
                this._2s()
            }
        },
        _57: function (t) {
            this.__mxssMatrix = t,
            bW[Oc](this._j9, E_, t ? xw + t.join($h) + ")" : "")
        },
        _7n: function () {
            var t = this._mxurrentMatrix;
            if (this[yw] = {
                tx: this._ju.m[4],
                ty: this._ju.m[5],
                m: this._ju.m[Xr](),
                scale: this._ju._h4(),
                rotate: this._ju._er()
            },
            this[Ew] && this._57(null), !this[nw]) {
                if (this._2q(this[yw], t), !t || t[so] != this[yw][so]) return this._7w(this[yw][so], t ? t[so] : null),
                void (this[nw] = !0);
                if (!t || t[Ao] != this[yw].rotate) return this._5g(this[yw].rotate, t ? t[Ao] : null),
                void (this._myk = !0);
                var i = t.m[4] - this[yw].m[4],
                n = t.m[5] - this[yw].m[5],
                e = this.ratio;
                i *= e,
                n *= e;
                var s = 1e-4; (Math.abs(i - Math[po](i)) > s || Math.abs(n - Math[po](n)) > s) && (this[nw] = !0)
            }
        },
        _7o: function () {
            var t = this[xo],
            i = t[Qr]();
            t[Ha](),
            this._mi[au](function (i) {
                i[pw] !== !1 && t.add(this[rw](i))
            },
            this),
            t[Su](i) || this._3r(t, i)
        },
        _3r: function () { },
        _n0k: !1,
        _mxq: function () { },
        _9y: function (t) {
            var i = t.ratio;
            t[so](i, i),
            t[E_][eh](t, this._ju.m)
        },
        render: function (t, i) {
            i && i[qr] && (t[no](), this._9y(t), i.forEach(function (i) {
                if (t[no](), i[kw] !== !1) try {
                    i[_w](t)
                } catch (n) {
                    console.error(n)
                }
                t[co]()
            },
            this), t[co]())
        },
        setParent: function (t) {
            N(t) && (t = i[ww](t)),
            this._mn != t && (this._mn && this._my9 && (P(this._mn, sW), this._mn[Pm](this[Tw])), this._mn = t, this._mn && (L(this._mn, sW), this._mn[Iu](this._7q()), this._7i()))
        },
        _7q: function () {
            return this[Tw] || this[qk](),
            this._my9
        },
        _mxj: function () {
            var t = Ri(!0);
            Xn(t.g),
            t[Eh] = iW;
            var n = i[Xa](y_);
            return n[sb](Bb,
            function (t) {
                return i.activeElement == this ? (t[Ah] && t[Ah](), !1) : void 0
            } .bind(n), !1),
            n[Eh] = eW,
            n.appendChild(t),
            n[Ow] = 0,
            this._j9 = t,
            this[Tw] = n,
            this[dw] = this._j9.getContext(Ka),
            t
        },
        toLogical: function (t, i) {
            return t instanceof Object && (Q(t) && (t = this._8p(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)),
            this._ju[bw]([t, i])
        },
        toCanvas: function (t, i) {
            return this._ju[E_]([t, i])
        },
        _8p: function (t) {
            return mi(t, this[Tw])
        },
        _e1: function (t, i, n) {
            if (t[o_] instanceof Function) return t[o_](i, n);
            var e = this[rw](t);
            return e ? n ? hH.intersects(e.x, e.y, e.width, e[za], i[0] - n, i[1] - n, n + n, n + n) : hH[Zc](e.x, e.y, e[Ga], e[za], i[0], i[1]) : t
        },
        hitTest: function (t, i) {
            return this._8q(t, i)
        },
        _8q: function (t, i) {
            i = this._9z(i),
            t = this.toLogical(t);
            for (var n, e = this[Wk][qr]; --e >= 0; ) if (n = this[Wk][e], this._e1(n, t, i)) return n
        },
        _9z: function (t) {
            return (t === n || null === t) && (t = Jz.SELECTION_TOLERANCE),
            t ? t / this[so] : 0
        },
        getUIByMouseEvent: function (t, i) {
            if (t[Mw]) return this._mi[hl](t[Mw]);
            var n = this._8q(t, i);
            return t[Mw] = n ? n.id : -1,
            n
        },
        _8s: null,
        invalidateUI: function (t) {
            this._8s[t.id] = t,
            this[Zk]()
        },
        _n00: function (t) {
            t[mo] instanceof Function && t[mo](this)
        },
        _mxl: function (t, i) {
            t.__jc && this._h9(t.__jc);
            var n = t[pw];
            if (t[pw] = this._di(t, i), !t.__hm) return n;
            var e = t.__jc;
            this._n00(t);
            var s = this._my8(t);
            t[Sw] = {
                x: s.x,
                y: s.y,
                width: s[Ga],
                height: s.height
            };
            var r = t[pw] !== n || !hH[Su](e, s);
            return r && t.__jc && this._h9(t.__jc),
            r
        },
        _di: function (t) {
            return t[kw] !== !1
        },
        _$r: function (t) {
            this._mi[au](function (i) {
                this[jw](i, t)
            },
            this),
            this._8s = {},
            this._7o()
        },
        _n0z: function (t) {
            var i = this[so];
            if (t) return this._$r(i);
            var n = this[Iw];
            this[Iw] = !1;
            for (var e in this._8s) {
                var s = this._8s[e];
                n ? this[jw](s, i) : n = this[jw](s, i)
            }
            this._8s = {},
            n && this._7o()
        },
        _8u: null,
        _27: function () {
            if (!this._8u.length) return !1;
            var t = this._8u;
            this._8u = [],
            t[au](function (t) {
                try {
                    var i = t[Vr],
                    n = t[ev],
                    e = t[tp];
                    n instanceof Object ? i = i[mh](n) : n && !e && (e = parseInt(n)),
                    e ? setTimeout(i, e) : i()
                } catch (s) { }
            },
            this),
            this._6k && this._fa()
        },
        _dv: function (t, i, n) {
            this._8u[th]({
                call: t,
                scope: i,
                delay: n
            }),
            this._6k || this._27()
        },
        _4f: function (t, i) {
            for (var n = this[Wk], e = 0, s = n[qr]; s > e; e++) if (t[Vr](i, n[e]) === !1) return !1
        },
        _dw: function (t, i) {
            this._mi.forEach(t, i)
        },
        _$y: function (t, i) {
            for (var n = this[Wk], e = n[qr] - 1; e >= 0; e--) if (t[Vr](i, n[e]) === !1) return !1
        },
        _4a: function (t, i) {
            this._mi[Aw](t, i)
        },
        _4o: function () {
            return this[xo]
        },
        _g7: function (t, i, n) {
            t /= this[so] || 1,
            this._jq(t, i, n)
        },
        _jq: function (t, i, e) {
            if (this[rb] && (i === n || null === i)) {
                var s = this[Cw](this[Ga] / 2, this[za] / 2);
                i = s[0] || 0,
                e = s[1] || 0
            }
            return this._ju[so](t, [i || 0, e || 0])
        },
        _eh: function (t, i) {
            this._ju[eo]([t, i], !0)
        },
        _myg: function (t, i, n, e) {
            if (n == this.scale && e !== !1) {
                var s = this[Ua];
                s != (0 | s) && (t = Math.round(t * s) / s, i = Math.round(i * s) / s)
            }
            this._ju[Rw]([t, i], n)
        },
        _js: function (t, i) {
            return this._jq(this._ei, t, i)
        },
        _i8: function (t, i) {
            return this._jq(1 / this._ei, t, i)
        },
        _1w: function () {
            var t = this._4o();
            if (!t[Hf]()) {
                var i = this[Ga] / t.width,
                n = this[za] / t.height,
                e = Math.min(i, n);
                return e = Math.max(this._gz, Math.min(this._gv, e)),
                {
                    scale: e,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _ei: 1.3,
        _gv: 10,
        _gz: .1,
        _myk: !1,
        _7w: function () { },
        _5g: function () { },
        _2q: function () { },
        _eg: function () {
            this._myuffer = null,
            this[Uk]._ks()
        },
        _ee: function (t) {
            var i = this._ju,
            n = this._j9[Ua],
            e = this[so],
            s = i._er();
            if (!s) {
                var r = i[E_]([t[0], t[1]]);
                return r[0] *= n,
                r[1] *= n,
                n *= e,
                r[2] = t[2] * n,
                r[3] = t[3] * n,
                r
            }
            var h = new hH,
            a = i[E_]([t[0], t[1]]);
            return h.add(a[0], a[1]),
            a = i[E_]([t[0] + t[2], t[1]]),
            h.add(a[0], a[1]),
            a = i[E_]([t[0], t[1] + t[3]]),
            h.add(a[0], a[1]),
            a = i[E_]([t[0] + t[2], t[1] + t[3]]),
            h.add(a[0], a[1]),
            [h.x * n, h.y * n, h[Ga] * n, h.height * n]
        },
        _he: function (t, n) {
            var e = n._3n(t.x, t.y, t.width, t[za]);
            if (e) {
                var s = this._j9,
                r = this[so] * this[Ua],
                h = this[Uk],
                a = {},
                o = 1e-6;
                e.x > o && (a[pa] = n._4h(0, 0, e.x, n[za], r)),
                n[Ga] - e[Jh] > o && (a[Jh] = n._4h(e.right, 0, n.width - e[Jh], n[za], r)),
                e.y > o && (a.top = n._4h(e.x, 0, e[Ga], e.y, r)),
                n.height - e[Kh] > o && (a[Kh] = n._4h(e.x, e.bottom, e[Ga], n.height - e.bottom, r)),
                U(a) || h._4k(a);
                var f = n._hw(t.x, t.y),
                u = (f[0] - e.x) * r,
                c = (f[1] - e.y) * r,
                _ = e[Ga] * r,
                d = e.height * r;
                u = Math[po](u),
                c = Math[po](c),
                _ = Math.round(_),
                d = Math.round(d);
                var l = this[Lw];
                return l || (l = this[Lw] = i[Xa](Za), l.g = l[ad](Ka)),
                l.width = _,
                l.height = d,
                ue(l.g),
                l.g.drawImage(s, u, c),
                u = f[0] * r - u,
                c = f[1] * r - c,
                {
                    x: u,
                    y: c,
                    canvas: l
                }
            }
        },
        _ls: function (t, i, n, e) {
            this[Uk]._mh(t, i, n, e)
        },
        _h9: function (t) {
            this[Uk]._i1(t)
        }
    });
    Object[gc](hW.prototype, {
        width: {
            get: function () {
                return this._my9.clientWidth
            }
        },
        height: {
            get: function () {
                return this[Tw].clientHeight
            }
        },
        rotate: {
            get: function () {
                return this._ju._er()
            }
        },
        tx: {
            get: function () {
                return this._ju._8x()[0]
            }
        },
        ty: {
            get: function () {
                return this._ju._8x()[1]
            }
        },
        ratio: {
            get: function () {
                return this._j9 ? this._j9[Ua] : void 0
            }
        },
        scale: {
            get: function () {
                return this._ju._h4()
            },
            set: function (t) {
                this._g7(t)
            }
        },
        renderScale: {
            get: function () {
                return this[so] * this[Ua]
            }
        },
        uis: {
            get: function () {
                return this._mi
            }
        },
        length: {
            get: function () {
                return this._mi[qr]
            }
        },
        viewportBounds: {
            get: function () {
                return this[ow].getGlobalBounds()
            }
        }
    });
    var aW, oW = S({
        constructor: function () {
            this._h2 = [],
            this._jc = new hH,
            this._h6 = $z ? 20 : 50
        },
        _h6: 20,
        _h2: null,
        _lx: !1,
        _jc: null,
        _ks: function () {
            this._lx = !1,
            this._h2[qr] = 0,
            this._viewportClips = null,
            this._jc[Ha]()
        },
        _i0: function () {
            return 0 == this._h2.length && !this[Pw]
        },
        _mh: function (t, i, n, e) {
            0 >= n || 0 >= e || this._h2.push([t, i, n, e])
        },
        _i1: function (t) {
            this._mh(t.x, t.y, t[Ga], t.height)
        },
        _4k: function (t) {
            var i = this._jc;
            for (var n in t) {
                var e = t[n],
                s = e[Dw]();
                i.add(s)
            }
            this[Pw] = t
        },
        _myd: function (t, i) {
            for (var n = [], e = this._h2, s = 0, r = e.length; r > s; s++) {
                var h = e[s];
                t[Zc](h[0], h[1], h[2], h[3]) && (n.push(h), this._jc.addRect(h[0], h[1], h[2], h[3]))
            }
            this._h2 = n,
            this._lx = i || n[qr] >= this._h6
        },
        _e9: function (t, i, n, e) {
            if (!this._jc[yl](t, i, n, e)) return !1;
            if (this._lx) return !0;
            if (this._viewportClips) {
                var s = this[Pw];
                for (var r in s) if (s[r][Zc](t, i, n, e)) return !0
            }
            for (var h, a = 0,
            o = this._h2[qr]; o > a; a++) if (h = this._h2[a], hH[Zc](t, i, n, e, h[0], h[1], h[2], h[3])) return !0;
            return !1
        },
        _k5: function (t, i) {
            if (this._i0()) return !1;
            if (t[Gx](), this._lx) {
                var n = i([this._jc.x, this._jc.y, this._jc[Ga], this._jc.height]);
                return ce(t, n[0], n[1], n[2], n[3]),
                void t.clip()
            }
            if (this._viewportClips) for (var e in this[Pw]) {
                var n = this[Pw][e][Nw];
                ce(t, n[0], n[1], n[2], n[3])
            }
            for (var s = this._h2,
            r = 0,
            h = s[qr]; h > r; r++) {
                var n = i(s[r]);
                ce(t, n[0], n[1], n[2], n[3])
            }
            t[iE]()
        }
    });
    oW._toIntRect = function (t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t[Ga], e = t.height, t = t.x),
        n = V(t + n) - (t = q(t)),
        e = V(i + e) - (i = q(i)),
        [t, i, n, e]
    },
    oW._d7 = q,
    oW._gx = V,
    lY.NAVIGATION_BUTTON = $w,
    lY.NAVIGATION_SCROLLBAR = Bw,
    Jz[Fw] = lY[Gw];
    var fW = S({
        _jv: function () {
            T(this, fW, zw, arguments),
            this[Hw]._jv()
        },
        _9s: function (t, i) {
            return t = t[zf][uw] || 0,
            i = i[zf][uw] || 0,
            t - i
        },
        "super": hW,
        constructor: function (t, n) {
            this._kj = t,
            N(n) && (n = i[ww](n)),
            n && n[fl] || (n = i[Xa](y_)),
            O(this, fW, [n]),
            this._topCanvas = new ur(this, this[Tw]),
            this._fm = [],
            this._kj._$b.addListener(this._1x, this),
            this._kj._1i.addListener(this[Yw], this),
            this._kj._17[sv](this._82, this),
            this._kj._$m[sv](this._2o, this),
            this._kj._$q.addListener(this._40, this),
            this[Uw] = {},
            this._3v(Jz[Fw], !0)
        },
        _57: function (t) {
            T(this, fW, Ww, arguments),
            this[Hw]._57(t)
        },
        _go: function (t) {
            return t.id || (t = this._mi[hl](t)),
            t ? (this._mi[Oh](t), t[jy](), t[Sw] && this._h9(t.__jc), void (this[Iw] = !0)) : !1
        },
        _gn: function () {
            this._mi[au](function (t) {
                t[jy]()
            }),
            this._mi[Ha]()
        },
        _di: function (t, i) {
            var n = t[Mo] || t;
            return n._$x && (n._$x = !1, n._hm = this._55(n, i)),
            n._hm !== !1
        },
        _55: function (t, i) {
            return this._3w(t, i) ? !this._kj._hmFilter || this._kj[qw](t, i) !== !1 : !1
        },
        _n0b: function (t) {
            return this._kj._3f == er(t)
        },
        _3w: function (t, i) {
            if (t.visible === !1) return !1;
            if (!(t instanceof mW)) return this._kj._3f != er(t) ? !1 : !t._et;
            var n = t[Du],
            e = t[Ru];
            if (!n || !e) return !1;
            if (n == e && !t[Uu]()) return !1;
            if (t[Vw]()) {
                var s = t[Lu](!0);
                if (s && !s._di(t, i)) return !1
            }
            var r = this._di(n, i),
            h = this._di(e, i);
            return r && h ? !0 : !1
        },
        _my8: function (t) {
            return t._n0k ? {
                x: t.$x + t[Xw].x,
                y: t.$y + t[Xw].y,
                width: t.uiBounds.width,
                height: t[Xw][za]
            } : void 0
        },
        _30: function (t) {
            var i = this._kt(t);
            if (i) {
                var n = this._my8(i);
                if (n) return new hH(n)
            }
        },
        _e1: function (t, i, n) {
            return t.hitTest(i[0], i[1], n)
        },
        hitTest: function (t, i) {
            var n = T(this, fW, o_, arguments);
            if (n) {
                t = this[Cw](t),
                i = this._9z(i);
                var e = n[o_](t[0], t[1], i, !0);
                if (e instanceof wW) return e
            }
            return n
        },
        _3x: function (t) {
            return this.getUIByMouseEvent(t)
        },
        _7l: function () {
            T(this, fW, Zw, arguments),
            this[Hw]._ii(this[Ga], this[za])
        },
        _kw: 1,
        _mx8: null,
        _8z: null,
        _91: null,
        _mi: null,
        _mn: null,
        _j9: null,
        _my6: null,
        _6k: !1,
        _n0k: !1,
        _ju: null,
        _4f: function (t, i) {
            for (var n = this._mx8,
            e = 0,
            s = n[qr]; s > e; e++) if (t[Vr](i, n[e]) === !1) return !1
        },
        _dw: function (t, i) {
            this._mi[au](t, i)
        },
        _$y: function (t, i) {
            for (var n = this[Wk], e = n[qr] - 1; e >= 0; e--) if (t[Vr](i, n[e]) === !1) return !1
        },
        _4a: function (t, i) {
            this._mi.forEachReverse(t, i)
        },
        _3q: function (t) {
            T(this, fW, Kw, arguments),
            this._viewportChanged = {
                value: t
            }
        },
        _mxq: function () {
            this._4r(!0),
            this[Jw] || (this[Jw] = !0, this._kj && this._kj[Qw] && this._ju.translateTo([this[Ga] / 2, this[za] / 2]))
        },
        _fa: function () {
            if (!this[np] && this._6k) {
                if (this._jvingID = null, this._6k = !1, this._n0k && this._kj && this._kj._$x && (this._kj._$x = !1, this._kj[au](function (t) {
                    t[tT](!0)
                })), T(this, fW, iT, arguments), this[nT]) {
                    this._7y && this._7y._jl();
                    var t = this._91Changed.value,
                    i = this[nT].old;
                    this[nT] = null,
                    this._kj._41(new gH(this._kj, eT, t, i))
                }
                this[sT] && (this[sT] = !1, this._7y && this._7y._3q && this._7y._3q(this[ow].width * this[ow][so], this[ow][za] * this[ow].scale), this._kj._41(new gH(this._kj, Qk, this._viewport)))
            }
        },
        _fm: null,
        _mxl: function (t) {
            var i = t[zf];
            if (!t._1g && !i._6k && !i._$x) return !1;
            var n = t[mf];
            return n = T(this, fW, jw, arguments) || n
        },
        _n00: function (t) {
            var i = t.$data;
            i[rT] && (i[rT] = !1, t._44()),
            i.__6k && i._ib() && (t._5i(), i.__6k = !1),
            (t._1g || i._6k) && (i._6k = !1, t.validate())
        },
        _gt: function (t, i) {
            var n = t[Ua];
            t[so](n, n),
            t[E_][eh](t, this._ju.m);
            for (var e = this.renderScale,
            s = [], r = 0, h = i.length; h > r; r++) {
                var a = i[r];
                a._jv(t, e),
                a._j5 && a._j5[qr] && s[th](a)
            }
            if (s[qr]) for (r = 0, h = s[qr]; h > r; r++) s[r]._9i(t, e)
        },
        render: function (t, i) {
            if (i[qr]) {
                if (t[no](), $z) try {
                    this._gt(t, i)
                } catch (n) { } else this._gt(t, i);
                t[co]()
            }
        },
        _fe: function (t, i, n) {
            t[no](),
            t[eo](-n.x * i, -n.y * i),
            t.scale(i, i);
            var e, s, r = this._mi._j7[Xr]();
            r = this._ht(r);
            for (var h = [], a = 0, o = r[qr]; o > a; a++) e = r[a],
            e.__hm && (s = this[rw](e), n.intersectsRect(s.x, s.y, s.width, s[za]) && (e._jv(t, i), e._j5 && e._j5[qr] && h.push(e)));
            if (h[qr]) for (a = 0, o = h.length; o > a; a++) h[a]._9i(t, i);
            t[co]()
        },
        _15: function () { },
        _1y: function () {
            for (var t, i, n = this._mi._j7,
            e = new hH,
            s = n[qr] - 1; s >= 0; s--) t = n[s],
            t._hm && (i = t[Xw], e[hT](t.$x + i.x, t.$y + i.y, i[Ga], i[za]));
            var r = this._91;
            this._91 = e,
            e[Su](r) || this._15(r, e)
        },
        _66: function () {
            this._mx8[qr] = 0,
            this._8z = {}
        },
        _ku: function () {
            this._ks()
        },
        _hj: function () {
            this._ks(),
            this[np] = !0,
            this._6k = !1,
            this[Hw][Ha](),
            this._8u[qr] = 0,
            this._7y && (this._7y._hj(), delete this._7y)
        },
        _kt: function (t) {
            return this._mi[hl](t.id || t)
        },
        _$l: function (t) {
            return this._dt(t)
        },
        _fw: function (t, i) {
            var n = this[aT](t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _dt: function (t, i) {
            var n = this.toLogical(t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _$j: null,
        _40: function (t) {
            var i = t[Vo],
            n = t.data;
            if (n) if (this[rb]) {
                var e, s;
                if (B(n)) for (var r = 0,
                h = n[qr]; h > r; r++) s = n[r].id,
                e = this._mi[hl](s),
                e && (e[oT] = i.containsById(s), e[fT]());
                else {
                    if (s = n.id, e = this._mi[hl](s), !e) return;
                    e[oT] = i.containsById(s),
                    e[fT]()
                }
                this[Kk]()
            } else {
                this._$j || (this._$j = {});
                var e, s;
                if (B(n)) for (var r = 0,
                h = n.length; h > r; r++) s = n[r].id,
                this._$j[s] = !0;
                else s = n.id,
                this._$j[s] = !0
            }
        },
        _kj: null,
        _mxv: function (t) {
            var i = t[uT];
            return i ? new i(t, this._kj) : void 0
        },
        _1x: function (t) {
            if (!this._n0k) return !1;
            var i = t.source,
            n = t.kind;
            b_ == n && this._kj.invalidateVisibility(),
            uT == n ? (this._go(i.id), this._kf(i)) : cT == n && i._ib() && t.value && this._5l(i);
            var e = this._mi[hl](i.id);
            e && e[rb] && e[_T](t) && this._mxu()
        },
        _3h: function (t) {
            var i = this._kt(t);
            i && (i[dT](), this._mxu())
        },
        _n04: function (t) {
            if (!this[rb]) return !1;
            switch (t[jd]) {
                case MH[cv]:
                    this._kf(t.data);
                    break;
                case MH[dv]:
                    this._g6(t[Mo]);
                    break;
                case MH.KIND_CLEAR:
                    this._in(t[Mo])
            }
        },
        _ks: function () {
            this[Uw] = {},
            this._gn(),
            this.clear()
        },
        _n0v: null,
        _kf: function (t) {
            var i = this[lT](t);
            i && (this._mi.add(i), this[rb] && (this[Uw][t.id] = t), this._mxu())
        },
        _g6: function (t) {
            if (Array[mc](t)) {
                for (var i, n = [], e = 0, s = t.length; s > e; e++) i = t[e].id,
                n[th](i),
                delete this._n0v[i];
                t = n
            } else t = t.id,
            delete this[Uw][t],
            t = [t];
            t[au](function (t) {
                this._go(t)
            },
            this),
            this[Kk]()
        },
        _in: function () {
            this._ks()
        },
        _82: function (t) {
            return this._n0k ? void (t[Vo] instanceof xW && !this[Uw][t.source.id] && (t[Fl] && (this._3h(t[Fl]), t[Fl][Lv] = !0), t.value && (this._3h(t[bh]), t[bh][Lv] = !0), this._5l(t[Vo]))) : !1
        },
        _2o: function (t) {
            return this._n0k ? void (t[Vo] instanceof xW && !this[Uw][t.source.id] && this._5l(t[Vo])) : !1
        },
        _2w: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[Lu](!0);
                if (!i) return t[vT] = !1,
                void t.validateEdgeBundle();
                i[mo](this._kj),
                i[bT](function (t) {
                    t.validateEdgeBundle()
                })
            }
        },
        _$r: function (t) {
            var i, n = (this._kj, this._kj[Z_]),
            e = this._mi,
            s = [],
            r = 1;
            if (n.forEachByDepthFirst(function (t) {
                return t instanceof mW ? (this._2w(t), void s[th](t)) : (i = this[lT](t), void (i && (e.add(i), t[yT] = r++)))
            },
            this), e.length) for (var h = e._j7,
            r = h[qr] - 1; r >= 0; r--) i = h[r],
            this._3z(i, i[zf], t);
            for (var a, r = 0,
            o = s[qr]; o > r; r++) if (a = s[r], i = this[lT](a)) {
                this._3z(i, a, t),
                e.add(i);
                var f = a.fromAgent,
                u = a[Ru],
                c = f[yT] || 0;
                f != u && (c = Math.max(c, u[yT] || 0)),
                a.__l4 = c
            }
            if (s[qr] && e._j7[fw](function (t, i) {
                return t.$data.__l4 - i[zf].__l4
            }), this._$j) {
                var _ = n[X_];
                for (var d in this._$j) if (_[nl](d)) {
                    var i = e[hl](d);
                    i && (i[oT] = !0)
                }
                this._$j = null
            }
            this._7o()
        },
        _n0z: function (t, i) {
            if (t) return this._$r();
            var n = this[Iw];
            this[Iw] = !1;
            for (var e in this[Uw]) {
                var s = this[Uw][e];
                s instanceof xW ? this._5l(s) : this._5k(s)
            }
            this[Uw] = {};
            for (var r, h, a = this._mi._j7,
            o = [], f = a[qr] - 1; f >= 0; f--) r = a[f],
            h = r[zf],
            h instanceof mW ? (this._2w(h), o.push(r)) : this._3z(r, h, i) && !n && (n = !0);
            if (o[qr]) for (var f = 0,
            u = o[qr]; u > f; f++) r = o[f],
            this._3z(r, r[zf], i) && !n && (n = !0);
            n && this._7o()
        },
        _3z: function (t, i, n) {
            if (i instanceof mW) return i.__44 && (i[rT] = !1, t._44()),
            this[jw](t, n);
            if (i.__6k && i._ib() && (t._5i(), i[Lv] = !1), this[jw](t, n)) {
                var e = this._4y(i);
                return e && (e.__6k = !0),
                i[gT]() && i[Wu](function (t) {
                    t.__44 = !0
                },
                this),
                !0
            }
        },
        _2r: function (t, i) {
            var n = t[Du],
            e = t[Ru],
            s = i[mT](n.id);
            if (n == e) return s;
            var r = i.getIndexById(e.id);
            return Math.max(s, r)
        },
        _37: function (t, i) {
            var n = this.graphModel._gk(t);
            return n ? i[mT](n.id) : 0
        },
        _5l: function (t) {
            var i = this._mi,
            n = i[hl](t.id);
            if (!n) throw new Error(xT + t[lh] + ET);
            var s = this._37(t, i),
            r = [n];
            t.hasChildren() && e(t,
            function (t) {
                t instanceof xW && (n = i.getById(t.id), n && r[th](n))
            },
            this),
            this._4z(i, s, r)
        },
        _5k: function (t) {
            var i = this._mi[hl](t.id);
            if (i) {
                var n = this._2r(t, this._mi);
                this._mi[pT](i, n)
            }
        },
        _4z: function (t, i, n) {
            function e(t) {
                s.add(t)
            }
            var s = new Qz;
            l(n,
            function (n) {
                i = t[kT](n, i),
                n[zf][Wu](e)
            },
            this),
            0 != s[qr] && s.forEach(this._5k, this)
        },
        _93: function (t) {
            return t[Lu](!0)
        },
        _4y: function (t) {
            var i = we(t);
            return i && i[cT] ? i : null
        },
        _80: null,
        _7y: null,
        _3v: function (t, i) {
            return i || t != this._80 ? (this._80 = t, this._7y && (this._7y._hj(), delete this._7y), t == lY.NAVIGATION_SCROLLBAR ? void (this._7y = new or(this, this._my9)) : t == lY.NAVIGATION_BUTTON ? void (this._7y = new ar(this, this[Tw])) : void 0) : !1
        },
        _2q: function (t, i) {
            this._7y && this._7y._jl(),
            this._kj._41(new gH(this._kj, E_, t, i))
        },
        _7w: function (t, i) {
            this._kj._41(new gH(this._kj, so, t, i))
        },
        _3r: function (t, i) {
            this[nT] = {
                value: t,
                old: i
            }
        },
        _7x: function () {
            this._7i()
        }
    });
    Object[gc](fW.prototype, {
        _viewportBounds: {
            get: function () {
                return this[wT]
            }
        },
        _scale: {
            get: function () {
                return this[so]
            },
            set: function (t) {
                this._g7(t)
            }
        },
        _tx: {
            get: function () {
                return this.tx
            }
        },
        _ty: {
            get: function () {
                return this.ty
            }
        },
        graphModel: {
            get: function () {
                return this._kj[TT]
            }
        }
    });
    var uW = hW,
    cW = {};
    cW[oh] = function () {
        return [1, 0, 0, 1, 0, 0]
    },
    cW[mw] = function (t, i) {
        var n = i[0],
        e = i[1],
        s = i[2],
        r = i[3],
        h = i[4],
        a = i[5],
        o = n * r - e * s;
        return o ? (o = 1 / o, t[0] = r * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - r * h) * o, t[5] = (e * h - n * a) * o, t) : null
    },
    cW.multiply = function (t, i, n) {
        var e = i[0],
        s = i[1],
        r = i[2],
        h = i[3],
        a = i[4],
        o = i[5],
        f = n[0],
        u = n[1],
        c = n[2],
        _ = n[3],
        d = n[4],
        l = n[5];
        return t[0] = e * f + r * u,
        t[1] = s * f + h * u,
        t[2] = e * c + r * _,
        t[3] = s * c + h * _,
        t[4] = e * d + r * l + a,
        t[5] = s * d + h * l + o,
        t
    },
    cW.mul = cW[Wx],
    cW.rotate = function (t, i, n) {
        var e = i[0],
        s = i[1],
        r = i[2],
        h = i[3],
        a = i[4],
        o = i[5],
        f = Math.sin(n),
        u = Math.cos(n);
        return t[0] = e * u + r * f,
        t[1] = s * u + h * f,
        t[2] = e * -f + r * u,
        t[3] = s * -f + h * u,
        t[4] = a,
        t[5] = o,
        t
    },
    cW.scale = function (t, i, n) {
        var e = i[0],
        s = i[1],
        r = i[2],
        h = i[3],
        a = i[4],
        o = i[5],
        f = n[0],
        u = n[1];
        return t[0] = e * f,
        t[1] = s * f,
        t[2] = r * u,
        t[3] = h * u,
        t[4] = a,
        t[5] = o,
        t
    },
    cW.translate = function (t, i, n) {
        var e = i[0],
        s = i[1],
        r = i[2],
        h = i[3],
        a = i[4],
        o = i[5],
        f = n[0],
        u = n[1];
        return t[0] = e,
        t[1] = s,
        t[2] = r,
        t[3] = h,
        t[4] = e * f + r * u + a,
        t[5] = s * f + h * u + o,
        t
    },
    cW[E_] = function (t, i) {
        var n = i[0],
        e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    },
    cW[bw] = function (t, i) {
        return cW[E_](cW[mw]([], t), i)
    };
    var _W = Math.PI + Math.PI,
    dW = D,
    lW = S({
        equals: function (t) {
            if (!t || !Array.isArray(t)) return !1;
            for (var i = this.m,
            n = 0; n < i[qr]; ) {
                if (i[n] != t[n]) return !1; ++n
            }
            return !0
        },
        constructor: function (t) {
            this.m = t || cW.create(),
            this.im = []
        },
        listener: null,
        _6k: !0,
        invalidate: function () {
            return this._6k = !0,
            this._myackM && this.equals(this[OT]) ? !1 : (this[tv] && this[tv]({
                target: this,
                kind: Zk
            }), this[OT] = this.m.slice(), this)
        },
        validate: function () {
            return this._6k = !1,
            cW[mw](this.im, this.m),
            this
        },
        translate: function (t, i) {
            return dW(t) && (t = [arguments[0], arguments[1]], i = arguments[2]),
            i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (cW[eo](this.m, this.m, t), this[Zk]())
        },
        translateTo: function (t, i) {
            return dW(t) && (t = [arguments[0], arguments[1]], i = arguments[2]),
            i && (i /= this._h4(), cW[so](this.m, this.m, [i, i])),
            this.m[4] = t[0],
            this.m[5] = t[1],
            this[Zk]()
        },
        scale: function (t, i) {
            return Mh == typeof t && (t = [t, t]),
            i ? (cW.translate(this.m, this.m, i), cW[so](this.m, this.m, t), cW.translate(this.m, this.m, _e(i))) : cW.scale(this.m, this.m, t),
            this[Zk]()
        },
        rotate: function (t, i) {
            return i ? (cW.translate(this.m, this.m, i), cW.rotate(this.m, this.m, t), cW.translate(this.m, this.m, _e(i))) : cW[Ao](this.m, this.m, t),
            this.invalidate()
        },
        transform: function (t) {
            return cW[E_](this.m, t)
        },
        reverseTransform: function (t) {
            return cW.transform(this._4i(), t)
        },
        toString: function () {
            return xw + this.m[lu]($h) + Bh
        },
        _4i: function () {
            return this._6k && this[mo](),
            this.im
        },
        _em: function () {
            var t = this.m[0],
            i = this.m[1],
            n = this.m[2],
            e = this.m[3];
            return [Math[lo](t * t + n * n), Math.sqrt(i * i + e * e)]
        },
        _h4: function () {
            var t = this.m[0],
            i = this.m[2];
            return Math[lo](t * t + i * i)
        },
        _8x: function () {
            return [this.m[4], this.m[5]]
        },
        _mxg: function () {
            var t = this.m[0],
            i = this.m[1],
            n = this.m[2],
            e = this.m[3];
            return [de(Math.atan2(i, e)), de(Math[vo](-n, t))]
        },
        _er: function () {
            return de(Math[vo](this.m[1], this.m[3]))
        }
    }),
    vW = S({
        constructor: function () { },
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rotate: 0,
        set: function (t, i, n, e, s, r) {
            return this.x = t,
            this.y = i,
            this[Ga] = n,
            this[za] = e,
            this.rotate = s,
            this[Xh] = Math.cos(s),
            this._sin = Math.sin(s),
            this[so] = r,
            this[MT] = null,
            this
        },
        _hw: function (t, i) {
            return t -= this.x,
            i -= this.y,
            this[Ao] ? be(t, i, this[Zh], this[Xh]) : [t, i]
        },
        _8w: function (t) {
            var i = new hH;
            return i.add(this._hw(t.x, t.y)),
            i.add(this._hw(t.x + t[Ga], t.y)),
            i.add(this._hw(t.x, t.y + t[za])),
            i.add(this._hw(t.x + t[Ga], t.y + t[za])),
            i
        },
        _gw: function (t, i) {
            if (this[Ao]) {
                var n = be(t, i, Math.sin(-this[Ao]), Math.cos(-this.rotate));
                t = n[0],
                i = n[1]
            }
            return [this.x + t, this.y + i]
        },
        _64: function (t, i) {
            var n = this._hw(t, i);
            return t = n[0],
            i = n[1],
            t >= 0 && i >= 0 && t <= this.width && i <= this[za]
        },
        intersects: function (t, i, n, e) {
            if (!this.rotate) return hH.intersects(this.x, this.y, this[Ga], this[za], t, i, n, e);
            if (!n || !e) return this._64(t, i);
            var s = this[Dw]();
            if (!s[Zc](t, i, n, e)) return !1;
            for (var r = s[Ma], h = 0; h < r[qr]; ) {
                var a = r[h];
                if (hH[$f](t, i, n, e, a[0], a[1])) return !0;
                h++
            }
            var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
            for (h = 0; h < o[qr]; ) {
                var a = o[h];
                if (this._64(a[0], a[1])) return !0;
                h++
            }
            return ve(r, o)
        },
        getGlobalBounds: function () {
            return this[MT] || (this[MT] = this._7u(0, 0, this[Ga], this[za])),
            this[MT]
        },
        _7u: function (t, i, n, e) {
            if (!this.rotate) return new hH(this.x + t, this.y + i, n, e);
            var s = [],
            r = new hH,
            h = this._gw(t, i);
            return s[th](h),
            r.add(h[0], h[1]),
            h = this._gw(t + n, i),
            s.push(h),
            r.add(h[0], h[1]),
            h = this._gw(t, i + e),
            s.push(h),
            r.add(h[0], h[1]),
            h = this._gw(t + n, i + e),
            s[th](h),
            r.add(h[0], h[1]),
            r[Ma] = s,
            r
        },
        _4h: function (t, i, n, e, s) {
            var r;
            if (this[Ao]) {
                var h = this._gw(t, i);
                r = (new vW).set(h[0], h[1], n, e, this[Ao], this[so])
            } else r = (new vW).set(this.x + t, this.y + i, n, e, 0, this.scale);
            return r[Nw] = [Math.round(s * t), Math.round(s * i), Math[po](s * n), Math[po](s * e)],
            r
        },
        _3n: function (t, i, n, e) {
            if (!this.rotate) {
                var s = hH[of](this.x, this.y, this[Ga], this[za], t, i, n, e);
                return s && s.offset(-this.x, -this.y),
                s
            }
            var r = this._hw(t, i);
            return t = r[0],
            i = r[1],
            hH[of](0, 0, this[Ga], this[za], r[0], r[1], n, e)
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y && this[Ga] == t[Ga] && this.height == t[za] && this.rotate == t[Ao]
        },
        toString: function () {
            return this.x + $h + this.y + $h + this[Ga] + $h + this[za] + $h + this.rotate
        },
        toJSON: function () {
            return {
                x: this.x,
                y: this.y,
                width: this[Ga],
                height: this[za],
                rotate: this[Ao],
                scale: this.scale
            }
        }
    }),
    bW = {
        setStyle: yi,
        setStyles: vi,
        addRule: gi,
        pre: LH
    },
    yW = function (t, i, n, e) {
        this.source = t,
        this.kind = i,
        this[Fl] = e,
        this[bh] = n,
        this.propertyType = lY[Tc]
    };
    p(yW, gH);
    var gW = function (t) {
        this.id = ++Pz,
        this[bv] = {},
        this._jh = {},
        t && (this[ST] = t)
    };
    gW[sh] = {
        _jh: null,
        getStyle: function (t) {
            return this._jh[t]
        },
        setStyle: function (t, i) {
            var n = this._jh[t];
            return n === i || n && i && n[Su] && n[Su](i) ? !1 : this[jT](t, i, new yW(this, t, i, n), this._jh)
        },
        putStyles: function (t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._jh[n] = e : this[Oc](n, e)
            }
        },
        _$x: !0,
        invalidateVisibility: function (t) {
            this._$x = !0,
            t || (this instanceof xW && this[gT]() && this.forEachEdge(function (t) {
                t._$x = !0
            }), this._ib() && this[Ur]() && this[Vu](function (t) {
                t.invalidateVisibility()
            }))
        },
        onParentChanged: function () {
            this[tT]()
        },
        _ib: function () {
            return !this._46 && this instanceof kW
        },
        invalidate: function () {
            this.onEvent(new yH(this, IT, Zk))
        },
        _mxe: null,
        addUI: function (t, i) {
            if (this._mxe || (this._mxe = new Qz), t.id || (t.id = ++Pz), this[AT][nl](t.id)) return !1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._mxe.add(n);
            var e = new yH(this, IT, _v, n);
            return this.onEvent(e)
        },
        removeUI: function (t) {
            if (!this[AT]) return !1;
            var i = this[AT].getById(t.id);
            return i ? (this._mxe.remove(i), void this[dh](new yH(this, IT, Oh, i))) : !1
        },
        toString: function () {
            return this.$name || this.id
        },
        type: CT,
        _46: !1,
        _hm: !0,
        inGroup: function (t) {
            var i = we(this);
            return i == t || i && t instanceof kW && i[Bu](t)
        }
    },
    p(gW, SH),
    I(gW[sh], [uT, lh, uw, RT]),
    K(gW.prototype, {
        enableSubNetwork: {
            get: function () {
                return this._46
            },
            set: function (t) {
                if (this._46 != t) {
                    var i = this._46;
                    this._46 = t,
                    this instanceof xW && this._12(),
                    this[dh](new gH(this, b_, t, i))
                }
            }
        },
        bindingUIs: {
            get: function () {
                return this[AT]
            }
        },
        styles: {
            get: function () {
                return this._jh
            },
            set: function (t) {
                if (this._jh != t) {
                    for (var i in this._jh) i in t || (t[i] = n);
                    this.putStyles(t),
                    this._jh = t
                }
            }
        }
    }),
    dY[LT] = we;
    var mW = function (t, i, n) {
        this.id = ++Pz,
        this[bv] = {},
        this._jh = {},
        n && (this.$name = n),
        this[qu] = t,
        this.$to = i,
        this[PT]()
    };
    mW.prototype = {
        $uiClass: bs,
        _jx: null,
        _id: null,
        _jz: null,
        _if: null,
        _ex: !1,
        type: DT,
        otherNode: function (t) {
            return t == this.from ? this.to : t == this.to ? this[$u] : void 0
        },
        connect: function () {
            if (this._ex) return !1;
            if (!this[qu] || !this.$to) return !1;
            if (this._ex = !0, this.$from == this.$to) return void this[qu]._i9(this);
            Le(this.$to, this),
            Ce(this[qu], this),
            ge(this[qu], this, this.$to);
            var t = this[Du],
            i = this.toAgent;
            if (t != i) {
                var n;
                this[qu]._et && (xe(t, this, i), n = !0),
                this.$to._et && (pe(i, this, t), n = !0),
                n && ge(t, this, i)
            }
        },
        disconnect: function () {
            if (!this._ex) return !1;
            if (this._ex = !1, this[qu] == this.$to) return void this.$from[NT](this);
            Re(this[qu], this),
            Pe(this.$to, this),
            me(this.$from, this, this.$to);
            var t = this[Du],
            i = this[Ru];
            if (t != i) {
                var n;
                this.$from._et && (Ee(t, this, i), n = !0),
                this.$to._et && (ke(i, this, t), n = !0),
                n && me(t, this, i)
            }
        },
        isConnected: function () {
            return this._ex
        },
        isInvalid: function () {
            return !this.$from || !this.$to
        },
        isLooped: function () {
            return this.$from == this.$to
        },
        getEdgeBundle: function (t) {
            return t ? this._2m() : this[Uu]() ? this[qu]._43 : this[qu].getEdgeBundle(this.$to)
        },
        hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t[$T][qr] > 1
        },
        _2m: function () {
            var t = this[Du],
            i = this[Ru];
            return t == i ? this[qu]._et || this.$to._et ? null : this[qu]._43 : this[Du][Lu](this[Ru])
        },
        _9v: null,
        hasPathSegments: function () {
            return this._9v && !this._9v[Hf]()
        },
        isBundleEnabled: function () {
            return this[BT] && !this[u_]()
        },
        firePathChange: function (t) {
            this[dh](new gH(this, FT, t))
        },
        addPathSegment: function (t, i, n) {
            var e = new XY(i || YY, t);
            this._9v || (this._9v = new Qz),
            this._9v.add(e, n),
            this[GT](e)
        },
        addPathSegement: function () {
            return dY.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'),
            this.addPathSegment[eh](this, arguments)
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9v) return !1;
            var i = this._9v[il](t);
            i && (this._9v[Oh](i), this[GT](i))
        },
        removePathSegment: function (t) {
            return this._9v ? (this._9v.remove(t), void this[GT](t)) : !1
        },
        movePathSegment: function (t, i, n) {
            if (!this._9v) return !1;
            if (t = t || 0, i = i || 0, dY[zT](n)) {
                var e = this._9v[il](n);
                return e ? (e.move(t, i), void this[GT]()) : !1
            }
            l(function (n) {
                n.move(t, i)
            }),
            this.firePathChange()
        },
        move: function (t, i) {
            return this._9v ? (this._9v.forEach(function (n) {
                n[qy](t, i)
            },
            this), void this[GT]()) : !1
        },
        validateEdgeBundle: function () { }
    },
    p(mW, gW),
    K(mW[sh], {
        pathSegments: {
            get: function () {
                return this._9v
            },
            set: function (t) {
                dY.isArray(t) && (t = new Qz(t)),
                this._9v = t,
                this[GT]()
            }
        },
        from: {
            get: function () {
                return this.$from
            },
            set: function (t) {
                if (this[qu] != t) {
                    var i = new gH(this, $u, t, this[qu]);
                    this[_h](i) !== !1 && (this[HT](), this[qu] = t, this.connect(), this.onEvent(i))
                }
            }
        },
        to: {
            get: function () {
                return this.$to
            },
            set: function (t) {
                if (this.$to != t) {
                    var i = new gH(this, YT, t, this.$to);
                    this[_h](i) !== !1 && (this.disconnect(), this.$to = t, this[PT](), this.onEvent(i))
                }
            }
        },
        fromAgent: {
            get: function () {
                return this[qu] ? this[qu]._et || this[qu] : null
            }
        },
        toAgent: {
            get: function () {
                return this.$to ? this.$to._et || this.$to : null
            }
        }
    }),
    I(mW[sh], [c_, {
        name: BT,
        value: !0
    },
    hx]);
    var xW = function (t, i, n) {
        2 == arguments[qr] && D(t) && (n = i, i = t, t = null),
        this.id = ++Pz,
        this[bv] = {},
        this._jh = {},
        t && (this.$name = t),
        this.$image = UT,
        this[Mf] = oH[jl],
        this.$location = {
            x: i || 0,
            y: n || 0
        },
        this._linkedNodes = {}
    };
    xW[sh] = {
        $uiClass: ys,
        _et: null,
        forEachEdge: function (t, i, n) {
            return !n && this._ke && this._ke[au](t, i) === !1 ? !1 : Ne(this, t, i)
        },
        forEachOutEdge: function (t, i) {
            return $e(this, t, i)
        },
        forEachInEdge: function (t, i) {
            return Be(this, t, i)
        },
        getEdges: function () {
            var t = [];
            return this[Wu](function (i) {
                t[th](i)
            }),
            t
        },
        _i4: null,
        _fs: null,
        _j3: null,
        _i6: null,
        _myr: 0,
        _9b: 0,
        hasInEdge: function () {
            return null != this._i4
        },
        hasOutEdge: function () {
            return null != this._fs
        },
        hasEdge: function () {
            return null != this._i4 || null != this._fs || this[WT]()
        },
        linkedWith: function (t) {
            return t.from == this || t.to == this || t[Du] == this || t[Ru] == this
        },
        hasEdgeWith: function (t) {
            var i = this[Lu](t);
            return i && i[$T][qr] > 0
        },
        _ke: null,
        _43: null,
        hasLoops: function () {
            return this._ke && this._ke[qr] > 0
        },
        _i9: function (t) {
            return this._ke || (this._ke = new Qz, this._43 = new Bq(this, this, this._ke)),
            this._43._i3(t)
        },
        _mxo: function (t) {
            return this._43 ? this._43._da(t) : void 0
        },
        getEdgeBundle: function (t) {
            return t == this ? this._43 : this._linkedNodes[t.id] || t[qT][this.id]
        },
        _70: function () {
            return this._99 && this._99[qr]
        },
        _5d: function () {
            return this._85 && this._85[qr]
        },
        _9k: function () {
            return this._70() || this._5d()
        },
        _85: null,
        _99: null,
        _mx6: function () {
            var t = this._et,
            i = ye(this);
            if (t != i) {
                var n = De(this);
                this._9h(i),
                n.forEach(function (t) {
                    var i = t[Du],
                    n = t.toAgent,
                    t = t[VT],
                    e = t[qu]._et,
                    s = t.$to._et;
                    i != n && (i && Ee(i, t, n || t.$to), n && ke(n, t, i || t[qu])),
                    e != s && (e && xe(e, t, s || t.$to), s && pe(s, t, e || t.$from), ge(e || t.$from, t, s || t.$to))
                },
                this)
            }
        },
        onParentChanged: function () {
            dY.doSuper(this, xW, yv, arguments),
            this[XT]()
        },
        _8a: null,
        _12: function () {
            var t;
            if (this._46 ? t = null : (t = this._et, t || this._hb !== !1 || (t = this)), this._8a == t) return !1;
            if (this._8a = t, this._fk && this._fk._j7[qr]) for (var i, n = this._fk._j7,
            e = 0,
            s = n[qr]; s > e; e++) i = n[e],
            i instanceof xW && i._9h(t)
        },
        setLocation: function (t, i) {
            if (this[ZT] && this.$location.x == t && this[ZT].y == i) return !1;
            var n;
            n = this[ZT] ? {
                x: this[ZT].x,
                y: this[ZT].y
            } : this[ZT];
            var e = new gH(this, KT, n, {
                x: t,
                y: i
            });
            return this[_h](e) === !1 ? !1 : (this[ZT] ? (this[ZT].x = t, this.$location.y = i) : this.$location = new nH(t, i), this[dh](e), !0)
        },
        _ey: null,
        addFollower: function (t) {
            return null == t ? !1 : t.host = this
        },
        removeFollower: function (t) {
            return this._ey && this._ey[a_](t) ? t[JT] = null : !1
        },
        hasFollowers: function () {
            return this._ey && !this._ey[Hf]()
        },
        toFollowers: function () {
            return this.hasFollowers() ? this._ey[al]() : null
        },
        clearFollowers: function () {
            this[QT]() && (this[tO](), l(this.toFollowers(),
            function (t) {
                t.host = null
            }))
        },
        getFollowerIndex: function (t) {
            return this._ey && this._ey[a_](t) ? this._ey[ih](t) : -1
        },
        setFollowerIndex: function (t, i) {
            return this._ey && this._ey[a_](t) ? void this._ey.setIndex(t, i) : -1
        },
        getFollowerCount: function () {
            return this._ey ? this._ey[qr] : 0
        },
        _9f: function () {
            return this._ey ? this._ey : (this._ey = new Qz, this._ey)
        },
        isFollow: function (t) {
            if (!t || !this[iO]) return !1;
            for (var i = this[iO]; i; ) {
                if (i == t) return !0;
                i = i[iO]
            }
            return !1
        },
        _9h: function (t) {
            return t == this._et ? !1 : (this._et = t, this[tT](), void this._12())
        },
        type: nO
    },
    p(xW, gW),
    K(xW[sh], {
        loops: {
            get: function () {
                return this._ke
            }
        },
        edgeCount: {
            get: function () {
                return this[Pu] + this._9b
            }
        },
        agentNode: {
            get: function () {
                return this._et || this
            }
        },
        host: {
            set: function (t) {
                if (this == t || t == this[iO]) return !1;
                var i = new gH(this, JT, this[iO], t);
                if (!1 === this.beforeEvent(i)) return !1;
                var n = null,
                e = null,
                s = this._host;
                if (null != t && (n = new gH(t, eO, null, this), !1 === t.beforeEvent(n))) return !1;
                if (null != s && (e = new gH(s, sO, null, this), !1 === s[_h](e))) return !1;
                if (this._host = t, null != t) {
                    var r = t._9f();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._9f();
                    r.remove(this)
                }
                return this[dh](i),
                null != t && t[dh](n),
                null != s && s[dh](e),
                !0
            },
            get: function () {
                return this[iO]
            }
        }
    }),
    I(xW[sh], [KT, Jk, tx, Ao, rO]),
    K(xW[sh], {
        x: {
            get: function () {
                return this[KT].x
            },
            set: function (t) {
                t != this.location.x && (this[KT] = new nH(t, this[KT].y))
            }
        },
        y: {
            get: function () {
                return this.location.y
            },
            set: function (t) {
                t != this[KT].y && (this[KT] = new nH(this.location.x, t))
            }
        }
    });
    var EW = function (t, i) {
        t instanceof KY && (i = t, t = n),
        k(this, EW, [t]),
        this.path = i || new KY,
        this[rO] = null,
        this[uT] = fr,
        Jz[hO] || (Jz[hO] = {},
        Jz[hO][OW[aO]] = !1),
        this[oO](Jz[hO])
    };
    EW[sh] = {
        $uiClass: fr,
        type: fO,
        moveTo: function (t, i) {
            this[uO][Xu](t, i),
            this[GT]()
        },
        lineTo: function (t, i) {
            this[uO][Zu](t, i),
            this[GT]()
        },
        quadTo: function (t, i, n, e) {
            this[uO][Ku](t, i, n, e),
            this[GT]()
        },
        curveTo: function (t, i, n, e, s, r) {
            this[uO].curveTo(t, i, n, e, s, r),
            this.firePathChange()
        },
        arcTo: function (t, i, n, e, s) {
            this[uO][cO](t, i, n, e, s),
            this[GT]()
        },
        closePath: function () {
            this[uO].closePath(),
            this.firePathChange()
        },
        clear: function () {
            this[uO][Ha](),
            this.firePathChange()
        },
        removePathSegmentByIndex: function (t) {
            this[uO].removePathSegment(t) !== !1 && this.firePathChange()
        },
        firePathChange: function () {
            this.path._6k = !0,
            this[dh](new gH(this, FT))
        },
        addPathSegment: function (t, i, n) {
            this.path.add(new XY(i || YY, t), n),
            this.firePathChange()
        }
    },
    p(EW, xW),
    K(EW.prototype, {
        path: {
            get: function () {
                return this[tx]
            },
            set: function (t) {
                this[tx] = t
            }
        },
        pathSegments: {
            get: function () {
                return this.path[_O]
            },
            set: function (t) {
                this[uO][_O] = t || [],
                this[GT]()
            }
        },
        length: {
            get: function () {
                return this[uO][qr]
            }
        }
    }),
    dY.ShapeNode = EW;
    var pW = {
        _k6: {},
        register: function (t, i) {
            pW._k6[t] = i
        },
        getShape: function (t, i, e, s, r, h) {
            s === n && (s = i, r = e, i = 0, e = 0),
            s || (s = 50),
            r || (r = 50);
            var a = pW._k6[t];
            return a ? a.generator instanceof Function ? a[dO](i, e, s, r, h) : a : void 0
        },
        getRect: function (t, i, n, e, s, r, h) {
            return t instanceof Object && Ga in t && (i = t.y, n = t[Ga], e = t.height, s = t.rx, r = t.ry, h = t.path, t = t.x),
            Fe(h || new KY, t, i, n, e, s, r)
        },
        getAllShapes: function (t, i, n, e, s) {
            var r = {};
            for (var h in pW._k6) {
                var a = pW[Jc](h, t, i, n, e, s);
                a && (r[h] = a)
            }
            return r
        },
        createRegularShape: function (t, i, n, e, s) {
            return qe(t, i, n, e, s)
        }
    };
    hs(),
    as.prototype = {
        type: lO
    },
    p(as, EW),
    dY.Bus = as,
    os.prototype = {
        _gk: function (t) {
            var i, n = t._jg;
            i = n ? n._fk : this.$roots;
            var e = i[ih](t);
            if (0 > e) throw new Error(Pv + t + "' not exist in the box");
            for (; e >= 0; ) {
                if (0 == e) return n instanceof xW ? n : null;
                e -= 1;
                var r = i[il](e);
                if (r = s(r)) return r
            }
            return null
        },
        forEachNode: function (t, i) {
            this[au](function (n) {
                return n instanceof xW && t[Vr](i, n) === !1 ? !1 : void 0
            })
        },
        _3f: null
    },
    p(os, IH),
    K(os[sh], {
        propertyChangeDispatcher: {
            get: function () {
                return this._$v
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._3f
            },
            set: function (t) {
                if (t && !t[b_] && (t = null), this._3f != t) {
                    var i = this._3f;
                    this._3f = t,
                    this._$v[dh](new gH(this, vO, t, i))
                }
            }
        }
    }),
    Jz[bO] = lY[yO],
    Jz.GROUP_PADDING = 5,
    Jz.GROUP_EXPANDED = !0,
    Jz[gO] = {
        width: 60,
        height: 60
    };
    var kW = function (t, i, e) {
        k(this, kW, arguments),
        (i === n || e === n) && (this.$location[mO] = !0),
        this[xO] = Jz[bO],
        this.$padding = Jz.GROUP_PADDING,
        this[EO] = tU[pO],
        this[kO] = Jz.GROUP_MIN_SIZE,
        this[cT] = Jz[wO]
    };
    kW[sh] = {
        type: TO,
        $uiClass: sr,
        _n0a: function () {
            return !this._hb && !this._et
        },
        forEachOutEdge: function (t, i, n) {
            return $e(this, t, i) === !1 ? !1 : !n && this[OO]() && this._85 ? this._85[au](t, i) : void 0
        },
        forEachInEdge: function (t, i, n) {
            return Be(this, t, i) === !1 ? !1 : !n && this[OO]() && this._99 ? this._99[au](t, i) : void 0
        },
        forEachEdge: function (t, i, n) {
            return w(this, kW, Wu, arguments) === !1 ? !1 : n || n || !this[OO]() ? void 0 : this._99 && this._99[au](t, i) === !1 ? !1 : this._85 ? this._85[au](t, i) : void 0
        },
        hasInEdge: function (t) {
            return t ? null != this._i4 : null != this._i4 || this._70()
        },
        hasOutEdge: function (t) {
            return t ? null != this._fs : null != this._fs || this._5d()
        },
        hasEdge: function (t) {
            return t ? null != this._i4 || null != this._fs : null != this._i4 || null != this._fs || this._9k()
        }
    },
    p(kW, xW),
    K(kW[sh], {
        expanded: {
            get: function () {
                return this._hb
            },
            set: function (t) {
                if (this._hb != t) {
                    var i = new gH(this, cT, t, this._hb);
                    this.beforeEvent(i) !== !1 && (this._hb = t, this._12(), this[dh](i), this._et || fs[Vr](this))
                }
            }
        }
    }),
    I(kW[sh], [MO, SO, Wo, jO]),
    dY[IO] = kW,
    us.prototype[Io] = AO,
    p(us, xW),
    dY[CO] = us;
    var wW = function (t) {
        this._jc = new hH,
        this._8e = new hH,
        this._fn = new hH,
        this.id = ++Pz,
        t && (this[Mo] = t)
    };
    wW[sh] = {
        invalidate: function () {
            this[dT]()
        },
        _1g: !0,
        _jc: null,
        _8e: null,
        _fn: null,
        _n0k: !1,
        _j1: 1,
        _j2: 1,
        _hm: !0,
        _8c: 0,
        _6e: 0,
        _jg: null,
        _n0q: null,
        borderColor: RO,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1a: function () {
            this[LO] = ui(this[rO], this._8c, this._6e)
        },
        setMeasuredBounds: function (t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t.width),
            this._jc[Ga] == t && this._jc[za] == i && this._jc.x == n && this._jc.y == e ? !1 : void this._jc.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function () { },
        measure: function () { },
        draw: function () { },
        _88: function (t, i, n) {
            n[Cx] == lY[gm] ? (t[G_] = n[Tx], t[PO] = n.selectionShadowBlur * i, t.shadowOffsetX = (n[Sx] || 0) * i, t.shadowOffsetY = (n[DO] || 0) * i) : this._24(t, i, n)
        },
        _24: function (t, i, n) {
            var e = n[NO] || 0;
            n[$O] && (t.fillStyle = n[$O], t[BO](this._8e.x - e / 2, this._8e.y - e / 2, this._8e[Ga] + e, this._8e.height + e)),
            t[B_] = n[Tx],
            t[So] = e,
            t.strokeRect(this._8e.x - e / 2, this._8e.y - e / 2, this._8e[Ga] + e, this._8e.height + e)
        },
        _jv: function (t, i, n, e) {
            if (!this._hm) return !1;
            if (this.syncSelection || (n = this.selected), (n && !this[FO] || !e) && (e = this), t[no](), 1 != this[GO] && (t[XE] = this[GO]), t[eo](this.$x, this.$y), this[bf] && this.$_hostRotate && t[Ao](this[vf]), (this[zO] || this[HO]) && t[eo](this[zO], this.offsetY), this.$rotate && t.rotate(this[yf]), this[gf] && this[_f] && t[eo](-this[_f].x, -this._n0q.y), this[G_] && (t[G_] = this[G_], t.shadowBlur = this.shadowBlur * i, t[Mx] = this.shadowOffsetX * i, t[Wm] = this[Wm] * i), n && e[Cx] == lY[YO] && (this._24(t, i, e), n = !1), this._$t() && this[Af] && !this[Af][UO]) {
                this[Af][mo]();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this[WO],
                    lineDash: this[qO],
                    lineDashOffset: this[VO],
                    fillColor: this[XO],
                    fillGradient: this[jf],
                    lineCap: cm,
                    lineJoin: po
                };
                this[Af][Fo](t, i, s, n, e),
                n = !1,
                t[G_] = Lx
            }
            t[Gx](),
            this[Fo](t, i, n, e),
            t.restore()
        },
        invalidateData: function () {
            this[ZO] = !0,
            this[mf] = !0,
            this._1g = !0
        },
        invalidateSize: function () {
            this[mf] = !0,
            this._1g = !0
        },
        invalidateRender: function () {
            this._1g = !0
        },
        _55: function () { },
        _$t: function () {
            return this.$backgroundColor || this.$backgroundGradient || this.$border
        },
        _4d: function () {
            return this.$backgroundColor || this[KO]
        },
        doValidate: function () {
            return this[ZO] && (this.$invalidateData = !1, this[JO]() !== !1 && (this[mf] = !0)),
            this[mf] && this[QO] && this[QO](),
            Yn[Vr](this) ? (this[Uf] = !0, this.onBoundsChanged && this[tM](), !0) : this.$invalidateLocation ? (this.$invalidateRotate = !0, this.$invalidateLocation = !1, !0) : void 0
        },
        validate: function () {
            var t = this._hm;
            return this[iM] && (this[iM] = !1, this._hm = this.$visible, !this._hm || (this.$data || this[nM]) && this._55() !== !1 || (this._hm = !1)),
            this._hm ? (this._1g = !1, this[rb] || (this[eM](), this[rb] = !0), this[sM]()) : t != this._hm
        },
        _hw: function (t, i) {
            return t -= this.$x,
            i -= this.$y,
            Hn[Vr](this, {
                x: t,
                y: i
            })
        },
        hitTest: function (t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fn[$f](t, i, n)) return !1;
            var s = Hn[Vr](this, {
                x: t,
                y: i
            });
            return t = s.x,
            i = s.y,
            !e && this._$t() && this[Af] && this[Af].hitTest(t, i, n, !1, this[wf], this.$backgroundColor || this.$backgroundGradient) ? !0 : this.doHitTest(t, i, n)
        },
        doHitTest: function (t, i, n) {
            return this._jc[$f](t, i, n)
        },
        hitTestByBounds: function (t, i, n, e) {
            var s = this._hw(t, i);
            return !e && this._$t() && this[Af] && this[Af].hitTest(t, i, n, !1, this.$border, this[XO] || this.$backgroundGradient) ? !0 : this._jc[$f](s.x, s.y, n)
        },
        onDataChanged: function () {
            this[ZO] = !0,
            this._1g = !0,
            this[iM] = !0
        },
        getBounds: function () {
            var t = this._fn.clone();
            return t[Mm](this.x, this.y),
            this[Cu] && (this[Cu][Ao] && ji(t, this[Cu][Ao], t), t[Mm](this.parent.x || 0, this[Cu].y || 0)),
            t
        },
        destroy: function () {
            this[np] = !0
        },
        _du: !1
    },
    K(wW[sh], {
        originalBounds: {
            get: function () {
                return this._jc
            }
        },
        data: {
            get: function () {
                return this[zf]
            },
            set: function (t) {
                if (this[zf] != t) {
                    var i = this[zf];
                    this[zf] = t,
                    this.onDataChanged(t, i)
                }
            }
        },
        parent: {
            get: function () {
                return this._jg
            }
        },
        showOnTop: {
            get: function () {
                return this._du
            },
            set: function (t) {
                t != this._du && (this._du = t, this._1g = !0, this._jg && this._jg[rM] && this._jg[rM](this))
            }
        }
    }),
    _s(wW.prototype, {
        visible: {
            value: !0,
            validateFlags: [hM, aM]
        },
        showEmpty: {
            validateFlags: [hM]
        },
        anchorPosition: {
            value: oH[jl],
            validateFlags: [oM, aM]
        },
        position: {
            value: oH.CENTER_MIDDLE,
            validateFlags: [aM]
        },
        offsetX: {
            value: 0,
            validateFlags: [aM]
        },
        offsetY: {
            value: 0,
            validateFlags: [aM]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [fM, oM, aM]
        },
        padding: {
            value: 0,
            validateFlags: [fM]
        },
        border: {
            value: 0,
            validateFlags: [fM]
        },
        borderRadius: {
            value: Jz.BORDER_RADIUS
        },
        showPointer: {
            value: !1,
            validateFlags: [fM]
        },
        pointerX: {
            value: 0,
            validateFlags: [fM]
        },
        pointerY: {
            value: 0,
            validateFlags: [fM]
        },
        pointerWidth: {
            value: Jz.POINTER_WIDTH
        },
        backgroundColor: {
            validateFlags: [fM]
        },
        backgroundGradient: {
            validateFlags: [fM, uM]
        },
        selected: {
            value: !1,
            validateFlags: [fM]
        },
        selectionBorder: {
            value: Jz[cM],
            validateFlags: [fM]
        },
        selectionShadowBlur: {
            value: Jz[_M],
            validateFlags: [fM]
        },
        selectionColor: {
            value: Jz.SELECTION_COLOR,
            validateFlags: [fM]
        },
        selectionType: {
            value: Jz[xm],
            validateFlags: [fM]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: [fM]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: [fM]
        },
        shadowBlur: {
            value: 0,
            validateFlags: [fM]
        },
        shadowColor: {
            validateFlags: [fM]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: [fM]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: [fM]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: [aM]
        },
        y: {
            value: 0,
            validateFlags: [aM]
        },
        rotatable: {
            value: !0,
            validateFlags: [dM, fM]
        },
        rotate: {
            value: 0,
            validateFlags: [dM, fM]
        },
        _hostRotate: {
            validateFlags: [dM]
        },
        lineWidth: {
            value: 0,
            validateFlags: [_g]
        },
        alpha: {
            value: 1
        }
    });
    var TW = [lY[kc], lY[Tc], lY.PROPERTY_TYPE_CLIENT];
    ls.prototype = {
        removeBinding: function (t) {
            for (var i = TW[qr]; --i >= 0; ) {
                var n = TW[i],
                e = this[n];
                for (var s in e) {
                    var r = e[s];
                    Array[mc](r) ? (v(r,
                    function (i) {
                        return i[xc] == t
                    },
                    this), r[qr] || delete e[s]) : r[xc] == t && delete e[s]
                }
            }
        },
        _22: function (t, i, n) {
            if (!n && (n = this[i[Gl] || lY.PROPERTY_TYPE_ACCESSOR], !n)) return !1;
            var e = n[t];
            e ? (Array.isArray(e) || (n[t] = e = [e]), e[th](i)) : n[t] = i
        },
        _2k: function (t, i, n, e, s, r) {
            t = t || lY[kc];
            var h = this[t];
            if (!h) return !1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: r
            };
            this._22(i, a, h)
        },
        onBindingPropertyChange: function (t, i, n, e) {
            var s = this[n || lY.PROPERTY_TYPE_ACCESSOR];
            if (!s) return !1;
            var r = s[i];
            return r ? (t._1g = !0, ds(t, r, n, e), !0) : !1
        },
        initBindingProperties: function (t, i) {
            for (var e = TW.length; --e >= 0; ) {
                var s = TW[e],
                r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[Ec]) {
                        var o = a.target;
                        if (o) {
                            if (!(o instanceof wW || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t.getProperty(a[lM], s) : s == lY.PROPERTY_TYPE_STYLE ? t[Qc][Mc](t[zf], a[lM]) : t[zf][a.property],
                        f !== n && (o[a[Ec]] = f)
                    }
                }
            }
        }
    };
    var OW = {};
    OW[vM] = bM,
    OW[cM] = yM,
    OW[_M] = "selection.shadow.blur",
    OW.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x",
    OW[gM] = "selection.shadow.offset.y",
    OW.SELECTION_TYPE = mM,
    OW[xM] = EM,
    OW[pM] = "render.color.blend.mode",
    OW.ALPHA = kM,
    OW.SHADOW_BLUR = wM,
    OW[TM] = OM,
    OW[MM] = SM,
    OW.SHADOW_OFFSET_Y = jM,
    OW[IM] = AM,
    OW[CM] = RM,
    OW[LM] = "shape.stroke.fill.color",
    OW.SHAPE_LINE_DASH = PM,
    OW.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset",
    OW[DM] = NM,
    OW.SHAPE_FILL_GRADIENT = $M,
    OW[BM] = FM,
    OW.SHAPE_OUTLINE_STYLE = GM,
    OW.LAYOUT_BY_PATH = zM,
    OW[HM] = YM,
    OW.BACKGROUND_GRADIENT = UM,
    OW.BORDER = WM,
    OW.BORDER_COLOR = qM,
    OW[VM] = XM,
    OW[ZM] = "border.line.dash.offset",
    OW.BORDER_RADIUS = KM,
    OW[JM] = Wo,
    OW.LINE_CAP = QM,
    OW[tS] = iS,
    OW[nS] = eS,
    OW[sS] = rS,
    OW[hS] = "image.background.color",
    OW[aS] = "image.background.gradient",
    OW.IMAGE_BORDER = oS,
    OW[fS] = OW[uS] = cS,
    OW[_S] = "image.border.line.dash",
    OW.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset",
    OW[dS] = OW[lS] = vS,
    OW[bS] = yS,
    OW[gS] = mS,
    OW[xS] = ES,
    OW[pS] = kS,
    OW[wS] = TS,
    OW[OS] = MS,
    OW.LABEL_VISIBLE = SS,
    OW.LABEL_ANCHOR_POSITION = "label.anchor.position",
    OW.LABEL_COLOR = jS,
    OW[IS] = AS,
    OW[CS] = RS,
    OW[LS] = PS,
    OW[DS] = NS,
    OW.LABEL_POINTER_WIDTH = $S,
    OW[BS] = FS,
    OW.LABEL_RADIUS = GS,
    OW[zS] = HS,
    OW[YS] = US,
    OW[WS] = qS,
    OW[VS] = XS,
    OW.LABEL_BORDER = ZS,
    OW[KS] = JS,
    OW[QS] = "label.background.color",
    OW.LABEL_BACKGROUND_GRADIENT = "label.background.gradient",
    OW[tj] = ij,
    OW[nj] = ej,
    OW[sj] = rj,
    OW[hj] = "label.shadow.offset.x",
    OW[aj] = "label.shadow.offset.y",
    OW[oj] = fj,
    OW[uj] = cj,
    OW.GROUP_BACKGROUND_COLOR = "group.background.color",
    OW[_j] = "group.background.gradient",
    OW[dj] = lj,
    OW[vj] = bj,
    OW.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash",
    OW[yj] = "group.stroke.line.dash.offset",
    OW.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate",
    OW.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position",
    OW[gj] = "edge.bundle.label.anchor.position",
    OW[mj] = "edge.bundle.label.color",
    OW[xj] = "edge.bundle.label.font.size",
    OW[Ej] = "edge.bundle.label.font.family",
    OW.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style",
    OW[pj] = "edge.bundle.label.padding",
    OW[kj] = "edge.bundle.label.pointer.width",
    OW[wj] = "edge.bundle.label.pointer",
    OW[Tj] = "edge.bundle.label.radius",
    OW[Oj] = "edge.bundle.label.offset.x",
    OW[Mj] = "edge.bundle.label.offset.y",
    OW[Sj] = "edge.bundle.label.border",
    OW.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color",
    OW[jj] = "edge.bundle.label.background.color",
    OW[Ij] = "edge.bundle.label.background.gradient",
    OW[Aj] = "edge.bundle.label.rotatable",
    OW[Cj] = Rj,
    OW[Lj] = Pj,
    OW[Dj] = Nj,
    OW[$j] = Bj,
    OW[Fj] = Gj,
    OW[zj] = "edge.line.dash.offset",
    OW[i_] = Hj,
    OW.EDGE_TO_OFFSET = Yj,
    OW.EDGE_FILL_COLOR = Uj,
    OW[Wj] = qj,
    OW[d_] = Vj,
    OW[Sc] = Xj,
    OW[Vc] = Zj,
    OW.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent",
    OW[jc] = Kj,
    OW.EDGE_SPLIT_VALUE = Jj,
    OW[Hc] = Qj,
    OW.EDGE_CORNER_RADIUS = tI,
    OW[iI] = nI,
    OW.EDGE_TO_AT_EDGE = eI,
    OW.ARROW_FROM = sI,
    OW.ARROW_FROM_SIZE = rI,
    OW[hI] = aI,
    OW.ARROW_FROM_STROKE = oI,
    OW[fI] = "arrow.from.stroke.style",
    OW[uI] = cI,
    OW[_I] = "arrow.from.outline.style",
    OW[dI] = lI,
    OW.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset",
    OW.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color",
    OW[vI] = "arrow.from.fill.gradient",
    OW[bI] = yI,
    OW[gI] = mI,
    OW[aO] = xI,
    OW[EI] = pI,
    OW.ARROW_TO_OFFSET = kI,
    OW[wI] = TI,
    OW.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",
    OW[OI] = MI,
    OW[SI] = "arrow.to.outline.style",
    OW[jI] = II,
    OW.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",
    OW.ARROW_TO_FILL_COLOR = AI,
    OW.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",
    OW[CI] = RI,
    OW.ARROW_TO_LINE_JOIN = LI;
    var MW = new ls,
    SW = lY[kc],
    jW = lY[Tc],
    IW = !1;
    MW._2k(jW, OW[xm], null, Cx),
    MW._2k(jW, OW.SELECTION_BORDER, null, NO),
    MW._2k(jW, OW[_M], null, Ox),
    MW._2k(jW, OW.SELECTION_COLOR, null, Tx),
    MW._2k(jW, OW[PI], null, "selectionShadowOffsetX"),
    MW._2k(jW, OW.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"),
    MW._2k(SW, lh, Ip, Mo),
    MW._2k(jW, OW[DI], Ip, kw),
    MW._2k(jW, OW[OS], Ip, ux),
    MW._2k(jW, OW[NI], Ip, rO),
    MW._2k(jW, OW[$I], Ip, BI),
    MW._2k(jW, OW[IS], Ip, fd),
    MW._2k(jW, OW[FI], Ip, wg),
    MW._2k(jW, OW[KS], Ip, WO),
    MW._2k(jW, OW[QS], Ip, GI),
    MW._2k(jW, OW[uj], Ip, zI),
    IW || (MW._2k(jW, OW[HI], null, PO), MW._2k(jW, OW.SHADOW_COLOR, null, G_), MW._2k(jW, OW[MM], null, Mx), MW._2k(jW, OW[YI], null, Wm), MW._2k(jW, OW.LABEL_FONT_FAMILY, Ip, ud), MW._2k(jW, OW[LS], Ip, od), MW._2k(jW, OW[VS], Ip, UI), MW._2k(jW, OW[wS], Ip, Ao), MW._2k(jW, OW[DS], Ip, Wo), MW._2k(jW, OW[WI], Ip, qI), MW._2k(jW, OW.LABEL_POINTER, Ip, Tf), MW._2k(jW, OW.LABEL_RADIUS, Ip, VI), MW._2k(jW, OW.LABEL_OFFSET_X, Ip, zO), MW._2k(jW, OW[YS], Ip, HO), MW._2k(jW, OW[tj], Ip, XI), MW._2k(jW, OW[ZI], Ip, If), MW._2k(jW, OW.LABEL_SIZE, Ip, Jk), MW._2k(jW, OW.LABEL_SHADOW_BLUR, Ip, PO), MW._2k(jW, OW[sj], Ip, G_), MW._2k(jW, OW[hj], Ip, Mx), MW._2k(jW, OW[aj], Ip, Wm), MW._2k(jW, OW[oj], Ip, uw), MW._2k(jW, OW.RENDER_COLOR, null, Xm), MW._2k(jW, OW[pM], null, Zm), MW._2k(jW, OW[KI], null, kM));
    var AW = new ls;
    AW._2k(SW, KT),
    AW._2k(SW, rO, null, JI),
    AW._2k(SW, Ao, null, Ao),
    IW || (AW._2k(jW, OW[HM], null, GI), AW._2k(jW, OW[QI], null, If), AW._2k(jW, OW[JM], null, Wo), AW._2k(jW, OW.BORDER, null, wg), AW._2k(jW, OW[Em], null, VI), AW._2k(jW, OW[tA], null, WO), AW._2k(jW, OW[VM], null, qO), AW._2k(jW, OW[ZM], null, VO)),
    AW._2k(SW, tx, tx, Mo, iA),
    AW._2k(SW, Jk, tx, Jk),
    AW._2k(jW, OW[IM], tx, So),
    AW._2k(jW, OW.SHAPE_STROKE_STYLE, tx, B_),
    AW._2k(jW, OW[DM], tx, Px),
    AW._2k(jW, OW[nA], tx, Ff),
    IW || (AW._2k(jW, OW[xS], tx, eA), AW._2k(jW, OW[BM], tx, Ix), AW._2k(jW, OW[sA], tx, Rx), AW._2k(jW, OW[rA], tx, Dx), AW._2k(jW, OW[hA], tx, Wf), AW._2k(jW, OW.SHAPE_LINE_DASH_OFFSET, tx, Kf), AW._2k(jW, OW[aA], tx, Ax), AW._2k(jW, OW[tS], tx, $_), AW._2k(jW, OW[hS], tx, GI), AW._2k(jW, OW[aS], tx, If), AW._2k(jW, OW[bS], tx, Wo), AW._2k(jW, OW[oA], tx, wg), AW._2k(jW, OW.IMAGE_BORDER_RADIUS, tx, VI), AW._2k(jW, OW[uS], tx, WO), AW._2k(jW, OW[_S], tx, qO), AW._2k(jW, OW.IMAGE_BORDER_LINE_DASH_OFFSET, tx, VO), AW._2k(jW, OW[gS], tx, uw), AW._2k(jW, OW[pS], tx, kM)),
    AW._2k(SW, cT, null, null, fA),
    AW._2k(SW, b_, null, null, fA);
    var CW = new ls;
    CW._2k(SW, SO, null, null, uA),
    CW._2k(SW, jO, null, null, uA),
    CW._2k(SW, MO, null, null, uA),
    CW._2k(SW, Wo, null, null, uA),
    CW._2k(jW, OW[cA], _A, Px),
    CW._2k(jW, OW[_j], _A, Dx),
    CW._2k(jW, OW[dj], _A, So),
    CW._2k(jW, OW[vj], _A, B_),
    CW._2k(jW, OW[dA], _A, Wf),
    CW._2k(jW, OW[yj], _A, Kf);
    var RW = new ls;
    RW._2k(SW, $u, _A, null, lA),
    RW._2k(SW, YT, _A, null, lA),
    RW._2k(SW, c_, _A, null, lA),
    RW._2k(jW, OW[Sc], _A, null, lA),
    RW._2k(jW, OW[Cj], _A, So),
    RW._2k(jW, OW[Lj], _A, B_),
    RW._2k(jW, OW[vA], _A, bA),
    RW._2k(jW, OW[aO], _A, yA),
    IW || (RW._2k(jW, OW[nS], _A, gA), RW._2k(jW, OW[sS], _A, Fx), RW._2k(jW, OW[mA], _A, Bx), RW._2k(jW, OW[iI], null, s_, lA), RW._2k(jW, OW[xA], null, r_, lA), RW._2k(jW, OW[Dj], _A, Ix), RW._2k(jW, OW.EDGE_OUTLINE_STYLE, _A, Rx), RW._2k(jW, OW.EDGE_LINE_DASH, _A, Wf), RW._2k(jW, OW[zj], _A, Kf), RW._2k(jW, OW[Vc], _A, null, lA), RW._2k(jW, OW[i_], _A, null, lA), RW._2k(jW, OW[n_], _A, null, lA), RW._2k(jW, OW[aA], _A, Ax), RW._2k(jW, OW[tS], _A, $_), RW._2k(SW, FT, null, null, lA, !0), RW._2k(SW, hx, null, null, lA, !0), RW._2k(jW, OW[EA], _A, pA), RW._2k(jW, OW[hI], _A, kA), RW._2k(jW, OW[wA], _A, TA), RW._2k(jW, OW[fI], _A, OA), RW._2k(jW, OW[uI], _A, MA), RW._2k(jW, OW.ARROW_FROM_OUTLINE_STYLE, _A, "fromArrowOutlineStyle"), RW._2k(jW, OW[SA], _A, jA), RW._2k(jW, OW.ARROW_FROM_FILL_GRADIENT, _A, "fromArrowFillGradient"), RW._2k(jW, OW.ARROW_FROM_LINE_DASH, _A, IA), RW._2k(jW, OW[AA], _A, "fromArrowLineDashOffset"), RW._2k(jW, OW[gI], _A, CA), RW._2k(jW, OW.ARROW_FROM_LINE_CAP, _A, RA), RW._2k(jW, OW[EI], _A, LA), RW._2k(jW, OW[PA], _A, DA), RW._2k(jW, OW[wI], _A, NA), RW._2k(jW, OW[$A], _A, BA), RW._2k(jW, OW.ARROW_TO_OUTLINE, _A, FA), RW._2k(jW, OW.ARROW_TO_OUTLINE_STYLE, _A, GA), RW._2k(jW, OW[zA], _A, HA), RW._2k(jW, OW[YA], _A, UA), RW._2k(jW, OW[jI], _A, WA), RW._2k(jW, OW.ARROW_TO_LINE_DASH_OFFSET, _A, "toArrowLineDashOffset"), RW._2k(jW, OW[qA], _A, VA), RW._2k(jW, OW[CI], _A, XA));
    var LW = new ls;
    LW._2k(jW, OW[mj], ZA, BI),
    LW._2k(jW, OW[KA], ZA, ux),
    LW._2k(jW, OW[gj], ZA, rO),
    LW._2k(jW, OW[xj], ZA, fd),
    LW._2k(jW, OW[Aj], ZA, XI),
    IW || (LW._2k(jW, OW.EDGE_BUNDLE_LABEL_ROTATE, ZA, Ao), LW._2k(jW, OW[Ej], ZA, ud), LW._2k(jW, OW[JA], ZA, od), LW._2k(jW, OW[pj], ZA, Wo), LW._2k(jW, OW[kj], ZA, qI), LW._2k(jW, OW[wj], ZA, Tf), LW._2k(jW, OW[Tj], ZA, VI), LW._2k(jW, OW[Oj], ZA, zO), LW._2k(jW, OW[Mj], ZA, HO), LW._2k(jW, OW[Sj], ZA, wg), LW._2k(jW, OW.EDGE_BUNDLE_LABEL_BORDER_STYLE, ZA, WO), LW._2k(jW, OW[jj], ZA, GI), LW._2k(jW, OW[Ij], ZA, If));
    var PW = new ls;
    PW._2k(SW, KT),
    PW._2k(jW, OW.BACKGROUND_COLOR, null, GI),
    PW._2k(jW, OW[QI], null, If),
    PW._2k(jW, OW[JM], null, Wo),
    PW._2k(jW, OW[QA], null, wg),
    PW._2k(jW, OW[Em], null, VI),
    PW._2k(jW, OW[tA], null, WO),
    PW._2k(jW, OW[VM], null, qO),
    PW._2k(jW, OW[ZM], null, VO),
    PW._2k(SW, Ao, null, Ao),
    PW._2k(SW, FT, null, null, tC),
    PW._2k(SW, uO, tx, Mo),
    PW._2k(SW, Jk, tx, Jk),
    PW._2k(jW, OW[IM], tx, So),
    PW._2k(jW, OW[CM], tx, B_),
    PW._2k(jW, OW.SHAPE_FILL_COLOR, tx, Px),
    PW._2k(jW, OW[rA], tx, Dx),
    IW || (PW._2k(jW, OW[nS], tx, gA), PW._2k(jW, OW[sS], tx, Fx), PW._2k(jW, OW.SHAPE_LINE_FILL_COLOR, tx, Bx), PW._2k(jW, OW[BM], tx, Ix), PW._2k(jW, OW[sA], tx, Rx), PW._2k(jW, OW[hA], tx, Wf), PW._2k(jW, OW[iC], tx, Kf), PW._2k(jW, OW[aA], tx, Ax), PW._2k(jW, OW[tS], tx, $_), PW._2k(jW, OW[nA], tx, Ff), PW._2k(jW, OW[hS], tx, GI), PW._2k(jW, OW[aS], tx, If), PW._2k(jW, OW.IMAGE_PADDING, tx, Wo), PW._2k(jW, OW[oA], tx, wg), PW._2k(jW, OW[lS], tx, VI), PW._2k(jW, OW[uS], tx, WO), PW._2k(jW, OW.IMAGE_BORDER_LINE_DASH, tx, qO), PW._2k(jW, OW[nC], tx, VO), PW._2k(jW, OW[vA], tx, bA), PW._2k(jW, OW.ARROW_FROM_SIZE, tx, pA), PW._2k(jW, OW[hI], tx, kA), PW._2k(jW, OW.ARROW_FROM_STROKE, tx, TA), PW._2k(jW, OW[fI], tx, OA), PW._2k(jW, OW[SA], tx, jA), PW._2k(jW, OW.ARROW_FROM_FILL_GRADIENT, tx, "fromArrowFillGradient"), PW._2k(jW, OW[dI], tx, IA), PW._2k(jW, OW[AA], tx, "fromArrowLineDashOffset"), PW._2k(jW, OW.ARROW_FROM_LINE_JOIN, tx, CA), PW._2k(jW, OW.ARROW_FROM_LINE_CAP, tx, RA), PW._2k(jW, OW.ARROW_TO_SIZE, tx, LA), PW._2k(jW, OW.ARROW_TO_OFFSET, tx, DA), PW._2k(jW, OW[aO], tx, yA), PW._2k(jW, OW[wI], tx, NA), PW._2k(jW, OW[$A], tx, BA), PW._2k(jW, OW.ARROW_TO_FILL_COLOR, tx, HA), PW._2k(jW, OW.ARROW_TO_FILL_GRADIENT, tx, UA), PW._2k(jW, OW[jI], tx, WA), PW._2k(jW, OW[eC], tx, "toArrowLineDashOffset"), PW._2k(jW, OW[qA], tx, VA), PW._2k(jW, OW[CI], tx, XA));
    var DW = function (t, i) {
        return t = t[uw],
        i = i[uw],
        t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    },
    NW = function (t, i) {
        this[Xw] = new hH,
        k(this, NW, arguments),
        this.id = this[zf].id,
        this.graph = i,
        this._fk = [],
        this[sC] = new ls
    };
    NW[sh] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _mxp: null,
        _fk: null,
        addChild: function (t, i) {
            t._jg = this,
            i !== n ? g(this._fk, t, i) : this._fk[th](t),
            t._du && this[rM](t),
            this.invalidateChildrenIndex(),
            this[rC](),
            this[hC] = !0
        },
        removeChild: function (t) {
            this._mxp[aC](t),
            t._jg = null,
            m(this._fk, t),
            this._j5 && this._j5.remove(t),
            this[rC](),
            this[hC] = !0
        },
        getProperty: function (t, i) {
            return i == lY.PROPERTY_TYPE_STYLE ? this[Qc].getStyle(this[zf], t) : i == lY[wc] ? this.$data.get(t) : this[zf][t]
        },
        getStyle: function (t) {
            return this[Qc][Mc](this.$data, t)
        },
        _10: function (t, i, n) {
            var e = this._mxp[oC](this, t, i, n);
            return MW[oC](this, t, i, n) || e
        },
        onPropertyChange: function (t) {
            if (uw == t[jd]) return this[fT](),
            !0;
            if (IT == t.type) {
                if (Zk == t[jd]) return this.invalidate(),
                !0;
                var i = t[bh];
                return i && i.ui ? (_v == t[jd] ? this._9j(i) : Oh == t.kind && this.removeChild(i.ui), !0) : !1
            }
            return this._10(t[jd], t.propertyType || SW, t[bh])
        },
        label: null,
        initLabel: function () {
            var t = new BW;
            t.name = Ip,
            this.addChild(t),
            this[Ip] = t
        },
        initialize: function () {
            this[fC](),
            this[zf][AT] && this[zf][AT][au](this._9j, this),
            MW[uC](this),
            this[sC].initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i[lM] ? (i[xc] = t, void this[sC]._22(i.property, i)) : !1
        },
        _fj: function (t, i) {
            var n = this[zf];
            if (!n[AT]) return !1;
            var e = n[AT].getById(t.id);
            if (!e || !e[cC]) return !1;
            var s = e.bindingProperties;
            if (B(s)) {
                var r = !1;
                return l(s,
                function (t) {
                    return Mo == t.bindingProperty ? (r = vs(n, i, t[lM], t[Gl]), !1) : void 0
                },
                this),
                r
            }
            return Mo == s[Ec] ? vs(n, i, s[lM], s[Gl]) : !1
        },
        _9j: function (t) {
            var i = t.ui;
            if (i) {
                var n = t[cC];
                n && (Array[mc](n) ? n[au](function (t) {
                    this[_C](i, t)
                },
                this) : this[_C](i, n)),
                this[dC](i)
            }
        },
        validate: function () {
            return this[rb] || (this.initialize(), this._n0k = !0),
            this[sM]()
        },
        _$f: !0,
        invalidateChildrenIndex: function () {
            this._$f = !0
        },
        doValidate: function () {
            if (this._1g && (this._1g = !1, this[lC]() && (this[JO](), this[mf] = !0), this._$f && (this._$f = !1, Yz ? this._fk = d(this._fk, DW) : this._fk[fw](DW))), Yn[Vr](this) && (this[Uf] = !0), this[Uf]) {
                nU[Vr](this),
                this[Xw][Ef](this._fn);
                var t = this[vC] || 0,
                i = Math.max(this[vC] || 0, this[bC] || 0, this.$selectionShadowOffsetX || 0),
                n = Math.max(this[yC] || 0, this[gC] || 0),
                e = Math.max(2 * t, this[mC], this[xC]);
                e += Jz.UI_BOUNDS_GROW || 0;
                var s = e - i,
                r = e + i,
                h = e - n,
                a = e + n;
                return 0 > s && (s = 0),
                0 > r && (r = 0),
                0 > h && (h = 0),
                0 > a && (a = 0),
                this[Xw][kf](h, s, a, r),
                this[tM] && this[tM](),
                this[EC] = !0,
                !0
            }
        },
        validateChildren: function () {
            var t = this[hC];
            this[hC] = !1;
            var i = this[pC],
            n = this[kC];
            i && (i[wC] = this[wC], i[TC] = this[TC], i.$shadowColor = this.$shadowColor, i.$shadowBlur = this[mC], i.$shadowOffsetX = this[bC], i[yC] = this.$shadowOffsetY),
            this[kC] = !1,
            i && i._1g && (n = i[mo]() || n, i.$x = 0, i.$y = 0, i[Uf] && nU[Vr](i), t = !0);
            for (var e = 0,
            s = this._fk[qr]; s > e; e++) {
                var r = this._fk[e];
                if (r != i) {
                    var h = r._1g && r[mo](); (h || n) && r._hm && Vn(r, i, this),
                    !t && h && (t = !0)
                }
            }
            return t
        },
        measure: function () {
            this._jc.clear();
            for (var t, i, n = 0,
            e = this._fk[qr]; e > n; n++) t = this._fk[n],
            t._hm && (i = t._fn, i[Ga] <= 0 || i[za] <= 0 || this._jc[hT](t.$x + i.x, t.$y + i.y, i.width, i[za]))
        },
        _j5: null,
        _n0s: function (t) {
            if (!this._j5) {
                if (!t[zI]) return;
                return this._j5 = new Qz,
                this._j5.add(t)
            }
            return t[zI] ? this._j5.add(t) : this._j5[Oh](t)
        },
        draw: function (t, i, n) {
            for (var e, s = 0,
            r = this._fk[qr]; r > s; s++) e = this._fk[s],
            e._hm && !e[zI] && e._jv(t, i, n, this)
        },
        _9i: function (t, i) {
            if (!this._hm || !this._j5 || !this._j5[qr]) return !1;
            t[no](),
            t.translate(this.$x, this.$y),
            this[bf] && this[vf] && t[Ao](this.$_hostRotate),
            (this.offsetX || this[HO]) && t.translate(this.offsetX, this[HO]),
            this[yf] && t[Ao](this.$rotate),
            this[gf] && this._n0q && t[eo](-this._n0q.x, -this._n0q.y),
            this.shadowColor && (t[G_] = this[G_], t[PO] = this[PO] * i, t[Mx] = this[Mx] * i, t.shadowOffsetY = this.shadowOffsetY * i),
            t.beginPath();
            for (var n, e = 0,
            s = this._fk[qr]; s > e; e++) n = this._fk[e],
            n._hm && n[zI] && n._jv(t, i, this[oT], this);
            t.restore()
        },
        doHitTest: function (t, i, n) {
            if (n) {
                if (!this._jc[yl](t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._jc[$f](t, i)) return !1;
            return this.hitTestChildren(t, i, n)
        },
        hitTestChildren: function (t, i, n) {
            for (var e, s = this._fk[qr] - 1; s >= 0; s--) if (e = this._fk[s], e._hm && e.hitTest(t, i, n)) return e;
            return !1
        },
        destroy: function () {
            this[np] = !0;
            for (var t, i = this._fk.length - 1; i >= 0; i--) t = this._fk[i],
            t.destroy()
        }
    },
    p(NW, wW),
    K(NW[sh], {
        renderColorBlendMode: {
            get: function () {
                return this.$renderColorBlendMode
            },
            set: function (t) {
                this[TC] = t,
                this._1g = !0,
                this.body && (this[Fm][Zm] = this[TC])
            }
        },
        renderColor: {
            get: function () {
                return this[wC]
            },
            set: function (t) {
                this[wC] = t,
                this._1g = !0,
                this[Fm] && (this[Fm][Xm] = this.$renderColor)
            }
        },
        bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this[EC] = !1;
                    var t, i = this[Fm];
                    t = i && i._hm && !this._$t() ? i._fn[Qr]() : this._fn[Qr](),
                    this[Ao] && ji(t, this.rotate, t),
                    t.x += this.$x,
                    t.y += this.$y,
                    this._d4 = t
                }
                return this._d4
            }
        },
        bounds: {
            get: function () {
                return new hH((this.$x || 0) + this[Xw].x, (this.$y || 0) + this[Xw].y, this.uiBounds[Ga], this.uiBounds[za])
            }
        },
        body: {
            get: function () {
                return this[pC]
            },
            set: function (t) {
                t && this._myody != t && (this[pC] = t, this[kC] = !0, this[rC]())
            }
        }
    }),
    Jz[OC] = 1;
    var $W = function () {
        k(this, $W, arguments)
    };
    $W[sh] = {
        strokeStyle: Ym,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _j1: 1,
        _j2: 1,
        outline: 0,
        onDataChanged: function (t) {
            w(this, $W, MC, arguments),
            this._k9 && this._87 && this._k9._6s(this._87, this),
            t && this[iA](t)
        },
        _mxd: function (t) {
            this._k9 = xn(t),
            this._k9[mo](),
            (this._k9._lo == MY || this._k9._6l()) && (this._87 || (this._87 = function () {
                this[dT](),
                this._jg && this._jg.graph && (this._jg[rC](), this._jg.graph.invalidate())
            }), this._k9[qo](this._87, this))
        },
        _k9: null,
        initialize: function () {
            this[iA](this.$data)
        },
        _55: function () {
            return this._k9 && this._k9.draw
        },
        _9t: function (t) {
            if (!t || t.width <= 0 || t[za] <= 0 || !this.$size || !(this[Jk] instanceof Object)) return this._j1 = 1,
            void (this._j2 = 1);
            var i = this[Jk][Ga],
            e = this[Jk].height;
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._j1 = 1,
            void (this._j2 = 1);
            var s, r, h = t[Ga],
            a = t.height;
            i >= 0 && (s = i / h),
            e >= 0 && (r = e / a),
            0 > i ? s = r : 0 > e && (r = s),
            this._j1 = s,
            this._j2 = r
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this[SC] = !1;
                var t = this[jC];
                this._j1,
                this._j2,
                this._9t(t),
                this[IC](t[Ga] * this._j1, t.height * this._j2, t.x * this._j1, t.y * this._j2)
            }
        },
        measure: function () {
            var t = this._k9[Eo](this[So] + this[Ix]);
            return t ? (this[SC] = !0, void (this._originalBounds = t[Qr]())) : void this._jc.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this[AC] = !0
        },
        _1k: function () {
            this.$invalidateFillGradient = !1,
            this[$x] = this[Dx] ? LY[sh].generatorGradient.call(this.$fillGradient, this._8e) : null
        },
        _k7: function (t) {
            var i, n;
            if (Eg == this.$adjustType) i = 1,
            n = -1;
            else {
                if (pg != this[CC]) return;
                i = -1,
                n = 1
            }
            var e = this._jc.cx,
            s = this._jc.cy;
            t.translate(e, s),
            t.scale(i, n),
            t[eo](-e, -s)
        },
        draw: function (t, i, n, e) {
            if (this._j1 && this._j2) {
                if (this[AC] && this._1k(), t.save(), this.$adjustType && this._k7(t), this._k9._lo == jY) return t[so](this._j1, this._j2),
                this._k9._lm[Fo](t, i, this, n, e || this),
                void t[co]();
                n && this._88(t, i, e),
                this._k9.draw(t, i, this, this._j1, this._j2),
                t[co]()
            }
        },
        doHitTest: function (t, i, n) {
            if (this._k9.hitTest) {
                if (Eg == this[CC]) {
                    var e = this._jc.cy;
                    i = 2 * e - i
                } else if (pg == this[CC]) {
                    var s = this._jc.cx;
                    t = 2 * s - t
                }
                t /= this._j1,
                i /= this._j2;
                var r = (this._j1 + this._j2) / 2;
                return r > 1 && (n /= r, n = 0 | n),
                this._k9._lm instanceof KY ? this._k9._lm.hitTest(t, i, n, !0, this[RC], this[LC] || this.$fillGradient) : this._k9[o_](t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    },
    p($W, wW),
    _s($W.prototype, {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: [fM, PC]
        },
        fillGradient: {
            validateFlags: [DC]
        }
    }),
    K($W[sh], {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    }),
    Jz[NC] = oH.CENTER_MIDDLE;
    var BW = function () {
        k(this, BW, arguments),
        this[BI] = Jz[$I]
    };
    BW[sh] = {
        color: Jz.LABEL_COLOR,
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _gl: null,
        alignPosition: null,
        measure: function () {
            this[ho];
            var t = Ni(this[zf], this.$fontSize, this[$C], this.$fontStyle, Jz[ro], this[BC]);
            if (this._gl = t, this[FC]) {
                var i = this[FC].width || 0,
                n = this[FC].height || 0;
                return this.setMeasuredBounds(i > t[Ga] ? i : t.width, n > t.height ? n : t[za])
            }
            return this.setMeasuredBounds(t.width, t[za])
        },
        doHitTest: function (t, i, n) {
            return this.$data ? An(t, i, n, this) : !1
        },
        draw: function (t, i, n, e) {
            if (n && this._88(t, i, e), this[GC] || Jz.FONT_SIZE, this[bf] && this[vf]) {
                var s = _n(this.$_hostRotate);
                s > tH && 3 * tH > s && (t[eo](this._jc.width / 2, this._jc.height / 2), t[Ao](Math.PI), t[eo](-this._jc[Ga] / 2, -this._jc[za] / 2))
            }
            var r = this[UI] || Jz.ALIGN_POSITION,
            h = r[xl],
            a = r[na],
            o = 0;
            h == uH ? (h = e_, o += this._jc[Ga] / 2) : h == cH ? (h = Jh, o += this._jc[Ga]) : h = pa;
            var f = 0;
            a == dH ? f = (this._jc[za] - this._gl[za]) / 2 : a == lH && (f = this._jc[za] - this._gl[za]),
            t.fillStyle = this[BI],
            Di(t, this[zf], o, f, h, this[$C], this.$fontSize, this[zC], Jz[ro], this.$font)
        },
        _55: function () {
            return null != this[zf] || this[FC]
        },
        $invalidateFont: !0
    },
    p(BW, wW),
    _s(BW[sh], {
        size: {
            validateFlags: [_g]
        },
        fontStyle: {
            validateFlags: [_g, HC]
        },
        fontSize: {
            validateFlags: [_g, HC]
        },
        fontFamily: {
            validateFlags: [_g, HC]
        }
    }),
    K(BW[sh], {
        font: {
            get: function () {
                return this.$invalidateFont && (this[YC] = !1, this.$font = (this[zC] || Jz[UC]) + wh + (this.$fontSize || Jz[Qa]) + to + (this[$C] || Jz[io])),
                this[BC]
            }
        }
    });
    var FW = function (t) {
        t = t || new KY,
        this.pathBounds = new hH,
        k(this, FW, [t])
    };
    FW[sh] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this[WC] = !0,
            this[qC] = !0,
            this[zf].getBounds(this[RC] + this[VC], this[XC]),
            this[IC](this[XC])
        },
        validateSize: function () {
            if (this[WC] || this[qC]) {
                var t = this[XC][Qr]();
                if (this.$invalidateFromArrow) {
                    this[WC] = !1;
                    var i = this[ZC]();
                    i && t.add(i)
                }
                if (this[qC]) {
                    this.$invalidateToArrow = !1;
                    var i = this[KC]();
                    i && t.add(i)
                }
                this[IC](t)
            }
        },
        validateFromArrow: function () {
            if (!this[zf]._iy || !this[JC]) return void (this.$fromArrowShape = null);
            var t = this.$data,
            i = 0,
            n = 0,
            e = this[QC];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._iy)),
            this[tR] = t[Zo](i, n),
            this[tR][Ao] = Math.PI + this[tR].rotate || 0,
            this.$fromArrowShape = Gs(this[JC], this[iR]);
            var s = this[nR].getBounds(this[eR][So] + this[eR][Ix]);
            return this[sR] instanceof dY[rR] ? this[eR][$x] = LY.prototype[Cf].call(this[sR], s) : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null),
            s.offset(this[tR].x, this[tR].y),
            Ii(s, this.fromArrowLocation[Ao], s, this[tR].x, this[tR].y),
            s
        },
        validateToArrow: function () {
            if (!this.$data._iy || !this.$toArrow) return void (this[hR] = null);
            var t = this.$data,
            i = 0,
            n = 0,
            e = this.$toArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0),
            0 > i && i > -1 && (i *= t._iy),
            i += t._iy,
            this[aR] = t[Zo](i, n),
            this[hR] = Gs(this[oR], this.$toArrowSize);
            var s = this[hR][Eo](this.toArrowStyles[So] + this.toArrowStyles.outline);
            return this[UA] instanceof dY.Gradient ? this[fR][$x] = LY.prototype[Cf][Vr](this[UA], s) : this[fR] && (this[fR][$x] = null),
            s[Mm](this[aR].x, this[aR].y),
            Ii(s, this.toArrowLocation[Ao], s, this[aR].x, this[aR].y),
            s
        },
        _26: function (t) {
            var i = t ? "from" : YT,
            e = this[i + uR];
            e === n && (e = this.$lineWidth);
            var s = this[i + cR];
            s === n && (s = this[B_]);
            var r = this[i + _R];
            r || (this[i + _R] = r = {}),
            r.lineWidth = e,
            r[B_] = s,
            r[Wf] = this[i + dR],
            r.lineDashOffset = this[i + lR],
            r.fillColor = this[i + vR],
            r[Dx] = this[i + bR],
            r[Ax] = this[i + yR],
            r[$_] = this[i + gR],
            r[Ix] = this[i + mR] || 0,
            r[Rx] = this[i + xR]
        },
        doValidate: function () {
            return this[JC] && this._26(!0),
            this[oR] && this._26(!1),
            w(this, FW, sM)
        },
        drawArrow: function (t, i, n, e) {
            if (this[JC] && this[nR]) {
                t[no]();
                var s = this[tR],
                r = s.x,
                h = s.y,
                a = s[Ao];
                t.translate(r, h),
                a && t[Ao](a),
                this[nR][Fo](t, i, this.fromArrowStyles, n, e),
                t.restore()
            }
            if (this[oR] && this[hR]) {
                t[no]();
                var s = this[aR],
                r = s.x,
                h = s.y,
                a = s.rotate;
                t[eo](r, h),
                a && t[Ao](a),
                this[hR].draw(t, i, this[fR], n, e),
                t[co]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1k: function () {
            this.$invalidateFillGradient = !1,
            this[$x] = this[ER] ? LY.prototype[Cf][Vr](this.$fillGradient, this._8e) : null
        },
        draw: function (t, i, n, e) {
            this.$invalidateFillGradient && this._1k(),
            this.$data[Fo](t, i, this, n, e),
            this[pR](t, i, n, e)
        },
        doHitTest: function (t, i, n) {
            if (this.$data[o_](t, i, n, !0, this.$lineWidth + this.$outline, this.$fillColor || this[ER])) return !0;
            if (this[oR] && this[hR]) {
                var e = t - this[aR].x,
                s = i - this[aR].y;
                if (this.toArrowLocation[Ao]) {
                    var r = Oi(e, s, -this[aR][Ao]);
                    e = r.x,
                    s = r.y
                }
                var h = this[fR][Px] || this.toArrowStyles[Dx];
                if (this[hR][o_](e, s, n, !0, this.toArrowStyles[So], h)) return !0
            }
            if (this.$fromArrow && this[nR]) {
                var e = t - this[tR].x,
                s = i - this[tR].y;
                if (this[tR].rotate) {
                    var r = Oi(e, s, -this[tR][Ao]);
                    e = r.x,
                    s = r.y
                }
                var h = this.fromArrowStyles[Px] || this[eR][Dx];
                if (this.$fromArrowShape.hitTest(e, s, n, !0, this[eR].lineWidth, h)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    },
    p(FW, wW),
    _s(FW[sh], {
        strokeStyle: {
            validateFlags: [kR, wR]
        },
        fillColor: {},
        fillGradient: {
            validateFlags: [DC]
        },
        fromArrowOffset: {
            validateFlags: [kR, fM]
        },
        fromArrowSize: {
            validateFlags: [kR, fM]
        },
        fromArrow: {
            validateFlags: [kR, fM]
        },
        fromArrowOutline: {
            validateFlags: [kR, fM]
        },
        fromArrowStroke: {
            validateFlags: [kR, fM]
        },
        fromArrowStrokeStyle: {
            validateFlags: [kR]
        },
        toArrowOffset: {
            validateFlags: [wR, fM]
        },
        toArrowSize: {
            validateFlags: [wR, fM]
        },
        toArrow: {
            validateFlags: [wR, fM]
        },
        toArrowOutline: {
            validateFlags: [wR, fM]
        },
        toArrowStroke: {
            validateFlags: [wR, fM]
        },
        toArrowStrokeStyle: {
            validateFlags: [wR]
        },
        outline: {
            value: 0,
            validateFlags: [_g]
        }
    }),
    K(FW.prototype, {
        length: {
            get: function () {
                return this[Mo].length
            }
        }
    }),
    bs[sh] = {
        shape: null,
        path: null,
        initialize: function () {
            w(this, bs, eM),
            this.path = new KY,
            this[uO]._dl = !1,
            this[_A] = new FW(this[uO]),
            this.addChild(this[_A], 0),
            this[pC] = this[_A],
            RW[uC](this)
        },
        _1q: !0,
        _69: null,
        _$t: function () {
            return !1
        },
        _4d: function () {
            return !1
        },
        validatePoints: function () {
            this[_A].invalidateData();
            var t = this[zf],
            i = this.path;
            i[Ha]();
            var n = t[Du],
            e = t[Ru];
            n && e && Ws(this, t, i, n, e)
        },
        getEndPointBounds: function (t) {
            return t[TR].clone()
        },
        _3k: function (t, i, n, e, s, r, h) {
            return t.hasPathSegments() ? void (i.segments = t.pathSegments[al]()) : n == e ? void this.drawLoopedEdge(i, n, s, r) : void this[OR](i, n, e, s, r, h)
        },
        drawLoopedEdge: function (t, i, n, e) {
            Zs(this, e, t)
        },
        drawEdge: function (t, i, n, e, s, r) {
            var h = s.center,
            a = r[e_];
            if (e == lY.EDGE_TYPE_ZIGZAG) {
                var o = (h.x + a.x) / 2,
                f = (h.y + a.y) / 2,
                u = h.x - a.x,
                c = h.y - a.y,
                _ = Math[lo](u * u + c * c),
                d = Math[vo](c, u);
                d += Math.PI / 6,
                _ *= .04,
                _ > 30 && (_ = 30);
                var l = Math.cos(d) * _,
                v = Math.sin(d) * _;
                return t[Zu](o - v, f + l),
                void t[Zu](o + v, f - l)
            }
            var b = Xs(this, this[Mo], s, r, i, n, h, a);
            b && (t._f8 = b)
        },
        _2g: function () {
            if (!this[zf].isBundleEnabled()) return null;
            var t = this.graph._8y._93(this.$data);
            if (!t || !t[MR](this.graph) || !t._hb) return null;
            var i = t[SR](this);
            return t[jR](this[zf]) || (i = -i),
            i
        },
        checkBundleLabel: function () {
            var t = this[IR]();
            return t ? (this[ZA] || this[AR](), this[ZA]._hm = !0, void (this[ZA][Mo] = t)) : void (this.bundleLabel && (this.bundleLabel._hm = !1, this[ZA][Mo] = null))
        },
        createBundleLabel: function () {
            var t = new BW;
            t[CR] = !1,
            this[ZA] = t,
            this[dC](this.bundleLabel),
            LW.initBindingProperties(this)
        },
        getBundleLabel: function () {
            return this.graph[IR](this[Mo])
        },
        doValidate: function () {
            return this._1q && (this._1q = !1, this[RR]()),
            this[LR](),
            w(this, bs, sM)
        },
        _44: function () {
            this._1q = !0,
            this[rC]()
        },
        _10: function (t, i, n) {
            var e = this[sC][oC](this, t, i, n);
            return e = MW.onBindingPropertyChange(this, t, i, n) || e,
            this[ZA] && this[ZA][zf] && (e = LW.onBindingPropertyChange(this, t, i, n) || e),
            RW.onBindingPropertyChange(this, t, i, n) || e
        }
    },
    p(bs, NW),
    bs[PR] = function (t, i, n, e) {
        if (t.moveTo(i.x, i.y), !e || e == lY.EDGE_TYPE_DEFAULT) return void t[Zu](n.x, n.y);
        if (e == lY.EDGE_TYPE_VERTICAL_HORIZONTAL) t.lineTo(i.x, n.y);
        else if (e == lY.EDGE_TYPE_HORIZONTAL_VERTICAL) t[Zu](n.x, i.y);
        else if (0 == e.indexOf(lY.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = e == lY.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : e == lY[Kc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var r = (i.x + n.x) / 2,
            h = (i.y + n.y) / 2;
            s ? (t[Zu](r, i.y), t[Zu](r, n.y)) : (t[Zu](i.x, h), t[Zu](n.x, h))
        } else if (0 == e[ih](lY.EDGE_TYPE_ELBOW)) {
            var s, a = GW[OW[Sc]] || 0;
            s = e == lY[Ic] ? !0 : e == lY[Lc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y),
            s ? (t[Zu](i.x + a, i.y), t[Zu](n.x - a, n.y)) : (t[Zu](i.x, i.y + a), t[Zu](n.x, n.y - a))
        } else if (0 == e[ih](DR)) {
            var a = GW[OW[Sc]] || 0;
            if (e == lY.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t[Zu](i.x, o),
                t[Zu](n.x, o)
            } else if (e == lY.EDGE_TYPE_EXTEND_BOTTOM) {
                var o = Math.max(i.y, n.y) + a;
                t[Zu](i.x, o),
                t.lineTo(n.x, o)
            } else if (e == lY[Rc]) {
                var f = Math.min(i.x, n.x) - a;
                t.lineTo(f, i.y),
                t[Zu](f, n.y)
            } else if (e == lY[Fc]) {
                var f = Math.max(i.x, n.x) + a;
                t[Zu](f, i.y),
                t[Zu](f, n.y)
            }
        } else if (e == lY[NR]) {
            var r = (i.x + n.x) / 2,
            h = (i.y + n.y) / 2,
            u = i.x - n.x,
            c = i.y - n.y,
            _ = Math.sqrt(u * u + c * c),
            d = Math[vo](c, u);
            d += Math.PI / 6,
            _ *= .04,
            _ > 30 && (_ = 30);
            var l = Math.cos(d) * _,
            v = Math.sin(d) * _;
            t[Zu](r - v, h + l),
            t[Zu](r + v, h - l)
        }
        t[Zu](n.x, n.y)
    },
    K(bs[sh], {
        length: {
            get: function () {
                return this[uO] ? this[uO][qr] : 0
            }
        }
    }),
    bs[sh][Ya] = function (t, i, n) {
        var e = wn(this[uO], t, i, n);
        if (e && e[qr] > 2) {
            var s = this[Mo],
            r = e[e.length - 1];
            s[$R] = r[Io] == YY ? e[Zr](1, e[qr] - 2) : e[Zr](1, e[qr] - 1)
        }
    },
    ys.prototype = {
        _2p: null,
        image: null,
        initialize: function () {
            w(this, ys, eM),
            this[BR](),
            AW[uC](this)
        },
        _mxd: function () {
            this[Mo].image ? this[tx] && (this[Fm] = this[tx]) : this[Ip] && (this.body = this[Ip])
        },
        _my1: function () {
            this[tx] = new $W,
            this[dC](this.image, 0),
            this[iA]()
        },
        doValidate: function () {
            this[Fm] && (this instanceof sr && !this.$data[jO] && this._59() ? this.body[gf] = !1 : (this[Fm].$layoutByAnchorPoint = null != this._2p, this[Fm][rO] = this._2p));
            var t = this.$data[ZT],
            i = 0,
            n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[EC] = !0),
            this.$x = i,
            this.$y = n,
            NW.prototype[sM][Vr](this) || e
        },
        _10: function (t, i, n) {
            var e = this[sC][oC](this, t, i, n);
            return e = MW[oC](this, t, i, n) || e,
            AW.onBindingPropertyChange(this, t, i, n) || e
        }
    },
    p(ys, NW);
    var GW = {};
    GW[OW.SELECTION_COLOR] = Jz[vM],
    GW[OW[cM]] = Jz.SELECTION_BORDER,
    GW[OW[_M]] = Jz[_M],
    GW[OW[xm]] = lY[gm],
    GW[OW[PI]] = 2,
    GW[OW[gM]] = 2,
    GW[OW[$I]] = Jz.LABEL_COLOR,
    GW[OW[OS]] = oH[Rl],
    GW[OW[NI]] = oH.CENTER_TOP,
    GW[OW[DS]] = new aH(0, 2),
    GW[OW[WI]] = 8,
    GW[OW[FR]] = 8,
    GW[OW.LABEL_POINTER] = !0,
    GW[OW[FI]] = 0,
    GW[OW.LABEL_BORDER_STYLE] = Ym,
    GW[OW[tj]] = !0,
    GW[OW.LABEL_BACKGROUND_COLOR] = null,
    GW[OW.LABEL_BACKGROUND_GRADIENT] = null,
    GW[OW.EDGE_COLOR] = GR,
    GW[OW.EDGE_WIDTH] = 1.5,
    GW[OW[iI]] = !0,
    GW[OW.EDGE_TO_AT_EDGE] = !0,
    GW[OW[cA]] = X(3438210798),
    GW[OW[dj]] = 1,
    GW[OW[vj]] = Ym,
    GW[OW[aO]] = !0,
    GW[OW.ARROW_FROM_SIZE] = Jz.ARROW_SIZE,
    GW[OW.ARROW_TO_SIZE] = Jz[km],
    GW[OW[d_]] = 10,
    GW[OW[Uc]] = 8,
    GW[OW.EDGE_CORNER] = lY.EDGE_CORNER_ROUND,
    GW[OW.EDGE_SPLIT_BY_PERCENT] = !0,
    GW[OW[Sc]] = 20,
    GW[OW[jc]] = .5,
    GW[OW[Gc]] = 20,
    GW[OW[Wj]] = 20,
    GW[OW[gj]] = oH[Rl],
    GW[OW.EDGE_BUNDLE_LABEL_POSITION] = oH.CENTER_TOP,
    GW[OW[mj]] = zR,
    GW[OW.SHAPE_STROKE] = 1,
    GW[OW.SHAPE_STROKE_STYLE] = HR,
    GW[OW[pM]] = Jz[nf],
    GW[OW[KI]] = 1,
    Jz[f_] = 2;
    var zW = function (i, n) {
        this._$v = new wH,
        this._$v.on(function (t) {
            vO == t[jd] && this[tT]()
        },
        this),
        this._1i = new wH,
        this._1i[sv](function (t) {
            !this[vO] || t[jd] != MH.KIND_CLEAR && t[jd] != MH.KIND_REMOVE || this[Z_][a_](this[vO]) || (this[vO] = null)
        },
        this),
        this._$b = new wH,
        this._17 = new wH,
        this._$m = new wH,
        this._$q = new wH,
        this[Z_] = n || new os,
        this._8y = new fW(this, i),
        this._31 = new Dr(this),
        this._1c = new wH,
        this._onresize = DH(t, YR,
        function () {
            this[UR]()
        },
        !1, this),
        this._8y[Tw][WR] = function (t) {
            this[WR](t)
        } [mh](this),
        this._8y[Tw][qR] = function (t) {
            this.ondragover(t)
        } .bind(this)
    };
    zW[sh] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            dY[VR](t)
        },
        getDropInfo: function (t, i) {
            var n = null;
            if (i) try {
                n = JSON[Ra](i)
            } catch (e) { }
            return n
        },
        ondrop: function (t) {
            var i = t[XR];
            if (i) {
                var n = i.getData(bd),
                e = this.getDropInfo(t, n);
                e || (e = {},
                e.image = i[yy](tx), e.type = i[yy](Io), e.label = i.getData(Ip), e[jO] = i[yy](jO));
                var s = this[ZR](t);
                if (s = this.toLogical(s.x, s.y), !(this.dropAction instanceof Function && this.dropAction[Vr](this, t, s, e) === !1) && (e[tx] || e[Ip] || e[Io])) {
                    var r = e[tx],
                    h = e[Io],
                    a = e.label,
                    o = e.groupImage;
                    dY[VR](t);
                    var f;
                    if (h && KR != h ? CO == h ? f = this[JR](a, s.x, s.y) : QR == h ? f = this[tL](a, s.x, s.y) : IO == h ? (f = this.createGroup(a, s.x, s.y), o && (o = nr(o), o && (f[jO] = o))) : (h = J(h), h instanceof Function && h[sh] instanceof xW && (f = new h, f.name = a, f[KT] = new nH(s.x, s.y), this[TT].add(f))) : f = this[iL](a, s.x, s.y), f) {
                        if (r && (r = nr(r), r && (f[tx] = r)), t[nL]) {
                            var u = this.getElementByMouseEvent(t);
                            u && this._n0o(u) && (f[Cu] = u)
                        }
                        if (e.properties) for (var c in e[eL]) f[c] = e[eL][c];
                        if (e.clientProperties) for (var c in e[sL]) f.set(c, e[sL][c]);
                        if (e.styles && f.putStyles(e[rL]), this.onElementCreated(f, t, e) === !1) return !1;
                        var _ = new Pr(this, Pr.ELEMENT_CREATED, t, f);
                        return this[hL](_),
                        f
                    }
                }
            }
        },
        _n0o: function (t) {
            return t[b_] || t instanceof kW || t.droppable
        },
        enableDoubleClickToOverview: !0,
        _8y: null,
        _$v: null,
        _1i: null,
        _$b: null,
        _$q: null,
        _17: null,
        _$m: null,
        _1s: function (t) {
            return this._$v[_h](t)
        },
        _41: function (t) {
            this._$v.onEvent(t),
            Qk == t[jd] && this[aL]()
        },
        isVisible: function (t) {
            return this._8y._di(t)
        },
        isMovable: function (t) {
            return (t instanceof xW || t instanceof mW && t.hasPathSegments()) && t[oL] !== !1
        },
        isSelectable: function (t) {
            return t[fL] !== !1
        },
        isEditable: function (t) {
            return t.editable !== !1
        },
        isRotatable: function (t) {
            return t.rotatable !== !1
        },
        isResizable: function (t) {
            return t[uL] !== !1
        },
        canLinkFrom: function (t) {
            return t.linkable !== !1 && t[cL] !== !1
        },
        canLinkTo: function (t) {
            return t[_L] !== !1 && t[dL] !== !1
        },
        isEndPointEditable: function (t) {
            return t.endPointEditable !== !1
        },
        createNode: function (t, i, n) {
            var e = new xW(t, i, n);
            return this[TT].add(e),
            e
        },
        createText: function (t, i, n) {
            var e = new us(t, i, n);
            return this[TT].add(e),
            e
        },
        createShapeNode: function (t, i, n, e) {
            D(i) && (e = n, n = i, i = null);
            var s = new EW(t, i);
            return s[ZT] = new nH(n, e),
            this._kjModel.add(s),
            s
        },
        createGroup: function (t, i, n) {
            var e = new kW(t, i, n);
            return this[TT].add(e),
            e
        },
        createEdge: function (t, i, n) {
            if (t instanceof xW) {
                var e = n;
                n = i,
                i = t,
                t = e
            }
            var s = new mW(i, n);
            return t && (s[ST] = t),
            this[TT].add(s),
            s
        },
        addElement: function (t, i) {
            this._kjModel.add(t),
            i && t[Ur]() && t[Vu](function (t) {
                this[lL](t, i)
            },
            this)
        },
        removeElement: function (t) {
            this[TT].remove(t)
        },
        clear: function () {
            this[TT][Ha]()
        },
        getStyle: function (t, i) {
            var e = t._jh[i];
            return e !== n ? e : this[vL](i)
        },
        getDefaultStyle: function (t) {
            if (this._jh) {
                var i = this._jh[t];
                if (i !== n) return i
            }
            return GW[t]
        },
        _2l: function (t, i) {
            if (!this[bL] || this.limitedBounds[a_](this.viewportBounds)) return i && i(),
            !1;
            t = this._2f(),
            this[yL]();
            var n, e, s, r = this[wT],
            h = this[bL],
            a = r.width / this[bL].width,
            o = r[za] / this[bL][za];
            if (1 >= a && 1 >= o) return n = h[pa] > r[pa] ? h[pa] : h.right < r.right ? r[pa] - (r[Jh] - h[Jh]) : r.left,
            e = h.top > r.top ? h.top : h[Kh] < r[Kh] ? r.top - (r.bottom - h[Kh]) : r.top,
            void this[Rw](-n * this.scale, -e * this[so], this[so], !1, i);
            var f = a > o;
            s = Math.max(a, o),
            f ? (n = h.x, e = h.y + (r.top - h.top) * (1 - s) / s, e >= h.y ? e = h.y : e < h[Kh] - r[za] / s && (e = h[Kh] - r.height / s)) : (e = h.y, n = h.x + (r[pa] - h[pa]) * (1 - s) / s, n >= h.x ? n = h.x : n < h[Jh] - r.width / s && (n = h[Jh] - r[Ga] / s)),
            s *= this[so],
            n *= s,
            e *= s,
            this[Rw](-n, -e, s, t, i)
        },
        checkLimitedBounds: function (t) {
            return this[gL] || !this[bL] || this[bL][a_](this[wT]) ? !1 : (this._mxheckingBounds = !0, void this[mL](function () {
                this._2l(t,
                function () {
                    this._mxheckingBounds = !1
                } [mh](this))
            },
            this))
        },
        zoomByMouseEvent: function (t, i, n, e) {
            var s = this[ZR](t);
            return Mh == typeof i ? this.zoomAt(Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[xL](s.x, s.y, n, e) : this.zoomOut(s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function (t, i, n) {
            return this[Rw](this.tx + t, this.ty + i, this[so], n)
        },
        translateTo: function (t, i, n, e, s) {
            if (n && (n = Math.min(this[Qm], Math.max(this[EL], n))), e) {
                var r = this._63();
                return void r._kn(t, i, n, e, s)
            }
            var h = this._8y[pL](t, i, n);
            return s && s(),
            h
        },
        centerTo: function (t, i, e, s, r) {
            return (!e || 0 >= e) && (e = this.scale),
            s === n && (s = this._2f()),
            this[Rw](this[Ga] / 2 - t * e, this[za] / 2 - i * e, e, s, r)
        },
        moveToCenter: function (t, i) {
            if (arguments[2] === !1 || !this._8y[kL]()) {
                var n = this.bounds;
                return void this[wL](n.cx, n.cy, t, i)
            }
            return this._8y[rb] || (i = !1),
            this[mL](this[TL][mh](this, t, i, !1))
        },
        zoomToOverview: function (t, i) {
            if (arguments[2] === !1 || !this._8y[kL]()) {
                var n = this._8y._1w();
                return void (n && (i && (n[so] = Math.min(n.scale, i)), this[wL](n.cx, n.cy, n[so], t)))
            }
            return this._8y[rb] || (t = !1),
            this[mL](this[OL].bind(this, t, i, !1))
        },
        _2f: function () {
            return this._8y._n0k ? this[ML] === n || null === this[ML] ? Jz[SL] : this.zoomAnimation : !1
        },
        zoomAt: function (t, i, e, s, r) {
            s === n && (s = this._2f()),
            i === n && (i = this[Ga] / 2),
            i = i || 0,
            e === n && (e = this[za] / 2),
            e = e || 0;
            var h = this[so];
            return t = Math.min(this[Qm], Math.max(this[EL], h * t)),
            i = t * (this.tx - i) / h + i,
            e = t * (this.ty - e) / h + e,
            this[Rw](i, e, t, s, r)
        },
        zoomOut: function (t, i, n, e) {
            return this[jL](1 / this.scaleStep, t, i, n, e)
        },
        zoomIn: function (t, i, n, e) {
            return this[jL](this.scaleStep, t, i, n, e)
        },
        _63: function () {
            return this[IL] || (this._panAnimation = new VW(this)),
            this[IL]
        },
        onAnimationStart: function () { },
        onAnimationEnd: function () { },
        isAnimating: function () {
            return this[IL] && this._panAnimation._dk()
        },
        enableInertia: !0,
        _9o: function (t, i) {
            var n = this._63();
            return n._ga(t || 0, i || 0)
        },
        stopAnimation: function () {
            this[IL] && this[IL]._la()
        },
        getUI: function (t) {
            return Q(t) ? this._8y._3x(t) : this._8y._kt(t)
        },
        getUIByMouseEvent: function (t) {
            return this._8y._3x(t)
        },
        hitTest: function (t) {
            return this._8y.hitTest(t)
        },
        globalToLocal: function (t) {
            return this._8y._8p(t)
        },
        toCanvas: function (t, i) {
            return this._8y._fw(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._8y._$l(t) : this._8y._dt(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._8y._3x(t);
            return i ? i.$data : void 0
        },
        getElement: function (t) {
            if (Q(t)) {
                var i = this._8y._3x(t);
                return i ? i[zf] : null
            }
            return this._kjModel[hl](t)
        },
        invalidate: function () {
            this._8y[Kk]()
        },
        invalidateUI: function (t) {
            t.invalidate(),
            this.invalidate()
        },
        invalidateElement: function (t) {
            this._8y._3h(t)
        },
        getUIBounds: function (t) {
            return this._8y._30(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._8y._4f(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._8y._$y(t, i)
        },
        forEachUI: function (t, i) {
            return this._8y._dw(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._8y._4a(t, i)
        },
        forEach: function (t, i) {
            return this[TT][au](t, i)
        },
        getElementByName: function (t) {
            var i;
            return this[au](function (n) {
                return n[lh] == t ? (i = n, !1) : void 0
            }),
            i
        },
        focus: function (i) {
            if (i) {
                var n = t[gd] || t.pageXOffset,
                e = t.scrollY || t[xa];
                return this[AL][CL](),
                void t[xd](n, e)
            }
            this.canvasPanel[CL]()
        },
        callLater: function (t, i, n) {
            this._8y._dv(t, i, n)
        },
        exportImage: function (t, i) {
            return _r(this, t, i)
        },
        setSelection: function (t) {
            return this._kjModel._selectionModel.set(t)
        },
        select: function (t) {
            return this[TT][Ov].select(t)
        },
        unselect: function (t) {
            return this._kjModel._selectionModel.unselect(t)
        },
        reverseSelect: function (t) {
            return this[TT]._selectionModel[RL](t)
        },
        selectAll: function () {
            cr(this)
        },
        unSelectAll: function () {
            this.selectionModel[Ha]()
        },
        unselectAll: function () {
            this[LL]()
        },
        isSelected: function (t) {
            return this[TT][Ov].contains(t)
        },
        sendToTop: function (t) {
            Se(this._kjModel, t)
        },
        sendToBottom: function (t) {
            je(this[TT], t)
        },
        moveElements: function (t, i, n) {
            var e = [],
            s = new Qz;
            return l(t,
            function (t) {
                t instanceof xW ? e.push(t) : t instanceof mW && s.add(t)
            }),
            this._dq(e, i, n, s)
        },
        _dq: function (t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[qr] && 0 == e.length) return !1;
            if (0 != t[qr]) {
                var s = this._4b(t);
                e = this._4p(s, e),
                l(s,
                function (t) {
                    var e = t.$location;
                    e ? t[PL](e.x + i, e.y + n) : t[PL](i, n)
                })
            }
            return e && e.length && this._do(e, i, n),
            !0
        },
        _do: function (t, i, n) {
            t[au](function (t) {
                t.move(i, n)
            })
        },
        _4p: function (t, i) {
            return this[Z_][au](function (n) {
                n instanceof mW && this[DL](n) && t[a_](n[Du]) && t[a_](n[Ru]) && i.add(n)
            },
            this),
            i
        },
        _4b: function (t) {
            var i = new Qz;
            return l(t,
            function (t) {
                !this[DL](t),
                i.add(t),
                Te(t, i, this[NL])
            },
            this),
            i
        },
        reverseExpanded: function (t) {
            if (!t[Vw]()) return !1;
            var i = t[Lu](!0);
            return i ? i.reverseExpanded() !== !1 ? (this[Zk](), !0) : void 0 : !1
        },
        _31: null,
        _1c: null,
        beforeInteractionEvent: function (t) {
            return this._1c[_h](t)
        },
        onInteractionEvent: function (t) {
            this._1c.onEvent(t)
        },
        addCustomInteraction: function (t) {
            this._31[$L](t)
        },
        removeCustomInteraction: function (t) {
            this._31[BL](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t[RT] || t[lh]
        },
        updateViewport: function () {
            this._8y._7x()
        },
        destroy: function () {
            this._41(new gH(this, jy, !0, this[np])),
            this[np] = !0,
            NH(t, YR, this[FL]),
            this._31[jy](),
            this[Z_] = new os;
            var i = this[GL];
            this._8y._hj(),
            i && (i[zL] = "")
        },
        onPropertyChange: function (t, i, n) {
            this._$v.addListener(function (e) {
                e[jd] == t && i.call(n, e)
            })
        },
        removeSelection: function () {
            var t = this[X_]._j7;
            return t && 0 != t.length ? (t = t.slice(), this[TT][Oh](t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this.selectionModel[Id];
            return i && 0 != i.length ? void dY[mg](HL + i[qr],
            function () {
                var i = this[YL]();
                if (i) {
                    var n = new Pr(this, Pr.ELEMENT_REMOVED, t, i);
                    this[hL](n)
                }
            },
            this) : !1
        },
        createShapeByInteraction: function (t, i, n, e) {
            var s = new KY(i);
            i[qr] > 2 && s[Ju]();
            var r = this[tL](UL, s, n, e);
            this[WL](r, t);
            var h = new Pr(this, Pr[qL], t, r);
            return this[hL](h),
            r
        },
        createLineByInteraction: function (t, i, n, e) {
            var s = new KY(i),
            r = this[tL](VL, s, n, e);
            r[Oc](dY[XL][DM], null),
            r.setStyle(dY[XL].SHAPE_FILL_GRADIENT, null),
            r[Oc](dY[XL].LAYOUT_BY_PATH, !0),
            this[WL](r, t);
            var h = new Pr(this, Pr[qL], t, r);
            return this[hL](h),
            r
        },
        createEdgeByInteraction: function (t, i, n, e) {
            var s = this[ZL](KL, t, i);
            if (e) s._9v = e;
            else {
                var r = this[JL],
                h = this.edgeType;
                this.interactionProperties && (r = this[QL][uT] || r, h = this[QL].edgeType || h),
                r && (s.uiClass = r),
                h && (s.edgeType = h)
            }
            this.onElementCreated(s, n);
            var a = new Pr(this, Pr[qL], n, s);
            return this[hL](a),
            s
        },
        onElementCreated: function (t) {
            !t[Cu] && this[vO] && (t[Cu] = this[vO])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, n, e) {
            var s = this;
            n[tP](e.x, e.y, i[Mo], this[Mc](t, OW[IS]),
            function (n) {
                return s.onLabelEdit(t, i, n, i[Cu])
            })
        },
        onLabelEdit: function (t, i, n, e) {
            if (!n && !this.allowEmptyLabel) return dY[gg](iP),
            !1;
            if (Ip == i[lh]) {
                if (t[lh] == n) return !1;
                t.name = n
            } else e._fj(i, n) === !1 && (i[Mo] = n, this[nP](t))
        },
        setInteractionMode: function (t, i) {
            this[eP] = t,
            this.interactionProperties = i
        },
        upSubNetwork: function () {
            return this._3f ? this[vO] = er(this._3f) : !1
        },
        _$x: !1,
        invalidateVisibility: function () {
            this._$x = !0,
            this.invalidate()
        },
        getBundleLabel: function (t) {
            var i = t[Lu](!0);
            return i && i[sP] == t ? rP + i.bindableEdges.length : null
        },
        zoomAnimation: null,
        pauseRendering: function (t, i) {
            (this[hP] || i) && this._8y._7k(t)
        },
        _4m: n,
        enableRectangleSelectionByRightButton: !0
    },
    K(zW[sh], {
        center: {
            get: function () {
                return this[Cw](this[GL][U_] / 2, this[GL].clientHeight / 2)
            }
        },
        visibleFilter: {
            get: function () {
                return this[qw]
            },
            set: function (t) {
                this[qw] = t,
                this[tT]()
            }
        },
        topCanvas: {
            get: function () {
                return this._8y._topCanvas
            }
        },
        propertyChangeDispatcher: {
            get: function () {
                return this._$v
            }
        },
        listChangeDispatcher: {
            get: function () {
                return this._1i
            }
        },
        dataPropertyChangeDispatcher: {
            get: function () {
                return this._$b
            }
        },
        selectionChangeDispatcher: {
            get: function () {
                return this._$q
            }
        },
        parentChangeDispatcher: {
            get: function () {
                return this._17
            }
        },
        childIndexChangeDispatcher: {
            get: function () {
                return this._$m
            }
        },
        interactionDispatcher: {
            get: function () {
                return this._1c
            }
        },
        cursor: {
            set: function (t) {
                this[AL].style[aP] = t || this._31[nd]
            },
            get: function () {
                return this[AL][_a].cursor
            }
        },
        interactionMode: {
            get: function () {
                return this._31._mxurrentMode
            },
            set: function (t) {
                var i = this[eP];
                i != t && (this._31[Ad] = t, this._41(new gH(this, eP, t, i)))
            }
        },
        scaleStep: {
            get: function () {
                return this._8y._ei
            },
            set: function (t) {
                this._8y._ei = t
            }
        },
        maxScale: {
            get: function () {
                return this._8y._gv
            },
            set: function (t) {
                this._8y._gv = t
            }
        },
        minScale: {
            get: function () {
                return this._8y._gz
            },
            set: function (t) {
                this._8y._gz = t
            }
        },
        scale: {
            get: function () {
                return this._8y[Mb]
            },
            set: function (t) {
                return this._8y._scale = t
            }
        },
        tx: {
            get: function () {
                return this._8y._tx
            }
        },
        ty: {
            get: function () {
                return this._8y._ty
            }
        },
        styles: {
            get: function () {
                return this._jh
            },
            set: function (t) {
                this._jh = t
            }
        },
        selectionModel: {
            get: function () {
                return this[TT][Ov]
            }
        },
        graphModel: {
            get: function () {
                return this[TT]
            },
            set: function (t) {
                if (this[TT] == t) return !1;
                var i = this[TT],
                n = new gH(this, Z_, i, t);
                return this._1s(n) === !1 ? !1 : (null != i && (i[oP][rv](this._$v, this), i[Tv][rv](this._1i, this), i[Mv][rv](this._$b, this), i[jv][rv](this._17, this), i[Iv][rv](this._$m, this), i[fP][rv](this._$q, this)), this._kjModel = t, this._kjModel && (this[TT][oP][sv](this._$v, this), this[TT][Tv][sv](this._1i, this), this[TT][Mv].addListener(this._$b, this), this[TT][jv].addListener(this._17, this), this[TT].childIndexChangeDispatcher[sv](this._$m, this), this[TT][fP].addListener(this._$q, this)), this._8y && this._8y._ku(), void this._41(n))
            }
        },
        count: {
            get: function () {
                return this[TT][qr]
            }
        },
        width: {
            get: function () {
                return this.html.clientWidth
            }
        },
        height: {
            get: function () {
                return this[GL][W_]
            }
        },
        viewportBounds: {
            get: function () {
                return this._8y._viewportBounds
            }
        },
        bounds: {
            get: function () {
                return this._8y._4o()
            }
        },
        canvasPanel: {
            get: function () {
                return this._8y[Tw]
            }
        },
        html: {
            get: function () {
                return this._8y._my9.parentNode
            }
        },
        navigationType: {
            get: function () {
                return this._8y._80
            },
            set: function (t) {
                this._8y._3v(t)
            }
        },
        _3f: {
            get: function () {
                return this._kjModel._3f
            }
        },
        currentSubNetwork: {
            get: function () {
                return this[TT][vO]
            },
            set: function (t) {
                this[TT][vO] = t
            }
        },
        limitedBounds: {
            get: function () {
                return this._limitedBounds
            },
            set: function (t) {
                return hH[Su](t, this[uP]) ? !1 : t ? void (this[uP] = new hH(t)) : void (this[uP] = null)
            }
        },
        ratio: {
            get: function () {
                return this._8y[Ua]
            }
        },
        delayedRendering: {
            get: function () {
                return this._4m === n ? Jz[cP] : this._4m
            },
            set: function (t) {
                t != this[hP] && (this._4m = t, this[_P](!1, !0))
            }
        },
        fullRefresh: {
            get: function () {
                return this._8y[dP]
            },
            set: function (t) {
                this._8y.fullRefresh = t
            }
        }
    }),
    Jz[cP] = !0,
    Jz[lP] = 60,
    Jz[vP] = 60,
    sr[sh] = {
        _mxd: function () {
            return this._59() ? void 0 : w(this, sr, iA, arguments)
        },
        initialize: function () {
            w(this, sr, eM),
            this[fA]()
        },
        _myx: function () {
            this._m6 = new KY,
            this.shape = new $W(this._m6),
            this[_A][Ff] = !1,
            this[dC](this[_A], 0),
            this[Fm] = this[_A]
        },
        checkBody: function () {
            return this._59() ? (this._2b = !0, this[_A] ? (this[_A][kw] = !0, this[Fm] = this.shape) : (this._myx(), CW[uC](this)), void (this[tx] && (this[tx][kw] = !1))) : (this[tx] ? (this[tx][kw] = !0, this[Fm] = this[tx]) : this[BR](), void (this[_A] && (this.shape[kw] = !1)))
        },
        _59: function () {
            return this[zf]._ib() && this.$data.expanded
        },
        _m6: null,
        _2b: !0,
        _5i: function () {
            this._1g = !0,
            this._2b = !0
        },
        doValidate: function () {
            if (this._2b && this._59()) {
                if (this._2b = !1, this[_A].invalidateData(), this[zf][jO]) {
                    this[_A][Mo] = this[zf][jO];
                    var t = this._2a();
                    return this[_A][zO] = t.x + t.width / 2,
                    this[_A].offsetY = t.y + t[za] / 2,
                    this[_A].size = {
                        width: t[Ga],
                        height: t[za]
                    },
                    ys[sh][sM][Vr](this)
                }
                this[_A][zO] = 0,
                this[_A][HO] = 0;
                var i = this._8v(this[zf][SO]);
                this._m6.clear(),
                i instanceof hH ? Fe(this._m6, i.x, i.y, i.width, i[za], i.rx, i.ry) : i instanceof nn ? Ge(this._m6, i) : i instanceof en && ze(this._m6, i),
                this._m6._6k = !0,
                this.shape[dT]()
            }
            return ys.prototype[sM][Vr](this)
        },
        _7s: function (t, i, n, e, s) {
            switch (Mh != typeof e && (e = -i / 2), Mh != typeof s && (s = -n / 2), t) {
                case lY.GROUP_TYPE_CIRCLE:
                    var r = Math.max(i, n) / 2;
                    return new nn(e + i / 2, s + n / 2, r);
                case lY[bP]:
                    return new en(e + i / 2, s + n / 2, i, n);
                default:
                    return new hH(e, s, i, n)
            }
        },
        _2a: function () {
            return this._8v(null)
        },
        _8v: function (t) {
            var i, e, s = this.data,
            r = s[Wo],
            h = s[MO],
            a = Jz[lP],
            o = Jz[vP];
            if (h && (Mh == typeof h[Ga] && (a = h[Ga]), Mh == typeof h[za] && (o = h[za]), i = h.x, e = h.y), !s[Ur]()) return this._7s(t, a, o, i, e);
            var f, u = this[zf]._fk._j7; (t == lY[yP] || t == lY.GROUP_TYPE_ELLIPSE) && (f = []);
            for (var c, _, d, l, v = new hH,
            b = 0,
            y = u[qr]; y > b; b++) {
                var g = u[b];
                if (this.graph.isVisible(g)) {
                    var m = this[Qc].getUI(g);
                    m && (c = m.$x + m._fn.x, _ = m.$y + m._fn.y, d = m._fn[Ga], l = m._fn[za], v[hT](c, _, d, l), f && (f[th]({
                        x: c,
                        y: _
                    }), f[th]({
                        x: c + d,
                        y: _
                    }), f.push({
                        x: c + d,
                        y: _ + l
                    }), f[th]({
                        x: c,
                        y: _ + l
                    })))
                }
            }
            if (v[Hf]()) return this._7s(t, a, o, i, e);
            var x = this[zf][ZT];
            x ? x.invalidateFlag && (x[mO] = !1, i === n && (x.x = v.cx), e === n && (x.y = v.cy)) : x = this[zf].$location = {
                x: v.cx,
                y: v.cy
            },
            r && v[kf](r),
            Mh == typeof i && i + x.x < v.x && (v[Ga] += v.x - (i + x.x), v.x = i + x.x, f && f[th]({
                x: v.x,
                y: v.cy
            })),
            Mh == typeof e && e + x.y < v.y && (v[za] += v.y - (v.y, e + x.y), v.y = e + x.y, f && f[th]({
                x: v.cx,
                y: v.y
            }));
            var E, i = x.x,
            e = x.y;
            if (t == lY[yP]) {
                E = sn(f),
                E.cx -= i,
                E.cy -= e;
                var p = Math.max(a, o) / 2;
                return E.r < p && (E.cx += p - E.r, E.cy += p - E.r, E.r = p),
                E
            }
            return t == lY[bP] ? (E = rn(f, v), E.cx -= i, E.cy -= e, E[Ga] < a && (E.cx += (a - E[Ga]) / 2, E.width = a), E[za] < o && (E.cy += (o - E[za]) / 2, E.height = o), E) : (E = v, v[Ga] < a && (v[Ga] = a), v.height < o && (v[za] = o), v[Mm](-i, -e), E)
        },
        _10: function (t, i, n) {
            if (!this._59()) return w(this, sr, gP, arguments);
            var e = this[sC][oC](this, t, i, n);
            return e = MW[oC](this, t, i, n) || e,
            e = AW[oC](this, t, i, n) || e,
            CW.onBindingPropertyChange(this, t, i, n) || e
        }
    },
    p(sr, ys),
    dY.GroupUI = sr;
    var HW = {
        draw: function () { }
    };
    Jz[L_] = null,
    Jz.NAVIGATION_IMAGE_TOP = null;
    var YW = {
        position: Fk,
        "text-align": e_
    },
    UW = {
        padding: mP,
        transition: xP
    },
    WW = {
        position: S_,
        display: EP
    };
    gi(pP, "opacity:0.7;vertical-align:middle;"),
    gi(".Q-Graph-Nav img:hover,img.hover", kP),
    Zz || (gi(wP, TP + LH(OP) + MP), gi(SP, jP + LH(OP) + IP)),
    ar[sh] = {
        _mxk: function (t, i) {
            return t._hm == i ? !1 : (t._hm = i, void (t[_a].visibility = i ? "visible" : O_))
        },
        _3q: function (t, i) {
            var n = i / 2 - this[R_][AP][W_] / 2 + Wa;
            this[R_][AP][_a].top = n,
            this._right[AP][_a].top = n,
            this[k_].style.width = t + Wa,
            this[k_][_a].height = i + Wa
        },
        _n0d: function (t, i, n, e) {
            this[CP](this._top, t),
            this[CP](this[R_], i),
            this[CP](this._myottom, n),
            this[CP](this[P_], e)
        },
        _hj: function () {
            var t = this[k_][Lm];
            t && t.removeChild(this[k_])
        },
        _jl: function () {
            var t = this[Mu]._kj;
            if (t) {
                var i = t[xo];
                if (i[Hf]()) return void this._n0d(!1, !1, !1, !1);
                var n = t[wT],
                e = n.y > i.y + 1,
                s = n.x > i.x + 1,
                r = n[Kh] < i.bottom - 1,
                h = n[Jh] < i[Jh] - 1;
                this[RP](e, s, r, h)
            }
        }
    };
    var qW = 10;
    gi(LP, PP),
    gi(DP, "background-color: #7E7E7E;" + LH(OP) + ": background-color 0.2s linear;"),
    gi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
    gi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
    gi(".Q-Graph-ScrollBar--V.Both", NP),
    gi(".Q-Graph-ScrollBar--H.Both", $P),
    Zz || (gi(BP, TP + LH(OP) + FP), gi(".Q-Graph:hover .Q-Graph-ScrollPane", jP + LH(OP) + ":opacity 0.3s linear;")),
    or[sh] = {
        _hj: function () {
            this[GP]._hj(),
            this[zP]._hj(),
            delete this._verticalDragSupport,
            delete this[zP],
            this._m7.parentNode && this._m7[Lm][Pm](this._m7)
        },
        _m7: null,
        _my3: null,
        _94: null,
        init: function (t) {
            var n = i[Xa](y_);
            n[Eh] = HP,
            vi(n, {
                width: I_,
                height: I_,
                position: S_
            });
            var e = i.createElement(y_);
            e[Eh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[Xa](y_);
            s[Eh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
            n[Iu](e),
            n[Iu](s),
            t[Iu](n),
            this._m7 = n,
            this._94 = s,
            this[YP] = e,
            s.isH = !0;
            var r = this,
            h = {
                onstart: function (t, i) {
                    i[ph].add(Y_)
                },
                onrelease: function (t, i) {
                    i[ph][Oh](Y_)
                },
                ondrag: function (t, i) {
                    var n = r[Mu]._kj;
                    if (n) {
                        var e = i.isH,
                        s = e ? t.dx : t.dy;
                        if (s && i.scale) {
                            var h = n[so] / i[so];
                            e ? n[eo](-h * s, 0) : n.translate(0, -h * s),
                            dY[VR](t)
                        }
                    }
                },
                enddrag: function (t, i) {
                    var n = r[Mu]._kj;
                    if (n && n[UP]) {
                        var e = i.isH,
                        s = e ? t.vx : t.vy;
                        if (Math.abs(s) > .1) {
                            var h = n[so] / i[so];
                            s *= h,
                            e ? n._9o(-s, 0) : n._9o(0, -s)
                        }
                    }
                }
            };
            this._verticalDragSupport = new xi(e, h),
            this._horizontalDragSupport = new xi(s, h)
        },
        _3q: function () {
            var t = this[Mu]._kj;
            t && t.callLater(this._jl.bind(this))
        },
        _jl: function () {
            var t = this._myaseCanvas._kj;
            if (t) {
                var i = t[xo];
                if (i[Hf]()) return this._50(!1),
                void this._52(!1);
                var n = t[wT],
                e = t[Ga],
                s = t[za],
                r = t[so],
                h = 1 / r,
                a = n.x > i.x + h || n[Jh] < i[Jh] - h,
                o = n.y > i.y + h || n.bottom < i[Kh] - h,
                f = a && o;
                f ? (L(this[YP], WP), L(this._94, WP)) : (P(this[YP], WP), P(this._94, WP)),
                this._50(a, n, i, f ? e - qW : e),
                this._52(o, n, i, f ? s - qW : s)
            }
        },
        _50: function (t, i, n, e) {
            if (!t) return this._94[_a][Sk] = M_,
            void (this._94[so] = 0);
            var s = Math.min(i.x, n.x),
            r = Math.max(i[Jh], n.right),
            h = r - s,
            a = e / h;
            this._94[so] = a,
            this._94.style.left = parseInt((i.x - s) * a) + Wa,
            this._94.style[Jh] = parseInt((r - i.right) * a) + Wa,
            this._94.style[Sk] = ""
        },
        _52: function (t, i, n, e) {
            if (!t) return this[YP][_a][Sk] = M_,
            void (this[YP].scale = 0);
            var s = Math.min(i.y, n.y),
            r = Math.max(i[Kh], n.bottom),
            h = r - s,
            a = e / h;
            this[YP][so] = a,
            this[YP].style.top = parseInt((i.y - s) * a) + Wa,
            this._my3.style[Kh] = parseInt((r - i[Kh]) * a) + Wa,
            this._my3.style[Sk] = ""
        }
    },
    fr[sh] = {
        shape: null,
        initialize: function () {
            w(this, fr, eM),
            this[BR](),
            PW.initBindingProperties(this)
        },
        _my1: function () {
            this[tx] = new FW(this[zf][uO]),
            this[dC](this[tx], 0),
            this.body = this.image
        },
        invalidateShape: function () {
            this[tx][dT](),
            this[fT]()
        },
        _10: function (t, i, n) {
            var e = this[sC].onBindingPropertyChange(this, t, i, n);
            return e = MW[oC](this, t, i, n) || e,
            PW[oC](this, t, i, n) || e
        },
        doValidate: function () {
            this[Fm] && (this[tx][Mo] = this.data[uO], this.body[gf] = null != this._2p, this.body[rO] = this._2p);
            var t = this[zf][ZT],
            i = 0,
            n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[EC] = !0),
            this.$x = i,
            this.$y = n,
            NW[sh][sM].call(this) || e
        }
    },
    p(fr, NW),
    K(fr[sh], {
        path: {
            get: function () {
                return this[Mo].path
            }
        },
        length: {
            get: function () {
                return this[Mo][qr]
            }
        }
    }),
    fr[sh][Ya] = function (t, i, n) {
        var e = this._hw(t, i),
        s = this[Mo],
        r = wn(s[uO], e.x, e.y, n);
        r && (s.pathSegments = r)
    },
    ur[sh] = {
        _m9: function () {
            this._j9[_a].visibility = kw
        },
        _k1: function () {
            this._j9[_a][Bm] = O_
        },
        clear: function () {
            this[V_].clear(),
            this[Kk]()
        },
        contains: function (t) {
            return t instanceof Object && t.id && (t = t.id),
            this[V_][nl](t)
        },
        _57: function (t) {
            bW[Oc](this._j9, E_, t ? xw + t.join($h) + ")" : "")
        },
        addDrawable: function (t, i) {
            if (i) {
                var n = {
                    id: ++Pz,
                    drawable: t,
                    scope: i
                };
                return this[V_].add(n),
                n
            }
            return t.id || (t.id = ++Pz),
            this[V_].add(t),
            t
        },
        removeDrawable: function (t) {
            return t.id ? void this[V_][Oh](t) : this[V_].removeById(t)
        },
        _n0c: null,
        invalidate: function () {
            this[Kk]()
        },
        _mxu: function () {
            this[Mu]._6k || this._jv()
        },
        _ii: function (t, i) {
            this._j9[Ja](t, i)
        },
        _jv: function () {
            var t = this._myaseCanvas._scale,
            i = this.g;
            i._ks(),
            i.save(),
            this._myaseCanvas._9y(i);
            for (var n = this[V_]._j7, e = 0, s = n.length; s > e; e++) i.save(),
            i[Gx](),
            this._gp(i, n[e], t),
            i[co]();
            i[co]()
        },
        _gp: function (t, i, n) {
            return i instanceof Function ? void i(t, n) : void (i[qP] instanceof Function && i[ev] && i[qP].call(i[ev], t, n))
        }
    },
    Jz.ZOOM_ANIMATE = !0;
    var VW = function (t) {
        this._kj = t
    };
    Jz[VP] = 600,
    Jz[XP] = fY[ZP],
    VW[sh] = {
        _kj: null,
        _e5: null,
        _ga: function (t, i, n) {
            this._la();
            var e = Math.abs(t / 2),
            s = Math.abs(i / 2),
            r = Math.min(Jz[VP], .6 * Math.max(e, s) * 1e3);
            if (10 > r) return !1;
            var h = function (t) {
                return -(2 * Math.pow(t, 1.5) - 3 * t)
            },
            a = t * r / 3,
            o = i * r / 3;
            this._kn(this._kj.tx + a, this._kj.ty + o, 0, {
                duration: r,
                animationType: h
            },
            n)
        },
        _7e: function (t, i, n, e, s) {
            this._e5 && this._e5._la(),
            s && (this.__delayRender = !0, this._kj[_P](!0)),
            this._4t(),
            this._e5 = new cY(t, this, i, n),
            this._e5._6g = this._6g.bind(this),
            this._e5._kr(e)
        },
        _4t: function () {
            this._kj[KP]()
        },
        _6g: function () {
            this.__delayRender && (this._kj[_P](!1), delete this[JP]),
            this._kj.onAnimationEnd()
        },
        _dk: function () {
            return this._e5 && this._e5._dk()
        },
        _la: function () {
            this._e5 && this._e5._la()
        },
        _ij: function (t) {
            var i = this[QP] + (this[tD] - this[QP]) * t,
            n = this[iD] + (this._toTY - this[iD]) * t,
            e = this[nD] + (this[eD] - this[nD]) * t;
            this._kj[Rw](i, n, e, this.toInt)
        },
        _kn: function (t, i, n, e, s) {
            this._la();
            var r = this._kj,
            h = r[so];
            if (0 >= n && (n = h), t != r.tx || i != r.ty || n != h) {
                var a, o, f;
                e instanceof Object && (a = e[sD], o = e[rD], f = e[hD]);
                var u = r.tx,
                c = r.ty;
                if (!a) if (n != h) {
                    var _ = n > h ? n / h : h / n;
                    _ = Math.log(_) / Math.log(1.3),
                    a = 60 * _
                } else {
                    var d = eH(t, i, u, c);
                    a = d / 2
                }
                o = o || Jz[VP],
                f = f || Jz.ANIMATION_TYPE,
                a = Math.min(o, a),
                this[QP] = u,
                this[iD] = c,
                this[nD] = h,
                this[tD] = t,
                this[aD] = i,
                this[eD] = n,
                this._7e(this._ij, a, f, s, n != h)
            }
        }
    },
    Jz.INTERACTION_HANDLER_SIZE_TOUCH = 8,
    Jz.INTERACTION_HANDLER_SIZE_DESKTOP = 4,
    Jz[oD] = 30,
    Jz.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var XW = Math.PI / 4;
    dr[sh] = {
        onElementRemoved: function (t, i) {
            this[fD] && (t == this[fD] || B(t) && x(t, this[fD])) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this[jy](t)
        },
        destroy: function () {
            delete this[fD],
            this.removeDrawable()
        },
        invalidate: function () {
            this[id][Zk]()
        },
        removeDrawable: function () {
            this[uD] && (this.topCanvas.removeDrawable(this._ffId), delete this[uD], this[Zk]())
        },
        addDrawable: function () {
            this._ffId || (this[uD] = this[id][cD](this[_D], this).id, this[Zk]())
        },
        doDraw: function () { },
        escapable: !0,
        onkeydown: function (t, i) {
            this[dD] && 27 == t[Wp] && (z(t), this[jy](i))
        }
    },
    dY[lD] = dr,
    lr[sh] = {
        defaultCursor: ed,
        getInteractionInstances: function (t) {
            if (!this.interactions) return null;
            for (var i = [], n = 0, e = this[vD][qr]; e > n; n++) {
                var s = this.interactions[n];
                s instanceof Function ? i[th](new s(t)) : s instanceof Object && i.push(s)
            }
            return i
        }
    },
    vr[sh] = {
        _eb: null,
        _ix: null,
        destroy: function () {
            w(this, vr, jy, arguments),
            delete this._ix,
            delete this._9r,
            delete this._eb
        },
        doDraw: function (t) {
            var i = this[Ma];
            i && (i[au](function (i) {
                this.drawPoint(t, i)
            },
            this), this.isClosePath && t[Ju](), this.styleDraw(t))
        },
        styleDraw: function (t) {
            var i = br(this[Qc].interactionProperties, this[bD](this[Qc]));
            i[So] && (t[So] = i[So], i[Ax] && (t[Ax] = i[Ax]), i[$_] && (t[$_] = i[$_]), i[Wf] && (t[Wf] = i[Wf], t[Kf] = i[Kf] || 0), t.strokeStyle = i[B_], t[To]()),
            i.fillStyle && (t[Nx] = i[Nx], t[Oo]())
        },
        drawPoint: function (t, i, n) {
            if (n) return void t[Xu](i.x, i.y);
            if (dY[mc](i)) {
                var e = i[0],
                s = i[1];
                t.quadraticCurveTo(e.x, e.y, s.x, s.y)
            } else t.lineTo(i.x, i.y)
        },
        setCurrentPoint: function (t) {
            this.currentPoint = t
        },
        addPoint: function (t) {
            this._ix || (this._ix = [], this[cD]()),
            this._ix[th](t),
            this.invalidate()
        }
    },
    p(vr, dr),
    K(vr[sh], {
        currentPoint: {
            get: function () {
                return this._9r
            },
            set: function (t) {
                this._9r = t,
                this[Zk]()
            }
        },
        prevPoint: {
            get: function () {
                return this._ix && this._ix[qr] ? this._ix[this._ix[qr] - 1] : null
            }
        },
        points: {
            get: function () {
                return this._9r && this._ix && this._ix[qr] ? this._ix[Jr](this._9r) : void 0
            }
        }
    }),
    dY[yD] = vr,
    yr[sh] = {
        destroy: function () {
            w(this, yr, jy, arguments),
            delete this[gD],
            this._ki && (clearTimeout(this._ki), delete this._ki)
        },
        doDraw: function (t, i) {
            return this._ix ? this._ix.length <= 1 ? xr[sh][_D][Vr](this, t, i) : void w(this, yr, _D, arguments) : void 0
        },
        ondblclick: function (t, i) {
            this[jy](i)
        },
        finish: function (t, i, n) {
            var e;
            this._ix && this._ix.length >= 2 && (this._ix[lp](), e = new Qz, l(this._ix,
            function (t) {
                if (dY[mc](t)) {
                    var i = t[0],
                    n = t[1];
                    e.add(new XY(lY[mD], [i.x, i.y, n.x, n.y]))
                } else e.add(new XY(lY[xx], [t.x, t.y]))
            },
            this)),
            i[xD](this[gD], n, t, e),
            this.destroy(i)
        },
        _myi: function (t, i) {
            return t instanceof xW && i[cL](t)
        },
        _ek: function (t, i) {
            return t instanceof xW && i[dL](t, this[gD])
        },
        _n03: function (t, i) {
            var n = i[Ey](t);
            return n && n[TR] ? n[TR][e_] : t[KT]
        },
        onstart: function (t, i) {
            if (this[gD]) {
                var n = t.getData();
                return this._ek(n, i) ? void this.finish(t, i, n) : void this[Ya](this[ED](t))
            }
        },
        startdrag: function (t, i) {
            if (!this[gD] && !t.responded) {
                var n = t[yy]();
                n && this[pD](n, i) && (t.responded = !0, this.start = n, this[Ya](this._n03(n, i)))
            }
        },
        _dh: function (t) {
            this._ki && (clearTimeout(this._ki), delete this._ki),
            this._ki = setTimeout(function (t) {
                if (delete this._ki, this.start && this[kD]) {
                    var i = t.x - this.currentPoint.x,
                    n = t.y - this[kD].y;
                    Math.sqrt(i * i + n * n) * this[Qc][so] <= 2 && this[Ya](this.currentPoint)
                }
            } [mh](this, this[ED](t)), Jz[ib])
        },
        ondrag: function (t, i) {
            this[wD](t, i)
        },
        enddrag: function (t, i) {
            if (this.start) {
                var n = t.getData();
                this._ek(n, i) && this[TD](t, i, n)
            }
        },
        onrelease: function (t, i) {
            HH(t) && this[jy](i)
        },
        onmousemove: function (t, i) {
            this[gD] && (this[kD] = this[ED](t), HH(t) && this._dh(t, i))
        },
        toLogicalPoint: function (t) {
            return this[Qc][Cw](t)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Qc][vL](OW[Cj]),
                strokeStyle: this[Qc].getDefaultStyle(OW[Lj]),
                lineDash: this[Qc][vL](OW[Fj]),
                lineDashOffset: this.graph[vL](OW[zj]),
                lineCap: this.graph[vL](OW.LINE_CAP),
                lineJoin: this[Qc].getDefaultStyle(OW[tS])
            }
        }
    },
    p(yr, vr),
    dY[OD] = yr,
    gr[sh] = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Qc][vL](OW[IM]),
                strokeStyle: this[Qc].getDefaultStyle(OW[CM]),
                fillStyle: this[Qc][vL](OW[DM])
            }
        },
        finish: function (t, i) {
            if (this._ix && this._ix.length) {
                var n = this._ix,
                e = 0,
                s = 0,
                r = 0;
                n[au](function (t) {
                    return dY.isArray(t) ? void t.forEach(function () {
                        e += t.x,
                        s += t.y,
                        r++
                    }) : (e += t.x, s += t.y, void r++)
                }),
                e /= r,
                s /= r;
                var h = [];
                n.forEach(function (t, i) {
                    if (0 == i) return void h.push(new XY(lY.SEGMENT_MOVE_TO, [t.x - e, t.y - s]));
                    if (dY.isArray(t)) {
                        var n = t[0],
                        r = t[1];
                        h[th](new XY(lY[mD], [n.x - e, n.y - s, r.x - e, r.y - s]))
                    } else h[th](new XY(lY[xx], [t.x - e, t.y - s]))
                }),
                this.createElement(t, h, e, s),
                this[jy](i)
            }
        },
        startdrag: function (t) {
            t[MD] = !0
        },
        createElement: function (t, i, n, e) {
            return this.graph[SD](t, i, n, e)
        },
        onstart: function (t, i) {
            var n = i.toLogical(t);
            this._eb = n,
            this[Ya](n)
        },
        onmousemove: function (t, i) {
            this._eb && (this[kD] = i[Cw](t))
        },
        ondblclick: function (t, i) {
            if (this._eb) {
                if (this._ix.length < 3) return void this[jy](i);
                delete this._ix[this._ix[qr] - 1],
                this[TD](t, i)
            }
        },
        isClosePath: !0
    },
    p(gr, vr),
    dY.CreateShapeInteraction = gr,
    mr[sh] = {
        isClosePath: !1,
        createElement: function (t, i, n, e) {
            return this.graph[jD](t, i, n, e)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: GW[OW[IM]],
                strokeStyle: GW[OW.SHAPE_STROKE_STYLE],
                lineDash: this[Qc][vL](OW[hA]),
                lineDashOffset: this[Qc][vL](OW[iC]),
                lineCap: this.graph[vL](OW[aA]),
                lineJoin: this.graph.getDefaultStyle(OW[tS])
            }
        }
    },
    p(mr, gr),
    dY.CreateLineInteraction = mr,
    xr[sh] = {
        destroy: function (t) {
            w(this, xr, jy, arguments),
            t[aP] = "",
            this[gD] = null
        },
        doDraw: function (t) {
            if (this.start && this[kD]) {
                var i, n;
                this.graph[QL] && (i = this.graph[QL][uT], n = this[Qc].interactionProperties[c_]),
                i = i || this[Qc][JL] || dY[ID],
                n = n || this.graph[c_];
                var e = i.drawReferenceLine || dY[ID].drawReferenceLine,
                s = this[Qc].getUI(this.start);
                s && s[TR] && (s = s[TR].center, e(t, s, this[kD], n), this.styleDraw(t))
            }
        },
        canLinkFrom: function (t, i) {
            return t instanceof xW && i[cL](t)
        },
        canLinkTo: function (t, i) {
            return t instanceof xW && i[dL](t, this[gD])
        },
        startdrag: function (t, i) {
            var n = t[yy]();
            this.canLinkFrom(n, i) && (t[MD] = !0, this[gD] = n, i[aP] = Wy, this[cD]())
        },
        ondrag: function (t, i) {
            this.start && (dY[VR](t), this.currentPoint = i[Cw](t), this.invalidate())
        },
        enddrag: function (t, i) {
            if (this.start) {
                this[Zk]();
                var n = t[yy]();
                this.canLinkTo(n, i) && i[xD](this.start, n, t),
                this[jy](i)
            }
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Qc][vL](OW[Cj]),
                strokeStyle: this[Qc][vL](OW.EDGE_COLOR),
                lineDash: this[Qc][vL](OW.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(OW.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph[vL](OW[aA]),
                lineJoin: this[Qc][vL](OW[tS])
            }
        }
    },
    p(xr, vr),
    dY.CreateSimpleEdgeInteraction = xr,
    Jz.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1,
    Or.prototype = {
        html: null,
        createHTML: function () {
            var t = i[Xa](AD);
            t.className = CD,
            t[_a][ux] = Fk,
            t[_a][zm] = e_,
            t[_a][wg] = RD,
            t[_a].padding = LD,
            t.style[PD] = "0px 0px 10px rgba(40, 85, 184, 0.75)",
            t[_a][Sk] = M_,
            t.style[DD] = O_;
            var n = this;
            return t[ND] = function (t) {
                n[$D](t)
            },
            t[BD] = function (t) {
                return 27 == t[Wp] ? void n.cancelEdit() : void 0
            },
            t[FD] = function (i) {
                if (13 == i[Wp] || 10 == i.keyCode) {
                    if (i[Ah](), i.altKey || i[Oa] || i.shiftKey) return wr(t, fo),
                    void n[$D](i);
                    n[GD]()
                }
            },
            i[Fm][Iu](t),
            t
        },
        setText: function (t, i) {
            this[GL][bh] = t || "",
            i && (this.html[_a].fontSize = i),
            Tr(this[GL]),
            this.onSizeChange(this[GL])
        },
        onSizeChange: function (t) {
            var i = (t.offsetWidth, t[hd], kr(t));
            return t[_a][Ga] = i.width + 30 + Wa,
            t.style[za] = i.height + 10 + Wa,
            i
        },
        onValueChange: function (t) {
            var i = t.target;
            this.onSizeChange(i),
            i[_a].left = i.x - i[rd] / 2 + Wa
        },
        onClickOnWindow: function (t) {
            t[xc] != this[GL] && (Jz[zD] ? this[GD]() : this[HD]())
        },
        startEdit: function (i, n, e, s, r) {
            this[GL] || (this[GL] = this[YD]()),
            this.stopEditWhenClickOnWindow || (this[UD] = function (t) {
                this[WD](t)
            } [mh](this)),
            t.addEventListener(Bb, this[UD], !0),
            this.callback = r,
            this[GL].x = i,
            this[GL].y = n,
            this[GL].style[Sk] = EP,
            pr(this[GL], i, n),
            this.setText(e, s || 10),
            pr(this[GL], i, n)
        },
        isEditing: function () {
            return M_ != this[GL][_a][Sk]
        },
        cancelEdit: function () {
            this[GD](!0)
        },
        stopEdit: function (i) {
            if (this[qD]()) {
                t[Uv](Bb, this[UD]);
                var n = this.html.value;
                if (!i && this[pc] && this[pc](n) === !1) return !1;
                this[GL].style[Sk] = M_,
                this[GL].value = null,
                this[pc] = null
            }
        },
        destroy: function () {
            this.html && i[Fm][Pm](this[GL])
        }
    },
    dY.LabelEditor = Or;
    var ZW = function (t) {
        this[Qc] = t
    };
    ZW.prototype = {
        destroy: function (t) {
            t[VD] && (t[VD].destroy(), delete t[VD])
        },
        ondblclick: function (t, i) {
            var n = t.getData();
            if (n) {
                if (n[XD] !== !1) {
                    if (i[CR] && i[ZD](n)) {
                        var e = i[o_](t);
                        if (e instanceof BW && e[CR] !== !1) {
                            var s = i[VD];
                            s || (i[VD] = s = new Or);
                            var r = e[Eo]();
                            return r = i[aT](r.x + r[Ga] / 2, r.y + r[za] / 2),
                            r = Er(r.x, r.y, i[GL]),
                            void i[KD](n, e, s, r)
                        }
                    }
                    var h = n instanceof kW,
                    a = n instanceof mW && n[JD]();
                    return n._46 && (Ei(t) || !h && !a) ? void (i.currentSubNetwork = n) : h ? (n[cT] = !n.expanded, void this[Qc][hL](new Pr(this.graph, Pr.GROUP_EXPANDED, t, n))) : void (a && this[Qc][QD](n) && this[Qc][hL](new Pr(this.graph, Pr[tN], t, n)))
                }
            } else {
                if (i.currentSubNetwork) return void i[iN]();
                if (i[nN]) {
                    var o = i[eN] || 1;
                    Math.abs(i[so] - o) < 1e-4 ? i[OL]() : i[TL](o)
                }
            }
        }
    };
    var KW = function (t) {
        this.graph = t
    };
    KW[sh] = {
        onkeydown: function (t, i) {
            if (i[CR]) {
                var n = t.keyCode;
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t),
                void F(t);
                if (Ei(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    F(t)
                }
            }
        }
    },
    dY[sN] = KW;
    var JW = function (t) {
        this[Qc] = t
    };
    JW[sh] = {
        onkeydown: function (i, n) {
            if (i[Ta] && 83 == i[Wp]) {
                var e = n[rN](n[so], n.viewportBounds),
                s = t[_u](),
                r = s.document;
                r[hN] = aN + e[Ga] + oN + e.height;
                var h = r[Xa](m_);
                h.src = e[Mo],
                r[Fm][Iu](h),
                F(i)
            }
        }
    };
    var QW = function (t) {
        this[Qc] = t
    };
    QW[sh] = {
        destroy: function () {
            delete this[fN],
            delete this[uN]
        },
        _2c: function (t) {
            var i = new Qz;
            return t[X_].forEach(function (n) {
                t[DL](n) && t[K_](n) && i.add(n)
            },
            this),
            i
        },
        onstart: function (t, i) {
            this[uN] && this[jy](i)
        },
        startdrag: function (t, i) {
            if (!(t[MD] || t.touches && 1 != t[Wh][qr])) {
                var n = t[yy]();
                if (!n || !i.isSelected(n) || !i[DL](n)) return void this.destroy(i);
                t.responded = !0,
                this[uN] = n,
                this.draggingElements = this._2c(i);
                var e = new Pr(i, Pr[cN], t, this[uN], this[fN][Id]);
                return i.beforeInteractionEvent(e) === !1 ? void this[jy](i) : void i[hL](e)
            }
        },
        ondrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (t[Wh] && 1 != t[Wh].length) return void this[vy](t, i);
                z(t);
                var n = t.dx,
                e = t.dy,
                s = i[so];
                n /= s,
                e /= s;
                var r = new Pr(i, Pr[_N], t, this[uN], this.draggingElements.datas);
                i[dN](this[fN][Id], n, e),
                i[hL](r)
            }
        },
        enddrag: function (t, i) {
            if (this[uN]) {
                if (this.draggingElements && this[fN].length) {
                    if (t[nL]) {
                        var n, e = i[Cw](t),
                        s = e.x,
                        r = e.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t.data;
                            if (!this[fN].contains(i) && t.uiBounds[$f](s - t.x, r - t.y) && t[o_](s, r, 1)) {
                                if (i instanceof dY[KL]) {
                                    if (!i.enableSubNetwork) return;
                                    for (var e = this[fN].length; e-- > 0; ) {
                                        var h = this.draggingElements.get(e);
                                        if (h instanceof dY.Node && h[lN](i)) return
                                    }
                                    return n = i,
                                    !1
                                }
                                return (i[b_] || i._ib() && i[cT]) && (n = i),
                                !1
                            }
                        },
                        this),
                        n && this.draggingElements[au](function (t) {
                            for (var i = t[Cu]; i; ) {
                                if (this[fN][a_](i)) return;
                                i = i[Cu]
                            }
                            t[Cu] = n
                        },
                        this)
                    }
                    var h = new Pr(i, Pr.ELEMENT_MOVE_END, t, this[uN], this[fN][Id]);
                    i[hL](h)
                }
                this.destroy(i)
            }
        },
        onpinch: function (t, i) {
            this.currentDraggingElement && this.enddrag(t, i)
        },
        step: 1,
        onkeydown: function (t, i) {
            if (Ei(t)) {
                var n, e;
                if (37 == t.keyCode ? n = -1 : 39 == t[Wp] ? n = 1 : 38 == t[Wp] ? e = -1 : 40 == t[Wp] && (e = 1), n || e) {
                    var s = this._2c(i)[Id];
                    if (0 != s.length) {
                        F(t),
                        n = n || 0,
                        e = e || 0;
                        var r = this[vN] / i.scale,
                        h = new Pr(i, Pr.ELEMENT_MOVE_END, t, null, s);
                        i[dN](s, n * r, e * r),
                        i[hL](h)
                    }
                }
            }
        }
    };
    var tq = function (t) {
        this[Qc] = t
    };
    tq[sh] = {
        onkeydown: function (t, i) {
            Ei(t) || (37 == t[Wp] ? (this._62(i, 1, 0), F(t)) : 39 == t.keyCode ? (this._62(i, -1, 0), F(t)) : 38 == t[Wp] ? (this._62(i, 0, 1), F(t)) : 40 == t.keyCode && (this._62(i, 0, -1), F(t)))
        },
        _62: function (t, i, n) {
            t._9o(i, n)
        },
        onstart: function (t, i) {
            this._kr && this.destroy(i)
        },
        _kr: !1,
        startdrag: function (t, i) {
            if (!t.responded) {
                t.responded = !0,
                this._kr = !0,
                i[aP] = eY;
                var n = new Pr(i, Pr.PAN_START, t);
                i[hL](n)
            }
        },
        ondrag: function (t, i) {
            this._kr && i[eo](t.dx || 0, t.dy || 0)
        },
        enddrag: function (t, i) {
            if (this._kr) {
                if (i.enableInertia !== !1) {
                    var n = t.vx,
                    e = t.vy; (Math.abs(n) > .1 || Math.abs(e) > .1) && i._9o(n, e)
                }
                this[jy](i);
                var s = new Pr(i, Pr[bN], t);
                i[hL](s)
            }
        },
        startpinch: function (t, i) {
            i.pauseRendering(!0)
        },
        onpinch: function (t, i) {
            this._kr = !0;
            var n = t.dScale;
            if (n) {
                var e = i[ZR](t[e_]);
                i.zoomAt(n, e.x, e.y, !1)
            }
        },
        endpinch: function (t, i) {
            i[_P](!1)
        },
        destroy: function (t) {
            this._kr = !1,
            t.cursor = null
        }
    },
    Mr.prototype = {
        _1x: function (t) {
            this[fD] && t[Vo] == this[fD] && this[Qc][mL](function () {
                this._jl()
            },
            this)
        },
        _7: function () {
            this[yN] || (this[yN] = !0, this.graph[gN].addListener(this._1x, this))
        },
        _5: function () {
            this[yN] = !1,
            this[Qc][gN][rv](this._1x, this)
        },
        onElementRemoved: function (t, i) {
            this[fD] && (t == this[fD] || Array[mc](t) && x(t, this.element)) && this[jy](i)
        },
        onClear: function (t) {
            this.element && this[jy](t)
        },
        destroy: function () {
            this[Qc][aP] = null,
            this[fD] && delete this.element[mN],
            this[xN] = !1,
            delete this[fD],
            delete this._9v,
            delete this._9r,
            delete this._mxanEdit,
            this._7f(),
            this._5()
        },
        _7f: function () {
            this[EN] && (this[id].removeDrawable(this[EN]), delete this[EN], this[id][Zk]())
        },
        _myz: function () {
            this[EN] && this[id][a_](this[EN]) || (this[EN] = this[id][cD](this.drawLine, this).id, this[id][Zk]())
        },
        _9v: null,
        _5u: function (t) {
            this._9v = t,
            this[Zk]()
        },
        isEndPointEditable: function (t, i) {
            return this[Qc][pN](t, i)
        },
        drawPoint: function (t, i, n) {
            (!i.isEndPoint || this[pN](this[fD], i[kN])) && (t[Gx](), i[wN] ? t[Au](i.x - this[Ed] / n, i.y - this[Ed] / n, this.handlerSize / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this[Ed] / n, 0, 2 * Math.PI, !1), t[So] = 1 / n, t[Wf] = [], t[B_] = z_, t.fillStyle = "rgba(255, 255, 0, 0.8)", t.stroke(), t[Oo]())
        },
        _ff: function (t, i, n, e) {
            e ? t.moveTo(i, n) : t[Zu](i, n)
        },
        drawLine: function (t, i) {
            if (this._9v && this._9v.length) {
                var n = this._9v;
                t[no]();
                var e = this[fD] instanceof EW;
                e && (t[eo](this[fD].x, this[fD].y), this[fD].rotate && t[Ao](this.element[Ao]));
                var s, r = [];
                t.beginPath();
                var h = n[qr];
                n[au](function (i, n) {
                    if (i[Io] != lY[px]) for (var e = !n || n == h - 1,
                    a = 0,
                    o = i.points; a + 1 < o[qr]; ) {
                        var f = o[a],
                        u = o[a + 1],
                        c = {
                            x: f,
                            y: u,
                            isControlPoint: this._7g(i, a)
                        };
                        e && (c[TN] = !0, c[kN] = 0 == n),
                        r[th](c),
                        this._ff(t, c.x, c.y, null == s),
                        s = c,
                        a += 2
                    }
                },
                this),
                t.lineWidth = 1 / i,
                t[Wf] = [2 / i, 3 / i],
                t[B_] = ON,
                t[To](),
                r[au](function (n, e) {
                    this[MN](t, n, i, e)
                },
                this),
                t.restore()
            }
        },
        invalidate: function () {
            this[id][Zk]()
        },
        _3l: function (t) {
            if (this[fD] != t && (this[fD] && this[jy](), t && this[ZD](t))) {
                var i = this._5y(t, this[Qc]);
                i && (this[fD] = t, t[mN] = !0, this[SN] = !0, this._5u(i), this._7(), this[jN]())
            }
        },
        _jl: function () {
            if (this[EN] && this.element) {
                var t = this._5y(this[fD], this.graph);
                return t ? void this._5u(t) : void this.destroy(this[Qc])
            }
        },
        _5y: function (t, i) {
            if (i[ZD](t)) {
                var n = t.pathSegments || [];
                n instanceof Qz && (n = n[al]());
                var e = i.getUI(t);
                if (e instanceof dY.EdgeUI) {
                    var s = e[t_](i.getUI(t.fromAgent)),
                    r = e.getEndPointBounds(i[Ey](t[Ru])),
                    h = s.center,
                    a = r[e_],
                    o = e[Mc](OW[i_]),
                    f = e[Mc](OW[n_]);
                    o && (h.x += o.x || 0, h.y += o.y || 0),
                    f && (a.x += f.x || 0, a.y += f.y || 0),
                    n[Zr](0, 0, new dY[kx](lY[mx], [h.x, h.y])),
                    n[th](new dY[kx](lY[mx], [a.x, a.y]))
                }
                return n
            }
        },
        _hw: function (t, i) {
            t -= this[fD].x,
            i -= this.element.y;
            var n = {
                x: t,
                y: i
            };
            return this.element[Ao] && zs(n, -this.element[Ao]),
            n
        },
        onclick: function (t, i) {
            if (i[CR] && t[Up] && this[fD]) {
                var n = this._g4(t, i);
                if (n && n.isControlPoint) return void (n[av] >= 0 && this.element[IN](n.index));
                if (this[fD] == t[yy]()) {
                    var e = i[Cw](t),
                    s = i.getUI(this[fD]);
                    s[Ya](e.x, e.y, this.handlerSize || 2)
                }
            }
        },
        isEditable: function (t) {
            return this.graph[ZD](t) && (t instanceof EW || t instanceof mW && (!t[Uu]() || t[u_]()))
        },
        ondblclick: function (t, i) {
            if (!i[CR]) return void (this.element && this[jy](i));
            var n = t[yy]();
            return !n || n == this.element || n[mN] ? void this[jy](i) : void this._3l(n)
        },
        onstart: function (t, i) {
            if (this[xN] = !0, !i[CR]) return void (this.element && this.destroy(i));
            if (!t[MD]) {
                if (this[fD] && this._g4(t, i)) return void (t[MD] = !0);
                var n = t[yy]();
                return n && i[AN](n) && n instanceof EW ? void (this[fD] && n != this[fD] && this[jy]()) : void this._3l(n)
            }
        },
        onrelease: function () {
            this._mousePressed = !1,
            this[fD] && (this._mxanEdit = !0)
        },
        _9r: null,
        _g4: function (t, i) {
            var n = i[Cw](t);
            this[fD] instanceof EW && (n = this._hw(n.x, n.y));
            var e, s = i[so],
            r = this[Ed] / s,
            h = this._9v,
            a = h.length,
            o = this[fD] instanceof dY[KL];
            return h.forEach(function (t, s) {
                for (var f = 0,
                u = t[Ma]; f + 1 < u[qr]; ) {
                    var c = u[f],
                    _ = u[f + 1],
                    d = eH(n.x, n.y, c, _);
                    if (r > d) {
                        if (e = {
                            oldPoints: u[Xr](0),
                            segment: t,
                            index: s,
                            pointIndex: f
                        },
                        o && (e[av] -= 1), o && !Sr(t) && (0 == s || s == h[qr] - 1)) {
                            e.isEndPoint = !0;
                            var l = 0 == s;
                            e[kN] = l;
                            var v = l ? dY[XL][i_] : dY[XL].EDGE_TO_OFFSET,
                            b = i[Mc](this.element, v) || {};
                            e[CN] = [b.x || 0, b.y || 0]
                        }
                        return this._7g(t, f) && (e[wN] = !0, s > 0 && (e.prevSegment = h instanceof Qz ? h[il](s - 1) : h[s - 1]), a > s + 1 && (e[RN] = h instanceof Qz ? h[il](s + 1) : h[s + 1], e[RN][Ma] && (e.oldNextPoints = e.nextSegment[Ma].slice(0)))),
                        !1
                    }
                    f += 2
                }
            },
            this),
            e && e[TN] && !this[pN](this[fD], e[kN]) ? void 0 : e
        },
        _7g: function (t, i) {
            return i == t[Ma][qr] - 2
        },
        startdrag: function (t, i) {
            if (this[fD] && this[SN] && (this._9r = this._g4(t, i), this._9r)) {
                this._7f(),
                t[MD] = !0;
                var n = new Pr(i, Pr[LN], t, this.element);
                n[PN] = this._9r,
                i[hL](n)
            }
        },
        onkeyup: function (t, i) {
            this[xN] && 16 != !t[Wp] && this[fD] && this._9r && this._9r.delta && this._d1(this._9r[DN].x, this._9r[DN].y, i, t, !1)
        },
        onkeydown: function (t, i) {
            this[xN] && this[fD] && this._9r && t[nL] && this._9r.delta && this._d1(this._9r[DN].x, this._9r[DN].y, i, t, !0)
        },
        _d1: function (t, i, n, e, s) {
            var r = this._9r,
            h = this[fD],
            a = r.oldPoints,
            o = r.segment;
            if (r[TN]) {
                var f = r[kN] ? dY[XL][i_] : dY[XL].EDGE_TO_OFFSET,
                u = {
                    x: a[0] + t,
                    y: a[1] + i
                };
                h.setStyle(f, u);
                var c = new Pr(n, Pr[NN], e, h);
                return c[PN] = r,
                void n[hL](c)
            }
            if (s && r[wN]) {
                var _ = {
                    x: a[a[qr] - 2] + t,
                    y: a[a.length - 1] + i
                },
                d = r.prevSegment,
                l = r[RN],
                v = 20 / n.scale,
                b = Number[gl],
                y = b,
                g = b,
                m = b;
                d && (d = d[jo], b = Math.abs(_.x - d.x), g = Math.abs(_.y - d.y)),
                l && (l = l.lastPoint, y = Math.abs(_.x - l.x), m = Math.abs(_.y - l.y)),
                v > b && y > b ? t += d.x - _.x : v > y && b > y && (t += l.x - _.x),
                v > g && m > g ? i += d.y - _.y : v > m && g > m && (i += l.y - _.y)
            }
            if (r[wN] && Sr(o)) {
                for (var x = o.points.length - 4; x < o[Ma][qr]; ) {
                    var E = a[x] + t,
                    p = a[x + 1] + i;
                    o.points[x] = E,
                    o.points[x + 1] = p,
                    x += 2
                }
                if (r[RN] && Sr(r[RN])) {
                    var k = r[$N],
                    E = k[0] + t,
                    p = k[1] + i;
                    r.nextSegment[Ma][0] = E,
                    r[RN].points[1] = p
                }
            } else {
                var x = r.pointIndex,
                E = a[x] + t,
                p = a[x + 1] + i;
                o.points[x] = E,
                o.points[x + 1] = p
            }
            h[GT]();
            var c = new Pr(n, Pr.POINT_MOVING, e, h);
            c[PN] = r,
            n.onInteractionEvent(c)
        },
        ondrag: function (t, i) {
            if (this[fD] && this._9r) {
                var n = this._9r,
                e = this[fD],
                s = t[Py],
                r = t.totalDeltaY,
                h = i[so];
                if (s /= h, r /= h, e.rotate) {
                    var a = {
                        x: s,
                        y: r
                    };
                    zs(a, -e.rotate),
                    s = a.x,
                    r = a.y
                }
                n.delta = {
                    x: s,
                    y: r
                },
                this._d1(s, r, i, t, t.shiftKey)
            }
        },
        enddrag: function (t, i) {
            if (this[fD] && this._9r) {
                this[jN](),
                this._jl();
                var n = new Pr(i, Pr[BN], t, this.element);
                n.point = this._9r,
                i.onInteractionEvent(n)
            }
        },
        onmousemove: function (t, i) {
            this.element && (i.cursor = t.altKey && (this._g4(t, i) || this[fD] == t[yy]()) ? "crosshair" : null)
        }
    },
    Jz.SELECTION_RECTANGLE_STROKE = 1,
    Jz[FN] = X(3724541951),
    Jz[GN] = X(1430753245),
    lY[zN] = HN,
    lY[YN] = UN,
    Jz.RECTANGLE_SELECTION_MODE = lY[zN];
    var iq = function (t) {
        this[Qc] = t,
        this[id] = t.topCanvas
    };
    iq[sh] = {
        onstart: function (t, i) {
            this._kr && this[jy](i)
        },
        startdrag: function (t, i) {
            t[MD] || (t.responded = !0, this._kr = i[Cw](t), i[aP] = Wy, this._18Id = this[id].addDrawable(this._18, this).id)
        },
        ondrag: function (t, i) {
            if (this._kr) {
                z(t),
                this[WN] = i.toLogical(t),
                this.invalidate();
                var n = new Pr(i, Pr[qN], t, i[X_]);
                i.onInteractionEvent(n)
            }
        },
        enddrag: function (t, i) {
            if (this._kr) {
                this[VN] && (clearTimeout(this[VN]), this[VN] = null),
                this._fa(!0),
                this[jy](i);
                var n = new Pr(i, Pr.SELECT_END, t, i[X_]);
                i[hL](n)
            }
        },
        onpinch: function (t, i) {
            this._kr && this.enddrag(t, i)
        },
        _18: function (t, i) {
            t[B_] = Jz[FN],
            t.fillStyle = Jz.SELECTION_RECTANGLE_FILL_COLOR,
            t[So] = Jz[XN] / i;
            var n = this._kr.x,
            e = this._kr.y;
            t[Au](n, e, this._end.x - n, this[WN].y - e),
            t.fill(),
            t[To]()
        },
        invalidate: function () {
            return this[mO] ? void this.topCanvas[Zk]() : (this[mO] = !0, void (this._faTimer = setTimeout(this._fa[mh](this), 100)))
        },
        _fa: function (t) {
            if (this[mO] = !1, this[VN] = null, !this._kr || Fz && !t) return void this[id][Zk]();
            var i = Math.min(this._kr.x, this._end.x),
            n = Math.min(this._kr.y, this._end.y),
            e = Math.abs(this._kr.x - this._end.x),
            s = Math.abs(this._kr.y - this[WN].y);
            if (!e || !s) return void this.graph.selectionModel[Ha]();
            var r = [],
            h = this[Qc][so],
            a = this.graph[ZN];
            if (this[Qc][KN](function (t) {
                t._hm && this[Qc][J_](t.$data) && this.inRectangle(i, n, e, s, t, h, a) && r.push(t[Mo])
            } [mh](this)), this.graph[X_].set(r), this[id][Zk](), !t) {
                var o = new Pr(this[Qc], Pr.SELECT_BETWEEN, null, this.graph[X_]);
                this[Qc][hL](o)
            }
        },
        inRectangle: function (t, i, n, e, s, r, h) {
            var a = s[Eo]();
            return ai(t, i, n, e, a.x, a.y, a[Ga], a[za]) ? !0 : (h = h || Jz[JN], h == lY[YN] ? !1 : Rn(t, i, n, e, s, r))
        },
        destroy: function (t) {
            this._kr = null,
            t[aP] = null,
            this[QN] && (this[id][t$](this[QN]), delete this[QN], this.topCanvas[Zk]())
        }
    };
    var nq = S({
        "super": iq,
        onstart: null,
        startdrag: null,
        ondrag: null,
        enddrag: null,
        accept: function (t, i, n) {
            return n[i$] !== !1
        },
        oncontextmenu: function (t, i) {
            i[n$] || z(t)
        },
        onstart2: function () {
            iq[sh].onstart[eh](this, arguments)
        },
        startdrag2: function (t, i) {
            t[MD] || (i.popupmenu && i[n$][e$] instanceof Function && i[n$].hide(), iq[sh][fy].apply(this, arguments))
        },
        ondrag2: function () {
            iq.prototype[_y].apply(this, arguments)
        },
        enddrag2: function () {
            iq[sh][vy].apply(this, arguments)
        }
    }),
    XW = Math.PI / 4;
    jr.prototype = {
        _f3: !1,
        _f2: !1,
        _1x: function (t) {
            this[fD] && t.source == this[fD] && this.graph[mL](function () {
                this[s$]()
            },
            this)
        },
        _7: function () {
            this[yN] || (this[yN] = !0, this.graph[gN][sv](this._1x, this))
        },
        _5: function () {
            this[yN] = !1,
            this[Qc].dataPropertyChangeDispatcher[rv](this._1x, this)
        },
        onElementRemoved: function (t, i) {
            this[fD] && (t == this[fD] || Array[mc](t) && x(t, this[fD])) && this[jy](i)
        },
        onClear: function (t) {
            this.element && this[jy](t)
        },
        ondblclick: function (t, i) {
            this[fD] && this[jy](i)
        },
        destroy: function (t) {
            t.cursor = null,
            delete this[fD],
            delete this._d4,
            delete this[pC],
            delete this._9r,
            delete this._mxanEdit,
            delete this._ix,
            delete this[r$],
            delete this._f2,
            delete this._f3,
            delete this._insets,
            this._7f(),
            this._5()
        },
        _7f: function () {
            this[uD] && (this[id][t$](this[uD]), delete this._ffId, this[id].invalidate())
        },
        _myz: function () {
            this[uD] && this.topCanvas[a_](this[uD]) || (this[uD] = this[id][cD](this._ff, this).id, this[id][Zk]())
        },
        _d4: null,
        _ix: null,
        _8n: function (t) {
            this._d4 = t;
            var i = this._d4.x,
            n = this._d4.y,
            e = this._d4[Ga],
            s = this._d4.height;
            if (this[fD] instanceof kW && this.element[cT], this._f2) {
                var r = [];
                r[th]({
                    x: i,
                    y: n,
                    p: oH[Cl],
                    cursor: h$,
                    rotate: 5 * XW
                }),
                r.push({
                    x: i + e / 2,
                    y: n,
                    p: oH[a$],
                    cursor: o$,
                    rotate: 6 * XW
                }),
                r.push({
                    x: i + e,
                    y: n,
                    p: oH.RIGHT_TOP,
                    cursor: kd,
                    rotate: 7 * XW
                }),
                r[th]({
                    x: i,
                    y: n + s / 2,
                    p: oH.LEFT_MIDDLE,
                    cursor: f$,
                    rotate: 4 * XW
                }),
                r.push({
                    x: i,
                    y: n + s,
                    p: oH[Sl],
                    cursor: kd,
                    rotate: 3 * XW
                }),
                r.push({
                    x: i + e,
                    y: n + s / 2,
                    p: oH[Il],
                    cursor: f$,
                    rotate: 0
                }),
                r[th]({
                    x: i + e / 2,
                    y: n + s,
                    p: oH[Rl],
                    cursor: o$,
                    rotate: 2 * XW
                }),
                r[th]({
                    x: i + e,
                    y: n + s,
                    p: oH[Al],
                    cursor: h$,
                    rotate: XW
                }),
                this._ix = r
            }
            this._rotatePoint = this._f3 ? {
                x: i + e / 2,
                y: n,
                cursor: sY
            } : null,
            this[Kk]()
        },
        _ev: function (t, i, n, e) {
            t[Gx]();
            var s = (this[Ed] - 1) / e;
            t[Au](i - s, n - s, 2 * s, 2 * s),
            t[So] = 1 / e,
            t.lineDash = [],
            t[B_] = z_,
            t[Nx] = "rgba(255, 255, 255, 0.8)",
            t.stroke(),
            t[Oo]()
        },
        _67: function (t, i, n, e, s, r) {
            s = s || this[Ed],
            r = r || u$,
            t[Gx](),
            s /= e,
            t.arc(i, n, s, 0, 2 * Math.PI, !1),
            t[So] = 1 / e,
            t.lineDash = [],
            t[B_] = z_,
            t[Nx] = r,
            t.stroke(),
            t[Oo]()
        },
        _hw: function (t, i) {
            t -= this.element.x,
            i -= this[fD].y;
            var n = {
                x: t,
                y: i
            };
            return this[fD][Ao] && zs(n, -this[fD].rotate),
            n
        },
        _ff: function (t, i) {
            if (this._d4) {
                if (t[no](), t.translate(this[fD].x, this.element.y), this.element.rotate && t[Ao](this.element.rotate), this._rotatePoint) {
                    this._67(t, 0, 0, i, 3, c$);
                    var n = this[r$].x,
                    e = this[r$].y - this[pd] / i;
                    t[Gx](),
                    t[Xu](n, this[r$].y),
                    t.lineTo(n, e),
                    t.lineWidth = 1 / i,
                    t.strokeStyle = ON,
                    t.stroke(),
                    this._67(t, n, e, i)
                }
                if (this._ix) {
                    var s = this._d4.x,
                    r = this._d4.y,
                    h = this._d4.width,
                    a = this._d4[za];
                    t[Gx](),
                    t[Au](s, r, h, a),
                    t[So] = 1 / i,
                    t[Wf] = [2 / i, 3 / i],
                    t.strokeStyle = ON,
                    t[To](),
                    l(this._ix,
                    function (n) {
                        this._ev(t, n.x, n.y, i)
                    },
                    this)
                }
                t.restore()
            }
        },
        _mxu: function () {
            this.topCanvas[Zk]()
        },
        _3l: function (t, i, n, e) {
            this[fD] = t,
            this._myz(),
            this._f2 = n,
            this._f3 = e,
            this[s$](),
            this._7()
        },
        _n0h: function () {
            if (this[uD] && this[fD]) {
                var t = this[Qc].getUI(this[fD]);
                this[pC] = t[Fm];
                var i = Ir(this[pC], this[pC]._jc),
                n = Ir(this[pC], this[pC]._8e);
                this[_$] = new aH(i.y - n.y, i.x - n.x, n[Kh] - i.bottom, n[Jh] - i[Jh]),
                this._8n(n)
            }
        },
        _mx1: function (t, i) {
            return i[AN](t)
        },
        _mx0: function (t, i) {
            return !(t instanceof kW && t[cT] || !i[d$](t))
        },
        _dd: function (t, i) {
            return t instanceof xW && i[ZD](t)
        },
        onstart: function (t, i) {
            if (!i[CR]) return void (this.element && this[jy](i));
            if (!t[MD]) {
                var n = i[Ey](t),
                e = t[yy]();
                if (e != this.element) {
                    if (this[fD]) {
                        if (this._g4(t, i)) return void (t.responded = !0);
                        this[jy](i)
                    }
                    if (e && !e[mN] && this._dd(e, i)) {
                        var s = this[l$](e, i, n),
                        r = this._mx0(e, i, n); (s || r) && this._3l(e, i, s, r)
                    }
                }
            }
        },
        onrelease: function (t, i) {
            this.element && (this[SN] = !0, this[jN](), i[mL](function () {
                this[s$]()
            },
            this))
        },
        _9r: null,
        _g4: function (t, i) {
            var n = i[Cw](t);
            n = this._hw(n.x, n.y);
            var e = i.scale,
            s = this[Ed] / e;
            if (this[r$]) {
                var r = this[r$].x,
                h = this[r$].y - this._rotateHandleLength / e;
                if (eH(n.x, n.y, r, h) < s) return this[r$]
            }
            if (this._ix && this._ix.length) {
                var a;
                return l(this._ix,
                function (t) {
                    return eH(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                },
                this),
                a
            }
        },
        onmousemove: function (t, i) {
            if (this[fD]) {
                var n = this._g4(t, i);
                if (!n) return void (i[aP] = null);
                if (n != this[r$] && this[fD][Ao]) {
                    var e = n.rotate + this[fD].rotate;
                    return void (i[aP] = Ar(e))
                }
                i.cursor = n.cursor
            }
        },
        startdrag: function (t, i) {
            if (this[fD] && (this._7f(), this[SN] && (this._9r = this._g4(t, i), this._9r))) {
                if (t[MD] = !0, this._9r == this[r$]) return this._9r.start = i.toLogical(t),
                void (this._9r[Ao] = this[fD].rotate || 0);
                var n = new Pr(i, Pr.RESIZE_START, t, this[fD]);
                n[PN] = this._9r,
                i[hL](n)
            }
        },
        _7c: function (t, i, n, e, s, r) {
            var h = this._d4,
            a = h.x,
            o = h.y,
            f = h.width,
            u = h[za];
            if (r) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var _ = t.path[_O],
            d = e / f,
            l = s / u,
            v = -a * d + i,
            b = -o * l + n;
            _[au](function (t) {
                if (t.type != lY[px]) {
                    var e = t[Ma];
                    if (e && e.length) for (var s = 0,
                    r = e[qr]; r > s; s += 2) {
                        var h = e[s],
                        f = e[s + 1];
                        e[s] = (h - a) * d + i - v,
                        e[s + 1] = (f - o) * l + n - b
                    }
                }
            }),
            this._d4.set(i - v, n - b, e, s),
            t[PL](t.x + v, t.y + b),
            t.firePathChange()
        },
        _n08: function (t, i, n, e, s) {
            this._d4.set(i, n, e, s),
            t[MO] = {
                x: i,
                y: n,
                width: e,
                height: s
            }
        },
        _54: function (t, i, n, e, s) {
            if (this[fD] instanceof kW) return this[v$](this.element, t, i, n, e, s);
            if (this.element instanceof EW) return this._7c(this[fD], t, i, n, e, s);
            var r = this[pC] instanceof BW;
            if (!r && s) {
                var h = this._d4,
                a = this[pC].originalBounds,
                o = n != h[Ga];
                o ? e = n * a[za] / a[Ga] : n = e * a.width / a[za]
            }
            var f = this[fD][rO],
            u = new rH(n - this._insets[pa] - this[_$][Jh], e - this[_$].top - this[_$].bottom);
            if (u[Ga] < 1 && (n = this[_$][pa] + this._insets[Jh] + 1, u[Ga] = 1), u[za] < 1 && (e = this[_$].top + this[_$].bottom + 1, u[za] = 1), r ? this[fD][Oc](OW[WS], u) : this.element[Jk] = u, f) {
                var c = ui(f, n, e),
                _ = c.x + t - (this._myody.offsetX || 0),
                d = c.y + i - (this._myody[HO] || 0);
                if (this._d4.set(t - _, i - d, n, e), this[fD].rotate) {
                    var c = zs({
                        x: _,
                        y: d
                    },
                    this[fD][Ao]);
                    _ = c.x,
                    d = c.y
                }
                this.element.x += _,
                this[fD].y += d
            } else {
                var _ = this._d4.x * n / this._d4.width - t,
                d = this._d4.y * e / this._d4.height - i;
                if (this._d4.set(t + _, i + d, n, e), this[fD].rotate) {
                    var c = zs({
                        x: _,
                        y: d
                    },
                    this.element[Ao]);
                    _ = c.x,
                    d = c.y
                }
                this[fD].x -= _,
                this[fD].y -= d
            }
        },
        ondrag: function (t, i) {
            if (this[fD] && this._9r) if (this._9r != this[r$]) {
                var n = t.dx,
                e = t.dy,
                s = i.scale;
                if (n /= s, e /= s, this[fD][Ao]) {
                    var r = {
                        x: n,
                        y: e
                    };
                    zs(r, -this.element.rotate),
                    n = r.x,
                    e = r.y
                }
                var h = this._9r.p,
                a = this._d4,
                o = a.x,
                f = a.y,
                u = a.width,
                c = a[za];
                h[xl] == fH ? n >= u ? (o += u, u = n - u || 1) : (o += n, u -= n) : h[xl] == cH && (-n >= u ? (u = -n - u || 1, o -= u) : u += n),
                h.verticalPosition == _H ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : h[na] == lH && (-e >= c ? (c = -e - c || 1, f -= c) : c += e),
                this._54(o, f, u, c, t[nL]);
                var _ = new Pr(i, Pr[b$], t, this[fD]);
                _.point = this._9r,
                i.onInteractionEvent(_)
            } else {
                var r = i[Cw](t),
                d = ln(r.x, r.y, this.element.x, this[fD].y, this._9r.start.x, this._9r[gD].y, !0);
                d += this._9r.rotate || 0,
                t[nL] && (d = Math[po](d / Math.PI * 4) * Math.PI / 4),
                this[fD][Ao] = d % (2 * Math.PI);
                var _ = new Pr(i, Pr[y$], t, this[fD])
            }
        },
        enddrag: function (t, i) {
            if (this[fD] && this._9r && this._9r != this._rotatePoint) {
                var n = new Pr(i, Pr[g$], t, this[fD]);
                n[PN] = this._9r,
                i[hL](n)
            }
        }
    },
    dY.ResizeInteraction = jr;
    var eq = function (t) {
        this[Qc] = t
    };
    eq[sh] = {
        onstart2: function (t, i) {
            this[sy](t, i)
        },
        onstart: function (t, i) {
            if (!t[MD]) {
                var n = t[yy]();
                if (n && !i[J_](n) && (n = null), n && Ei(t)) {
                    i[RL](n);
                    var e = new Pr(i, Pr[m$], t, i[X_]);
                    return void i[hL](e)
                }
                if (!n || !i[X_][x$](n)) {
                    n ? (i[E$](n), i[p$](n)) : i[E$](null);
                    var e = new Pr(i, Pr[m$], t, i[X_]);
                    i.onInteractionEvent(e)
                }
            }
        },
        onkeydown: function (t, i) {
            return 27 == t[Wp] ? void i[LL]() : void (Ei(t) && 65 == t[Wp] && (i[k$](), F(t)))
        }
    },
    Jz[w$] = 3e3,
    Jz[T$] = 1e3,
    Cr[O$] = M$,
    Cr[S$] = 0,
    Cr[j$] = 15,
    gi(Uh + Cr[O$], {
        "user-select": M_,
        "background-color": I$,
        overflow: O_,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: Ym,
        "pointer-events": M_,
        border: A$,
        padding: C$,
        display: EP,
        position: Fk
    }),
    Cr[R$] = function () {
        var t = Cr[L$];
        return t || (t = Cr[L$] = new Cr),
        t
    },
    Cr[P$] = function (t, i, n) {
        Cr[R$]()[P$](t, i, n)
    },
    Cr[e$] = function () {
        Cr[R$]().hide()
    },
    Cr[sh] = {
        getTooltipElement: function () {
            var t = this._m7;
            return t || (t = i[Xa](y_), t[Eh] = Cr[O$], this._m7 = t, i[Fm][Iu](t)),
            t
        },
        update: function (t, i) {
            if (this[D$]()) {
                var n = bd == i;
                t && !n && (t = t[ea](/\n/g, N$));
                var e = this[$$]();
                n ? e[B$] = t || "" : e[zL] = t || "",
                Rr(e, this[F$].x + Cr[S$], this._info.y + Cr[j$])
            }
        },
        setTooltip: function (t, i) {
            if (!t || !t[G$]) return this[F$] = null,
            this._m7 && (this._m7[_a][Sk] = M_),
            void (this._n06 = Date.now());
            this[z$] = null,
            this[F$] = t;
            var n = this[$$]();
            n[_a][Sk] = "",
            this[H$](this[F$][G$], this[F$].type),
            isNaN(i) && (i = Jz[w$]),
            i && this.startTimer(this.setTooltip.bind(this, !1), i)
        },
        _n06: null,
        _ki: null,
        stopTimer: function () {
            this._ki && (clearTimeout(this._ki), this._ki = null)
        },
        startTimer: function (t, i) {
            this.stopTimer(),
            this._ki = setTimeout(function (t) {
                this._ki = null,
                t()
            } .bind(this, t), i)
        },
        show: function (t, i, n) {
            return this[D$]() || this[z$] && Date.now() - this[z$] < 1e3 ? void this[Y$](t, n) : (isNaN(i) && (i = Jz.TOOLTIP_DELAY), void (i ? this[U$](this[Y$].bind(this, t, n), i) : this[Y$](t, n)))
        },
        isShowing: function () {
            return this._m7 && M_ !== this._m7[_a][Sk]
        },
        hide: function () {
            this[W$](),
            this[D$]() && this[Y$](!1)
        }
    };
    var sq = function (t) {
        this[Qc] = t
    };
    sq.prototype = {
        onstart: function (t, i) {
            this.destroy(i)
        },
        _hp: null,
        onmousemove: function (t, i) {
            if (i[q$]) {
                var n = t[yy](),
                e = n ? i[V$](n) : null;
                return e ? void Cr[P$]({
                    target: n,
                    content: e,
                    type: n[X$],
                    x: t.pageX,
                    y: t[Ea]
                },
                i[Z$], i[K$]) : void Cr.hide()
            }
        },
        destroy: function () {
            Cr[e$]()
        }
    };
    var rq = function (t) {
        this[Qc] = t
    };
    rq[sh] = {
        destroy: function () {
            this[J$] && (this[J$] = null)
        },
        onmousewheel: function (t, i) {
            if (i.enableWheelZoom !== !1 && t[DN]) {
                if (dY[VR](t), i[hP]) {
                    var n = this.delayAction;
                    n || (n = this.delayAction = new Lr(function () {
                        i[_P](!1)
                    })),
                    i[_P](!0),
                    n.action(100)
                }
                i[Q$](t, t[DN], !1)
            }
        }
    };
    var hq = function (t) {
        this[Qc] = t
    };
    hq[sh] = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, !Ei(t))
        }
    };
    var aq = function (t) {
        this.graph = t
    };
    aq[sh] = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, Ei(t))
        }
    },
    p(Pr, yH),
    Pr[cN] = tB,
    Pr[_N] = iB,
    Pr[nB] = eB,
    Pr[qL] = sB,
    Pr[rB] = hB,
    Pr[LN] = aB,
    Pr[NN] = oB,
    Pr.POINT_MOVE_END = fB,
    Pr.RESIZE_START = uB,
    Pr.RESIZING = cB,
    Pr[g$] = _B,
    Pr.ROTATING = dB,
    Pr[lB] = vB,
    Pr[bB] = yB,
    Pr[bN] = gB,
    Pr[wO] = mB,
    Pr[tN] = xB,
    Pr.SELECT = EB,
    Pr[qN] = pB,
    Pr.SELECT_BETWEEN = kB,
    Pr[wB] = TB,
    Pr[OB] = MB,
    Dr.prototype = {
        _n04: function (t) {
            if (this[SB]) switch (t[jd]) {
                case MH[dv]:
                    this[SB][jB](t[Mo]);
                    break;
                case MH[kv]:
                    this[SB]._onElementClear(t.data)
            }
        },
        destroy: function () {
            delete this._kj,
            delete this._48,
            this[SB] && (this._interactionSupport._hj(), delete this._interactionSupport)
        },
        _kj: null,
        _48: null,
        defaultMode: null,
        _gr: function (t, i, n) {
            this._48[t] = new lr(i, n),
            t == this.currentMode && this._interactionSupport[IB](i)
        },
        addCustomInteraction: function (t) {
            this[SB][AB](t)
        },
        removeCustomInteraction: function (t) {
            this._interactionSupport[CB](t)
        },
        _mg: function (t) {
            var i = this._48[t];
            return i ? i : oq[t]
        }
    },
    K(Dr[sh], {
        defaultCursor: {
            get: function () {
                return this[RB] ? this.currentInteractionMode[nd] : void 0
            }
        },
        currentMode: {
            get: function () {
                return this._mxurrentMode
            },
            set: function (t) {
                this[LB] != t && (this[LB], this._interactionSupport || (this[SB] = new QH(this._kj)), this._mxurrentMode = t, this[RB] = this._mg(this[LB]), this._kj[aP] = this[nd], this[SB][IB](this[RB] ? this.currentInteractionMode[PB](this._kj) : []))
            }
        }
    });
    var oq = {};
    Jz.registerInteractions = function (t, i, n) {
        var e = new lr(i, n);
        oq[t] = e
    },
    lY.INTERACTION_MODE_VIEW = DB,
    lY[NB] = ed,
    lY[$B] = ld,
    lY[BB] = FB,
    lY.INTERACTION_MODE_ZOOMOUT = GB,
    lY.INTERACTION_MODE_CREATE_SIMPLE_EDGE = zB,
    lY[HB] = YB,
    lY.INTERACTION_MODE_CREATE_SHAPE = UB,
    lY[WB] = qB,
    Jz[VB](lY[XB], [eq, tq, rq, JW, ZW, sq, nq]),
    Jz[VB](lY[ZB], [KW, xr, eq, tq, rq, JW, sq]),
    Jz.registerInteractions(lY.INTERACTION_MODE_CREATE_EDGE, [KW, Mr, eq, yr, tq, rq, JW, sq]),
    Jz[VB](lY[KB], [KW, gr, eq, tq, rq, JW, sq]),
    Jz[VB](lY[WB], [mr, eq, tq, rq, JW, sq]),
    Jz.registerInteractions(lY.INTERACTION_MODE_DEFAULT, [KW, jr, Mr, eq, QW, tq, rq, JW, ZW, sq, nq]),
    Jz[VB](lY[$B], [KW, jr, Mr, eq, QW, iq, tq, rq, JW, ZW, sq]),
    Jz.registerInteractions(lY[BB], [rq, JW, hq], tY),
    Jz.registerInteractions(lY.INTERACTION_MODE_ZOOMOUT, [rq, JW, aq], iY),
    dY[JB] = tq,
    dY[QB] = eq,
    dY[tF] = QW,
    dY[iF] = rq,
    dY[nF] = ZW,
    dY[eF] = JW,
    dY[sF] = sq,
    dY[rF] = iq,
    dY[hF] = nq,
    dY[aF] = Mr;
    var fq = function (t) {
        this[Qc] = t
    };
    dY.Layouter = fq,
    fq[sh] = {
        getNodeBounds: function (t) {
            return this[Qc][oF](t)
        },
        isLayoutable: function (t) {
            return this[Qc][K_](t) && t[fF] !== !1
        },
        getLayoutResult: function () { },
        updateLocations: function (t, i, n, e, s) {
            if (i === !0) {
                if (this.animate || (this.animate = new Hq), n && (this[uF][sD] = n), e && (this[uF][hD] = e), this[uF].locations = t, s) {
                    var r = s,
                    h = this;
                    s = function () {
                        r[Vr](h, t)
                    }
                }
                return void this[uF][gD](s)
            }
            for (var a in t) {
                var o = t[a],
                f = o[cF];
                f[PL](o.x, o.y)
            }
            s && s.call(this, t)
        },
        _g3: function (t) {
            var i, n, e, s = null;
            t && (i = t[_F], s = t[pc], n = t[sD], e = t[hD]);
            var r = this.getLayoutResult(t);
            return r ? (this[dF](r, i, n, e, s), r) : !1
        },
        doLayout: function (t, i) {
            return this.graph && i !== !0 ? void this.graph.callLater(function () {
                this._g3(t)
            },
            this) : this._g3(t)
        }
    };
    var uq = 110,
    cq = 120,
    _q = 130,
    dq = 210,
    lq = 220,
    vq = 230,
    bq = 111,
    yq = 112,
    gq = 121,
    mq = 122,
    xq = 211,
    Eq = 212,
    pq = 221,
    kq = 222;
    lY.DIRECTION_RIGHT = uq,
    lY[lF] = cq,
    lY[vF] = _q,
    lY[bF] = dq,
    lY[yF] = lq,
    lY[gF] = vq,
    lY.DIRECTION_RIGHT_TOP = bq,
    lY[mF] = yq,
    lY[xF] = gq,
    lY[EF] = mq,
    lY[pF] = xq,
    lY[kF] = Eq,
    lY[wF] = pq,
    lY[TF] = kq;
    var wq = OF,
    Tq = MF,
    Oq = SF,
    Mq = jF;
    lY[IF] = wq,
    lY[AF] = Oq,
    lY.LAYOUT_TYPE_EVEN_VERTICAL = Mq,
    lY[CF] = Tq,
    dY.isHorizontalDirection = Nr;
    var Sq = function (t) {
        this[Qc] = t
    };
    Sq.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: dq,
        layoutType: wq,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function (t) {
            if (this.graph._8y[rb]) {
                var i = this[Qc][Ey](t);
                if (i) return i._fn
            }
            return t.image && t[tx].bounds ? {
                width: t.image.bounds.width,
                height: t[tx].bounds[za]
            } : this[RF]
        },
        _mxz: function (t, i) {
            if (this[Cd](t)) {
                var n, e = this[LF](t);
                n = e instanceof hH ? [-e.x, -e.y] : [e[Ga] / 2, e[za] / 2];
                var s = t.id,
                r = (t.parentChildrenDirection, i ? this._9x[i.id] : this._n0i);
                this._9x[s] = new jq(this[PF](t), this[DF](t), this[NF](t), t[$F], r, t, e.width, e.height, n)
            }
        },
        getHGap: function (t) {
            return t && D(t[BF]) ? t[BF] : this[BF]
        },
        getVGap: function (t) {
            return t && D(t[FF]) ? t[FF] : this[FF]
        },
        getLayoutType: function (t) {
            return t && t[GF] ? t[GF] : this[GF]
        },
        _9x: null,
        _n0i: null,
        _ks: function () {
            this._9x = null,
            this[zF] = null
        },
        getLayoutResult: function (t) {
            var i, n, e, s, r = this[Qc];
            t instanceof Object && (i = t.x, n = t.y, r = t.root || this[Qc], e = t.bounds, s = t.undirected),
            this._9x = {},
            this._n0i = new jq,
            this[zF]._mm(this[BF], this[FF], this[$F], this[GF]);
            var h = {},
            a = Wq(r, this[HF], this, !1, s);
            return a && (this[zF]._g3(i || 0, n || 0, h), e && e.set(this._n0i.x, this[zF].y, this._n0i.width, this[zF][za])),
            this._ks(),
            h
        },
        doLayout: function (t, i) {
            if (D(t)) {
                var n = t,
                e = 0;
                D(i) && (e = i),
                t = {
                    x: n,
                    y: e
                },
                i = !0
            }
            return w(this, Sq, YF, [t, i])
        }
    },
    p(Sq, fq);
    var jq = function (t, i, n, e, s, r, h, a, o) {
        this._lt = t || 0,
        this._lv = i || 0,
        this[GF] = n,
        this[$F] = e,
        this[UF] = s,
        s && s._fh(this),
        this[cF] = r,
        this._f5 = h,
        this[WF] = a,
        this[qF] = o
    };
    jq[sh] = {
        _mm: function (t, i, n, e) {
            this._lt = t,
            this._lv = i,
            this[$F] = n,
            this[GF] = e
        },
        _8l: function () {
            this._fk = []
        },
        _lt: 0,
        _lv: 0,
        _fk: null,
        _f5: 0,
        _mxs: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _fh: function (t) {
            this._fk || (this._fk = []),
            this._fk[th](t)
        },
        _mxn: function (t, i, n, e) {
            var s = new hH;
            return n(this._fk,
            function (n) {
                n._39(t, i),
                s.add(n),
                e ? t += n[Ga] + this._lt : i += n.height + this._lv
            },
            this),
            s
        },
        _89: function (t, i, n, e, s) {
            var r, h = e ? this._lt : this._lv,
            a = e ? this._lv : this._lt,
            o = e ? "width" : za,
            f = e ? "height" : Ga,
            u = e ? "_f5" : WF,
            c = e ? "_mxs" : VF,
            _ = e ? "hostDX" : XF,
            d = e ? "hostDY" : ZF,
            v = new hH,
            b = 0,
            y = 0,
            g = [],
            m = 0,
            x = 0;
            n(this._fk,
            function (n) {
                var s = x >= y;
                n[KF] = s ? e ? cq : lq : e ? uq : dq,
                n._39(t, i),
                s ? (g.push(n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[th](n), m = Math.max(m, n[o]), x += n[f] + a)
            },
            this),
            y -= a,
            x -= a;
            var E = Math.max(y, x),
            p = h,
            k = 0;
            this[cF] && (s && (p += this[u] + h, E > this[c] ? this[d] = (E - this[c]) / 2 : k = (this[c] - E) / 2), this[_] = b + p / 2 - this[u] / 2);
            var w = 0,
            T = k;
            return l(g,
            function (t) {
                e ? t[Mm](b - t[o], T) : t[Mm](T, b - t[o]),
                T += a + t[f],
                v.add(t)
            },
            this),
            r ? (T = k, w = b + p, l(r,
            function (t) {
                e ? t.offset(w, T) : t[Mm](T, w),
                T += a + t[f],
                v.add(t)
            },
            this), v) : v
        },
        offset: function (t, i) {
            this.x += t,
            this.y += i,
            this.nodeX += t,
            this[JF] += i,
            this._75(t, i)
        },
        _myv: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _myt: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _lz: function (t) {
            if (this._fk && 0 != this._fk[qr]) {
                if (t) return this[cF] && (this[QF] += this[tG](this[QF], this._f5)),
                void l(this._fk,
                function (t) {
                    t[Mm](this[tG](t.x, t[Ga]), 0)
                },
                this);
                this.node && (this[JF] += this[iG](this[JF], this[WF])),
                l(this._fk,
                function (t) {
                    t[Mm](0, this[iG](t.y, t[za]))
                },
                this)
            }
        },
        _75: function (t, i) {
            this._fk && l(this._fk,
            function (n) {
                n[Mm](t, i)
            },
            this)
        },
        _39: function (t, i) {
            return this.x = t || 0,
            this.y = i || 0,
            this._fk && 0 != this._fk[qr] ? void this._1u(this.x, this.y, this[GF]) : void (this[cF] && (this[Ga] = this._f5, this.height = this._mxs, this[QF] = this.x, this[JF] = this.y))
        },
        _72: function (t) {
            if (this.node) {
                var i = this[qF],
                n = i[0],
                e = i[1];
                t[this[cF].id] = {
                    node: this.node,
                    x: this[QF] + n,
                    y: this.nodeY + e,
                    left: this[QF],
                    top: this[JF],
                    width: this._f5,
                    height: this[WF]
                }
            }
            this._fk && l(this._fk,
            function (i) {
                i._72(t)
            },
            this)
        },
        _g3: function (t, i, n) {
            this._39(t, i),
            this._72(n)
        },
        _1u: function (t, i, e) {
            var s, r = t,
            h = i; !this[$F] && this[UF] && (this.parentChildrenDirection = this[KF] || this[UF][$F]);
            var a = this[$F],
            o = Nr(a);
            if (this[cF]) {
                s = a == _q || a == vq;
                var f = $r(a);
                s || (o ? t += this._f5 + this._lt : i += this[WF] + this._lv)
            }
            var u, c = this.node && this[cF].layoutReverse ? b : l;
            if (e == Tq) u = this._89(t, i, c, !o, s);
            else {
                var _;
                _ = e == wq ? !o : e == Oq,
                u = this[nG](t, i, c, _, s)
            }
            var d = 0,
            v = 0;
            if (u && !u.isEmpty() && (d = u[Ga], v = u.height, this.add(u)), this[cF]) {
                if (this[QF] = r, this.nodeY = h, this.hostDX !== n || this[XF] !== n) this[QF] += this.hostDX || 0,
                this[JF] += this[XF] || 0;
                else {
                    var y;
                    y = a == dq || a == lq || a == cq || a == uq ? 1 : a == Eq || a == kq || a == mq || a == yq ? 0 : 2,
                    o ? 1 == y ? this[JF] += v / 2 - this[WF] / 2 : 2 == y && (this[JF] += v - this[WF]) : 1 == y ? this[QF] += d / 2 - this._f5 / 2 : 2 == y && (this[QF] += d - this._f5)
                }
                this.addRect(this.nodeX, this[JF], this._f5, this[WF]),
                f && this._lz(o)
            }
        },
        node: null,
        uiBounds: null
    },
    p(jq, hH),
    Fr[sh] = {
        layoutDatas: null,
        isMovable: function (t) {
            return !this[eG][t.id]
        },
        _76: !1,
        _3j: function () {
            this._76 = !0,
            this[Qc]._1i[sv](this._9q, this),
            this.graph._1c[sv](this._20, this)
        },
        _1o: function () {
            this._76 = !1,
            this[Qc]._1i.removeListener(this._9q, this),
            this[Qc]._1c[rv](this._20, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function () {
            this[mO] = !0
        },
        resetLayoutDatas: function () {
            return this[mO] = !1,
            this[sG] = Br.call(this)
        },
        _20: function (t) {
            Pr[cN] == t.kind ? (this[eG] = {},
            t.datas.forEach(function (t) {
                this.currentMovingNodes[t.id] = t
            },
            this)) : Pr.ELEMENT_MOVE_END == t.kind && (this[eG] = {})
        },
        _9q: function () {
            this[rG]()
        },
        isRunning: function () {
            return this[hG] && this[hG]._dk()
        },
        getLayoutResult: function () {
            this[aG](),
            this.resetLayoutDatas();
            for (var t = this[oG](this[sG][fG] || 0, this[sG][uG] || 0), i = 0; t > i && this.step(!1) !== !1; i++);
            var n = this.layoutDatas.nodes;
            return this[cG](),
            n
        },
        _md: function () {
            return !1
        },
        step: function (t) {
            if (t === !1) return this._md(this[_G]); (this[mO] || !this[sG]) && this[dG]();
            var i = this._md(t),
            n = this[sG][lG];
            for (var e in n) {
                var s = n[e],
                r = s.node;
                this.isMovable(r) ? r.setLocation(s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        },
        onstop: function () {
            delete this[sG]
        },
        start: function (t) {
            if (this[vG]()) return !1;
            this._76 || this._3j(),
            this._jwr || (this._jwr = function (t) {
                return this[vN](t)
            } .bind(this)),
            this[rG](),
            this.timer = new uY(this[bG]);
            var i = this;
            return this[hG]._kr(function () {
                i.onstop(),
                t && t()
            }),
            !0
        },
        stop: function () {
            this[hG] && (this[hG]._la(), this[cG]())
        },
        getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        },
        minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        },
        resetGraph: function () {
            this._76 || this._3j(),
            this.resetLayoutDatas()
        },
        destroy: function () {
            this[aG](),
            this._1o()
        }
    },
    p(Fr, fq);
    var Iq = function (t, i, n, e) {
        this[Qc] = t,
        D(i) && (this[Pl] = i),
        D(n) && (this.gap = n),
        D(e) && (this[yG] = e)
    };
    dY.BalloonLayouter = Iq;
    var Aq = gG,
    Cq = mG,
    Rq = xG,
    Lq = EG;
    lY.ANGLE_SPACING_PROPORTIONAL = Aq,
    lY[pG] = Cq,
    lY[kG] = Rq,
    lY[wG] = Lq,
    Iq[sh] = {
        angleSpacing: Aq,
        radiusMode: Lq,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9x: null,
        _n0i: null,
        _ks: function () {
            this._9x = null,
            this._n0i = null
        },
        getLayoutResult: function (t) {
            var i, n = 0,
            e = 0,
            s = this[Qc];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this.graph, i = t[xo]),
            this._9x = {},
            this[zF] = new Nq(this);
            var r = {},
            h = qq(s, this[HF], this);
            return h && (this._n0i._fk && 1 == this[zF]._fk[qr] && (this[zF] = this._n0i._fk[0]), this._n0i._el(!0), this[zF]._5e(n, e, this[yG], r, i)),
            this._ks(),
            r
        },
        _mxz: function (t, i) {
            if (this[Cd](t)) {
                var n = i ? this._9x[i.id] : this[zF];
                this._9x[t.id] = new Nq(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this[Pl]
        },
        getNodeSize: function (t) {
            if (this[Qc]._8y[rb]) {
                var i = this.graph.getUI(t);
                if (i) return (i._fn.width + i._fn[za]) / 2
            }
            return this.defaultSize
        },
        getGap: function () {
            return this.gap
        },
        _2y: function (t, i, n) {
            return this.getNodeSize(t, i, n) + this[TG](t, i, n)
        }
    };
    var Pq = function (t) {
        var i, n = this._fk[qr],
        e = 0,
        s = 0;
        if (l(this._fk,
        function (t) {
            var n = t._el();
            1 > n && (n = 1),
            s += n,
            n > e && (e = n, i = t)
        },
        this), n > 1) {
            var r = 0,
            h = {},
            a = s / n / 3;
            s = 0,
            l(this._fk,
            function (t) {
                var i = t._m3;
                a > i && (i = a),
                h[t.id] = i,
                s += i
            },
            this);
            var o = _W / s;
            l(this._fk,
            function (i, n) {
                var e = h[i.id],
                s = e * o;
                0 === n && (r = t ? -s / 2 : -s),
                i._km = r + s / 2,
                i._kp = s,
                r += s
            },
            this)
        }
        return [e, i._kp]
    },
    Dq = function (t) {
        var i = this._8h,
        n = 2 * Math.PI / i,
        e = 0,
        s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._fk,
        function (t) {
            t._km = s % _W,
            s += n,
            t._kp = n;
            var i = t._el();
            i > e && (e = i)
        },
        this),
        [e, n]
    },
    Nq = function (t, i, n) {
        this[OG] = t,
        i && (this._m5 = i, this.id = i.id),
        n && (n._fh(this), n._m2 = !1, this._kl = n._kl + 1)
    },
    _W = 2 * Math.PI;
    Nq[sh] = {
        _kp: 0,
        _km: 0,
        _k8: 0,
        _ed: 0,
        _d2: 0,
        _kl: 0,
        _m2: !0,
        _m3: 0,
        _hi: 0,
        _fk: null,
        _m5: null,
        _fh: function (t) {
            this._fk || (this._fk = []),
            this._fk.push(t),
            t[Cu] = this
        },
        _hd: function (t) {
            if (this._km = (this._km + t) % _W, this._fk) {
                var i = this._fk[qr];
                if (1 == i) return void this._fk[0]._hd(this._km);
                t = this._km + Math.PI,
                l(this._fk,
                function (i) {
                    i._hd(t)
                },
                this)
            }
        },
        _8h: 0,
        _6u: function (t) {
            return this._m5 && (this._hi = this[OG]._2y(this._m5, this._kl, this._m2) / 2),
            this._fk ? (this._hi, this._8h = this._fk[qr], this._8h <= 2 || this.layouter.angleSpacing == Cq ? Dq[Vr](this, t) : Pq.call(this, t)) : null
        },
        _el: function (t) {
            var i = this._6u(t);
            if (!i) return this._m3 = this._hi;
            var n = i[0],
            e = i[1],
            s = this[OG].getRadius(this._m5, this._kl);
            if (s < this._hi && (s = this._hi), this._ed = s, this._hi + n > s && (s = this._hi + n), n && this._8h > 1 && e < Math.PI) {
                var r = n / Math.sin(e / 2);
                r > s && (s = r)
            }
            return this._k8 = s,
            this._m3 = s + n,
            this._m5 && this._fk && this[OG][MG] == Lq && l(this._fk,
            function (t) {
                var i = t._m3;
                1 == t._8h && (i /= 2);
                var n = this._hi + i,
                e = t._kp;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2),
                    r = i / s;
                    r > i && (i = r)
                }
                n > i && (i = n),
                t._d2 = i
            },
            this),
            (!this._m5 || t) && this._hd(0),
            this._m3
        },
        _5e: function (t, i, n, e, s) {
            if (this._m5 && (e[this._m5.id] = {
                x: t,
                y: i,
                node: this._m5
            },
            s && s[hT](t - this._hi / 2, i - this._hi / 2, this._hi, this._hi)), this._fk) {
                if (!this._m5 && 1 == this._fk.length) return void this._fk[0]._5e(t, i, n, e, s);
                n = n || 0;
                var r = this._k8,
                h = this._ed;
                l(this._fk,
                function (a) {
                    var o = r;
                    a._d2 && (o = Math.max(h, a._d2));
                    var f = a._km + n,
                    u = t + o * Math.cos(f),
                    c = i + o * Math.sin(f);
                    a._5e(u, c, n, e, s)
                },
                this)
            }
        }
    },
    p(Iq, fq);
    var $q = function () {
        k(this, $q, arguments)
    };
    p($q, Gr);
    var Bq = function (t, i) {
        this.node1 = t,
        this[SG] = i,
        t == i ? (this.isLooped = !0, this._kk = t._ke) : this._kk = new Qz,
        this._8j = [],
        this._hb = Jz[jG]
    };
    Jz[jG] = !0,
    Bq[sh] = {
        node1: null,
        node2: null,
        _kk: null,
        _hb: Jz[jG],
        _8j: null,
        _h1: null,
        agentEdge: null,
        _myq: function (t, i, n) {
            this._kk.forEach(function (e) {
                return n && e.$from != n && e[Du] != n ? void 0 : t.call(i, e)
            })
        },
        _5o: 0,
        _5m: 0,
        _i3: function (t, i) {
            return this._kk.add(t) === !1 ? !1 : (i == this[IG] ? this._5o++ : this._5m++, this._n0k ? void this._13(t) : void (this[rb] = !0))
        },
        _da: function (t, i) {
            return this._kk.remove(t) === !1 ? !1 : (i == this[IG] ? this._5o-- : this._5m--, this._13(t), void this._kk.forEach(function (t) {
                t[vT] = !0,
                t[rT] = !0
            },
            this))
        },
        _13: function (t) {
            this[AG] = !0,
            this._6k = !0,
            t[vT] = !0,
            t.__44 = !0
        },
        _mxu: function () {
            this._6k || (this._6k = !0, this._kk[au](function (t) {
                t[vT] = !0
            }))
        },
        isEmpty: function () {
            return this._kk[Hf]()
        },
        isPositiveOrder: function (t) {
            return this.node1 == t[qu] || this.node1 == t.fromAgent
        },
        canBind: function (t) {
            return t && this._6k && this[mo](t),
            this._kk[qr] > 1 && this._8j.length > 1
        },
        _hy: function (t) {
            return this._8j.indexOf(t)
        },
        getYOffset: function (t) {
            return this._h1[t.id]
        },
        _4g: function (t) {
            if (!this[MR]()) return void (this._h1 = {});
            var i = {},
            n = this._8j.length;
            if (!(2 > n)) {
                var e = 0,
                s = this._8j[0];
                i[s.id] = 0;
                for (var r = 1; n > r; r++) {
                    s = this._8j[r];
                    var h = t[Mc](s, OW[Wj]) || GW[OW.EDGE_BUNDLE_GAP];
                    e += h,
                    i[s.id] = e
                }
                if (!this[Uu]) for (var a = e / 2,
                r = 0; n > r; r++) s = this._8j[r],
                i[s.id] -= a;
                this._h1 = i
            }
        },
        _my5: function (t) {
            return this._hb == t ? !1 : (this._hb = t, this[Kk](), !0)
        },
        reverseExpanded: function () {
            return this._my5(!this._hb)
        },
        _19: function () {
            this._mxuBindableFlag = !1,
            this._8j.length = 0;
            var t;
            this._kk[au](function (i) {
                if (i[Vw]()) {
                    if (!this.isPositiveOrder(i)) return t || (t = []),
                    void t[th](i);
                    this._8j[th](i)
                }
            },
            this),
            t && (this._8j = t[Jr](this._8j))
        },
        _di: function (t) {
            return t == this[sP] || !this[MR]() || this._hb
        },
        validate: function (t) {
            this._6k = !1,
            this._kk[au](function (t) {
                t._edgeBundleInvalidateFlag = !1
            }),
            this._mxuBindableFlag && this._19();
            var i = this._hb,
            n = this.canBind(),
            e = !n || i;
            l(this._8j,
            function (t) {
                t._$x = !0,
                t[CG] = e,
                e && (t[rT] = !0)
            },
            this),
            e ? this._n01(null, t) : (this[Do](this._8j[0], t), this.agentEdge._hmInBundle = !0, this[sP].__44 = !0),
            e && this._4g(t)
        },
        _n01: function (t, i) {
            if (t != this.agentEdge) {
                var n = this.agentEdge;
                return this[sP] = t,
                i && i._41(new gH(this, sP, t, n)),
                !0
            }
        }
    },
    K(Bq[sh], {
        bindableEdges: {
            get: function () {
                return this._8j
            }
        },
        edges: {
            get: function () {
                return this._kk._j7
            }
        },
        length: {
            get: function () {
                return this._kk ? this._kk.length : 1
            }
        },
        expanded: {
            get: function () {
                return this._hb
            },
            set: function (t) {
                return this._hb == t ? !1 : (this._hb = t, void this[Kk]())
            }
        }
    });
    var Fq = function () {
        function t(t, i) {
            this.node = t,
            this.body = i
        }
        function i() {
            this.stack = [],
            this.popIdx = 0
        }
        var n = -1e6,
        e = .8;
        i.prototype = {
            isEmpty: function () {
                return 0 === this[RG]
            },
            push: function (i, n) {
                var e = this[LG][this[RG]];
                e ? (e.node = i, e[Fm] = n) : this[LG][this[RG]] = new t(i, n),
                ++this[RG]
            },
            pop: function () {
                return this[RG] > 0 ? this[LG][--this[RG]] : void 0
            },
            reset: function () {
                this[RG] = 0
            }
        };
        var s = [],
        r = new i,
        h = function () {
            this[Fm] = null,
            this[PG] = [],
            this.mass = 0,
            this[DG] = 0,
            this.massY = 0,
            this.left = 0,
            this.top = 0,
            this[Kh] = 0,
            this[Jh] = 0,
            this.isInternal = !1
        },
        a = [],
        o = 0,
        f = function () {
            var t;
            return a[o] ? (t = a[o], t[PG][0] = null, t[PG][1] = null, t.quads[2] = null, t.quads[3] = null, t[Fm] = null, t[NG] = t.massX = t[$G] = 0, t[pa] = t[Jh] = t.top = t.bottom = 0, t[BG] = !1) : (t = new h, a[o] = t),
            ++o,
            t
        },
        u = f(),
        c = function (t, i) {
            var n = Math.abs(t.x - i.x),
            e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        },
        _ = function (t) {
            for (r[FG](), r[th](u, t); !r[Hf](); ) {
                var i = r.pop(),
                n = i.node,
                e = i.body;
                if (n[BG]) {
                    var s = e.x,
                    h = e.y;
                    n.mass = n[NG] + e.mass,
                    n[DG] = n.massX + e.mass * s,
                    n[$G] = n.massY + e[NG] * h;
                    var a = 0,
                    o = n[pa],
                    _ = (n[Jh] + o) / 2,
                    d = n.top,
                    l = (n.bottom + d) / 2;
                    if (s > _) {
                        a += 1;
                        var v = o;
                        o = _,
                        _ += _ - v
                    }
                    if (h > l) {
                        a += 2;
                        var b = d;
                        d = l,
                        l += l - b
                    }
                    var y = n[PG][a];
                    y || (y = f(), y.left = o, y.top = d, y[Jh] = _, y.bottom = l, n[PG][a] = y),
                    r.push(y, e)
                } else if (n[Fm]) {
                    var g = n[Fm];
                    if (n.body = null, n.isInternal = !0, c(g, e)) {
                        if (n.right - n[pa] < 1e-8) return;
                        do {
                            var m = Math[Dh](), x = (n.right - n.left) * m, E = (n.bottom - n.top) * m;
                            g.x = n[pa] + x, g.y = n.top + E
                        } while (c(g, e))
                    }
                    r.push(n, g),
                    r[th](n, e)
                } else n[Fm] = e
            }
        },
        d = function (t) {
            var i, r, h, a, o = s,
            f = 1,
            c = 0,
            _ = 1;
            for (o[0] = u; f; ) {
                var d = o[c],
                l = d[Fm];
                f -= 1,
                c += 1,
                l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[lo](r * r + h * h), 0 === a && (r = (Math[Dh]() - .5) / 50, h = (Math.random() - .5) / 50, a = Math[lo](r * r + h * h)), i = n * l[NG] * t[NG] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d[DG] / d[NG] - t.x, h = d[$G] / d[NG] - t.y, a = Math[lo](r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math[Dh]() - .5) / 50, a = Math.sqrt(r * r + h * h)), (d[Jh] - d[pa]) / a < e ? (i = n * d[NG] * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d[PG][0] && (o[_] = d[PG][0], f += 1, _ += 1), d[PG][1] && (o[_] = d[PG][1], f += 1, _ += 1), d.quads[2] && (o[_] = d[PG][2], f += 1, _ += 1), d[PG][3] && (o[_] = d[PG][3], f += 1, _ += 1)))
            }
        },
        l = function (t, i) {
            n = i;
            var e, s = Number[gl],
            r = Number[gl],
            h = Number[GG],
            a = Number[GG],
            c = t,
            d = c[qr];
            for (e = d; e--; ) {
                var l = c[e].x,
                v = c[e].y;
                s > l && (s = l),
                l > h && (h = l),
                r > v && (r = v),
                v > a && (a = v)
            }
            var b = h - s,
            y = a - r;
            for (b > y ? a = r + b : h = s + y, o = 0, u = f(), u[pa] = s, u.right = h, u.top = r, u.bottom = a, e = d; e--; ) _(c[e], u)
        };
        return {
            init: l,
            update: d
        }
    },
    Gq = function (t) {
        t.fx -= t.x * this[zG],
        t.fy -= t.y * this[zG]
    },
    zq = function (t) {
        if (0 != t.k) {
            var i = this._d9,
            n = t[$u],
            e = t.to,
            s = e.x - n.x,
            r = e.y - n.y,
            h = s * s + r * r,
            a = Math[lo](h) || .1,
            o = (a - i) * t.k * this[HG];
            o /= a;
            var f = o * s,
            u = o * r;
            e.fx -= f,
            e.fy -= u,
            n.fx += f,
            n.fy += u
        }
    };
    Gr[sh] = {
        appendNodeInfo: function (t, i) {
            i.mass = t[YG] || 1,
            i.fx = 0,
            i.fy = 0,
            i.vx = 0,
            i.vy = 0
        },
        appendEdgeInfo: function (t, i) {
            i.k = t[UG] || 1
        },
        setMass: function (t, i) {
            t[YG] = i,
            this[sG] && this[sG][lG] && (t = this[sG][lG][t.id], t && (t[NG] = i))
        },
        setElasticity: function (t, i) {
            t[UG] = i,
            this.layoutDatas && this.layoutDatas[$T] && (t = this[sG][$T][t.id], t && (t.k = i))
        },
        _d9: 50,
        _ho: .5,
        timeStep: .05,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _mf: 1e3,
        _ji: function (t) {
            return this._mf + .3 * (t - this._mf)
        },
        _md: function (t, i) {
            var n = (Date.now(), this.layoutDatas[lG]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[Dh]() - .5, s.y += Math.random() - .5),
                Gq[Vr](this, s)
            }
            var r = this[sG][WG];
            if (r) for (var e in r) {
                var h = r[e],
                a = h[Kr],
                o = 0,
                f = 0;
                a[au](function (t) {
                    o += t.x,
                    f += t.y
                }),
                o /= a.length,
                f /= a.length;
                var u = 10 * this[zG];
                a[au](function (t) {
                    t.fx -= (t.x - o) * u,
                    t.fy -= (t.y - f) * u
                })
            }
            var c = this._nbodyForce;
            c || (c = this[qG] = Fq()),
            c[q_](this[sG][VG], -this.repulsion * this[XG] * this[XG]);
            for (var e in n) c[H$](n[e]);
            if (this[HG]) {
                var _ = this[sG][$T];
                for (var e in _) zq[Vr](this, _[e])
            }
            return this._mb(t)
        },
        _mb: function (t) {
            var i = this.layoutDatas[ZG],
            n = (this.layoutDatas[KG], this.layoutDatas.nodes),
            t = this[_G],
            e = 0,
            s = this._ho;
            for (var r in n) {
                var h = n[r],
                a = h.fx / h[NG],
                o = h.fy / h[NG],
                f = h.vx += a * t,
                u = h.vy += o * t;
                h.x += f * t,
                h.y += u * t,
                i > e && (e += 2 * (f * f + u * u)),
                h.fx = 0,
                h.fy = 0,
                h.vx *= s,
                h.vy *= s
            }
            return this[sG].currentEnergy = e,
            e >= i
        }
    },
    p(Gr, Fr),
    dY[JG] = Gr;
    var Hq = function (t) {
        this[QG] = t
    };
    Hq[sh] = {
        oldLocations: null,
        _f0: null,
        duration: 700,
        animationType: fY.easeOutStrong,
        _74: function (t) {
            if (this._f0 = t, this[tz] = {},
            t) for (var i in t) {
                var n = t[i],
                e = n[cF];
                this[tz][i] = {
                    x: e.x,
                    y: e.y
                }
            }
        },
        setLocation: function (t, i, n) {
            t[PL](i, n)
        },
        forEach: function (t, i) {
            for (var n in this[QG]) {
                var e = this[tz][n],
                s = this[QG][n];
                t[Vr](i, e, s)
            }
        },
        _jy: function (t) {
            this.forEach(function (i, n) {
                var e = n.node,
                s = i.x + (n.x - i.x) * t,
                r = i.y + (n.y - i.y) * t;
                this[PL](e, s, r)
            },
            this)
        },
        stop: function () {
            this._n0nimate && this[iz]._la()
        },
        start: function (t) {
            this._n0nimate ? (this[iz]._la(), this[iz]._iq = this[sD], this[iz][nz] = this.animationType, this._n0nimate[ez] = this._onfinish) : this[iz] = new cY(this._jy, this, this[sD], this.animationType),
            this._n0nimate._kr(t)
        }
    },
    K(Hq[sh], {
        locations: {
            get: function () {
                return this._f0
            },
            set: function (t) {
                this._f0 != t && this._74(t)
            }
        }
    });
    var Yq = function (t) {
        function i(i) {
            var n = !1;
            return i[sz](function (i) {
                return t[a_](i) && !i.isLooped() ? (n = !0, !1) : void 0
            }),
            n
        }
        function n(i) {
            var n = !1;
            return i[Nd](function (i) {
                return t.contains(i) && !i[Uu]() ? (n = !0, !1) : void 0
            }),
            n
        }
        var e, s = new Qz;
        return t[au](function (t) {
            t instanceof xW && (i(t) ? !e && n(t) && (e = t) : s.add(t))
        }),
        s[Hf]() && e && s.add(e),
        s
    },
    Uq = function (t, i, n, e, s, r) {
        if (i instanceof SH) return t(i, n, e, s, r),
        i;
        if (i instanceof zW) {
            var h = new Qz;
            i._kjModel[au](function (t) {
                return i[K_](t) ? t._ib() && t._hb && t.hasChildren() ? void (t[ZT] && (t.$location[mO] = !1)) : void h.add(t) : void 0
            }),
            i = h
        } else if (Array[mc](i)) i = new Qz(i);
        else if (!(i instanceof Qz)) throw new Error(rz);
        return i = Yq(i, e),
        i[au](function (i) {
            t(i, n, e, s, r)
        }),
        i
    },
    Wq = function (t, i, n, e, s) {
        return Uq(Vq, t, i, n, e, s)
    },
    qq = function (t, i, n, e, s) {
        return Uq(Xq, t, i, n, e, s)
    };
    os[sh][hz] = function (t, i, n, e) {
        Wq(this, t, i, n, e)
    },
    os[sh][az] = function (t, i, n, e) {
        t instanceof Object && 1 == arguments[qr] && (i = t.scope),
        qq(this, t, i, n, e)
    },
    dY.forEachByTopoDepthFirstSearch = Wq,
    dY[az] = qq;
    var Vq = function (t, i, n, e, s) {
        function r(t, i, n, e, s, h, a, o) {
            t._marker = h,
            e || i[Vr](n, t, o, a),
            zr(t,
            function (o) {
                r(o, i, n, e, s, h, a + 1, t)
            },
            o, s, h, n),
            e && i[Vr](n, t, o, a)
        }
        r(t, i, n, e, s, {},
        0)
    },
    Xq = function (t, i, n, e, s) {
        function r(t, i, n, e, s, h, a) {
            var o, f = t[qr];
            t.forEach(function (t, r) {
                var u = t.v;
                u[Dd] = h,
                e || i[Vr](n, u, t[oz], a, r, f),
                zr(u,
                function (t) {
                    o || (o = []),
                    t[Dd] = h,
                    o[th]({
                        v: t,
                        _from: u
                    })
                },
                u, s, h, n)
            }),
            o && r(o, i, n, e, s, h, a + 1),
            e && t.forEach(function (t, e) {
                i[Vr](n, t.v, t[oz], a, e, f)
            })
        }
        r([{
            v: t
        }], i, n, e, s, {},
        0)
    };
    dY[fz] = X,
    dY.log = ti,
    dY[Qo] = ni,
    dY.trace = ii,
    dY[uz] = $z,
    dY[cz] = Nz,
    dY[_z] = Gz,
    dY[dz] = zz,
    dY[lz] = Hz,
    dY[vz] = Uz,
    dY[bz] = Yz,
    dY[yz] = Wz,
    dY.DefaultStyles = GW,
    dY[gz] = Jz,
    dY[XL] = OW,
    dY[mz] = lY,
    dY[xz] = tU,
    dY.Graph = zW,
    dY[Ez] = wW,
    dY[pz] = NW,
    dY[kz] = ys,
    dY[ID] = bs,
    dY[wz] = BW,
    dY[Tz] = $W,
    dY[Oz] = pW,
    dY.Path = KY,
    dY[rR] = LY,
    dY.InteractionEvent = Pr,
    dY[Ck] = gW,
    dY[KR] = xW,
    dY[KL] = mW,
    dY[Mz] = os,
    dY[Sz] = Bq,
    dY[jz] = Sq,
    dY[lh] = Iz;
    var Zq = Az;
    return dY[Vp] = Cz,
    dY[Kp] = Rz,
    dY.copyright = "Copyright © 2018 Qunee.com",
    dY.css = vi,
    dY.IDrawable = HW,
    ti = function () { },
    dY.publishDate = Lz,
    dY
} (window, document);