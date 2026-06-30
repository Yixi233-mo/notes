---
layout: page
title: 管理后台
---

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// --- State ---
const activeMenu = ref('dashboard')
const loading = ref(true)
const error = ref('')
const lastCommit = ref(null)
const lastAction = ref(null)
const syncStatus = ref('')
const triggering = ref(false)
const triggerResult = ref('')
const syncLog = ref([])
const token = ref(localStorage.getItem('gh_token') || '')
const tokenSaved = ref(!!localStorage.getItem('gh_token'))
const scheduleTime = ref(localStorage.getItem('schedule_time') || '02:00')
const blogTitle = ref(localStorage.getItem('blog_title') || '屹兮の摸鱼 AI 日记')
const blogSubtitle = ref(localStorage.getItem('blog_subtitle') || '今天模型又过拟合了，先摸个鱼再说')
const saveMsg = ref('')
const toastVisible = ref(false)
const toastType = ref('ok')
const toastText = ref('')
let timer = null

// --- Toast ---
function toast(type, text) {
  toastType.value = type; toastText.value = text; toastVisible.value = true
  setTimeout(() => toastVisible.value = false, 3000)
}

// --- API ---
async function loadStatus() {
  loading.value = true; error.value = ''
  try {
    const [commitsRes, actionsRes] = await Promise.all([
      fetch('https://api.github.com/repos/Yixi233-mo/notes/commits?per_page=1'),
      fetch('https://api.github.com/repos/Yixi233-mo/notes/actions/runs?per_page=5')
    ])
    if (commitsRes.ok) {
      const c = await commitsRes.json()
      if (c[0]) lastCommit.value = { message: c[0].commit.message, date: new Date(c[0].commit.author.date).toLocaleString('zh-CN') }
    }
    if (actionsRes.ok) {
      const r = await actionsRes.json()
      lastAction.value = r.workflow_runs?.slice(0, 5) || []
      if (lastAction.value.length) {
        const latest = lastAction.value[0]
        syncStatus.value = latest.status === 'completed' ? (latest.conclusion === 'success' ? '✅ 正常' : '❌ 失败') : '🔄 运行中'
      }
    }
  } catch { error.value = 'API 访问受限' }
  loading.value = false
}

async function triggerSync() {
  if (!token.value.trim()) return toast('err', '请先配置 Token')
  triggering.value = true; triggerResult.value = ''; syncLog.value = ['🚀 触发同步...']
  try {
    const res = await fetch('https://api.github.com/repos/Yixi233-mo/notes/actions/workflows/deploy.yml/dispatches', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token.value.trim(), 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ ref: 'master' })
    })
    if (res.ok || res.status === 204) {
      syncLog.value.push('✅ 同步已触发', '⏳ 等待 GitHub Actions 执行...', '📋 可前往 Actions 页面查看进度')
      toast('ok', '同步已触发！约 3 分钟后生效')
      setTimeout(loadStatus, 5000)
    } else if (res.status === 401) {
      syncLog.value.push('❌ Token 无效')
      toast('err', 'Token 无效')
    } else {
      syncLog.value.push('❌ HTTP ' + res.status)
      toast('err', '触发失败: ' + res.status)
    }
  } catch { syncLog.value.push('❌ 网络错误'); toast('err', '网络错误') }
  triggering.value = false
}

function saveToken() {
  if (token.value.trim()) { localStorage.setItem('gh_token', token.value.trim()); tokenSaved.value = true; toast('ok', 'Token 已保存') }
}
function saveSchedule() { localStorage.setItem('schedule_time', scheduleTime.value); toast('ok', '已保存') }
function saveBlogSettings() {
  localStorage.setItem('blog_title', blogTitle.value); localStorage.setItem('blog_subtitle', blogSubtitle.value);
  toast('ok', '设置已保存，重新构建后生效')
}
function clearToken() { localStorage.removeItem('gh_token'); token.value = ''; tokenSaved.value = false; triggerResult.value = '' }

// KB 数据
const kbs = ref([
  { name: 'Python 学习笔记', count: 41, status: '已同步', updated: '2026-06-28', login: 'yuqueyonghu-dg6ehw' }
])

// 轮询
onMounted(() => { loadStatus(); timer = setInterval(loadStatus, 30000) })
onUnmounted(() => clearInterval(timer))

// 菜单
const menus = [
  { key: 'dashboard', label: '📊 总览' },
  { key: 'sync', label: '🔄 同步控制' },
  { key: 'kb', label: '📚 知识库管理' },
  { key: 'schedule', label: '⏰ 定时设置' },
  { key: 'deploy', label: '🚀 部署状态' },
  { key: 'settings', label: '⚙️ 博客设置' },
]
</script>

