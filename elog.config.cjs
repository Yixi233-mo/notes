module.exports = {
  write: {
    platform: 'yuque',
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      // 通过环境变量 YUQUE_OUTPUT_DIR 控制输出目录，默认 docs/docs
      outputDir: process.env.YUQUE_OUTPUT_DIR || './src/content/posts',
      filename: 'title',
      format: 'markdown',
      catalog: true,
      formatExt: './elog.format.js'
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: process.env.YUQUE_IMAGE_DIR || './src/assets/images',
      pathFollowDoc: true,
    }
  }
}
