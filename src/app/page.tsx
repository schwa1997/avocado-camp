import { LanguageToggle } from "@/components/LanguageToggle";
import { siteConfig } from "@/content/site";
import { getMessages } from "@/i18n/messages";
import { getLocale } from "@/i18n/server";

type NavItem = { label: string; href: `#${string}` };

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="sectionHeader">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="h2">{title}</h2>
      {description ? <p className="sectionDesc">{description}</p> : null}
    </header>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <div className="cardBody">{children}</div>
    </div>
  );
}

export default async function Home() {
  const locale = await getLocale();
  const m = getMessages(locale);

  const nav: NavItem[] = [
    { label: m.nav.outcomes, href: "#outcomes" },
    { label: m.nav.how, href: "#how" },
    { label: m.nav.about, href: "#about" },
    { label: m.nav.faq, href: "#faq" },
  ];

  const aboutDescription = `${siteConfig.coachRole}. ${m.about.description}`;

  return (
    <div className="page">
      <div className="siteHeader">
        <div className="container headerInner">
          <a href="#top" className="brand">
            {m.brand}
          </a>

          <nav className="nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="navLink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerActions">
            <LanguageToggle
              locale={locale}
              ariaLabel={m.lang.label}
              options={[
                { locale: "en", label: m.lang.en },
                { locale: "zh", label: m.lang.zh },
              ]}
            />
            <a className="btn btnSecondary hideSm" href="#syllabus">
              {m.header.getSyllabus}
            </a>
            <a
              className="btn btnPrimary"
              href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                m.email.contactSubject,
              )}`}
            >
              {m.header.contact}
            </a>
          </div>
        </div>
      </div>

      <main id="top" className="container main">
        <section className="hero">
          <div className="heroText">
            <p className="badge">{m.hero.badge}</p>
            <h1 className="h1">{m.hero.title}</h1>
            <p className="lead">{m.hero.lead}</p>

            <div className="ctaRow">
              <a className="btn btnPrimary" href="#syllabus">
                {m.hero.ctaPrimary}
              </a>
              <a className="btn btnSecondary" href="#about">
                {m.hero.ctaSecondary}
              </a>
            </div>

            <p className="note">{m.hero.note}</p>
          </div>

          <div className="heroGrid">
            {m.hero.cards.map((c) => (
              <Card key={c.title} title={c.title}>
                {c.body}
              </Card>
            ))}
          </div>
        </section>

        <section id="outcomes" className="section">
          <SectionHeader
            eyebrow={m.outcomes.eyebrow}
            title={m.outcomes.title}
            description={m.outcomes.description}
          />

          <div className="grid3">
            {m.outcomes.cards.map((c) => (
              <Card key={c.title} title={c.title}>
                {c.body}
              </Card>
            ))}
          </div>
        </section>

        <section id="how" className="section">
          <SectionHeader
            eyebrow={m.method.eyebrow}
            title={m.method.title}
            description={m.method.description}
          />

          <div className="grid3">
            {m.method.cards.map((c) => (
              <Card key={c.title} title={c.title}>
                {c.body}
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeader
            eyebrow={m.about.eyebrow}
            title={`${m.about.titlePrefix} ${siteConfig.coachName}.`}
            description={aboutDescription}
          />

          <div className="grid2 wide">
            {m.about.cards.map((c) => (
              <Card key={c.title} title={c.title}>
                {c.body}
              </Card>
            ))}
          </div>
        </section>

        <section id="syllabus" className="section" aria-labelledby="syllabus-title">
          <div className="panel">
            <div className="panelGrid">
              <div>
                <h2 id="syllabus-title" className="h2 left">
                  {m.syllabus.title}
                </h2>
                <p className="sectionDesc left">{m.syllabus.description}</p>

                <div className="ctaRow">
                  <a
                    className="btn btnPrimary"
                    href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                      m.email.syllabusSubject,
                    )}&body=${encodeURIComponent(m.email.syllabusBody)}`}
                  >
                    {m.syllabus.ctaPrimary}
                  </a>
                  <a className="btn btnSecondary" href="#faq">
                    {m.syllabus.ctaSecondary}
                  </a>
                </div>

                <p className="note">{m.syllabus.note}</p>
              </div>

              <div className="grid2">
                {m.syllabus.cards.map((c) => (
                  <Card key={c.title} title={c.title}>
                    {c.body}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <SectionHeader
            eyebrow={m.faq.eyebrow}
            title={m.faq.title}
            description={m.faq.description}
          />

          <div className="faq">
            {m.faq.items.map((item) => (
              <details key={item.q} className="faqItem">
                <summary className="faqSummary">{item.q}</summary>
                <p className="faqBody">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {m.brand}
          </p>
          <p className="footerContact">
            {m.footer.contactLabel}{" "}
            <a className="footerLink" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}