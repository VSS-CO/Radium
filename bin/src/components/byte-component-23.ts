export class ByteComponent23 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-23</strong> component loaded";
  }
}
customElements.define("byte-component-23", ByteComponent23);