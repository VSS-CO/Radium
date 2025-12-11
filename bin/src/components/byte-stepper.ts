export class ByteStepper extends HTMLElement {
  value = 0;
  display!: HTMLElement;

  connectedCallback() {
    this.style.display = "inline-flex";
    this.style.alignItems = "center";
    this.style.gap = "6px";

    const minus = document.createElement("button");
    minus.textContent = "-";

    const plus = document.createElement("button");
    plus.textContent = "+";

    [minus, plus].forEach((b) => {
      b.style.padding = "4px 8px";
      b.style.cursor = "pointer";
    });

    this.display = document.createElement("span");
    this.display.textContent = "0";

    this.append(minus, this.display, plus);

    minus.onclick = () => this.update(-1);
    plus.onclick = () => this.update(1);
  }

  update(v: number) {
    this.value += v;
    this.display.textContent = String(this.value);
  }
}

customElements.define("byte-stepper", ByteStepper);
