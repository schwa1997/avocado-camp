import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "学期课程时间表 · 2026年4月—7月",
  description: "英语口语学期课，零基础/口语突破/求职英语，每周 2 节录制课 + 无限量一对一。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="appBody">{children}</body>
    </html>
  );
}
