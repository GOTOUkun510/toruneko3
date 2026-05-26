'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '匠 繝帙・繝' },
  { href: '/wiki', label: '当 Wiki' },
  { href: '/board', label: '町 謗ｲ遉ｺ譚ｿ' },
]

const extraDungeonLinks = [
  { href: '/extra-dungeon/1', label: '鬲皮黄縺ｮ蠢・ｫ・ },
  { href: '/extra-dungeon/2', label: '譛ｪ譚･縺ｸ邯壹￥驕・ },
  { href: '/extra-dungeon/3', label: '繧ゅ▲縺ｨ荳肴晁ｭｰ縺ｮ豢樒ｪ・ },
]

const clearDungeonLinks = [
  { href: '/dungeon/25', label: '蟆∝魂縺ｮ豢槭￥縺､' },
  { href: '/dungeon/26', label: '逡ｰ荳也阜縺ｮ霑ｷ螳ｮ' },
  { href: '/dungeon/27', label: '荳肴晁ｭｰ縺ｮ螳晉黄蠎ｫ' },
  { href: '/dungeon/28', label: '縺ｾ縺ｼ繧阪＠縺ｮ豢槭￥縺､' },
]

const dungeonLinks = [
  { href: '/dungeon/1',  label: '隰弱・縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/2',  label: '縺・＊縺ｪ縺・・豢槭￥縺､' },
  { href: '/dungeon/3',  label: '蜊玲ｵｷ縺ｮ蝨ｰ荳矩％' },
  { href: '/dungeon/4',  label: '縺輔ｓ縺皮､√・逾樊ｮｿ 蠎・俣' },
  { href: '/dungeon/5',  label: '縺輔ｓ縺皮､√・逾樊ｮｿ 蝗槫ｻ・ },
  { href: '/dungeon/6',  label: '豬ｷ蠎募ｱｱ蝨ｰ 縺ｵ繧ゅ→' },
  { href: '/dungeon/7',  label: '豬ｷ蠎募ｱｱ蝨ｰ 螻ｱ鬆るΚ' },
  { href: '/dungeon/8',  label: '雉｢閠・・縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/9',  label: '豬ｷ遶懷ｳｶ縺ｮ驕ｺ霍｡' },
  { href: '/dungeon/10', label: '轣ｯ蜿ｰ縺ｮ蝨ｰ荳句ｮ､' },
  { href: '/dungeon/11', label: '驕ｺ霍｡縺ｮ螟ｧ遨ｺ豢・蜊・ },
  { href: '/dungeon/12', label: '驕ｺ霍｡縺ｮ螟ｧ遨ｺ豢・蛹・ },
  { href: '/dungeon/13', label: '繝舌Ξ繧､繝翫・縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/14', label: '螻ｱ閼医・蟆ｾ譬ｹ' },
  { href: '/dungeon/15', label: '莉吩ｺｺ縺ｮ縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/16', label: '縺・￠縺ｫ縺医・縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/17', label: '鬲皮黄縺ｮ縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/18', label: '逾槭・・驕・ },
  { href: '/dungeon/19', label: '隧ｦ邱ｴ縺ｮ驕・ },
  { href: '/dungeon/20', label: '蟇・棊縺ｮ蠅灘ｴ' },
  { href: '/dungeon/21', label: '蟇・棊蟲ｶ縺ｮ縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/22', label: '蟇・棊蟲ｶ縺ｮ逋ｺ謗伜ｴ' },
  { href: '/dungeon/23', label: '驍ｪ謔ｪ縺ｪ鬚ｨ遨ｴ' },
  { href: '/dungeon/24', label: '證鈴ｻ偵・髢・ },
  { href: '/dungeon/29', label: '蟄､蟲ｶ縺ｮ縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/30', label: '蛹也浹縺ｮ縺ｻ繧臥ｩｴ' },
  { href: '/dungeon/31', label: '鬲皮黄縺ｮ蟾｣' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const navClass = (href: string) =>
    `hover:text-white transition-colors ${pathname === href ? 'text-white font-bold' : 'text-gray-400'}`

  return (
    <div className="fixed top-0 left-0 h-full w-[160px] bg-[#111] border-r border-[#333] flex flex-col py-3 z-50 overflow-y-auto scrollbar-hide">
      <div className="px-4 mb-4">
        <Link href="/" className="text-white font-bold text-xs hover:text-gray-300 transition-colors whitespace-nowrap overflow-hidden block">繝医Ν繝阪さ縺ｮ螟ｧ蜀帝匱3 謾ｻ逡･wiki</Link>
      </div>
      <nav className="flex flex-col px-2">
        {links.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-1 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">繧｢繧､繝・Β</div>
        <div className="px-3 text-xs leading-5">
          <Link href="/item/weapon" className={navClass('/item/weapon')}>豁ｦ蝎ｨ / </Link>
          <Link href="/item/claw" className={navClass('/item/claw')}>辷ｪ / </Link>
          <Link href="/item/shield" className={navClass('/item/shield')}>逶ｾ / </Link>
          <Link href="/item/ring" className={navClass('/item/ring')}>謖・ｼｪ</Link>
          <br />
          <Link href="/item/arrow" className={navClass('/item/arrow')}>鬟帙・驕灘・ / </Link>
          <Link href="/item/food" className={navClass('/item/food')}>鬟滓侭 / </Link>
          <Link href="/item/grass" className={navClass('/item/grass')}>闕・/Link>
          <br />
          <Link href="/item/scroll" className={navClass('/item/scroll')}>蟾ｻ迚ｩ / </Link>
          <Link href="/item/staff" className={navClass('/item/staff')}>譚・/ </Link>
          <Link href="/item/pot" className={navClass('/item/pot')}>螢ｷ / </Link>
          <Link href="/item/other" className={navClass('/item/other')}>縺昴・莉・/Link>
        </div>

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">霑ｽ蜉繝繝ｳ繧ｸ繝ｧ繝ｳ</div>
        {extraDungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-0.5 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">繧ｯ繝ｪ繧｢蠕後ム繝ｳ繧ｸ繝ｧ繝ｳ</div>
        {clearDungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-0.5 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}

        <div className="px-3 pt-2 pb-1 text-xs text-gray-600">繝繝ｳ繧ｸ繝ｧ繝ｳ</div>
        {dungeonLinks.map(link => (
          <Link key={link.href} href={link.href} className={`px-3 py-0.5 rounded text-xs ${navClass(link.href)}`}>{link.label}</Link>
        ))}
      </nav>
    </div>
  )
}