<style>
.admin-layout { display: flex; gap: 24px; min-height: 70vh; }
.admin-sidebar {
  width: 180px; flex-shrink: 0;
  border-right: 1px solid var(--vp-c-divider);
  padding-right: 16px;
}
.admin-sidebar .menu-item {
  display: block; padding: 10px 14px; border-radius: 8px;
  cursor: pointer; font-size: .9rem; margin-bottom: 4px;
  transition: all .2s; color: var(--vp-c-text-1); text-decoration: none;
}
.admin-sidebar .menu-item:hover { background: var(--vp-c-bg-soft); }
.admin-sidebar .menu-item.active { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: 600; }
.admin-content { flex: 1; min-width: 0; }

.stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 24px; }
.stat-card {
  background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;
  border: 1px solid var(--vp-c-divider); position: relative; overflow: hidden;
}
.stat-card .v { font-size: 1.8rem; font-weight: 800; color: var(--vp-c-brand-1); }
.stat-card .l { font-size: .8rem; color: var(--vp-c-text-2); margin-top: 4px; }
.stat-card .s { font-size: .72rem; color: var(--vp-c-text-3); margin-top: 6px; }
.stat-card::after {
  content: ''; position: absolute; top: -20px; right: -20px;
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--vp-c-brand-soft); opacity: .3;
}

.btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 20px; border-radius: 8px; font-weight: 600;
  font-size: .9rem; border: none; cursor: pointer; transition: all .3s;
}
.btn-p { background: linear-gradient(135deg, #6c63ff, #8b83ff); color: #fff; }
.btn-p:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(108,99,255,.35); }
.btn-p:disabled { opacity: .5; cursor: not-allowed; }
.btn-o { border: 2px solid var(--vp-c-brand-1); color: var(--vp-c-brand-1); background: none; }
.btn-o:hover { background: var(--vp-c-brand-soft); }
.btn-sm { padding: 5px 12px; font-size: .8rem; }

.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-weight: 600; font-size: .85rem; margin-bottom: 6px; }
.form-group input, .form-group select {
  width: 100%; padding: 10px 14px; border-radius: 8px;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg);
  color: var(--vp-c-text-1); font-size: .9rem;
}
.form-group input:focus { border-color: var(--vp-c-brand-1); outline: none; }

.log-box {
  background: #1e1e2e; color: #a8e6cf; border-radius: 10px;
  padding: 16px; font-family: monospace; font-size: .85rem;
  max-height: 300px; overflow-y: auto; line-height: 1.8;
}

