// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
//styles
import './styles/style.css'
import './styles/custom.css'
import './styles/fonts.css'
//npm package
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//vue components
//import App from './components/App.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
   app.use(ElementPlus)
//   app.component('App')
  }
}
