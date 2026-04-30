import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const profileHighlights = [
  "Procesní analytik",
  "PRINCE2 Agile",
  "Digitální projekty",
];

const projects = [
  {
    title: "GreenForz",
    description:
      "E-commerce projekt zaměřený na doplňky stravy podporující činnost mozku",
    link: "https://greenforz.cz",
    label: "greenforz.cz",
  },
  {
    title: "Jablečný Honza",
    description:
      "Analýza fungování procesů a návrh úprav s cílem zjednodušit provoz, odstranit slabá místa a zvýšit efektivitu.",
    label: "jablecnyhonza.cz",
  },
  {
    title: "Automatizace procesů pomocí N8N",
    description:
      "Návrh a realizace automatizací s cílem zefektivnit obsahové, administrativní i provozní činnosti.",
    note:
      "Příklady: generování článků na web, tvorba LinkedIn postů, automatizace fakturace přes Telegram chat, automatizace částí procesních analýz a převod opakujících se činností do efektivnějších workflow.",
  },
  {
    title: "ondrejsmolka.cz",
    description:
      "Osobní web / osobní značka / prezentace zkušeností a projektů",
    label: "ondrejsmolka.cz",
  },
  {
    title: "Belvani",
    description: "Web pro kosmetické studio Bc. Vanessa Ščotková",
    label: "belvani.cz",
  },
  {
    title: "Majstr",
    description:
      "Prezentační webová stránka pro telegramovou aplikaci / digitální produkt",
    label: "majstr.cz",
  },
];

const education = [
  {
    title: "Informační a znalostní management",
    place: "VŠB – Technická univerzita Ostrava, Ekonomická fakulta",
    period: "Inženýrské studium · 2021 – 2023",
  },
  {
    title: "Informatika v ekonomice",
    place: "VŠB – Technická univerzita Ostrava, Ekonomická fakulta",
    period: "Bakalářské studium · 2018 – 2021",
  },
  {
    title: "Erasmus+ | Informatika v ekonomice",
    place: "University of Maribor, Slovinsko",
    period: "2019 – 2020",
  },
  {
    title: "Všeobecné gymnázium",
    place: "Gymnázium Olgy Havlové, Ostrava",
    period: "2010 – 2018",
  },
];

const Zivotopis = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto max-w-5xl space-y-16">
          <section className="border-y border-foreground py-8 md:py-12">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:items-stretch lg:grid-cols-[minmax(0,1fr)_340px]">
              <div className="flex flex-col justify-between gap-12">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Životopis
                  </p>
                  <h1 className="mt-4 text-5xl font-bold uppercase leading-[0.95] md:text-7xl">
                    Ondřej
                    <br />
                    Smolka
                  </h1>
                </div>

                <div className="grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
                  {profileHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="border border-border px-4 py-3 text-sm font-medium uppercase tracking-wide"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <aside className="relative">
                <div className="absolute inset-x-6 -top-4 h-16 bg-secondary md:inset-x-8" />
                <div className="relative border border-foreground bg-background p-3">
                  <img
                    src="/1744824554745.jpeg"
                    alt="Ondřej Smolka"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                  <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-3 text-xs font-medium uppercase tracking-widest">
                    <span>Ostrava</span>
                    <span className="text-muted-foreground">CZ</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-14">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Profil
              </p>
            </div>

            <div className="space-y-5 text-base leading-7 text-foreground">
              <p>
                Mám zkušenosti s vedením webových aplikací, informačních
                systémů, mobilních aplikací i e-commerce projektů — od úvodní
                analýzy, plánování a realizace až po spuštění, následný provoz,
                day-to-day business a další rozvoj produktu.
              </p>

              <p>
                S certifikací PRINCE2 Agile vedu projekty systematicky, s
                důrazem na kvalitu, rozpočet, termíny, řízení rizik a funkční
                spolupráci mezi klientem a týmem. Nezaměřuji se pouze na to,
                aby vzniklo přesně to, co klient zadal, ale aby výsledek
                skutečně fungoval, byl dlouhodobě udržitelný a přinášel hodnotu
                byznysově i uživatelsky [1].
              </p>

              <p>
                Díky vlastnímu podnikání se na projekty dívám z několika úhlů
                zároveň — z pohledu klienta, uživatele, projektového týmu i
                celkové efektivity. Umím hledat úzká místa, předcházet rizikům,
                nastavovat realistická očekávání a optimalizovat procesy tak,
                aby projekt fungoval nejen technicky, ale i obchodně a lidsky
                [1].
              </p>

              <p>
                Praktická zkušenost s prioritizací, rozhodováním pod tlakem,
                vyhodnocováním návratnosti aktivit, optimalizací procesů a
                dlouhodobým fungováním digitálního projektu z pohledu byznysu i
                zákazníka [1].
              </p>
            </div>
          </section>

          <section className="grid gap-8 border-t border-border pt-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-14">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Projekty
              </h2>
            </div>

            <div className="divide-y divide-border">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[220px_minmax(0,1fr)]"
                >
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    {project.note && (
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {project.note}
                      </p>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-primary underline underline-offset-4 hover:opacity-80"
                      >
                        {project.label}
                      </a>
                    ) : (
                      project.label && (
                        <p className="mt-2 text-sm">{project.label}</p>
                      )
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-border pt-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-14">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Vzdělání
              </h2>
            </div>

            <div className="divide-y divide-border">
              {education.map((item) => (
                <article
                  key={`${item.title}-${item.period}`}
                  className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[220px_minmax(0,1fr)]"
                >
                  <h3 className="font-medium">{item.title}</h3>
                  <div>
                    <p className="text-muted-foreground">{item.place}</p>
                    <p className="mt-1 text-sm">{item.period}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Zivotopis;
