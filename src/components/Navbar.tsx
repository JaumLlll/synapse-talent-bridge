import { useState, useEffect } from "react";
import logoDatabridge from "@/assets/logo-databridge.jpeg";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Empresas", href: "#empresas" },
  { label: "Jovens", href: "#jovens" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contato", href: "#contato" },
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
        scrolled ? "glass-strong shadow-lg" : "bg-card/90 backdrop-blur-xl"
      } border-b border-border/50`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold text-gradient-primary tracking-tight">
          DataBridge
        </a>

        {/* Desktop — links horizontais independentes */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-3" asChild>
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground rounded-md hover:bg-muted/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong border-t border-border/50 px-4 pb-4 pt-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2" asChild>
            <a href="#contato" onClick={() => setOpen(false)}>Fale Conosco</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
