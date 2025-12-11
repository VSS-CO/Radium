export class ByteDropdown extends HTMLElement {
  private open = false;
  private button!: HTMLElement;
  private menu!: HTMLElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    this.button = document.createElement("button");
    this.button.className = "dropdown-btn";
    this.button.textContent = this.getAttribute("label") || "Dropdown";

    this.menu = document.createElement("div");
    this.menu.className = "dropdown-menu";

    const slot = document.createElement("slot");
    this.menu.appendChild(slot);

    this.button.addEventListener("click", () => this.toggle());

    document.addEventListener("click", (e) => {
      if (!this.contains(e.target as Node)) this.close();
    });

    const style = document.createElement("style");
    style.textContent = `
      .dropdown-btn {
        padding: .5rem .75rem;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 6px;
        cursor: pointer;
      }

      .dropdown-menu {
        position: absolute;
        background: white;
        border: 1px solid #ddd;
        padding: .5rem 0;
        border-radius: 6px;
        min-width: 120px;
        box-shadow: 0 6px 20px rgba(0,0,0,.1);
        display: none;
        z-index: 50;
        margin-top: .25rem;
      }

      .dropdown-menu.open {
        display: block;
      }
    `;

    shadow.append(style, this.button, this.menu);
  }

  toggle() {
    this.open = !this.open;
    this.menu.classList.toggle("open", this.open);
  }

  close() {
    this.open = false;
    this.menu.classList.remove("open");
  }
}

customElements.define("byte-dropdown", ByteDropdown);
