import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const FinalCTA = () => (
  <section id="contato" className="py-24 relative">
    <div className="absolute inset-0 bg-glow opacity-40" />
    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
        Vamos conversar sobre o <span className="text-gradient-hero">seu negócio?</span>
      </h2>
      <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
        A primeira conversa é gratuita e sem compromisso. Você conta sua rotina, e a gente mostra o que
        a tecnologia pode fazer por você.
      </p>
      <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
        <a href={whatsappLink("chamada final")} target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp <ArrowRight className="ml-2" size={18} />
        </a>
      </Button>
    </div>
  </section>
);

export default FinalCTA;
