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
            Při rychlém růstu soustředíte veškerou energii na <strong className="text-foreground">nové zákazníky</strong>,{" "}
            <strong className="text-foreground">tržby</strong> a samotný{" "}
            <strong className="text-foreground">růst</strong>. Expanze je číslo jedna, finance priorita číslo dvě –{" "}
            <strong className="text-foreground">a co dál?</strong>
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Jak funguje Vaše firma?</strong> Jak probíhá tok zboží od vstupu k výstupu?
            Kdo, jak, za jakých okolností a co přesně dělá?{" "}
            <strong className="text-foreground">Máte v tom přehled?</strong>
          </p>
        </div>
        <div className="border-l border-foreground pl-8 md:pl-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Řešení</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Má <strong className="text-foreground">procesní analýza</strong> vám pomůže vnést do firemního provozu{" "}
            <strong className="text-foreground">jasnost, pořádek a systém</strong>. Společně detailně zmapujeme, jak vaše
            firma skutečně funguje – od první objednávky až po předání zboží spokojenému zákazníkovi.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
