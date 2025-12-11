export class ByteGridItem extends HTMLElement {
  connectedCallback() {
    this.style.background = "#f8f9fa";
    this.style.padding = "1rem";
    this.style.borderRadius = "6px";
  }
}

customElements.define("byte-grid-item", ByteGridItem);
