export class ByteShadow extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.boxShadow = "0 4px 12px rgba(0,0,0,.1)";
    this.style.padding = "1rem";
    this.style.borderRadius = "6px";
  }
}

customElements.define("byte-shadow", ByteShadow);
