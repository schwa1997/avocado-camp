"use server";

import { cookies } from "next/headers";
import { isLocale, type Locale } from "@/i18n/locales";

export async function setLocale(locale: Locale) {
  if (!isLocale(locale)) return;

  const cookieStore = await cookies();
  cookieStore.set("lang", locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
}