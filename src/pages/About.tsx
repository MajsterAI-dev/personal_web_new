import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">O mně</p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-12">
            Ing. Ondřej Smolka
          </h1>

          <div className="section-divider mb-12" />

          <motion.section className="mb-16" {...fadeIn}>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6">Kdo jsem</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  Jsem procesní analytik a IT projektový manažer se zázemím v technologiích a projektovém řízení.
                  Pomáhám firmám zmapovat, jak skutečně fungují – a najít cestu, jak fungovat lépe.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  S certifikací PRINCE2 Agile jsem úspěšně vedl projekty od webových aplikací a informačních systémů
                  až po mobilní aplikace a e-commerce platformy. Mezi mé významné projekty patří mobilní aplikace
                  Počasí ČHMÚ, Per Rollam, Mediální Olympiáda a informační systém Dotace a Granty.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Čerpám ze zkušeností ze zahraničí i z vybudování vlastního e-commerce projektu od nuly.
                  Vynikám v optimalizaci procesů, vedení týmů a efektivní komunikaci.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Lokace</p>
                  <p className="text-base font-medium">Ostrava, Česká republika</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Vzdělání</p>
                  <p className="text-base font-medium">VŠB-TUO, Ekonomická fakulta</p>
                  <p className="text-sm text-muted-foreground">Ing. – Informační a znalostní management</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Certifikace</p>
                  <p className="text-base font-medium">PRINCE2 Agile</p>
                  <p className="text-base font-medium">FCE – Cambridge English</p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="section-divider mb-12" />

          <motion.section className="mb-16" {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-8">Zkušenosti</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-muted-foreground/30 pl-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">2023 – Dosud</p>
                <h3 className="text-lg font-semibold mb-1">IT Projektový manažer</h3>
                <p className="text-sm text-muted-foreground mb-3">Railsformers, Ostrava</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Řízení projektů s rozpočty v milionech Kč. Vedení až 10členného týmu od inicializace
                  po úspěšné dokončení. Procesní analýzy, návrh a optimalizace firemních procesů.
                </p>
              </div>
              <div className="border-l-2 border-muted-foreground/30 pl-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">2021 – 2022</p>
                <h3 className="text-lg font-semibold mb-1">Projektový manažer</h3>
                <p className="text-sm text-muted-foreground mb-3">Renturi, Ostrava</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Zřízení a správa tří očkovacích míst – nábor, logistika, komunikace s úřady.
                </p>
              </div>
              <div className="border-l-2 border-muted-foreground/30 pl-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">2020 – 2021</p>
                <h3 className="text-lg font-semibold mb-1">Systémový inženýr (stáž)</h3>
                <p className="text-sm text-muted-foreground mb-3">TietoEVRY, Ostrava</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Správa databázových serverů, dohled nad bezpečnostními incidenty.
                </p>
              </div>
            </div>
          </motion.section>

          <div className="section-divider mb-12" />

          <motion.section className="mb-16" {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-8">Dovednosti</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Procesní analýza",
                "PRINCE2 Agile",
                "Projektové řízení",
                "BPMN modelování",
                "SIPOC & RACI",
                "Microsoft Office",
                "Google Workspace",
                "N8N automatizace",
              ].map((skill) => (
                <div key={skill} className="border border-border px-4 py-3 text-sm text-center">
                  {skill}
                </div>
              ))}
            </div>
          </motion.section>

          <div className="section-divider mb-12" />

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6">
              Chcete se dozvědět víc?
            </h3>
            <Link
              to="/kontakt"
              className="inline-block bg-foreground text-background px-10 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Kontaktujte mě
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default About;
