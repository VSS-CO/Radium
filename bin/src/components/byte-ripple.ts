export class ByteRipple extends HTMLElement {
  connectedCallback() {
    this.style.position = "relative";
    this.style.overflow = "hidden";

    this.onclick = (e) => {
      const circle = document.createElement("span");
      const size = Math.max(this.clientWidth, this.clientHeight);
      const rect = this.getBoundingClientRect();

      Object.assign(circle.style, {
        width: size + "px",
        height: size + "px",
        position: "absolute",
        borderRadius: "50%",
        background: "rgba(0,0,0,.2)",
        left: e.clientX - rect.left - size / 2 + "px",
        top: e.clientY - rect.top - size / 2 + "px",
        animation: "rip .5s ease-out",
      });

      this.appendChild(circle);

      setTimeout(() => circle.remove(), 500);

      this.innerHTML += `
      <style>
        @keyframes rip {
          from { opacity: 1; transform: scale(0); }
          to { opacity: 0; transform: scale(2); }
        }
      </style>`;
    };
  }
}

customElements.define("byte-ripple", ByteRipple);
