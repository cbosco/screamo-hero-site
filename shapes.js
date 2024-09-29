var a = Object.defineProperty;
var c = (s, i, h) => i in s ? a(s, i, { enumerable: !0, configurable: !0, writable: !0, value: h }) : s[i] = h;
var t = (s, i, h) => c(s, typeof i != "symbol" ? i + "" : i, h);
class d {
  constructor(i, h, l, o) {
    t(this, "x");
    t(this, "y");
    t(this, "radius");
    t(this, "color");
    this.x = i, this.y = h, this.radius = l, this.color = o;
  }
  draw(i) {
    i.beginPath(), i.arc(this.x, this.y, this.radius, 0, Math.PI * 2), i.fillStyle = this.color, i.fill(), i.closePath();
  }
}
class y {
  constructor(i, h, l, o, r) {
    t(this, "x");
    t(this, "y");
    t(this, "width");
    t(this, "height");
    t(this, "color");
    this.x = i, this.y = h, this.width = l, this.height = o, this.color = r;
  }
  draw(i) {
    i.fillStyle = this.color, i.fillRect(this.x, this.y, this.width, this.height);
  }
}
export {
  d as Circle,
  y as Rectangle
};
