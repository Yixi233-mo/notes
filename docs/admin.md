---
layout: page
title: 博客管理控制台
---

<script setup>
import { ref, onMounted, computed } from 'vue'

// 状态
const loading = ref(true)
const error = ref('')
const lastCommit = ref(null)
const lastAction = ref(null)
const actionStatus = ref('')
const token = ref(localStorage.getItem('gh_token') || '')
const tokenSaved = ref(!!localStorage.getItem('gh_token'))
const triggering = ref(false)
const triggerResult = ref('')

// 取仓库公开信息（无需 Token）
async function loadStatus() {
  loading.value = true
  try {
    const [commitsRes, actionsRes] = await Promise.all([
      fetch('https://api.github.com/repos/Yixi233-mo/notes/commits?per_page=1'),
      fetch('https://api.github.com/repos/Yixi233-mo/notes/actions/runs?per_page=3')
    ])
    if (commitsRes.ok) {
      const commits = await commitsRes.json()
      if (commits[0]) {
        lastCommit.value = {
          message: commits[0].commit.message,
          date: new Date(commits[0].commit.author.date).toLocaleString('zh-CN'),
          author: commits[0].commit.author.name
        }
      }
    }
    if (actionsRes.ok) {
      const runs = await actionsRes.json()
      lastAction.value = runs.workflow_runs?.slice(0, 3) || []
      if (lastAction.value.length > 0) {
        actionStatus.value = lastAction.value[0].status === 'completed'
          ? (lastAction.value[0].conclusion === 'success' ? '✅ 正常' : '❌ 失败')
          : '🔄 运行中'
      }
    }
  } catch (e) {
    error.value = 'GitHub API 访问受限（可开代理刷新）'
  }
  loading.value = false
}

// 保存 Token 到本地
function saveToken() {
  if (token.value.trim()) {
    localStorage.setItem('gh_token', token.value.trim())
    tokenSaved.value = true
    triggerResult.value = '✅ Token 已保存'
  }
}
function clearToken() {
  localStorage.removeItem('gh_token')
  token.value = ''
  tokenSaved.value = false
  triggerResult.value = ''
}

// 触发同步
async function triggerSync() {
  if (!token.value.trim()) return triggerResult.value = '⚠️ 请先填入 GitHub Token'
  triggering.value = true
  triggerResult.value = ''
  try {
    const res = await fetch(
      'https://api.github.com/repos/Yixi233-mo/notes/actions/workflows/deploy.yml/dispatches',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token.value.trim(),
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ref: 'master' })
      }
    )
    if (res.ok || res.status === 204) {
      triggerResult.value = '✅ 同步已触发！约 3 分钟后刷新博客'
      setTimeout(loadStatus, 3000)
    } else if (res.status === 401) {
      triggerResult.value = '❌ Token 无效，请重新填入'
    } else {
      triggerResult.value = '❌ 触发失败 (HTTP ' + res.status + ')'
    }
  } catch (e) {
    triggerResult.value = '❌ 网络错误，请检查代理'
  }
  triggering.value = false
}

// 刷新状态
async function refresh() {
  triggerResult.value = '🔄 刷新中...'
  await loadStatus()
  triggerResult.value = '✅ 已刷新'
}

onMounted(loadStatus)
</script>

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
.stat-card .sub { font-size: .75rem; color: var(--vp-c-text-3); margin-top: 8px; }
.stat-card::after {
  content: '';
  position: absolute; top: -30px; right: -30px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  opacity: .4;
}

