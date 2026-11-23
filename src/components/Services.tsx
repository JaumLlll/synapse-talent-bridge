import service1 from "@/assets/service-1-website.jpg";
import service2 from "@/assets/service-2-whatsapp.jpg";
import service3 from "@/assets/service-3-reports.jpg";
import service4 from "@/assets/service-4-ai.jpg";

const services = [
  { image: service1, title: "Site e presença digital.", desc: "Um site profissional para seu negócio ser encontrado e passar confiança. A partir de R$ [valor]." },
  { image: service2, title: "Automação de atendimento.", desc: "Um assistente que responde seus clientes no WhatsApp, até fora do horário." },
  { image: service3, title: "Controle e relatórios.", desc: "Saiba de forma simples se o mês foi bom, o que vende mais e onde está perdendo dinheiro." },
  { image: service4, title: "Soluções com IA sob medida.", desc: "Quando o problema pede algo mais inteligente, criamos a ferramenta certa." },
];

const Services = () => (
  <section id="servicos" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-3 tracking-widest uppercase text-sm">Serviços</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold">
          Como a tecnologia pode ajudar o <span className="text-gradient-primary">seu negócio</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="glass rounded-xl p-5 hover:shadow-glow-primary transition-all duration-500 group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
