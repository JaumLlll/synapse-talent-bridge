import { Target, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Propósito",
    description: "Democratizar o acesso à inteligência artificial, levando transformação a milhares de pessoas e empresas.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Social",
    description: "Unir aprendizado prático com desafios reais, criando valor para jovens e pequenos negócios simultaneamente.",
  },
  {
    icon: Globe,
    title: "Missão 2030",
    description: "Formar uma nova geração de especialistas em IA e transformar a realidade de milhares de empresas até 2030.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Sobre nós</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Uma ponte entre <span className="text-gradient-primary">talento e oportunidade</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A inteligência artificial está mudando o mundo, mas essa transformação ainda não é acessível para todos.
            Muitos pequenos negócios enfrentam barreiras para adotar tecnologia, enquanto milhares de jovens
            talentosos nunca tiveram a oportunidade de aprender IA na prática.
            A DataBridge nasceu para mudar essa realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glass rounded-xl p-8 hover:shadow-glow-primary transition-all duration-500 group"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <v.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
