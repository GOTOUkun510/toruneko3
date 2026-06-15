import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'スペルブックの呪文一覧 | トルネコの大冒険3 攻略wiki MOD',
  description: 'トルネコの大冒険3 MODに登場するスペルブックの呪文一覧。各呪文の効果や覚え方をまとめています。',
}

export default function SpellbookPage() {
  const spells = [
    { name: 'イオ', effect: '部屋内の敵全体に30ダメージ', how: '初めから覚えている' },
    { name: 'イオラ', effect: '部屋内の敵全体に50ダメージ', how: 'イオ1回で覚える' },
    { name: 'イオナズン', effect: '部屋内の敵全体に70ダメージ', how: 'イオラ2回で覚える' },
    { name: 'ホイミ', effect: 'トルネコのHPを30回復', how: '初めから覚えている' },
    { name: 'ベホイミ', effect: 'トルネコのHPを50回復', how: 'ホイミ1回で覚える' },
    { name: 'ベホマ', effect: 'トルネコのHPを100回復', how: 'ベホイミ2回で覚える' },
    { name: 'メガンテ', effect: 'トルネコ自身が死ぬ（1/2）／フロア内の敵全員が死ぬ（1/2）', how: 'ランダムで覚える' },
    { name: 'マホトーン', effect: '部屋内の敵全員を封印状態にする', how: 'ランダムで覚える' },
    { name: 'ラリホーマ', effect: '部屋内の敵全員を眠り状態にする', how: 'ランダムで覚える' },
    { name: 'アストロン', effect: 'トルネコ自身を鉄化状態にする', how: 'ランダムで覚える' },
    { name: 'メダパニ', effect: 'メダパニの巻物', how: 'ランダムで覚える' },
    { name: 'ルカナン', effect: 'ルカナンの巻物', how: 'ランダムで覚える' },
    { name: 'バイキルト', effect: 'バイキルトの巻物', how: 'ランダムで覚える' },
    { name: 'スカラ', effect: 'スカラの巻物', how: 'ランダムで覚える' },
    { name: 'レムオル', effect: 'トルネコ自身を透明状態にする', how: 'ランダムで覚える' },
    { name: 'モシャス', effect: 'ランダムなモンスターに変化する', how: 'ランダムで覚える' },
    { name: 'シャナク', effect: 'シャナクの巻物', how: 'ランダムで覚える' },
    { name: 'トラマナ', effect: 'トラマナの巻物', how: 'ランダムで覚える' },
    { name: 'レミーラ', effect: 'レミーラの巻物', how: 'ランダムで覚える' },
    { name: 'ニフラム', effect: 'フロアに出現するモンスターがランダムに選ばれ、ニフラムの効果', how: 'ランダムで覚える' },
    { name: 'ザラキーマ', effect: '部屋内の敵全員が死ぬ', how: 'ランダムで覚える' },
    { name: 'パルプンテ', effect: 'パルプンテの巻物', how: 'ランダムで覚える' },
  ]

  return (
    <main style={{ padding: "2rem" }}>
      <h1>スペルブックの呪文一覧</h1>
      <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.85rem' }}>
        トルネコ3MOD2のスペルブックに書き込まれる呪文の調査データです。
      </p>
      <table>
        <thead>
          <tr>
            <th>呪文</th>
            <th>効果</th>
            <th>覚え方</th>
          </tr>
        </thead>
        <tbody>
          {spells.map((spell) => (
            <tr key={spell.name}>
              <td>{spell.name}</td>
              <td>{spell.effect}</td>
              <td>{spell.how}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}