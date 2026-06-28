/**
 * 多知识库同步脚本
 * 自动读取 ../config.txt，逐个同步
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const localConfig = path.join(__dirname, '..', 'config.txt');  // 本地：含 Token + KB
const repoKBList = path.join(__dirname, 'kblist.txt');          // CI： 仅 KB 列表

let token = process.env.YUQUE_TOKEN;
let kbs = [];

// 解析 KB 列表（名称 | Login | Repo）
function parseKB(text) {
  return text.split('\n').map(l => l.trim())
    .filter(l => l && !l.startsWith('#') && l.includes('|'))
    .map(l => l.split('|').map(s => s.trim()))
    .filter(p => p.length >= 3)
    .map(p => ({ name: p[0], login: p[1], repo: p[2] }));
}

// 1. 本地 config.txt（有 Token + KB）
if (fs.existsSync(localConfig)) {
  const raw = fs.readFileSync(localConfig, 'utf-8');
  token = token || (raw.match(/^TOKEN[：:]\s*(.+)$/m) || [])[1]?.trim();
  const secs = raw.split(/^\[(.+)\]$/gm);
  for (let i = 1; i < secs.length; i += 2) {
    const body = secs[i + 1] || '';
    const login = (body.match(/^LOGIN[：:]\s*(.+)$/m) || [])[1]?.trim();
    const repo = (body.match(/^REPO[：:]\s*(.+)$/m) || [])[1]?.trim();
    if (login && repo) kbs.push({ name: secs[i].trim(), login, repo });
  }
}

// 2. 回退：CI 环境用 kblist.txt
if (!kbs.length && fs.existsSync(repoKBList)) {
  kbs = parseKB(fs.readFileSync(repoKBList, 'utf-8'));
}

if (!kbs.length) { console.log('No KB configured.'); process.exit(0); }
if (!token) { console.error('YUQUE_TOKEN not found!'); process.exit(1); }

console.log(`=== Syncing ${kbs.length} knowledge base(s) ===\n`);

const cacheDir = path.join(__dirname, '.cache');
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

for (const kb of kbs) {
  const dirName = kb.name.replace(/[\/\\:*?"<>|]/g, '-');
  const outputDir = `./docs/docs/${dirName}`;
  const imageDir = `./docs/images/${dirName}`;
  const cacheFile = `./.cache/${dirName}.json`;

  console.log(`[${kb.name}] -> ${outputDir}`);

  try {
    execSync(`npx elog sync -a ${cacheFile}`, {
      cwd: __dirname,
      env: {
        ...process.env,
        YUQUE_TOKEN: token,
        YUQUE_LOGIN: kb.login,
        YUQUE_REPO: kb.repo,
        YUQUE_OUTPUT_DIR: outputDir,
        YUQUE_IMAGE_DIR: imageDir,
      },
      stdio: 'pipe',
      timeout: 180000
    });
    console.log(`  OK\n`);
  } catch (err) {
    const msg = err.stderr?.toString() || err.message;
    console.error(`  FAIL: ${msg.slice(0, 300)}\n`);
  }
}

console.log('=== Done ===');
