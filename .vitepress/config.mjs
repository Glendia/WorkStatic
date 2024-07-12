import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "WorkStatic",
  description: "免费CDN内容分发托管平台",
  head: [['link', { rel: 'icon', href: '/images/hero.svg' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '资源', link: '/sources/'},
      { text: '关于', link: '/about/'},
      { text: '讨论', link: 'https://github.com/Glendia/WorkStatic/issues'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Glendia/Workstatic' }
    ]
  }
})