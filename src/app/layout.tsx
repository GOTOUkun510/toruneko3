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
  title: "繝医Ν繝阪さ縺ｮ螟ｧ蜀帝匱3 謾ｻ逡･wiki",
  description: "繝医Ν繝阪さ縺ｮ螟ｧ蜀帝匱3・医ラ繝ｩ繧ｴ繝ｳ繧ｯ繧ｨ繧ｹ繝医く繝｣繝ｩ繧ｯ繧ｿ繝ｼ繧ｺ 繝医Ν繝阪さ縺ｮ螟ｧ蜀帝匱3 荳肴晁ｭｰ縺ｮ繝繝ｳ繧ｸ繝ｧ繝ｳ・峨・謾ｻ逡･wiki縲ゅム繝ｳ繧ｸ繝ｧ繝ｳ繝ｻ繝｢繝ｳ繧ｹ繧ｿ繝ｼ繝ｻ繧｢繧､繝・Β諠・ｱ繧呈軸霈峨・,
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
        <main className="ml-[160px] flex-1">{children}</main>
      </body>
    </html>
  );
}
