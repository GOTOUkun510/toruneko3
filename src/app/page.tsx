import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'トルネコの大冒険3 攻略wiki MOD',
  description: 'トルネコの大冒険3（ドラゴンクエストキャラクターズ トルネコの大冒険3 不思議のダンジョン）MOD攻略wiki。モンスター270体画像つき、ダンジョン攻略・アイテム・モンスターのこころ・スペルブックなど2026年最新情報を掲載。スマホ対応。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'トルネコの大冒険3 攻略wiki MOD',
    description: 'トルネコの大冒険3 MOD攻略wiki。モンスター270体画像つき、ダンジョン攻略・アイテム・モンスターのこころなど2026年最新情報を掲載。',
    url: 'https://toruneko3.vercel.app',
    siteName: 'トルネコの大冒険3 攻略wiki MOD',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'トルネコの大冒険3 攻略wiki MOD',
    description: 'トルネコの大冒険3 MOD攻略wiki。モンスター270体画像つき、2026年最新情報を掲載。',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a2e] text-white">
      <h1 className="text-4xl font-bold">
        トルネコの大冒険3 攻略wiki MOD</h1>
      <p className="text-gray-400 mt-4">
        スマホ対応、モンスター270体画像つき、2026攻略まとめサイト   
        </p>
      <div className="mt-10 p-6 bg-[#1e1e2e] border border-[#3a3a5c] rounded-lg text-center max-w-md">
        <p className="text-gray-300 text-sm leading-relaxed">
          このサイトは個人で制作・運営しています。<br />
          トルネコ3MODの各種データをスマホからでも見やすく、整理して掲載している非公式ファンサイト・データベースです。<br />
          役に立ったらカンパいただけると励みになります。<br />
          2026/5/28作成
        </p>
        <a
          href="https://www.amazon.jp/hz/wishlist/ls/39YE10UQUYE10?ref_=wl_share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-[#f90] text-black font-bold rounded hover:bg-[#e68a00] transition-colors text-sm"
        >
          Amazonほしいものリスト
        </a>
      </div>
      <div className="mt-10 text-xs text-gray-500 text-center leading-6">
        <p>出典</p>
        <a href="https://toruneko3.kouryaku.red/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">https://toruneko3.kouryaku.red/</a><br />
        <a href="https://pompombomb.hatenablog.com/entry/2026/03/31/215556" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">https://pompombomb.hatenablog.com/entry/2026/03/31/215556</a>
      </div>
      <p className="mt-6 text-xs text-gray-600 text-center">
        © SPIKE CHUNSOFT/ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved.
      </p>
    </div>
  );
}
