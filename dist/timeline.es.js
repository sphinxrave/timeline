var H = Object.defineProperty;
var U = (e, t, i) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var g = (e, t, i) => (U(e, typeof t != "symbol" ? t + "" : t, i), i), z = (e, t, i) => {
  if (!t.has(e))
    throw TypeError("Cannot " + i);
};
var u = (e, t, i) => (z(e, t, "read from private field"), i ? i.call(e) : t.get(e)), O = (e, t, i) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, i);
}, w = (e, t, i, n) => (z(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const A = [1, 1.5, 2, 2.5, 3, 5, 8, 12];
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
var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, D = "Expected a function", R = 0 / 0, q = "[object Symbol]", J = /^\s+|\s+$/g, K = /^[-+]0x[0-9a-f]+$/i, Q = /^0b[01]+$/i, V = /^0o[0-7]+$/i, tt = parseInt, et = typeof P == "object" && P && P.Object === Object && P, it = typeof self == "object" && self && self.Object === Object && self, nt = et || it || Function("return this")(), at = Object.prototype, st = at.toString, rt = Math.max, ot = Math.min, Z = function() {
  return nt.Date.now();
};
function ht(e, t, i) {
  var n, a, h, c, s, d, r = 0, l = !1, p = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(D);
  t = F(t) || 0, j(i) && (l = !!i.leading, p = "maxWait" in i, h = p ? rt(F(i.maxWait) || 0, t) : h, b = "trailing" in i ? !!i.trailing : b);
  function v(m) {
    var k = n, W = a;
    return n = a = void 0, r = m, c = e.apply(W, k), c;
  }
  function x(m) {
    return r = m, s = setTimeout(T, t), l ? v(m) : c;
  }
  function o(m) {
    var k = m - d, W = m - r, L = t - k;
    return p ? ot(L, h - W) : L;
  }
  function f(m) {
    var k = m - d, W = m - r;
    return d === void 0 || k >= t || k < 0 || p && W >= h;
  }
  function T() {
    var m = Z();
    if (f(m))
      return y(m);
    s = setTimeout(T, o(m));
  }
  function y(m) {
    return s = void 0, b && n ? v(m) : (n = a = void 0, c);
  }
  function $() {
    s !== void 0 && clearTimeout(s), r = 0, n = d = a = s = void 0;
  }
  function B() {
    return s === void 0 ? c : y(Z());
  }
  function _() {
    var m = Z(), k = f(m);
    if (n = arguments, a = this, d = m, k) {
      if (s === void 0)
        return x(d);
      if (p)
        return s = setTimeout(T, t), v(d);
    }
    return s === void 0 && (s = setTimeout(T, t)), c;
  }
  return _.cancel = $, _.flush = B, _;
}
function ct(e, t, i) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(D);
  return j(i) && (n = "leading" in i ? !!i.leading : n, a = "trailing" in i ? !!i.trailing : a), ht(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
function j(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function lt(e) {
  return !!e && typeof e == "object";
}
function ft(e) {
  return typeof e == "symbol" || lt(e) && st.call(e) == q;
}
function F(e) {
  if (typeof e == "number")
    return e;
  if (ft(e))
    return R;
  if (j(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = j(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(J, "");
  var i = Q.test(e);
  return i || V.test(e) ? tt(e.slice(2), i ? 2 : 8) : K.test(e) ? R : +e;
}
var N = ct;
function mt({
  pointWidth: e,
  timeSpacing: t,
  scaleSpacing: i,
  scaleHeight: n,
  startTime: a,
  endTime: h,
  drawLine: c,
  drawText: s
}) {
  const d = t / i;
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
  let p = Math.floor(a / r) * r, b = Math.floor(h / r) * r;
  for (let v = p; v <= b; v += r) {
    const x = v % l === 0 ? n.height5 : v % (l / 2) === 0 ? n.height3 : n.height1, o = (v - a) / d - e;
    if (c(o, x), x === n.height5) {
      const f = X(v);
      s(o, x + 13, f);
    }
  }
}
function X(e) {
  const t = Math.floor(e / 60 / 60), i = Math.floor(e / 60), n = Math.floor(e % 60);
  return `${t ? t.toString().padStart(2, "0") + ":" : ""}${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
var ut = dt;
function G(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function dt(e, t, i) {
  i || (i = G);
  var n = gt(e, t, i);
  if (n === -1)
    return -1;
  for (; n < e.length; n++) {
    var a = i(e[n], t);
    if (a >= 0)
      return n;
  }
  return -1;
}
function gt(e, t, i) {
  i || (i = G);
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
var M, S, C, E, I;
class Ct {
  constructor(t, i) {
    g(this, "$canvas");
    g(this, "canvasContext");
    O(this, M, void 0);
    g(this, "currentTime");
    g(this, "areas");
    g(this, "waveform");
    O(this, S, void 0);
    O(this, C, void 0);
    g(this, "scaleSpacing");
    g(this, "bgColor");
    O(this, E, void 0);
    g(this, "pointWidth");
    g(this, "pointColor");
    g(this, "textColor");
    g(this, "scaleColor");
    g(this, "areaBgColor");
    O(this, I, void 0);
    g(this, "fps");
    g(this, "startTime");
    g(this, "endTime");
    if (!t)
      throw new Error("canvas id is required!");
    typeof t == "string" ? this.$canvas = document.getElementById(t) : this.$canvas = t, this.canvasContext = this.$canvas.getContext(
      "2d"
    );
    const {
      fill: n,
      width: a,
      height: h,
      bgColor: c,
      textColor: s,
      scaleColor: d,
      areaBgColor: r,
      pointColor: l,
      pointWidth: p,
      scaleSpacing: b,
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
      const $ = this.$canvas.parentElement;
      this.$canvas.width = $.clientWidth, this.$canvas.height = $.clientHeight, new ResizeObserver(
        N(this._onParentResize.bind(this), 200)
      ).observe($);
    } else
      a && (this.$canvas.width = a), h && (this.$canvas.height = h);
    w(this, I, !1), w(this, M, Y()), this.currentTime = 0, w(this, S, []);
    for (let $ = f - 1; $ < o; $++)
      u(this, S).push(A[$]);
    w(this, C, A[x - 1]), this.scaleSpacing = b, w(this, E, {
      height6: this.$canvas.height / 2,
      height5: this.$canvas.height / 3,
      height4: this.$canvas.height / 4,
      height3: this.$canvas.height / 5,
      height2: this.$canvas.height / 8 + 1,
      height1: this.$canvas.height / 10 + 1
    }), this.bgColor = c, this.pointWidth = p, this.pointColor = l, this.textColor = s, this.scaleColor = d, this.areaBgColor = r, this.fps = v;
    const y = Math.ceil(this.$canvas.width / this.scaleSpacing) * u(this, C);
    this.startTime = this.currentTime - y / 2, this.endTime = this.currentTime + y / 2;
  }
  draw({ currentTime: t, areas: i, waveform: n, _privateFlag: a }) {
    if (u(this, I) && !a) {
      console.log("dragging so failing");
      return;
    }
    this.currentTime = t, this.areas = i || [], this.waveform = n || [];
    const h = Math.ceil(this.$canvas.width / this.scaleSpacing), c = h * u(this, C), s = this.currentTime - c / 2, d = this.currentTime + c / 2, r = this.$canvas.width / 2, l = c / this.$canvas.width;
    a && this.emit("drag", s, d), this.clear(), this.drawArea(0, 0, this.$canvas.width, this.$canvas.height, this.bgColor), this.areas.forEach((o) => {
      const f = o.startTime < s ? 0 : Math.floor((o.startTime - s) / l), T = o.endTime > d ? this.$canvas.width : Math.floor((o.endTime - s) / l);
      this.drawArea(
        f,
        0,
        T,
        this.$canvas.height,
        o.bgColor || this.areaBgColor
      );
    }), this.canvasContext.beginPath();
    let p = 0, b = 0, v = Math.max(1, Math.min(Math.floor(u(this, C)), 10)), x = ut(this.waveform, [s - 1, 0], (o, f) => {
      const T = o[0] - f[0];
      return T < 0 ? -1 : T > 0 ? 1 : 0;
    });
    x === -1 && (x = this.waveform.length);
    for (let o = x; o < this.waveform.length; o++) {
      const f = this.waveform[o];
      if (f[0] > d + 1)
        break;
      if (b += 1, p += f[1], b == v) {
        const T = (f[0] - s + 0.025) / l, y = (this.$canvas.height - (this.$canvas.height - 10) * (p / b / 100)) / 2;
        this.canvasContext.moveTo(T, y), this.canvasContext.lineTo(T, this.$canvas.height - y), p = 0, b = 0;
      }
    }
    return this.canvasContext.strokeStyle = this.areaBgColor, this.canvasContext.lineWidth = Math.min(1, 0.05 / l * v), this.canvasContext.stroke(), mt.bind(this)({
      pointWidth: this.pointWidth,
      timePerPixel: l,
      scaleHeight: u(this, E),
      scaleSpacing: this.scaleSpacing,
      timeSpacing: u(this, C),
      screenScaleCount: h,
      startTime: s,
      endTime: d,
      drawLine: this.drawLine.bind(this),
      drawText: this.drawText.bind(this)
    }), this.drawTimelineScale(u(this, C)), this.drawLine(
      r - this.pointWidth / 2,
      this.$canvas.height,
      this.pointWidth,
      this.pointColor
    ), this.drawArea(r - 54, 4, r + 54, 18, this.pointColor), this.drawText(
      r,
      6,
      X(this.currentTime),
      this.textColor,
      "center",
      "top"
    ), this.$canvas.onwheel = this._onZoom.bind(this), this.$canvas.onmousedown = this._onDrag.bind(this), { startTime: s, endTime: d };
  }
  _onDrag({ clientX: t }) {
    w(this, I, !0);
    let i = 0;
    document.onmousemove = N(
      (n) => {
        const a = n.clientX - t, h = Math.max(
          0.01,
          this.currentTime - u(this, C) / this.scaleSpacing * (a - i)
        );
        i = a, this.draw({
          currentTime: h,
          areas: this.areas,
          waveform: this.waveform,
          _privateFlag: !0
        });
      },
      u(this, C) === 1 ? 100 : 1e3 / this.fps
    ), document.onmouseup = () => {
      document.onmousemove = null, document.onmouseup = null, w(this, I, !1), this.emit("timeUpdate", this.currentTime, this.startTime, this.endTime);
    };
  }
  _onZoom(t) {
    t.preventDefault();
    const i = u(this, S).findIndex(
      (n) => n === u(this, C)
    );
    t.deltaY < 0 && i > 0 ? (w(this, C, u(this, S)[i - 1]), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
      _privateFlag: !0
    })) : t.deltaY > 0 && i < u(this, S).length - 1 && (w(this, C, u(this, S)[i + 1]), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
      _privateFlag: !0
    }));
  }
  _onParentResize() {
    const t = this.$canvas.parentNode;
    !t || (this.$canvas.width = t.clientWidth, this.$canvas.height = t.clientHeight, w(this, E, {
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
    u(this, M).on(t, i);
  }
  off(t, i) {
    u(this, M).off(t, i);
  }
  emit(...t) {
    u(this, M).emit(...t);
  }
}
M = new WeakMap(), S = new WeakMap(), C = new WeakMap(), E = new WeakMap(), I = new WeakMap();
export {
  Ct as default
};
