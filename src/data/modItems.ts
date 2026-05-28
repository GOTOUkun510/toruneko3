export type ModItem = {
  name: string
  category: string
  power?: string
  slots?: string
  note?: string
  description: string
}

export const modItems: ModItem[] = [
  { name: '風魔の剣', category: '剣', power: '20(99)', slots: '3', note: '', description: '印：悪・飛' },
  { name: 'サイドワインダー', category: '剣', power: '7(99)', slots: '3', note: '', description: 'うしろに並んでいる敵も連続で攻撃する。他の武器に合成できない。' },
  { name: 'ふきとばしのゆび', category: '剣', power: '2(10)', slots: '1', note: '', description: '攻撃した敵をふきとばす。他の武器に合成できない。' },
  { name: '皮の盾', category: '盾', power: '2(99)', slots: '2', note: '', description: '印：ハラモチ・サビ' },
  { name: 'ドラゴンシールド', category: '盾', power: '7(99)', slots: '2', note: '', description: '印：竜' },
  { name: 'うろこの盾', category: '盾', power: '4(99)', slots: '3', note: '', description: '印：毒(敵の攻撃による毒のみ無効)' },
  { name: 'みかがみの盾', category: '盾', power: '5(99)', slots: '1', note: '', description: '印：サビ・魔法弾跳ね返し' },
  { name: '魔法の盾', category: '盾', power: '6(99)', slots: '1', note: '', description: '印：魔(魔封じと同様だが、鈍足にならない)' },
  { name: 'あくまの爪', category: '爪', power: '15(99)', slots: '', note: '勧誘率：7.0%', description: '印：毒(攻撃した敵に毒を与えることがある)、異種合成' },
  { name: 'ホリーの爪', category: '爪', power: '2(99)', slots: '', note: '勧誘率：5.0%', description: '印：壁(壁を掘れるが壊れることがある)' },
  { name: '魔法の爪', category: '爪', power: '5(99)', slots: '', note: '勧誘率：2.0%', description: '敵モンスターを倒すと心を落とすことがある。' },
  { name: '凍らずの指輪', category: '指輪', power: '', slots: '2', note: '', description: '印：氷(氷状態にならず、氷系の攻撃を無効化)' },
  { name: '妖精の指輪', category: '指輪', power: '', slots: '3', note: '', description: 'この指輪につけた印は罠などで封印されない。この指輪自体には印はついていない。' },
  { name: 'スライムの指輪', category: '指輪', power: '', slots: '2', note: '', description: '印：スライム(味方のスライム系のモンスターが特技・特性を手に入れたり、レベルアップ時に能力ボーナス)' },
  { name: '魔物使いの指輪', category: '指輪', power: '', slots: '2', note: '', description: '印：封(仲間モンスターが特技を使用しなくなる。)' },
  { name: '静心の指輪', category: '指輪', power: '', slots: '1', note: '', description: '印：狂(バーサーカー状態を無効化) 印：恐(おびえ状態を無効化)' },
  { name: '伝心の指輪', category: '指輪', power: '', slots: '2', note: '', description: '印：伝(味方モンスターと離れていても命令が出せるようになる)' },
  { name: 'まじゅつしの杖', category: '杖', power: '', slots: '', note: 'まじゅつしがドロップ', description: '以下の3つの効果からランダム：ふきとばしの杖 / ラリホーの杖 / 催眠' },
  { name: '影ぬいの矢', category: '矢', power: '', slots: '', note: '', description: '当たった敵をはりつけ状態にする。' },
  { name: 'めつぶし石', category: '石', power: '', slots: '', note: '', description: '当たった敵をめつぶし状態にする。射程は石と同じ2マス。' },
  { name: '時の砂の巻物', category: '巻物', power: '', slots: '', note: 'もっと不思議の洞窟のみ', description: 'その階層をやり直せる。(所持アイテムやステータスは元に戻らない)' },
  { name: '印増大の巻物', category: '巻物', power: '', slots: '', note: '', description: '選んだ装備の印の数が増える。' },
  { name: 'スペルブック', category: '巻物', power: '', slots: '', note: '', description: '書かれた呪文を選んで唱える。最初はイオ・ホイミのみだが、スペルブックを読むたびに呪文が増えていく。' },
  { name: 'パンの壺', category: '壺', power: '', slots: '', note: '', description: '中に入れたアイテムがパンに変化する。どのパンに変化するかはランダム。' },
  { name: '祈りの壺', category: '壺', power: '', slots: '', note: '', description: '中に入れたアイテムの回数や強化値が増える。剣・盾・爪：強化値が1増える。矢・石：個数が4〜6増える。杖：回数が1〜3増える。' },
  { name: '分裂の壺', category: '壺', power: '', slots: '', note: '容量：2', description: '中に入れたアイテムの複製ができる。強化値や印や回数はコピーされない。' },
  { name: 'モンスターの壺', category: '壺', power: '', slots: '', note: '容量：1', description: '押すと味方モンスターをすいこんで持ち歩ける。もう一度押すとそのモンスターを正面に召喚する。' },
  { name: 'じごくのパン', category: 'パン', power: '', slots: '', note: 'じごくのタマネギがドロップ', description: '食べるとランダムな効果。階段を降りるまで効果が継続する。(透明になる / すばやさが上がる / すばやさが下がる / パワーアップ状態 / 草がよくきく状態 / まどわし状態 / 最大HP上昇 / 最大HP減少)' },
  { name: 'まもののエサ', category: '草', power: '', slots: '', note: '', description: '敵モンスターに当てると勧誘率が上がる。味方モンスターに当てると最大HPが5上がる。プレイヤーが飲むと混乱する。' },
  { name: 'まもりのたね', category: '草', power: '', slots: '', note: '', description: 'プレイヤーが飲んだ場合、防御ランクが1上がる。防御ランクがマイナス値の場合は元に戻る。モンスターに当てた場合は、防御力が5上がる。' },
  { name: '賢者の石', category: 'その他', power: '', slots: '', note: '', description: 'フロア中の味方モンスターのHPを100回復する。異種合成：空き印増' },
  { name: 'パンドラボックス', category: 'その他', power: '', slots: '', note: '', description: 'アイテムに化けているパンドラボックス。(ミミックと同様)' },
]