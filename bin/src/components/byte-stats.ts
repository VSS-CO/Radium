export class ByteStats extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.flexDirection = "column";
    this.style.padding = "1rem";
    this.style.border = "1px solid #ddd";
    this.style.borderRadius = "8px";
    this.style.textAlign = "center";
  }
}

customElements.define("byte-stats", ByteStats);
