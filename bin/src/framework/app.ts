import { navigate, registerRoute } from './router';

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
