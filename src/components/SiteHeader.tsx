import { Link } from "react-router-dom";

const SiteHeader = () => (
  <header className="py-6 px-6 md:px-12 flex items-center justify-between border-b border-foreground">
    <Link to="/" className="font-display text-lg font-semibold tracking-tight whitespace-nowrap" style={{ fontFamily: 'var(--font-display)' }}>
      ONDŘEJ SMOLKA
    </Link>
    <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm tracking-wide uppercase whitespace-nowrap">
      <Link to="/o-mne" className="text-muted-foreground hover:text-foreground transition-colors">O&nbsp;mně</Link>
      <a href="/#sluzby" className="text-muted-foreground hover:text-foreground transition-colors">Služby</a>
      <Link to="/case-study" className="text-muted-foreground hover:text-foreground transition-colors">Case Study</Link>
      <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
    </nav>
    <Link
      to="/kontakt"
      className="bg-foreground text-background px-5 py-2.5 text-sm font-medium tracking-wide uppercase hover:opacity-80 transition-opacity whitespace-nowrap ml-6 lg:ml-8"
    >
      Konzultace zdarma
    </Link>
  </header>
);

export default SiteHeader;
