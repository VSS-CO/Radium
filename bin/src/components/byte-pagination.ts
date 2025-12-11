export class BytePagination extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.gap = "0.25rem";
    const pages = Number(this.getAttribute("pages") || 5);
    for (let i = 1; i <= pages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i.toString();
      btn.style.padding = "0.25rem 0.5rem";
      btn.style.border = "1px solid #ddd";
      btn.style.borderRadius = "4px";
      btn.style.cursor = "pointer";
      this.appendChild(btn);
    }
  }
}
customElements.define("byte-pagination", BytePagination);