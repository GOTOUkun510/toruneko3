export default function ItemTable({ rows }: { rows: string[][] }) {
  return (
    <table>
      <thead>
        <tr><th colSpan={4}>落ちているアイテム</th></tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => <td key={j}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}