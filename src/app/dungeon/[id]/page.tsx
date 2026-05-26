import { dungeonData } from '@/data/dungeons'
import MonsterTable from '@/components/MonsterTable'
import ItemTable from '@/components/ItemTable'

export default async function DungeonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = dungeonData[id]
  if (!data) return <main><h1>ダンジョンが見つかりません</h1></main>

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <p>{data.description}</p>
      <MonsterTable monsters={data.monsters} />
      <ItemTable categories={data.itemCategories} />
      <p>{data.strategy}</p>
    </main>
  )
}