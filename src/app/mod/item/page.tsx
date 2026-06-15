import { modItems } from '@/data/modItems'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '追加アイテム一覧 | トルネコの大冒険3 攻略wiki MOD',
  description: 'トルネコの大冒険3 MOD（Ver0.2.x対応）で追加されたアイテムの一覧。各種追加武器・盾・指輪等の能力や印数、説明をまとめています。',
}

export default function ModItemPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>追加アイテム一覧</h1>
      <p style={{ marginBottom: '1rem', color: '#aaa' }}>トルネコ3MOD2に登場する追加アイテム。(Ver0.2.x)</p>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>種別</th>
            <th>強さ(最大)</th>
            <th>印数</th>
            <th>その他</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          {modItems.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.power}</td>
              <td>{item.slots}</td>
              <td>{item.note}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}