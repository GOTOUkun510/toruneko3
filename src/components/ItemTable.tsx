type ItemCategory = { label: string; items: string[] }

export default function ItemTable({ categories }: { categories: ItemCategory[] }) {
  return (
    <table style={{ tableLayout: 'auto', width: 'auto' }}>
      <thead>
        <tr><th>種別</th><th>アイテム</th></tr>
      </thead>
      <tbody>
        {categories.map((cat) => (
          <tr key={cat.label}>
            <td style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>{cat.label}</td>
            <td>{cat.items.join(' / ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}