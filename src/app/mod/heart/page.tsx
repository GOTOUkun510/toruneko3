import { heartData } from '@/data/hearts'

export default function ModHeartPage() {
  return (
    <main>
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
