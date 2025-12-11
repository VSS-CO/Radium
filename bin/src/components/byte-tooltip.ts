export class ByteTooltip extends HTMLElement {
  private tip!: HTMLElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("span");
    wrapper.className = "trigger";

    const slot = document.createElement("slot");
    wrapper.appendChild(slot);

    this.tip = document.createElement("span");
    this.tip.className = "tooltip";
    this.tip.textContent = this.getAttribute("text") || "Tooltip";

    const style = document.createElement("style");
    style.textContent = `
      .trigger {
        position: relative;
      }

      .tooltip {
        position: absolute;
        background: black;
        color: white;
        padding: .35rem .55rem;
        font-size: .8rem;
        border-radius: 6px;
        white-space: nowrap;
        top: -35px;
        opacity: 0;
        pointer-events: none;
        transition: opacity .2s;
      }

      .trigger:hover .tooltip {
        opacity: 1;
      }
    `;

    shadow.append(style, wrapper, this.tip);
  }
}

customElements.define("byte-tooltip", ByteTooltip);
