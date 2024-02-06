import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import Components from 'unplugin-vue-components/vite';

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [vue(), Components({ dirs: ['./components'] })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~': r('.'),
    },
  },
});