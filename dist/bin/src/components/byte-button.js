export class ByteButton extends HTMLElement {
    constructor() {
        super();
        const label = this.getAttribute('label') || 'Button';
        this.innerHTML = `<button>${label}</button>`;
        const btn = this.querySelector('button');
        btn.style.padding = '0.5rem 1rem';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.style.backgroundColor = '#007bff';
        btn.style.color = '#fff';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', (e) => {
            this.dispatchEvent(new Event('click'));
        });
    }
}
customElements.define('byte-button', ByteButton);
//# sourceMappingURL=byte-button.js.map