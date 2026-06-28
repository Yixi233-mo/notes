<h1 align="center">📝 Yuque Blog</h1>
<p align="center">
  <strong>语雀 → Elog → VitePress → GitHub Pages</strong><br>
  多知识库自动同步博客框架，写好就部署，不用管别的
</p>
<p align="center">
  <a href="#-快速开始"><img src="https://img.shields.io/badge/quick_start-2_min-green" alt="Quick Start"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License"></a>
  <img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen" alt="Node">
  <img src="https://img.shields.io/badge/vitepress-1.6-646cff" alt="VitePress">
</p>

---

## ✨ Features

- 📝 **Writing** — 语雀在线 Markdown，多知识库支持
- 🔄 **Auto Sync** — `sync-all.js` 批量同步，每天凌晨 2 点 Cron
- 🎨 **Theme** — 渐变标题 + 毛玻璃导航 + 暗色模式 + 卡片动效
- 📊 **Reading** — 顶部进度条 + 返回顶部 + 文章元信息
- 🔍 **Search** — 全文本地搜索，`/` 键唤起
- ⚙️ **Admin Panel** — 交互式 Vue 管理后台，实时状态 + 一键同步
- 📦 **Multi-KB** — 多知识库架构，一个配置文件搞定

## 🚀 Quick Start

```bash
git clone https://github.com/Yixi233-mo/notes.git
cd notes
npm install
```

配置知识库（编辑 `kblist.txt`）：
```
Python 学习笔记 | your_login | your_repo
```

在 GitHub Secrets 设置 `YUQUE_TOKEN`，然后：
```bash
npm run sync:all      # 同步所有知识库
npm run docs:dev      # 本地预览 http://localhost:5173
```

## 📂 Structure

```
.
├── kblist.txt              ← 知识库列表（名称 | Login | Repo）
├── sync-all.js             ← 多 KB 同步脚本
├── .elog.env               ← 语雀 Token（不提交）
├── elog.config.js          ← Elog 配置
├── elog.format.js          ← 文章格式化（自动修复兼容问题）
├── docs/
│   ├── index.md            ← 首页
│   ├── admin.md            ← 管理后台（交互式 Vue）
│   ├── docs/               ← 📁 文章按知识库分目录
│   └── .vitepress/
│       ├── config.mts      ← 站点配置
│       └── theme/          ← 自定义主题 + 组件
└── .github/workflows/
    └── deploy.yml          ← Cron + Pages 部署
```

## 🔧 Tech Stack

| 层 | 技术 |
|---|------|
| 写作 | 语雀 Token 模式 |
| 同步 | Elog (`@elog/cli`) |
| 构建 | VitePress 1.6 |
| 部署 | GitHub Pages（Actions 原生） |
| 调度 | GitHub Actions Cron |

## 📖 How It Works

```mermaid
graph LR
    A[语雀知识库] -->|Elog| B[Markdown]
    B -->|VitePress| C[静态站点]
    C -->|GitHub Actions| D[GitHub Pages]
    D --> E[博客上线]
```

## 📜 License

MIT — 基于 [elog-x/yuque-vitepress](https://github.com/elog-x/yuque-vitepress)

## 🙏 Credits

- [Elog](https://github.com/LetTTGACO/elog) — 跨平台 Markdown 同步
- [VitePress](https://vitepress.dev/) — 静态站点生成器
- [yuque-vitepress](https://github.com/elog-x/yuque-vitepress) — 模板参考
