export class ByteKbd extends HTMLElement {
  connectedCallback() {
    this.style.padding = "2px 6px";
    this.style.border = "1px solid #ccc";
    this.style.borderRadius = "4px";
    this.style.fontSize = "0.75rem";
    this.style.background = "#f8f9fa";
    this.style.display = "inline-block";
  }
}

customElements.define("byte-kbd", ByteKbd);
