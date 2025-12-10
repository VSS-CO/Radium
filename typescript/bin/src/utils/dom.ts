export class ByteCard extends HTMLElement {
  constructor() {
    super();
    this.style.padding = '1rem';
    this.style.margin = '1rem';
    this.style.border = '1px solid #ccc';
    this.style.borderRadius = '8px';
    this.style.backgroundColor = '#fff';
  }
}
customElements.define('byte-card', ByteCard);

export class ByteButton extends HTMLElement {
  constructor() {
    super();
    const label = this.getAttribute('label') || 'Button';
    this.innerHTML = `<button>${label}</button>`;
    const btn = this.querySelector('button')!;
    btn.style.padding = '0.5rem 1rem';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.backgroundColor = '#007bff';
    btn.style.color = '#fff';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', (e) => this.dispatchEvent(new Event('click')));
  }
}
customElements.define('byte-button', ByteButton);

export class ByteModal extends HTMLElement {
  constructor() {
    super();
    this.style.position = 'fixed';
    this.style.top = '50%';
    this.style.left = '50%';
    this.style.transform = 'translate(-50%, -50%)';
    this.style.padding = '2rem';
    this.style.backgroundColor = '#fff';
    this.style.border = '1px solid #ccc';
    this.style.borderRadius = '8px';
    this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    this.style.zIndex = '1000';
  }
}
customElements.define('byte-modal', ByteModal);
