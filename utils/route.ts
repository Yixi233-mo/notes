import { readdirSync, existsSync } from 'fs'
import { join } from 'path'

const DOCS_DIR = join(process.cwd(), 'docs/docs')

interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

// 从文件目录生成侧边栏（兼容 Elog 缓存格式）
export function genKBSidebar(): SidebarItem[] {
  const items: SidebarItem[] = []
  try {
    const kbs = readdirSync(DOCS_DIR, { withFileTypes: true })
      .filter(e => e.isDirectory() && !e.name.startsWith('.'))

    for (const kb of kbs) {
      const kbDir = join(DOCS_DIR, kb.name)
      const files = readdirSync(kbDir, { withFileTypes: true })
        .filter(e => e.isFile() && e.name.endsWith('.md'))

      const kbItems: SidebarItem[] = []
      for (const f of files) {
        const name = f.name.replace(/\.md$/, '')
        kbItems.push({
          text: name,
          link: `/docs/${encodeURIComponent(kb.name)}/${encodeURIComponent(name)}`
        })
      }

      // 中文排序
      kbItems.sort((a, b) => a.text.localeCompare(b.text, 'zh'))

      items.push({
        text: kb.name,
        collapsed: false,
        items: kbItems
      })
    }
  } catch { /* dir not exist yet */ }

  return items
}

/**
 * 生成语雀导航（兼容旧 API）
 * 优先用 Elog 目录树缓存，回退到文件目录扫描
 */
export const genYuqueSideBar = async (pathname?: string) => {
  // 尝试读取 Elog 缓存（旧版兼容）
  try {
    const cache = await import('../elog.cache.json')
    const { catalog } = cache
    if (catalog?.length) {
      return genYuqueRoute(catalog, pathname)
    }
  } catch { /* no cache */ }

  // 回退：文件目录扫描
  return genKBSidebar()
}

// Elog 缓存格式的目录树 → 侧边栏
function genYuqueRoute(arr: any[], pathname?: string) {
  function loop(parId: string) {
    return arr.filter((cur: any) => cur.parent_uuid === parId).map((cur: any) => {
      const parent = arr.find((item: any) => item.uuid === parId)
      cur.path = (parent?.path || '') + '/' + cur.title
      cur.items = loop(cur.uuid)
      if (cur.items.length) {
        return { text: cur.title, collapsed: false, items: cur.items }
      }
      if (cur.type === 'DOC') {
        return { text: cur.title, link: `${pathname || ''}${cur.path}` }
      }
      return null
    }).filter(Boolean)
  }
  return loop('')
}
