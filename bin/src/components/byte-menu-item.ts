export class ByteMenuItem extends HTMLElement {
  connectedCallback() {
    this.style.padding = "0.75rem 1rem";
    this.style.cursor = "pointer";
    this.style.borderBottom = "1px solid #eee";

    this.onmouseenter = () => (this.style.background = "#f8f9fa");
    this.onmouseleave = () => (this.style.background = "transparent");
  }
}

customElements.define("byte-menu-item", ByteMenuItem);
