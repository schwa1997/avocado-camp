import { getMessages } from "@/i18n/messages";
import { getLocale } from "@/i18n/server";

export default async function AvocadoPage() {
  const locale = await getLocale();
  const m = getMessages(locale);

  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 72 }}>
      <h1 className="h2 left" style={{ marginTop: 0 }}>
        {m.comingSoon.title}
      </h1>
      <p className="sectionDesc left" style={{ marginTop: 12 }}>
        {m.comingSoon.body}
      </p>
    </main>
  );
}