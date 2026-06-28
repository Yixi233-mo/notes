<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import ReadingProgress from './components/ReadingProgress.vue'
import BackToTop from './components/BackToTop.vue'
import ArticleMeta from './components/ArticleMeta.vue'

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()

const isDocPage = () => {
  return page.value.filePath.startsWith('docs/')
}
</script>

<template>
  <ReadingProgress />
  <Layout>
    <template #doc-before>
      <ArticleMeta v-if="isDocPage()" />
    </template>
    <template #doc-footer-before>
      <div v-if="isDocPage()" class="doc-edit-link">
        <a :href="'https://www.yuque.com/yuqueyonghu-dg6ehw/slk2dt'" target="_blank">
          ✏️ 在语雀上编辑这篇文章 →
        </a>
      </div>
    </template>
  </Layout>
  <BackToTop />
</template>

<style>
/* 语雀编辑链接 */
.doc-edit-link {
  margin-top: 24px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
}
.doc-edit-link a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}
.doc-edit-link a:hover {
  text-decoration: underline;
}
</style>
