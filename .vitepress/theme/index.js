// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import './styles/custom.css'
import './styles/fonts.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import App from './components/Home.vue'
/** @type {import('vitepress').Theme}theme-without-fonts' */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
   app.use(ElementPlus)
  }
}
