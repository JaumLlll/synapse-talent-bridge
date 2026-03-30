import { Button } from "@/components/ui/button";
import { Brain, Rocket, Users, Award, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Aprenda IA na prática", desc: "Formação hands-on com projetos reais, não apenas teoria." },
  { icon: Rocket, title: "Lance sua carreira", desc: "Construa um portfólio com soluções reais de inteligência artificial." },
  { icon: Users, title: "Comunidade e mentoria", desc: "Conecte-se com outros jovens e mentores do mercado de tecnologia." },
  { icon: Award, title: "Certificação", desc: "Receba certificados reconhecidos e destaque-se no mercado de trabalho." },
];

const ForYouth = () => {
  return (
    <section id="jovens" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="glass rounded-xl p-6 hover:shadow-glow-secondary transition-all duration-500 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-gradient-secondary transition-all">
                  <b.icon className="text-secondary group-hover:text-secondary-foreground transition-colors" size={20} />
                </div>
                <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Para Jovens</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Seu futuro na{" "}
              <span className="text-gradient-hero">inteligência artificial</span>{" "}
              começa aqui
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Você não precisa de experiência prévia. A DataBridge te ensina inteligência
              artificial na prática, resolvendo problemas reais de empresas. Aprenda,
              construa seu portfólio e transforme seu futuro.
            </p>
            <Button variant="hero-outline" size="lg" className="text-base" asChild>
              <a href="#contato">
                Quero aprender IA <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouth;
