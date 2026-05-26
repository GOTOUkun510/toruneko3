type DungeonData = {
  name: string
  description: string
  monsters: { name: string; hp: number; exp: number }[]
  items: { name: string }[]
  strategy: string
}

export const dungeonData: Record<string, DungeonData> = {
  '1': {
    name: '謎のほら穴',
    description: '最初に挑戦することになる、入門用のダンジョン。',
    monsters: [
      { name: 'スライム', hp: 5, exp: 2 },
      { name: 'スライムベス', hp: 6, exp: 3 },
    ],
    items: [
      { name: '銅の剣' },
      { name: '木の盾' },
    ],
    strategy: 'バリナボ島フィールドを歩いていると出現し、1回目は強制的に入らされる。',
  },
  '2': {
    name: 'ダンジョン2',
    description: '説明文をここに入れる。',
    monsters: [],
    items: [],
    strategy: '攻略情報をここに入れる。',
  },
}
