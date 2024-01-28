import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import Markdown from 'unplugin-vue-markdown/vite'
// import Icons from 'unplugin-icons/vite'
// import tocPlugin from "markdown-it-table-of-contents";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    // Markdown({
    //   // default options passed to markdown-it
    //   // see: https://markdown-it.github.io/markdown-it/
    //   markdownItOptions: {
    //     html: true,
    //     linkify: true,
    //     typographer: true,
    //   },
    //   // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
    //   markdownItSetup(md) {
    //     // for example
    //     md.use(tocPlugin)
    //   },
    //   // Class names for the wrapper div
    //   wrapperClasses: 'markdown-body'
    // }),
    // Icons({ /* options */ }),
  ],
  assetsInclude: ['**/*.md'],
  build:{
    target: "esnext" // or "es2019",
   },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
