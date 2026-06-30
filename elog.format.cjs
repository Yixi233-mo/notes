const format = async (doc) => {
  if (doc.body) {
    // 注入 Astro frontmatter
    if (!doc.body.startsWith('---\n')) {
      const title = (doc.properties?.title || '').replace(/"/g, '\\"');
      doc.body = '---\ntitle: "' + title + '"\npublished: ' + new Date().toISOString().split('T')[0] + '\n---\n\n' + doc.body;
    }
    // 去空 frontmatter
    doc.body = doc.body.replace(/^---\n+---\n/gm, '');
    doc.body = doc.body.replace(/^---\s*\n(?![\w-]+:)/gm, '');
    // 高亮块兼容
    doc.body = doc.body.replaceAll(':::tips', ':::tip');
    doc.body = doc.body.replaceAll(':::success', ':::tip');
  }
  return doc;
};
module.exports = { format };
