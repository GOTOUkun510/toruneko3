import { MetadataRoute } from 'next'
import { dungeonData } from '@/data/dungeons'
import { extraDungeonData } from '@/data/extra_dungeons'
import { itemData } from '@/data/items'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toruneko3.vercel.app'

  // トップページ
  const top: MetadataRoute.Sitemap = [{
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  }]

  // ダンジョン詳細ページ (dungeon/1〜31)
  const dungeons: MetadataRoute.Sitemap = Object.keys(dungeonData).map((id) => ({
    url: `${baseUrl}/dungeon/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 追加ダンジョン詳細ページ (dungeon/32〜34、extraDungeonDataのキーは32〜34)
  const extraDungeons: MetadataRoute.Sitemap = Object.keys(extraDungeonData).map((id) => ({
    url: `${baseUrl}/dungeon/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // アイテムカテゴリページ (item/weapon 等 11カテゴリ)
  const items: MetadataRoute.Sitemap = Object.keys(itemData).map((category) => ({
    url: `${baseUrl}/item/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  // MODページ (mod/boss 等 7ページ)
  const mod: MetadataRoute.Sitemap = [
    '/mod/boss',
    '/mod/heart',
    '/mod/item',
    '/mod/monster',
    '/mod/shinzui-ring',
    '/mod/slime-ring',
    '/mod/spellbook',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...top, ...dungeons, ...extraDungeons, ...items, ...mod]
}
