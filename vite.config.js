import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  output: {
    publicPath: '/'
  },
  plugins: [react()],
  //base: "/assistant_frontend/", //para correr en github page
})
