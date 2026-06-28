---
layout: page
title: 博客管理控制台
---

<style>
.admin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin: 24px 0;
}
.stat-card {
  background: var(--vp-c-bg-soft);
  border-radius: 14px;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  transition: all .3s;
  position: relative;
  overflow: hidden;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.12);
  border-color: var(--vp-c-brand-1);
}
.stat-card .icon { font-size: 2rem; margin-bottom: 8px; }
.stat-card .value { font-size: 2rem; font-weight: 800; color: var(--vp-c-brand-1); }
.stat-card .label { font-size: .85rem; color: var(--vp-c-text-2); margin-top: 4px; }
.stat-card::after {
  content: '';
  position: absolute;
  top: -30px; right: -30px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  opacity: .4;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: .95rem;
  text-decoration: none;
  transition: all .3s;
  border: none;
  cursor: pointer;
}
.btn-primary {
  background: linear-gradient(135deg, #6c63ff, #8b83ff);
  color: #fff;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
}
.btn-outline {
  background: transparent;
  border: 2px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.btn-outline:hover {
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}

.flow-box {
  background: var(--vp-c-bg-soft);
  border-radius: 14px;
  padding: 28px;
  margin: 20px 0;
  border: 1px solid var(--vp-c-divider);
}
.flow-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
.flow-step {
  background: var(--vp-c-bg);
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 500;
  font-size: .9rem;
  border: 1px solid var(--vp-c-divider);
  white-space: nowrap;
}
.flow-arrow {
  color: var(--vp-c-brand-1);
  font-size: 1.2rem;
  font-weight: 700;
}

.trouble-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 16px 0;
}
.trouble-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid var(--vp-c-brand-1);
}
.trouble-card.warn { border-left-color: #f59e0b; }
.trouble-card.danger { border-left-color: #ef4444; }
.trouble-card h4 { margin: 0 0 6px 0; font-size: 1rem; }
.trouble-card p { margin: 0; font-size: .85rem; color: var(--vp-c-text-2); }
</style>

<div class="admin-grid">
  <div class="stat-card">
    <div class="icon">📚</div>
    <div class="value">41</div>
    <div class="label">文章总数</div>
  </div>
  <div class="stat-card">
    <div class="icon">✅</div>
    <div class="value">正常</div>
    <div class="label">语雀同步状态</div>
  </div>
  <div class="stat-card">
    <div class="icon">⏰</div>
    <div class="value">02:00</div>
    <div class="label">每日自动同步</div>
  </div>
  <div class="stat-card">
    <div class="icon">🚀</div>
    <div class="value">GitHub</div>
    <div class="label">Pages 部署</div>
  </div>
</div>

## ⚡ 快捷操作

<div class="quick-actions">
  <a class="btn btn-primary" href="https://github.com/Yixi233-mo/python-notes/actions/workflows/deploy.yml" target="_blank">🔄 手动触发同步</a>
  <a class="btn btn-outline" href="https://www.yuque.com/yuqueyonghu-dg6ehw/slk2dt" target="_blank">✍️ 去语雀写笔记</a>
  <a class="btn btn-outline" href="https://github.com/Yixi233-mo/python-notes" target="_blank">📁 GitHub 仓库</a>
  <a class="btn btn-outline" href="https://github.com/Yixi233-mo/python-notes/actions" target="_blank">📋 查看日志</a>
</div>

## 🔧 工作流程

<div class="flow-box">
  <div class="flow-steps">
    <div class="flow-step">✍️ 语雀写笔记</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">⏰ 凌晨2点触发</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">🔄 Elog 同步</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">🏗️ VitePress 构建</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">🚀 Pages 部署</div>
  </div>
</div>

## 🚨 故障排查

<div class="trouble-grid">
  <div class="trouble-card warn">
    <h4>📝 文章没更新？</h4>
    <p>检查 <a href="https://github.com/Yixi233-mo/python-notes/actions" target="_blank">Actions 运行记录</a>，看同步是否失败</p>
  </div>
  <div class="trouble-card danger">
    <h4>🌐 博客打不开？</h4>
    <p>检查 <a href="https://github.com/Yixi233-mo/python-notes/settings/pages" target="_blank">GitHub Pages 设置</a></p>
  </div>
  <div class="trouble-card warn">
    <h4>🔑 Token 过期？</h4>
    <p>更新本地 <code>blog/.elog.env</code> 后重新同步推送</p>
  </div>
  <div class="trouble-card">
    <h4>📖 使用文档</h4>
    <p>查看 <a href="https://github.com/Yixi233-mo/python-notes" target="_blank">仓库 README</a> 了解完整操作流程</p>
  </div>
</div>
