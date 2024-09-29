var o = Object.defineProperty;
var e = (h, t, i) => t in h ? o(h, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : h[t] = i;
var s = (h, t, i) => e(h, typeof t != "symbol" ? t + "" : t, i);
import { Rectangle as n } from "../shapes.js";
class c {
  constructor(t, i, r) {
    s(this, "position");
    s(this, "width");
    s(this, "height");
    s(this, "graphic");
    this.position = t, this.width = i, this.height = r, this.graphic = new n(t.x, t.y, i, r, "blue");
  }
  getGraphic() {
    return this.graphic;
  }
  getBounds() {
    return {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: this.width,
      height: this.height
    };
  }
}
export {
  c as Ground
};
