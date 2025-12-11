export class ByteComponent32 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-32</strong> component loaded";
  }
}
customElements.define("byte-component-32", ByteComponent32);