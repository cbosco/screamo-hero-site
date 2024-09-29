var u = Object.defineProperty;
var p = (s, t, o) => t in s ? u(s, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[t] = o;
var n = (s, t, o) => p(s, typeof t != "symbol" ? t + "" : t, o);
import { Character as c } from "./Character.js";
import { Ground as d } from "./Ground.js";
import { GROUND_HIT as G, BOARD_END as g, BOARD_POSITION_UPDATED as x } from "./events.js";
const r = 5, m = 5, _ = 80, D = 10, N = 200, E = r, M = 30;
class v {
  constructor(t, o) {
    n(this, "hero");
    n(this, "grounds");
    n(this, "eventDispatcher");
    n(this, "boardPosition");
    n(this, "winCondition");
    n(this, "groundY");
    this.eventDispatcher = t, this.boardPosition = { x: 0, y: 0 }, this.winCondition = { x: o, y: 0 }, this.groundY = 150, this.hero = new c(50, this.groundY - r), this.grounds = this.makeGrounds();
  }
  makeGrounds() {
    let t = 100;
    const i = [new d({ x: 0, y: this.groundY - r }, t, r)];
    for (; t < this.winCondition.x; ) {
      const e = Math.max(m, Math.floor(Math.random() * _)), h = Math.max(D, Math.floor(Math.random() * N)), a = Math.max(E, Math.floor(Math.random() * M));
      i.push(new d({ x: t + e, y: this.groundY - a }, h, a)), t += e + h;
    }
    return i;
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
    this.boardPosition = { x: 0, y: 0 };
  }
  // updatePosition is actually a velocity vector
  updatePosition(t) {
    this.hero.getIsAirborne() || this.hero.updatePosition(t);
  }
  // timer update
  update(t) {
    const o = this.hero.getBounds();
    this.hero.update(
      t,
      this.groundY,
      this.grounds.map((e) => e.getBounds())
    );
    const i = this.hero.getBounds();
    i.position.y + i.height === this.groundY && this.eventDispatcher.dispatchEvent(new CustomEvent(G)), i.position.x + i.width > this.winCondition.x && this.eventDispatcher.dispatchEvent(new CustomEvent(g)), i.position.x - o.position.x !== 0 && (this.boardPosition.x = i.position.x, this.eventDispatcher.dispatchEvent(
      new CustomEvent(x, {
        detail: {
          x: i.position.x - o.position.x,
          y: 0
        }
      })
    ));
  }
}
export {
  v as Game
};
