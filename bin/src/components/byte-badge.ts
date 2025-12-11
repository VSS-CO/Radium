export class ByteBadge extends HTMLElement {
  connectedCallback() {
    this.style.display = "inline-block";
    this.style.padding = "0.25rem 0.5rem";
    this.style.background = this.getAttribute("color") || "#0d6efd";
    this.style.borderRadius = "8px";
    this.style.color = "#fff";
    this.style.fontSize = "0.75rem";
  }
}

customElements.define("byte-badge", ByteBadge);
