var H = Object.defineProperty;
var U = (e, t, i) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var C = (e, t, i) => (U(e, typeof t != "symbol" ? t + "" : t, i), i), B = (e, t, i) => {
  if (!t.has(e))
    throw TypeError("Cannot " + i);
};
var g = (e, t, i) => (B(e, t, "read from private field"), i ? i.call(e) : t.get(e)), I = (e, t, i) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, i);
}, T = (e, t, i, n) => (B(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const L = [1, 1.5, 2, 2.5, 3, 5, 8, 12];
function Y(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, i) {
    var n = e.get(t);
    n ? n.push(i) : e.set(t, [i]);
  }, off: function(t, i) {
    var n = e.get(t);
    n && (i ? n.splice(n.indexOf(i) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, i) {
    var n = e.get(t);
    n && n.slice().map(function(a) {
      a(i);
    }), (n = e.get("*")) && n.slice().map(function(a) {
      a(t, i);
    });
  } };
}
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, F = "Expected a function", z = 0 / 0, q = "[object Symbol]", J = /^\s+|\s+$/g, K = /^[-+]0x[0-9a-f]+$/i, Q = /^0b[01]+$/i, V = /^0o[0-7]+$/i, tt = parseInt, et = typeof W == "object" && W && W.Object === Object && W, it = typeof self == "object" && self && self.Object === Object && self, nt = et || it || Function("return this")(), at = Object.prototype, st = at.toString, rt = Math.max, ot = Math.min, _ = function() {
  return nt.Date.now();
};
function ht(e, t, i) {
  var n, a, h, c, s, m, r = 0, l = !1, p = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(F);
  t = A(t) || 0, P(i) && (l = !!i.leading, p = "maxWait" in i, h = p ? rt(A(i.maxWait) || 0, t) : h, w = "trailing" in i ? !!i.trailing : w);
  function v(d) {
    var S = n, E = a;
    return n = a = void 0, r = d, c = e.apply(E, S), c;
  }
  function x(d) {
    return r = d, s = setTimeout(u, t), l ? v(d) : c;
  }
  function o(d) {
    var S = d - m, E = d - r, Z = t - S;
    return p ? ot(Z, h - E) : Z;
  }
  function f(d) {
    var S = d - m, E = d - r;
    return m === void 0 || S >= t || S < 0 || p && E >= h;
  }
  function u() {
    var d = _();
    if (f(d))
      return M(d);
    s = setTimeout(u, o(d));
  }
  function M(d) {
    return s = void 0, w && n ? v(d) : (n = a = void 0, c);
  }
  function X() {
    s !== void 0 && clearTimeout(s), r = 0, n = m = a = s = void 0;
  }
  function G() {
    return s === void 0 ? c : M(_());
  }
  function j() {
    var d = _(), S = f(d);
    if (n = arguments, a = this, m = d, S) {
      if (s === void 0)
        return x(m);
      if (p)
        return s = setTimeout(u, t), v(m);
    }
    return s === void 0 && (s = setTimeout(u, t)), c;
  }
  return j.cancel = X, j.flush = G, j;
}
function ct(e, t, i) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(F);
  return P(i) && (n = "leading" in i ? !!i.leading : n, a = "trailing" in i ? !!i.trailing : a), ht(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
function P(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function lt(e) {
  return !!e && typeof e == "object";
}
function ft(e) {
  return typeof e == "symbol" || lt(e) && st.call(e) == q;
}
function A(e) {
  if (typeof e == "number")
    return e;
  if (ft(e))
    return z;
  if (P(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = P(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(J, "");
  var i = Q.test(e);
  return i || V.test(e) ? tt(e.slice(2), i ? 2 : 8) : K.test(e) ? z : +e;
}
var R = ct;
function ut({
  pointWidth: e,
  timeSpacing: t,
  scaleSpacing: i,
  scaleHeight: n,
  startTime: a,
  endTime: h,
  drawLine: c,
  drawText: s
}) {
  const m = t / i;
  let r, l;
  switch (t) {
    case 1:
      r = 0.5, l = 5;
      break;
    case 1.5:
      r = 1, l = 10;
      break;
    case 2:
      r = 1, l = 10;
      break;
    case 2.5:
      r = 1, l = 10;
      break;
    case 3:
      r = 1, l = 10;
      break;
    case 5:
      r = 2, l = 20;
      break;
    case 8:
      r = 3, l = 30;
      break;
    case 12:
      r = 4, l = 40;
      break;
    default:
      throw new Error(`Unsupported zoom level: ${t}`);
  }
  let p = Math.floor(a / r) * r, w = Math.floor(h / r) * r;
  for (let v = p; v <= w; v += r) {
    const x = v % l === 0 ? n.height5 : v % (l / 2) === 0 ? n.height3 : n.height1, o = (v - a) / m - e;
    if (c(o, x), x === n.height5) {
      const f = N(v);
      s(o, x + 13, f);
    }
  }
}
function N(e) {
  const t = Math.floor(e / 60 / 60), i = Math.floor(e / 60), n = Math.floor(e % 60);
  return `${t ? t.toString().padStart(2, "0") + ":" : ""}${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
var dt = gt;
function D(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function gt(e, t, i) {
  i || (i = D);
  var n = mt(e, t, i);
  if (n === -1)
    return -1;
  for (; n < e.length; n++) {
    var a = i(e[n], t);
    if (a >= 0)
      return n;
  }
  return -1;
}
function mt(e, t, i) {
  i || (i = D);
  for (var n = e.length, a = n - 1, h = 0, c = -1; a >= h && h >= 0 && a < n; ) {
    c = Math.floor((a + h) / 2);
    var s = i(e[c], t);
    if (s === 0)
      return c;
    s >= 0 ? a = c - 1 : h = c + 1;
  }
  return c;
}
const vt = {
  fill: !1,
  bgColor: "rgba(0,0,0,0.5)",
  textColor: "#ffffff",
  scaleColor: "#ffffff",
  areaBgColor: "#ffffff55",
  pointColor: "#00aeec",
  pointWidth: 3,
  scaleSpacing: 7,
  fps: 120,
  zoom: 2,
  maxZoom: 7,
  minZoom: 1
};
var y, $, b, O, k;
class Ct {
  constructor(t, i) {
    C(this, "$canvas");
    C(this, "canvasContext");
    I(this, y, void 0);
    C(this, "currentTime");
    C(this, "areas");
    C(this, "waveform");
    I(this, $, void 0);
    I(this, b, void 0);
    C(this, "scaleSpacing");
    C(this, "bgColor");
    I(this, O, void 0);
    C(this, "pointWidth");
    C(this, "pointColor");
    C(this, "textColor");
    C(this, "scaleColor");
    C(this, "areaBgColor");
    I(this, k, void 0);
    C(this, "fps");
    if (!t)
      throw new Error("canvas id is required!");
    this.$canvas = document.getElementById(t), this.canvasContext = this.$canvas.getContext(
      "2d"
    );
    const {
      fill: n,
      width: a,
      height: h,
      bgColor: c,
      textColor: s,
      scaleColor: m,
      areaBgColor: r,
      pointColor: l,
      pointWidth: p,
      scaleSpacing: w,
      fps: v,
      zoom: x,
      maxZoom: o,
      minZoom: f
    } = { ...vt, ...i };
    if (x < f || x > o || x % 1 !== 0)
      throw new Error(
        `zoom must be minZoom ~ maxZoom(${f} ~1 ${o}), and must be an integer`
      );
    if (o < 1 || o > 9 || o % 1 !== 0)
      throw new Error("maxZoom must be 1 ~ 9, and must be an integer");
    if (f < 1 || f > 9 || f % 1 !== 0)
      throw new Error("minZoom must be 1 ~ 9, and must be an integer");
    if (o < f)
      throw new Error("maxZoom must be greater than minZoom");
    if (n) {
      const u = this.$canvas.parentElement;
      this.$canvas.width = u.clientWidth, this.$canvas.height = u.clientHeight, new ResizeObserver(
        R(this._onParentResize.bind(this), 200)
      ).observe(u);
    } else
      a && (this.$canvas.width = a), h && (this.$canvas.height = h);
    T(this, k, !1), T(this, y, Y()), this.currentTime = 0, T(this, $, []);
    for (let u = f - 1; u < o; u++)
      g(this, $).push(L[u]);
    T(this, b, L[x - 1]), this.scaleSpacing = w, T(this, O, {
      height6: this.$canvas.height / 2,
      height5: this.$canvas.height / 3,
      height4: this.$canvas.height / 4,
      height3: this.$canvas.height / 5,
      height2: this.$canvas.height / 8 + 1,
      height1: this.$canvas.height / 10 + 1
    }), this.bgColor = c, this.pointWidth = p, this.pointColor = l, this.textColor = s, this.scaleColor = m, this.areaBgColor = r, this.fps = v;
  }
  draw({ currentTime: t, areas: i, waveform: n, _privateFlag: a }) {
    if (g(this, k) && !a) {
      console.log("dragging so failing");
      return;
    }
    this.currentTime = t, this.areas = i || [], this.waveform = n || [];
    const h = Math.ceil(this.$canvas.width / this.scaleSpacing), c = h * g(this, b), s = this.currentTime - c / 2, m = this.currentTime + c / 2, r = this.$canvas.width / 2, l = c / this.$canvas.width;
    this.clear(), this.drawArea(0, 0, this.$canvas.width, this.$canvas.height, this.bgColor), this.areas.forEach((o) => {
      const f = o.startTime < s ? 0 : Math.floor((o.startTime - s) / l), u = o.endTime > m ? this.$canvas.width : Math.floor((o.endTime - s) / l);
      this.drawArea(
        f,
        0,
        u,
        this.$canvas.height,
        o.bgColor || this.areaBgColor
      );
    }), this.canvasContext.beginPath();
    let p = 0, w = 0, v = Math.max(1, Math.min(Math.floor(g(this, b)), 10)), x = dt(this.waveform, [s - 1, 0], (o, f) => {
      const u = o[0] - f[0];
      return u < 0 ? -1 : u > 0 ? 1 : 0;
    });
    x === -1 && (x = this.waveform.length);
    for (let o = x; o < this.waveform.length; o++) {
      const f = this.waveform[o];
      if (f[0] > m + 1)
        break;
      if (w += 1, p += f[1], w == v) {
        const u = (f[0] - s + 0.025) / l, M = (this.$canvas.height - (this.$canvas.height - 10) * (p / w / 100)) / 2;
        this.canvasContext.moveTo(u, M), this.canvasContext.lineTo(u, this.$canvas.height - M), p = 0, w = 0;
      }
    }
    return this.canvasContext.strokeStyle = this.areaBgColor, this.canvasContext.lineWidth = Math.min(1, 0.05 / l * v), this.canvasContext.stroke(), ut.bind(this)({
      pointWidth: this.pointWidth,
      timePerPixel: l,
      scaleHeight: g(this, O),
      scaleSpacing: this.scaleSpacing,
      timeSpacing: g(this, b),
      screenScaleCount: h,
      startTime: s,
      endTime: m,
      drawLine: this.drawLine.bind(this),
      drawText: this.drawText.bind(this)
    }), this.drawTimelineScale(g(this, b)), this.drawLine(
      r - this.pointWidth / 2,
      this.$canvas.height,
      this.pointWidth,
      this.pointColor
    ), this.drawArea(r - 54, 4, r + 54, 18, this.pointColor), this.drawText(
      r,
      6,
      N(this.currentTime),
      this.textColor,
      "center",
      "top"
    ), this.$canvas.onwheel = this._onZoom.bind(this), this.$canvas.onmousedown = this._onDrag.bind(this), { startTime: s, endTime: m };
  }
  _onDrag({ clientX: t }) {
    T(this, k, !0);
    let i = 0;
    document.onmousemove = R(
      (n) => {
        const a = n.clientX - t, h = Math.max(
          0.01,
          this.currentTime - g(this, b) / this.scaleSpacing * (a - i)
        );
        i = a, this.draw({
          currentTime: h,
          areas: this.areas,
          waveform: this.waveform,
          _privateFlag: !0
        });
      },
      g(this, b) === 1 ? 100 : 1e3 / this.fps
    ), document.onmouseup = () => {
      document.onmousemove = null, document.onmouseup = null, T(this, k, !1), this.emit("timeUpdate", this.currentTime);
    };
  }
  _onZoom(t) {
    t.preventDefault();
    const i = g(this, $).findIndex(
      (n) => n === g(this, b)
    );
    t.deltaY < 0 && i > 0 ? (T(this, b, g(this, $)[i - 1]), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
      _privateFlag: !0
    })) : t.deltaY > 0 && i < g(this, $).length - 1 && (T(this, b, g(this, $)[i + 1]), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
      _privateFlag: !0
    }));
  }
  _onParentResize() {
    const t = this.$canvas.parentNode;
    !t || (this.$canvas.width = t.clientWidth, this.$canvas.height = t.clientHeight, T(this, O, {
      height6: this.$canvas.height / 2,
      height5: this.$canvas.height / 3,
      height4: this.$canvas.height / 4,
      height3: this.$canvas.height / 5,
      height2: this.$canvas.height / 8,
      height1: this.$canvas.height / 10
    }), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform
    }));
  }
  clear() {
    this.canvasContext && this.canvasContext.clearRect(
      0,
      0,
      this.$canvas.width,
      this.$canvas.height
    ), this.$canvas && (this.$canvas.onwheel = null, this.$canvas.onmousedown = null);
  }
  drawTimelineScale(t) {
    let i = t < 60 ? `${t}s` : `${t / 60}min`;
    this.drawText(
      this.scaleSpacing + 12,
      9,
      `${i}`,
      this.textColor,
      "left",
      "middle"
    ), this.canvasContext.beginPath(), this.canvasContext.moveTo(5, 6), this.canvasContext.lineTo(5, 10), this.canvasContext.lineTo(this.scaleSpacing + 7, 10), this.canvasContext.lineTo(this.scaleSpacing + 7, 6), this.canvasContext.strokeStyle = this.scaleColor, this.canvasContext.lineWidth = 1.5, this.canvasContext.stroke();
  }
  drawLine(t, i, n = 1, a = this.scaleColor) {
    this.canvasContext.beginPath(), this.canvasContext.moveTo(t, this.$canvas.height), this.canvasContext.lineTo(t, this.$canvas.height - i), this.canvasContext.strokeStyle = a, this.canvasContext.lineWidth = n, this.canvasContext.stroke();
  }
  drawText(t, i, n, a = this.textColor, h = "center", c = "alphabetic") {
    this.canvasContext.beginPath(), this.canvasContext.font = "11px Franklin gothic medium", this.canvasContext.fillStyle = a, this.canvasContext.textAlign = h, this.canvasContext.textBaseline = c, this.canvasContext.fillText(n, t, i);
  }
  drawArea(t, i, n, a, h) {
    this.canvasContext.beginPath(), this.canvasContext.rect(t, i, n - t, a - i), this.canvasContext.fillStyle = h, this.canvasContext.fill();
  }
  on(t, i) {
    g(this, y).on(t, i);
  }
  off(t, i) {
    g(this, y).off(t, i);
  }
  emit(...t) {
    g(this, y).emit(...t);
  }
}
y = new WeakMap(), $ = new WeakMap(), b = new WeakMap(), O = new WeakMap(), k = new WeakMap();
export {
  Ct as default
};
