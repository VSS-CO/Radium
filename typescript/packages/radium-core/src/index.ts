export * from "./runtime/index.js";
export * from "./router/index.js";
export * from "./markdown/index.js";
export * from "./ws/index.js";
export * from "./http/index.js";
export * from "./style/index.js";
export * from "./env/index.js";
export * from "./plugins/index.js";
export * from "./optimizer/index.js";
export * from "./utils/index.js";

export function defineConfig(config: any) {
  // This just returns the config object; you can enhance later
  return config;
}

// Optionally export other utilities
export function createApp() {
  // Radium-core app bootstrap logic
}

