import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync, readFileSync } from 'node:fs'
import { resolve, relative, sep } from 'node:path'
import { withheldMediaPaths } from './src/media2026'

// https://vite.dev/config/
export default defineConfig({
  build: { copyPublicDir: false },
  plugins: [react(), {
    name: 'reviewed-public-assets',
    // Public assets otherwise bypass the module graph and are all copied by Vite.
    generateBundle() {
      const root = resolve(import.meta.dirname, 'public')
      const walk = (directory: string) => {
        for (const entry of readdirSync(directory, { withFileTypes: true })) {
          const path = resolve(directory, entry.name)
          if (entry.isDirectory()) walk(path)
          else {
            const fileName = relative(root, path).split(sep).join('/')
            if (!withheldMediaPaths.includes(`/${fileName}`)) {
              this.emitFile({ type: 'asset', fileName, source: readFileSync(path) })
            }
          }
        }
      }
      walk(root)
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        let pathname: string
        try { pathname = decodeURIComponent((req.url ?? '').split('?')[0]) } catch { res.statusCode = 400; res.end(); return }
        if (withheldMediaPaths.some(path => pathname.toLowerCase().endsWith(path.toLowerCase()))) {
          res.statusCode = 404
          res.end('Image unavailable pending privacy review')
        } else next()
      })
    },
  }],
})
