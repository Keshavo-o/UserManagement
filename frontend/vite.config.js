// Imports the helper function used to define the Vite configuration.
import { defineConfig } from 'vite'

// Imports the official React plugin for Vite.
// This enables React features like JSX, Fast Refresh (HMR), etc.
import react from '@vitejs/plugin-react'

// Export the Vite configuration.
// defineConfig() provides type hints and better IDE support.
export default defineConfig({

  // Register all Vite plugins.
  // Here we're only using the React plugin.
  plugins: [react()],

  // Configuration related to the Vite development server.
  server: {

    // Proxy settings.
    // Any request whose URL starts with "/api"
    // will be forwarded to another server.
    proxy: {

      // Match all requests beginning with "/api".
      // Examples:
      //   fetch("/api")
      //   fetch("/api/users")
      //   fetch("/api/login")
      "/api": {

        // The backend server to which the request should be forwarded.
        // Since Express is running on port 5000,
        // Vite forwards "/api" requests there.
        target: "http://localhost:3000",

        // Changes the "Origin" header of the request
        // to match the target server.
        // This helps avoid CORS-related issues with some servers.
        changeOrigin: true,
      }
    }
  }
})