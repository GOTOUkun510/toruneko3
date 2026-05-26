type Item = { name: string }

export default function ItemTable({ items }: { items: Item[] }) {
  return (
    <table>
      <thead>
        <tr><th>アイテム名</th></tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
