export class ByteSwitch extends HTMLElement {
  knob!: HTMLDivElement;
  on = false;

  connectedCallback() {
    this.style.width = "40px";
    this.style.height = "20px";
    this.style.borderRadius = "20px";
    this.style.background = "#ccc";
    this.style.position = "relative";
    this.style.cursor = "pointer";

    this.knob = document.createElement("div");
    Object.assign(this.knob.style, {
      width: "18px",
      height: "18px",
      background: "#fff",
      borderRadius: "50%",
      position: "absolute",
      top: "1px",
      left: "1px",
      transition: "left .2s",
    });

    this.appendChild(this.knob);

    this.onclick = () => this.toggle();
  }

  toggle() {
    this.on = !this.on;
    this.style.background = this.on ? "#0d6efd" : "#ccc";
    this.knob.style.left = this.on ? "20px" : "1px";
  }
}

customElements.define("byte-switch", ByteSwitch);
