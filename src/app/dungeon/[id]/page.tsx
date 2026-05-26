import { dungeonData } from '@/data/dungeons'
import MonsterTable from '@/components/MonsterTable'
import ItemTable from '@/components/ItemTable'

function getDungeonFloors(monsters: { floors: string }[]): string {
  if (monsters.length === 0) return ''
  const nums: number[] = []
  monsters.forEach(m => {
    const match = m.floors.match(/\d+/g)
    if (match) match.forEach(n => nums.push(parseInt(n)))
  })
  if (nums.length === 0) return ''
  return `1F〜${Math.max(...nums)}F`
}

export default async function DungeonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = dungeonData[id]
  if (!data) return <main><h1>ダンジョンが見つかりません</h1></main>

  const floors = getDungeonFloors(data.monsters)

  return (
    <main>
      <div style={{ padding: '2rem 2rem 0' }}>
        <div className="flex items-baseline gap-4 mb-4">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          {floors && <span className="text-gray-400">{floors}</span>}
        </div>
        <p>{data.description}</p>
      </div>
      <MonsterTable monsters={data.monsters} />
      <ItemTable categories={data.itemCategories} />
      {data.traps && data.traps.length > 0 && (
        <table>
          <thead><tr><th>ワナ</th></tr></thead>
          <tbody><tr><td>{data.traps.join(' / ')}</td></tr></tbody>
        </table>
      )}
      <div style={{ padding: '0 2rem 2rem' }}>
        <p>{data.strategy}</p>
      </div>
    </main>
  )
}