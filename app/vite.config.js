import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 👇 Exemple d'alias utile pour tes propres fichiers (ex: '@' pour '/src')
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0', // 👈 Force Vite à écouter sur toutes les interfaces (Docker)
    watch: {
      usePolling: true, // 👈 Garde cette ligne UNIQUEMENT si tu es sur Windows/WSL2
    },
  },
});