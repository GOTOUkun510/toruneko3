import ClientImage from '@/components/ClientImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BOSSモンスター一覧 | トルネコの大冒険3 攻略wiki MOD',
  description: 'トルネコの大冒険3 MODに登場する追加BOSS（ボス）モンスターの一覧。ビッグハンマー、スカルマスター、魔物の心髄ボスなどの画像情報を掲載しています。',
  alternates: { canonical: '/mod/boss' },
  openGraph: {
    title: 'BOSSモンスター一覧 | トルネコの大冒険3 攻略wiki MOD',
    description: 'トルネコの大冒険3 MODに登場する追加BOSSモンスターの一覧。',
    url: 'https://toruneko3.vercel.app/mod/boss',
    siteName: 'トルネコの大冒険3 攻略wiki MOD',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'BOSSモンスター一覧 | トルネコの大冒険3 攻略wiki MOD',
    description: 'トルネコの大冒険3 MODに登場する追加BOSSモンスターの一覧。',
  },
}

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
    <main style={{ padding: "2rem" }}>
      <h1>BOSSモンスター一覧【トルネコの大冒険3 MOD】</h1>
      <p style={{ marginBottom: '1rem', color: '#aaa', fontSize: '0.85rem' }}>トルネコ3MOD2のBOSSモンスター。</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {bosses.map((b) => (
          <div key={b.name} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
              <ClientImage
                src={`/boss/${b.name}.jpg`}
                alt={`ボス・${b.name}の出現画像`}
                style={{ width: '370px', height: 'auto' }}
              />
              <ClientImage
                src={`/monsters/${b.name}.jpg`}
                alt={b.name}
                style={{ width: 250, height: 250, objectFit: 'contain', objectPosition: 'bottom' }}
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
              <ClientImage
                src={`/boss/${b.name}.jpg`}
                alt={`ボス・${b.name}の出現画像`}
                style={{ width: '370px', height: 'auto' }}
              />
              <ClientImage
                src={`/monsters/${b.name}.jpg`}
                alt={b.name}
                style={{ width: 250, height: 250, objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>
            <div style={{ marginTop: '0.5rem', color: '#eee', fontSize: '0.9rem' }}>{b.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
