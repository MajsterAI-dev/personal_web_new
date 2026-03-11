import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const CaseStudy = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">Case Study</h1>
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-muted-foreground mb-12">
            Procesní analýza e-shopu s elektronikou
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground mb-12">
            Majitel menšího e-shopu s repasovanou elektronikou se rozhodl připravit firmu na předání operativního řízení
            novému řediteli. Firma rychle rostla, ale většina klíčových informací, rozhodování a nastavení fungování
            byla „v hlavách lidí" – především majitele a několika klíčových zaměstnanců.
          </p>

          <div className="section-divider mb-12" />

          <section className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">Cíl</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              Cílem projektu bylo kompletně <strong className="text-foreground">zmapovat</strong> reálné fungování firmy,
              a to <strong className="text-foreground">od nákupu zboží</strong> přes{" "}
              <strong className="text-foreground">servis</strong>, <strong className="text-foreground">sklad</strong> a{" "}
              <strong className="text-foreground">expedici</strong>, až{" "}
              <strong className="text-foreground">po reklamace</strong>,{" "}
              <strong className="text-foreground">marketing</strong> a{" "}
              <strong className="text-foreground">účetnictví</strong>. Výstupem měl být srozumitelný procesní popis
              firmy, který umožní:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground ml-1">
              <li>• přehledně předat řízení novému řediteli,</li>
              <li>• snížit závislost na konkrétních osobách,</li>
              <li>• identifikovat hlavní neefektivity a úzká místa.</li>
              <li>• Analýza probíhala přibližně 3 týdny a zaměřila se na každodenní provoz e-shopu.</li>
            </ul>
          </section>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-center">Problém</h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>• <strong className="text-foreground">Nejasné</strong> role a <strong className="text-foreground">zodpovědnosti</strong></li>
                <li>• <strong className="text-foreground">Procesy nebyly</strong> nikde zapsané</li>
                <li>• Ruční a <strong className="text-foreground">duplicitní zadávání</strong> dat</li>
                <li>• Závislost na klíčových osobách</li>
                <li>• Chybějící základní dokumentace</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-center">Řešení</h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>• <strong className="text-foreground">Sběr informací</strong> a vstupní <strong className="text-foreground">analýza</strong></li>
                <li>• Tvorba <strong className="text-foreground">procesní mapy</strong> firmy</li>
                <li>• <strong className="text-foreground">SIPOC</strong> modely pro klíčové procesy</li>
                <li>• <strong className="text-foreground">RACI matice</strong> – kdo je za co odpovědný</li>
                <li>• <strong className="text-foreground">Detailní popis</strong> jednotlivých <strong className="text-foreground">procesů</strong></li>
                <li>• <strong className="text-foreground">Identifikace neefektivit</strong> a úzkých míst</li>
              </ul>
            </div>
          </div>

          <div className="section-divider mb-12" />

          <section className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 text-center">Výsledek</h3>
            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h4 className="font-semibold text-lg mb-4">Kompletní procesní dokumentace firmy</h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• popis všech hlavních procesů „od A do Z",</li>
                  <li>• procesní mapa,</li>
                  <li>• SIPOC pro klíčový proces,</li>
                  <li>• RACI matice rolí a odpovědností.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Podklad pro předání řízení novému řediteli</h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• jak firma skutečně funguje den po dni,</li>
                  <li>• kdo co dělá,</li>
                  <li>• kde jsou úzká místa.</li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary p-8">
              <h4 className="font-semibold text-lg mb-4 text-center">Jasně pojmenované neefektivity a konkrétní plán zlepšení</h4>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• seznam problémů (ruční data, duplicity, komunikace, zásoby, reporting),</li>
                <li>• k nim navázaná doporučení (centralizace, automatizace, checklisty, sjednocení komunikace).</li>
              </ul>
            </div>
          </section>

          <div className="section-divider mb-12" />

          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-6">
              Chcete podobný výsledek pro svou firmu?
            </h3>
            <Link
              to="/kontakt"
              className="inline-block bg-foreground text-background px-10 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Objednat konzultaci zdarma
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default CaseStudy;
