import vue from '@vitejs/plugin-vue';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [
          BootstrapVueNextResolver({
            components: true,
            directives: true,
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src')
      },
    },
})
