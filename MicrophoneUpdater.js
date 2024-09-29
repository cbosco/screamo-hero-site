var n = Object.defineProperty;
var o = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var s = (e, t, a) => o(e, typeof t != "symbol" ? t + "" : t, a);
class c {
  constructor(t, a, i = 100) {
    s(this, "microphoneManager");
    s(this, "game");
    s(this, "updateRateMs");
    s(this, "activeIntervalId");
    this.microphoneManager = t, this.game = a, this.updateRateMs = i, this.activeIntervalId = void 0;
  }
  // Start the update loop
  start() {
    this.activeIntervalId === void 0 && (this.microphoneManager.startListening(), this.activeIntervalId = setInterval(() => {
      const t = this.microphoneManager.getLoudness();
      t > 0.04 && (console.log("Loudness:", t), this.game.updatePosition({
        x: 560 * t,
        y: this.getVerticalVelocity(t)
      }));
    }, this.updateRateMs));
  }
  // Stop the update loop
  stop() {
    clearInterval(this.activeIntervalId);
  }
  getVerticalVelocity(t) {
    return 560 * t * 0.6;
  }
}
export {
  c as MicrophoneUpdater
};
