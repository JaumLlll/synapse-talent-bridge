import { MonitorSmartphone } from "lucide-react";

// Regra: só entra projeto real. Cada cliente novo vira um card; depoimento só com nome e autorização.
const projects = [
  { title: "Site DataBridge.", desc: "Site responsivo e moderno, desenvolvido pela nossa equipe." },
];

const Projects = () => (
  <section id="projetos" className="py-24 relative">
    <div className="absolute inset-0 bg-glow opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Projetos</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold">
          O que já <span className="text-gradient-hero">construímos</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="glass rounded-xl p-6">
            <MonitorSmartphone className="text-secondary mb-4" size={28} />
            <h3 className="font-heading font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-border p-6 flex items-center justify-center text-center">
          <p className="font-heading text-lg font-semibold text-gradient-primary">Seu negócio pode ser o próximo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
