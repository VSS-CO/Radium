export class ByteComponent50 extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.padding = "0.5rem";
    this.innerHTML = "<strong>byte-component-50</strong> component loaded";
  }
}
customElements.define("byte-component-50", ByteComponent50);