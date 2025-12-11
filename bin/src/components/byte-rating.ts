export class ByteRating extends HTMLElement {
  stars: HTMLElement[] = [];
  value = 0;

  connectedCallback() {
    this.style.display = "flex";
    this.style.gap = "4px";
    const max = Number(this.getAttribute("max") || 5);

    for (let i = 1; i <= max; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.style.fontSize = "1.5rem";
      star.style.cursor = "pointer";
      star.style.color = "#ddd";

      star.onclick = () => this.setValue(i);

      this.stars.push(star);
      this.appendChild(star);
    }
  }

  setValue(v: number) {
    this.value = v;
    this.stars.forEach((s, i) => {
      s.style.color = i < v ? "#ffc107" : "#ddd";
    });
  }
}

customElements.define("byte-rating", ByteRating);
