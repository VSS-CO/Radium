export class ByteLoaderBar extends HTMLElement {
  bar!: HTMLDivElement;

  connectedCallback() {
    this.style.width = "100%";
    this.style.height = "4px";
    this.style.background = "#eee";
    this.style.overflow = "hidden";

    this.bar = document.createElement("div");
    Object.assign(this.bar.style, {
      width: "30%",
      height: "100%",
      background: "#0d6efd",
      animation: "loading 1s infinite",
    });

    this.innerHTML = `
      <style>
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      </style>
    `;

    this.appendChild(this.bar);
  }
}

customElements.define("byte-loaderbar", ByteLoaderBar);
