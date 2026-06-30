import{r as t,p as z,q as I,o as d,a as r,z as y,h as n,b as M,g as a,F as T,A}from"./chunks/framework.DmmESFnP.js";const C={class:"admin-layout"},B={class:"admin-sidebar"},L=["onClick"],N={class:"admin-content"},V=JSON.parse('{"title":"管理后台","description":"","frontmatter":{"layout":"page","title":"管理后台"},"headers":[],"relativePath":"admin.md","filePath":"admin.md","lastUpdated":1782802838000}'),D={name:"admin.md"},F=Object.assign(D,{setup(P){const v=t("dashboard"),u=t(!0),i=t(""),p=t(null),c=t(null),m=t(""),f=t(!1);t(localStorage.getItem("gh_token")||"");const k=t(!!localStorage.getItem("gh_token"));t(localStorage.getItem("schedule_time")||"02:00"),t(localStorage.getItem("blog_title")||"屹兮の摸鱼 AI 日记"),t(localStorage.getItem("blog_subtitle")||"今天模型又过拟合了，先摸个鱼再说");const x=t(!1),_=t("ok"),S=t("");let b=null;async function g(){var e;u.value=!0,i.value="";try{const[o,s]=await Promise.all([fetch("https://api.github.com/repos/Yixi233-mo/notes/commits?per_page=1"),fetch("https://api.github.com/repos/Yixi233-mo/notes/actions/runs?per_page=5")]);if(o.ok){const l=await o.json();l[0]&&(p.value={message:l[0].commit.message,date:new Date(l[0].commit.author.date).toLocaleString("zh-CN")})}if(s.ok){const l=await s.json();if(c.value=((e=l.workflow_runs)==null?void 0:e.slice(0,5))||[],c.value.length){const h=c.value[0];m.value=h.status==="completed"?h.conclusion==="success"?"✅ 正常":"❌ 失败":"🔄 运行中"}}}catch{i.value="API 访问受限"}u.value=!1}z(()=>{g(),b=setInterval(g,3e4)}),I(()=>clearInterval(b));const w=[{key:"dashboard",label:"📊 总览"},{key:"sync",label:"🔄 同步控制"},{key:"kb",label:"📚 知识库管理"},{key:"schedule",label:"⏰ 定时设置"},{key:"deploy",label:"🚀 部署状态"},{key:"settings",label:"⚙️ 博客设置"}];return(e,o)=>(d(),r("div",null,[x.value?(d(),r("div",{key:0,class:y(["toast",_.value])},n(S.value),3)):M("",!0),o[0]||(o[0]=a("h1",null,"🎛️ 管理后台",-1)),a("div",C,[a("div",B,[(d(),r(T,null,A(w,s=>a("div",{key:s.key,class:y(["menu-item",{active:v.value===s.key}]),onClick:l=>v.value=s.key},n(s.label),11,L)),64))]),a("div",N,[a("pre",null,[a("code",null,`<!-- ====== 总览 ====== -->
<div v-if="activeMenu === 'dashboard'">
  <div class="stat-grid">
    <div class="stat-card"><div class="v">41</div><div class="l">总文章数</div></div>
    <div class="stat-card"><div class="v">1</div><div class="l">知识库数</div></div>
    <div class="stat-card">
      <div class="v">`+n(m.value||"--")+`</div><div class="l">同步状态</div>
      <div class="s" v-if="lastCommit">`+n(p.value.date)+`</div>
    </div>
    <div class="stat-card">
      <div class="v" style="font-size:1.2rem">`+n(k.value?"✅ 已配置":"⚠️ 未配置")+`</div>
      <div class="l">Token 状态</div>
    </div>
  </div>
  <div v-if="loading" style="color:var(--vp-c-text-3)">🔄 加载中...</div>
  <div v-if="error" style="color:#f59e0b">`+n(i.value)+`</div>

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
    `+n(f.value?"触发中...":"🚀 立即同步")+`
  </button>
  <div v-if="syncLog.length" class="log-box" style="margin-top:16px">
    <div v-for="l in syncLog">`+n(e.l)+`</div>
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
        <td style="padding:10px">`+n(e.kb.name)+`</td>
        <td>`+n(e.kb.count)+`</td>
        <td><span class="tag ok">已同步</span></td>
        <td style="font-size:.8rem">`+n(e.kb.updated)+`</td>
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
      <span style="flex:1">`+n(e.run.display_title||e.run.name)+`</span>
      <span style="font-size:.78rem;color:var(--vp-c-text-3)">`+n(new Date(e.run.created_at).toLocaleString("zh-CN"))+`</span>
      <span :class="['tag', run.status === 'completed' ? (run.conclusion === 'success' ? 'ok' : 'fail') : 'run']">
        `+n(e.run.status==="completed"?e.run.conclusion==="success"?"成功":"失败":"运行中")+`
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
`,1)])])])]))}});export{V as __pageData,F as default};
