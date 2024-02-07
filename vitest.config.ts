import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig, configDefaults } from 'vitest/config';
import Components from 'unplugin-vue-components/vite';

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [vue(), Components({ dirs: ['./components'] })],
  test: {
    globals: true,
    environment: 'jsdom',
    // "e2e/*"  is used as a folder for E2E testing, so exclude it from the test target
    exclude: [...configDefaults.exclude, "./tests/e2e/*"],
    // If you need path resolution in your test file's import statement, fix it here
    alias: {
      "~~": path.resolve(__dirname),
    },
  },
  resolve: {
    alias: {
      '~': r('.'),
    },
  },
});