import { dungeonData } from '@/data/dungeons'
import MonsterTable from '@/components/MonsterTable'
import ItemTable from '@/components/ItemTable'

export default async function DungeonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = dungeonData[id]
  if (!data) return <main><h1>ダンジョンが見つかりません</h1></main>

  return (
    <main>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h2>出現モンスター</h2>
      <MonsterTable monsters={data.monsters} />
      <h2>落ちているアイテム</h2>
      <ItemTable categories={data.itemCategories} />
      <h2>攻略情報</h2>
      <p>{data.strategy}</p>
    </main>
  )
}