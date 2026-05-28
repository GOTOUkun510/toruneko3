import { heartData } from '@/data/hearts'

export default function ModHeartPage() {
  return (
    <main>
      <h1>モンスターのこころ</h1>
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