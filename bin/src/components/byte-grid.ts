export class ByteGrid extends HTMLElement {
  connectedCallback() {
    const cols = this.getAttribute("cols") || "3";
    this.style.display = "grid";
    this.style.gap = "1rem";
    this.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  }
}

customElements.define("byte-grid", ByteGrid);
