import { itemData } from '@/data/items'

export async function generateStaticParams() {
  return Object.keys(itemData).map((category) => ({ category }))
}

export default async function ItemPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const data = itemData[category]
  if (!data) return <main style={{ padding: '2rem' }}><h1>カテゴリが見つかりません</h1></main>

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{data.label}一覧</h1>
      <table>
        <thead>
          <tr><th>名前</th><th>説明</th></tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.description ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
