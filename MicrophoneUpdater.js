var r = Object.defineProperty;
var o = (i, t, e) => t in i ? r(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => o(i, typeof t != "symbol" ? t + "" : t, e);
class h {
  constructor(t, e, a = 1, n = 100) {
    s(this, "microphoneManager");
    s(this, "game");
    s(this, "updateRateMs");
    s(this, "activeIntervalId");
    s(this, "sensitivityFactor");
    this.microphoneManager = t, this.game = e, this.updateRateMs = n, this.activeIntervalId = void 0, this.sensitivityFactor = a;
  }
  // Start the update loop
  start() {
    this.activeIntervalId === void 0 && (this.microphoneManager.startListening(), this.activeIntervalId = setInterval(() => {
      const t = this.microphoneManager.getLoudness();
      t > 0.04 && (console.log("Loudness:", t), this.game.updatePosition({
        x: this.sensitivityFactor * 560 * t,
        y: this.getVerticalVelocity(t)
      }));
    }, this.updateRateMs));
  }
  // Stop the update loop
  stop() {
    clearInterval(this.activeIntervalId);
  }
  decreaseSensitivity() {
    this.sensitivityFactor -= 0.1, this.sensitivityFactor < 0.3 && (this.sensitivityFactor = 0.3);
  }
  increaseSensitivity() {
    this.sensitivityFactor += 0.3;
  }
  getVerticalVelocity(t) {
    return this.sensitivityFactor * 560 * t * 0.6;
  }
}
export {
  h as MicrophoneUpdater
};
