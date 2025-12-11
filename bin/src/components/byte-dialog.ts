export class ByteDialog extends HTMLElement {
  overlay!: HTMLDivElement;

  constructor() {
    super();
  }

  connectedCallback() {
    // overlay
    this.overlay = document.createElement("div");
    Object.assign(this.overlay.style, {
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "999"
    });

    // dialog box
    Object.assign(this.style, {
      background: "#fff",
      padding: "1.5rem",
      borderRadius: "10px",
      minWidth: "280px",
      maxWidth: "90vw",
      boxShadow: "0 5px 30px rgba(0,0,0,0.2)",
      zIndex: "1000"
    });

    this.overlay.appendChild(this);
    document.body.appendChild(this.overlay);

    // close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
  }

  close() {
    this.overlay.remove();
  }
}

customElements.define("byte-dialog", ByteDialog);
