<h1 align="center">🐍 Python 学习笔记</h1>
<p align="center">
  <b>语雀编写 &nbsp;→&nbsp; Elog 同步 &nbsp;→&nbsp; VitePress 构建 &nbsp;→&nbsp; GitHub Pages 部署</b>
</p>
<p align="center">
  <a href="https://yixi233-mo.github.io/notes/">📖 博客</a> •
  <a href="https://yixi233-mo.github.io/notes/admin">⚙️ 管理</a> •
  <a href="https://github.com/Yixi233-mo/notes/actions">🔄 Actions</a>
</p>

## ✨ 特性

- 📝 **语雀写作** — 在线 Markdown 编辑器，随时记录
- ⏰ **自动同步** — 每天凌晨 2 点自动从语雀拉取并部署
- 🎨 **花主题** — 渐变标题 + 毛玻璃导航 + 暗色模式 + 卡片动效
- 📊 **阅读进度条** — 页面顶部实时进度
- 🔍 **全文搜索** — `/` 键快速定位
- ⚙️ **管理后台** — 状态面板 + 一键同步 + 故障指引

## 🚀 本地运行

```bash
# 安装依赖
npm install

# 从语雀同步文章
npm run elog:sync-local

# 启动预览
npm run docs:dev
```

打开 http://localhost:5173/notes/

## 📂 项目结构

```
├── .elog.env               ← 语雀 Token（不公开）
├── elog.config.js           ← 同步配置
├── elog.format.js           ← 文章自动格式化
├── docs/                    ← VitePress 站点
│   ├── index.md             ← 首页
│   ├── admin.md             ← 管理后台
│   ├── docs/                ← 文章（自动同步）
│   └── .vitepress/
│       ├── config.mts       ← 博客配置
│       └── theme/           ← 自定义主题
└── .github/workflows/
    └── deploy.yml           ← 自动部署
```

## 🔧 技术栈

| 工具 | 用途 |
|------|------|
| 语雀 | 在线写作 |
| Elog | Markdown 同步 |
| VitePress | 静态站点生成 |
| GitHub Actions | 定时自动部署 |
| GitHub Pages | 免费托管 |

## 📜 License

MIT — 基于 [elog-x/yuque-vitepress](https://github.com/elog-x/yuque-vitepress)
