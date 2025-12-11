export class ByteAccordionPanel extends HTMLElement {
  header!: HTMLElement;
  body!: HTMLElement;

  connectedCallback() {
    this.style.border = "1px solid #ddd";
    this.style.borderRadius = "6px";
    this.style.marginBottom = "6px";

    this.header = this.querySelector("[slot='header']") as HTMLElement;
    this.body = this.querySelector("[slot='body']") as HTMLElement;

    this.header.style.padding = "0.75rem 1rem";
    this.header.style.cursor = "pointer";
    this.body.style.display = "none";
    this.body.style.padding = "0.75rem 1rem";

    this.header.onclick = () => {
      this.body.style.display =
        this.body.style.display === "none" ? "block" : "none";
    };
  }
}

customElements.define("byte-accordion-panel", ByteAccordionPanel);
