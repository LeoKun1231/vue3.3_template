/*
 * @Author: leo
 * @Date: 2023-05-23 16:17:29
 * @LastEditors: leo
 * @LastEditTime: 2023-05-23 22:28:20
 * @Description:
 */
import path from 'node:path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Inspector from 'vite-plugin-vue-inspector'
import Unocss from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'

import WebfontDownload from 'vite-plugin-webfont-dl'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      script: {
        defineModel: true,
      },
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'src/auto-imports.d.ts',
      // elementplus按需导入
      resolvers: [
        ElementPlusResolver(),
      ],
      dirs: [
        'src/composables/**',
        'src/store/**',
        'src/services/**',
        'src/utils/**',
        'src/components/**',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      // elementplus按需导入
      resolvers: [
        ElementPlusResolver(),
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/webfansplz/vite-plugin-vue-inspector
    Inspector({
      toggleButtonVisibility: 'never',
    }),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
  ],
})
