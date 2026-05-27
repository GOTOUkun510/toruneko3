'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type CounterStats = {
  total: number
  topTotal: number
  today: number
  yesterday: number
  online: number
}

function getOrCreateSessionId(): string {
  let id = sessionStorage.getItem('sid')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('sid', id)
  }
  return id
}

export default function AccessCounter() {
  const pathname = usePathname()
  const [stats, setStats] = useState<CounterStats | null>(null)

  useEffect(() => {
    const isTop = pathname === '/'
    const sessionId = getOrCreateSessionId()

    fetch('/api/counter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isTop, sessionId }),
    })
      .then(r => r.json())
      .then(setStats)
      .catch(() => {})
  }, [pathname])

  if (!stats) return null

  return (
    <div className="px-3 pt-3 pb-2 text-[10px] text-gray-400 border-t border-[#333] mt-2">
      <div>合計：{stats.total.toLocaleString()}</div>
      <div>今日：{stats.today.toLocaleString()}</div>
      <div>昨日：{stats.yesterday.toLocaleString()}</div>
      <div>トップの合計：{stats.topTotal.toLocaleString()}</div>
      <div>オンライン：{stats.online}</div>
    </div>
  )
}
