import ClientImage from './ClientImage'

function getImageName(name: string): string {
  return name.replace(/^([LlＬ][Vvｖ]\d+|[LlＬ][Vvｖ][０-９]+)\s*/, '').replace(/\s*([LlＬ][Vvｖ]\d+|[LlＬ][Vvｖ][０-９]+)$/, '').trim()
}

function MonsterName({ name }: { name: string }) {
  const imgName = getImageName(name)
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px', whiteSpace: 'nowrap' }}>
      <ClientImage
        key={imgName}
        src={`/monsters/${imgName}.jpg`}
        alt={`${name}の画像`}
        style={{ width: 60, height: 60, objectFit: 'contain', objectPosition: 'bottom', display: 'block' }}
      />
      {name}
    </span>
  )
}

type Monster = {
  name: string
  floors: string
  hp: number
  atk: number
  def?: number
  exp?: number
  special?: string
  notes?: string
  drop?: string
  heart?: string
  recruitRate?: number
  clawChance?: string
}

export default function MonsterTable({ monsters }: { monsters: Monster[] }) {
  const hasDef = monsters.some(m => m.def !== undefined)
  const hasHeart = monsters.some(m => m.heart !== undefined)
  const hasExp = monsters.some(m => m.exp !== undefined)
  const hasSpecial = monsters.some(m => m.special !== undefined)
  const hasNotes = monsters.some(m => m.notes !== undefined)

  return (
    <table style={{ tableLayout: 'auto', width: 'auto' }}>
      <thead>
        <tr>
          <th>モンスター名</th>
          <th>出現階層</th>
          <th>HP</th>
          <th>攻撃力</th>
          {hasDef && <th>防御力</th>}
          {hasExp && <th>経験値</th>}
          {hasSpecial && <th style={{ maxWidth: '200px' }}>特殊能力</th>}
          {hasNotes && <th style={{ maxWidth: '250px' }}>備考</th>}
          {hasHeart ? (
            <>
              <th>心ドロップ</th>
              <th>勧誘率</th>
              <th>ポポロLv1魔法の爪</th>
            </>
          ) : (
            <th>ドロップ</th>
          )}
        </tr>
      </thead>
      <tbody>
        {monsters.map((m, i) => (
          <tr key={`${m.name}-${i}`}>
            <td style={{ padding: '0' }}>
              <MonsterName name={m.name} />
            </td>
            <td style={{ whiteSpace: 'nowrap' }}>{m.floors}</td>
            <td>{m.hp}</td>
            <td>{m.atk}</td>
            {hasDef && <td>{m.def ?? ''}</td>}
            {hasExp && <td>{m.exp ?? ''}</td>}
            {hasSpecial && <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.special ?? ''}</td>}
            {hasNotes && <td style={{ maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.notes ?? ''}</td>}
            {hasHeart ? (
              <>
                <td>{m.heart ?? ''}</td>
                <td>{m.recruitRate !== undefined ? m.recruitRate : ''}</td>
                <td>{m.clawChance ?? ''}</td>
              </>
            ) : (
              <td>{m.drop ?? ''}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
