import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    // polyfillDynamicImport: false,
    assetsInlineLimit: 0,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
      },
      toplevel: false,
      keep_classnames: false,
      keep_fnames: false,
      safari10: false,
    },
  },
  base: '/social-network/',
});
