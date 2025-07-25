import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@classes': path.resolve(__dirname, 'src/classes'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@foregrounds': path.resolve(__dirname, 'src/components/foregrounds'),
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@animations': path.resolve(__dirname, 'src/components/animations'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
