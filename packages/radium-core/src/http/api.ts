export function runAPIRoute(handler: Function, req: Request) {
  return handler(req);
}
