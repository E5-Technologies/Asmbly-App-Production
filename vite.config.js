import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  define: {
    // Inject Stripe publishable key at build time
    // Set VITE_STRIPE_PK=pk_live_... in your deployment env
    "window.__STRIPE_PK": JSON.stringify(process.env.VITE_STRIPE_PK || ""),
  },
  build: {
    target: "es2020",
    sourcemap: false, // disable in production for security
    rollupOptions: {
      output: {
        manualChunks: undefined, // single bundle for WebView compatibility
      }
    }
  }
})
