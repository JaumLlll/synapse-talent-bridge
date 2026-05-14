import logoDatabridge from "@/assets/logo-databridge.jpeg";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.158-.673.158-1.017 0-.058-.015-.13-.015-.187-.04-.124-2.522-1.34-2.683-1.49zm-2.93 7.91c-1.32 0-2.6-.366-3.747-1.032l-3.917 1.103L9.66 21.5a7.733 7.733 0 0 1-1.215-4.13c0-4.297 3.5-7.797 7.797-7.797s7.797 3.5 7.797 7.797-3.5 7.745-7.86 7.745zm0-17.156c-5.187 0-9.41 4.223-9.41 9.41 0 1.65.43 3.27 1.246 4.696L5 28l6.04-1.97a9.493 9.493 0 0 0 4.46 1.18h.014c5.186 0 9.41-4.222 9.41-9.41 0-2.52-1.005-4.92-2.794-6.71a9.328 9.328 0 0 0-6.717-2.785z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={logoDatabridge} alt="DataBridge Logo" className="h-9 w-9 rounded-full object-cover" />
              <p className="font-heading text-xl font-bold text-gradient-primary">DataBridge</p>
            </div>
            <p className="text-muted-foreground text-sm">AI for All</p>
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
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-white hover:bg-[#25D366] transition-colors">
                <WhatsAppIcon size={18} />
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
