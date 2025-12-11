export class ByteCollapse extends HTMLElement {
  body!: HTMLElement;

  connectedCallback() {
    this.style.display = "block";
    this.style.border = "1px solid #ddd";
    this.style.borderRadius = "6px";

    const header = this.querySelector("[data-col-header]") as HTMLElement | null;
    this.body = this.querySelector("[data-col-body]") as HTMLElement;

    if (!header || !this.body) return;

    header.style.padding = "0.75rem 1rem";
    header.style.cursor = "pointer";
    header.style.background = "#f8f9fa";

    this.body.style.display = "none";
    this.body.style.padding = "0.75rem 1rem";

    header.onclick = () => {
      this.body.style.display =
        this.body.style.display === "none" ? "block" : "none";
    };
  }
}

customElements.define("byte-collapse", ByteCollapse);
