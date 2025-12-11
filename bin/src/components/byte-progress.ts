export class ByteProgress extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const value = Number(this.getAttribute("value") || 0);

    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = "8px";
    this.style.background = "#e9ecef";
    this.style.borderRadius = "10px";
    this.style.overflow = "hidden";

    const bar = document.createElement("div");
    bar.style.height = "100%";
    bar.style.width = value + "%";
    bar.style.background = "#0d6efd";
    bar.style.transition = "width 0.3s";

    this.appendChild(bar);
  }
}

customElements.define("byte-progress", ByteProgress);
