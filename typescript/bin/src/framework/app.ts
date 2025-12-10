import { navigate, registerRoute } from './router.js';

export function createApp() {
  window.addEventListener('popstate', () => {
    navigate(location.pathname);
  });

  return {
    registerRoute,
    navigate: (path: string) => {
      history.pushState({}, '', path);
      navigate(path);
    },
  };
}
