import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'pipeflow-academy-health',
      configureServer(server) {
        server.middlewares.use('/health', (_request, response) => {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json; charset=utf-8');
          response.end(JSON.stringify({ status: 'ok', service: 'pipeflow-academy' }));
        });
      },
    },
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3181,
    strictPort: true,
  },
});
