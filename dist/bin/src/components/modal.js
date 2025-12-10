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
        this.style.minWidth = '200px';
    }
}
customElements.define('byte-modal', ByteModal);
//# sourceMappingURL=modal.js.map