export function hydrateComponent(id, component) {
    const container = document.getElementById(id);
    if (container) {
        container.innerHTML = '';
        container.appendChild(component);
    }
}
//# sourceMappingURL=hydrate.js.map