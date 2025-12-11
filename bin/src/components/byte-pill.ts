export class BytePill extends HTMLElement {
  connectedCallback() {
    this.style.padding = "0.4rem 1rem";
    this.style.borderRadius = "999px";
    this.style.background = "#0d6efd22";
    this.style.color = "#0d6efd";
    this.style.fontSize = "0.85rem";
    this.style.display = "inline-block";
  }
}

customElements.define("byte-pill", BytePill);
