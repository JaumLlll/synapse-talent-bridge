import { Globe, MessageSquare, BarChart3, Sparkles } from "lucide-react";

const services = [
  { icon: Globe, title: "Site e presença digital.", desc: "Um site profissional para seu negócio ser encontrado e passar confiança. A partir de R$ [valor]." },
  { icon: MessageSquare, title: "Automação de atendimento.", desc: "Um assistente que responde seus clientes no WhatsApp, até fora do horário." },
  { icon: BarChart3, title: "Controle e relatórios.", desc: "Saiba de forma simples se o mês foi bom, o que vende mais e onde está perdendo dinheiro." },
  { icon: Sparkles, title: "Soluções com IA sob medida.", desc: "Quando o problema pede algo mais inteligente, criamos a ferramenta certa." },
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
          <div key={s.title} className="glass rounded-xl p-6 hover:shadow-glow-primary transition-all duration-500">
            <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <s.icon className="text-primary-foreground" size={22} />
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
