import { Button as o } from "./Button.js";
import { Game as c } from "./game/Game.js";
import { CanvasManager as d } from "./CanvasManager.js";
import { CanvasUpdater as v } from "./CanvasUpdater.js";
import { BOARD_END as l, GROUND_HIT as u } from "./game/events.js";
import { MicrophoneManager as f } from "./MicrophoneManager.js";
import { MicrophoneUpdater as g } from "./MicrophoneUpdater.js";
const i = document.querySelector("#app");
i !== null && (i.innerHTML = `
  <div id="app">
    <canvas id="myCanvas">
  </div>
`);
const e = new EventTarget(), p = 3e3, a = new d("myCanvas", e, p), t = new c(e, p), w = new o("Pause", () => t.pause()), E = new o("sensitivity-", () => s.decreaseSensitivity()), h = new o("sensitivity+", () => s.increaseSensitivity()), n = document.getElementById("app");
if (!n)
  throw new Error("App surface not in DOM.");
n.appendChild(w.getElement());
n.appendChild(E.getElement());
n.appendChild(h.getElement());
const r = new v(a, t);
e.addEventListener(l, () => {
  alert("YOU WIN!"), m();
});
e.addEventListener(u, () => {
  alert("YOU DIED!"), m();
});
r.start();
const y = new f(), s = new g(y, t);
s.start();
function m() {
  r.stop(), t.reset(), a.clear(), a.resetOffset(), r.start();
}
