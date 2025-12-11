export class ByteAccordion extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "block";
    this.style.border = "1px solid #ddd";
    this.style.borderRadius = "6px";
    this.style.overflow = "hidden";

    const items = Array.from(this.querySelectorAll("[data-acc-item]"));

    items.forEach((item) => {
      const header = item.querySelector("[data-acc-header]") as HTMLElement | null;
      const body = item.querySelector("[data-acc-body]") as HTMLElement | null;

      if (!header || !body) return;

      // Header styles
      header.style.padding = "0.75rem 1rem";
      header.style.cursor = "pointer";
      header.style.background = "#f8f9fa";
      header.style.borderBottom = "1px solid #eee";
      header.style.userSelect = "none";

      // Body styles
      body.style.padding = "0.75rem 1rem";
      body.style.display = "none";
      body.style.background = "#fff";

      header.onclick = () => {
        const isOpen = body.style.display === "block";

        // Close all items before opening the clicked one
        items.forEach((otherItem) => {
          const otherBody = otherItem.querySelector("[data-acc-body]") as HTMLElement | null;
          if (otherBody) otherBody.style.display = "none";
        });

        // If the clicked item was closed, open it
        if (!isOpen) {
          body.style.display = "block";
        }
      };
    });
  }
}

customElements.define("byte-accordion", ByteAccordion);
