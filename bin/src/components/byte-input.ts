export class ByteInput extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.className = "byte-input-wrapper";

    const input = document.createElement("input");
    input.type = this.getAttribute("type") || "text";
    input.placeholder = this.getAttribute("placeholder") || "";

    const style = document.createElement("style");
    style.textContent = `
      input {
        padding: .5rem .75rem;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: .95rem;
        outline: none;
        transition: border .2s ease;
      }
      input:focus {
        border-color: #4a8dff;
      }
    `;

    wrapper.appendChild(input);
    shadow.append(style, wrapper);
  }
}

customElements.define("byte-input", ByteInput);
