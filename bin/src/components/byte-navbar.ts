export class ByteNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "space-between";
    this.style.padding = "0.75rem 1rem";
    this.style.background = "#0d6efd";
    this.style.color = "#fff";
    this.style.gap = "1rem";
  }
}

customElements.define("byte-navbar", ByteNavbar);
