import { dungeonData } from '@/data/dungeons'
import { extraDungeonData } from '@/data/extra_dungeons'
import MonsterTable from '@/components/MonsterTable'
import ItemTable from '@/components/ItemTable'
import { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params
  const data = dungeonData[id] ?? extraDungeonData[id]
  if (!data) {
    return {
      title: 'ダンジョンが見つかりません',
    }
  }
  return {
    title: `${data.name} 攻略情報 | トルネコの大冒険3 攻略wiki MOD`,
    description: data.description || `${data.name}の攻略情報、出現モンスター、出現アイテム、ワナ、MOD追加要素などをまとめています。`,
  }
}

export async function generateStaticParams() {
  const dungeonIds = Object.keys(dungeonData).map((id) => ({ id }))
  const extraIds = Object.keys(extraDungeonData).map((id) => ({ id }))
  return [...dungeonIds, ...extraIds]
}

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
  const isExtra = id in extraDungeonData
  const data = dungeonData[id] ?? extraDungeonData[id]
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
        {/* 魔物の心髄（id=32）のみモンスターハウス情報を表示 */}
        {id === '32' && (
          <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '0.5rem 0 1rem' }}>モンスターハウス: 35F / 45F / 65F / 75F / 85F / 95F</p>
        )}
      </div>
      <MonsterTable monsters={data.monsters} />
      <ItemTable categories={data.itemCategories} />
      {'traps' in data && data.traps && (data.traps as string[]).length > 0 && (
        <table>
          <thead><tr><th>ワナ</th></tr></thead>
          <tbody><tr><td>{(data.traps as string[]).join(' / ')}</td></tr></tbody>
        </table>
      )}
      {'modContent' in data && data.modContent && (
        <div style={{ padding: '0 2rem' }}>
          <h2 className="text-2xl font-bold" style={{ margin: '1.5rem 0 1rem' }}>MOD</h2>
          {(data.modContent as { additionalItems?: string[] }).additionalItems && (data.modContent as { additionalItems?: string[] }).additionalItems!.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="text-xl font-semibold" style={{ marginBottom: '0.5rem' }}>追加アイテム</h3>
              <table>
                <thead><tr><th>アイテム名</th></tr></thead>
                <tbody>
                  {(data.modContent as { additionalItems: string[] }).additionalItems.map((item: string, i: number) => (
                    <tr key={i}><td>{item}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(data.modContent as { additionalMonsters?: unknown[] }).additionalMonsters && (data.modContent as { additionalMonsters?: unknown[] }).additionalMonsters!.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="text-xl font-semibold" style={{ marginBottom: '0.5rem' }}>追加モンスター</h3>
              <MonsterTable monsters={(data.modContent as { additionalMonsters: Parameters<typeof MonsterTable>[0]['monsters'] }).additionalMonsters} />
            </div>
          )}
          {(data.modContent as { hearts?: { monsterName: string; heartName?: string; recruitRate?: number; clawChance?: string }[] }).hearts && (data.modContent as { hearts?: unknown[] }).hearts!.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 className="text-xl font-semibold" style={{ marginBottom: '0.5rem' }}>モンスターのこころ</h3>
              <table>
                <thead>
                  <tr>
                    <th>モンスター名</th>
                    <th>こころ名</th>
                    <th>勧誘率</th>
                    <th>ポポロLv1魔法の爪</th>
                  </tr>
                </thead>
                <tbody>
                  {(data.modContent as { hearts: { monsterName: string; heartName?: string; recruitRate?: number; clawChance?: string }[] }).hearts.map((h, i) => (
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
