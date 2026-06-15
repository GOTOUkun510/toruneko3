import { MetadataRoute } from 'next'
import { dungeonData } from '@/data/dungeons'
import { extraDungeonData } from '@/data/extra_dungeons'
import { itemData } from '@/data/items'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toruneko3.vercel.app'

  // 静的なメインルートとMOD関連ページ
  const routes = [
    '',
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
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 通常ダンジョンと追加ダンジョンの全詳細ページ (ID 1〜34)
  const dungeons = [
    ...Object.keys(dungeonData),
    ...Object.keys(extraDungeonData),
  ].map((id) => ({
    url: `${baseUrl}/dungeon/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // アイテムカテゴリページ
  const items = Object.keys(itemData).map((category) => ({
    url: `${baseUrl}/item/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...dungeons, ...items]
}
