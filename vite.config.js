<<<<<<< HEAD
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
=======
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
>>>>>>> 546614f8e2ccd5afa38b7ac59a5d1d2c8b3ce3b6
})