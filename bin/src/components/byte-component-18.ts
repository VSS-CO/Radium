export class ByteComponent18 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-18</strong> component loaded";
  }
}
customElements.define("byte-component-18", ByteComponent18);