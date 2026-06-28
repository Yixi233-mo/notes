import { defineConfig } from 'vitepress'
import { genYuqueSideBar } from "../../utils/route"

export default defineConfig({
  lang: "zh-CN",
  title: "屹兮の摸鱼 AI 日记",
  description: "今天模型又过拟合了，先摸个鱼再说 | 语雀编写，自动同步",
  lastUpdated: true,
  base: '/notes/',
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
    search: { provider: 'local' },
    outline: { level: [2, 4], label: '本页目录' },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '← 上一篇', next: '下一篇 →' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '语雀编写 ｜ VitePress 构建 ｜ Elog 同步 ｜ GitHub Pages 部署',
      copyright: 'Copyright © 2024'
    },

    // ===== 导航栏：自动显示所有知识库 =====
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '📚 Python 学习笔记',
        link: '/docs/Python 学习笔记/1.计算机组成',
        activeMatch: '/docs/Python'
      },
      { text: '⚙️ 管理', link: '/admin' },
    ],

    // ===== 侧边栏：每个知识库独立侧边栏 =====
    sidebar: {
      "/docs/Python 学习笔记/": await genYuqueSideBar('/docs/Python 学习笔记'),
    },
  }
})
