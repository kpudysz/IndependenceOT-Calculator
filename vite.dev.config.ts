import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {config as configDotEnv } from 'dotenv'
import tsconfigPaths from 'vite-tsconfig-paths'

configDotEnv()

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    server: {
        open: true,
        host: 'localhost',
        port: 3000
    },
})
