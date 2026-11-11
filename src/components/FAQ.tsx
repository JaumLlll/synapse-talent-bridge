import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso entender de tecnologia?", a: "Não. Você conhece o seu negócio, e a parte técnica fica com a gente. Explicamos tudo de um jeito simples e ficamos por perto." },
  { q: "Quanto custa?", a: "Depende do que o seu negócio precisa. A primeira conversa é gratuita, e a proposta vem com valor e prazo claros antes de qualquer compromisso. Sites a partir de R$ [valor]." },
  { q: "E se não funcionar para mim?", a: "A gente coloca a solução em prática junto com você e ajusta até ela funcionar no seu dia a dia." },
  { q: "Meus dados e os dos meus clientes ficam seguros?", a: "Sim. Seguimos a LGPD, usamos só o necessário para a solução funcionar e não compartilhamos seus dados com terceiros." },
  { q: "Quem faz o trabalho?", a: "Nossa equipe, com jovens em formação em IA, sempre com supervisão direta dos fundadores." },
  { q: "Quanto tempo leva?", a: "Depende da solução. Um site, por exemplo, fica pronto em [prazo]. Na proposta você recebe o prazo exato." },
];

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12">
        Perguntas <span className="text-gradient-primary">frequentes</span>
      </h2>
      <Accordion type="single" collapsible className="glass rounded-xl px-6">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-heading">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
