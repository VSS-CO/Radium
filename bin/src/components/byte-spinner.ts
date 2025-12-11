export class ByteSpinner extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const spinner = document.createElement("div");
    spinner.className = "spinner";

    const style = document.createElement("style");
    style.textContent = `
      .spinner {
        width: 28px;
        height: 28px;
        border: 4px solid #ddd;
        border-top-color: #4a8dff;
        border-radius: 50%;
        animation: spin .7s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;

    shadow.append(style, spinner);
  }
}

customElements.define("byte-spinner", ByteSpinner);
