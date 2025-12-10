export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
export function load(key) {
    const v = localStorage.getItem(key);
    if (!v)
        return null;
    return JSON.parse(v);
}
//# sourceMappingURL=storage.js.map