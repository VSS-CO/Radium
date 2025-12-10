const routes = [];
export function registerRoute(path, component) {
    routes.push({ path, component });
}
export async function navigate(path) {
    if (!path)
        return;
    const route = routes.find(r => r.path === path);
    if (!route)
        return;
    const container = document.getElementById('app');
    if (!container)
        return;
    container.innerHTML = '';
    const comp = await route.component();
    container.appendChild(comp);
}
export const router = {
    init(app) {
        console.log('Router initialized');
        // Navigate to first route if it exists
        navigate(routes[0]?.path);
    },
    registerRoute,
    navigate,
};
//# sourceMappingURL=router.js.map