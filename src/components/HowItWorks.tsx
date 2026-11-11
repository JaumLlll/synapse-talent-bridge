import { Search, Hammer, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Entender.", description: "Visitamos seu negócio, conversamos com você e descobrimos o que mais trava o seu dia a dia." },
  { icon: Hammer, number: "02", title: "Construir.", description: "Desenhamos e desenvolvemos a solução certa para a sua realidade, com IA quando fizer sentido." },
  { icon: PlayCircle, number: "03", title: "Praticar.", description: "Colocamos a solução para rodar no seu negócio, ajustamos junto com você e acompanhamos os primeiros resultados." },
  { icon: TrendingUp, number: "04", title: "Escalar.", description: "Com a solução funcionando, ajudamos seu negócio a crescer e a levar a tecnologia para outras áreas." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 relative">
    <div className="absolute inset-0 bg-glow opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Nosso método</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold">
          Entender, construir, praticar e <span className="text-gradient-hero">escalar</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.number} className="glass rounded-xl p-8 h-full hover:shadow-glow-secondary transition-all duration-500">
            <span className="text-5xl font-heading font-bold text-gradient-secondary opacity-40 block mb-4">{s.number}</span>
            <s.icon className="text-secondary mb-4" size={28} />
            <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
