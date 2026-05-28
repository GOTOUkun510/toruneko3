export default function SlimeRingPage() {
  const slimes: { name: string; skills: string[] }[] = [
    { name: 'スライム', skills: ['Lv10：スクルト', 'Lv30：ザオラル'] },
    { name: 'スライムベス', skills: ['Lv10：ルカナン', 'Lv26：メダパニ'] },
    { name: 'スライムナイト', skills: ['Lv5：ベホイミ', 'Lv8：スクルト', 'Lv20：ベホマ'] },
    { name: 'バブルスライム', skills: ['キアリー', 'Lv6：潜行'] },
    { name: 'スライムタール', skills: ['潜行'] },
    { name: 'しびれくらげ', skills: ['特技が強力なかなしばりに変化'] },
    { name: 'ホイミスライム', skills: ['Lvでホイミの回復量アップ', 'Lv1：ザオラル', 'Lv40：ザオリク'] },
    { name: 'ベホイミスライム', skills: ['Lvでホイミの回復量アップ', 'Lv1：ザオラル', 'Lv25：ザオリク'] },
    { name: 'ベホマスライム', skills: ['Lvでホイミの回復量アップ', 'Lv1：ザオラル', 'Lv10：ザオリク'] },
    { name: 'キングスライム', skills: ['ザオラル'] },
    { name: 'ベスキング', skills: ['ザオラル'] },
    { name: 'スライムエンペラー', skills: ['ザオラル'] },
    { name: 'スライムベホマズン', skills: ['ザオリク'] },
    { name: 'ドラゴスライム', skills: ['炎がホーミング', 'Lvで炎のダメージアップ'] },
    { name: 'スライムブレス', skills: ['炎がホーミング', 'Lvで炎のダメージアップ'] },
    { name: 'ドラゴメタル', skills: ['炎がホーミング', 'Lvで炎のダメージアップ'] },
    { name: 'ガニラスバリア', skills: [] },
    { name: 'メタルスライム', skills: ['ガニラスバリア'] },
    { name: 'はぐれメタル', skills: ['ガニラスバリア'] },
    { name: 'メタルキング', skills: ['ガニラスバリア'] },
    { name: 'プラチナキング', skills: ['ガニラスバリア'] },
    { name: 'スライムマデュラ', skills: ['ガニラスバリア'] },
    { name: 'ゴールデンスライム', skills: ['ガニラスバリア'] },
    { name: 'メタルライダー', skills: ['ガニラスバリア'] },
  ]

  return (
    <main>
      <h1>スライムの指輪の効果</h1>
      <p style={{ color: '#aaa', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
        トルネコ3MOD2のスライムの指輪の効果。
      </p>
      <p style={{ color: '#ccc', marginBottom: '1rem', fontSize: '0.85rem' }}>
        装備中にスライム系の仲間がレベルアップしたとき、HP・攻撃力・防御力がそれぞれ1/2の確率で+1ボーナス。下表の特技・特性を覚える。
      </p>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>覚える特技・特性</th>
          </tr>
        </thead>
        <tbody>
          {slimes.map((s) => (
            <tr key={s.name}>
              <td style={{ verticalAlign: 'middle' }}>{s.name}</td>
              <td style={{ lineHeight: '1.6' }}>
                {s.skills.map((skill, i) => (
                  <span key={i}>{skill}{i < s.skills.length - 1 && <br />}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}