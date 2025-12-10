export function createWS(url: string) {
  const ws = new WebSocket(url);
  ws.onopen = () => console.log("WS connected");
  return ws;
}
