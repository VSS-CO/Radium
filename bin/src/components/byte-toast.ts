export class ByteToast extends HTMLElement {
  static container: HTMLElement | null = null;

  static ensureContainer() {
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.className = "byte-toast-container";
      Object.assign(this.container.style, {
        position: "fixed",
        top: "1rem",
        right: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        zIndex: "9999"
      });
      document.body.appendChild(this.container);
    }
  }

  static push(message: string, type: "success" | "error" | "info" = "info") {
    this.ensureContainer();
    const el = document.createElement("byte-toast");
    el.setAttribute("message", message);
    el.setAttribute("type", type);
    this.container!.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.className = "toast";
    wrapper.textContent = this.getAttribute("message") || "";

    const type = this.getAttribute("type") || "info";

    const style = document.createElement("style");
    style.textContent = `
      .toast {
        padding: .6rem .9rem;
        border-radius: 6px;
        color: white;
        font-size: .9rem;
        box-shadow: 0 4px 14px rgba(0,0,0,.18);
        animation: fadeIn .25s ease-out;
      }

      .info { background: #4a8dff; }
      .success { background: #3bb24a; }
      .error { background: #e54848; }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-6px); }
        to   { opacity: 1; transform: translateY(0);   }
      }
    `;

    wrapper.classList.add(type);
    shadow.append(style, wrapper);
  }
}

customElements.define("byte-toast", ByteToast);
