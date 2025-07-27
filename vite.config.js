import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@App': path.resolve(__dirname, 'src/App'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@classes': path.resolve(__dirname, 'src/classes'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@levels': path.resolve(__dirname, 'src/levels'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
    },
  },
});
