const founders = [
  { initials: "JS", name: "Jackson Santos, CEO e cofundador.", desc: "Especialista em dados e finanças corporativas, com experiência em análise de requisitos." },
  { initials: "IT", name: "Israel Teixeira, CTO e cofundador.", desc: "Especialista em inteligência artificial e arquitetura de soluções." },
];

const About = () => (
  <section id="sobre" className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Quem somos</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Uma ponte entre <span className="text-gradient-hero">talento e oportunidade</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A DataBridge nasceu para levar a pequenos negócios a mesma tecnologia das grandes empresas,
          e para abrir as portas da inteligência artificial a jovens da periferia.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {founders.map((f) => (
          <div key={f.name} className="glass rounded-xl p-6 flex gap-4 items-start">
            {/* Foto real do fundador pendente */}
            <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-hero flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
              {f.initials}
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">{f.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
