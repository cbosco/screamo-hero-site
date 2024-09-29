var o = Object.defineProperty;
var d = (e, t, s) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var a = (e, t, s) => d(e, typeof t != "symbol" ? t + "" : t, s);
import { BOARD_POSITION_UPDATED as l } from "./game/events.js";
class v {
  constructor(t, s, c) {
    a(this, "canvas");
    a(this, "ctx");
    a(this, "fullWidth");
    const i = document.getElementById(t);
    if (!i)
      throw new Error(`Canvas with id "${t}" not found.`);
    if (this.canvas = i, this.ctx = this.canvas.getContext("2d"), !this.ctx)
      throw new Error("Failed to get 2D context");
    this.fullWidth = c, s.addEventListener(l, (r) => {
      const n = r.detail, h = { x: -1 * n.x, y: -1 * n.y };
      this.offset(h);
    });
  }
  offset(t) {
    this.ctx.translate(t.x, t.y);
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
