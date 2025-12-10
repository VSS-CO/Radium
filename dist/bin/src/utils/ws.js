import WebSocket from 'ws';
export function createWS(url) {
    const ws = new WebSocket(url);
    ws.on('open', () => console.log('WS Connected'));
    ws.on('message', (msg) => console.log('WS Msg:', msg.toString()));
    return ws;
}
//# sourceMappingURL=ws.js.map