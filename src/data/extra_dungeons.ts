type Monster = {
  name: string
  floors: string
  hp: number
  atk: number
  def: number
  drop?: string
}

type ItemCategory = { label: string; items: string[] }

type DungeonData = {
  name: string
  description: string
  monsters: Monster[]
  itemCategories: ItemCategory[]
  strategy: string
}

export const extraDungeonData: Record<string, DungeonData> = {
  '1': { name: '魔物の心髄',       description: '', monsters: [], itemCategories: [], strategy: '' },
  '2': { name: '未来へ続く道',     description: '', monsters: [], itemCategories: [], strategy: '' },
  '3': { name: 'もっと不思議の洞窟', description: '', monsters: [], itemCategories: [], strategy: '' },
}
