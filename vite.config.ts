import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production configuration keeps the existing UI intact while improving
// caching and separating stable third-party code from the application bundle.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    ...(!isSsrBuild
      ? {
          rollupOptions: {
            output: {
              manualChunks(id: string) {
                if (!id.includes('node_modules')) return undefined;
                if (id.includes('@mui') || id.includes('@emotion')) return 'mui-vendor';
                if (id.includes('react-icons') || id.includes('lucide-react')) return 'icons-vendor';
                if (id.includes('axios')) return 'network-vendor';
                if (id.includes('react') || id.includes('react-router') || id.includes('react-helmet')) return 'react-vendor';
                return undefined;
              },
            },
          },
        }
      : {}),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
