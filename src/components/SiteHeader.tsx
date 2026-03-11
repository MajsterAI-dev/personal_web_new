import { Link } from "react-router-dom";

const SiteHeader = () => (
  <header className="py-6 px-6 md:px-12 flex items-center justify-between border-b border-foreground">
    <Link to="/" className="font-display text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
      ONDŘEJ SMOLKA
    </Link>
    <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
      <a href="#o-mne" className="text-muted-foreground hover:text-foreground transition-colors">O mně</a>
      <a href="#sluzby" className="text-muted-foreground hover:text-foreground transition-colors">Služby</a>
      <Link to="/case-study" className="text-muted-foreground hover:text-foreground transition-colors">Case Study</Link>
      <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
    </nav>
    <a
      href="#kontakt"
      className="bg-foreground text-background px-5 py-2.5 text-sm font-medium tracking-wide uppercase hover:opacity-80 transition-opacity"
    >
      Konzultace zdarma
    </a>
  </header>
);

export default SiteHeader;
