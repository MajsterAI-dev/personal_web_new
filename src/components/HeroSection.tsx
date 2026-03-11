import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="py-24 md:py-40 px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Procesní
        <br />
        Analýza
      </motion.h1>
      <motion.div
        className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="section-divider" />
      </motion.div>
      <motion.div
        className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Procesní analytik</p>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Ing. Ondřej Smolka</p>
      </motion.div>
      <div className="section-divider mt-6" />
    </div>
  </section>
);

export default HeroSection;
