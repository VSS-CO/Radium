export class ByteRadio extends HTMLElement {
  private input!: HTMLInputElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("label");
    wrapper.className = "radio";

    this.input = document.createElement("input");
    this.input.type = "radio";
    this.input.name = this.getAttribute("name") || "byte-radio";

    const circle = document.createElement("span");
    circle.className = "circle";

    const style = document.createElement("style");
    style.textContent = `
      .radio {
        display: inline-flex;
        align-items: center;
        gap: .35rem;
        cursor: pointer;
        user-select: none;
      }

      input {
        display: none;
      }

      .circle {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #888;
        position: relative;
        transition: .2s;
      }

      .circle::after {
        content: "";
        width: 10px;
        height: 10px;
        background: #4a8dff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: .2s;
      }

      input:checked + .circle {
        border-color: #4a8dff;
      }

      input:checked + .circle::after {
        transform: translate(-50%, -50%) scale(1);
      }
    `;

    wrapper.append(this.input, circle, document.createElement("slot"));
    shadow.append(style, wrapper);
  }

  get checked() {
    return this.input.checked;
  }

  set checked(v: boolean) {
    this.input.checked = v;
  }
}

customElements.define("byte-radio", ByteRadio);
