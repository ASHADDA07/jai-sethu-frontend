import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/jai-sethu-frontend/",

  plugins: [
    react(),

    VitePWA({
      strategies: "generateSW",
      registerType: "autoUpdate",

      devOptions: {
        enabled: true, // ✅ allows PWA testing in dev mode
      },

      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "apple-touch-icon.png",
        "pwa-192x192.png",
        "pwa-512x512.png",
      ],

      manifest: {
        id: "/jai-sethu-frontend/",
        name: "J.A.I SETHU",
        short_name: "JAI SETHU",
        description: "Legal clarity + secure evidence vault with court-ready export.",
        theme_color: "#0b1220",
        background_color: "#0b1220",
        display: "standalone",
        orientation: "portrait",

        scope: "/jai-sethu-frontend/",
        start_url: "/jai-sethu-frontend/",

        icons: [
          {
            src: "/jai-sethu-frontend/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/jai-sethu-frontend/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/jai-sethu-frontend/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,

        runtimeCaching: [
          // ✅ Images caching
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },

          // ✅ API calls caching (later backend)
          {
            urlPattern: ({ url }) =>
              url.pathname.startsWith("/api") ||
              url.hostname.includes("your-backend-domain.com"),
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
});
