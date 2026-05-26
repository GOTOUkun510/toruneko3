'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '🏠 ホーム' },
  { href: '/wiki', label: '📖 Wiki' },
  { href: '/board', label: '💬 掲示板' },
]

const dungeonLinks = [
  { href: '/dungeon/1', label: '謎のほら穴' },
  { href: '/dungeon/2', label: 'ダンジョン2' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const navClass = (href: string) =>
    `hover:text-white transition-colors ${pathname === href ? 'text-white font-bold' : 'text-gray-400'}`
  const sep = <span className="text-gray-600"> / </span>

  return (
    <div className="fixed top-0 left-0 h-full w-[200px] bg-[#111] border-r border-[#333] flex flex-col py-4 z-50 overflow-y-auto">
      <div className="px-4 mb-6">
        <span className="text-white font-bold text-lg">GOTOUkun510</span>
      </div>
      <nav className="flex flex-col gap-1 px-2">
        {links.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-2 rounded text-sm ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-3 pb-1 text-xs text-gray-500">アイテム</div>
        <div className="px-3 text-sm leading-6">
          <Link href="/item/weapon" className={navClass('/item/weapon')}>武器</Link>
          {sep}
          <Link href="/item/claw" className={navClass('/item/claw')}>爪</Link>
          {sep}
          <Link href="/item/shield" className={navClass('/item/shield')}>盾</Link>
          {sep}
          <Link href="/item/ring" className={navClass('/item/ring')}>指輪</Link>
          <br />
          <Link href="/item/arrow" className={navClass('/item/arrow')}>飛び道具</Link>
          {sep}
          <Link href="/item/food" className={navClass('/item/food')}>食料</Link>
          {sep}
          <Link href="/item/grass" className={navClass('/item/grass')}>草</Link>
          <br />
          <Link href="/item/scroll" className={navClass('/item/scroll')}>巻物</Link>
          {sep}
          <Link href="/item/staff" className={navClass('/item/staff')}>杖</Link>
          {sep}
          <Link href="/item/pot" className={navClass('/item/pot')}>壷</Link>
          {sep}
          <Link href="/item/other" className={navClass('/item/other')}>その他</Link>
        </div>

        <div className="px-3 pt-3 pb-1 text-xs text-gray-500 mt-2">ダンジョン</div>
        {dungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-2 rounded text-sm ${navClass(link.href)}`}>{link.label}</Link>
        ))}
      </nav>
    </div>
  )
}