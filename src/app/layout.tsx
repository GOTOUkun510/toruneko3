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
  title: "トルネコの大冒険3 攻略wiki MOD",
  description: "トルネコの大冒険3（ドラゴンクエストキャラクターズ トルネコの大冒険3 不思議のダンジョン）MOD攻略wiki。魔物の心髄・未来へ続く道・もっと不思議の洞窟などMODダンジョンのモンスター・アイテム・攻略情報を掲載。",
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
        <main className="ml-[150px] flex-1">{children}</main>
      </body>
    </html>
  );
}
