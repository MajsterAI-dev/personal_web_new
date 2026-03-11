import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="o-mne" className="py-20 px-6 md:px-12 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="grid md:grid-cols-2 gap-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Výzvy</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Při rychlém růstu soustředíte veškerou energii na <span className="text-foreground/80 font-medium">nové zákazníky</span>,{" "}
            <span className="text-foreground/80 font-medium">tržby</span> a samotný{" "}
            <span className="text-foreground/80 font-medium">růst</span>. Expanze je číslo jedna, finance priorita číslo dvě –{" "}
            <span className="text-foreground/80 font-medium">a co dál?</span>
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            <span className="text-foreground/80 font-medium">Jak funguje Vaše firma?</span> Jak probíhá tok zboží od vstupu k výstupu?
            Kdo, jak, za jakých okolností a co přesně dělá?{" "}
            <span className="text-foreground/80 font-medium">Máte v tom přehled?</span>
          </p>
        </div>
        <div className="border-l border-foreground pl-8 md:pl-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Řešení</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Má <span className="text-foreground/80 font-medium">procesní analýza</span> vám pomůže vnést do firemního provozu{" "}
            <span className="text-foreground/80 font-medium">jasnost, pořádek a systém</span>. Společně detailně zmapujeme, jak vaše
            firma skutečně funguje – od první objednávky až po předání zboží spokojenému zákazníkovi.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
