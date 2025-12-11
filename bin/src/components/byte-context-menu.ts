export class ByteContextMenu extends HTMLElement {
  menu!: HTMLDivElement;

  connectedCallback() {
    this.style.position = "relative";

    this.menu = document.createElement("div");
    Object.assign(this.menu.style, {
      position: "fixed",
      display: "none",
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "0.5rem",
      zIndex: "999",
      minWidth: "140px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
    });

    this.menu.innerHTML = this.innerHTML;
    document.body.appendChild(this.menu);

    this.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      this.menu.style.left = e.clientX + "px";
      this.menu.style.top = e.clientY + "px";
      this.menu.style.display = "block";
    });

    document.addEventListener("click", () => {
      this.menu.style.display = "none";
    });
  }
}

customElements.define("byte-context", ByteContextMenu);
