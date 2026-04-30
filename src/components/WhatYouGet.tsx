import { motion } from "framer-motion";

const WhatYouGet = () => (
  <section id="sluzby" className="py-20 px-6 md:px-12 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <div className="section-divider mb-12" />
      <motion.div
        className="grid md:grid-cols-2 gap-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Zjistíte</h2>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>• Kde leží <span className="text-foreground/80 font-medium">úzká místa</span></li>
            <li>• Jaký je <span className="text-foreground/80 font-medium">skutečný tok informací a zboží</span> napříč firmou</li>
            <li>• <span className="text-foreground/80 font-medium">Kdo za co</span> opravdu <span className="text-foreground/80 font-medium">zodpovídá</span></li>
            <li>• Kde vznikají zbytečné <span className="text-foreground/80 font-medium">chyby, ztráty</span></li>
            <li>• Jaké činnosti lze <span className="text-foreground/80 font-medium">automatizovat, delegovat</span> nebo <span className="text-foreground/80 font-medium">optimalizovat</span></li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Získáte</h2>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>• Přehledně <span className="text-foreground/80 font-medium">zmapované</span> a <span className="text-foreground/80 font-medium">graficky znázorněné procesy</span> vaší firmy</li>
            <li>• <span className="text-foreground/80 font-medium">Návrhy na zlepšení</span></li>
            <li>• Konkrétní akční <span className="text-foreground/80 font-medium">doporučení</span></li>
            <li>• <span className="text-foreground/80 font-medium">Jasný plán, jak upravit fungování</span> vaší firmy tak, aby zvládla další růst bez chaosu</li>
          </ul>
        </div>
      </motion.div>
      <div className="section-divider mt-12" />
    </div>
  </section>
);

export default WhatYouGet;
