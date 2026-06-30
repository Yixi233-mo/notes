const fs = require('fs'), path = require('path'), { execSync } = require('child_process');

const localConfig = path.join(__dirname, '..', 'config.txt');
const repoKB = path.join(__dirname, 'kblist.txt');
let token = process.env.YUQUE_TOKEN, kbs = [];

function parse(text) {
  return text.split('\n').map(l => l.trim())
    .filter(l => l && !l.startsWith('#') && l.includes('|'))
    .map(l => l.split('|').map(s => s.trim()))
    .filter(p => p.length >= 3)
    .map(p => ({ name: p[0], login: p[1], repo: p[2] }));
}

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
if (!kbs.length && fs.existsSync(repoKB)) kbs = parse(fs.readFileSync(repoKB, 'utf-8'));
if (!kbs.length) { console.log('No KB configured.'); process.exit(0); }
if (!token) { console.error('YUQUE_TOKEN not found!'); process.exit(1); }

const cacheDir = path.join(__dirname, '.cache');
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

console.log(`Syncing ${kbs.length} KB(s)...\n`);
for (const kb of kbs) {
  const outputDir = './src/content/posts';
  const imageDir = './src/assets/images';
  const cacheFile = `./.cache/${kb.name.replace(/[/:*?"<>|]/g, '-')}.json`;
  console.log(`[${kb.name}] -> ${outputDir}`);
  try {
    execSync(`node ./node_modules/@elog/cli/dist/index.js sync -a ${cacheFile}`, {
      cwd: __dirname,
      env: { ...process.env, YUQUE_TOKEN: token, YUQUE_LOGIN: kb.login, YUQUE_REPO: kb.repo, YUQUE_OUTPUT_DIR: outputDir, YUQUE_IMAGE_DIR: imageDir },
      stdio: 'pipe', timeout: 180000
    });
    console.log('  OK\n');
  } catch (err) {
    console.error('  FAIL:', (err.stderr?.toString() || err.message).slice(0, 300), '\n');
  }
}
console.log('Done.');
