import { itemData } from '@/data/items'
import { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const { category } = await params
  const data = itemData[category]
  if (!data) {
    return {
      title: 'カテゴリが見つかりません',
    }
  }
  return {
    title: `${data.label}一覧 | トルネコの大冒険3 攻略wiki MOD`,
    description: `トルネコの大冒険3 MODに登場する${data.label}の一覧。${data.label}の名称や性能、効果説明などを掲載しています。`,
    // データが入るまでインデックスさせない（thin content対策）
    robots: {
      index: false,
      follow: false,
    },
  }
}

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
          <tr><th>名前</th><th>売値</th><th>買値</th><th>説明・補足</th></tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.sellPrice ?? ''}</td>
              <td>{item.buyPrice ?? ''}</td>
              <td>{item.description ?? item.note ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
