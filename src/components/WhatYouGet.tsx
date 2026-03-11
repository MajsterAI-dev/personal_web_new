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
            <li>• Kde leží <strong className="text-foreground">úzká místa</strong></li>
            <li>• Jaký je <strong className="text-foreground">skutečný tok informací a zboží</strong> napříč firmou</li>
            <li>• <strong className="text-foreground">Kdo za co</strong> opravdu <strong className="text-foreground">zodpovídá</strong></li>
            <li>• Kde vznikají zbytečné <strong className="text-foreground">chyby, ztráty</strong></li>
            <li>• Jaké činnosti lze <strong className="text-foreground">automatizovat, delegovat</strong> nebo <strong className="text-foreground">optimalizovat</strong></li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Získáte</h2>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>• Přehledně <strong className="text-foreground">zmapované</strong> a <strong className="text-foreground">graficky znázorněné procesy</strong> vaší firmy</li>
            <li>• <strong className="text-foreground">Návrhy na zlepšení</strong></li>
            <li>• Konkrétní akční <strong className="text-foreground">doporučení</strong></li>
            <li>• <strong className="text-foreground">Jasný plán, jak upravit fungování</strong> vaší firmy tak, aby zvládla další růst bez chaosu a krizového hašení problémů</li>
          </ul>
        </div>
      </motion.div>
      <div className="section-divider mt-12" />
    </div>
  </section>
);

export default WhatYouGet;
