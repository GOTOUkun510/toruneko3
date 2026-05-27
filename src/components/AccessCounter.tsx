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

const CACHE_KEY = 'access_counter_cache'

function getOrCreateSessionId(): string {
  let id = sessionStorage.getItem('sid')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('sid', id)
  }
  return id
}

function loadCache(): CounterStats | null {
  try {
    const s = localStorage.getItem(CACHE_KEY)
    return s ? JSON.parse(s) : null
  } catch { return null }
}

function saveCache(stats: CounterStats) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(stats)) } catch {}
}

export default function AccessCounter() {
  const pathname = usePathname()
  const [stats, setStats] = useState<CounterStats | null>(null)

  useEffect(() => {
    const cache = loadCache()
    if (cache) {
      setStats({
        ...cache,
        today: cache.today + 1,
        total: cache.total + 1,
        online: cache.online,
      })
    }

    // セッション内で1回だけカウント
    if (sessionStorage.getItem('counted')) {
      fetch('/api/counter')
        .then(r => r.json())
        .then((data: CounterStats) => {
          setStats(data)
          saveCache(data)
        })
        .catch(() => {})
      return
    }

    sessionStorage.setItem('counted', '1')
    const isTop = pathname === '/'
    const sessionId = getOrCreateSessionId()

    fetch('/api/counter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isTop, sessionId }),
    })
      .then(r => r.json())
      .then((data: CounterStats) => {
        setStats(data)
        saveCache(data)
      })
      .catch(() => {})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="px-3 pb-2 text-[16px] text-gray-400 border-b border-[#333] mb-2">
      <div>今日 {stats ? stats.today.toLocaleString() : '…'}　昨日 {stats ? stats.yesterday.toLocaleString() : '…'}</div>
      <div>合計 {stats ? stats.total.toLocaleString() : '…'}</div>
      <div>トップの合計 {stats ? stats.topTotal.toLocaleString() : '…'}</div>
      <div>オンライン {stats ? stats.online : '…'}</div>
    </div>
  )
}
