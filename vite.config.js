import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom'],
                    'vendor-animations': ['framer-motion', 'gsap', '@studio-freight/lenis'],
                    'vendor-particles': ['@tsparticles/react', '@tsparticles/slim'],
                }
            }
        },
        chunkSizeWarningLimit: 1000
    }
})