.section-title {
  font-size: 1.1rem; font-weight: 700;
  margin: 32px 0 16px;
  display: flex; align-items: center; gap: 8px;
}
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 10px; font-weight: 600;
  font-size: .95rem; text-decoration: none; transition: all .3s;
  border: none; cursor: pointer;
}
.btn-primary {
  background: linear-gradient(135deg, #6c63ff, #8b83ff); color: #fff;
}
.btn-primary:hover {
  transform: translateY(-2px); box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
}
.btn-primary:disabled { opacity: .5; cursor: not-allowed; transform: none; }
.btn-outline {
  background: transparent; border: 2px solid var(--vp-c-brand-1); color: var(--vp-c-brand-1);
}
.btn-outline:hover {
  background: var(--vp-c-brand-soft); transform: translateY(-2px);
}
.btn-sm {
  padding: 6px 14px; font-size: .8rem; border-radius: 6px;
}

.action-row {
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin: 12px 0;
}
.token-box {
  background: var(--vp-c-bg-soft); border-radius: 10px; padding: 16px;
  border: 1px solid var(--vp-c-divider); margin: 12px 0;
}
.token-box input {
  width: 100%; padding: 10px 14px; border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg); color: var(--vp-c-text-1);
  font-size: .9rem; font-family: monospace;
}
.msg { font-size: .9rem; padding: 8px 0; }
.msg.ok { color: #22c55e; }
.msg.err { color: #ef4444; }

.log-list {
  background: var(--vp-c-bg-soft); border-radius: 10px;
  border: 1px solid var(--vp-c-divider); overflow: hidden;
}
.log-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; border-bottom: 1px solid var(--vp-c-divider);
  font-size: .85rem; gap: 12px;
}
.log-item:last-child { border-bottom: none; }
.log-item .status {
  padding: 3px 10px; border-radius: 20px; font-size: .75rem; font-weight: 600;
  white-space: nowrap;
}
.status.success { background: #dcfce7; color: #15803d; }
.status.failure { background: #fee2e2; color: #991b1b; }
.status.running { background: #dbeafe; color: #1e40af; }
</style>

<h1>🎛️ 博客管理控制台</h1>

<!-- 状态面板 -->
<div v-if="loading" style="color:var(--vp-c-text-2)">🔄 加载中...</div>
<div v-if="error" style="color:#f59e0b">{{ error }}</div>

<div class="admin-grid" v-if="!loading">
  <div class="stat-card">
    <div class="icon">📚</div>
    <div class="value">41</div>
    <div class="label">文章总数</div>
  </div>
  <div class="stat-card">
    <div class="icon">{{ actionStatus ? '📡' : '⏰' }}</div>
    <div class="value" style="font-size:1.2rem">{{ actionStatus || '每日 02:00' }}</div>
    <div class="label">同步状态</div>
    <div class="sub" v-if="lastCommit">最近提交：{{ lastCommit.date }}</div>
  </div>
  <div class="stat-card">
    <div class="icon">🚀</div>
    <div class="value" style="font-size:1.2rem">GitHub</div>
    <div class="label">Pages 部署</div>
    <div class="sub" v-if="lastCommit">{{ lastCommit.message?.substring(0, 30) }}...</div>
  </div>
  <div class="stat-card">
    <div class="icon">👤</div>
    <div class="value" style="font-size:1.2rem">Token</div>
    <div class="label">{{ tokenSaved ? '✅ 已配置' : '⚠️ 未配置' }}</div>
    <div class="sub">{{ tokenSaved ? '可一键触发同步' : '填入后可一键同步' }}</div>
  </div>
</div>

<!-- 操作区 -->
<div class="section-title">⚡ 操作</div>
<div class="action-row">
  <button class="btn btn-primary" @click="triggerSync" :disabled="triggering || !tokenSaved">
    {{ triggering ? '🔄 触发中...' : '🔄 触发同步' }}
  </button>
  <button class="btn btn-outline" @click="refresh">🔃 刷新状态</button>
  <a class="btn btn-outline" href="https://www.yuque.com/yuqueyonghu-dg6ehw/slk2dt" target="_blank">✍️ 去语雀</a>
  <a class="btn btn-outline" href="https://github.com/Yixi233-mo/notes" target="_blank">📁 仓库</a>
</div>
<div :class="['msg', triggerResult.startsWith('✅') ? 'ok' : triggerResult.startsWith('❌') ? 'err' : '']" v-if="triggerResult">
  {{ triggerResult }}
</div>

<!-- Token 设置 -->
<div class="token-box">
  <div style="font-weight:600;margin-bottom:8px">🔑 GitHub Token 设置</div>
  <div style="font-size:.8rem;color:var(--vp-c-text-2);margin-bottom:8px">
    需要 <code>workflow</code> 权限。<a href="https://github.com/settings/tokens/new?scopes=workflow&description=Blog%20Sync%20Trigger" target="_blank">点此生成 Token →</a>
  </div>
  <input v-model="token" type="password" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" />
  <div class="action-row" style="margin-top:10px">
    <button class="btn btn-sm btn-outline" @click="saveToken">💾 保存</button>
    <button class="btn btn-sm btn-outline" @click="clearToken" v-if="tokenSaved">🗑️ 清除</button>
  </div>
</div>

<!-- 最近运行 -->
<div class="section-title">📋 最近同步</div>
<div class="log-list" v-if="lastAction && lastAction.length > 0">
  <div class="log-item" v-for="run in lastAction" :key="run.id">
    <span>{{ run.display_title || run.name }}</span>
    <span style="font-size:.75rem;color:var(--vp-c-text-3)">
      {{ new Date(run.created_at).toLocaleString('zh-CN') }}
    </span>
    <span :class="['status', run.status === 'completed'
      ? (run.conclusion === 'success' ? 'success' : 'failure')
      : 'running']">
      {{ run.status === 'completed' ? (run.conclusion === 'success' ? '成功' : '失败') : '运行中' }}
    </span>
    <a :href="run.html_url" target="_blank" style="font-size:.8rem">查看 →</a>
  </div>
</div>
<div v-else style="color:var(--vp-c-text-2);font-size:.9rem">暂无记录</div>

<!-- 帮助 -->
<div class="section-title">🚨 遇到问题？</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px">
  <div style="background:var(--vp-c-bg-soft);padding:16px;border-radius:10px;border-left:3px solid #f59e0b">
    <strong>📝 文章没更新？</strong>
    <p style="margin:4px 0 0;font-size:.85rem;color:var(--vp-c-text-2)">点上面的"触发同步"，看是否成功</p>
  </div>
  <div style="background:var(--vp-c-bg-soft);padding:16px;border-radius:10px;border-left:3px solid #ef4444">
    <strong>🌐 博客打不开？</strong>
    <p style="margin:4px 0 0;font-size:.85rem;color:var(--vp-c-text-2)">检查 <a href="https://github.com/Yixi233-mo/notes/settings/pages" target="_blank">Pages 设置</a></p>
  </div>
  <div style="background:var(--vp-c-bg-soft);padding:16px;border-radius:10px;border-left:3px solid var(--vp-c-brand-1)">
    <strong>🔑 Token 怎么拿？</strong>
    <p style="margin:4px 0 0;font-size:.85rem;color:var(--vp-c-text-2)"><a href="https://github.com/settings/tokens/new?scopes=workflow&description=Blog%20Sync%20Trigger" target="_blank">一键生成 classic token</a>，权限勾 workflow</p>
  </div>
</div>
