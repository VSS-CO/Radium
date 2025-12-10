import { defineConfig } from 'G:/Radium/packages/radium-core/src/index.js'; // Change to your radium-core dir
export const config = defineConfig({
    site: 'http://localhost:3000',
    build: {
        outDir: 'dist',
        ssr: true,
        ssg: true,
    },
    plugins: [],
});
//# sourceMappingURL=radium.config.js.map