export class ByteSlider extends HTMLElement {
  input!: HTMLInputElement;

  constructor() {
    super();
  }

  connectedCallback() {
    this.input = document.createElement("input");
    this.input.type = "range";
    this.input.min = this.getAttribute("min") || "0";
    this.input.max = this.getAttribute("max") || "100";
    this.input.value = this.getAttribute("value") || "50";

    this.appendChild(this.input);

    this.style.display = "inline-block";
    this.style.width = "150px";
  }
}

customElements.define("byte-slider", ByteSlider);
