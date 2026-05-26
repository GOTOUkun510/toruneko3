type Monster = {
  name: string
  floors: string
  hp: number
  atk: number
  def: number
  drop?: string
}

export default function MonsterTable({ monsters }: { monsters: Monster[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>モンスター名</th>
          <th>出現階層</th>
          <th>HP</th>
          <th>攻撃力</th>
          <th>防御力</th>
          <th>ドロップ</th>
        </tr>
      </thead>
      <tbody>
        {monsters.map((m) => (
          <tr key={m.name}>
            <td>{m.name}</td>
            <td>{m.floors}</td>
            <td>{m.hp}</td>
            <td>{m.atk}</td>
            <td>{m.def}</td>
            <td>{m.drop ?? ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}