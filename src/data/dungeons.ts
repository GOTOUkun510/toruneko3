type Monster = {
  name: string
  floors: string
  hp: number
  atk: number
  def: number
  drop?: string
}

type DungeonData = {
  name: string
  description: string
  monsters: Monster[]
  itemRows: string[][]
  strategy: string
}

export const dungeonData: Record<string, DungeonData> = {
  '1': {
    name: '謎のほら穴',
    description: '',
    monsters: [
      { name: 'スライム',       floors: '1F〜3F', hp: 5,  atk: 2, def: 2 },
      { name: 'スライムベス',   floors: '1F〜4F', hp: 6,  atk: 3, def: 3 },
      { name: 'いたずらもぐら', floors: '2F〜5F', hp: 8,  atk: 4, def: 3 },
      { name: 'ドラキー',       floors: '3F〜5F', hp: 7,  atk: 3, def: 2 },
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
    monsters: [],
    itemRows: [],
    strategy: '',
  },
}