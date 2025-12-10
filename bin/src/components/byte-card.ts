export class ByteCard extends HTMLElement {
  constructor() {
    super();
    this.style.padding = '1rem';
    this.style.margin = '1rem';
    this.style.border = '1px solid #ccc';
    this.style.borderRadius = '8px';
    this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    this.style.display = 'inline-block';
    this.style.backgroundColor = '#fff';
  }
}

customElements.define('byte-card', ByteCard);
