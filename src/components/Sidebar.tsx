'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '🏠 ホーム' },
  { href: '/wiki', label: '📖 Wiki' },
  { href: '/board', label: '💬 掲示板' },
]

const itemLinks = [
  { href: '/item/weapon', label: '武器' },
  { href: '/item/claw',   label: '爪' },
  { href: '/item/shield', label: '盾' },
  { href: '/item/ring',   label: '指輪' },
  { href: '/item/arrow',  label: '飛び道具' },
  { href: '/item/food',   label: '食料' },
  { href: '/item/grass',  label: '草' },
  { href: '/item/scroll', label: '巻物' },
  { href: '/item/staff',  label: '杖' },
  { href: '/item/pot',    label: '壷' },
  { href: '/item/other',  label: 'その他' },
]

const dungeonLinks = [
  { href: '/dungeon/1', label: '謎のほら穴' },
  { href: '/dungeon/2', label: 'ダンジョン2' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const navClass = (href: string) =>
    `hover:text-white transition-colors ${pathname === href ? 'text-white font-bold' : 'text-gray-400'}`

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
          {itemLinks.map((link, i) => (
            <span key={link.href}>
              <Link href={link.href} className={navClass(link.href)}>{link.label}</Link>
              {i < itemLinks.length - 1 && <span className="text-gray-600"> / </span>}
            </span>
          ))}
        </div>

        <div className="px-3 pt-3 pb-1 text-xs text-gray-500 mt-2">ダンジョン</div>
        {dungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-2 rounded text-sm ${navClass(link.href)}`}>{link.label}</Link>
        ))}
      </nav>
    </div>
  )
}