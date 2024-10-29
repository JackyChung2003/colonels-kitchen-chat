// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [
      react(),
      VitePWA({ 
        registerType: 'autoUpdate' ,
        includeAssets: ['favicon.ico', 'robots.txt', 'colonel-banner.png', 'logo.svg'],
        manifest: {
          name: 'Colonel’s Kitchen Chat',
          short_name: 'ColonelChat',
          description: 'Engage in conversations with the Colonel himself, powered by AI!',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'logo-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'logo-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    base: "/colonels-kitchen-chat/",
  }
})