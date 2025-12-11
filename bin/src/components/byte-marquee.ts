export class ByteMarquee extends HTMLElement {
  content!: HTMLDivElement;

  connectedCallback() {
    this.style.overflow = "hidden";
    this.style.whiteSpace = "nowrap";

    this.content = document.createElement("div");
    this.content.textContent = this.textContent || "";
    this.textContent = "";

    Object.assign(this.content.style, {
      display: "inline-block",
      animation: "marq 8s linear infinite",
    });

    this.innerHTML = `
    <style>
      @keyframes marq { 
        from { transform: translateX(100%); } 
        to { transform: translateX(-100%); }
      }
    </style>
    `;

    this.appendChild(this.content);
  }
}

customElements.define("byte-marquee", ByteMarquee);
