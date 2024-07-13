import { defineConfig } from 'vitepress'
import {algolia} from "./js/algolia.js";
//import {carbonAds} from "./js/carbonAds.js";
//import { footer } from "./js/footer.js";
import { head } from "./js/head.js";
import { nav } from "./js/nav.js";
//import { search } from "./js/search.js";
//import { sidebar } from "./js/sidebar.js";
//import { socialLinks } from "./js/socialLinks.js";
//import { markdown } from "./js/markdown.js";
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "WorkStatic",
  titleTemplate:':title - 免费CDN内容分发托管平台',
  description: "免费CDN内容分发托管平台",
  head: head,
  ignoreDeadLinks: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://www.workstatic.cn/',
    lastmodDateOnly: false
  }, 
  themeConfig: {
  logo: '/images/hero.svg',
    nav: nav,
    socialLinks: socialLinks,
    outline: {
      level: [2, 6],
      label: '目录'
    },
    search: algolia,
    i18nRouting: true,
    footer: {
      message: '备案号:<a href="https://beian.miit.gov.cn/">沪ICP备2023012559号</a>',
      copyright: 'Copyright © 2022-2024 <a href="/">WorkStatic</a> All Rights Reserved.'
    }
    }
    })