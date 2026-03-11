import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 px-6 md:px-12">
    <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">
        Objednejte se na vstupní konzultaci zdarma
      </h2>
      <Link
        to="/kontakt"
        className="inline-block bg-foreground text-background px-10 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
      >
        Kontaktujte mě
      </Link>
    </motion.div>
  </section>
);

export default CTASection;
