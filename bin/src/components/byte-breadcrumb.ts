export class ByteBreadcrumb extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.gap = "6px";
    this.style.fontSize = "0.85rem";
    this.style.color = "#6c757d";
  }
}

customElements.define("byte-breadcrumb", ByteBreadcrumb);
