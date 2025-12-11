export class ByteSidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.width = this.getAttribute("width") || "250px";
    this.style.height = "100vh";
    this.style.position = "fixed";
    this.style.left = "0";
    this.style.top = "0";
    this.style.background = "#f8f9fa";
    this.style.borderRight = "1px solid #ddd";
    this.style.padding = "1rem";
    this.style.overflowY = "auto";
  }
}

customElements.define("byte-sidebar", ByteSidebar);
