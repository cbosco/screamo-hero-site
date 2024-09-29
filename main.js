import { Button as i } from "./Button.js";
import { Game as m } from "./game/Game.js";
import { CanvasManager as c } from "./CanvasManager.js";
import { CanvasUpdater as d } from "./CanvasUpdater.js";
import { BOARD_END as v, GROUND_HIT as l } from "./game/events.js";
import { MicrophoneManager as f } from "./MicrophoneManager.js";
import { MicrophoneUpdater as g } from "./MicrophoneUpdater.js";
const p = document.querySelector("#app");
p !== null && (p.innerHTML = `
  <div id="app">
    <canvas id="myCanvas">
  </div>
`);
const n = new EventTarget(), o = 3e3, t = new c("myCanvas", n, o), e = new m(n, o), u = new i("Pause", () => e.pause()), w = new i("Move right", () => e.updatePosition({ x: 5, y: 0 })), a = document.getElementById("app");
if (!a)
  throw new Error("App surface not in DOM.");
a.appendChild(u.getElement());
a.appendChild(w.getElement());
const r = new d(t, e);
n.addEventListener(v, () => {
  r.stop(), alert("YOU WIN!"), e.reset(), t.clear(), t.offset({ x: o, y: 0 }), s.stopListening();
});
n.addEventListener(l, () => {
  r.stop(), alert("YOU DIED!"), e.reset(), t.clear(), t.offset({ x: o, y: 0 }), s.stopListening();
});
r.start();
const s = new f(), h = new g(s, e);
h.start();
