export class ByteMenu extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.flexDirection = "column";
    this.style.border = "1px solid #ddd";
    this.style.borderRadius = "6px";
    this.style.overflow = "hidden";
  }
}

customElements.define("byte-menu", ByteMenu);
