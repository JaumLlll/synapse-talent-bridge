import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Aumente suas vendas", desc: "Soluções de IA que analisam dados e identificam oportunidades de crescimento." },
  { icon: BarChart3, title: "Dados inteligentes", desc: "Dashboards e relatórios automatizados para decisões mais rápidas e assertivas." },
  { icon: Zap, title: "Automatize processos", desc: "Reduza tarefas repetitivas e foque no que realmente importa para o seu negócio." },
  { icon: ShieldCheck, title: "Custo acessível", desc: "Tecnologia de ponta por uma fração do custo, com impacto social positivo." },
];

const ForBusiness = () => {
  return (
    <section id="empresas" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-3 tracking-widest uppercase text-sm">Para Empresas</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Tecnologia que faz seu negócio{" "}
              <span className="text-gradient-primary">crescer</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Seu pequeno negócio merece acesso à mesma tecnologia das grandes empresas.
              Com a DataBridge, jovens talentos treinados em IA criam soluções sob medida
              para os desafios do seu dia a dia.
            </p>
            <Button variant="hero" size="lg" className="text-base" asChild>
              <a href="#contato">
                Quero inovar meu negócio <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
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
};

export default ForBusiness;