.toast {
  position: fixed; bottom: 24px; right: 24px; z-index: 9999;
  padding: 12px 24px; border-radius: 10px; font-weight: 600;
  font-size: .9rem; transition: all .3s;
}
.toast.ok { background: #dcfce7; color: #15803d; }
.toast.err { background: #fee2e2; color: #991b1b; }

.run-list { font-size: .85rem; }
.run-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 0; border-bottom: 1px solid var(--vp-c-divider); gap: 12px;
}
.tag { padding: 3px 10px; border-radius: 20px; font-size: .75rem; font-weight: 600; }
.tag.ok { background: #dcfce7; color: #15803d; }
.tag.fail { background: #fee2e2; color: #991b1b; }
.tag.run { background: #dbeafe; color: #1e40af; }
</style>

<div v-if="toastVisible" :class="['toast', toastType]">{{ toastText }}</div>

<h1>🎛️ 管理后台</h1>

<div class="admin-layout">
  <!-- 左侧菜单 -->
  <div class="admin-sidebar">
    <div v-for="m in menus" :key="m.key" :class="['menu-item', { active: activeMenu === m.key }]" @click="activeMenu = m.key">
      {{ m.label }}
    </div>
  </div>

  <!-- 右侧内容 -->
  <div class="admin-content">

    <!-- ====== 总览 ====== -->
    <div v-if="activeMenu === 'dashboard'">
      <div class="stat-grid">
        <div class="stat-card"><div class="v">41</div><div class="l">总文章数</div></div>
        <div class="stat-card"><div class="v">1</div><div class="l">知识库数</div></div>
        <div class="stat-card">
          <div class="v">{{ syncStatus || '--' }}</div><div class="l">同步状态</div>
          <div class="s" v-if="lastCommit">{{ lastCommit.date }}</div>
        </div>
        <div class="stat-card">
          <div class="v" style="font-size:1.2rem">{{ tokenSaved ? '✅ 已配置' : '⚠️ 未配置' }}</div>
          <div class="l">Token 状态</div>
        </div>
      </div>
      <div v-if="loading" style="color:var(--vp-c-text-3)">🔄 加载中...</div>
      <div v-if="error" style="color:#f59e0b">{{ error }}</div>

      <h3 style="margin-top:32px">🔑 Token 配置</h3>
      <div class="form-group">
        <input v-model="token" type="password" placeholder="ghp_xxxxxxxxxxxx" />
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-p btn-sm" @click="saveToken">💾 保存</button>
        <button class="btn btn-o btn-sm" @click="clearToken" v-if="tokenSaved">🗑️ 清除</button>
      </div>
      <p style="font-size:.78rem;color:var(--vp-c-text-3);margin-top:8px">
        需要 <code>workflow</code> 权限。<a href="https://github.com/settings/tokens/new?scopes=workflow&description=BlogSync" target="_blank">生成 Token →</a>
      </p>
    </div>

    <!-- ====== 同步控制 ====== -->
    <div v-if="activeMenu === 'sync'">
      <h3>🔄 手动同步</h3>
      <button class="btn btn-p" @click="triggerSync" :disabled="triggering || !tokenSaved">
        {{ triggering ? '触发中...' : '🚀 立即同步' }}
      </button>
      <div v-if="syncLog.length" class="log-box" style="margin-top:16px">
        <div v-for="l in syncLog">{{ l }}</div>
      </div>
    </div>

    <!-- ====== 知识库管理 ====== -->
    <div v-if="activeMenu === 'kb'">
      <h3>📚 知识库列表</h3>
      <table style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="text-align:left;border-bottom:2px solid var(--vp-c-divider)">
            <th style="padding:10px">名称</th><th>文章数</th><th>状态</th><th>最后同步</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kb in kbs" style="border-bottom:1px solid var(--vp-c-divider)">
            <td style="padding:10px">{{ kb.name }}</td>
            <td>{{ kb.count }}</td>
            <td><span class="tag ok">已同步</span></td>
            <td style="font-size:.8rem">{{ kb.updated }}</td>
            <td><button class="btn btn-o btn-sm" @click="activeMenu='sync'; triggerSync()">🔄 同步</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ====== 定时设置 ====== -->
    <div v-if="activeMenu === 'schedule'">
      <h3>⏰ 自动同步时间</h3>
      <div class="form-group">
        <label>每日同步时间</label>
        <select v-model="scheduleTime">
          <option>02:00</option><option>06:00</option><option>12:00</option><option>18:00</option>
        </select>
      </div>
      <button class="btn btn-p btn-sm" @click="saveSchedule">💾 保存</button>
      <p style="font-size:.8rem;color:var(--vp-c-text-3);margin-top:8px">
        注：实际 cron 时间需在 <code>.github/workflows/deploy.yml</code> 中修改
      </p>
    </div>

    <!-- ====== 部署状态 ====== -->
    <div v-if="activeMenu === 'deploy'">
      <h3>🚀 GitHub Actions 运行记录</h3>
      <div class="run-list" v-if="lastAction && lastAction.length">
        <div class="run-item" v-for="run in lastAction" :key="run.id">
          <span style="flex:1">{{ run.display_title || run.name }}</span>
          <span style="font-size:.78rem;color:var(--vp-c-text-3)">{{ new Date(run.created_at).toLocaleString('zh-CN') }}</span>
          <span :class="['tag', run.status === 'completed' ? (run.conclusion === 'success' ? 'ok' : 'fail') : 'run']">
            {{ run.status === 'completed' ? (run.conclusion === 'success' ? '成功' : '失败') : '运行中' }}
          </span>
          <a :href="run.html_url" target="_blank" style="font-size:.8rem">查看 →</a>
        </div>
      </div>
      <p v-else style="color:var(--vp-c-text-3)">暂无记录</p>
    </div>

    <!-- ====== 博客设置 ====== -->
    <div v-if="activeMenu === 'settings'">
      <h3>⚙️ 博客基本设置</h3>
      <div class="form-group">
        <label>博客标题</label>
        <input v-model="blogTitle" />
      </div>
      <div class="form-group">
        <label>副标题</label>
        <input v-model="blogSubtitle" />
      </div>
      <button class="btn btn-p btn-sm" @click="saveBlogSettings">💾 保存</button>
      <p style="font-size:.8rem;color:var(--vp-c-text-3);margin-top:8px">
        注：保存后存储在本地浏览器，需修改源码并重新部署才能永久生效
      </p>
    </div>

  </div>
</div>
