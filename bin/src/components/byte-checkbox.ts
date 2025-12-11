export class ByteCheckbox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("label");
    wrapper.className = "checkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const mark = document.createElement("span");
    mark.className = "checkmark";

    const style = document.createElement("style");
    style.textContent = `
      .checkbox {
        display: inline-flex;
        align-items: center;
        gap: .35rem;
        cursor: pointer;
        user-select: none;
      }

      input { display: none; }

      .checkmark {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 2px solid #888;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        transition: .2s;
      }

      input:checked + .checkmark {
        background: #4a8dff;
        border-color: #4a8dff;
        color: white;
      }
    `;

    wrapper.append(checkbox, mark, document.createElement("slot"));
    shadow.append(style, wrapper);
  }
}

customElements.define("byte-checkbox", ByteCheckbox);
