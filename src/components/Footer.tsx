const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="font-heading text-xl font-bold text-gradient-primary mb-2">DataBridge</p>
            <p className="text-muted-foreground text-sm">AI for All</p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {["Sobre", "Como Funciona", "Empresas", "Jovens", "Impacto", "Contato"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm text-right">
            © {new Date().getFullYear()} DataBridge. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
