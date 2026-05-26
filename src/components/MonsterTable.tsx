type Monster = { name: string; hp: number; exp: number }

export default function MonsterTable({ monsters }: { monsters: Monster[] }) {
  return (
    <table>
      <thead>
        <tr><th>モンスター名</th><th>HP</th><th>経験値</th></tr>
      </thead>
      <tbody>
        {monsters.map((m) => (
          <tr key={m.name}>
            <td>{m.name}</td>
            <td>{m.hp}</td>
            <td>{m.exp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
