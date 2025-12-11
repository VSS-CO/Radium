export class ByteEmpty extends HTMLElement {
  connectedCallback() {
    this.style.padding = "2rem";
    this.style.textAlign = "center";
    this.style.color = "#6c757d";
    this.style.fontSize = "1rem";
  }
}

customElements.define("byte-empty", ByteEmpty);
