var e = Object.defineProperty;
var r = (s, i, t) => i in s ? e(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var n = (s, i, t) => r(s, typeof i != "symbol" ? i + "" : i, t);
import { Circle as c } from "../shapes.js";
const l = 9.81 * 10, o = 6;
class x {
  constructor(i, t) {
    n(this, "position");
    n(this, "velocity");
    n(this, "graphic");
    n(this, "isAirborne");
    this.position = { x: i, y: t - 2 * o }, this.velocity = { x: 0, y: 0 }, this.isAirborne = !1, this.graphic = this.drawGraphic();
  }
  getGraphic() {
    return this.graphic;
  }
  update(i, t, y) {
    this.isAirborne || (this.velocity.x = 0), this.velocity.y += l * i, this.position.x += this.velocity.x * i, this.position.y += this.velocity.y * i;
    const h = this.getBounds();
    h.position.y + h.height > t && (this.position.y = t - h.height, this.velocity.y = 0, this.isAirborne = !1), y.forEach((p) => {
      this.isCollidingWith(h, p) && (this.handleCollision(h, p), this.isAirborne = !1);
    }), this.graphic = this.drawGraphic();
  }
  updatePosition(i) {
    this.velocity.x = i.x, this.velocity.y = -i.y, this.isAirborne = !0, this.graphic = this.drawGraphic();
  }
  drawGraphic() {
    return new c(this.position.x + o, this.position.y + o, o, "red");
  }
  getBounds() {
    return {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: o * 2,
      height: o * 2
    };
  }
  getIsAirborne() {
    return this.isAirborne;
  }
  // Check if this object is colliding with another object
  isCollidingWith(i, t) {
    return i.position.x < t.position.x + t.width && i.position.x + i.width > t.position.x && i.position.y < t.position.y + t.height && i.position.y + i.height > t.position.y;
  }
  // Handle collision with another object (basic example: stop movement)
  handleCollision(i, t) {
    this.velocity.y > 0 && i.position.y + i.height > t.position.y && i.position.y < t.position.y ? (this.position.y = t.position.y - i.height, this.velocity.y = 0) : this.velocity.y < 0 && i.position.y < t.position.y + t.height && i.position.y + i.height > t.position.y && (this.position.y = t.position.y + t.height, this.velocity.y = 0);
  }
}
export {
  x as Character
};
