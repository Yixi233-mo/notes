/**
 * 多知识库同步脚本
 * 自动读取 ../config.txt，逐个同步
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const configPath = path.join(__dirname, '..', 'config.txt');
if (!fs.existsSync(configPath)) {
  console.log('config.txt not found');
  process.exit(0);
}

// 解析配置：TOKEN + [知识库名] / LOGIN / REPO
const raw = fs.readFileSync(configPath, 'utf-8');
const token = (raw.match(/^TOKEN[：:]\s*(.+)$/m) || [])[1]?.trim();
const sections = raw.split(/^\[(.+)\]$/gm);
const kbs = [];
for (let i = 1; i < sections.length; i += 2) {
  const name = sections[i].trim();
  const body = sections[i + 1] || '';
  const login = (body.match(/^LOGIN[：:]\s*(.+)$/m) || [])[1]?.trim();
  const repo = (body.match(/^REPO[：:]\s*(.+)$/m) || [])[1]?.trim();
  if (login && repo) kbs.push({ name, login, repo });
}

if (!kbs.length) { console.log('No KB configured.'); process.exit(0); }
if (!token) { console.error('TOKEN not found in config.txt!'); process.exit(1); }

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
