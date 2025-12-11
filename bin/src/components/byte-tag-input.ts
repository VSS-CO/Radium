export class ByteTagInput extends HTMLElement {
  input!: HTMLInputElement;

  connectedCallback() {
    this.style.display = "flex";
    this.style.flexWrap = "wrap";
    this.style.gap = "6px";
    this.style.padding = "8px";
    this.style.border = "1px solid #ccc";
    this.style.borderRadius = "6px";

    this.input = document.createElement("input");
    this.input.style.border = "none";
    this.input.style.outline = "none";
    this.input.style.flex = "1";

    this.appendChild(this.input);

    this.input.onkeydown = (e) => {
      if (e.key === "Enter" && this.input.value.trim()) {
        this.addTag(this.input.value.trim());
        this.input.value = "";
      }
    };
  }

  addTag(txt: string) {
    const tag = document.createElement("span");
    tag.textContent = txt;
    Object.assign(tag.style, {
      padding: "4px 8px",
      background: "#e9ecef",
      borderRadius: "4px",
    });
    this.insertBefore(tag, this.input);
  }
}

customElements.define("byte-taginput", ByteTagInput);
