'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '🏠 ホーム' },
  { href: '/wiki', label: '📖 Wiki' },
  { href: '/board', label: '💬 掲示板' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="fixed top-0 left-0 h-full w-[200px] bg-[#111] border-r border-[#333] flex flex-col py-4 z-50">
      <div className="px-4 mb-6">
        <span className="text-white font-bold text-lg">GOTOUkun510</span>
      </div>
      <nav className="flex flex-col gap-1 px-2">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded text-sm transition-colors ${
              pathname === link.href
                ? 'bg-[#333] text-white font-bold'
                : 'text-gray-400 hover:bg-[#222] hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
