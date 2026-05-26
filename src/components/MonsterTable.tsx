type Monster = {
  name: string
  hp: number
  exp: number
  floors: string[]
}

export default function MonsterTable({ monsters, floorLabels }: { monsters: Monster[]; floorLabels: string[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>モンスター名</th>
          <th>HP</th>
          <th>経験値</th>
          {floorLabels.map(f => <th key={f}>{f}</th>)}
        </tr>
      </thead>
      <tbody>
        {monsters.map((m) => (
          <tr key={m.name}>
            <td>{m.name}</td>
            <td>{m.hp}</td>
            <td>{m.exp}</td>
            {m.floors.map((v, i) => <td key={i}>{v}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}