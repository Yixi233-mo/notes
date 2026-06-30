---
layout: page
title: 屹兮の摸鱼 AI 日记
---

<script setup>
import { ref, computed, onMounted } from 'vue'

// KB 数据 — 从文档目录结构构建
const kbs = ref([
  { name: 'Python 学习笔记', slug: 'Python 学习笔记', desc: '从计算机组成到正则表达式，13 章完整教程', count: 41, icon: '🐍', updated: '2026-06-28' }
])

// 最新文章（跨KB取前5）
const recentArticles = ref([
  { title: '15. 正则表达式', kb: 'Python 学习笔记', date: '2026-06-28', slug: '15. 正则表达式' },
  { title: '14. 网络编程', kb: 'Python 学习笔记', date: '2026-06-28', slug: '14. 网络编程' },
  { title: '13.3 多线程', kb: 'Python 学习笔记', date: '2026-06-28', slug: '13.3 多线程（Multithreading）' },
  { title: '13.2 多进程', kb: 'Python 学习笔记', date: '2026-06-28', slug: '13.2多进程（Multiprocessing）' },
  { title: '13.1 进程与线程', kb: 'Python 学习笔记', date: '2026-06-28', slug: '13.1 进程与线程' },
])

const totalArticles = computed(() => kbs.value.reduce((s,k) => s+k.count, 0))
const totalKBs = computed(() => kbs.value.length)
</script>

<style>
.home-hero {
  text-align: center;
  padding: 60px 20px 40px;
}
.home-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6c63ff 0%, #e91e63 50%, #ff9800 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}
.home-hero .subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin: 12px 0 24px;
}
.home-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 20px;
}
.home-stats .stat {
  text-align: center;
}
.home-stats .stat .num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
}
.home-stats .stat .lbl {
  font-size: .8rem;
  color: var(--vp-c-text-3);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 48px 0 20px;
}
.section-header h2 { font-size: 1.3rem; margin: 0; }

/* KB 卡片网格 */
.kb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.kb-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 24px;
  transition: all .3s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
}
.kb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(108,99,255,.12);
  border-color: var(--vp-c-brand-1);
}
.kb-card .kb-icon { font-size: 2.2rem; margin-bottom: 10px; }
.kb-card .kb-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; }
.kb-card .kb-desc { font-size: .85rem; color: var(--vp-c-text-2); margin-bottom: 12px; }
.kb-card .kb-meta {
  display: flex; gap: 16px; font-size: .78rem; color: var(--vp-c-text-3);
}

/* 最新文章列表 */
.article-list { margin: 0; padding: 0; list-style: none; }
.article-list li {
  padding: 12px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
}
.article-list li:last-child { border-bottom: none; }
.article-list a {
  font-weight: 500; text-decoration: none; color: var(--vp-c-text-1);
  flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.article-list a:hover { color: var(--vp-c-brand-1); }
.article-list .kb-tag {
  font-size: .75rem; padding: 2px 10px; border-radius: 12px;
  background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1);
  white-space: nowrap;
}
.article-list .date { font-size: .8rem; color: var(--vp-c-text-3); white-space: nowrap; }
</style>

<div class="home-hero">
  <h1>屹兮の摸鱼 AI 日记</h1>
  <p class="subtitle">今天模型又过拟合了，先摸个鱼再说</p>
  <div class="home-stats">
    <div class="stat">
      <div class="num">{{ totalArticles }}</div>
      <div class="lbl">篇文章</div>
    </div>
    <div class="stat">
      <div class="num">{{ totalKBs }}</div>
      <div class="lbl">个知识库</div>
    </div>
    <div class="stat">
      <div class="num">02:00</div>
      <div class="lbl">每日自动同步</div>
    </div>
  </div>
</div>

<!-- 知识库卡片 -->
<div class="section-header">
  <h2>📚 知识库</h2>
  <a href="/notes/admin" style="font-size:.85rem;color:var(--vp-c-text-2)">管理 →</a>
</div>
<div class="kb-grid">
  <a v-for="kb in kbs" :key="kb.slug" class="kb-card" :href="`/notes/docs/${encodeURIComponent(kb.slug)}/1.计算机组成`">
    <div class="kb-icon">{{ kb.icon }}</div>
    <div class="kb-name">{{ kb.name }}</div>
    <div class="kb-desc">{{ kb.desc }}</div>
    <div class="kb-meta">
      <span>📄 {{ kb.count }} 篇</span>
      <span>🕐 {{ kb.updated }}</span>
    </div>
  </a>
</div>

<!-- 最新动态 -->
<div class="section-header">
  <h2>🆕 最新动态</h2>
  <a href="/notes/docs/Python 学习笔记" style="font-size:.85rem;color:var(--vp-c-text-2)">全部 →</a>
</div>
<ul class="article-list">
  <li v-for="a in recentArticles" :key="a.slug">
    <a :href="`/notes/docs/${encodeURIComponent(a.kb)}/${encodeURIComponent(a.slug)}`">{{ a.title }}</a>
    <span class="kb-tag">{{ a.kb }}</span>
    <span class="date">{{ a.date }}</span>
  </li>
</ul>
