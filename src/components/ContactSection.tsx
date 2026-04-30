import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactSection = () => (
  <section id="kontakt" className="py-20 px-6 md:px-12 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <div className="section-divider mb-12" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Web</p>
            <a href="https://ondrejsmolka.cz" className="text-base font-medium hover:opacity-70 transition-opacity">ondrejsmolka.cz</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Telefon</p>
            <a href="tel:+420739470486" className="text-base font-medium hover:opacity-70 transition-opacity">739 470 486</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
            <a href="mailto:smolka.ondra@gmail.com" className="text-base font-medium hover:opacity-70 transition-opacity">smolka.ondra@gmail.com</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/kontakt"
            className="inline-block bg-foreground text-background px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            Napište mi →
          </Link>
        </div>
      </motion.div>
      <div className="section-divider mt-12" />
    </div>
  </section>
);

export default ContactSection;
