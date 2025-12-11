export class ByteTabs extends HTMLElement {
  private tabs!: NodeListOf<HTMLElement>;
  private panels!: NodeListOf<HTMLElement>;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.className = "tabs";

    const tabSlot = document.createElement("slot");
    tabSlot.name = "tab";

    const panelSlot = document.createElement("slot");
    panelSlot.name = "panel";

    const style = document.createElement("style");
    style.textContent = `
      .tabs ::slotted([slot="tab"]) {
        padding: .5rem .9rem;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        user-select: none;
        transition: .2s;
        display: inline-block;
      }

      .tabs ::slotted([slot="tab"].active) {
        color: #4a8dff;
        border-bottom-color: #4a8dff;
      }

      .tabs ::slotted([slot="panel"]) {
        display: none;
        padding: 1rem 0;
      }

      .tabs ::slotted([slot="panel"].active) {
        display: block;
      }
    `;

    wrapper.append(tabSlot, panelSlot);
    shadow.append(style, wrapper);
  }

  connectedCallback() {
    const root = this.shadowRoot!;
    this.tabs = this.querySelectorAll('[slot="tab"]');
    this.panels = this.querySelectorAll('[slot="panel"]');

    this.tabs.forEach((t, i) =>
      t.addEventListener("click", () => this.activate(i))
    );

    this.activate(0);
  }

  activate(index: number) {
    this.tabs.forEach((t) => t.classList.remove("active"));
    this.panels.forEach((p) => p.classList.remove("active"));

    this.tabs[index].classList.add("active");
    this.panels[index].classList.add("active");
  }
}

customElements.define("byte-tabs", ByteTabs);
