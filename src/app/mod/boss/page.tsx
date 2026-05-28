'use client'
export default function BossMonsterPage() {
  const bosses = [
    { name: 'ビッグハンマー' },
    { name: 'スカルマスター' },
    { name: '大きめんどうし' },
    { name: 'グラコス' },
    { name: 'ラストキラーマシン' },
    { name: 'カンダタ' },
  ]

  return (
    <main>
      <h1>BOSSモンスター</h1>
      <p style={{ marginBottom: '1rem', color: '#aaa', fontSize: '0.85rem' }}>トルネコ3MOD2のBOSSモンスター。</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {bosses.map((b) => (
          <div key={b.name} style={{ textAlign: 'center' }}>
            <img
              src={`/boss/${b.name}.jpg`}
              alt={b.name}
              style={{ width: '50%', height: 'auto' }}
              onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <div style={{ marginTop: '0.5rem', color: '#eee', fontSize: '0.9rem' }}>{b.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}