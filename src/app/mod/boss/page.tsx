'use client'
export default function BossMonsterPage() {
  const bosses = [
    { name: 'ビッグハンマー' },
    { name: 'スカルマスター' },
    { name: '大きめんどうし' },
    { name: 'グラコス' },
    { name: 'ラストキラーマシン' },
    { name: 'カンダタ' },
    { name: 'ボルンガ' },
    { name: 'ゴールデンドラゴン' },
  ]

  const shinzuiBosses = [
    { name: 'まじんキノコ' },
    { name: 'メガゴーレム' },
    { name: 'グランバズズ' },
  ]

  return (
    <main>
      <h1>BOSSモンスター</h1>
      <p style={{ marginBottom: '1rem', color: '#aaa', fontSize: '0.85rem' }}>トルネコ3MOD2のBOSSモンスター。</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {bosses.map((b) => (
          <div key={b.name} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
              <img
                src={`/boss/${b.name}.jpg`}
                alt={b.name}
                style={{ width: '370px', height: 'auto' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <img
                src={`/monsters/${b.name}.jpg`}
                alt={b.name}
                style={{ width: 250, height: 250, objectFit: 'contain', objectPosition: 'bottom' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
            <div style={{ marginTop: '0.5rem', color: '#eee', fontSize: '0.9rem' }}>{b.name}</div>
          </div>
        ))}
      </div>

      <h2 style={{ margin: '2rem 0 1rem' }}>魔物の真髄</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {shinzuiBosses.map((b) => (
          <div key={b.name} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
              <img
                src={`/boss/${b.name}.jpg`}
                alt={b.name}
                style={{ width: '370px', height: 'auto' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <img
                src={`/monsters/${b.name}.jpg`}
                alt={b.name}
                style={{ width: 250, height: 250, objectFit: 'contain', objectPosition: 'bottom' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
            <div style={{ marginTop: '0.5rem', color: '#eee', fontSize: '0.9rem' }}>{b.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
