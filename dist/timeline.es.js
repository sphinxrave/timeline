var X = Object.defineProperty;
var G = (e, t, i) => t in e ? X(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var v = (e, t, i) => (G(e, typeof t != "symbol" ? t + "" : t, i), i), z = (e, t, i) => {
  if (!t.has(e))
    throw TypeError("Cannot " + i);
};
var d = (e, t, i) => (z(e, t, "read from private field"), i ? i.call(e) : t.get(e)), I = (e, t, i) => {
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
    n && n.slice().map(function(s) {
      s(i);
    }), (n = e.get("*")) && n.slice().map(function(s) {
      s(t, i);
    });
  } };
}
var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, D = "Expected a function", R = 0 / 0, q = "[object Symbol]", J = /^\s+|\s+$/g, K = /^[-+]0x[0-9a-f]+$/i, Q = /^0b[01]+$/i, V = /^0o[0-7]+$/i, tt = parseInt, et = typeof P == "object" && P && P.Object === Object && P, it = typeof self == "object" && self && self.Object === Object && self, nt = et || it || Function("return this")(), st = Object.prototype, at = st.toString, rt = Math.max, ot = Math.min, _ = function() {
  return nt.Date.now();
};
function ht(e, t, i) {
  var n, s, c, r, a, u, o = 0, l = !1, C = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(D);
  t = F(t) || 0, j(i) && (l = !!i.leading, C = "maxWait" in i, c = C ? rt(F(i.maxWait) || 0, t) : c, b = "trailing" in i ? !!i.trailing : b);
  function g(m) {
    var k = n, W = s;
    return n = s = void 0, o = m, r = e.apply(W, k), r;
  }
  function p(m) {
    return o = m, a = setTimeout(T, t), l ? g(m) : r;
  }
  function h(m) {
    var k = m - u, W = m - o, B = t - k;
    return C ? ot(B, c - W) : B;
  }
  function f(m) {
    var k = m - u, W = m - o;
    return u === void 0 || k >= t || k < 0 || C && W >= c;
  }
  function T() {
    var m = _();
    if (f(m))
      return y(m);
    a = setTimeout(T, h(m));
  }
  function y(m) {
    return a = void 0, b && n ? g(m) : (n = s = void 0, r);
  }
  function $() {
    a !== void 0 && clearTimeout(a), o = 0, n = u = s = a = void 0;
  }
  function Z() {
    return a === void 0 ? r : y(_());
  }
  function L() {
    var m = _(), k = f(m);
    if (n = arguments, s = this, u = m, k) {
      if (a === void 0)
        return p(u);
      if (C)
        return a = setTimeout(T, t), g(u);
    }
    return a === void 0 && (a = setTimeout(T, t)), r;
  }
  return L.cancel = $, L.flush = Z, L;
}
function ct(e, t, i) {
  var n = !0, s = !0;
  if (typeof e != "function")
    throw new TypeError(D);
  return j(i) && (n = "leading" in i ? !!i.leading : n, s = "trailing" in i ? !!i.trailing : s), ht(e, t, {
    leading: n,
    maxWait: t,
    trailing: s
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
  return typeof e == "symbol" || lt(e) && at.call(e) == q;
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
  startTime: s,
  endTime: c,
  drawLine: r,
  drawText: a
}) {
  const u = t / i;
  let o, l;
  switch (t) {
    case 1:
      o = 0.5, l = 5;
      break;
    case 1.5:
      o = 1, l = 10;
      break;
    case 2:
      o = 1, l = 10;
      break;
    case 2.5:
      o = 1, l = 10;
      break;
    case 3:
      o = 1, l = 10;
      break;
    case 5:
      o = 2, l = 20;
      break;
    case 8:
      o = 3, l = 30;
      break;
    case 12:
      o = 4, l = 40;
      break;
    default:
      throw new Error(`Unsupported zoom level: ${t}`);
  }
  let C = Math.floor(s / o) * o, b = Math.floor(c / o) * o;
  for (let g = C; g <= b; g += o) {
    const p = g % l === 0 ? n.height5 : g % (l / 2) === 0 ? n.height3 : n.height1, h = (g - s) / u - e;
    if (r(h, p), p === n.height5) {
      const f = H(g);
      a(h, n.height6, f);
    }
  }
}
function H(e) {
  const t = Math.floor(e / 60 / 60), i = Math.floor(Math.abs(e) / 60), n = Math.floor(Math.abs(e) % 60);
  return `${t ? t.toString().padStart(2, "0") + ":" : ""}${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
var dt = ut;
function U(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function ut(e, t, i) {
  i || (i = U);
  var n = vt(e, t, i);
  if (n === -1)
    return -1;
  for (; n < e.length; n++) {
    var s = i(e[n], t);
    if (s >= 0)
      return n;
  }
  return -1;
}
function vt(e, t, i) {
  i || (i = U);
  for (var n = e.length, s = n - 1, c = 0, r = -1; s >= c && c >= 0 && s < n; ) {
    r = Math.floor((s + c) / 2);
    var a = i(e[r], t);
    if (a === 0)
      return r;
    a >= 0 ? s = r - 1 : c = r + 1;
  }
  return r;
}
const gt = {
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
var M, S, x, O, E;
class Ct {
  constructor(t, i) {
    v(this, "$canvas");
    v(this, "canvasContext");
    I(this, M, void 0);
    v(this, "currentTime");
    v(this, "areas");
    v(this, "waveform");
    I(this, S, void 0);
    I(this, x, void 0);
    v(this, "scaleSpacing");
    v(this, "bgColor");
    I(this, O, void 0);
    v(this, "pointWidth");
    v(this, "pointColor");
    v(this, "textColor");
    v(this, "scaleColor");
    v(this, "areaBgColor");
    I(this, E, void 0);
    v(this, "fps");
    v(this, "startTime");
    v(this, "endTime");
    if (!t)
      throw new Error("canvas id is required!");
    typeof t == "string" ? this.$canvas = document.getElementById(t) : this.$canvas = t, this.canvasContext = this.$canvas.getContext(
      "2d"
    );
    const {
      fill: n,
      width: s,
      height: c,
      bgColor: r,
      textColor: a,
      scaleColor: u,
      areaBgColor: o,
      pointColor: l,
      pointWidth: C,
      scaleSpacing: b,
      fps: g,
      zoom: p,
      maxZoom: h,
      minZoom: f
    } = { ...gt, ...i };
    if (p < f || p > h || p % 1 !== 0)
      throw new Error(
        `zoom must be minZoom ~ maxZoom(${f} ~1 ${h}), and must be an integer`
      );
    if (h < 1 || h > 9 || h % 1 !== 0)
      throw new Error("maxZoom must be 1 ~ 9, and must be an integer");
    if (f < 1 || f > 9 || f % 1 !== 0)
      throw new Error("minZoom must be 1 ~ 9, and must be an integer");
    if (h < f)
      throw new Error("maxZoom must be greater than minZoom");
    if (n) {
      const $ = this.$canvas.parentElement;
      this.$canvas.width = $.clientWidth, this.$canvas.height = $.clientHeight, new ResizeObserver(
        N(this._onParentResize.bind(this), 200)
      ).observe($);
    } else
      s && (this.$canvas.width = s), c && (this.$canvas.height = c);
    w(this, E, !1), w(this, M, Y()), this.currentTime = 0, w(this, S, []);
    for (let $ = f - 1; $ < h; $++)
      d(this, S).push(A[$]);
    w(this, x, A[p - 1]), this.scaleSpacing = b, w(this, O, {
      height6: this.$canvas.height / 2,
      height5: this.$canvas.height / 3,
      height4: this.$canvas.height / 4,
      height3: this.$canvas.height / 5,
      height2: this.$canvas.height / 8 + 1,
      height1: this.$canvas.height / 10 + 1
    }), this.bgColor = r, this.pointWidth = C, this.pointColor = l, this.textColor = a, this.scaleColor = u, this.areaBgColor = o, this.fps = g;
    const y = Math.ceil(this.$canvas.width / this.scaleSpacing) * d(this, x);
    this.startTime = this.currentTime - y / 2, this.endTime = this.currentTime + y / 2;
  }
  draw({ currentTime: t, areas: i, waveform: n, _privateFlag: s }) {
    if (d(this, E) && !s) {
      console.log("dragging so failing");
      return;
    }
    this.currentTime = t, this.areas = i || [], this.waveform = n || [];
    const c = Math.ceil(this.$canvas.width / this.scaleSpacing), r = c * d(this, x), a = this.currentTime - r / 2, u = this.currentTime + r / 2, o = this.$canvas.width / 2, l = r / this.$canvas.width;
    s && this.emit("drag", a, u), this.clear(), this.drawArea(0, 0, this.$canvas.width, this.$canvas.height, this.bgColor), this.areas.forEach((h) => {
      const f = h.startTime < a ? 0 : Math.floor((h.startTime - a) / l), T = h.endTime > u ? this.$canvas.width : Math.floor((h.endTime - a) / l);
      this.drawArea(
        f,
        0,
        T,
        this.$canvas.height,
        h.bgColor || this.areaBgColor
      );
    }), this.canvasContext.beginPath();
    let C = 0, b = 0, g = Math.max(1, Math.min(Math.floor(d(this, x)), 10)), p = dt(this.waveform, [a - 1, 0], (h, f) => {
      const T = h[0] - f[0];
      return T < 0 ? -1 : T > 0 ? 1 : 0;
    });
    p === -1 && (p = this.waveform.length);
    for (let h = p; h < this.waveform.length; h++) {
      const f = this.waveform[h];
      if (f[0] > u + 1)
        break;
      if (b += 1, C += f[1], b == g) {
        const T = (f[0] - a + 0.025) / l, y = (this.$canvas.height - (this.$canvas.height - 10) * (C / b / 100)) / 2;
        this.canvasContext.moveTo(T, y), this.canvasContext.lineTo(T, this.$canvas.height - y), C = 0, b = 0;
      }
    }
    return this.canvasContext.strokeStyle = this.areaBgColor, this.canvasContext.lineWidth = Math.min(1, 0.05 / l * g), this.canvasContext.stroke(), mt.bind(this)({
      pointWidth: this.pointWidth,
      timePerPixel: l,
      scaleHeight: d(this, O),
      scaleSpacing: this.scaleSpacing,
      timeSpacing: d(this, x),
      screenScaleCount: c,
      startTime: a,
      endTime: u,
      drawLine: this.drawLine.bind(this),
      drawText: this.drawText.bind(this)
    }), this.drawTimelineScale(d(this, x)), this.drawLine(
      o - this.pointWidth / 2,
      this.$canvas.height,
      this.pointWidth,
      this.pointColor
    ), this.drawArea(o - 54, 4, o + 54, 18, this.pointColor), this.drawText(
      o,
      6,
      H(this.currentTime),
      this.textColor,
      "center",
      "top"
    ), this.$canvas.onwheel = this._onZoom.bind(this), this.$canvas.onmousedown = this._onDrag.bind(this), { startTime: a, endTime: u };
  }
  _onDrag({ clientX: t }) {
    w(this, E, !0);
    let i = 0;
    const n = N(
      (c) => {
        const r = c.clientX - t, a = Math.max(
          0.01,
          this.currentTime - d(this, x) / this.scaleSpacing * (r - i)
        );
        i = r, this.draw({
          currentTime: a,
          areas: this.areas,
          waveform: this.waveform,
          _privateFlag: !0
        });
      },
      d(this, x) === 1 ? 100 : 1e3 / this.fps
    ), s = () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", s), w(this, E, !1), this.emit("timeUpdate", this.currentTime, this.startTime, this.endTime);
    };
    document.addEventListener("mousemove", n), document.addEventListener("mouseup", s);
  }
  _onZoom(t) {
    t.preventDefault();
    const i = d(this, S).findIndex(
      (n) => n === d(this, x)
    );
    t.deltaY < 0 && i > 0 ? (w(this, x, d(this, S)[i - 1]), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
      _privateFlag: !0
    })) : t.deltaY > 0 && i < d(this, S).length - 1 && (w(this, x, d(this, S)[i + 1]), this.draw({
      currentTime: this.currentTime,
      areas: this.areas,
      waveform: this.waveform,
      _privateFlag: !0
    }));
  }
  _onParentResize() {
    const t = this.$canvas.parentNode;
    !t || (this.$canvas.width = t.clientWidth, this.$canvas.height = t.clientHeight, w(this, O, {
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
  drawLine(t, i, n = 1, s = this.scaleColor) {
    this.canvasContext.beginPath(), this.canvasContext.moveTo(t, this.$canvas.height), this.canvasContext.lineTo(t, this.$canvas.height - i), this.canvasContext.strokeStyle = s, this.canvasContext.lineWidth = n, this.canvasContext.stroke();
  }
  drawText(t, i, n, s = this.textColor, c = "center", r = "alphabetic") {
    this.canvasContext.beginPath(), this.canvasContext.font = "11px Franklin gothic medium", this.canvasContext.fillStyle = s, this.canvasContext.textAlign = c, this.canvasContext.textBaseline = r, this.canvasContext.fillText(n, t, i);
  }
  drawArea(t, i, n, s, c) {
    this.canvasContext.beginPath(), this.canvasContext.rect(t, i, n - t, s - i), this.canvasContext.fillStyle = c, this.canvasContext.fill();
  }
  on(t, i) {
    d(this, M).on(t, i);
  }
  off(t, i) {
    d(this, M).off(t, i);
  }
  emit(...t) {
    d(this, M).emit(...t);
  }
}
M = new WeakMap(), S = new WeakMap(), x = new WeakMap(), O = new WeakMap(), E = new WeakMap();
export {
  Ct as default
};
