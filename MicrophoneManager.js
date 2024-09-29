var n = Object.defineProperty;
var a = (i, t, e) => t in i ? n(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => a(i, typeof t != "symbol" ? t + "" : t, e);
class h {
  constructor() {
    s(this, "audioContext");
    s(this, "analyser");
    s(this, "microphoneStream", null);
    s(this, "dataArray");
    s(this, "isListening", !1);
    this.audioContext = new AudioContext(), this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = 2048, this.dataArray = new Float32Array(this.analyser.fftSize);
  }
  async startListening() {
    if (!this.isListening)
      try {
        const t = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        this.microphoneStream = this.audioContext.createMediaStreamSource(t), this.microphoneStream.connect(this.analyser), await this.audioContext.resume(), this.isListening = !0, console.log("Microphone connected successfully.");
      } catch (t) {
        throw console.error("Error accessing the microphone:", t), t;
      }
  }
  getLoudness() {
    if (!this.isListening)
      return console.warn("Microphone is not currently connected."), 0;
    this.analyser.getFloatTimeDomainData(this.dataArray);
    const t = 2048;
    let e = 0;
    for (let r = this.dataArray.length - t; r < this.dataArray.length; r++)
      e += this.dataArray[r] ** 2;
    return Math.sqrt(e / t);
  }
  stopListening() {
    this.isListening && (this.microphoneStream && (this.microphoneStream.disconnect(), this.microphoneStream = null), this.audioContext.suspend(), this.isListening = !1, console.log("Microphone disconnected."));
  }
}
export {
  h as MicrophoneManager
};
