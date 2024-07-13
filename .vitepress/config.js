import { defineConfig } from 'vitepress'
//导入外部js
import {algolia} from './js/algolia.js';//搜索
//import {carbonAds} from './js/carbonAds.js';//广告
import { footer } from './js/footer.js';//页脚
import { head } from './js/head.js';//页头
import { nav } from './js/nav.js';//导航栏
import { sidebar } from './js/sidebar.js';//侧边栏
import { socialLinks } from './js/socialLinks.js';//社交链接
import { markdown } from './js/markdown.js';//markdown配置
import { sitemap } from './js/sitemap.js';//站点地图
export default defineConfig({
  lang: 'zh-CN',//语言
  base: '/',//路由根目录用'/'，子目录写目录名'
  title: 'WorkStatic',//网站标题
  titleTemplate:':title - 免费CDN内容分发托管平台',//后缀
  description: '我们的 CDN 网站为开发者提供快速、可靠的字体托管服务，支持自定义字体上传和管理，轻松集成到您的网站或应用程序中。',
  cleanUrls: true, //清理url
  //outDir: './dist', //输出目录
  assetsDir: './assets', //静态资源目录
  //cacheDir: 'cache', //缓存目录
  ignoreDeadLinks: true, //忽略死链接
  metaChunks: true, //压缩js
  appearance: true, //暗黑模式
  markdown: markdown,//markdown配置
  head: head,//浏览器加载头部
  metaChunk: true,//内容提取到单独的js文件中，页面加载更快
  sitemap: sitemap,//站点地图
  themeConfig: {
    logo: { 
      light: '/images/hero.svg',
      dark: '/images/hero.svg',
      alt: 'WorkStatic'
    },//Logos
    nav: nav,//导航栏
    socialLinks: socialLinks,//社交链接
    darkModeSwitchLabel: '深色模式', //浅色模式
    lightModeSwitchTitle: '浅色模式', //浅色模式
    darkModeSwitchTitle: '深色模式', //深色模式
    sidebarMenuLabel: '菜单', //菜单
    returnToTopLabel: '返回顶部', //返回顶部
    langMenuLabel: '语言', //语言
    externalLinkIcon: true, //外部链接图标
    outline: {
      level: 'deep',
      label: '本页目录',
    },//大纲深度与文本
    sidebar: sidebar,//侧边栏
    search: algolia,//搜索
    i18nRouting: true,//多语言
    footer: footer,//页脚
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    }
    })