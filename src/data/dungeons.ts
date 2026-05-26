type Monster = { name: string; hp: number; exp: number; floors: string[] }

type DungeonData = {
  name: string
  description: string
  floorLabels: string[]
  monsters: Monster[]
  itemRows: string[][]
  strategy: string
}

export const dungeonData: Record<string, DungeonData> = {
  '1': {
    name: '謎のほら穴',
    description: '',
    floorLabels: ['1F', '2F', '3F'],
    monsters: [
      { name: 'スライム',     hp: 5, exp: 2, floors: ['○', '○', '○'] },
      { name: 'スライムベス', hp: 6, exp: 3, floors: ['○', '○', '○'] },
      { name: 'ドラキー',     hp: 7, exp: 3, floors: ['－', '－', '○'] },
      { name: 'いたずらもぐら', hp: 8, exp: 4, floors: ['－', '－', '○'] },
    ],
    itemRows: [
      ['銅の剣', '', '', ''],
      ['木の盾', '', '', ''],
      ['回復の壺', '', '', ''],
      ['火炎草', '毒けし草', 'ラリホー草', 'ルーラ草'],
    ],
    strategy: '最初に挑戦することになる、入門用のダンジョン。バリナボ島フィールドを歩いていると出現し、1回目は強制的に入らされる。',
  },
  '2': {
    name: 'ダンジョン2',
    description: '',
    floorLabels: ['1F'],
    monsters: [],
    itemRows: [],
    strategy: '',
  },
}