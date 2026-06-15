import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toruneko3.vercel.app"),
  title: {
    default: "トルネコの大冒険3 攻略wiki MOD",
    template: "%s | トルネコの大冒険3 攻略wiki MOD",
  },
  description: "トルネコの大冒険3（ドラゴンクエストキャラクターズ トルネコの大冒険3 不思議のダンジョン）MOD攻略wiki。魔物の心髄・未来へ続く道・もっと不思議の洞窟などMODダンジョンのモンスター・アイテム・攻略情報を掲載。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "トルネコの大冒険3 攻略wiki MOD",
    description: "トルネコの大冒険3 MOD攻略wiki。魔物の心髄・未来へ続く道・もっと不思議の洞窟などMODダンジョンの攻略情報まとめ。",
    url: "https://toruneko3.vercel.app",
    siteName: "トルネコの大冒険3 攻略wiki MOD",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/アイコン.jpg",
        width: 512,
        height: 512,
        alt: "トルネコの大冒険3 攻略wiki MOD",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "トルネコの大冒険3 攻略wiki MOD",
    description: "トルネコの大冒険3 MOD攻略wiki。魔物の心髄・未来へ続く道・もっと不思議の洞窟などMODダンジョンの攻略情報まとめ。",
    images: ["/アイコン.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-[#1a1a1a]">
        <Sidebar />
        <main className="md:ml-[160px] flex-1">{children}</main>
      </body>
    </html>
  );
}
