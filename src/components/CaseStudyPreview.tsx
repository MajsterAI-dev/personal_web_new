import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CaseStudyPreview = () => (
  <section className="py-24 px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Case Study</p>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
          Procesní analýza e-shopu s elektronikou
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Majitel menšího e-shopu s repasovanou elektronikou se rozhodl připravit firmu na předání novému řediteli.
          Firma rychle rostla, ale většina klíčových informací, rozhodování a nastavení fungování byla „v hlavách lidí".
        </p>
        <Link
          to="/case-study"
          className="inline-block bg-foreground text-background px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          Číst celou studii →
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CaseStudyPreview;
