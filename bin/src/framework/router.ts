import { ByteCard } from '../components/byte-card';

type Route = { path: string; component: () => HTMLElement | Promise<HTMLElement> };
const routes: Route[] = [];

export function registerRoute(path: string, component: () => HTMLElement | Promise<HTMLElement>) {
  routes.push({ path, component });
}

export async function navigate(path: string) {
  const route = routes.find(r => r.path === path);
  if (!route) return;
  const container = document.getElementById('app');
  if (!container) return;
  container.innerHTML = '';
  const comp = await route.component();
  container.appendChild(comp);
}

// Add this object so index.ts works
export const router = {
  init(app: HTMLElement) {
    console.log('Router initialized');
    // Optional: you could navigate to default route here
    if (routes.length > 0) navigate(routes[0].path);
  },
  registerRoute,
  navigate,
};
