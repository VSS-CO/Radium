export * from "./runtime/index.ts";
export * from "./router/index.ts";
export * from "./markdown/index.ts";
export * from "./ws/index.js";
export * from "./http/index.ts";
export * from "./style/index.ts";
export * from "./env/index.js";
export * from "./plugins/index.ts";
export * from "./optimizer/index.ts";
export * from "./utils/index.ts";

export function defineConfig(config: any) {
  // This just returns the config object; you can enhance later
  return config;
}

// Optionally export other utilities
export function createApp() {
  // Radium-core app bootstrap logic
}

