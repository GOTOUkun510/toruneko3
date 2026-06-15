import { heartData } from '@/data/hearts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'モンスターのこころ一覧 | トルネコの大冒険3 攻略wiki MOD',
  description: 'トルネコの大冒険3 MODに登場する「モンスターのこころ」一覧。各モンスターのこころの効果や説明文を掲載しています。',
}

export default function ModHeartPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>モンスターのこころ</h1>
      <img
        src="/奇跡の心.jpg"
        alt="奇跡の心"
        style={{ display: 'block', margin: '1rem 0', width: '25%' }}
      />
      <table>
        <thead>
          <tr><th>こころ名</th><th>説明</th></tr>
        </thead>
        <tbody>
          {heartData.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.description ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
