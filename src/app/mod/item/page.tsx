import { modItems } from '@/data/modItems'

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