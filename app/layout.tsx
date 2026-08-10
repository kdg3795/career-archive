import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kim DongGyu — Back-end Developer",
  description: "Java와 Spring 기반 교육 플랫폼 개발자 Kim DongGyu의 커리어 아카이브입니다.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
