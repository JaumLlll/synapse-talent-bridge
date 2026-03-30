import { Quote } from "lucide-react";

const metrics = [
  { value: "500+", label: "Jovens formados" },
  { value: "120+", label: "Empresas atendidas" },
  { value: "95%", label: "Taxa de satisfação" },
  { value: "30+", label: "Cidades alcançadas" },
];

const testimonials = [
  {
    quote: "A DataBridge mudou a realidade do meu negócio. Nunca imaginei ter acesso a tecnologia de IA a um custo tão acessível.",
    name: "Maria Silva",
    role: "Dona de restaurante",
  },
  {
    quote: "Aprendi mais em 3 meses com a DataBridge do que em anos estudando sozinho. Hoje trabalho com dados e IA.",
    name: "Lucas Santos",
    role: "Jovem formado pela DataBridge",
  },
  {
    quote: "O impacto social e econômico que a DataBridge gera é impressionante. É o futuro da educação em tecnologia.",
    name: "Dr. Ana Costa",
    role: "Parceira institucional",
  },
];

const Impact = () => {
  return (
    <section id="impacto" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-widest uppercase text-sm">Impacto</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Transformação em <span className="text-gradient-primary">números</span>
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl p-8 text-center hover:shadow-glow-primary transition-all duration-500">
              <p className="text-4xl md:text-5xl font-heading font-bold text-gradient-hero mb-2">{m.value}</p>
              <p className="text-muted-foreground text-sm">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-xl p-8 hover:shadow-glow-secondary transition-all duration-500">
              <Quote className="text-secondary/40 mb-4" size={32} />
              <p className="text-foreground/90 mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
