import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'counter.json')
const ONLINE_TIMEOUT_MS = 5 * 60 * 1000 // 5分

type CounterData = {
  total: number
  topTotal: number
  today: number
  yesterday: number
  lastDate: string
  online: { id: string; ts: number }[]
}

function readData(): CounterData {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(raw)
}

function writeData(data: CounterData) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

function getJstDateString(): string {
  const now = new Date()
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  return jst.toISOString().slice(0, 10)
}

export async function GET() {
  const data = readData()
  const now = Date.now()
  const activeOnline = data.online.filter(o => now - o.ts < ONLINE_TIMEOUT_MS)
  return NextResponse.json({
    total: data.total,
    topTotal: data.topTotal,
    today: data.today,
    yesterday: data.yesterday,
    online: activeOnline.length,
  })
}

export async function POST(req: NextRequest) {
  const { isTop, sessionId } = await req.json()
  const data = readData()
  const today = getJstDateString()
  const now = Date.now()

  // 日付リセット
  if (data.lastDate !== today) {
    if (data.lastDate !== '') {
      data.yesterday = data.today
    }
    data.today = 0
    data.lastDate = today
  }

  data.total++
  data.today++
  if (isTop) data.topTotal++

  // オンラインユーザー更新
  const existing = data.online.findIndex(o => o.id === sessionId)
  if (existing >= 0) {
    data.online[existing].ts = now
  } else {
    data.online.push({ id: sessionId, ts: now })
  }
  // 古いエントリ削除
  data.online = data.online.filter(o => now - o.ts < ONLINE_TIMEOUT_MS)

  writeData(data)

  return NextResponse.json({
    total: data.total,
    topTotal: data.topTotal,
    today: data.today,
    yesterday: data.yesterday,
    online: data.online.length,
  })
}
