export default function ShinzuiRingPage() {
  const rings = [
    { name: '混乱よけの指輪', buy: 3000, sell: 1500 },
    { name: 'しあわせの指輪', buy: 4000, sell: 2000 },
    { name: 'たれ流しの指輪', buy: 4000, sell: 2000 },
    { name: '通過の指輪', buy: 5000, sell: 2500 },
    { name: '傷みよけの指輪', buy: 5000, sell: 2500 },
    { name: 'ちからの指輪', buy: 5000, sell: 2500 },
    { name: '毒けしの指輪', buy: 5000, sell: 2500 },
    { name: '眠らずの指輪', buy: 5000, sell: 2500 },
    { name: 'ふつうの指輪', buy: 5000, sell: 2500 },
    { name: '凍らずの指輪', buy: 5000, sell: 2500 },
    { name: 'ミニデーモンの指輪', buy: 5000, sell: 2500 },
    { name: 'まがりの指輪', buy: 5000, sell: 2500 },
    { name: 'へた投げの指輪', buy: 5000, sell: 2500 },
    { name: 'ワナあての指輪', buy: 5000, sell: 2500 },
    { name: 'ハラ守りの指輪', buy: 5000, sell: 2500 },
    { name: '呪いよけの指輪', buy: 5000, sell: 2500 },
    { name: 'ハラモチの指輪', buy: 5000, sell: 2500 },
    { name: 'ふしぎ投げの指輪', buy: 5000, sell: 2500 },
    { name: '遠投の指輪', buy: 7500, sell: 3000 },
    { name: 'ルーラの指輪', buy: 7500, sell: 1500 },
    { name: 'きれいな指輪', buy: 8000, sell: 3000 },
    { name: '回復の指輪', buy: 10000, sell: 5000 },
    { name: '人形よけの指輪', buy: 10000, sell: 5000 },
    { name: 'ドラゴンの指輪', buy: 10000, sell: 5000 },
    { name: '妖精の指輪', buy: 10000, sell: 5000 },
    { name: '静心の指輪', buy: 10000, sell: 5000 },
    { name: '紙一重の指輪', buy: 10000, sell: 5000 },
    { name: 'ファイターリング', buy: 10000, sell: 5000 },
    { name: '投げ名人の指輪', buy: 10000, sell: 5000 },
    { name: 'ハラペコの指輪', buy: 10000, sell: 5000 },
    { name: 'ザメハの指輪', buy: 10000, sell: 5000 },
    { name: 'スライムの指輪', buy: 15000, sell: 7500 },
    { name: '魔物使いの指輪', buy: 15000, sell: 7500 },
    { name: '会心の指輪', buy: 15000, sell: 7500 },
    { name: '痛恨の指輪', buy: 15000, sell: 7500 },
    { name: 'まもりの指輪', buy: 20000, sell: 10000 },
    { name: 'うけながしの指輪', buy: 20000, sell: 10000 },
    { name: '魔封じの指輪', buy: 25000, sell: 12500 },
    { name: '見切りの指輪', buy: 25000, sell: 12500 },
    { name: '石像よけの指輪', buy: 25000, sell: 12500 },
    { name: '伝心の指輪', buy: 50000, sell: 20000 },
  ]

  return (
    <main>
      <h1>魔物の心髄 指輪表</h1>
      <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.85rem' }}>
        トルネコ3MOD2の魔物の心髄で入手できる指輪の価格表。
      </p>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>買値</th>
            <th>売値</th>
          </tr>
        </thead>
        <tbody>
          {rings.map((r) => (
            <tr key={r.name}>
              <td>{r.name}</td>
              <td>{r.buy.toLocaleString()}</td>
              <td>{r.sell.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}