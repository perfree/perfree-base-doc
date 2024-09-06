import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick, defineComponent, h, inject } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import ElementPlus from "element-plus";
import {ID_INJECTION_KEY } from "element-plus";
import "element-plus/dist/index.css";
import Layout from "./Layout.vue";
import './index.css'
export default {
    ...DefaultTheme,
    Layout: Layout,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
   app.use(ElementPlus);
   app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0,
  })
  },
    setup() {
        const route = useRoute()
        const initZoom = () => {
            //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
        };
        onMounted(() => {
            initZoom()
        })
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        )
    }
}
