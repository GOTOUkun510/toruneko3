import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

const ONLINE_TIMEOUT = 5 * 60 // 5min
function getJstDateString(): string {
  const now = new Date()
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  return jst.toISOString().slice(0, 10)
}

export async function GET() {
  const today = getJstDateString()
  const now = Math.floor(Date.now() / 1000)
  await redis.zremrangebyscore('counter:online', 0, now - ONLINE_TIMEOUT)
  const [total, topTotal, todayCount, yesterday, online] = await Promise.all([
    redis.get<number>('counter:total'),
    redis.get<number>('counter:topTotal'),
    redis.get<number>(`counter:day:${today}`),
    redis.get<number>('counter:yesterday'),
    redis.zcount('counter:online', now - ONLINE_TIMEOUT, '+inf'),
  ])
  return NextResponse.json({
    total: total ?? 0,
    topTotal: topTotal ?? 0,
    today: todayCount ?? 0,
    yesterday: yesterday ?? 0,
    online,
  })
}

export async function POST(req: NextRequest) {
  const { isTop, sessionId, pagePath, countSession } = await req.json()
  const today = getJstDateString()
  const now = Math.floor(Date.now() / 1000)

  // 日付切替処理
  const lastDate = await redis.get<string>('counter:lastDate')
  if (lastDate !== today) {
    const prevCount = await redis.get<number>(`counter:day:${lastDate}`)
    await Promise.all([
      redis.set('counter:yesterday', prevCount ?? 0),
      redis.set('counter:lastDate', today),
    ])
  }

  const pageKey = `counter:page:${pagePath.replace(/\//g, '_')}`

  const tasks: Promise<number>[] = [
    redis.incr(pageKey),
  ]

  if (countSession) {
    tasks.push(redis.incr('counter:total'))
    tasks.push(redis.incr(`counter:day:${today}`))
    if (isTop) tasks.push(redis.incr('counter:topTotal'))
  }

  await Promise.all([
    ...tasks,
    redis.zadd('counter:online', { score: now, member: sessionId }),
    redis.zremrangebyscore('counter:online', 0, now - ONLINE_TIMEOUT),
  ])

  const [total, topTotal, todayCount, yesterday, online, pageCount] = await Promise.all([
    redis.get<number>('counter:total'),
    redis.get<number>('counter:topTotal'),
    redis.get<number>(`counter:day:${today}`),
    redis.get<number>('counter:yesterday'),
    redis.zcount('counter:online', now - ONLINE_TIMEOUT, '+inf'),
    redis.get<number>(pageKey),
  ])

  return NextResponse.json({
    total: total ?? 0,
    topTotal: topTotal ?? 0,
    today: todayCount ?? 0,
    yesterday: yesterday ?? 0,
    online,
    pageCount: pageCount ?? 0,
  })
}
