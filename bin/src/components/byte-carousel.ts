export class ByteCarousel extends HTMLElement {
  index = 0;
  slides!: HTMLElement[];

  connectedCallback() {
    this.style.position = "relative";
    this.style.display = "block";
    this.style.overflow = "hidden";

    this.slides = Array.from(this.children) as HTMLElement[];
    this.slides.forEach((s) => {
      s.style.position = "absolute";
      s.style.top = "0";
      s.style.left = "0";
      s.style.width = "100%";
      s.style.transition = "opacity .3s";
      s.style.opacity = "0";
    });

    this.show(0);

    setInterval(() => this.next(), 3000);
  }

  show(i: number) {
    this.slides.forEach((s, idx) => (s.style.opacity = idx === i ? "1" : "0"));
  }

  next() {
    this.index = (this.index + 1) % this.slides.length;
    this.show(this.index);
  }
}

customElements.define("byte-carousel", ByteCarousel);
    