export class ByteTimeline extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.flexDirection = "column";
    this.style.position = "relative";
  }
}

customElements.define("byte-timeline", ByteTimeline);
