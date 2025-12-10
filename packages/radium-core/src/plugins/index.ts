export interface RadiumPlugin {
  name: string;
  onBuildStart?(): void;
  onFileTransform?(code: string): string;
  onPageRender?(html: string): string;
  onConfigResolved?(config: any): void;
}

export function applyPlugins(hook: keyof RadiumPlugin, ...args: any[]) {
  // TODO store registered plugins
}
