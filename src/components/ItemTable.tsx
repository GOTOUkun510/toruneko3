type ItemCategory = { label?: string; category?: string; items: string[] }

export default function ItemTable({ categories }: { categories: ItemCategory[] }) {
  return (
    <table style={{ tableLayout: 'auto', width: 'auto' }}>
      <thead>
        <tr><th>種別</th><th>アイテム</th></tr>
      </thead>
      <tbody>
        {categories.map((cat, i) => (
          <tr key={cat.label ?? cat.category ?? i}>
            <td style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>{cat.label ?? cat.category}</td>
            <td>{cat.items.join(' / ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}