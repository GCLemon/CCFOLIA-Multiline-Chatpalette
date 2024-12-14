import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';

// Manifestを定義
const manifest = defineManifest({
  manifest_version: 3,
  name: 'CCFOLIA Multiline Chatpalette',
  version: '1.0.0',
  action: {},
  background: {
    service_worker: './src/ground/index.ts',
  },
  content_scripts: [
    {
      matches: ['https://ccfolia.com/rooms/*'],
      run_at: 'document_start',
      js: ['./src/content/index.ts'],
    },
  ],
});

// ViteConfigを定義
export default defineConfig({
  plugins: [react(), crx({manifest})],
  build: {
    rollupOptions: {
      input: {
        index: './src/ground/index.html'
      }
    }
  },
  resolve: {
    alias: {
      '@ground/': `${__dirname}/src/ground/`,
      '@content/': `${__dirname}/src/content/`,
    }
  }
});
