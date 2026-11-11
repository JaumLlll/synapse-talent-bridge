import { Button } from "@/components/ui/button";
import { Ear, Puzzle, BadgeDollarSign, HeartHandshake, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const cards = [
  { icon: Ear, title: "Primeiro a escuta.", desc: "Visitamos seu negócio e entendemos como ele funciona de verdade." },
  { icon: Puzzle, title: "Solução sob medida.", desc: "Nada de pacote genérico. Criamos o que faz sentido para a sua realidade." },
  { icon: BadgeDollarSign, title: "Preço justo.", desc: "Tecnologia acessível, pensada para o tamanho do seu negócio." },
  { icon: HeartHandshake, title: "Acompanhamento de perto.", desc: "Ficamos junto até a solução funcionar no seu dia a dia." },
];

const ForBusiness = () => (
  <section id="por-que" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-medium mb-3 tracking-widest uppercase text-sm">Por que a DataBridge</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Não vendemos tecnologia pronta.{" "}
            <span className="text-gradient-primary">Resolvemos o seu problema.</span>
          </h2>
          <Button variant="hero" size="lg" className="text-base" asChild>
            <a href={whatsappLink("por que a DataBridge")} target="_blank" rel="noopener noreferrer">
              Agende uma conversa gratuita <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((b) => (
            <div key={b.title} className="glass rounded-xl p-6 hover:shadow-glow-primary transition-all duration-500 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
                <b.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
              </div>
              <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ForBusiness;
