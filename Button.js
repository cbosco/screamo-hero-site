var m = Object.defineProperty;
var r = (t, e, n) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => r(t, typeof e != "symbol" ? e + "" : e, n);
class c {
  constructor(e, n) {
    l(this, "element");
    this.element = document.createElement("button"), this.element.innerText = e, this.element.addEventListener("click", n);
  }
  getElement() {
    return this.element;
  }
}
export {
  c as Button
};
