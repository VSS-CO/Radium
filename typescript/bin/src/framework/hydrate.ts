export function hydrateComponent(id: string, component: HTMLElement) {
  const container = document.getElementById(id);
  if (container) {
    container.innerHTML = '';
    container.appendChild(component);
  }
}
