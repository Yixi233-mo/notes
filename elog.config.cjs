module.exports = {
  write: {
    platform: 'yuque',
    yuque: { token: process.env.YUQUE_TOKEN, login: process.env.YUQUE_LOGIN, repo: process.env.YUQUE_REPO, onlyPublic: false, onlyPublished: true },
  },
  deploy: {
    platform: 'local',
    local: { outputDir: process.env.YUQUE_OUTPUT_DIR || './src/content/posts', filename: 'title', format: 'markdown', catalog: true, formatExt: './elog.format.cjs' }
  },
  image: {
    enable: true, platform: 'local',
    local: { outputDir: process.env.YUQUE_IMAGE_DIR || './src/assets/images', pathFollowDoc: true }
  }
};
