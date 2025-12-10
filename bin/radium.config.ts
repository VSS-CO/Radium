import { defineConfig } from 'G:/Radium/packages/radium-core/src/index.ts';

export const config = defineConfig({
  site: 'http://localhost:3000',
  build: {
    outDir: 'dist',
    ssr: true,
    ssg: true,
  },
  plugins: [],
});
