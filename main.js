import { Button as s } from "./Button.js";
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
const t = new EventTarget(), p = 3e3, r = new d("myCanvas", t, p), n = new c(t, p), w = new s("Pause", () => n.pause()), E = new s("sensitivity-", () => e.decreaseSensitivity()), h = new s("sensitivity+", () => e.increaseSensitivity()), a = document.getElementById("app");
if (!a)
  throw new Error("App surface not in DOM.");
a.appendChild(w.getElement());
a.appendChild(E.getElement());
a.appendChild(h.getElement());
const o = new v(r, n);
t.addEventListener(l, () => {
  alert("YOU WIN!"), m();
});
t.addEventListener(u, () => {
  alert("YOU DIED!"), m();
});
o.start();
const y = new f(), e = new g(y, n);
e.start();
function m() {
  o.stop(), n.reset(), r.clear(), r.resetOffset(), o.start(), e.stop(), e.start();
}
