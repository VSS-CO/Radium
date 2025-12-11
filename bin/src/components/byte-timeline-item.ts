export class ByteTimelineItem extends HTMLElement {
  connectedCallback() {
    this.style.padding = "1rem 0";
    this.style.borderLeft = "2px solid #0d6efd";
    this.style.paddingLeft = "1rem";
    this.style.marginLeft = "5px";
  }
}

customElements.define("byte-timeline-item", ByteTimelineItem);
