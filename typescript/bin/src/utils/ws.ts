import WebSocket from 'ws';

export function createWS(url: string) {
  const ws = new WebSocket(url);
  ws.on('open', () => console.log('WS Connected'));
  ws.on('message', (msg: WebSocket.RawData) => console.log('WS Msg:', msg.toString()));
  return ws;
}
