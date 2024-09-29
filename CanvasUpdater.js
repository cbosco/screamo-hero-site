var r = Object.defineProperty;
var c = (i, a, t) => a in i ? r(i, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[a] = t;
var s = (i, a, t) => c(i, typeof a != "symbol" ? a + "" : a, t);
class o {
  constructor(a, t, e = 60) {
    s(this, "canvasManager");
    s(this, "game");
    s(this, "fps");
    s(this, "animationFrameId");
    s(this, "isActive");
    this.canvasManager = a, this.game = t, this.fps = e, this.isActive = !1;
  }
  // Start the update loop
  start() {
    this.isActive = !0;
    const a = 1e3 / this.fps;
    let t = 0;
    const e = (n) => {
      if (!this.isActive)
        return;
      n - t >= a && (t = n, this.updateCanvas()), this.animationFrameId = requestAnimationFrame(e);
    };
    this.animationFrameId = requestAnimationFrame(e);
  }
  // Stop the update loop
  stop() {
    this.isActive = !1, this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
  }
  // Clear and redraw all graphics by accessing the game state
  updateCanvas() {
    this.canvasManager.clear(), this.game.update(1 / this.fps), this.game.getGraphics().forEach((t) => this.canvasManager.draw(t));
  }
}
export {
  o as CanvasUpdater
};
