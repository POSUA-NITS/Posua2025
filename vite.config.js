import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'posua-25.onrender.com',
    ],
  },
});
