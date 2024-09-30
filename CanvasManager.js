var o = Object.defineProperty;
var f = (e, t, s) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var a = (e, t, s) => f(e, typeof t != "symbol" ? t + "" : t, s);
import { BOARD_POSITION_UPDATED as d } from "./game/events.js";
class v {
  constructor(t, s, n) {
    a(this, "canvas");
    a(this, "ctx");
    a(this, "fullWidth");
    const r = document.getElementById(t);
    if (!r)
      throw new Error(`Canvas with id "${t}" not found.`);
    if (this.canvas = r, this.ctx = this.canvas.getContext("2d"), !this.ctx)
      throw new Error("Failed to get 2D context");
    this.fullWidth = n, s.addEventListener(d, (c) => {
      const i = c.detail, h = { x: -1 * i.x, y: -1 * i.y };
      this.offset(h);
    });
  }
  offset(t) {
    this.ctx.translate(t.x, t.y);
  }
  resetOffset() {
    this.ctx.resetTransform();
  }
  // Method to draw a graphic
  draw(t) {
    t.draw(this.ctx);
  }
  // Optional utility method to clear the canvas
  clear() {
    this.ctx.clearRect(0, 0, this.fullWidth, this.canvas.height);
  }
}
export {
  v as CanvasManager
};
