export function createInspector() {
  return {
    log: (msg: string) => console.log('[Inspector]', msg)
  };
}
