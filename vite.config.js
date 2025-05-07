import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'src/popup/popup': resolve(__dirname, 'src/popup/popup.html'),
        'src/content/content': resolve(__dirname, 'src/content/content.js'),
        'src/content/autofill': resolve(__dirname, 'src/content/autofill.js')
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'src/content/content') {
            return 'src/content/content.js';
          }
          if (chunkInfo.name === 'src/content/autofill') {
            return 'src/content/autofill.js';  
          }
          if (chunkInfo.name === 'src/popup/popup') {
            return 'src/popup/popup.js';
          }
          return '[name].js';
        },
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});