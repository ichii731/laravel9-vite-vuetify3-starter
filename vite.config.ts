import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        laravel([
            'resources/sass/app.scss',
            'resources/js/app.ts',
        ]),
    ],
});
