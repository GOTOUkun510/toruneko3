import { modMonsters } from '@/data/modMonsters'
import ClientImage from '@/components/ClientImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '追加モンスター一覧 | トルネコの大冒険3 攻略wiki MOD',
  description: 'トルネコの大冒険3 MOD（Ver0.2.4対応）で追加されたモンスターの一覧。各モンスターのHP、攻撃力、防御力、系統、特性、特技、成長タイプ、勧誘率などをまとめています。',
}

function getImageName(name: string): string {
  return name
    .replace(/^([LlＬ][Vvｖ]\d+|[LlＬ][Vvｖ][０-９]+)\s*/, '')
    .replace(/\s*([LlＬ][Vvｖ]\d+|[LlＬ][Vvｖ][０-９]+)$/, '')
    .trim()
}

function MonsterName({ name }: { name: string }) {
  const imgName = getImageName(name)
  // マネマネ・ホロゴーストは専用画像が存在しない（マネマネは変身モンスター）
  const hasImage = imgName !== 'マネマネ' && imgName !== 'ホロゴースト'
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px' }}>
      {hasImage && (
        <ClientImage
          src={`/monsters/${imgName}.jpg`}
          alt={name}
          style={{ width: 60, height: 60, objectFit: 'contain', objectPosition: 'bottom', display: 'block' }}
        />
      )}
      {name}
    </span>
  )
}

export default function ModMonsterPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>追加モンスター一覧</h1>
      <p style={{ marginBottom: '1rem', color: '#aaa' }}>トルネコ3MOD2の追加モンスター。(Ver0.2.4対応)</p>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>HP</th>
            <th>攻撃力</th>
            <th>防御力</th>
            <th>系統</th>
            <th>特性</th>
            <th>特技</th>
            <th>成長タイプ</th>
            <th>勧誘率</th>
          </tr>
        </thead>
        <tbody>
          {modMonsters.map((m) => (
            <tr key={m.name}>
              <td style={{ padding: '0' }}>
                <MonsterName name={m.name} />
              </td>
              <td>{m.hp}</td>
              <td>{m.atk}</td>
              <td>{m.def}</td>
              <td>{m.type}</td>
              <td>{m.trait}</td>
              <td>{m.skill}</td>
              <td>{m.growth}</td>
              <td>{m.recruitRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
