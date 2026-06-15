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
    alternates: {
      canonical: `/item/${category}`,
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
      {category === 'weapon' ? (
        <table>
          <thead>
            <tr><th>名前</th><th>攻撃力</th><th>印数</th><th>強化限界</th><th>買値</th><th>売値</th><th>印</th><th>特殊効果</th></tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.attack ?? ''}</td>
                <td>{item.slots ?? ''}</td>
                <td>{item.maxLevel ?? ''}</td>
                <td>{item.buyPrice ?? ''}</td>
                <td>{item.sellPrice ?? ''}</td>
                <td>{item.marks ?? ''}</td>
                <td>{[item.description, item.note].filter(Boolean).join(' / ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : category === 'other' ? (
        <table>
          <thead>
            <tr><th>名前</th><th>特殊効果</th></tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{[item.description, item.note].filter(Boolean).join(' / ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : category === 'shield' ? (
        <table>
          <thead>
            <tr><th>名前</th><th>防御力</th><th>印数</th><th>強化限界</th><th>買値</th><th>売値</th><th>重さ</th><th>印</th><th>説明</th></tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.attack ?? ''}</td>
                <td>{item.slots ?? ''}</td>
                <td>{item.maxLevel ?? ''}</td>
                <td>{item.buyPrice ?? ''}</td>
                <td>{item.sellPrice ?? ''}</td>
                <td>{item.weight ?? ''}</td>
                <td>{item.marks ?? ''}</td>
                <td>{[item.description, item.note].filter(Boolean).join(' / ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : category === 'ring' ? (
        <table>
          <thead>
            <tr><th>名前</th><th>印数</th><th>買値</th><th>売値</th><th>印</th><th>説明</th></tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.slots ?? ''}</td>
                <td>{item.buyPrice ?? ''}</td>
                <td>{item.sellPrice ?? ''}</td>
                <td>{item.marks ?? ''}</td>
                <td>{[item.description, item.note].filter(Boolean).join(' / ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          <thead>
            <tr><th>名前</th><th>買値</th><th>売値</th><th>特殊効果</th></tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.buyPrice ?? ''}</td>
                <td>{item.sellPrice ?? ''}</td>
                <td>{[item.description, item.note].filter(Boolean).join(' / ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}
