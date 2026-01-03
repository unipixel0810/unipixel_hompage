
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Fix: Property 'cwd' does not exist on type 'Process'. Cast to any to access Node.js process.cwd() in config file.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    // GitHub Pages 배포 시 상대 경로로 에셋을 찾을 수 있도록 설정
    base: './', 
    plugins: [react()],
    define: {
      // Expose the API Key to the client-side code as process.env.API_KEY
      // Prioritizes VITE_API_KEY, then falls back to API_KEY
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || ''),
    }
  }
})
