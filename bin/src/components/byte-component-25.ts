export class ByteComponent25 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-25</strong> component loaded";
  }
}
customElements.define("byte-component-25", ByteComponent25);