import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Zivotopis = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Životopis</h1>
              <p className="mt-4 text-muted-foreground">
                Ondřej Smolka
              </p>
            </div>

            <div className="space-y-4 text-base leading-7 text-foreground">
              <p>
                Mám zkušenosti s vedením webových aplikací, informačních systémů,
                mobilních aplikací i e-commerce projektů — od úvodní analýzy,
                plánování a realizace až po spuštění, následný provoz, day-to-day
                business a další rozvoj produktu.
              </p>

              <p>
                S certifikací PRINCE2 Agile vedu projekty systematicky, s důrazem
                na kvalitu, rozpočet, termíny, řízení rizik a funkční spolupráci
                mezi klientem a týmem. Nezaměřuji se pouze na to, aby vzniklo přesně
                to, co klient zadal, ale aby výsledek skutečně fungoval, byl dlouhodobě
                udržitelný a přinášel hodnotu byznysově i uživatelsky.
              </p>

              <p>
                Díky vlastnímu podnikání se na projekty dívám z několika úhlů zároveň —
                z pohledu klienta, uživatele, projektového týmu i celkové efektivity.
                Umím hledat úzká místa, předcházet rizikům, nastavovat realistická očekávání
                a optimalizovat procesy tak, aby projekt fungoval nejen technicky,
                ale i obchodně a lidsky.
              </p>

              <p>
                Praktická zkušenost s prioritizací, rozhodováním pod tlakem,
                vyhodnocováním návratnosti aktivit, optimalizací procesů a dlouhodobým
                fungováním digitálního projektu z pohledu byznysu i zákazníka.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Projekty</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">GreenForz</h3>
                <p className="text-muted-foreground">
                  E-commerce projekt zaměřený na doplňky stravy podporující činnost mozku
                </p>
                <p className="mt-1 text-sm">greenforz.cz</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Jablečný Honza</h3>
                <p className="text-muted-foreground">
                  Analýza fungování procesů a návrh úprav s cílem zjednodušit provoz,
                  odstranit slabá místa a zvýšit efektivitu.
                </p>
                <p className="mt-1 text-sm">jablecnyhonza.cz</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Automatizace procesů pomocí N8N</h3>
                <p className="text-muted-foreground">
                  Návrh a realizace automatizací s cílem zefektivnit obsahové,
                  administrativní i provozní činnosti.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Příklady: generování článků na web, tvorba LinkedIn postů,
                  automatizace fakturace přes Telegram chat, automatizace částí
                  procesních analýz a převod opakujících se činností do efektivnějších workflow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium">ondrejsmolka.cz</h3>
                <p className="text-muted-foreground">
                  Osobní web / osobní značka / prezentace zkušeností a projektů
                </p>
                <p className="mt-1 text-sm">ondrejsmolka.cz</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Belvani</h3>
                <p className="text-muted-foreground">
                  Web pro kosmetické studio Bc. Vanessa Ščotková
                </p>
                <p className="mt-1 text-sm">belvani.cz</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Majstr</h3>
                <p className="text-muted-foreground">
                  Prezentační webová stránka pro telegramovou aplikaci / digitální produkt
                </p>
                <p className="mt-1 text-sm">majstr.cz</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Vzdělání</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Informační a znalostní management</h3>
                <p className="text-muted-foreground">
                  VŠB – Technická univerzita Ostrava, Ekonomická fakulta
                </p>
                <p className="text-sm">Inženýrské studium · 2021 – 2023</p>
              </div>

              <div>
                <h3 className="font-medium">Informatika v ekonomice</h3>
                <p className="text-muted-foreground">
                  VŠB – Technická univerzita Ostrava, Ekonomická fakulta
                </p>
                <p className="text-sm">Bakalářské studium · 2018 – 2021</p>
              </div>

              <div>
                <h3 className="font-medium">Erasmus+ | Informatika v ekonomice</h3>
                <p className="text-muted-foreground">
                  University of Maribor, Slovinsko
                </p>
                <p className="text-sm">2019 – 2020</p>
              </div>

              <div>
                <h3 className="font-medium">Všeobecné gymnázium</h3>
                <p className="text-muted-foreground">
                  Gymnázium Olgy Havlové, Ostrava
                </p>
                <p className="text-sm">2010 – 2018</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Zivotopis;
