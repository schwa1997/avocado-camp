import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "./locales";

function parseAcceptLanguage(value: string | null): Locale | null {
  if (!value) return null;

  // Example: "zh-CN,zh;q=0.9,en;q=0.8"
  const parts = value
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  for (const part of parts) {
    const tag = part.split(";")[0]?.toLowerCase();
    if (!tag) continue;

    const base = tag.split("-")[0] ?? "";
    if (isLocale(base)) return base;
  }

  return null;
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("lang")?.value;
  if (cookieValue && isLocale(cookieValue)) return cookieValue;

  const headerStore = await headers();
  const accept = headerStore.get("accept-language");
  return parseAcceptLanguage(accept) ?? defaultLocale;
}