import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import vike from 'vike/plugin';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import svgrPlugin from 'vite-plugin-svgr';
import {VitePWA, VitePWAOptions} from 'vite-plugin-pwa';
import * as path from 'path';

// Alias configuration for cleaner imports
const aliasConfig = {
    '@identities': path.resolve(__dirname, './src/app/@identities'),
    '@core': path.resolve(__dirname, './src/app/@core'),
    '@features': path.resolve(__dirname, './src/app/@features'),
    '@services': path.resolve(__dirname, './src/app/@services'),
    '@widgets': path.resolve(__dirname, './src/app/@widgets'),
};

// PWA configuration with manifest details
const pwaConfig: Partial<VitePWAOptions> = {

    registerType: 'autoUpdate',
    injectRegister: 'auto',
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'service-worker.ts',
    devOptions: {
        enabled: false,
    },
    workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
    manifest: {
        name: '{{ name }}',
        short_name: '{{ short_name }}',
        description: '{{ description }}',
        theme_color: '#008080',
        start_url: '/',
        icons: [
            {
                src: '/sites/v0.0.1/logo/scale/16x16.png',
                sizes: '16x16',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/sites/v0.0.1/logo/scale/32x32.png',
                sizes: '32x32',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/sites/v0.0.1/logo/scale/48x48.png',
                sizes: '48x48',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/sites/v0.0.1/logo/scale/96x96.png',
                sizes: '96x96',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/sites/v0.0.1/logo/scale/192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/sites/v0.0.1/logo/scale/512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    },
};

// Vite configuration export
export default defineConfig({
    define: {
        'window.global': {},
    },
    assetsInclude: ['**/*.srt'],
    resolve: {
        alias: aliasConfig,
    },
    ssr: {
        noExternal: ['react-helmet-async'],
    },
    plugins: [
        vike({prerender: true}),
        mdx({remarkPlugins: [remarkGfm]}),
        react(),
        svgrPlugin(),
        VitePWA(pwaConfig),
    ],
});
