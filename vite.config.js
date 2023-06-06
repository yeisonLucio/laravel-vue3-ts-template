import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        vue(
            {
                template: { transformAssetUrls }
            }
        ),
        vuetify({
            autoImport: true,
        }),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/ts/main.ts'
            ],
            refresh: true,
        }),
    ],

    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/ts', import.meta.url))
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
});
