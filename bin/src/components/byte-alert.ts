export class ByteAlert extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.className = `alert ${this.getAttribute("type") || "info"}`;
    wrapper.textContent = this.textContent;

    const style = document.createElement("style");
    style.textContent = `
      .alert {
        padding: .7rem 1rem;
        border-radius: 6px;
        color: white;
        font-size: .9rem;
      }

      .info { background: #4a8dff; }
      .success { background: #3bb24a; }
      .danger { background: #e54848; }
      .warning { background: #e5b44f; }
    `;

    shadow.append(style, wrapper);
  }
}

customElements.define("byte-alert", ByteAlert);
