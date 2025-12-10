import { ByteCard } from '../components/byte-card.js';

type Route = { path: string; component: () => HTMLElement | Promise<HTMLElement> };
const routes: Route[] = [];

export function registerRoute(path: string, component: () => HTMLElement | Promise<HTMLElement>) {
  routes.push({ path, component });
}

export async function navigate(path?: string) {
  if (!path) return;
  const route = routes.find(r => r.path === path);
  if (!route) return;
  const container = document.getElementById('app');
  if (!container) return;
  container.innerHTML = '';
  const comp = await route.component();
  container.appendChild(comp);
}

export const router = {
  init(app: HTMLElement) {
    console.log('Router initialized');
    // Navigate to first route if it exists
    navigate(routes[0]?.path);
  },
  registerRoute,
  navigate,
};
