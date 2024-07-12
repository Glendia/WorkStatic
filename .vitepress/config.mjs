import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "WorkStatic",
  titleTemplate:':title - 免费CDN内容分发托管平台',
  description: "免费CDN内容分发托管平台",
  head: [
  ['link', { rel: 'icon', href: '/images/hero.svg' }],
  ['meta', {name:'keywords', content:'cdn,在线字体，免费托管，在线加速，vue，图床'}]
  ],
  ignoreDeadLinks: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://www.workstatic.cn/',
    lastmodDateOnly: false
  }, 
  themeConfig: {
  logo: '/images/hero.svg',
    nav: [
      { text: '🏠首页', link: '/' },
      { text: '📑文档', link: '/guide/' },
      { text: '🛠️资源', link: '/sources/'},
      { text: '❤️关于', link: '/about/'},
      { text: '🔥讨论', link: 'https://github.com/Glendia/WorkStatic/issues'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Glendia/Workstatic' }
    ],
    outline: {
      level: [2, 6],
      label: '目录'
    },
    search: {
      provider: 'local'
    },
    i18nRouting: true,
    footer: {
      message: '备案号:<a href="https://beian.miit.gov.cn/">沪ICP备2023012559号</a>',
      copyright: 'Copyright © 2022-2024 <a href="/">WorkStatic</a> All Rights Reserved.'
    }
    }
    })