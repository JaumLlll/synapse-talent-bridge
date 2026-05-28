import workersImage from "@/assets/how-it-works-workers.jpeg";

const steps = [
  {
    number: "01",
    title: "Jovens aprendem IA",
    description: "Jovens das periferias recebem formação prática em inteligência artificial e tecnologia.",
  },
  {
    number: "02",
    title: "Desafios reais",
    description: "Pequenas empresas apresentam seus desafios de negócio que podem ser resolvidos com tecnologia.",
  },
  {
    number: "03",
    title: "Soluções com IA",
    description: "Os jovens desenvolvem soluções de IA personalizadas para resolver os problemas das empresas.",
  },
  {
    number: "04",
    title: "Todos ganham",
    description: "Jovens ganham experiência e oportunidades. Empresas ganham inovação e competitividade.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Como funciona</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            O modelo <span className="text-gradient-hero">DataBridge</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              <div className="glass rounded-xl p-8 h-full hover:shadow-glow-secondary transition-all duration-500">
                <span className="text-5xl font-heading font-bold text-gradient-secondary opacity-30 block mb-4">
                  {step.number}
                </span>
                <div className="w-full aspect-square overflow-hidden rounded-lg mb-4 ring-2 ring-secondary/40">
                  <img
                    src={workersImage}
                    alt={`Imagem ilustrando ${step.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
