'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '🏠 ホーム' },
  { href: '/wiki', label: '📖 Wiki' },
  { href: '/board', label: '💬 掲示板' },
]

const extraDungeonLinks = [
  { href: '/extra-dungeon/1', label: '魔物の心髄' },
  { href: '/extra-dungeon/2', label: '未来へ続く道' },
  { href: '/extra-dungeon/3', label: 'もっと不思議の洞窟' },
]

const clearDungeonLinks = [
  { href: '/dungeon/25', label: '封印の洞くつ' },
  { href: '/dungeon/26', label: '異世界の迷宮' },
  { href: '/dungeon/27', label: '不思議の宝物庫' },
  { href: '/dungeon/28', label: 'まぼろしの洞くつ' },
]

const dungeonLinks = [
  { href: '/dungeon/1',  label: '謎のほら穴' },
  { href: '/dungeon/2',  label: 'いざないの洞くつ' },
  { href: '/dungeon/3',  label: '南海の地下道' },
  { href: '/dungeon/4',  label: 'さんご礁の神殿 広間' },
  { href: '/dungeon/5',  label: 'さんご礁の神殿 回廊' },
  { href: '/dungeon/6',  label: '海底山地 ふもと' },
  { href: '/dungeon/7',  label: '海底山地 山頂部' },
  { href: '/dungeon/8',  label: '賢者のほら穴' },
  { href: '/dungeon/9',  label: '海竜島の遺跡' },
  { href: '/dungeon/10', label: '灯台の地下室' },
  { href: '/dungeon/11', label: '遺跡の大空洞 南' },
  { href: '/dungeon/12', label: '遺跡の大空洞 北' },
  { href: '/dungeon/13', label: 'バレイナのほら穴' },
  { href: '/dungeon/14', label: '山脈の尾根' },
  { href: '/dungeon/15', label: '仙人のほら穴' },
  { href: '/dungeon/16', label: 'いけにえのほら穴' },
  { href: '/dungeon/17', label: '魔物のほら穴' },
  { href: '/dungeon/18', label: '神々の道' },
  { href: '/dungeon/19', label: '試練の道' },
  { href: '/dungeon/20', label: '密林の墓場' },
  { href: '/dungeon/21', label: '密林島のほら穴' },
  { href: '/dungeon/22', label: '密林島の発掘場' },
  { href: '/dungeon/23', label: '邪悪な風穴' },
  { href: '/dungeon/24', label: '暗黒の間' },
  { href: '/dungeon/29', label: '孤島のほら穴' },
  { href: '/dungeon/30', label: '化石のほら穴' },
  { href: '/dungeon/31', label: '魔物の巣' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const navClass = (href: string) =>
    `hover:text-white transition-colors ${pathname === href ? 'text-white font-bold' : 'text-gray-400'}`

  return (
    <div className="fixed top-0 left-0 h-full w-[160px] bg-[#111] border-r border-[#333] flex flex-col py-3 z-50 overflow-y-auto scrollbar-hide">
      <div className="px-4 mb-4">
        <Link href="/" className="text-white font-bold text-xs hover:text-gray-300 transition-colors whitespace-nowrap overflow-hidden block">トルネコの大冒険3 攻略wiki</Link>
      </div>
      <nav className="flex flex-col px-2">
        {links.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-1 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">アイテム</div>
        <div className="px-3 text-xs leading-5">
          <Link href="/item/weapon" className={navClass('/item/weapon')}>武器 / </Link>
          <Link href="/item/claw" className={navClass('/item/claw')}>爪 / </Link>
          <Link href="/item/shield" className={navClass('/item/shield')}>盾 / </Link>
          <Link href="/item/ring" className={navClass('/item/ring')}>指輪</Link>
          <br />
          <Link href="/item/arrow" className={navClass('/item/arrow')}>飛び道具 / </Link>
          <Link href="/item/food" className={navClass('/item/food')}>食料 / </Link>
          <Link href="/item/grass" className={navClass('/item/grass')}>草</Link>
          <br />
          <Link href="/item/scroll" className={navClass('/item/scroll')}>巻物 / </Link>
          <Link href="/item/staff" className={navClass('/item/staff')}>杖 / </Link>
          <Link href="/item/pot" className={navClass('/item/pot')}>壷 / </Link>
          <Link href="/item/other" className={navClass('/item/other')}>その他</Link>
        </div>

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">追加ダンジョン</div>
        {extraDungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-0.5 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">クリア後ダンジョン</div>
        {clearDungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-0.5 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">ダンジョン</div>
        {dungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-0.5 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}
      </nav>
    </div>
  )
}
