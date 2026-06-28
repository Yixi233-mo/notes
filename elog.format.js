/**
 * 自定义文档格式化插件 — 每次同步自动运行
 * 自动修复语雀文档的常见兼容问题
 */
const format = async (doc) => {
  if (doc.body) {
    // === 1. 去除空/残缺 frontmatter ===
    doc.body = doc.body.replace(/^---\n+---\n/gm, '');
    doc.body = doc.body.replace(/^---\s*\n(?![\w-]+:)/gm, '');

    // === 2. 语雀高亮块 → VitePress 兼容 ===
    doc.body = doc.body.replaceAll(':::tips', ':::tip');
    doc.body = doc.body.replaceAll(':::success', ':::tip');

    // === 3. Vue 模板冲突：{{ }} 在代码块外会被 Vue 解析 ===
    // 策略：用零宽空格 ​ 插入到 {{ 之间，破坏 Vue 模板语法但不影响 Markdown 渲染
    // 只处理非代码块区域（``` 之外）
    const parts = doc.body.split(/(```[\s\S]*?```)/g);
    doc.body = parts.map((part, i) => {
      if (i % 2 === 1) return part; // 代码块内不处理
      // 表格/文本中的 {{ 转义
      return part.replace(/\{\{/g, '{​{').replace(/\}\}/g, '}​}');
    }).join('');
  }
  return doc;
};

module.exports = {
  format,
};
