import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#", hasDropdown: false },
  { label: "SOBRE", href: "#sobre", hasDropdown: true },
  { label: "COMO FUNCIONA", href: "#como-funciona", hasDropdown: true },
  { label: "EMPRESAS", href: "#empresas", hasDropdown: true },
  { label: "JOVENS", href: "#jovens", hasDropdown: true },
  { label: "IMPACTO", href: "#impacto", hasDropdown: true },
  { label: "CONTATO", href: "#contato", hasDropdown: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top brand bar */}
      <div className="bg-gradient-primary">
        <div className="container mx-auto flex items-center justify-between h-10 px-4">
          <a href="#" className="font-heading text-sm font-bold text-primary-foreground tracking-widest uppercase">
            DataBridge
          </a>
          <span className="text-primary-foreground/70 text-xs tracking-wide hidden sm:block">
            AI for All — Conectando talentos e negócios
          </span>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-card/95 backdrop-blur-xl border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between h-12 px-4">
          {/* Desktop links */}
          <div className="hidden md:flex items-center w-full">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group flex flex-col items-center px-4 py-2 text-xs font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase"
              >
                <span>{l.label}</span>
                {l.hasDropdown && (
                  <ChevronDown size={12} className="mt-0.5 text-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            ))}

            <a
              href="#contato"
              className="ml-auto text-xs font-semibold tracking-wider text-secondary hover:text-foreground transition-colors duration-200 uppercase px-4 py-2"
            >
              MAIS
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2 rounded-md hover:bg-muted/50 transition-colors ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-[2px] bg-gradient-secondary" />

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-xl border-b border-border/60 px-4 pb-4 pt-2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-200 uppercase tracking-wider border-b border-border/30 last:border-0"
            >
              <span>{l.label}</span>
              {l.hasDropdown && <ChevronDown size={14} className="text-secondary" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
