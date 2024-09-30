var u = Object.defineProperty;
var p = (n, t, i) => t in n ? u(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i;
var s = (n, t, i) => p(n, typeof t != "symbol" ? t + "" : t, i);
import { Character as c } from "./Character.js";
import { Ground as d } from "./Ground.js";
import { GROUND_HIT as G, BOARD_END as g, BOARD_POSITION_UPDATED as x } from "./events.js";
const r = 5, m = 5, _ = 80, D = 10, N = 200, E = r, M = 30;
class I {
  constructor(t, i, o = 150) {
    s(this, "eventDispatcher");
    s(this, "boardPosition");
    s(this, "hero");
    s(this, "grounds");
    s(this, "winCondition");
    s(this, "groundY");
    this.eventDispatcher = t, this.winCondition = { x: i, y: 0 }, this.groundY = o, this.reset();
  }
  makeGrounds() {
    let t = 100;
    const o = [new d({ x: 0, y: this.groundY - r }, t, r)];
    for (; t < this.winCondition.x; ) {
      const e = Math.max(m, Math.floor(Math.random() * _)), h = Math.max(D, Math.floor(Math.random() * N)), a = Math.max(E, Math.floor(Math.random() * M));
      o.push(new d({ x: t + e, y: this.groundY - a }, h, a)), t += e + h;
    }
    return o;
  }
  getBoardPosition() {
    return this.boardPosition;
  }
  // Get all the graphics
  getGraphics() {
    return [this.hero.getGraphic()].concat(this.grounds.map((t) => t.getGraphic()));
  }
  pause() {
    alert("paused!");
  }
  reset() {
    this.boardPosition = { x: 0, y: 0 }, this.hero = new c(50, this.groundY - r), this.grounds = this.makeGrounds();
  }
  // updatePosition is actually a velocity vector
  updatePosition(t) {
    this.hero.getIsAirborne() || this.hero.updatePosition(t);
  }
  // timer update
  update(t) {
    const i = this.hero.getBounds();
    this.hero.update(
      t,
      this.groundY,
      this.grounds.map((e) => e.getBounds())
    );
    const o = this.hero.getBounds();
    o.position.y + o.height === this.groundY && this.eventDispatcher.dispatchEvent(new CustomEvent(G)), o.position.x + o.width > this.winCondition.x && this.eventDispatcher.dispatchEvent(new CustomEvent(g)), o.position.x - i.position.x !== 0 && (this.boardPosition.x = o.position.x, this.eventDispatcher.dispatchEvent(
      new CustomEvent(x, {
        detail: {
          x: o.position.x - i.position.x,
          y: 0
        }
      })
    ));
  }
}
export {
  I as Game
};
