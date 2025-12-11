export class ByteComponent21 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-21</strong> component loaded";
  }
}
customElements.define("byte-component-21", ByteComponent21);