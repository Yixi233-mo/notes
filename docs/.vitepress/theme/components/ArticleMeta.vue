<template>
  <div class="article-meta">
    <span class="meta-item">📝 语雀编写</span>
    <span class="meta-item">🔄 自动同步</span>
    <span class="meta-item">📅 <ClientOnly><span v-text="dateStr" /></ClientOnly></span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const dateStr = computed(() => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
})
</script>

<style scoped>
.article-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 0 16px;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  border-bottom: 1px dashed var(--vp-c-divider);
}
.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
