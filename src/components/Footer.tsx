import logoDatabridge from "@/assets/logo-databridge.jpeg";
import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={logoDatabridge} alt="DataBridge Logo" className="h-9 w-9 rounded-full object-cover" />
              <p className="font-heading text-xl font-bold text-gradient-primary">DataBridge</p>
            </div>
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

          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} DataBridge. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
