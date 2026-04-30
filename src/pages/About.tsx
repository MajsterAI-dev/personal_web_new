import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";
import { Quote, Target, Users, Zap } from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tight mb-12">
            Procesní analytik, který pomáhá firmám růst efektivněji
          </h1>

          <div className="section-divider mb-12" />

          <motion.section className="mb-16" {...fadeIn}>
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3 space-y-6">
                <p className="text-lg leading-relaxed">
                  Pomáhám firmám a organizacím zmapovat jejich vnitřní procesy, 
                  odhalit skrytá úzká hrdla a najít cesty k efektivnějšímu fungování.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Věřím, že každá firma má v sobě potenciál pracovat lépe – rychleji, 
                  s menšími náklady a spokojenějšími zaměstnanci. Klíčem je porozumět tomu, 
                  jak ve skutečnosti funguje, ne jak by fungovat měla podle dokumentace.
                </p>
              </div>
              <div className="md:col-span-2 bg-secondary/50 p-6">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Lokace</p>
                <p className="text-base mb-6">Ostrava, Česká republika</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Specializace</p>
                <p className="text-base">Procesní analýza, BPMN</p>
                <p className="text-base">PRINCE2 Agile</p>
              </div>
            </div>
          </motion.section>

          <div className="section-divider mb-12" />

          <motion.section className="mb-16" {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-8">Proč procesní analýza</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Jasná fakta</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Není to o domněnkách. Získáte přesný obraz toho, jak firma skutečně funguje, 
                    s konkrétními daty a procesními mapami.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Měřitelné výsledky</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Optimalizované procesy znamenají reálné úspory času a nákladů – 
                    od desítek hodin měsíčně po stovky tisíc korun ročně.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Spokojený tým</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Když procesy fungují, lidé se nestresují zmatkem. Vědí, co mají dělat, 
                    a mohou se soustředit na to, v čem vynikají.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Udržitelný růst</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Firmy s nastavenými procesy škálují lépe. Rostou bez chaosu, 
                    zachovávají kvalitu a zvládají větší objemy.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="section-divider mb-12" />

          <motion.section className="mb-16" {...fadeIn}>
            <div className="border border-border p-8 md:p-12 text-center">
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                „Mým cílem není komplikovaný manuál, který nikdo nečte. 
                Cílem je, aby firma fungovala lépe už zítra – a ještě lépe za rok."
              </blockquote>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Ing. Ondřej Smolka
              </p>
            </div>
          </motion.section>

          <div className="section-divider mb-12" />

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6">
              Pojďme probrat Vaši situaci
            </h3>
            <Link
              to="/kontakt"
              className="inline-block bg-foreground text-background px-10 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Domluvit konzultaci
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default About;
