export class ByteComponent20 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-20</strong> component loaded";
  }
}
customElements.define("byte-component-20", ByteComponent20);