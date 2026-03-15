import type { Metadata } from "next";
import "./globals.css";
import { getMessages } from "@/i18n/messages";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = getMessages(locale);
  const description =
    locale === "zh"
      ? "面向开发者的英语口语训练营：用清晰、简单的英语参与会议、面试与日常协作。"
      : "A practical oral English training camp for developers—learn to speak clearly with simple, confident English for meetings, interviews, and daily work.";

  return {
    title: {
      default: m.brand,
      template: `%s · ${m.brand}`,
    },
    description,
    applicationName: m.brand,
    keywords:
      locale === "zh"
        ? [
            "开发者英语",
            "英语口语",
            "职场英语",
            "技术沟通",
            "面试英语",
          ]
        : [
            "English for developers",
            "spoken English",
            "oral English",
            "tech communication",
            "career growth",
          ],
    robots: { index: true, follow: true },
    openGraph: {
      title: m.brand,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: m.brand,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="appBody">{children}</body>
    </html>
  );
}