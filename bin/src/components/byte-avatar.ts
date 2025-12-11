export class ByteAvatar extends HTMLElement {
  connectedCallback() {
    const size = this.getAttribute("size") || "48";
    const src = this.getAttribute("src");

    this.style.display = "inline-flex";
    this.style.width = size + "px";
    this.style.height = size + "px";
    this.style.borderRadius = "50%";
    this.style.background = "#ddd";
    this.style.overflow = "hidden";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";

    if (src) {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      this.appendChild(img);
    }
  }
}

customElements.define("byte-avatar", ByteAvatar);
