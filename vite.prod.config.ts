import { defineConfig } from 'vite'
import { config as configDotEnv } from 'dotenv'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

configDotEnv()

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        '@babel/plugin-transform-react-jsx',
                        {
                            runtime: 'automatic'
                        },
                        '@babel/plugin-transform-react-jsx'
                    ]
                ]
            }
        }),
        tsconfigPaths(),
    ],
    build: {
        sourcemap: false,
        minify: 'terser'
    }
})
