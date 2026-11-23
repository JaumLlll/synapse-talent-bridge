import step1 from "@/assets/step-1-youth-learning.jpg";
import step2 from "@/assets/step-2-business-challenges.jpg";
import step3 from "@/assets/step-3-ai-solutions.jpg";
import step4 from "@/assets/step-4-everyone-wins.jpg";

const steps = [
  {
    image: step1,
    number: "01",
    title: "Entender.",
    description: "Visitamos seu negócio, conversamos com você e descobrimos o que mais trava o seu dia a dia.",
  },
  {
    image: step2,
    number: "02",
    title: "Construir.",
    description: "Desenhamos e desenvolvemos a solução certa para a sua realidade, com IA quando fizer sentido.",
  },
  {
    image: step3,
    number: "03",
    title: "Praticar.",
    description: "Colocamos a solução para rodar no seu negócio, ajustamos junto com você e acompanhamos os primeiros resultados.",
  },
  {
    image: step4,
    number: "04",
    title: "Escalar.",
    description: "Com a solução funcionando, ajudamos seu negócio a crescer e a levar a tecnologia para outras áreas.",
  },
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
          <div
            key={s.number}
            className="glass rounded-xl p-6 h-full hover:shadow-glow-secondary transition-all duration-500"
          >
            <div className="overflow-hidden rounded-lg mb-5">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <span className="text-4xl font-heading font-bold text-gradient-secondary opacity-40 block mb-3">
              {s.number}
            </span>
            <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
