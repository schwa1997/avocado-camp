"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/locales";
import { setLocale } from "@/app/actions";

type Option = {
  locale: Locale;
  label: string;
};

export function LanguageToggle({
  locale,
  ariaLabel,
  options,
}: {
  locale: Locale;
  ariaLabel: string;
  options: Option[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const set = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    startTransition(async () => {
      await setLocale(nextLocale);
      router.refresh();
    });
  };

  return (
    <div className="lang" aria-label={ariaLabel}>
      {options.map((o) => (
        <button
          key={o.locale}
          type="button"
          className={locale === o.locale ? "langBtn active" : "langBtn"}
          onClick={() => set(o.locale)}
          aria-pressed={locale === o.locale}
          disabled={isPending}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}