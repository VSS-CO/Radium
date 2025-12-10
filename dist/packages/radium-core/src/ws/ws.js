export function createWS(url) {
    const ws = new WebSocket(url);
    ws.onopen = () => console.log("WS connected");
    return ws;
}
//# sourceMappingURL=ws.js.map