import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Port par défaut de Vite
    host: true, // Permet d'accéder au serveur depuis d'autres appareils sur le réseau local
    watch: {
      usePolling: true, // Utile pour Docker sur certains systèmes
    },
  },
});