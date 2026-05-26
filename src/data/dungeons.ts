type Monster = {
  name: string
  floors: string
  hp: number
  atk: number
  def: number
  exp?: number
  special?: string
  drop?: string
}

type ItemCategory = { label: string; items: string[] }

type DungeonData = {
  name: string
  description: string
  monsters: Monster[]
  itemCategories: ItemCategory[]
  traps?: string[]
  strategy: string
}

export const dungeonData: Record<string, DungeonData> = {
  '1':  { name: '謎のほら穴',         description: '', monsters: [{ name: 'スライム', floors: '1F〜3F', hp: 5, atk: 2, def: 2 }, { name: 'スライムベス', floors: '1F〜4F', hp: 6, atk: 3, def: 3 }, { name: 'いたずらもぐら', floors: '2F〜5F', hp: 8, atk: 4, def: 3 }, { name: 'ドラキー', floors: '3F〜5F', hp: 7, atk: 3, def: 2 }], itemCategories: [{ label: '武器', items: ['銅の剣'] }, { label: '盾', items: ['木の盾'] }, { label: '壷', items: ['回復の壺'] }, { label: '草', items: ['火炎草', '毒けし草', 'ラリホー草', 'ルーラ草'] }], strategy: '最初に挑戦することになる、入門用のダンジョン。バリナボ島フィールドを歩いていると出現し、1回目は強制的に入らされる。' },
  '2':  { name: 'いざないの洞くつ',   description: '', monsters: [{ name: 'スライム', floors: '1F〜2F', hp: 5, atk: 0, def: 0, exp: 2 }, { name: 'スライムベス', floors: '1F〜3F', hp: 6, atk: 0, def: 0, exp: 3 }, { name: 'ドラキー', floors: '1F〜3F', hp: 7, atk: 0, def: 0, exp: 3 }, { name: 'いたずらもぐら', floors: '2F〜4F', hp: 8, atk: 0, def: 0, exp: 4 }, { name: 'ももんじゃ', floors: '3F〜5F', hp: 12, atk: 0, def: 0, exp: 6 }, { name: 'おおきづち', floors: '4F〜6F', hp: 15, atk: 0, def: 0, exp: 8 }], itemCategories: [{ label: '杖', items: ['ホイミの杖'] }, { label: '草', items: ['火炎草', 'かなしばりのたね', '世界樹の葉', 'ラリホー草', 'ルーラ草'] }, { label: '壷', items: ['保存の壺', '回復の壺'] }, { label: 'パン', items: ['パン'] }], strategy: '注意点は特になし。' },
  '3':  { name: '南海の地下道', description: 'ワナ初登場。徐々に様々な特技の持ち主が現れる。きめんどうしのバシルーラではぐれたら全体マップを参考に合流。マドハンドは持ち物を荔らしてくるので完全に仲間に任せる。ゆうれいは広い部屋に誘導してから。Ｌｖ５おおきづちもかなりの強敵なので、手ごわいと思ったら火炎草かイネスのイオに頼ったほうがいい。', monsters: [{ name: 'おおナメクジ', floors: '1F〜3F', hp: 17, atk: 8, def: 7, exp: 7 }, { name: 'きめんどうし', floors: '1F〜4F', hp: 18, atk: 9, def: 8, exp: 10, special: 'バシルーラの呼文' }, { name: 'オニオーン', floors: '1F〜5F', hp: 10, atk: 1, def: 1, exp: 1, special: '常に逃走・パンを落とす' }, { name: 'ファーラット', floors: '2F〜4F', hp: 21, atk: 10, def: 9, exp: 9, special: '２マス間合いを取る' }, { name: 'マドハンド', floors: '4F〜7F', hp: 10, atk: 6, def: 5, exp: 9, special: '持ち物投げ捨て・拾い投げ' }, { name: 'キラースコップ', floors: '4F〜7F', hp: 22, atk: 10, def: 9, exp: 11 }, { name: 'バブルスライム', floors: '4F〜7F', hp: 21, atk: 9, def: 7, exp: 12, special: 'まれに攻撃＋ちから１減' }, { name: 'ゴースト', floors: '5F〜7F', hp: 21, atk: 10, def: 9, exp: 13, special: '倍速１回攻撃' }, { name: 'ゆうれい', floors: '5F〜7F', hp: 23, atk: 18, def: 5, exp: 15, special: '壁抜け・不規則行動' }, { name: 'Lv5おおきづち', floors: '6F〜7F', hp: 41, atk: 18, def: 26, exp: 24, special: 'ちからため' }], itemCategories: [{ label: '武器', items: ['銅の剣'] }, { label: '杖', items: ['ホイミの杖', 'いかずちの杖'] }, { label: '壷', items: ['保存の壺', '回復の壺', '火薬壺'] }, { label: '草', items: ['火炎草', 'ラリホー草', 'まどわし草', '鉄化のたね', '毒けし草', 'すばやさのたね', '世界樹の葉'] }, { label: '巻物', items: ['リレミトの巻物'] }, { label: 'その他', items: ['パン', 'ゴールド'] }], traps: ['木の矢', '鉄球', 'ワープ', '睡眠ガス', '鈍足'], strategy: 'ワナ初登場。徐々に様々な特技の持ち主が現れる。きめんどうしのバシルーラではぐれたら全体マップを参考に合流。マドハンドは持ち物を荔らしてくるので完全に仲間に任せる。ゆうれいは広い部屋に誘導してから。Ｌｖ５おおきづちもかなりの強敵なので、手ごわいと思ったら火炎草かイネスのイオに頼ったほうがいい。ワナ：木の矢・鉄球・ワープ・睡眠ガス・鲈足' },
  '4':  { name: 'さんご礁の神殿 広間', description: '', monsters: [], itemCategories: [], strategy: '' },
  '5':  { name: 'さんご礁の神殿 回廊', description: '', monsters: [], itemCategories: [], strategy: '' },
  '6':  { name: '海底山地 ふもと',     description: '', monsters: [], itemCategories: [], strategy: '' },
  '7':  { name: '海底山地 山頂部',     description: '', monsters: [], itemCategories: [], strategy: '' },
  '8':  { name: '賢者のほら穴',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '9':  { name: '海竜島の遺跡',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '10': { name: '灯台の地下室',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '11': { name: '遺跡の大空洞 南',     description: '', monsters: [], itemCategories: [], strategy: '' },
  '12': { name: '遺跡の大空洞 北',     description: '', monsters: [], itemCategories: [], strategy: '' },
  '13': { name: 'バレイナのほら穴',    description: '', monsters: [], itemCategories: [], strategy: '' },
  '14': { name: '山脈の尾根',          description: '', monsters: [], itemCategories: [], strategy: '' },
  '15': { name: '仙人のほら穴',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '16': { name: 'いけにえのほら穴',    description: '', monsters: [], itemCategories: [], strategy: '' },
  '17': { name: '魔物のほら穴',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '18': { name: '神々の道',            description: '', monsters: [], itemCategories: [], strategy: '' },
  '19': { name: '試練の道',            description: '', monsters: [], itemCategories: [], strategy: '' },
  '20': { name: '密林の墓場',          description: '', monsters: [], itemCategories: [], strategy: '' },
  '21': { name: '密林島のほら穴',      description: '', monsters: [], itemCategories: [], strategy: '' },
  '22': { name: '密林島の発掘場',      description: '', monsters: [], itemCategories: [], strategy: '' },
  '23': { name: '邪悪な風穴',          description: '', monsters: [], itemCategories: [], strategy: '' },
  '24': { name: '暗黒の間',            description: '', monsters: [], itemCategories: [], strategy: '' },
  '25': { name: '封印の洞くつ',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '26': { name: '異世界の迷宮',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '27': { name: '不思議の宝物庫',      description: '', monsters: [], itemCategories: [], strategy: '' },
  '28': { name: 'まぼろしの洞くつ',    description: '', monsters: [], itemCategories: [], strategy: '' },
  '29': { name: '孤島のほら穴',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '30': { name: '化石のほら穴',        description: '', monsters: [], itemCategories: [], strategy: '' },
  '31': { name: '魔物の巣',            description: '', monsters: [], itemCategories: [], strategy: '' },
}