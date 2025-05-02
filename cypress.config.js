import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
    },
    e2e: {
        setupNodeEvents() {},
        baseUrl: 'http://localhost:3000',
    },
});
