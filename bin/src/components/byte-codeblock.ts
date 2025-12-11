export class ByteCodeblock extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.background = "#1e1e1e";
    this.style.color = "#fff";
    this.style.padding = "1rem";
    this.style.borderRadius = "6px";
    this.style.fontFamily = "monospace";
    this.style.whiteSpace = "pre-wrap";
  }
}

customElements.define("byte-codeblock", ByteCodeblock);
