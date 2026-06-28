import { defineConfig } from 'vitepress'
import { genYuqueSideBar } from "../../utils/route"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Python 学习笔记",
  description: "从零开始的 Python 学习笔记，语雀编写，自动同步部署",
  lastUpdated: true,
  base: '/python-notes/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '💡 提示',
      warningLabel: '⚠️ 注意',
      dangerLabel: '🚨 警告',
      infoLabel: 'ℹ️ 信息',
      detailsLabel: '📋 详情'
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 4],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新'
    },
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 全部笔记', link: '/docs/1.计算机组成', activeMatch: '/docs/' },
      { text: '📖 关于', link: '/about' },
      { text: '⚙️ 管理', link: '/admin' },
    ],
    sidebar: {
      "/docs/": await genYuqueSideBar('/docs'),
    },
    docFooter: {
      prev: '← 上一篇',
      next: '下一篇 →'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '语雀编写 ｜ VitePress 构建 ｜ Elog 同步 ｜ GitHub Pages 部署',
      copyright: 'Copyright © 2024'
    },
  }
})
