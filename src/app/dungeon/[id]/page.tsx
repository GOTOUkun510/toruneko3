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
  if (!data) return <div><h1>ダンジョンが見つかりませんw</h1></div>

  const floors = getDungeonFloors(data.monsters)

  return (
    <div>
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
      {data.modContent && (
        <div style={{ padding: '0 2rem' }}>
          <h2 className="text-2xl font-bold" style={{ margin: '1.5rem 0 1rem' }}>MOD</h2>
          {data.modContent.additionalItems && data.modContent.additionalItems.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="text-xl font-semibold" style={{ marginBottom: '0.5rem' }}>追加アイテム</h3>
              <table style={{ tableLayout: 'auto', width: 'auto' }}>
                <thead><tr><th>アイテム名</th></tr></thead>
                <tbody>
                  {data.modContent.additionalItems.map((item, i) => (
                    <tr key={i}><td>{item}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {data.modContent.additionalMonsters && data.modContent.additionalMonsters.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="text-xl font-semibold" style={{ marginBottom: '0.5rem' }}>追加モンスター</h3>
              <MonsterTable monsters={data.modContent.additionalMonsters} />
            </div>
          )}
          {data.modContent.hearts && data.modContent.hearts.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="text-xl font-semibold" style={{ marginBottom: '0.5rem' }}>モンスターのこころ</h3>
              <table style={{ tableLayout: 'auto', width: 'auto' }}>
                <thead>
                  <tr>
                    <th>モンスター名</th>
                    <th>こころ名</th>
                    <th>勧誘率</th>
                    <th>ポポロLv1魔法の爪</th>
                  </tr>
                </thead>
                <tbody>
                  {data.modContent.hearts.map((h, i) => (
                    <tr key={i}>
                      <td>{h.monsterName}</td>
                      <td>{h.heartName ?? ''}</td>
                      <td>{h.recruitRate !== undefined ? h.recruitRate : ''}</td>
                      <td>{h.clawChance ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <div style={{ padding: '0 2rem 2rem' }}>
        <p>{data.strategy}</p>
      </div>
    </div>
  )
}